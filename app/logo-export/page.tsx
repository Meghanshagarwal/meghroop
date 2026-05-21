import type { Metadata } from 'next'
import MeghRoopLogo from '@/components/common/MeghRoopLogo'

export const metadata: Metadata = { robots: { index: false, follow: false } }

export default function LogoExport({ searchParams }: { searchParams: { v?: string } }) {
  const variant = (searchParams.v as 'primary' | 'navbar' | 'monochrome' | 'dark' | 'favicon') || 'primary'

  return (
    <div
      style={{
        width: 800,
        height: 200,
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <MeghRoopLogo variant={variant} />
    </div>
  )
}
