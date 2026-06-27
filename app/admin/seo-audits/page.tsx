'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Search,
  Loader2,
  KeyRound,
  Save,
  X,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Mail,
  Calendar,
} from 'lucide-react'

interface Issue {
  area: string
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
  description: string
  evidence: string
  seoImpact: string
  businessImpact: string
  recommendation: string
  expectedImprovement: string
  difficulty: string
}
interface Strength {
  title: string
  detail: string
}
interface Report {
  domain: string
  url: string
  auditDate: string
  overallScore: number
  executiveSummary: string
  strengths: Strength[]
  issues: Issue[]
}
interface Audit {
  id: string
  url: string
  domain: string
  name: string
  email: string
  score: number
  strengthsCount: number
  issuesCount: number
  report: Report
  createdAt: string
}

const sevClass: Record<string, string> = {
  Critical: 'bg-red-500/10 text-red-400 border-red-500/20',
  High: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Medium: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Low: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
}

function scoreColor(n: number) {
  if (n >= 80) return 'text-emerald-400'
  if (n >= 50) return 'text-amber-400'
  return 'text-red-400'
}

export default function SeoAuditsPage() {
  const [audits, setAudits] = useState<Audit[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Audit | null>(null)

  // ── API key / model settings ──
  const [apiKey, setApiKey] = useState('')
  const [model, setModel] = useState('gemini-2.5-flash')
  const [savingKey, setSavingKey] = useState(false)
  const [keySaved, setKeySaved] = useState(false)

  const loadAudits = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/admin/seo-audits')
    const data = await res.json().catch(() => ({ audits: [] }))
    setAudits(data.audits || [])
    setLoading(false)
  }, [])

  const loadSettings = useCallback(async () => {
    const res = await fetch('/api/admin/settings')
    const data = await res.json().catch(() => ({}))
    if (data.gemini_api_key) setApiKey(data.gemini_api_key)
    if (data.gemini_model) setModel(data.gemini_model)
  }, [])

  useEffect(() => {
    loadAudits()
    loadSettings()
  }, [loadAudits, loadSettings])

  const saveKey = async () => {
    setSavingKey(true)
    setKeySaved(false)
    await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gemini_api_key: apiKey.trim(), gemini_model: model.trim() }),
    })
    setSavingKey(false)
    setKeySaved(true)
    setTimeout(() => setKeySaved(false), 2500)
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-600/20">
          <Search size={18} className="text-purple-400" />
        </div>
        <div>
          <h1 className="font-heading text-xl font-bold text-white">SEO Audits</h1>
          <p className="text-sm text-gray-500">Every URL submitted via the public SEO Checker.</p>
        </div>
      </div>

      {/* ── Gemini API key editor ── */}
      <div className="mb-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
        <div className="mb-3 flex items-center gap-2">
          <KeyRound size={16} className="text-purple-400" />
          <h2 className="text-sm font-semibold text-white">Report Engine — Gemini API Key</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-[1fr_200px_auto]">
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Gemini API key (AIza…)"
            className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:border-purple-500/50 focus:outline-none"
          />
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="gemini-2.5-flash"
            className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:border-purple-500/50 focus:outline-none"
          />
          <button
            onClick={saveKey}
            disabled={savingKey}
            className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-500 disabled:opacity-60"
          >
            {savingKey ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
            {keySaved ? 'Saved' : 'Save'}
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-600">
          Get a free key at aistudio.google.com. Stored in your settings table — overrides the
          GEMINI_API_KEY env var.
        </p>
      </div>

      {/* ── Audits list ── */}
      {loading ? (
        <div className="flex items-center gap-2 py-16 text-gray-500">
          <Loader2 size={18} className="animate-spin" /> Loading audits…
        </div>
      ) : audits.length === 0 ? (
        <p className="py-16 text-center text-gray-600">No audits yet. They appear here as visitors use the SEO Checker.</p>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-4 py-3 font-medium">Website</th>
                <th className="px-4 py-3 font-medium">Lead</th>
                <th className="px-4 py-3 font-medium">Score</th>
                <th className="px-4 py-3 font-medium">Good / Bad</th>
                <th className="px-4 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {audits.map((a) => (
                <tr
                  key={a.id}
                  onClick={() => setSelected(a)}
                  className="cursor-pointer border-t border-white/[0.06] transition-colors hover:bg-white/[0.03]"
                >
                  <td className="px-4 py-3">
                    <span className="font-medium text-white">{a.domain}</span>
                    <span className="block text-xs text-gray-600">{a.url}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {a.name}
                    <span className="block text-xs text-gray-600">{a.email}</span>
                  </td>
                  <td className={`px-4 py-3 font-bold ${scoreColor(a.score)}`}>{a.score}</td>
                  <td className="px-4 py-3 text-gray-400">
                    <span className="text-emerald-400">{a.strengthsCount} ✓</span>{' '}
                    <span className="text-red-400">{a.issuesCount} ✕</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500">
                    {new Date(a.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Detail drawer ── */}
      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60" onClick={() => setSelected(null)}>
          <div
            className="h-full w-full max-w-2xl overflow-y-auto border-l border-white/[0.08] bg-[#0c0c0c] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h2 className="font-heading text-lg font-bold text-white">{selected.domain}</h2>
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300"
                >
                  {selected.url} <ExternalLink size={11} />
                </a>
              </div>
              <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="mb-5 flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <Mail size={13} /> {selected.email}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} /> {new Date(selected.createdAt).toLocaleString()}
              </span>
              <span className={`font-bold ${scoreColor(selected.score)}`}>
                Score: {selected.score}/100
              </span>
            </div>

            {selected.report?.executiveSummary && (
              <p className="mb-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm text-gray-300">
                {selected.report.executiveSummary}
              </p>
            )}

            {/* GOOD */}
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-400">
              <CheckCircle2 size={15} /> What&apos;s Good ({selected.report?.strengths?.length || 0})
            </h3>
            <div className="mb-6 space-y-2">
              {(selected.report?.strengths || []).map((st, i) => (
                <div key={i} className="rounded-lg border-l-2 border-emerald-500/40 bg-emerald-500/[0.04] p-3">
                  <p className="text-sm font-medium text-emerald-300">{st.title}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{st.detail}</p>
                </div>
              ))}
              {(!selected.report?.strengths || selected.report.strengths.length === 0) && (
                <p className="text-xs text-gray-600">No strengths recorded.</p>
              )}
            </div>

            {/* BAD */}
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-400">
              <AlertTriangle size={15} /> Issues Found ({selected.report?.issues?.length || 0})
            </h3>
            <div className="space-y-3">
              {(selected.report?.issues || []).map((iss, i) => (
                <div key={i} className="rounded-lg border border-white/[0.08] p-3">
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-white">{iss.description}</p>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
                        sevClass[iss.severity] || 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                      }`}
                    >
                      {iss.severity}
                    </span>
                  </div>
                  {iss.evidence && <p className="text-xs text-gray-500">Evidence: {iss.evidence}</p>}
                  {iss.recommendation && (
                    <p className="mt-1 text-xs text-gray-400">Fix: {iss.recommendation}</p>
                  )}
                </div>
              ))}
              {(!selected.report?.issues || selected.report.issues.length === 0) && (
                <p className="text-xs text-gray-600">No issues recorded.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
