'use client'

import { useEffect, useState } from 'react'
import { Loader2, Save, CheckCircle2 } from 'lucide-react'

type Settings = {
  ga_id: string
  meta_pixel_id: string
  clarity_id: string
  whatsapp_number: string
}

const BLANK: Settings = { ga_id: '', meta_pixel_id: '', clarity_id: '', whatsapp_number: '' }

const inputClass =
  'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all font-mono'

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>(BLANK)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/admin/settings')
      .then((r) => r.json())
      .then((data) => {
        setSettings({ ...BLANK, ...data })
        setLoading(false)
      })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setSaved(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    })
    if (res.ok) {
      setSaved(true)
    } else {
      setError('Failed to save settings.')
    }
    setSaving(false)
  }

  if (loading) {
    return (
      <div className="p-8 flex items-center gap-2 text-gray-500">
        <Loader2 size={16} className="animate-spin" /> Loading…
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-white">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Analytics IDs and site configuration</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-8">
        {/* Analytics */}
        <div>
          <h2 className="font-heading font-semibold text-sm text-gray-400 uppercase tracking-widest mb-4">Analytics</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Google Analytics 4 ID</label>
              <input name="ga_id" value={settings.ga_id} onChange={handleChange} placeholder="G-XXXXXXXXXX" className={inputClass} />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Meta Pixel ID</label>
              <input name="meta_pixel_id" value={settings.meta_pixel_id} onChange={handleChange} placeholder="1234567890123456" className={inputClass} />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Microsoft Clarity ID</label>
              <input name="clarity_id" value={settings.clarity_id} onChange={handleChange} placeholder="xxxxxxxxxx" className={inputClass} />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-heading font-semibold text-sm text-gray-400 uppercase tracking-widest mb-4">Contact</h2>
          <div>
            <label className="text-xs text-gray-500 mb-1.5 block">WhatsApp Number</label>
            <input name="whatsapp_number" value={settings.whatsapp_number} onChange={handleChange} placeholder="919876543210" className={inputClass} />
            <p className="text-xs text-gray-600 mt-1.5">Country code + number, no + or spaces (e.g. 919876543210)</p>
          </div>
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors disabled:opacity-60"
        >
          {saving ? (
            <Loader2 size={14} className="animate-spin" />
          ) : saved ? (
            <CheckCircle2 size={14} className="text-emerald-400" />
          ) : (
            <Save size={14} />
          )}
          {saving ? 'Saving…' : saved ? 'Saved!' : 'Save Settings'}
        </button>
      </form>
    </div>
  )
}
