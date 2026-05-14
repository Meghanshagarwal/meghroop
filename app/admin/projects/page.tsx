'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { Plus, Pencil, Trash2, ChevronUp, ChevronDown, Loader2 } from 'lucide-react'
import type { Project } from '@/lib/supabase'

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [reordering, setReordering] = useState<string | null>(null)

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/projects')
    const data = await res.json()
    setProjects(Array.isArray(data) ? data : [])
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this project?')) return
    setDeleting(id)
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' })
    await load()
    setDeleting(null)
  }

  const handleReorder = async (id: string, direction: 'up' | 'down') => {
    setReordering(id)
    await fetch(`/api/admin/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ direction }),
    })
    await load()
    setReordering(null)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading font-bold text-2xl text-white">Projects</h1>
          <p className="text-sm text-gray-500 mt-1">{projects.length} project{projects.length !== 1 ? 's' : ''}</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
        >
          <Plus size={15} />
          Add Project
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-gray-500">
          <Loader2 size={16} className="animate-spin" /> Loading…
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/[0.08] rounded-2xl">
          <p className="text-gray-500 text-sm mb-4">No projects yet</p>
          <Link href="/admin/projects/new" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            + Add your first project
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              {/* Color swatch */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex-shrink-0`} />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-white text-sm truncate">{project.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{project.category} · {project.year}</div>
              </div>

              {/* Tags preview */}
              <div className="hidden sm:flex gap-1.5 flex-shrink-0">
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-gray-400">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="text-[11px] text-gray-600">+{project.tags.length - 2}</span>
                )}
              </div>

              {/* Reorder */}
              <div className="flex flex-col gap-0.5 flex-shrink-0">
                <button
                  onClick={() => handleReorder(project.id, 'up')}
                  disabled={idx === 0 || reordering === project.id}
                  className="w-6 h-5 rounded flex items-center justify-center text-gray-600 hover:text-white disabled:opacity-20 transition-colors"
                  aria-label="Move up"
                >
                  <ChevronUp size={13} />
                </button>
                <button
                  onClick={() => handleReorder(project.id, 'down')}
                  disabled={idx === projects.length - 1 || reordering === project.id}
                  className="w-6 h-5 rounded flex items-center justify-center text-gray-600 hover:text-white disabled:opacity-20 transition-colors"
                  aria-label="Move down"
                >
                  <ChevronDown size={13} />
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link
                  href={`/admin/projects/${project.id}/edit`}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  aria-label="Edit"
                >
                  <Pencil size={13} />
                </Link>
                <button
                  onClick={() => handleDelete(project.id)}
                  disabled={deleting === project.id}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] text-gray-400 hover:text-red-400 hover:bg-red-500/[0.06] hover:border-red-500/20 transition-colors"
                  aria-label="Delete"
                >
                  {deleting === project.id ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
