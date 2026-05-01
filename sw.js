const CACHE_NAME = 'sports-heroes-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg', // <-- Updated this line
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch1.png',
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch2.png',
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch3.png',
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch4.png',
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch5.png',
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch6.png',
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch7.png',
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch8.png',
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch9.png',
  'https://raw.githubusercontent.com/gokulkrishnan1293/ibrcimg/main/batch10.png'
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