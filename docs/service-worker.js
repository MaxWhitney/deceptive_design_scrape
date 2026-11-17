/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","4ccb1320ee1c089cc3d90c654e5906d7"],["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["categories/index.html","6267b0960d16ae47dce6404095e39275"],["categories/index.xml","e36241b5b51862dabc1718b3bab6ed3e"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","1434d178461f70c16b77acb4bdbc51e3"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/prism.css","004029c8c70ed2bbaa5d9debcf14f8c7"],["css/styles.css","fa4d0c82a6e480aecc189bf5d87fa267"],["files/CrowdSourcingTool-Carousel1.pdf","ed89b9554ee29895d48ff7a065c55122"],["files/CrowdSourcingTool-Carousel2.pdf","c15f43a4c4363f15b21c4f7627d11d56"],["files/SelfAssessmentGuide-Carousel.pdf","d7f8fa07fe23a61bfc3f0a530118eb6e"],["files/StorytellingCarousel.pdf","f66edf0c5215d28fcd54851af71df453"],["files/TPDLDD_RegionalCaseStudy_SubSaharanAfrica.pdf","b4fd8d5a392522d2267bb9f4806bbc00"],["files/TPDLDD_RegionalFocus_India.pdf","e91ba35153b5e4af7d4bfcbb829b6db0"],["files/TPDL_RegionalCaseStudy_SWANA.pdf","64ec63346563a2ff23516ff2c33ea970"],["files/TPDL_RegionalFocus_Africa_TechHive.pdf","22c0acd5ded2b21982b608219a0ca516"],["files/Tech_Policy_Design_Lab_Concept_Note.pdf","baee7ef482233f9d595a07daefa7a58b"],["files/TrustedDesignNormsPrinciples.pdf","0407adafe5fcdbb8c1b8e3137b11982a"],["files/deadlink.txt","ac6d40469f6dd18b93c75c663ac2a328"],["images/3x3_V2104_Lockup_Horiz_Color-p-500.png","6dd3225a44bc3beab19f725551271f8b"],["images/Banner_Coalition-p-500.png","4050cd99baa2795055603a0041d212ad"],["images/Banner_CrowdsourceReporting-p-500.jpeg","a419b6556a5fb66a1806ca5106a40a45"],["images/Banner_EvaluationAccreditation-p-500.jpeg","8edc54364518b812780f911d9ecc3f05"],["images/Banner_Storytelling-p-500.jpeg","a86521ddf1140fc67e0fcd39cd0c69c4"],["images/Banner_TrustedDesign-p-500.jpeg","f1a3c9dc9b4b6f57e0a4fabc101d21e7"],["images/How-to-run-a-TPDL-p-1080.jpeg","32457bbeaa43969aa004e6cc781ef8e5"],["images/Mindsets-p-1080.jpeg","c4fa9571806361ed6ee3a461f3069ef5"],["images/OGBV-p-1080.jpeg","fe046341207f693ff36a6e42261b530f"],["images/RecommendationsDiagram.png","9b32a068073202d02e2bfd18d220b9c2"],["images/Superbloom-Horizontal-Black.png","002b54b1eb8f88785aa60a66390909a4"],["images/TPDL-Example-p-1080.jpeg","4fcd7de2454a9dba5c2e45a530c31c94"],["images/WF_Roadmaps_Redesign_221020_V3_Crowdsourced.png","7b2a56cd2285edc78b4163040234a2b5"],["images/WF_Roadmaps_Redesign_221020_V3_Overview.png","a9b4cc75c5ad7bb6ce261f73bdb1daed"],["images/What-is-a-TPDL-p-1080.jpeg","f4644b5224b75417660adbef2388734a"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/browser-chrome-android.svg","3100b2a9c5f0e34982c717fc2aa46d73"],["images/browser-chrome.svg","fa39b4be6727525330e928f582fbe80a"],["images/browser-edge.svg","9e8265ab8f6a701587a4271dd3aa6a73"],["images/browser-firefox-android.svg","452df7b9e83c70a07e8e03b4e8dab9c4"],["images/browser-firefox.svg","d3093eda664be3d0cc6d791e1386420f"],["images/browser-ie.svg","13e192cf2b3fe17e7049a49b7d085caa"],["images/browser-opera.svg","95d65630c9f7deef6a3098af8f5baf9f"],["images/browser-safari-ios.svg","f729e629ec998ec40d313495d7257741"],["images/browser-safari.svg","523ee9491f5a937b8975f4d23aa77f62"],["images/build-icon.svg","b1d8f7e643e7ed080cc8bfec4424ae11"],["images/checklist-icon.svg","54a95e9f4d01bf642e26de4c4437ce58"],["images/eye-icon.svg","aaace27901490e826fcb8ad198af7802"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/group-icon.svg","361a6520df5b83a3f0fe70bfc682ec7a"],["images/icon-info.svg","53a6c555ce41f818556c71ab0dfc533b"],["images/icon-tag.svg","f067bbbc072941b2a0335679300bfc6c"],["images/icon-warning.svg","2a4322abbee9aed694fadb50e98a1f61"],["images/lightbulb-icon.svg","d1cd270e6d14bd2c890b822a6a8aef28"],["images/logo.svg","41f1c1780c2c5efa41d64359dbd651bb"],["images/moving-up-icon.svg","e5b563bcf886b0778a7147b60b676397"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/noun_ShrugEmoticon_credit.txt","951c2f5118e6be2001e46b1064aa5426"],["images/ogbv-feature-p-500.png","2840a12e1e2977c8598de275c4a2ed86"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/open_in_new_white_24dp.svg","12519a54b8bf4fe5ccb3d9298abfec2d"],["images/placeholder.png","dfd8c91580cc2dbe474f42b2286e39b1"],["images/placeholder.svg","6f55a03acf3c7c87789d276f18712019"],["images/samsung_homescreen.jpg","4462178424f5ce79b5757748ba5f1ec4"],["images/search-icon.svg","06e013f3c09d9af9c17a41ad133334c4"],["images/sergey-zolkin-unsplash-feature-p-500.png","54dc21067a4ec68325fc55de49e11114"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["index.html","92aef05ff78f20244cacebf4d54f8f04"],["index.xml","bb585f2d9c018c35417f2543a111bd87"],["js/dom-scripts.js","d1226c17a56c156113ee538031a0b6bf"],["js/prism.js","0c1fb8d3a69ee7c91dbf0f361ded7763"],["js/service-worker-registration.js","d60f01dc1393cbaaf4f7435339074d5e"],["manifest.json","381e6af4fc2816f9a137f1ef30c10ebd"],["patterns/about/index.html","7ecf9a2681c858c6eefacee8db7cc988"],["patterns/deceptive-design/slug-acknowledgements/index.html","2812c9a4e1c14cc263ff0bf8512eee2e"],["patterns/deceptive-design/slug-background/index.html","d8215d06b94bc6791275d36c03f8bfc3"],["patterns/deceptive-design/slug-dd/index.html","5f6e71d2d47a380679e5f18bce6c6ded"],["patterns/deceptive-design/slug-get-involved/index.html","f0f1fba7944bd157a91dd3374e1c1dc9"],["patterns/deceptive-design/slug-resources/index.html","3a91d837fb37668563df8775551d1f55"],["patterns/deceptive-design/slug-strategies-coalition/index.html","fc7dc18ca895af04e74e08e7f699c004"],["patterns/deceptive-design/slug-strategies-crowdsource/index.html","ed962261b22156484b3a04513c797c4f"],["patterns/deceptive-design/slug-strategies-eval-and-accred/index.html","59d522d4c72d7d11921bd9002f01445b"],["patterns/deceptive-design/slug-strategies-for-change/index.html","95da87f7c41e39d3b7047d8867dc8217"],["patterns/deceptive-design/slug-strategies-storytelling-campaign/index.html","2c56400dca05c87970df011e276d84c3"],["patterns/deceptive-design/slug-strategies-trusted-design-norms/index.html","1394c37d7bf0d3568709a86d78ecf74e"],["patterns/index.html","8c8fcbb3a83f02ab82d17673c01ebe5f"],["patterns/index.xml","f31022052aaf376818e2b9a600d938e3"],["patterns/issues/index.html","ab4f0aeb672d1cf85d008d701f223aa4"],["patterns/playbook/slug-further-resources/index.html","07944697ec28b3e89f7b2b4ef343a9fa"],["patterns/playbook/slug-playbook/index.html","58f2b0e8f8468f24e7b06d02ebfbcd5f"],["print-version/index.html","e1df806e07fdb27ab909a7d0a7e30d84"],["sitemap.xml","71f36d30e0c673e44d62f269df873091"],["tags/index.html","935994f24176236e8d134660db59e459"],["tags/index.xml","10dac20be5acecf88287683637f6a30c"],["tags/tag1/index.html","0d33829509a0d686b5422fb2c54cb02c"],["tags/tag1/index.xml","b2d73090958452b2c97575ebf556bb49"],["tags/tag2/index.html","125785df5539ffc0915f42e250f598bd"],["tags/tag2/index.xml","6ec81c7d0af5442be6117781c5e8cabc"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







