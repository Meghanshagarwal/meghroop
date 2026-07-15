'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

type Status = 'idle' | 'loading' | 'done' | 'error'

export default function FreeAuditForm() {
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [goal, setGoal] = useState('')
  const [companyUrl, setCompanyUrl] = useState('') // honeypot
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/free-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, name, email, phone, goal, company_url: companyUrl }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      trackEvent('generate_lead', 'Lead', { label: 'free_website_audit' })
      setStatus('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed.')
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 text-emerald-400" size={40} />
        <h3 className="font-heading text-xl font-bold text-white">Request received 🎉</h3>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
          Our team will personally audit <span className="text-white font-medium">your site</span> and send
          your report with clear, prioritised fixes — usually within 24–48 hours. Keep an eye on your inbox.
        </p>
        <button
          onClick={() => {
            setStatus('idle')
            setUrl(''); setName(''); setEmail(''); setPhone(''); setGoal('')
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.05]"
        >
          Request another audit
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        value={companyUrl}
        onChange={(e) => setCompanyUrl(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-300">Website URL <span className="text-purple-400">*</span></label>
        <input
          type="text"
          inputMode="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="yourwebsite.com"
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-all focus:border-purple-500/50 focus:outline-none"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300">Your name <span className="text-purple-400">*</span></label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Meghansh"
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-all focus:border-purple-500/50 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300">Email <span className="text-purple-400">*</span></label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-all focus:border-purple-500/50 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-300">
          WhatsApp / Phone <span className="text-gray-600">(optional — for a faster reply)</span>
        </label>
        <input
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 …"
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-all focus:border-purple-500/50 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-300">
          Biggest challenge with your site? <span className="text-gray-600">(optional)</span>
        </label>
        <textarea
          rows={3}
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="e.g. it's slow, not getting leads, looks outdated, low Google ranking…"
          className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-all focus:border-purple-500/50 focus:outline-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-all duration-200 hover:bg-white/90 disabled:opacity-60 shadow-[0_0_50px_rgba(124,58,237,0.18)]"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={17} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Get My Free Audit
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-gray-500">
        100% free · No obligation · We reply within 24–48 hours
      </p>
    </form>
  )
}
