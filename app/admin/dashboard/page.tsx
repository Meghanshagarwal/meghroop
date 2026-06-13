'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FolderKanban, Settings, Plus, BarChart3, ListTodo, FolderClosed } from 'lucide-react'

export default function Dashboard() {
  const [projectCount, setProjectCount] = useState<number | null>(null)
  const [analyticsConfigured, setAnalyticsConfigured] = useState(0)
  const [activeTasksCount, setActiveTasksCount] = useState<number | null>(null)
  const [documentsCount, setDocumentsCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/admin/projects').then((r) => r.json()).then((data) => {
      setProjectCount(Array.isArray(data) ? data.length : 0)
    })
    fetch('/api/admin/settings').then((r) => r.json()).then((data) => {
      const ids = ['ga_id', 'meta_pixel_id', 'clarity_id']
      setAnalyticsConfigured(ids.filter((k) => data[k]?.trim()).length)
    })
    fetch('/api/admin/tasks').then((r) => r.json()).then((data) => {
      if (Array.isArray(data)) {
        const active = data.filter((t: { status?: string }) => t.status !== 'completed').length
        setActiveTasksCount(active)
      } else {
        setActiveTasksCount(0)
      }
    }).catch(() => {
      setActiveTasksCount(0)
    })
    fetch('/api/admin/documents').then((r) => r.json()).then((data) => {
      setDocumentsCount(Array.isArray(data) ? data.length : 0)
    }).catch(() => {
      setDocumentsCount(0)
    })
  }, [])

  const stats = [
    { label: 'Projects', value: projectCount ?? '—', icon: FolderKanban, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
    { label: 'Active Tasks', value: activeTasksCount ?? '—', icon: ListTodo, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
    { label: 'Vault Documents', value: documentsCount ?? '—', icon: FolderClosed, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
    { label: 'Analytics Configured', value: `${analyticsConfigured} / 3`, icon: BarChart3, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-white">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your portfolio and site settings</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className={`flex items-center gap-4 p-5 rounded-2xl border ${bg} bg-white/[0.02]`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg}`}>
              <Icon size={18} className={color} />
            </div>
            <div>
              <div className="font-heading font-bold text-2xl text-white">{String(value)}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <h2 className="font-heading font-semibold text-sm text-gray-400 uppercase tracking-widest mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <Link href="/admin/projects/new" className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
          <Plus size={16} className="text-purple-400" />
          <span className="text-sm text-white font-medium">Add Project</span>
        </Link>
        <Link href="/admin/projects" className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
          <FolderKanban size={16} className="text-blue-400" />
          <span className="text-sm text-white font-medium">Manage Projects</span>
        </Link>
        <Link href="/admin/tasks" className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
          <ListTodo size={16} className="text-indigo-400" />
          <span className="text-sm text-white font-medium">Task Manager</span>
        </Link>
        <Link href="/admin/documents" className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
          <FolderClosed size={16} className="text-amber-400" />
          <span className="text-sm text-white font-medium">Document Vault</span>
        </Link>
        <Link href="/admin/settings" className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
          <Settings size={16} className="text-emerald-400" />
          <span className="text-sm text-white font-medium">Site Settings</span>
        </Link>
      </div>
    </div>
  )
}
