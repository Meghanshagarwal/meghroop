'use client'
import '../ai-agents.css'

import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

const faqs = [
  {
    "question": "How accurate is this?",
    "answer": "Typical deployments hit 85-95% answer accuracy with near-100% citation fidelity. Because the system is restricted to your documents and must cite its sources, hallucination rates are close to zero. The system gets better over time as we analyze query logs and refine retrieval."
  },
  {
    "question": "RAG vs. fine-tuning — which is better?",
    "answer": "RAG (Retrieval-Augmented Generation) is better for almost everything. RAG handles document updates instantly (no retraining needed), provides verifiable citations, and respects document permission settings. Fine-tuning is only recommended if you need the model to learn a specific style, vocabulary, or complex formatting rules."
  },
  {
    "question": "Can it handle scanned PDFs and images?",
    "answer": "Yes. We use layout-aware document parsers (like LlamaParse or custom Unstructured pipelines) combined with modern OCR and multi-modal embeddings to process tables, diagrams, scanned forms, and images."
  },
  {
    "question": "What happens when a document is updated?",
    "answer": "We set up automated re-indexing pipelines. When a file is modified or added in SharePoint, Notion, or your database, the pipeline detects the change, parses the new file, and updates the vector database in real-time or on a schedule (e.g., hourly)."
  },
  {
    "question": "How do you handle document permissions?",
    "answer": "We build permission-aware retrieval filters. The system ingest ACL metadata from your source systems (like SharePoint group IDs or Google Drive sharing permissions). When a user asks a question, the vector query restricts retrieval to documents that the user's ID is explicitly permitted to view."
  },
  {
    "question": "Can this run fully offline / air-gapped?",
    "answer": "Yes. We can deploy open-source models (like Llama 3.3, Qwen 2.5, or Mistral) on your private cloud instance or on-premise hardware. Under this setup, no data or API requests ever leave your physical or virtual network boundaries."
  },
  {
    "question": "How is this different from just using ChatGPT?",
    "answer": "ChatGPT does not have access to your internal files. Even if you upload documents to ChatGPT, it lacks permission controls, fails at searching thousands of complex files, and uses your data for training. Our solution is private, connects dynamically to all your software, respects user permissions, and is built to be cited and audited."
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
                    Knowledge Intelligence
                </div>

                <h1 className="fade-up fade-up-d1">Your docs know everything.<br />Your team <span className="gradient-text">can't find any of it.</span></h1>

                <p className="hero-subtitle fade-up fade-up-d2">We build private, citation-backed AI assistants over your documents. Ask a question in plain language, get an accurate answer with the exact source. Deployed in your cloud. Your data never leaves.</p>

                <div className="hero-tags fade-up fade-up-d3">
                    <span className="hero-tag">Enterprise RAG</span>
                    <span className="hero-tag">Document AI</span>
                    <span className="hero-tag">Knowledge Base</span>
                    <span className="hero-tag">Vector Search</span>
                    <span className="hero-tag">Citation-Backed</span>
                </div>

                <div className="hero-ctas fade-up fade-up-d4">
                    <Link href="/contact" className="btn-primary">
                        Build Your Assistant
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
            <h2 className="section-title fade-up fade-up-d1">Talk to your data.<br />Without leaking it.</h2>
            <p className="section-subtitle fade-up fade-up-d2">We turn messy, scattered documents into a single source of truth that actually answers questions.</p>

            <div className="what-grid">
                <div className="what-card fade-up fade-up-d1">
                    <div className="what-card-icon purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </div>
                    <h3>Ask, Don't Search</h3>
                    <p>Stop digging through folders and workspaces. Ask a question in plain language and get a direct answer with the exact page and paragraph it came from.</p>
                </div>

                <div className="what-card fade-up fade-up-d2">
                    <div className="what-card-icon blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    </div>
                    <h3>Citation-Backed Answers</h3>
                    <p>Every answer comes with its source. No hallucinations. No "I think." Just "Here's the answer, and here's the exact document where I found it."</p>
                </div>

                <div className="what-card fade-up fade-up-d3">
                    <div className="what-card-icon cyan">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    </div>
                    <h3>Permission-Aware</h3>
                    <p>If a user shouldn't see a document, the AI won't use it to answer their question. The retrieval layer inherits your existing access controls automatically.</p>
                </div>

                <div className="what-card fade-up fade-up-d4">
                    <div className="what-card-icon emerald">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <h3>Your Cloud, Your Data</h3>
                    <p>Deploys in your AWS, Azure, or GCP. Can run fully air-gapped with open-source models. Your data never leaves your infrastructure.</p>
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
            <h2 className="section-title fade-up fade-up-d1">Four steps to a private,<br /><span className="gradient-text">intelligent knowledge base.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">We don't just dump files into a folder. We build a high-fidelity ingestion and retrieval pipeline designed for accuracy.</p>

            <div className="process-steps">
                <div className="process-step fade-up fade-up-d1">
                    <div className="process-step-number">1</div>
                    <div className="process-step-label">Step 1</div>
                    <h3>Document Audit</h3>
                    <p>We catalog your knowledge sources. SharePoint, Google Drive, Confluence, Notion, PDFs, databases — we map where everything lives.</p>
                </div>

                <div className="process-step fade-up fade-up-d2">
                    <div className="process-step-number">2</div>
                    <div className="process-step-label">Step 2</div>
                    <h3>Ingestion Pipeline</h3>
                    <p>Parse, chunk, embed, and store. We build custom pipelines to extract tables, read scanned documents, and process messy layouts.</p>
                </div>

                <div className="process-step fade-up fade-up-d3">
                    <div className="process-step-number">3</div>
                    <div className="process-step-label">Step 3</div>
                    <h3>Retrieval Layer</h3>
                    <p>Hybrid search (keyword + semantic), neural re-ranking, and permission filters ensure the AI finds the right context, safely.</p>
                </div>

                <div className="process-step fade-up fade-up-d4">
                    <div className="process-step-number">4</div>
                    <div className="process-step-label">Step 4</div>
                    <h3>Deploy & Refine</h3>
                    <p>Launch in your cloud environment. We set up user feedback loops and continuously optimize retrieval accuracy over time.</p>
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
                Use Cases
            </div>
            <h2 className="section-title fade-up fade-up-d1">Where RAG makes <span className="gradient-text">the biggest impact.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">Our RAG assistants power teams across support, compliance, ops, and strategy.</p>

            <div className="usecases-grid">
                <div className="usecase-card fade-up fade-up-d1">
                    <div className="usecase-icon">👥</div>
                    <h3>Employee Knowledge Assistant</h3>
                    <p>"What's our leave policy?" "How do I file an expense report?" Answered instantly from your internal documentation, saving HR time.</p>
                </div>

                <div className="usecase-card fade-up fade-up-d2">
                    <div className="usecase-icon">💬</div>
                    <h3>Customer Support Bot</h3>
                    <p>Answers customer questions from your help center, product docs, and past resolution logs. Always citation-backed.</p>
                </div>

                <div className="usecase-card fade-up fade-up-d3">
                    <div className="usecase-icon">📜</div>
                    <h3>Contract Intelligence</h3>
                    <p>"What are the payment terms in the Acme contract?" Found in seconds, not hours of scrolling through legal PDFs.</p>
                </div>

                <div className="usecase-card fade-up fade-up-d4">
                    <div className="usecase-icon">🛡️</div>
                    <h3>SOP & Compliance</h3>
                    <p>"What is the procedure for handling a data breach?" Your compliance docs are immediately searchable by the teams that need them.</p>
                </div>

                <div className="usecase-card fade-up fade-up-d5">
                    <div className="usecase-icon">📈</div>
                    <h3>Sales Enablement</h3>
                    <p>"What case studies do we have for healthcare?" "What did we pitch to Company X?" Battle cards and assets on demand.</p>
                </div>

                <div className="usecase-card fade-up fade-up-d6">
                    <div className="usecase-icon">🔬</div>
                    <h3>Research & Analysis</h3>
                    <p>Summarize 50-page reports. Compare two versions of a document. Extract key findings for strategy or investment teams.</p>
                </div>
            </div>
        </div>
    </section>

    {/* ======================== OUR APPROACH / STACK ======================== */}
    <section className="section stack-section" id="approach">
        <div className="container">
            <div className="section-label fade-up">
                <span className="section-label-line"></span>
                Our Stack & Sources
            </div>
            <h2 className="section-title fade-up fade-up-d1">Built with open standards.<br /><span className="gradient-text">Connected to your tools.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">We don't lock you into proprietary platforms. We build with leading open-source and enterprise technology.</p>

            <div className="stack-grid fade-up fade-up-d3">
                <div className="stack-group">
                    <h3>Supported Data Sources</h3>
                    <div className="stack-pills">
                        <span className="stack-pill accent-purple">SharePoint</span>
                        <span className="stack-pill accent-purple">Google Drive</span>
                        <span className="stack-pill accent-purple">Confluence</span>
                        <span className="stack-pill accent-purple">Notion</span>
                        <span className="stack-pill accent-purple">Dropbox</span>
                        <span className="stack-pill">OneDrive</span>
                        <span className="stack-pill">Box</span>
                        <span className="stack-pill accent-blue">Slack</span>
                        <span className="stack-pill accent-blue">Teams</span>
                        <span className="stack-pill accent-blue">Email archives</span>
                        <span className="stack-pill accent-cyan">Zendesk</span>
                        <span className="stack-pill accent-cyan">Freshdesk</span>
                        <span className="stack-pill accent-cyan">Intercom</span>
                        <span className="stack-pill accent-emerald">PostgreSQL</span>
                        <span className="stack-pill accent-emerald">MongoDB</span>
                        <span className="stack-pill accent-emerald">Supabase</span>
                        <span className="stack-pill accent-emerald">BigQuery</span>
                        <span className="stack-pill">PDFs</span>
                        <span className="stack-pill">Word docs</span>
                        <span className="stack-pill">spreadsheets</span>
                        <span className="stack-pill">scanned images</span>
                    </div>
                </div>

                <div className="stack-group">
                    <h3>Technology Stack</h3>
                    <div className="stack-pills">
                        <span className="stack-pill accent-purple">Pinecone</span>
                        <span className="stack-pill accent-purple">Qdrant</span>
                        <span className="stack-pill accent-purple">Weaviate</span>
                        <span className="stack-pill accent-purple">pgvector</span>
                        <span className="stack-pill accent-blue">OpenAI Embeddings</span>
                        <span className="stack-pill accent-blue">Cohere Rerank</span>
                        <span className="stack-pill accent-blue">BGE / E5</span>
                        <span className="stack-pill accent-cyan">GPT-4o</span>
                        <span className="stack-pill accent-cyan">Claude 3.5 Sonnet</span>
                        <span className="stack-pill accent-cyan">Llama 3.3</span>
                        <span className="stack-pill accent-cyan">Qwen</span>
                        <span className="stack-pill accent-cyan">Mistral</span>
                        <span className="stack-pill accent-emerald">Unstructured.io</span>
                        <span className="stack-pill accent-emerald">LlamaParse</span>
                        <span className="stack-pill accent-emerald">Custom OCR</span>
                        <span className="stack-pill">LangChain</span>
                        <span className="stack-pill">LlamaIndex</span>
                        <span className="stack-pill">Docker</span>
                        <span className="stack-pill">AWS / Azure / GCP</span>
                        <span className="stack-pill">Air-gapped deployment</span>
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
            <h2 className="section-title fade-up fade-up-d1">Frequently asked <span className="gradient-text">questions.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">Everything you need to know about setting up RAG for your enterprise.</p>

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
            <div className="section-label" style={{justifyContent: 'center'}}>
                <span className="section-label-line"></span>
                Start Talking to Your Data
            </div>
            <h2 className="section-title fade-up fade-up-d1">Stop digging through folders.<br /><span className="gradient-text">Let's build your enterprise search.</span></h2>
            <p className="section-subtitle fade-up fade-up-d2">Secure, permission-aware, and citation-backed.</p>
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
