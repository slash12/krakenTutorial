// if browser support service worker
// register it
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker register', reg))
        .catch((err) => console.log('service working not registered', err))
}