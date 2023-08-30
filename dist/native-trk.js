/* prebid-universal-creative v1.16.0-pre
Updated : 2023-08-30 */
!function(n){var r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t,n){"use strict";t.e=function(e,t){var n=new Image;t&&"function"==typeof t&&(n.addEventListener("load",t),n.addEventListener("error",t));n.src=e},t.c=function(e,t){var n=new XMLHttpRequest;n.addEventListener("load",function(){t(n.responseText)}),n.open("GET",e),n.send()},t.a=function(e,t,n,r){var a=e.document,i=a.createElement("script");i.type="text/javascript",n&&"function"==typeof n&&(i.readyState?i.onreadystatechange=function(){"loaded"!==i.readyState&&"complete"!==i.readyState||(i.onreadystatechange=null,n())}:i.onload=function(){n()});r&&"function"==typeof r&&(i.onerror=function(){r()});i.src=t;var o=a.getElementsByTagName("head");(o=o.length?o:a.getElementsByTagName("body")).length&&(o=o[0]).insertBefore(i,o.firstChild);return i},t.d=function(t){var n={hb_adid:"adId",hb_cache_host:"cacheHost",hb_cache_path:"cachePath",hb_cache_id:"uuid",hb_format:"mediaType",hb_env:"env",hb_size:"size",hb_pb:"hbPb"};function e(e){return!(!t[e]||!(function(e){return i(e,"Object")}(t[e])&&0<Object.keys(t[e]).length||o(t[e])&&""!==t[e]))}var r={},a={};e("targetingMap")?a=function(t){var n={};return Object.keys(t).forEach(function(e){Array.isArray(t[e])&&0<t[e].length&&(n[e]=t[e][0])}),n}(t.targetingMap):e("targetingKeywords")&&(a=function(e){var a={},t=e.split(",");return 0<t.length&&t.forEach(function(e){var t=e.split(":");if(2===t.length){var n=t[0],r=t[1];a[n]=r}}),a}(t.targetingKeywords));return function(t){Object.keys(t).forEach(function(e){r[n[e]||e]=t[e]})}(a),Object.keys(t).forEach(function(e){"targetingMap"!==e&&"targetingKeywords"!==e&&o(t[e])&&""!==t[e]&&(r[e]=t[e])}),r},t.b=function(e){var t=document.createElement("a");return t.href=decodeURIComponent(e),{href:t.href,protocol:(t.protocol||"").replace(/:$/,""),hostname:t.hostname,port:+t.port,pathname:t.pathname.replace(/^(?!\/)/,"/"),hash:(t.hash||"").replace(/^#/,""),host:(t.host||window.location.host).replace(/:(443|80)$/,"")}};n(4);function i(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function o(e){return i(e,"String")}},function(e,t,n){"use strict";t.a=function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window,o=function(){if(null==t)return null;var e=Object(r.b)(t);return e.protocol+"://"+e.host}();return function(e,t){if(null==o)throw new Error("Missing pubUrl");var n;if(e=JSON.stringify(e),null==t)i.parent.postMessage(e,o);else{var r=new MessageChannel;(n=r.port1).onmessage=t,i.addEventListener("message",a),i.parent.postMessage(e,o,[r.port2])}return function(){null!=n&&(i.removeEventListener("message",a),n.onmessage=null,n=null)};function a(e){(e.origin||e.originalEvent&&e.originalEvent.origin)===o&&t(e)}}};var r=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);window.pbNativeTag=window.pbNativeTag||{};var a=Object(r.a)(window);window.pbNativeTag.startTrackers=a.startTrackers},function(e,t,n){"use strict";t.a=function(a){var i;function o(e){return a.document.getElementsByClassName(e)||[]}function c(e){return e.attributes&&e.attributes[h]&&e.attributes[h].value||""}function s(e,t){u(t,"click")}function l(n){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:s;n=n||o(p);for(var e=function(e){var t=c(n[e]);n[e].addEventListener("click",function(e){r(e,t)},!0)},t=0;t<n.length;t++)e(t)}function u(e,t){if(""===e)console.warn("Prebid tracking event was missing 'adId'.  Was adId macro set in the HTML attribute "+h+"on the ad's anchor element");else{var n={message:"Prebid Native",adId:e};"click"===t&&(n.action="click"),i(n)}}return{startTrackers:function(e){var t=Object(d.d)(e);i=Object(v.a)(t.pubUrl,a);var n=Object(f.a)(window,t.pubUrl);if(t&&"mobile-app"===t.env){n.loadMobileAssets(t,function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.clickTrackers,r=t.impTrackers,a=t.eventtrackers;l(!1,function(e){(e||[]).forEach(d.e)}.bind(null,n)),(r||[]).forEach(d.e),a.filter(function(e){return 1===e.event&&1===e.method}).map(function(e){return e.url}).forEach(d.e),a.filter(function(e){return 1===e.event&&2===e.method}).map(function(e){return e.url}).forEach(function(e){return loadScript(document,e)})})}else{var r=o(p);n.loadAssets(function(e){return 0<e.length&&e[0].attributes&&e[0].attributes[h]&&e[0].attributes[h].value||""}(r),l),l(r,s),0<r.length&&function(e){for(var t=0;t<e.length;t++){u(c(e[t]),"impression")}}(r)}}}};var d=n(0),f=n(5),v=n(1),p="pb-click",h="pbAdId"},function(e,t,n){"use strict";t.a=function(e,t){var n=document.createElement("iframe");return n.setAttribute("frameborder",0),n.setAttribute("scrolling","no"),n.setAttribute("marginheight",0),n.setAttribute("marginwidth",0),n.setAttribute("TOPMARGIN",0),n.setAttribute("LEFTMARGIN",0),n.setAttribute("allowtransparency","true"),n.setAttribute("width",t),n.setAttribute("height",e),n}},function(e,t,n){"use strict";t.a=function(o,e){var t=e.pubUrl;e.clickUrlUnesc&&e.clickUrlUnesc!==O&&(T=e.clickUrlUnesc);var c,r,s=Object(y.a)(t,o),l=0;function u(){null!=r&&(r(),r=null)}function i(e){var t;try{t=JSON.parse(e)}catch(e){console.log("Error parsing response from cache host: ".concat(e))}return t}function n(e){var t=e.uuid,n="".concat(function(e,t){var n=void 0===t||""===t?E:t;return"https://".concat(void 0===e||""===e?A:e).concat(n)}(e.cacheHost,e.cachePath),"?uuid=").concat(t);Object(g.c)(n,function(e){var t=i(e);if(t&&t.adm){var n=i(t.adm);if(n&&n.assets){var r=function(e){var t,n=[];return e.assets.forEach(function(e){e.img?w.image[e.img.type]?n.push({key:w.image[e.img.type],value:e.img.url}):console.log("ERROR: Invalid image type for image asset"):e.data?w.data[e.data.type]?n.push({key:w.data[e.data.type],value:e.data.value}):console.log("ERROR: Invalid data type for data asset"):e.title&&n.push({key:"title",value:e.title.text})}),e.link&&(e.link.clicktrackers&&(t=e.link.clicktrackers),n.push({key:"clickUrl",value:e.link.url})),{assets:n,clicktrackers:t,imptrackers:e.imptrackers,eventtrackers:e.eventtrackers}}(n),a=b(o.document.body.innerHTML,r);o.document.body.innerHTML=a,c&&c({clickTrackers:r.clicktrackers,impTrackers:r.imptrackers,eventtrackers:r.eventtrackers})}}})}function d(){return void 0!==o.pbNativeData}function f(e,t){return t&&!d()?"".concat(e,":").concat(t):d()?"##".concat(e,"##"):e}function v(s){for(var e=arguments.length,l=new Array(1<e?e-1:0),t=1;t<e;t++)l[t-1]=arguments[t];return Object.values(k).reduce(function(e,t){var n=f(t,s),r=!0,a=!1,i=void 0;try{for(var o,c=l.filter(Boolean)[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){if(0<=o.value.indexOf(n)){e.push(t);break}}}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return e},[])}function a(e){return v(e,o.document.body.innerHTML,o.document.head.innerHTML)}function p(e){var t={};try{t=JSON.parse(e.data)}catch(e){return void(10<l++&&u())}if("assetResponse"===t.message){t.clickUrlUnesc=T;var n=o.document.body.innerHTML,r=o.document.head.innerHTML;if(d()&&t.adId!==o.pbNativeData.adId)return;r&&(o.document.head.innerHTML=b(r,t)),t.assets=t.assets||[];var a=t.assets;if(t.ortb&&(a.ortb=t.ortb,c=function(){Object(m.b)(t.adId,s),Object(m.a)(t.adId,t.ortb,s)}),t.hasOwnProperty("rendererUrl")&&t.rendererUrl||d()&&o.pbNativeData.hasOwnProperty("rendererUrl"))if(o.renderAd)h(o.renderAd&&o.renderAd(a)||"",t);else document.getElementById("pb-native-renderer")?document.getElementById("pb-native-renderer").addEventListener("load",function(){h(o.renderAd&&o.renderAd(a)||"",t)}):Object(g.a)(o,d()&&o.pbNativeData.hasOwnProperty("rendererUrl")&&o.pbNativeData.rendererUrl||t.rendererUrl,function(){h(o.renderAd&&o.renderAd(a)||"",t)});else if(t.hasOwnProperty("adTemplate")&&t.adTemplate||d()&&o.pbNativeData.hasOwnProperty("adTemplate")){h(b(d()&&o.pbNativeData.hasOwnProperty("adTemplate")&&o.pbNativeData.adTemplate||t.adTemplate,t),t)}else{var i=b(n,t);o.document.body.innerHTML=i,c&&c(),u()}}}function h(e,t){if(!Object(_.a)(window)){var n=function(e){for(var t,n=e;n!==e.top;){if(!(t=n.parent).frames||!t.frames.length)return null;for(var r=0;r<t.frames.length;r++)if(t.frames[r]===n){if(!t.document)return null;var a=!0,i=!1,o=void 0;try{for(var c,s=t.document.getElementsByTagName("iframe")[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var l=c.value;if(!l.contentWindow)return null;if(l.contentWindow===n)return l.parentElement}}catch(e){i=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(i)throw o}}}}}(o);if(n&&n.children&&n.children[0]){var r=n.children[0];if("1"===r.width&&"1"===r.height){var a=n.getBoundingClientRect().width;o.document.body.style.width="".concat(a,"px")}}}e=e.replaceAll(O,t.clickUrlUnesc||""),o.document.body.innerHTML+=e,c&&c(),o.removeEventListener("message",p),u();function i(){return function(e,t,n){s({message:"Prebid Native",action:"resizeNativeHeight",adId:e,height:t,width:n})}(t.adId,document.body.clientHeight||document.body.offsetHeight,document.body.clientWidth)}"complete"===document.readyState?i():window.onload=i,"function"==typeof window.postRenderAd&&window.postRenderAd(t)}function b(a,e){var i=e.assets,t=e.ortb,o=e.adId;if(t)a=function(t,e){return e.assets.forEach(function(e){t=t.replaceAll("##hb_native_asset_id_".concat(e.id,"##"),function(e){return e.img?e.img.url:e.data?e.data.value:e.title?e.title.text:e.video?e.video.vasttag:""}(e)),e.link&&e.link.url&&(t=t.replaceAll("##hb_native_asset_link_id_".concat(e.id,"##"),e.link.url))}),t=t.replaceAll(/##hb_native_asset_id_\d+##/gm,""),e.privacy&&(t=t.replaceAll("##hb_native_privacy##",e.privacy)),e.link&&(t=t.replaceAll("##hb_native_linkurl##",e.link.url)),t}(a,t);else if(!Array.isArray(i))return a;return i=i||[],v(o,a).forEach(function(t){var e=f(t,o),n=new RegExp(e,"g"),r=i.find(function(e){return t===k[e.key]});a=a.replace(n,r?r.value:"")}),a}return{loadAssets:function(e,t){var n=a(e);d()&&o.pbNativeData.hasOwnProperty("assetsToReplace")&&o.pbNativeData.assetsToReplace.forEach(function(e){var t=e.match(/hb_native_/i)?e:k[e];t&&n.push(t)}),d()&&o.pbNativeData.hasOwnProperty("requestAllAssets")&&o.pbNativeData.requestAllAssets?(c=t,r=function(e){return s({message:"Prebid Native",action:"allAssetRequest",adId:e},p)}(e)):0<n.length&&(c=t,r=function(e,t){return s({message:"Prebid Native",action:"assetRequest",adId:e,assets:t},p)}(e,n))},loadMobileAssets:function(e,t){0<a().length&&(c=t,n(e))}}};var m=n(6),g=n(0),y=n(1),_=n(7),k={title:"hb_native_title",body:"hb_native_body",body2:"hb_native_body2",privacyLink:"hb_native_privacy",privacyIcon:"hb_native_privicon",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",displayUrl:"hb_native_displayurl",cta:"hb_native_cta",rating:"hb_native_rating",address:"hb_native_address",downloads:"hb_native_downloads",likes:"hb_native_likes",phone:"hb_native_phone",price:"hb_native_price",salePrice:"hb_native_saleprice",rendererUrl:"hb_renderer_url"},w={image:{1:"icon",3:"image"},data:{1:"sponsoredBy",2:"body",3:"rating",4:"likes",5:"downloads",6:"price",7:"salePrice",8:"phone",9:"address",10:"body2",11:"displayUrl",12:"cta"}},A="prebid.adnxs.com",E="/pbc/v1/cache",O="%%CLICK_URL_UNESC%%",T=""},function(e,t,n){"use strict";t.b=function(e,t){t({message:"Prebid Native",action:"fireNativeImpressionTrackers",adId:e})},t.a=function(e,t,r){for(var a={message:"Prebid Native",action:"click",adId:e},n=document.getElementsByClassName(o)||[],i=0;i<n.length;i++)n[i].addEventListener("click",function(e){var t=e.target,n=t&&t.getAttribute(c);a.assetId=n,r(a)},!0)};n(0);var o="pb-click",c="hb_native_asset_id"},function(e,t,n){"use strict";t.a=function(e){return!(!e.$sf||!e.$sf.ext)}}]);