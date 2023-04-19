function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequire29e6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequire29e6=r),r.register("27Lyk",(function(t,n){var i,r;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("27Lyk").register(JSON.parse('{"6yVKR":"index.f2855304.js","eh6G4":"pic1.033442ef.jpg","7kntu":"pic2.b44056b5.jpg","dwhsO":"pic3.26480721.jpg","c8sVJ":"inloggning.adee855c.html","9ekMu":"logo.94e49d9a.png","lo9hE":"inloggning.0a6fbaf5.js","OUIEf":"pic1.033442ef.jpg","7RMGt":"pic2.b44056b5.jpg","6iJ57":"pic3.26480721.jpg"}'));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,o,a={},l=a={};function c(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function u(e){if(s===setTimeout)return setTimeout(e,0);if((s===c||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"==typeof setTimeout?setTimeout:c}catch(e){s=c}try{o="function"==typeof clearTimeout?clearTimeout:h}catch(e){o=h}}();var d,p=[],_=!1,f=-1;function g(){_&&d&&(_=!1,d.length?p=d.concat(p):f=-1,p.length&&m())}function m(){if(!_){var e=u(g);_=!0;for(var t=p.length;t;){for(d=p,p=[];++f<t;)d&&d[f].run();f=-1,t=p.length}d=null,_=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===h||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function v(){}l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new y(e,t)),1!==p.length||_||u(m)},y.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=v,l.addListener=v,l.once=v,l.off=v,l.removeListener=v,l.removeAllListeners=v,l.emit=v,l.prependListener=v,l.prependOnceListener=v,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};const C=!1,w=!1,b="${JSCORE_VERSION}",I=function(e,t){if(!e)throw E(t)},E=function(e){return new Error("Firebase Database ("+b+") INTERNAL ASSERT FAILED: "+e)},T=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(T(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new k;const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N=function(e){const t=T(e);return S.encodeByteArray(t,!0)},P=function(e){return N(e).replace(/\./g,"")},R=function(e){try{return S.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e){return D(void 0,e)}function D(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=D(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,A=()=>{try{return L()||(()=>{if(void 0===a||void 0===a.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&R(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},O=e=>{const t=(e=>{var t,n;return null===(n=null===(t=A())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},M=()=>{var e;return null===(e=A())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[P(JSON.stringify({alg:"none",type:"JWT"})),P(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function j(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function H(){return!0===C||!0===w}function W(){try{return"object"==typeof indexedDB}catch(e){return!1}}class B extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z.prototype.create)}}class z{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(V,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new B(i,o,n)}}const V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return JSON.parse(e)}function Y(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=$(R(s[0])||""),n=$(R(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},K=function(e){const t=G(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Q=function(e){const t=G(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function X(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ee(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function te(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(ne(n)&&ne(s)){if(!te(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function ne(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ie(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):e<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function se(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oe=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,I(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},ae=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e){return e&&e._delegate?e._delegate:e}class ce{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new F;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:he})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=he){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=he){return this.instances.has(e)}getOptions(e=he){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===he?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=he){return this.component?this.component.multipleInstances?e:he:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class de{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ue(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=[];var _e,fe;(fe=_e||(_e={}))[fe.DEBUG=0]="DEBUG",fe[fe.VERBOSE=1]="VERBOSE",fe[fe.INFO=2]="INFO",fe[fe.WARN=3]="WARN",fe[fe.ERROR=4]="ERROR",fe[fe.SILENT=5]="SILENT";const ge={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},me=_e.INFO,ye={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},ve=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ye[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Ce{constructor(e){this.name=e,this._logLevel=me,this._logHandler=ve,this._userLogHandler=null,pe.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ge[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const we=(e,t)=>t.some((t=>e instanceof t));let be,Ie;const Ee=new WeakMap,Te=new WeakMap,Se=new WeakMap,ke=new WeakMap,Ne=new WeakMap;let Pe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Te.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Se.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return De(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Re(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ie||(Ie=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Le(this),t),De(Ee.get(this))}:function(...t){return De(e.apply(Le(this),t))}:function(t,...n){const i=e.call(Le(this),t,...n);return Se.set(i,t.sort?t.sort():[t]),De(i)}}function xe(e){return"function"==typeof e?Re(e):(e instanceof IDBTransaction&&function(e){if(Te.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Te.set(e,t)}(e),we(e,be||(be=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Pe):e)}function De(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(De(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ee.set(t,e)})).catch((()=>{})),Ne.set(t,e),t}(e);if(ke.has(e))return ke.get(e);const t=xe(e);return t!==e&&(ke.set(e,t),Ne.set(t,e)),t}const Le=e=>Ne.get(e);function Ae(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=De(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(De(o.result),e.oldVersion,e.newVersion,De(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Oe=["get","getKey","getAll","getAllKeys","count"],Me=["put","add","delete","clear"],Fe=new Map;function qe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Fe.get(t))return Fe.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Me.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Oe.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return Fe.set(t,s),s}Pe=(e=>({...e,get:(t,n,i)=>qe(t,n)||e.get(t,n,i),has:(t,n)=>!!qe(t,n)||e.has(t,n)}))(Pe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const je="@firebase/app",He="0.9.7",We=new Ce("@firebase/app"),Be="[DEFAULT]",ze={[je]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ve=new Map,$e=new Map;function Ye(e,t){try{e.container.addComponent(t)}catch(n){We.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ge(e){const t=e.name;if($e.has(t))return We.debug(`There were multiple attempts to register component ${t}.`),!1;$e.set(t,e);for(const t of Ve.values())Ye(t,e);return!0}function Ke(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qe=new z("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ce("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Be,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw Qe.create("bad-app-name",{appName:String(r)});if(n||(n=M()),!n)throw Qe.create("no-options");const s=Ve.get(r);if(s){if(te(n,s.options)&&te(i,s.config))return s;throw Qe.create("duplicate-app",{appName:r})}const o=new de(r);for(const e of $e.values())o.addComponent(e);const a=new Je(n,i,o);return Ve.set(r,a),a}function Ze(e=Be){const t=Ve.get(e);if(!t&&e===Be)return Xe();if(!t)throw Qe.create("no-app",{appName:e});return t}function et(e,t,n){var i;let r=null!==(i=ze[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void We.warn(e.join(" "))}Ge(new ce(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tt="firebase-heartbeat-database",nt=1,it="firebase-heartbeat-store";let rt=null;function st(){return rt||(rt=Ae(tt,nt,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(it)}}).catch((e=>{throw Qe.create("idb-open",{originalErrorMessage:e.message})}))),rt}async function ot(e,t){try{const n=(await st()).transaction(it,"readwrite"),i=n.objectStore(it);return await i.put(t,at(e)),n.done}catch(e){if(e instanceof B)We.warn(e.message);else{const t=Qe.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});We.warn(t.message)}}}function at(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ht(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ct();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ct(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ut(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ut(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=P(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ct(){return(new Date).toISOString().substring(0,10)}class ht{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!W()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await st()).transaction(it).objectStore(it).get(at(e))}catch(e){if(e instanceof B)We.warn(e.message);else{const t=Qe.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});We.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ot(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ot(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ut(e){return P(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;dt="",Ge(new ce("platform-logger",(e=>new Ue(e)),"PRIVATE")),Ge(new ce("heartbeat",(e=>new lt(e)),"PRIVATE")),et(je,He,dt),et(je,He,"esm2017"),et("fire-js","");const pt="@firebase/database",_t="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Y(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:$(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return J(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new gt(t)}}catch(e){}return new mt},vt=yt("localStorage"),Ct=yt("sessionStorage"),wt=new Ce("@firebase/database"),bt=function(){let e=1;return function(){return e++}}(),It=function(e){const t=oe(e),n=new re;n.update(t);const i=n.digest();return S.encodeByteArray(i)},Et=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Et.apply(null,i):t+="object"==typeof i?Y(i):i,t+=" "}return t};let Tt=null,St=!0;const kt=function(e,t){I(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(wt.logLevel=_e.VERBOSE,Tt=wt.log.bind(wt),t&&Ct.set("logging_enabled",!0)):"function"==typeof e?Tt=e:(Tt=null,Ct.remove("logging_enabled"))},Nt=function(...e){if(!0===St&&(St=!1,null===Tt&&!0===Ct.get("logging_enabled")&&kt(!0)),Tt){const t=Et.apply(null,e);Tt(t)}},Pt=function(e){return function(...t){Nt(e,...t)}},Rt=function(...e){const t="FIREBASE INTERNAL ERROR: "+Et(...e);wt.error(t)},xt=function(...e){const t=`FIREBASE FATAL ERROR: ${Et(...e)}`;throw wt.error(t),new Error(t)},Dt=function(...e){const t="FIREBASE WARNING: "+Et(...e);wt.warn(t)},Lt=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},At="[MIN_NAME]",Ot="[MAX_NAME]",Mt=function(e,t){if(e===t)return 0;if(e===At||t===Ot)return-1;if(t===At||e===Ot)return 1;{const n=zt(e),i=zt(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Ft=function(e,t){return e===t?0:e<t?-1:1},qt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Y(t))},Ut=function(e){if("object"!=typeof e||null===e)return Y(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Y(t[i]),n+=":",n+=Ut(e[t[i]]);return n+="}",n},jt=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Ht(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Wt=function(e){I(!Lt(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Bt=new RegExp("^-?(0*)\\d{1,10}$"),zt=function(e){if(Bt.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Vt=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Dt("Exception was thrown by user callback.",t),e}),Math.floor(0))}},$t=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class Kt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kt.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qt="5",Jt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xt="ac",Zt="websocket",en="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vt.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function nn(e,t,n){let i;if(I("string"==typeof t,"typeof type must == string"),I("object"==typeof n,"typeof params must == object"),t===Zt)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==en)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Ht(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.counters_={}}incrementCounter(e,t=1){J(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return x(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={},on={};function an(e){const t=e.toString();return sn[t]||(sn[t]=new rn),sn[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Vt((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="start";class hn{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pt(e),this.stats_=an(t),this.urlFn=e=>(this.appCheckToken&&(e[Xt]=this.appCheckToken),nn(t,en,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ln(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(H()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new un(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===cn)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[cn]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=Qt,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Xt]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Jt.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return!H()&&(!!hn.forceAllow_||!(hn.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Y(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=N(t),i=jt(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(H())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Y(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class un{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,H())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=bt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=un.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Nt("frame writing exception"),e.stack&&Nt(e.stack),Nt(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Nt("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){H()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn=null;"undefined"!=typeof MozWebSocket?dn=MozWebSocket:"undefined"!=typeof WebSocket&&(dn=WebSocket);class pn{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pt(this.connId),this.stats_=an(t),this.connURL=pn.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={};return s.v=Qt,!H()&&"undefined"!=typeof location&&location.hostname&&Jt.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s[Xt]=i),r&&(s.p=r),nn(e,Zt,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vt.set("previous_websocket_failure",!0);try{let e;if(H()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Qt}/${ft}/${a.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new dn(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==dn&&!pn.forceDisallow_}static previouslyFailed(){return vt.isInMemoryStorage||!0===vt.get("previous_websocket_failure")}markConnectionHealthy(){vt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=$(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Y(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=jt(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pn.responsesRequiredToBeHealthy=2,pn.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hn,pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=pn&&pn.isAvailable();let n=t&&!pn.previouslyFailed();if(e.webSocketOnly&&(t||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[pn];else{const e=this.transports_=[];for(const t of _n.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);_n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_n.globalTransportInitialized_=!1;class fn{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pt("c:"+this.id+":"),this.transportManager_=new _n(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$t((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=qt("t",e),n=qt("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=qt("t",e),n=qt("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=qt("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Rt("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Qt!==n&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),$t((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$t((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){I(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends mn{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||j()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new yn}getInitialEvent(e){return I("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=32,Cn=768;class wn{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function bn(){return new wn("")}function In(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function En(e){return e.pieces_.length-e.pieceNum_}function Tn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new wn(e.pieces_,t)}function Sn(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function kn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Nn(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new wn(t,0)}function Pn(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof wn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new wn(n,0)}function Rn(e){return e.pieceNum_>=e.pieces_.length}function xn(e,t){const n=In(e),i=In(t);if(null===n)return t;if(n===i)return xn(Tn(e),Tn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Dn(e,t){const n=kn(e,0),i=kn(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=Mt(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function Ln(e,t){if(En(e)!==En(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function An(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(En(e)>En(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class On{constructor(e,t){this.errorPrefix_=t,this.parts_=kn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ae(this.parts_[e]);Mn(this)}}function Mn(e){if(e.byteLength_>Cn)throw new Error(e.errorPrefix_+"has a key path longer than "+Cn+" bytes ("+e.byteLength_+").");if(e.parts_.length>vn)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vn+") or object contains a cycle "+Fn(e))}function Fn(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends mn{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new qn}getInitialEvent(e){return I("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=1e3;class jn extends gn{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=jn.nextPersistentConnectionId_++,this.log_=Pt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Un,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!H())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qn.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&yn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Y(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new F,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;jn.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&J(e,"w")){const n=X(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Q(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=K(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Y(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Rt("Unrecognized action received from server: "+Y(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Un),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jn.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){I(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?Nt("getToken() completed but was canceled"):(Nt("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new fn(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Dt(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Dt(e),a())}}}interrupt(e){Nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Z(this.interruptReasons_)&&(this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ut(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new wn(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Nt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Nt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";H()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ft.replace(/\./g,"-")]=1,j()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yn.getInstance().currentlyOnline();return Z(this.interruptReasons_)&&e}}jn.nextPersistentConnectionId_=0,jn.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Hn(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Hn(At,e),i=new Hn(At,t);return 0!==this.compare(n,i)}minPost(){return Hn.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn;class zn extends Wn{static get __EMPTY_NODE(){return Bn}static set __EMPTY_NODE(e){Bn=e}compare(e,t){return Mt(e.name,t.name)}isDefinedOn(e){throw E("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Hn.MIN}maxPost(){return new Hn(Ot,Bn)}makePost(e,t){return I("string"==typeof e,"KeyIndex indexValue must always be a string."),new Hn(e,Bn)}toString(){return".key"}}const Vn=new zn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Yn{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Yn.RED,this.left=null!=i?i:Gn.EMPTY_NODE,this.right=null!=r?r:Gn.EMPTY_NODE}copy(e,t,n,i,r){return new Yn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gn.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Gn.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Yn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Yn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Yn.RED=!0,Yn.BLACK=!1;class Gn{constructor(e,t=Gn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Yn.BLACK,null,null))}remove(e){return new Gn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Yn.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $n(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $n(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $n(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $n(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kn(e,t){return Mt(e.name,t.name)}function Qn(e,t){return Mt(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn;Gn.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Yn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Xn=function(e){return"number"==typeof e?"number:"+Wt(e):"string:"+e},Zn=function(e){if(e.isLeafNode()){const t=e.val();I("string"==typeof t||"number"==typeof t||"object"==typeof t&&J(t,".sv"),"Priority must be a string or number.")}else I(e===Jn||e.isEmpty(),"priority of unexpected type.");I(e===Jn||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ei,ti,ni;class ii{constructor(e,t=ii.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zn(this.priorityNode_)}static set __childrenNodeConstructor(e){ei=e}static get __childrenNodeConstructor(){return ei}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ii(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ii.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Rn(e)?this:".priority"===In(e)?this.priorityNode_:ii.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ii.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=In(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(I(".priority"!==n||1===En(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ii.__childrenNodeConstructor.EMPTY_NODE.updateChild(Tn(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Wt(this.value_):this.value_,this.lazyHash_=It(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ii.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ii.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ii.VALUE_TYPE_ORDER.indexOf(t),r=ii.VALUE_TYPE_ORDER.indexOf(n);return I(i>=0,"Unknown leaf type: "+t),I(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}ii.VALUE_TYPE_ORDER=["object","boolean","number","string"];const ri=new class extends Wn{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Mt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Hn.MIN}maxPost(){return new Hn(Ot,new ii("[PRIORITY-POST]",ni))}makePost(e,t){const n=ti(e);return new Hn(t,new ii("[PRIORITY-POST]",n))}toString(){return".priority"}},si=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/si,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ai=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Yn(a,o.node,Yn.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),h=r(l+1,i);return o=e[l],a=n?n(o):o,new Yn(a,o.node,Yn.BLACK,c,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),h=e[s],u=n?n(h):h;l(new Yn(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Yn.BLACK):(a(i,Yn.BLACK),a(i,Yn.RED))}return s}(new oi(e.length));return new Gn(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;const ci={};class hi{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return I(ci&&ri,"ChildrenNode.ts has not been loaded"),li=li||new hi({".priority":ci},{".priority":ri}),li}get(e){const t=X(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gn?t:null}hasIndex(e){return J(this.indexSet_,e.toString())}addIndex(e,t){I(e!==Vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Hn.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?ai(n,e.getCompare()):ci;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new hi(c,l)}addToIndexes(e,t){const n=ee(this.indexes_,((n,i)=>{const r=X(this.indexSet_,i);if(I(r,"Missing index implementation for "+i),n===ci){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Hn.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),ai(n,r.getCompare())}return ci}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Hn(e.name,i))),r.insert(e,e.node)}}));return new hi(n,this.indexSet_)}removeFromIndexes(e,t){const n=ee(this.indexes_,(n=>{if(n===ci)return n;{const i=t.get(e.name);return i?n.remove(new Hn(e.name,i)):n}}));return new hi(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class di{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zn(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ui||(ui=new di(new Gn(Qn),null,hi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ui}updatePriority(e){return this.children_.isEmpty()?this:new di(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?ui:t}}getChild(e){const t=In(e);return null===t?this:this.getImmediateChild(t).getChild(Tn(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Hn(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?ui:this.priorityNode_;return new di(i,s,r)}}updateChild(e,t){const n=In(e);if(null===n)return t;{I(".priority"!==In(e)||1===En(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Tn(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(ri,((s,o)=>{t[s]=o.val(e),n++,r&&di.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xn(this.getPriority().val())+":"),this.forEachChild(ri,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":It(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Hn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Hn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Hn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Hn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Hn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pi?-1:0}withIndex(e){if(e===Vn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new di(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ri),n=t.getIterator(ri);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Vn?null:this.indexMap_.get(e.toString())}}di.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const pi=new class extends di{constructor(){super(new Gn(Qn),di.EMPTY_NODE,hi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return di.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Hn,{MIN:{value:new Hn(At,di.EMPTY_NODE)},MAX:{value:new Hn(Ot,pi)}}),zn.__EMPTY_NODE=di.EMPTY_NODE,ii.__childrenNodeConstructor=di,Jn=pi,function(e){ni=e}(pi);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _i=!0;function fi(e,t=null){if(null===e)return di.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),I(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new ii(e,fi(t))}if(e instanceof Array||!_i){let n=di.EMPTY_NODE;return Ht(e,((t,i)=>{if(J(e,t)&&"."!==t.substring(0,1)){const e=fi(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(fi(t))}{const n=[];let i=!1;if(Ht(e,((e,t)=>{if("."!==e.substring(0,1)){const r=fi(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Hn(e,r)))}})),0===n.length)return di.EMPTY_NODE;const r=ai(n,Kn,(e=>e.name),Qn);if(i){const e=ai(n,ri.getCompare());return new di(r,fi(t),new hi({".priority":e},{".priority":ri}))}return new di(r,fi(t),hi.Default)}}!function(e){ti=e}(fi);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi extends Wn{constructor(e){super(),this.indexPath_=e,I(!Rn(e)&&".priority"!==In(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Mt(e.name,t.name):r}makePost(e,t){const n=fi(e),i=di.EMPTY_NODE.updateChild(this.indexPath_,n);return new Hn(t,i)}maxPost(){const e=di.EMPTY_NODE.updateChild(this.indexPath_,pi);return new Hn(Ot,e)}toString(){return kn(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new class extends Wn{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Mt(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Hn.MIN}maxPost(){return Hn.MAX}makePost(e,t){const n=fi(e);return new Hn(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e){return{type:"value",snapshotNode:e}}function vi(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ci(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function wi(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Ci(t,o)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(vi(t,n)):s.trackChildChange(wi(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(ri,((e,i)=>{t.hasChild(e)||n.trackChildChange(Ci(e,i))})),t.isLeafNode()||t.forEachChild(ri,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(wi(t,i,r))}else n.trackChildChange(vi(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?di.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.indexedFilter_=new bi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ii.getStartPost_(e),this.endPost_=Ii.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Hn(t,n))||(n=di.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=di.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(di.EMPTY_NODE);const r=this;return t.forEachChild(ri,((e,t)=>{r.matches(new Hn(e,t))||(i=i.updateImmediateChild(e,di.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Ii(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Hn(t,n))||(n=di.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=di.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=di.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(di.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,di.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;I(o.numChildren()===this.limit_,"");const a=new Hn(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:s(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(wi(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Ci(t,e));const n=o.updateImmediateChild(t,di.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(vi(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(Ci(l.name,l.node)),r.trackChildChange(vi(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,di.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ri}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:At}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ot}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ri}copy(){const e=new Ti;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Si(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ri?n="$priority":e.index_===mi?n="$value":e.index_===Vn?n="$key":(I(e.index_ instanceof gi,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Y(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Y(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Y(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Y(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Y(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ki(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ri&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends gn{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Pt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Ni.getListenId_(e,n),o={};this.listens_[s]=o;const a=Si(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),X(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ni.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Si(e._queryParams),n=e._path.toString(),i=new F;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ie(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=$(o.responseText)}catch(e){Dt("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Dt("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.rootNode_=di.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(){return{value:null,children:new Map}}function xi(e,t,n){if(Rn(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=In(t);e.children.has(i)||e.children.set(i,Ri());xi(e.children.get(i),t=Tn(t),n)}}function Di(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Di(i,new wn(t.toString()+"/"+e),n)}))}class Li{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ht(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Li(e);const n=1e4+2e4*Math.random();$t(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ht(e,((e,i)=>{i>0&&J(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),$t(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi,Mi;function Fi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Mi=Oi||(Oi={}))[Mi.OVERWRITE=0]="OVERWRITE",Mi[Mi.MERGE=1]="MERGE",Mi[Mi.ACK_USER_WRITE=2]="ACK_USER_WRITE",Mi[Mi.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class qi{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Oi.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Rn(this.path)){if(null!=this.affectedTree.value)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new wn(e));return new qi(bn(),t,this.revert)}}return I(In(this.path)===e,"operationForChild called for unrelated child."),new qi(Tn(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.source=e,this.path=t,this.type=Oi.LISTEN_COMPLETE}operationForChild(e){return Rn(this.path)?new Ui(this.source,bn()):new Ui(this.source,Tn(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Oi.OVERWRITE}operationForChild(e){return Rn(this.path)?new ji(this.source,bn(),this.snap.getImmediateChild(e)):new ji(this.source,Tn(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Oi.MERGE}operationForChild(e){if(Rn(this.path)){const t=this.children.subtree(new wn(e));return t.isEmpty()?null:t.value?new ji(this.source,bn(),t.value):new Hi(this.source,bn(),t)}return I(In(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hi(this.source,Tn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Rn(e))return this.isFullyInitialized()&&!this.filtered_;const t=In(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zi(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw E("Should only compare child_ events.");const i=new Hn(t.childName,t.snapshotNode),r=new Hn(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Vi(e,t){return{eventCache:e,serverCache:t}}function $i(e,t,n,i){return Vi(new Wi(t,n,i),e.serverCache)}function Yi(e,t,n,i){return Vi(e.eventCache,new Wi(t,n,i))}function Gi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ki(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;class Ji{constructor(e,t=(()=>(Qi||(Qi=new Gn(Ft)),Qi))()){this.value=e,this.children=t}static fromObject(e){let t=new Ji(null);return Ht(e,((e,n)=>{t=t.set(new wn(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:bn(),value:this.value};if(Rn(e))return null;{const n=In(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Tn(e),t);if(null!=r){return{path:Pn(new wn(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Rn(e))return this;{const t=In(e),n=this.children.get(t);return null!==n?n.subtree(Tn(e)):new Ji(null)}}set(e,t){if(Rn(e))return new Ji(t,this.children);{const n=In(e),i=(this.children.get(n)||new Ji(null)).set(Tn(e),t),r=this.children.insert(n,i);return new Ji(this.value,r)}}remove(e){if(Rn(e))return this.children.isEmpty()?new Ji(null):new Ji(null,this.children);{const t=In(e),n=this.children.get(t);if(n){const i=n.remove(Tn(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Ji(null):new Ji(this.value,r)}return this}}get(e){if(Rn(e))return this.value;{const t=In(e),n=this.children.get(t);return n?n.get(Tn(e)):null}}setTree(e,t){if(Rn(e))return t;{const n=In(e),i=(this.children.get(n)||new Ji(null)).setTree(Tn(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Ji(this.value,r)}}fold(e){return this.fold_(bn(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Pn(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,bn(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Rn(e))return null;{const i=In(e),r=this.children.get(i);return r?r.findOnPath_(Tn(e),Pn(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,bn(),t)}foreachOnPath_(e,t,n){if(Rn(e))return this;{this.value&&n(t,this.value);const i=In(e),r=this.children.get(i);return r?r.foreachOnPath_(Tn(e),Pn(t,i),n):new Ji(null)}}foreach(e){this.foreach_(bn(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Pn(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.writeTree_=e}static empty(){return new Xi(new Ji(null))}}function Zi(e,t,n){if(Rn(t))return new Xi(new Ji(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=xn(r,t);return s=s.updateChild(o,n),new Xi(e.writeTree_.set(r,s))}{const i=new Ji(n),r=e.writeTree_.setTree(t,i);return new Xi(r)}}}function er(e,t,n){let i=e;return Ht(n,((e,n)=>{i=Zi(i,Pn(t,e),n)})),i}function tr(e,t){if(Rn(t))return Xi.empty();{const n=e.writeTree_.setTree(t,new Ji(null));return new Xi(n)}}function nr(e,t){return null!=ir(e,t)}function ir(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(xn(n.path,t)):null}function rr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ri,((e,n)=>{t.push(new Hn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Hn(e,n.value))})),t}function sr(e,t){if(Rn(t))return e;{const n=ir(e,t);return new Xi(null!=n?new Ji(n):e.writeTree_.subtree(t))}}function or(e){return e.writeTree_.isEmpty()}function ar(e,t){return lr(bn(),e.writeTree_,t)}function lr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(I(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=lr(Pn(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Pn(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e,t){return br(t,e)}function hr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));I(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&ur(t,i.path)?r=!1:An(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=pr(e.allWrites,dr,bn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=tr(e.visibleWrites,i.path);else{Ht(i.children,(t=>{e.visibleWrites=tr(e.visibleWrites,Pn(i.path,t))}))}return!0}return!1}function ur(e,t){if(e.snap)return An(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&An(Pn(e.path,n),t))return!0;return!1}function dr(e){return e.visible}function pr(e,t,n){let i=Xi.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)An(n,e)?(t=xn(n,e),i=Zi(i,t,s.snap)):An(e,n)&&(t=xn(e,n),i=Zi(i,bn(),s.snap.getChild(t)));else{if(!s.children)throw E("WriteRecord should have .snap or .children");if(An(n,e))t=xn(n,e),i=er(i,t,s.children);else if(An(e,n))if(t=xn(e,n),Rn(t))i=er(i,bn(),s.children);else{const e=X(s.children,In(t));if(e){const n=e.getChild(Tn(t));i=Zi(i,bn(),n)}}}}}return i}function _r(e,t,n,i,r){if(i||r){const s=sr(e.visibleWrites,t);if(!r&&or(s))return n;if(r||null!=n||nr(s,bn())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(An(e.path,t)||An(t,e.path))};return ar(pr(e.allWrites,s,t),n||di.EMPTY_NODE)}return null}{const i=ir(e.visibleWrites,t);if(null!=i)return i;{const i=sr(e.visibleWrites,t);if(or(i))return n;if(null!=n||nr(i,bn())){return ar(i,n||di.EMPTY_NODE)}return null}}}function fr(e,t,n,i){return _r(e.writeTree,e.treePath,t,n,i)}function gr(e,t){return function(e,t,n){let i=di.EMPTY_NODE;const r=ir(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(ri,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=sr(e.visibleWrites,t);return n.forEachChild(ri,((e,t)=>{const n=ar(sr(r,new wn(e)),t);i=i.updateImmediateChild(e,n)})),rr(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return rr(sr(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function mr(e,t,n,i){return function(e,t,n,i,r){I(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Pn(t,n);if(nr(e.visibleWrites,s))return null;{const t=sr(e.visibleWrites,s);return or(t)?r.getChild(n):ar(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function yr(e,t){return function(e,t){return ir(e.visibleWrites,t)}(e.writeTree,Pn(e.treePath,t))}function vr(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=sr(e.visibleWrites,t),c=ir(l,bn());if(null!=c)a=c;else{if(null==n)return[];a=ar(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function Cr(e,t,n){return function(e,t,n,i){const r=Pn(t,n),s=ir(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return ar(sr(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function wr(e,t){return br(Pn(e.treePath,t),e.writeTree)}function br(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;I("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),I(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,wi(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Ci(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,vi(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw E("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,wi(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Tr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Wi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ki(this.viewCache_),r=vr(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e,t,n,i,r){const s=new Ir;let o,a;if(n.type===Oi.OVERWRITE){const l=n;l.source.fromUser?o=Pr(e,t,l.path,l.snap,i,r,s):(I(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Rn(l.path),o=Nr(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===Oi.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=Pn(n,i);Rr(t,In(c))&&(a=Pr(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=Pn(n,i);Rr(t,In(c))||(a=Pr(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(I(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Dr(e,t,l.path,l.children,i,r,a,s))}else if(n.type===Oi.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=yr(i,n))return t;{const a=new Tr(i,t,r),l=t.eventCache.getNode();let c;if(Rn(n)||".priority"===In(n)){let n;if(t.serverCache.isFullyInitialized())n=fr(i,Ki(t));else{const e=t.serverCache.getNode();I(e instanceof di,"serverChildren would be complete if leaf node"),n=gr(i,e)}c=e.filter.updateFullNode(l,n,s)}else{const r=In(n);let h=Cr(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=l.getImmediateChild(r)),c=null!=h?e.filter.updateChild(l,r,h,Tn(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,di.EMPTY_NODE,Tn(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=fr(i,Ki(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=yr(i,bn()),$i(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=yr(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Rn(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Nr(e,t,n,l.getNode().getChild(n),r,s,a,o);if(Rn(n)){let i=new Ji(null);return l.getNode().forEachChild(Vn,((e,t)=>{i=i.set(new wn(e),t)})),Dr(e,t,n,i,r,s,a,o)}return t}{let c=new Ji(null);return i.foreach(((e,t)=>{const i=Pn(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Dr(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Oi.LISTEN_COMPLETE)throw E("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=Yi(t,s.getNode(),s.isFullyInitialized()||Rn(n),s.isFiltered());return kr(e,o,n,i,Er,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Gi(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(yi(Gi(t)))}}(t,o,l),{viewCache:o,changes:l}}function kr(e,t,n,i,r,s){const o=t.eventCache;if(null!=yr(i,n))return t;{let a,l;if(Rn(n))if(I(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ki(t),r=gr(i,n instanceof di?n:di.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=fr(i,Ki(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=In(n);if(".priority"===c){I(1===En(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=mr(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const h=Tn(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=mr(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=Cr(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,r,s):o.getNode()}}return $i(t,a,o.isFullyInitialized()||Rn(n),e.filter.filtersNodes())}}function Nr(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(Rn(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=In(n);if(!l.isCompleteForPath(n)&&En(n)>1)return t;const r=Tn(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),e,s,r,Er,null)}const u=Yi(t,c,l.isFullyInitialized()||Rn(n),h.filtersNodes());return kr(e,u,n,r,new Tr(r,u,s),a)}function Pr(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const h=new Tr(r,t,s);if(Rn(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=$i(t,c,!0,e.filter.filtersNodes());else{const r=In(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=$i(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Tn(n),c=a.getNode().getImmediateChild(r);let u;if(Rn(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===Sn(s)&&e.getChild(Nn(s)).isEmpty()?e:e.updateChild(s,i):di.EMPTY_NODE}if(c.equals(u))l=t;else{l=$i(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Rr(e,t){return e.eventCache.isCompleteForChild(t)}function xr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Dr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Rn(n)?i:new Ji(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=xr(0,t.serverCache.getNode().getImmediateChild(n),i);c=Nr(e,c,new wn(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=xr(0,t.serverCache.getNode().getImmediateChild(n),i);c=Nr(e,c,new wn(n),l,r,s,o,a)}})),c}class Lr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new bi(n.getIndex()),r=(s=n).loadsAllData()?new bi(s.getIndex()):s.hasLimit()?new Ei(s):new Ii(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(di.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(di.EMPTY_NODE,a.getNode(),null),h=new Wi(l,o.isFullyInitialized(),i.filtersNodes()),u=new Wi(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Vi(u,h),this.eventGenerator_=new Bi(this.query_)}get query(){return this.query_}}function Ar(e,t){const n=Ki(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Rn(t)&&!n.getImmediateChild(In(t)).isEmpty())?n.getChild(t):null}function Or(e){return 0===e.eventRegistrations_.length}function Mr(e,t,n){const i=[];if(n){I(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Fr(e,t,n,i){t.type===Oi.MERGE&&null!==t.source.queryId&&(I(Ki(e.viewCache_),"We should always have a full cache before handling merges"),I(Gi(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=Sr(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,I(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),I(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),I(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,qr(e,s.changes,s.viewCache.eventCache.getNode(),null)}function qr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),zi(e,r,"child_removed",t,i,n),zi(e,r,"child_added",t,i,n),zi(e,r,"child_moved",s,i,n),zi(e,r,"child_changed",t,i,n),zi(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur,jr;class Hr{constructor(){this.views=new Map}}function Wr(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return I(null!=s,"SyncTree gave us an op for an invalid query."),Fr(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Fr(s,t,n,i));return r}}function Br(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=fr(n,r?i:null),s=!1;e?s=!0:i instanceof di?(e=gr(n,i),s=!1):(e=di.EMPTY_NODE,s=!1);const o=Vi(new Wi(e,s,!1),new Wi(i,r,!1));return new Lr(t,o)}return o}function zr(e,t,n,i,r,s){const o=Br(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(ri,((e,t)=>{i.push(vi(e,t))}));return n.isFullyInitialized()&&i.push(yi(n.getNode())),qr(e,i,n.getNode(),t)}(o,n)}function Vr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Qr(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(Mr(r,n,i)),Or(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(Mr(t,n,i)),Or(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Qr(e)&&s.push(new(I(Ur,"Reference.ts has not been loaded"),Ur)(t._repo,t._path)),{removed:s,events:o}}function $r(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Yr(e,t){let n=null;for(const i of e.views.values())n=n||Ar(i,t);return n}function Gr(e,t){if(t._queryParams.loadsAllData())return Jr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Kr(e,t){return null!=Gr(e,t)}function Qr(e){return null!=Jr(e)}function Jr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr=1;class Zr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ji(null),this.pendingWriteTree_={visibleWrites:Xi.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function es(e,t,n,i,r){return function(e,t,n,i,r){I(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Zi(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?cs(e,new ji({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ts(e,t,n,i){!function(e,t,n,i){I(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=er(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const r=Ji.fromObject(n);return cs(e,new Hi({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function ns(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(hr(e.pendingWriteTree_,t)){let t=new Ji(null);return null!=i.snap?t=t.set(bn(),!0):Ht(i.children,(e=>{t=t.set(new wn(e),!0)})),cs(e,new qi(i.path,t,n))}return[]}function is(e,t,n){return cs(e,new ji({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function rs(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Kr(o,t))){const l=Vr(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Qr(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Qr(t)){return[Jr(t)]}{let e=[];return t&&(e=$r(t)),Ht(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=ds(e,i);e.listenProvider_.startListening(ys(r),ps(e,r),s.hashFn,s.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(ys(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(_s(t));e.listenProvider_.stopListening(ys(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=_s(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function ss(e,t,n,i){const r=fs(e,i);if(null!=r){const i=gs(r),s=i.path,o=i.queryId,a=xn(s,t);return ms(e,s,new ji(Fi(o),a,n))}return[]}function os(e,t,n,i=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=xn(e,r);s=s||Yr(t,n),o=o||Qr(t)}));let a,l=e.syncPointTree_.get(r);if(l?(o=o||Qr(l),s=s||Yr(l,bn())):(l=new Hr,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=s)a=!0;else{a=!1,s=di.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Yr(t,bn());n&&(s=s.updateImmediateChild(e,n))}))}const c=Kr(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=_s(t);I(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Xr++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=zr(l,t,n,cr(e.pendingWriteTree_,r),s,a);if(!c&&!o&&!i){const n=Gr(l,t);h=h.concat(function(e,t,n){const i=t._path,r=ps(e,t),s=ds(e,n),o=e.listenProvider_.startListening(ys(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)I(!Qr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Rn(e)&&t&&Qr(t))return[Jr(t).query];{let e=[];return t&&(e=e.concat($r(t).map((e=>e.query)))),Ht(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(ys(i),ps(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return h}function as(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Yr(n,xn(e,t));if(i)return i}));return _r(i,t,r,n,!0)}function ls(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=xn(e,n);i=i||Yr(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||Yr(r,bn()):(r=new Hr,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Wi(i,!0,!1):null;return function(e){return Gi(e.viewCache_)}(Br(r,t,cr(e.pendingWriteTree_,t._path),s?o.getNode():di.EMPTY_NODE,s))}function cs(e,t){return hs(t,e.syncPointTree_,null,cr(e.pendingWriteTree_,bn()))}function hs(e,t,n,i){if(Rn(e.path))return us(e,t,n,i);{const r=t.get(bn());null==n&&null!=r&&(n=Yr(r,bn()));let s=[];const o=In(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=wr(i,o);s=s.concat(hs(a,l,e,t))}return r&&(s=s.concat(Wr(r,e,i,n))),s}}function us(e,t,n,i){const r=t.get(bn());null==n&&null!=r&&(n=Yr(r,bn()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=wr(i,t),l=e.operationForChild(t);l&&(s=s.concat(us(l,r,o,a)))})),r&&(s=s.concat(Wr(r,e,i,n))),s}function ds(e,t){const n=t.query,i=ps(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||di.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=fs(e,n);if(i){const n=gs(i),r=n.path,s=n.queryId,o=xn(r,t);return ms(e,r,new Ui(Fi(s),o))}return[]}(e,n._path,i):function(e,t){return cs(e,new Ui({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return rs(e,n,null,i)}}}}function ps(e,t){const n=_s(t);return e.queryToTagMap.get(n)}function _s(e){return e._path.toString()+"$"+e._queryIdentifier}function fs(e,t){return e.tagToQueryMap.get(t)}function gs(e){const t=e.indexOf("$");return I(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new wn(e.substr(0,t))}}function ms(e,t,n){const i=e.syncPointTree_.get(t);I(i,"Missing sync point for query tag that we're tracking");return Wr(i,n,cr(e.pendingWriteTree_,t),null)}function ys(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(I(jr,"Reference.ts has not been loaded"),jr)(e._repo,e._path):e}class vs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new vs(t)}node(){return this.node_}}class Cs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pn(this.path_,e);return new Cs(this.syncTree_,t)}node(){return as(this.syncTree_,this.path_)}}const ws=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},bs=function(e,t,n){return e&&"object"==typeof e?(I(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Is(e[".sv"],t,n):"object"==typeof e[".sv"]?Es(e[".sv"],t):void I(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Is=function(e,t,n){if("timestamp"===e)return n.timestamp;I(!1,"Unexpected server value: "+e)},Es=function(e,t,n){e.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&I(!1,"Unexpected increment value: "+i);const r=t.node();if(I(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Ts=function(e,t,n,i){return ks(t,new Cs(n,e),i)},Ss=function(e,t,n){return ks(e,new vs(t),n)};function ks(e,t,n){const i=e.getPriority().val(),r=bs(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=bs(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new ii(s,fi(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new ii(r))),i.forEachChild(ri,((e,i)=>{const r=ks(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ps(e,t){let n=t instanceof wn?t:new wn(t),i=e,r=In(n);for(;null!==r;){const e=X(i.node.children,r)||{children:{},childCount:0};i=new Ns(r,i,e),n=Tn(n),r=In(n)}return i}function Rs(e){return e.node.value}function xs(e,t){e.node.value=t,Ms(e)}function Ds(e){return e.node.childCount>0}function Ls(e,t){Ht(e.node.children,((n,i)=>{t(new Ns(n,e,i))}))}function As(e,t,n,i){n&&!i&&t(e),Ls(e,(e=>{As(e,t,!0,i)})),n&&i&&t(e)}function Os(e){return new wn(null===e.parent?e.name:Os(e.parent)+"/"+e.name)}function Ms(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Rs(e)&&!Ds(e)}(n),r=J(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ms(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ms(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Fs=/[\[\].#$\/\u0000-\u001F\u007F]/,qs=/[\[\].#$\u0000-\u001F\u007F]/,Us=10485760,js=function(e){return"string"==typeof e&&0!==e.length&&!Fs.test(e)},Hs=function(e){return"string"==typeof e&&0!==e.length&&!qs.test(e)},Ws=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Lt(e)||e&&"object"==typeof e&&J(e,".sv")},Bs=function(e,t,n,i){i&&void 0===t||zs(se(e,"value"),t,n)},zs=function(e,t,n){const i=n instanceof wn?new On(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Fn(i));if("function"==typeof t)throw new Error(e+"contains a function "+Fn(i)+" with contents = "+t.toString());if(Lt(t))throw new Error(e+"contains "+t.toString()+" "+Fn(i));if("string"==typeof t&&t.length>3495253.3333333335&&ae(t)>Us)throw new Error(e+"contains a string greater than "+Us+" utf8 bytes "+Fn(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Ht(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!js(t)))throw new Error(e+" contains an invalid key ("+t+") "+Fn(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=ae(a),Mn(o),zs(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=ae(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Fn(i)+" in addition to actual children.")}},Vs=function(e,t,n,i){if(i&&void 0===t)return;const r=se(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const s=[];Ht(t,((e,t)=>{const i=new wn(e);if(zs(r,t,Pn(n,i)),".priority"===Sn(i)&&!Ws(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=kn(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!js(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Dn);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&An(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,s)},$s=function(e,t,n,i){if(!(i&&void 0===n||Hs(n)))throw new Error(se(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ys=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$s(e,t,n,i)},Gs=function(e,t){if(".info"===In(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ks=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!js(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Hs(e)}(n))throw new Error(se(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Js(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ln(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Xs(e,t,n){Js(e,n),eo(e,(e=>Ln(e,t)))}function Zs(e,t,n){Js(e,n),eo(e,(e=>An(e,t)||An(t,e)))}function eo(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(to(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function to(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Tt&&Nt("event: "+n.toString()),Vt(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="repo_interrupt",io=25;class ro{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ri(),this.transactionQueueTree_=new Ns,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function so(e,t,n){if(e.stats_=an(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ni(e.repoInfo_,((t,n,i,r)=>{lo(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>co(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Y(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new jn(e.repoInfo_,t,((t,n,i,r)=>{lo(e,t,n,i,r)}),(t=>{co(e,t)}),(t=>{!function(e,t){Ht(t,((t,n)=>{ho(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return on[n]||(on[n]=t()),on[n]}(e.repoInfo_,(()=>new Ai(e.stats_,e.server_))),e.infoData_=new Pi,e.infoSyncTree_=new Zr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=is(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),ho(e,"connected",!1),e.serverSyncTree_=new Zr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Zs(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function oo(e){const t=e.infoData_.getNode(new wn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ao(e){return ws({timestamp:oo(e)})}function lo(e,t,n,i,r){e.dataUpdateCount++;const s=new wn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=ee(n,(e=>fi(e)));o=function(e,t,n,i){const r=fs(e,i);if(r){const i=gs(r),s=i.path,o=i.queryId,a=xn(s,t),l=Ji.fromObject(n);return ms(e,s,new Hi(Fi(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=fi(n);o=ss(e.serverSyncTree_,s,t,r)}else if(i){const t=ee(n,(e=>fi(e)));o=function(e,t,n){const i=Ji.fromObject(n);return cs(e,new Hi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=fi(n);o=is(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Co(e,s)),Zs(e.eventQueue_,a,o)}function co(e,t){ho(e,"connected",t),!1===t&&function(e){go(e,"onDisconnectEvents");const t=ao(e),n=Ri();Di(e.onDisconnect_,bn(),((i,r)=>{const s=Ts(i,r,e.serverSyncTree_,t);xi(n,i,s)}));let i=[];Di(n,bn(),((t,n)=>{i=i.concat(is(e.serverSyncTree_,t,n));const r=To(e,t);Co(e,r)})),e.onDisconnect_=Ri(),Zs(e.eventQueue_,bn(),i)}(e)}function ho(e,t,n){const i=new wn("/.info/"+t),r=fi(n);e.infoData_.updateSnapshot(i,r);const s=is(e.infoSyncTree_,i,r);Zs(e.eventQueue_,i,s)}function uo(e){return e.nextWriteId_++}function po(e,t,n,i,r){go(e,"set",{path:t.toString(),value:n,priority:i});const s=ao(e),o=fi(n,i),a=as(e.serverSyncTree_,t),l=Ss(o,a,s),c=uo(e),h=es(e.serverSyncTree_,t,l,c,!0);Js(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||Dt("set at "+t+" failed: "+n);const o=ns(e.serverSyncTree_,c,!s);Zs(e.eventQueue_,t,o),mo(e,r,n,i)}));const u=To(e,t);Co(e,u),Zs(e.eventQueue_,u,[])}function _o(e,t,n){let i;i=".info"===In(t._path)?rs(e.infoSyncTree_,t,n):rs(e.serverSyncTree_,t,n),Xs(e.eventQueue_,t._path,i)}function fo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(no)}function go(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Nt(n,...t)}function mo(e,t,n,i){t&&Vt((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function yo(e,t,n){return as(e.serverSyncTree_,t,n)||di.EMPTY_NODE}function vo(e,t=e.transactionQueueTree_){if(t||Eo(e,t),Rs(t)){const n=bo(e,t);I(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=yo(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];I(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=xn(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{go(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(ns(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Eo(e,Ps(e.transactionQueueTree_,t)),vo(e,e.transactionQueueTree_),Zs(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Vt(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Dt("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Co(e,t)}}),o)}(e,Os(t),n)}else Ds(t)&&Ls(t,(t=>{vo(e,t)}))}function Co(e,t){const n=wo(e,t),i=Os(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const l=t[s],c=xn(n,l.path);let h,u=!1;if(I(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,r=r.concat(ns(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=io)u=!0,h="maxretry",r=r.concat(ns(e.serverSyncTree_,l.currentWriteId,!0));else{const n=yo(e,l.path,o);l.currentInputSnapshot=n;const i=t[s].update(n.val());if(void 0!==i){zs("transaction failed: Data returned ",i,l.path);let t=fi(i);"object"==typeof i&&null!=i&&J(i,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=ao(e),c=Ss(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=uo(e),o.splice(o.indexOf(s),1),r=r.concat(es(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(ns(e.serverSyncTree_,s,!0))}else u=!0,h="nodata",r=r.concat(ns(e.serverSyncTree_,l.currentWriteId,!0))}Zs(e.eventQueue_,n,r),r=[],u&&(t[s].status=2,a=t[s].unwatcher,setTimeout(a,Math.floor(0)),t[s].onComplete&&("nodata"===h?i.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):i.push((()=>t[s].onComplete(new Error(h),!1,null)))))}var a;Eo(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Vt(i[e]);vo(e,e.transactionQueueTree_)}(e,bo(e,n),i),i}function wo(e,t){let n,i=e.transactionQueueTree_;for(n=In(t);null!==n&&void 0===Rs(i);)i=Ps(i,n),n=In(t=Tn(t));return i}function bo(e,t){const n=[];return Io(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Io(e,t,n){const i=Rs(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Ls(t,(t=>{Io(e,t,n)}))}function Eo(e,t){const n=Rs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,xs(t,n.length>0?n:void 0)}Ls(t,(t=>{Eo(e,t)}))}function To(e,t){const n=Os(wo(e,t)),i=Ps(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{So(e,t)})),So(e,i),As(i,(t=>{So(e,t)})),n}function So(e,t){const n=Rs(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(I(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(I(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(ns(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?xs(t,void 0):n.length=s+1,Zs(e.eventQueue_,Os(t),r);for(let e=0;e<i.length;e++)Vt(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=function(e,t){const n=No(e),i=n.namespace;"firebase.com"===n.domain&&xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new tn(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new wn(n.pathString)}},No=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Dt(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},Po="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ro=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const s=new Array(8);for(r=7;r>=0;r--)s[r]=Po.charAt(n%64),n=Math.floor(n/64);I(0===n,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)o+=Po.charAt(t[r]);return I(20===o.length,"nextPushId: Length should be 20."),o}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Y(this.snapshot.exportVal())}}class Do{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ao{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Rn(this._path)?null:Sn(this._path)}get ref(){return new Oo(this._repo,this._path)}get _queryIdentifier(){const e=ki(this._queryParams),t=Ut(e);return"{}"===t?"default":t}get _queryObject(){return ki(this._queryParams)}isEqual(e){if(!((e=le(e))instanceof Ao))return!1;const t=this._repo===e._repo,n=Ln(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Oo extends Ao{constructor(e,t){super(e,t,new Ti,!1)}get parent(){const e=Nn(this._path);return null===e?null:new Oo(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Mo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new wn(e),n=qo(this.ref,e);return new Mo(this._node.getChild(t),n,ri)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Mo(n,qo(this.ref,t),ri))))}hasChild(e){const t=new wn(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fo(e,t){return(e=le(e))._checkNotDeleted("ref"),void 0!==t?qo(e._root,t):e._root}function qo(e,t){return null===In((e=le(e))._path)?Ys("child","path",t,!1):$s("child","path",t,!1),new Oo(e._repo,Pn(e._path,t))}function Uo(e,t){e=le(e),Gs("push",e._path),Bs("push",t,e._path,!0);const n=oo(e._repo),i=Ro(n),r=qo(e,i),s=qo(e,i);let o;return o=null!=t?jo(s,t).then((()=>s)):Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function jo(e,t){e=le(e),Gs("set",e._path),Bs("set",t,e._path,!1);const n=new F;return po(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Ho(e,t){Vs("update",t,e._path,!1);const n=new F;return function(e,t,n,i){go(e,"update",{path:t.toString(),value:n});let r=!0;const s=ao(e),o={};if(Ht(n,((n,i)=>{r=!1,o[n]=Ts(Pn(t,n),fi(i),e.serverSyncTree_,s)})),r)Nt("update() called with empty data.  Don't do anything."),mo(0,i,"ok",void 0);else{const r=uo(e),s=ts(e.serverSyncTree_,t,o,r);Js(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||Dt("update at "+t+" failed: "+n);const a=ns(e.serverSyncTree_,r,!o),l=a.length>0?Co(e,t):t;Zs(e.eventQueue_,l,a),mo(0,i,n,s)})),Ht(n,(n=>{const i=To(e,Pn(t,n));Co(e,i)})),Zs(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function Wo(e){e=le(e);const t=new Lo((()=>{})),n=new Bo(t);return function(e,t,n){const i=ls(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=fi(i).withIndex(t._queryParams.getIndex());let s;if(os(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=is(e.serverSyncTree_,t._path,r);else{const n=ps(e.serverSyncTree_,t);s=ss(e.serverSyncTree_,t._path,r,n)}return Zs(e.eventQueue_,t._path,s),rs(e.serverSyncTree_,t,n,null,!0),r}),(n=>(go(e,"get for query "+Y(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Mo(t,new Oo(e._repo,e._path),e._queryParams.getIndex())))}class Bo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new xo("value",this,new Mo(e.snapshotNode,new Oo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Do(this,e,t):null}matches(e){return e instanceof Bo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class zo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Do(this,e,t):null}createEvent(e,t){I(null!=e.childName,"Child events should have a childName.");const n=qo(new Oo(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new xo(e.type,this,new Mo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zo&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Vo(e,t,n,i,r){let s;if("object"==typeof i&&(s=void 0,r=i),"function"==typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{_o(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Lo(n,s||void 0),a="value"===t?new Bo(o):new zo(t,o);return function(e,t,n){let i;i=".info"===In(t._path)?os(e.infoSyncTree_,t,n):os(e.serverSyncTree_,t,n),Xs(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>_o(e._repo,e,a)}function $o(e,t,n,i){return Vo(e,"value",t,n,i)}!function(e){I(!Ur,"__referenceConstructor has already been defined"),Ur=e}(Oo),function(e){I(!jr,"__referenceConstructor has already been defined"),jr=e}(Oo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yo="FIREBASE_DATABASE_EMULATOR_HOST",Go={};let Ko=!1;function Qo(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Nt("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,l,c=ko(s,r),h=c.repoInfo;void 0!==a&&a.env&&(l=a.env[Yo]),l?(o=!0,s=`http://${l}?ns=${h.namespace}`,c=ko(s,r),h=c.repoInfo):o=!c.repoInfo.secure;const u=r&&o?new Kt(Kt.OWNER):new Gt(e.name,e.options,t);Ks("Invalid Firebase Database URL",c),Rn(c.path)||xt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=Go[t.name];r||(r={},Go[t.name]=r);let s=r[e.toURLString()];s&&xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new ro(e,Ko,n,i),r[e.toURLString()]=s,s}(h,e,u,new Yt(e.name,n));return new Jo(d,e)}class Jo{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(so(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Oo(this._repo,bn())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Go[t];n&&n[e.key]===e||xt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),fo(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&xt("Cannot call "+e+" on a deleted database.")}}function Xo(e=Ze(),t){const n=Ke(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=O("database");e&&function(e,t,n,i={}){e=le(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&xt("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Kt(Kt.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:q(i.mockUserToken,e.app.options.projectId);s=new Kt(t)}!function(e,t,n,i){e.repoInfo_=new tn(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...e)}return n}jn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},jn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){ft="9.19.1",Ge(new ce("database",((e,{instanceIdentifier:t})=>Qo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),et(pt,_t,e),et(pt,_t,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();var Zo={};Zo=new URL(r("27Lyk").resolve("eh6G4"),import.meta.url).toString();var ea={};ea=new URL(r("27Lyk").resolve("7kntu"),import.meta.url).toString();var ta={};function na(){if(document.body.innerHTML='\n    <header><h1>Lvls</h1></header>\n        <nav>\n            <ul>\n                <li><a id="home" href="Home">Home</a></li>\n              \n                <li><a href id="LogOut">LogOut</a></li>\n            </ul>\n        </nav>\n\n        <aside>\n        </aside>\n\n        <main>\n          <div>\n            <img id="profilePic" width="300" src="/src/images/logo.png" alt="profilePic">\n            <div>\n              <h2 id="anvandare">username</h2>\n              <h2 id="mailaddress">email</h2>\n              <button id="addStatus">Addstatus</button>\n            </div>\n          </div>\n\n          <div>\n            <label for="status"></label> <input id="statusUpdate" type="text" placeholder="statsupdate"  >\n            <h4 id="addeddupdate"></h4>\n          </div>\n        </main>\n\n\n        <footer>\n          <button id="deleteBtn">Delete createAccount</button>\n        </footer>\n    ',console.log(localStorage.getItem("username")),null==localStorage.getItem("username"))return alert("You are logged out"),void sa();let e=document.querySelector("#home");console.log(e),e.addEventListener("click",(()=>{}));let t=document.querySelector("#statusUpdate"),n=document.querySelector("#LogOut"),i=document.querySelector("#deleteBtn"),r=document.querySelector("#addStatus"),s=document.querySelector("#anvandare"),o=document.querySelector("#mailaddress"),a=document.querySelector("#profilePic"),l=document.querySelector("aside"),c=document.querySelector("#addeddupdate");const h=Fo(oa,localStorage.id+"/update_status"),u=Fo(oa,localStorage.id);r.addEventListener("click",(()=>{""!=t.value&&Wo(qo(u,"/")).then((e=>{e.key;const n=e.val();let i;i=null==n.update_status?0:n.update_status.length,Ho(h,{[i]:t.value}).then((()=>{console.log("updated!!!")}))}))})),$o(u,(e=>{e.key;const t=e.val();console.log("display: ",t.update_status),c.innerHTML=t.update_status.join("<br>")})),console.log(l),n.addEventListener("click",(()=>{localStorage.removeItem("email"),localStorage.removeItem("username"),localStorage.removeItem("picChoice"),localStorage.removeItem("id")})),Wo(qo(aa,"/")).then((e=>{console.log("get"),e.forEach((e=>{e.key;const t=e.val(),n=t.update_status.length-1;let i="";"pic1.jpg"==t.profile_picture?i=new URL(Zo).toString():"pic2.jpg"==t.profile_picture?i=new URL(ea).toString():"pic3.jpg"==t.profile_picture&&(i=new URL(ta).toString()),console.log(i);let r=document.createElement("div");r.addEventListener("click",(()=>{!function(e){console.clear(),console.log(e),document.body.innerHTML='\n    <header><h1>Lvls</h1></header>\n        <nav>\n            <ul>\n                <li><a id="home" href="Home">Home</a></li>\n                <li><a id="profilePage">Profile</a></li>\n                <li><a href id="LogOut">LogOut</a></li>\n            </ul>\n        </nav>\n\n        <aside>\n        </aside>\n\n        <main>\n          <div>\n            <img id="profilePic" width="300" src="/src/images/logo.png" alt="profilePic">\n            <div>\n              <h2 id="anvandare"> OTHER username </h2>\n              <h2 id="mailaddress">OTHER email</h2>\n            </div>\n          </div>\n\n          <div>\n            <label for="status">Status uppdateringar</label>\n            <ul id="statsupdate">\n       \n            </ul>\n          </div>\n        </main>\n\n\n        <footer>\n\n        </footer>\n    ';let t=document.querySelector("#profilePic"),n=document.querySelector("#anvandare"),i=document.querySelector("#mailaddress"),r=document.querySelector("#statsupdate"),s=document.querySelector("#profilePage");s.addEventListener("click",(()=>{na()})),console.log(n,i,r,t,s),n.innerHTML=e.username,i.innerHTML=e.email;let o=document.createElement("li");o.innerHTML=e.update_status.join("<br>"),r.appendChild(o),t.src=e.profile_picture,"pic1.jpg"==e.profile_picture?t.src=ca.href:"pic2.jpg"==e.profile_picture?t.src=ua.href:"pic3.jpg"==e.profile_picture&&(t.src=pa.href)}(t)}));let s=document.createElement("h3");s.innerHTML=t.username;let o=document.createElement("img");o.src=i,o.height=85;let a=document.createElement("p");a.innerHTML=t.update_status[n],r.appendChild(o),r.appendChild(s),r.appendChild(a),l.appendChild(r)}))})),s.innerHTML=localStorage.getItem("username"),o.innerHTML=localStorage.getItem("email")?.toString()??"error",a.src=localStorage.getItem("picChoice"),i.addEventListener("click",(()=>{var e;confirm("are you sure?")&&(e=Fo(Xo(),localStorage.getItem("id")),Gs("remove",e._path),jo(e,null),localStorage.removeItem("email"),localStorage.removeItem("username"),localStorage.removeItem("picChoice"),localStorage.removeItem("id"),ra())}))}ta=new URL(r("27Lyk").resolve("dwhsO"),import.meta.url).toString();var ia={};function ra(){document.body.innerHTML='<main>\n    \x3c!-- head --\x3e\n    <div id="header-data">\n        <div class="profile">\n            \x3c!-- <h2>user</h2> --\x3e\n        </div>\n        <div class="logo">\n            <h1 id="home">Lvls</h1>\n            <h2 id="topic">Register</h2>\n            <a  id="login"> << go back to login</a>\n        </div>\n    </div>\n\n    \x3c!-- log in --\x3e\n\n    <div class="form-wrapper col">\n        <div class="row">\n        </div>\n        <form id="login-form">\n            <div class="inputs-div">\n                <label for="username">Username:</label>\n                <input type="text" id="username" name="username" value="Baby" required />\n\n                <label for="password">Password:</label>\n                <input type="password" id="password" name="password" value="Caddy" required />\n\n                <label for="email">Email:</label>\n                <input type="email" id="email" name="email" value="Mail" required />\n            </div>\n                <img class="choosePic" width="150px" src="../src/images/pic1.jpg" alt="pic1" >\n            <input type="radio"  name="fav_language" value="pic1.jpg" required/>\n              <label for="optionone">option 1</label><br />\n\n             <img class="choosePic" width="150 px" src=".//images/pic2.jpg" alt="pic2">\n            <input type="radio"  name="fav_language" value="pic2.jpg" required />\n              <label for="optiontwo">option 2</label><br />\n\n             <img class="choosePic" width="150 px" src=".//images/pic3.jpg" alt="pic3">\n            <input type="radio" name="fav_language" value="pic3.jpg" required />\n              <label for="optionthree">option 3</label><br />\n\n             \n            \x3c!-- <input type="radio" id="javascript" name="fav_language" value="pic3.jpg" />\n            <label for="javascript">option 3</label> --\x3e\n            <input type="submit" id="loginbutton" value="Create createAccount">\n        </form>\n    </div>\n</main>\n    ';let e=document.querySelectorAll(".choosePic");e[0].src=ca.href,e[1].src=ua.href,e[2].src=pa.href;let t,n=document.querySelector("#loginbutton"),i=document.querySelector("#login"),r=document.querySelector("#username"),s=document.querySelector("#password"),o=document.querySelector("#email");i.addEventListener("click",(e=>sa())),n.addEventListener("click",(e=>async function(e){e.preventDefault(),t=document.querySelector("input[type = radio]:checked");const n=Fo(Xo(),"/");if(console.log("pictureChoice: ",t),""==r.value)return void alert("username is required");if(""==s.value)return void alert("password is required");if(""==o.value)return void alert("email is required");if(null==t)return void alert("no picture is required");let i=!1;if(await Wo(qo(aa,"/")).then((e=>{console.log("get"),e.forEach((e=>{e.key;const t=e.val();console.log(r.value+"    compare:    "+t.username),console.log(NaN+t.profile_picture),console.log(t.update_status[1]),r.value!=t.username&&o.value!=t.email||(console.warn("Username/email Match"),i=!0)}))})),i)return void alert("username / email is not unique");localStorage.setItem("id",Uo(n,{username:r.value,email:o.value,password:s.value,profile_picture:t.value,update_status:{0:"beginning",1:"end"}}).key),alert("account is registered"),console.log("aregisteredcreateAccount");new URL(ia).toString();console.log(ca.href,ua.href,pa.href),localStorage.setItem("username",r.value),localStorage.setItem("email",o.value),"pic1.jpg"==t.value?localStorage.setItem("picChoice",ca.href):"pic2.jpg"==t.value?localStorage.setItem("picChoice",ua.href):localStorage.setItem("picChoice",pa.href);na()}(e)))}function sa(){document.body.innerHTML='\n    <form id="login-form">\n    <div class="inputs-div">\n\n        <label for="email">Email:</label>\n        <input type="email" id="email" name="email" value="Mail" required />\n\n        <label for="password">Password:</label>\n        <input type="password" id="password" name="password" value="Caddy" required />\n    </div>\n\n        <input type="submit" id="loginbutton" value="login">\n    </form>\n    <a id="registerLink"> >> dont have an createAccount?, register for free</a>\n\n    ',document.getElementById("registerLink").addEventListener("click",(()=>{ra()}));let e=document.querySelector("#email"),t=document.querySelector("#password"),n=document.querySelector("#loginbutton");n?.addEventListener("click",(n=>{n.preventDefault(),console.log("input:",e.value,t.value),console.log(aa.toString(),"baseURL"),$o(aa,(n=>{n.forEach((n=>{const i=n.key,r=n.val();console.log(r.email,r.password),e.value==r.email&&t.value==r.password?(console.warn("allt är  MATCHING"),localStorage.setItem("id",i),localStorage.setItem("username",r.username),localStorage.setItem("email",r.email),"pic1.jpg"==r.profile_picture?localStorage.setItem("picChoice",ca.href):"pic2.jpg"==r.profile_picture?localStorage.setItem("picChoice",ua.href):localStorage.setItem("picChoice",pa.href),na()):console.error("inget är MATCHING")}))}),{onlyOnce:!0})}))}ia=new URL(r("27Lyk").resolve("c8sVJ"),import.meta.url).toString();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
et("firebase","9.19.1","app");const oa=Xo(Xe({apiKey:"AIzaSyCfC2UlOe1c55GejxC8HP97T9qwbScEwKM",authDomain:"jssma-4dd99.firebaseapp.com",databaseURL:"https://jssma-4dd99-default-rtdb.europe-west1.firebasedatabase.app",projectId:"jssma-4dd99",storageBucket:"jssma-4dd99.appspot.com",messagingSenderId:"875237018330",appId:"1:875237018330:web:8311e6f67060cebe3bb3e3",measurementId:"G-F015DCTN7N"}));let aa=Fo(oa,"/");var la;la=new URL(r("27Lyk").resolve("OUIEf"),import.meta.url).toString();let ca=new URL(la);var ha;ha=new URL(r("27Lyk").resolve("7RMGt"),import.meta.url).toString();let ua=new URL(ha);var da;da=new URL(r("27Lyk").resolve("6iJ57"),import.meta.url).toString();let pa=new URL(da);window.addEventListener("load",(e=>{na()}));
//# sourceMappingURL=index.f2855304.js.map
