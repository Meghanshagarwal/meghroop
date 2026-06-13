'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Save } from 'lucide-react'
import { JOURNAL_CATEGORIES, type JournalRow } from '@/lib/supabase'
import { blocksToMarkdown, type ArticleBlock } from '@/lib/journal'

interface Props {
  article?: JournalRow
}

const inputClass =
  'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all'

export default function JournalForm({ article }: Props) {
  const router = useRouter()
  const isEdit = !!article

  const [title, setTitle] = useState(article?.title ?? '')
  const [category, setCategory] = useState(article?.category ?? JOURNAL_CATEGORIES[0])
  const [subtitle, setSubtitle] = useState(article?.subtitle ?? '')
  const [description, setDescription] = useState(article?.description ?? '')
  const [tagsInput, setTagsInput] = useState((article?.seo?.keywords ?? []).join(', '))
  const [heroImage, setHeroImage] = useState(article?.hero_image ?? '')
  const [date, setDate] = useState(article?.date ?? new Date().toISOString().slice(0, 10))
  const [markdown, setMarkdown] = useState(
    article ? blocksToMarkdown(article.blocks as ArticleBlock[]) : ''
  )
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    const payload = {
      title,
      category,
      subtitle,
      description,
      tags: tagsInput.split(',').map((t) => t.trim()).filter(Boolean),
      heroImage,
      date,
      markdown,
    }

    const url = isEdit ? `/api/admin/journal/${article.id}` : '/api/admin/journal'
    const method = isEdit ? 'PUT' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      router.push('/admin/journal')
      router.refresh()
    } else {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Something went wrong')
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl">
      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Title *</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g. Building Resilient AI Agents" className={inputClass} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-500 mb-1.5 block">Category *</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}>
            {JOURNAL_CATEGORIES.map((c) => (
              <option key={c} value={c} className="bg-[#0a0a0a]">{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1.5 block">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
        </div>
      </div>

      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Subtitle</label>
        <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder="One-line hook shown under the title" className={inputClass} />
      </div>

      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Description (SEO / cards)</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} placeholder="Short summary for SEO and article cards…" className={`${inputClass} resize-none`} />
      </div>

      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Tags (comma-separated)</label>
        <input value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} placeholder="AI Agents, n8n, Automation" className={inputClass} />
      </div>

      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Hero Image URL</label>
        <input value={heroImage} onChange={(e) => setHeroImage(e.target.value)} placeholder="https://… (optional)" className={inputClass} />
      </div>

      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Content (Markdown) *</label>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          required
          rows={20}
          placeholder={'## Heading\n\nParagraph text…\n\n- bullet one\n- bullet two\n\n```typescript\nconst x = 1\n```\n\n> A quote'}
          className={`${inputClass} font-mono leading-relaxed`}
        />
        <p className="text-[11px] text-gray-600 mt-1.5">
          Use <code>##</code>/<code>###</code> for headings, <code>-</code> for lists, <code>&gt;</code> for quotes, and fenced <code>```</code> blocks for code. (A single <code>#</code> title line is ignored — the Title field above is used.)
        </p>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors disabled:opacity-60"
        >
          {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          {saving ? 'Saving…' : isEdit ? 'Save Changes' : 'Publish Article'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/journal')}
          className="px-6 py-2.5 rounded-xl border border-white/[0.08] text-gray-400 hover:text-white text-sm font-semibold transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
