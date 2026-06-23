'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { TextAlign } from '@tiptap/extension-text-align'
import { Link } from '@tiptap/extension-link'
import { Placeholder } from '@tiptap/extension-placeholder'
import { TableKit } from '@tiptap/extension-table'
import {
  Bold, Italic, Underline as UnderlineIcon, List, ListOrdered,
  AlignLeft, AlignCenter, AlignRight, Heading2, Heading3, Table as TableIcon,
  Printer, Sun, Moon, Sparkles, CheckCircle2, RefreshCw, Undo, Redo,
  Plus, Trash2, FileText, Receipt, Quote, Minus
} from 'lucide-react'

interface InvoiceItem {
  id: string
  description: string
  rate: number
}

interface InvoiceData {
  invoiceNumber: string
  invoiceDate: string
  dueDate: string
  clientName: string
  clientAddress: string
  items: InvoiceItem[]
  taxPercent: number
  discountAmount: number
  paymentNotes: string
  currency: string
  gstNumber: string
  clientGst: string
  bankName: string
  bankHolder: string
  bankAccount: string
  bankIfsc: string
}

const CURRENCIES = [
  { symbol: '₹', label: 'INR (₹)' },
  { symbol: '$', label: 'USD ($)' },
  { symbol: '€', label: 'EUR (€)' },
  { symbol: '£', label: 'GBP (£)' }
]

// Generic, reusable proposal template — this is the DEFAULT (safe for any client).
const defaultBody = `
  <p>Dear <strong>[Client Name]</strong>,</p>
  <p>Thank you for the opportunity. We are pleased to share this proposal from <strong>MeghRoop</strong> — a Growth, AI and Software agency. We bring performance marketing, AI automation, custom software, Shopify &amp; WordPress, and branding under one roof, so one accountable team takes your project from idea to results.</p>
  <h3>1. Scope of Work</h3>
  <ul>
    <li><strong>Item one</strong> — short description of the deliverable.</li>
    <li><strong>Item two</strong> — short description of the deliverable.</li>
    <li><strong>Item three</strong> — short description of the deliverable.</li>
  </ul>
  <h3>2. Commercial</h3>
  <p>Professional fee: <strong>₹[amount]</strong> + 18% GST. Media spend, printing, and any third-party production are billed at actuals, separately.</p>
  <h3>3. Payment Milestones</h3>
  <ul>
    <li>[e.g. 50% advance on signing]</li>
    <li>[e.g. balance on delivery, or quarterly-in-advance for retainers]</li>
  </ul>
  <h3>4. Why MeghRoop</h3>
  <p>One team, no handoffs — the people who build it are the people who grow it. Direct founder access and fast turnarounds.</p>
  <p>Looking forward to working together.</p>
  <p>Sincerely,<br><strong>Meghansh Agarwal</strong><br>Founder, MeghRoop<br>hello@meghroop.tech · +91 89495 08264</p>
`.trim()

