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

const PROPOSAL_TEMPLATES: Record<string, { label: string; title: string; sub: string; body: string }> = {
  generic: { label: 'Generic Proposal', title: 'PROPOSAL', sub: 'PREPARED FOR — CLIENT NAME', body: defaultBody },
  navkar: { label: 'Navkar Buildcon (RFP)', title: 'COMMERCIAL PROPOSAL', sub: 'NAVKAR BUILDCON · PREMIUM SERVICED APARTMENTS, JAIPUR', body: navkarBody },
}

interface EditablePageProps {
  initialContent: string
  onChange: (html: string) => void
  onBlur: () => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void
  className: string
  style: React.CSSProperties
  refIndex: number
  editorRefs: React.MutableRefObject<HTMLDivElement[]>
}

const arraysEqual = (a: string[], b: string[]) => {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

function getCaretOffset(element: HTMLElement): number {
  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0) return 0
  const range = sel.getRangeAt(0)
  
  let offset = 0
  let found = false

  function traverse(node: Node) {
    if (found) return
    if (node === range.startContainer) {
      offset += range.startOffset
      found = true
      return
    }
    if (node.nodeType === Node.TEXT_NODE) {
      offset += node.nodeValue?.length || 0
    } else {
      for (let i = 0; i < node.childNodes.length; i++) {
        traverse(node.childNodes[i])
        if (found) return
      }
    }
  }

  traverse(element)
  return offset
}

function setCaretOffset(element: HTMLElement, offset: number) {
  const range = document.createRange()
  const sel = window.getSelection()
  
  let currentOffset = 0
  let found = false

  function traverse(node: Node) {
    if (found) return
    if (node.nodeType === Node.TEXT_NODE) {
      const length = node.nodeValue?.length || 0
      if (currentOffset + length >= offset) {
        range.setStart(node, offset - currentOffset)
        range.collapse(true)
        found = true
        return
      }
      currentOffset += length
    } else {
      for (let i = 0; i < node.childNodes.length; i++) {
        traverse(node.childNodes[i])
        if (found) return
      }
    }
  }

  traverse(element)
  if (!found) {
    range.selectNodeContents(element)
    range.collapse(false)
  }
  sel?.removeAllRanges()
  sel?.addRange(range)
}

function getTextLengthOfNode(node: Node): number {
  let length = 0
  if (node.nodeType === Node.TEXT_NODE) {
    length += node.nodeValue?.length || 0
  } else {
    for (let i = 0; i < node.childNodes.length; i++) {
      length += getTextLengthOfNode(node.childNodes[i])
    }
  }
  return length
}

function getTextLength(elementOrHtml: HTMLElement | string): number {
  if (typeof elementOrHtml === 'string') {
    if (typeof document === 'undefined') return 0
    const temp = document.createElement('div')
    temp.innerHTML = elementOrHtml
    return getTextLengthOfNode(temp)
  }
  return getTextLengthOfNode(elementOrHtml)
}

const EditablePage = ({ 
  initialContent, 
  onChange, 
  onBlur, 
  onKeyDown,
  className, 
  style, 
  refIndex, 
  editorRefs 
}: EditablePageProps) => {
  const ref = useRef<HTMLDivElement | null>(null) as React.MutableRefObject<HTMLDivElement | null>
  const isFocused = useRef(false)

  useEffect(() => {
    if (ref.current && !isFocused.current && ref.current.innerHTML !== initialContent) {
      ref.current.innerHTML = initialContent
    }
  }, [initialContent])

  return (
    <div
      ref={(el) => {
        ref.current = el
        editorRefs.current[refIndex] = el!
      }}
      contentEditable
      onFocus={() => { isFocused.current = true }}
      onBlur={() => { 
        isFocused.current = false
        onBlur()
      }}
      onInput={(e) => onChange(e.currentTarget.innerHTML)}
      onKeyDown={onKeyDown}
      className={className}
      style={style}
    />
  )
}

