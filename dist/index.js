"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=String.fromCharCode(8203);function splitText(e,t,n=" "){const r=e.substring(0,t).lastIndexOf(n),o=-1===r?t:r;return e.substring(0,o)}function isObject(e){return!("object"!=typeof e||!e)&&e.constructor===Object}const t=["string","bigint","number","boolean"];function isPrimitive(e){return t.includes(typeof e)}function deepClone(e){if(null===e||isPrimitive(e))return e;if(Array.isArray(e)){const t=[];for(const n of e)t.push(deepClone(n));return t}if(isObject(e)){const t={};for(const[n,r]of Object.entries(e))t[n]=deepClone(r);return t}if(e instanceof Map){const t=new e.constructor;for(const[n,r]of e.entries())t.set(n,deepClone(r));return t}if(e instanceof Set){const t=new e.constructor;for(const n of e.values())t.add(deepClone(n));return t}return e}const n=String.fromCharCode(8203);function isFunction(e){return"function"==typeof e}function isNullOrUndefined(e){return null==e}const r=/[-/\\^$*+?.()|[\]{}]/g;const o=/[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g,i={textchannel:"TextChannel",voicechannel:"VoiceChannel",categorychannel:"CategoryChannel",guildmember:"GuildMember"};exports.arrayStrictEquals=function arrayStrictEquals(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n]||typeof e[n]!=typeof t[n])return!1;return!0},exports.chunk=function chunk(e,t){if(!Array.isArray(e))throw new TypeError("entries must be an array.");if(!Number.isInteger(t))throw new TypeError("chunkSize must be an integer.");if(t<1)throw new RangeError("chunkSize must be 1 or greater.");const n=e.slice(),r=[];for(;n.length;)r.push(n.splice(0,t));return r},exports.classExtends=function classExtends(e,t){let n=e;for(;null!==n;){if(n===t)return!0;n=Object.getPrototypeOf(n)}return!1},exports.codeBlock=function codeBlock(t,n){return"string"==typeof n?0===n.length?`\`\`\`${e}\`\`\``:`\`\`\`${t}\n${n.replace(/```/,`\`${e}\`\``).replace(/`$/g,`\`${e}`)}\`\`\``:`\`\`\`${t}\n${n||e}\`\`\``},exports.cutText=function cutText(e,t){if(e.length<t)return e;const n=splitText(e,t-3);return n.length<t-3?`${n}...`:`${n.slice(0,t-3)}...`},exports.debounce=function debounce(e,t={}){var n;let r,o,i,s,u=0;const c=null!==(n=t.wait)&&void 0!==n?n:0,l="number"==typeof t.maxWait?Math.max(t.maxWait,c):null;function invokeFunc(t){const n=r;return r=void 0,u=t,o=e(...n),o}function shouldInvoke(e){const t=e-s;return void 0===s||t>=c||t<0||null!==l&&e-u>=l}function timerExpired(){const e=Date.now();shouldInvoke(e)?trailingEdge(e):i=setTimeout(timerExpired,function remainingWait(e){const t=e-u,n=c-(e-s);return null===l?n:Math.min(n,l-t)}(e))}function trailingEdge(e){return i=void 0,invokeFunc(e)}function debounced(...e){const t=Date.now(),n=shouldInvoke(t);if(r=e,s=t,n){if(void 0===i)return function leadingEdge(e){return u=e,i=setTimeout(timerExpired,c),o}(s);if(null!==l)return i=setTimeout(timerExpired,c),invokeFunc(s)}return void 0===i&&(i=setTimeout(timerExpired,c)),o}return debounced.cancel=function cancel(){void 0!==i&&clearTimeout(i),u=0,r=void 0,s=void 0,i=void 0},debounced.flush=function flush(){return void 0===i?o:trailingEdge(Date.now())},debounced},exports.deepClone=deepClone,exports.inlineCodeBlock=function inlineCodeBlock(e){return`\`${e.replace(/ /g," ").replace(/`/g,`\`${n}`)}\``},exports.isClass=function isClass(e){return"function"==typeof e&&"object"==typeof e.prototype},exports.isFunction=isFunction,exports.isNullOrUndefined=isNullOrUndefined,exports.isNullish=isNullOrUndefined,exports.isNumber=function isNumber(e){return"number"==typeof e&&!isNaN(e)&&Number.isFinite(e)},exports.isObject=isObject,exports.isPrimitive=isPrimitive,exports.isThenable=function isThenable(e){return"object"==typeof e&&null!==e&&(e instanceof Promise||e!==Promise.prototype&&function hasThen(e){return Reflect.has(e,"then")&&isFunction(e.then)}(e)&&function hasCatch(e){return Reflect.has(e,"catch")&&isFunction(e.catch)}(e))},exports.makeObject=function makeObject(e,t,n={}){if(e.includes(".")){const r=e.split("."),o=r.pop();let i=n;for(const e of r)i[e]||(i[e]={}),i=i[e];i[o]=t}else n[e]=t;return n},exports.mergeDefault=function mergeDefault(e,t){if(!t)return deepClone(e);for(const[n,r]of Object.entries(e)){const e=Reflect.get(t,n);void 0===e?Reflect.set(t,n,deepClone(r)):isObject(e)&&Reflect.set(t,n,mergeDefault(null!=r?r:{},e))}return t},exports.mergeObjects=function mergeObjects(e,t){for(const[n,r]of Object.entries(t)){const t=Reflect.get(e,n);isObject(r)?Reflect.set(e,n,isObject(t)?mergeObjects(t,r):r):isObject(t)||Reflect.set(e,n,r)}return e},exports.noop=function noop(){},exports.objectToTuples=function objectToTuples(e,t=""){const n=[];for(const[r,o]of Object.entries(e))isObject(o)?n.push(...objectToTuples(o,`${t}${r}.`)):n.push([`${t}${r}`,o]);return n},exports.parseURL=function parseURL(e){try{return new URL(e)}catch{return null}},exports.range=function range(e,t,n){return new Array(Math.floor((t-e)/n)+1).fill(0).map(((t,r)=>e+r*n))},exports.regExpEsc=function regExpEsc(e){return e.replace(r,"\\$&")},exports.roundNumber=function roundNumber(e,t=0){if(!e.toString().includes("e"))return Number(`${Math.round(Number(`${e}e+${t}`))}e-${t}`);const n=`${e}`.split("e");let r="";return Number(n[1])+t>0&&(r="+"),Number(`${Math.round(Number(`${Number(n[0])}e${r}${Number(n[1])+t}`))}e-${t}`)},exports.splitText=splitText,exports.toTitleCase=function toTitleCase(e){return e.replace(o,(e=>i[e]||e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()))},exports.tryParse=function tryParse(e){try{return JSON.parse(e)}catch(t){return e}};
//# sourceMappingURL=index.js.map
