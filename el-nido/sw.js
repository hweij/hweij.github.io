//@ts-check

/** @type string */
const version = "0.0.1";

/** @type string */
const MAIN_CACHE_NAME = "el-nido";

let appName = MAIN_CACHE_NAME;

console.log(`[SW] version ${version}`);
console.log(`[SW] cache name: ${appName}`);

// Files to be cached on software update
const cacheFiles = ["./index.html", "./manifest.json", "./bundle.js", "./bundle.css"];

async function reInstall() {
    appName = MAIN_CACHE_NAME;
    const cache = await caches.open(MAIN_CACHE_NAME);
    console.log(`[SW] Caching ${cacheFiles.length} assets`);
    try {
        await cache.addAll(cacheFiles);
        // Special path: el-nido resets app
        const resp = await cache.match("./index.html");
        if (resp) {
            cache.put("el-nido", resp);
        }
    }
    catch (e) {
        console.log(`Error while caching assets:`);
        console.log(e);
    }
    console.log(`[SW] ${(await cache.keys()).length} files in cache`);
}

// Service worker install: create cache
self.addEventListener('install', (/** @type ExtendableEvent */ e) => {
    console.log('[SW] Install');
    self.skipWaiting();
    e.waitUntil((async () => {
        await reInstall();
    })());
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
                // Check if the "magic" url is requested. If so, go back to the main app
                if (e.request.url.endsWith(MAIN_CACHE_NAME)) {
                    // Return to main app
                    appName = MAIN_CACHE_NAME;
                    const match = await caches.match(e.request, { cacheName: appName, ignoreSearch: true });
                    if (match) {
                        return match;
                    }
                    else {
                        return new Response("Not found", { status: 404 });
                    }
                }
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
            event.source?.postMessage({ cmd: "reload" });
            break;
    }
});
