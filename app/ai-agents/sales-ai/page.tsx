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
        
        

    {/* ========== HEADER ========== */}
    

    {/* Mobile Menu */}
    <div className="mobile-menu" id="mobileMenu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/ai-agents">AI Agents</a>
        <a href="/systems">Systems</a>
        <a href="/journal">Journal</a>
        <a href="/contact">Contact</a>
        <a href="/contact" className="nav-cta" style={{textAlign: 'center', marginTop: '16px'}}>Let's Talk</a>
    </div>

    {/* ========== HERO ========== */}
    <section className="hero">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>
        <div className="container">
            <div className="hero-content">
                <div className="hero-badge">Sales Intelligence & Outreach</div>
                <h1>
                    <span>Cold outreach that</span>
                    <span>doesn't feel cold.</span>
                    <span className="gradient-text">Because it isn't.</span>
                </h1>
                <p className="hero-subtitle">Signal-triggered outbound that reaches the right person at the right moment with the right message. AI does the research. Humans write the copy. Your pipeline fills up.</p>
                <div className="hero-tags">
                    <span className="hero-tag">Sales AI</span>
                    <span className="hero-tag">Outbound Automation</span>
                    <span className="hero-tag">LinkedIn</span>
                    <span className="hero-tag">Signal-Based</span>
                    <span className="hero-tag">Lead Generation</span>
                </div>
                <div className="hero-buttons">
                    <Link href="/contact" className="btn-primary">
                        Let's Talk
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                    <a href="#how" className="btn-secondary">
                        See How It Works
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* ========== WHAT THIS IS ========== */}
    <section className="what-section">
        <div className="container">
            <span className="section-label animate-on-scroll">What This Is</span>
            <h2 className="animate-on-scroll">Outbound that <span className="gradient-text">earns attention</span></h2>
            <p className="animate-on-scroll">Not blasting 10,000 emails and hoping. This is targeted, signal-aware outreach built for replies, not spam folders.</p>
            <div className="what-grid">
                <div className="what-card animate-on-scroll">
                    <div className="what-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    </div>
                    <h3>Signal-Triggered</h3>
                    <p>We don't spray and pray. We watch for buying signals — funding rounds, executive hires, tech changes, competitor switches — and reach out when it matters.</p>
                </div>
                <div className="what-card animate-on-scroll">
                    <div className="what-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                    </div>
                    <h3>AI Research, Human Copy</h3>
                    <p>AI enriches prospects and finds angles. Humans write the actual sequences. Because LLM-generated outreach is obvious and cringe.</p>
                </div>
                <div className="what-card animate-on-scroll">
                    <div className="what-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <h3>Multi-Channel</h3>
                    <p>Email + LinkedIn + voice. Coordinated sequences across channels. Not just email blasts that end up in promotions tabs.</p>
                </div>
                <div className="what-card animate-on-scroll">
                    <div className="what-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3>Performance-First</h3>
                    <p>We measure qualified meetings, not vanity metrics. If it's not working, we'll be the first to tell you. No hiding behind open rates.</p>
                </div>
            </div>
        </div>
    </section>

    {/* ========== HOW WE DO IT ========== */}
    <section className="process-section" id="how">
        <div className="container">
            <span className="section-label animate-on-scroll">How We Do It</span>
            <h2 className="animate-on-scroll">From zero to <span className="gradient-text">booked meetings</span></h2>
            <p className="animate-on-scroll">Four phases. No black boxes. You see everything we do.</p>
            <div className="process-grid">
                <div className="process-card animate-on-scroll">
                    <div className="process-number">01</div>
                    <h3>ICP & Signal Mapping</h3>
                    <p>Define your ideal customer, buying signals, and outreach triggers. Get crystal clear on who we're going after and why.</p>
                </div>
                <div className="process-card animate-on-scroll">
                    <div className="process-number">02</div>
                    <h3>Infrastructure Setup</h3>
                    <p>Secondary domains, warmed inboxes, LinkedIn automation, CRM integration. Set up properly so nothing breaks later.</p>
                </div>
                <div className="process-card animate-on-scroll">
                    <div className="process-number">03</div>
                    <h3>Launch Sequences</h3>
                    <p>Signal-triggered plays go live. AI researches, humans personalize, system sends. Your outbound machine starts running.</p>
                </div>
                <div className="process-card animate-on-scroll">
                    <div className="process-number">04</div>
                    <h3>Optimize & Scale</h3>
                    <p>Weekly performance reviews. A/B test messaging. Scale what works. Kill what doesn't. Rinse, repeat, grow.</p>
                </div>
            </div>
        </div>
    </section>

    {/* ========== SIGNAL PLAYS ========== */}
    <section className="signals-section">
        <div className="container">
            <span className="section-label animate-on-scroll">Signal Plays</span>
            <h2 className="animate-on-scroll">Timing is <span className="gradient-text">everything</span></h2>
            <p className="animate-on-scroll">Every play is triggered by a real buying signal. No guessing. No hoping. Just precision outreach at the right moment.</p>
            <div className="signals-grid">
                <div className="signal-card animate-on-scroll">
                    <div className="signal-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <h3>Funding Trigger</h3>
                    <p>Company just raised? They're hiring, buying tools, and open to conversations. Strike while the budget is fresh.</p>
                    <div className="signal-rate">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M2 12l4-4 3 3 5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        12-18% reply rates
                    </div>
                </div>
                <div className="signal-card animate-on-scroll">
                    <div className="signal-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <h3>New VP/CXO Play</h3>
                    <p>New executive = new priorities. We reach them in their first 90 days, before they've locked in their vendor stack.</p>
                    <div className="signal-rate">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M2 12l4-4 3 3 5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        14-22% reply rates
                    </div>
                </div>
                <div className="signal-card animate-on-scroll">
                    <div className="signal-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                    </div>
                    <h3>Competitor Churn</h3>
                    <p>Someone just left your competitor's platform. They're evaluating options right now. Perfect timing to show up.</p>
                    <div className="signal-rate">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M2 12l4-4 3 3 5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        9-14% reply rates
                    </div>
                </div>
            </div>
            <div className="signals-bottom-row">
                <div className="signal-card animate-on-scroll">
                    <div className="signal-icon" style={{background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)'}}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <h3>Job Posting Signals</h3>
                    <p>Hiring for a role that your product helps? That's a buying signal hiding in plain sight. We find it and act on it.</p>
                    <div className="signal-rate">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M2 12l4-4 3 3 5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Intent signal
                    </div>
                </div>
                <div className="signal-card animate-on-scroll">
                    <div className="signal-icon" style={{background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.2)'}}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    </div>
                    <h3>Tech Stack Changes</h3>
                    <p>Switched tools? Added new tech? We know. And we reach out with context that makes sense, not generic templates.</p>
                    <div className="signal-rate">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M2 12l4-4 3 3 5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Intent signal
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ========== USE CASES ========== */}
    <section className="usecases-section">
        <div className="container">
            <span className="section-label animate-on-scroll">What You Get</span>
            <h2 className="animate-on-scroll">Works for <span className="gradient-text">these teams</span></h2>
            <p className="animate-on-scroll">Whether you're filling a sales pipeline or building partnerships, signal-triggered outreach works.</p>
            <div className="usecases-grid">
                <div className="usecase-card animate-on-scroll">
                    <div className="usecase-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                    </div>
                    <div>
                        <h3>B2B SaaS Outbound</h3>
                        <p>Fill your pipeline with qualified demos from your exact ICP. No wasted calls. No unqualified leads cluttering your CRM.</p>
                    </div>
                </div>
                <div className="usecase-card animate-on-scroll">
                    <div className="usecase-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                        <h3>Agency Lead Gen</h3>
                        <p>Get meetings with decision-makers at brands you want to work with. Stop waiting for inbound and start creating demand.</p>
                    </div>
                </div>
                <div className="usecase-card animate-on-scroll">
                    <div className="usecase-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </div>
                    <div>
                        <h3>Recruitment Outreach</h3>
                        <p>Reach passive candidates with personalized, signal-aware messages. When they're ready to move, you're already in their inbox.</p>
                    </div>
                </div>
                <div className="usecase-card animate-on-scroll">
                    <div className="usecase-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    </div>
                    <div>
                        <h3>Partnership Development</h3>
                        <p>Find and engage potential partners based on complementary signals. Right partners, right timing, right context.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ========== TECH STACK ========== */}
    <section className="stack-section">
        <div className="container">
            <span className="section-label animate-on-scroll">Our Stack</span>
            <h2 className="animate-on-scroll">Tools we <span className="gradient-text">actually use</span></h2>
            <p className="animate-on-scroll">No fluff. These are the exact tools powering your outbound machine.</p>
            <div className="stack-categories">
                <div className="animate-on-scroll">
                    <div className="stack-category-label">Data & Enrichment</div>
                    <div className="stack-pills">
                        <span className="stack-pill">Clay</span>
                        <span className="stack-pill">Apollo</span>
                        <span className="stack-pill">ZoomInfo</span>
                    </div>
                </div>
                <div className="animate-on-scroll">
                    <div className="stack-category-label">Outreach & Sending</div>
                    <div className="stack-pills">
                        <span className="stack-pill">Smartlead</span>
                        <span className="stack-pill">Instantly</span>
                        <span className="stack-pill">Sales Navigator</span>
                        <span className="stack-pill">Heyreach</span>
                    </div>
                </div>
                <div className="animate-on-scroll">
                    <div className="stack-category-label">Orchestration & CRM</div>
                    <div className="stack-pills">
                        <span className="stack-pill">n8n</span>
                        <span className="stack-pill">HubSpot</span>
                        <span className="stack-pill">Salesforce</span>
                    </div>
                </div>
                <div className="animate-on-scroll">
                    <div className="stack-category-label">AI Research</div>
                    <div className="stack-pills">
                        <span className="stack-pill">GPT-4o</span>
                        <span className="stack-pill">Perplexity</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ========== DOMAIN SAFETY ========== */}
    <section className="safety-section">
        <div className="container">
            <span className="section-label animate-on-scroll">Domain Safety</span>
            <h2 className="animate-on-scroll">Your reputation stays <span className="gradient-text">untouched</span></h2>
            <p className="section-desc animate-on-scroll">We take deliverability seriously. Your primary domain never touches outbound. Everything runs through properly configured secondary infrastructure.</p>
            <div className="safety-wrapper animate-on-scroll">
                <div className="safety-grid">
                    <div className="safety-item">
                        <div className="safety-check">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div>
                            <h4>Dedicated Secondary Domains</h4>
                            <p>We never send from your primary domain. Separate domains, warmed properly, protect your brand.</p>
                        </div>
                    </div>
                    <div className="safety-item">
                        <div className="safety-check">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div>
                            <h4>Enforced Send Caps</h4>
                            <p>Strict per-inbox sending limits. No inbox sends more than it safely should.</p>
                        </div>
                    </div>
                    <div className="safety-item">
                        <div className="safety-check">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div>
                            <h4>Residential IPs for LinkedIn</h4>
                            <p>No datacenter IPs. Clean residential proxies that mimic real user behavior.</p>
                        </div>
                    </div>
                    <div className="safety-item">
                        <div className="safety-check">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div>
                            <h4>Full Email Authentication</h4>
                            <p>SPF, DKIM, DMARC, and BIMI configured per domain. Maximum deliverability from day one.</p>
                        </div>
                    </div>
                    <div className="safety-item">
                        <div className="safety-check">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div>
                            <h4>DND/DNC Compliance</h4>
                            <p>GDPR suppression lists, do-not-contact lists, and opt-out management built into every workflow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ========== FAQ ========== */}
    <section className="faq-section">
        <div className="container">
            <span className="section-label animate-on-scroll">FAQ</span>
            <h2 className="animate-on-scroll">The questions <span className="gradient-text">you're thinking</span></h2>
            <p className="animate-on-scroll">Straight answers. No marketing speak.</p>
            <div className="faq-list">
                <div className="faq-item animate-on-scroll">
                    <div className="faq-question">
                        <h3>Does cold outreach even work anymore?</h3>
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">Spray-and-pray doesn't. Signal-triggered, well-researched outreach absolutely does. The difference is targeting and timing. When you reach the right person at the right moment with a message that shows you actually understand their situation — they respond. We see it every week.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll">
                    <div className="faq-question">
                        <h3>Will my domain get blacklisted?</h3>
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">No. We use dedicated secondary domains, enforced send caps, and proper email authentication. Your primary domain stays completely untouched. We've never had a client's primary domain impacted.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll">
                    <div className="faq-question">
                        <h3>Who writes the copy — AI or humans?</h3>
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">Humans. AI assists with prospect research and personalization angles, but the actual sequences are written by people who understand outbound. You can tell when a cold email was written by ChatGPT — and so can your prospects. We keep it human.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll">
                    <div className="faq-question">
                        <h3>How long until we see meetings?</h3>
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">First meetings typically come in weeks 3-4 after launch. Steady state from week 5 onward. The first two weeks are infrastructure setup and inbox warming — we don't rush this because cutting corners kills deliverability.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll">
                    <div className="faq-question">
                        <h3>Will this compete with our existing sales team?</h3>
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">Usually no. We run different plays, target different segments, and complement in-house efforts. Think of it as adding a parallel outbound engine, not replacing your existing reps. We coordinate with your team to avoid overlap.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll">
                    <div className="faq-question">
                        <h3>What about LinkedIn bans?</h3>
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">Residential IPs, enforced daily limits, human-like behavior patterns, and randomized action intervals. Zero banned accounts so far. We treat LinkedIn safety as seriously as email deliverability.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll">
                    <div className="faq-question">
                        <h3>Who owns the leads and data?</h3>
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">You. All CRM records and lead data are fully yours. Always. If we part ways, you keep everything — the leads, the playbooks, the data. No lock-in, no hostage situations.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ========== FINAL CTA ========== */}
    <section className="cta-section">
        <div className="container">
            <div className="cta-wrapper animate-on-scroll">
                <h2>Ready to fill your <span className="gradient-text">pipeline</span>?</h2>
                <p>Stop hoping for inbound. Let's build a signal-triggered outbound engine that books qualified meetings on autopilot.</p>
                <Link href="/contact" className="btn-primary">
                    Let's Talk
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
