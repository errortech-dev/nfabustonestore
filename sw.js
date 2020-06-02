/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});


// if ('serviceWorker' in navigator) {
//    try{
//         navigator.serviceWorker.register('sw.js');
//        console.log('SW registered'); 
//    }   catch(error){
//     console.log('SW not registered');
//    }
//     };


// var d = new Date();
// var timestamp = d.getTime();


/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "3optionfunc.js",
    "revision": "338c67269246ed20ea19bc75aa0f7801"
  },
  
  {
    "url": "bootstrap.min.css",
    "revision": "ec3bb52a00e176a7181d454dffaea219"
  },
  {
    "url": "bootstrap.min.js",
    "revision": "c5b5b2fa19bd66ff23211d9f844e0131"
  },
  {
    "url": "html2pdf.bundle.js",
    "revision": "4f85d6a7fa6987d4bbc14367630ea05d"
  },
  {
    "url": "images/unnamed.png",
    "revision": "6b404bd7bfab30bfbc00e4da6d79efb1"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "fcd272505c32bbc5ca6d937cfed535d6"
  },

  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f6e262a9f722d1543d131640a76c326d"
  },

  {
    "url": "images/icons/icon-152x152.png",
    "revision": "7972efdc3a7aa3d5f5fa2d0cc671a68a"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "d35f2e2a8753a3d790b9cd05fbb37614"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "fcbadc79021b4fa1a983c02837c42093"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "6a198b0e2e14447b91dac714175814b2"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "73f85b8cfcdf83bdd25e5878aac65aea"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "22b9994d75fbce534c4b2205a2081158"
  },
  {
    "url": "includesw.js",
    "revision": "cd2a6147acc3db4418f33cae188c40f8"
  },
  {
    "url": "index.html",
    "revision": "bf0195651c3312e1b6a321ca5a403355"
  },
  {
    "url": "index1.html",
    "revision": "fc592e75d7da503e137c196fa1ebf813"
  },
  {
    "url": "index1.html",
    "revision": "fd76fc75e438a31c33a7f11d26984776"
  },
  {
    "url": "jquery-2.2.4.min.js",
    "revision": "2f6b11a7e914718e0290410e85366fe9"
  },
  {
    "url": "manifest.json",
    "revision": "2271e892ba7fc8636c9a851ddb6ba614"
  },
  {
    "url": "offline_bills.html",
    "revision": "74ea6190f52fec8e75116c94af203277"
  },
  {
    "url": "pdf1.html",
    "revision": "22c7b4e61892471ffe08fc7220701e09"
  },

  {
    "url": "practice1.html",
    "revision": "d691ce177077e27630a5a1a72e33dcbe"
  },
  {
    "url": "reprint1.html",
    "revision": "fa7a6d00307e2df4d3bb2569d0f2bb9f"
  },
  {
    "url": "reprint2.html",
    "revision": "c25df0a5346cd291cd7cf08aa8028ea0"
  },
  {
    "url": "unnamed.png",
    "revision": "7e711d8ecc9ca875c56d875cb999560b"
  },
  {
    "url": "unsaved.html",
    "revision": "52a73f897a2d3ba91d5050fe85e7613e"
  },
  {
    "url": "unsaved2.html",
    "revision": "c35e793678b9335ea73bdf217246b574"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});



