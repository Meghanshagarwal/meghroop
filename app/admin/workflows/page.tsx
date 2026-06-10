'use client'

import { useEffect, useState, useCallback } from 'react'
import { Plus, Copy, Trash2, Check, Download, Loader2, Cpu, Pencil, X, Search, AlertCircle, CheckCircle2, Upload } from 'lucide-react'

type Workflow = {
  id: string
  name: string
  category: string
  description: string
  json: string
  createdAt: string
}

const inputClass =
  'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all font-mono'

const selectClass =
  'w-full bg-[#1a1a1a] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all cursor-pointer'

const CATEGORIES = ['Lead Router', 'Marketing & Ads', 'AI Orchestration', 'E-commerce & Shopify', 'Backups & DBs', 'Alerts & Comms', 'Other']

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [filterCategory, setFilterCategory] = useState('All')
  
  // Add form
  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({ name: '', category: 'Other', description: '', json: '' })
  const [validationResult, setValidationResult] = useState<{ isValid: boolean; nodeCount: number } | null>(null)
  
  // Edit form
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ name: '', category: '', description: '', json: '' })
  const [editValidationResult, setEditValidationResult] = useState<{ isValid: boolean; nodeCount: number } | null>(null)

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/workflows')
    const data = await res.json()
    setWorkflows(Array.isArray(data) ? data : [])
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  // Validate JSON in real-time
  const runValidation = (jsonStr: string, isEdit: boolean) => {
    if (!jsonStr.trim()) {
      if (isEdit) {
        setEditValidationResult(null)
      } else {
        setValidationResult(null)
      }
      return
    }
    try {
      const parsed = JSON.parse(jsonStr)
      const nodes = parsed.nodes || (Array.isArray(parsed) ? parsed : null)
      const nodeCount = Array.isArray(nodes) ? nodes.length : 0
      const result = { isValid: true, nodeCount }
      if (isEdit) {
        setEditValidationResult(result)
      } else {
        setValidationResult(result)
      }
    } catch {
      const result = { isValid: false, nodeCount: 0 }
      if (isEdit) {
        setEditValidationResult(result)
      } else {
        setValidationResult(result)
      }
    }
  }

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      if (isEdit) {
        setEditForm((p) => ({ ...p, json: text }))
        runValidation(text, true)
      } else {
        const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ')
        // Capitalize words
        const formattedName = cleanName.replace(/\b\w/g, (char) => char.toUpperCase())
        setForm((p) => ({
          ...p,
          name: p.name.trim() ? p.name : formattedName,
          json: text
        }))
        runValidation(text, false)
      }
    }
    reader.readAsText(file)
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.json.trim()) return
    
    // Final check
    try {
      JSON.parse(form.json)
    } catch {
      alert('Cannot save. The pasted content is not valid JSON.')
      return
    }

    setSaving(true)
    const res = await fetch('/api/admin/workflows', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setForm({ name: '', category: 'Other', description: '', json: '' })
      setValidationResult(null)
      setShowAdd(false)
      await load()
    } else {
      const err = await res.json()
      alert(err.error || 'Failed to save workflow.')
    }
    setSaving(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this workflow template?')) return
    setDeleting(id)
    await fetch(`/api/admin/workflows?id=${id}`, { method: 'DELETE' })
    await load()
    setDeleting(null)
  }

  const startEdit = (w: Workflow) => {
    setEditingId(w.id)
    setEditForm({ name: w.name, category: w.category, description: w.description, json: w.json })
    // Run validation immediately on edit start
    runValidation(w.json, true)
  }

  const handleEditSave = async (id: string) => {
    try {
      JSON.parse(editForm.json)
    } catch {
      alert('Cannot save. The pasted content is not valid JSON.')
      return
    }

    setSaving(true)
    const res = await fetch('/api/admin/workflows', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...editForm }),
    })

    if (res.ok) {
      setEditingId(null)
      setEditValidationResult(null)
      await load()
    } else {
      const err = await res.json()
      alert(err.error || 'Failed to update workflow.')
    }
    setSaving(false)
  }

  const handleCopy = async (id: string, value: string) => {
    await navigator.clipboard.writeText(value)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleDownload = (name: string, value: string) => {
    try {
      const blob = new Blob([value], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_workflow.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Download failed:', err)
    }
  }

  // Filter workflows
  const filtered = workflows.filter((w) => {
    const matchesSearch =
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = filterCategory === 'All' || w.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading font-bold text-2xl text-white">n8n Workflow Hub</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and store n8n automation templates</p>
        </div>
        <button
          onClick={() => setShowAdd((v) => !v)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
        >
          <Plus size={15} />
          Add Workflow
        </button>
      </div>

      {/* Add form */}
      {showAdd && (
        <form onSubmit={handleAdd} className="mb-8 p-6 rounded-2xl border border-purple-500/20 bg-purple-500/[0.04]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-white">New n8n Workflow Template</span>
            <button type="button" onClick={() => { setShowAdd(false); setValidationResult(null); }} className="text-gray-500 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Workflow Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="e.g. Lead Router to Slack"
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
            <label className="text-xs text-gray-500 mb-1.5 block">Description</label>
            <input
              value={form.description}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
              placeholder="Briefly describe what this automation workflow does..."
              className={inputClass}
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-3">
                <label className="text-xs text-gray-500 block">Workflow JSON</label>
                <label className="cursor-pointer text-xs text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1.5 transition-colors py-0.5 px-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20">
                  <Upload size={12} />
                  Upload JSON File
                  <input
                    type="file"
                    accept=".json"
                    onChange={(e) => handleFileUpload(e, false)}
                    className="hidden"
                  />
                </label>
              </div>
              {validationResult && (
                <div className="flex items-center gap-1 text-xs">
                  {validationResult.isValid ? (
                    <span className="text-emerald-400 flex items-center gap-1 font-medium">
                      <CheckCircle2 size={13} /> Valid n8n Workflow ({validationResult.nodeCount} nodes)
                    </span>
                  ) : (
                    <span className="text-red-400 flex items-center gap-1 font-medium">
                      <AlertCircle size={13} /> Invalid JSON format
                    </span>
                  )}
                </div>
              )}
            </div>
            <textarea
              value={form.json}
              onChange={(e) => {
                const val = e.target.value
                setForm((p) => ({ ...p, json: val }))
                runValidation(val, false)
              }}
              placeholder="Paste workflow JSON or upload a file using the button above..."
              rows={8}
              className={`${inputClass} font-mono resize-y`}
              required
            />
          </div>

          <button
            type="submit"
            disabled={saving || (validationResult !== null && !validationResult.isValid)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors disabled:opacity-50"
          >
            {saving ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}
            {saving ? 'Saving…' : 'Save Workflow'}
          </button>
        </form>
      )}

      {/* Filter and Search controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 text-gray-500" size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search workflows by name or description..."
            className={`${inputClass} pl-10`}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setFilterCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
              filterCategory === 'All'
                ? 'bg-purple-600/20 text-purple-300 border-purple-500/30'
                : 'text-gray-400 bg-white/[0.02] border-white/[0.04] hover:text-white'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
                filterCategory === cat
                  ? 'bg-purple-600/20 text-purple-300 border-purple-500/30'
                  : 'text-gray-400 bg-white/[0.02] border-white/[0.04] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main workflows list */}
      {loading ? (
        <div className="flex items-center gap-2 text-gray-500">
          <Loader2 size={16} className="animate-spin" /> Loading…
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/[0.08] rounded-2xl">
          <Cpu size={36} className="mx-auto mb-3 text-gray-700" />
          <p className="text-gray-500 text-sm mb-4">No workflows found matching criteria</p>
          <button onClick={() => setShowAdd(true)} className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            + Add your first workflow
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((w) => {
            let parsedNodes = 0
            try {
              const parsed = JSON.parse(w.json)
              parsedNodes = Array.isArray(parsed.nodes) ? parsed.nodes.length : 0
            } catch {}

            return (
              <div key={w.id} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col justify-between overflow-hidden">
                {editingId === w.id ? (
                  <div className="p-5 space-y-4 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Edit Workflow</span>
                      <button type="button" onClick={() => { setEditingId(null); setEditValidationResult(null); }} className="text-gray-500 hover:text-white">
                        <X size={15} />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] text-gray-500 mb-1 block">Workflow Name</label>
                        <input
                          value={editForm.name}
                          onChange={(e) => setEditForm((p) => ({ ...p, name: e.target.value }))}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 mb-1 block">Category</label>
                        <select
                          value={editForm.category}
                          onChange={(e) => setEditForm((p) => ({ ...p, category: e.target.value }))}
                          className={selectClass}
                        >
                          {CATEGORIES.map((cat) => <option key={cat} value={cat} className="bg-[#1a1a1a] text-white">{cat}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 mb-1 block">Description</label>
                        <input
                          value={editForm.description}
                          onChange={(e) => setEditForm((p) => ({ ...p, description: e.target.value }))}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <label className="text-[10px] text-gray-500 block">Workflow JSON</label>
                            <label className="cursor-pointer text-[10px] text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/15">
                              <Upload size={10} />
                              Upload
                              <input
                                type="file"
                                accept=".json"
                                onChange={(e) => handleFileUpload(e, true)}
                                className="hidden"
                              />
                            </label>
                          </div>
                          {editValidationResult && (
                            <span className={editValidationResult.isValid ? 'text-[10px] text-emerald-400 font-medium' : 'text-[10px] text-red-400 font-medium'}>
                              {editValidationResult.isValid ? `✓ Valid JSON (${editValidationResult.nodeCount} nodes)` : '✗ Invalid JSON'}
                            </span>
                          )}
                        </div>
                        <textarea
                          value={editForm.json}
                          onChange={(e) => {
                            const val = e.target.value
                            setEditForm((p) => ({ ...p, json: val }))
                            runValidation(val, true)
                          }}
                          rows={6}
                          className={`${inputClass} font-mono text-xs`}
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => handleEditSave(w.id)}
                        disabled={saving || (editValidationResult !== null && !editValidationResult.isValid)}
                        className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors disabled:opacity-50"
                      >
                        Save
                      </button>
                      <button onClick={() => setEditingId(null)} className="px-4 py-2 rounded-xl border border-white/[0.08] text-gray-400 hover:text-white text-sm transition-colors">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                    {/* Top Row */}
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="inline-block px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-semibold tracking-wide uppercase">
                          {w.category}
                        </span>
                        <span className="text-[10px] text-gray-600 font-mono">
                          {parsedNodes} node{parsedNodes !== 1 ? 's' : ''}
                        </span>
                      </div>
                      <h3 className="font-semibold text-white mt-2 group-hover:text-purple-400 transition-colors text-sm line-clamp-1">{w.name}</h3>
                      <p className="text-gray-500 text-xs mt-1.5 line-clamp-2 h-8 leading-relaxed">{w.description || 'No description provided.'}</p>
                    </div>

                    {/* Actions Panel */}
                    <div className="flex items-center justify-between border-t border-white/[0.04] pt-3">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleCopy(w.id, w.json)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/[0.06] text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/[0.06] hover:border-emerald-500/20 transition-all text-[11px] font-semibold"
                          title="Copy workflow to Clipboard"
                        >
                          {copied === w.id ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                          {copied === w.id ? 'Copied!' : 'Copy'}
                        </button>
                        <button
                          onClick={() => handleDownload(w.name, w.json)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/[0.06] text-gray-500 hover:text-blue-400 hover:bg-blue-500/[0.06] hover:border-blue-500/20 transition-all text-[11px] font-semibold"
                          title="Download workflow JSON file"
                        >
                          <Download size={11} />
                          JSON
                        </button>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => startEdit(w)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/[0.06] text-gray-500 hover:text-white hover:bg-white/[0.04] transition-colors"
                          title="Edit Workflow"
                        >
                          <Pencil size={12} />
                        </button>
                        <button
                          onClick={() => handleDelete(w.id)}
                          disabled={deleting === w.id}
                          className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/[0.06] text-gray-500 hover:text-red-400 hover:bg-red-500/[0.06] hover:border-red-500/20 transition-colors"
                          title="Delete Workflow"
                        >
                          {deleting === w.id ? <Loader2 size={12} className="animate-spin" /> : <Trash2 size={12} />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
