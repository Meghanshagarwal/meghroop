'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Trash2, 
  Loader2, 
  X, 
  Search, 
  SlidersHorizontal,
  FolderOpen,
  FileText,
  FileImage,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  File,
  Download,
  AlertCircle,
  UploadCloud,
  CheckCircle2
} from 'lucide-react'

interface DocumentFile {
  id: string
  name: string
  fileType: string
  fileSize: number
  storagePath: string
  category: string
  notes?: string
  uploadedAt: string
}

const CATEGORIES = [
  'Contracts',
  'Legal',
  'Finance',
  'Company Info',
  'Marketing',
  'Other'
]

const inputClass =
  'w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-[#1a1a1a] transition-all'

const selectClass =
  'w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all cursor-pointer'

// Helper to format file size
const formatSize = (bytes: number) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

// Helper to determine icon based on file type
const getFileIcon = (type: string) => {
  const t = type.toLowerCase()
  if (t.includes('pdf')) {
    return <FileText className="text-red-400" size={28} />
  }
  if (t.includes('image') || t.includes('png') || t.includes('jpeg') || t.includes('jpg') || t.includes('gif') || t.includes('svg') || t.includes('webp')) {
    return <FileImage className="text-blue-400" size={28} />
  }
  if (t.includes('spreadsheet') || t.includes('excel') || t.includes('sheet') || t.includes('csv') || t.includes('xls') || t.includes('xlsx')) {
    return <FileSpreadsheet className="text-emerald-400" size={28} />
  }
  if (t.includes('zip') || t.includes('archive') || t.includes('rar') || t.includes('tar') || t.includes('gzip')) {
    return <FileArchive className="text-amber-400" size={28} />
  }
  if (t.includes('json') || t.includes('javascript') || t.includes('typescript') || t.includes('html') || t.includes('css') || t.includes('code') || t.includes('python')) {
    return <FileCode className="text-purple-400" size={28} />
  }
  return <File className="text-gray-400" size={28} />
}

