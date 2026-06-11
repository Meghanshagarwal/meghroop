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
  

  {/* Mobile Navigation */}
  

  {/* ==================== HERO ==================== */}
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

  {/* ==================== WHAT THIS IS ==================== */}
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

  {/* ==================== HOW WE DO IT ==================== */}
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

  {/* ==================== USE CASES ==================== */}
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

  {/* ==================== TECH STACK ==================== */}
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

  {/* ==================== FAQ ==================== */}
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

  {/* ==================== FINAL CTA ==================== */}
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

  {/* ==================== FOOTER ==================== */}
  

  {/* ==================== JAVASCRIPT ==================== */}


      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
