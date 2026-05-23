'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Home, FolderOpen, BrainCircuit, Layers, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { id: 'home',     label: 'Home',     Icon: Home },
  { id: 'projects', label: 'Projects', Icon: FolderOpen },
  { id: 'agentic-ai', label: 'AI',     Icon: BrainCircuit },
  { id: 'services', label: 'Services', Icon: Layers },
  { id: 'contact',  label: 'Contact',  Icon: Mail },
] as const;

type NavId = (typeof NAV_ITEMS)[number]['id'];

export default function MobileNav() {
  const [active, setActive]   = useState<NavId>('home');
  const [visible, setVisible] = useState(true);
  const lastY    = useRef(0);
  const ticking  = useRef(false);
  const navRef   = useRef<HTMLDivElement>(null);

  // Scroll spy + hide-on-scroll-down
  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const y = window.scrollY;

      // Hide when scrolling down fast, show when scrolling up
      const delta = y - lastY.current;
      if (delta > 40)       setVisible(false);
      else if (delta < -10) setVisible(true);
      lastY.current = y;

      // Section spy
      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 80) };
      });
      const nearest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(nearest.id as NavId);

      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: NavId) => {
    const el = document.getElementById(id);
    if (!el) {
      window.location.href = `/#${id}`;
      return;
    }
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
    setActive(id);
    setVisible(true);
  };

  return (
    <>
      {/* Spacer so page content isn't hidden behind the bar */}
      <div className="md:hidden h-24" aria-hidden="true" />

      <nav
        ref={navRef}
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-[1.1rem] left-1/2 -translate-x-1/2 z-[9990] transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] w-[min(calc(100vw-2rem),360px)]"
        style={{
          transform: `translateX(-50%) translateY(${visible ? '0' : 'calc(100% + 1.5rem)'})`,
        }}
      >
        {/* Pill container */}
        <div className="bg-[#080808]/82 backdrop-blur-[28px] border border-white/[0.07] rounded-full py-[0.45rem] px-[0.6rem] flex items-center justify-between shadow-[0_4px_32px_rgba(0,0,0,0.7),_inset_0_0_0_1px_rgba(255,255,255,0.03),_inset_0_1px_0_rgba(255,255,255,0.06)]">
          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                aria-label={label}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'flex-1 flex flex-col items-center justify-center gap-[0.2rem] py-[0.45rem] px-[0.3rem] rounded-full border-none cursor-pointer relative min-w-0 transition-all duration-200 [-webkit-tap-highlight-color:transparent]',
                  isActive
                    ? 'bg-white/[0.08] shadow-[0_0_16px_rgba(167,139,250,0.15),_inset_0_0_0_1px_rgba(255,255,255,0.06)]'
                    : 'bg-transparent shadow-none'
                )}
              >
                {/* Glow dot above active icon */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-gradient-to-br from-[#a78bfa] to-[#60a5fa] shadow-[0_0_6px_rgba(167,139,250,0.9)]"
                  />
                )}

                <Icon
                  size={isActive ? 19 : 18}
                  strokeWidth={isActive ? 2 : 1.6}
                  className={cn(
                    'shrink-0 transition-all duration-[250ms] ease-out',
                    isActive ? 'text-white translate-y-[1px]' : 'text-white/38 translate-y-0'
                  )}
                />

                <span
                  className={cn(
                    'text-[0.6rem] tracking-[0.02em] leading-none whitespace-nowrap transition-all duration-[250ms] ease-out',
                    isActive ? 'font-semibold text-white/90' : 'font-normal text-white/30'
                  )}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
