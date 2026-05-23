'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Don't show if already installed or dismissed
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      sessionStorage.getItem('pwa-install-dismissed')
    ) {
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Small delay so it doesn't feel intrusive on first load
      setTimeout(() => setVisible(true), 8000);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setVisible(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem('pwa-install-dismissed', '1');
  };

  if (!visible || dismissed) return null;

  return (
    <div
      role="dialog"
      aria-label="Install MeghRoop app"
      className="fixed bottom-[1.25rem] left-1/2 -translate-x-1/2 z-[9999] w-[min(calc(100vw-2rem),380px)] bg-[#121212]/96 backdrop-blur-[20px] border border-white/10 rounded-2xl py-4 px-5 flex items-center gap-[0.875rem] shadow-[0_8px_32px_rgba(0,0,0,0.5)] animate-[pwa-slide-up_0.3s_ease]"
    >
      <style>{`
        @keyframes pwa-slide-up {
          from { opacity: 0; transform: translateX(-50%) translateY(12px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      {/* Icon */}
      <Image
        src="/icon-96.png"
        alt="MeghRoop"
        width={44}
        height={44}
        className="rounded-[10px] shrink-0"
      />

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="m-0 text-sm font-semibold text-white">
          Add to Home Screen
        </p>
        <p className="mt-[0.15rem] mx-0 mb-0 text-xs text-white/45">
          MeghRoop — works offline too
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 shrink-0">
        <button
          onClick={handleDismiss}
          aria-label="Not now (dismiss install prompt)"
          className="bg-transparent border border-white/15 text-white/50 py-[0.4rem] px-[0.75rem] rounded-lg text-[0.8rem] cursor-pointer hover:bg-white/[0.04] hover:text-white transition-colors"
        >
          Not now
        </button>
        <button
          onClick={handleInstall}
          className="bg-white text-black border-none py-[0.4rem] px-[0.875rem] rounded-lg text-[0.8rem] font-semibold cursor-pointer hover:bg-gray-100 transition-colors"
        >
          Install
        </button>
      </div>
    </div>
  );
}
