const CACHE_NAME = 'chub-v1';
const ASSETS = [
  '/',
  '/manifest.json',
  '/icon-512.png',
  '/prayers',
  '/calendar',
  '/community'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('push', (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/icon-512.png',
    badge: '/icon-512.png'
  });
});
