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
        @keyframes pulseGlow {
        @keyframes float {
        @keyframes waveform {
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
        .nav-cta:hover {
        .mobile-toggle {
            .mobile-toggle { display: none; }
        .mobile-toggle span {
        .mobile-toggle.active span:nth-child(1) {
        .mobile-toggle.active span:nth-child(2) { opacity: 0; }
        .mobile-toggle.active span:nth-child(3) {
        .mobile-menu {
        .mobile-menu.active { display: block; }
        .mobile-menu a {
        .mobile-menu a:hover { color: #ffffff; }
        .mobile-menu .nav-cta {
        .hero {
            .hero { padding: 180px 0 120px; }
        .hero-glow-1 {
        .hero-glow-2 {
        .hero-glow-3 {
        .hero-content {
        .hero-badge {
        .hero-badge-dot {
        .hero h1 {
            .hero h1 { font-size: 3.25rem; }
            .hero h1 { font-size: 4rem; }
            .hero h1 { font-size: 4.5rem; }
        .hero-subtitle {
            .hero-subtitle { font-size: 1.15rem; }
        .hero-tags {
        .hero-tag {
        .hero-ctas {
            .hero-ctas { flex-direction: row; justify-content: center; }
        .btn-primary {
        .btn-primary:hover {
        .btn-secondary {
        .btn-secondary:hover {
        .hero-waveform {
        .hero-waveform .bar {
        .hero-waveform .bar:nth-child(1) { animation-delay: 0s; height: 12px; }
        .hero-waveform .bar:nth-child(2) { animation-delay: 0.1s; height: 20px; }
        .hero-waveform .bar:nth-child(3) { animation-delay: 0.2s; height: 28px; }
        .hero-waveform .bar:nth-child(4) { animation-delay: 0.3s; height: 16px; }
        .hero-waveform .bar:nth-child(5) { animation-delay: 0.4s; height: 24px; }
        .hero-waveform .bar:nth-child(6) { animation-delay: 0.15s; height: 10px; }
        .hero-waveform .bar:nth-child(7) { animation-delay: 0.25s; height: 22px; }
        .hero-waveform .bar:nth-child(8) { animation-delay: 0.35s; height: 18px; }
        .hero-waveform .bar:nth-child(9) { animation-delay: 0.05s; height: 26px; }
        .hero-waveform .bar:nth-child(10) { animation-delay: 0.45s; height: 14px; }
        .hero-waveform .bar:nth-child(11) { animation-delay: 0.2s; height: 20px; }
        .hero-waveform .bar:nth-child(12) { animation-delay: 0.3s; height: 8px; }
        .section {
            .section { padding: 64px 0; }
        .section-label {
        .section-label-line {
        .section-title {
            .section-title { font-size: 2.75rem; }
        .section-subtitle {
        .what-grid {
            .what-grid { grid-template-columns: 1fr 1fr; }
            .what-grid { grid-template-columns: 1fr 1fr 1fr 1fr; }
        .what-card {
        .what-card:hover {
        .what-card-icon {
        .what-card-icon.purple {
        .what-card-icon.blue {
        .what-card-icon.cyan {
        .what-card-icon.emerald {
        .what-card h3 {
        .what-card p {
        .how-section {
        .steps-container {
            .steps-container { grid-template-columns: 1fr 1fr; gap: 28px; }
        .step-card {
        .step-card:hover {
        .step-number {
        .step-card h3 {
        .step-card p {
        .step-connector {
        .usecases-grid {
            .usecases-grid { grid-template-columns: 1fr 1fr; }
            .usecases-grid { grid-template-columns: 1fr 1fr 1fr; }
        .usecase-card {
        .usecase-card::before {
        .usecase-card:hover::before { opacity: 1; }
        .usecase-card:hover {
        .usecase-card-icon {
        .usecase-card h3 {
        .usecase-card p {
        .stack-section {
        .stack-categories {
            .stack-categories { grid-template-columns: 1fr 1fr; }
            .stack-categories { grid-template-columns: 1fr 1fr 1fr; }
        .stack-category h4 {
        .stack-pills {
        .stack-pill {
        .stack-pill:hover {
        .faq-section {
        .faq-list {
        .faq-item {
        .faq-item:first-child {
        .faq-question {
        .faq-question:hover { color: #a855f7; }
        .faq-toggle {
        .faq-item.active .faq-toggle {
        .faq-answer {
        .faq-item.active .faq-answer {
        .faq-answer-inner {
        .final-cta {
            .final-cta { padding: 64px 0; }
        .final-cta-glow {
        .final-cta-content {
        .final-cta-content h2 {
            .final-cta-content h2 { font-size: 3rem; }
        .final-cta-content p {
        .footer {
        .footer-inner {
            .footer-inner {
        .footer-left {
        .footer-logo {
        .footer-copy {
        .footer-links {
        .footer-links a {
        .footer-links a:hover { color: #ffffff; }
        .footer-socials {
        .footer-social {
        .footer-social:hover {
        .footer-social svg {
        .footer-social:hover svg { fill: #ffffff; }
        .section-divider {
        ` }} />
        
        
    {/* ==================== HEADER ==================== */}
    

    {/* Mobile Menu */}
    <div className="mobile-menu" id="mobileMenu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/ai-agents">AI Agents</a>
        <a href="/systems">Systems</a>
        <a href="/journal">Journal</a>
        <a href="/contact">Contact</a>
        <Link href="/contact" className="nav-cta">Let's Talk</Link>
    </div>

    {/* ==================== HERO ==================== */}
    <section className="hero">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-glow-3"></div>
        <div className="container">
            <div className="hero-content">
                <div className="hero-badge animate-on-scroll">
                    <span className="hero-badge-dot"></span>
                    AI Voice Agents
                </div>
                <h1 className="animate-on-scroll delay-1">Voice agents that don't sound like they're reading a script. <span className="gradient-text">Because they aren't.</span></h1>
                <p className="hero-subtitle animate-on-scroll delay-2">Human-sounding AI callers that handle inbound support, outbound qualification, appointment booking, and collections. 24/7. In Hindi, English, and regional languages. Sub-second response times.</p>
                <div className="hero-tags animate-on-scroll delay-3">
                    <span className="hero-tag">AI Voice</span>
                    <span className="hero-tag">Multilingual</span>
                    <span className="hero-tag">24/7 Support</span>
                    <span className="hero-tag">Call Automation</span>
                    <span className="hero-tag">Conversational AI</span>
                </div>
                <div className="hero-ctas animate-on-scroll delay-4">
                    <Link href="/contact" className="btn-primary">
                        Let's Talk
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                    <a href="#how" className="btn-secondary">
                        See How It Works
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                </div>
                <div className="hero-waveform animate-on-scroll delay-5">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    </section>

    <div className="section-divider"></div>

    {/* ==================== WHAT THIS IS ==================== */}
    <section className="section" id="what">
        <div className="container">
            <div className="animate-on-scroll">
                <div className="section-label">
                    <span className="section-label-line"></span>
                    What This Is
                </div>
                <h2 className="section-title">Not a chatbot on a phone line.<br /><span className="gradient-text">An actual conversationalist.</span></h2>
                <p className="section-subtitle">We build voice agents that handle real calls — with real people, in real-time. They sound natural, think fast, and know when to shut up and listen.</p>
            </div>
            <div className="what-grid">
                <div className="what-card animate-on-scroll delay-1">
                    <div className="what-card-icon purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="19" x2="12" y2="23" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                    <h3>Sounds Human</h3>
                    <p>Natural voice synthesis with sub-800ms latency. Handles interruptions, pauses, and awkward silences like a real person.</p>
                </div>
                <div className="what-card animate-on-scroll delay-2">
                    <div className="what-card-icon blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2"/><path d="M2 12h20" stroke="#3b82f6" strokeWidth="2"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" stroke="#3b82f6" strokeWidth="2"/></svg>
                    </div>
                    <h3>Speaks Your Customer's Language</h3>
                    <p>Hindi, English, Tamil, Telugu, Marathi, Bengali, Hinglish. Code-switching included. No awkward translations.</p>
                </div>
                <div className="what-card animate-on-scroll delay-3">
                    <div className="what-card-icon cyan">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#06b6d4" strokeWidth="2"/><polyline points="12,6 12,12 16,14" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3>Works While You Sleep</h3>
                    <p>24/7 availability. 1000+ concurrent calls. No sick days. No coffee breaks. No "let me transfer you to someone else."</p>
                </div>
                <div className="what-card animate-on-scroll delay-4">
                    <div className="what-card-icon emerald">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="#10b981" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3>Knows When to Hand Off</h3>
                    <p>Smart escalation to human agents with full conversation context. No repeating yourself. No cold transfers. Ever.</p>
                </div>
            </div>
        </div>
    </section>

    <div className="section-divider"></div>

    {/* ==================== HOW WE DO IT ==================== */}
    <section className="section how-section" id="how">
        <div className="container">
            <div className="animate-on-scroll">
                <div className="section-label">
                    <span className="section-label-line"></span>
                    How We Do It
                </div>
                <h2 className="section-title">From "hello" to <span className="gradient-text">handled.</span></h2>
                <p className="section-subtitle">Four steps. No six-month timeline. We get your voice agent live fast and make it better every week.</p>
            </div>
            <div className="steps-container">
                <div className="step-card animate-on-scroll delay-1">
                    <div className="step-number">01</div>
                    <h3>Conversation Design</h3>
                    <p>We map your call flows, objection handling, and edge cases. The script writes itself from real conversations — not some product manager's imagination.</p>
                </div>
                <div className="step-card animate-on-scroll delay-2">
                    <div className="step-number">02</div>
                    <h3>Voice Selection & Training</h3>
                    <p>Pick a voice that fits your brand. We fine-tune tone, pace, and personality. Friendly? Professional? Slightly sarcastic? Your call.</p>
                </div>
                <div className="step-card animate-on-scroll delay-3">
                    <div className="step-number">03</div>
                    <h3>Integration</h3>
                    <p>Connect to your CRM, calendar, helpdesk. The agent reads and writes to your systems in real-time. No copy-pasting. No manual updates.</p>
                </div>
                <div className="step-card animate-on-scroll delay-4">
                    <div className="step-number">04</div>
                    <h3>Launch & Iterate</h3>
                    <p>Go live, monitor call quality, refine based on real conversations. Week 1 is good. Week 4 is great. Week 8 is scary good.</p>
                </div>
            </div>
        </div>
    </section>

    <div className="section-divider"></div>

    {/* ==================== USE CASES ==================== */}
    <section className="section" id="usecases">
        <div className="container">
            <div className="animate-on-scroll">
                <div className="section-label">
                    <span className="section-label-line"></span>
                    What You Get
                </div>
                <h2 className="section-title">Real problems. <span className="gradient-text">Real solutions.</span></h2>
                <p className="section-subtitle">These aren't hypothetical use cases. These are the exact things our voice agents are doing right now for real businesses.</p>
            </div>
            <div className="usecases-grid">
                <div className="usecase-card animate-on-scroll delay-1">
                    <span className="usecase-card-icon">📞</span>
                    <h3>Inbound Support</h3>
                    <p>Answer FAQs, troubleshoot issues, create tickets. 80% of Tier-1 calls handled without a human touching them.</p>
                </div>
                <div className="usecase-card animate-on-scroll delay-2">
                    <span className="usecase-card-icon">📅</span>
                    <h3>Appointment Booking</h3>
                    <p>Check availability, book slots, send confirmations. For clinics, salons, consultants — anyone tired of phone tag.</p>
                </div>
                <div className="usecase-card animate-on-scroll delay-3">
                    <span className="usecase-card-icon">🎯</span>
                    <h3>Lead Qualification</h3>
                    <p>Ask the right questions, score leads, route hot prospects to your sales team. Before they cool off.</p>
                </div>
                <div className="usecase-card animate-on-scroll delay-4">
                    <span className="usecase-card-icon">💰</span>
                    <h3>Collections</h3>
                    <p>Gentle payment reminders in the customer's language. Compliant, empathetic, effective. No awkwardness required.</p>
                </div>
                <div className="usecase-card animate-on-scroll delay-5">
                    <span className="usecase-card-icon">📦</span>
                    <h3>Order Status</h3>
                    <p>"Where's my order?" answered in 3 seconds with real-time tracking data. Not "please hold while I look that up."</p>
                </div>
                <div className="usecase-card animate-on-scroll delay-6">
                    <span className="usecase-card-icon">📊</span>
                    <h3>Outbound Surveys</h3>
                    <p>Post-purchase feedback, NPS calls, event follow-ups. At scale. Without hiring a call center.</p>
                </div>
            </div>
        </div>
    </section>

    <div className="section-divider"></div>

    {/* ==================== TECH STACK ==================== */}
    <section className="section stack-section" id="stack">
        <div className="container">
            <div className="animate-on-scroll">
                <div className="section-label">
                    <span className="section-label-line"></span>
                    Our Stack
                </div>
                <h2 className="section-title">Built with the <span className="gradient-text">good stuff.</span></h2>
                <p className="section-subtitle">We pick tools that work — not tools that have nice logos. Here's what powers your voice agents.</p>
            </div>
            <div className="stack-categories animate-on-scroll delay-1">
                <div className="stack-category">
                    <h4>Telephony</h4>
                    <div className="stack-pills">
                        <span className="stack-pill">Twilio</span>
                        <span className="stack-pill">Exotel</span>
                        <span className="stack-pill">Plivo</span>
                        <span className="stack-pill">Knowlarity</span>
                    </div>
                </div>
                <div className="stack-category">
                    <h4>Voice Synthesis</h4>
                    <div className="stack-pills">
                        <span className="stack-pill">ElevenLabs</span>
                        <span className="stack-pill">PlayHT</span>
                        <span className="stack-pill">OpenAI Voices</span>
                    </div>
                </div>
                <div className="stack-category">
                    <h4>LLM / Conversation Logic</h4>
                    <div className="stack-pills">
                        <span className="stack-pill">GPT-4o</span>
                        <span className="stack-pill">Claude</span>
                    </div>
                </div>
                <div className="stack-category">
                    <h4>CRM Integration</h4>
                    <div className="stack-pills">
                        <span className="stack-pill">HubSpot</span>
                        <span className="stack-pill">Salesforce</span>
                        <span className="stack-pill">Zoho</span>
                        <span className="stack-pill">LeadSquared</span>
                    </div>
                </div>
                <div className="stack-category">
                    <h4>Calendar</h4>
                    <div className="stack-pills">
                        <span className="stack-pill">Cal.com</span>
                        <span className="stack-pill">Google Calendar</span>
                    </div>
                </div>
                <div className="stack-category">
                    <h4>Analytics</h4>
                    <div className="stack-pills">
                        <span className="stack-pill">Call Recordings</span>
                        <span className="stack-pill">Sentiment Analysis</span>
                        <span className="stack-pill">Conversion Tracking</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="section-divider"></div>

    {/* ==================== FAQ ==================== */}
    <section className="section faq-section" id="faq">
        <div className="container">
            <div className="animate-on-scroll" style={{textAlign: 'center'}}>
                <div className="section-label" style={{justifyContent: 'center'}}>
                    <span className="section-label-line"></span>
                    FAQ
                </div>
                <h2 className="section-title">Got questions? <span className="gradient-text">Good.</span></h2>
                <p className="section-subtitle" style={{marginLeft: 'auto', marginRight: 'auto'}}>The stuff people actually ask us before they say yes.</p>
            </div>
            <div className="faq-list">
                <div className="faq-item animate-on-scroll delay-1">
                    <button className="faq-question">
                        <span>Will callers know they're talking to AI?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">Most people don't notice within the first 30 seconds. The voice quality and response time are that good. We've had people say "thank you" and "have a nice day" to our agents. They meant it.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll delay-1">
                    <button className="faq-question">
                        <span>Can it handle Hindi and regional languages?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">Yes. Hindi, Tamil, Telugu, Marathi, Bengali, Kannada, plus Hinglish code-switching. The kind where someone starts in English and finishes in Hindi mid-sentence. More languages on request.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll delay-2">
                    <button className="faq-question">
                        <span>Is this legal for outbound calling?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">Yes, with proper compliance. We handle DND/DNC checks, TRAI DLT compliance, and consent management. We've done this enough times to know what keeps you on the right side of the regulators.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll delay-2">
                    <button className="faq-question">
                        <span>What happens when the AI can't answer?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">Warm transfer to a human agent with the full conversation transcript, caller intent, and CRM context. No cold handoffs. No "can you repeat everything you just said?" Your human agent picks up exactly where the AI left off.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll delay-3">
                    <button className="faq-question">
                        <span>Can we use our existing phone numbers?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">Almost always. We work with Twilio, Exotel, Plivo, Knowlarity, and most VoIP providers. If you've got a number, we can probably hook it up. Worst case, we port it.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll delay-3">
                    <button className="faq-question">
                        <span>How natural does it actually sound?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">Very. Natural voices with emotion, pacing, and interruption handling. Not the robotic "your call is important to us" energy. We'll play you a demo before we build — you'll hear the difference in 5 seconds.</div>
                    </div>
                </div>
                <div className="faq-item animate-on-scroll delay-4">
                    <button className="faq-question">
                        <span>How is this different from an IVR?</span>
                        <span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">IVRs make you press buttons and navigate menus designed by people who hate you. Our agents have actual conversations. They understand intent, answer questions, and complete tasks — without making anyone press 1 for English.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="section-divider"></div>

    {/* ==================== FINAL CTA ==================== */}
    <section className="final-cta">
        <div className="final-cta-glow"></div>
        <div className="container">
            <div className="final-cta-content animate-on-scroll">
                <h2>Your phone lines deserve better than <span className="gradient-text">"press 1 for English."</span></h2>
                <p>Let's build a voice agent that sounds like your best employee — except it works 24/7, speaks 8 languages, and never asks for a raise.</p>
                <Link href="/contact" className="btn-primary">
                    Let's Talk
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
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