// Pre-built template: Navkar Buildcon RFP (load it on demand from the Templates menu).
const navkarBody = `
  <p>To,<br><strong>Navkar Buildcon</strong><br>Jaipur, Rajasthan</p>
  <p><strong>Re: End-to-End Design &amp; Advertising Partnership — Premium Serviced Apartment Project, Jaipur</strong></p>
  <p>Dear Team,</p>
  <p>Thank you for inviting MeghRoop to respond to your RFP. We are a Growth, AI and Software agency that runs branding, performance marketing, web, and content under one roof — which means a single, accountable team carries your project from naming and identity all the way through 16 months of sustained, multi-channel campaigns, with one consistent brand voice across print, outdoor, digital, and on-site.</p>
  <p>This proposal covers the full scope, an all-inclusive professional fee, and a milestone-based payment structure for the 16-month engagement.</p>

  <h3>1. Our Understanding</h3>
  <p>You are launching a premium high-rise serviced apartment project (Basement + Stilt + 12 Floors + Terrace Clubhouse) in a prime Jaipur location. The objective is a distinct project identity, strong buyer/investor confidence, and continuous visibility from launch planning through long-running on-ground and digital campaigns. Our engagement is structured in two parts: a one-time <strong>Brand Identity &amp; Launch Creative Kit</strong>, followed by an <strong>ongoing monthly creative &amp; marketing retainer</strong>.</p>

  <h3>2. Phase 1 — Brand Identity &amp; Launch Creative Kit (One-Time)</h3>
  <ul>
    <li><strong>Project Identity</strong> — name ideation, logo, tagline, and full visual language (fonts, palette, tone).</li>
    <li><strong>Brochures</strong> — narrative concept + print-ready Main Brochure and compact Mini Brochure/Handout.</li>
    <li><strong>Sales Collateral</strong> — sales dockets/folders, price sheets/inserts, presentation structures.</li>
    <li><strong>Project Stationery</strong> — letterheads, envelopes, visiting cards, corporate collaterals.</li>
    <li><strong>Event &amp; Launch Branding</strong> — stage backdrops, digital &amp; print invites, experiential branding.</li>
    <li><strong>Site Branding &amp; Beautification</strong> — site-office interior branding, barricading graphics, entry-gate visuals.</li>
    <li><strong>Website UI/UX</strong> — design layouts and wireframes for the official project website.</li>
    <li><strong>AV &amp; Scriptwriting</strong> — radio/jingle scripts and narrative/voiceover flow for the 3D walkthrough.</li>
  </ul>

  <h3>3. Phase 2 — Ongoing Creative &amp; Marketing Retainer (Months 1–16)</h3>
  <ul>
    <li><strong>Print Communication</strong> — A4 leaflets, mailers, newspaper inserts, campaign print ads.</li>
    <li><strong>Outdoor Media</strong> — city &amp; site hoardings, gantries, unipoles, directional signage, wall wraps.</li>
    <li><strong>Digital &amp; Performance Assets</strong> — e-mailers, landing pages, paid social ad creatives, WhatsApp marketing graphics.</li>
    <li><strong>Monthly Videos</strong> — two (2) marketing videos per month, each delivered in two aspect ratios for multi-platform use.</li>
    <li><strong>Festive Creatives</strong> — project-branded graphics for major festivals throughout the campaign.</li>
  </ul>

  <h3>4. Commercial Proposal</h3>
  <table>
    <thead>
      <tr><th>Component</th><th>Professional Fee (INR)</th></tr>
    </thead>
    <tbody>
      <tr><td>Phase 1 — Brand Identity &amp; Launch Creative Kit (one-time)</td><td>₹4,50,000</td></tr>
      <tr><td>Phase 2 — Creative &amp; Marketing Retainer (₹90,000 × 16 months)</td><td>₹14,40,000</td></tr>
      <tr><td><strong>Subtotal — Professional Fees</strong></td><td><strong>₹18,90,000</strong></td></tr>
      <tr><td>GST @ 18%</td><td>₹3,40,200</td></tr>
      <tr><td><strong>Total Payable (incl. GST)</strong></td><td><strong>₹22,30,200</strong></td></tr>
    </tbody>
  </table>

  <h3>5. Payment Milestones</h3>
  <ul>
    <li><strong>On signing</strong> — 30% of Phase 1 fee as mobilization advance.</li>
    <li><strong>On Phase 1 approval</strong> — balance Phase 1 fee on sign-off of identity + launch kit.</li>
    <li><strong>Retainer</strong> — billed <strong>quarterly in advance</strong> across four quarters (₹3,60,000 + GST per quarter).</li>
  </ul>

  <h3>6. Inclusions &amp; Pass-Through Costs</h3>
  <p>The fee above covers <strong>creative strategy, design, scripting, and execution-ready files</strong> (high-resolution, vendor-ready, print-optimised). The following are billed <strong>at actuals, separately</strong>: media buying / ad spend (Meta, Google, newspaper, hoarding rentals), printing &amp; fabrication, and full 3D-walkthrough video production/rendering. You retain full ownership of all delivered assets.</p>

  <h3>7. Why MeghRoop</h3>
  <p>One team, no handoffs — the people who build your brand are the people who run your campaigns. Direct founder access, fast turnarounds, and a unified identity across every physical, digital, and print medium.</p>

  <p>We would be glad to walk you through our approach and relevant work. Looking forward to a creative partnership.</p>
  <p>Sincerely,<br><strong>Meghansh Agarwal</strong><br>Founder, MeghRoop<br>hello@meghroop.tech · +91 89495 08264</p>
`.trim()

