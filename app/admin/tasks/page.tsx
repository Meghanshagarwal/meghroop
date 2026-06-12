'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Loader2, 
  X, 
  Calendar, 
  Check, 
  Clock, 
  AlertCircle, 
  Search, 
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
  ListTodo
} from 'lucide-react'

interface Task {
  id: string
  title: string
  description?: string
  status: 'todo' | 'in_progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  category: string
  assignedTo: 'Meghansh' | 'Roop' | 'Both' | 'None'
  dueDate?: string // YYYY-MM-DD
  createdAt: string
}

const CATEGORIES = [
  'Development', 
  'Design', 
  'Marketing', 
  'Client Work', 
  'Operations', 
  'Billing', 
  'Other'
]

const ASSIGNEES = ['None', 'Meghansh', 'Roop', 'Both']
const PRIORITIES = ['low', 'medium', 'high']

const inputClass =
  'w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-[#1a1a1a] transition-all'

const selectClass =
  'w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all cursor-pointer'

// Helper function for overdue tasks
const checkOverdue = (dateStr?: string, status?: string) => {
  if (!dateStr || status === 'completed') return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const due = new Date(dateStr)
  due.setHours(0, 0, 0, 0)
  return due < today
}

interface TaskCardProps {
  task: Task
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
  onStatusChange: (id: string, newStatus: 'todo' | 'in_progress' | 'completed') => void
}

