self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('currency-converter-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/service-worker.js',
        '/your-app-assets/*',  // Add any other assets needed for your app
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