const PROPOSAL_TEMPLATES: Record<string, { label: string; title: string; sub: string; body: string }> = {
  generic: { label: 'Generic Proposal', title: 'PROPOSAL', sub: 'PREPARED FOR — CLIENT NAME', body: defaultBody },
  navkar: { label: 'Navkar Buildcon (RFP)', title: 'COMMERCIAL PROPOSAL', sub: 'NAVKAR BUILDCON · PREMIUM SERVICED APARTMENTS, JAIPUR', body: navkarBody },
}

/* ---------------------------- Toolbar ---------------------------- */

function ToolbarButton({ onClick, active, disabled, children, title }: {
  onClick: () => void; active?: boolean; disabled?: boolean; children: React.ReactNode; title: string
}) {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded-lg transition-all disabled:opacity-30 ${
        active ? 'bg-purple-600/20 text-purple-300' : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
      }`}
    >
      {children}
    </button>
  )
}

function Toolbar({ editor }: { editor: Editor | null }) {
  if (!editor) return null
  const Sep = () => <div className="h-4 w-px bg-white/[0.06] mx-1.5" />
  return (
    <div className="flex flex-wrap items-center gap-0.5">
      <ToolbarButton title="Bold" onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')}><Bold size={15} /></ToolbarButton>
      <ToolbarButton title="Italic" onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')}><Italic size={15} /></ToolbarButton>
      <ToolbarButton title="Underline" onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')}><UnderlineIcon size={15} /></ToolbarButton>
      <Sep />
      <ToolbarButton title="Heading" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })}><Heading2 size={15} /></ToolbarButton>
      <ToolbarButton title="Subheading" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })}><Heading3 size={15} /></ToolbarButton>
      <ToolbarButton title="Quote" onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')}><Quote size={15} /></ToolbarButton>
      <Sep />
      <ToolbarButton title="Bullet list" onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')}><List size={15} /></ToolbarButton>
      <ToolbarButton title="Numbered list" onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')}><ListOrdered size={15} /></ToolbarButton>
      <Sep />
      <ToolbarButton title="Align left" onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })}><AlignLeft size={15} /></ToolbarButton>
      <ToolbarButton title="Align center" onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })}><AlignCenter size={15} /></ToolbarButton>
      <ToolbarButton title="Align right" onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })}><AlignRight size={15} /></ToolbarButton>
      <Sep />
      <ToolbarButton title="Insert table" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 2, withHeaderRow: true }).run()}><TableIcon size={15} /></ToolbarButton>
      <ToolbarButton title="Horizontal rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}><Minus size={15} /></ToolbarButton>
      <Sep />
      <ToolbarButton title="Undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}><Undo size={15} /></ToolbarButton>
      <ToolbarButton title="Redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}><Redo size={15} /></ToolbarButton>
    </div>
  )
}

/* ---------------------------- Page ---------------------------- */

const DEFAULT_INVOICE: InvoiceData = {
  invoiceNumber: 'MR-2026-001',
  invoiceDate: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  clientName: 'Acme Corporation',
  clientAddress: '123 Innovation Boulevard, Suite 500\nSan Francisco, CA 94107',
  items: [
    { id: '1', description: 'Autonomous Outbound Agent System Setup & Training', rate: 4500 },
    { id: '2', description: 'n8n Workflow Automations & Airtable Sync', rate: 2200 },
    { id: '3', description: 'Custom Model Context Protocol (MCP) Server Engineering', rate: 3000 }
  ],
  taxPercent: 18,
  discountAmount: 500,
  paymentNotes: 'Thank you for working with MeghRoop!',
  currency: '₹',
  gstNumber: '08AAAAA1111A1Z1',
  clientGst: '',
  bankName: 'HDFC Bank',
  bankHolder: 'MeghRoop Tech Private Limited',
  bankAccount: '50200089495082',
  bankIfsc: 'HDFC0001234'
}

export default function LetterheadEditorPage() {
  const [activeTab, setActiveTab] = useState<'proposal' | 'invoice'>('proposal')
  const [lhMode, setLhMode] = useState<'light' | 'dark'>('light')
  const [documentTitle, setDocumentTitle] = useState('PROPOSAL')
  const [documentSub, setDocumentSub] = useState('PREPARED FOR — CLIENT NAME')
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(DEFAULT_INVOICE)
  const [isSaved, setIsSaved] = useState(true)
  const [hydrated, setHydrated] = useState(false)

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] }, link: false, underline: false }),
      Underline,
      Link.configure({ openOnClick: false, HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' } }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: 'Start writing your proposal…' }),
      TableKit.configure({ table: { resizable: false } }),
    ],
    content: defaultBody,
    editorProps: {
      attributes: { class: 'mr-prose focus:outline-none' },
    },
    onUpdate: () => setIsSaved(false),
  })

  // Load saved data once on mount.
  useEffect(() => {
    try {
      const savedTab = localStorage.getItem('mr_active_tab') as 'proposal' | 'invoice' | null
      const savedMode = localStorage.getItem('mr_lh_mode') as 'light' | 'dark' | null
      const savedTitle = localStorage.getItem('mr_lh_title')
      const savedSub = localStorage.getItem('mr_lh_sub')
      const savedBody = localStorage.getItem('mr_lh_body')
      const savedInvoice = localStorage.getItem('mr_invoice_data')

      if (savedTab) setActiveTab(savedTab)
      if (savedMode) setLhMode(savedMode)
      if (savedTitle) setDocumentTitle(savedTitle)
      if (savedSub) setDocumentSub(savedSub)
      if (savedBody && editor) editor.commands.setContent(savedBody)

      const parsed: Partial<InvoiceData> = savedInvoice ? JSON.parse(savedInvoice) : {}

      fetch('/api/admin/settings')
        .then((res) => res.json())
        .then((s) => {
          const items = (parsed.items || []).map((it) => ({
            id: it.id || Date.now().toString() + Math.random(),
            description: it.description || 'Deliverable Item',
            rate: typeof it.rate === 'number' ? it.rate : 1000,
          }))
          setInvoiceData({
            ...DEFAULT_INVOICE,
            ...parsed,
            items: items.length ? items : DEFAULT_INVOICE.items,
            gstNumber: parsed.gstNumber || s?.gst_number || DEFAULT_INVOICE.gstNumber,
            bankName: parsed.bankName || s?.bank_name || DEFAULT_INVOICE.bankName,
            bankHolder: parsed.bankHolder || s?.bank_holder || DEFAULT_INVOICE.bankHolder,
            bankAccount: parsed.bankAccount || s?.bank_account || DEFAULT_INVOICE.bankAccount,
            bankIfsc: parsed.bankIfsc || s?.bank_ifsc || DEFAULT_INVOICE.bankIfsc,
          })
        })
        .catch(() => {
          if (savedInvoice) setInvoiceData((prev) => ({ ...prev, ...parsed }))
        })
    } catch (e) {
      console.error('Error loading stored letterhead data:', e)
    } finally {
      setHydrated(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor])

  // Auto-save (debounced).
  useEffect(() => {
    if (!hydrated || isSaved) return
    const timer = setTimeout(() => {
      try {
        localStorage.setItem('mr_active_tab', activeTab)
        localStorage.setItem('mr_lh_mode', lhMode)
        localStorage.setItem('mr_lh_title', documentTitle)
        localStorage.setItem('mr_lh_sub', documentSub)
        if (editor) localStorage.setItem('mr_lh_body', editor.getHTML())
        localStorage.setItem('mr_invoice_data', JSON.stringify(invoiceData))
        setIsSaved(true)
      } catch (e) {
        console.error('Auto-save error:', e)
      }
    }, 700)
    return () => clearTimeout(timer)
  }, [hydrated, isSaved, activeTab, lhMode, documentTitle, documentSub, invoiceData, editor])

  const touch = useCallback(() => setIsSaved(false), [])

  const handleInvoiceChange = (field: keyof InvoiceData, value: string | number) => {
    setInvoiceData((prev) => ({ ...prev, [field]: value }))
    touch()
  }
  const handleItemChange = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.map((it) => (it.id === id ? { ...it, [field]: field === 'rate' ? Number(value) : value } : it)),
    }))
    touch()
  }
  const addInvoiceItem = () => {
    setInvoiceData((prev) => ({ ...prev, items: [...prev.items, { id: Date.now().toString(), description: 'New Deliverable / Service', rate: 1000 }] }))
    touch()
  }
  const deleteInvoiceItem = (id: string) => {
    setInvoiceData((prev) => ({ ...prev, items: prev.items.filter((it) => it.id !== id) }))
    touch()
  }

  const subtotal = invoiceData.items.reduce((s, it) => s + it.rate, 0)
  const taxAmount = Math.round(subtotal * (invoiceData.taxPercent / 100))
  const grandTotal = subtotal + taxAmount - invoiceData.discountAmount

  const loadTemplate = (key: string) => {
    const t = PROPOSAL_TEMPLATES[key]
    if (!t || !editor) return
    if (!confirm(`Load the "${t.label}" template? This replaces the current proposal content.`)) return
    setActiveTab('proposal')
    setDocumentTitle(t.title)
    setDocumentSub(t.sub)
    editor.commands.setContent(t.body)
    touch()
  }

  const handleReset = () => {
    if (!confirm('Reset to default values? Your edits will be lost.')) return
    if (activeTab === 'proposal') {
      setDocumentTitle('PROPOSAL')
      setDocumentSub('PREPARED FOR — CLIENT NAME')
      editor?.commands.setContent(defaultBody)
    } else {
      setInvoiceData(DEFAULT_INVOICE)
    }
    touch()
  }

  const handlePrint = () => window.print()

  const isDark = lhMode === 'dark'
  const bg = isDark ? '#080808' : '#ffffff'
  const border = isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #eeeeee'
  const nameC = isDark ? '#ffffff' : '#111111'
  const subC = isDark ? '#a1a1aa' : '#666666'
  const bodyC = isDark ? '#d4d4d8' : '#374151'
  const labelC = isDark ? '#71717a' : '#4b5563'
  const tableBorder = isDark ? 'rgba(255,255,255,0.05)' : '#e5e7eb'
  const footerBorder = isDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb'
  const footC = isDark ? '#52525b' : '#9ca3af'
  const gradL = isDark ? '#c084fc' : '#9333ea'
  const gradR = isDark ? '#60a5fa' : '#3b82f6'

  const BrandHeader = () => (
    <>
      <div className="px-12 pt-10 pb-0">
        <table cellPadding="0" cellSpacing="0" className="w-full">
          <tbody>
            <tr>
              <td className="w-[44px] align-middle"><img src="/icon-96.png" width="44" height="44" alt="Monogram" className="block rounded-[10px] bg-[#0d0d0d] w-11 h-11" /></td>
              <td className="px-3.5 w-1 align-middle"><div className="w-[2px] h-[38px] rounded-[1px]" style={{ background: gradL }} /></td>
              <td className="align-middle">
                <p className="m-0 text-xl font-bold tracking-tight" style={{ color: nameC, letterSpacing: '-0.02em' }}>MeghRoop</p>
                <p className="m-0 text-[10px] font-semibold tracking-widest uppercase" style={{ color: subC, letterSpacing: '0.14em' }}>Growth · AI · Software Agency</p>
              </td>
              <td className="text-right align-middle">
                <p className="m-0 text-[11px] leading-[1.8] font-medium" style={{ color: bodyC }}>
                  <a href="https://meghroop.tech" target="_blank" rel="noopener noreferrer" style={{ color: '#c084fc', textDecoration: 'none' }}>meghroop.tech</a><br />
                  hello@meghroop.tech<br />Rajasthan, India
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-12 pt-4 pb-0"><div className="h-[2px] rounded-[2px]" style={{ background: `linear-gradient(90deg, ${gradL}, ${gradR}, transparent)` }} /></div>
    </>
  )

  const BrandFooter = () => (
    <div className="mr-doc-footer" style={{ borderTop: `1px solid ${footerBorder}`, padding: '8px 48px 12px', background: bg }}>
      <table cellPadding="0" cellSpacing="0" className="w-full">
        <tbody>
          <tr>
            <td className="text-[10px] font-medium" style={{ color: footC }}>MeghRoop &middot; Growth, AI &amp; Software Agency</td>
            <td className="text-right text-[10px] font-medium" style={{ color: footC }}>meghroop.tech &middot; Rajasthan, India</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="min-h-screen bg-neutral-900/40 text-gray-100 flex flex-col relative pb-20">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .mr-prose { font-size: 14px; line-height: 1.6; min-height: 400px; }
        .mr-prose:focus { outline: none; }
        .mr-prose h2 { font-size: 17px; font-weight: 700; margin: 22px 0 8px; letter-spacing: -0.01em; }
        .mr-prose h3 { font-size: 14px; font-weight: 700; margin: 18px 0 7px; }
        .mr-prose > :first-child { margin-top: 0; }
        .mr-prose p { margin: 0 0 10px; }
        .mr-prose ul, .mr-prose ol { margin: 0 0 12px; padding-left: 20px; }
        .mr-prose ul { list-style: disc; }
        .mr-prose ol { list-style: decimal; }
        .mr-prose li { margin: 0 0 5px; }
        .mr-prose blockquote { border-left: 3px solid ${gradL}; padding-left: 14px; margin: 0 0 12px; font-style: italic; }
        .mr-prose hr { border: none; border-top: 1px solid ${tableBorder}; margin: 16px 0; }
        .mr-prose table { width: 100%; border-collapse: collapse; margin: 10px 0 14px; font-size: 12.5px; }
        .mr-prose th, .mr-prose td { border: 1px solid #9ca3af; padding: 7px 10px; text-align: left; vertical-align: top; }
        .mr-prose thead th { background: rgba(127,127,127,0.14); font-weight: 700; }
        .mr-prose strong { font-weight: 700; }
        .mr-prose p.is-editor-empty:first-child::before {
          content: attr(data-placeholder); float: left; color: #9ca3af; pointer-events: none; height: 0;
        }

        @media print {
          @page { size: A4 portrait; margin: 16mm 0; }
          aside, header, nav, .no-print, .invoice-form-pane, .admin-sidebar { display: none !important; }
          html, body, main, body > div, .ml-56 {
            display: block !important; margin: 0 !important; padding: 0 !important;
            width: 100% !important; max-width: none !important; box-shadow: none !important;
            border: none !important; position: static !important; height: auto !important;
            min-height: 0 !important; transform: none !important; background: ${bg} !important;
          }
          .print-sheet {
            width: 100% !important; max-width: none !important; margin: 0 !important; padding: 0 !important;
            border: none !important; box-shadow: none !important; border-radius: 0 !important;
            background: ${bg} !important; color: ${nameC} !important;
            font-family: 'Space Grotesk', sans-serif !important;
          }
          .mr-doc-footer { display: none !important; }
          .mr-prose h2, .mr-prose h3 { break-after: avoid; page-break-after: avoid; }
          .mr-prose ul, .mr-prose ol, .mr-prose table, .mr-prose li, .mr-prose tr, .mr-prose blockquote, .mr-prose img { break-inside: avoid; page-break-inside: avoid; }
          .mr-prose p { orphans: 3; widows: 3; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      {/* App header (UI only — not printed) */}
      <header className="no-print bg-[#0c0c0c] border-b border-white/[0.06] sticky top-0 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-600/10 text-purple-400 border border-purple-500/20"><Sparkles size={18} /></div>
            <div>
              <h1 className="text-md font-bold text-white tracking-tight">MeghRoop Workspace</h1>
              <p className="text-xs text-gray-500 font-medium">Create high-end PDF documents</p>
            </div>
          </div>
          <div className="flex bg-white/[0.02] border border-white/[0.06] rounded-xl p-1 gap-1">
            <button onClick={() => { setActiveTab('proposal'); touch() }} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${activeTab === 'proposal' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25' : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'}`}><FileText size={14} /> Proposal / Letter</button>
            <button onClick={() => { setActiveTab('invoice'); touch() }} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${activeTab === 'invoice' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25' : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'}`}><Receipt size={14} /> Invoice</button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 px-3 py-1.5 bg-white/[0.02] rounded-full border border-white/[0.04]">
            {isSaved ? <><CheckCircle2 size={13} className="text-emerald-500" /> <span>Saved locally</span></> : <><RefreshCw size={13} className="text-amber-500 animate-spin" /> <span>Saving draft…</span></>}
          </div>
          <button onClick={() => { setLhMode((p) => (p === 'light' ? 'dark' : 'light')); touch() }} className="p-2 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-all">{isDark ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button onClick={handleReset} className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-all">Reset</button>
          <button onClick={handlePrint} className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20 active:scale-95 transition-all"><Printer size={15} /> Download PDF</button>
        </div>
      </header>

      {/* Formatting toolbar (proposal only) */}
      {activeTab === 'proposal' && (
        <div className="no-print bg-[#090909] border-b border-white/[0.04] px-6 py-2 flex flex-wrap items-center gap-1.5 z-10 sticky top-[73px]">
          <Toolbar editor={editor} />
          <div className="ml-auto flex items-center gap-2">
            <span className="text-[11px] text-gray-500 hidden sm:inline">Template</span>
            <select defaultValue="" onChange={(e) => { const v = e.target.value; e.currentTarget.value = ''; if (v) loadTemplate(v) }} className="bg-[#141414] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-purple-500/50 cursor-pointer">
              <option value="">Load template…</option>
              {Object.entries(PROPOSAL_TEMPLATES).map(([key, t]) => (<option key={key} value={key}>{t.label}</option>))}
            </select>
          </div>
        </div>
      )}

      <div className={`flex-1 flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto w-full ${activeTab === 'invoice' ? 'lg:items-start' : 'justify-center'}`}>
        {/* Invoice form pane */}
        {activeTab === 'invoice' && (
          <div className="invoice-form-pane no-print w-full lg:w-[45%] bg-[#0c0c0c] border border-white/[0.06] rounded-2xl p-6 space-y-6">
            <div className="border-b border-white/[0.06] pb-4">
              <h2 className="text-sm font-bold text-white tracking-wide uppercase">Invoice Parameters</h2>
              <p className="text-xs text-gray-500 mt-1">Populate parameters to calculate subtotals &amp; render preview</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Invoice Number</label>
                <input type="text" value={invoiceData.invoiceNumber} onChange={(e) => handleInvoiceChange('invoiceNumber', e.target.value)} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-mono" />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Tax Rate (%)</label>
                <input type="number" value={invoiceData.taxPercent} onChange={(e) => handleInvoiceChange('taxPercent', Number(e.target.value))} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-mono" />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Discount ({invoiceData.currency})</label>
                <input type="number" value={invoiceData.discountAmount} onChange={(e) => handleInvoiceChange('discountAmount', Number(e.target.value))} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-mono" />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Currency</label>
                <select value={invoiceData.currency} onChange={(e) => handleInvoiceChange('currency', e.target.value)} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all">
                  {CURRENCIES.map((c) => <option key={c.symbol} value={c.symbol}>{c.label}</option>)}
                </select>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Client / Business Name</label>
                <input type="text" value={invoiceData.clientName} onChange={(e) => handleInvoiceChange('clientName', e.target.value)} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all" />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Client Address</label>
                <textarea rows={2} value={invoiceData.clientAddress} onChange={(e) => handleInvoiceChange('clientAddress', e.target.value)} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all resize-none" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Line Items</span>
                <button type="button" onClick={addInvoiceItem} className="flex items-center gap-1 text-[10px] text-purple-400 hover:text-purple-300 font-bold uppercase tracking-wider"><Plus size={11} /> Add Item</button>
              </div>
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                {invoiceData.items.map((item, idx) => (
                  <div key={item.id} className="p-3 bg-white/[0.01] border border-white/[0.04] rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-500 font-bold uppercase">Item #{idx + 1}</span>
                      <button type="button" onClick={() => deleteInvoiceItem(item.id)} className="text-gray-600 hover:text-red-400"><Trash2 size={12} /></button>
                    </div>
                    <input type="text" value={item.description} onChange={(e) => handleItemChange(item.id, 'description', e.target.value)} className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none" />
                    <input type="number" value={item.rate} onChange={(e) => handleItemChange(item.id, 'rate', e.target.value)} className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-3 py-1 text-xs text-white focus:outline-none font-mono" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Document sheet */}
        <div className={`flex-1 flex flex-col items-center ${activeTab === 'invoice' ? 'lg:w-[55%]' : 'w-full'}`}>
          {activeTab === 'proposal' ? (
            <div className="print-sheet relative w-full max-w-[680px] rounded-2xl shadow-2xl border text-left" style={{ fontFamily: "'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif", background: bg, border, width: '680px', minHeight: '962px', boxSizing: 'border-box' }}>
              <div style={{ height: '12mm' }} />
              <BrandHeader />
              <div className="px-12 py-8">
                <div className="mb-4">
                  <input type="text" value={documentSub} onChange={(e) => { setDocumentSub(e.target.value); touch() }} className="no-print-bg w-full bg-transparent border-none outline-none font-semibold text-[11px] tracking-widest uppercase mb-3 focus:bg-white/[0.02] p-1 rounded transition-all" style={{ color: subC, letterSpacing: '0.14em' }} placeholder="DOCUMENT SUBTITLE / BRIEF" />
                  <input type="text" value={documentTitle} onChange={(e) => { setDocumentTitle(e.target.value); touch() }} className="w-full bg-transparent border-none outline-none font-bold text-2xl tracking-tight mb-5 focus:bg-white/[0.02] p-1 rounded transition-all" style={{ color: nameC, letterSpacing: '-0.02em' }} placeholder="Proposal / Invoice / Letter" />
                </div>
                <EditorContent editor={editor} style={{ color: bodyC }} />
              </div>
              <BrandFooter />
            </div>
          ) : (
            <div className="print-sheet relative w-full max-w-[680px] rounded-2xl shadow-2xl border text-left flex flex-col justify-between" style={{ fontFamily: "'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif", background: bg, border, minHeight: '962px', boxSizing: 'border-box' }}>
              <div style={{ height: '12mm' }} />
              <BrandHeader />
              <div className="px-12 py-8 space-y-6 flex-1">
                <div><h2 className="font-bold text-2xl tracking-tight m-0" style={{ color: nameC, letterSpacing: '-0.02em' }}>INVOICE</h2><p className="text-[10px] font-semibold tracking-widest uppercase m-0 mt-1" style={{ color: subC, letterSpacing: '0.14em' }}>Official Billing Statement</p></div>
                <div className="grid grid-cols-3 gap-6 text-[10px] border-y py-4" style={{ borderColor: tableBorder }}>
                  <div className="space-y-1"><span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>BILLED TO:</span><p className="font-bold m-0 text-[11px] leading-tight" style={{ color: nameC }}>{invoiceData.clientName || 'Client Name'}</p><p className="m-0 text-[10px] whitespace-pre-line" style={{ color: subC }}>{invoiceData.clientAddress}</p></div>
                  <div className="space-y-1"><span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>BANK DETAILS:</span><p className="font-bold m-0 text-[11px] leading-tight" style={{ color: nameC }}>{invoiceData.bankName}</p><p className="m-0 text-[10px]" style={{ color: subC }}>A/C {invoiceData.bankAccount}<br />IFSC {invoiceData.bankIfsc}</p></div>
                  <div className="space-y-2 text-right"><div><span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>INVOICE NUMBER:</span><span className="font-mono font-bold text-[11px]" style={{ color: nameC }}>{invoiceData.invoiceNumber}</span></div><div><span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>DATE:</span><span className="font-mono text-[11px]" style={{ color: nameC }}>{invoiceData.invoiceDate}</span></div></div>
                </div>
                <div className="overflow-x-auto"><table className="w-full text-xs text-left border-collapse"><thead><tr className="border-b" style={{ borderColor: tableBorder }}><th className="py-2.5 font-bold tracking-wider" style={{ color: labelC }}>DESCRIPTION</th><th className="py-2.5 text-right font-bold tracking-wider w-32" style={{ color: labelC }}>AMOUNT</th></tr></thead><tbody>{invoiceData.items.map((item) => (<tr key={item.id} className="border-b" style={{ borderColor: tableBorder }}><td className="py-3 pr-4 font-medium" style={{ color: nameC }}>{item.description}</td><td className="py-3 text-right font-mono font-bold" style={{ color: nameC }}>{invoiceData.currency}{item.rate.toLocaleString()}</td></tr>))}</tbody></table></div>
                <div className="flex justify-end">
                  <div className="w-64 space-y-1.5 text-xs">
                    <div className="flex justify-between" style={{ color: subC }}><span>Subtotal</span><span className="font-mono">{invoiceData.currency}{subtotal.toLocaleString()}</span></div>
                    <div className="flex justify-between" style={{ color: subC }}><span>Tax ({invoiceData.taxPercent}%)</span><span className="font-mono">{invoiceData.currency}{taxAmount.toLocaleString()}</span></div>
                    {invoiceData.discountAmount > 0 && <div className="flex justify-between" style={{ color: subC }}><span>Discount</span><span className="font-mono">−{invoiceData.currency}{invoiceData.discountAmount.toLocaleString()}</span></div>}
                    <div className="flex justify-between pt-2 border-t font-bold text-sm" style={{ borderColor: tableBorder, color: nameC }}><span>Total Due</span><span className="font-mono">{invoiceData.currency}{grandTotal.toLocaleString()}</span></div>
                  </div>
                </div>
                {invoiceData.paymentNotes && <p className="text-[11px] italic" style={{ color: subC }}>{invoiceData.paymentNotes}</p>}
              </div>
              <BrandFooter />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
