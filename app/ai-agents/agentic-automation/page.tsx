'use client'
import '../ai-agents.css'

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
      <main id="main-content" className="ai-agents-page">
        
        

    {/* ==================== HEADER ==================== */}
    

    {/* ==================== HERO ==================== */}
    <section className="hero">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>
        <div className="container">
            <div className="hero-content fade-up">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    Agentic Process Automation
                </div>
                <h1>Your processes run on duct tape.<br />We replace it with <span className="gradient-text">agents that think.</span></h1>
                <p className="hero-subtitle">
                    Not another RPA bot that breaks when someone changes a column name. These are AI agents that reason through exceptions, read unstructured data, and handle the messy stuff your team shouldn't be doing manually.
                </p>
                <div className="hero-tags">
                    <span className="hero-tag">Process Automation</span>
                    <span className="hero-tag">AI Agents</span>
                    <span className="hero-tag">n8n</span>
                    <span className="hero-tag">Back-Office AI</span>
                    <span className="hero-tag">Workflow Intelligence</span>
                </div>
                <div className="hero-actions">
                    <Link href="/contact" className="btn-primary">
                        Let's Talk
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                    <a href="#how-we-do-it" className="btn-secondary">
                        See How It Works
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* ==================== WHAT THIS IS ==================== */}
    <section className="section" id="what-this-is">
        <div className="container">
            <div className="fade-up">
                <div className="section-label">
                    <span className="section-label-line"></span>
                    What This Actually Is
                </div>
                <h2 className="section-title">Not your vendor's RPA. <br />Something smarter.</h2>
                <p className="section-subtitle">We build AI agents that handle the messy, ambiguous, edge-case-heavy processes that traditional automation can't touch.</p>
            </div>
            <div className="what-grid">
                <div className="what-card fade-up">
                    <div className="what-card-icon purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </div>
                    <h3>Beyond RPA</h3>
                    <p>RPA follows rules. Our agents understand context. They handle the 20% of cases that break every automation you've tried before.</p>
                </div>
                <div className="what-card fade-up">
                    <div className="what-card-icon blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    </div>
                    <h3>n8n + AI Agents</h3>
                    <p>We combine n8n's workflow power with LLM reasoning. Best of both worlds — visual orchestration meets intelligent decision-making.</p>
                </div>
                <div className="what-card fade-up">
                    <div className="what-card-icon cyan">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <h3>Human-in-the-Loop</h3>
                    <p>Agents escalate when they're unsure. Your team stays in control of high-stakes decisions. Smart automation, not blind automation.</p>
                </div>
                <div className="what-card fade-up">
                    <div className="what-card-icon emerald">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3>Production-Ready</h3>
                    <p>Not a demo. Not a prototype. Deployed, monitored, and handling real transactions in your actual production environment.</p>
                </div>
            </div>
        </div>
    </section>

    {/* ==================== HOW WE DO IT ==================== */}
    <section className="section" id="how-we-do-it" style={{borderTop: '1px solid rgba(255,255,255,0.06)'}}>
        <div className="container">
            <div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
                <div className="section-label" style={{justifyContent: 'center'}}>
                    <span className="section-label-line"></span>
                    How We Do It
                </div>
                <h2 className="section-title">From chaotic process<br />to <span style={{background: 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>autonomous agent.</span></h2>
                <p className="section-subtitle" style={{marginLeft: 'auto', marginRight: 'auto'}}>Four phases. One process at a time. No big-bang rewrites.</p>
            </div>
            <div className="steps-grid">
                <div className="step-card fade-up">
                    <div className="step-number">01</div>
                    <h3>Process Deep-Dive</h3>
                    <p>We shadow your team. Map the real workflow, not the documented one. Understand every exception and edge case.</p>
                </div>
                <div className="step-card fade-up">
                    <div className="step-number">02</div>
                    <h3>Agent Architecture</h3>
                    <p>Design the agent's decision tree, tool connections, and fallback logic. Every path planned before a line of code.</p>
                </div>
                <div className="step-card fade-up">
                    <div className="step-number">03</div>
                    <h3>Build & Test</h3>
                    <p>4-week sprint. One agent, production-ready, battle-tested against every edge case we found in phase one.</p>
                </div>
                <div className="step-card fade-up">
                    <div className="step-number">04</div>
                    <h3>Deploy & Monitor</h3>
                    <p>Live in your stack. Observability dashboards, smart alerts, and a fallback channel when things get weird.</p>
                </div>
            </div>
        </div>
    </section>

    {/* ==================== USE CASES ==================== */}
    <section className="section" id="use-cases" style={{borderTop: '1px solid rgba(255,255,255,0.06)'}}>
        <div className="container">
            <div className="fade-up">
                <div className="section-label">
                    <span className="section-label-line"></span>
                    What You Get
                </div>
                <h2 className="section-title">Agents for the work<br />nobody wants to do.</h2>
                <p className="section-subtitle">Real processes we've automated. Each one used to eat hours of someone's week.</p>
            </div>
            <div className="usecase-grid">
                <div className="usecase-card fade-up">
                    <span className="usecase-icon">📄</span>
                    <h3>Invoice Processing</h3>
                    <p>Extract, validate, match POs, flag anomalies. No more spreadsheet gymnastics.</p>
                </div>
                <div className="usecase-card fade-up">
                    <span className="usecase-icon">🎫</span>
                    <h3>Ticket Triage</h3>
                    <p>Read tickets, categorize by urgency, route to the right team. First response in seconds, not hours.</p>
                </div>
                <div className="usecase-card fade-up">
                    <span className="usecase-icon">👋</span>
                    <h3>Employee Onboarding</h3>
                    <p>Provision accounts, send docs, schedule orientation. One trigger, everything happens.</p>
                </div>
                <div className="usecase-card fade-up">
                    <span className="usecase-icon">🔍</span>
                    <h3>Expense Auditing</h3>
                    <p>Classify expenses, check policy compliance, flag violations. Automatically, every single time.</p>
                </div>
                <div className="usecase-card fade-up">
                    <span className="usecase-icon">🤝</span>
                    <h3>Vendor Onboarding</h3>
                    <p>Verify documents, run checks, create profiles. What took days now takes minutes.</p>
                </div>
                <div className="usecase-card fade-up">
                    <span className="usecase-icon">💳</span>
                    <h3>Payment Reconciliation</h3>
                    <p>Match payments across systems. Catch mismatches before your accountant does.</p>
                </div>
                <div className="usecase-card fade-up">
                    <span className="usecase-icon">📦</span>
                    <h3>Returns Processing</h3>
                    <p>Read return requests, verify eligibility, trigger refunds. No manual review needed.</p>
                </div>
                <div className="usecase-card fade-up">
                    <span className="usecase-icon">🚨</span>
                    <h3>Escalation Routing</h3>
                    <p>When things go wrong, agents hand off with full context. No dropped balls, no lost tickets.</p>
                </div>
            </div>
        </div>
    </section>

    {/* ==================== TECH STACK ==================== */}
    <section className="section stack-section" id="tech-stack">
        <div className="container">
            <div className="fade-up" style={{textAlign: 'center', marginBottom: '48px'}}>
                <div className="section-label" style={{justifyContent: 'center'}}>
                    <span className="section-label-line"></span>
                    Our Stack
                </div>
                <h2 className="section-title">Built with tools<br />that actually scale.</h2>
                <p className="section-subtitle" style={{marginLeft: 'auto', marginRight: 'auto'}}>No toy frameworks. No vendor lock-in. Production-grade from day one.</p>
            </div>
            <div className="stack-pills fade-up">
                <div className="stack-pill">
                    <span className="stack-pill-dot purple"></span>
                    n8n
                </div>
                <div className="stack-pill">
                    <span className="stack-pill-dot blue"></span>
                    LangChain / LangGraph
                </div>
                <div className="stack-pill">
                    <span className="stack-pill-dot cyan"></span>
                    OpenAI GPT-4o / Claude
                </div>
                <div className="stack-pill">
                    <span className="stack-pill-dot emerald"></span>
                    MCP Servers
                </div>
                <div className="stack-pill">
                    <span className="stack-pill-dot amber"></span>
                    PostgreSQL / Supabase
                </div>
                <div className="stack-pill">
                    <span className="stack-pill-dot rose"></span>
                    Docker
                </div>
            </div>
        </div>
    </section>

    {/* ==================== FAQ ==================== */}
    <section className="section faq-section" id="faq">
        <div className="container">
            <div className="fade-up" style={{textAlign: 'center', marginBottom: '56px'}}>
                <div className="section-label" style={{justifyContent: 'center'}}>
                    <span className="section-label-line"></span>
                    FAQ
                </div>
                <h2 className="section-title">Questions you're<br />probably thinking.</h2>
            </div>
            <div className="faq-list fade-up">
                <div className="faq-item">
                    <button className="faq-question">
                        <span>What's the difference between this and regular RPA?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>RPA follows scripts. Our agents reason. When an invoice format changes or a ticket is ambiguous, RPA breaks. Our agents figure it out — they read context, handle exceptions, and adapt without you rewriting rules.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <button className="faq-question">
                        <span>Will agents make mistakes with financial data?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>We design with guardrails. Deterministic checks for money movements, human approvals for high-value actions, and full audit trails. The agent suggests, but humans confirm when the stakes are high.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <button className="faq-question">
                        <span>How do we measure if it's working?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>Cycle time, cost per transaction, hours reclaimed, error rates. We set baselines before we build so you can see the real before-and-after — not vanity metrics.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <button className="faq-question">
                        <span>Does our data train your models?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>No. We deploy in your cloud or use zero-retention API settings. Your data stays yours. We don't train on it, store it, or share it. Period.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <button className="faq-question">
                        <span>What if the agent breaks?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>Observability dashboards, alerting, and automatic fallback to manual workflows. You'll know before your users do. And when it recovers, it picks up right where it left off.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <button className="faq-question">
                        <span>How long until the first agent is live?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>4 weeks for a single-process agent. Larger programs that span multiple processes or systems take 8-12 weeks. We move fast, but we don't ship fragile.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <button className="faq-question">
                        <span>Can this work with our existing tools?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>If it has an API, we can connect it. CRMs, ERPs, helpdesks, databases — we've integrated with all of them. And if it doesn't have an API, we'll probably figure it out anyway.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ==================== FINAL CTA ==================== */}
    <section className="final-cta" id="cta">
        <div className="final-cta-glow final-cta-glow-1"></div>
        <div className="final-cta-glow final-cta-glow-2"></div>
        <div className="container">
            <div className="final-cta-content fade-up">
                <h2>Stop babysitting processes.<br /><span style={{background: 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Let agents handle it.</span></h2>
                <p>Tell us which process is eating your team's time. We'll show you what an agent can do with it.</p>
                <a href="/contact" className="btn-primary" style={{fontSize: '1.05rem', padding: '16px 40px'}}>
                    Let's Talk
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
            </div>
        </div>
    </section>

    {/* ==================== FOOTER ==================== */}
    

    {/* ==================== JAVASCRIPT ==================== */}


      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
