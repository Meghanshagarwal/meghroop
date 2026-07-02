import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { randomUUID } from 'crypto'
import { encryptSecret, decryptSecret } from '@/lib/crypto'

export const dynamic = 'force-dynamic'

const SETTINGS_KEY = 'credentials'

type Credential = {
  id: string
  label: string
  category: string
  value: string
  url?: string
  username?: string
  password?: string
  clientId?: string
  clientSecret?: string
  hostingProvider?: string
  domainRegistrar?: string
  associatedDomain?: string
  notes?: string
  createdAt: string
}

async function getAll(): Promise<Credential[]> {
  const db = getSupabase()
  const { data } = await db.from('settings').select('value').eq('key', SETTINGS_KEY).single()
  if (!data) return []
  // Stored value is AES-256-GCM encrypted; decryptSecret() transparently passes
  // through any legacy plaintext rows written before encryption was added.
  try { return JSON.parse(decryptSecret(data.value)) } catch { return [] }
}

async function saveAll(creds: Credential[]) {
  const db = getSupabase()
  // Encrypt the whole vault at rest so a Supabase dump never leaks stored
  // passwords / client secrets in plain text.
  const value = encryptSecret(JSON.stringify(creds))
  await db.from('settings').upsert({ key: SETTINGS_KEY, value }, { onConflict: 'key' })
}

export async function GET() {
  return NextResponse.json(await getAll())
}

export async function POST(req: Request) {
  const { 
    label, 
    category, 
    value, 
    url, 
    username, 
    password, 
    clientId, 
    clientSecret,
    hostingProvider,
    domainRegistrar,
    associatedDomain,
    notes
  } = await req.json()
  
  const hasValue = value?.trim() || username?.trim() || password?.trim() || clientId?.trim() || clientSecret?.trim() || hostingProvider?.trim() || domainRegistrar?.trim() || associatedDomain?.trim() || notes?.trim()
  if (!label?.trim() || !hasValue) {
    return NextResponse.json({ error: 'label and at least one credential field required' }, { status: 400 })
  }
  const creds = await getAll()
  creds.push({
    id: randomUUID(),
    label: label.trim(),
    category: (category || 'General').trim(),
    value: (value || '').trim(),
    url: url?.trim() || undefined,
    username: username?.trim() || undefined,
    password: password?.trim() || undefined,
    clientId: clientId?.trim() || undefined,
    clientSecret: clientSecret?.trim() || undefined,
    hostingProvider: hostingProvider?.trim() || undefined,
    domainRegistrar: domainRegistrar?.trim() || undefined,
    associatedDomain: associatedDomain?.trim() || undefined,
    notes: notes?.trim() || undefined,
    createdAt: new Date().toISOString()
  })
  await saveAll(creds)
  return NextResponse.json({ ok: true })
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
  const creds = await getAll()
  await saveAll(creds.filter((c) => c.id !== id))
  return NextResponse.json({ ok: true })
}

export async function PATCH(req: Request) {
  const { 
    id, 
    label, 
    category, 
    value, 
    url, 
    username, 
    password, 
    clientId, 
    clientSecret,
    hostingProvider,
    domainRegistrar,
    associatedDomain,
    notes
  } = await req.json()
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
  const creds = await getAll()
  const idx = creds.findIndex((c) => c.id === id)
  if (idx === -1) return NextResponse.json({ error: 'not found' }, { status: 404 })
  
  creds[idx] = {
    ...creds[idx],
    label: label ?? creds[idx].label,
    category: category ?? creds[idx].category,
    value: value !== undefined ? value.trim() : creds[idx].value,
    url: url !== undefined ? (url.trim() || undefined) : creds[idx].url,
    username: username !== undefined ? (username.trim() || undefined) : creds[idx].username,
    password: password !== undefined ? (password.trim() || undefined) : creds[idx].password,
    clientId: clientId !== undefined ? (clientId.trim() || undefined) : creds[idx].clientId,
    clientSecret: clientSecret !== undefined ? (clientSecret.trim() || undefined) : creds[idx].clientSecret,
    hostingProvider: hostingProvider !== undefined ? (hostingProvider.trim() || undefined) : creds[idx].hostingProvider,
    domainRegistrar: domainRegistrar !== undefined ? (domainRegistrar.trim() || undefined) : creds[idx].domainRegistrar,
    associatedDomain: associatedDomain !== undefined ? (associatedDomain.trim() || undefined) : creds[idx].associatedDomain,
    notes: notes !== undefined ? (notes.trim() || undefined) : creds[idx].notes,
  }
  
  await saveAll(creds)
  return NextResponse.json({ ok: true })
}

