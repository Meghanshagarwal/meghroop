declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    clarity?: (method: string, ...args: unknown[]) => void
  }
}

export function gtagEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params)
  }
}

export function metaEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params)
  }
}

export function clarityEvent(name: string) {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('event', name)
  }
}

// Fire the same event across all three platforms at once
export function trackEvent(
  ga4Name: string,
  metaName?: string,
  params?: Record<string, unknown>
) {
  gtagEvent(ga4Name, params)
  clarityEvent(ga4Name)
  if (metaName) metaEvent(metaName, params)
}
