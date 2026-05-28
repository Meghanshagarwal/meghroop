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
}

const CURRENCIES = [
  { symbol: '₹', label: 'INR (₹)' },
  { symbol: '$', label: 'USD ($)' },
  { symbol: '€', label: 'EUR (€)' },
  { symbol: '£', label: 'GBP (£)' }
]

// Default rich-text body template for Proposal Mode
const defaultBody = `
  <p>Dear Client,</p>
  <p>We are pleased to present this official document from the MeghRoop Creative Engineering & AI Studio. Our mission is to build elite AI agents, autonomous workflows, custom Model Context Protocol (MCP) integrations, and next-generation, high-performance web engineering experiences.</p>
  <p><strong>Key deliverables outlined in this brief:</strong></p>
  <ul>
    <li><strong>Autonomous Outbound Agent System</strong>: Deeply integrated voice/chat agents with standard vector memory.</li>
    <li><strong>MCP Financial Infrastructure Server</strong>: High-scale data connector with robust security endpoints.</li>
    <li><strong>Headless Next.js Commerce Storefront</strong>: Ultra-fast storefront targeting &lt;400ms Core Web Vitals.</li>
  </ul>
  <p>We look forward to collaborating with your team to engineer these intelligent systems.</p>
  <p>Sincerely,<br><strong>Meghansh Agarwal</strong><br>Founder, MeghRoop</p>
`.trim()

