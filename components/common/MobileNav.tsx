'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, BrainCircuit, Layers, BookOpen, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { id: 'home',       label: 'Home',     href: '/',            Icon: Home },
  { id: 'about',      label: 'About',    href: '/about',       Icon: User },
  { id: 'agentic-ai', label: 'AI',       href: '/agentic-ai',  Icon: BrainCircuit },
  { id: 'systems',    label: 'Systems',  href: '/systems',     Icon: Layers },
  { id: 'journal',    label: 'Journal',  href: '/journal',     Icon: BookOpen },
  { id: 'contact',    label: 'Contact',  href: '/contact',     Icon: Mail },
] as const;

type NavId = (typeof NAV_ITEMS)[number]['id'];

export default function MobileNav() {
  const pathname = usePathname();
  const [active, setActive] = useState<NavId>('home');
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Hide mobile nav on all admin routes
  if (pathname?.startsWith('/admin')) return null;

  // Scroll spy + hide-on-scroll-down (active only on Homepage)
  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const y = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      const delta = y - lastY.current;
      if (delta > 40) {
        setVisible(false);
      } else if (delta < -10) {
        setVisible(true);
      }
      lastY.current = y;

      // Section spy only triggers when we are on the homepage
      if (pathname === '/') {
        const spyItems = NAV_ITEMS.filter(item => item.href.startsWith('/#') || item.href === '/');
        const offsets = spyItems.map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return { id, top: Infinity };
          return { id, top: Math.abs(el.getBoundingClientRect().top - 120) };
        });
        const nearest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
        if (nearest.top !== Infinity) {
          setActive(nearest.id as NavId);
        }
      }

      ticking.current = false;
    });
  }, [pathname]);

  // Sync scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Route & Hash detection
  useEffect(() => {
    if (pathname !== '/') {
      // Highlight exact matching subpage routes
      const matchingItem = NAV_ITEMS.find(item => item.href === pathname);
      if (matchingItem) {
        setActive(matchingItem.id);
      }
    } else {
      // Run scrollspy immediately when returning to the homepage
      handleScroll();
    }
  }, [pathname, handleScroll]);

  // Smooth scroll intercept for anchors when already on homepage
  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof NAV_ITEMS[number]) => {
    if (pathname === '/' && item.href.startsWith('/#')) {
      e.preventDefault();
      const el = document.getElementById(item.id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
        setActive(item.id);
        setVisible(true);
      }
    }
  };

  // Cross-page anchor smooth scroll after page transition
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const el = document.getElementById(hash);
      if (el) {
        const timer = setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  return (
    <>
      {/* Bottom padding spacer for content clearance */}
      <div className="md:hidden h-24" aria-hidden="true" />

      <nav
        ref={navRef}
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-[1.1rem] left-1/2 -translate-x-1/2 z-[9990] transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] w-[min(calc(100vw-1.5rem),380px)]"
        style={{
          transform: `translateX(-50%) translateY(${visible ? '0' : 'calc(100% + 1.5rem)'})`,
        }}
      >
        {/* Pill glass container */}
        <div className="bg-[#080808]/82 backdrop-blur-[28px] border border-white/[0.07] rounded-full py-[0.45rem] px-[0.6rem] flex items-center justify-between shadow-[0_4px_32px_rgba(0,0,0,0.7),_inset_0_0_0_1px_rgba(255,255,255,0.03),_inset_0_1px_0_rgba(255,255,255,0.06)]">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleItemClick(e, item)}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'flex-1 flex flex-col items-center justify-center gap-[0.2rem] py-[0.45rem] px-[0.2rem] rounded-full border-none cursor-pointer relative min-w-0 transition-all duration-200 [-webkit-tap-highlight-color:transparent] text-decoration-none',
                  isActive
                    ? 'bg-white/[0.08] shadow-[0_0_16px_rgba(167,139,250,0.15),_inset_0_0_0_1px_rgba(255,255,255,0.06)]'
                    : 'bg-transparent shadow-none'
                )}
              >
                {/* Glow active dot indicator */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-gradient-to-br from-[#a78bfa] to-[#60a5fa] shadow-[0_0_6px_rgba(167,139,250,0.9)]"
                  />
                )}

                <item.Icon
                  size={isActive ? 19 : 18}
                  strokeWidth={isActive ? 2 : 1.6}
                  className={cn(
                    'shrink-0 transition-all duration-[250ms] ease-out',
                    isActive ? 'text-white translate-y-[1px]' : 'text-white/38 translate-y-0'
                  )}
                />

                <span
                  className={cn(
                    'text-[0.58rem] tracking-[0.02em] leading-none whitespace-nowrap transition-all duration-[250ms] ease-out',
                    isActive ? 'font-semibold text-white/90' : 'font-normal text-white/30'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
