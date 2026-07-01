import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work — Case Studies & Results',
  description:
    'Real work, real results. Growth, AI, software, and branding case studies from MeghRoop — with the numbers to back them.',
  alternates: { canonical: '/work' },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
