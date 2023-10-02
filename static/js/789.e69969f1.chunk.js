/*! For license information please see 789.e69969f1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarverl=self.webpackChunkmarverl||[]).push([[789],{613:function(t,r,e){e.d(r,{Z:function(){return i}});var n=e.p+"static/media/error.42292aa12b6bc303ce99.gif",o=e(184),i=function(){return(0,o.jsx)("img",{src:n,alt:"error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},993:function(t,r,e){e.r(r),e.d(r,{default:function(){return f}});var n=e(439),o=e(791),i=e(87),a=e(605),c=e(394),u=e(613),s=e(689),l=e(184),h=function(t){var r=t.comic,e=r.title,n=r.description,o=r.pageCount,a=r.thumbnail,c=r.language,u=r.price;return(0,l.jsxs)("div",{className:"single-comic",children:[(0,l.jsx)("img",{src:a,alt:e,className:"single-comic__img"}),(0,l.jsxs)("div",{className:"single-comic__info",children:[(0,l.jsx)("h2",{className:"single-comic__name",children:e}),(0,l.jsx)("p",{className:"single-comic__descr",children:n}),(0,l.jsx)("p",{className:"single-comic__descr",children:o}),(0,l.jsxs)("p",{className:"single-comic__descr",children:['"Language:',c,'"']}),(0,l.jsx)("div",{className:"single-comic__price",children:u})]}),(0,l.jsx)(i.rU,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})},f=function(){var t=(0,s.UO)().comicId,r=(0,o.useState)(null),e=(0,n.Z)(r,2),i=e[0],f=e[1],p=(0,a.Z)(),v=p.loading,d=p.error,m=p.getComic,g=p.clearError;(0,o.useEffect)((function(){y()}),[t]);var y=function(){g(),m(t).then(w)},w=function(t){f(t)},x=d?(0,l.jsx)(u.Z,{}):null,b=v?(0,l.jsx)(c.Z,{}):null,j=v||d||!i?null:(0,l.jsx)(h,{comic:i});return(0,l.jsxs)(l.Fragment,{children:[x,b,j]})}},605:function(t,r,e){e.d(r,{Z:function(){return s}});var n=e(2);function o(){o=function(){return r};var t,r={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),c=new G(n||[]);return a(i,"_invoke",{value:O(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var v="suspendedStart",d="suspendedYield",m="executing",g="completed",y={};function w(){}function x(){}function b(){}var j={};h(j,u,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(P([])));E&&E!==e&&i.call(E,u)&&(j=E);var L=b.prototype=w.prototype=Object.create(j);function k(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function N(t,r){function e(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&i.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function O(r,e,n){var o=v;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=C(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?g:d,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function C(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,C(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function Z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function P(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError((0,n.Z)(r)+" is not iterable")}return x.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:x,configurable:!0}),x.displayName=h(b,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},k(N.prototype),h(N.prototype,s,(function(){return this})),r.AsyncIterator=N,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new N(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(L),h(L,l,"Generator"),h(L,u,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=P,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:P(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}function i(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}var c=e(439),u=e(791),s=function(){var t=function(){var t=(0,u.useState)(!1),r=(0,c.Z)(t,2),e=r[0],n=r[1],i=(0,u.useState)(null),s=(0,c.Z)(i,2),l=s[0],h=s[1],f=(0,u.useCallback)(function(){var t=a(o().mark((function t(r){var e,i,a,c,u,s=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"GET",i=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},n(!0),t.prev=4,t.next=7,fetch(r,{method:e,body:i,headers:a});case 7:if((c=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(c.status));case 10:return t.next=12,c.json();case 12:return u=t.sent,n(!1),t.abrupt("return",u);case 17:throw t.prev=17,t.t0=t.catch(4),n(!1),h(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(r){return t.apply(this,arguments)}}(),[]);return{loading:e,request:f,error:l,clearError:(0,u.useCallback)((function(){return h(null)}),[])}}(),r=t.loading,e=t.request,n=t.error,i=t.clearError,s="https://gateway.marvel.com:443/v1/public/",l="apikey=c9e6e10e289f10020f1e364e77f47185",h=function(){var t=a(o().mark((function t(){var r,n,i=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:210,t.next=3,e("".concat(s,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(d));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=a(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",d(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=a(o().mark((function t(){var r,n,i=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:0,t.next=3,e("".concat(s,"comics?limit=8&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(m));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=a(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"comics/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",m(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},m=function(t){var r;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(r=t.textObjects[0])||void 0===r?void 0:r.language)||"en-us",prices:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:r,error:n,clearError:i,getAllCharacters:h,getCharacter:f,getAllComics:p,getComic:v}}}}]);
//# sourceMappingURL=789.e69969f1.chunk.js.map