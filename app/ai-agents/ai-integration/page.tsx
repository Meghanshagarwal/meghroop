'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

const faqs = [];

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main id="main-content">
        <style dangerouslySetInnerHTML={{ __html: `
          .container {
            .container { padding: 0 40px; }
            .container { padding: 0 64px; }
        .gradient-text {
        .header {
        .header-inner {
        .logo {
        .logo svg {
        .nav-links {
            .nav-links { display: flex; }
        .nav-links a {
        .nav-links a:hover {
        .nav-cta {
            .nav-cta { display: inline-flex; }
        .nav-cta:hover {
        .mobile-menu-btn {
            .mobile-menu-btn { display: none; }
        .mobile-menu-btn span {
        .mobile-menu-btn.active span:nth-child(1) {
        .mobile-menu-btn.active span:nth-child(2) {
        .mobile-menu-btn.active span:nth-child(3) {
        .mobile-menu {
        .mobile-menu.active {
        .mobile-menu a {
        .mobile-menu a:hover { color: #ffffff; }
        .mobile-menu .mobile-cta {
        .hero {
            .hero { padding: 180px 0 120px; }
        .hero-glow {
        .hero-glow-1 {
        .hero-glow-2 {
        .hero-glow-3 {
        .hero-content {
        .hero-badge {
        .hero-badge svg {
        .hero h1 {
            .hero h1 { font-size: 3.25rem; }
            .hero h1 { font-size: 4rem; }
            .hero h1 { font-size: 4.5rem; }
        .hero-subtitle {
            .hero-subtitle { font-size: 1.1875rem; }
        .hero-tags {
        .hero-tag {
        .hero-ctas {
        .btn-primary {
        .btn-primary:hover {
        .btn-secondary {
        .btn-secondary:hover {
        .section {
            .section { padding: 96px 0; }
        .section-label {
        .section-title {
            .section-title { font-size: 2.75rem; }
        .section-subtitle {
        .section-header {
        .card {
        .card:hover {
        .glass-card {
        .glass-card:hover {
        .what-grid {
            .what-grid { grid-template-columns: repeat(2, 1fr); }
            .what-grid { grid-template-columns: repeat(4, 1fr); }
        .what-icon {
        .what-icon svg {
        .what-icon-1 { background: rgba(168, 85, 247, 0.12); color: #a855f7; }
        .what-icon-2 { background: rgba(59, 130, 246, 0.12); color: #3b82f6; }
        .what-icon-3 { background: rgba(6, 182, 212, 0.12); color: #06b6d4; }
        .what-icon-4 { background: rgba(16, 185, 129, 0.12); color: #10b981; }
        .what-card h3 {
        .what-card p {
        .process-grid {
            .process-grid { grid-template-columns: repeat(2, 1fr); }
            .process-grid { grid-template-columns: repeat(4, 1fr); }
        .process-card {
        .process-number {
        .process-number-1 { color: #a855f7; }
        .process-number-2 { color: #3b82f6; }
        .process-number-3 { color: #06b6d4; }
        .process-number-4 { color: #10b981; }
        .process-card h3 {
        .process-card p {
            .process-card::after {
            .process-card:last-child::after { display: none; }
        .tools-section {
        .tools-category {
        .tools-category:last-child { margin-bottom: 0; }
        .tools-category-label {
        .tools-pills {
        .tool-pill {
        .tool-pill:hover {
        .tools-wrapper {
            .tools-wrapper { padding: 48px; }
        .usecases-grid {
            .usecases-grid { grid-template-columns: repeat(2, 1fr); }
            .usecases-grid { grid-template-columns: repeat(3, 1fr); }
        .usecase-card {
        .usecase-card::before {
        .usecase-card:nth-child(1)::before { background: linear-gradient(90deg, #a855f7, #3b82f6); }
        .usecase-card:nth-child(2)::before { background: linear-gradient(90deg, #3b82f6, #06b6d4); }
        .usecase-card:nth-child(3)::before { background: linear-gradient(90deg, #06b6d4, #10b981); }
        .usecase-card:nth-child(4)::before { background: linear-gradient(90deg, #10b981, #a855f7); }
        .usecase-card:nth-child(5)::before { background: linear-gradient(90deg, #a855f7, #06b6d4); }
        .usecase-card:nth-child(6)::before { background: linear-gradient(90deg, #3b82f6, #10b981); }
        .usecase-card h3 {
        .usecase-card p {
        .usecase-emoji {
        .stack-pills {
        .stack-pill {
        .stack-pill:hover {
        .faq-list {
        .faq-item {
        .faq-question {
            .faq-question { font-size: 1.0625rem; }
        .faq-question:hover {
        .faq-icon {
        .faq-item.active .faq-icon {
        .faq-answer {
        .faq-item.active .faq-answer {
        .faq-answer p {
        .final-cta {
        .final-cta-inner {
            .final-cta-inner { padding: 80px 48px; }
        .final-cta-glow {
        .final-cta h2 {
            .final-cta h2 { font-size: 3rem; }
        .final-cta p {
        .final-cta .btn-primary {
        .footer {
        .footer-inner {
            .footer-inner {
        .footer-copy {
        .footer-links {
        .footer-links a {
        .footer-links a:hover { color: #ffffff; }
        .footer-socials {
        .footer-socials a {
        .footer-socials a:hover {
        .footer-socials svg { width: 18px; height: 18px; }
        .fade-up {
        .fade-up.visible {
        .fade-up-d1 { transition-delay: 0.1s; }
        .fade-up-d2 { transition-delay: 0.2s; }
        .fade-up-d3 { transition-delay: 0.3s; }
        .fade-up-d4 { transition-delay: 0.4s; }
        .fade-up-d5 { transition-delay: 0.5s; }
        .fade-up-d6 { transition-delay: 0.6s; }
        @keyframes badge-pulse {
        .hero-badge { animation: badge-pulse 3s ease-in-out infinite; }
        .section-divider {
        ` }} />
        
        

    {/* ========== HEADER ========== */}
    

    {/* Mobile Menu */}
    <div className="mobile-menu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/ai-agents">AI Agents</a>
        <a href="/systems">Systems</a>
        <a href="/journal">Journal</a>
        <a href="/contact">Contact</a>
        <Link href="/contact" className="mobile-cta">Let's Talk</Link>
    </div>

    {/* ========== HERO ========== */}
    <section className="hero">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>
        <div className="container">
            <div className="hero-content fade-up">
                <div className="hero-badge">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 8h3l2-5 2 10 2-5h3"/></svg>
                    AI Integration Services
                </div>
                <h1>Your CRM has an AI button.<br /><span className="gradient-text">Let us make it actually do something.</span></h1>
                <p className="hero-subtitle">We plug AI into your existing tools — Salesforce, HubSpot, Zoho, Slack, SAP, and everything in between. No rip-and-replace. No 6-month migration. Just AI that works where your team already works.</p>
                <div className="hero-tags">
                    <span className="hero-tag">CRM Integration</span>
                    <span className="hero-tag">ERP AI</span>
                    <span className="hero-tag">MCP Servers</span>
                    <span className="hero-tag">API Integration</span>
                    <span className="hero-tag">Tool Connectivity</span>
                </div>
                <div className="hero-ctas">
                    <Link href="/contact" className="btn-primary">
                        Let's Talk
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                    <a href="#how" className="btn-secondary">
                        See How It Works
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* ========== WHAT THIS IS ========== */}
    <section className="section">
        <div className="container">
            <div className="section-header fade-up">
                <span className="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                    What This Is
                </span>
                <h2 className="section-title">AI that fits <span className="gradient-text">your stack</span>, not the other way around.</h2>
                <p className="section-subtitle">We don't ask you to rethink your tools. We make them smarter.</p>
            </div>

            <div className="what-grid">
                {/* Card 1 */}
                <div className="card what-card fade-up fade-up-d1">
                    <div className="what-icon what-icon-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3>No Rip-and-Replace</h3>
                    <p>We work with your existing stack. Additive changes only. Nothing breaks.</p>
                </div>

                {/* Card 2 */}
                <div className="card what-card fade-up fade-up-d2">
                    <div className="what-icon what-icon-2">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                    </div>
                    <h3>MCP-First Architecture</h3>
                    <p>We build Model Context Protocol servers so AI agents can safely access your tools, data, and APIs.</p>
                </div>

                {/* Card 3 */}
                <div className="card what-card fade-up fade-up-d3">
                    <div className="what-icon what-icon-3">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    </div>
                    <h3>Beyond Native AI</h3>
                    <p>Salesforce Einstein, HubSpot Breeze, Zoho Zia are fine for basics. We build what they can't.</p>
                </div>

                {/* Card 4 */}
                <div className="card what-card fade-up fade-up-d4">
                    <div className="what-icon what-icon-4">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    </div>
                    <h3>Any Tool, Any API</h3>
                    <p>If it has an API, webhook, or database, we can connect AI to it. Even legacy systems.</p>
                </div>
            </div>
        </div>
    </section>

    <hr className="section-divider" />

    {/* ========== HOW WE DO IT ========== */}
    <section className="section" id="how">
        <div className="container">
            <div className="section-header fade-up">
                <span className="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                    Our Process
                </span>
                <h2 className="section-title">How we <span className="gradient-text">wire AI in</span></h2>
                <p className="section-subtitle">Four steps. No ambiguity. You know exactly what's happening at every stage.</p>
            </div>

            <div className="process-grid">
                <div className="card process-card fade-up fade-up-d1">
                    <div className="process-number process-number-1">01</div>
                    <h3>Stack Audit</h3>
                    <p>We map your current tools, data flows, and integration points. Find the gaps where AI actually makes sense.</p>
                </div>

                <div className="card process-card fade-up fade-up-d2">
                    <div className="process-number process-number-2">02</div>
                    <h3>Integration Architecture</h3>
                    <p>Design the AI layer: MCP servers, API connections, data pipelines, auth flows. Everything documented.</p>
                </div>

                <div className="card process-card fade-up fade-up-d3">
                    <div className="process-number process-number-3">03</div>
                    <h3>Build & Connect</h3>
                    <p>Wire AI into your tools. Test with real data. Validate with your team. Iterate until it's right.</p>
                </div>

                <div className="card process-card fade-up fade-up-d4">
                    <div className="process-number process-number-4">04</div>
                    <h3>Go Live & Support</h3>
                    <p>Deploy, monitor, handle API changes and updates. We stick around until everything hums.</p>
                </div>
            </div>
        </div>
    </section>

    <hr className="section-divider" />

    {/* ========== SUPPORTED TOOLS ========== */}
    <section className="section tools-section">
        <div className="container">
            <div className="section-header fade-up">
                <span className="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    Supported Tools
                </span>
                <h2 className="section-title">We play nice with <span className="gradient-text">your entire stack</span></h2>
                <p className="section-subtitle">If it runs in your business, we can probably connect AI to it.</p>
            </div>

            <div className="tools-wrapper fade-up">
                {/* CRM */}
                <div className="tools-category">
                    <div className="tools-category-label">CRM</div>
                    <div className="tools-pills">
                        <span className="tool-pill">Salesforce</span>
                        <span className="tool-pill">HubSpot</span>
                        <span className="tool-pill">Zoho CRM</span>
                        <span className="tool-pill">Pipedrive</span>
                        <span className="tool-pill">LeadSquared</span>
                        <span className="tool-pill">Freshsales</span>
                    </div>
                </div>

                {/* Helpdesk */}
                <div className="tools-category">
                    <div className="tools-category-label">Helpdesk</div>
                    <div className="tools-pills">
                        <span className="tool-pill">Zendesk</span>
                        <span className="tool-pill">Freshdesk</span>
                        <span className="tool-pill">Intercom</span>
                        <span className="tool-pill">ServiceNow</span>
                        <span className="tool-pill">Jira</span>
                    </div>
                </div>

                {/* ERP/Accounting */}
                <div className="tools-category">
                    <div className="tools-category-label">ERP / Accounting</div>
                    <div className="tools-pills">
                        <span className="tool-pill">SAP</span>
                        <span className="tool-pill">Oracle</span>
                        <span className="tool-pill">NetSuite</span>
                        <span className="tool-pill">Tally</span>
                        <span className="tool-pill">Zoho Books</span>
                        <span className="tool-pill">QuickBooks</span>
                        <span className="tool-pill">Xero</span>
                    </div>
                </div>

                {/* Data */}
                <div className="tools-category">
                    <div className="tools-category-label">Data</div>
                    <div className="tools-pills">
                        <span className="tool-pill">Snowflake</span>
                        <span className="tool-pill">BigQuery</span>
                        <span className="tool-pill">PostgreSQL</span>
                        <span className="tool-pill">MongoDB</span>
                        <span className="tool-pill">Supabase</span>
                    </div>
                </div>

                {/* Collaboration */}
                <div className="tools-category">
                    <div className="tools-category-label">Collaboration</div>
                    <div className="tools-pills">
                        <span className="tool-pill">Slack</span>
                        <span className="tool-pill">Teams</span>
                        <span className="tool-pill">Google Workspace</span>
                        <span className="tool-pill">Notion</span>
                        <span className="tool-pill">Confluence</span>
                        <span className="tool-pill">SharePoint</span>
                    </div>
                </div>

                {/* Legacy */}
                <div className="tools-category">
                    <div className="tools-category-label">Legacy</div>
                    <div className="tools-pills">
                        <span className="tool-pill">On-prem Systems</span>
                        <span className="tool-pill">Excel Workflows</span>
                        <span className="tool-pill">Homegrown Tools</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <hr className="section-divider" />

    {/* ========== USE CASES ========== */}
    <section className="section">
        <div className="container">
            <div className="section-header fade-up">
                <span className="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    What You Get
                </span>
                <h2 className="section-title">Real-world <span className="gradient-text">use cases</span></h2>
                <p className="section-subtitle">Not hypotheticals. Things we've actually built for teams like yours.</p>
            </div>

            <div className="usecases-grid">
                {/* 1 */}
                <div className="card usecase-card fade-up fade-up-d1">
                    <span className="usecase-emoji">🧠</span>
                    <h3>CRM Intelligence</h3>
                    <p>AI that reads your pipeline, scores leads, and drafts follow-ups. Inside your CRM. Not in a separate tab.</p>
                </div>

                {/* 2 */}
                <div className="card usecase-card fade-up fade-up-d2">
                    <span className="usecase-emoji">🎫</span>
                    <h3>Helpdesk Automation</h3>
                    <p>Auto-categorize tickets, suggest responses, escalate by urgency. In Zendesk or Freshdesk. Zero context-switching.</p>
                </div>

                {/* 3 */}
                <div className="card usecase-card fade-up fade-up-d3">
                    <span className="usecase-emoji">📄</span>
                    <h3>ERP Data Extraction</h3>
                    <p>Pull structured data from invoices, POs, contracts into SAP or NetSuite. No manual entry. No copy-paste.</p>
                </div>

                {/* 4 */}
                <div className="card usecase-card fade-up fade-up-d4">
                    <span className="usecase-emoji">💬</span>
                    <h3>Slack/Teams AI Assistant</h3>
                    <p>Ask questions about your business data in natural language. Get answers in your chat. Like a colleague who never sleeps.</p>
                </div>

                {/* 5 */}
                <div className="card usecase-card fade-up fade-up-d5">
                    <span className="usecase-emoji">⚡</span>
                    <h3>Cross-Tool Workflows</h3>
                    <p>Trigger AI actions across tools. Lead comes in HubSpot → enriched → task in Asana → email drafted. All automatic.</p>
                </div>

                {/* 6 */}
                <div className="card usecase-card fade-up fade-up-d6">
                    <span className="usecase-emoji">🏚️</span>
                    <h3>Legacy System Bridge</h3>
                    <p>Connect AI to that 15-year-old internal tool nobody wants to touch. We'll touch it. Carefully.</p>
                </div>
            </div>
        </div>
    </section>

    <hr className="section-divider" />

    {/* ========== TECH STACK ========== */}
    <section className="section">
        <div className="container" style={{textAlign: 'center'}}>
            <div className="section-header fade-up" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    Our Stack
                </span>
                <h2 className="section-title">Built with <span className="gradient-text">boring, reliable tech</span></h2>
                <p className="section-subtitle" style={{marginLeft: 'auto', marginRight: 'auto'}}>No bleeding-edge experiments. Just tools that work at scale.</p>
            </div>

            <div className="stack-pills fade-up">
                <span className="stack-pill">MCP (Model Context Protocol)</span>
                <span className="stack-pill">REST APIs</span>
                <span className="stack-pill">GraphQL</span>
                <span className="stack-pill">Webhooks</span>
                <span className="stack-pill">n8n</span>
                <span className="stack-pill">OAuth 2.0</span>
                <span className="stack-pill">API Key Management</span>
                <span className="stack-pill">Docker</span>
                <span className="stack-pill">Node.js</span>
                <span className="stack-pill">Python</span>
            </div>
        </div>
    </section>

    <hr className="section-divider" />

    {/* ========== FAQ ========== */}
    <section className="section">
        <div className="container">
            <div className="section-header fade-up" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                    FAQ
                </span>
                <h2 className="section-title">Questions we hear <span className="gradient-text">a lot</span></h2>
                <p className="section-subtitle" style={{marginLeft: 'auto', marginRight: 'auto'}}>Straight answers. No jargon. No hand-waving.</p>
            </div>

            <div className="faq-list fade-up">
                {/* Q1 */}
                <div className="faq-item">
                    <button className="faq-question" aria-expanded="false">
                        <span>Will this break our existing workflows?</span>
                        <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>No. We extend, never replace. All changes are additive. Your team keeps working the same way — they just get superpowers on top.</p>
                    </div>
                </div>

                {/* Q2 */}
                <div className="faq-item">
                    <button className="faq-question" aria-expanded="false">
                        <span>Can AI work with legacy/on-prem systems?</span>
                        <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>Yes. We've integrated with SAP ECC, Oracle EBS, Tally, and custom in-house tools. If it has data, we can reach it — even behind firewalls.</p>
                    </div>
                </div>

                {/* Q3 */}
                <div className="faq-item">
                    <button className="faq-question" aria-expanded="false">
                        <span>How long does integration take?</span>
                        <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>Single-tool integrations: 2-4 weeks. Multi-tool programs: 2-4 months depending on complexity. We'll give you a realistic timeline upfront — not a fantasy one.</p>
                    </div>
                </div>

                {/* Q4 */}
                <div className="faq-item">
                    <button className="faq-question" aria-expanded="false">
                        <span>What is MCP?</span>
                        <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>Model Context Protocol. An open standard that lets AI agents access your tools safely — with proper permissions, auth, and audit trails. Think of it as a secure bridge between AI and your software.</p>
                    </div>
                </div>

                {/* Q5 */}
                <div className="faq-item">
                    <button className="faq-question" aria-expanded="false">
                        <span>Can we use our existing cloud credits?</span>
                        <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>Yes. Azure OpenAI, AWS Bedrock, GCP Vertex — we work with whatever you already have. No vendor lock-in from our side.</p>
                    </div>
                </div>

                {/* Q6 */}
                <div className="faq-item">
                    <button className="faq-question" aria-expanded="false">
                        <span>Who maintains this when Salesforce updates their API?</span>
                        <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>If you're on a retainer, we handle it. Otherwise, we build with resilience — versioned APIs, error handling, fallback logic. It won't collapse because of a minor API update.</p>
                    </div>
                </div>

                {/* Q7 */}
                <div className="faq-item">
                    <button className="faq-question" aria-expanded="false">
                        <span>What about data security?</span>
                        <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>Everything deploys in your cloud. Your data never leaves your infrastructure. We follow DPDP, GDPR, and SOC 2 best practices. Security isn't an afterthought — it's baked in.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <hr className="section-divider" />

    {/* ========== FINAL CTA ========== */}
    <section className="section final-cta">
        <div className="container">
            <div className="final-cta-inner fade-up">
                <div className="final-cta-glow"></div>
                <h2>Your tools have AI buttons.<br /><span className="gradient-text">Let's make them useful.</span></h2>
                <p>Tell us what you're working with. We'll tell you what AI can do in there — in a 30-minute call, not a 30-page proposal.</p>
                <Link href="/contact" className="btn-primary">
                    Let's Talk
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
            </div>
        </div>
    </section>

    {/* ========== FOOTER ========== */}
    

    {/* ========== JAVASCRIPT ========== */}


      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
