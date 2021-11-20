import{S as zt,i as Gt,s as Kt,e as u,t as pt,a as w,b as ot,c as i,n as kt,d as lt,f as T,g as Yt,h as Ft,j as Pt,l as At,k as Lt,m as Jt,r as Ie,o as Vt,p as Tt,q as De,u as Ee,v as He,w as Ue,x as je}from"./vendor.698cfbb1.js";const Qe={},Fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))p(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&p(v)}).observe(document,{childList:!0,subtree:!0});function f(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerpolicy&&(m.referrerPolicy=h.referrerpolicy),h.crossorigin==="use-credentials"?m.credentials="include":h.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function p(h){if(h.ep)return;h.ep=!0;const m=f(h);fetch(h.href,m)}};Fe();var Le=function(){var s=Qe.url;return function(t){t=t||{};var t=typeof t!="undefined"?t:{},f,p;t.ready=new Promise(function(e,n){f=e,p=n});var h={},m;for(m in t)t.hasOwnProperty(m)&&(h[m]=t[m]);var v=!0,A="";function E(e){return t.locateFile?t.locateFile(e,A):A+e}var C;typeof document!="undefined"&&document.currentScript&&(A=document.currentScript.src),s&&(A=s),A.indexOf("blob:")!==0?A=A.substr(0,A.replace(/[?#].*/,"").lastIndexOf("/")+1):A="",t.print||console.log.bind(console);var R=t.printErr||console.warn.bind(console);for(m in h)h.hasOwnProperty(m)&&(t[m]=h[m]);h=null,t.arguments,t.thisProgram,t.quit;var B=0,d=function(e){B=e},b=function(){return B},H;t.wasmBinary&&(H=t.wasmBinary),t.noExitRuntime,typeof WebAssembly!="object"&&_("no native wasm support detected");var F,q=!1;function z(e,n){e||_("Assertion failed: "+n)}function D(e){var n=t["_"+e];return z(n,"Cannot call unknown function "+e+", make sure it is exported"),n}function j(e,n,r,a,c){var o={string:function(N){var dt=0;if(N!=null&&N!==0){var Nt=(N.length<<2)+1;dt=Ht(Nt),st(N,dt,Nt)}return dt},array:function(N){var dt=Ht(N.length);return x(N,dt),dt}};function l(N){return n==="string"?Q(N):n==="boolean"?Boolean(N):N}var g=D(e),U=[],V=0;if(a)for(var rt=0;rt<a.length;rt++){var ht=o[r[rt]];ht?(V===0&&(V=$()),U[rt]=ht(a[rt])):U[rt]=a[rt]}var bt=g.apply(null,U);function vt(N){return V!==0&&M(V),l(N)}return bt=vt(bt),bt}function G(e,n,r,a){r=r||[];var c=r.every(function(l){return l==="number"}),o=n!=="string";return o&&c&&!a?D(e):function(){return j(e,n,r,arguments)}}var et=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):void 0;function at(e,n,r){for(var a=n+r,c=n;e[c]&&!(c>=a);)++c;if(c-n>16&&e.subarray&&et)return et.decode(e.subarray(n,c));for(var o="";n<c;){var l=e[n++];if(!(l&128)){o+=String.fromCharCode(l);continue}var g=e[n++]&63;if((l&224)==192){o+=String.fromCharCode((l&31)<<6|g);continue}var U=e[n++]&63;if((l&240)==224?l=(l&15)<<12|g<<6|U:l=(l&7)<<18|g<<12|U<<6|e[n++]&63,l<65536)o+=String.fromCharCode(l);else{var V=l-65536;o+=String.fromCharCode(55296|V>>10,56320|V&1023)}}return o}function Q(e,n){return e?at(k,e,n):""}function it(e,n,r,a){if(!(a>0))return 0;for(var c=r,o=r+a-1,l=0;l<e.length;++l){var g=e.charCodeAt(l);if(g>=55296&&g<=57343){var U=e.charCodeAt(++l);g=65536+((g&1023)<<10)|U&1023}if(g<=127){if(r>=o)break;n[r++]=g}else if(g<=2047){if(r+1>=o)break;n[r++]=192|g>>6,n[r++]=128|g&63}else if(g<=65535){if(r+2>=o)break;n[r++]=224|g>>12,n[r++]=128|g>>6&63,n[r++]=128|g&63}else{if(r+3>=o)break;n[r++]=240|g>>18,n[r++]=128|g>>12&63,n[r++]=128|g>>6&63,n[r++]=128|g&63}}return n[r]=0,r-c}function st(e,n,r){return it(e,k,n,r)}function x(e,n){P.set(e,n)}var P,k,S;function L(e){t.HEAP8=P=new Int8Array(e),t.HEAP16=new Int16Array(e),t.HEAP32=S=new Int32Array(e),t.HEAPU8=k=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAPU32=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e)}t.INITIAL_MEMORY;var I,ct=[],ft=[],X=[];function yt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)K(t.preRun.shift());It(ct)}function Ct(){It(ft)}function ut(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)mt(t.postRun.shift());It(X)}function K(e){ct.unshift(e)}function Rt(e){ft.unshift(e)}function mt(e){X.unshift(e)}var O=0,nt=null;function Y(e){O++,t.monitorRunDependencies&&t.monitorRunDependencies(O)}function J(e){if(O--,t.monitorRunDependencies&&t.monitorRunDependencies(O),O==0&&nt){var n=nt;nt=null,n()}}t.preloadedImages={},t.preloadedAudios={};function _(e){t.onAbort&&t.onAbort(e),e="Aborted("+e+")",R(e),q=!0,e+=". Build with -s ASSERTIONS=1 for more info.";var n=new WebAssembly.RuntimeError(e);throw p(n),n}var Z="data:application/octet-stream;base64,";function y(e){return e.startsWith(Z)}var W;t.locateFile?(W="lifehash.wasm",y(W)||(W=E(W))):W=new URL("/assets/lifehash.57a2179d.wasm",self.location).toString();function Bt(e){try{if(e==W&&H)return new Uint8Array(H);if(!C)throw"both async and sync fetching of the wasm failed"}catch(n){_(n)}}function ne(){return!H&&v&&typeof fetch=="function"?fetch(W,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+W+"'";return e.arrayBuffer()}).catch(function(){return Bt(W)}):Promise.resolve().then(function(){return Bt(W)})}function re(){var e={a:de};function n(l,g){var U=l.exports;t.asm=U,F=t.asm.x,L(F.buffer),I=t.asm.z,Rt(t.asm.y),J()}Y();function r(l){n(l.instance)}function a(l){return ne().then(function(g){return WebAssembly.instantiate(g,e)}).then(function(g){return g}).then(l,function(g){R("failed to asynchronously prepare wasm: "+g),_(g)})}function c(){return!H&&typeof WebAssembly.instantiateStreaming=="function"&&!y(W)&&typeof fetch=="function"?fetch(W,{credentials:"same-origin"}).then(function(l){var g=WebAssembly.instantiateStreaming(l,e);return g.then(r,function(U){return R("wasm streaming compile failed: "+U),R("falling back to ArrayBuffer instantiation"),a(r)})}):a(r)}if(t.instantiateWasm)try{var o=t.instantiateWasm(e,n);return o}catch(l){return R("Module.instantiateWasm callback failed with error: "+l),!1}return c().catch(p),{}}function It(e){for(;e.length>0;){var n=e.shift();if(typeof n=="function"){n(t);continue}var r=n.func;typeof r=="number"?n.arg===void 0?I.get(r)():I.get(r)(n.arg):r(n.arg===void 0?null:n.arg)}}function ie(e,n,r,a){_("Assertion failed: "+Q(e)+", at: "+[n?Q(n):"unknown filename",r,a?Q(a):"unknown function"])}function ae(e){return Et(e+16)+16}function wt(e){this.excPtr=e,this.ptr=e-16,this.set_type=function(n){S[this.ptr+4>>2]=n},this.get_type=function(){return S[this.ptr+4>>2]},this.set_destructor=function(n){S[this.ptr+8>>2]=n},this.get_destructor=function(){return S[this.ptr+8>>2]},this.set_refcount=function(n){S[this.ptr>>2]=n},this.set_caught=function(n){n=n?1:0,P[this.ptr+12>>0]=n},this.get_caught=function(){return P[this.ptr+12>>0]!=0},this.set_rethrown=function(n){n=n?1:0,P[this.ptr+13>>0]=n},this.get_rethrown=function(){return P[this.ptr+13>>0]!=0},this.init=function(n,r){this.set_type(n),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=S[this.ptr>>2];S[this.ptr>>2]=n+1},this.release_ref=function(){var n=S[this.ptr>>2];return S[this.ptr>>2]=n-1,n===1}}function xt(e){this.free=function(){Dt(this.ptr),this.ptr=0},this.set_base_ptr=function(n){S[this.ptr>>2]=n},this.get_base_ptr=function(){return S[this.ptr>>2]},this.set_adjusted_ptr=function(n){S[this.ptr+4>>2]=n},this.get_adjusted_ptr_addr=function(){return this.ptr+4},this.get_adjusted_ptr=function(){return S[this.ptr+4>>2]},this.get_exception_ptr=function(){var n=qt(this.get_exception_info().get_type());if(n)return S[this.get_base_ptr()>>2];var r=this.get_adjusted_ptr();return r!==0?r:this.get_base_ptr()},this.get_exception_info=function(){return new wt(this.get_base_ptr())},e===void 0?(this.ptr=Et(8),this.set_adjusted_ptr(0)):this.ptr=e}var Ot=[];function se(e){e.add_ref()}function oe(e){var n=new xt(e),r=n.get_exception_info();return r.get_caught()||r.set_caught(!0),r.set_rethrown(!1),Ot.push(n),se(r),n.get_exception_ptr()}var gt=0;function Wt(e){try{return Dt(new wt(e).ptr)}catch{}}function le(e){if(e.release_ref()&&!e.get_rethrown()){var n=e.get_destructor();n&&I.get(n)(e.excPtr),Wt(e.excPtr)}}function ce(){tt(0);var e=Ot.pop();le(e.get_exception_info()),e.free(),gt=0}function fe(e){var n=new xt(e),r=n.get_base_ptr();throw gt||(gt=r),n.free(),r}function ue(){var e=gt;if(!e)return d(0),0|0;var n=new wt(e),r=n.get_type(),a=new xt;if(a.set_base_ptr(e),a.set_adjusted_ptr(e),!r)return d(0),a.ptr|0;for(var c=Array.prototype.slice.call(arguments),o=0;o<c.length;o++){var l=c[o];if(l===0||l===r)break;if(Ut(l,r,a.get_adjusted_ptr_addr()))return d(l),a.ptr|0}return d(r),a.ptr|0}function he(){var e=gt;if(!e)return d(0),0|0;var n=new wt(e),r=n.get_type(),a=new xt;if(a.set_base_ptr(e),a.set_adjusted_ptr(e),!r)return d(0),a.ptr|0;for(var c=Array.prototype.slice.call(arguments),o=0;o<c.length;o++){var l=c[o];if(l===0||l===r)break;if(Ut(l,r,a.get_adjusted_ptr_addr()))return d(l),a.ptr|0}return d(r),a.ptr|0}function pe(e,n,r){var a=new wt(e);throw a.init(n,r),gt=e,e}function _e(){_("")}function me(e){_("OOM")}function ge(e){k.length,me()}function ve(){return b()}var de={r:ie,i:ae,q:oe,p:ce,b:ue,f:he,k:Wt,j:pe,c:fe,t:_e,s:ge,a:ve,n:Re,e:ke,h:Ae,m:Se,u:Te,d:ye,w:Ce,g:be,o:we,l:xe,v:Pe};re(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.y).apply(null,arguments)},t._lifehash_image_free=function(){return(t._lifehash_image_free=t.asm.A).apply(null,arguments)};var Dt=t._free=function(){return(Dt=t._free=t.asm.B).apply(null,arguments)},Et=t._malloc=function(){return(Et=t._malloc=t.asm.C).apply(null,arguments)};t._lifehash_make_from_utf8=function(){return(t._lifehash_make_from_utf8=t.asm.D).apply(null,arguments)},t._lifehash_make_from_data=function(){return(t._lifehash_make_from_data=t.asm.E).apply(null,arguments)},t._lifehash_make_from_digest=function(){return(t._lifehash_make_from_digest=t.asm.F).apply(null,arguments)},t._lifehash_data_to_hex=function(){return(t._lifehash_data_to_hex=t.asm.G).apply(null,arguments)},t._lifehash_hex_to_data=function(){return(t._lifehash_hex_to_data=t.asm.H).apply(null,arguments)},t._lifehash_sha256=function(){return(t._lifehash_sha256=t.asm.I).apply(null,arguments)};var $=t.stackSave=function(){return($=t.stackSave=t.asm.J).apply(null,arguments)},M=t.stackRestore=function(){return(M=t.stackRestore=t.asm.K).apply(null,arguments)},Ht=t.stackAlloc=function(){return(Ht=t.stackAlloc=t.asm.L).apply(null,arguments)},tt=t._setThrew=function(){return(tt=t._setThrew=t.asm.M).apply(null,arguments)},Ut=t.___cxa_can_catch=function(){return(Ut=t.___cxa_can_catch=t.asm.N).apply(null,arguments)},qt=t.___cxa_is_pointer_type=function(){return(qt=t.___cxa_is_pointer_type=t.asm.O).apply(null,arguments)};function ye(e,n,r){var a=$();try{I.get(e)(n,r)}catch(c){if(M(a),c!==c+0&&c!=="longjmp")throw c;tt(1,0)}}function we(e,n,r,a,c){var o=$();try{I.get(e)(n,r,a,c)}catch(l){if(M(o),l!==l+0&&l!=="longjmp")throw l;tt(1,0)}}function be(e,n,r,a){var c=$();try{I.get(e)(n,r,a)}catch(o){if(M(c),o!==o+0&&o!=="longjmp")throw o;tt(1,0)}}function ke(e,n,r){var a=$();try{return I.get(e)(n,r)}catch(c){if(M(a),c!==c+0&&c!=="longjmp")throw c;tt(1,0)}}function Ae(e,n,r,a){var c=$();try{return I.get(e)(n,r,a)}catch(o){if(M(c),o!==o+0&&o!=="longjmp")throw o;tt(1,0)}}function Ce(e,n,r,a){var c=$();try{I.get(e)(n,r,a)}catch(o){if(M(c),o!==o+0&&o!=="longjmp")throw o;tt(1,0)}}function Re(e,n){var r=$();try{return I.get(e)(n)}catch(a){if(M(r),a!==a+0&&a!=="longjmp")throw a;tt(1,0)}}function xe(e,n,r,a,c,o){var l=$();try{I.get(e)(n,r,a,c,o)}catch(g){if(M(l),g!==g+0&&g!=="longjmp")throw g;tt(1,0)}}function Se(e,n,r,a,c){var o=$();try{return I.get(e)(n,r,a,c)}catch(l){if(M(o),l!==l+0&&l!=="longjmp")throw l;tt(1,0)}}function Pe(e,n,r,a,c,o,l){var g=$();try{I.get(e)(n,r,a,c,o,l)}catch(U){if(M(g),U!==U+0&&U!=="longjmp")throw U;tt(1,0)}}function Te(e){var n=$();try{I.get(e)()}catch(r){if(M(n),r!==r+0&&r!=="longjmp")throw r;tt(1,0)}}var St;nt=function e(){St||jt(),St||(nt=e)};function jt(e){if(O>0||(yt(),O>0))return;function n(){St||(St=!0,t.calledRun=!0,!q&&(Ct(),f(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),ut()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),n()},1)):n()}if(t.run=jt,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return jt(),t.onRuntimeInitialized=function(){t.makeFromUTF8=function(e,n,r){const a=this.allocString(e),c=j("lifehash_make_from_utf8","number",["number","number","number","boolean"],[a,n,r,!0]),o=this.produceImage(c,n);return this.free(a),this.imageFree(c),o},t.makeFromData=function(e,n,r){const a=this.malloc(e.length);new Uint8Array(k.buffer,a,e.length).set(e);const o=j("lifehash_make_from_data","number",["number","number","number","number","boolean"],[a,e.length,n,r,!0]),l=this.produceImage(o,n);return this.free(a),this.imageFree(o),l},t.makeFromDigest=function(e,n,r){if(e.length!==32)throw new Error("Digest must be exactly 32 bytes.");const a=this.malloc(e.length);new Uint8Array(k.buffer,a,e.length).set(e);const o=j("lifehash_make_from_digest","number",["number","number","number","boolean"],[a,n,r,!0]),l=this.produceImage(o,n);return this.free(a),this.imageFree(o),l},t.malloc=G("malloc","number",["number"]),t.free=G("free",null,["number"]),t.imageFree=G("lifehash_image_free",null,["number"]),t.allocString=function(e){const n=new TextEncoder().encode(e),r=this.malloc(n.length+1);return new Uint8Array(k.buffer,r,n.length).set(n),k[r+n.length]=0,r},t.produceImage=function(e,n){const r=new Uint32Array(k.buffer,e,3),a=r[0],c=r[1],o=r[2],l=a*c*4,g=new Uint8Array(k.buffer,o,l),U=new Uint8ClampedArray(new ArrayBuffer(l));U.set(g);const V=document.createElement("canvas"),rt=V.getContext("2d");V.width=a,V.height=c;const ht=rt.createImageData(a,c);ht.data.set(U),rt.putImageData(ht,0,0);const bt=V.toDataURL(),vt=new Image,N=n===2?.5:1;return vt.width=a*N,vt.height=c*N,vt.src=bt,vt},t.sha256=function(e){const n=new TextEncoder().encode(e),r=this.malloc(n.length);new Uint8Array(k.buffer,r,n.length).set(n);const c=this.malloc(32);j("lifehash_sha256",null,["number","number","number"],[r,n.length,c]);const o=new Uint8Array(new ArrayBuffer(32));return o.set(new Uint8Array(k.buffer,c,32)),this.free(r),this.free(c),o},t.dataToHex=function(e){const n=this.malloc(e.length);new Uint8Array(k.buffer,n,e.length).set(e);const a=j("lifehash_data_to_hex","number",["number","number"],[n,e.length]),c=Q(a);return this.free(n),this.free(a),c},t.hexToData=function(e){const n=new TextEncoder().encode(e),r=this.malloc(n.length);new Uint8Array(k.buffer,r,n.length).set(n);const c=this.malloc(4),o=this.malloc(4),l=0,g=j("lifehash_hex_to_data","boolean",["number","number","number","number"],[r,n.length,c,o]);let U=null;if(g){const V=new Uint32Array(k.buffer,o,1)[0],rt=new Uint32Array(k.buffer,c,1)[0],ht=new Uint8Array(k.buffer,rt,V);U=new Uint8Array(new ArrayBuffer(V)),U.set(ht)}return this.free(r),this.free(o),this.free(l),this.free(c),U}},t.ready}}(),_t;(function(s){s[s.version1=0]="version1",s[s.version2=1]="version2",s[s.detailed=2]="detailed",s[s.fiducial=3]="fiducial",s[s.grayscaleFiducial=4]="grayscaleFiducial"})(_t||(_t={}));function Qt(s,t,f){const p=s.slice();return p[23]=t[f],p}function Xt(s,t,f){const p=s.slice();return p[5]=t[f],p}function Zt(s){let t,f=s[5].text+"",p,h,m;return{c(){t=u("option"),p=pt(f),h=w(),t.__value=m=s[5],t.value=t.__value},m(v,A){ot(v,t,A),i(t,p),i(t,h)},p:kt,d(v){v&&lt(t)}}}function Be(s){let t,f,p,h,m,v,A,E,C,R,B,d=s[3]===null&&$t();return{c(){t=u("div"),f=u("label"),p=u("strong"),p.textContent="Input SHA-256 Digest:",h=u("br"),m=w(),v=u("textarea"),A=w(),d&&d.c(),E=w(),C=u("p"),C.textContent=`This is the unique \u201Cfingerprint\u201D of the input that is used as the seed
        for the LifeHash algorithm. It must be exactly 64 hexadecimal digits
        produced by the SHA-256 algorithm.`,T(v,"class","data svelte-gkuvja"),T(v,"spellcheck","false"),T(v,"rows","1"),Ft(v,"width","100%"),Ft(f,"width","100%"),T(C,"class","caption svelte-gkuvja")},m(b,H){ot(b,t,H),i(t,f),i(f,p),i(f,h),i(f,m),i(f,v),Tt(v,s[2]),i(t,A),d&&d.m(t,null),i(t,E),i(t,C),R||(B=At(v,"input",s[16]),R=!0)},p(b,H){H&4&&Tt(v,b[2]),b[3]===null?d||(d=$t(),d.c(),d.m(t,E)):d&&(d.d(1),d=null)},d(b){b&&lt(t),d&&d.d(),R=!1,B()}}}function Oe(s){let t,f,p,h,m,v,A,E,C,R,B,d,b,H,F,q,z;return{c(){t=u("div"),f=u("label"),p=u("strong"),p.textContent="Input string:",h=w(),m=u("input"),v=w(),A=u("p"),A.textContent=`Edit this field to update the LifeHash image below. When using the
        library, the input can be a binary object of any size.`,E=w(),C=u("div"),R=u("strong"),R.textContent="SHA-256 Digest:",B=w(),d=u("span"),b=pt(s[4]),H=w(),F=u("p"),F.textContent=`This is the unique \u201Cfingerprint\u201D of the input that is used as the seed
        for the LifeHash algorithm. Making even a tiny change to the input
        string above results in a complete change of the digest.`,T(m,"spellcheck","false"),T(A,"class","caption svelte-gkuvja"),T(d,"class","data svelte-gkuvja"),T(F,"class","caption svelte-gkuvja")},m(D,j){ot(D,t,j),i(t,f),i(f,p),i(f,h),i(f,m),Tt(m,s[1]),i(t,v),i(t,A),ot(D,E,j),ot(D,C,j),i(C,R),i(C,B),i(C,d),i(d,b),i(C,H),i(C,F),q||(z=At(m,"input",s[15]),q=!0)},p(D,j){j&2&&m.value!==D[1]&&Tt(m,D[1]),j&16&&Lt(b,D[4])},d(D){D&&lt(t),D&&lt(E),D&&lt(C),q=!1,z()}}}function $t(s){let t;return{c(){t=u("div"),t.textContent="Invalid digest.",T(t,"class","error svelte-gkuvja")},m(f,p){ot(f,t,p)},d(f){f&&lt(t)}}}function Mt(s){let t,f=s[23].text+"",p,h,m;return{c(){t=u("option"),p=pt(f),h=w(),t.__value=m=s[23],t.value=t.__value},m(v,A){ot(v,t,A),i(t,p),i(t,h)},p:kt,d(v){v&&lt(t)}}}function te(s){let t;return{c(){t=u("div"),t.textContent="Invalid digest.",T(t,"class","error svelte-gkuvja")},m(f,p){ot(f,t,p)},d(f){f&&lt(t)}}}function We(s){let t,f,p,h,m,v,A,E,C,R,B,d,b,H,F,q,z=s[0].text+"",D,j,G=s[0].description+"",et,at,Q,it,st,x,P,k,S,L,I,ct,ft,X,yt,Ct,ut=s[6],K=[];for(let _=0;_<ut.length;_+=1)K[_]=Zt(Xt(s,ut,_));function Rt(_,Z){return _[5].sourceIsString?Oe:Be}let mt=Rt(s),O=mt(s),nt=s[7],Y=[];for(let _=0;_<nt.length;_+=1)Y[_]=Mt(Qt(s,nt,_));let J=s[3]===null&&te();return{c(){t=u("main"),f=u("div"),p=u("label"),h=u("strong"),h.textContent="Create Lifehash using a:",m=w(),v=u("select");for(let _=0;_<K.length;_+=1)K[_].c();A=w(),O.c(),E=w(),C=u("div"),R=u("label"),B=u("strong"),B.textContent="LifeHash Version:",d=w(),b=u("select");for(let _=0;_<Y.length;_+=1)Y[_].c();H=w(),F=u("p"),q=pt("About "),D=pt(z),j=pt(": "),et=pt(G),at=w(),Q=u("strong"),Q.textContent="LifeHash:",it=w(),st=u("div"),x=w(),J&&J.c(),P=w(),k=u("strong"),k.textContent="Gallery:",S=w(),L=u("button"),L.textContent="\u21BB More",I=w(),ct=u("div"),ft=w(),X=u("p"),X.textContent=`You can click on the strings beneath each icon to set the input string,
    reproducing the exact same LifeHash.`,s[5]===void 0&&Yt(()=>s[14].call(v)),Ft(f,"margin-bottom","20px"),s[0]===void 0&&Yt(()=>s[17].call(b)),T(F,"class","caption svelte-gkuvja"),T(st,"id","image"),T(L,"class","reload svelte-gkuvja"),T(ct,"id","gallery"),T(X,"class","caption svelte-gkuvja"),T(t,"class","svelte-gkuvja")},m(_,Z){ot(_,t,Z),i(t,f),i(f,p),i(p,h),i(p,m),i(p,v);for(let y=0;y<K.length;y+=1)K[y].m(v,null);Pt(v,s[5]),i(t,A),O.m(t,null),i(t,E),i(t,C),i(C,R),i(R,B),i(R,d),i(R,b);for(let y=0;y<Y.length;y+=1)Y[y].m(b,null);Pt(b,s[0]),i(C,H),i(C,F),i(F,q),i(F,D),i(F,j),i(F,et),i(t,at),i(t,Q),i(t,it),i(t,st),i(t,x),J&&J.m(t,null),i(t,P),i(t,k),i(t,S),i(t,L),i(t,I),i(t,ct),i(t,ft),i(t,X),yt||(Ct=[At(v,"change",s[14]),At(b,"change",s[17]),At(L,"click",s[8])],yt=!0)},p(_,[Z]){if(Z&64){ut=_[6];let y;for(y=0;y<ut.length;y+=1){const W=Xt(_,ut,y);K[y]?K[y].p(W,Z):(K[y]=Zt(W),K[y].c(),K[y].m(v,null))}for(;y<K.length;y+=1)K[y].d(1);K.length=ut.length}if(Z&96&&Pt(v,_[5]),mt===(mt=Rt(_))&&O?O.p(_,Z):(O.d(1),O=mt(_),O&&(O.c(),O.m(t,E))),Z&128){nt=_[7];let y;for(y=0;y<nt.length;y+=1){const W=Qt(_,nt,y);Y[y]?Y[y].p(W,Z):(Y[y]=Mt(W),Y[y].c(),Y[y].m(b,null))}for(;y<Y.length;y+=1)Y[y].d(1);Y.length=nt.length}Z&129&&Pt(b,_[0]),Z&1&&z!==(z=_[0].text+"")&&Lt(D,z),Z&1&&G!==(G=_[0].description+"")&&Lt(et,G),_[3]===null?J||(J=te(),J.c(),J.m(t,P)):J&&(J.d(1),J=null)},i:kt,o:kt,d(_){_&&lt(t),Jt(K,_),O.d(),Jt(Y,_),J&&J.d(),yt=!1,Ie(Ct)}}}function qe(s){return s[Math.floor(Math.random()*s.length)]}function Ne(){return qe("ABCDEFGHIJKLMNOPQRSTUVWXYZ")}function ee(){let s="";for(let t=0;t<3;t++)s+=Ne();return s}function ze(){return ee()+"-"+ee()}function Ge(s,t,f){let p;const h={sourceIsString:!0,text:"UTF-8 string"},m={sourceIsString:!1,text:"SHA-256 digest"},v=[h,m],A=[{version:_t.version1,text:"Version 1",description:"DEPRECATED. Uses HSB gamut. Not CMYK-friendly. Has some minor gradient bugs."},{version:_t.version2,text:"Version 2",description:"CMYK-friendly gamut. Recommended for most purposes."},{version:_t.detailed,text:"Detailed",description:"Double resolution. CMYK-friendly gamut."},{version:_t.fiducial,text:"Fiducial",description:"Optimized for generating machine-vision fiducials. High-contrast. CMYK-friendly gamut."},{version:_t.grayscaleFiducial,text:"Grayscale Fiducial",description:"Optimized for generating machine-vision fiducials. High-contrast for low-light conditions."}];let E=A[1],C="Hello, world!",R="",B="",d,b=h,H=x=>{},F=x=>{},q=(x,P)=>{},z=(x,P)=>{},D=[];et();const j=new URLSearchParams(window.location.search),G=j.get("s");if(console.log(G),G!==null)C=G,b=h;else{const x=j.get("d");console.log(x),x!==null&&(R=x,b=m)}(async()=>{p=await Le(),f(9,H=x=>{if(b===h){const P=p.dataToHex(p.sha256(x));f(2,R=P)}}),f(10,F=x=>{f(4,B=x);const P=p.hexToData(B);P===null||P.length!==32?f(3,d=null):f(3,d=P)}),f(11,q=(x,P)=>{const k=document.getElementById("image");if(k.innerHTML="",x!==null){let S=p.makeFromDigest(x,P,4);S.style.margin="5px",k.appendChild(S)}}),f(12,z=(x,P)=>{let k=[];for(const L of P){let I=document.createElement("div"),ct=document.createElement("div");ct.appendChild(p.makeFromUTF8(L,x,3));let ft=document.createElement("div"),X=document.createElement("a");ft.appendChild(X),X.innerText=L,X.style.fontFamily="monospace",X.style.fontSize="12pt",X.style.fontWeight="bold",X.onclick=()=>{f(5,b=h),f(1,C=L)},I.appendChild(ct),I.appendChild(ft),I.style.display="inline-block",I.style.margin="5px",I.style.textAlign="center",k.push(I)}const S=document.getElementById("gallery");S.textContent="";for(const L of k)S.appendChild(L)})})();function et(){let x=[];for(let P=0;P<10;P++)x.push(ze());f(13,D=x)}function at(){b=Vt(this),f(5,b),f(6,v)}function Q(){C=this.value,f(1,C)}function it(){R=this.value,f(2,R)}function st(){E=Vt(this),f(0,E),f(7,A)}return s.$$.update=()=>{s.$$.dirty&514&&H(C),s.$$.dirty&1028&&F(R),s.$$.dirty&2057&&q(d,E.version),s.$$.dirty&12289&&z(E.version,D)},[E,C,R,d,B,b,v,A,et,H,F,q,z,D,at,Q,it,st]}class Ke extends zt{constructor(t){super();Gt(this,t,Ge,We,Kt,{})}}function Ye(s){let t,f,p,h,m,v,A,E,C,R,B,d,b,H,F,q,z,D,j,G,et,at,Q,it,st,x,P,k,S;return d=new Ke({}),{c(){t=u("main"),f=u("h1"),f.textContent="LifeHash",p=w(),h=u("h2"),h.textContent="Beautiful Visual Hashes",m=w(),v=u("h3"),v.innerHTML='from <a href="https://www.blockchaincommons.com/" target="_blank" class="svelte-1wit19e">Blockchain Commons</a>',A=w(),E=u("h3"),E.innerHTML='created by <a href="https://wolfmcnally.com" target="_blank" class="svelte-1wit19e">Wolf McNally</a>',C=w(),R=u("div"),R.innerHTML=`<p>This page is a live demonstration of the <a href="https://github.com/BlockchainCommons/bc-lifehash" target="_blank" class="svelte-1wit19e">LifeHash</a> visual hash algorithm running in the web browser.
      It uses the reference C++ implementation compiled to <a href="https://webassembly.org/" target="_blank" class="svelte-1wit19e">WebAssembly</a>.</p>`,B=w(),De(d.$$.fragment),b=w(),H=u("h3"),H.innerHTML='About <strong class="svelte-1wit19e">LifeHash</strong>',F=w(),q=u("p"),q.innerHTML=`LifeHash is a method of <a href="https://en.wikipedia.org/wiki/Identicon" target="_blank" class="svelte-1wit19e">hash visualization</a>
    based on
    <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" class="svelte-1wit19e">Conway\u2019s Game of Life</a> that creates beautiful icons that are deterministic, yet distinct and unique
    given the input data.`,z=w(),D=u("p"),D.innerHTML=`The basic concept is to take a <a href="https://en.wikipedia.org/wiki/SHA-2" target="_blank" class="svelte-1wit19e">SHA-256</a> hash of the input data (which can be any data including another hash) and then
    use the 256-bit digest as a 16x16 pixel &quot;seed&quot; for running the cellular automata
    known as Conway\u2019s Game of Life.`,j=w(),G=u("p"),G.textContent=`After the pattern becomes stable (or begins repeating) the resulting history
    is used to compile a grayscale image of all the states from the first to
    last generation. Using Game of Life provides visual structure to the
    resulting image, even though it was seeded with entropy.`,et=w(),at=u("p"),at.textContent=`Some bits of the initial hash are then used to deterministically apply
    symmetry and color to the icon to add beauty and quick recognizability.`,Q=w(),it=u("h3"),it.textContent="Watch the explainer video",st=w(),x=u("a"),x.innerHTML='<img src="title-card.jpg" alt="Explainer Video" style="width:100%; max-width: 600px"/>',P=w(),k=u("div"),k.innerHTML=`<h3 class="section svelte-1wit19e">We care about your privacy</h3> 
    <p>This page is self-contained, sets no cookies, and sends no data to the
      cloud.</p>`,T(f,"class","svelte-1wit19e"),T(h,"class","svelte-1wit19e"),T(v,"class","svelte-1wit19e"),T(E,"class","svelte-1wit19e"),T(R,"class","explanation svelte-1wit19e"),T(H,"class","section svelte-1wit19e"),T(it,"class","section svelte-1wit19e"),T(x,"href","https://www.youtube.com/watch?v=cu0K__KLxKo"),T(x,"target","_blank"),T(x,"class","svelte-1wit19e"),T(k,"class","explanation svelte-1wit19e"),T(t,"class","svelte-1wit19e")},m(L,I){ot(L,t,I),i(t,f),i(t,p),i(t,h),i(t,m),i(t,v),i(t,A),i(t,E),i(t,C),i(t,R),i(t,B),Ee(d,t,null),i(t,b),i(t,H),i(t,F),i(t,q),i(t,z),i(t,D),i(t,j),i(t,G),i(t,et),i(t,at),i(t,Q),i(t,it),i(t,st),i(t,x),i(t,P),i(t,k),S=!0},p:kt,i(L){S||(He(d.$$.fragment,L),S=!0)},o(L){Ue(d.$$.fragment,L),S=!1},d(L){L&&lt(t),je(d)}}}function Je(s){return[]}class Ve extends zt{constructor(t){super();Gt(this,t,Je,Ye,Kt,{})}}new Ve({target:document.getElementById("app")});
