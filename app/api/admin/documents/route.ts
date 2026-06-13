import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { randomUUID } from 'crypto'

export const dynamic = 'force-dynamic'

const SETTINGS_KEY = 'company_documents_meta'
const BUCKET_NAME = 'company-documents'

type DocumentMetadata = {
  id: string
  name: string
  fileType: string
  fileSize: number
  storagePath: string
  category: string
  notes?: string
  uploadedAt: string
}

async function getMetaList(): Promise<DocumentMetadata[]> {
  const db = getSupabase()
  const { data } = await db.from('settings').select('value').eq('key', SETTINGS_KEY).single()
  if (!data) return []
  try { return JSON.parse(data.value) } catch { return [] }
}

async function saveMetaList(list: DocumentMetadata[]) {
  const db = getSupabase()
  await db.from('settings').upsert({ key: SETTINGS_KEY, value: JSON.stringify(list) }, { onConflict: 'key' })
}

export async function GET() {
  try {
    return NextResponse.json(await getMetaList())
  } catch {
    return NextResponse.json({ error: 'Failed to fetch documents list' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File | null
    const category = formData.get('category') as string | null
    const notes = formData.get('notes') as string | null

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const supabase = getSupabase()

    // Ensure bucket exists
    try {
      const { data: buckets } = await supabase.storage.listBuckets()
      if (!buckets?.some(b => b.id === BUCKET_NAME)) {
        await supabase.storage.createBucket(BUCKET_NAME, {
          public: false,
          fileSizeLimit: 52428800 // 50MB
        })
      }
    } catch (bucketErr) {
      console.error('[Documents API] Error checking/creating storage bucket:', bucketErr)
    }

    const uniqueId = randomUUID()
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const storagePath = `${uniqueId}_${sanitizedName}`

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, buffer, {
        contentType: file.type,
        upsert: true
      })

    if (uploadError) {
      return NextResponse.json({ error: `Upload failed: ${uploadError.message}` }, { status: 500 })
    }

    // Save metadata
    const list = await getMetaList()
    const newDoc: DocumentMetadata = {
      id: uniqueId,
      name: file.name,
      fileType: file.type,
      fileSize: file.size,
      storagePath,
      category: category || 'Other',
      notes: notes || undefined,
      uploadedAt: new Date().toISOString()
    }
    list.push(newDoc)
    await saveMetaList(list)

    return NextResponse.json({ ok: true, document: newDoc })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Internal server error: ${msg}` }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    const list = await getMetaList()
    const doc = list.find(d => d.id === id)
    if (!doc) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    const supabase = getSupabase()

    // Delete from Storage
    const { error: storageError } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([doc.storagePath])

    if (storageError) {
      console.error('[Documents API] Storage removal error:', storageError)
    }

    // Delete metadata
    const updatedList = list.filter(d => d.id !== id)
    await saveMetaList(updatedList)

    return NextResponse.json({ ok: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Internal server error: ${msg}` }, { status: 500 })
  }
}
