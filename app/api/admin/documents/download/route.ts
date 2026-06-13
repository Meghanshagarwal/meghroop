import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const SETTINGS_KEY = 'company_documents_meta'
const BUCKET_NAME = 'company-documents'

type DocumentMetadata = {
  id: string
  name: string
  fileType: string
  storagePath: string
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 })
    }

    const db = getSupabase()
    
    // Fetch metadata list to verify access and get filename & content-type
    const { data: metaRow } = await db.from('settings').select('value').eq('key', SETTINGS_KEY).single()
    if (!metaRow) {
      return NextResponse.json({ error: 'Metadata record not found' }, { status: 404 })
    }

    let list: DocumentMetadata[] = []
    try {
      list = JSON.parse(metaRow.value)
    } catch {
      return NextResponse.json({ error: 'Failed to parse metadata list' }, { status: 500 })
    }

    const doc = list.find(d => d.id === id)
    if (!doc) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    // Download from Supabase Storage
    const supabase = getSupabase()
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .download(doc.storagePath)

    if (error || !data) {
      return NextResponse.json({ error: `Failed to download file from storage: ${error?.message || 'Empty response'}` }, { status: 500 })
    }

    const arrayBuffer = await data.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Return binary response
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': doc.fileType,
        'Content-Disposition': `attachment; filename="${encodeURIComponent(doc.name)}"`,
        'Cache-Control': 'no-store, max-age=0'
      }
    })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Internal server error: ${msg}` }, { status: 500 })
  }
}
