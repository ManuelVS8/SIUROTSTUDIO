// Service Worker mínimo — solo para permitir la instalación como PWA.
// No cachea nada: la app siempre se sirve online, sin funcionamiento offline.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// Sin evento 'fetch': todas las peticiones van directas a la red,
// tal como si el service worker no existiera.
