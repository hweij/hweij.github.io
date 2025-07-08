//@ts-check

/** @type string */
const version = "0.0.1";

/** @type string */
const MAIN_CACHE_NAME = "el-nido";

/** Index page of the main app: when loaded we switch back to the main cache */
const MAIN_INDEX_PAGE = MAIN_CACHE_NAME + ".html";

let appName = MAIN_CACHE_NAME;

console.log(`[SW] version ${version}`);
console.log(`[SW] cache name: ${appName}`);


// Service worker install: create cache
self.addEventListener('install', async (/** @type ExtendableEvent */ e) => {
    console.log('[SW] Install');
    await self.skipWaiting();
});

self.addEventListener('activate', (/** @type ExtendableEvent */ event) => {
    console.log('[SW] Activate');
    event.waitUntil(clients.claim());
});

// Fetching content using Service Worker
self.addEventListener('fetch',
    /** @param {FetchEvent} e */
    (e) => {
        // Cache http and https only, skip unsupported chrome-extension:// and file://...
        if (!(e.request.url.startsWith('http:') || e.request.url.startsWith('https:'))) {
            return;
        }

        console.log(`Fetch for app ${appName}`);
        console.log(e.request.url);

        e.respondWith((async () => {
            // Check if the "magic" url is requested. If so, go back to the main app
            if (e.request.url.endsWith(MAIN_INDEX_PAGE) && (appName !== MAIN_CACHE_NAME)) {
                // Return to main app
                appName = MAIN_CACHE_NAME;
            }

            const r = await caches.match(e.request, { cacheName: appName, ignoreSearch: true });
            if (r) {
                console.log(`[SW] Fetch from cache: ${e.request.url}`);
                console.log(r);
                return r;
            }
            // Try to load from site if it is the main app
            if (appName === MAIN_CACHE_NAME) {
                const response = await fetch(e.request);
                if (response.ok) {
                    const cache = await caches.open(appName);
                    console.log(`[SW] Fetch from site: ${e.request.url}`);
                    cache.put(e.request, response.clone());
                }
                else {
                    console.error(`[SW] Fetch from site failed: ${response.status} - ${response.statusText}`);
                }
                return response;
            }
            else {
                console.error(`Cannot find url ${e.request.url} for app ${appName}`);
            }
            return new Response("Not found", { status: 404 });
        })());
    });

/** Handle messages from main */
addEventListener("message", (event) => {
    console.log(`Message: ${JSON.stringify(event.data)}`);
    const cmd = event.data.cmd;
    switch (cmd) {
        case "launch":
            appName = event.data.app;
            console.log(`Set app name to ${appName}`);
            // Navigate to index.html of the selected app
            event.source?.postMessage({ cmd: "index" });
            break;
    }
});