function TaskCard({ task, onEdit, onDelete, onStatusChange }: TaskCardProps) {
  const priorityBorder = {
    high: 'border-l-red-500',
    medium: 'border-l-amber-500',
    low: 'border-l-blue-500'
  }[task.priority]

  const assigneeAvatar = {
    None: { text: '—', bg: 'bg-white/[0.04] text-gray-500 border-white/[0.08]' },
    Meghansh: { text: 'M', bg: 'bg-purple-600/20 text-purple-400 border-purple-500/20' },
    Roop: { text: 'R', bg: 'bg-indigo-600/20 text-indigo-400 border-indigo-500/20' },
    Both: { text: 'MR', bg: 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/20' }
  }[task.assignedTo]

  const overdue = checkOverdue(task.dueDate, task.status)

  return (
    <motion.div
      layoutId={task.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className={`p-4 rounded-xl border border-white/[0.06] border-l-4 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col gap-3 group relative ${priorityBorder}`}
    >
      {/* Title / Actions */}
      <div className="flex justify-between items-start gap-2">
        <span className={`text-xs font-semibold text-white tracking-wide ${task.status === 'completed' ? 'line-through text-gray-500' : ''}`}>
          {task.title}
        </span>
        
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0">
          <button
            onClick={() => onEdit(task)}
            className="p-1 rounded text-gray-500 hover:text-white hover:bg-white/[0.06] transition-all"
            title="Edit task"
          >
            <Pencil size={12} />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1 rounded text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
            title="Delete task"
          >
            <Trash2 size={12} />
          </button>
        </div>
      </div>

      {/* Description */}
      {task.description && (
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {task.description}
        </p>
      )}

      {/* Badges & Meta */}
      <div className="flex items-center justify-between gap-2 mt-1 border-t border-white/[0.03] pt-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {/* Category Badge */}
          <span className="text-[9px] font-semibold tracking-wider uppercase bg-white/[0.03] border border-white/[0.06] text-gray-400 px-1.5 py-0.5 rounded">
            {task.category}
          </span>

          {/* Due Date Indicator */}
          {task.dueDate && (
            <span className={`text-[9px] px-1.5 py-0.5 rounded flex items-center gap-1 font-mono ${
              overdue 
                ? 'bg-red-500/10 border border-red-500/20 text-red-400 font-semibold animate-pulse' 
                : 'bg-white/[0.03] border border-white/[0.06] text-gray-500'
            }`}>
              <Calendar size={8} />
              {task.dueDate}
            </span>
          )}
        </div>

        {/* Assignee Avatar */}
        <div 
          className={`w-6 h-6 rounded-full border text-[9px] font-bold flex items-center justify-center ${assigneeAvatar.bg}`}
          title={`Assigned to: ${task.assignedTo}`}
        >
          {assigneeAvatar.text}
        </div>
      </div>

      {/* Status Movement Quick Trigger */}
      <div className="flex justify-between items-center mt-2 border-t border-white/[0.03] pt-2">
        <span className="text-[9px] text-gray-600">Move status:</span>
        <div className="flex items-center gap-1">
          {task.status !== 'todo' && (
            <button
              onClick={() => onStatusChange(task.id, task.status === 'completed' ? 'in_progress' : 'todo')}
              className="p-1 rounded text-gray-500 hover:text-white hover:bg-white/[0.04] transition-all"
            >
              <ChevronLeft size={12} />
            </button>
          )}
          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full capitalize ${
            task.status === 'completed' ? 'text-emerald-400/80 bg-emerald-500/5' :
            task.status === 'in_progress' ? 'text-blue-400/80 bg-blue-500/5' :
            'text-gray-400 bg-white/[0.02]'
          }`}>
            {task.status.replace('_', ' ')}
          </span>
          {task.status !== 'completed' && (
            <button
              onClick={() => onStatusChange(task.id, task.status === 'todo' ? 'in_progress' : 'completed')}
              className="p-1 rounded text-gray-500 hover:text-white hover:bg-white/[0.04] transition-all"
            >
              <ChevronRight size={12} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  // Search and Filter states
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('ALL')
  const [filterPriority, setFilterPriority] = useState('ALL')
  const [filterAssignee, setFilterAssignee] = useState('ALL')
  const [showFilters, setShowFilters] = useState(false)

  // Modal states
  const [modalOpen, setModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  // Form states
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Development')
  const [priority, setPriority] = useState('medium')
  const [assignedTo, setAssignedTo] = useState<'Meghansh' | 'Roop' | 'Both' | 'None'>('None')
  const [dueDate, setDueDate] = useState('')

  const loadTasks = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/tasks')
      const data = await res.json()
      setTasks(Array.isArray(data) ? data : [])
    } catch {
      setTasks([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTasks()
  }, [loadTasks])

  const saveTasksList = async (updatedList: Task[]) => {
    setSaving(true)
    try {
      await fetch('/api/admin/tasks', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList)
      })
      setTasks(updatedList)
    } catch (err) {
      console.error('Failed to save tasks:', err)
    } finally {
      setSaving(false)
    }
  }

  const handleOpenAddModal = () => {
    setEditingTask(null)
    setTitle('')
    setDescription('')
    setCategory('Development')
    setPriority('medium')
    setAssignedTo('None')
    setDueDate('')
    setModalOpen(true)
  }

  const handleOpenEditModal = (task: Task) => {
    setEditingTask(task)
    setTitle(task.title)
    setDescription(task.description || '')
    setCategory(task.category)
    setPriority(task.priority)
    setAssignedTo(task.assignedTo || 'None')
    setDueDate(task.dueDate || '')
    setModalOpen(true)
  }

  const handleSaveTask = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    let updatedList: Task[] = []

    if (editingTask) {
      // Edit task
      updatedList = tasks.map(t => {
        if (t.id === editingTask.id) {
          return {
            ...t,
            title: title.trim(),
            description: description.trim() || undefined,
            category,
            priority: priority as 'low' | 'medium' | 'high',
            assignedTo,
            dueDate: dueDate || undefined
          }
        }
        return t
      })
    } else {
      // Create new task
      const newTask: Task = {
        id: 'task_' + Math.random().toString(36).substring(2, 9),
        title: title.trim(),
        description: description.trim() || undefined,
        status: 'todo',
        category,
        priority: priority as 'low' | 'medium' | 'high',
        assignedTo,
        dueDate: dueDate || undefined,
        createdAt: new Date().toISOString()
      }
      updatedList = [...tasks, newTask]
    }

    await saveTasksList(updatedList)
    setModalOpen(false)
  }

  const handleDeleteTask = async (id: string) => {
    if (!confirm('Are you sure you want to delete this task?')) return
    const updatedList = tasks.filter(t => t.id !== id)
    await saveTasksList(updatedList)
  }

  const handleStatusChange = async (id: string, newStatus: 'todo' | 'in_progress' | 'completed') => {
    const updatedList = tasks.map(t => {
      if (t.id === id) {
        return { ...t, status: newStatus }
      }
      return t
    })
    await saveTasksList(updatedList)
  }

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = filterCategory === 'ALL' || task.category === filterCategory
    const matchesPriority = filterPriority === 'ALL' || task.priority === filterPriority
    const matchesAssignee = filterAssignee === 'ALL' || task.assignedTo === filterAssignee

    return matchesSearch && matchesCategory && matchesPriority && matchesAssignee
  })

  // Group by status
  const todoTasks = filteredTasks.filter(t => t.status === 'todo')
  const inProgressTasks = filteredTasks.filter(t => t.status === 'in_progress')
  const completedTasks = filteredTasks.filter(t => t.status === 'completed')

  // Stats
  const totalTasks = filteredTasks.length
  const todoCount = filteredTasks.filter(t => t.status === 'todo').length
  const progressCount = filteredTasks.filter(t => t.status === 'in_progress').length
  const completedCount = filteredTasks.filter(t => t.status === 'completed').length
  const overdueCount = filteredTasks.filter(t => checkOverdue(t.dueDate, t.status)).length

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading font-bold text-2xl text-white flex items-center gap-2">
            <ListTodo className="text-purple-400" />
            Task Manager
          </h1>
          <p className="text-sm text-gray-500 mt-1">Organize, assign, and track workspace operations</p>
        </div>
        <button
          onClick={handleOpenAddModal}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors self-start md:self-auto shadow-lg shadow-purple-600/10"
        >
          <Plus size={16} />
          Create Task
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
        {[
          { label: 'Total Tasks', value: totalTasks, icon: ListTodo, color: 'text-purple-400', border: 'border-purple-500/10' },
          { label: 'To Do', value: todoCount, icon: Clock, color: 'text-gray-400', border: 'border-gray-500/10' },
          { label: 'In Progress', value: progressCount, icon: Clock, color: 'text-blue-400', border: 'border-blue-500/10' },
          { label: 'Completed', value: completedCount, icon: Check, color: 'text-emerald-400', border: 'border-emerald-500/10' },
          { label: 'Overdue', value: overdueCount, icon: AlertCircle, color: overdueCount > 0 ? 'text-red-400 animate-pulse' : 'text-gray-600', border: overdueCount > 0 ? 'border-red-500/20' : 'border-white/[0.04]' },
        ].map((stat, idx) => (
          <div key={idx} className={`p-4 rounded-2xl bg-white/[0.02] border ${stat.border} flex flex-col justify-between h-24`}>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{stat.label}</span>
              <stat.icon size={14} className={stat.color} />
            </div>
            <div className="font-heading font-bold text-2xl text-white mt-2">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-4 top-3.5 text-gray-500" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks by title or details..."
            className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/30 transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
              showFilters 
                ? 'bg-purple-600/10 border-purple-500/30 text-purple-300' 
                : 'bg-white/[0.02] border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <SlidersHorizontal size={15} />
            Filters
            {(filterCategory !== 'ALL' || filterPriority !== 'ALL' || filterAssignee !== 'ALL') && (
              <span className="w-2 h-2 rounded-full bg-purple-500" />
            )}
          </button>
          
          {(filterCategory !== 'ALL' || filterPriority !== 'ALL' || filterAssignee !== 'ALL' || searchQuery) && (
            <button
              onClick={() => {
                setFilterCategory('ALL')
                setFilterPriority('ALL')
                setFilterAssignee('ALL')
                setSearchQuery('')
              }}
              className="text-xs text-purple-400 hover:text-purple-300 font-medium px-2 py-1 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Expanded Filters Drawer */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <div>
                <label className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block mb-1.5">Category</label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500/40"
                >
                  <option value="ALL">All Categories</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block mb-1.5">Priority</label>
                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500/40"
                >
                  <option value="ALL">All Priorities</option>
                  {PRIORITIES.map(p => <option key={p} value={p}>{p.toUpperCase()}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block mb-1.5">Assigned To</label>
                <select
                  value={filterAssignee}
                  onChange={(e) => setFilterAssignee(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500/40"
                >
                  <option value="ALL">All Members</option>
                  {ASSIGNEES.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading State */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500 gap-3">
          <Loader2 size={24} className="animate-spin text-purple-500" />
          <span className="text-sm">Fetching task backlog...</span>
        </div>
      ) : (
        /* Kanban Columns */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* COLUMN: TO DO */}
          <div className="flex flex-col min-h-[500px]">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-sm font-semibold text-white">To Do</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.04] text-gray-400 font-mono">{todoTasks.length}</span>
              </div>
            </div>
            
            <div className="space-y-3 flex-1 rounded-2xl bg-white/[0.01] border border-white/[0.03] p-3 min-h-[450px]">
              <AnimatePresence mode="popLayout">
                {todoTasks.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center text-gray-600 border border-dashed border-white/[0.03] rounded-xl h-full">
                    <span className="text-xs">No pending items</span>
                  </div>
                ) : (
                  todoTasks.map(task => (
                    <TaskCard 
                      key={task.id} 
                      task={task} 
                      onEdit={handleOpenEditModal} 
                      onDelete={handleDeleteTask}
                      onStatusChange={handleStatusChange}
                    />
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* COLUMN: IN PROGRESS */}
          <div className="flex flex-col min-h-[500px]">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-semibold text-white">In Progress</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.04] text-gray-400 font-mono">{inProgressTasks.length}</span>
              </div>
            </div>

            <div className="space-y-3 flex-1 rounded-2xl bg-white/[0.01] border border-white/[0.03] p-3 min-h-[450px]">
              <AnimatePresence mode="popLayout">
                {inProgressTasks.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center text-gray-600 border border-dashed border-white/[0.03] rounded-xl h-full">
                    <span className="text-xs">No active tasks</span>
                  </div>
                ) : (
                  inProgressTasks.map(task => (
                    <TaskCard 
                      key={task.id} 
                      task={task} 
                      onEdit={handleOpenEditModal} 
                      onDelete={handleDeleteTask}
                      onStatusChange={handleStatusChange}
                    />
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* COLUMN: COMPLETED */}
          <div className="flex flex-col min-h-[500px]">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold text-white">Completed</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.04] text-gray-400 font-mono">{completedTasks.length}</span>
              </div>
            </div>

            <div className="space-y-3 flex-1 rounded-2xl bg-white/[0.01] border border-white/[0.03] p-3 min-h-[450px]">
              <AnimatePresence mode="popLayout">
                {completedTasks.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center text-gray-600 border border-dashed border-white/[0.03] rounded-xl h-full">
                    <span className="text-xs">No completed tasks yet</span>
                  </div>
                ) : (
                  completedTasks.map(task => (
                    <TaskCard 
                      key={task.id} 
                      task={task} 
                      onEdit={handleOpenEditModal} 
                      onDelete={handleDeleteTask}
                      onStatusChange={handleStatusChange}
                    />
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      )}

      {/* Add / Edit Task Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl max-w-lg w-full p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <h3 className="font-heading font-bold text-white text-lg">
                  {editingTask ? 'Edit Task Details' : 'Create Task'}
                </h3>
                <p className="text-xs text-gray-500 mt-1">Specify parameters to organize backlog</p>
              </div>

              <form onSubmit={handleSaveTask} className="space-y-4">
                {/* Title */}
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Task Title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Integrate payment gateways"
                    className={inputClass}
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Task Description (Optional)</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide detailed logs or next steps for completion..."
                    rows={3}
                    className={`${inputClass} font-sans resize-y`}
                  />
                </div>

                {/* Grid details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category */}
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className={selectClass}
                    >
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Priority */}
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Priority</label>
                    <select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className={selectClass}
                    >
                      {PRIORITIES.map(p => <option key={p} value={p}>{p.toUpperCase()}</option>)}
                    </select>
                  </div>

                  {/* Assignee */}
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Assignee</label>
                    <select
                      value={assignedTo}
                      onChange={(e) => setAssignedTo(e.target.value as Task['assignedTo'])}
                      className={selectClass}
                    >
                      {ASSIGNEES.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>

                  {/* Due Date */}
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Due Date (Optional)</label>
                    <input
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Action button */}
                <div className="flex gap-3 pt-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-white/[0.08] text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors disabled:opacity-60"
                  >
                    {saving && <Loader2 size={14} className="animate-spin" />}
                    {editingTask ? 'Save Changes' : 'Create Task'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
