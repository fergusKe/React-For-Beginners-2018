"use strict";var precacheConfig=[["/React-For-Beginners-2018/index.html","5aae49c4b7222ab7cd06e5a5ed044baf"],["/React-For-Beginners-2018/static/css/main.4eb93581.css","48542229f1a93a98de578ce971ce87db"],["/React-For-Beginners-2018/static/js/main.6d3a6212.js","e93cbecbb938d8994595fb9d6bf03905"],["/React-For-Beginners-2018/static/media/anchor.d2f8799a.svg","d2f8799a13e6db2022d9a7de22776705"],["/React-For-Beginners-2018/static/media/blanch_caps_inline-webfont.1461f8e9.woff","1461f8e9d2084c70c00830348efe1766"],["/React-For-Beginners-2018/static/media/blanch_caps_inline-webfont.73a576a8.eot","73a576a8254aeafebcdc66fe9fd41ac8"],["/React-For-Beginners-2018/static/media/blanch_caps_inline-webfont.8345e1b3.ttf","8345e1b3362c1d640f0f11b5aae1d5bc"],["/React-For-Beginners-2018/static/media/blanch_caps_inline-webfont.c175fe49.svg","c175fe49ca6c599199a81c6791490344"],["/React-For-Beginners-2018/static/media/haymaker-webfont.47e26dee.svg","47e26dee9b053b540478750bdf7a87d5"],["/React-For-Beginners-2018/static/media/haymaker-webfont.4c3fb584.eot","4c3fb584d3f63821357c8a9cff97f360"],["/React-For-Beginners-2018/static/media/haymaker-webfont.751e5627.woff","751e56274d3ea1c651ea824f902bb987"],["/React-For-Beginners-2018/static/media/haymaker-webfont.e9535f20.ttf","e9535f20ca175cc3fdfe2816f7c47168"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/React-For-Beginners-2018/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});