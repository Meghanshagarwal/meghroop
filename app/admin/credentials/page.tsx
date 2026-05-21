'use client'

import { useEffect, useState, useCallback } from 'react'
import { Plus, Copy, Trash2, Check, Eye, EyeOff, Loader2, KeyRound, Pencil, X } from 'lucide-react'

type Credential = {
  id: string
  label: string
  category: string
  value: string
  createdAt: string
}

const inputClass =
  'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all font-mono'

const selectClass =
  'w-full bg-[#1a1a1a] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all cursor-pointer'

const CATEGORIES = ['General', 'GitHub', 'Facebook', 'Instagram', 'Google', 'LinkedIn', 'n8n', 'Supabase', 'Other']

export default function CredentialsPage() {
  const [creds, setCreds] = useState<Credential[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)
  const [visible, setVisible] = useState<Set<string>>(new Set())
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ label: '', category: '', value: '' })

  // Add form
  const [form, setForm] = useState({ label: '', category: 'General', value: '' })
  const [showAdd, setShowAdd] = useState(false)

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/credentials')
    const data = await res.json()
    setCreds(Array.isArray(data) ? data : [])
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.label.trim() || !form.value.trim()) return
    setSaving(true)
    await fetch('/api/admin/credentials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setForm({ label: '', category: 'General', value: '' })
    setShowAdd(false)
    await load()
    setSaving(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this credential?')) return
    setDeleting(id)
    await fetch(`/api/admin/credentials?id=${id}`, { method: 'DELETE' })
    await load()
    setDeleting(null)
  }

  const handleCopy = async (id: string, value: string) => {
    await navigator.clipboard.writeText(value)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const toggleVisible = (id: string) => {
    setVisible((prev) => {
      const next = new Set(prev)
      if (next.has(id)) { next.delete(id) } else { next.add(id) }
      return next
    })
  }

  const startEdit = (c: Credential) => {
    setEditingId(c.id)
    setEditForm({ label: c.label, category: c.category, value: c.value })
  }

  const handleEditSave = async (id: string) => {
    await fetch('/api/admin/credentials', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...editForm }),
    })
    setEditingId(null)
    await load()
  }

  // Group by category
  const grouped = creds.reduce<Record<string, Credential[]>>((acc, c) => {
    const cat = c.category || 'General'
    acc[cat] = acc[cat] ? [...acc[cat], c] : [c]
    return acc
  }, {})

  const maskValue = (val: string) => {
    if (val.length <= 8) return '•'.repeat(val.length)
    return val.slice(0, 4) + '•'.repeat(Math.min(val.length - 8, 24)) + val.slice(-4)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading font-bold text-2xl text-white">Credentials</h1>
          <p className="text-sm text-gray-500 mt-1">{creds.length} saved token{creds.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={() => setShowAdd((v) => !v)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
        >
          <Plus size={15} />
          Add Credential
        </button>
      </div>

      {/* Add form */}
      {showAdd && (
        <form onSubmit={handleAdd} className="mb-8 p-5 rounded-2xl border border-purple-500/20 bg-purple-500/[0.04]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-white">New Credential</span>
            <button type="button" onClick={() => setShowAdd(false)} className="text-gray-500 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Label</label>
              <input
                value={form.label}
                onChange={(e) => setForm((p) => ({ ...p, label: e.target.value }))}
                placeholder="e.g. GitHub Personal Token"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                className={selectClass}
              >
                {CATEGORIES.map((c) => <option key={c} value={c} className="bg-[#1a1a1a] text-white">{c}</option>)}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-xs text-gray-500 mb-1.5 block">Token / Value</label>
            <input
              value={form.value}
              onChange={(e) => setForm((p) => ({ ...p, value: e.target.value }))}
              placeholder="Paste token or secret here"
              className={inputClass}
              required
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors disabled:opacity-60"
          >
            {saving ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}
            {saving ? 'Saving…' : 'Save Credential'}
          </button>
        </form>
      )}

      {loading ? (
        <div className="flex items-center gap-2 text-gray-500">
          <Loader2 size={16} className="animate-spin" /> Loading…
        </div>
      ) : creds.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/[0.08] rounded-2xl">
          <KeyRound size={32} className="mx-auto mb-3 text-gray-700" />
          <p className="text-gray-500 text-sm mb-4">No credentials saved yet</p>
          <button onClick={() => setShowAdd(true)} className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            + Add your first credential
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{category}</span>
                <div className="flex-1 h-px bg-white/[0.05]" />
                <span className="text-xs text-gray-700">{items.length}</span>
              </div>
              <div className="space-y-2">
                {items.map((c) => (
                  <div key={c.id} className="rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                    {editingId === c.id ? (
                      <div className="p-4 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            value={editForm.label}
                            onChange={(e) => setEditForm((p) => ({ ...p, label: e.target.value }))}
                            className={inputClass}
                            placeholder="Label"
                          />
                          <select
                            value={editForm.category}
                            onChange={(e) => setEditForm((p) => ({ ...p, category: e.target.value }))}
                            className={inputClass + ' cursor-pointer'}
                          >
                            {CATEGORIES.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                          </select>
                        </div>
                        <input
                          value={editForm.value}
                          onChange={(e) => setEditForm((p) => ({ ...p, value: e.target.value }))}
                          className={inputClass}
                          placeholder="Token / Value"
                        />
                        <div className="flex gap-2">
                          <button onClick={() => handleEditSave(c.id)} className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors">Save</button>
                          <button onClick={() => setEditingId(null)} className="px-4 py-2 rounded-xl border border-white/[0.08] text-gray-400 hover:text-white text-sm transition-colors">Cancel</button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3">
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white truncate">{c.label}</div>
                          <div className="text-xs font-mono text-gray-500 mt-0.5 truncate">
                            {visible.has(c.id) ? c.value : maskValue(c.value)}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <button
                            onClick={() => toggleVisible(c.id)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] text-gray-500 hover:text-white hover:bg-white/[0.06] transition-colors"
                            title={visible.has(c.id) ? 'Hide' : 'Show'}
                          >
                            {visible.has(c.id) ? <EyeOff size={13} /> : <Eye size={13} />}
                          </button>
                          <button
                            onClick={() => handleCopy(c.id, c.value)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/[0.06] hover:border-emerald-500/20 transition-colors"
                            title="Copy"
                          >
                            {copied === c.id ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                          </button>
                          <button
                            onClick={() => startEdit(c)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] text-gray-500 hover:text-white hover:bg-white/[0.06] transition-colors"
                            title="Edit"
                          >
                            <Pencil size={13} />
                          </button>
                          <button
                            onClick={() => handleDelete(c.id)}
                            disabled={deleting === c.id}
                            className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] text-gray-500 hover:text-red-400 hover:bg-red-500/[0.06] hover:border-red-500/20 transition-colors"
                            title="Delete"
                          >
                            {deleting === c.id ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
