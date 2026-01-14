const CACHE_NAME = "transit-pass-v1";
const FILES_TO_CACHE = [
    "index.html",
    "style.css",
    "script.js",
    "manifest.json",
    "bus.png",
    "ic_home.png",
    "ic_parking.png",
    "ic_bus.png",
    "ic_id.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
