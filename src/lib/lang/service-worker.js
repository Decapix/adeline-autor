// /lang/service-worker.js
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
  
    if (url.pathname.startsWith('/lang/')) {
      event.respondWith(
        caches.match(event.request)
          .then(response => {
            return response || fetch(event.request)
              .then(response => {
                const responseClone = response.clone();
                caches.open('translations').then(cache => {
                  cache.put(event.request, responseClone);
                });
                return response;
              });
          })
      );
    }
  });
  