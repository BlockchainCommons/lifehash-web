import{S as zt,i as Gt,s as Kt,e as u,t as pt,a as w,b as lt,c as i,n as kt,d as ct,f as T,g as Yt,h as Pt,j as Tt,l as At,k as Ft,m as Jt,r as Ie,o as Vt,p as It,q as He,u as De,v as Ee,w as Ue,x as je}from"./vendor.698cfbb1.js";const Qe={},Le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))p(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&p(v)}).observe(document,{childList:!0,subtree:!0});function o(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerpolicy&&(m.referrerPolicy=h.referrerpolicy),h.crossorigin==="use-credentials"?m.credentials="include":h.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function p(h){if(h.ep)return;h.ep=!0;const m=o(h);fetch(h.href,m)}};Le();var Fe=function(){var s=Qe.url;return function(t){t=t||{};var t=typeof t!="undefined"?t:{},o,p;t.ready=new Promise(function(e,n){o=e,p=n});var h={},m;for(m in t)t.hasOwnProperty(m)&&(h[m]=t[m]);var v=!0,C="";function D(e){return t.locateFile?t.locateFile(e,C):C+e}var A;typeof document!="undefined"&&document.currentScript&&(C=document.currentScript.src),s&&(C=s),C.indexOf("blob:")!==0?C=C.substr(0,C.replace(/[?#].*/,"").lastIndexOf("/")+1):C="",t.print||console.log.bind(console);var x=t.printErr||console.warn.bind(console);for(m in h)h.hasOwnProperty(m)&&(t[m]=h[m]);h=null,t.arguments,t.thisProgram,t.quit;var B=0,d=function(e){B=e},b=function(){return B},E;t.wasmBinary&&(E=t.wasmBinary),t.noExitRuntime,typeof WebAssembly!="object"&&_("no native wasm support detected");var L,q=!1;function z(e,n){e||_("Assertion failed: "+n)}function H(e){var n=t["_"+e];return z(n,"Cannot call unknown function "+e+", make sure it is exported"),n}function j(e,n,r,a,f){var l={string:function(N){var dt=0;if(N!=null&&N!==0){var Nt=(N.length<<2)+1;dt=Ut(Nt),at(N,dt,Nt)}return dt},array:function(N){var dt=Ut(N.length);return R(N,dt),dt}};function c(N){return n==="string"?Q(N):n==="boolean"?Boolean(N):N}var g=H(e),U=[],V=0;if(a)for(var rt=0;rt<a.length;rt++){var ht=l[r[rt]];ht?(V===0&&(V=$()),U[rt]=ht(a[rt])):U[rt]=a[rt]}var bt=g.apply(null,U);function vt(N){return V!==0&&M(V),c(N)}return bt=vt(bt),bt}function G(e,n,r,a){r=r||[];var f=r.every(function(c){return c==="number"}),l=n!=="string";return l&&f&&!a?H(e):function(){return j(e,n,r,arguments)}}var et=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):void 0;function ot(e,n,r){for(var a=n+r,f=n;e[f]&&!(f>=a);)++f;if(f-n>16&&e.subarray&&et)return et.decode(e.subarray(n,f));for(var l="";n<f;){var c=e[n++];if(!(c&128)){l+=String.fromCharCode(c);continue}var g=e[n++]&63;if((c&224)==192){l+=String.fromCharCode((c&31)<<6|g);continue}var U=e[n++]&63;if((c&240)==224?c=(c&15)<<12|g<<6|U:c=(c&7)<<18|g<<12|U<<6|e[n++]&63,c<65536)l+=String.fromCharCode(c);else{var V=c-65536;l+=String.fromCharCode(55296|V>>10,56320|V&1023)}}return l}function Q(e,n){return e?ot(k,e,n):""}function it(e,n,r,a){if(!(a>0))return 0;for(var f=r,l=r+a-1,c=0;c<e.length;++c){var g=e.charCodeAt(c);if(g>=55296&&g<=57343){var U=e.charCodeAt(++c);g=65536+((g&1023)<<10)|U&1023}if(g<=127){if(r>=l)break;n[r++]=g}else if(g<=2047){if(r+1>=l)break;n[r++]=192|g>>6,n[r++]=128|g&63}else if(g<=65535){if(r+2>=l)break;n[r++]=224|g>>12,n[r++]=128|g>>6&63,n[r++]=128|g&63}else{if(r+3>=l)break;n[r++]=240|g>>18,n[r++]=128|g>>12&63,n[r++]=128|g>>6&63,n[r++]=128|g&63}}return n[r]=0,r-f}function at(e,n,r){return it(e,k,n,r)}function R(e,n){P.set(e,n)}var P,k,S;function F(e){t.HEAP8=P=new Int8Array(e),t.HEAP16=new Int16Array(e),t.HEAP32=S=new Int32Array(e),t.HEAPU8=k=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAPU32=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e)}t.INITIAL_MEMORY;var I,st=[],ft=[],Z=[];function yt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)K(t.preRun.shift());Ht(st)}function Ct(){Ht(ft)}function ut(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)mt(t.postRun.shift());Ht(Z)}function K(e){st.unshift(e)}function xt(e){ft.unshift(e)}function mt(e){Z.unshift(e)}var O=0,nt=null;function Y(e){O++,t.monitorRunDependencies&&t.monitorRunDependencies(O)}function J(e){if(O--,t.monitorRunDependencies&&t.monitorRunDependencies(O),O==0&&nt){var n=nt;nt=null,n()}}t.preloadedImages={},t.preloadedAudios={};function _(e){t.onAbort&&t.onAbort(e),e="Aborted("+e+")",x(e),q=!0,e+=". Build with -s ASSERTIONS=1 for more info.";var n=new WebAssembly.RuntimeError(e);throw p(n),n}var X="data:application/octet-stream;base64,";function y(e){return e.startsWith(X)}var W;t.locateFile?(W="lifehash.wasm",y(W)||(W=D(W))):W=new URL("/assets/lifehash.57a2179d.wasm",self.location).toString();function Bt(e){try{if(e==W&&E)return new Uint8Array(E);if(!A)throw"both async and sync fetching of the wasm failed"}catch(n){_(n)}}function ne(){return!E&&v&&typeof fetch=="function"?fetch(W,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+W+"'";return e.arrayBuffer()}).catch(function(){return Bt(W)}):Promise.resolve().then(function(){return Bt(W)})}function re(){var e={a:de};function n(c,g){var U=c.exports;t.asm=U,L=t.asm.x,F(L.buffer),I=t.asm.z,xt(t.asm.y),J()}Y();function r(c){n(c.instance)}function a(c){return ne().then(function(g){return WebAssembly.instantiate(g,e)}).then(function(g){return g}).then(c,function(g){x("failed to asynchronously prepare wasm: "+g),_(g)})}function f(){return!E&&typeof WebAssembly.instantiateStreaming=="function"&&!y(W)&&typeof fetch=="function"?fetch(W,{credentials:"same-origin"}).then(function(c){var g=WebAssembly.instantiateStreaming(c,e);return g.then(r,function(U){return x("wasm streaming compile failed: "+U),x("falling back to ArrayBuffer instantiation"),a(r)})}):a(r)}if(t.instantiateWasm)try{var l=t.instantiateWasm(e,n);return l}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}return f().catch(p),{}}function Ht(e){for(;e.length>0;){var n=e.shift();if(typeof n=="function"){n(t);continue}var r=n.func;typeof r=="number"?n.arg===void 0?I.get(r)():I.get(r)(n.arg):r(n.arg===void 0?null:n.arg)}}function ie(e,n,r,a){_("Assertion failed: "+Q(e)+", at: "+[n?Q(n):"unknown filename",r,a?Q(a):"unknown function"])}function ae(e){return Et(e+16)+16}function wt(e){this.excPtr=e,this.ptr=e-16,this.set_type=function(n){S[this.ptr+4>>2]=n},this.get_type=function(){return S[this.ptr+4>>2]},this.set_destructor=function(n){S[this.ptr+8>>2]=n},this.get_destructor=function(){return S[this.ptr+8>>2]},this.set_refcount=function(n){S[this.ptr>>2]=n},this.set_caught=function(n){n=n?1:0,P[this.ptr+12>>0]=n},this.get_caught=function(){return P[this.ptr+12>>0]!=0},this.set_rethrown=function(n){n=n?1:0,P[this.ptr+13>>0]=n},this.get_rethrown=function(){return P[this.ptr+13>>0]!=0},this.init=function(n,r){this.set_type(n),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=S[this.ptr>>2];S[this.ptr>>2]=n+1},this.release_ref=function(){var n=S[this.ptr>>2];return S[this.ptr>>2]=n-1,n===1}}function Rt(e){this.free=function(){Dt(this.ptr),this.ptr=0},this.set_base_ptr=function(n){S[this.ptr>>2]=n},this.get_base_ptr=function(){return S[this.ptr>>2]},this.set_adjusted_ptr=function(n){S[this.ptr+4>>2]=n},this.get_adjusted_ptr_addr=function(){return this.ptr+4},this.get_adjusted_ptr=function(){return S[this.ptr+4>>2]},this.get_exception_ptr=function(){var n=qt(this.get_exception_info().get_type());if(n)return S[this.get_base_ptr()>>2];var r=this.get_adjusted_ptr();return r!==0?r:this.get_base_ptr()},this.get_exception_info=function(){return new wt(this.get_base_ptr())},e===void 0?(this.ptr=Et(8),this.set_adjusted_ptr(0)):this.ptr=e}var Ot=[];function se(e){e.add_ref()}function oe(e){var n=new Rt(e),r=n.get_exception_info();return r.get_caught()||r.set_caught(!0),r.set_rethrown(!1),Ot.push(n),se(r),n.get_exception_ptr()}var gt=0;function Wt(e){try{return Dt(new wt(e).ptr)}catch{}}function le(e){if(e.release_ref()&&!e.get_rethrown()){var n=e.get_destructor();n&&I.get(n)(e.excPtr),Wt(e.excPtr)}}function ce(){tt(0);var e=Ot.pop();le(e.get_exception_info()),e.free(),gt=0}function fe(e){var n=new Rt(e),r=n.get_base_ptr();throw gt||(gt=r),n.free(),r}function ue(){var e=gt;if(!e)return d(0),0|0;var n=new wt(e),r=n.get_type(),a=new Rt;if(a.set_base_ptr(e),a.set_adjusted_ptr(e),!r)return d(0),a.ptr|0;for(var f=Array.prototype.slice.call(arguments),l=0;l<f.length;l++){var c=f[l];if(c===0||c===r)break;if(jt(c,r,a.get_adjusted_ptr_addr()))return d(c),a.ptr|0}return d(r),a.ptr|0}function he(){var e=gt;if(!e)return d(0),0|0;var n=new wt(e),r=n.get_type(),a=new Rt;if(a.set_base_ptr(e),a.set_adjusted_ptr(e),!r)return d(0),a.ptr|0;for(var f=Array.prototype.slice.call(arguments),l=0;l<f.length;l++){var c=f[l];if(c===0||c===r)break;if(jt(c,r,a.get_adjusted_ptr_addr()))return d(c),a.ptr|0}return d(r),a.ptr|0}function pe(e,n,r){var a=new wt(e);throw a.init(n,r),gt=e,e}function _e(){_("")}function me(e){_("OOM")}function ge(e){k.length,me()}function ve(){return b()}var de={r:ie,i:ae,q:oe,p:ce,b:ue,f:he,k:Wt,j:pe,c:fe,t:_e,s:ge,a:ve,n:xe,e:ke,h:Ae,m:Se,u:Te,d:ye,w:Ce,g:be,o:we,l:Re,v:Pe};re(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.y).apply(null,arguments)},t._lifehash_image_free=function(){return(t._lifehash_image_free=t.asm.A).apply(null,arguments)};var Dt=t._free=function(){return(Dt=t._free=t.asm.B).apply(null,arguments)},Et=t._malloc=function(){return(Et=t._malloc=t.asm.C).apply(null,arguments)};t._lifehash_make_from_utf8=function(){return(t._lifehash_make_from_utf8=t.asm.D).apply(null,arguments)},t._lifehash_make_from_data=function(){return(t._lifehash_make_from_data=t.asm.E).apply(null,arguments)},t._lifehash_make_from_digest=function(){return(t._lifehash_make_from_digest=t.asm.F).apply(null,arguments)},t._lifehash_data_to_hex=function(){return(t._lifehash_data_to_hex=t.asm.G).apply(null,arguments)},t._lifehash_hex_to_data=function(){return(t._lifehash_hex_to_data=t.asm.H).apply(null,arguments)},t._lifehash_sha256=function(){return(t._lifehash_sha256=t.asm.I).apply(null,arguments)};var $=t.stackSave=function(){return($=t.stackSave=t.asm.J).apply(null,arguments)},M=t.stackRestore=function(){return(M=t.stackRestore=t.asm.K).apply(null,arguments)},Ut=t.stackAlloc=function(){return(Ut=t.stackAlloc=t.asm.L).apply(null,arguments)},tt=t._setThrew=function(){return(tt=t._setThrew=t.asm.M).apply(null,arguments)},jt=t.___cxa_can_catch=function(){return(jt=t.___cxa_can_catch=t.asm.N).apply(null,arguments)},qt=t.___cxa_is_pointer_type=function(){return(qt=t.___cxa_is_pointer_type=t.asm.O).apply(null,arguments)};function ye(e,n,r){var a=$();try{I.get(e)(n,r)}catch(f){if(M(a),f!==f+0&&f!=="longjmp")throw f;tt(1,0)}}function we(e,n,r,a,f){var l=$();try{I.get(e)(n,r,a,f)}catch(c){if(M(l),c!==c+0&&c!=="longjmp")throw c;tt(1,0)}}function be(e,n,r,a){var f=$();try{I.get(e)(n,r,a)}catch(l){if(M(f),l!==l+0&&l!=="longjmp")throw l;tt(1,0)}}function ke(e,n,r){var a=$();try{return I.get(e)(n,r)}catch(f){if(M(a),f!==f+0&&f!=="longjmp")throw f;tt(1,0)}}function Ae(e,n,r,a){var f=$();try{return I.get(e)(n,r,a)}catch(l){if(M(f),l!==l+0&&l!=="longjmp")throw l;tt(1,0)}}function Ce(e,n,r,a){var f=$();try{I.get(e)(n,r,a)}catch(l){if(M(f),l!==l+0&&l!=="longjmp")throw l;tt(1,0)}}function xe(e,n){var r=$();try{return I.get(e)(n)}catch(a){if(M(r),a!==a+0&&a!=="longjmp")throw a;tt(1,0)}}function Re(e,n,r,a,f,l){var c=$();try{I.get(e)(n,r,a,f,l)}catch(g){if(M(c),g!==g+0&&g!=="longjmp")throw g;tt(1,0)}}function Se(e,n,r,a,f){var l=$();try{return I.get(e)(n,r,a,f)}catch(c){if(M(l),c!==c+0&&c!=="longjmp")throw c;tt(1,0)}}function Pe(e,n,r,a,f,l,c){var g=$();try{I.get(e)(n,r,a,f,l,c)}catch(U){if(M(g),U!==U+0&&U!=="longjmp")throw U;tt(1,0)}}function Te(e){var n=$();try{I.get(e)()}catch(r){if(M(n),r!==r+0&&r!=="longjmp")throw r;tt(1,0)}}var St;nt=function e(){St||Lt(),St||(nt=e)};function Lt(e){if(O>0||(yt(),O>0))return;function n(){St||(St=!0,t.calledRun=!0,!q&&(Ct(),o(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),ut()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),n()},1)):n()}if(t.run=Lt,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return Lt(),t.onRuntimeInitialized=function(){t.makeFromUTF8=function(e,n,r){const a=this.allocString(e),f=j("lifehash_make_from_utf8","number",["number","number","number","boolean"],[a,n,r,!0]),l=this.produceImage(f,n);return this.free(a),this.imageFree(f),l},t.makeFromData=function(e,n,r){const a=this.malloc(e.length);new Uint8Array(k.buffer,a,e.length).set(e);const l=j("lifehash_make_from_data","number",["number","number","number","number","boolean"],[a,e.length,n,r,!0]),c=this.produceImage(l,n);return this.free(a),this.imageFree(l),c},t.makeFromDigest=function(e,n,r){if(e.length!==32)throw new Error("Digest must be exactly 32 bytes.");const a=this.malloc(e.length);new Uint8Array(k.buffer,a,e.length).set(e);const l=j("lifehash_make_from_digest","number",["number","number","number","boolean"],[a,n,r,!0]),c=this.produceImage(l,n);return this.free(a),this.imageFree(l),c},t.malloc=G("malloc","number",["number"]),t.free=G("free",null,["number"]),t.imageFree=G("lifehash_image_free",null,["number"]),t.allocString=function(e){const n=new TextEncoder().encode(e),r=this.malloc(n.length+1);return new Uint8Array(k.buffer,r,n.length).set(n),k[r+n.length]=0,r},t.produceImage=function(e,n){const r=new Uint32Array(k.buffer,e,3),a=r[0],f=r[1],l=r[2],c=a*f*4,g=new Uint8Array(k.buffer,l,c),U=new Uint8ClampedArray(new ArrayBuffer(c));U.set(g);const V=document.createElement("canvas"),rt=V.getContext("2d");V.width=a,V.height=f;const ht=rt.createImageData(a,f);ht.data.set(U),rt.putImageData(ht,0,0);const bt=V.toDataURL(),vt=new Image,N=n===2?.5:1;return vt.width=a*N,vt.height=f*N,vt.src=bt,vt},t.sha256=function(e){const n=new TextEncoder().encode(e),r=this.malloc(n.length);new Uint8Array(k.buffer,r,n.length).set(n);const f=this.malloc(32);j("lifehash_sha256",null,["number","number","number"],[r,n.length,f]);const l=new Uint8Array(new ArrayBuffer(32));return l.set(new Uint8Array(k.buffer,f,32)),this.free(r),this.free(f),l},t.dataToHex=function(e){const n=this.malloc(e.length);new Uint8Array(k.buffer,n,e.length).set(e);const a=j("lifehash_data_to_hex","number",["number","number"],[n,e.length]),f=Q(a);return this.free(n),this.free(a),f},t.hexToData=function(e){const n=new TextEncoder().encode(e),r=this.malloc(n.length);new Uint8Array(k.buffer,r,n.length).set(n);const f=this.malloc(4),l=this.malloc(4),c=0,g=j("lifehash_hex_to_data","boolean",["number","number","number","number"],[r,n.length,f,l]);let U=null;if(g){const V=new Uint32Array(k.buffer,l,1)[0],rt=new Uint32Array(k.buffer,f,1)[0],ht=new Uint8Array(k.buffer,rt,V);U=new Uint8Array(new ArrayBuffer(V)),U.set(ht)}return this.free(r),this.free(l),this.free(c),this.free(f),U}},t.ready}}(),_t;(function(s){s[s.version1=0]="version1",s[s.version2=1]="version2",s[s.detailed=2]="detailed",s[s.fiducial=3]="fiducial",s[s.grayscaleFiducial=4]="grayscaleFiducial"})(_t||(_t={}));function Qt(s,t,o){const p=s.slice();return p[23]=t[o],p}function Xt(s,t,o){const p=s.slice();return p[5]=t[o],p}function Zt(s){let t,o=s[5].text+"",p,h,m;return{c(){t=u("option"),p=pt(o),h=w(),t.__value=m=s[5],t.value=t.__value},m(v,C){lt(v,t,C),i(t,p),i(t,h)},p:kt,d(v){v&&ct(t)}}}function Be(s){let t,o,p,h,m,v,C,D,A,x,B,d=s[3]===null&&$t();return{c(){t=u("div"),o=u("label"),p=u("strong"),p.textContent="Input SHA-256 Digest:",h=u("br"),m=w(),v=u("textarea"),C=w(),d&&d.c(),D=w(),A=u("p"),A.textContent=`This is the unique \u201Cfingerprint\u201D of the input that is used as the seed
        for the LifeHash algorithm. It must be exactly 64 hexadecimal digits
        produced by the SHA-256 algorithm.`,T(v,"class","data svelte-gkuvja"),T(v,"spellcheck","false"),T(v,"rows","1"),Pt(v,"width","100%"),Pt(o,"width","100%"),T(A,"class","caption svelte-gkuvja")},m(b,E){lt(b,t,E),i(t,o),i(o,p),i(o,h),i(o,m),i(o,v),It(v,s[2]),i(t,C),d&&d.m(t,null),i(t,D),i(t,A),x||(B=At(v,"input",s[16]),x=!0)},p(b,E){E&4&&It(v,b[2]),b[3]===null?d||(d=$t(),d.c(),d.m(t,D)):d&&(d.d(1),d=null)},d(b){b&&ct(t),d&&d.d(),x=!1,B()}}}function Oe(s){let t,o,p,h,m,v,C,D,A,x,B,d,b,E,L,q,z;return{c(){t=u("div"),o=u("label"),p=u("strong"),p.textContent="Input string:",h=w(),m=u("input"),v=w(),C=u("p"),C.textContent=`Edit this field to update the LifeHash image below. When using the
        library, the input can be a binary object of any size.`,D=w(),A=u("div"),x=u("strong"),x.textContent="SHA-256 Digest:",B=w(),d=u("span"),b=pt(s[4]),E=w(),L=u("p"),L.textContent=`This is the unique \u201Cfingerprint\u201D of the input that is used as the seed
        for the LifeHash algorithm. Making even a tiny change to the input
        string above results in a complete change of the digest.`,T(m,"spellcheck","false"),T(C,"class","caption svelte-gkuvja"),T(d,"class","data svelte-gkuvja"),T(L,"class","caption svelte-gkuvja")},m(H,j){lt(H,t,j),i(t,o),i(o,p),i(o,h),i(o,m),It(m,s[1]),i(t,v),i(t,C),lt(H,D,j),lt(H,A,j),i(A,x),i(A,B),i(A,d),i(d,b),i(A,E),i(A,L),q||(z=At(m,"input",s[15]),q=!0)},p(H,j){j&2&&m.value!==H[1]&&It(m,H[1]),j&16&&Ft(b,H[4])},d(H){H&&ct(t),H&&ct(D),H&&ct(A),q=!1,z()}}}function $t(s){let t;return{c(){t=u("div"),t.textContent="Invalid digest.",T(t,"class","error svelte-gkuvja")},m(o,p){lt(o,t,p)},d(o){o&&ct(t)}}}function Mt(s){let t,o=s[23].text+"",p,h,m;return{c(){t=u("option"),p=pt(o),h=w(),t.__value=m=s[23],t.value=t.__value},m(v,C){lt(v,t,C),i(t,p),i(t,h)},p:kt,d(v){v&&ct(t)}}}function te(s){let t;return{c(){t=u("div"),t.textContent="Invalid digest.",T(t,"class","error svelte-gkuvja")},m(o,p){lt(o,t,p)},d(o){o&&ct(t)}}}function We(s){let t,o,p,h,m,v,C,D,A,x,B,d,b,E,L,q,z=s[0].text+"",H,j,G=s[0].description+"",et,ot,Q,it,at,R,P,k,S,F,I,st,ft,Z,yt,Ct,ut=s[6],K=[];for(let _=0;_<ut.length;_+=1)K[_]=Zt(Xt(s,ut,_));function xt(_,X){return _[5].sourceIsString?Oe:Be}let mt=xt(s),O=mt(s),nt=s[7],Y=[];for(let _=0;_<nt.length;_+=1)Y[_]=Mt(Qt(s,nt,_));let J=s[3]===null&&te();return{c(){t=u("main"),o=u("div"),p=u("label"),h=u("strong"),h.textContent="Create Lifehash using a:",m=w(),v=u("select");for(let _=0;_<K.length;_+=1)K[_].c();C=w(),O.c(),D=w(),A=u("div"),x=u("label"),B=u("strong"),B.textContent="LifeHash Version:",d=w(),b=u("select");for(let _=0;_<Y.length;_+=1)Y[_].c();E=w(),L=u("p"),q=pt("About "),H=pt(z),j=pt(": "),et=pt(G),ot=w(),Q=u("strong"),Q.textContent="LifeHash:",it=w(),at=u("div"),R=w(),J&&J.c(),P=w(),k=u("div"),S=u("strong"),S.textContent="Gallery:",F=u("button"),F.textContent="\u21BB More",I=w(),st=u("p"),st.textContent=`Click on the icons below to set the input string,
    reproducing the exact same LifeHash.`,ft=w(),Z=u("div"),s[5]===void 0&&Yt(()=>s[14].call(v)),Pt(o,"margin-bottom","20px"),s[0]===void 0&&Yt(()=>s[17].call(b)),T(L,"class","caption svelte-gkuvja"),T(at,"id","image"),Pt(at,"margin-bottom","20px"),T(F,"class","reload svelte-gkuvja"),T(st,"class","caption svelte-gkuvja"),T(Z,"id","gallery"),T(t,"class","svelte-gkuvja")},m(_,X){lt(_,t,X),i(t,o),i(o,p),i(p,h),i(p,m),i(p,v);for(let y=0;y<K.length;y+=1)K[y].m(v,null);Tt(v,s[5]),i(t,C),O.m(t,null),i(t,D),i(t,A),i(A,x),i(x,B),i(x,d),i(x,b);for(let y=0;y<Y.length;y+=1)Y[y].m(b,null);Tt(b,s[0]),i(A,E),i(A,L),i(L,q),i(L,H),i(L,j),i(L,et),i(t,ot),i(t,Q),i(t,it),i(t,at),i(t,R),J&&J.m(t,null),i(t,P),i(t,k),i(k,S),i(k,F),i(t,I),i(t,st),i(t,ft),i(t,Z),yt||(Ct=[At(v,"change",s[14]),At(b,"change",s[17]),At(F,"click",s[8])],yt=!0)},p(_,[X]){if(X&64){ut=_[6];let y;for(y=0;y<ut.length;y+=1){const W=Xt(_,ut,y);K[y]?K[y].p(W,X):(K[y]=Zt(W),K[y].c(),K[y].m(v,null))}for(;y<K.length;y+=1)K[y].d(1);K.length=ut.length}if(X&96&&Tt(v,_[5]),mt===(mt=xt(_))&&O?O.p(_,X):(O.d(1),O=mt(_),O&&(O.c(),O.m(t,D))),X&128){nt=_[7];let y;for(y=0;y<nt.length;y+=1){const W=Qt(_,nt,y);Y[y]?Y[y].p(W,X):(Y[y]=Mt(W),Y[y].c(),Y[y].m(b,null))}for(;y<Y.length;y+=1)Y[y].d(1);Y.length=nt.length}X&129&&Tt(b,_[0]),X&1&&z!==(z=_[0].text+"")&&Ft(H,z),X&1&&G!==(G=_[0].description+"")&&Ft(et,G),_[3]===null?J||(J=te(),J.c(),J.m(t,P)):J&&(J.d(1),J=null)},i:kt,o:kt,d(_){_&&ct(t),Jt(K,_),O.d(),Jt(Y,_),J&&J.d(),yt=!1,Ie(Ct)}}}function qe(s){return s[Math.floor(Math.random()*s.length)]}function Ne(){return qe("ABCDEFGHIJKLMNOPQRSTUVWXYZ")}function ee(){let s="";for(let t=0;t<3;t++)s+=Ne();return s}function ze(){return ee()+"-"+ee()}function Ge(s,t,o){let p;const h={sourceIsString:!0,text:"UTF-8 string"},m={sourceIsString:!1,text:"SHA-256 digest"},v=[h,m],C=[{version:_t.version1,text:"Version 1",description:"DEPRECATED. Uses HSB gamut. Not CMYK-friendly. Has some minor gradient bugs."},{version:_t.version2,text:"Version 2",description:"The official LifeHash. Recommended for most purposes. CMYK-friendly gamut."},{version:_t.detailed,text:"Detailed",description:"Double resolution. CMYK-friendly gamut."},{version:_t.fiducial,text:"Fiducial",description:"Optimized for generating machine-vision fiducials. High-contrast. CMYK-friendly gamut."},{version:_t.grayscaleFiducial,text:"Grayscale Fiducial",description:"Optimized for generating machine-vision fiducials. High-contrast for low-light conditions."}];let D=C[1],A="Hello, world!",x="",B="",d,b=h,E=R=>{},L=R=>{},q=(R,P)=>{},z=(R,P)=>{},H=[];et();const j=new URLSearchParams(window.location.search),G=j.get("s");if(console.log(G),G!==null)A=G,b=h;else{const R=j.get("d");console.log(R),R!==null&&(x=R,b=m)}(async()=>{p=await Fe(),o(9,E=R=>{if(b===h){const P=p.dataToHex(p.sha256(R));o(2,x=P)}}),o(10,L=R=>{o(4,B=R);const P=p.hexToData(B);P===null||P.length!==32?o(3,d=null):o(3,d=P)}),o(11,q=(R,P)=>{const k=document.getElementById("image");if(k.innerHTML="",R!==null){let S=p.makeFromDigest(R,P,6);S.style.margin="5px",k.appendChild(S)}}),o(12,z=(R,P)=>{let k=[];for(const F of P){let I=document.createElement("div"),st=document.createElement("div");st.appendChild(p.makeFromUTF8(F,R,3)),st.onclick=()=>{o(5,b=h),o(1,A=F)};let ft=document.createElement("div"),Z=document.createElement("a");ft.appendChild(Z),Z.innerText=F,Z.style.fontFamily="monospace",Z.style.fontSize="12pt",Z.style.fontWeight="bold",Z.onclick=()=>{o(5,b=h),o(1,A=F)},I.appendChild(st),I.appendChild(ft),I.style.display="inline-block",I.style.margin="5px",I.style.textAlign="center",k.push(I)}const S=document.getElementById("gallery");S.textContent="";for(const F of k)S.appendChild(F)})})();function et(){let R=[];for(let P=0;P<10;P++)R.push(ze());o(13,H=R)}function ot(){b=Vt(this),o(5,b),o(6,v)}function Q(){A=this.value,o(1,A)}function it(){x=this.value,o(2,x)}function at(){D=Vt(this),o(0,D),o(7,C)}return s.$$.update=()=>{s.$$.dirty&514&&E(A),s.$$.dirty&1028&&L(x),s.$$.dirty&2057&&q(d,D.version),s.$$.dirty&12289&&z(D.version,H)},[D,A,x,d,B,b,v,C,et,E,L,q,z,H,ot,Q,it,at]}class Ke extends zt{constructor(t){super();Gt(this,t,Ge,We,Kt,{})}}function Ye(s){let t,o,p,h,m,v,C,D,A,x,B,d,b,E,L,q,z,H,j,G,et,ot,Q,it,at,R,P,k,S;return d=new Ke({}),{c(){t=u("main"),o=u("h1"),o.textContent="LifeHash",p=w(),h=u("h2"),h.textContent="Beautiful Visual Hashes",m=w(),v=u("h3"),v.innerHTML='from <a href="https://www.blockchaincommons.com/" target="_blank" class="svelte-1wit19e">Blockchain Commons</a>',C=w(),D=u("h3"),D.innerHTML='created by <a href="https://wolfmcnally.com" target="_blank" class="svelte-1wit19e">Wolf McNally</a>',A=w(),x=u("div"),x.innerHTML=`<p>This page is a live demonstration of the <a href="https://github.com/BlockchainCommons/bc-lifehash" target="_blank" class="svelte-1wit19e">LifeHash</a> visual hash algorithm running in the web browser.
      It uses the reference C++ implementation compiled to <a href="https://webassembly.org/" target="_blank" class="svelte-1wit19e">WebAssembly</a>.</p>`,B=w(),He(d.$$.fragment),b=w(),E=u("h3"),E.innerHTML='About <strong class="svelte-1wit19e">LifeHash</strong>',L=w(),q=u("p"),q.innerHTML=`LifeHash is a method of <a href="https://en.wikipedia.org/wiki/Identicon" target="_blank" class="svelte-1wit19e">hash visualization</a>
    based on
    <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" class="svelte-1wit19e">Conway\u2019s Game of Life</a> that creates beautiful icons that are deterministic, yet distinct and unique
    given the input data.`,z=w(),H=u("p"),H.innerHTML=`The basic concept is to take a <a href="https://en.wikipedia.org/wiki/SHA-2" target="_blank" class="svelte-1wit19e">SHA-256</a> hash of the input data (which can be any data including another hash) and then
    use the 256-bit digest as a 16x16 pixel &quot;seed&quot; for running the cellular automata
    known as Conway\u2019s Game of Life.`,j=w(),G=u("p"),G.textContent=`After the pattern becomes stable (or begins repeating) the resulting history
    is used to compile a grayscale image of all the states from the first to
    last generation. Using Game of Life provides visual structure to the
    resulting image, even though it was seeded with entropy.`,et=w(),ot=u("p"),ot.textContent=`Some bits of the initial hash are then used to deterministically apply
    symmetry and color to the icon to add beauty and quick recognizability.`,Q=w(),it=u("h3"),it.textContent="Watch the explainer video",at=w(),R=u("a"),R.innerHTML='<img src="title-card.jpg" alt="Explainer Video" style="width:100%; max-width: 600px"/>',P=w(),k=u("div"),k.innerHTML=`<h3 class="section svelte-1wit19e">We care about your privacy</h3> 
    <p>This page is self-contained, sets no cookies, and sends no data to the
      cloud.</p>`,T(o,"class","svelte-1wit19e"),T(h,"class","svelte-1wit19e"),T(v,"class","svelte-1wit19e"),T(D,"class","svelte-1wit19e"),T(x,"class","explanation svelte-1wit19e"),T(E,"class","section svelte-1wit19e"),T(it,"class","section svelte-1wit19e"),T(R,"href","https://www.youtube.com/watch?v=cu0K__KLxKo"),T(R,"target","_blank"),T(R,"class","svelte-1wit19e"),T(k,"class","explanation svelte-1wit19e"),T(t,"class","svelte-1wit19e")},m(F,I){lt(F,t,I),i(t,o),i(t,p),i(t,h),i(t,m),i(t,v),i(t,C),i(t,D),i(t,A),i(t,x),i(t,B),De(d,t,null),i(t,b),i(t,E),i(t,L),i(t,q),i(t,z),i(t,H),i(t,j),i(t,G),i(t,et),i(t,ot),i(t,Q),i(t,it),i(t,at),i(t,R),i(t,P),i(t,k),S=!0},p:kt,i(F){S||(Ee(d.$$.fragment,F),S=!0)},o(F){Ue(d.$$.fragment,F),S=!1},d(F){F&&ct(t),je(d)}}}function Je(s){return[]}class Ve extends zt{constructor(t){super();Gt(this,t,Je,Ye,Kt,{})}}new Ve({target:document.getElementById("app")});