export default function LetterheadEditorPage() {
  const [activeTab, setActiveTab] = useState<'proposal' | 'invoice'>('proposal')
  const [lhMode, setLhMode] = useState<'light' | 'dark'>('light')
  
  // Proposal State
  const [documentTitle, setDocumentTitle] = useState('PROPOSAL / INVOICE / LETTER')
  const [documentSub, setDocumentSub] = useState('OFFICIAL PROJECT BRIEF')
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
    paymentNotes: 'Payment Method:\nBank Name: HDFC Bank\nAccount Holder: MeghRoop Tech Private Limited\nAccount Number: 50200089495082\nIFSC Code: HDFC0001234\n\nThank you for working with MeghRoop!',
    currency: '₹',
    gstNumber: '08AAAAA1111A1Z1',
    clientGst: ''
  })

  const [isSaved, setIsSaved] = useState(true)

  // Load from LocalStorage
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

      if (savedInvoice) {
        const parsed = JSON.parse(savedInvoice)
        
        // Data Migration: Map items containing quantity/rate to just rate if loading old formats
        const migratedItems = (parsed.items || []).map((item: { id?: string; description?: string; rate?: number }) => ({
          id: item.id || Date.now().toString() + Math.random().toString(),
          description: item.description || 'Deliverable Item',
          rate: typeof item.rate === 'number' ? item.rate : 1000
        }))

        setInvoiceData({
          invoiceNumber: parsed.invoiceNumber || 'MR-2026-001',
          invoiceDate: parsed.invoiceDate || new Date().toISOString().split('T')[0],
          dueDate: parsed.dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          clientName: parsed.clientName || '',
          clientAddress: parsed.clientAddress || '',
          items: migratedItems,
          taxPercent: typeof parsed.taxPercent === 'number' ? parsed.taxPercent : 18,
          discountAmount: typeof parsed.discountAmount === 'number' ? parsed.discountAmount : 0,
          paymentNotes: parsed.paymentNotes || '',
          currency: parsed.currency || '₹',
          gstNumber: parsed.gstNumber || '08AAAAA1111A1Z1',
          clientGst: parsed.clientGst || ''
        })
      }
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

  const handleReset = () => {
    if (confirm('Are you sure you want to reset this template to the default values? Your edits will be lost.')) {
      if (activeTab === 'proposal') {
        setDocumentTitle('PROPOSAL / INVOICE / LETTER')
        setDocumentSub('OFFICIAL PROJECT BRIEF')
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
          paymentNotes: 'Payment Method:\nBank Name: HDFC Bank\nAccount Holder: MeghRoop Tech Private Limited\nAccount Number: 50200089495082\nIFSC Code: HDFC0001234\n\nThank you for working with MeghRoop!',
          currency: '₹',
          gstNumber: '08AAAAA1111A1Z1',
          clientGst: ''
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

        @media print {
          /* Remove browser margin/headers/footers completely */
          @page {
            size: A4 portrait;
            margin: 0 !important;
          }

          /* Hide sidebar, dashboards, control panels, forms, and background frames */
          aside,
          header,
          .no-print,
          .invoice-form-pane,
          .admin-sidebar {
            display: none !important;
          }

          /* Reset body and html layout */
          body, html {
            background: white !important;
            color: black !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
          }

          /* Decouple structural grid/flex spacing of parent layout */
          main,
          .main-content-wrapper {
            margin: 0 !important;
            padding: 0 !important;
            display: block !important;
            width: auto !important;
            height: auto !important;
          }

          /* Perfect A4 frame overlay */
          .print-sheet {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            max-height: 297mm !important;
            margin: 0 auto !important;
            padding: 20mm 20mm 20mm 20mm !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            box-sizing: border-box !important;
            background: ${bg} !important;
            font-family: 'Space Grotesk', sans-serif !important;
            
            /* Align footer beautifully at the bottom of the page print */
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;

            /* Safety layers to prevent overflow breaking into empty page 2 */
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
            position: relative !important;
          }

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
            className="print-sheet w-full max-w-[680px] rounded-2xl shadow-2xl transition-all duration-300 border overflow-hidden text-left flex flex-col justify-between"
            style={{ 
              fontFamily: "'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              background: bg,
              border: border,
              minHeight: '870px'
            }}
          >
            
            {/* Top Sheet Group wrapper to separate top content from the bottom footer for perfect alignment */}
            <div className="w-full">
              
              {/* 1. Header Segment (Brand kit standards matching logo-kit.html) */}
              <div className="px-12 pt-10 pb-0">
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
                          Creative Engineering &amp; AI Studio
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

                  {/* Invoice Metadata Grid */}
                  <div className="grid grid-cols-2 gap-8 text-xs border-y py-4" style={{ borderColor: tableBorder }}>
                    {/* Billed To client information */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                        BILLED TO:
                      </span>
                      <p className="font-bold m-0" style={{ color: nameC }}>{invoiceData.clientName || 'Client Name'}</p>
                      <p className="whitespace-pre-line m-0 leading-relaxed" style={{ color: bodyC }}>
                        {invoiceData.clientAddress || 'Client Address'}
                      </p>
                      {invoiceData.clientGst && (
                        <p className="m-0 mt-1.5 text-[11px]" style={{ color: bodyC }}>
                          <strong>GSTIN:</strong> <span className="font-mono">{invoiceData.clientGst.toUpperCase()}</span>
                        </p>
                      )}
                    </div>

                    {/* Billing Metadata details */}
                    <div className="space-y-2 text-right">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                          INVOICE NUMBER:
                        </span>
                        <span className="font-mono font-bold" style={{ color: nameC }}>{invoiceData.invoiceNumber}</span>
                      </div>
                      {invoiceData.gstNumber && (
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                            GSTIN (STUDIO):
                          </span>
                          <span className="font-mono font-bold" style={{ color: nameC }}>{invoiceData.gstNumber.toUpperCase()}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                          DATE OF ISSUE:
                        </span>
                        <span className="font-mono font-medium" style={{ color: bodyC }}>{invoiceData.invoiceDate}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>
                          DUE DATE:
                        </span>
                        <span className="font-mono font-bold" style={{ color: nameC }}>{invoiceData.dueDate}</span>
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

            {/* 4. Footer Segment (Stays perfectly at A4 bottom sheet) */}
            <div className="px-12 pb-8 pt-0 mt-auto w-full">
              <div 
                className="h-[1px] mb-4"
                style={{ background: footerBorder }}
              ></div>
              <table cellPadding="0" cellSpacing="0" border={0} className="w-full">
                <tbody>
                  <tr>
                    <td className="text-[10px] font-medium" style={{ color: footC }}>
                      MeghRoop · Creative Engineering &amp; AI Studio
                    </td>
                    <td className="text-right text-[10px] font-medium" style={{ color: footC }}>
                      meghroop.tech · Rajasthan, India
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
      
    </div>
  )
}
