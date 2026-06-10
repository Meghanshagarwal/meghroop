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
    @keyframes fadeUp {
    @keyframes fadeIn {
    @keyframes pulse-glow {
    @keyframes float {
    .animate-on-scroll {
    .animate-on-scroll.is-visible {
    .animate-on-scroll.delay-1 { transition-delay: 0.1s; }
    .animate-on-scroll.delay-2 { transition-delay: 0.2s; }
    .animate-on-scroll.delay-3 { transition-delay: 0.3s; }
    .animate-on-scroll.delay-4 { transition-delay: 0.4s; }
    .animate-on-scroll.delay-5 { transition-delay: 0.5s; }
    .animate-on-scroll.delay-6 { transition-delay: 0.6s; }
    .gradient-text {
    .header {
    .header-inner {
      .header-inner { padding: 0 40px; }
    .logo {
    .logo-icon {
    .nav-links {
      .nav-links { display: flex; }
    .nav-links a {
    .nav-links a:hover { color: #ffffff; }
    .nav-cta {
      .nav-cta { display: inline-flex; }
    .nav-cta:hover {
    .mobile-menu-btn {
      .mobile-menu-btn { display: none; }
    .mobile-menu-btn span {
    .mobile-menu-btn.active span:nth-child(1) {
    .mobile-menu-btn.active span:nth-child(2) { opacity: 0; }
    .mobile-menu-btn.active span:nth-child(3) {
    .mobile-nav {
    .mobile-nav.active { display: block; }
    .mobile-nav a {
    .mobile-nav a:hover { color: #ffffff; }
    .mobile-nav .mobile-nav-cta {
    .hero {
      .hero { padding: 180px 0 120px; }
    .hero-glow-1 {
    .hero-glow-2 {
    .hero-glow-3 {
    .hero-content {
    .hero-badge {
    .hero-badge-dot {
    .hero h1 {
      .hero h1 { font-size: 3.2rem; }
      .hero h1 { font-size: 4rem; }
      .hero h1 { font-size: 4.5rem; }
    .hero-subtitle {
      .hero-subtitle { font-size: 1.15rem; }
    .hero-tags {
    .hero-tag {
    .hero-ctas {
    .btn-primary {
    .btn-primary:hover {
    .btn-secondary {
    .btn-secondary:hover {
    /* ========== SECTION SHARED ========== */
    .section {
      padding: 64px 0;
    }

    @media (min-width: 768px) {
      .section { padding: 96px 0; }
    }

    .section-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #a855f7;
      margin-bottom: 16px;
    }

    .section-label-line {
      width: 24px;
      height: 1px;
      background: #a855f7;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.02em;
      line-height: 1.2;
      margin-bottom: 16px;
    }

    @media (min-width: 768px) {
      .section-title { font-size: 2.8rem; }
    }

    .section-subtitle {
      font-size: 1.05rem;
      color: #6b7280;
      max-width: 640px;
      line-height: 1.7;
    }

    /* ========== WHAT THIS IS ========== */
    .what-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 56px;
    }

    @media (min-width: 640px) {
      .what-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (min-width: 1024px) {
      .what-grid { grid-template-columns: repeat(4, 1fr); }
    }

    .what-card {
      background: #0a0a0a;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 32px 28px;
      transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    }

    .what-card:hover {
      border-color: rgba(168, 85, 247, 0.25);
      box-shadow: 0 0 40px rgba(168, 85, 247, 0.06);
      transform: translateY(-4px);
    }

    .what-card-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      margin-bottom: 20px;
    }

    .what-card:nth-child(1) .what-card-icon {
      background: rgba(168, 85, 247, 0.12);
      color: #c084fc;
    }
    .what-card:nth-child(2) .what-card-icon {
      background: rgba(59, 130, 246, 0.12);
      color: #60a5fa;
    }
    .what-card:nth-child(3) .what-card-icon {
      background: rgba(16, 185, 129, 0.12);
      color: #34d399;
    }
    .what-card:nth-child(4) .what-card-icon {
      background: rgba(6, 182, 212, 0.12);
      color: #22d3ee;
    }

    .what-card h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .what-card p {
      font-size: 0.9rem;
      color: #6b7280;
      line-height: 1.65;
    }

    /* ========== HOW WE DO IT ========== */
    .process-section {
      background: linear-gradient(180deg, rgba(168, 85, 247, 0.02) 0%, transparent 100%);
    }

    .process-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      margin-top: 56px;
    }

    @media (min-width: 640px) {
      .process-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (min-width: 1024px) {
      .process-grid { grid-template-columns: repeat(4, 1fr); }
    }

    .process-card {
      position: relative;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 16px;
      padding: 32px 28px;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .process-card:hover {
      border-color: rgba(59, 130, 246, 0.25);
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.06);
    }

    .process-number {
      font-size: 3rem;
      font-weight: 900;
      line-height: 1;
      margin-bottom: 16px;
      background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .process-card h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .process-card p {
      font-size: 0.9rem;
      color: #6b7280;
      line-height: 1.65;
    }

    /* connector line between steps on desktop */
    @media (min-width: 1024px) {
      .process-card:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 48px;
        right: -13px;
        width: 24px;
        height: 2px;
        background: linear-gradient(90deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.15));
        z-index: 1;
      }
    }

    /* ========== USE CASES ========== */
    .usecases-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 56px;
    }

    @media (min-width: 640px) {
      .usecases-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (min-width: 1024px) {
      .usecases-grid { grid-template-columns: repeat(3, 1fr); }
    }

    .usecase-card {
      background: #0a0a0a;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 32px 28px;
      transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    }

    .usecase-card:hover {
      border-color: rgba(6, 182, 212, 0.25);
      box-shadow: 0 0 40px rgba(6, 182, 212, 0.06);
      transform: translateY(-4px);
    }

    .usecase-emoji {
      font-size: 2rem;
      margin-bottom: 16px;
      display: block;
    }

    .usecase-card h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .usecase-card p {
      font-size: 0.9rem;
      color: #6b7280;
      line-height: 1.65;
    }

    /* ========== TECH STACK ========== */
    .stack-section {
      background: linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.02) 50%, transparent 100%);
    }

    .stack-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 48px;
    }

    .stack-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 100px;
      font-size: 0.88rem;
      font-weight: 500;
      color: #9ca3af;
      transition: border-color 0.3s ease, background 0.3s ease, color 0.3s ease;
    }

    .stack-pill:hover {
      border-color: rgba(168, 85, 247, 0.3);
      background: rgba(168, 85, 247, 0.06);
      color: #c084fc;
    }

    .stack-pill-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .stack-pill:nth-child(1) .stack-pill-dot,
    .stack-pill:nth-child(2) .stack-pill-dot { background: #a855f7; }
    .stack-pill:nth-child(3) .stack-pill-dot,
    .stack-pill:nth-child(4) .stack-pill-dot { background: #3b82f6; }
    .stack-pill:nth-child(5) .stack-pill-dot,
    .stack-pill:nth-child(6) .stack-pill-dot,
    .stack-pill:nth-child(7) .stack-pill-dot,
    .stack-pill:nth-child(8) .stack-pill-dot { background: #06b6d4; }
    .stack-pill:nth-child(9) .stack-pill-dot { background: #10b981; }
    .stack-pill:nth-child(10) .stack-pill-dot,
    .stack-pill:nth-child(11) .stack-pill-dot { background: #f59e0b; }
    .stack-pill:nth-child(12) .stack-pill-dot { background: #ef4444; }

    .stack-desc {
      display: block;
      font-size: 0.75rem;
      color: #4b5563;
      font-weight: 400;
      margin-left: 2px;
    }

    /* ========== FAQ ========== */
    .faq-section {
      background: linear-gradient(180deg, transparent 0%, rgba(168, 85, 247, 0.015) 100%);
    }

    .faq-list {
      max-width: 800px;
      margin: 56px auto 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .faq-item {
      background: #0a0a0a;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      overflow: hidden;
      transition: border-color 0.3s ease;
    }

    .faq-item:hover {
      border-color: rgba(255, 255, 255, 0.14);
    }

    .faq-question {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      text-align: left;
    }

    .faq-question span {
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      padding-right: 16px;
    }

    .faq-icon {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.06);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      color: #6b7280;
      flex-shrink: 0;
      transition: transform 0.35s ease, background 0.3s ease, color 0.3s ease;
    }

    .faq-item.active .faq-icon {
      transform: rotate(45deg);
      background: rgba(168, 85, 247, 0.15);
      color: #c084fc;
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease;
    }

    .faq-item.active .faq-answer {
      max-height: 300px;
    }

    .faq-answer-inner {
      padding: 0 24px 20px;
      font-size: 0.9rem;
      color: #6b7280;
      line-height: 1.7;
    }

    /* ========== FINAL CTA ========== */
    .final-cta {
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .final-cta-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 400px;
      background: radial-gradient(ellipse, rgba(168, 85, 247, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%);
      pointer-events: none;
    }

    .final-cta-content {
      position: relative;
      z-index: 2;
    }

    .final-cta h2 {
      font-size: 2.2rem;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.02em;
      line-height: 1.15;
      margin-bottom: 16px;
    }

    @media (min-width: 768px) {
      .final-cta h2 { font-size: 3.2rem; }
    }

    .final-cta p {
      font-size: 1.05rem;
      color: #6b7280;
      max-width: 520px;
      margin: 0 auto 40px;
      line-height: 1.7;
    }

    .footer {
    .footer-inner {
      .footer-inner {
    .footer-brand {
    .footer-brand-icon {
    .footer-brand span {
    .footer-links {
    .footer-links a {
    .footer-links a:hover { color: #ffffff; }
    .footer-copy {
    .section-divider {
        ` }} />
        
        

  <!-- ==================== HEADER ==================== -->
  

  <!-- Mobile Navigation -->
  

  <!-- ==================== HERO ==================== -->
  <section className="hero">
    <div className="hero-glow-1"></div>
    <div className="hero-glow-2"></div>
    <div className="hero-glow-3"></div>
    <div className="container">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Custom AI Agent Development
        </div>
        <h1>Generic AI is a demo.<br /><span className="gradient-text">We build the agent that actually knows your business.</span></h1>
        <p className="hero-subtitle">Bespoke AI agents that reason, plan, and execute — wired into your tools, your data, and your real workflows. Not a chatbot wrapper. Not a prompt template. A production system that does real work.</p>
        <div className="hero-tags">
          <span className="hero-tag">Custom Agents</span>
          <span className="hero-tag">LangChain</span>
          <span className="hero-tag">Multi-Agent Systems</span>
          <span className="hero-tag">MCP</span>
          <span className="hero-tag">Production AI</span>
        </div>
        <div className="hero-ctas">
          <Link href="/contact" className="btn-primary">Let's Talk →</Link>
          <a href="#what" className="btn-secondary">How It Works</a>
        </div>
      </div>
    </div>
  </section>

  <div className="section-divider"></div>

  <!-- ==================== WHAT THIS IS ==================== -->
  <section id="what" className="section">
    <div className="container">
      <div className="animate-on-scroll">
        <div className="section-label">
          <span className="section-label-line"></span>
          What This Is
        </div>
        <h2 className="section-title">Not another chatbot.<br />An agent that <span className="gradient-text">actually works.</span></h2>
        <p className="section-subtitle">Off-the-shelf AI is a demo. We build the production version — designed for your data, your edge cases, your business logic.</p>
      </div>

      <div className="what-grid">
        <div className="what-card animate-on-scroll delay-1">
          <div className="what-card-icon">⚙️</div>
          <h3>Built For Your Workflow</h3>
          <p>Not a generic copilot. Every agent is designed around your specific processes, data, and edge cases. Your business isn't cookie-cutter, so your AI shouldn't be either.</p>
        </div>
        <div className="what-card animate-on-scroll delay-2">
          <div className="what-card-icon">🧠</div>
          <h3>Reasons, Doesn't Just Respond</h3>
          <p>These agents plan multi-step tasks, call tools, read databases, and make decisions. They work, not just chat. Think of them as digital colleagues, not glorified search bars.</p>
        </div>
        <div className="what-card animate-on-scroll delay-3">
          <div className="what-card-icon">🔑</div>
          <h3>You Own Everything</h3>
          <p>Code, prompts, configs, deployment — it's yours. No vendor lock-in. No per-seat licensing. No surprise invoices when you scale. Walk away whenever you want.</p>
        </div>
        <div className="what-card animate-on-scroll delay-4">
          <div className="what-card-icon">🛡️</div>
          <h3>Production-Grade</h3>
          <p>Guardrails, fallback logic, human-in-the-loop gates, observability. Not a prototype. Not a hackathon project. This goes live and stays live.</p>
        </div>
      </div>
    </div>
  </section>

  <div className="section-divider"></div>

  <!-- ==================== HOW WE DO IT ==================== -->
  <section className="section process-section">
    <div className="container">
      <div className="animate-on-scroll">
        <div className="section-label">
          <span className="section-label-line"></span>
          How We Do It
        </div>
        <h2 className="section-title">From "can AI even do this?" to <span className="gradient-text">production.</span></h2>
        <p className="section-subtitle">Four phases. No fluff. We move fast but never skip the thinking part.</p>
      </div>

      <div className="process-grid">
        <div className="process-card animate-on-scroll delay-1">
          <div className="process-number">01</div>
          <h3>Feasibility Deep-Dive</h3>
          <p>We assess if an agent is the right solution. Sometimes a simple n8n workflow is better. We'll tell you. Honestly.</p>
        </div>
        <div className="process-card animate-on-scroll delay-2">
          <div className="process-number">02</div>
          <h3>Architecture & Design</h3>
          <p>Agent graph, tool connections, memory strategy, guardrail placement. Designed before coded. We map every decision point and failure mode.</p>
        </div>
        <div className="process-card animate-on-scroll delay-3">
          <div className="process-number">03</div>
          <h3>Build Sprint (4–8 weeks)</h3>
          <p>Iterative development with weekly demos. You see progress, not just promises. Feedback loops baked into every sprint.</p>
        </div>
        <div className="process-card animate-on-scroll delay-4">
          <div className="process-number">04</div>
          <h3>Deploy & Evolve</h3>
          <p>Live in your infra. We handle model updates, eval improvements, and ongoing optimization. Your agent gets smarter over time.</p>
        </div>
      </div>
    </div>
  </section>

  <div className="section-divider"></div>

  <!-- ==================== USE CASES ==================== -->
  <section className="section">
    <div className="container">
      <div className="animate-on-scroll">
        <div className="section-label">
          <span className="section-label-line"></span>
          What You Get
        </div>
        <h2 className="section-title">Agents for every corner of <span className="gradient-text">your business.</span></h2>
        <p className="section-subtitle">These aren't hypothetical. We've built agents like these for real companies with real revenue on the line.</p>
      </div>

      <div className="usecases-grid">
        <div className="usecase-card animate-on-scroll delay-1">
          <span className="usecase-emoji">🎯</span>
          <h3>Sales Research Agent</h3>
          <p>Pulls prospect data, enriches leads, drafts personalized outreach. Your SDR's new best friend. Turns hours of manual research into seconds.</p>
        </div>
        <div className="usecase-card animate-on-scroll delay-2">
          <span className="usecase-emoji">🎧</span>
          <h3>Support Resolution Agent</h3>
          <p>Reads tickets, searches your knowledge base, drafts responses, escalates smartly. First-response time drops. Resolution quality goes up.</p>
        </div>
        <div className="usecase-card animate-on-scroll delay-3">
          <span className="usecase-emoji">📄</span>
          <h3>Data Processing Agent</h3>
          <p>Extracts info from documents, validates against rules, pushes to your database. No manual entry. No copy-paste nightmares.</p>
        </div>
        <div className="usecase-card animate-on-scroll delay-4">
          <span className="usecase-emoji">🏢</span>
          <h3>Internal Ops Agent</h3>
          <p>Handles employee requests — leave approvals, IT tickets, policy questions — autonomously. HR and ops teams can finally focus on strategy.</p>
        </div>
        <div className="usecase-card animate-on-scroll delay-5">
          <span className="usecase-emoji">🔍</span>
          <h3>Research & Analysis Agent</h3>
          <p>Crawls sources, summarizes findings, delivers briefs. For legal, finance, or strategy teams who are drowning in information.</p>
        </div>
        <div className="usecase-card animate-on-scroll delay-6">
          <span className="usecase-emoji">📡</span>
          <h3>Content Intelligence Agent</h3>
          <p>Monitors competitors, tracks mentions, generates reports. Your brand's always-on analyst that never sleeps, never misses a signal.</p>
        </div>
      </div>
    </div>
  </section>

  <div className="section-divider"></div>

  <!-- ==================== TECH STACK ==================== -->
  <section className="section stack-section">
    <div className="container">
      <div className="animate-on-scroll">
        <div className="section-label">
          <span className="section-label-line"></span>
          Our Stack
        </div>
        <h2 className="section-title">The tools behind <span className="gradient-text">the magic.</span></h2>
        <p className="section-subtitle">No one-size-fits-all framework. We pick the right tool for every layer of your agent.</p>
      </div>

      <div className="stack-grid animate-on-scroll delay-1">
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          LangChain / LangGraph
          <span className="stack-desc">agent orchestration</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          GPT-4o / Claude / Gemini
          <span className="stack-desc">LLM backbone</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          MCP Servers
          <span className="stack-desc">tool + data access</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          Pinecone
          <span className="stack-desc">vector DB</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          Qdrant
          <span className="stack-desc">vector DB</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          Weaviate
          <span className="stack-desc">vector DB</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          pgvector
          <span className="stack-desc">vector DB</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          n8n
          <span className="stack-desc">workflow triggers</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          Supabase / PostgreSQL
          <span className="stack-desc">state & memory</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          Docker / Kubernetes
          <span className="stack-desc">deployment</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          Python
          <span className="stack-desc">core language</span>
        </div>
        <div className="stack-pill">
          <span className="stack-pill-dot"></span>
          TypeScript
          <span className="stack-desc">core language</span>
        </div>
      </div>
    </div>
  </section>

  <div className="section-divider"></div>

  <!-- ==================== FAQ ==================== -->
  <section className="section faq-section">
    <div className="container">
      <div className="animate-on-scroll">
        <div className="section-label">
          <span className="section-label-line"></span>
          FAQ
        </div>
        <h2 className="section-title">Questions we hear <span className="gradient-text">all the time.</span></h2>
        <p className="section-subtitle">Straight answers. No marketing fluff.</p>
      </div>

      <div className="faq-list">
        <div className="faq-item animate-on-scroll delay-1">
          <button className="faq-question" aria-expanded="false">
            <span>What's the difference between a chatbot and an AI agent?</span>
            <div className="faq-icon">+</div>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">A chatbot answers questions. An agent does work. It calls APIs, reads databases, makes decisions, and completes multi-step tasks autonomously. Think of it as the difference between a FAQ page and an employee.</div>
          </div>
        </div>

        <div className="faq-item animate-on-scroll delay-1">
          <button className="faq-question" aria-expanded="false">
            <span>How long does it take to build a custom agent?</span>
            <div className="faq-icon">+</div>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">4 weeks for a focused, single-purpose agent. 6–10 weeks for complex multi-agent systems with multiple tools, data sources, and approval workflows.</div>
          </div>
        </div>

        <div className="faq-item animate-on-scroll delay-2">
          <button className="faq-question" aria-expanded="false">
            <span>Who owns the code?</span>
            <div className="faq-icon">+</div>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">You. Everything — source code, prompts, configs, documentation — is delivered to you on completion. No lock-in. No recurring license fees. It's your IP.</div>
          </div>
        </div>

        <div className="faq-item animate-on-scroll delay-2">
          <button className="faq-question" aria-expanded="false">
            <span>Can it work with our existing tools?</span>
            <div className="faq-icon">+</div>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">If it has an API or a database, we can connect it. CRMs, ERPs, helpdesks, internal tools — all fair game. We've wired agents into Salesforce, HubSpot, Jira, Notion, Slack, and dozens of custom systems.</div>
          </div>
        </div>

        <div className="faq-item animate-on-scroll delay-3">
          <button className="faq-question" aria-expanded="false">
            <span>What about hallucinations?</span>
            <div className="faq-icon">+</div>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">We design with strict guardrails. Deterministic tool calls for critical actions, output validation, human approval gates for high-risk decisions. The agent only gets creative where it's safe to be creative.</div>
          </div>
        </div>

        <div className="faq-item animate-on-scroll delay-3">
          <button className="faq-question" aria-expanded="false">
            <span>Are we locked into a specific AI model?</span>
            <div className="faq-icon">+</div>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">No. We build with abstraction layers. Swap OpenAI for Claude or Gemini without rewriting your agent. Models change fast — your architecture shouldn't break every time one does.</div>
          </div>
        </div>

        <div className="faq-item animate-on-scroll delay-4">
          <button className="faq-question" aria-expanded="false">
            <span>What happens when a model gets deprecated?</span>
            <div className="faq-icon">+</div>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">Abstraction layers again. We design for model portability from day one. When OpenAI retires GPT-4, your agent doesn't die — it just swaps to the next best thing with minimal effort.</div>
          </div>
        </div>

        <div className="faq-item animate-on-scroll delay-4">
          <button className="faq-question" aria-expanded="false">
            <span>Custom agent vs. agentic automation — which do I need?</span>
            <div className="faq-icon">+</div>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">Agentic automation is for well-defined back-office processes — stuff you can flowchart. Custom agents are for unique, complex workflows that don't fit a template. Not sure? That's literally what our feasibility deep-dive is for.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="section-divider"></div>

  <!-- ==================== FINAL CTA ==================== -->
  <section className="section final-cta">
    <div className="final-cta-glow"></div>
    <div className="container">
      <div className="final-cta-content animate-on-scroll">
        <h2>Stop demoing.<br /><span className="gradient-text">Start deploying.</span></h2>
        <p>Tell us what your business needs to automate. We'll tell you exactly how an agent can do it — or if it even should.</p>
        <Link href="/contact" className="btn-primary">Let's Talk →</Link>
      </div>
    </div>
  </section>

  <!-- ==================== FOOTER ==================== -->
  

  <!-- ==================== JAVASCRIPT ==================== -->
  <script>
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('active');
          i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Open clicked if it wasn't active
        if (!isActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Intersection Observer for fade-up animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 80) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      } else {
        header.style.background = 'rgba(0, 0, 0, 0.7)';
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.06)';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  </script>


      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
