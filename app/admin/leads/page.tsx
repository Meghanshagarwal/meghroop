'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Inbox,
  Loader2,
  X,
  Calendar,
  MessageSquare,
  User,
  Mail,
  Trash2,
  FileText,
  Search,
  CheckCircle,
  Clock
} from 'lucide-react'

interface Lead {
  id: string
  name: string
  email: string
  projectType: string
  message: string
  status: 'new' | 'contacted' | 'qualifying' | 'won' | 'lost' | 'archived'
  notes: string
  createdAt: string
}

const statusMap: Record<Lead['status'], { label: string; class: string }> = {
  new: { label: 'New', class: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  contacted: { label: 'Contacted', class: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  qualifying: { label: 'Qualifying', class: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
  won: { label: 'Won', class: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  lost: { label: 'Lost', class: 'bg-red-500/10 text-red-400 border-red-500/20' },
  archived: { label: 'Archived', class: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20' }
}

export default function LeadsCRMPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'new' | 'active' | 'closed' | 'archived'>('ALL')

  // Lead Detail Modal States
  const [detailModalOpen, setDetailModalOpen] = useState(false)
  const [activeLead, setActiveLead] = useState<Lead | null>(null)
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState<Lead['status']>('new')

  const loadLeals = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/leads')
      const data = await res.json()
      setLeads(Array.isArray(data) ? data : [])
    } catch {
      setLeads([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadLeals()
  }, [loadLeals])

  // Patch a single lead (status / notes) on the server, then update local state.
  const patchLead = async (
    leadId: string,
    patch: { status?: Lead['status']; notes?: string }
  ) => {
    setSaving(true)
    try {
      await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, ...patch })
      })
      setLeads(prev =>
        prev.map(l => (l.id === leadId ? { ...l, ...patch } : l))
      )
    } catch (err) {
      console.error('Failed to save lead:', err)
    } finally {
      setSaving(false)
    }
  }

  // Handle lead update (status / notes)
  const handleOpenLeadDetails = (lead: Lead) => {
    setActiveLead(lead)
    setNotes(lead.notes || '')
    setStatus(lead.status)
    setDetailModalOpen(true)
  }

  const handleUpdateLeadDetails = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!activeLead) return

    await patchLead(activeLead.id, { status, notes: notes.trim() })
    setDetailModalOpen(false)
  }

  const handleInlineStatusChange = async (leadId: string, newStatus: Lead['status']) => {
    await patchLead(leadId, { status: newStatus })
  }

  const handleDeleteLead = async (leadId: string) => {
    if (!confirm('Are you sure you want to delete this lead? This will permanently remove it from the system.')) return
    setSaving(true)
    try {
      await fetch(`/api/admin/leads?id=${encodeURIComponent(leadId)}`, {
        method: 'DELETE'
      })
      setLeads(prev => prev.filter(l => l.id !== leadId))
    } catch (err) {
      console.error('Failed to delete lead:', err)
    } finally {
      setSaving(false)
    }
  }

  // Analytics Math
  const totalLeadsCount = leads.length
  const newLeadsCount = leads.filter(l => l.status === 'new').length
  const wonLeadsCount = leads.filter(l => l.status === 'won').length
  const closedCount = leads.filter(l => l.status === 'won' || l.status === 'lost').length
  const conversionRate = closedCount > 0 ? Math.round((wonLeadsCount / closedCount) * 100) : 0

  // Filter and Search logic
  const filteredLeads = leads.filter(lead => {
    // 1. Search term match
    const matchSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.projectType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.message.toLowerCase().includes(searchTerm.toLowerCase())

    if (!matchSearch) return false

    // 2. Status Group Match
    if (statusFilter === 'ALL') return true
    if (statusFilter === 'new') return lead.status === 'new'
    if (statusFilter === 'active') return lead.status === 'contacted' || lead.status === 'qualifying'
    if (statusFilter === 'closed') return lead.status === 'won' || lead.status === 'lost'
    if (statusFilter === 'archived') return lead.status === 'archived'
    
    return true
  })

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen pb-20">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading font-bold text-2xl text-white">Leads CRM</h1>
          <p className="text-sm text-gray-500 mt-1">Review, follow up, and track inquiries from contact forms, chatbot, and the exit-intent popup</p>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Total Inquiries */}
        <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.02] transition-all relative overflow-hidden flex flex-col justify-between h-32">
          <div>
            <span className="text-xs text-gray-500 font-medium">Total Inquiries</span>
            <div className="text-3xl font-bold font-heading text-white tracking-tight mt-3">
              {totalLeadsCount}
            </div>
          </div>
          <div className="absolute right-4 top-4 opacity-10">
            <Inbox size={50} className="text-white" />
          </div>
        </div>

        {/* New Leads */}
        <div className="p-5 rounded-2xl border border-blue-500/10 bg-blue-500/[0.01] hover:bg-blue-500/[0.02] transition-all relative overflow-hidden flex flex-col justify-between h-32">
          <div>
            <span className="text-xs text-blue-400 font-medium">New / Unread</span>
            <div className="text-3xl font-bold font-heading text-blue-400 tracking-tight mt-3">
              {newLeadsCount}
            </div>
          </div>
          <div className="absolute right-4 top-4 opacity-10">
            <Clock size={50} className="text-blue-400" />
          </div>
        </div>

        {/* Converted Deals */}
        <div className="p-5 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.01] hover:bg-emerald-500/[0.02] transition-all relative overflow-hidden flex flex-col justify-between h-32">
          <div>
            <span className="text-xs text-emerald-400 font-medium">Won Deals</span>
            <div className="text-3xl font-bold font-heading text-emerald-400 tracking-tight mt-3">
              {wonLeadsCount}
            </div>
          </div>
          <div className="absolute right-4 top-4 opacity-10">
            <CheckCircle size={50} className="text-emerald-400" />
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] hover:bg-purple-500/[0.02] transition-all relative overflow-hidden flex flex-col justify-between h-32">
          <div>
            <span className="text-xs text-purple-400 font-medium">CRM Conversion Rate</span>
            <div className="text-3xl font-bold font-heading text-purple-400 tracking-tight mt-3">
              {conversionRate}%
            </div>
          </div>
          <div className="absolute right-4 top-4 opacity-10">
            <FileText size={50} className="text-purple-400" />
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 pointer-events-none">
            <Search size={15} />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search leads name, email, project type..."
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl pl-11 pr-4 py-3 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-light"
          />
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 p-1 bg-white/[0.02] border border-white/[0.06] rounded-2xl w-fit">
          <button
            onClick={() => setStatusFilter('ALL')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              statusFilter === 'ALL'
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
                : 'text-gray-500 hover:text-white'
            }`}
          >
            All Inquiries
          </button>
          <button
            onClick={() => setStatusFilter('new')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              statusFilter === 'new'
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
                : 'text-gray-500 hover:text-white'
            }`}
          >
            New
          </button>
          <button
            onClick={() => setStatusFilter('active')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              statusFilter === 'active'
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
                : 'text-gray-500 hover:text-white'
            }`}
          >
            Active Pipeline
          </button>
          <button
            onClick={() => setStatusFilter('closed')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              statusFilter === 'closed'
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
                : 'text-gray-500 hover:text-white'
            }`}
          >
            Closed
          </button>
          <button
            onClick={() => setStatusFilter('archived')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              statusFilter === 'archived'
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
                : 'text-gray-500 hover:text-white'
            }`}
          >
            Archived
          </button>
        </div>
      </div>

      {/* Main CRM Table list */}
      {loading ? (
        <div className="flex items-center gap-2 text-gray-500">
          <Loader2 size={16} className="animate-spin" /> Loading inquiries...
        </div>
      ) : filteredLeads.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/[0.08] rounded-3xl text-gray-500 text-sm">
          No inquiries found matching your filters.
        </div>
      ) : (
        <div className="border border-white/[0.06] bg-white/[0.01] rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02] text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <th className="py-4 px-6">Inquirer</th>
                  <th className="py-4 px-6">Interest &amp; Message</th>
                  <th className="py-4 px-6">Received</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filteredLeads.map(lead => {
                  const hasNotes = lead.notes && lead.notes.trim().length > 0
                  
                  return (
                    <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors text-sm text-gray-300">
                      {/* Name & Contact */}
                      <td className="py-4 px-6">
                        <div className="font-semibold text-white flex items-center gap-1.5">
                          {lead.name}
                          {hasNotes && (
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" title="Has follow-up notes" />
                          )}
                        </div>
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-xs text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-1 mt-1 font-mono"
                        >
                          <Mail size={10} />
                          {lead.email}
                        </a>
                      </td>

                      {/* Project type / message */}
                      <td className="py-4 px-6 max-w-sm">
                        <div>
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-wide">
                            {lead.projectType}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                          {lead.message}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-6 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={11} className="text-gray-600" />
                          {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                      </td>

                      {/* Status select dropdown */}
                      <td className="py-4 px-6 text-center">
                        <select
                          value={lead.status}
                          onChange={(e) => handleInlineStatusChange(lead.id, e.target.value as Lead['status'])}
                          className={`px-3 py-1 rounded-xl text-xs font-semibold border focus:outline-none cursor-pointer ${statusMap[lead.status].class}`}
                        >
                          <option value="new" className="bg-[#0d0d0d] text-blue-400">New</option>
                          <option value="contacted" className="bg-[#0d0d0d] text-amber-400">Contacted</option>
                          <option value="qualifying" className="bg-[#0d0d0d] text-indigo-400">Qualifying</option>
                          <option value="won" className="bg-[#0d0d0d] text-emerald-400">Won</option>
                          <option value="lost" className="bg-[#0d0d0d] text-red-400">Lost</option>
                          <option value="archived" className="bg-[#0d0d0d] text-zinc-400">Archived</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenLeadDetails(lead)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/[0.08] hover:border-purple-500/30 hover:bg-purple-500/10 text-gray-400 hover:text-purple-300 text-xs font-medium transition-all cursor-pointer"
                          >
                            <MessageSquare size={13} />
                            Details
                          </button>
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="w-8 h-8 rounded-xl flex items-center justify-center border border-white/[0.08] text-gray-500 hover:text-red-400 hover:bg-red-500/[0.06] hover:border-red-500/20 transition-colors cursor-pointer"
                            title="Delete Lead"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: LEAD DETAILS & NOTES EDITOR
          ======================================================== */}
      <AnimatePresence>
        {detailModalOpen && activeLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-xl bg-[#0d0d0d] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between bg-white/[0.01]">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Lead Details</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Inquiry Details &amp; CRM logs</p>
                </div>
                <button
                  onClick={() => setDetailModalOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Body */}
              <form onSubmit={handleUpdateLeadDetails} className="overflow-y-auto flex-1 p-6 space-y-5">
                {/* Meta details */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div>
                    <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <User size={10} /> Name
                    </div>
                    <div className="text-sm font-semibold text-white mt-1">{activeLead.name}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <Mail size={10} /> Email
                    </div>
                    <a
                      href={`mailto:${activeLead.email}`}
                      className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors block mt-1 break-all"
                    >
                      {activeLead.email}
                    </a>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-white/[0.04]">
                    <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Interest</div>
                    <div className="mt-1.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-wide">
                        {activeLead.projectType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Message Box */}
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">Submitted Message</label>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs leading-relaxed text-gray-300 whitespace-pre-wrap max-h-48 overflow-y-auto">
                    {activeLead.message}
                  </div>
                </div>

                {/* Note Taking Text Area */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">Follow-up Notes / History</label>
                    <span className="text-[10px] text-gray-600">Saved in CRM</span>
                  </div>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Record your follow-ups, calls, pricing details, or project scope agreements here..."
                    rows={4}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-3 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all leading-relaxed"
                  />
                </div>

                {/* Status Dropdown */}
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">Update Pipeline Status</label>
                    <p className="text-[10px] text-gray-600 mt-0.5">Move lead along your pipeline stages</p>
                  </div>
                  <div>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as Lead['status'])}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all cursor-pointer font-semibold uppercase tracking-wider"
                    >
                      <option value="new" className="bg-[#0d0d0d] text-blue-400 font-semibold">New / Unread</option>
                      <option value="contacted" className="bg-[#0d0d0d] text-amber-400 font-semibold">Contacted</option>
                      <option value="qualifying" className="bg-[#0d0d0d] text-indigo-400 font-semibold">Qualifying</option>
                      <option value="won" className="bg-[#0d0d0d] text-emerald-400 font-semibold">Won (Client Deal)</option>
                      <option value="lost" className="bg-[#0d0d0d] text-red-400 font-semibold">Lost Inquiry</option>
                      <option value="archived" className="bg-[#0d0d0d] text-zinc-400 font-semibold">Archive</option>
                    </select>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setDetailModalOpen(false)}
                    className="flex-1 py-3 rounded-xl border border-white/[0.08] text-sm text-gray-400 hover:text-white font-medium hover:bg-white/[0.04] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-sm text-white font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {saving ? <Loader2 size={14} className="animate-spin" /> : null}
                    Save &amp; Update CRM
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
