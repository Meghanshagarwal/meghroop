'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Home, FolderOpen, BrainCircuit, Layers, Mail } from 'lucide-react';

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
    if (!el) return;
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
        style={{
          position: 'fixed',
          bottom: '1.1rem',
          left: '50%',
          transform: `translateX(-50%) translateY(${visible ? '0' : 'calc(100% + 1.5rem)'})`,
          zIndex: 9990,
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          width: 'min(calc(100vw - 2rem), 360px)',
        }}
        className="md:hidden"
      >
        {/* Pill container */}
        <div
          style={{
            background: 'rgba(8, 8, 8, 0.82)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            borderRadius: '9999px',
            padding: '0.45rem 0.6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow:
              '0 4px 32px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset, 0 1px 0 rgba(255,255,255,0.06) inset',
          }}
        >
          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                aria-label={label}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.2rem',
                  padding: '0.45rem 0.3rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: isActive
                    ? 'rgba(255,255,255,0.08)'
                    : 'transparent',
                  boxShadow: isActive
                    ? '0 0 16px rgba(167, 139, 250, 0.15), 0 0 0 1px rgba(255,255,255,0.06) inset'
                    : 'none',
                  cursor: 'pointer',
                  transition: 'background 0.25s ease, box-shadow 0.25s ease',
                  position: 'relative',
                  WebkitTapHighlightColor: 'transparent',
                  minWidth: 0,
                }}
              >
                {/* Glow dot above active icon */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
                      boxShadow: '0 0 6px rgba(167,139,250,0.9)',
                    }}
                  />
                )}

                <Icon
                  size={isActive ? 19 : 18}
                  strokeWidth={isActive ? 2 : 1.6}
                  style={{
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.38)',
                    transition: 'color 0.25s ease, transform 0.25s ease',
                    transform: isActive ? 'translateY(1px)' : 'none',
                    flexShrink: 0,
                  }}
                />

                <span
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: '0.02em',
                    color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                    transition: 'color 0.25s ease, font-weight 0.1s ease',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                  }}
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
