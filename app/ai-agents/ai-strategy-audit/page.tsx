'use client'

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
      <main id="main-content">
        <style dangerouslySetInnerHTML={{ __html: `
          /* ================================================
        .container {
        .gradient-text {
        @keyframes fadeUp {
        @keyframes blobFloat {
        @keyframes pulseGlow {
        .fade-up {
        .fade-up.is-visible {
        .fade-up-d1 { animation-delay: 0.1s !important; }
        .fade-up-d2 { animation-delay: 0.2s !important; }
        .fade-up-d3 { animation-delay: 0.3s !important; }
        .fade-up-d4 { animation-delay: 0.4s !important; }
        .fade-up-d5 { animation-delay: 0.5s !important; }
        .fade-up-d6 { animation-delay: 0.6s !important; }
        .header {
        .nav {
        .nav-logo {
        .nav-logo svg {
        .nav-links {
        .nav-links a {
        .nav-links a:hover {
        .nav-cta {
        .nav-cta:hover {
        .mobile-toggle {
        .mobile-toggle span {
        .hero {
        .hero-glow {
        .hero-glow-1 {
        .hero-glow-2 {
        .hero-glow-3 {
        .hero-content {
        .hero-badge {
        .hero-badge-dot {
        .hero h1 {
        .hero-subtitle {
        .hero-tags {
        .hero-tag {
        .hero-ctas {
        .btn-primary {
        .btn-primary:hover {
        .btn-secondary {
        .btn-secondary:hover {
           SECTION SHARED
        ================================================ */
        .section {
            padding: 96px 0;
            position: relative;
        }

        .section-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #6b7280;
            margin-bottom: 16px;
        }

        .section-label-line {
            width: 24px;
            height: 1px;
            background: linear-gradient(90deg, #a855f7, #3b82f6);
        }

        .section-title {
            font-size: clamp(1.75rem, 3.5vw, 2.75rem);
            font-weight: 800;
            color: #ffffff;
            line-height: 1.2;
            margin-bottom: 16px;
            letter-spacing: -0.02em;
        }

        .section-subtitle {
            font-size: 1.05rem;
            color: #6b7280;
            max-width: 600px;
            line-height: 1.7;
            margin-bottom: 56px;
        }

        /* Horizontal divider between sections */
        .section-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
            max-width: 800px;
            margin: 0 auto;
        }

        /* ================================================
           WHAT THIS IS — ICON CARDS
        ================================================ */
        .what-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
        }

        .what-card {
            background: #0a0a0a;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 36px 32px;
            transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .what-card:hover {
            border-color: rgba(168, 85, 247, 0.2);
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.06);
            transform: translateY(-3px);
        }

        .what-card-icon {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            font-size: 1.5rem;
        }

        .what-card-icon.purple { background: rgba(168, 85, 247, 0.12); color: #a855f7; }
        .what-card-icon.blue { background: rgba(59, 130, 246, 0.12); color: #3b82f6; }
        .what-card-icon.cyan { background: rgba(6, 182, 212, 0.12); color: #06b6d4; }
        .what-card-icon.emerald { background: rgba(16, 185, 129, 0.12); color: #10b981; }

        .what-card h3 {
            font-size: 1.15rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 10px;
        }

        .what-card p {
            font-size: 0.925rem;
            color: #9ca3af;
            line-height: 1.7;
        }

        /* ================================================
           HOW WE DO IT — PROCESS STEPS
        ================================================ */
        .process-steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            position: relative;
        }

        .process-steps::before {
            content: '';
            position: absolute;
            top: 42px;
            left: 60px;
            right: 60px;
            height: 2px;
            background: linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4, #10b981);
            opacity: 0.2;
            z-index: 0;
        }

        .process-step {
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .process-step-number {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.15rem;
            font-weight: 800;
            margin: 0 auto 24px;
            position: relative;
        }

        .process-step:nth-child(1) .process-step-number {
            background: rgba(168, 85, 247, 0.12);
            color: #a855f7;
            border: 2px solid rgba(168, 85, 247, 0.3);
        }
        .process-step:nth-child(2) .process-step-number {
            background: rgba(59, 130, 246, 0.12);
            color: #3b82f6;
            border: 2px solid rgba(59, 130, 246, 0.3);
        }
        .process-step:nth-child(3) .process-step-number {
            background: rgba(6, 182, 212, 0.12);
            color: #06b6d4;
            border: 2px solid rgba(6, 182, 212, 0.3);
        }
        .process-step:nth-child(4) .process-step-number {
            background: rgba(16, 185, 129, 0.12);
            color: #10b981;
            border: 2px solid rgba(16, 185, 129, 0.3);
        }

        .process-step-label {
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #6b7280;
            margin-bottom: 8px;
        }

        .process-step h3 {
            font-size: 1.1rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 10px;
        }

        .process-step p {
            font-size: 0.875rem;
            color: #9ca3af;
            line-height: 1.65;
            max-width: 240px;
            margin: 0 auto;
        }

        /* ================================================
           USE CASES — CARD GRID
        ================================================ */
        .usecases-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .usecase-card {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 16px;
            padding: 32px 28px;
            transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .usecase-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .usecase-card:hover::before {
            opacity: 1;
        }

        .usecase-card:hover {
            border-color: rgba(168, 85, 247, 0.15);
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.05);
            transform: translateY(-3px);
        }

        .usecase-card:nth-child(1) { --accent: #a855f7; }
        .usecase-card:nth-child(2) { --accent: #3b82f6; }
        .usecase-card:nth-child(3) { --accent: #06b6d4; }
        .usecase-card:nth-child(4) { --accent: #10b981; }
        .usecase-card:nth-child(5) { --accent: #a855f7; }
        .usecase-card:nth-child(6) { --accent: #3b82f6; }

        .usecase-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
            font-size: 1.2rem;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .usecase-card p {
            font-size: 0.925rem;
            color: #d1d5db;
            line-height: 1.7;
        }

        /* ================================================
           OUR APPROACH / STACK
        ================================================ */
        .stack-section {
            background: #0a0a0a;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .stack-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
        }

        .stack-group h3 {
            font-size: 1rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 20px;
        }

        .stack-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .stack-pill {
            padding: 8px 18px;
            border-radius: 100px;
            font-size: 0.8rem;
            font-weight: 500;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #d1d5db;
            transition: border-color 0.25s ease, background 0.25s ease;
        }

        .stack-pill:hover {
            border-color: rgba(168, 85, 247, 0.3);
            background: rgba(168, 85, 247, 0.06);
        }

        .stack-pill.accent-purple {
            border-color: rgba(168, 85, 247, 0.25);
            color: #c084fc;
        }
        .stack-pill.accent-blue {
            border-color: rgba(59, 130, 246, 0.25);
            color: #93c5fd;
        }
        .stack-pill.accent-cyan {
            border-color: rgba(6, 182, 212, 0.25);
            color: #67e8f9;
        }

        /* ================================================
           FAQ — ACCORDION
        ================================================ */
        .faq-list {
            max-width: 800px;
            margin: 0 auto;
        }

        .faq-item {
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .faq-item:first-child {
            border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .faq-question {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 24px 0;
            cursor: pointer;
            width: 100%;
            background: none;
            border: none;
            text-align: left;
            font-family: 'Inter', sans-serif;
            font-size: 1.02rem;
            font-weight: 600;
            color: #ffffff;
            transition: color 0.25s ease;
            gap: 24px;
        }

        .faq-question:hover {
            color: #c084fc;
        }

        .faq-toggle {
            flex-shrink: 0;
            width: 28px;
            height: 28px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 400;
            color: #6b7280;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: transform 0.3s ease, color 0.3s ease, background 0.3s ease;
        }

        .faq-item.open .faq-toggle {
            transform: rotate(45deg);
            color: #a855f7;
            background: rgba(168, 85, 247, 0.1);
            border-color: rgba(168, 85, 247, 0.25);
        }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, padding 0.3s ease;
        }

        .faq-item.open .faq-answer {
            max-height: 300px;
        }

        .faq-answer-inner {
            padding: 0 0 24px 0;
            font-size: 0.925rem;
            color: #9ca3af;
            line-height: 1.75;
        }

        /* ================================================
           FINAL CTA
        ================================================ */
        .final-cta {
            text-align: center;
            padding: 120px 0;
            position: relative;
            overflow: hidden;
        }

        .final-cta-glow {
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            filter: blur(140px);
            pointer-events: none;
            opacity: 0.15;
        }

        .final-cta-glow-1 {
            background: #a855f7;
            top: 50%;
            left: 30%;
            transform: translate(-50%, -50%);
        }

        .final-cta-glow-2 {
            background: #3b82f6;
            top: 50%;
            right: 10%;
            transform: translate(50%, -50%);
        }

        .final-cta .section-title {
            max-width: 700px;
            margin: 0 auto 16px;
        }

        .final-cta .section-subtitle {
            max-width: 520px;
            margin: 0 auto 40px;
        }

        /* ================================================
        .footer {
        .footer-inner {
        .footer-left {
        .footer-left svg {
        .footer-links {
        .footer-links a {
        .footer-links a:hover {
        .footer-socials {
        .footer-socials a {
        .footer-socials a:hover {
        .footer-socials svg {
            .process-steps {
            .process-steps::before {
            .usecases-grid {
            .section {
            .nav-links {
            .mobile-toggle {
            .what-grid {
            .usecases-grid {
            .stack-grid {
            .hero {
            .hero h1 {
            .footer-inner {
            .footer-links {
            .final-cta {
            .process-steps {
            .hero-ctas {
            .hero-ctas a {
            .container {
        .mobile-nav {
        .mobile-nav.is-open {
        .mobile-nav a {
        .mobile-nav-close {
        ` }} />
        
        <!-- ======================== HERO ======================== -->
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

    <!-- ======================== WHAT THIS IS ======================== -->
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

    <!-- ======================== HOW WE DO IT ======================== -->
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

    <!-- ======================== USE CASES ======================== -->
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

    <!-- ======================== OUR APPROACH / STACK ======================== -->
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

    <!-- ======================== FAQ ======================== -->
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
    </section>

    <!-- ======================== FINAL CTA ======================== -->
    <div className="section-divider"></div>
    <section className="final-cta" id="cta">
        <div className="final-cta-glow final-cta-glow-1"></div>
        <div className="final-cta-glow final-cta-glow-2"></div>

        <div className="container" style="position: relative; z-index: 2;">
            <div className="section-label fade-up" style="justify-content: center;">
                <span className="section-label-line"></span>
                Ready?
            </div>
            <h2 className="section-title fade-up fade-up-d1">Stop guessing where AI fits.<br /><span className="gradient-text">Let's figure it out together.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">3 weeks. One clear roadmap. Zero regrets.</p>
            <a href="/contact" className="btn-primary fade-up fade-up-d3" style="display: inline-flex;">
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
