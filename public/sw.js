const CACHE_NAME = 'meghroop-v1';
const OFFLINE_URL = '/offline';

const PRECACHE_URLS = [
  '/',
  '/offline',
  '/manifest.json',
  '/favicon.svg',
  '/favicon-512.png',
  '/icon-192.png',
  '/icon-512-maskable.png',
  '/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Network-first for HTML (pages), stale-while-revalidate for assets
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return res;
        })
        .catch(() =>
          caches.match(event.request).then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // Cache-first for static assets
  if (url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|woff2?|css|js)$/)) {
    event.respondWith(
      caches.match(event.request).then(
        (cached) =>
          cached ||
          fetch(event.request).then((res) => {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            return res;
          })
      )
    );
  }
});
