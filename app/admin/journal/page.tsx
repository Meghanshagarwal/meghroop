'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { Plus, Pencil, Trash2, Loader2, ExternalLink } from 'lucide-react'
import type { JournalRow } from '@/lib/supabase'

export default function JournalAdminPage() {
  const [articles, setArticles] = useState<JournalRow[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/journal')
    const data = await res.json()
    setArticles(Array.isArray(data) ? data : [])
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this article? This cannot be undone.')) return
    setDeleting(id)
    await fetch(`/api/admin/journal/${id}`, { method: 'DELETE' })
    await load()
    setDeleting(null)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading font-bold text-2xl text-white">Journal</h1>
          <p className="text-sm text-gray-500 mt-1">
            {articles.length} article{articles.length !== 1 ? 's' : ''} · auto-published + manual
          </p>
        </div>
        <Link
          href="/admin/journal/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
        >
          <Plus size={15} />
          New Article
        </Link>
      </div>

      <p className="text-xs text-gray-600 mb-6">
        Note: the 4 curated launch articles live in code (<code className="text-gray-500">lib/journal.ts</code>) and are not listed here. This manages auto-published &amp; manually-added articles.
      </p>

      {loading ? (
        <div className="flex items-center gap-2 text-gray-500">
          <Loader2 size={16} className="animate-spin" /> Loading…
        </div>
      ) : articles.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/[0.08] rounded-2xl">
          <p className="text-gray-500 text-sm mb-4">No articles yet</p>
          <Link href="/admin/journal/new" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            + Write your first article
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {articles.map((a) => (
            <div
              key={a.id}
              className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="font-medium text-white text-sm truncate">{a.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {a.category} · {a.date} · {a.read_time}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`/journal/${a.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  aria-label="View"
                >
                  <ExternalLink size={13} />
                </a>
                <Link
                  href={`/admin/journal/${a.id}/edit`}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  aria-label="Edit"
                >
                  <Pencil size={13} />
                </Link>
                <button
                  onClick={() => handleDelete(a.id)}
                  disabled={deleting === a.id}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] text-gray-400 hover:text-red-400 hover:bg-red-500/[0.06] hover:border-red-500/20 transition-colors"
                  aria-label="Delete"
                >
                  {deleting === a.id ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
