'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Loader2, 
  X, 
  Wallet, 
  Calendar, 
  Check, 
  Receipt
} from 'lucide-react'

interface Payment {
  id: string
  amount: number
  date: string
  notes: string
  commission?: number
  commissionPercent?: number
}

interface Deal {
  id: string
  clientName: string
  projectTitle: string
  dealAmount: number
  currency: 'INR' | 'USD'
  payments: Payment[]
  createdAt: string
}

const inputClass =
  'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all'

const formatCurrency = (amount: number, curr: 'INR' | 'USD') => {
  const locale = curr === 'INR' ? 'en-IN' : 'en-US'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: curr,
    maximumFractionDigits: 0
  }).format(amount)
}

export default function PaymentsPage() {
  const [deals, setDeals] = useState<Deal[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [activeCurrencyFilter, setActiveCurrencyFilter] = useState<'ALL' | 'INR' | 'USD'>('ALL')

  // Add/Edit Deal Modal States
  const [dealModalOpen, setDealModalOpen] = useState(false)
  const [editingDeal, setEditingDeal] = useState<Deal | null>(null)
  const [clientName, setClientName] = useState('')
  const [projectTitle, setProjectTitle] = useState('')
  const [dealAmount, setDealAmount] = useState('')
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR')

  // Payments/Milestone Modal States
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [activeDeal, setActiveDeal] = useState<Deal | null>(null)
  const [paymentAmount, setPaymentAmount] = useState('')
  const [paymentDate, setPaymentDate] = useState('')
  const [paymentNotes, setPaymentNotes] = useState('')
  const [commissionAmount, setCommissionAmount] = useState('')
  const [commissionPercent, setCommissionPercent] = useState('')

  const loadDeals = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/payments')
      const data = await res.json()
      setDeals(Array.isArray(data) ? data : [])
    } catch {
      setDeals([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadDeals()
  }, [loadDeals])

  const saveDealsToDb = async (updatedList: Deal[]) => {
    setSaving(true)
    try {
      await fetch('/api/admin/payments', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList)
      })
      setDeals(updatedList)
    } catch (err) {
      console.error('Failed to save deals:', err)
    } finally {
      setSaving(false)
    }
  }

  // Handle Deal CRUD
  const handleOpenAddDeal = () => {
    setEditingDeal(null)
    setClientName('')
    setProjectTitle('')
    setDealAmount('')
    setCurrency('INR')
    setDealModalOpen(true)
  }

  const handleOpenEditDeal = (deal: Deal) => {
    setEditingDeal(deal)
    setClientName(deal.clientName)
    setProjectTitle(deal.projectTitle)
    setDealAmount(deal.dealAmount.toString())
    setCurrency(deal.currency)
    setDealModalOpen(true)
  }

  const handleSaveDeal = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!clientName.trim() || !projectTitle.trim() || !dealAmount.trim()) return

    const parsedAmount = parseFloat(dealAmount)
    if (isNaN(parsedAmount) || parsedAmount <= 0) return

    let updatedList: Deal[] = []

    if (editingDeal) {
      // Edit existing
      updatedList = deals.map(d => {
        if (d.id === editingDeal.id) {
          return {
            ...d,
            clientName: clientName.trim(),
            projectTitle: projectTitle.trim(),
            dealAmount: parsedAmount,
            currency: currency
          }
        }
        return d
      })
    } else {
      // Create new
      const newDeal: Deal = {
        id: 'deal_' + Math.random().toString(36).substring(2, 9),
        clientName: clientName.trim(),
        projectTitle: projectTitle.trim(),
        dealAmount: parsedAmount,
        currency: currency,
        payments: [],
        createdAt: new Date().toISOString()
      }
      updatedList = [newDeal, ...deals]
    }

    await saveDealsToDb(updatedList)
    setDealModalOpen(false)
  }

  const handleDeleteDeal = async (dealId: string) => {
    if (!confirm('Are you sure you want to delete this deal? All associated payment history will be deleted.')) return
    const updatedList = deals.filter(d => d.id !== dealId)
    await saveDealsToDb(updatedList)
  }

  // Handle Payments / Milestone entries
  const handleOpenPayments = (deal: Deal) => {
    setActiveDeal(deal)
    setPaymentAmount('')
    setPaymentDate(new Date().toISOString().split('T')[0])
    setPaymentNotes('')
    setCommissionAmount('')
    setCommissionPercent('')
    setPaymentModalOpen(true)
  }

  const handlePercentChange = (val: string, dealValue: number) => {
    setCommissionPercent(val)
    if (!val || isNaN(parseFloat(val)) || !dealValue) {
      setCommissionAmount('')
      return
    }
    const percent = parseFloat(val)
    const amount = (percent / 100) * dealValue
    setCommissionAmount(amount.toFixed(2).replace(/\.00$/, ''))
  }

  const handleAmountChange = (val: string, dealValue: number) => {
    setCommissionAmount(val)
    if (!val || isNaN(parseFloat(val)) || !dealValue) {
      setCommissionPercent('')
      return
    }
    const amount = parseFloat(val)
    const percent = (amount / dealValue) * 100
    setCommissionPercent(percent.toFixed(2).replace(/\.00$/, ''))
  }

  const handleAddPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!activeDeal || !paymentAmount.trim() || !paymentDate.trim()) return

    const parsedAmount = parseFloat(paymentAmount)
    if (isNaN(parsedAmount) || parsedAmount <= 0) return

    const parsedCommission = parseFloat(commissionAmount)
    const parsedCommissionPercent = parseFloat(commissionPercent)

    const newPayment: Payment = {
      id: 'pay_' + Math.random().toString(36).substring(2, 9),
      amount: parsedAmount,
      date: paymentDate,
      notes: paymentNotes.trim() || 'Milestone payment',
      commission: isNaN(parsedCommission) ? undefined : parsedCommission,
      commissionPercent: isNaN(parsedCommissionPercent) ? undefined : parsedCommissionPercent
    }

    const updatedList = deals.map(d => {
      if (d.id === activeDeal.id) {
        const updatedPayments = [...d.payments, newPayment].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        return {
          ...d,
          payments: updatedPayments
        }
      }
      return d
    })

    await saveDealsToDb(updatedList)
    
    // Refresh modal active deal state
    const refreshedActive = updatedList.find(d => d.id === activeDeal.id)
    setActiveDeal(refreshedActive || null)

    // Clear inputs
    setPaymentAmount('')
    setPaymentNotes('')
    setCommissionAmount('')
    setCommissionPercent('')
  }

  const handleDeletePayment = async (paymentId: string) => {
    if (!activeDeal || !confirm('Delete this payment milestone entry?')) return

    const updatedList = deals.map(d => {
      if (d.id === activeDeal.id) {
        return {
          ...d,
          payments: d.payments.filter(p => p.id !== paymentId)
        }
      }
      return d
    })

    await saveDealsToDb(updatedList)

    // Refresh modal active deal state
    const refreshedActive = updatedList.find(d => d.id === activeDeal.id)
    setActiveDeal(refreshedActive || null)
  }

  // Financial Stats Calculation Helpers
  const getTotals = () => {
    let inrTotalVolume = 0
    let inrCollected = 0
    let usdTotalVolume = 0
    let usdCollected = 0

    deals.forEach(deal => {
      const collected = deal.payments.reduce((sum, p) => sum + p.amount, 0)
      if (deal.currency === 'INR') {
        inrTotalVolume += deal.dealAmount
        inrCollected += collected
      } else {
        usdTotalVolume += deal.dealAmount
        usdCollected += collected
      }
    })

    return {
      inr: {
        volume: inrTotalVolume,
        collected: inrCollected,
        due: inrTotalVolume - inrCollected
      },
      usd: {
        volume: usdTotalVolume,
        collected: usdCollected,
        due: usdTotalVolume - usdCollected
      }
    }
  }

  const stats = getTotals()

  // Filter deals for listing
  const filteredDeals = deals.filter(deal => {
    if (activeCurrencyFilter === 'ALL') return true
    return deal.currency === activeCurrencyFilter
  })

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen pb-20">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading font-bold text-2xl text-white">Client Payments</h1>
          <p className="text-sm text-gray-500 mt-1">Track budgets, milestone payments, and outstanding balances</p>
        </div>
        <button
          onClick={handleOpenAddDeal}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors cursor-pointer"
        >
          <Plus size={15} />
          Add Client Deal
        </button>
      </div>

      {/* Currency Switcher Tabs */}
      <div className="flex gap-2 p-1 bg-white/[0.02] border border-white/[0.06] rounded-2xl w-fit mb-8">
        <button
          onClick={() => setActiveCurrencyFilter('ALL')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
            activeCurrencyFilter === 'ALL'
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
              : 'text-gray-500 hover:text-white'
          }`}
        >
          All Currencies
        </button>
        <button
          onClick={() => setActiveCurrencyFilter('INR')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
            activeCurrencyFilter === 'INR'
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
              : 'text-gray-500 hover:text-white'
          }`}
        >
          Rupees (₹)
        </button>
        <button
          onClick={() => setActiveCurrencyFilter('USD')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
            activeCurrencyFilter === 'USD'
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
              : 'text-gray-500 hover:text-white'
          }`}
        >
          Dollars ($)
        </button>
      </div>

      {/* Financial Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1: Total Volume */}
        <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.02] transition-all relative overflow-hidden flex flex-col justify-between h-36">
          <div>
            <span className="text-xs text-gray-500 font-medium">Total Deal Volume</span>
            <div className="mt-3 space-y-1">
              {(activeCurrencyFilter === 'ALL' || activeCurrencyFilter === 'INR') && (
                <div className="text-2xl font-bold font-mono text-white tracking-tight">
                  {formatCurrency(stats.inr.volume, 'INR')}
                </div>
              )}
              {(activeCurrencyFilter === 'ALL' || activeCurrencyFilter === 'USD') && (
                <div className="text-2xl font-bold font-mono text-white tracking-tight">
                  {formatCurrency(stats.usd.volume, 'USD')}
                </div>
              )}
            </div>
          </div>
          <div className="absolute right-4 top-4 opacity-10">
            <Wallet size={64} className="text-white" />
          </div>
        </div>

        {/* Card 2: Total Collected */}
        <div className="p-5 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.01] hover:bg-emerald-500/[0.02] transition-all relative overflow-hidden flex flex-col justify-between h-36">
          <div>
            <span className="text-xs text-emerald-500/75 font-medium">Total Collected</span>
            <div className="mt-3 space-y-1">
              {(activeCurrencyFilter === 'ALL' || activeCurrencyFilter === 'INR') && (
                <div className="text-2xl font-bold font-mono text-emerald-400 tracking-tight">
                  {formatCurrency(stats.inr.collected, 'INR')}
                </div>
              )}
              {(activeCurrencyFilter === 'ALL' || activeCurrencyFilter === 'USD') && (
                <div className="text-2xl font-bold font-mono text-emerald-400 tracking-tight">
                  {formatCurrency(stats.usd.collected, 'USD')}
                </div>
              )}
            </div>
          </div>
          <div className="absolute right-4 top-4 opacity-10">
            <Receipt size={64} className="text-emerald-400" />
          </div>
        </div>

        {/* Card 3: Total Outstanding */}
        <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] hover:bg-purple-500/[0.02] transition-all relative overflow-hidden flex flex-col justify-between h-36">
          <div>
            <span className="text-xs text-purple-400/75 font-medium">Total Outstanding Due</span>
            <div className="mt-3 space-y-1">
              {(activeCurrencyFilter === 'ALL' || activeCurrencyFilter === 'INR') && (
                <div className="text-2xl font-bold font-mono text-purple-400 tracking-tight">
                  {formatCurrency(stats.inr.due, 'INR')}
                </div>
              )}
              {(activeCurrencyFilter === 'ALL' || activeCurrencyFilter === 'USD') && (
                <div className="text-2xl font-bold font-mono text-purple-400 tracking-tight">
                  {formatCurrency(stats.usd.due, 'USD')}
                </div>
              )}
            </div>
          </div>
          <div className="absolute right-4 top-4 opacity-10">
            <Calendar size={64} className="text-purple-400" />
          </div>
        </div>
      </div>

      {/* Main Table / State */}
      {loading ? (
        <div className="flex items-center gap-2 text-gray-500">
          <Loader2 size={16} className="animate-spin" /> Loading client database…
        </div>
      ) : filteredDeals.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/[0.08] rounded-3xl">
          <p className="text-gray-500 text-sm mb-4">No deals found for this currency filter</p>
          <button
            onClick={handleOpenAddDeal}
            className="text-purple-400 hover:text-purple-300 text-sm font-medium cursor-pointer"
          >
            + Create a new client deal
          </button>
        </div>
      ) : (
        <div className="border border-white/[0.06] bg-white/[0.01] rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02] text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <th className="py-4 px-6">Client / Project</th>
                  <th className="py-4 px-6 text-right">Deal Value</th>
                  <th className="py-4 px-6 text-right">Collected</th>
                  <th className="py-4 px-6 text-right">Outstanding</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6">Last Payment</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filteredDeals.map(deal => {
                  const collected = deal.payments.reduce((sum, p) => sum + p.amount, 0)
                  const due = deal.dealAmount - collected
                  
                  // Status Logic
                  let status: 'Paid' | 'Partial' | 'Unpaid' = 'Unpaid'
                  let statusClass = 'bg-red-500/10 text-red-400 border-red-500/20'
                  
                  if (collected >= deal.dealAmount) {
                    status = 'Paid'
                    statusClass = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  } else if (collected > 0) {
                    status = 'Partial'
                    statusClass = 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }

                  const lastPayment = deal.payments[0] // sorted by date descending in array

                  return (
                    <tr key={deal.id} className="hover:bg-white/[0.02] transition-colors text-sm text-gray-300">
                      {/* Client / Project */}
                      <td className="py-4 px-6">
                        <div className="font-semibold text-white">{deal.clientName}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{deal.projectTitle}</div>
                      </td>

                      {/* Deal Value */}
                      <td className="py-4 px-6 text-right font-mono text-white font-medium">
                        {formatCurrency(deal.dealAmount, deal.currency)}
                      </td>

                      {/* Collected */}
                      <td className="py-4 px-6 text-right font-mono text-emerald-400 font-medium">
                        {formatCurrency(collected, deal.currency)}
                      </td>

                      {/* Outstanding */}
                      <td className={`py-4 px-6 text-right font-mono font-medium ${due > 0 ? 'text-purple-400' : 'text-gray-600'}`}>
                        {formatCurrency(due, deal.currency)}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusClass}`}>
                          {status === 'Partial' ? 'Partial' : status}
                        </span>
                      </td>

                      {/* Last Payment */}
                      <td className="py-4 px-6 text-xs text-gray-500">
                        {lastPayment ? (
                          <div>
                            <div className="font-medium text-gray-400">{formatCurrency(lastPayment.amount, deal.currency)}</div>
                            <div className="mt-0.5">{lastPayment.date}</div>
                          </div>
                        ) : (
                          <span className="italic text-gray-600">No payments yet</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenPayments(deal)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/[0.08] hover:border-purple-500/30 hover:bg-purple-500/10 text-gray-400 hover:text-purple-300 text-xs font-medium transition-all cursor-pointer"
                          >
                            <Receipt size={13} />
                            Milestones
                          </button>
                          <button
                            onClick={() => handleOpenEditDeal(deal)}
                            className="w-8 h-8 rounded-xl flex items-center justify-center border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                            title="Edit Deal"
                          >
                            <Pencil size={13} />
                          </button>
                          <button
                            onClick={() => handleDeleteDeal(deal.id)}
                            className="w-8 h-8 rounded-xl flex items-center justify-center border border-white/[0.08] text-gray-400 hover:text-red-400 hover:bg-red-500/[0.06] hover:border-red-500/20 transition-colors cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL 1: ADD / EDIT DEAL FORM
          ======================================================== */}
      <AnimatePresence>
        {dealModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-[#0d0d0d] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between bg-white/[0.01]">
                <h3 className="font-heading font-bold text-lg text-white">
                  {editingDeal ? 'Edit Client Deal' : 'Add Client Deal'}
                </h3>
                <button
                  onClick={() => setDealModalOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSaveDeal} className="p-6 space-y-5">
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block font-semibold uppercase tracking-wider">Client Name</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Shopify Brands Inc"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block font-semibold uppercase tracking-wider">Project Title</label>
                  <input
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="e.g. Next.js Commerce Setup"
                    required
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block font-semibold uppercase tracking-wider">Currency</label>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value as 'INR' | 'USD')}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all cursor-pointer"
                    >
                      <option value="INR" className="bg-[#0d0d0d]">INR (₹)</option>
                      <option value="USD" className="bg-[#0d0d0d]">USD ($)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block font-semibold uppercase tracking-wider">Deal Value</label>
                    <input
                      type="number"
                      value={dealAmount}
                      onChange={(e) => setDealAmount(e.target.value)}
                      placeholder="e.g. 5000"
                      required
                      min="1"
                      step="any"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setDealModalOpen(false)}
                    className="flex-1 py-3 rounded-xl border border-white/[0.08] text-sm text-gray-400 hover:text-white font-medium hover:bg-white/[0.04] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-sm text-white font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {saving ? <Loader2 size={14} className="animate-spin" /> : null}
                    Save Deal
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          MODAL 2: MANAGE PAYMENTS & MILESTONES HISTORY
          ======================================================== */}
      <AnimatePresence>
        {paymentModalOpen && activeDeal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-xl bg-[#0d0d0d] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between bg-white/[0.01]">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Payment Milestones</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{activeDeal.clientName} · {activeDeal.projectTitle}</p>
                </div>
                <button
                  onClick={() => setPaymentModalOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="overflow-y-auto flex-1 p-6 space-y-6">
                {/* Math Breakdown Row */}
                {(() => {
                  const col = activeDeal.payments.reduce((s, p) => s + p.amount, 0)
                  const rem = activeDeal.dealAmount - col
                  const totalCommission = activeDeal.payments.reduce((s, p) => s + (p.commission || 0), 0)
                  return (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                      <div>
                        <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Total Contract</div>
                        <div className="text-sm font-bold font-mono text-white mt-1">
                          {formatCurrency(activeDeal.dealAmount, activeDeal.currency)}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-emerald-500/75 font-semibold uppercase tracking-wider">Collected</div>
                        <div className="text-sm font-bold font-mono text-emerald-400 mt-1">
                          {formatCurrency(col, activeDeal.currency)}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider">Outstanding</div>
                        <div className={`text-sm font-bold font-mono mt-1 ${rem > 0 ? 'text-purple-400' : 'text-gray-600'}`}>
                          {formatCurrency(rem, activeDeal.currency)}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-red-400/80 font-semibold uppercase tracking-wider">Commissions</div>
                        <div className="text-sm font-bold font-mono text-red-400 mt-1">
                          {formatCurrency(totalCommission, activeDeal.currency)}
                        </div>
                      </div>
                    </div>
                  )
                })()}

                {/* Form to Add Milestone */}
                {activeDeal.payments.reduce((s, p) => s + p.amount, 0) < activeDeal.dealAmount && (
                  <form onSubmit={handleAddPayment} className="p-4 border border-white/[0.06] bg-white/[0.01] rounded-2xl space-y-4">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Record New Payment Milestone</h4>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] text-gray-500 mb-1 block">Date Received</label>
                        <input
                          type="date"
                          value={paymentDate}
                          onChange={(e) => setPaymentDate(e.target.value)}
                          required
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 mb-1 block">Amount ({activeDeal.currency})</label>
                        <input
                          type="number"
                          value={paymentAmount}
                          onChange={(e) => setPaymentAmount(e.target.value)}
                          placeholder="e.g. 1500"
                          required
                          min="1"
                          step="any"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 border-t border-white/[0.04] pt-3 mt-1">
                      <div>
                        <label className="text-[10px] text-gray-500 mb-1 block">Commission (%)</label>
                        <input
                          type="number"
                          value={commissionPercent}
                          onChange={(e) => handlePercentChange(e.target.value, activeDeal.dealAmount)}
                          placeholder="e.g. 5"
                          min="0"
                          max="100"
                          step="any"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 mb-1 block">Commission Amount ({activeDeal.currency})</label>
                        <input
                          type="number"
                          value={commissionAmount}
                          onChange={(e) => handleAmountChange(e.target.value, activeDeal.dealAmount)}
                          placeholder="e.g. 250"
                          min="0"
                          step="any"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-gray-500 mb-1 block">Milestone Note</label>
                      <input
                        type="text"
                        value={paymentNotes}
                        onChange={(e) => setPaymentNotes(e.target.value)}
                        placeholder="e.g. Advance 40% payment, First prototype completion..."
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={saving}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      <Check size={13} />
                      Submit Milestone Entry
                    </button>
                  </form>
                )}

                {/* History List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Payment Logs</h4>

                  {activeDeal.payments.length === 0 ? (
                    <div className="text-center py-6 text-gray-600 text-xs italic">
                      No payments logged for this client yet.
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {activeDeal.payments.map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02] transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                              <Receipt size={14} />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white">{p.notes}</div>
                              <div className="text-[10px] text-gray-500 mt-0.5">{p.date}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <span className="font-mono text-emerald-400 text-xs font-semibold block">
                                +{formatCurrency(p.amount, activeDeal.currency)}
                              </span>
                              {p.commission && p.commission > 0 ? (
                                <span className="text-[9px] text-red-400/80 font-semibold block mt-0.5 font-mono">
                                  Comm: -{formatCurrency(p.commission, activeDeal.currency)} ({p.commissionPercent}%)
                                </span>
                              ) : null}
                            </div>
                            <button
                              onClick={() => handleDeletePayment(p.id)}
                              className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/[0.08] hover:border-red-500/20 text-gray-500 hover:text-red-400 hover:bg-red-500/[0.06] transition-colors cursor-pointer"
                              title="Delete log"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-white/[0.06] bg-white/[0.01] text-right">
                <button
                  onClick={() => setPaymentModalOpen(false)}
                  className="px-5 py-2 rounded-xl border border-white/[0.08] text-xs text-gray-400 hover:text-white font-medium hover:bg-white/[0.04] transition-colors cursor-pointer"
                >
                  Close Manager
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
