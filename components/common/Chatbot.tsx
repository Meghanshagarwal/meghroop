'use client'

import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react'
import MeghRoopLogo from '@/components/common/MeghRoopLogo'
import { trackEvent } from '@/lib/analytics'
import {
  CHATBOT_BRAND,
  QUICK_ACTIONS, 
  SERVICES_PROFILES, 
  KNOWLEDGE_BASE, 
  FAQResponse 
} from '@/data/chatbot-content'

interface Message {
  id: string
  sender: 'assistant' | 'user'
  text: string
  timestamp: Date
  options?: string[]
}

type FlowStep = 
  | 'idle'
  | 'capturingName'
  | 'capturingEmail'
  | 'capturingWhatsapp'
  | 'capturingCompany'
  | 'capturingRequirements'
  | 'submitting'

export default function Chatbot() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputVal, setInputVal] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  
  // Lead Capture State
  const [flowStep, setFlowStep] = useState<FlowStep>('idle')
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    service: '',
    requirements: ''
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: CHATBOT_BRAND.welcomeText,
        timestamp: new Date(),
        options: QUICK_ACTIONS
      }
    ])
  }, [])

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Hide chatbot on all admin routes (placed after all hooks)
  if (pathname?.startsWith('/admin')) return null

  const addMessage = (sender: 'assistant' | 'user', text: string, options?: string[]) => {
    const newMsg: Message = {
      id: Math.random().toString(36).substring(7),
      sender,
      text,
      timestamp: new Date(),
      options
    }
    setMessages(prev => [...prev, newMsg])
  }

  // Handle User Input Submission
  const handleSend = async (text: string) => {
    if (!text.trim()) return
    addMessage('user', text)
    setInputVal('')

    // Process Lead Capture Flow or Knowledge base
    if (flowStep !== 'idle') {
      handleLeadCaptureStep(text)
    } else {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        matchKnowledgeBase(text)
      }, 750)
    }
  }

  // Match input with keyword FAQs
  const matchKnowledgeBase = (text: string) => {
    const cleanText = text.toLowerCase().trim()
    
    // Check FAQ keywords
    for (const value of Object.values(KNOWLEDGE_BASE)) {
      const matched = value.keywords.some(keyword => cleanText.includes(keyword))
      if (matched) {
        respondWithFaq(value)
        return
      }
    }

    // Default fallback response
    addMessage(
      'assistant',
      "I'm not sure about that details, but our core engineers Meghansh & Roop can absolutely help. Would you like to request a free consultation or book a call directly?",
      ['Book a Call', 'Main Menu']
    )
  }

  const respondWithFaq = (faq: FAQResponse) => {
    addMessage('assistant', faq.answer)
    
    if (faq.followUpQuestion) {
      setTimeout(() => {
        addMessage('assistant', faq.followUpQuestion!, faq.options)
      }, 400)
    } else if (faq.options) {
      setTimeout(() => {
        addMessage('assistant', 'Here are some quick options:', faq.options)
      }, 300)
    }
  }

  // Quick Action / Option Clicks
  const handleOptionClick = (option: string) => {
    addMessage('user', option)

    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      
      // WhatsApp Redirection
      if (option === 'WhatsApp Us' || option === 'WhatsApp' || option === 'WhatsApp Us 💬') {
        trackEvent('whatsapp_click', 'Contact', { location: 'chatbot' })
        window.open(CHATBOT_BRAND.whatsappUrl, '_blank')
        addMessage('assistant', 'Redirected you to our official WhatsApp channel! Feel free to ask anything.', ['Main Menu'])
        return
      }

      // Return to main welcome menu
      if (option === 'Main Menu' || option === 'Back to Menu') {
        addMessage('assistant', CHATBOT_BRAND.welcomeText, QUICK_ACTIONS)
        return
      }

      // Initiate Lead Capture Flow
      if (
        option === 'Book a Call' || 
        option === 'Request Quote' || 
        option === 'Get Consultation' || 
        option === 'Yes, let\'s talk' || 
        option === 'Yes' || 
        option === 'Request Audit'
      ) {
        setFlowStep('capturingName')
        addMessage('assistant', 'Excellent! Let\'s gather some details to kickstart your project. What is your name?')
        return
      }

      if (option === 'No') {
        addMessage('assistant', 'No problem! Feel free to explore our playbooks or ask any other technical question.', ['Main Menu'])
        return
      }

      // Service profiles matches
      if (SERVICES_PROFILES[option]) {
        const profile = SERVICES_PROFILES[option]
        setLeadData(prev => ({ ...prev, service: profile.title }))
        addMessage(
          'assistant',
          `${profile.brief}\n\n${profile.consultationPrompt}`,
          ['Yes, let\'s talk', 'Main Menu']
        )
        return
      }

      // If user typed custom text that matched quick actions
      matchKnowledgeBase(option)
    }, 500)
  }

  // Lead capture step-by-step logic
  const handleLeadCaptureStep = async (input: string) => {
    const text = input.trim()

    if (flowStep === 'capturingName') {
      setLeadData(prev => ({ ...prev, name: text }))
      setFlowStep('capturingEmail')
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        addMessage('assistant', `Nice to meet you, ${text}! What is your best business email address?`)
      }, 500)
      return
    }

    if (flowStep === 'capturingEmail') {
      // Basic email regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(text)) {
        addMessage('assistant', 'That email address looks slightly incomplete. Please enter a valid email format:')
        return
      }

      setLeadData(prev => ({ ...prev, email: text }))
      setFlowStep('capturingWhatsapp')
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        addMessage('assistant', 'Got it. What is your WhatsApp or phone number (with country code)?')
      }, 500)
      return
    }

    if (flowStep === 'capturingWhatsapp') {
      setLeadData(prev => ({ ...prev, whatsapp: text }))
      setFlowStep('capturingCompany')
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        addMessage('assistant', 'Perfect. What is the name of your company or startup?')
      }, 500)
      return
    }

    if (flowStep === 'capturingCompany') {
      setLeadData(prev => ({ ...prev, company: text }))
      setFlowStep('capturingRequirements')
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        addMessage('assistant', 'Excellent. Briefly describe what you are looking to build or the requirements of your project:')
      }, 500)
      return
    }

    if (flowStep === 'capturingRequirements') {
      const finalRequirements = text
      setFlowStep('submitting')
      setIsTyping(true)

      try {
        // format lead info dynamically into standard contact form body to reuse Sheets and SMTP pipelines
        const formattedMessage = `Company: ${leadData.company}\nWhatsApp: ${leadData.whatsapp}\nRequirements: ${finalRequirements}\n\n[Captured via Branded MeghRoop Chatbot]`

        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: leadData.name,
            email: leadData.email,
            projectType: leadData.service || 'Chatbot Lead Capture',
            message: formattedMessage
          })
        })

        setIsTyping(false)
        if (res.ok) {
          trackEvent('chatbot_lead_submit', 'Lead', { service: leadData.service || 'general', location: 'chatbot' })
          addMessage(
            'assistant',
            `🎉 Thank you, ${leadData.name}! We have captured your requirements successfully.\n\nExpected response time is within 24 hours. A receipt email has also been sent to ${leadData.email}.`,
            ['Main Menu']
          )
        } else {
          addMessage(
            'assistant',
            'Something went wrong pushing details to our backend. Please request a callback or write to us at hello@meghroop.tech.',
            ['Main Menu']
          )
        }
      } catch (err) {
        setIsTyping(false)
        console.error('[Chatbot Lead Push Error]:', err)
        addMessage(
          'assistant',
          'A network error occurred. Please try again or write to us at hello@meghroop.tech.',
          ['Main Menu']
        )
      }
      setFlowStep('idle')
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print font-sans flex flex-col items-end">
      <AnimatePresence>
        
        {/* CHAT OPEN STATE FLOATING PANEL */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-[92vw] sm:w-[420px] h-[calc(100vh-120px)] max-h-[580px] min-h-[380px] bg-[#080808] border border-white/[0.08] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between"
            style={{
              boxShadow: '0 0 30px rgba(192, 132, 252, 0.05)',
            }}
          >
            {/* Header */}
            <div className="bg-[#0d0d0d] border-b border-white/[0.06] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <MeghRoopLogo variant="favicon" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#0d0d0d]" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-white tracking-tight leading-none flex items-center gap-1.5">
                    {CHATBOT_BRAND.name}
                    <Sparkles size={11} className="text-purple-400" />
                  </h4>
                  <span className="text-[10px] text-gray-500 font-medium">Core Studio Assistant</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="Close Chat"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-transparent to-white/[0.01]">
              {messages.map((msg) => (
                <div key={msg.id} className="space-y-2">
                  <div className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.sender === 'assistant' && (
                      <MeghRoopLogo variant="favicon" className="w-6 h-6 rounded-[5px] !p-0 shrink-0 mt-0.5 bg-transparent border-none" />
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-purple-600 text-white rounded-tr-none font-medium'
                          : 'bg-white/[0.03] border border-white/[0.06] text-gray-300 rounded-tl-none whitespace-pre-line font-light'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>

                  {/* Render Options if present */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-2 pl-8 pt-1">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionClick(opt)}
                          className="px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-purple-500/10 hover:border-purple-500/30 text-gray-400 hover:text-purple-300 text-[11px] font-medium transition-all duration-200"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5 justify-start">
                  <div className="w-6 h-6 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <Loader2 size={12} className="animate-spin" />
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.06] text-gray-500 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs font-light">
                    Typing…
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend(inputVal)
              }}
              className="bg-[#0d0d0d] border-t border-white/[0.06] p-4 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={
                  flowStep === 'capturingEmail'
                    ? 'Enter email address...'
                    : flowStep === 'capturingWhatsapp'
                    ? 'Enter phone number...'
                    : 'Type a question or message...'
                }
                disabled={flowStep === 'submitting'}
                className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all font-light"
              />
              <button
                type="submit"
                disabled={flowStep === 'submitting' || !inputVal.trim()}
                className="w-9 h-9 rounded-xl bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center disabled:opacity-40 disabled:hover:bg-purple-600 transition-colors"
                aria-label="Send Message"
              >
                <Send size={14} />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOAT GLOWING OPEN CHAT BUTTON */}
      <motion.button
        onClick={() => {
          if (!isOpen) trackEvent('chatbot_open', undefined, { location: 'floating_button' })
          setIsOpen(!isOpen)
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white cursor-pointer relative"
        style={{
          boxShadow: isOpen 
            ? '0 0 20px rgba(168, 85, 247, 0.4)' 
            : '0 0 15px rgba(168, 85, 247, 0.25)',
        }}
        aria-label="Open MeghRoop Support Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <MessageSquare size={20} />
              {/* Pulsing indicator */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-purple-600 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
