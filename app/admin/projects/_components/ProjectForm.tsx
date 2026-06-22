'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Save } from 'lucide-react'
import { GRADIENT_PRESETS, type Project } from '@/lib/supabase'

type FormData = Omit<Project, 'id' | 'created_at' | 'display_order'>

const BLANK: FormData = {
  title: '',
  description: '',
  gradient: GRADIENT_PRESETS[0].value,
  image: '',
  tags: [],
  live_url: '',
  github_url: '',
  year: String(new Date().getFullYear()),
  category: '',
  slug: '',
  client_intro: '',
  services: [],
  project_types: [],
  timeline: '',
  outcome: '',
  deliverables: [],
}

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')

interface Props {
  project?: Project
}

const inputClass =
  'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all'

export default function ProjectForm({ project }: Props) {
  const router = useRouter()
  const isEdit = !!project

  const [form, setForm] = useState<FormData>(
    project
      ? {
          title: project.title,
          description: project.description,
          gradient: project.gradient,
          image: project.image,
          tags: project.tags,
          live_url: project.live_url,
          github_url: project.github_url,
          year: project.year,
          category: project.category,
          slug: project.slug ?? '',
          client_intro: project.client_intro ?? '',
          services: project.services ?? [],
          project_types: project.project_types ?? [],
          timeline: project.timeline ?? '',
          outcome: project.outcome ?? '',
          deliverables: project.deliverables ?? [],
        }
      : BLANK
  )
  const [tagsInput, setTagsInput] = useState((project?.tags ?? []).join(', '))
  const [servicesInput, setServicesInput] = useState((project?.services ?? []).join(', '))
  const [typesInput, setTypesInput] = useState((project?.project_types ?? []).join(', '))
  const [deliverablesInput, setDeliverablesInput] = useState((project?.deliverables ?? []).join(', '))
  const [slugTouched, setSlugTouched] = useState(!!project?.slug)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const csv = (s: string) => s.split(',').map((t) => t.trim()).filter(Boolean)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => {
      const next = { ...prev, [name]: value }
      // Auto-derive slug from title until the user edits the slug manually
      if (name === 'title' && !slugTouched) next.slug = slugify(value)
      return next
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    const payload = {
      ...form,
      slug: (form.slug && form.slug.trim()) ? slugify(form.slug) : slugify(form.title),
      tags: csv(tagsInput),
      services: csv(servicesInput),
      project_types: csv(typesInput),
      deliverables: csv(deliverablesInput),
    }

    const url = isEdit ? `/api/admin/projects/${project.id}` : '/api/admin/projects'
    const method = isEdit ? 'PUT' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      router.push('/admin/projects')
      router.refresh()
    } else {
      const data = await res.json()
      setError(data.error ?? 'Something went wrong')
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      {/* Title */}
      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Project Title *</label>
        <input name="title" value={form.title} onChange={handleChange} required placeholder="e.g. The Digital Overhaul of The Kapas" className={inputClass} />
      </div>

      {/* Slug */}
      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">URL Slug</label>
        <input
          name="slug"
          value={form.slug ?? ''}
          onChange={(e) => { setSlugTouched(true); handleChange(e) }}
          placeholder="the-kapas"
          className={inputClass}
        />
        <p className="text-[11px] text-gray-600 mt-1">Page: /work/{form.slug || 'auto-from-title'}</p>
      </div>

      {/* Description */}
      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Description *</label>
        <textarea name="description" value={form.description} onChange={handleChange} required rows={4} placeholder="Brief description of the project…" className={`${inputClass} resize-none`} />
      </div>

      {/* Category + Year */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-500 mb-1.5 block">Category *</label>
          <input name="category" value={form.category} onChange={handleChange} required placeholder="e.g. E-commerce" className={inputClass} />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1.5 block">Year *</label>
          <input name="year" value={form.year} onChange={handleChange} required placeholder="2024" className={inputClass} />
        </div>
      </div>

      {/* Gradient */}
      <div>
        <label className="text-xs text-gray-500 mb-2 block">Card Color</label>
        <div className="grid grid-cols-3 gap-2">
          {GRADIENT_PRESETS.map((preset) => (
            <button
              key={preset.value}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, gradient: preset.value }))}
              className={`relative h-14 rounded-xl bg-gradient-to-br ${preset.value} transition-all ${
                form.gradient === preset.value
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-[#080808]'
                  : 'opacity-60 hover:opacity-90'
              }`}
            >
              <span className="absolute bottom-1.5 left-0 right-0 text-center text-[10px] text-white/70">{preset.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Image URL */}
      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Image URL *</label>
        <input name="image" value={form.image} onChange={handleChange} required placeholder="https://images.pexels.com/…" className={inputClass} />
        {form.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={form.image} alt="preview" className="mt-2 h-24 w-full object-cover rounded-xl opacity-70" />
        )}
      </div>

      {/* Tags */}
      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Tags (comma-separated)</label>
        <input
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder="Next.js, TypeScript, Tailwind CSS"
          className={inputClass}
        />
      </div>

      {/* URLs */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-500 mb-1.5 block">Live URL</label>
          <input name="live_url" value={form.live_url} onChange={handleChange} placeholder="https://…" className={inputClass} />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1.5 block">GitHub URL</label>
          <input name="github_url" value={form.github_url} onChange={handleChange} placeholder="https://github.com/…" className={inputClass} />
        </div>
      </div>

      {/* ── Case study detail page ─────────────────────────── */}
      <div className="pt-2 border-t border-white/[0.08]">
        <p className="text-sm font-semibold text-white mt-4 mb-1">Case Study Page</p>
        <p className="text-xs text-gray-500 mb-4">Powers the single portfolio page at /work/{form.slug || 'slug'}</p>
      </div>

      {/* Client intro */}
      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Intro / About the brand</label>
        <textarea name="client_intro" value={form.client_intro ?? ''} onChange={handleChange} rows={4}
          placeholder="The Kapas is a women's apparel brand from Jaipur… (use a blank line between paragraphs)" className={`${inputClass} resize-none`} />
      </div>

      {/* Services + Project Types */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-500 mb-1.5 block">Services (comma-separated)</label>
          <input value={servicesInput} onChange={(e) => setServicesInput(e.target.value)}
            placeholder="Social Media Marketing, Paid Media, Web Maintenance" className={inputClass} />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1.5 block">Project Types (comma-separated)</label>
          <input value={typesInput} onChange={(e) => setTypesInput(e.target.value)}
            placeholder="Online Presence & Sales" className={inputClass} />
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Timeline</label>
        <input name="timeline" value={form.timeline ?? ''} onChange={handleChange} placeholder="1 Year" className={inputClass} />
      </div>

      {/* Outcome */}
      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">The Outcome</label>
        <textarea name="outcome" value={form.outcome ?? ''} onChange={handleChange} rows={5}
          placeholder="Describe the results, numbers, growth… (blank line between paragraphs)" className={`${inputClass} resize-none`} />
      </div>

      {/* Deliverables */}
      <div>
        <label className="text-xs text-gray-500 mb-1.5 block">Deliverables (comma-separated)</label>
        <input value={deliverablesInput} onChange={(e) => setDeliverablesInput(e.target.value)}
          placeholder="Content, Website, Photoshoot, Paid Ads, Influencer Marketing" className={inputClass} />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors disabled:opacity-60"
        >
          {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          {saving ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Project'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/projects')}
          className="px-6 py-2.5 rounded-xl border border-white/[0.08] text-gray-400 hover:text-white text-sm font-semibold transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
