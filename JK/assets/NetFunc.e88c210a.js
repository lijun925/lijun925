var K={exports:{}},Ee=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},ge=Ee,Q=Object.prototype.toString,Y=function(r){return function(e){var t=Q.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return Y(t)===r}}function Z(r){return Array.isArray(r)}function L(r){return typeof r=="undefined"}function Le(r){return r!==null&&!L(r)&&r.constructor!==null&&!L(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var ye=A("ArrayBuffer");function Fe(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&ye(r.buffer),e}function je(r){return typeof r=="string"}function qe(r){return typeof r=="number"}function Re(r){return r!==null&&typeof r=="object"}function B(r){if(Y(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var Ie=A("Date"),Me=A("File"),ke=A("Blob"),He=A("FileList");function ee(r){return Q.call(r)==="[object Function]"}function Je(r){return Re(r)&&ee(r.pipe)}function We(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Q.call(r)===e||ee(r.toString)&&r.toString()===e)}var ze=A("URLSearchParams");function Ve(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Xe(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function re(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),Z(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function X(){var r={};function e(n,a){B(r[a])&&B(n)?r[a]=X(r[a],n):B(n)?r[a]=X({},n):Z(n)?r[a]=n.slice():r[a]=n}for(var t=0,i=arguments.length;t<i;t++)re(arguments[t],e);return r}function Ge(r,e,t){return re(e,function(n,a){t&&typeof n=="function"?r[a]=ge(n,t):r[a]=n}),r}function Ke(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Qe(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function Ye(r,e,t){var i,n,a,s={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)a=i[n],s[a]||(e[a]=r[a],s[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function Ze(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function er(r){if(!r)return null;var e=r.length;if(L(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var rr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:Z,isArrayBuffer:ye,isBuffer:Le,isFormData:We,isArrayBufferView:Fe,isString:je,isNumber:qe,isObject:Re,isPlainObject:B,isUndefined:L,isDate:Ie,isFile:Me,isBlob:ke,isFunction:ee,isStream:Je,isURLSearchParams:ze,isStandardBrowserEnv:Xe,forEach:re,merge:X,extend:Ge,trim:Ve,stripBOM:Ke,inherits:Qe,toFlatObject:Ye,kindOf:Y,kindOfTest:A,endsWith:Ze,toArray:er,isTypedArray:rr,isFileList:He},C=h;function se(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var we=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(C.isURLSearchParams(t))n=t.toString();else{var a=[];C.forEach(t,function(f,d){f===null||typeof f=="undefined"||(C.isArray(f)?d=d+"[]":f=[f],C.forEach(f,function(l){C.isDate(l)?l=l.toISOString():C.isObject(l)&&(l=JSON.stringify(l)),a.push(se(d)+"="+se(l))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},tr=h;function F(){this.handlers=[]}F.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};F.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};F.prototype.forEach=function(e){tr.forEach(this.handlers,function(i){i!==null&&e(i)})};var nr=F,ir=h,ar=function(e,t){ir.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},be=h;function T(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}be.inherits(T,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Oe=T.prototype,Ae={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Ae[r]={value:r}});Object.defineProperties(T,Ae);Object.defineProperty(Oe,"isAxiosError",{value:!0});T.from=function(r,e,t,i,n,a){var s=Object.create(Oe);return be.toFlatObject(r,s,function(f){return f!==Error.prototype}),T.call(s,r.message,e,t,i,n),s.name=r.name,a&&Object.assign(s,a),s};var _=T,Se={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=h;function sr(r,e){e=e||new FormData;var t=[];function i(a){return a===null?"":R.isDate(a)?a.toISOString():R.isArrayBuffer(a)||R.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(R.isPlainObject(a)||R.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),R.forEach(a,function(f,d){if(!R.isUndefined(f)){var o=s?s+"."+d:d,l;if(f&&!s&&typeof f=="object"){if(R.endsWith(d,"{}"))f=JSON.stringify(f);else if(R.endsWith(d,"[]")&&(l=R.toArray(f))){l.forEach(function(m){!R.isUndefined(m)&&e.append(o,i(m))});return}}n(f,o)}}),t.pop()}else e.append(s,i(a))}return n(r),e}var Ce=sr,H=_,or=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new H("Request failed with status code "+i.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},$=h,ur=$.isStandardBrowserEnv()?function(){return{write:function(t,i,n,a,s,u){var f=[];f.push(t+"="+encodeURIComponent(i)),$.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),$.isString(a)&&f.push("path="+a),$.isString(s)&&f.push("domain="+s),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),fr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},lr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},cr=fr,dr=lr,xe=function(e,t){return e&&!cr(t)?dr(e,t):t},J=h,hr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],pr=function(e){var t={},i,n,a;return e&&J.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),i=J.trim(u.substr(0,a)).toLowerCase(),n=J.trim(u.substr(a+1)),i){if(t[i]&&hr.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t},oe=h,vr=oe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(a){var s=a;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(s){var u=oe.isString(s)?n(s):s;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}(),G=_,mr=h;function Te(r){G.call(this,r==null?"canceled":r,G.ERR_CANCELED),this.name="CanceledError"}mr.inherits(Te,G,{__CANCEL__:!0});var j=Te,Er=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},U=h,yr=or,Rr=ur,wr=we,br=xe,Or=pr,Ar=vr,Sr=Se,w=_,Cr=j,xr=Er,ue=function(e){return new Promise(function(i,n){var a=e.data,s=e.headers,u=e.responseType,f;function d(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}U.isFormData(a)&&U.isStandardBrowserEnv()&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+m)}var p=br(e.baseURL,e.url);o.open(e.method.toUpperCase(),wr(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ie(){if(!!o){var y="getAllResponseHeaders"in o?Or(o.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?o.responseText:o.response,O={data:S,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};yr(function(k){i(k),d()},function(k){n(k),d()},O),o=null}}if("onloadend"in o?o.onloadend=ie:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ie)},o.onabort=function(){!o||(n(new w("Request aborted",w.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new w("Network Error",w.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||Sr;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(new w(S,O.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,o)),o=null},U.isStandardBrowserEnv()){var ae=(e.withCredentials||Ar(p))&&e.xsrfCookieName?Rr.read(e.xsrfCookieName):void 0;ae&&(s[e.xsrfHeaderName]=ae)}"setRequestHeader"in o&&U.forEach(s,function(S,O){typeof a=="undefined"&&O.toLowerCase()==="content-type"?delete s[O]:o.setRequestHeader(O,S)}),U.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(y){!o||(n(!y||y&&y.type?new Cr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),a||(a=null);var M=xr(p);if(M&&["http","https","file"].indexOf(M)===-1){n(new w("Unsupported protocol "+M+":",w.ERR_BAD_REQUEST,e));return}o.send(a)})},Tr=null,c=h,fe=ar,le=_,Nr=Se,Pr=Ce,_r={"Content-Type":"application/x-www-form-urlencoded"};function ce(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Ur(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ue),r}function $r(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var q={transitional:Nr,adapter:Ur(),transformRequest:[function(e,t){if(fe(t,"Accept"),fe(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return ce(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=c.isObject(e),n=t&&t["Content-Type"],a;if((a=c.isFileList(e))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return Pr(a?{"files[]":e}:e,s&&new s)}else if(i||n==="application/json")return ce(t,"application/json"),$r(e);return e}],transformResponse:[function(e){var t=this.transitional||q.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?le.from(s,le.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){q.headers[e]={}});c.forEach(["post","put","patch"],function(e){q.headers[e]=c.merge(_r)});var te=q,Dr=h,Br=te,gr=function(e,t,i){var n=this||Br;return Dr.forEach(i,function(s){e=s.call(n,e,t)}),e},Ne=function(e){return!!(e&&e.__CANCEL__)},de=h,W=gr,Lr=Ne,Fr=te,jr=j;function z(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new jr}var qr=function(e){z(e),e.headers=e.headers||{},e.data=W.call(e,e.data,e.headers,e.transformRequest),e.headers=de.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),de.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Fr.adapter;return t(e).then(function(n){return z(e),n.data=W.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Lr(n)||(z(e),n&&n.response&&(n.response.data=W.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,Pe=function(e,t){t=t||{};var i={};function n(o,l){return E.isPlainObject(o)&&E.isPlainObject(l)?E.merge(o,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function a(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function s(o){if(!E.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function f(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var d={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var m=d[l]||a,p=m(l);E.isUndefined(p)&&m!==f||(i[l]=p)}),i},_e={version:"0.27.2"},Ir=_e.version,b=_,ne={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ne[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var he={};ne.transitional=function(e,t,i){function n(a,s){return"[Axios v"+Ir+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,u){if(e===!1)throw new b(n(s," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!he[s]&&(he[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,s,u):!0}};function Mr(r,e,t){if(typeof r!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var a=i[n],s=e[a];if(s){var u=r[a],f=u===void 0||s(u,a,r);if(f!==!0)throw new b("option "+a+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+a,b.ERR_BAD_OPTION)}}var kr={assertOptions:Mr,validators:ne},Ue=h,Hr=we,pe=nr,ve=qr,I=Pe,Jr=xe,$e=kr,x=$e.validators;function N(r){this.defaults=r,this.interceptors={request:new pe,response:new pe}}N.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=I(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&$e.assertOptions(i,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(a=a&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var s=[];this.interceptors.response.forEach(function(p){s.push(p.fulfilled,p.rejected)});var u;if(!a){var f=[ve,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=t;n.length;){var o=n.shift(),l=n.shift();try{d=o(d)}catch(m){l(m);break}}try{u=ve(d)}catch(m){return Promise.reject(m)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};N.prototype.getUri=function(e){e=I(this.defaults,e);var t=Jr(e.baseURL,e.url);return Hr(t,e.params,e.paramsSerializer)};Ue.forEach(["delete","get","head","options"],function(e){N.prototype[e]=function(t,i){return this.request(I(i||{},{method:e,url:t,data:(i||{}).data}))}});Ue.forEach(["post","put","patch"],function(e){function t(i){return function(a,s,u){return this.request(I(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}N.prototype[e]=t(),N.prototype[e+"Form"]=t(!0)});var Wr=N,zr=j;function P(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,a=new Promise(function(s){t.subscribe(s),n=s}).then(i);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new zr(n),e(t.reason))})}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};P.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};P.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};P.source=function(){var e,t=new P(function(n){e=n});return{token:t,cancel:e}};var Vr=P,Xr=function(e){return function(i){return e.apply(null,i)}},Gr=h,Kr=function(e){return Gr.isObject(e)&&e.isAxiosError===!0},me=h,Qr=Ee,g=Wr,Yr=Pe,Zr=te;function De(r){var e=new g(r),t=Qr(g.prototype.request,e);return me.extend(t,g.prototype,e),me.extend(t,e),t.create=function(n){return De(Yr(r,n))},t}var v=De(Zr);v.Axios=g;v.CanceledError=j;v.CancelToken=Vr;v.isCancel=Ne;v.VERSION=_e.version;v.toFormData=Ce;v.AxiosError=_;v.Cancel=v.CanceledError;v.all=function(e){return Promise.all(e)};v.spread=Xr;v.isAxiosError=Kr;K.exports=v;K.exports.default=v;var et=K.exports,D=et;let V;class rt{constructor(){if(V)return V;V=this}async GetUrl_tq(){const e="https://movie.pzzzr.com/weather";return(await D.get(e)).data}async GetUrl_W(e){return(await D.get(e)).data}async GetUrl(e,t){const i={params:t};return await D.get(e,i)}async PostUrl(e,t){return await D.post(e,t)}}export{rt as N};
