// cache name
const staticCache = 'site-static-v6 ';
const dynamicCache = 'site-dynamic-v10';

const assets = [
    '/',
    '/pages/fallback.html',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2'
];

// indicate when a service worker is installed
self.addEventListener('install', evt => {
    // create a new cache and wait untill all caches are cached
    evt.waitUntil(caches.open(staticCache)
        .then(cache => {            
            // items to cache
            cache.addAll(assets);
        })
    )
});

// listen to service worker activation
self.addEventListener('activate', evt => {
    // delete old cache
    evt.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(keys
                    .filter(key => key !== staticCache)
                    .map(key => caches.delete(key))
                )
            })
    )
});

// fetch event
self.addEventListener('fetch', evt => {
    if (evt.request.url.indexOf('firestore.googleapis.com') === -1){
        // pause fetch and return our custom event
    evt.respondWith(
        caches.match(evt.request)
            .then(
                cacheRes => {
                    return cacheRes || fetch(evt.request).then(fetchRes => {
                        return caches.open(dynamicCache)
                                .then(cache => {
                                    cache.put(evt.request.url, fetchRes.clone())                                    
                                    return fetchRes
                                })
                    });
                }
            ).catch(
                () => {
                    // conditional fallback for image and html
                    if (evt.request.url.indexOf('.html') > -1) {
                        return caches.match('/pages/fallback.html')
                    }
                }
                    
            )
        )
    }
});