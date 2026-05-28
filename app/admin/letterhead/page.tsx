'use client'

import React, { useState, useEffect, useRef } from 'react'
import { 
  Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, 
  Printer, Sun, Moon, Sparkles, CheckCircle2, CloudSync, Undo, Redo 
} from 'lucide-react'

export default function LetterheadEditorPage() {
  const [lhMode, setLhMode] = useState<'light' | 'dark'>('light')
  const [documentTitle, setDocumentTitle] = useState('PROPOSAL / INVOICE / LETTER')
  const [documentSub, setDocumentSub] = useState('OFFICIAL PROJECT BRIEF')
  const [isSaved, setIsSaved] = useState(true)
  const editorRef = useRef<HTMLDivElement>(null)

  // Default rich-text body template
  const defaultBody = `
    <p>Dear Client,</p>
    <p>We are pleased to present this official document from the MeghRoop Creative Engineering & AI Studio. Our mission is to build elite AI agents, autonomous workflows, custom Model Context Protocol (MCP) integrations, and next-generation, high-performance web engineering experiences.</p>
    <p><strong>Key deliverables outlined in this brief:</strong></p>
    <ul>
      <li><strong>Autonomous Outbound Agent System</strong>: Deeply integrated voice/chat agents with standard vector memory.</li>
      <li><strong>MCP Financial Infrastructure Server</strong>: High-scale data connector with robust security endpoints.</li>
      <li><strong>Headless Next.js Commerce Storefront</strong>: Ultra-fast storefront targeting <400ms Core Web Vitals.</li>
    </ul>
    <p>We look forward to collaborating with your team to engineer these intelligent systems.</p>
    <p>Sincerely,<br><strong>Meghansh Agarwal</strong><br>Founder, MeghRoop</p>
  `.trim()

  // Load from LocalStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('mr_lh_mode') as 'light' | 'dark'
    const savedTitle = localStorage.getItem('mr_lh_title')
    const savedSub = localStorage.getItem('mr_lh_sub')
    const savedBody = localStorage.getItem('mr_lh_body')

    if (savedMode) setLhMode(savedMode)
    if (savedTitle) setDocumentTitle(savedTitle)
    if (savedSub) setDocumentSub(savedSub)
    
    if (editorRef.current) {
      editorRef.current.innerHTML = savedBody || defaultBody
    }
  }, [])

  // Auto-save logic
  const handleContentChange = () => {
    setIsSaved(false)
  }

  useEffect(() => {
    if (isSaved) return

    const timer = setTimeout(() => {
      localStorage.setItem('mr_lh_mode', lhMode)
      localStorage.setItem('mr_lh_title', documentTitle)
      localStorage.setItem('mr_lh_sub', documentSub)
      if (editorRef.current) {
        localStorage.setItem('mr_lh_body', editorRef.current.innerHTML)
      }
      setIsSaved(true)
    }, 800) // Debounce save for 800ms

    return () => clearTimeout(timer)
  }, [lhMode, documentTitle, documentSub, isSaved])

  // Formatting Command Wrapper
  const executeCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value)
    handleContentChange()
    if (editorRef.current) editorRef.current.focus()
  }

  // Action handlers
  const handlePrint = () => {
    window.print()
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset this document to the default template? Your current edits will be overwritten.')) {
      setDocumentTitle('PROPOSAL / INVOICE / LETTER')
      setDocumentSub('OFFICIAL PROJECT BRIEF')
      if (editorRef.current) {
        editorRef.current.innerHTML = defaultBody
      }
      setIsSaved(false)
    }
  }

  const isDark = lhMode === 'dark'
  
  // Theme Variables to match logo-kit.html Letterhead standard exactly
  const bg = isDark ? '#080808' : '#ffffff'
  const border = isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #eeeeee'
  const nameC = isDark ? '#ffffff' : '#111111'
  const subC = isDark ? '#a1a1aa' : '#999999'
  const bodyC = isDark ? '#d4d4d8' : '#4b5563' // zinc-300 on dark, gray-600 on light
  const footC = isDark ? '#52525b' : '#9ca3af' // zinc-600 on dark, gray-400 on light
  const divClr = isDark ? 'rgba(255,255,255,0.08)' : '#f3f4f6'
  const gradL = isDark ? '#c084fc' : '#9333ea' // Purple-400 vs Purple-600
  const gradR = isDark ? '#60a5fa' : '#3b82f6' // Blue-400 vs Blue-600

  return (
    <div className="min-h-screen bg-neutral-900/40 text-gray-100 flex flex-col relative pb-20">
      
      {/* Print Styles Injection */}
      <style jsx global>{`
        @media print {
          /* Hide Sidebar and Admin Header Controls */
          aside,
          .no-print,
          .admin-header-controls {
            display: none !important;
          }
          /* Reset Content Body layout spacing */
          main {
            margin-left: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          body, html {
            background: white !important;
            color: black !important;
          }
          /* Frame the Letterhead sheet perfectly for A4 printing */
          .print-sheet {
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            background: ${isDark ? '#080808' : '#ffffff'} !important;
          }
          /* Ensure text printing defaults to high-fidelity colors */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      {/* Editor Controls Header (no-print) */}
      <header className="no-print bg-[#0c0c0c] border-b border-white/[0.06] sticky top-0 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-600/10 text-purple-400 border border-purple-500/20">
            <Sparkles size={18} />
          </div>
          <div>
            <h1 className="text-md font-bold text-white tracking-tight">MeghRoop Letterhead Workspace</h1>
            <p className="text-xs text-gray-500 font-medium">Draft custom official branded PDF documents</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Saved Status Indicator */}
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

          {/* Light/Dark Toggle */}
          <button
            onClick={() => {
              setLhMode(prev => prev === 'light' ? 'dark' : 'light')
              setIsSaved(false)
            }}
            className="p-2 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-all"
            title="Toggle Letterhead Theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Reset Template */}
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-all"
          >
            Reset Template
          </button>

          {/* Download PDF / Print */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20 active:scale-95 transition-all"
          >
            <Printer size={15} />
            Download PDF
          </button>
        </div>
      </header>

      {/* WYSIWYG Styling Toolbar (no-print) */}
      <div className="no-print bg-[#090909] border-b border-white/[0.04] px-6 py-2 flex flex-wrap items-center gap-1.5 z-10 sticky top-[73px]">
        {/* Text Styling */}
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

        {/* Alignment */}
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

        {/* Lists */}
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

        {/* Undo/Redo */}
        <button
          onClick={() => executeCommand('undo')}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
          title="Undo (Ctrl+Z)"
        >
          <Undo size={15} />
        </button>
        <button
          onClick={() => executeCommand('redo')}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
          title="Redo (Ctrl+Y)"
        >
          <Redo size={15} />
        </button>
      </div>

      {/* Editor Body Wrapper */}
      <div className="flex-1 flex justify-center py-10 px-4">
        {/* The Letterhead Sheet Container (A4 Proportioned Paper) */}
        <div 
          className="print-sheet w-full max-w-[680px] rounded-2xl shadow-2xl transition-all duration-300 border overflow-hidden text-left"
          style={{ 
            fontFamily: "'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            background: bg,
            border: border
          }}
        >
          
          {/* 1. Header Portion */}
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
                      className="m-0 text-[11px] leading-[1.8] font-medium"
                      style={{ color: bodyC }}
                    >
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

          {/* 2. Gradient Divider */}
          <div className="px-12 pt-4 pb-0">
            <div 
              className="h-[2px] rounded-[2px]"
              style={{ background: `linear-gradient(90deg, ${gradL}, ${gradR}, transparent)` }}
            ></div>
          </div>

          {/* 3. Document Content Area */}
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

            {/* Rich-Text Body Editor */}
            <div
              ref={editorRef}
              contentEditable
              onInput={handleContentChange}
              className="prose max-w-none text-sm outline-none leading-relaxed p-1 rounded focus:bg-white/[0.01] transition-all min-h-[300px]"
              style={{ 
                color: bodyC,
              }}
            ></div>
          </div>

          {/* 4. Footer Portion */}
          <div className="px-12 pb-8 pt-0">
            <div 
              className="h-[1px] mb-4"
              style={{ background: divClr }}
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
  )
}
