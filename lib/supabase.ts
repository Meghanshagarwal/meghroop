import { createClient } from '@supabase/supabase-js'

export function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export type Project = {
  id: string
  title: string
  description: string
  gradient: string
  image: string
  tags: string[]
  live_url: string
  github_url: string
  year: string
  category: string
  display_order: number
  created_at: string
}

export type Setting = {
  key: string
  value: string
}

export const GRADIENT_PRESETS = [
  { label: 'Purple / Blue',   value: 'from-purple-600 via-violet-600 to-blue-600' },
  { label: 'Blue / Cyan',     value: 'from-blue-600 via-cyan-600 to-teal-600' },
  { label: 'Amber / Orange',  value: 'from-amber-600 via-orange-600 to-red-600' },
  { label: 'Emerald / Green', value: 'from-emerald-600 via-green-600 to-teal-600' },
  { label: 'Rose / Pink',     value: 'from-rose-600 via-pink-600 to-purple-600' },
  { label: 'Indigo / Pink',   value: 'from-indigo-600 via-purple-600 to-pink-600' },
]
