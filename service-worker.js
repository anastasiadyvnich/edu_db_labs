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

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "328df148a3773f1a31a4e68994da2605"
  },
  {
    "url": "assets/css/0.styles.0e825d0f.css",
    "revision": "9b40bbb0cee0057bce82577a5e50eb89"
  },
  {
    "url": "assets/img/create_1.165aa8c3.png",
    "revision": "165aa8c38c11417c42f7da9aa5232c10"
  },
  {
    "url": "assets/img/create_2.3c015d14.png",
    "revision": "3c015d1406f28c9a132ecf31380a164b"
  },
  {
    "url": "assets/img/delete_1.2c352521.png",
    "revision": "2c352521d7f0fa584ed27ccacc1c7ead"
  },
  {
    "url": "assets/img/delete_2.82894dfe.png",
    "revision": "82894dfe8bf8c88dbf7a6b3146ae331e"
  },
  {
    "url": "assets/img/getid.9ebc27d1.png",
    "revision": "9ebc27d12be4c1c67d7cd3309a29db2b"
  },
  {
    "url": "assets/img/getusers.4923449b.png",
    "revision": "4923449bac0a5e7732f48259828a4441"
  },
  {
    "url": "assets/img/put_1.16a2d81e.png",
    "revision": "16a2d81edd35b08f4d5eb842812fc613"
  },
  {
    "url": "assets/img/put_2.844e50d4.png",
    "revision": "844e50d4a100debe98f6abf627e42247"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/server.a1bbb798.png",
    "revision": "a1bbb798ff42ea95dfc3fe9056bddbeb"
  },
  {
    "url": "assets/js/10.d4f8710e.js",
    "revision": "6b404db6909321274b8c0766fcab0286"
  },
  {
    "url": "assets/js/11.5b3a880f.js",
    "revision": "2bcb07b11f958b82fdc20cdbf1e38198"
  },
  {
    "url": "assets/js/12.a78fcacd.js",
    "revision": "251421fa5c2535cadf694c7fc1a5040a"
  },
  {
    "url": "assets/js/13.28b37152.js",
    "revision": "6267e101911cd9eede89b2fcaeb7eab5"
  },
  {
    "url": "assets/js/14.bc0f9e70.js",
    "revision": "2cc31ba43a07f9c092b5c5a90e9236e8"
  },
  {
    "url": "assets/js/15.35eb3a72.js",
    "revision": "53a49b1a8449f92b668503c115b33a80"
  },
  {
    "url": "assets/js/16.8a590f40.js",
    "revision": "c7c79b406ffc36d3616d4be0c8503ec3"
  },
  {
    "url": "assets/js/17.fbe290ae.js",
    "revision": "d1ef2bddf1ae39e0125aa963b5d1536f"
  },
  {
    "url": "assets/js/18.42d71b33.js",
    "revision": "28fe4420abbb4d50792e0babc5b5a460"
  },
  {
    "url": "assets/js/19.855f0a2f.js",
    "revision": "cbe503c29e6ad51785cf422b58e8bc9a"
  },
  {
    "url": "assets/js/2.212f7a00.js",
    "revision": "34554b0354a146605f714b68f758c559"
  },
  {
    "url": "assets/js/20.06c065f7.js",
    "revision": "8071275dc3a0de23cc992b688839edf0"
  },
  {
    "url": "assets/js/21.99f85cfe.js",
    "revision": "83bb99f9aac18aa069c999f67f535957"
  },
  {
    "url": "assets/js/22.ac88eeff.js",
    "revision": "4b2bf4ef5978a7e0e31fa8c5f66e8865"
  },
  {
    "url": "assets/js/23.0f1dfacc.js",
    "revision": "9606d32030abc3604bc317bbea81f1f1"
  },
  {
    "url": "assets/js/24.c57bf7a9.js",
    "revision": "7aceff0489a906814debf0a423409812"
  },
  {
    "url": "assets/js/26.2e99f479.js",
    "revision": "ddf4c64c8a650fdd3e859292777a7be7"
  },
  {
    "url": "assets/js/3.d536ad2d.js",
    "revision": "a9b14cb5aa74faa96b46f0fd103aff25"
  },
  {
    "url": "assets/js/4.3a479a52.js",
    "revision": "5564a8a9a649c01816fa441a4bd8c1e0"
  },
  {
    "url": "assets/js/5.591a8bc0.js",
    "revision": "f9a78b417e9890c5d6bae4603a80c1b4"
  },
  {
    "url": "assets/js/6.69bede2a.js",
    "revision": "39efb4b12b6ce5686a7153d0ef47bdeb"
  },
  {
    "url": "assets/js/7.0ce18a35.js",
    "revision": "e2cf75785c9856dbb76909125f599cbe"
  },
  {
    "url": "assets/js/8.88db0c39.js",
    "revision": "7784d7134084d0b465a47d51e625df5f"
  },
  {
    "url": "assets/js/9.770f4be6.js",
    "revision": "55db17381b3ef42b4e5330adacdff164"
  },
  {
    "url": "assets/js/app.ede7d8e2.js",
    "revision": "438821faf2b1cc48c3e879bba923a636"
  },
  {
    "url": "conclusion/index.html",
    "revision": "eea8d92c7f0e7a14fbf7e225fafd01df"
  },
  {
    "url": "design/index.html",
    "revision": "c21ec6d5c276d86fcdac75327fa45545"
  },
  {
    "url": "index.html",
    "revision": "7c77d0834800db179c9dd06703fa12e8"
  },
  {
    "url": "intro/index.html",
    "revision": "80d0a8c2c81c7e6ad5d3b08de8d1718d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "26acb5ba1bc9e1b1b2c40004af09140e"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "06eab2f1bdf1f72c8ace1738149147b5"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "13e4051c2f1e1f882f7564c2c0ca74c8"
  },
  {
    "url": "software/index.html",
    "revision": "82a9b7edac971009f34be7a64c9eb267"
  },
  {
    "url": "test/index.html",
    "revision": "9e05b5165b7fe0103a94b45eae616c83"
  },
  {
    "url": "use cases/index.html",
    "revision": "d5bb6bb755f8963ab7efec69c610ff7d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
