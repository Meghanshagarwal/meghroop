import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { randomUUID } from 'crypto'

export const dynamic = 'force-dynamic'

const SETTINGS_KEY = 'n8n_workflows'

type Workflow = {
  id: string
  name: string
  category: string
  description: string
  json: string
  createdAt: string
}

async function getAll(): Promise<Workflow[]> {
  const db = getSupabase()
  const { data } = await db.from('settings').select('value').eq('key', SETTINGS_KEY).single()
  if (!data) return []
  try { return JSON.parse(data.value) } catch { return [] }
}

async function saveAll(workflows: Workflow[]) {
  const db = getSupabase()
  await db.from('settings').upsert({ key: SETTINGS_KEY, value: JSON.stringify(workflows) }, { onConflict: 'key' })
}

export async function GET() {
  return NextResponse.json(await getAll())
}

export async function POST(req: Request) {
  try {
    const { name, category, description, json } = await req.json()
    if (!name?.trim() || !json?.trim()) {
      return NextResponse.json({ error: 'Name and JSON content are required' }, { status: 400 })
    }

    // Try parsing JSON to ensure it is valid
    try {
      JSON.parse(json)
    } catch {
      return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 })
    }

    const workflows = await getAll()
    const newWorkflow: Workflow = {
      id: randomUUID(),
      name: name.trim(),
      category: (category || 'Other').trim(),
      description: (description || '').trim(),
      json: json.trim(),
      createdAt: new Date().toISOString()
    }
    workflows.push(newWorkflow)
    await saveAll(workflows)
    return NextResponse.json({ ok: true, workflow: newWorkflow })
  } catch (err) {
    console.error('[Workflows POST] Error:', err)
    return NextResponse.json({ error: 'Failed to create workflow' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
  const workflows = await getAll()
  await saveAll(workflows.filter((w) => w.id !== id))
  return NextResponse.json({ ok: true })
}

export async function PATCH(req: Request) {
  try {
    const { id, name, category, description, json } = await req.json()
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
    
    if (json !== undefined) {
      try {
        JSON.parse(json)
      } catch {
        return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 })
      }
    }

    const workflows = await getAll()
    const idx = workflows.findIndex((w) => w.id === id)
    if (idx === -1) return NextResponse.json({ error: 'not found' }, { status: 404 })
    
    workflows[idx] = {
      ...workflows[idx],
      name: name ?? workflows[idx].name,
      category: category ?? workflows[idx].category,
      description: description ?? workflows[idx].description,
      json: json ?? workflows[idx].json,
    }
    
    await saveAll(workflows)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Workflows PATCH] Error:', err)
    return NextResponse.json({ error: 'Failed to update workflow' }, { status: 500 })
  }
}
