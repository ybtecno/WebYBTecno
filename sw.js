//Asignar nombre y version de cache
const CACHE_NAME = 'v1_cache_ybtecno_pwa';

//Ficheros a cachear en la aplicacion
var urlsToCache = [
    './',
    './css/estilos.css',
    './img/favicon.png',
    './img/about.png',
    './img/logo.png',
    './img/clients/client-1.png',
    './img/clients/client-2.png',
    './img/clients/client-3.png',
    './img/clients/client-4.png',
    './img/clients/client-5.png',
    './img/fondo/fondoInsta.png',
    './img/fondoBotones/bg-talleres.jpg',
    './img/fondoBotones/call-to-action-bg.jpg',
    './img/fondoBotones/fondo6.jpg',
    './img/iconos/ic_equipos02.png',
    './img/iconos/ic_mobile.png',
    './img/iconos/soporte.png',
    './img/iconos/web.png',
    './img/logo/02.png',
    './img/logo/logo18d.png',
    './img/nosotros/about-img.jpg',
    './img/nosotros/advanced-feature-1.jpg',
    './img/nosotros/advanced-feature-2.jpg',
    './img/nosotros/advanced-feature-3.jpg',
    './img/nosotros/advanced-feature-4.jpg',
    './img/nosotros/advanced-feature-5.jpg',
    './img/apple-touch-icon.png',
    './img/fraseFord.jpg',
    './img/ionicons_svg_md-checkmark-circle-outline.svg',
    './img/favicon-1024.png',
    './img/favicon-512.png',
    './img/favicon-384.png',
    './img/favicon-256.png',
    './img/favicon-192.png',
    './img/favicon-128.png',
    './img/favicon-96.png',
    './img/favicon-64.png',
    './img/favicon-32.png',
    './img/favicon-16.png',
];

//Evento Install
//Instalacion del service worker y guardar en cache los recursos estaticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
              .then(cache => {
                  return cache.addAll(urlsToCache)
                              .then(() => {
                                  self.skipWaiting();
                              });              
              })
              .catch(err => console.log('No se ha registrado el cache', err))
    );
});

//Evento Activate
//Que la app funcione sin conexion
self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
              .then(cacheNames => {
                  return Promise.all(
                      cacheNames.map(cacheName => {

                          if(cacheWhitelist.indexOf(cacheName) === -1){
                                //Borrar elemntos que no se necesitan
                                return caches.delete(cacheName);
                          }
                      })
                  );
              })
              .then(() => {
                  //Activar cache
                  self.clients.claim();
              })
    );
});

//Evento fetch
self.addEventListener('fetch', e => {

    e.respondWith(
        caches.match(e.request)
              .then(res => {
                  if(res){
                      //Devuelvo datos desde cache
                      return res;
                  }
                  return fetch(e.request);
              })
    );
//Asignar nombre y version de cache
const CACHE_NAME = 'v1_cache_ybtecno_pwa';

//Ficheros a cachear en la aplicacion
var urlsToCache = [
    './',
    './sass/estilos.css',
    './img/favicon.png',
    './img/about.png',
    './img/logo.png',
    './img/clients/client-1.png',
    './img/clients/client-2.png',
    './img/clients/client-3.png',
    './img/clients/client-4.png',
    './img/clients/client-5.png',
    './img/fondo/fondoInsta.png',
    './img/fondoBotones/bg-talleres.jpg',
    './img/fondoBotones/call-to-action-bg.jpg',
    './img/fondoBotones/fondo6.jpg',
    './img/iconos/ic_equipos02.png',
    './img/iconos/ic_mobile.png',
    './img/iconos/soporte.png',
    './img/iconos/web.png',
    './img/logo/02.png',
    './img/logo/logo18d.png',
    './img/nosotros/about-img.jpg',
    './img/nosotros/advanced-feature-1.jpg',
    './img/nosotros/advanced-feature-2.jpg',
    './img/nosotros/advanced-feature-3.jpg',
    './img/nosotros/advanced-feature-4.jpg',
    './img/nosotros/advanced-feature-5.jpg',
    './img/apple-touch-icon.png',
    './img/fraseFord.jpg',
    './img/ionicons_svg_md-checkmark-circle-outline.svg',
    './img/favicon-1024.png',
    './img/favicon-512.png',
    './img/favicon-384.png',
    './img/favicon-256.png',
    './img/favicon-192.png',
    './img/favicon-128.png',
    './img/favicon-96.png',
    './img/favicon-64.png',
    './img/favicon-32.png',
    './img/favicon-16.png',
];

//Evento Install
//Instalacion del service worker y guardar en cache los recursos estaticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
              .then(cache => {
                  return cache.addAll(urlsToCache)
                              .then(() => {
                                  self.skipWaiting();
                              });              
              })
              .catch(err => console.log('No se ha registrado el cache', err))
    );
});

//Evento Activate
//Que la app funcione sin conexion
self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
              .then(cacheNames => {
                  return Promise.all(
                      cacheNames.map(cacheName => {

                          if(cacheWhitelist.indexOf(cacheName) === -1){
                                //Borrar elemntos que no se necesitan
                                return caches.delete(cacheName);
                          }
                      })
                  );
              })
              .then(() => {
                  //Activar cache
                  self.clients.claim();
              })
    );
});

//Evento fetch
self.addEventListener('fetch', e => {

    e.respondWith(
        caches.match(e.request)
              .then(res => {
                  if(res){
                      //Devuelvo datos desde cache
                      return res;
                  }
                  return fetch(e.request);
              })
    );
});