var CACHE_NAME = 'liamdebeasi-cache';
var urlsToCache = [
    './',
    './js/min/app.min.js',
    './css/app.min.css',
    './pages/ab.html',
    './pages/aia.html',
    './pages/dm.html',
    './pages/ghost.html',
    './pages/lotus.html',
    './pages/pp.html',
    './pages/recommendr.html',
    './pages/ssa.html',
]

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
               console.log('Opened cache');
               return cache.addAll(urlsToCache); 
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }  
                return fetch(event.request);
            }
        )
    );
});