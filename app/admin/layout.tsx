'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, FolderKanban, Settings, LogOut, ExternalLink } from 'lucide-react'

const navLinks = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/projects', label: 'Projects', icon: FolderKanban },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  // Don't render shell on login page
  if (pathname === '/admin') return <>{children}</>

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-[#080808] flex">
      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 border-r border-white/[0.06] flex flex-col fixed top-0 left-0 h-full z-30">
        <div className="px-5 py-5 border-b border-white/[0.06]">
          <span className="font-heading font-bold text-white text-sm">MeghRoop</span>
          <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-purple-600/20 text-purple-400 border border-purple-500/20">
            Admin
          </span>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
                    : 'text-gray-500 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="px-3 py-4 border-t border-white/[0.06] space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <ExternalLink size={16} />
            View Site
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:text-red-400 hover:bg-red-500/[0.06] transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-56 min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