export default function LetterheadEditorPage() {
  const [activeTab, setActiveTab] = useState<'proposal' | 'invoice'>('proposal')
  const [lhMode, setLhMode] = useState<'light' | 'dark'>('light')
  
  const [documentTitle, setDocumentTitle] = useState('PROPOSAL')
  const [documentSub, setDocumentSub] = useState('PREPARED FOR — CLIENT NAME')
  const [proposalPages, setProposalPages] = useState<string[]>([])
  const editorRefs = useRef<HTMLDivElement[]>([])

  const getLimits = () => {
    let p1 = 620
    let p2 = 800
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const page0Editor = editorRefs.current[0]
      if (page0Editor && page0Editor.parentElement) {
        const parent = page0Editor.parentElement
        const parentHeight = parent.clientHeight > 100 ? parent.clientHeight : 779
        const titleBlock = parent.querySelector('.mr-title-block')
        const titleHeight = titleBlock ? (titleBlock as HTMLElement).offsetHeight : 0
        
        const style = window.getComputedStyle(parent)
        const paddingTop = parseFloat(style.paddingTop) || 32
        const paddingBottom = parseFloat(style.paddingBottom) || 32
        
        p1 = Math.max(200, parentHeight - paddingTop - paddingBottom - titleHeight - 4)
      }
      
      const page1Editor = editorRefs.current[1]
      if (page1Editor && page1Editor.parentElement) {
        const parent = page1Editor.parentElement
        const parentHeight = parent.clientHeight > 100 ? parent.clientHeight : 881
        
        const style = window.getComputedStyle(parent)
        const paddingTop = parseFloat(style.paddingTop) || 32
        const paddingBottom = parseFloat(style.paddingBottom) || 32
        
        p2 = Math.max(200, parentHeight - paddingTop - paddingBottom - 4)
      } else if (page0Editor && page0Editor.parentElement) {
        const parent = page0Editor.parentElement
        const parentHeight = parent.clientHeight > 100 ? parent.clientHeight : 779
        const style = window.getComputedStyle(parent)
        const paddingTop = parseFloat(style.paddingTop) || 32
        const paddingBottom = parseFloat(style.paddingBottom) || 32
        
        p2 = Math.max(200, (parentHeight + 102) - paddingTop - paddingBottom - 4)
      }
    }
    return { p1, p2 }
  }

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

  useEffect(() => {
    try {
      const savedTab = localStorage.getItem('mr_active_tab') as 'proposal' | 'invoice'
      const savedMode = localStorage.getItem('mr_lh_mode') as 'light' | 'dark'
      const savedTitle = localStorage.getItem('mr_lh_title')
      const savedSub = localStorage.getItem('mr_lh_sub')
      const savedBody = localStorage.getItem('mr_lh_body')
      const savedInvoice = localStorage.getItem('mr_invoice_data')

      if (savedTab) setActiveTab(savedTab)
      if (savedMode) setLhMode(savedMode)
      if (savedTitle) setDocumentTitle(savedTitle)
      if (savedSub) setDocumentSub(savedSub)
      
      const initialBody = savedBody || defaultBody
      const { p1, p2 } = getLimits()
      const initialPages = paginateContent(initialBody, p1, p2)
      setProposalPages(initialPages)

      let parsedInvoice: Partial<InvoiceData> = {}
      if (savedInvoice) {
        parsedInvoice = JSON.parse(savedInvoice)
      }

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

  useEffect(() => {
    if (activeTab === 'proposal' && proposalPages.length === 0) {
      const savedBody = localStorage.getItem('mr_lh_body') || defaultBody
      const { p1, p2 } = getLimits()
      const initialPages = paginateContent(savedBody, p1, p2)
      setProposalPages(initialPages)
    }
  }, [activeTab, proposalPages.length])

  useEffect(() => {
    if (proposalPages.length > 0) {
      const { p1, p2 } = getLimits()
      const fullHtml = proposalPages.join('')
      const paginated = paginateContent(fullHtml, p1, p2)
      if (!arraysEqual(paginated, proposalPages)) {
        setProposalPages(paginated)
      }
    }
  }, [proposalPages.length, documentTitle, documentSub])

  const handleContentChange = () => {
    setIsSaved(false)
  }

  const handlePageBlur = () => {
    const { p1, p2 } = getLimits()
    const fullHtml = proposalPages.join('')
    const newPages = paginateContent(fullHtml, p1, p2)
    setProposalPages(newPages)
  }

  const handlePageInput = (idx: number, html: string) => {
    setIsSaved(false)

    setProposalPages(prev => {
      const copy = [...prev]
      copy[idx] = html
      return copy
    })

    const editor = editorRefs.current[idx]
    if (!editor) return

    if (editor.parentElement) {
      editor.parentElement.scrollTop = 0
    }

    const { p1, p2 } = getLimits()
    const limit = idx === 0 ? p1 : p2
    const isOverflow = editor.scrollHeight > limit
    const hasMorePages = proposalPages.length > idx + 1
    const isUnderflow = editor.scrollHeight < limit && hasMorePages

    if (isOverflow || isUnderflow) {
      const relativeOffset = getCaretOffset(editor)
      let absoluteOffset = 0
      for (let i = 0; i < idx; i++) {
        const prevEditor = editorRefs.current[i]
        absoluteOffset += prevEditor ? getTextLength(prevEditor) : getTextLength(proposalPages[i] || '')
      }
      absoluteOffset += relativeOffset

      const currentHtmls = proposalPages.map((page, i) => {
        const ed = editorRefs.current[i]
        return ed ? ed.innerHTML : page
      })
      currentHtmls[idx] = html

      const fullHtml = currentHtmls.join('')
      const newPages = paginateContent(fullHtml, p1, p2)

      if (!arraysEqual(newPages, currentHtmls)) {
        setProposalPages(newPages)

        let remainingOffset = absoluteOffset
        let targetPageIdx = 0
        let targetRelativeOffset = 0

        for (let i = 0; i < newPages.length; i++) {
          const pageTextLength = getTextLength(newPages[i])
          if (remainingOffset < pageTextLength || (remainingOffset === pageTextLength && i === newPages.length - 1)) {
            targetPageIdx = i
            targetRelativeOffset = remainingOffset
            break
          }
          remainingOffset -= pageTextLength
        }

        newPages.forEach((pageHtml, i) => {
          const ed = editorRefs.current[i]
          if (ed) {
            ed.innerHTML = pageHtml
          }
        })

        setTimeout(() => {
          const targetEditor = editorRefs.current[targetPageIdx]
          if (targetEditor) {
            targetEditor.focus()
            setCaretOffset(targetEditor, targetRelativeOffset)
          } else {
            setTimeout(() => {
              const retryEditor = editorRefs.current[targetPageIdx]
              if (retryEditor) {
                retryEditor.focus()
                setCaretOffset(retryEditor, targetRelativeOffset)
              }
            }, 50)
          }
        }, 0)
      }
    }
  }

  const handlePageKeyDown = (idx: number, e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Backspace' && idx > 0) {
      const editor = editorRefs.current[idx]
      if (editor) {
        const caretOffset = getCaretOffset(editor)
        if (caretOffset === 0) {
          e.preventDefault()

          let absoluteOffset = 0
          for (let i = 0; i < idx; i++) {
            const prevEditor = editorRefs.current[i]
            absoluteOffset += prevEditor ? getTextLength(prevEditor) : getTextLength(proposalPages[i] || '')
          }

          const currentHtmls = proposalPages.map((page, i) => {
            const ed = editorRefs.current[i]
            return ed ? ed.innerHTML : page
          })

          currentHtmls[idx - 1] = currentHtmls[idx - 1] + currentHtmls[idx]
          currentHtmls.splice(idx, 1)

          const fullHtml = currentHtmls.join('')
          const { p1, p2 } = getLimits()
          const newPages = paginateContent(fullHtml, p1, p2)

          setProposalPages(newPages)

          let remainingOffset = absoluteOffset
          let targetPageIdx = 0
          let targetRelativeOffset = 0

          for (let i = 0; i < newPages.length; i++) {
            const pageTextLength = getTextLength(newPages[i])
            if (remainingOffset < pageTextLength || (remainingOffset === pageTextLength && i === newPages.length - 1)) {
              targetPageIdx = i
              targetRelativeOffset = remainingOffset
              break
            }
            remainingOffset -= pageTextLength
          }

          newPages.forEach((pageHtml, i) => {
            const ed = editorRefs.current[i]
            if (ed) {
              ed.innerHTML = pageHtml
            }
          })

          setTimeout(() => {
            const targetEditor = editorRefs.current[targetPageIdx]
            if (targetEditor) {
              targetEditor.focus()
              setCaretOffset(targetEditor, targetRelativeOffset)
            } else {
              setTimeout(() => {
                const retryEditor = editorRefs.current[targetPageIdx]
                if (retryEditor) {
                  retryEditor.focus()
                  setCaretOffset(retryEditor, targetRelativeOffset)
                }
              }, 50)
            }
          }, 0)
        }
      }
    }

    if (e.key === 'Delete' && idx < proposalPages.length - 1) {
      const editor = editorRefs.current[idx]
      if (editor) {
        const caretOffset = getCaretOffset(editor)
        if (caretOffset === getTextLength(editor)) {
          e.preventDefault()

          let absoluteOffset = 0
          for (let i = 0; i < idx; i++) {
            const prevEditor = editorRefs.current[i]
            absoluteOffset += prevEditor ? getTextLength(prevEditor) : getTextLength(proposalPages[i] || '')
          }
          absoluteOffset += caretOffset

          const currentHtmls = proposalPages.map((page, i) => {
            const ed = editorRefs.current[i]
            return ed ? ed.innerHTML : page
          })

          currentHtmls[idx] = currentHtmls[idx] + currentHtmls[idx + 1]
          currentHtmls.splice(idx + 1, 1)

          const fullHtml = currentHtmls.join('')
          const { p1, p2 } = getLimits()
          const newPages = paginateContent(fullHtml, p1, p2)

          setProposalPages(newPages)

          let remainingOffset = absoluteOffset
          let targetPageIdx = 0
          let targetRelativeOffset = 0

          for (let i = 0; i < newPages.length; i++) {
            const pageTextLength = getTextLength(newPages[i])
            if (remainingOffset < pageTextLength || (remainingOffset === pageTextLength && i === newPages.length - 1)) {
              targetPageIdx = i
              targetRelativeOffset = remainingOffset
              break
            }
            remainingOffset -= pageTextLength
          }

          newPages.forEach((pageHtml, i) => {
            const ed = editorRefs.current[i]
            if (ed) {
              ed.innerHTML = pageHtml
            }
          })

          setTimeout(() => {
            const targetEditor = editorRefs.current[targetPageIdx]
            if (targetEditor) {
              targetEditor.focus()
              setCaretOffset(targetEditor, targetRelativeOffset)
            } else {
              setTimeout(() => {
                const retryEditor = editorRefs.current[targetPageIdx]
                if (retryEditor) {
                  retryEditor.focus()
                  setCaretOffset(retryEditor, targetRelativeOffset)
                }
              }, 50)
            }
          }, 0)
        }
      }
    }
  }

  useEffect(() => {
    if (isSaved) return

    const timer = setTimeout(() => {
      try {
        localStorage.setItem('mr_active_tab', activeTab)
        localStorage.setItem('mr_lh_mode', lhMode)
        localStorage.setItem('mr_lh_title', documentTitle)
        localStorage.setItem('mr_lh_sub', documentSub)
        const fullHtml = proposalPages.join('')
        localStorage.setItem('mr_lh_body', fullHtml)
        localStorage.setItem('mr_invoice_data', JSON.stringify(invoiceData))
        setIsSaved(true)
      } catch (e) {
        console.error('Auto-save error:', e)
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [activeTab, lhMode, documentTitle, documentSub, invoiceData, proposalPages, isSaved])

  const executeCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value)
    if (typeof document !== 'undefined') {
      const activeEl = document.activeElement
      if (activeEl && activeEl.hasAttribute('contenteditable')) {
        const idx = editorRefs.current.indexOf(activeEl as HTMLDivElement)
        if (idx !== -1) {
          const html = activeEl.innerHTML
          setProposalPages(prev => {
            const copy = [...prev]
            copy[idx] = html
            return copy
          })
        }
      }
    }
    handleContentChange()
    if (typeof document !== 'undefined') {
      const activeEl = document.activeElement as HTMLElement
      if (activeEl && activeEl.focus) activeEl.focus()
    }
  }

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

  const subtotal = invoiceData.items.reduce((sum, item) => sum + item.rate, 0)
  const taxAmount = Math.round(subtotal * (invoiceData.taxPercent / 100))
  const grandTotal = subtotal + taxAmount - invoiceData.discountAmount

  const handlePrint = () => {
    const { p1, p2 } = getLimits()
    const fullHtml = proposalPages.join('')
    const newPages = paginateContent(fullHtml, p1, p2)
    setProposalPages(newPages)
    setTimeout(() => {
      window.print()
    }, 150)
  }

  const loadTemplate = (key: string) => {
    const t = PROPOSAL_TEMPLATES[key]
    if (!t) return
    if (!confirm(`Load the "${t.label}" template? This replaces the current proposal content.`)) return
    setActiveTab('proposal')
    setDocumentTitle(t.title)
    setDocumentSub(t.sub)
    const { p1, p2 } = getLimits()
    const paginated = paginateContent(t.body, p1, p2)
    setProposalPages(paginated)
    handleContentChange()
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset this template to the default values? Your edits will be lost.')) {
      if (activeTab === 'proposal') {
        setDocumentTitle('PROPOSAL')
        setDocumentSub('PREPARED FOR — CLIENT NAME')
        const { p1, p2 } = getLimits()
        const paginated = paginateContent(defaultBody, p1, p2)
        setProposalPages(paginated)
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

  return (
    <div className="min-h-screen bg-neutral-900/40 text-gray-100 flex flex-col relative pb-20">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
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
          @page { size: A4 portrait; margin: 0 !important; }
          aside, header, nav, [aria-label="Mobile navigation"], .no-print, .invoice-form-pane, .admin-sidebar { display: none !important; }
          
          /* Full layout reset to block layout for clean printing without offsets or flex shifts */
          html, body, main,
          body > div,
          body > div > main,
          body > div > main > div,
          body > div > main > div > div,
          body > div > main > div > div > div {
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: none !important;
            min-width: 0 !important;
            box-shadow: none !important;
            border: none !important;
            position: static !important;
            height: auto !important;
            min-height: 0 !important;
            transform: none !important;
            float: none !important;
            gap: 0 !important;
          }

          /* Force exact zero margins for any sidebar wrappers in print */
          main, .ml-56 {
            margin-left: 0 !important;
          }

          html, body { background: ${bg} !important; }
          .print-sheet { width: 210mm !important; max-width: none !important; margin: 0 auto !important; padding: 0 !important; border: none !important; box-shadow: none !important; border-radius: 0 !important; box-sizing: border-box !important; background: ${bg} !important; color: ${nameC} !important; font-family: 'Space Grotesk', sans-serif !important; display: flex !important; flex-direction: column !important; justify-content: space-between !important; overflow: visible !important; page-break-after: always !important; break-after: page !important; }
          .print-sheet:last-child { page-break-after: avoid !important; break-after: avoid !important; }
          .proposal-page { height: 297mm !important; }
          .invoice-page { min-height: 297mm !important; height: auto !important; }
          .print-sheet h2, .print-sheet h3 { break-after: avoid !important; page-break-after: avoid !important; break-inside: avoid !important; page-break-inside: avoid !important; }
          .print-sheet ul, .print-sheet ol, .print-sheet table, .print-sheet li, .print-sheet tr, .print-sheet p, .print-sheet img { break-inside: avoid !important; page-break-inside: avoid !important; }
          .print-sheet p { orphans: 3; widows: 3; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      <header className="no-print bg-[#0c0c0c] border-b border-white/[0.06] sticky top-0 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
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
          <div className="flex bg-white/[0.02] border border-white/[0.06] rounded-xl p-1 gap-1">
            <button
              onClick={() => { setActiveTab('proposal'); setIsSaved(false) }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${activeTab === 'proposal' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25' : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'}`}
            >
              <FileText size={14} /> Proposal / Letter
            </button>
            <button
              onClick={() => { setActiveTab('invoice'); setIsSaved(false) }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${activeTab === 'invoice' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25' : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'}`}
            >
              <Receipt size={14} /> Invoice
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 px-3 py-1.5 bg-white/[0.02] rounded-full border border-white/[0.04]">
            {isSaved ? <><CheckCircle2 size={13} className="text-emerald-500" /> <span>Saved locally</span></> : <><CloudSync size={13} className="text-amber-500 animate-spin" /> <span>Saving draft...</span></>}
          </div>
          <button onClick={() => { setLhMode(prev => prev === 'light' ? 'dark' : 'light'); setIsSaved(false) }} className="p-2 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-all">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={handleReset} className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-all">Reset</button>
          <button onClick={handlePrint} className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20 active:scale-95 transition-all">
            <Printer size={15} /> Download PDF
          </button>
        </div>
      </header>

      {activeTab === 'proposal' && (
        <div className="no-print bg-[#090909] border-b border-white/[0.04] px-6 py-2 flex flex-wrap items-center gap-1.5 z-10 sticky top-[73px]">
          <button onClick={() => executeCommand('bold')} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"><Bold size={15} /></button>
          <button onClick={() => executeCommand('italic')} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"><Italic size={15} /></button>
          <button onClick={() => executeCommand('underline')} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"><Underline size={15} /></button>
          <div className="h-4 w-px bg-white/[0.06] mx-2" />
          <button onClick={() => executeCommand('justifyLeft')} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"><AlignLeft size={15} /></button>
          <button onClick={() => executeCommand('justifyCenter')} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"><AlignCenter size={15} /></button>
          <button onClick={() => executeCommand('justifyRight')} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"><AlignRight size={15} /></button>
          <div className="h-4 w-px bg-white/[0.06] mx-2" />
          <button onClick={() => executeCommand('insertUnorderedList')} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"><List size={15} /></button>
          <button onClick={() => executeCommand('insertOrderedList')} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"><ListOrdered size={15} /></button>
          <div className="h-4 w-px bg-white/[0.06] mx-2" />
          <button onClick={() => executeCommand('undo')} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"><Undo size={15} /></button>
          <button onClick={() => executeCommand('redo')} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"><Redo size={15} /></button>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-[11px] text-gray-500 hidden sm:inline">Template</span>
            <select defaultValue="" onChange={(e) => { const v = e.target.value; e.currentTarget.value = ''; if (v) loadTemplate(v) }} className="bg-[#141414] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-purple-500/50 cursor-pointer">
              <option value="">Load template…</option>
              {Object.entries(PROPOSAL_TEMPLATES).map(([key, t]) => (<option key={key} value={key}>{t.label}</option>))}
            </select>
          </div>
        </div>
      )}

      <div className={`flex-1 flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto w-full transition-all duration-300 ${activeTab === 'invoice' ? 'lg:items-start' : 'justify-center'}`}>
        {activeTab === 'invoice' && (
          <div className="no-print w-full lg:w-[45%] bg-[#0c0c0c] border border-white/[0.06] rounded-2xl p-6 space-y-6">
            <div className="border-b border-white/[0.06] pb-4">
              <h2 className="text-sm font-bold text-white tracking-wide uppercase">Invoice Parameters</h2>
              <p className="text-xs text-gray-500 mt-1">Populate parameters to calculate subtotals & render preview</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Invoice Number</label>
                <input type="text" value={invoiceData.invoiceNumber} onChange={(e) => handleInvoiceChange('invoiceNumber', e.target.value)} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-mono" />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-1.5 block">Tax Rate (%)</label>
                <input type="number" value={invoiceData.taxPercent} onChange={(e) => handleInvoiceChange('taxPercent', e.target.value)} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-mono" />
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
                  <div key={item.id} className="p-3 bg-white/[0.01] border border-white/[0.04] rounded-xl space-y-2 relative group">
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

        <div className={`flex-1 flex flex-col items-center space-y-6 ${activeTab === 'invoice' ? 'lg:w-[55%]' : 'w-full'}`}>
          {activeTab === 'proposal' ? (
            proposalPages.map((pageContent, idx) => (
              <div key={idx} className="print-sheet proposal-page relative w-full max-w-[680px] rounded-2xl shadow-2xl transition-all duration-300 border text-left flex flex-col justify-between" style={{ fontFamily: "'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif", background: bg, border: border, width: '680px', height: '962px', boxSizing: 'border-box' }}>
                <div className="w-full">
                  <div style={{ height: '12mm' }} />
                  {idx === 0 && (
                    <>
                      <div className="px-12 pt-10 pb-0">
                        <table cellPadding="0" cellSpacing="0" border={0} className="w-full">
                          <tbody>
                            <tr>
                              <td valign="middle" className="w-[44px]"><img src="/icon-96.png" width="44" height="44" alt="Monogram" className="block rounded-[10px] bg-[#0d0d0d] w-11 h-11" /></td>
                              <td valign="middle" className="px-3.5 w-1"><div className="w-[2px] h-[38px] rounded-[1px]" style={{ background: gradL }}></div></td>
                              <td valign="middle">
                                <p className="m-0 text-xl font-bold tracking-tight" style={{ color: nameC, letterSpacing: '-0.02em' }}>MeghRoop</p>
                                <p className="m-0 text-[10px] font-semibold tracking-widest uppercase" style={{ color: subC, letterSpacing: '0.14em' }}>Growth · AI · Software Agency</p>
                              </td>
                              <td valign="middle" className="text-right">
                                <p className="m-0 text-[11px] leading-[1.8] font-medium" style={{ color: bodyC }}>
                                  <a href="https://meghroop.tech" target="_blank" rel="noopener noreferrer" style={{ color: '#c084fc', textDecoration: 'none' }}>
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
                      <div className="px-12 pt-4 pb-0"><div className="h-[2px] rounded-[2px]" style={{ background: `linear-gradient(90deg, ${gradL}, ${gradR}, transparent)` }}></div></div>
                    </>
                  )}
                </div>
                <div 
                  className="px-12 py-8 flex-1 overflow-hidden"
                  onScroll={(e) => { e.currentTarget.scrollTop = 0 }}
                >
                  {idx === 0 && (
                    <div className="mb-4 mr-title-block">
                      <input type="text" value={documentSub} onChange={(e) => { setDocumentSub(e.target.value); handleContentChange() }} className="w-full bg-transparent border-none outline-none font-semibold text-[11px] tracking-widest uppercase mb-3 focus:bg-white/[0.02] p-1 rounded transition-all text-left" style={{ color: subC, letterSpacing: '0.14em' }} placeholder="DOCUMENT SUBTITLE / BRIEF" />
                      <input type="text" value={documentTitle} onChange={(e) => { setDocumentTitle(e.target.value); handleContentChange() }} className="w-full bg-transparent border-none outline-none font-bold text-2xl tracking-tight mb-5 focus:bg-white/[0.02] p-1 rounded transition-all font-sans text-left" style={{ color: nameC, letterSpacing: '-0.02em' }} placeholder="Proposal / Invoice / Letter" />
                    </div>
                  )}
                  <EditablePage 
                    initialContent={pageContent} 
                    onChange={(html) => handlePageInput(idx, html)} 
                    onBlur={handlePageBlur} 
                    onKeyDown={(e) => handlePageKeyDown(idx, e)}
                    className="prose max-w-none text-sm outline-none leading-relaxed" 
                    style={{ color: bodyC }} 
                    refIndex={idx} 
                    editorRefs={editorRefs} 
                  />
                </div>
                <div style={{ borderTop: `1px solid ${footerBorder}`, padding: '8px 48px 12px', background: bg }} className="w-full">
                  <table cellPadding="0" cellSpacing="0" border={0} className="w-full">
                    <tbody>
                      <tr>
                        <td className="text-[10px] font-medium" style={{ color: footC }}>MeghRoop &middot; Growth, AI &amp; Software Agency</td>
                        <td className="text-right text-[10px] font-medium" style={{ color: footC }}>meghroop.tech &middot; Rajasthan, India</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          ) : (
            <div className="print-sheet invoice-page relative w-full max-w-[680px] rounded-2xl shadow-2xl transition-all duration-300 border text-left flex flex-col justify-between" style={{ fontFamily: "'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif", background: bg, border: border, minHeight: '962px', boxSizing: 'border-box' }}>
               <div style={{ height: '12mm' }} />
               <div className="px-12 pt-10 pb-0">
                <table cellPadding="0" cellSpacing="0" border={0} className="w-full">
                  <tbody>
                    <tr>
                      <td valign="middle" className="w-[44px]"><img src="/icon-96.png" width="44" height="44" alt="Monogram" className="block rounded-[10px] bg-[#0d0d0d] w-11 h-11" /></td>
                      <td valign="middle" className="px-3.5 w-1"><div className="w-[2px] h-[38px] rounded-[1px]" style={{ background: gradL }}></div></td>
                      <td valign="middle">
                        <p className="m-0 text-xl font-bold tracking-tight" style={{ color: nameC, letterSpacing: '-0.02em' }}>MeghRoop</p>
                        <p className="m-0 text-[10px] font-semibold tracking-widest uppercase" style={{ color: subC, letterSpacing: '0.14em' }}>Growth · AI · Software Agency</p>
                      </td>
                      <td valign="middle" className="text-right">
                        <p className="m-0 text-[11px] leading-[1.8] font-medium" style={{ color: bodyC }}>
                          <a href="https://meghroop.tech" target="_blank" rel="noopener noreferrer" style={{ color: '#c084fc', textDecoration: 'none' }}>
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
              <div className="px-12 pt-4 pb-0"><div className="h-[2px] rounded-[2px]" style={{ background: `linear-gradient(90deg, ${gradL}, ${gradR}, transparent)` }}></div></div>
              <div className="px-12 py-8 space-y-6 flex-1">
                <div><h2 className="font-bold text-2xl tracking-tight m-0" style={{ color: nameC, letterSpacing: '-0.02em' }}>INVOICE</h2><p className="text-[10px] font-semibold tracking-widest uppercase m-0 mt-1" style={{ color: subC, letterSpacing: '0.14em' }}>Official Billing Statement</p></div>
                <div className="grid grid-cols-3 gap-6 text-[10px] border-y py-4" style={{ borderColor: tableBorder }}>
                  <div className="space-y-1"><span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>BILLED TO:</span><p className="font-bold m-0 text-[11px] leading-tight" style={{ color: nameC }}>{invoiceData.clientName || 'Client Name'}</p></div>
                  <div className="space-y-1"><span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>BANK DETAILS:</span><p className="font-bold m-0 text-[11px] leading-tight" style={{ color: nameC }}>{invoiceData.bankName || 'Bank Name'}</p></div>
                  <div className="space-y-2 text-right"><div><span className="text-[9px] font-bold uppercase tracking-wider block" style={{ color: labelC }}>INVOICE NUMBER:</span><span className="font-mono font-bold text-[11px]" style={{ color: nameC }}>{invoiceData.invoiceNumber}</span></div></div>
                </div>
                <div className="overflow-x-auto"><table className="w-full text-xs text-left border-collapse"><thead><tr className="border-b" style={{ borderColor: tableBorder }}><th className="py-2.5 font-bold tracking-wider" style={{ color: labelC }}>DESCRIPTION</th><th className="py-2.5 text-right font-bold tracking-wider w-32" style={{ color: labelC }}>AMOUNT</th></tr></thead><tbody>{invoiceData.items.map((item) => (<tr key={item.id} className="border-b" style={{ borderColor: tableBorder }}><td className="py-3 pr-4 font-medium" style={{ color: nameC }}>{item.description}</td><td className="py-3 text-right font-mono font-bold" style={{ color: nameC }}>{invoiceData.currency}{item.rate.toLocaleString()}</td></tr>))}</tbody></table></div>
              </div>
              <div style={{ borderTop: `1px solid ${footerBorder}`, padding: '8px 48px 12px', background: bg }} className="w-full">
                <table cellPadding="0" cellSpacing="0" border={0} className="w-full">
                  <tbody>
                    <tr>
                      <td className="text-[10px] font-medium" style={{ color: footC }}>MeghRoop &middot; Growth, AI &amp; Software Agency</td>
                      <td className="text-right text-[10px] font-medium" style={{ color: footC }}>meghroop.tech &middot; Rajasthan, India</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const paginateContent = (html: string, page1MaxHeight: number, page2MaxHeight: number): string[] => {
  if (typeof document === 'undefined') return [html || '<p><br></p>']
  const tempContainer = document.createElement('div')
  tempContainer.style.width = '584px'
  tempContainer.style.position = 'absolute'
  tempContainer.style.visibility = 'hidden'
  tempContainer.style.fontFamily = "'Space Grotesk', sans-serif"
  document.body.appendChild(tempContainer)
  tempContainer.innerHTML = html || '<p><br></p>'
  const pages: string[] = []

  const sheetWrapper = document.createElement('div')
  sheetWrapper.className = 'print-sheet'
  sheetWrapper.style.width = '680px'
  document.body.appendChild(sheetWrapper)

  const measureContainer = document.createElement('div')
  measureContainer.style.width = '584px'
  measureContainer.className = 'prose max-w-none text-sm leading-relaxed'
  sheetWrapper.appendChild(measureContainer)
  const getLimit = () => pages.length === 0 ? page1MaxHeight : page2MaxHeight

  // Split a single block (e.g. a long <p>) across pages at word boundaries,
  // preserving inline formatting — this is what makes continuous typing flow
  // onto the next page instead of disappearing behind the footer.
  const splitByWords = (node: Node) => {
    const isText = node.nodeType === Node.TEXT_NODE
    const el = node as HTMLElement
    const tag = isText ? '' : el.tagName.toLowerCase()

    const makeShell = (): HTMLElement | null => {
      if (isText) return null
      const shell = document.createElement(tag)
      for (const attr of Array.from(el.attributes)) shell.setAttribute(attr.name, attr.value)
      return shell
    }

    let shell = makeShell()
    if (shell) measureContainer.appendChild(shell)
    const target = (): HTMLElement => shell ?? measureContainer

    const flush = () => {
      pages.push(measureContainer.innerHTML)
      measureContainer.innerHTML = ''
      shell = makeShell()
      if (shell) measureContainer.appendChild(shell)
    }

    const appendInline = (child: Node) => {
      if (child.nodeType === Node.TEXT_NODE) {
        // Keep whitespace tokens so total text content is preserved exactly
        // (the caret-position math downstream relies on this).
        const tokens = (child.nodeValue || '').split(/(\s+)/)
        for (const tok of tokens) {
          if (tok === '') continue
          const tn = document.createTextNode(tok)
          target().appendChild(tn)
          if (measureContainer.offsetHeight > getLimit() && target().childNodes.length > 1) {
            target().removeChild(tn)
            flush()
            target().appendChild(tn)
          }
        }
      } else {
        const c = child.cloneNode(true)
        target().appendChild(c)
        if (measureContainer.offsetHeight > getLimit()) {
          target().removeChild(c)
          if (target().childNodes.length === 0) {
            appendChildNodes(child)
          } else {
            flush()
            target().appendChild(c)
            if (measureContainer.offsetHeight > getLimit() && target().childNodes.length === 1) {
              target().removeChild(c)
              appendChildNodes(child)
            }
          }
        }
      }
    }

    const appendChildNodes = (parent: Node) => {
      for (const child of Array.from(parent.childNodes)) appendInline(child)
    }

    if (isText) appendInline(node)
    else appendChildNodes(node)

    // Drop a trailing empty shell so we don't emit a blank page/paragraph.
    if (shell && shell.childNodes.length === 0) measureContainer.removeChild(shell)
  }

  const appendAndMeasure = (node: Node) => {
    const cloned = node.cloneNode(true)
    measureContainer.appendChild(cloned)
    if (measureContainer.offsetHeight <= getLimit()) return
    measureContainer.removeChild(cloned)
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement
      const tagName = el.tagName.toLowerCase()
      if (tagName === 'ul' || tagName === 'ol') {
        let newList = document.createElement(tagName)
        measureContainer.appendChild(newList)
        for (const item of Array.from(el.childNodes)) {
          const itemCloned = item.cloneNode(true)
          newList.appendChild(itemCloned)
          if (measureContainer.offsetHeight > getLimit()) {
            newList.removeChild(itemCloned)
            pages.push(measureContainer.innerHTML)
            measureContainer.innerHTML = ''
            newList = document.createElement(tagName)
            measureContainer.appendChild(newList)
            newList.appendChild(itemCloned)
          }
        }
        return
      }
      if (tagName === 'table') {
        const thead = el.querySelector('thead')
        const rows = Array.from(el.querySelectorAll('tr')).filter(tr => {
          const parentTagName = tr.parentElement?.tagName.toLowerCase()
          return parentTagName !== 'thead'
        })
        let newTable = document.createElement('table')
        if (thead) newTable.appendChild(thead.cloneNode(true))
        let newTbody = document.createElement('tbody')
        newTable.appendChild(newTbody)
        measureContainer.appendChild(newTable)
        for (const row of rows) {
          const rowCloned = row.cloneNode(true)
          newTbody.appendChild(rowCloned)
          if (measureContainer.offsetHeight > getLimit()) {
            newTbody.removeChild(rowCloned)
            pages.push(measureContainer.innerHTML)
            measureContainer.innerHTML = ''
            newTable = document.createElement('table')
            if (thead) newTable.appendChild(thead.cloneNode(true))
            newTbody = document.createElement('tbody')
            newTable.appendChild(newTbody)
            measureContainer.appendChild(newTable)
            newTbody.appendChild(rowCloned)
          }
        }
        return
      }
    }
    // General case: this block doesn't fit on the current page. Move it to a
    // fresh page first; if it STILL overflows on its own, it's a single block
    // (e.g. a long typed paragraph) that must be split across pages by words.
    if (measureContainer.innerHTML.trim() !== '') {
      pages.push(measureContainer.innerHTML)
      measureContainer.innerHTML = ''
    }
    measureContainer.appendChild(cloned)
    if (measureContainer.offsetHeight <= getLimit()) return
    measureContainer.removeChild(cloned)
    splitByWords(node)
  }
  Array.from(tempContainer.childNodes).forEach(child => { appendAndMeasure(child) })
  if (measureContainer.innerHTML.trim() !== '') pages.push(measureContainer.innerHTML)
  document.body.removeChild(tempContainer)
  document.body.removeChild(sheetWrapper)
  return pages.length > 0 ? pages : [html || '<p><br></p>']
}
