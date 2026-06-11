'use client'
import '../ai-agents.css'

import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

const faqs = [
  {
    "question": "What exactly do we get at the end?",
    "answer": "A prioritized list of AI use cases scored by ROI, a data readiness report, and a 90-day action plan. Plus a recorded executive walkthrough so you can share it with your team or board without playing broken telephone."
  },
  {
    "question": "How long does this take?",
    "answer": "3 weeks. Kickoff to final delivery. We've found that longer timelines don't produce better decisions — they just produce more meetings. We keep it tight and action-oriented."
  },
  {
    "question": "Do we have to build with you after the audit?",
    "answer": "No. The roadmap is yours. Build with us, hire in-house, or go with another vendor. No lock-in. We'd rather give you a great plan than a mediocre dependency."
  },
  {
    "question": "What if AI isn't the right solution for us?",
    "answer": "Then we'll tell you. Straight up. We'd rather save you money than sell you something that doesn't fit. If a simple Zapier automation solves your problem, we're not going to pitch you a custom LLM pipeline."
  },
  {
    "question": "Which industries have you audited?",
    "answer": "SaaS, D2C e-commerce, fintech, healthcare, education, real estate, and manufacturing. The frameworks are industry-agnostic, but the nuances matter — and we bring context from every engagement we've done."
  },
  {
    "question": "Do you cover data security and compliance?",
    "answer": "Yes. DPDP, GDPR, SOC 2 considerations are flagged per use case. We're not lawyers, but we know enough to flag what needs legal review before you build — not after you ship."
  },
  {
    "question": "How is this different from a big consulting firm's AI audit?",
    "answer": "We're engineers, not consultants. Our audits are 3 weeks, not 3 months. They cost less than one month of a Big 4 engagement. And here's the kicker — we can actually build what we recommend. No handoff to another team. No 200-slide deck that gathers dust."
  }
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main id="main-content" className="ai-agents-page">
        
        {/* ======================== HERO ======================== */}
    <section className="hero">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>

        <div className="container">
            <div className="hero-content">
                <div className="hero-badge fade-up">
                    <span className="hero-badge-dot"></span>
                    AI Strategy & Readiness
                </div>

                <h1 className="fade-up fade-up-d1">Before we write a single line of code, we figure out where AI <span className="gradient-text">actually fits.</span></h1>

                <p className="hero-subtitle fade-up fade-up-d2">A 3-week deep-dive into your business, data, and workflows. No slides. No frameworks. Just a clear map of what AI can do for you — and what it can't.</p>

                <div className="hero-tags fade-up fade-up-d3">
                    <span className="hero-tag">AI Audit</span>
                    <span className="hero-tag">Readiness Assessment</span>
                    <span className="hero-tag">ROI Mapping</span>
                    <span className="hero-tag">90-Day Roadmap</span>
                </div>

                <div className="hero-ctas fade-up fade-up-d4">
                    <Link href="/contact" className="btn-primary">
                        Book Your Audit
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                    <a href="#how" className="btn-secondary">
                        See the Process
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* ======================== WHAT THIS IS ======================== */}
    <div className="section-divider"></div>
    <section className="section" id="what">
        <div className="container">
            <div className="section-label fade-up">
                <span className="section-label-line"></span>
                What This Is
            </div>
            <h2 className="section-title fade-up fade-up-d1">Clarity before code.<br />Strategy before spend.</h2>
            <p className="section-subtitle fade-up fade-up-d2">Most teams rush to build AI. We make you stop and think first. Here's what our audit actually covers.</p>

            <div className="what-grid">
                <div className="what-card fade-up fade-up-d1">
                    <div className="what-card-icon purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                    </div>
                    <h3>Workflow Mapping</h3>
                    <p>We sit with your team. Map every process. Find the bottlenecks AI can actually fix — not the ones that sound impressive on a pitch deck.</p>
                </div>

                <div className="what-card fade-up fade-up-d2">
                    <div className="what-card-icon blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                    </div>
                    <h3>Data Readiness Check</h3>
                    <p>Is your data clean enough? Connected enough? We assess before you spend a rupee. Because garbage in, garbage out isn't just a cliché.</p>
                </div>

                <div className="what-card fade-up fade-up-d3">
                    <div className="what-card-icon cyan">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    </div>
                    <h3>Use-Case Scoring</h3>
                    <p>We rank every AI opportunity by impact, feasibility, and time-to-value. No guesswork. No vibes. Just a scored matrix you can actually defend in a board meeting.</p>
                </div>

                <div className="what-card fade-up fade-up-d4">
                    <div className="what-card-icon emerald">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    </div>
                    <h3>90-Day Roadmap</h3>
                    <p>You walk away with a prioritized action plan. Build with us, or build with someone else. The roadmap is yours either way — no strings attached.</p>
                </div>
            </div>
        </div>
    </section>

    {/* ======================== HOW WE DO IT ======================== */}
    <div className="section-divider"></div>
    <section className="section" id="how">
        <div className="container">
            <div className="section-label fade-up">
                <span className="section-label-line"></span>
                How We Do It
            </div>
            <h2 className="section-title fade-up fade-up-d1">3 weeks. Zero fluff.<br /><span className="gradient-text">Complete clarity.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">We've refined this process across dozens of engagements. It's tight because longer timelines don't produce better decisions.</p>

            <div className="process-steps">
                <div className="process-step fade-up fade-up-d1">
                    <div className="process-step-number">1</div>
                    <div className="process-step-label">Day 1</div>
                    <h3>Kickoff Call</h3>
                    <p>Scope, stakeholders, access. 30 minutes, no fluff. We align on what success looks like and who we need to talk to.</p>
                </div>

                <div className="process-step fade-up fade-up-d2">
                    <div className="process-step-number">2</div>
                    <div className="process-step-label">Week 1</div>
                    <h3>Discovery</h3>
                    <p>Interviews with your ops, sales, support, and tech teams. We learn your business — not from a deck, but from the people who run it.</p>
                </div>

                <div className="process-step fade-up fade-up-d3">
                    <div className="process-step-number">3</div>
                    <div className="process-step-label">Week 2</div>
                    <h3>Analysis</h3>
                    <p>We score every use case. Data gaps, integration complexity, expected ROI. Everything goes into a framework you can actually use.</p>
                </div>

                <div className="process-step fade-up fade-up-d4">
                    <div className="process-step-number">4</div>
                    <div className="process-step-label">Week 3</div>
                    <h3>Roadmap Delivery</h3>
                    <p>Executive-ready readout. Prioritized use cases. Clear next steps. Plus a recorded walkthrough so your whole team stays aligned.</p>
                </div>
            </div>
        </div>
    </section>

    {/* ======================== USE CASES ======================== */}
    <div className="section-divider"></div>
    <section className="section" id="usecases">
        <div className="container">
            <div className="section-label fade-up">
                <span className="section-label-line"></span>
                Who This Is For
            </div>
            <h2 className="section-title fade-up fade-up-d1">Sound familiar? <span className="gradient-text">We've been there.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">Here are the kinds of situations where this audit is exactly what you need.</p>

            <div className="usecases-grid">
                <div className="usecase-card fade-up fade-up-d1">
                    <div className="usecase-icon">💬</div>
                    <p>A SaaS company wondering if AI support agents will actually reduce ticket volume — or just add another layer of confusion.</p>
                </div>

                <div className="usecase-card fade-up fade-up-d2">
                    <div className="usecase-icon">🛍️</div>
                    <p>A D2C brand sitting on mountains of customer data but not using any of it for personalization, recommendations, or retention.</p>
                </div>

                <div className="usecase-card fade-up fade-up-d3">
                    <div className="usecase-icon">🏦</div>
                    <p>A fintech startup that wants to automate KYC but doesn't know where to start — or which regulations they'll trip over.</p>
                </div>

                <div className="usecase-card fade-up fade-up-d4">
                    <div className="usecase-icon">⚙️</div>
                    <p>An operations team drowning in manual data entry across 4 different tools, copy-pasting the same info into spreadsheets at 11 PM.</p>
                </div>

                <div className="usecase-card fade-up fade-up-d5">
                    <div className="usecase-icon">🤯</div>
                    <p>A founder who's been pitched 12 different AI tools this quarter and has no idea which ones actually matter for their business.</p>
                </div>

                <div className="usecase-card fade-up fade-up-d6">
                    <div className="usecase-icon">📊</div>
                    <p>A CTO who needs a board-ready AI strategy — not another vendor demo dressed up as a "consultation."</p>
                </div>
            </div>
        </div>
    </section>

    {/* ======================== OUR APPROACH / STACK ======================== */}
    <section className="section stack-section" id="approach">
        <div className="container">
            <div className="section-label fade-up">
                <span className="section-label-line"></span>
                Our Approach
            </div>
            <h2 className="section-title fade-up fade-up-d1">Engineer thinking.<br /><span className="gradient-text">Not consulting theater.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">This isn't a tech stack page — it's a strategy engagement. But here's the lens we evaluate through.</p>

            <div className="stack-grid fade-up fade-up-d3">
                <div className="stack-group">
                    <h3>Frameworks We Use</h3>
                    <div className="stack-pills">
                        <span className="stack-pill accent-purple">ROI-First Scoring</span>
                        <span className="stack-pill accent-blue">Workflow Dependency Mapping</span>
                        <span className="stack-pill accent-cyan">Data Readiness Matrix</span>
                        <span className="stack-pill">Integration Complexity Analysis</span>
                        <span className="stack-pill">Build vs. Buy Assessment</span>
                        <span className="stack-pill">Risk & Compliance Flags</span>
                    </div>
                </div>

                <div className="stack-group">
                    <h3>Tools We Assess Against</h3>
                    <div className="stack-pills">
                        <span className="stack-pill accent-purple">n8n</span>
                        <span className="stack-pill accent-blue">LangChain</span>
                        <span className="stack-pill accent-cyan">OpenAI</span>
                        <span className="stack-pill">Claude</span>
                        <span className="stack-pill">Internal APIs</span>
                        <span className="stack-pill">CRMs</span>
                        <span className="stack-pill">ERPs</span>
                        <span className="stack-pill">Custom Agents</span>
                        <span className="stack-pill">Vector Databases</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ======================== FAQ ======================== */}
    <section className="section" id="faq">
        <div className="container">
            <div className="section-label fade-up">
                <span className="section-label-line"></span>
                FAQ
            </div>
            <h2 className="section-title fade-up fade-up-d1">Questions we hear <span className="gradient-text">every week.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">If yours isn't here, hit us up. We're not hiding anything behind a sales call.</p>

            {/* React Accordion FAQ */}
      <div className="faq-list fade-up fade-up-d3">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
            <button 
              className="faq-question" 
              aria-expanded={openFaq === index ? 'true' : 'false'}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="faq-toggle">{openFaq === index ? '×' : '+'}</span>
            </button>
            <div 
              className="faq-answer" 
              style={{ 
                maxHeight: openFaq === index ? '300px' : '0',
                transition: 'max-height 0.4s ease, padding 0.3s ease'
              }}
            >
              <div className="faq-answer-inner">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
        </div>
    </section>

    {/* ======================== FINAL CTA ======================== */}
    <div className="section-divider"></div>
    <section className="final-cta" id="cta">
        <div className="final-cta-glow final-cta-glow-1"></div>
        <div className="final-cta-glow final-cta-glow-2"></div>

        <div className="container" style={{position: 'relative', zIndex: 2}}>
            <div className="section-label fade-up" style={{justifyContent: 'center'}}>
                <span className="section-label-line"></span>
                Ready?
            </div>
            <h2 className="section-title fade-up fade-up-d1">Stop guessing where AI fits.<br /><span className="gradient-text">Let's figure it out together.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">3 weeks. One clear roadmap. Zero regrets.</p>
            <a href="/contact" className="btn-primary fade-up fade-up-d3" style={{display: 'inline-flex'}}>
                Let's Talk
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
        </div>
    </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
