'use client'

import React, { useState, useEffect, useRef } from 'react'
import { 
  Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, 
  Printer, Sun, Moon, Sparkles, CheckCircle2, CloudSync, Undo, Redo,
  Plus, Trash2, FileText, Receipt
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

  <h3>4. Commercial Proposal <span style="font-weight:400;font-size:12px;color:#9ca3af;">(indicative — to be finalised)</span></h3>
  <table>
    <thead>
      <tr>
        <th>Component</th>
        <th>Professional Fee (INR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Phase 1 — Brand Identity &amp; Launch Creative Kit (one-time)</td>
        <td>₹4,50,000</td>
      </tr>
      <tr>
        <td>Phase 2 — Creative &amp; Marketing Retainer (₹90,000 × 16 months)</td>
        <td>₹14,40,000</td>
      </tr>
      <tr>
        <td><strong>Subtotal — Professional Fees</strong></td>
        <td><strong>₹18,90,000</strong></td>
      </tr>
      <tr>
        <td>GST @ 18%</td>
        <td>₹3,40,200</td>
      </tr>
      <tr>
        <td><strong>Total Payable (incl. GST)</strong></td>
        <td><strong>₹22,30,200</strong></td>
      </tr>
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

// Selectable proposal templates (default stays generic; load others on demand)
const PROPOSAL_TEMPLATES: Record<string, { label: string; title: string; sub: string; body: string }> = {
  generic: { label: 'Generic Proposal', title: 'PROPOSAL', sub: 'PREPARED FOR — CLIENT NAME', body: defaultBody },
  navkar: { label: 'Navkar Buildcon (RFP)', title: 'COMMERCIAL PROPOSAL', sub: 'NAVKAR BUILDCON · PREMIUM SERVICED APARTMENTS, JAIPUR', body: navkarBody },
}

export default function LetterheadEditorPage() {
  const [activeTab, setActiveTab] = useState<'proposal' | 'invoice'>('proposal')
  const [lhMode, setLhMode] = useState<'light' | 'dark'>('light')
  
  // Proposal State
  const [documentTitle, setDocumentTitle] = useState('PROPOSAL')
  const [documentSub, setDocumentSub] = useState('PREPARED FOR — CLIENT NAME')
  const editorRef = useRef<HTMLDivElement>(null)

  // Invoice State
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
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
  })

  const [isSaved, setIsSaved] = useState(true)

  // Load from LocalStorage and settings API defaults
  useEffect(() => {
    try {
      const savedTab = localStorage.getItem('mr_active_tab') as 'proposal' | 'invoice'
      const savedMode = localStorage.getItem('mr_lh_mode') as 'light' | 'dark'
      
      // Load Proposal Content
      const savedTitle = localStorage.getItem('mr_lh_title')
      const savedSub = localStorage.getItem('mr_lh_sub')
      const savedBody = localStorage.getItem('mr_lh_body')

      // Load Invoice Content
      const savedInvoice = localStorage.getItem('mr_invoice_data')

      if (savedTab) setActiveTab(savedTab)
      if (savedMode) setLhMode(savedMode)
      if (savedTitle) setDocumentTitle(savedTitle)
      if (savedSub) setDocumentSub(savedSub)
      
      if (editorRef.current && (savedTab === 'proposal' || !savedTab)) {
        editorRef.current.innerHTML = savedBody || defaultBody
      } else if (editorRef.current && !savedBody) {
        editorRef.current.innerHTML = defaultBody
      }

      let parsedInvoice: Partial<InvoiceData> = {}
      if (savedInvoice) {
        parsedInvoice = JSON.parse(savedInvoice)
      }

      // Fetch dynamic defaults from Settings API and merge
      fetch('/api/admin/settings')
        .then((res) => res.json())
        .then((settingsData) => {
          const migratedItems = (parsedInvoice.items || []).map((item: { id?: string; description?: string; rate?: number }) => ({
            id: item.id || Date.now().toString() + Math.random().toString(),
            description: item.description || 'Deliverable Item',
            rate: typeof item.rate === 'number' ? item.rate : 1000
          }))

          setInvoiceData({
            invoiceNumber: parsedInvoice.invoiceNumber || 'MR-2026-001',
            invoiceDate: parsedInvoice.invoiceDate || new Date().toISOString().split('T')[0],
            dueDate: parsedInvoice.dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            clientName: parsedInvoice.clientName || '',
            clientAddress: parsedInvoice.clientAddress || '',
            items: migratedItems.length ? migratedItems : [
              { id: '1', description: 'Autonomous Outbound Agent System Setup & Training', rate: 4500 },
              { id: '2', description: 'n8n Workflow Automations & Airtable Sync', rate: 2200 },
              { id: '3', description: 'Custom Model Context Protocol (MCP) Server Engineering', rate: 3000 }
            ],
            taxPercent: typeof parsedInvoice.taxPercent === 'number' ? parsedInvoice.taxPercent : 18,
            discountAmount: typeof parsedInvoice.discountAmount === 'number' ? parsedInvoice.discountAmount : 500,
            paymentNotes: parsedInvoice.paymentNotes || 'Thank you for working with MeghRoop!',
            currency: parsedInvoice.currency || '₹',
            gstNumber: parsedInvoice.gstNumber || settingsData.gst_number || '08AAAAA1111A1Z1',
            clientGst: parsedInvoice.clientGst || '',
            bankName: parsedInvoice.bankName || settingsData.bank_name || 'HDFC Bank',
            bankHolder: parsedInvoice.bankHolder || settingsData.bank_holder || 'MeghRoop Tech Private Limited',
            bankAccount: parsedInvoice.bankAccount || settingsData.bank_account || '50200089495082',
            bankIfsc: parsedInvoice.bankIfsc || settingsData.bank_ifsc || 'HDFC0001234'
          })
        })
        .catch((err) => {
          console.error('Error fetching settings default:', err)
          const migratedItems = (parsedInvoice.items || []).map((item: { id?: string; description?: string; rate?: number }) => ({
            id: item.id || Date.now().toString() + Math.random().toString(),
            description: item.description || 'Deliverable Item',
            rate: typeof item.rate === 'number' ? item.rate : 1000
          }))

          setInvoiceData(prev => ({
            ...prev,
            ...parsedInvoice,
            items: migratedItems.length ? migratedItems : prev.items
          }))
        })
    } catch (e) {
      console.error('Error loading stored letterhead data:', e)
    }
  }, [])

  // Secondary effect to fill editor when switching back to proposal if empty
  useEffect(() => {
    if (activeTab === 'proposal' && editorRef.current && !editorRef.current.innerHTML) {
      const savedBody = localStorage.getItem('mr_lh_body')
      editorRef.current.innerHTML = savedBody || defaultBody
    }
  }, [activeTab])

  // Debounced auto-save triggers
  const handleContentChange = () => {
    setIsSaved(false)
  }

  useEffect(() => {
    if (isSaved) return

    const timer = setTimeout(() => {
      try {
        localStorage.setItem('mr_active_tab', activeTab)
        localStorage.setItem('mr_lh_mode', lhMode)
        localStorage.setItem('mr_lh_title', documentTitle)
        localStorage.setItem('mr_lh_sub', documentSub)
        if (editorRef.current) {
          localStorage.setItem('mr_lh_body', editorRef.current.innerHTML)
        }
        localStorage.setItem('mr_invoice_data', JSON.stringify(invoiceData))
        setIsSaved(true)
      } catch (e) {
        console.error('Auto-save error:', e)
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [activeTab, lhMode, documentTitle, documentSub, invoiceData, isSaved])

  // Formatting Command Wrapper
  const executeCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value)
    handleContentChange()
    if (editorRef.current) editorRef.current.focus()
  }

  // Invoice Handlers
  const handleInvoiceChange = (field: keyof InvoiceData, value: string | number | InvoiceItem[]) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: value
    }))
    setIsSaved(false)
  }

  const handleItemChange = (itemId: string, field: keyof InvoiceItem, value: string | number) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.map(item => {
        if (item.id === itemId) {
          const updatedValue = field === 'rate' ? Number(value) : value
          return { ...item, [field]: updatedValue }
        }
        return item
      })
    }))
    setIsSaved(false)
  }

  const addInvoiceItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: 'New Deliverable / Service',
      rate: 1000
    }
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }))
    setIsSaved(false)
  }

  const deleteInvoiceItem = (itemId: string) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId)
    }))
    setIsSaved(false)
  }

  // Invoice Math Calculations (Removed Quantity dependency)
  const subtotal = invoiceData.items.reduce((sum, item) => sum + item.rate, 0)
  const taxAmount = Math.round(subtotal * (invoiceData.taxPercent / 100))
  const grandTotal = subtotal + taxAmount - invoiceData.discountAmount

  const handlePrint = () => {
    window.print()
  }

  const loadTemplate = (key: string) => {
    const t = PROPOSAL_TEMPLATES[key]
    if (!t) return
    if (!confirm(`Load the "${t.label}" template? This replaces the current proposal content.`)) return
    setActiveTab('proposal')
    setDocumentTitle(t.title)
    setDocumentSub(t.sub)
    if (editorRef.current) editorRef.current.innerHTML = t.body
    handleContentChange()
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset this template to the default values? Your edits will be lost.')) {
      if (activeTab === 'proposal') {
        setDocumentTitle('PROPOSAL')
        setDocumentSub('PREPARED FOR — CLIENT NAME')
        if (editorRef.current) {
          editorRef.current.innerHTML = defaultBody
        }
      } else {
        setInvoiceData({
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
        })
      }
      setIsSaved(false)
    }
  }

  const isDark = lhMode === 'dark'
  
  // High-fidelity styles matching logo-kit.html standards exactly
  const bg = isDark ? '#080808' : '#ffffff'
  const border = isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #eeeeee'
  const nameC = isDark ? '#ffffff' : '#111111'
  const subC = isDark ? '#a1a1aa' : '#666666'
  const bodyC = isDark ? '#d4d4d8' : '#374151' // zinc-300 on dark, gray-700 on light
  const labelC = isDark ? '#71717a' : '#4b5563' // zinc-500 on dark, gray-600 on light
  const tableBorder = isDark ? 'rgba(255,255,255,0.05)' : '#e5e7eb'
  const footerBorder = isDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb'
  const footC = isDark ? '#52525b' : '#9ca3af' // zinc-600 on dark, gray-400 on light
  const gradL = isDark ? '#c084fc' : '#9333ea' // Purple-400 vs Purple-600
  const gradR = isDark ? '#60a5fa' : '#3b82f6' // Blue-400 vs Blue-600

  return (
    <div className="min-h-screen bg-neutral-900/40 text-gray-100 flex flex-col relative pb-20">
      
      {/* Dynamic High-Fidelity Print CSS Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        /* Proposal body typography (screen + print) — restores headings / lists /
           tables that Tailwind's preflight strips inside the contenteditable editor */
        .print-sheet .prose h2 { font-size: 17px; font-weight: 700; margin: 22px 0 8px; letter-spacing: -0.01em; }
        .print-sheet .prose h3 { font-size: 14px; font-weight: 700; margin: 18px 0 7px; }
        .print-sheet .prose h2:first-child, .print-sheet .prose h3:first-child { margin-top: 0; }
        .print-sheet .prose p { margin: 0 0 10px; line-height: 1.6; }
        .print-sheet .prose ul, .print-sheet .prose ol { margin: 0 0 12px; padding-left: 20px; }
        .print-sheet .prose ul { list-style: disc; }
        .print-sheet .prose ol { list-style: decimal; }
        .print-sheet .prose li { margin: 0 0 5px; line-height: 1.55; }
        .print-sheet .prose table { width: 100%; border-collapse: collapse; margin: 10px 0 14px; font-size: 12.5px; }
        .print-sheet .prose th, .print-sheet .prose td { border: 1px solid #9ca3af; padding: 7px 10px; text-align: left; vertical-align: top; }
        .print-sheet .prose thead th { background: rgba(127,127,127,0.14); font-weight: 700; }
        .print-sheet .prose td:last-child, .print-sheet .prose th:last-child { text-align: right; white-space: nowrap; }
        .print-sheet .prose strong { font-weight: 700; }

        @media print {
          /* A4 page with proper margins — 10mm top/bottom on EVERY page,
             full-bleed left/right so dark background goes edge-to-edge */
          @page {
            size: A4 portrait;
            margin: 10mm 0;
          }

          /* Hide sidebar, dashboards, control panels, forms, navigation elements, and background frames */
          aside,
          header,
          nav,
          [aria-label="Mobile navigation"],
          .no-print,
          .invoice-form-pane,
          .admin-sidebar {
            display: none !important;
          }

          /* Reset all parent container layouts to be transparent static block elements */
          main, 
          body, 
          html,
          .min-h-screen,
          .flex-1,
          .max-w-7xl,
          .main-content-wrapper {
            margin: 0 !important;
            padding: 0 !important;
            background: transparent !important;
            box-shadow: none !important;
            border: none !important;
            display: block !important;
            position: static !important;
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
          }

          /* Paint every printed page with the document's theme colour */
          html, body { background: ${bg} !important; }

          /* WYSIWYG A4 sheet — display:block so all Tailwind padding (px-12,
             pt-10, pb-8 etc.) works identically in print as on screen.
             Previous display:table approach killed child padding. */
          .print-sheet {
            width: 210mm !important;
            max-width: none !important;
            min-height: 0 !important;
            height: auto !important;
            max-height: none !important;
            margin: 0 auto !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            box-sizing: border-box !important;
            background: ${bg} !important;
            color: ${nameC} !important;
            font-family: 'Space Grotesk', sans-serif !important;
            display: block !important;
            overflow: visible !important;
            position: static !important;
          }

          /* Print-only footer — fixed positioning repeats it on every page */
          .print-footer {
            display: block !important;
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            background: ${bg} !important;
          }

          /* Keep sections together so a heading never sits alone at a page bottom,
             and lists / tables don't split across pages */
          .print-sheet h2, .print-sheet h3 {
            break-after: avoid !important; page-break-after: avoid !important;
            break-inside: avoid !important; page-break-inside: avoid !important;
          }
          .print-sheet ul, .print-sheet ol, .print-sheet table,
          .print-sheet li, .print-sheet tr, .print-sheet p, .print-sheet img {
            break-inside: avoid !important; page-break-inside: avoid !important;
          }
          .print-sheet p { orphans: 3; widows: 3; }

          .print-sheet input, 
          .print-sheet textarea {
            background: transparent !important;
            color: ${nameC} !important;
            border: none !important;
          }

          /* Force exact backgrounds and text colors in PDF printer */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Explicit print top-margin class — safety net to guarantee top spacing */
          .print-top-margin {
            padding-top: 40px !important;
          }
        }
      `}</style>

      {/* Primary Workspace Control Bar (no-print) */}
      <header className="no-print bg-[#0c0c0c] border-b border-white/[0.06] sticky top-0 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        
        {/* Navigation & Brand Branding */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-600/10 text-purple-400 border border-purple-500/20">
              <Sparkles size={18} />
            </div>
            <div>
              <h1 className="text-md font-bold text-white tracking-tight">MeghRoop Workspace</h1>
              <p className="text-xs text-gray-500 font-medium">Create high-end PDF documents</p>
            </div>
          </div>

          {/* Segmented Mode Selector Tab Control */}
          <div className="flex bg-white/[0.02] border border-white/[0.06] rounded-xl p-1 gap-1">
            <button
              onClick={() => {
                setActiveTab('proposal')
                setIsSaved(false)
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'proposal' 
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25' 
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <FileText size={14} />
              Proposal / Letter
            </button>
            <button
              onClick={() => {
                setActiveTab('invoice')
                setIsSaved(false)
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'invoice' 
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25' 
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <Receipt size={14} />
              Invoice
            </button>
          </div>
        </div>

        {/* Global Toolbar Action Controls */}
        <div className="flex items-center gap-3">
          {/* Cloud Auto-saving Indicator */}
          <div className="flex items-center gap-1.5 text-xs text-gray-400 px-3 py-1.5 bg-white/[0.02] rounded-full border border-white/[0.04]">
            {isSaved ? (
              <>
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span>Saved locally</span>
              </>
            ) : (
              <>
                <CloudSync size={13} className="text-amber-500 animate-spin" />
                <span>Saving draft...</span>
              </>
            )}
          </div>

          {/* Dark/Light Letterhead Toggle */}
          <button
            onClick={() => {
              setLhMode(prev => prev === 'light' ? 'dark' : 'light')
              setIsSaved(false)
            }}
            className="p-2 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-all"
            title="Toggle Document Theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Reset Template values */}
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-all"
          >
            Reset
          </button>

          {/* Core Print / PDF Generator */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20 active:scale-95 transition-all"
          >
            <Printer size={15} />
            Download PDF
          </button>
        </div>
      </header>

      {/* WYSIWYG Styling Toolbar - ONLY visible in free-form Proposal mode (no-print) */}
      {activeTab === 'proposal' && (
        <div className="no-print bg-[#090909] border-b border-white/[0.04] px-6 py-2 flex flex-wrap items-center gap-1.5 z-10 sticky top-[73px]">
          <button
            onClick={() => executeCommand('bold')}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            title="Bold (Ctrl+B)"
          >
            <Bold size={15} />
          </button>
          <button
            onClick={() => executeCommand('italic')}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            title="Italic (Ctrl+I)"
          >
            <Italic size={15} />
          </button>
          <button
            onClick={() => executeCommand('underline')}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            title="Underline (Ctrl+U)"
          >
            <Underline size={15} />
          </button>

          <div className="h-4 w-px bg-white/[0.06] mx-2" />

          <button
            onClick={() => executeCommand('justifyLeft')}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            title="Align Left"
          >
            <AlignLeft size={15} />
          </button>
          <button
            onClick={() => executeCommand('justifyCenter')}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            title="Align Center"
          >
            <AlignCenter size={15} />
          </button>
          <button
            onClick={() => executeCommand('justifyRight')}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            title="Align Right"
          >
            <AlignRight size={15} />
          </button>

          <div className="h-4 w-px bg-white/[0.06] mx-2" />

          <button
            onClick={() => executeCommand('insertUnorderedList')}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            title="Bullet List"
          >
            <List size={15} />
          </button>
          <button
            onClick={() => executeCommand('insertOrderedList')}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            title="Numbered List"
          >
            <ListOrdered size={15} />
          </button>

          <div className="h-4 w-px bg-white/[0.06] mx-2" />

          <button
            onClick={() => executeCommand('undo')}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            title="Undo"
          >
            <Undo size={15} />
          </button>
          <button
            onClick={() => executeCommand('redo')}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            title="Redo"
          >
            <Redo size={15} />
          </button>

          {/* Load a pre-built proposal template (default stays generic) */}
          <div className="ml-auto flex items-center gap-2">
            <span className="text-[11px] text-gray-500 hidden sm:inline">Template</span>
            <select
              defaultValue=""
              onChange={(e) => { const v = e.target.value; e.currentTarget.value = ''; if (v) loadTemplate(v) }}
              className="bg-[#141414] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-purple-500/50 cursor-pointer"
              title="Load a pre-built template"
            >
              <option value="">Load template…</option>
              {Object.entries(PROPOSAL_TEMPLATES).map(([key, t]) => (
                <option key={key} value={key}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Main Workspace Body Layout (Adapts to dual-pane on invoice mode) */}
      <div className={`flex-1 flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto w-full transition-all duration-300 ${activeTab === 'invoice' ? 'lg:items-start' : 'justify-center'}`}>
        
        {/* INVOICE INPUT FORM PANEL (Left 40% pane - Hide in Print) */}
        {activeTab === 'invoice' && (
          <div className="no-print w-full lg:w-[45%] bg-[#0c0c0c] border border-white/[0.06] rounded-2xl p-6 space-y-6">
            <div className="border-b border-white/[0.06] pb-4">
              <h2 className="text-sm font-bold text-white tracking-wide uppercase">Invoice Parameters</h2>
              <p className="text-xs text-gray-500 mt-1">Populate parameters to calculate subtotals & render preview</p>
            </div>

            {/* Basic Metadata */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Invoice Number</label>
                <input
                  type="text"
                  value={invoiceData.invoiceNumber}
                  onChange={(e) => handleInvoiceChange('invoiceNumber', e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all font-mono"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Tax Rate (%)</label>
                <input
                  type="number"
                  value={invoiceData.taxPercent}
                  onChange={(e) => handleInvoiceChange('taxPercent', e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all font-mono"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Issue Date</label>
                <input
                  type="date"
                  value={invoiceData.invoiceDate}
                  onChange={(e) => handleInvoiceChange('invoiceDate', e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all font-mono"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Due Date</label>
                <input
                  type="date"
                  value={invoiceData.dueDate}
                  onChange={(e) => handleInvoiceChange('dueDate', e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all font-mono"
                />
              </div>
            </div>

            {/* Currency & GSTIN parameters */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Currency</label>
                <select
                  value={invoiceData.currency}
                  onChange={(e) => handleInvoiceChange('currency', e.target.value)}
                  className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-semibold"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.symbol} value={c.symbol}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Studio GSTIN (MeghRoop)</label>
                <input
                  type="text"
                  value={invoiceData.gstNumber}
                  onChange={(e) => handleInvoiceChange('gstNumber', e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all font-mono uppercase"
                  placeholder="Studio GSTIN"
                />
              </div>
            </div>

            {/* Billed To / Client details */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Client / Business Name</label>
                  <input
                    type="text"
                    value={invoiceData.clientName}
                    onChange={(e) => handleInvoiceChange('clientName', e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Client GSTIN (Optional)</label>
                  <input
                    type="text"
                    value={invoiceData.clientGst}
                    onChange={(e) => handleInvoiceChange('clientGst', e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all font-mono uppercase"
                    placeholder="Client GSTIN"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Client Address</label>
                <textarea
                  rows={2}
                  value={invoiceData.clientAddress}
                  onChange={(e) => handleInvoiceChange('clientAddress', e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all resize-none"
                  placeholder="123 Innovation St, NY 10001"
                />
              </div>
            </div>

            {/* Bank Details Overrides */}
            <div className="space-y-3">
              <div className="border-b border-white/[0.06] pb-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">Bank Details (Overrides)</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Bank Name</label>
                  <input
                    type="text"
                    value={invoiceData.bankName}
                    onChange={(e) => handleInvoiceChange('bankName', e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all"
                    placeholder="HDFC Bank"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Account Holder</label>
                  <input
                    type="text"
                    value={invoiceData.bankHolder}
                    onChange={(e) => handleInvoiceChange('bankHolder', e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all"
                    placeholder="MeghRoop Tech Pvt Ltd"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Account Number</label>
                  <input
                    type="text"
                    value={invoiceData.bankAccount}
                    onChange={(e) => handleInvoiceChange('bankAccount', e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all font-mono"
                    placeholder="50200089495082"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1.5 block">IFSC Code</label>
                  <input
                    type="text"
                    value={invoiceData.bankIfsc}
                    onChange={(e) => handleInvoiceChange('bankIfsc', e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all font-mono uppercase"
                    placeholder="HDFC0001234"
                  />
                </div>
              </div>
            </div>

            {/* Line Items Framework */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Line Items</span>
                <button
                  type="button"
                  onClick={addInvoiceItem}
                  className="flex items-center gap-1 text-[10px] text-purple-400 hover:text-purple-300 font-bold uppercase tracking-wider transition-all"
                >
                  <Plus size={11} /> Add Item
                </button>
              </div>

              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                {invoiceData.items.map((item, idx) => (
                  <div key={item.id} className="p-3 bg-white/[0.01] border border-white/[0.04] rounded-xl space-y-2 relative group">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-500 font-bold uppercase">Item #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => deleteInvoiceItem(item.id)}
                        className="text-gray-600 hover:text-red-400 transition-colors"
                        title="Delete Item"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500/30"
                      placeholder="Item Description"
                    />

                    <div>
                      <label className="text-[9px] text-gray-500 block mb-1">Rate / Amount ({invoiceData.currency})</label>
                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) => handleItemChange(item.id, 'rate', e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-3 py-1 text-xs text-white focus:outline-none focus:border-purple-500/30 font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculations Override */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-4">
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Discount Amount ({invoiceData.currency})</label>
                <input
                  type="number"
                  value={invoiceData.discountAmount}
                  onChange={(e) => handleInvoiceChange('discountAmount', Number(e.target.value))}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all font-mono"
                />
              </div>
              <div className="flex flex-col justify-end text-right">
                <span className="text-[10px] text-gray-500 font-bold uppercase">Estimated Subtotal</span>
                <span className="text-md font-bold text-white font-mono">{invoiceData.currency}{subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        {/* HIGH-FIDELITY A4 PREVIEW CANVAS PANEL (Right pane / Center pane) */}
        <div className={`flex-1 flex justify-center ${activeTab === 'invoice' ? 'lg:w-[55%]' : 'w-full'}`}>
          <div 
            className="print-sheet w-full max-w-[680px] rounded-2xl shadow-2xl transition-all duration-300 border text-left flex flex-col justify-between"
            style={{ 
              fontFamily: "'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              background: bg,
              border: border,
              minHeight: '870px'
            }}
          >
            {/* Content body — padding on inner divs (px-12, pt-10 etc.)
                provides margins in both screen and print (WYSIWYG) */}

            <div className="w-full">
              
              {/* 1. Header Segment (Brand kit standards matching logo-kit.html) */}
              <div className="px-12 pt-10 pb-0 print-top-margin">
                <table cellPadding="0" cellSpacing="0" border={0} className="w-full">
                  <tbody>
                    <tr>
                      <td valign="middle" className="w-[44px]">
                        <img 
                          src="/icon-96.png" 
                          width="44" 
                          height="44" 
                          alt="MeghRoop Monogram" 
                          className="block rounded-[10px] bg-[#0d0d0d] w-11 h-11"
                        />
                      </td>
                      <td valign="middle" className="px-3.5 w-1">
                        <div 
                          className="w-[2px] h-[38px] rounded-[1px]"
                          style={{ background: gradL }}
                        ></div>
                      </td>
                      <td valign="middle">
                        <p 
                          className="m-0 text-xl font-bold tracking-tight"
                          style={{ color: nameC, letterSpacing: '-0.02em' }}
                        >
                          MeghRoop
                        </p>
                        <p 
                          className="m-0 text-[10px] font-semibold tracking-widest uppercase"
                          style={{ color: subC, letterSpacing: '0.14em' }}
                        >
                          Growth · AI · Software Agency
                        </p>
                      </td>
                      <td valign="middle" className="text-right">
                        <p 
                          className="m-0 text-[11px] leading-[1.8] font-medium animate-none"
                          style={{ color: bodyC }}
                        >
                          <a href="https://meghroop.tech" target="_blank" rel="noopener noreferrer" style={{ color: gradL, textDecoration: 'none' }}>
                            meghroop.tech
                          </a>
                          <br />
                          hello@meghroop.tech
                          <br />
                          Rajasthan, India
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 2. Brand Gradient Divider */}
              <div className="px-12 pt-4 pb-0">
                <div 
                  className="h-[2px] rounded-[2px]"
                  style={{ background: `linear-gradient(90deg, ${gradL}, ${gradR}, transparent)` }}
                ></div>
              </div>

              {/* 3A. DOCUMENT PREVIEW: PROPOSAL / LETTER MODE */}
              {activeTab === 'proposal' && (
                <div className="px-12 py-8">
                  {/* Editable Subtitle */}
                  <input
                    type="text"
                    value={documentSub}
                    onChange={(e) => {
                      setDocumentSub(e.target.value)
                      handleContentChange()
                    }}
                    className="w-full bg-transparent border-none outline-none font-semibold text-[11px] tracking-widest uppercase mb-3 focus:bg-white/[0.02] p-1 rounded transition-all"
                    style={{ color: subC, letterSpacing: '0.14em' }}
                    placeholder="DOCUMENT SUBTITLE / BRIEF"
                  />

                  {/* Editable Title */}
                  <input
                    type="text"
                    value={documentTitle}
                    onChange={(e) => {
                      setDocumentTitle(e.target.value)
                      handleContentChange()
                    }}
                    className="w-full bg-transparent border-none outline-none font-bold text-2xl tracking-tight mb-5 focus:bg-white/[0.02] p-1 rounded transition-all"
                    style={{ color: nameC, letterSpacing: '-0.02em' }}
                    placeholder="Proposal / Invoice / Letter"
                  />

                  {/* Free-form Body Content */}
                  <div
                    ref={editorRef}
                    contentEditable
                    onInput={handleContentChange}
                    className="prose max-w-none text-sm outline-none leading-relaxed p-1 rounded focus:bg-white/[0.01] transition-all min-h-[340px]"
                    style={{ 
                      color: bodyC,
                    }}
                  ></div>
                </div>
              )}

              {/* 3B. DOCUMENT PREVIEW: DYNAMIC INVOICE MODE */}
              {activeTab === 'invoice' && (
                <div className="px-12 py-8 space-y-6">
                  
                  {/* Invoice Title Block */}
                  <div>
                    <h2 className="font-bold text-2xl tracking-tight m-0" style={{ color: nameC, letterSpacing: '-0.02em' }}>
                      INVOICE
                    </h2>
                    <p className="text-[10px] font-semibold tracking-widest uppercase m-0 mt-1" style={{ color: subC, letterSpacing: '0.14em' }}>
                      Official Billing Statement
                    </p>
                  </div>

                  {/* Invoice Metadata Grid - Premium 3-column Layout */}
                  <div className="grid grid-cols-3 gap-6 text-[10px] border-y py-4" style={{ borderColor: tableBorder }}>
                    {/* Billed To client information */}
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                        BILLED TO:
                      </span>
                      <p className="font-bold m-0 text-[11px] leading-tight" style={{ color: nameC }}>{invoiceData.clientName || 'Client Name'}</p>
                      <p className="whitespace-pre-line m-0 leading-relaxed text-[10px] mt-1" style={{ color: bodyC }}>
                        {invoiceData.clientAddress || 'Client Address'}
                      </p>
                      {invoiceData.clientGst && (
                        <p className="m-0 mt-1" style={{ color: bodyC }}>
                          <strong>GST:</strong> <span className="font-mono text-[9px]">{invoiceData.clientGst.toUpperCase()}</span>
                        </p>
                      )}
                    </div>

                    {/* Bank Details Column */}
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                        BANK DETAILS:
                      </span>
                      <p className="font-bold m-0 text-[11px] leading-tight" style={{ color: nameC }}>{invoiceData.bankName || 'Bank Name'}</p>
                      <div className="space-y-0.5 leading-normal text-[10px] mt-1" style={{ color: bodyC }}>
                        <p className="m-0">A/C: <span className="font-semibold text-white">{invoiceData.bankHolder || 'Holder Name'}</span></p>
                        <p className="m-0">No: <span className="font-mono text-white">{invoiceData.bankAccount || 'Account Number'}</span></p>
                        <p className="m-0">IFSC: <span className="font-mono text-white uppercase">{invoiceData.bankIfsc || 'IFSC Code'}</span></p>
                      </div>
                    </div>

                    {/* Billing Metadata details */}
                    <div className="space-y-2 text-right">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                          INVOICE NUMBER:
                        </span>
                        <span className="font-mono font-bold text-[11px]" style={{ color: nameC }}>{invoiceData.invoiceNumber}</span>
                      </div>
                      {invoiceData.gstNumber && (
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                            GSTIN (STUDIO):
                          </span>
                          <span className="font-mono font-bold text-[10px]" style={{ color: nameC }}>{invoiceData.gstNumber.toUpperCase()}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                          DATE OF ISSUE:
                        </span>
                        <span className="font-mono font-medium text-[10px]" style={{ color: bodyC }}>{invoiceData.invoiceDate}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                          DUE DATE:
                        </span>
                        <span className="font-mono font-bold text-[10px]" style={{ color: nameC }}>{invoiceData.dueDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Premium Invoicing Table (Removed QTY/RATE columns for super clean styling) */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="border-b" style={{ borderColor: tableBorder }}>
                          <th className="py-2.5 font-bold tracking-wider" style={{ color: labelC }}>DESCRIPTION</th>
                          <th className="py-2.5 text-right font-bold tracking-wider w-32" style={{ color: labelC }}>AMOUNT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoiceData.items.map((item) => (
                          <tr key={item.id} className="border-b" style={{ borderColor: tableBorder }}>
                            <td className="py-3 pr-4 font-medium" style={{ color: nameC }}>{item.description}</td>
                            <td className="py-3 text-right font-mono font-bold" style={{ color: nameC }}>
                              {invoiceData.currency}{item.rate.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Summary calculation blocks */}
                  <div className="flex flex-col sm:flex-row justify-between gap-6 pt-4 text-xs">
                    {/* Bank Details / Custom Payment parameters */}
                    <div className="flex-1 space-y-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                        PAYMENT INSTRUCTIONS &amp; NOTES:
                      </span>
                      <textarea
                        rows={4}
                        value={invoiceData.paymentNotes}
                        onChange={(e) => handleInvoiceChange('paymentNotes', e.target.value)}
                        className="w-full bg-transparent border-none outline-none resize-none leading-relaxed p-0 text-[11px]"
                        style={{ color: bodyC }}
                        placeholder="Add payment methods or terms..."
                      />
                    </div>

                    {/* Calculations Subtotal Stack */}
                    <div className="w-full sm:w-56 space-y-2 text-right">
                      <div className="flex justify-between">
                        <span style={{ color: labelC }}>Subtotal:</span>
                        <span className="font-mono font-semibold" style={{ color: bodyC }}>{invoiceData.currency}{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: labelC }}>Tax ({invoiceData.taxPercent}%):</span>
                        <span className="font-mono font-semibold" style={{ color: bodyC }}>+{invoiceData.currency}{taxAmount.toLocaleString()}</span>
                      </div>
                      {invoiceData.discountAmount > 0 && (
                        <div className="flex justify-between">
                          <span style={{ color: labelC }}>Discount:</span>
                          <span className="font-mono font-semibold text-emerald-500">-{invoiceData.currency}{invoiceData.discountAmount.toLocaleString()}</span>
                        </div>
                      )}
                      
                      {/* Premium Total Due highlighted container */}
                      <div className="flex justify-between border-t pt-2.5" style={{ borderColor: tableBorder }}>
                        <span className="font-bold" style={{ color: nameC }}>Total Due:</span>
                        <span className="font-mono font-bold text-sm bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                          {invoiceData.currency}{grandTotal.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* 4. Footer Segment — visible on both screen and print */}
            <div className="px-12 pb-8 pt-0 mt-auto w-full">
              <div 
                className="h-[1px] mb-4"
                style={{ background: footerBorder }}
              ></div>
              <table cellPadding="0" cellSpacing="0" border={0} className="w-full">
                <tbody>
                  <tr>
                    <td className="text-[10px] font-medium" style={{ color: footC }}>
                      MeghRoop &middot; Growth, AI &amp; Software Agency
                    </td>
                    <td className="text-right text-[10px] font-medium" style={{ color: footC }}>
                      meghroop.tech &middot; Rajasthan, India
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Print-only repeating footer — position:fixed prints on every page */}
            <div className="print-footer" style={{ display: 'none' }}>
              <div style={{ borderTop: `1px solid ${footerBorder}`, padding: '6px 48px 12px', background: bg }}>
                <table cellPadding="0" cellSpacing="0" border={0} className="w-full">
                  <tbody>
                    <tr>
                      <td className="text-[10px] font-medium" style={{ color: footC }}>
                        MeghRoop &middot; Growth, AI &amp; Software Agency
                      </td>
                      <td className="text-right text-[10px] font-medium" style={{ color: footC }}>
                        meghroop.tech &middot; Rajasthan, India
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