export default function DocumentVaultPage() {
  const [documents, setDocuments] = useState<DocumentFile[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('ALL')
  const [showFilters, setShowFilters] = useState(false)

  // Upload state
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadCategory, setUploadCategory] = useState('Contracts')
  const [uploadNotes, setUploadNotes] = useState('')
  const [uploadError, setUploadError] = useState('')
  const [dragActive, setDragActive] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const loadDocuments = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/documents')
      const data = await res.json()
      setDocuments(Array.isArray(data) ? data : [])
    } catch {
      setDocuments([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadDocuments()
  }, [loadDocuments])

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.size > 52428800) {
        setUploadError('File exceeds maximum upload limit of 50MB')
        return
      }
      setSelectedFile(file)
      setUploadError('')
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.size > 52428800) {
        setUploadError('File exceeds maximum upload limit of 50MB')
        return
      }
      setSelectedFile(file)
      setUploadError('')
    }
  }

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) {
      setUploadError('Please select a file to upload')
      return
    }

    setUploading(true)
    setUploadError('')

    const formData = new FormData()
    formData.append('file', selectedFile)
    formData.append('category', uploadCategory)
    if (uploadNotes.trim()) {
      formData.append('notes', uploadNotes.trim())
    }

    try {
      const res = await fetch('/api/admin/documents', {
        method: 'POST',
        body: formData
      })
      const result = await res.json()

      if (res.ok) {
        setDocuments(prev => [...prev, result.document])
        setSelectedFile(null)
        setUploadNotes('')
        setUploadCategory('Contracts')
        setUploadModalOpen(false)
      } else {
        setUploadError(result.error || 'Upload failed')
      }
    } catch {
      setUploadError('An error occurred during upload')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to permanently delete this document?')) return
    setDeletingId(id)

    try {
      const res = await fetch(`/api/admin/documents?id=${id}`, {
        method: 'DELETE'
      })
      if (res.ok) {
        setDocuments(prev => prev.filter(d => d.id !== id))
      }
    } catch (err) {
      console.error('Failed to delete document:', err)
    } finally {
      setDeletingId(null)
    }
  }

  // Filter logic
  const filteredDocs = documents.filter(doc => {
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.notes && doc.notes.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = filterCategory === 'ALL' || doc.category === filterCategory

    return matchesSearch && matchesCategory
  })

  // Statistics
  const totalSize = documents.reduce((acc, doc) => acc + doc.fileSize, 0)
  const categoryCounts = documents.reduce<Record<string, number>>((acc, doc) => {
    acc[doc.category] = (acc[doc.category] || 0) + 1
    return acc
  }, {})

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading font-bold text-2xl text-white flex items-center gap-2">
            <FolderOpen className="text-purple-400" />
            Document Vault
          </h1>
          <p className="text-sm text-gray-500 mt-1">Secure repository for administrative, legal, and operational documents</p>
        </div>
        <button
          onClick={() => {
            setSelectedFile(null)
            setUploadNotes('')
            setUploadError('')
            setUploadModalOpen(true)
          }}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors self-start md:self-auto shadow-lg shadow-purple-600/10"
        >
          <Plus size={16} />
          Upload Document
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between">
          <span className="text-xs text-gray-500">Total Documents</span>
          <span className="font-heading font-bold text-2xl text-white mt-2">{documents.length}</span>
        </div>
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between">
          <span className="text-xs text-gray-500">Vault Size Used</span>
          <span className="font-heading font-bold text-2xl text-white mt-2">{formatSize(totalSize)}</span>
        </div>
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between">
          <span className="text-xs text-gray-500">Contracts &amp; Legal</span>
          <span className="font-heading font-bold text-2xl text-white mt-2">
            {(categoryCounts['Contracts'] || 0) + (categoryCounts['Legal'] || 0)}
          </span>
        </div>
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between">
          <span className="text-xs text-gray-500">Finance Files</span>
          <span className="font-heading font-bold text-2xl text-white mt-2">
            {categoryCounts['Finance'] || 0}
          </span>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-4 top-3.5 text-gray-500" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documents by filename or descriptions..."
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
            {filterCategory !== 'ALL' && <span className="w-2 h-2 rounded-full bg-purple-500" />}
          </button>
          
          {(filterCategory !== 'ALL' || searchQuery) && (
            <button
              onClick={() => {
                setFilterCategory('ALL')
                setSearchQuery('')
              }}
              className="text-xs text-purple-400 hover:text-purple-300 font-medium px-2 py-1 transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Filters Drawer */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <label className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block mb-2">Category Filter</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterCategory('ALL')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    filterCategory === 'ALL'
                      ? 'bg-purple-600/20 border-purple-500/30 text-purple-300'
                      : 'bg-transparent border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  All Categories
                </button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      filterCategory === cat
                        ? 'bg-purple-600/20 border-purple-500/30 text-purple-300'
                        : 'bg-transparent border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading state */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500 gap-3">
          <Loader2 size={24} className="animate-spin text-purple-500" />
          <span className="text-sm">Fetching document indexes...</span>
        </div>
      ) : filteredDocs.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-white/[0.06] rounded-2xl">
          <FolderOpen size={40} className="mx-auto mb-4 text-gray-700" />
          <h3 className="text-white font-heading font-semibold text-sm mb-1">No documents found</h3>
          <p className="text-gray-500 text-xs mb-6">Start uploading contract sheets, legal papers, and backups</p>
          <button 
            onClick={() => setUploadModalOpen(true)}
            className="text-xs px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
          >
            Upload your first file
          </button>
        </div>
      ) : (
        /* Documents Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredDocs.map(doc => (
              <motion.div
                key={doc.id}
                layoutId={doc.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & Metadata */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                      {getFileIcon(doc.fileType)}
                    </div>
                    
                    <span className="text-[9px] font-semibold tracking-wider uppercase bg-white/[0.03] border border-white/[0.06] text-gray-400 px-2 py-0.5 rounded-full">
                      {doc.category}
                    </span>
                  </div>

                  {/* Name & Notes */}
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="text-sm font-semibold text-white truncate font-heading group-hover:text-purple-300 transition-colors" title={doc.name}>
                      {doc.name}
                    </h3>
                    <p className="text-[10px] font-mono text-gray-500">
                      {formatSize(doc.fileSize)} • {new Date(doc.uploadedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                    {doc.notes && (
                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 pt-1 border-t border-white/[0.02]">
                        {doc.notes}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card footer actions */}
                <div className="flex items-center gap-2 mt-5 pt-3 border-t border-white/[0.04]">
                  <a
                    href={`/api/admin/documents/download?id=${doc.id}`}
                    download
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-purple-600 border border-white/[0.08] hover:border-purple-500 text-xs font-semibold text-white transition-all"
                  >
                    <Download size={12} />
                    Download
                  </a>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    disabled={deletingId === doc.id}
                    className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-red-500/10 hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all flex items-center justify-center flex-shrink-0"
                    title="Delete document"
                  >
                    {deletingId === doc.id ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : (
                      <Trash2 size={13} />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Upload File Modal */}
      <AnimatePresence>
        {uploadModalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl max-w-lg w-full p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setUploadModalOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <h3 className="font-heading font-bold text-white text-lg">Upload New Document</h3>
                <p className="text-xs text-gray-500 mt-1">Add legal sheets, sheets, or backups securely</p>
              </div>

              <form onSubmit={handleUploadSubmit} className="space-y-4">
                {/* Drag and Drop Area */}
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 ${
                    dragActive 
                      ? 'border-purple-500 bg-purple-500/[0.04]' 
                      : selectedFile
                        ? 'border-emerald-500/40 bg-emerald-500/[0.01]'
                        : 'border-white/[0.08] bg-white/[0.01] hover:border-purple-500/40 hover:bg-white/[0.02]'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {selectedFile ? (
                    <>
                      <CheckCircle2 size={32} className="text-emerald-400" />
                      <span className="text-sm font-semibold text-white truncate max-w-xs">{selectedFile.name}</span>
                      <span className="text-xs text-gray-500 font-mono">{formatSize(selectedFile.size)}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedFile(null)
                        }}
                        className="text-xs text-red-400 hover:text-red-300 font-medium mt-1 underline"
                      >
                        Remove file
                      </button>
                    </>
                  ) : (
                    <>
                      <UploadCloud size={32} className="text-gray-500" />
                      <span className="text-sm font-semibold text-white">Drag &amp; drop file here, or click to browse</span>
                      <span className="text-xs text-gray-500">Supports PDF, PNG, JPG, XLSX, ZIP, TXT (Max 50MB)</span>
                    </>
                  )}
                </div>

                {uploadError && (
                  <div className="p-3.5 rounded-xl border border-red-500/10 bg-red-500/5 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle size={14} className="flex-shrink-0" />
                    <span>{uploadError}</span>
                  </div>
                )}

                {/* Category Selection */}
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Document Category</label>
                  <select
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value)}
                    className={selectClass}
                  >
                    {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>

                {/* Notes/Description */}
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Description / Notes (Optional)</label>
                  <textarea
                    value={uploadNotes}
                    onChange={(e) => setUploadNotes(e.target.value)}
                    placeholder="Enter document summaries, references, or billing terms..."
                    rows={3}
                    className={`${inputClass} font-sans resize-y`}
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setUploadModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-white/[0.08] text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={uploading || !selectedFile}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors disabled:opacity-60 shadow-lg shadow-purple-600/10"
                  >
                    {uploading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Uploading…
                      </>
                    ) : (
                      'Upload Vault'
                    )}
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
