'use client'

import { useState } from 'react'
import { Loader2, Search, Download, CheckCircle2, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'loading' | 'done' | 'error'

export default function SeoCheckerForm() {
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [score, setScore] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    setScore(null)

    try {
      const res = await fetch('/api/seo-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, name, email, website }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      const blob = await res.blob()
      const headerScore = res.headers.get('X-SEO-Score')
      const domain = (() => {
        try {
          return new URL(url.startsWith('http') ? url : 'https://' + url).hostname.replace(/^www\./, '')
        } catch {
          return 'website'
        }
      })()

      // Trigger instant download of the branded PDF
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `SEO-Audit-${domain}.pdf`
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(link.href)

      setScore(headerScore ? Number(headerScore) : null)
      setStatus('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Audit failed.')
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 text-emerald-400" size={40} />
        <h3 className="font-heading text-xl font-bold text-white">Your report is ready</h3>
        {score !== null && (
          <p className="mt-2 text-gray-400">
            Overall SEO score: <span className="font-bold text-white">{score}/100</span>
          </p>
        )}
        <p className="mt-2 text-sm text-gray-500">
          The branded PDF has downloaded automatically. Check your downloads folder.
        </p>
        <button
          onClick={() => {
            setStatus('idle')
            setUrl('')
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
        >
          <Search size={16} /> Audit another site
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-300">Website URL</label>
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
          <label className="mb-1.5 block text-sm font-medium text-gray-300">Your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-all focus:border-purple-500/50 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300">Email *</label>
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

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={15} /> {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-purple-500 disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={17} className="animate-spin" /> Auditing your site… (20–40s)
          </>
        ) : (
          <>
            <Download size={17} /> Get my free SEO report (PDF)
          </>
        )}
      </button>
      <p className="text-center text-xs text-gray-600">
        We crawl your live site and email-gate the report. No spam — just your audit.
      </p>
    </form>
  )
}
