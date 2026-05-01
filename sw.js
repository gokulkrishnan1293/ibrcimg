const CACHE_NAME = 'sports-heroes-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  // You can also cache the GitHub sprite sheets for true offline support
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch1.png'
  // Add batch2.png, batch3.png, etc., here if you want them cached offline
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});