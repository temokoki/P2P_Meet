var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var N=Symbol.for(`react.client.reference`);function P(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?P(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return P(e(t))}catch{}}return null}var F=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},ee=[],te=-1;function z(e){return{current:e}}function B(e){0>te||(e.current=ee[te],ee[te]=null,te--)}function V(e,t){te++,ee[te]=e.current,e.current=t}var H=z(null),U=z(null),ne=z(null),W=z(null);function re(e,t){switch(V(ne,t),V(U,e),V(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}B(H),V(H,e)}function ie(){B(H),B(U),B(ne)}function ae(e){e.memoizedState!==null&&V(W,e);var t=H.current,n=Ud(t,e.type);t!==n&&(V(U,e),V(H,n))}function oe(e){U.current===e&&(B(H),B(U)),W.current===e&&(B(W),$f._currentValue=R)}var se,ce;function le(e){if(se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);se=t&&t[1]||``,ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+se+e+ce}var ue=!1;function de(e,t){if(!e||ue)return``;ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?le(n):``}function fe(e,t){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le(`Lazy`);case 13:return e.child!==t&&t!==null?le(`Suspense Fallback`):le(`Suspense`);case 19:return le(`SuspenseList`);case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return le(`Activity`);default:return``}}function pe(e){try{var t=``,n=null;do t+=fe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var me=Object.prototype.hasOwnProperty,he=t.unstable_scheduleCallback,ge=t.unstable_cancelCallback,_e=t.unstable_shouldYield,ve=t.unstable_requestPaint,ye=t.unstable_now,be=t.unstable_getCurrentPriorityLevel,xe=t.unstable_ImmediatePriority,Se=t.unstable_UserBlockingPriority,Ce=t.unstable_NormalPriority,we=t.unstable_LowPriority,Te=t.unstable_IdlePriority,Ee=t.log,De=t.unstable_setDisableYieldValue,Oe=null,ke=null;function Ae(e){if(typeof Ee==`function`&&De(e),ke&&typeof ke.setStrictMode==`function`)try{ke.setStrictMode(Oe,e)}catch{}}var je=Math.clz32?Math.clz32:Pe,Me=Math.log,Ne=Math.LN2;function Pe(e){return e>>>=0,e===0?32:31-(Me(e)/Ne|0)|0}var Fe=256,Ie=262144,Le=4194304;function Re(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Re(n))):i=Re(o):i=Re(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Re(n))):i=Re(o)):i=Re(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Be(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ve(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Le;return Le<<=1,!(Le&62914560)&&(Le=4194304),e}function Ue(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function We(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ge(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ke(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ke(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function qe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Je(e,t){var n=t&-t;return n=n&42?1:Ye(n),(n&(e.suspendedLanes|t))===0?n:0}function Ye(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xe(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ze(){var e=L.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function Qe(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var $e=Math.random().toString(36).slice(2),et=`__reactFiber$`+$e,tt=`__reactProps$`+$e,nt=`__reactContainer$`+$e,rt=`__reactEvents$`+$e,it=`__reactListeners$`+$e,at=`__reactHandles$`+$e,ot=`__reactResources$`+$e,st=`__reactMarker$`+$e;function ct(e){delete e[et],delete e[tt],delete e[rt],delete e[it],delete e[at]}function lt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[et])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function ut(e){if(e=e[et]||e[nt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function ft(e){var t=e[ot];return t||=e[ot]={hoistableStyles:new Map,hoistableScripts:new Map},t}function pt(e){e[st]=!0}var mt=new Set,ht={};function gt(e,t){_t(e,t),_t(e+`Capture`,t)}function _t(e,t){for(ht[e]=t,e=0;e<t.length;e++)mt.add(t[e])}var vt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),yt={},bt={};function xt(e){return me.call(bt,e)?!0:me.call(yt,e)?!1:vt.test(e)?bt[e]=!0:(yt[e]=!0,!1)}function St(e,t,n){if(xt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ct(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function wt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Tt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Et(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Dt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ot(e){if(!e._valueTracker){var t=Et(e)?`checked`:`value`;e._valueTracker=Dt(e,t,``+e[t])}}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Et(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function At(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var jt=/[\n"\\]/g;function Mt(e){return e.replace(jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Nt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Tt(t)):e.value!==``+Tt(t)&&(e.value=``+Tt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ft(e,o,Tt(n)):Ft(e,o,Tt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Tt(s):e.removeAttribute(`name`)}function Pt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ot(e);return}n=n==null?``:``+Tt(n),t=t==null?n:``+Tt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ot(e)}function Ft(e,t,n){t===`number`&&At(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function It(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lt(e,t,n){if(t!=null&&(t=``+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Tt(n)}function Rt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(F(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Tt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ot(e)}function zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Vt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Bt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Ht(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Vt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Vt(e,o,t[o])}function Ut(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Wt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Gt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kt(e){return Gt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function qt(){}var Jt=null;function Yt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xt=null,Zt=null;function Qt(e){var t=ut(e);if(t&&(e=t.stateNode)){var n=e[tt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Nt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Mt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[tt]||null;if(!a)throw Error(i(90));Nt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&kt(r)}break a;case`textarea`:Lt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&It(e,!!n.multiple,t,!1)}}}var $t=!1;function en(e,t,n){if($t)return e(t,n);$t=!0;try{return e(t)}finally{if($t=!1,(Xt!==null||Zt!==null)&&(vu(),Xt&&(t=Xt,e=Zt,Zt=Xt=null,Qt(t),e)))for(t=0;t<e.length;t++)Qt(e[t])}}function tn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[tt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var nn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),rn=!1;if(nn)try{var an={};Object.defineProperty(an,"passive",{get:function(){rn=!0}}),window.addEventListener(`test`,an,an),window.removeEventListener(`test`,an,an)}catch{rn=!1}var on=null,sn=null,cn=null;function ln(){if(cn)return cn;var e,t=sn,n=t.length,r,i=`value`in on?on.value:on.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return cn=i.slice(e,1<r?1-r:void 0)}function un(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dn(){return!0}function fn(){return!1}function pn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?dn:fn,this.isPropagationStopped=fn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=dn)},persist:function(){},isPersistent:dn}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hn=pn(mn),gn=h({},mn,{view:0,detail:0}),_n=pn(gn),vn,yn,bn,xn=h({},gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==bn&&(bn&&e.type===`mousemove`?(vn=e.screenX-bn.screenX,yn=e.screenY-bn.screenY):yn=vn=0,bn=e),vn)},movementY:function(e){return`movementY`in e?e.movementY:yn}}),Sn=pn(xn),Cn=pn(h({},xn,{dataTransfer:0})),wn=pn(h({},gn,{relatedTarget:0})),Tn=pn(h({},mn,{animationName:0,elapsedTime:0,pseudoElement:0})),En=pn(h({},mn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Dn=pn(h({},mn,{data:0})),On={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},kn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},An={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=An[e])?!!t[e]:!1}function Mn(){return jn}var Nn=pn(h({},gn,{key:function(e){if(e.key){var t=On[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=un(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?kn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mn,charCode:function(e){return e.type===`keypress`?un(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?un(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Pn=pn(h({},xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Fn=pn(h({},gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mn})),In=pn(h({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Ln=pn(h({},xn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Rn=pn(h({},mn,{newState:0,oldState:0})),zn=[9,13,27,32],Bn=nn&&`CompositionEvent`in window,Vn=null;nn&&`documentMode`in document&&(Vn=document.documentMode);var Hn=nn&&`TextEvent`in window&&!Vn,Un=nn&&(!Bn||Vn&&8<Vn&&11>=Vn),Wn=` `,Gn=!1;function Kn(e,t){switch(e){case`keyup`:return zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function qn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Jn=!1;function Yn(e,t){switch(e){case`compositionend`:return qn(t);case`keypress`:return t.which===32?(Gn=!0,Wn):null;case`textInput`:return e=t.data,e===Wn&&Gn?null:e;default:return null}}function Xn(e,t){if(Jn)return e===`compositionend`||!Bn&&Kn(e,t)?(e=ln(),cn=sn=on=null,Jn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Un&&t.locale!==`ko`?null:t.data;default:return null}}var Zn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Zn[e.type]:t===`textarea`}function $n(e,t,n,r){Xt?Zt?Zt.push(r):Zt=[r]:Xt=r,t=Ed(t,`onChange`),0<t.length&&(n=new hn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var er=null,tr=null;function nr(e){vd(e,0)}function rr(e){if(kt(dt(e)))return e}function ir(e,t){if(e===`change`)return t}var ar=!1;if(nn){var or;if(nn){var sr=`oninput`in document;if(!sr){var cr=document.createElement(`div`);cr.setAttribute(`oninput`,`return;`),sr=typeof cr.oninput==`function`}or=sr}else or=!1;ar=or&&(!document.documentMode||9<document.documentMode)}function lr(){er&&(er.detachEvent(`onpropertychange`,ur),tr=er=null)}function ur(e){if(e.propertyName===`value`&&rr(tr)){var t=[];$n(t,tr,e,Yt(e)),en(nr,t)}}function dr(e,t,n){e===`focusin`?(lr(),er=t,tr=n,er.attachEvent(`onpropertychange`,ur)):e===`focusout`&&lr()}function fr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return rr(tr)}function pr(e,t){if(e===`click`)return rr(t)}function mr(e,t){if(e===`input`||e===`change`)return rr(t)}function hr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var gr=typeof Object.is==`function`?Object.is:hr;function _r(e,t){if(gr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!me.call(t,i)||!gr(e[i],t[i]))return!1}return!0}function vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yr(e,t){var n=vr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=vr(n)}}function br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?br(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=At(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=At(e.document)}return t}function Sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Cr=nn&&`documentMode`in document&&11>=document.documentMode,wr=null,Tr=null,Er=null,Dr=!1;function Or(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dr||wr==null||wr!==At(r)||(r=wr,`selectionStart`in r&&Sr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&_r(Er,r)||(Er=r,r=Ed(Tr,`onSelect`),0<r.length&&(t=new hn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ar={animationend:kr(`Animation`,`AnimationEnd`),animationiteration:kr(`Animation`,`AnimationIteration`),animationstart:kr(`Animation`,`AnimationStart`),transitionrun:kr(`Transition`,`TransitionRun`),transitionstart:kr(`Transition`,`TransitionStart`),transitioncancel:kr(`Transition`,`TransitionCancel`),transitionend:kr(`Transition`,`TransitionEnd`)},jr={},Mr={};nn&&(Mr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),`TransitionEvent`in window||delete Ar.transitionend.transition);function Nr(e){if(jr[e])return jr[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mr)return jr[e]=t[n];return e}var Pr=Nr(`animationend`),Fr=Nr(`animationiteration`),Ir=Nr(`animationstart`),Lr=Nr(`transitionrun`),Rr=Nr(`transitionstart`),zr=Nr(`transitioncancel`),Br=Nr(`transitionend`),Vr=new Map,Hr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Hr.push(`scrollEnd`);function Ur(e,t){Vr.set(e,t),gt(t,[e])}var Wr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Gr=[],Kr=0,qr=0;function Jr(){for(var e=Kr,t=qr=Kr=0;t<e;){var n=Gr[t];Gr[t++]=null;var r=Gr[t];Gr[t++]=null;var i=Gr[t];Gr[t++]=null;var a=Gr[t];if(Gr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Qr(n,i,a)}}function Yr(e,t,n,r){Gr[Kr++]=e,Gr[Kr++]=t,Gr[Kr++]=n,Gr[Kr++]=r,qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Xr(e,t,n,r){return Yr(e,t,n,r),$r(e)}function Zr(e,t){return Yr(e,null,null,t),$r(e)}function Qr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function $r(e){if(50<uu)throw uu=0,du=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ei={};function ti(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,t,n,r){return new ti(e,t,n,r)}function ri(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ii(e,t){var n=e.alternate;return n===null?(n=ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ai(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ri(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,H.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ni(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ni(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ni(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ni(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ni(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function si(e,t,n,r){return e=ni(7,e,r,t),e.lanes=n,e}function ci(e,t,n){return e=ni(6,e,null,t),e.lanes=n,e}function li(e){var t=ni(18,null,null,0);return t.stateNode=e,t}function ui(e,t,n){return t=ni(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var di=new WeakMap;function fi(e,t){if(typeof e==`object`&&e){var n=di.get(e);return n===void 0?(t={value:e,source:t,stack:pe(t)},di.set(e,t),t):n}return{value:e,source:t,stack:pe(t)}}var pi=[],mi=0,hi=null,gi=0,_i=[],vi=0,yi=null,bi=1,xi=``;function Si(e,t){pi[mi++]=gi,pi[mi++]=hi,hi=e,gi=t}function Ci(e,t,n){_i[vi++]=bi,_i[vi++]=xi,_i[vi++]=yi,yi=e;var r=bi;e=xi;var i=32-je(r)-1;r&=~(1<<i),n+=1;var a=32-je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bi=1<<32-je(t)+i|n<<i|r,xi=a+e}else bi=1<<a|n<<i|r,xi=e}function wi(e){e.return!==null&&(Si(e,1),Ci(e,1,0))}function Ti(e){for(;e===hi;)hi=pi[--mi],pi[mi]=null,gi=pi[--mi],pi[mi]=null;for(;e===yi;)yi=_i[--vi],_i[vi]=null,xi=_i[--vi],_i[vi]=null,bi=_i[--vi],_i[vi]=null}function Ei(e,t){_i[vi++]=bi,_i[vi++]=xi,_i[vi++]=yi,bi=t.id,xi=t.overflow,yi=e}var Di=null,Oi=null,ki=!1,Ai=null,ji=!1,Mi=Error(i(519));function Ni(e){throw zi(fi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Mi}function Pi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[et]=e,t[tt]=r,n){case`dialog`:yd(`cancel`,t),yd(`close`,t);break;case`iframe`:case`object`:case`embed`:yd(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)yd(gd[n],t);break;case`source`:yd(`error`,t);break;case`img`:case`image`:case`link`:yd(`error`,t),yd(`load`,t);break;case`details`:yd(`toggle`,t);break;case`input`:yd(`invalid`,t),Pt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:yd(`invalid`,t);break;case`textarea`:yd(`invalid`,t),Rt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(yd(`beforetoggle`,t),yd(`toggle`,t)),r.onScroll!=null&&yd(`scroll`,t),r.onScrollEnd!=null&&yd(`scrollend`,t),r.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||Ni(e,!0)}function Fi(e){for(Di=e.return;Di;)switch(Di.tag){case 5:case 31:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Di=Di.return}}function Ii(e){if(e!==Di)return!1;if(!ki)return Fi(e),ki=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&Oi&&Ni(e),Fi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Oi=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Oi=df(e)}else t===27?(t=Oi,Qd(e.type)?(e=uf,uf=null,Oi=e):Oi=t):Oi=Di?lf(e.stateNode.nextSibling):null;return!0}function Li(){Oi=Di=null,ki=!1}function Ri(){var e=Ai;return e!==null&&(Xl===null?Xl=e:Xl.push.apply(Xl,e),Ai=null),e}function zi(e){Ai===null?Ai=[e]:Ai.push(e)}var Bi=z(null),Vi=null,Hi=null;function Ui(e,t,n){V(Bi,t._currentValue),t._currentValue=n}function Wi(e){e._currentValue=Bi.current,B(Bi)}function Gi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ki(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Gi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Gi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function qi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;gr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===W.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&Ki(t,e,n,r),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!gr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yi(e){Vi=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xi(e){return Qi(Vi,e)}function Zi(e,t){return Vi===null&&Yi(e),Qi(e,t)}function Qi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Hi===null){if(e===null)throw Error(i(308));Hi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Hi=Hi.next=t;return n}var $i=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ea=t.unstable_scheduleCallback,ta=t.unstable_NormalPriority,na={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ra(){return{controller:new $i,data:new Map,refCount:0}}function ia(e){e.refCount--,e.refCount===0&&ea(ta,function(){e.controller.abort()})}var aa=null,oa=0,sa=0,ca=null;function la(e,t){if(aa===null){var n=aa=[];oa=0,sa=ud(),ca={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return oa++,t.then(ua,ua),t}function ua(){if(--oa===0&&aa!==null){ca!==null&&(ca.status=`fulfilled`);var e=aa;aa=null,sa=0,ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function da(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var fa=I.S;I.S=function(e,t){$l=ye(),typeof t==`object`&&t&&typeof t.then==`function`&&la(e,t),fa!==null&&fa(e,t)};var pa=z(null);function ma(){var e=pa.current;return e===null?Pl.pooledCache:e}function ha(e,t){t===null?V(pa,pa.current):V(pa,t.pool)}function ga(){var e=ma();return e===null?null:{parent:na._currentValue,pool:e}}var _a=Error(i(460)),va=Error(i(474)),ya=Error(i(542)),ba={then:function(){}};function xa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Sa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qt,qt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ea(e),e;default:if(typeof t.status==`string`)t.then(qt,qt);else{if(e=Pl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ea(e),e}throw wa=t,_a}}function Ca(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(wa=e,_a):e}}var wa=null;function Ta(){if(wa===null)throw Error(i(459));var e=wa;return wa=null,e}function Ea(e){if(e===_a||e===ya)throw Error(i(483))}var Da=null,Oa=0;function ka(e){var t=Oa;return Oa+=1,Da===null&&(Da=[]),Sa(Da,e,t)}function Aa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ja(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ma(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ii(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Ca(i)===t.type)?(t=a(t,n.props),Aa(t,n),t.return=e,t):(t=oi(n.type,n.key,n.props,null,e.mode,r),Aa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=oi(t.type,t.key,t.props,null,e.mode,n),Aa(n,t),n.return=e,n;case v:return t=ui(t,e.mode,n),t.return=e,t;case O:return t=Ca(t),f(e,t,n)}if(F(t)||M(t))return t=si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ka(t),n);if(t.$$typeof===C)return f(e,Zi(e,t),n);ja(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Ca(n),p(e,t,n,r)}if(F(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ka(n),r);if(n.$$typeof===C)return p(e,t,Zi(e,n),r);ja(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Ca(r),m(e,t,n,r,i)}if(F(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ka(r),i);if(r.$$typeof===C)return m(e,t,n,Zi(t,r),i);ja(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),ki&&Si(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return ki&&Si(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),ki&&Si(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),ki&&Si(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return ki&&Si(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),ki&&Si(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Ca(l)===r.type){n(e,r.sibling),c=a(r,o.props),Aa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=oi(o.type,o.key,o.props,null,e.mode,c),Aa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ui(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Ca(o),b(e,r,o,c)}if(F(o))return h(e,r,o,c);if(M(o)){if(l=M(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ka(o),c);if(o.$$typeof===C)return b(e,r,Zi(e,o),c);ja(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Oa=0;var i=b(e,t,n,r);return Da=null,i}catch(t){if(t===_a||t===ya)throw t;var a=ni(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Na=Ma(!0),Pa=Ma(!1),Fa=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Nl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=$r(e),Qr(e,null,n),t}return Yr(e,r,t,n),$r(e)}function Ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qe(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ha=!1;function G(){if(Ha){var e=ca;if(e!==null)throw e}}function Ua(e,t,n,r){Ha=!1;var i=e.updateQueue;Fa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Il&f)===f:(r&f)===f){f!==0&&f===sa&&(Ha=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Fa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Wl|=o,e.lanes=o,e.memoizedState=d}}function Wa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ga(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wa(n[e],t)}var Ka=z(null),qa=z(0);function Ja(e,t){e=Hl,V(qa,e),V(Ka,t),Hl=e|t.baseLanes}function Ya(){V(qa,Hl),V(Ka,Ka.current)}function Xa(){Hl=qa.current,B(Ka),B(qa)}var Za=z(null),Qa=null;function $a(e){var t=e.alternate;V(io,io.current&1),V(Za,e),Qa===null&&(t===null||Ka.current!==null||t.memoizedState!==null)&&(Qa=e)}function eo(e){V(io,io.current),V(Za,e),Qa===null&&(Qa=e)}function to(e){e.tag===22?(V(io,io.current),V(Za,e),Qa===null&&(Qa=e)):no(e)}function no(){V(io,io.current),V(Za,Za.current)}function ro(e){B(Za),Qa===e&&(Qa=null),B(io)}var io=z(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oo=0,so=null,co=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return oo=a,so=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?Ps:Fs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){I.H=Ns;var t=co!==null&&co.next!==null;if(oo=0,lo=co=so=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||Qs||(e=e.dependencies,e!==null&&Ji(e)&&(Qs=!0))}function So(e,t,n,r){so=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=co=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=Is,o=t(n,r)}while(fo);return o}function Co(){var e=I.H,t=e.useState()[0];return t=typeof t.then==`function`?ko(t):t,e=e.useState()[0],(co===null?null:co.memoizedState)!==e&&(so.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}oo=0,lo=co=so=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?so.memoizedState=lo=e:lo=lo.next=e,lo}function K(){if(co===null){var e=so.alternate;e=e===null?null:e.memoizedState}else e=co.next;var t=lo===null?so.memoizedState:lo.next;if(t!==null)lo=t,co=e;else{if(e===null)throw so.alternate===null?Error(i(467)):Error(i(310));co=e,e={memoizedState:co.memoizedState,baseState:co.baseState,baseQueue:co.baseQueue,queue:co.queue,next:null},lo===null?so.memoizedState=lo=e:lo=lo.next=e}return lo}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Sa(go,e,t),t=so,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?Ps:Fs),e}function Ao(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ko(e);if(e.$$typeof===C)return Xi(e)}throw Error(i(438,String(e)))}function jo(e){var t=null,n=so.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=so.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Oo(),so.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Mo(e,t){return typeof t==`function`?t(e):t}function No(e){return Po(K(),co,e)}function Po(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(oo&f)===f:(Il&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===sa&&(d=!0);else if((oo&p)===p){u=u.next,p===sa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,so.lanes|=p,Wl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,so.lanes|=f,Wl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!gr(o,e.memoizedState)&&(Qs=!0,d&&(n=ca,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Fo(e){var t=K(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);gr(o,t.memoizedState)||(Qs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Io(e,t,n){var r=so,a=K(),o=ki;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!gr((co||a).memoizedState,n);if(s&&(a.memoizedState=n,Qs=!0),a=a.queue,as(zo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,es(9,{destroy:void 0},Ro.bind(null,r,a,n,t),null),Pl===null)throw Error(i(349));o||oo&127||Lo(r,t,n)}return n}function Lo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=so.updateQueue,t===null?(t=Oo(),so.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ro(e,t,n,r){t.value=n,t.getSnapshot=r,Bo(t)&&Vo(e)}function zo(e,t,n){return n(function(){Bo(t)&&Vo(e)})}function Bo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gr(e,n)}catch{return!0}}function Vo(e){var t=Zr(e,2);t!==null&&pu(t,e,2)}function Ho(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){Ae(!0);try{n()}finally{Ae(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t}function Uo(e,t,n,r){return e.baseState=n,Po(e,co,typeof r==`function`?r:Mo)}function Wo(e,t,n,r,a){if(As(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};I.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Go(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Go(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=I.T,o={};I.T=o;try{var s=n(i,r),c=I.S;c!==null&&c(o,s),Ko(e,t,s)}catch(n){Jo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),I.T=a}}else try{a=n(i,r),Ko(e,t,a)}catch(n){Jo(e,t,n)}}function Ko(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){qo(e,t,n)},function(n){return Jo(e,t,n)}):qo(e,t,n)}function qo(e,t,n){t.status=`fulfilled`,t.value=n,Yo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Go(e,n)))}function Jo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Yo(t),t=t.next;while(t!==r)}e.action=null}function Yo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xo(e,t){return t}function Zo(e,t){if(ki){var n=Pl.formState;if(n!==null){a:{var r=so;if(ki){if(Oi){b:{for(var i=Oi,a=ji;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Oi=lf(i.nextSibling),r=i.data===`F!`;break a}}Ni(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},n.queue=r,n=Ds.bind(null,so,r),r.dispatch=n,r=Ho(!1),a=ks.bind(null,so,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Wo.bind(null,so,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function q(e){return Qo(K(),co,e)}function Qo(e,t,n){if(t=Po(e,t,Xo)[0],e=No(Mo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ko(t)}catch(e){throw e===_a?ya:e}else r=t;t=K();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(so.flags|=2048,es(9,{destroy:void 0},$o.bind(null,i,n),null)),[r,a,e]}function $o(e,t){e.action=t}function J(e){var t=K(),n=co;if(n!==null)return Qo(t,n,e);K(),t=t.memoizedState,n=K();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function es(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=so.updateQueue,t===null&&(t=Oo(),so.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ts(){return K().memoizedState}function ns(e,t,n,r){var i=Do();so.flags|=e,i.memoizedState=es(1|t,{destroy:void 0},n,r===void 0?null:r)}function rs(e,t,n,r){var i=K();r=r===void 0?null:r;var a=i.memoizedState.inst;co!==null&&r!==null&&yo(r,co.memoizedState.deps)?i.memoizedState=es(t,a,n,r):(so.flags|=e,i.memoizedState=es(1|t,a,n,r))}function is(e,t){ns(8390656,8,e,t)}function as(e,t){rs(2048,8,e,t)}function os(e){so.flags|=4;var t=so.updateQueue;if(t===null)t=Oo(),so.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ss(e){var t=K().memoizedState;return os({ref:t,nextImpl:e}),function(){if(Nl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function cs(e,t){return rs(4,2,e,t)}function ls(e,t){return rs(4,4,e,t)}function us(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ds(e,t,n){n=n==null?null:n.concat([e]),rs(4,4,us.bind(null,t,e),n)}function fs(){}function ps(e,t){var n=K();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ms(e,t){var n=K();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){Ae(!0);try{e()}finally{Ae(!1)}}return n.memoizedState=[r,t],r}function hs(e,t,n){return n===void 0||oo&1073741824&&!(Il&261930)?e.memoizedState=t:(e.memoizedState=n,e=Q(),so.lanes|=e,Wl|=e,n)}function gs(e,t,n,r){return gr(n,t)?n:Ka.current===null?!(oo&42)||oo&1073741824&&!(Il&261930)?(Qs=!0,e.memoizedState=n):(e=Q(),so.lanes|=e,Wl|=e,t):(e=hs(e,n,r),gr(e,t)||(Qs=!0),e)}function _s(e,t,n,r,i){var a=L.p;L.p=a!==0&&8>a?a:8;var o=I.T,s={};I.T=s,ks(e,!1,t,n);try{var c=i(),l=I.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Os(e,t,da(c,r),fu(e)):Os(e,t,r,fu(e))}catch(n){Os(e,t,{then:function(){},status:`rejected`,reason:n},fu())}finally{L.p=a,o!==null&&s.types!==null&&(o.types=s.types),I.T=o}}function vs(){}function ys(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=bs(e).queue;_s(e,a,t,R,n===null?vs:function(){return xs(e),n(r)})}function bs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:R},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xs(e){var t=bs(e);t.next===null&&(t=e.alternate.memoizedState),Os(e,t.next.queue,{},fu())}function Ss(){return Xi($f)}function Cs(){return K().memoizedState}function ws(){return K().memoizedState}function Ts(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=fu();e=Ra(n);var r=za(t,e,n);r!==null&&(pu(r,t,n),Ba(r,t,n)),t={cache:ra()},e.payload=t;return}t=t.return}}function Es(e,t,n){var r=fu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},As(e)?js(t,n):(n=Xr(e,t,n,r),n!==null&&(pu(n,e,r),Ms(n,t,r)))}function Ds(e,t,n){Os(e,t,n,fu())}function Os(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(As(e))js(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,gr(s,o))return Yr(e,t,i,0),Pl===null&&Jr(),!1}catch{}if(n=Xr(e,t,i,r),n!==null)return pu(n,e,r),Ms(n,t,r),!0}return!1}function ks(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},As(e)){if(t)throw Error(i(479))}else t=Xr(e,n,r,2),t!==null&&pu(t,e,2)}function As(e){var t=e.alternate;return e===so||t!==null&&t===so}function js(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ms(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qe(e,n)}}var Ns={readContext:Xi,use:Ao,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Ns.useEffectEvent=vo;var Ps={readContext:Xi,use:Ao,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Xi,useEffect:is,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ns(4194308,4,us.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){ns(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){Ae(!0);try{e()}finally{Ae(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){Ae(!0);try{n(t)}finally{Ae(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Es.bind(null,so,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Ho(e);var t=e.queue,n=Ds.bind(null,so,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fs,useDeferredValue:function(e,t){return hs(Do(),e,t)},useTransition:function(){var e=Ho(!1);return e=_s.bind(null,so,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=so,a=Do();if(ki){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Pl===null)throw Error(i(349));Il&127||Lo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,is(zo.bind(null,r,o,e),[e]),r.flags|=2048,es(9,{destroy:void 0},Ro.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=Pl.identifierPrefix;if(ki){var n=xi,r=bi;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ss,useFormState:Zo,useActionState:Zo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ks.bind(null,so,!0,n),n.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return Do().memoizedState=Ts.bind(null,so)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(Nl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Fs={readContext:Xi,use:Ao,useCallback:ps,useContext:Xi,useEffect:as,useImperativeHandle:ds,useInsertionEffect:cs,useLayoutEffect:ls,useMemo:ms,useReducer:No,useRef:ts,useState:function(){return No(Mo)},useDebugValue:fs,useDeferredValue:function(e,t){return gs(K(),co.memoizedState,e,t)},useTransition:function(){var e=No(Mo)[0],t=K().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Cs,useHostTransitionStatus:Ss,useFormState:q,useActionState:q,useOptimistic:function(e,t){return Uo(K(),co,e,t)},useMemoCache:jo,useCacheRefresh:ws};Fs.useEffectEvent=ss;var Is={readContext:Xi,use:Ao,useCallback:ps,useContext:Xi,useEffect:as,useImperativeHandle:ds,useInsertionEffect:cs,useLayoutEffect:ls,useMemo:ms,useReducer:Fo,useRef:ts,useState:function(){return Fo(Mo)},useDebugValue:fs,useDeferredValue:function(e,t){var n=K();return co===null?hs(n,e,t):gs(n,co.memoizedState,e,t)},useTransition:function(){var e=Fo(Mo)[0],t=K().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Cs,useHostTransitionStatus:Ss,useFormState:J,useActionState:J,useOptimistic:function(e,t){var n=K();return co===null?(n.baseState=e,[e,n.queue.dispatch]):Uo(n,co,e,t)},useMemoCache:jo,useCacheRefresh:ws};Is.useEffectEvent=ss;function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fu(),i=Ra(r);i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(pu(t,e,r),Ba(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fu(),i=Ra(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(pu(t,e,r),Ba(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fu(),r=Ra(n);r.tag=2,t!=null&&(r.callback=t),t=za(e,r,n),t!==null&&(pu(t,e,n),Ba(t,e,n))}};function zs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(i,a):!0}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function Vs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Hs(e){Wr(e)}function Us(e){console.error(e)}function Ws(e){Wr(e)}function Gs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function qs(e,t,n){return n=Ra(n),n.tag=3,n.payload={element:null},n.callback=function(){Gs(e,t)},n}function Js(e){return e=Ra(e),e.tag=3,e}function Ys(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ks(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ks(t,n,r),typeof i!=`function`&&(nu===null?nu=new Set([this]):nu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Xs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&qi(t,n,a,!0),n=Za.current,n!==null){switch(n.tag){case 31:case 13:return Qa===null?Tu():n.alternate===null&&Ul===0&&(Ul=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ba?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===ba?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(i(435,n.tag))}return Wu(e,r,a),Tu(),!1}if(ki)return t=Za.current,t===null?(r!==Mi&&(t=Error(i(423),{cause:r}),zi(fi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=fi(r,n),a=qs(e.stateNode,r,a),Va(e,a),Ul!==4&&(Ul=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Mi&&(e=Error(i(422),{cause:r}),zi(fi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=fi(o,n),Yl===null?Yl=[o]:Yl.push(o),Ul!==4&&(Ul=2),t===null)return!0;r=fi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=qs(n.stateNode,r,e),Va(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(nu===null||!nu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Js(a),Ys(a,e,n,r),Va(n,a),!1}n=n.return}while(n!==null);return!1}var Zs=Error(i(461)),Qs=!1;function $s(e,t,n,r){t.child=e===null?Pa(t,null,n,r):Na(t,e.child,n,r)}function ec(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Yi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!Qs?(To(e,t,i),wc(e,t,i)):(ki&&s&&wi(t),t.flags|=1,$s(e,t,r,i),t.child)}function tc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ri(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,nc(e,t,a,r,i)):(e=oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Tc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?_r:n,n(o,r)&&e.ref===t.ref)return wc(e,t,i)}return t.flags|=1,e=ii(a,r),e.ref=t.ref,e.return=t,t.child=e}function nc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(_r(a,r)&&e.ref===t.ref)if(Qs=!1,t.pendingProps=r=a,Tc(e,i))e.flags&131072&&(Qs=!0);else return t.lanes=e.lanes,wc(e,t,i)}return uc(e,t,n,r,i)}function rc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ac(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ha(t,a===null?null:a.cachePool),a===null?Ya():Ja(t,a),to(t);else return r=t.lanes=536870912,ac(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ha(t,null),Ya(),no(t)):(ha(t,a.cachePool),Ja(t,a),no(t),t.memoizedState=null);return $s(e,t,i,n),t.child}function ic(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ac(e,t,n,r,i){var a=ma();return a=a===null?null:{parent:na._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ha(t,null),Ya(),to(t),e!==null&&qi(e,t,r,!0),t.childLanes=i,null}function oc(e,t){return t=yc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sc(e,t,n){return Na(t,e.child,null,n),e=oc(t,t.pendingProps),e.flags|=2,ro(t),t.memoizedState=null,e}function cc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(ki){if(r.mode===`hidden`)return e=oc(t,r),t.lanes=536870912,ic(null,e);if(eo(t),(e=Oi)?(e=af(e,ji),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yi===null?null:{id:bi,overflow:xi},retryLane:536870912,hydrationErrors:null},n=li(e),n.return=t,t.child=n,Di=t,Oi=null)):e=null,e===null)throw Ni(t);return t.lanes=536870912,null}return oc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(eo(t),a)if(t.flags&256)t.flags&=-257,t=sc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Qs||qi(e,t,n,!1),a=(n&e.childLanes)!==0,Qs||a){if(r=Pl,r!==null&&(s=Je(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Zr(e,s),pu(r,e,s),Zs;Tu(),t=sc(e,t,n)}else e=o.treeContext,Oi=lf(s.nextSibling),Di=t,ki=!0,Ai=null,ji=!1,e!==null&&Ei(t,e),t=oc(t,r),t.flags|=4096;return t}return e=ii(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function uc(e,t,n,r,i){return Yi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!Qs?(To(e,t,i),wc(e,t,i)):(ki&&r&&wi(t),t.flags|=1,$s(e,t,n,i),t.child)}function dc(e,t,n,r,i,a){return Yi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!Qs?(To(e,t,a),wc(e,t,a)):(ki&&r&&wi(t),t.flags|=1,$s(e,t,n,a),t.child)}function fc(e,t,n,r,i){if(Yi(t),t.stateNode===null){var a=ei,o=n.contextType;typeof o==`object`&&o&&(a=Xi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ia(t),o=n.contextType,a.context=typeof o==`object`&&o?Xi(o):ei,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ls(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Rs.enqueueReplaceState(a,a.state,null),Ua(t,r,a,i),G(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Vs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ei,typeof u==`object`&&u&&(o=Xi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Bs(t,a,r,o),Fa=!1;var f=t.memoizedState;a.state=f,Ua(t,r,a,i),G(),l=t.memoizedState,s||f!==l||Fa?(typeof d==`function`&&(Ls(t,n,d,r),l=t.memoizedState),(c=Fa||zs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,La(e,t),o=t.memoizedProps,u=Vs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ei,typeof l==`object`&&l&&(c=Xi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Bs(t,a,r,c),Fa=!1,f=t.memoizedState,a.state=f,Ua(t,r,a,i),G();var p=t.memoizedState;o!==d||f!==p||Fa||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof s==`function`&&(Ls(t,n,s,r),p=t.memoizedState),(u=Fa||zs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,lc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Na(t,e.child,null,i),t.child=Na(t,null,n,i)):$s(e,t,n,i),t.memoizedState=a.state,e=t.child):e=wc(e,t,i),e}function pc(e,t,n,r){return Li(),t.flags|=256,$s(e,t,n,r),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(e){return{baseLanes:e,cachePool:ga()}}function gc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ql),e}function _c(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(io.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(ki){if(a?$a(t):no(t),(e=Oi)?(e=af(e,ji),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yi===null?null:{id:bi,overflow:xi},retryLane:536870912,hydrationErrors:null},n=li(e),n.return=t,t.child=n,Di=t,Oi=null)):e=null,e===null)throw Ni(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(no(t),a=t.mode,c=yc({mode:`hidden`,children:c},a),r=si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=hc(n),r.childLanes=gc(e,s,n),t.memoizedState=mc,ic(null,r)):($a(t),vc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?($a(t),t.flags&=-257,t=bc(e,t,n)):t.memoizedState===null?(no(t),c=r.fallback,a=t.mode,r=yc({mode:`visible`,children:r.children},a),c=si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Na(t,e.child,null,n),r=t.child,r.memoizedState=hc(n),r.childLanes=gc(e,s,n),t.memoizedState=mc,t=ic(null,r)):(no(t),t.child=e.child,t.flags|=128,t=null);else if($a(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,zi({value:r,source:null,stack:null}),t=bc(e,t,n)}else if(Qs||qi(e,t,n,!1),s=(n&e.childLanes)!==0,Qs||s){if(s=Pl,s!==null&&(r=Je(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Zr(e,r),pu(s,e,r),Zs;of(c)||Tu(),t=bc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Oi=lf(c.nextSibling),Di=t,ki=!0,Ai=null,ji=!1,e!==null&&Ei(t,e),t=vc(t,r.children),t.flags|=4096);return t}return a?(no(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ii(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=si(c,a,n,null),c.flags|=2):c=ii(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,ic(null,r),r=t.child,c=e.child.memoizedState,c===null?c=hc(n):(a=c.cachePool,a===null?a=ga():(l=na._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=gc(e,s,n),t.memoizedState=mc,ic(e.child,r)):($a(t),n=e.child,e=n.sibling,n=ii(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function vc(e,t){return t=yc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function yc(e,t){return e=ni(22,e,null,t),e.lanes=0,e}function bc(e,t,n){return Na(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gi(e.return,t,n)}function Sc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Cc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=io.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,V(io,o),$s(e,t,r,n),r=ki?gi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,n,t);else if(e.tag===19)xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ao(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sc(t,!0,n,null,a,r);break;case`together`:Sc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function wc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ii(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ii(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Ji(e))):!0}function Ec(e,t,n){switch(t.tag){case 3:re(t,t.stateNode.containerInfo),Ui(t,na,e.memoizedState.cache),Li();break;case 27:case 5:ae(t);break;case 4:re(t,t.stateNode.containerInfo);break;case 10:Ui(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,eo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?($a(t),e=wc(e,t,n),e===null?null:e.sibling):_c(e,t,n):($a(t),t.flags|=128,null);$a(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(qi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Cc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(io,io.current),r)break;return null;case 22:return t.lanes=0,rc(e,t,n,t.pendingProps);case 24:Ui(t,na,e.memoizedState.cache)}return wc(e,t,n)}function Dc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qs=!0;else{if(!Tc(e,n)&&!(t.flags&128))return Qs=!1,Ec(e,t,n);Qs=!!(e.flags&131072)}else Qs=!1,ki&&t.flags&1048576&&Ci(t,gi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ca(t.elementType),t.type=e,typeof e==`function`)ri(e)?(r=Vs(e,r),t.tag=1,t=fc(null,t,e,r,n)):(t.tag=0,t=uc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ec(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=tc(null,t,e,r,n);break a}}throw t=P(e)||e,Error(i(306,t,``))}}return t;case 0:return uc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Vs(r,t.pendingProps),fc(e,t,r,a,n);case 3:a:{if(re(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,La(e,t),Ua(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ui(t,na,r),r!==o.cache&&Ki(t,[na],n,!0),G(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=pc(e,t,r,n);break a}else if(r!==a){a=fi(Error(i(424)),t),zi(a),t=pc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Oi=lf(e.firstChild),Di=t,ki=!0,Ai=null,ji=!0,n=Pa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Li(),r===a){t=wc(e,t,n);break a}$s(e,t,r,n)}t=t.child}return t;case 26:return lc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:ki||(n=t.type,e=t.pendingProps,r=Vd(ne.current).createElement(n),r[et]=t,r[tt]=e,Fd(r,n,e),pt(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ae(t),e===null&&ki&&(r=t.stateNode=pf(t.type,t.pendingProps,ne.current),Di=t,ji=!0,a=Oi,Qd(t.type)?(uf=a,Oi=lf(r.firstChild)):Oi=a),$s(e,t,t.pendingProps.children,n),lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ki&&((a=r=Oi)&&(r=nf(r,t.type,t.pendingProps,ji),r===null?a=!1:(t.stateNode=r,Di=t,Oi=lf(r.firstChild),ji=!1,a=!0)),a||Ni(t)),ae(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),$f._currentValue=a),lc(e,t),$s(e,t,r,n),t.child;case 6:return e===null&&ki&&((e=n=Oi)&&(n=rf(n,t.pendingProps,ji),n===null?e=!1:(t.stateNode=n,Di=t,Oi=null,e=!0)),e||Ni(t)),null;case 13:return _c(e,t,n);case 4:return re(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Na(t,null,r,n):$s(e,t,r,n),t.child;case 11:return ec(e,t,t.type,t.pendingProps,n);case 7:return $s(e,t,t.pendingProps,n),t.child;case 8:return $s(e,t,t.pendingProps.children,n),t.child;case 12:return $s(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ui(t,t.type,r.value),$s(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Yi(t),a=Xi(a),r=r(a),t.flags|=1,$s(e,t,r,n),t.child;case 14:return tc(e,t,t.type,t.pendingProps,n);case 15:return nc(e,t,t.type,t.pendingProps,n);case 19:return Cc(e,t,n);case 31:return cc(e,t,n);case 22:return rc(e,t,n,t.pendingProps);case 24:return Yi(t),r=Xi(na),e===null?(a=ma(),a===null&&(a=Pl,o=ra(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ia(t),Ui(t,na,a)):((e.lanes&n)!==0&&(La(e,t),Ua(t,null,null,n),G()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ui(t,na,r),r!==a.cache&&Ki(t,[na],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ui(t,na,r))),$s(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Oc(e){e.flags|=4}function kc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw wa=ba,va}else e.flags&=-16777217}function Ac(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(Su())e.flags|=8192;else throw wa=ba,va}function jc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:He(),e.lanes|=t,Jl|=t)}function Mc(e,t){if(!ki)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Nc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pc(e,t,n){var r=t.pendingProps;switch(Ti(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nc(t),null;case 1:return Nc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Wi(na),ie(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?Oc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ri())),Nc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Oc(t),o===null?(Nc(t),kc(t,a,null,r,n)):(Nc(t),Ac(t,o))):o?o===e.memoizedState?(Nc(t),t.flags&=-16777217):(Oc(t),Nc(t),Ac(t,o)):(e=e.memoizedProps,e!==r&&Oc(t),Nc(t),kc(t,a,e,r,n)),null;case 27:if(oe(t),n=ne.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Nc(t),null}e=H.current,Ii(t)?Pi(t,e):(e=pf(a,r,n),t.stateNode=e,Oc(t))}return Nc(t),null;case 5:if(oe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Nc(t),null}if(o=H.current,Ii(t))Pi(t,o);else{var s=Vd(ne.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[et]=t,o[tt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Oc(t)}}return Nc(t),kc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ne.current,Ii(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Di,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[et]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ni(t,!0)}else e=Vd(e).createTextNode(r),e[et]=t,t.stateNode=e}return Nc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ii(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[et]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nc(t),e=!1}else n=Ri(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ro(t),t):(ro(t),null);if(t.flags&128)throw Error(i(558))}return Nc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[et]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nc(t),a=!1}else a=Ri(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ro(t),t):(ro(t),null)}return ro(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),jc(t,t.updateQueue),Nc(t),null);case 4:return ie(),e===null&&Sd(t.stateNode.containerInfo),Nc(t),null;case 10:return Wi(t.type),Nc(t),null;case 19:if(B(io),r=t.memoizedState,r===null)return Nc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Mc(r,!1);else{if(Ul!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ao(e),o!==null){for(t.flags|=128,Mc(r,!1),e=o.updateQueue,t.updateQueue=e,jc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ai(n,e),n=n.sibling;return V(io,io.current&1|2),ki&&Si(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ye()>eu&&(t.flags|=128,a=!0,Mc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ao(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,jc(t,e),Mc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!ki)return Nc(t),null}else 2*ye()-r.renderingStartTime>eu&&n!==536870912&&(t.flags|=128,a=!0,Mc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Nc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ye(),e.sibling=null,n=io.current,V(io,a?n&1|2:n&1),ki&&Si(t,r.treeForkCount),e);case 22:case 23:return ro(t),Xa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Nc(t),t.subtreeFlags&6&&(t.flags|=8192)):Nc(t),n=t.updateQueue,n!==null&&jc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&B(pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wi(na),Nc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Fc(e,t){switch(Ti(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wi(na),ie(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return oe(t),null;case 31:if(t.memoizedState!==null){if(ro(t),t.alternate===null)throw Error(i(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ro(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(io),null;case 4:return ie(),null;case 10:return Wi(t.type),null;case 22:case 23:return ro(t),Xa(),e!==null&&B(pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wi(na),null;case 25:return null;default:return null}}function Ic(e,t){switch(Ti(t),t.tag){case 3:Wi(na),ie();break;case 26:case 27:case 5:oe(t);break;case 4:ie();break;case 31:t.memoizedState!==null&&ro(t);break;case 13:ro(t);break;case 19:B(io);break;case 10:Wi(t.type);break;case 22:case 23:ro(t),Xa(),e!==null&&B(pa);break;case 24:Wi(na)}}function Y(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function Lc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function Rc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ga(t,n)}catch(t){Uu(e,e.return,t)}}}function zc(e,t,n){n.props=Vs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function Bc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function Vc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}function Hc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Uc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[tt]=t}catch(t){Uu(e,e.return,t)}}function Wc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Gc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qt));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function X(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[et]=e,t[tt]=n}catch(t){Uu(e,e.return,t)}}var Jc=!1,Yc=!1,Xc=!1,Zc=typeof WeakSet==`function`?WeakSet:Set,Qc=null;function $c(e,t){if(e=e.containerInfo,zd=cp,e=xr(e),Sr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,Qc=t;Qc!==null;)if(t=Qc,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Qc=e;else for(;Qc!==null;){switch(t=Qc,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Vs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Qc=e;break}Qc=t.return}}function el(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ml(e,n),r&4&&Y(5,n);break;case 1:if(ml(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=Vs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}r&64&&Rc(n),r&512&&Bc(n,n.return);break;case 3:if(ml(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ga(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&X(n);case 26:case 5:ml(e,n),t===null&&r&4&&Hc(n),r&512&&Bc(n,n.return);break;case 12:ml(e,n);break;case 31:ml(e,n),r&4&&al(e,n);break;case 13:ml(e,n),r&4&&ol(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||Jc,!r){t=t!==null&&t.memoizedState!==null||Yc,i=Jc;var a=Yc;Jc=r,(Yc=t)&&!a?gl(e,n,(n.subtreeFlags&8772)!=0):ml(e,n),Jc=i,Yc=a}break;case 30:break;default:ml(e,n)}}function Z(e){var t=e.alternate;t!==null&&(e.alternate=null,Z(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tl=null,nl=!1;function rl(e,t,n){for(n=n.child;n!==null;)il(e,t,n),n=n.sibling}function il(e,t,n){if(ke&&typeof ke.onCommitFiberUnmount==`function`)try{ke.onCommitFiberUnmount(Oe,n)}catch{}switch(n.tag){case 26:Yc||Vc(n,t),rl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Yc||Vc(n,t);var r=tl,i=nl;Qd(n.type)&&(tl=n.stateNode,nl=!1),rl(e,t,n),mf(n.stateNode),tl=r,nl=i;break;case 5:Yc||Vc(n,t);case 6:if(r=tl,i=nl,tl=null,rl(e,t,n),tl=r,nl=i,tl!==null)if(nl)try{(tl.nodeType===9?tl.body:tl.nodeName===`HTML`?tl.ownerDocument.body:tl).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{tl.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}break;case 18:tl!==null&&(nl?(e=tl,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(tl,n.stateNode));break;case 4:r=tl,i=nl,tl=n.stateNode.containerInfo,nl=!0,rl(e,t,n),tl=r,nl=i;break;case 0:case 11:case 14:case 15:Lc(2,n,t),Yc||Lc(4,n,t),rl(e,t,n);break;case 1:Yc||(Vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&zc(n,t,r)),rl(e,t,n);break;case 21:rl(e,t,n);break;case 22:Yc=(r=Yc)||n.memoizedState!==null,rl(e,t,n),Yc=r;break;default:rl(e,t,n)}}function al(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){Uu(t,t.return,e)}}}function ol(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){Uu(t,t.return,e)}}function sl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zc),t;default:throw Error(i(435,e.tag))}}function cl(e,t){var n=sl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function ll(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){tl=c.stateNode,nl=!1;break a}break;case 5:tl=c.stateNode,nl=!1;break a;case 3:case 4:tl=c.stateNode.containerInfo,nl=!0;break a}c=c.return}if(tl===null)throw Error(i(160));il(o,s,a),tl=null,nl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)dl(t,e),t=t.sibling}var ul=null;function dl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ll(t,e),fl(e),r&4&&(Lc(3,e,e.return),Y(3,e),Lc(5,e,e.return));break;case 1:ll(t,e),fl(e),r&512&&(Yc||n===null||Vc(n,n.return)),r&64&&Jc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=ul;if(ll(t,e),fl(e),r&512&&(Yc||n===null||Vc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[st]||o[et]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[et]=e,pt(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[et]=e,pt(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode);else e.stateNode=Lf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Uc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:ll(t,e),fl(e),r&512&&(Yc||n===null||Vc(n,n.return)),n!==null&&r&4&&Uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ll(t,e),fl(e),r&512&&(Yc||n===null||Vc(n,n.return)),e.flags&32){a=e.stateNode;try{zt(a,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Uc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Xc=!0);break;case 6:if(ll(t,e),fl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Vf=null,a=ul,ul=_f(t.containerInfo),ll(t,e),ul=a,fl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){Uu(e,e.return,t)}Xc&&(Xc=!1,pl(e));break;case 4:r=ul,ul=_f(e.stateNode.containerInfo),ll(t,e),fl(e),ul=r;break;case 12:ll(t,e),fl(e);break;case 31:ll(t,e),fl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,cl(e,r)));break;case 13:ll(t,e),fl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ql=ye()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,cl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Jc,d=Yc;if(Jc=u||a,Yc=d||l,ll(t,e),Yc=d,Jc=u,fl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Jc||Yc||hl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,cl(e,n))));break;case 19:ll(t,e),fl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,cl(e,r)));break;case 30:break;case 21:break;default:ll(t,e),fl(e)}}function fl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Wc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;qc(e,Gc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(zt(o,``),n.flags&=-33),qc(e,Gc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Kc(e,Gc(e),s);break;default:throw Error(i(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ml(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)el(e,t.alternate,t),t=t.sibling}function hl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Lc(4,t,t.return),hl(t);break;case 1:Vc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&zc(t,t.return,n),hl(t);break;case 27:mf(t.stateNode);case 26:case 5:Vc(t,t.return),hl(t);break;case 22:t.memoizedState===null&&hl(t);break;case 30:hl(t);break;default:hl(t)}e=e.sibling}}function gl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:gl(i,a,n),Y(4,a);break;case 1:if(gl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Wa(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&Rc(a),Bc(a,a.return);break;case 27:X(a);case 26:case 5:gl(i,a,n),n&&r===null&&o&4&&Hc(a),Bc(a,a.return);break;case 12:gl(i,a,n);break;case 31:gl(i,a,n),n&&o&4&&al(i,a);break;case 13:gl(i,a,n),n&&o&4&&ol(i,a);break;case 22:a.memoizedState===null&&gl(i,a,n),Bc(a,a.return);break;case 30:break;default:gl(i,a,n)}t=t.sibling}}function _l(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ia(n))}function vl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ia(e))}function yl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bl(e,t,n,r),t=t.sibling}function bl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:yl(e,t,n,r),i&2048&&Y(9,t);break;case 1:yl(e,t,n,r);break;case 3:yl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ia(e)));break;case 12:if(i&2048){yl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else yl(e,t,n,r);break;case 31:yl(e,t,n,r);break;case 13:yl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?yl(e,t,n,r):(a._visibility|=2,xl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?yl(e,t,n,r):Sl(e,t),i&2048&&_l(o,t);break;case 24:yl(e,t,n,r),i&2048&&vl(t.alternate,t);break;default:yl(e,t,n,r)}}function xl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:xl(a,o,s,c,i),Y(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,xl(a,o,s,c,i)):u._visibility&2?xl(a,o,s,c,i):Sl(a,o),i&&l&2048&&_l(o.alternate,o);break;case 24:xl(a,o,s,c,i),i&&l&2048&&vl(o.alternate,o);break;default:xl(a,o,s,c,i)}t=t.sibling}}function Sl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Sl(n,r),i&2048&&_l(r.alternate,r);break;case 24:Sl(n,r),i&2048&&vl(r.alternate,r);break;default:Sl(n,r)}t=t.sibling}}var Cl=8192;function wl(e,t,n){if(e.subtreeFlags&Cl)for(e=e.child;e!==null;)Tl(e,t,n),e=e.sibling}function Tl(e,t,n){switch(e.tag){case 26:wl(e,t,n),e.flags&Cl&&e.memoizedState!==null&&Kf(n,ul,e.memoizedState,e.memoizedProps);break;case 5:wl(e,t,n);break;case 3:case 4:var r=ul;ul=_f(e.stateNode.containerInfo),wl(e,t,n),ul=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Cl,Cl=16777216,wl(e,t,n),Cl=r):wl(e,t,n));break;default:wl(e,t,n)}}function El(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Qc=r,Al(r,e)}El(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ol(e),e=e.sibling}function Ol(e){switch(e.tag){case 0:case 11:case 15:Dl(e),e.flags&2048&&Lc(9,e,e.return);break;case 3:Dl(e);break;case 12:Dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,kl(e)):Dl(e);break;default:Dl(e)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Qc=r,Al(r,e)}El(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Lc(8,t,t.return),kl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,kl(t));break;default:kl(t)}e=e.sibling}}function Al(e,t){for(;Qc!==null;){var n=Qc;switch(n.tag){case 0:case 11:case 15:Lc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ia(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Qc=r;else a:for(n=e;Qc!==null;){r=Qc;var i=r.sibling,a=r.return;if(Z(r),r===n){Qc=null;break a}if(i!==null){i.return=a,Qc=i;break a}Qc=a}}}var jl={getCacheForType:function(e){var t=Xi(na),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Xi(na).controller.signal}},Ml=typeof WeakMap==`function`?WeakMap:Map,Nl=0,Pl=null,Fl=null,Il=0,Ll=0,Rl=null,zl=!1,Bl=!1,Vl=!1,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=null,Xl=null,Zl=!1,Ql=0,$l=0,eu=1/0,tu=null,nu=null,ru=0,iu=null,au=null,ou=0,su=0,cu=null,lu=null,uu=0,du=null;function fu(){return Nl&2&&Il!==0?Il&-Il:I.T===null?Ze():ud()}function Q(){if(ql===0)if(!(Il&536870912)||ki){var e=Ie;Ie<<=1,!(Ie&3932160)&&(Ie=262144),ql=e}else ql=536870912;return e=Za.current,e!==null&&(e.flags|=32),ql}function pu(e,t,n){(e===Pl&&(Ll===2||Ll===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Il,ql,!1)),We(e,n),(!(Nl&2)||e!==Pl)&&(e===Pl&&(!(Nl&2)&&(Gl|=n),Ul===4&&_u(e,Il,ql,!1)),nd(e))}function mu(e,t,n){if(Nl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Be(e,t),a=r?Ou(e,t):Eu(e,t,!0),o=r;do{if(a===0){Bl&&!r&&_u(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!gu(n)){a=Eu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Yl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,s).flags|=256),s=Eu(c,s,!1),s!==2){if(Vl&&!l){c.errorRecoveryDisabledLanes|=o,Gl|=o,a=4;break a}o=Xl,Xl=a,o!==null&&(Xl===null?Xl=o:Xl.push.apply(Xl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,ql,!zl);break a;case 2:Xl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Ql+300-ye(),10<a)){if(_u(r,t,ql,!zl),ze(r,0,!0)!==0)break a;ou=t,r.timeoutHandle=qd(hu.bind(null,r,n,Xl,tu,Zl,t,ql,Gl,Jl,zl,o,`Throttled`,-0,0),a);break a}hu(r,n,Xl,tu,Zl,t,ql,Gl,Jl,zl,o,null,-0,0)}}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Tl(t,a,d);var m=(a&62914560)===a?Ql-ye():(a&4194048)===a?$l-ye():0;if(m=Jf(d,m),m!==null){ou=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!gr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Kl,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ke(e,n,t)}function vu(){return Nl&6?!0:(rd(0,!1),!1)}function yu(){if(Fl!==null){if(Ll===0)var e=Fl.return;else e=Fl,Hi=Vi=null,Eo(e),Da=null,Oa=0,e=Fl;for(;e!==null;)Ic(e.alternate,e),e=e.return;Fl=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ou=0,yu(),Pl=e,Fl=n=ii(e.current,null),Il=t,Ll=0,Rl=null,zl=!1,Bl=Be(e,t),Vl=!1,Jl=ql=Kl=Gl=Wl=Ul=0,Xl=Yl=null,Zl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-je(r),a=1<<i;t|=e[i],r&=~a}return Hl=t,Jr(),n}function xu(e,t){so=null,I.H=Ns,t===_a||t===ya?(t=Ta(),Ll=3):t===va?(t=Ta(),Ll=4):Ll=t===Zs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Rl=t,Fl===null&&(Ul=1,Gs(e,fi(t,e.current)))}function Su(){var e=Za.current;return e===null?!0:(Il&4194048)===Il?Qa===null:(Il&62914560)===Il||Il&536870912?e===Qa:!1}function Cu(){var e=I.H;return I.H=Ns,e===null?Ns:e}function wu(){var e=I.A;return I.A=jl,e}function Tu(){Ul=4,zl||(Il&4194048)!==Il&&Za.current!==null||(Bl=!0),!(Wl&134217727)&&!(Gl&134217727)||Pl===null||_u(Pl,Il,ql,!1)}function Eu(e,t,n){var r=Nl;Nl|=2;var i=Cu(),a=wu();(Pl!==e||Il!==t)&&(tu=null,bu(e,t)),t=!1;var o=Ul;a:do try{if(Ll!==0&&Fl!==null){var s=Fl,c=Rl;switch(Ll){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:Za.current===null&&(t=!0);var l=Ll;if(Ll=0,Rl=null,Mu(e,s,c,l),n&&Bl){o=0;break a}break;default:l=Ll,Ll=0,Rl=null,Mu(e,s,c,l)}}Du(),o=Ul;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,Hi=Vi=null,Nl=r,I.H=i,I.A=a,Fl===null&&(Pl=null,Il=0,Jr()),o}function Du(){for(;Fl!==null;)Au(Fl)}function Ou(e,t){var n=Nl;Nl|=2;var r=Cu(),a=wu();Pl!==e||Il!==t?(tu=null,eu=ye()+500,bu(e,t)):Bl=Be(e,t);a:do try{if(Ll!==0&&Fl!==null){t=Fl;var o=Rl;b:switch(Ll){case 1:Ll=0,Rl=null,Mu(e,t,o,1);break;case 2:case 9:if(xa(o)){Ll=0,Rl=null,ju(t);break}t=function(){Ll!==2&&Ll!==9||Pl!==e||(Ll=7),nd(e)},o.then(t,t);break a;case 3:Ll=7;break a;case 4:Ll=5;break a;case 7:xa(o)?(Ll=0,Rl=null,ju(t)):(Ll=0,Rl=null,Mu(e,t,o,7));break;case 5:var s=null;switch(Fl.tag){case 26:s=Fl.memoizedState;case 5:case 27:var c=Fl;if(s?Gf(s):c.stateNode.complete){Ll=0,Rl=null;var l=c.sibling;if(l!==null)Fl=l;else{var u=c.return;u===null?Fl=null:(Fl=u,Nu(u))}break b}}Ll=0,Rl=null,Mu(e,t,o,5);break;case 6:Ll=0,Rl=null,Mu(e,t,o,6);break;case 8:yu(),Ul=6;break a;default:throw Error(i(462))}}ku();break}catch(t){xu(e,t)}while(1);return Hi=Vi=null,I.H=r,I.A=a,Nl=n,Fl===null?(Pl=null,Il=0,Jr(),Ul):0}function ku(){for(;Fl!==null&&!_e();)Au(Fl)}function Au(e){var t=Dc(e.alternate,e,Hl);e.memoizedProps=e.pendingProps,t===null?Nu(e):Fl=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=dc(n,t,t.pendingProps,t.type,void 0,Il);break;case 11:t=dc(n,t,t.pendingProps,t.type.render,t.ref,Il);break;case 5:Eo(t);default:Ic(n,t),t=Fl=ai(t,Hl),t=Dc(n,t,Hl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):Fl=t}function Mu(e,t,n,r){Hi=Vi=null,Eo(t),Da=null,Oa=0;var i=t.return;try{if(Xs(e,i,t,n,Il)){Ul=1,Gs(e,fi(n,e.current)),Fl=null;return}}catch(t){if(i!==null)throw Fl=i,t;Ul=1,Gs(e,fi(n,e.current)),Fl=null;return}t.flags&32768?(ki||r===1?e=!0:Bl||Il&536870912?e=!1:(zl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Za.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,zl);return}e=t.return;var n=Pc(t.alternate,t,Hl);if(n!==null){Fl=n;return}if(t=t.sibling,t!==null){Fl=t;return}Fl=t=e}while(t!==null);Ul===0&&(Ul=5)}function Pu(e,t){do{var n=Fc(e.alternate,e);if(n!==null){n.flags&=32767,Fl=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Fl=e;return}Fl=e=n}while(e!==null);Ul=6,Fl=null}function Fu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Bu();while(ru!==0);if(Nl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=qr,Ge(e,n,o,s,c,l),e===Pl&&(Fl=Pl=null,Il=0),au=t,iu=e,ou=n,su=o,cu=a,lu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(Ce,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=I.T,I.T=null,a=L.p,L.p=2,s=Nl,Nl|=4;try{$c(e,t,n)}finally{Nl=s,L.p=a,I.T=r}}ru=1,Iu(),Lu(),Ru()}}function Iu(){if(ru===1){ru=0;var e=iu,t=au,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=Nl;Nl|=4;try{dl(t,e);var a=Bd,o=xr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&br(s.ownerDocument.documentElement,s)){if(c!==null&&Sr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=yr(s,h),v=yr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{Nl=i,L.p=r,I.T=n}}e.current=t,ru=2}}function Lu(){if(ru===2){ru=0;var e=iu,t=au,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=Nl;Nl|=4;try{el(e,t.alternate,t)}finally{Nl=i,L.p=r,I.T=n}}ru=3}}function Ru(){if(ru===4||ru===3){ru=0,ve();var e=iu,t=au,n=ou,r=lu;t.subtreeFlags&10256||t.flags&10256?ru=5:(ru=0,au=iu=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(nu=null),Xe(n),t=t.stateNode,ke&&typeof ke.onCommitFiberRoot==`function`)try{ke.onCommitFiberRoot(Oe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=I.T,i=L.p,L.p=2,I.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{I.T=t,L.p=i}}ou&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===du?uu++:(uu=0,du=e):uu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ia(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(ru!==5)return!1;var e=iu,t=su;su=0;var n=Xe(ou),r=I.T,a=L.p;try{L.p=32>n?32:n,I.T=null,n=cu,cu=null;var o=iu,s=ou;if(ru=0,au=iu=null,ou=0,Nl&6)throw Error(i(331));var c=Nl;if(Nl|=4,Ol(o.current),bl(o,o.current,s,n),Nl=c,rd(0,!1),ke&&typeof ke.onPostCommitFiberRoot==`function`)try{ke.onPostCommitFiberRoot(Oe,o)}catch{}return!0}finally{L.p=a,I.T=r,zu(e,t)}}function Hu(e,t,n){t=fi(n,t),t=qs(e.stateNode,t,2),e=za(e,t,2),e!==null&&(We(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(nu===null||!nu.has(r))){e=fi(n,e),n=Js(2),r=za(t,n,2),r!==null&&(Ys(n,r,t,e),We(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ml;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Vl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pl===e&&(Il&n)===n&&(Ul===4||Ul===3&&(Il&62914560)===Il&&300>ye()-Ql?!(Nl&2)&&bu(e,0):Kl|=n,Jl===Il&&(Jl=0)),nd(e)}function Ku(e,t){t===0&&(t=He()),e=Zr(e,t),e!==null&&(We(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return he(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Il,a=ze(r,r===Pl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Be(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Kd()&&(e=td);for(var t=ye(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}ru!==0&&ru!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ve(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Pl,n=Il,n=ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Ll===2||Ll===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ge(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Be(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ge(r),Xe(n)){case 2:case 8:n=Se;break;case 32:n=Ce;break;case 268435456:n=Te;break;default:n=Ce}return r=sd.bind(null,e),n=he(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ge(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(ru!==0&&ru!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Il;return r=ze(e,e===Pl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,ye()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Xd(function(){Nl&6?he(xe,id):ad()})}function ud(){if(td===0){var e=sa;e===0&&(e=Fe,Fe<<=1,!(Fe&261888)&&(Fe=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Kt(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[tt]||null).action),o=r.submitter;o&&(t=(t=o[tt]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new hn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);ys(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),ys(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Hr.length;md++){var hd=Hr[md];Ur(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}Ur(Pr,`onAnimationEnd`),Ur(Fr,`onAnimationIteration`),Ur(Ir,`onAnimationStart`),Ur(`dblclick`,`onDoubleClick`),Ur(`focusin`,`onFocus`),Ur(`focusout`,`onBlur`),Ur(Lr,`onTransitionRun`),Ur(Rr,`onTransitionStart`),Ur(zr,`onTransitionCancel`),Ur(Br,`onTransitionEnd`),_t(`onMouseEnter`,[`mouseout`,`mouseover`]),_t(`onMouseLeave`,[`mouseout`,`mouseover`]),_t(`onPointerEnter`,[`pointerout`,`pointerover`]),_t(`onPointerLeave`,[`pointerout`,`pointerover`]),gt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),gt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),gt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),gt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),gt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),gt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Wr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Wr(e)}i.currentTarget=null,a=c}}}}function yd(e,t){var n=t[rt];n===void 0&&(n=t[rt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,mt.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!rn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=lt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}en(function(){var r=a,i=Yt(n),s=[];a:{var c=Vr.get(e);if(c!==void 0){var l=hn,u=e;switch(e){case`keypress`:if(un(n)===0)break a;case`keydown`:case`keyup`:l=Nn;break;case`focusin`:u=`focus`,l=wn;break;case`focusout`:u=`blur`,l=wn;break;case`beforeblur`:case`afterblur`:l=wn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Sn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Cn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Fn;break;case Pr:case Fr:case Ir:l=Tn;break;case Br:l=In;break;case`scroll`:case`scrollend`:l=_n;break;case`wheel`:l=Ln;break;case`copy`:case`cut`:case`paste`:l=En;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Pn;break;case`toggle`:case`beforetoggle`:l=Rn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=tn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Jt&&(u=n.relatedTarget||n.fromElement)&&(lt(u)||u[nt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?lt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Sn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Pn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:dt(l),h=u==null?c:dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,lt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ir;else if(Qn(c))if(ar)v=mr;else{v=fr;var y=dr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Ut(r.elementType)&&(v=ir):v=pr;if(v&&=v(e,r)){$n(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ft(c,`number`,c.value)}switch(y=r?dt(r):window,e){case`focusin`:(Qn(y)||y.contentEditable===`true`)&&(wr=y,Tr=r,Er=null);break;case`focusout`:Er=Tr=wr=null;break;case`mousedown`:Dr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Dr=!1,Or(s,n,i);break;case`selectionchange`:if(Cr)break;case`keydown`:case`keyup`:Or(s,n,i)}var b;if(Bn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Jn?Kn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Un&&n.locale!==`ko`&&(Jn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Jn&&(b=ln()):(on=i,sn=`value`in on?on.value:on.textContent,Jn=!0)),y=Ed(r,x),0<y.length&&(x=new Dn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=qn(n),b!==null&&(x.data=b)))),(b=Hn?Yn(e,n):Xn(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Dn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=tn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=tn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=tn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=tn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function Nd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&zt(e,``+r);break;case`className`:Ct(e,`class`,r);break;case`tabIndex`:Ct(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ct(e,n,r);break;case`style`:Ht(e,r,o);break;case`data`:if(t!==`object`){Ct(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Nd(e,t,`name`,a.name,a,null),Nd(e,t,`formEncType`,a.formEncType,a,null),Nd(e,t,`formMethod`,a.formMethod,a,null),Nd(e,t,`formTarget`,a.formTarget,a,null)):(Nd(e,t,`encType`,a.encType,a,null),Nd(e,t,`method`,a.method,a,null),Nd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=qt);break;case`onScroll`:r!=null&&yd(`scroll`,e);break;case`onScrollEnd`:r!=null&&yd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Kt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:yd(`beforetoggle`,e),yd(`toggle`,e),St(e,`popover`,r);break;case`xlinkActuate`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:St(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Wt.get(n)||n,St(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:Ht(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&zt(e,``+r);break;case`onScroll`:r!=null&&yd(`scroll`,e);break;case`onScrollEnd`:r!=null&&yd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=qt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!ht.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[tt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):St(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:yd(`error`,e),yd(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,o,s,n,null)}}a&&Nd(e,t,`srcSet`,n.srcSet,n,null),r&&Nd(e,t,`src`,n.src,n,null);return;case`input`:yd(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Nd(e,t,r,d,n,null)}}Pt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in yd(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Nd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&It(e,!!r,n,!0):It(e,!!r,t,!1);return;case`textarea`:for(s in yd(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Nd(e,t,s,c,n,null)}Rt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Nd(e,t,l,r,n,null)}return;case`dialog`:yd(`beforetoggle`,e),yd(`toggle`,e),yd(`cancel`,e),yd(`close`,e);break;case`iframe`:case`object`:yd(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)yd(gd[r],e);break;case`image`:yd(`error`,e),yd(`load`,e);break;case`details`:yd(`toggle`,e);break;case`embed`:case`source`:case`link`:yd(`error`,e),yd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,u,r,n,null)}return;default:if(Ut(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Nd(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Nd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Nd(e,t,p,m,r,f)}}Nt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Nd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Nd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?It(e,!!n,n?[]:``,!1):It(e,!!n,t,!0)):It(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Nd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Nd(e,t,s,a,r,o)}Lt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Nd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Nd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Nd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Nd(e,t,u,p,r,m)}return;default:if(Ut(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Nd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Nd(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[st]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[st])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ct(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=L.d;L.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=vu();return e||t}function bf(e){var t=ut(e);t!==null&&t.tag===5&&t.type===`form`?xs(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Mt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),pt(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Mt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Mt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Mt(n.imageSizes)+`"]`)):i+=`[href="`+Mt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),pt(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Mt(r)+`"][href="`+Mt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),pt(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=ft(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);pt(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=ft(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),pt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=ft(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),pt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=ne.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=ft(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=ft(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=ft(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Mt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),pt(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Mt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Mt(n.href)+`"]`);if(r)return t.instance=r,pt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),pt(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,pt(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),pt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,pt(a),a):(r=n,(a=hf.get(o))&&(r=h({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),pt(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[st]||a[et]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,pt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),pt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ni(3,null,null,t),e.current=a,a.stateNode=e,t=ra(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ia(a),e}function np(e){return e?(e=ei,e):ei}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Ra(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=za(e,r,t),n!==null&&(pu(n,e,t),Ba(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=Zr(e,67108864);t!==null&&pu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=fu();t=Ye(t);var n=Zr(e,t);n!==null&&pu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=2,dp(e,t,n,r)}finally{L.p=a,I.T=i}}function up(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=8,dp(e,t,n,r)}finally{L.p=a,I.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)wd(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=ut(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Re(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-je(o);s.entanglements[1]|=c,o&=~c}nd(a),!(Nl&6)&&(eu=ye()+500,rd(0,!1))}}break;case 31:case 13:s=Zr(a,2),s!==null&&pu(s,a,2),vu(),ap(a,2)}if(a=fp(r),a===null&&wd(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function fp(e){return e=Yt(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=lt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(be()){case xe:return 2;case Se:return 8;case Ce:case we:return 32;case Te:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ut(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=lt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Qe(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Qe(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jt=r,n.target.dispatchEvent(r),Jt=null}else return t=ut(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=ut(n);a!==null&&(e.splice(t,3),t-=3,ys(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[tt]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[tt]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,fu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),vu(),t[nt]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ze();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.7`)throw Error(i(527,Rp,`19.2.7`));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:I,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Oe=Bp.inject(zp),ke=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Hs,s=Us,c=Ws;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[nt]=t.current,Sd(e),new Ip(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=o((e=>{var t=u().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),b=o(((e,t)=>{t.exports=y()}))(),x=Object.freeze({p:115792089237316195423570985008687907853269984665640564039457584007908834671663n,n:115792089237316195423570985008687907852837564279074904382605163141518161494337n,h:1n,a:0n,b:7n,Gx:55066263022277343669578718895168534326250603453777594175500187360389116729240n,Gy:32670510020758816978083085130507043184471273380659243275938904335757337482424n}),{p:S,n:C,Gx:w,Gy:T,b:E}=x,D=32,O=64,k={publicKey:33,publicKeyUncompressed:65,signature:O,seed:48},A=(e=``,t=Error)=>{let n=new t(e),{captureStackTrace:r}=Error;throw typeof r==`function`&&r(n,A),n},j=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&e.BYTES_PER_ELEMENT===1,M=(e,t,n=``)=>{let r=j(e),i=e?.length,a=t!==void 0;if(!r||a&&i!==t){let o=n&&`"${n}" `,s=a?` of length ${t}`:``,c=r?`length=${i}`:`type=${typeof e}`,l=o+`expected Uint8Array`+s+`, got `+c;return r?A(l,RangeError):A(l,TypeError)}return e},N=e=>new Uint8Array(e),P=(e,t)=>e.toString(16).padStart(t,`0`),F=e=>{let t=``;for(let n of M(e))t+=P(n,2);return t},I={_0:48,_9:57,A:65,F:70,a:97,f:102},L=e=>e>=I._0&&e<=I._9?e-I._0:e>=I.A&&e<=I.F?e-(I.A-10):e>=I.a&&e<=I.f?e-(I.a-10):void 0,R=e=>{let t=`hex invalid`;if(typeof e!=`string`)return A(t);let n=e.length,r=n/2;if(n%2)return A(t);let i=N(r);for(let n=0,a=0;n<r;n++,a+=2){let r=L(e.charCodeAt(a)),o=L(e.charCodeAt(a+1));if(r===void 0||o===void 0)return A(t);i[n]=r*16+o}return i},ee=()=>globalThis?.crypto?.subtle??A(`crypto.subtle must be defined, consider polyfill`),te=(...e)=>{let t=0;for(let n of e)t+=M(n).length;let n=N(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n},z=(e=D)=>(globalThis?.crypto).getRandomValues(N(e)),B=BigInt,V=(e,t,n,r=`bad number: out of range`)=>typeof e==`bigint`?t<=e&&e<n?e:A(r,RangeError):A(r,TypeError),H=(e,t=S)=>{let n=e%t;return n>=0n?n:t+n},U=e=>H(e,C),ne=(e,t)=>{(e===0n||t<=0n)&&A(`no inverse n=`+e+` mod=`+t);let n=H(e,t),r=t,i=0n,a=1n,o=1n,s=0n;for(;n!==0n;){let e=r/n,t=r%n,c=i-o*e,l=a-s*e;r=n,n=t,i=o,a=s,o=c,s=l}return r===1n?H(i,t):A(`no inverse`)},W=e=>{let t=we[e];return typeof t!=`function`&&A(`hashes.`+e+` not set`),t},re=(e,t,n)=>M(W(e)(t,n),D,`digest`),ie=(e,t,n)=>Promise.resolve(W(e)(t,n)).then(e=>M(e,D,`digest`)),ae=e=>e instanceof me?e:A(`Point expected`),oe=e=>H(H(e*e)*e+E),se=e=>V(e,0n,S),ce=e=>V(e,1n,S),le=e=>V(e,1n,C),ue=e=>!(e&1n),de=e=>Uint8Array.of(e),fe=e=>de(ue(e)?2:3),pe=e=>{let t=oe(ce(e)),n=1n;for(let e=t,r=(S+1n)/4n;r>0n;r>>=1n)r&1n&&(n=n*e%S),e=e*e%S;return H(n*n)!==t&&A(`sqrt invalid`),ue(n)?n:H(-n)},me=class e{static BASE;static ZERO;X;Y;Z;constructor(e,t,n){this.X=se(e),this.Y=ce(t),this.Z=se(n),Object.freeze(this)}static CURVE(){return x}static fromAffine(t){let{x:n,y:r}=t;return n===0n&&r===0n?ge:new e(n,r,1n)}static fromBytes(t){M(t);let{publicKey:n,publicKeyUncompressed:r}=k,i,a=t.length,o=t[0],s=t.subarray(1),c=ye(s,0,D);if(a===n&&(o===2||o===3)){let t=pe(c);o===3&&(t=H(-t)),i=new e(c,t,1n)}return a===r&&o===4&&(i=new e(c,ye(s,D,O),1n)),i?i.assertValidity():A(`bad point: not on curve`)}static fromHex(t){return e.fromBytes(R(t))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:n,Z:r}=this,{X:i,Y:a,Z:o}=ae(e),s=H(t*o),c=H(i*r),l=H(n*o),u=H(a*r);return s===c&&l===u}is0(){return this.equals(ge)}negate(){return new e(this.X,H(-this.Y),this.Z)}double(){return this.add(this)}add(t){let{X:n,Y:r,Z:i}=this,{X:a,Y:o,Z:s}=ae(t),c=0n,l=E,u=0n,d=0n,f=0n,p=H(l*3n),m=H(n*a),h=H(r*o),g=H(i*s),_=H(n+r),v=H(a+o);_=H(_*v),v=H(m+h),_=H(_-v),v=H(n+i);let y=H(a+s);return v=H(v*y),y=H(m+g),v=H(v-y),y=H(r+i),u=H(o+s),y=H(y*u),u=H(h+g),y=H(y-u),f=H(c*v),u=H(p*g),f=H(u+f),u=H(h-f),f=H(h+f),d=H(u*f),h=H(m+m),h=H(h+m),g=H(c*g),v=H(p*v),h=H(h+g),g=H(m-g),g=H(c*g),v=H(v+g),m=H(h*v),d=H(d+m),m=H(y*v),u=H(_*u),u=H(u-m),m=H(_*h),f=H(y*f),f=H(f+m),new e(u,d,f)}subtract(e){return this.add(ae(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return ge;if(le(e),e===1n)return this;if(this.equals(he))return nt(e).p;let n=ge,r=he;for(let i=this;e>0n;i=i.double(),e>>=1n)e&1n?n=n.add(i):t&&(r=r.add(i));return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:n}=this;if(this.equals(ge))return{x:0n,y:0n};if(n===1n)return{x:e,y:t};let r=ne(n,S);return H(n*r)!==1n&&A(`inverse invalid`),{x:H(e*r),y:H(t*r)}}assertValidity(){let{x:e,y:t}=this.toAffine();return ce(e),ce(t),H(t*t)===oe(e)?this:A(`bad point: not on curve`)}toBytes(e=!0){let{x:t,y:n}=this.assertValidity().toAffine(),r=xe(t);return e?te(fe(n),r):te(de(4),r,xe(n))}toHex(e){return F(this.toBytes(e))}},he=new me(w,T,1n),ge=new me(0n,1n,0n);me.BASE=he,me.ZERO=ge;var _e=(e,t,n)=>he.multiply(t,!1).add(e.multiply(n,!1)).assertValidity(),ve=e=>B(`0x`+(F(e)||`0`)),ye=(e,t,n)=>ve(e.subarray(t,n)),be=2n**256n,xe=e=>R(P(V(e,0n,be),O)),Se=e=>V(ve(M(e,D,`secret key`)),1n,C,`invalid secret key: outside of range`),Ce=`SHA-256`,we={hmacSha256Async:async(e,t)=>{let n=ee(),r=`HMAC`,i=await n.importKey(`raw`,e,{name:r,hash:{name:Ce}},!1,[`sign`]);return N(await n.sign(r,i,t))},hmacSha256:void 0,sha256Async:async e=>N(await ee().digest(Ce,e)),sha256:void 0},Te=e=>(e=e===void 0?z(k.seed):e,M(e),e.length<k.seed||e.length>1024?A(`expected 48-1024b`,RangeError):xe(H(ve(e),C-1n)+1n)),Ee=e=>t=>{let n=Te(t);return{secretKey:n,publicKey:e(n)}},De=e=>Uint8Array.from(`BIP0340/`+e,e=>e.charCodeAt(0)),Oe=`aux`,ke=`nonce`,Ae=`challenge`,je=(e,...t)=>{let n=re(`sha256`,De(e));return re(`sha256`,te(n,n,...t))},Me=(e,...t)=>ie(`sha256Async`,De(e)).then(e=>ie(`sha256Async`,te(e,e,...t))),Ne=e=>{let t=Se(e),{x:n,y:r}=he.multiply(t).assertValidity().toAffine();return{d:ue(r)?t:U(-t),px:xe(n)}},Pe=e=>U(ve(e)),Fe=(...e)=>Pe(je(Ae,...e)),Ie=async(...e)=>Pe(await Me(Ae,...e)),Le=e=>Ne(e).px,Re=Ee(Le),ze=(e,t,n)=>{let{px:r,d:i}=Ne(t);return{m:M(e),px:r,d:i,a:M(n,D)}},Be=e=>{let t=Pe(e);t===0n&&A(`sign failed: k is zero`);let{px:n,d:r}=Ne(xe(t));return{rx:n,k:r}},Ve=(e,t,n,r)=>te(t,xe(U(e+n*r))),He=`invalid signature produced`,Ue=(e,t,n=z(D))=>{let{m:r,px:i,d:a,a:o}=ze(e,t,n),{rx:s,k:c}=Be(je(ke,xe(a^ve(je(Oe,o))),i,r)),l=Ve(c,s,Fe(s,i,r),a);return qe(l,r,i)||A(He),l},We=async(e,t,n=z(D))=>{let{m:r,px:i,d:a,a:o}=ze(e,t,n),{rx:s,k:c}=Be(await Me(ke,xe(a^ve(await Me(Oe,o))),i,r)),l=Ve(c,s,await Ie(s,i,r),a);return await Je(l,r,i)||A(He),l},Ge=(e,t)=>e instanceof Promise?e.then(t):t(e),Ke=(e,t,n,r)=>{let i=M(e,O,`signature`),a=M(t,void 0,`message`),o=M(n,D,`publicKey`);try{let e=ve(o),t=new me(e,pe(e),1n).assertValidity(),n=xe(t.toAffine().x),s=ye(i,0,D);V(s,1n,S);let c=ye(i,D,O);return V(c,1n,C),Ge(r(te(xe(s),n,a)),e=>{let{x:n,y:r}=_e(t,c,U(-e)).toAffine();return!(!ue(r)||n!==s)})}catch{return!1}},qe=(e,t,n)=>Ke(e,t,n,Fe),Je=async(e,t,n)=>Ke(e,t,n,Ie),Ye=Object.freeze({keygen:Re,getPublicKey:Le,sign:Ue,verify:qe,signAsync:We,verifyAsync:Je}),Xe=8,Ze=Math.ceil(256/Xe)+1,Qe=2**(Xe-1),$e=()=>{let e=[],t=he,n=t;for(let r=0;r<Ze;r++){n=t,e.push(n);for(let r=1;r<Qe;r++)n=n.add(t),e.push(n);t=n.double()}return e},et=void 0,tt=(e,t)=>{let n=t.negate();return e?n:t},nt=e=>{let t=et||=$e(),n=ge,r=he,i=2**Xe,a=i,o=B(i-1),s=B(Xe);for(let i=0;i<Ze;i++){let c=Number(e&o);e>>=s,c>Qe&&(c-=a,e+=1n);let l=i*Qe,u=l,d=l+Math.abs(c)-1,f=i%2!=0,p=c<0;c===0?r=r.add(tt(f,t[u])):n=n.add(tt(p,t[d]))}return e!==0n&&A(`invalid wnaf`),{p:n,f:r}},{floor:rt,min:it,sin:at}=Math,ot=`Trystero`,st=(e,t)=>Array(e).fill(void 0).map(t),ct=`0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz`,lt=e=>st(e,()=>ct[rt(Math.random()*62)]??``).join(``),ut=lt(20),dt=Promise.all.bind(Promise),ft=typeof window<`u`,{entries:pt,fromEntries:mt,keys:ht,values:gt}=Object,_t=()=>{},vt=`candidate`,yt=e=>(e!==null&&clearTimeout(e),null),bt=e=>Error(`${ot}: ${e}`),xt=(e,t)=>e instanceof Error&&e.message?e.message:typeof e==`string`&&e?e:jt(e??t),St=(e,t)=>e instanceof Error?e:bt(xt(e,t)),Ct=new TextEncoder,wt=new TextDecoder,Tt=e=>Ct.encode(e),Et=e=>wt.decode(e),Dt=e=>e.reduce((e,t)=>e+t.toString(16).padStart(2,`0`),``),Ot=(...e)=>e.join(`@`),kt=(e,t)=>{let n=[...e],r=()=>{let e=at(t++)*1e4;return e-rt(e)},i=n.length;for(;i;){let e=rt(r()*i--),t=n[i];n[i]=n[e],n[e]=t}return n},At=(e,t,n,r=!1)=>e.relayConfig?.urls||(r?kt(t,Nt(e.appId)):t).slice(0,e.relayConfig?.redundancy??n),jt=JSON.stringify,Mt=e=>{try{return JSON.parse(e)}catch{throw bt(`failed to parse JSON: ${e}`)}},Nt=(e,t=2**53-1)=>e.split(``).reduce((e,t)=>e+t.charCodeAt(0),0)%t,Pt=3333,Ft=6e4,It={},Lt=null,Rt=null,zt=()=>{Lt||=new Promise(e=>{Rt=e}).finally(()=>{Rt=null,Lt=null})},Bt=()=>{Rt?.()},Vt=(e,t,n)=>{let r={},i=!1,a=!1,o=_t;r.ready=new Promise(e=>o=e);let s=()=>{a=!1;let c=new WebSocket(e);c.onclose=()=>{if(a)return;if(a=!0,Lt){Lt.then(s);return}let t=It[e]??=Pt;setTimeout(s,Math.random()*t),It[e]=it(t*2,Ft)},c.onmessage=e=>t(String(e.data)),r.socket=c,r.url=c.url,c.onopen=()=>{let t=i;i=!0,o(r),It[e]=Pt,t&&n?.()},r.send=e=>{c.readyState===1&&c.send(e)}};return s(),r},Ht=e=>{let t={},n=new WeakMap,r=e=>{let t=n.get(e);if(!t)throw bt(`relay bookkeeping missing registration for relay client`);return t},i=()=>{let e={},t=t=>e[t]??={};return{forKey:t,forRelay:e=>t(r(e))}},a=(e,r)=>(t[e]=r,n.set(r,e),r);return{register:(e,n)=>t[e]||a(e,n()),keyOf:r,scoped:i,getSockets:()=>mt(pt(t).flatMap(([t,n])=>{let r=e(n);return r?[[t,r]]:[]}))}},Ut=()=>{if(ft){let e=new AbortController;return addEventListener(`online`,Bt,{signal:e.signal}),addEventListener(`offline`,zt,{signal:e.signal}),()=>e.abort()}return _t},Wt=`AES-GCM`,Gt={},Kt=e=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(e)))),qt=e=>{let t=atob(e);return new Uint8Array(t.length).map((e,n)=>t.charCodeAt(n)).buffer},Jt=async(e,t)=>new Uint8Array(await crypto.subtle.digest(e,Tt(t))),Yt=async e=>Gt[e]??=Array.from(await Jt(`SHA-1`,e)).map(e=>e.toString(36)).join(``),Xt=async(e,t,n)=>crypto.subtle.importKey(`raw`,await crypto.subtle.digest({name:`SHA-256`},Tt(`${e}:${t}:${n}`)),{name:Wt},!1,[`encrypt`,`decrypt`]),Zt=async(e,t)=>Dt(await Jt(`SHA-256`,`${ot}:${e}:${t}`)),Qt=`$`,$t=`,`,en=async(e,t)=>{let n=crypto.getRandomValues(new Uint8Array(16));return n.join($t)+Qt+Kt(await crypto.subtle.encrypt({name:Wt,iv:n},await e,Tt(t)))},tn=async(e,t)=>{let[n,r]=t.split(Qt);return Et(await crypto.subtle.decrypt({name:Wt,iv:new Uint8Array(n?.split($t).map(Number)??[])},await e,qt(r??``)))},nn=57333,rn=18e4,an=20,on=class{makeOffer;pool=[];pooled=new Set;leased=new Map;recycling=new Set;cleanupTimer=null;active=!1;constructor(e){this.makeOffer=e}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),st(an,this.makeOffer).forEach(e=>this.push(e)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(e=>e.isDead?(this.pooled.delete(e),!1):!0)},nn)}push(e){e.isDead||this.pooled.has(e)||this.leased.has(e)||(this.pool.push(e),this.pooled.add(e))}shift(e){let t=[];for(;t.length<e&&this.pool.length>0;){let e=this.pool.shift();if(!e)break;this.pooled.delete(e),t.push(e)}return t}claimLeased(e){let t=this.leased.get(e);t&&(yt(t),this.leased.delete(e))}recycle(e){if(!(e.isDead||this.recycling.has(e))){if(e.connection.remoteDescription){e.destroy();return}if(!this.active){e.destroy();return}this.recycling.add(e),e.setHandlers({connect:_t,close:_t,error:_t}),e.getOffer(!0).then(t=>{if(!t||t.type!==`offer`||e.isDead||!this.active){e.destroy();return}this.push(e)}).catch(()=>e.destroy()).finally(()=>this.recycling.delete(e))}}reclaimLeased(e){let t=this.leased.get(e);t&&(yt(t),this.leased.delete(e),this.recycle(e))}lease(e){this.claimLeased(e),this.leased.set(e,setTimeout(()=>{this.leased.delete(e),this.recycle(e)},rn))}checkout(e,t,n){let r=this.shift(e),i=Math.max(0,e-r.length);i>0&&r.push(...st(i,this.makeOffer));let a=async(e,r=!1)=>{try{let r=await n(e);return t?(this.lease(e),{peer:e,offer:r,claim:()=>this.claimLeased(e),reclaim:()=>this.reclaimLeased(e)}):{peer:e,offer:r}}catch(t){if(this.claimLeased(e),this.pooled.delete(e),e.destroy(),!r)return a(this.makeOffer(),!0);throw t}};return dt(r.map(e=>a(e)))}getOffers(e,t){return this.checkout(e,!0,t)}destroy(){this.active=!1,this.cleanupTimer&&=(clearInterval(this.cleanupTimer),null),this.pool.forEach(e=>e.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((e,t)=>{yt(e),t.destroy()}),this.leased.clear(),this.recycling.forEach(e=>e.destroy()),this.recycling.clear()}},sn=bt(`incorrect password for overlapping room`),cn=(e,t,n)=>{let r=r=>Jt(`SHA-256`,`${r}:${e}:${t}:${n}`).then(Dt),i=async(t,n,i)=>{if(!e)return;if(i){let e=lt(36);await t({__trystero_pw:`challenge`,c:e});let{data:i}=await n();if(!i||typeof i!=`object`||i.__trystero_pw!==`response`||typeof i.h!=`string`)throw sn;let a=await r(e);if(i.h!==a)throw sn;return}let{data:a}=await n();if(!a||typeof a!=`object`||a.__trystero_pw!==`challenge`||typeof a.c!=`string`)throw sn;await t({__trystero_pw:`response`,h:await r(a.c)})};return{run:i,compose:t=>e||t?async(e,n,r,a)=>{await i(n,r,a),await t?.(e,n,r,a)}:void 0}},ln=e=>{let t=xt(e,`unknown error`);return t.startsWith(`handshake `)?t:`handshake failed: ${t}`},un=({onPeerHandshake:e,onHandshakeError:t,handshakeTimeoutMs:n,sendHandshakeData:r,sendHandshakeReady:i,onActivate:a,onFailure:o})=>{let s={},c=(e,t)=>{let n=s[e];!n||t&&n.peer!==t||n.isActive||!n.didLocalHandshakePass||!n.didReceiveRemoteReady||(n.isActive=!0,n.handshakeTimer=yt(n.handshakeTimer),a(e,n.peer))},l=(e,n,r)=>{let i=s[e];if(!i||i.peer!==n)return;let a=ln(r);t?.(e,a),o(e,n,bt(a))},u=(e,t)=>{let n=s[e];!n||n.peer!==t||n.isActive||(n.didLocalHandshakePass=!0,i(``,e).catch(n=>l(e,t,bt(`failed sending handshake readiness: ${xt(n,`unknown send failure`)}`))),c(e,t))};return{addPeer:(e,t)=>{s[e]={peer:t,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(e,t)=>{let n=s[e];n&&(n.handshakeTimer=yt(n.handshakeTimer),n.pendingHandshakePayloads.length=0,n.handshakeWaiters.splice(0).forEach(e=>e.reject(t)),delete s[e])},canReceiveFromPeer:(e,t)=>{let n=s[e];return!!(n&&(n.isActive||t))},start:(t,i)=>{let a=s[t];if(!a||a.peer!==i)return;a.handshakeTimer=setTimeout(()=>l(t,i,bt(`handshake timed out after ${n}ms`)),n);let o=async(e,n)=>{await r(e,t,n)},c=()=>new Promise((e,n)=>{let r=s[t];if(!r||r.peer!==i){n(bt(`peer disconnected during handshake`));return}let a=r.pendingHandshakePayloads.shift();if(a){e(a);return}r.handshakeWaiters.push({resolve:e,reject:e=>n(e)})}),d=ut<t;Promise.resolve(e?.(t,o,c,d)).then(()=>u(t,i)).catch(e=>l(t,i,St(e,`handshake failed`)))},receiveHandshakeData:(e,t,n)=>{let r=s[t];if(!r||r.isActive)return;let i=n===void 0?{data:e}:{data:e,metadata:n},a=r.handshakeWaiters.shift();if(a){a.resolve(i);return}r.pendingHandshakePayloads.push(i)},receiveHandshakeReady:e=>{let t=s[e];!t||t.isActive||(t.didReceiveRemoteReady=!0,c(e))}}},dn=15e3,fn=5e3,pn=`icegatheringstatechange`,mn=`iceconnectionstatechange`,hn=`offer`,gn=`answer`,_n=/out of range/i,vn=e=>e.replace(/ (\S+\.local) (\d+) typ host/g,` 127.0.0.1 $2 typ host`),yn=(e,{trickleIce:t,rtcConfig:n,rtcPolyfill:r,turnConfig:i,_test_only_mdnsHostFallbackToLoopback:a})=>{let o=new(r??RTCPeerConnection)({iceServers:bn.concat(i??[]),...n}),s={},c=[],l=[],u=t!==!1,d=[],f=[],p=!1,m=!1,h=null,g=null,_=!1,v=()=>g=yt(g),y=()=>{_||(_=!0,v(),s.close?.())},b=e=>{s.signal?s.signal(e):c.push(e)},x=e=>{let t=s.signal;s.signal=n=>{t?.(n),e(n)},c.length>0&&c.splice(0).forEach(e=>s.signal?.(e))},S=e=>a?vn(e):e,C=e=>{if(!a||typeof e.candidate!=`string`)return e;let t=vn(e.candidate);return t===e.candidate?e:{...e,candidate:t}},w=e=>({type:e.localDescription?.type??hn,sdp:S(e.localDescription?.sdp??``)}),T=()=>{let e=o.remoteDescription?.sdp;return e?e.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},E=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,D=e=>{if(!o.remoteDescription)return!1;let t=E();if(typeof e.sdpMLineIndex==`number`&&t>0&&e.sdpMLineIndex>=t)return!1;let n=T();return!(n&&e.usernameFragment&&e.usernameFragment!==n)},O=async e=>{try{return await o.addIceCandidate(e),!0}catch(t){if(t instanceof Error&&_n.test(t.message)&&typeof e.sdpMLineIndex==`number`)return!1;throw t}},k=async()=>{if(!o.remoteDescription||d.length===0)return;let e=d.splice(0),t=[];for(let n of e){if(!D(n)){t.push(n);continue}await O(n)||t.push(n)}t.length>0&&d.push(...t)},A=async e=>{if(D(e)){await O(e)||d.push(e);return}d.push(e)},j=e=>{e.binaryType=`arraybuffer`,e.bufferedAmountLowThreshold=65535,e.onmessage=e=>{let t=e.data;s.data?s.data(t):l.push(t)},e.onopen=()=>s.connect?.(),e.onclose=y,e.onerror=({error:e})=>s.error?.(St(e,`data channel error`))},M=async e=>{let t=null;try{await Promise.race([new Promise(t=>{let n=()=>{e.iceGatheringState===`complete`&&(e.removeEventListener(pn,n),t())};e.addEventListener(pn,n),n()}),new Promise(e=>{t=setTimeout(e,dn)})])}finally{yt(t)}return w(e)},N=async()=>{let e=u?w(o):await M(o);return b(e),e};e?(h=o.createDataChannel(`data`),j(h)):o.ondatachannel=({channel:e})=>{h=e,j(e)};let P=async(e=!1)=>{if(o.connectionState!==`closed`)try{return p=!0,e&&(o.signalingState!==`stable`&&o.signalingState!==`closed`&&o.localDescription?.type===hn&&await o.setLocalDescription({type:`rollback`}),typeof o.restartIce==`function`&&o.restartIce()),await o.setLocalDescription(e?await o.createOffer({iceRestart:!0}):void 0),await N()}catch(e){s.error?.(St(e,`failed to create local offer`))}finally{p=!1}};o.onnegotiationneeded=async()=>P(!1),o.onicecandidate=({candidate:e})=>{if(!u||!e)return;let t=C(typeof e.toJSON==`function`?e.toJSON():{candidate:e.candidate,sdpMid:e.sdpMid,sdpMLineIndex:e.sdpMLineIndex,usernameFragment:e.usernameFragment});b({type:vt,sdp:JSON.stringify(t)})};let F=()=>{if(o.connectionState===`failed`||o.connectionState===`closed`||o.iceConnectionState===`failed`||o.iceConnectionState===`closed`){y();return}if(o.connectionState===`connected`||o.connectionState===`connecting`||o.iceConnectionState===`connected`||o.iceConnectionState===`completed`||o.iceConnectionState===`checking`){v();return}if(o.connectionState===`disconnected`||o.iceConnectionState===`disconnected`){g||=setTimeout(()=>{g=null,(o.connectionState===`disconnected`||o.iceConnectionState===`disconnected`)&&y()},fn);return}};o.onconnectionstatechange=F,o.addEventListener(mn,F),o.ontrack=e=>{let t=e.streams[0];if(t){if(!s.track&&!s.stream){f.push({track:e.track,stream:t});return}s.track?.(e.track,t),s.stream?.(t)}},o.onremovestream=e=>s.stream?.(e.stream);let I=e?new Promise(e=>x(t=>{t.type===hn&&e(t)})):Promise.resolve();return e&&queueMicrotask(()=>{!p&&o.signalingState===`stable`&&!o.localDescription&&o.connectionState!==`closed`&&o.onnegotiationneeded?.(new Event(`negotiationneeded`))}),{created:Date.now(),connection:o,get channel(){return h},get isDead(){return o.connectionState===`closed`},getOffer:async(t=!1)=>{if(e)return t?P(!0):o.localDescription?.type===hn?u?w(o):M(o):I},async signal(t){if(t.type===`candidate`){try{let e=JSON.parse(t.sdp);e&&typeof e==`object`&&await A(C(e))}catch(e){s.error?.(St(e,`failed to parse remote candidate`))}return}if(!(h?.readyState===`open`&&!t.sdp?.includes(`a=rtpmap`)))try{let n={...t,sdp:S(t.sdp)};if(t.type===hn){if(p||o.signalingState!==`stable`&&!m){if(e)return;await dt([o.setLocalDescription({type:`rollback`}),o.setRemoteDescription(n)])}else await o.setRemoteDescription(n);return await k(),await o.setLocalDescription(),await N()}if(t.type===gn){m=!0;try{await o.setRemoteDescription(n),await k()}finally{m=!1}}}catch(e){s.error?.(St(e,`failed to apply remote signal`))}},sendData:e=>h?.send(e),destroy:()=>{v(),h?.close(),o.close(),p=!1,m=!1,y()},setHandlers:e=>{let{signal:t,...n}=e;Object.assign(s,n),s.data&&l.length>0&&l.splice(0).forEach(e=>s.data?.(e)),t&&x(t),(s.track||s.stream)&&f.length>0&&f.splice(0).forEach(({track:e,stream:t})=>{s.track?.(e,t),s.stream?.(t)})},offerPromise:I,addStream:e=>e.getTracks().forEach(t=>o.addTrack(t,e)),removeStream:e=>o.getSenders().filter(t=>t.track&&e.getTracks().includes(t.track)).forEach(e=>o.removeTrack(e)),addTrack:(e,t)=>o.addTrack(e,t),removeTrack:e=>{let t=o.getSenders().find(t=>t.track===e);t&&o.removeTrack(t)},replaceTrack:(e,t)=>{let n=o.getSenders().find(t=>t.track===e);if(n)return n.replaceTrack(t)}}},bn=[...st(3,(e,t)=>`stun:stun${t||``}.l.google.com:19302`),`stun:stun.cloudflare.com:3478`].map(e=>({urls:e})),xn=Object.getPrototypeOf(Uint8Array),Sn=32,Cn=0,wn=32,Tn=34,En=35,Dn=36,On=16*2**10-Dn,kn=255,An=65535,jn=`bufferedamountlow`,Mn=`close`,Nn=`error`,Pn=1e4,Fn=e=>e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength),In=(e,t=Pn)=>e.readyState!==`open`||e.bufferedAmount<=e.bufferedAmountLowThreshold?Promise.resolve(e.readyState===`open`):new Promise(n=>{let r=!1,i=null,a=t=>{r||(r=!0,e.removeEventListener(jn,o),e.removeEventListener(Mn,s),e.removeEventListener(Nn,s),yt(i),n(t))},o=()=>a(!0),s=()=>a(!1);if(e.addEventListener(jn,o),e.addEventListener(Mn,s),e.addEventListener(Nn,s),i=setTimeout(()=>a(!1),t),e.readyState!==`open`){a(!1);return}e.bufferedAmount<=e.bufferedAmountLowThreshold&&a(!0)}),Ln=({getPeer:e,getPeerIds:t,canReceiveFromPeer:n,throwIfAborted:r})=>{let i={},a={},o={},s={},c=(n,r,{includePending:i=!1}={})=>(n?Array.isArray(n)?n:[n]:t(i)).flatMap(t=>{let n=e(t,i);return n?[Promise.resolve(r(t,n))]:(console.warn(`${ot}: no peer with id ${t} found`),[])});return{makeInternalAction:(t,n={})=>{let o=a[t];if(i[t]&&o){let e=i[t].options;if(e.sendToPending!==!!n.sendToPending||e.receiveWhilePending!==!!n.receiveWhilePending)throw bt(`action type "${t}" cannot be redefined`);return o}if(!t)throw bt(`action type argument is required`);let l=Tt(t);if(l.byteLength>Sn)throw bt(`action type string "${t}" (${l.byteLength}b) exceeds byte limit (${Sn}). Hint: choose a shorter name.`);let u={sendToPending:!!n.sendToPending,receiveWhilePending:!!n.receiveWhilePending},d=new Uint8Array(Sn);d.set(l);let f=0;return i[t]={onComplete:_t,onProgress:_t,setOnComplete:e=>{i[t].onComplete=e;let n=s[t];n?.length&&(delete s[t],n.forEach(({payload:t,peerId:n,metadata:r})=>e(t,n,r)))},setOnProgress:e=>{i[t].onProgress=e},send:async(t,n,i,a,o)=>{r(o);let s=typeof t;if(s===`undefined`)throw bt(`action data cannot be undefined`);let l=s!==`string`,p=t instanceof Blob,m=p||t instanceof ArrayBuffer||t instanceof xn,h=i!==void 0,g=m?Fn(p?await t.arrayBuffer():t):Tt(l?jt(t):t),_=h?Tt(jt(i)):null,v=Math.ceil(g.byteLength/On)+ +!!h||1,y=st(v,(e,t)=>{let n=t===v-1,r=!!(h&&t===0),i=new Uint8Array(Dn+(r?_?.byteLength??0:n?g.byteLength-On*(v-(h?2:1)):On));return i.set(d),i.set([f>>8,f&kn],wn),i.set([Number(n)|Number(r)<<1|Number(m)<<2|Number(l)<<3],Tn),i.set([Math.round((t+1)/v*kn)],En),i.set(h?r?_??new Uint8Array:g.subarray((t-1)*On,t*On):g.subarray(t*On,(t+1)*On),Dn),i});return f=f+1&An,await dt(c(n,async(t,n)=>{let{channel:s}=n,c=0;for(;c<v;){r(o);let l=y[c];if(!l)break;if(s&&s.bufferedAmount>s.bufferedAmountLowThreshold){let e=await In(s);if(r(o),!e)break}let d=e(t,u.sendToPending);if(!d||d!==n)break;n.sendData(l),c++;let f=l[En]??kn;a?.(f/kn,t,i)}},{includePending:u.sendToPending})),[]},options:u},a[t]={send:i[t].send,onMessage:i[t].setOnComplete,onProgress:i[t].setOnProgress}},handleData:(e,t)=>{let r=new Uint8Array(t),a=Et(r.subarray(Cn,wn)).replaceAll(`\0`,``),c=i[a];if(!n(e,!!c?.options.receiveWhilePending))return;let l=(r[wn]??0)<<8|(r[33]??0),u=r[Tn]??0,d=r[En]??0,f=r.subarray(Dn),p=!!(u&1),m=!!(u&2),h=!!(u&4),g=!!(u&8);o[e]??={},o[e][a]??={};let _=o[e][a][l]??={chunks:[]};if(m?_.meta=Mt(Et(f)):_.chunks.push(f),c?.onProgress(d/kn,e,_.meta),!p)return;let v=new Uint8Array(_.chunks.reduce((e,t)=>e+t.byteLength,0));_.chunks.reduce((e,t)=>(v.set(t,e),e+t.byteLength),0),delete o[e][a][l];let y=h?v:g?Mt(Et(v)):Et(v);if(c){c.onComplete(y,e,_.meta);return}(s[a]??=[]).push({payload:y,peerId:e,..._.meta===void 0?{}:{metadata:_.meta}})},clearPeer:e=>{delete o[e]}}},Rn=500,zn=(e,t)=>{let n=bt(t);return n.kind=e,n.name=e===`aborted`?`AbortError`:n.name,n},Bn=e=>{if(e?.aborted)throw zn(`aborted`,`operation aborted`)},Vn=e=>e&&typeof e==`object`&&!Array.isArray(e)&&typeof e.r==`string`?{r:e.r,...Object.hasOwn(e,`m`)?{m:e.m}:{}}:null,Hn=e=>e&&typeof e==`object`&&!Array.isArray(e)&&typeof e.r==`string`?{r:e.r,...typeof e.e==`string`?{e:e.e}:{}}:null,Un=(e,t)=>t===void 0?e:{...e,metadata:t},Wn=({getPeer:e,getPeerIds:t,canReceiveFromPeer:n})=>{let r={},i={},a=Ln({getPeer:e,getPeerIds:t,canReceiveFromPeer:n,throwIfAborted:Bn}),o=a.makeInternalAction,s=a.handleData,c=e=>{let t=i[e];t&&(yt(t.timer),t.signal&&t.abortHandler&&t.signal.removeEventListener(`abort`,t.abortHandler),delete i[e])},l=(e,t)=>{pt(i).forEach(([n,r])=>{r.peerId===e&&(c(n),r.reject(t))})},u=(e,t)=>{a.clearPeer(e),l(e,zn(`disconnected`,xt(t,`peer disconnected`)))},d=o(`@_response`);return d.onMessage((e,t,n)=>{let r=Hn(n);if(!r)return;let a=i[r.r];if(!(!a||a.peerId!==t)){if(c(r.r),r.e!==void 0){a.reject(zn(`rejected`,r.e));return}a.resolve(e)}}),{makeAction:(t,n)=>{if(n&&`onRequest`in n&&n.kind!==`request`)throw bt(`request actions must use kind: "request"`);let a=n?.kind??`message`,s=o(t),l=r[t];if(l){if(l.kind!==a)throw bt(`action type "${t}" cannot be redefined`);return l.action}let u={kind:a,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:n?.onReceiveProgress??null},f=(e,t)=>e?(n,r)=>e(n,Un({peerId:r},t)):void 0,p=e=>{u.onReceiveProgress=e};if(s.onProgress((e,t,n)=>{let r=u.kind===`request`?Vn(n):null;u.onReceiveProgress?.(e,Un({peerId:t},r?r.m:n))}),a===`message`){let e=n?.onMessage??null,i=()=>{if(!e)return;let t=e;u.pendingMessages.splice(0).forEach(({payload:e,peerId:n,metadata:r})=>{Promise.resolve().then(()=>t(e,Un({peerId:n},r))).catch(e=>console.error(`${ot} action handler error:`,e))})},a={send:async(e,t={})=>{await s.send(e,t.target,t.metadata,f(t.onProgress,t.metadata),t.signal)},get onMessage(){return e},set onMessage(t){e=t,i()},get onReceiveProgress(){return u.onReceiveProgress},set onReceiveProgress(e){p(e)}};return s.onMessage((t,n,r)=>{if(!e){u.pendingMessages.push(r===void 0?{payload:t,peerId:n}:{payload:t,peerId:n,metadata:r});return}let i=e;Promise.resolve().then(()=>i(t,Un({peerId:n},r))).catch(e=>console.error(`${ot} action handler error:`,e))}),u.action=a,r[t]=u,i(),a}let m=n?.onRequest??null,h=e=>{yt(e.timer);let t=u.pendingRequests.indexOf(e);t>-1&&u.pendingRequests.splice(t,1)},g=(e,t,n)=>{d.send(null,e,{r:t,e:xt(n,`request failed`)})},_=(e,t)=>{h(e),Promise.resolve().then(()=>t(e.payload,{peerId:e.peerId,...e.metadata===void 0?{}:{metadata:e.metadata},signal:e.controller.signal})).then(async t=>{if(t===void 0)throw bt(`request handler returned undefined`);await d.send(t,e.peerId,{r:e.requestId})}).catch(t=>g(e.peerId,e.requestId,t)).finally(()=>e.controller.abort())},v=()=>{m&&u.pendingRequests.slice().forEach(e=>_(e,m))},y=(e,t,n,r)=>{if(m){_({payload:e,peerId:t,...n===void 0?{}:{metadata:n},requestId:r,controller:new AbortController,timer:null},m);return}let i={payload:e,peerId:t,...n===void 0?{}:{metadata:n},requestId:r,controller:new AbortController,timer:setTimeout(()=>{h(i),i.controller.abort(),g(t,r,`request handler unavailable`)},Rn)};u.pendingRequests.push(i)},b=async(t,n)=>{let{target:r,metadata:a,onProgress:o,signal:l,timeoutMs:u}=n;if(Bn(l),!e(r,!1))throw zn(`disconnected`,`no active peer with id ${r}`);let d=lt(20),p=new Promise((e,t)=>{let n={peerId:r,resolve:e,reject:t,timer:null,...l===void 0?{}:{signal:l}},a=()=>{c(d),t(zn(`aborted`,`operation aborted`))};l&&(n.abortHandler=a,l.addEventListener(`abort`,a,{once:!0})),i[d]=n}).catch(e=>{throw e});try{await s.send(t,r,a===void 0?{r:d}:{r:d,m:a},f(o,a),l);let e=i[d];return e&&u!==void 0&&(e.timer=setTimeout(()=>{c(d),e.reject(zn(`timeout`,`request timed out`))},u)),await p}catch(e){throw c(d),e}},x={request:b,requestMany:async(e,t)=>(Bn(t.signal),await dt(t.targets.map(async n=>{try{let r={peerId:n,status:`fulfilled`,value:await b(e,{target:n,...t.metadata===void 0?{}:{metadata:t.metadata},...t.timeoutMs===void 0?{}:{timeoutMs:t.timeoutMs},...t.onProgress===void 0?{}:{onProgress:t.onProgress},...t.signal===void 0?{}:{signal:t.signal}})};return t.onResult?.(r),r}catch(e){let r=St(e,`request failed`);if(r.kind===`aborted`||!r.kind)throw r;let i=r.kind===`timeout`?{peerId:n,status:`timeout`}:r.kind===`disconnected`?{peerId:n,status:`disconnected`}:{peerId:n,status:`rejected`,error:r};return t.onResult?.(i),i}}))),get onRequest(){return m},set onRequest(e){m=e,v()},get onReceiveProgress(){return u.onReceiveProgress},set onReceiveProgress(e){p(e)}};return s.onMessage((e,t,n)=>{let r=Vn(n);r&&y(e,t,r.m,r.r)}),u.action=x,r[t]=u,v(),x},makeInternalAction:o,handleData:s,clearPeer:u}},Gn=e=>e&&typeof e==`object`&&!Array.isArray(e)&&typeof e.k==`string`?{key:e.k,...typeof e.s==`string`?{streamId:e.s}:{},...typeof e.t==`string`?{trackId:e.t}:{},...Object.hasOwn(e,`m`)?{metadata:e.m}:{}}:null,Kn=e=>t=>{let n=e.get(t);return n||(n=lt(20),e.set(t,n)),n},qn=()=>{let e=new WeakMap,t=new WeakMap,n=new Map,r=new Map,i=new Map,a=new Map;return{getStreamKey:Kn(e),getTrackKey:Kn(t),rememberRemoteStream:(e,t,i)=>{n.set(e,t),i&&r.set(i,t)},getRemoteStream:(e,t)=>n.get(e)??(t?r.get(t):void 0),rememberRemoteTrack:(e,t,n,o,s)=>{let c={track:t,stream:n};i.set(e,c),o&&a.set(o,c),s&&r.set(s,n)},getRemoteTrack:(e,t)=>i.get(e)??(t?a.get(t):void 0),clearRemote:()=>{n.clear(),r.clear(),i.clear(),a.clear()}}},Jn=({iterate:e,isActive:t,getSharedMediaPeer:n})=>{let r={},i={},a=qn(),o={onPeerStream:null,onPeerTrack:null},s=(e,r,i,a)=>{t(e)&&(n(e)?.__trysteroMedia?.rememberRemoteStream(r,i,typeof i.id==`string`?i.id:void 0),o.onPeerStream?.(i,e,a))},c=(e,r,i,a,s)=>{t(e)&&(n(e)?.__trysteroMedia?.rememberRemoteTrack(r,i,a,typeof i.id==`string`?i.id:void 0,typeof a.id==`string`?a.id:void 0),o.onPeerTrack?.(i,a,e,s))},l=(t,n,r,i,a,o={})=>{let s={k:n,...o,...r===void 0?{}:{m:r}};return e(t,async(e,t)=>{await i(s,e),a(t)})};return{addStream:(e,t,n)=>l(t.target,a.getStreamKey(e),t.metadata,n,t=>t.addStream(e),{s:e.id}),removeStream:(t,n)=>{e(n,(e,n)=>n.removeStream(t))},addTrack:(e,t,n,r)=>l(n.target,a.getTrackKey(e),n.metadata,r,n=>n.addTrack(e,t),{s:t.id,t:e.id}),removeTrack:(t,n)=>{e(n,(e,n)=>n.removeTrack(t))},replaceTrack:(e,t,n,r)=>l(n.target,a.getTrackKey(t),n.metadata,r,n=>n.replaceTrack(e,t),{t:e.id}),receiveStreamMeta:(e,i)=>{if(!t(i))return;let a=Gn(e);if(!a)return;let o=n(i)?.__trysteroMedia?.getRemoteStream(a.key,a.streamId);if(o){s(i,a.key,o,a.metadata);return}(r[i]??=[]).push(a)},receiveTrackMeta:(e,r)=>{if(!t(r))return;let a=Gn(e);if(!a)return;let o=n(r)?.__trysteroMedia?.getRemoteTrack(a.key,a.trackId);if(o){c(r,a.key,o.track,o.stream,a.metadata);return}(i[r]??=[]).push(a)},receiveRemoteStream:(e,n)=>{if(!t(e))return;let i=r[e]?.shift();i&&s(e,i.key,n,i.metadata)},receiveRemoteTrack:(e,n,r)=>{if(!t(e))return;let a=i[e]?.shift();a&&c(e,a.key,n,r,a.metadata)},clearPeer:e=>{delete r[e],delete i[e]},get onPeerStream(){return o.onPeerStream},set onPeerStream(e){o.onPeerStream=e},get onPeerTrack(){return o.onPeerTrack},set onPeerTrack(e){o.onPeerTrack=e}}},Yn=`beforeunload`,Xn=1e4,Zn=e=>`@_`+e,Qn=new Set,$n=()=>Qn.forEach(e=>e()),er=e=>(Qn.add(e),Qn.size===1&&addEventListener(Yn,$n),()=>{Qn.delete(e),Qn.size||removeEventListener(Yn,$n)}),tr=(e,t,n,{onPeerHandshake:r,onHandshakeError:i,handshakeTimeoutMs:a=Xn,isPassive:o=!1}={})=>{let s={},c={},l={},u={onPeerJoin:null,onPeerLeave:null},d=_t,f=null,p=(e,t,{includePending:n=!1}={})=>(e?Array.isArray(e)?e:[e]:ht(n?s:c)).flatMap(e=>{let r=n?s[e]:c[e];return r?[Promise.resolve(t(e,r))]:(console.warn(`${ot}: no peer with id ${e} found`),[])}),m=Jn({iterate:(e,t)=>p(e,(e,n)=>t(e,n)),isActive:e=>!!c[e],getSharedMediaPeer:e=>s[e]??null}),h=Wn({getPeer:(e,t)=>(t?s:c)[e],getPeerIds:e=>ht(e?s:c),canReceiveFromPeer:(e,t)=>!!f?.canReceiveFromPeer(e,t)}),g=h.makeInternalAction,_=h.handleData,v=h.makeAction,y=(e,t=bt(`peer disconnected`))=>{let n=St(t,`peer disconnected`);f?.clearPeer(e,n),delete s[e],delete c[e],h.clearPeer(e,n),l[e]?.splice(0).forEach(e=>e.reject(n)),delete l[e],m.clearPeer(e)},b=(e,n,r)=>{let i=s[e];if(!i||n&&i!==n)return;let a=!!c[e];y(e,r),i.destroy(),a&&u.onPeerLeave?.(e),t(e)},x=async()=>{await D.send(``),await new Promise(e=>setTimeout(e,99)),pt(s).forEach(([e,t])=>{t.destroy(),y(e,bt(`room left`))}),d(),n()},S=g(Zn(`ping`)),C=g(Zn(`pong`)),w=g(Zn(`signal`)),T=g(Zn(`stream`)),E=g(Zn(`track`)),D=g(Zn(`leave`),{sendToPending:!0,receiveWhilePending:!0}),O=g(Zn(`hsdata`),{sendToPending:!0,receiveWhilePending:!0}),k=g(Zn(`hsready`),{sendToPending:!0,receiveWhilePending:!0});return f=un({...r===void 0?{}:{onPeerHandshake:r},...i===void 0?{}:{onHandshakeError:i},handshakeTimeoutMs:a,sendHandshakeData:O.send,sendHandshakeReady:k.send,onActivate:(e,t)=>{c[e]=t,u.onPeerJoin?.(e)},onFailure:(e,t,n)=>b(e,t,n)}),S.onMessage((e,t)=>C.send(``,t)),C.onMessage((e,t)=>{let n=l[t];(n?.shift())?.resolve(),n&&!n.length&&delete l[t]}),w.onMessage((e,t)=>{c[t]&&s[t]?.signal(e)}),T.onMessage((e,t)=>m.receiveStreamMeta(e,t)),E.onMessage((e,t)=>m.receiveTrackMeta(e,t)),D.onMessage((e,t)=>b(t,void 0,bt(`peer left room`))),O.onMessage((e,t,n)=>f?.receiveHandshakeData(e,t,n)),k.onMessage((e,t)=>f?.receiveHandshakeReady(t)),e((e,t)=>{let n=s[t];if(n){if(n===e)return;n.destroy(),y(t,bt(`peer replaced`))}s[t]=e,f?.addPeer(t,e),e.setHandlers({data:e=>_(t,e),stream:e=>m.receiveRemoteStream(t,e),track:(e,n)=>m.receiveRemoteTrack(t,e,n),signal:e=>{c[t]&&w.send(e,t)},close:()=>b(t,e,bt(`peer disconnected`)),error:n=>{console.error(`${ot} peer error:`,n),b(t,e,n)}}),f?.start(t,e)}),ft&&(d=er(()=>x().catch(_t))),{makeAction:v,leave:x,ping:async e=>{if(!c[e])throw bt(`no active peer with id ${e}`);let t=Date.now();return await new Promise((t,n)=>{let r=l[e]??=[],i=()=>{let t=l[e];if(!t)return;let n=t.indexOf(a);n>-1&&t.splice(n,1),t.length||delete l[e]},a={resolve:()=>{i(),t()},reject:e=>{i(),n(e)}};r.push(a),S.send(``,e).catch(e=>a.reject(St(e,`peer disconnected`)))}),Date.now()-t},isPassive:()=>o,getPeers:()=>mt(pt(c).map(([e,t])=>[e,t.connection])),addStream:(e,t={})=>m.addStream(e,t,T.send),removeStream:(e,t={})=>{m.removeStream(e,t.target)},addTrack:(e,t,n={})=>m.addTrack(e,t,n,E.send),removeTrack:(e,t={})=>{m.removeTrack(e,t.target)},replaceTrack:(e,t,n={})=>m.replaceTrack(e,t,n,E.send),get onPeerJoin(){return u.onPeerJoin},set onPeerJoin(e){u.onPeerJoin=e,e&&ht(c).forEach(t=>e(t))},get onPeerLeave(){return u.onPeerLeave},set onPeerLeave(e){u.onPeerLeave=e},get onPeerStream(){return m.onPeerStream},set onPeerStream(e){m.onPeerStream=e},get onPeerTrack(){return m.onPeerTrack},set onPeerTrack(e){m.onPeerTrack=e}}},nr=1,rr=2,ir=(e,t)=>{let n=Tt(e),r=new Uint8Array(3+n.byteLength+t.byteLength);return r[0]=nr,r[1]=n.byteLength>>>8&255,r[2]=n.byteLength&255,r.set(n,3),r.set(t,3+n.byteLength),r},ar=(e,t)=>{let n=Tt(e),r=new Uint8Array(4+n.byteLength);return r[0]=rr,r[1]=Number(t),r[2]=n.byteLength>>>8&255,r[3]=n.byteLength&255,r.set(n,4),r},or=e=>{let t=new Uint8Array(e);if(t.byteLength<3)return null;if(t[0]===nr){let e=(t[1]??0)<<8|(t[2]??0),n=3+e;return e<=0||t.byteLength<n?null:{type:`room`,roomToken:Et(t.subarray(3,n)),payload:t.subarray(n).slice().buffer}}if(t[0]!==rr||t.byteLength<4)return null;let n=(t[2]??0)<<8|(t[3]??0),r=4+n;return n<=0||t.byteLength<r?null:{type:`presence`,roomToken:Et(t.subarray(4,r)),isPresent:t[1]===1}},sr=e=>{let{connection:t,channel:n}=e;return e.isDead||t.connectionState===`closed`||t.connectionState===`failed`||t.iceConnectionState===`closed`||t.iceConnectionState===`failed`||n?.readyState===`closing`||n?.readyState===`closed`},cr=e=>{if(sr(e))return`stale`;let{channel:t}=e;return!t||t.readyState!==`open`?`transient`:`live`},lr=class{byApp={};roomPresenceHandlers={};getMap(e){return this.byApp[e]??={}}get(e,t){return this.byApp[e]?.[t]}isPeerStale(e){return sr(e)}getHealth(e){return this.isPeerStale(e)?`stale`:`live`}setRoomPresenceHandler(e,t){return this.roomPresenceHandlers[e]=t,()=>{this.roomPresenceHandlers[e]===t&&delete this.roomPresenceHandlers[e]}}sendRoomPresence(e,t,n){e.isClosing||e.peer.isDead||e.peer.sendData(ar(t,n))}clear(e,t,{destroyPeer:n}){let r=this.byApp[e],i=r?.[t];if(!i||i.isClosing)return;i.idleTimer=yt(i.idleTimer),i.isClosing=!0,n&&!i.peer.isDead&&i.peer.destroy();let a=gt(i.bindings);i.bindings={},i.bindingsByToken={},i.controlRoomId=null,delete r[t],a.forEach(e=>{e.handlers.close?.(),e.pendingData.length=0,e.pendingSendData.length=0,e.pendingTracks.length=0}),i.media.clearRemote(),i.pendingDataByToken.clear(),i.remoteRoomTokens.clear(),ht(r).length===0&&delete this.byApp[e]}register(e,t,n,r){let i=this.getMap(e),a=i[t];if(a){if(a.idleTimer=yt(a.idleTimer),a.peer===n)return a;this.clear(e,t,{destroyPeer:!0})}let o={appId:e,peerId:t,peer:n,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:qn(),idleMs:r,isClosing:!1};return n.setHandlers({data:e=>this.dispatchData(o,e),signal:e=>this.dispatchSignal(o,e),close:()=>this.clear(e,t,{destroyPeer:!1}),error:n=>{console.error(`${ot} peer error:`,n),this.clear(e,t,{destroyPeer:!1})},track:(e,t)=>this.dispatchTrack(o,e,t)}),i[t]=o,o}bind(e,t,n,{onDetach:r}){let i=n.bindings[e];if(i)return n.idleTimer=yt(n.idleTimer),{proxy:i.proxy,isNew:!1};let a={roomId:e,roomToken:null,roomTokenPromise:t,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:_t,proxy:{}},o=()=>{n.bindings[e]&&(this.pruneRoomOwnership(n,e),delete n.bindings[e],a.roomToken&&n.bindingsByToken[a.roomToken]===a&&delete n.bindingsByToken[a.roomToken],n.controlRoomId===e&&(n.controlRoomId=ht(n.bindings)[0]??null),r(),this.scheduleIdleTimer(n))},s={created:n.peer.created,get connection(){return n.peer.connection},get channel(){return n.peer.channel},get isDead(){return n.peer.isDead},getOffer:e=>n.peer.getOffer(e),signal:e=>n.peer.signal(e),sendData:e=>{if(!a.roomToken){a.pendingSendData.push(e);return}n.peer.sendData(ir(a.roomToken,e))},destroy:()=>o(),setHandlers:e=>{let{signal:t,...n}=e;Object.assign(a.handlers,n),t&&(a.handlers.signal=t),this.flushBindingQueues(a)},offerPromise:n.peer.offerPromise,addStream:t=>{let r=n.streamOwners.get(t)??new Set,i=r.size===0;r.add(e),n.streamOwners.set(t,r),i&&n.peer.addStream(t)},removeStream:t=>{let r=n.streamOwners.get(t);r&&(r.delete(e),r.size===0&&(n.streamOwners.delete(t),n.peer.removeStream(t)))},addTrack:(t,r)=>{let i=n.trackOwners.get(t)??{stream:r,rooms:new Set},a=i.rooms.size===0;return i.stream=r,i.rooms.add(e),n.trackOwners.set(t,i),a?n.peer.addTrack(t,r):n.peer.connection.getSenders().find(e=>e.track===t)??n.peer.addTrack(t,r)},removeTrack:t=>{let r=n.trackOwners.get(t);r&&(r.rooms.delete(e),r.rooms.size===0&&(n.trackOwners.delete(t),n.peer.removeTrack(t)))},replaceTrack:(e,t)=>{let r=n.trackOwners.get(e);if(r){n.trackOwners.delete(e);let i=n.trackOwners.get(t)??{stream:r.stream,rooms:new Set};r.rooms.forEach(e=>i.rooms.add(e)),n.trackOwners.set(t,i)}return n.peer.replaceTrack(e,t)},__trysteroMedia:n.media};return a.proxy=s,a.detach=o,n.bindings[e]=a,n.controlRoomId??=e,n.idleTimer=yt(n.idleTimer),t.then(t=>{if(n.isClosing||n.bindings[e]!==a)return;a.roomToken=t,n.bindingsByToken[t]=a;let r=n.pendingDataByToken.get(t);r?.length&&(a.pendingData.push(...r),n.pendingDataByToken.delete(t)),a.pendingSendData.splice(0).forEach(e=>n.peer.sendData(ir(t,e))),this.flushBindingQueues(a)}),{proxy:s,isNew:!0}}pruneRoomOwnership(e,t){e.streamOwners.forEach((n,r)=>{n.delete(t),n.size===0&&(e.streamOwners.delete(r),e.peer.removeStream(r))}),e.trackOwners.forEach((n,r)=>{n.rooms.delete(t),n.rooms.size===0&&(e.trackOwners.delete(r),e.peer.removeTrack(r))})}scheduleIdleTimer(e){e.isClosing||ht(e.bindings).length>0||(e.idleTimer=yt(e.idleTimer),e.idleTimer=setTimeout(()=>{let t=this.byApp[e.appId]?.[e.peerId];!t||ht(t.bindings).length>0||this.clear(e.appId,e.peerId,{destroyPeer:!0})},e.idleMs))}getSignalBinding(e){if(e.controlRoomId){let t=e.bindings[e.controlRoomId];if(t?.handlers.signal)return t}let t=gt(e.bindings).find(e=>!!e.handlers.signal);return t?(e.controlRoomId=t.roomId,t):null}flushBindingQueues(e){let{handlers:t}=e;t.data&&e.pendingData.length>0&&e.pendingData.splice(0).forEach(e=>t.data?.(e)),(t.track||t.stream)&&e.pendingTracks.length&&e.pendingTracks.splice(0).forEach(({track:e,stream:n})=>{t.track?.(e,n),t.stream?.(n)})}dispatchData(e,t){let n=or(t);if(!n)return;if(n.type===`presence`){n.isPresent?e.remoteRoomTokens.add(n.roomToken):e.remoteRoomTokens.delete(n.roomToken),this.roomPresenceHandlers[e.appId]?.(e.peerId,n.roomToken,n.isPresent);return}let r=e.bindingsByToken[n.roomToken];if(!r){let t=e.pendingDataByToken.get(n.roomToken)??[];t.push(n.payload),e.pendingDataByToken.set(n.roomToken,t);return}r.handlers.data?r.handlers.data(n.payload):r.pendingData.push(n.payload)}dispatchSignal(e,t){this.getSignalBinding(e)?.handlers.signal?.(t)}dispatchTrack(e,t,n){gt(e.bindings).forEach(e=>{if(e.handlers.track||e.handlers.stream){e.handlers.track?.(t,n),e.handlers.stream?.(n);return}e.pendingTracks.push({track:t,stream:n})})}},ur=23333,dr=12,fr=7533,pr=23333,mr=`__legacy__`,hr=`offer-placeholder`,gr=[`offer`,`answer`,`candidate`],_r=e=>{if(typeof e==`string`)try{let t=Mt(e);return t&&typeof t==`object`?t:null}catch{return null}return e&&typeof e==`object`?e:null},vr=(e,t)=>typeof e[t]==`string`&&e[t]?e[t]:void 0,yr=e=>gr.some(t=>t in e&&(typeof e[t]!=`string`||e[t]===``)),br=(e,t,n,r,i,a)=>{e.toCipher(t).then(t=>{e.isLeaving()||!a()||r(n,jt(i(t.sdp)))})},xr=()=>({status:`idle`,offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),Sr=e=>[...e.turnConfig??[],...e.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(e=>/^turns?:/i.test(e))),Cr=(e,t)=>`could not connect to peer ${e} after exchanging SDP; ${Sr(t)?`check that your TURN server URLs and credentials are reachable by both peers`:`configure TURN servers with turnConfig or rtcConfig.iceServers`}`,wr=(e,t,n)=>{e.isLeaving()||t.connectedPeer||t.connectionErrorReported||(t.connectionErrorReported=!0,e.onJoinError?.({error:Cr(n,e.config),appId:e.appId,peerId:n,roomId:e.roomId}))},Tr=(e,t)=>e[t]??=xr(),Er=e=>{e.connectedPeer?e.status=`connected`:e.answeringPeer?e.status=`answering`:e.offerPeer||e.offerRelays.some(Boolean)?e.status=`offering`:e.status=`idle`},Dr=(e,t)=>{e.answeringPeer===t&&(e.answeringExpiryTimer=yt(e.answeringExpiryTimer),e.answeringPeer=null,e.answerSent=!1,Er(e))},Or=(e,t,n)=>{e.connectedPeer&&(e.connectedPeer.isDead||e.connectedPeer.destroy(),e.connectedPeer=null,e.connectedPeerUnhealthySinceMs=null,Er(e))},kr=(e,t)=>{e.offerRelayTimers[t]=yt(e.offerRelayTimers[t]),e.offerRelays[t]&&(e.offerRelays[t]=void 0,Er(e))},Ar=(e,t)=>{e?.offerRelays[t]===hr&&kr(e,t)},jr=e=>{if(e.isDead||e.connection.connectionState===`closed`)return!0;try{return!!e.connection.remoteDescription}catch{return!0}},Mr=(e,t)=>{let n=e.offerAnswered;e.offerExpiryTimer=yt(e.offerExpiryTimer),e.offerInitPromise=null,e.offerRelays.forEach((t,n)=>kr(e,n)),e.offerRelays=[],e.offerSignalRelays=[],e.offerRelayTimers=[],e.offerSignalBacklog=[],e.offerPeer&&e.offerPeer!==e.connectedPeer&&(n||jr(e.offerPeer)?e.offerPeer.isDead||e.offerPeer.destroy():t.recycle(e.offerPeer)),e.offerPeer=null,e.offerId=null,e.offerSdp=null,e.offerAnswered=!1,e.connectionErrorReported=!1,Er(e)},Nr=(e,t,n,r)=>{yt(t.answeringExpiryTimer),t.answeringExpiryTimer=setTimeout(()=>{let t=e.peerStates[n];!t||t.connectedPeer||t.answeringPeer!==r||(t.answerSent&&wr(e,t,n),r.destroy(),Dr(t,r),e.checkDeactivate())},pr)},Pr=async(e,t,n)=>{let r=n?[n,mr]:[mr];for(let n of r){let r=e.pendingCandidates[n];if(r?.length){delete e.pendingCandidates[n];for(let e of r)await t.signal(e)}}},Fr=(e,t,n,r=nn)=>{yt(t.offerExpiryTimer);let i=t.offerId;t.offerExpiryTimer=setTimeout(()=>{let t=e.peerStates[n];!t||t.connectedPeer||t.offerId!==i||(t.offerAnswered&&wr(e,t,n),Mr(t,e.offerPool),e.checkDeactivate())},r)},Ir=(e,t,n,r)=>t.offerPeer&&t.offerId&&t.offerSdp?Promise.resolve({peer:t.offerPeer,offer:t.offerSdp,offerId:t.offerId}):(t.offerInitPromise||=(async()=>{let i=(await e.offerPool.checkout(1,!1,e.encryptOffer))[0];if(!i)throw bt(`failed to allocate offer peer`);let{peer:a,offer:o}=i;t.offerPeer=a,t.offerId=lt(dr),t.offerSdp=o,t.offerAnswered=!1,t.connectionErrorReported=!1,t.offerSignalBacklog=[],Er(t);let s=()=>{t.offerPeer===a&&!t.connectedPeer&&(t.offerAnswered&&wr(e,t,n),Mr(t,e.offerPool)),e.disconnectPeer(a,n),e.checkDeactivate()};return a.setHandlers({connect:()=>e.connectPeer(a,n,r),signal:e=>{t.offerPeer===a&&(t.offerSignalBacklog.push(e),t.offerSignalRelays.forEach(t=>t?.(e)))},close:s,error:s}),Fr(e,t,n),{peer:a,offer:o,offerId:t.offerId}})().finally(()=>t.offerInitPromise=null),t.offerInitPromise),Lr=async(e,t,n,r,i)=>{if(r){e.attachSharedPeerToRoom(n,r);return}let a=e.peerStates[n];if(!a||a.connectedPeer||a.answeringPeer||a.offerAnswered){Ar(a,t);return}if(a.offerRelays[t]!==hr)return;let[o,s]=await dt([Yt(Ot(e.rootTopicPlaintext,n)),Ir(e,a,n,t)]);if(e.isLeaving())return;if(a.connectedPeer||a.answeringPeer||a.offerAnswered||a.offerRelays[t]!==hr){Ar(a,t);return}a.offerRelayTimers[t]=yt(a.offerRelayTimers[t]),a.offerRelays[t]=!0,Er(a),a.offerRelayTimers[t]=setTimeout(()=>Vr(e,n,t),(e.announceIntervals[t]??e.announceIntervalMs)*.9);let c=!1;a.offerSignalRelays[t]=t=>{c&&(e.isLeaving()||a.connectedPeer||a.offerPeer!==s.peer||a.offerId!==s.offerId||t.type!==`candidate`||br(e,t,o,i,t=>({peerId:ut,offerId:s.offerId,candidate:t,...e.isPassive?{passive:!0}:{}}),()=>!a.connectedPeer&&a.offerPeer===s.peer&&a.offerId===s.offerId))},i(o,jt({peerId:ut,offerId:s.offerId,offer:s.offer,...e.isPassive?{passive:!0}:{}})),c=!0,a.offerSignalBacklog.forEach(e=>a.offerSignalRelays[t]?.(e))},Rr=async(e,t,n,r,i,a,o)=>{let s=Tr(e.peerStates,n);if(s.answeringPeer||s.offerAnswered)return;let c=!!(s.offerPeer||s.offerRelays.some(Boolean));if((c||a)&&ut<n)return;c&&Mr(s,e.offerPool);let l=e.initPeer(!1,e.config);s.answeringPeer=l,s.answerSent=!1,s.connectionErrorReported=!1,Nr(e,s,n,l),Er(s);let u=()=>{s.answeringPeer===l&&!s.connectedPeer&&s.answerSent&&wr(e,s,n),Dr(s,l),e.disconnectPeer(l,n),e.checkDeactivate()};l.setHandlers({connect:()=>e.connectPeer(l,n,t),close:u,error:u});let d;try{d=await e.toPlain({type:`offer`,sdp:r})}catch{Dr(s,l),e.onJoinError?.({error:`incorrect room password when decrypting offer`,appId:e.appId,peerId:n,roomId:e.roomId});return}if(l.isDead){Dr(s,l);return}let f=await Yt(Ot(e.rootTopicPlaintext,n));e.isLeaving()||(l.setHandlers({signal:t=>{e.isLeaving()||s.answeringPeer!==l||l.isDead||t.type!==`answer`&&t.type!==`candidate`||br(e,t,f,o,n=>{let r={peerId:ut};return t.type===`answer`?(s.answerSent=!0,r.answer=n):r.candidate=n,i&&(r.offerId=i),e.isPassive&&(r.passive=!0),r},()=>s.answeringPeer===l&&!l.isDead)}}),await l.signal(d),await Pr(s,l,i))},zr=async(e,t,n,r,i)=>{let a;try{a=await e.toPlain({type:vt,sdp:n})}catch{return}let o=Tr(e.peerStates,t),s=r&&o?.offerPeer&&o.offerId===r?o.offerPeer:null,c=o?.answeringPeer??null,l=!r&&o?.offerPeer?o.offerPeer:null,u=i&&!i.isDead?i:s??c??l;if(!u||u.isDead){let e=r??mr;(o.pendingCandidates[e]??=[]).push(a);return}u.signal(a)},Br=async(e,t,n,r,i,a)=>{let o;try{o=await e.toPlain({type:`answer`,sdp:r})}catch{e.onJoinError?.({error:`incorrect room password when decrypting answer`,appId:e.appId,peerId:n,roomId:e.roomId});return}if(a)e.offerPool.claimLeased(a),a.setHandlers({connect:()=>e.connectPeer(a,n,t),close:()=>e.disconnectPeer(a,n)}),a.signal(o);else{let t=e.peerStates[n];if(!t||!t.offerPeer||t.offerAnswered||i&&t.offerId&&i!==t.offerId||t.offerPeer.isDead)return;t.offerAnswered=!0,Fr(e,t,n,ur),t.offerPeer.signal(o)}},Vr=(e,t,n)=>{let r=e.peerStates[t];!r||r.connectedPeer||r.offerRelays[n]&&(kr(r,n),e.checkDeactivate())},Hr=e=>t=>async(n,r,i)=>{if(e.isLeaving())return;let a=_r(r);if(!a||yr(a))return;let o=vr(a,`peerId`)??``,s=vr(a,`offer`),c=vr(a,`answer`),l=vr(a,`candidate`),u=vr(a,`offerId`),d=a.peer,f=a.hasOutgoingOffer===!0,p=a.passive===!0;if(!o||o===ut)return;let[m,h]=await dt([e.rootTopicP,e.selfTopicP]);if(e.isLeaving()||n!==m&&n!==h||e.isPassive&&p||(e.isPassive&&!e.isActive&&!c&&!l&&(e.isActive=!0,e.requeueAnnounce?.()),e.isPassive&&!e.isActive))return;let g=e.peerStates[o],_=g?.connectedPeer;if(_&&g){let e=cr(_);if(e===`live`){g.connectedPeerUnhealthySinceMs=null;return}if(e===`stale`)Or(g,o,`message-from-stale-peer`);else{let e=Date.now(),t=g.connectedPeerUnhealthySinceMs??e;if(g.connectedPeerUnhealthySinceMs=t,e-t<fr)return;Or(g,o,`message-from-prolonged-disconnect`)}}let v=e.sharedPeers.get(e.appId,o);v&&e.sharedPeers.getHealth(v.peer)===`stale`&&(e.sharedPeers.clear(e.appId,o,{destroyPeer:!0}),v=void 0);let y=!!(o&&!s&&!c&&!l);if(y&&!v){let n=Tr(e.peerStates,o),r=ut<o;if(n.answeringPeer||n.connectedPeer||n.offerAnswered)return;if(!r&&!n.offerPeer){let t=await Yt(Ot(e.rootTopicPlaintext,o));!e.isLeaving()&&!n.connectedPeer&&i(t,jt({peerId:ut}));return}if(n.offerRelays[t])return;n.offerRelays[t]=hr,Er(n)}if(v&&(s||c||l)){if(v.bindings[e.roomId])return;e.attachSharedPeerToRoom(o,v);return}if(y)return Lr(e,t,o,v,i);if(s)return Rr(e,t,o,s,u,f,i);if(l)return zr(e,o,l,u,d);if(c)return Br(e,t,o,c,u,d)},Ur=5333,Wr=[233,533,1333],Gr=7533,Kr=123333,qr=({init:e,subscribe:t,announce:n,deactivate:r})=>{let i={},a={},o={},s={},c=new lr,l=()=>gt(i).some(e=>ht(e).length>0),u=e=>a[e]??={},d=e=>o[e]??={},f=(e,t,n)=>{c.getHealth(e.peer)===`live`&&c.sendRoomPresence(e,t,n)},p=(e,t)=>{pt(a[e]??{}).forEach(([n,r])=>{if(!r.shouldAdvertise())return;let{roomToken:i,roomTokenPromise:o}=r;if(i){f(t,i,!0);return}o.then(i=>{a[e]?.[n]===r&&r.roomToken===i&&(c.get(e,t.peerId)!==t||t.isClosing||r.shouldAdvertise()&&f(t,i,!0))})})},m=(e,t,n)=>gt(c.getMap(e)).forEach(e=>f(e,t,n)),h=e=>{s[e]||(s[e]=c.setRoomPresenceHandler(e,(t,n,r)=>{if(!r)return;let i=c.get(e,t),s=o[e]?.[n];!i||!s||a[e]?.[s]?.attachSharedPeerToRoom(t,i)}))},g=e=>{i[e]&&ht(i[e]).length>0||(s[e]?.(),delete s[e],delete a[e],delete o[e])},_=!1,v=[],y=null,b=_t;return(s,f,x)=>{if(!s)throw bt(`requires a config map as the first argument`);if(x&&typeof x!=`object`)throw bt(`third argument must be a callbacks object`);let{appId:S}=s,C=x?.onJoinError,w=x?.onPeerHandshake,T=x?.handshakeTimeoutMs;if(!S)throw bt(`config map is missing appId field`);if(!f)throw bt(`roomId argument required`);if(T!==void 0&&(!Number.isFinite(T)||T<=0))throw bt(`handshakeTimeoutMs must be a positive number`);if(i[S]?.[f])return i[S][f];h(S);let E=Ot(ot,S,f),D=Yt(E),O=Yt(Ot(E,ut)),k=Xt(s.password??``,S,f),A=Zt(S,f),j=s._test_only_sharedPeerIdleMs??Kr,M=!1,N=e=>async t=>({type:t.type,sdp:await e(k,t.sdp)}),P=N(tn),F=N(en),I=c.getMap(S);y||=new on(()=>yn(!0,s));let L=y,R=async e=>{let t=await e.getOffer(Date.now()-e.created>nn);if(!t||t.type!==`offer`)throw bt(`failed to get offer for peer`);return(await F(t)).sdp},ee=(e,t)=>{let n=Tr(W.peerStates,e);n.answeringExpiryTimer=yt(n.answeringExpiryTimer),n.answeringPeer=null;let{proxy:r,isNew:i}=c.bind(f,A,t,{onDetach:()=>{let n=W.peerStates[e];n?.connectedPeer===t.peer&&(n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,Er(n))}});n.connectedPeer=t.peer,n.connectedPeerUnhealthySinceMs=null,Er(n),i&&le(r,e),Mr(n,L)},te=(e,t,n)=>{if(M){e.destroy();return}let r=Tr(W.peerStates,t);if(r.connectedPeer){let n=I[t];if(n&&r.connectedPeer===n.peer&&n.bindings[f])return;r.connectedPeer!==e&&!e.isDead&&e.destroy();return}let i=I[t];if(i&&c.getHealth(i.peer)===`stale`&&(c.clear(S,t,{destroyPeer:!0}),i=void 0),i&&i.peer!==e){e.isDead||e.destroy(),ee(t,i);return}let a=!i;i||=c.register(S,t,e,j),ee(t,i),a&&p(S,i)},z=(e,t)=>{if(M)return;let n=W.peerStates[t];n?.connectedPeer===e&&(Or(n,t,`close-event`),ne())},B=!!s.passive,V=null,H,U=_t,ne=()=>{if(!B||!W.isActive)return;let e=!1;pt(W.peerStates).forEach(([t,n])=>{n.connectedPeer||n.answeringPeer||n.offerInitPromise||n.offerPeer||n.offerRelays.some(Boolean)?e=!0:n.status===`idle`&&delete W.peerStates[t]}),e||(W.isActive=!1,H=yt(H),se.forEach(yt),se.length=0,U(),V?.roomToken&&m(S,V.roomToken,!1))},W={appId:S,roomId:f,config:s,peerStates:{},rootTopicPlaintext:E,rootTopicP:D,selfTopicP:O,toPlain:P,toCipher:F,isLeaving:()=>M,isPassive:B,isActive:!B,onJoinError:C,sharedPeers:c,offerPool:L,encryptOffer:R,initPeer:yn,connectPeer:te,disconnectPeer:z,attachSharedPeerToRoom:ee,checkDeactivate:ne,announceIntervals:[],announceIntervalMs:Ur},re={config:s,appId:S,roomId:f,isPassive:B},ie=Hr(W);if(!_){let t=e(s);v=(Array.isArray(t)?t:[t]).map(e=>Promise.resolve(e)),_=!0,b=s.relayConfig?.manualReconnection?_t:Ut()}!B&&!L.isActive&&L.warmup(),W.announceIntervals=v.map(()=>Ur);let ae=v.map(()=>0),oe=v.map(()=>0),se=[],ce=v.map(async(e,n)=>t(await e,await D,await O,ie(n),e=>L.getOffers(e,R),re));dt([D,O]).then(([e,t])=>{if(M)return;let i=async(r,a)=>{if(M||B&&!W.isActive)return;let o=B?{passive:!0}:void 0,s;try{s=await n(r,e,t,o,re),oe[a]=0}catch(e){let t=oe[a]??0;t===0&&console.warn(`${ot}: announce failed - ${xt(e,``)}`),oe[a]=t+1}if(M||B&&!W.isActive)return;typeof s==`number`&&(W.announceIntervals[a]=s);let c=ae[a]??0;ae[a]=c+1;let l=W.announceIntervals[a]??Ur,u=Wr[c];se[a]=setTimeout(()=>{i(r,a)},typeof u==`number`?Math.min(l,u):l)};U=()=>{r&&v.forEach(async n=>{let i=await n;M||r(i,e,t,re)})},W.requeueAnnounce=()=>{se.forEach(yt),se.length=0,H=yt(H),L.isActive||L.warmup(),V?.roomToken&&m(S,V.roomToken,!0),H=setTimeout(ne,Gr),v.forEach(async(e,t)=>{let n=await e;n&&!M&&(ae[t]=0,i(n,t))})},ce.forEach(async(e,t)=>{if(await e,M)return;let n=await v[t];n&&!M&&(!B||W.isActive)&&i(n,t)})});let le=_t,{compose:ue}=cn(s.password??``,S,f),de=ue(w),fe={...de?{onPeerHandshake:de}:{},...T===void 0?{}:{handshakeTimeoutMs:T},isPassive:B,onHandshakeError:(e,t)=>C?.({error:t.replace(/^handshake failed: /,``),appId:S,peerId:e,roomId:f})};i[S]??={};let pe=u(S),me=tr(e=>le=e,e=>{if(M)return;let t=W.peerStates[e];t?.connectedPeer&&(t.connectedPeer=null,Er(t),ne())},()=>{M=!0,le=_t;let e=a[S]?.[f];e?.roomToken&&(m(S,e.roomToken,!1),delete o[S]?.[e.roomToken],o[S]&&!ht(o[S]).length&&delete o[S]),a[S]&&(delete a[S][f],ht(a[S]).length||delete a[S]),pt(W.peerStates).forEach(([e,t])=>{if(t.answeringExpiryTimer=yt(t.answeringExpiryTimer),t.connectedPeer&&!t.connectedPeer.isDead){let n=I[e];(!n||n.peer!==t.connectedPeer)&&t.connectedPeer.destroy()}t.answeringPeer&&!t.answeringPeer.isDead&&t.answeringPeer.destroy(),Mr(t,L),t.connectedPeer=null,t.answeringPeer=null,Er(t)}),i[S]&&(delete i[S][f],ht(i[S]).length===0&&delete i[S]),se.forEach(yt),H=yt(H),ce.forEach(async e=>{(await e)()}),!l()&&(_=!1,L.destroy(),y=null,b(),g(S))},fe);return V={roomToken:null,roomTokenPromise:A,attachSharedPeerToRoom:ee,shouldAdvertise:()=>!B||W.isActive},pe[f]=V,A.then(e=>{let t=V;!t||M||a[S]?.[f]!==t||(t.roomToken=e,d(S)[e]=f,gt(I).forEach(t=>{t.remoteRoomTokens.has(e)&&ee(t.peerId,t)}),(!B||W.isActive)&&m(S,e,!0))}),i[S][f]=me}},Jr=[`offer`,`answer`,`candidate`],Yr=e=>{if(typeof e==`string`)try{let t=Mt(e);return t&&typeof t==`object`?t:null}catch{return null}return e},Xr=(e,t)=>typeof e[t]==`string`&&e[t]?e[t]:void 0,Zr=e=>Jr.some(t=>t in e&&(typeof e[t]!=`string`||e[t]===``)),Qr=e=>{let t=Yr(e);if(!t||Zr(t))return!1;let n=Xr(t,`peerId`);return!!(n&&n!==ut&&t.passive!==!0&&!Xr(t,`answer`)&&!Xr(t,`candidate`))},$r=e=>{if(!e)throw bt(`topic strategy missing room context`);return e},ei=(e,t,n,r)=>({kind:t,appId:e.appId,roomId:e.roomId,rootTopic:n,selfTopic:r}),ti=(e,t,n,r)=>({kind:t,appId:e.appId,roomId:e.roomId,rootTopic:n,selfTopic:r}),ni=({init:e,subscribeTopic:t,publishTopic:n,unpublishTopic:r})=>qr({init:e,subscribe:async(e,r,i,a,o,s)=>{let c=$r(s),l=(t,a)=>n(e,t,a,ti(c,`signal`,r,i)),u=null,d=!1,f=null,p=!1,m=e=>{d||(d=!0,e())},h=()=>(f||=Promise.resolve(t(e,i,(e,t)=>{p||a(e,t,l)},ei(c,`self`,r,i))).then(e=>{u=e,p&&m(e)}),f);c.isPassive||await h();let g=await t(e,r,async(e,t)=>{p||(c.isPassive&&Qr(t)&&await h(),p||await a(e,t,l))},ei(c,`root`,r,i));return()=>{p=!0,u&&m(u),g()}},announce:(e,t,r,i,a)=>{let o=$r(a);return n(e,t,jt({peerId:ut,...i}),ti(o,`announce`,t,r))},...r?{deactivate:(e,t,n,i)=>r(e,t,ti($r(i),`announce`,t,n))}:{}}),ri=Ht(e=>e.socket),ii=5,ai=`x`,oi=`EVENT`,{secretKey:si,publicKey:ci}=Ye.keygen(),li=Dt(ci),ui={},di={},fi={},pi=250,mi=()=>Math.floor(Date.now()/1e3),hi=e=>fi[e]??=Nt(e,1e4)+2e4,gi=async(e,t)=>{let n={kind:hi(e),tags:[[ai,e]],created_at:mi(),content:t,pubkey:li},r=await Jt(`SHA-256`,jt([0,n.pubkey,n.created_at,n.kind,n.tags,n.content]));return jt([oi,{...n,id:Dt(r),sig:Dt(await Ye.signAsync(r,si))}])},_i={},vi=(e,t,n)=>{let r=_i[e.url]??={subIds:[],topics:new Map,updateTimer:null};r.topics.set(t,n),bi(e,r)},yi=(e,t)=>{let n=_i[e.url];n&&(n.topics.delete(t),n.topics.size===0?(n.updateTimer!==null&&(clearTimeout(n.updateTimer),n.updateTimer=null),n.subIds.forEach(t=>e.send(jt([`CLOSE`,t]))),delete _i[e.url]):bi(e,n))},bi=(e,t)=>{t.updateTimer===null&&(t.updateTimer=setTimeout(()=>{t.updateTimer=null,xi(e)},0))},xi=e=>{let t=_i[e.url];if(!t||t.topics.size===0)return;let n=[...t.topics.keys()],r=[],i=mi();for(let e=0;e<n.length;e+=pi)r.push(n.slice(e,e+pi));for(;t.subIds.length>r.length;){let n=t.subIds.pop();n&&e.send(jt([`CLOSE`,n]))}r.forEach((n,r)=>{let a=t.subIds[r]??=lt(64);e.send(jt([`REQ`,a,{kinds:[...new Set(n.map(hi))],since:i,"#x":n}]))})},Si=e=>{let t=_i[e.url];t&&t.topics.size>0&&xi(e)},Ci=ni({init:e=>At(e,wi,ii,!0).map(e=>{let t=ri.register(e,()=>Vt(e,e=>{let[n,r,i,a]=Mt(e);if(n!==oi){let e=`${ot}: relay failure from ${t.url} - `;n===`NOTICE`?console.warn(e+r):n===`OK`&&!i&&console.warn(e+a);return}if(i&&typeof i==`object`&&`content`in i){let{content:e}=i,n=di[r];if(n){n(ui[r]??``,e);return}let a=_i[t.url];if(a?.subIds.includes(r)&&i.tags){let t=i.tags.find(e=>e[0]===ai);t?.[1]&&a.topics.get(t[1])?.(t[1],e)}}},()=>Si(t)));return t.ready}),subscribeTopic:(e,t,n)=>(vi(e,t,(e,t)=>void n(e,t)),()=>{yi(e,t)}),publishTopic:async(e,t,n)=>e.send(await gi(t,typeof n==`string`?n:jt(n)))});ri.getSockets;var wi=`basspistol.org,bucket.coracle.social,chorus.almostmachines.dev,chorus.pjv.me,communities.nos.social,ftp.halifax.rwth-aachen.de/nostr,hol.is,hornetstorage.net/relay,koru.bitcointxoko.org,nos.lol,nostr-01.uid.ovh,nostr-01.yakihonne.com,nostr-relay.corb.net,nostr.data.haus,nostr.islandarea.net,nostr.sathoarder.com,nostr.self-determined.de,nostr.tegila.com.br,nostr.vulpem.com,purplerelay.com,relay-can.zombi.cloudrodion.com,relay-rpi.edufeed.org,relay.agorist.space,relay.angor.io,relay.artio.inf.unibe.ch,relay.binaryrobot.com,relay.damus.io,relay.froth.zone,relay.libernet.app,relay.mostr.pub,relay.mostro.network,relay.nostr.place,relay.nostrdice.com,relay.notoshi.win,relay.sigit.io,relay02.lnfi.network,relay2.angor.io,schnorr.me,slick.mjex.me,social.amanah.eblessing.co,staging.yabu.me,strfry.openhoofd.nl,strfry.shock.network,testnet-relay.samt.st,top.testrelay.top,x.kojira.io,yabu.me/v2`.split(`,`).map(e=>`wss://`+e),Ti=[{model:`xs`,dtype:`f16`,resolution:{w:384,h:216},skipFrames:2},{model:`small`,dtype:`f16`,resolution:{w:384,h:216},skipFrames:1},{model:`medium`,dtype:`f16`,resolution:{w:512,h:288},skipFrames:1},{model:`large`,dtype:`f32`,resolution:{w:640,h:360},skipFrames:0},{model:`xl`,dtype:`f32`,resolution:{w:1280,h:720},skipFrames:0}],Ei=!1;function Di(e){Ei=e}function Oi(e){let t=`[longpipe/${e}]`,n=((...e)=>{Ei&&console.log(t,...e)});return n.warn=(...e)=>{Ei&&console.warn(t,...e)},n}var ki=Oi(`adaptive`),Ai=2e3,ji=1e4,Mi=30,Ni=20,Pi=5e3,Fi=.3,Ii=15e3,Li=class{constructor(e){this.opts=e,this.currentPresetIdx=Ti.findIndex(t=>t.model===e.initialModel),this.lastSwapAt=performance.now()}opts;timer=null;currentPresetIdx;lastSwapAt=0;overshootStart=0;headroomStart=0;start(){ki(`started; backend=${this.opts.backendKind} initial=${this.opts.initialModel} idx=${this.currentPresetIdx}`),this.timer=setInterval(()=>{this.tick().catch(e=>ki(`tick failed:`,e))},Ai)}stop(){this.timer&&clearInterval(this.timer),this.timer=null}async tick(){if(typeof document<`u`&&document.hidden)return;let e=performance.now();if(e-this.lastSwapAt<ji)return;let t=await this.opts.getStats();if(t.fps<Ni?(this.overshootStart===0&&(this.overshootStart=e),e-this.overshootStart>=Pi&&this.tryDowngrade(t.fps)):this.overshootStart=0,this.opts.backendKind===`webgpu`&&t.modelMs>0){let n=1e3/Mi*Fi;t.modelMs<n?(this.headroomStart===0&&(this.headroomStart=e),e-this.headroomStart>=Ii&&this.tryUpgrade(t.modelMs,n)):this.headroomStart=0}}tryDowngrade(e){if(this.currentPresetIdx<=0)return;let t=this.currentPresetIdx-1;ki(`downgrade ${Ti[this.currentPresetIdx].model} \u2192 ${Ti[t].model} (fps=${e})`),this.swap(t)}tryUpgrade(e,t){if(this.currentPresetIdx>=Ti.length-1)return;let n=this.currentPresetIdx+1;ki(`upgrade ${Ti[this.currentPresetIdx].model} \u2192 ${Ti[n].model} (modelMs=${e.toFixed(1)} < ${t.toFixed(1)})`),this.swap(n)}async swap(e){let t=Ti[e];this.lastSwapAt=performance.now(),this.overshootStart=0,this.headroomStart=0;try{let n=await this.opts.fetchWeights(t.model);await this.opts.swapPreset(t.model,n),this.currentPresetIdx=e,ki(`swap to ${t.model} done`)}catch(e){ki(`swap failed:`,e),this.opts.onError?.({message:`adaptive preset swap failed: ${e.message??String(e)}`,source:`adaptive`,recoverable:!0,cause:e})}}};async function Ri(e){let t,n=!1;if(e instanceof HTMLVideoElement){if(t=e.currentSrc||e.src,!t)throw Error(`background video: HTMLVideoElement has no src`)}else if(e instanceof Blob)t=URL.createObjectURL(e),n=!0;else if(typeof e==`string`)t=e;else throw Error(`background video: unsupported input shape`);let r=document.createElement(`video`);r.crossOrigin=`anonymous`,r.muted=!0,r.loop=!0,r.playsInline=!0,r.src=t,await new Promise((e,n)=>{r.addEventListener(`loadeddata`,()=>e(),{once:!0}),r.addEventListener(`error`,()=>n(Error(`background video: failed to load ${t}`)),{once:!0})});try{await r.play()}catch(e){throw Error(`background video: play() rejected \u2014 ${e.message}`)}let i=new MessageChannel,a=i.port1,o=i.port2,s=!1,c=r.requestVideoFrameCallback?.bind(r);if(c){let e=(t,n)=>{if(!s){try{let e=new VideoFrame(r,{timestamp:n.mediaTime*1e6});a.postMessage({frame:e},[e])}catch{}c(e)}};c(e)}else{let e=()=>{if(!s){try{let e=new VideoFrame(r,{timestamp:performance.now()*1e3});a.postMessage({frame:e},[e])}catch{}requestAnimationFrame(e)}};requestAnimationFrame(e)}return{port:o,transferList:[o],cleanup:()=>{s=!0,a.close(),r.pause(),r.removeAttribute(`src`),r.load(),n&&URL.revokeObjectURL(t)}}}var zi=4,Bi=8,Vi=16;async function Hi(e){if(typeof e==`string`)return e===`none`?{background:{kind:`none`}}:e===`blur`?{background:{kind:`blur`,sigma:Bi}}:{background:{kind:`image`,bitmap:await qi(e)}};if(e instanceof ImageBitmap)return{background:{kind:`image`,bitmap:e}};if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement)return{background:{kind:`image`,bitmap:await createImageBitmap(e)}};if(typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement)return await Ui(e);let t=e;if(t.color!==void 0)return{background:{kind:`color`,rgb:Wi(t.color)}};if(t.blur!==void 0)return{background:{kind:`blur`,sigma:Gi(t.blur)}};if(t.image!==void 0)return{background:{kind:`image`,bitmap:await Ki(t.image)}};if(t.video!==void 0)return await Ui(t.video);throw Error(`background: unrecognized input shape \u2014 ${Ji(e)}`)}async function Ui(e){let t;if(typeof e==`string`)t=e;else if(typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement)t=e;else if(e&&typeof e==`object`&&`data`in e&&`type`in e)t=e.data instanceof Blob?e.data:new Blob([e.data],{type:e.type});else throw Error(`background.video: unrecognized shape \u2014 ${Ji(e)}`);let n=await Ri(t);return{background:{kind:`video`,port:n.port},transferList:n.transferList,cleanup:n.cleanup}}function Wi(e){if(typeof e==`string`){let t=e.trim().replace(/^#/,``);if(/^[0-9a-fA-F]{6}$/.test(t))return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255];if(/^[0-9a-fA-F]{3}$/.test(t))return[parseInt(t[0]+t[0],16)/255,parseInt(t[1]+t[1],16)/255,parseInt(t[2]+t[2],16)/255];throw Error(`background.color: hex must be #rgb or #rrggbb, got ${Ji(e)}`)}if(!Array.isArray(e)||e.length!==3||!e.every(e=>typeof e==`number`&&Number.isFinite(e)&&e>=0&&e<=1))throw Error(`background.color: expected hex string or [r, g, b] floats in [0, 1], got ${Ji(e)}`);return[e[0],e[1],e[2]]}function Gi(e){if(e===!0)return Bi;if(`sigma`in e){if(typeof e.sigma!=`number`||!Number.isFinite(e.sigma)||e.sigma<0)throw Error(`background.blur.sigma must be a non-negative number, got ${e.sigma}`);return e.sigma}if(`strength`in e){let t=e.strength;if(typeof t==`number`)return Vi*Math.max(0,Math.min(1,t));if(t===`low`)return zi;if(t===`medium`)return Bi;if(t===`high`)return Vi;throw Error(`background.blur.strength must be 'low' | 'medium' | 'high' | number, got ${Ji(t)}`)}throw Error(`background.blur: must be true, { strength }, or { sigma } \u2014 got ${Ji(e)}`)}async function Ki(e){if(e instanceof ImageBitmap)return e;if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement)return createImageBitmap(e);if(typeof e==`string`)return qi(e);if(e&&typeof e==`object`&&`data`in e&&`type`in e){let t=e.data instanceof Blob?e.data:new Blob([e.data],{type:e.type});return createImageBitmap(t)}throw Error(`background.image: unrecognized shape \u2014 ${Ji(e)}`)}async function qi(e){let t=await fetch(e);if(!t.ok)throw Error(`background: failed to load image from ${e} (HTTP ${t.status})`);let n=await t.blob();return createImageBitmap(n)}function Ji(e){return e===null?`null`:typeof e==`object`?`${e.constructor?.name??`Object`} ${JSON.stringify(e).slice(0,80)}`:typeof e+`(`+String(e)+`)`}function Yi(){return{input:`MediaStreamTrackProcessor`in self?`mstp`:`rvfc-postmessage`,output:`MediaStreamTrackGenerator`in self?`mstg`:Zi()?`transfer-capture`:`bitmap-shuttle`}}var Xi=null;function Zi(){return Xi!==null||(Xi=!/Firefox/.test(navigator.userAgent)),Xi}function Qi(e){return e===`denoise`?{mode:`denoise`,denoise:{}}:typeof e==`object`?{mode:`denoise`,denoise:e.denoise}:{mode:e}}function $i(e,t,n,r){let i=[e];return n.mode===`passthrough`?i.push(...t.getAudioTracks()):n.mode===`denoise`&&r&&i.push(r),new MediaStream(i)}var ea={rnnoise:{wasm:`rnnoise.wasm`,weights:null,scaleIn:32768,scaleOut:30517578125e-15,needsSimd:!1,exports:{malloc:`malloc`,create:`rn_create`,process:`rn_process`}},dfn:{wasm:`dfn.wasm`,weights:`dfn_weights.pack`,scaleIn:1,scaleOut:1,needsSimd:!0,exports:{malloc:`df_lite_malloc`,create:`df_lite_create`,process:`df_lite_process`,setBeta:`df_lite_set_beta`,setGruLeak:`df_lite_set_gru_leak`}},dfnint8:{wasm:`dfn.wasm`,weights:`dfn_weights_int8.pack`,scaleIn:1,scaleOut:1,needsSimd:!0,exports:{malloc:`df_lite_malloc`,create:`df_lite_create_i8`,process:`df_lite_process`,setBeta:`df_lite_set_beta`,setGruLeak:`df_lite_set_gru_leak`}}},ta={high:`dfn`,mid:`dfnint8`,low:`rnnoise`},na=[`high`,`mid`,`low`];function ra(e){return na.includes(e)}function ia(e){return ra(e)?ta[e]:e}function aa(e,t){return`${e.replace(/\/$/,``)}/${t}`}async function oa(e){let t=await fetch(e);if(!t.ok)throw Error(`audio asset fetch failed: ${t.status} ${e}`);return t.arrayBuffer()}async function sa(e,t){let n=ea[e],[r,i]=await Promise.all([oa(aa(t,n.wasm)),n.weights?oa(aa(t,n.weights)):Promise.resolve(null)]);return{wasmBytes:r,weights:i}}function ca(){try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,22,1,20,0,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11]))}catch{return!1}}var la=1.3,ua=64,da=3,fa=`
self.onmessage = async (e) => {
  const { wasmUrl, iters, rounds, budget } = e.data
  try {
    const res = await fetch(wasmUrl)
    if (!res.ok) throw new Error(res.status + ' ' + wasmUrl)
    const module = await WebAssembly.compile(await res.arrayBuffer())
    const imports = {}
    for (const im of WebAssembly.Module.imports(module)) {
      ;(imports[im.module] = imports[im.module] || {})
      if (im.kind === 'function') imports[im.module][im.name] = () => 0
    }
    const ex = new WebAssembly.Instance(module, imports).exports
    const best = (fn) => {
      fn(iters)                                   // warm up
      let b = Infinity
      for (let r = 0; r < rounds; r++) {
        const t = performance.now()
        fn(iters)
        b = Math.min(b, (performance.now() - t) / iters)
      }
      return b
    }
    const dfnMs = best(ex.calibrate_f32)
    const int8Ms = ex.calibrate_i8 ? best(ex.calibrate_i8) : Infinity
    const model = dfnMs <= budget ? 'dfn' : int8Ms <= budget ? 'dfnint8' : 'rnnoise'
    self.postMessage({ model, dfnMs, int8Ms })
  } catch (err) {
    self.postMessage({ error: (err && err.message) || String(err) })
  }
}
`;async function pa(e,t){if(!ca())return`rnnoise`;let n=`${e.replace(/\/$/,``)}/${ea.dfn.wasm}`,r=null,i=null;try{r=URL.createObjectURL(new Blob([fa],{type:`application/javascript`})),i=new Worker(r);let e=await new Promise((e,t)=>{i.onmessage=t=>e(t.data),i.onerror=e=>t(Error(e.message||`probe worker error`)),i.postMessage({wasmUrl:n,iters:ua,rounds:da,budget:la})});if(e.error)throw Error(e.error);return e.model??`rnnoise`}catch(e){return t?.(`audio tier probe failed (${e.message??String(e)}); using rnnoise`),`rnnoise`}finally{i?.terminate(),r&&URL.revokeObjectURL(r)}}var ma='var b=Object.defineProperty;var y=(u,a,i)=>a in u?b(u,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[a]=i;var r=(u,a,i)=>y(u,typeof a!="symbol"?a+"":a,i);var f={rnnoise:{wasm:"rnnoise.wasm",weights:null,scaleIn:32768,scaleOut:30517578125e-15,needsSimd:!1,exports:{malloc:"malloc",create:"rn_create",process:"rn_process"}},dfn:{wasm:"dfn.wasm",weights:"dfn_weights.pack",scaleIn:1,scaleOut:1,needsSimd:!0,exports:{malloc:"df_lite_malloc",create:"df_lite_create",process:"df_lite_process",setBeta:"df_lite_set_beta",setGruLeak:"df_lite_set_gru_leak"}},dfnint8:{wasm:"dfn.wasm",weights:"dfn_weights_int8.pack",scaleIn:1,scaleOut:1,needsSimd:!0,exports:{malloc:"df_lite_malloc",create:"df_lite_create_i8",process:"df_lite_process",setBeta:"df_lite_set_beta",setGruLeak:"df_lite_set_gru_leak"}}};var c=4096,m=class extends AudioWorkletProcessor{constructor(i){super();r(this,"cfg");r(this,"mem");r(this,"run");r(this,"state",0);r(this,"inPtr",0);r(this,"outPtr",0);r(this,"setBeta",null);r(this,"setGruLeak",null);r(this,"resample",!1);r(this,"rsPush",null);r(this,"inRs",0);r(this,"outRs",0);r(this,"rsDevInPtr",0);r(this,"rsOutPtr",0);r(this,"enabled");r(this,"model");r(this,"inAcc",new Float32Array(480));r(this,"inFill",0);r(this,"outRing",new Float32Array(4096));r(this,"outRead",0);r(this,"outWrite",0);r(this,"outCount",0);r(this,"primed",!1);r(this,"now");r(this,"times",new Float32Array(256));r(this,"tIdx",0);r(this,"hops",0);r(this,"_f32",null);let o=i.processorOptions;this.model=o.model,this.enabled=o.enabled,this.cfg=f[o.model];try{let t=this.instantiate(o.wasmBytes),e=n=>n?t[n]:void 0;this.mem=t.memory;let s=t[this.cfg.exports.malloc];if(this.run=t[this.cfg.exports.process],this.inPtr=s(480*4),this.outPtr=s(480*4),o.weights?this.state=t[this.cfg.exports.create](this.upload(s,o.weights),o.weights.byteLength):this.state=t[this.cfg.exports.create](),this.setBeta=e(this.cfg.exports.setBeta)??null,this.setGruLeak=e(this.cfg.exports.setGruLeak)??null,this.setBeta&&(o.postFilterBeta??0)>0&&this.setBeta(this.state,o.postFilterBeta),this.setGruLeak&&(o.gruLeak??1)<1&&this.setGruLeak(this.state,o.gruLeak),sampleRate!==48e3){let n=t.df_resampler_create;this.rsPush=t.df_resampler_push??null,n&&this.rsPush?(this.resample=!0,this.inRs=n(sampleRate,48e3),this.outRs=n(48e3,sampleRate),this.rsDevInPtr=s(256*4),this.rsOutPtr=s(c*4)):this.post({type:"error",message:`${o.model} can\'t resample ${sampleRate}\\u219248000 Hz; needs a 48 kHz AudioContext`})}}catch(t){let e=t;this.post({type:"error",message:`denoise init failed: ${e.message??String(t)}${e.stack?`\n`+e.stack:""}`})}this.now=typeof performance<"u"&&performance.now?()=>performance.now():null,this.port.onmessage=t=>{let e=t.data;e.type==="enabled"?this.enabled=e.value:e.type==="config"&&(this.setBeta&&e.postFilterBeta!=null&&this.setBeta(this.state,e.postFilterBeta),this.setGruLeak&&e.gruLeak!=null&&this.setGruLeak(this.state,e.gruLeak))},this.post({type:"ready"})}instantiate(i){var e;let o=new WebAssembly.Module(i),t={};for(let s of WebAssembly.Module.imports(o))t[e=s.module]??(t[e]={}),s.kind==="function"?t[s.module][s.name]=()=>0:s.kind==="memory"?t[s.module][s.name]=new WebAssembly.Memory({initial:256}):s.kind==="table"?t[s.module][s.name]=new WebAssembly.Table({initial:0,element:"anyfunc"}):s.kind==="global"&&(t[s.module][s.name]=new WebAssembly.Global({value:"i32",mutable:!1},0));return new WebAssembly.Instance(o,t).exports}upload(i,o){let t=new Uint8Array(o),e=i(t.length);return new Uint8Array(this.mem.buffer).set(t,e),e}heap(){return(!this._f32||this._f32.buffer!==this.mem.buffer)&&(this._f32=new Float32Array(this.mem.buffer)),this._f32}post(i){this.port.postMessage(i)}pushOut(i){this.outRing[this.outWrite]=i,this.outWrite=(this.outWrite+1)%this.outRing.length,this.outCount++}feed48k(i,o){for(let t=0;t<o;t++)this.inAcc[this.inFill++]=i[t],this.inFill===480&&(this.runHop(),this.inFill=0)}runHop(){let i=this.heap(),o=this.inPtr>>2;for(let e=0;e<480;e++)i[o+e]=this.inAcc[e]*this.cfg.scaleIn;let t=this.now?this.now():0;if(this.run(this.state,this.inPtr,this.outPtr),this.now&&(this.times[this.tIdx=this.tIdx+1&255]=this.now()-t),this.resample&&this.rsPush){let e=this.rsPush(this.outRs,this.outPtr,480,this.rsOutPtr,c);i=this.heap();let s=this.rsOutPtr>>2;for(let n=0;n<e;n++)this.pushOut(i[s+n])}else{let e=this.outPtr>>2;for(let s=0;s<480;s++)this.pushOut(i[e+s]*this.cfg.scaleOut)}++this.hops>=50&&(this.reportStats(),this.hops=0)}reportStats(){let i=Array.from(this.times).filter(e=>e>0).sort((e,s)=>e-s),o=e=>i.length?i[Math.min(i.length-1,Math.floor(e*i.length))]:null,t={model:this.model,p50Ms:this.now?o(.5):null,p95Ms:this.now?o(.95):null,latencyMs:this.outCount/sampleRate*1e3,active:this.enabled&&this.state!==0,sampleRate};this.post({type:"stats",stats:t})}process(i,o){let t=i[0]?.[0],e=o[0]?.[0];if(!e)return!0;let s=e.length;if(!t||!this.enabled||this.state===0)return t&&!this.enabled?e.set(t):e.fill(0),!0;if(this.resample&&this.rsPush){let n=this.heap(),g=this.rsDevInPtr>>2;for(let h=0;h<s;h++)n[g+h]=t[h];let d=this.rsPush(this.inRs,this.rsDevInPtr,s,this.rsOutPtr,c);n=this.heap(),this.feed48k(n.subarray(this.rsOutPtr>>2,(this.rsOutPtr>>2)+d),d)}else this.feed48k(t,s);if(!this.primed)if(this.outCount>=480)this.primed=!0;else return e.fill(0),!0;if(this.outCount>=s)for(let n=0;n<s;n++)e[n]=this.outRing[this.outRead],this.outRead=(this.outRead+1)%this.outRing.length,this.outCount--;else e.fill(0);return!0}};registerProcessor("denoise",m);\n',ha=.03,ga=.995,_a=class{constructor(e,t){this.opts=t,this.ctx=new AudioContext({sampleRate:48e3}),this.source=this.ctx.createMediaStreamSource(new MediaStream([e])),this.dest=this.ctx.createMediaStreamDestination(),this.outputTrack=this.dest.stream.getAudioTracks()[0],this.source.connect(this.dest),this.ready=this.init().catch(e=>{this.opts.onError?.(`audio denoise init failed: ${e.message??String(e)}`)})}opts;outputTrack;ready;ctx;source;dest;node=null;model=null;latestStats=null;destroyed=!1;resolveExplicit(){let e=ia(this.opts.model);return ea[e].needsSimd&&!ca()?(this.opts.onError?.(`${e} needs wasm SIMD; falling back to rnnoise`),`rnnoise`):e}async init(){let e=this.opts.model===`auto`?await pa(this.opts.weightsBaseUrl,this.opts.onError):this.resolveExplicit();this.model=e;let t=await sa(e,this.opts.weightsBaseUrl);if(await this.ctx.audioWorklet.addModule(va()),this.destroyed)return;let n={model:e,wasmBytes:t.wasmBytes,weights:t.weights,enabled:this.opts.enabled??!0,postFilterBeta:this.opts.postFilterBeta??ha,gruLeak:this.opts.gruLeak??ga},r=new AudioWorkletNode(this.ctx,`denoise`,{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[1],processorOptions:n});r.port.onmessage=e=>{let t=e.data;t.type===`stats`?this.latestStats=t.stats:t.type===`error`?this.opts.onError?.(t.message):t.type===`ready`&&this.opts.onReady?.()},this.node=r,this.source.disconnect(this.dest),this.source.connect(r).connect(this.dest)}setEnabled(e){this.node?.port.postMessage({type:`enabled`,value:e})}setConfig(e){this.node?.port.postMessage({type:`config`,...e})}getStats(){return this.latestStats}destroy(){this.destroyed=!0;try{this.node?.disconnect()}catch{}try{this.source.disconnect()}catch{}this.ctx.close()}};function va(){return URL.createObjectURL(new Blob([ma],{type:`application/javascript`}))}var ya=Oi(`worker_controller`),ba=class{worker;listeners=new Map;persistentEvents=new Set;constructor(e){this.worker=e,this.worker.addEventListener(`message`,this.handleMessage.bind(this)),ya(`constructed; message listener attached`)}handleMessage(e){let{request_id:t,res:n}=e.data,r=this.listeners.get(t);ya(`msg received: request_id=`,t,`handler?`,!!r,`persistent?`,this.persistentEvents.has(t)),r&&(r(n),this.persistentEvents.has(t)||this.listeners.delete(t))}addPersistentListener(e,t){this.persistentEvents.add(e),this.listeners.set(e,t),ya(`addPersistentListener:`,e)}removePersistentListener(e){this.persistentEvents.delete(e),this.listeners.delete(e)}sendMessage(e,t,n=[]){let r=crypto.randomUUID();return ya(`sendMessage:`,e,`request_id=`,r,`transferables=`,n.length),new Promise(i=>{this.listeners.set(r,e=>i(e));let a={cmd:e,data:t,request_id:r};this.worker.postMessage(a,n)})}terminate(){this.worker.terminate(),this.listeners.clear(),this.persistentEvents.clear()}},xa=Oi(`input-postmessage/main`);function Sa(e){let t=document.createElement(`video`);t.srcObject=e,t.muted=!0,t.autoplay=!0,t.playsInline=!0,t.play().catch(e=>{xa.warn(`video.play() rejected:`,e)});let n=t.requestVideoFrameCallback?.bind(t);if(!n)throw Error(`setupPostMessageInput: requestVideoFrameCallback not supported on this browser`);let r=new MessageChannel,i=r.port1,a=r.port2,o=!1,s=(e,r)=>{if(!o){try{let e=new VideoFrame(t,{timestamp:r.mediaTime*1e6});i.postMessage({frame:e},[e])}catch(e){xa.warn(`VideoFrame() failed; skipping frame:`,e)}n(s)}};return n(s),{port:a,transferList:[a],cleanup:()=>{o=!0,i.close(),t.srcObject=null,t.pause()}}}function Ca(e){let t=e.getVideoTracks();if(t.length===0)throw Error(`setupMstpInput: input MediaStream has no video tracks`);let n=t[0],r=self.MediaStreamTrackProcessor;if(!r)throw Error(`setupMstpInput: MediaStreamTrackProcessor not supported on this browser`);let i=new r({track:n}).readable;return{readable:i,transferList:[i],cleanup:()=>{i.cancel().catch(()=>{})}}}function wa(e,t){switch(e){case`mstp`:{let e=Ca(t);return{initFields:{inputReadable:e.readable},transferList:e.transferList,cleanup:e.cleanup}}case`rvfc-postmessage`:{let e=Sa(t);return{initFields:{inputPort:e.port},transferList:e.transferList,cleanup:e.cleanup}}}}var Ta=Oi(`bitmap-shuttle/main`),Ea=30;function Da(e,t=Ea){let n=document.createElement(`canvas`);n.width=e.w,n.height=e.h;let r=n.getContext(`bitmaprenderer`);if(!r)throw Error(`setupBitmapShuttleOutput: bitmaprenderer context not available`);let i=n.captureStream(t).getVideoTracks();if(i.length===0)throw Error(`setupBitmapShuttleOutput: captureStream produced no video tracks`);let a=i[0],o=new MessageChannel,s=o.port1,c=o.port2,l=!1,u=null,d=()=>{},f=0;return s.onmessage=e=>{if(l){if(f++,f<3){e.data.bmp.close();return}d()}try{r.transferFromImageBitmap(e.data.bmp)}catch(e){Ta.warn(`transferFromImageBitmap failed:`,e)}},s.start(),{videoTrack:a,port:c,transferList:[c],startPassthrough:e=>{if(l)return;l=!0;let t=document.createElement(`video`);t.srcObject=e,t.muted=!0,t.playsInline=!0,t.play().catch(()=>{}),u=t;let i=`requestVideoFrameCallback`in t?e=>{t.requestVideoFrameCallback(e)}:e=>{requestAnimationFrame(e)},a=()=>{if(l){if(t.videoWidth===0){i(a);return}createImageBitmap(t,{resizeWidth:n.width,resizeHeight:n.height,resizeQuality:`medium`}).then(e=>{if(!l){e.close();return}try{r.transferFromImageBitmap(e)}catch{}i(a)}).catch(()=>{i(a)})}};i(a),d=()=>{l=!1,u&&=(u.srcObject=null,u.pause(),null)}},cleanup:()=>{d(),s.onmessage=null,s.close(),a.stop()}}}function Oa(){let e=self.MediaStreamTrackGenerator;if(!e)throw Error(`setupMstgOutput: MediaStreamTrackGenerator not supported on this browser`);let t=new e({kind:`video`}),n=t.writable;return{videoTrack:t,writable:n,transferList:[n],cleanup:()=>{n.abort().catch(()=>{}),t.stop()}}}function ka(e,t=30){let n=document.createElement(`canvas`);n.width=e.w,n.height=e.h;let r=n.captureStream(t).getVideoTracks();if(r.length===0)throw Error(`setupTransferCaptureOutput: captureStream produced no video tracks`);let i=r[0],a=n.transferControlToOffscreen();return{videoTrack:i,canvas:a,transferList:[a],cleanup:()=>{i.stop()}}}function Aa(e,t){switch(e){case`mstg`:{let e=Oa();return{videoTrack:e.videoTrack,initFields:{outputWritable:e.writable},transferList:e.transferList,cleanup:e.cleanup}}case`transfer-capture`:{let e=ka(t);return{videoTrack:e.videoTrack,initFields:{outputCanvas:e.canvas},transferList:e.transferList,cleanup:e.cleanup}}case`bitmap-shuttle`:{let e=Da(t);return{videoTrack:e.videoTrack,initFields:{outputPort:e.port},transferList:e.transferList,startPassthrough:e.startPassthrough,cleanup:e.cleanup}}}}var ja=`var Fo=Object.defineProperty;var Eo=(u,t,r)=>t in u?Fo(u,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[t]=r;var a=(u,t,r)=>Eo(u,typeof t!="symbol"?t+"":t,r);var xt=!1;function Ct(u){xt=u}function S(u){let t=\`[longpipe/\${u}]\`,r=((...e)=>{xt&&console.log(t,...e)});return r.warn=(...e)=>{xt&&console.warn(t,...e)},r}var yt=[{model:"xs",dtype:"f16",resolution:{w:384,h:216},skipFrames:2},{model:"small",dtype:"f16",resolution:{w:384,h:216},skipFrames:1},{model:"medium",dtype:"f16",resolution:{w:512,h:288},skipFrames:1},{model:"large",dtype:"f32",resolution:{w:640,h:360},skipFrames:0},{model:"xl",dtype:"f32",resolution:{w:1280,h:720},skipFrames:0}],Do={fast:0,balanced:2,quality:4};function q(u){return u==="auto"?null:yt[Do[u]]}var K=class{constructor(t,r,e,i){a(this,"op");this.op=t.ops.BilinearUpsample(r,{outH:e,outW:i})}get output(){return this.op.output}run(){this.op.run()}};var Y=class{constructor(t,r,e,i){a(this,"op");this.op=t.ops.BicubicUpsample(r,{outH:e,outW:i})}get output(){return this.op.output}run(){this.op.run()}};var Q=class{constructor(t,r,e,i,o="main"){a(this,"presenter");this.presenter=t.presenters.CompositeSolid(r,e,i,o)}run(){this.presenter.run()}};var J=class{constructor(t,r,e,i,o="main"){a(this,"presenter");this.presenter=t.presenters.CompositeImage(r,e,i,o)}run(){this.presenter.run()}};var Z=class{constructor(t,r,e){a(this,"downs",[]);a(this,"ups",[]);let i=Oo(e),o=r;for(let n=0;n<i;n++){let s=t.ops.BilinearUpsample(o,{outH:Math.max(1,Math.floor(o.h/2)),outW:Math.max(1,Math.floor(o.w/2))});this.downs.push(s),o=s.output}for(let n=i-1;n>=1;n--){let s=this.downs[n-1].output,p=t.ops.BilinearUpsample(o,{outH:s.h,outW:s.w});this.ups.push(p),o=p.output}}get output(){return this.ups.length>0?this.ups[this.ups.length-1].output:this.downs[0].output}run(){for(let t of this.downs)t.run();for(let t of this.ups)t.run()}};function Oo(u){let t=Math.max(1,3*u);return Math.max(2,Math.min(6,Math.round(Math.log2(t))))}var Io=.05,ee=class{constructor(t,r,e,i,o="main"){a(this,"blur");a(this,"presenter");i<=Io?(this.blur=null,this.presenter=t.presenters.CompositeImage(r,e,r,o)):(this.blur=new Z(t,r,i),this.presenter=t.presenters.CompositeImageBilinear(r,e,this.blur.output,o))}run(){this.blur?.run(),this.presenter.run()}};var te=class{constructor(t){a(this,"backend",t);a(this,"displayInput");a(this,"image");a(this,"network",null);a(this,"networkInput",null);a(this,"upscaler",null);a(this,"upscalerMode","bilinear");a(this,"bgConfig",{mode:"solid",color:[0,0,0]});a(this,"compositors",new Map);let r=t.canvas;this.displayInput=t.ops.Input(r.height,r.width),this.image=this.displayInput.output}attachNetwork(t,r,e){this.network=t,this.networkInput=r,this.upscalerMode=e.upscaler,this.bgConfig=e.background,this.upscaler=this.makeUpscaler(),this.compositors.clear()}hasNetwork(){return this.network!==null}setSource(t){this.networkInput?.setSource(t),this.displayInput.setSource(t)}setUpscaler(t){t!==this.upscalerMode&&(this.upscalerMode=t,this.network&&(this.upscaler=this.makeUpscaler(),this.compositors.clear()))}setBackground(t){this.bgConfig=t}run(){this.runModel(),this.runDisplay()}runDisplay(){this.refreshDisplayInput(),this.compositeMain(!1)}runPassthrough(){this.refreshDisplayInput(),this.compositeMain(!0)}compositeMain(t){this.compositeTo("main",t?{mode:"passthrough"}:this.bgConfig)}refreshDisplayInput(){this.displayInput.run()}compositeTo(t,r){let e=this.compositors.get(t);if(e&&Ao(e.spec,r)){e.handle.run();return}let i=this.buildCompositor(t,r);this.compositors.set(t,{spec:r,handle:i}),i.run()}applyAlpha(t){if(!this.network||!this.upscaler)throw new Error("RenderOp.applyAlpha called before attachNetwork");this.backend.copyTensor(t,this.network.output),this.upscaler.run()}runModel(){if(!this.network||!this.networkInput||!this.upscaler)throw new Error("RenderOp.runModel called before attachNetwork");this.networkInput.run(),this.network.run(),this.upscaler.run()}makeUpscaler(){if(!this.network)throw new Error("makeUpscaler called with no network");let{backend:t,network:r,image:e}=this;return this.upscalerMode==="bicubic"?new Y(t,r.output,e.h,e.w):new K(t,r.output,e.h,e.w)}buildCompositor(t,r){let{backend:e,image:i}=this;if(r.mode==="passthrough")return e.presenters.CompositePassthrough(i,t);if(!this.upscaler)throw new Error("RenderOp.compositeTo (effect spec) called before attachNetwork");let o=this.upscaler.output;switch(r.mode){case"solid":return new Q(e,i,o,r.color,t);case"image":return new J(e,i,o,r.image,t);case"blur":return new ee(e,i,o,r.sigma,t)}}};function Ao(u,t){if(u.mode!==t.mode)return!1;switch(t.mode){case"passthrough":return!0;case"solid":{let r=u.color;return r[0]===t.color[0]&&r[1]===t.color[1]&&r[2]===t.color[2]}case"blur":return u.sigma===t.sigma;case"image":return u.image===t.image}}var Mo=u=>typeof u=="object"&&u!==null&&typeof u.offset=="number"&&typeof u.length=="number";function Wt(u){if(u.byteLength<4)throw new Error("weights buffer too small");let t=new DataView(u,0,4).getUint32(0,!0),r=4+t;if(u.byteLength<r)throw new Error("weights buffer truncated (header)");let e=new Uint8Array(u,4,t),i=JSON.parse(new TextDecoder().decode(e)),o=i.__dtype__??"f32",n=o==="f16"?2:4;if(r%n!==0)throw new Error(\`payload not \${n}-byte aligned (header=\${t})\`);let s=(u.byteLength-r)/n,p=l=>{if(Mo(l)){let{offset:c,length:d}=l;if(c+d>s)throw new Error(\`array ref out of range: offset=\${c} length=\${d}\`);let _=r+c*n;return o==="f16"?new Uint16Array(u,_,d):new Float32Array(u,_,d)}if(Array.isArray(l))return l.map(p);if(typeof l=="object"&&l!==null){let c={};for(let d of Object.keys(l))d!=="__dtype__"&&(c[d]=p(l[d]));return c}return l};return p(i)}function Pt(u,t,r,e){let i=e.variant,o=i==="E"||i==="D",n=i==="D",s=t.h,p=t.w,l=[],c=null,d=null,_=0,b=0,g;if(o)if(n){if(!r.down2)throw new Error("variant D requires w.down2");_=Math.round(s/1.25),b=Math.round(p/1.25);let v=u.ops.Conv2d(t,r.down1,{outChannels:e.cHigh,kernel:3,stride:1,padding:1,activation:"relu"});l.push(v),d=v.output;let x=u.ops.BilinearUpsample(d,{outH:_,outW:b});l.push(x),c=x.output;let k=u.ops.DownAdapter(c,r.down2,r.adapter,{stride:2});l.push(k),g=k.output}else{if(!r.down2)throw new Error("variant E requires w.down2");let v=u.ops.Conv2d(t,r.down1,{outChannels:e.cHigh,kernel:3,stride:2,padding:1,activation:"relu"});l.push(v),c=v.output,_=c.h,b=c.w;let x=u.ops.DownAdapter(c,r.down2,r.adapter,{stride:2});l.push(x),g=x.output}else{let v=i==="A"?2:3,x=u.ops.DownAdapter(t,r.down1,r.adapter,{stride:v});l.push(x),g=x.output}return{steps:l,adapted:g,d1:c,dFull:d,midH:_,midW:b}}function Gt(u,t,r,e,i,o,n,s,p){let l=p.variant,c=l==="E"||l==="D",d=l==="D",_=[],b=u.ops.ConvExpand(r,s.expandFeat);_.push(b);let g=b.output,v;if(c){if(!s.up1Combine)throw new Error("two-stage variant requires w.up1Combine");let k=u.ops.BilinearUpsample(g,{outH:o,outW:n});_.push(k);let B=u.ops.CatConv6to2(k.output,e,s.up1Combine);_.push(B);let U=u.ops.BilinearUpsample(B.output,{outH:t.h,outW:t.w});_.push(U),v=U.output}else{let k=u.ops.BilinearUpsample(g,{outH:t.h,outW:t.w});_.push(k),v=k.output}let x=d?u.ops.UpFinalSkip(v,i,t,s.upCombine):u.ops.UpFinal(v,t,s.upCombine);return _.push(x),{steps:_,alpha:x.output}}var re=class{constructor(t,r,e,i,o,n){a(this,"inputs");a(this,"output");a(this,"encoderTaps");a(this,"halfTap");a(this,"steps");this.inputs=[r];let s=Pt(t,r,i,o),p=new n(t,s.adapted,e),l=t.ops.BilinearUpsample(p.featLowRes,{outH:s.adapted.h,outW:s.adapted.w}),c=Gt(t,r,l.output,s.d1,s.dFull,s.midH,s.midW,i,o);this.steps=[...s.steps,p,l,...c.steps],this.output=c.alpha,this.encoderTaps=p.encoderTaps,this.halfTap=p.halfTap}run(){for(let t of this.steps)t.run()}};var Ro=[5,5,3,3],Ho=[2,2,1,1];function oe(u,t,r,e){if(t.h===r.h&&t.w===r.w)return t;let i=u.ops.Crop(t,{outH:r.h,outW:r.w});return e.push(i),i.output}var ie=class{constructor(t,r,e,i,o,n=16,s={}){a(this,"inputs");a(this,"output");a(this,"steps");this.inputs=[r,e,...i,...s.halfTap?[s.halfTap]:[]];let p=[],l=t.ops.ChannelConcat(r,e);p.push(l);let c=t.ops.Conv2d(l.output,o.stem,{outChannels:n,kernel:7,stride:2,padding:3,activation:"relu6"});p.push(c);let d=[],_=c.output;if(s.fuseStem&&s.halfTap){let x=oe(t,s.halfTap,c.output,p),k=t.ops.ChannelConcat(c.output,x);p.push(k),d.push(k.output),_=k.output}for(let x=0;x<i.length;x++){let k=t.ops.Conv2d(_,o.stages[x],{outChannels:n,kernel:Ro[x],stride:2,padding:Ho[x],activation:"relu6"});p.push(k);let B=oe(t,i[x],k.output,p),U=t.ops.ChannelConcat(k.output,B);p.push(U),d.push(U.output),_=U.output}let b=t.ops.Conv2d(d[d.length-1],o.predictBot,{outChannels:4,kernel:3,stride:1,padding:1,activation:"none"});p.push(b);let g=b.output,v=d[d.length-1];for(let x=0;x<d.length-1;x++){let k=d.length-2-x,B=t.ops.BilinearUpsample(v,{outH:v.h*2,outW:v.w*2}),U=t.ops.Conv2d(B.output,o.deconv[x],{outChannels:n,kernel:3,stride:1,padding:1,activation:"relu6"}),X=t.ops.BilinearUpsample(g,{outH:g.h*2,outW:g.w*2});p.push(B,U,X);let vt=oe(t,U.output,d[k],p),z=oe(t,X.output,d[k],p),j=t.ops.ChannelConcat(d[k],vt),D=t.ops.ChannelConcat(j.output,z);p.push(j,D);let V=t.ops.Conv2d(D.output,o.predict[x],{outChannels:4,kernel:3,stride:1,padding:1,activation:"none"});p.push(V),g=V.output,v=D.output}this.output=g,this.steps=p}run(){for(let t of this.steps)t.run()}};var L=class{constructor(t,r,e,i){a(this,"inputs");a(this,"output");a(this,"dwOp");a(this,"pwOp");this.inputs=[r],this.dwOp=t.ops.DepthwiseConv2d(r,e.dw,{kernel:i.kernel,stride:i.stride,padding:i.padding,activation:"relu6"}),this.pwOp=t.ops.Conv2d(this.dwOp.output,e.pw,{outChannels:i.outChannels,kernel:1,stride:1,padding:0,activation:"none"}),this.output=this.pwOp.output}run(){this.dwOp.run(),this.pwOp.run()}};var w=class{constructor(t,r,e,i){a(this,"inputs");a(this,"output");a(this,"expandOp");a(this,"dwOp");a(this,"projOp");this.inputs=[r];let o=i.midChannels!==i.inChannels,n=i.stride===1&&i.inChannels===i.outChannels;this.expandOp=o?t.ops.Conv2d(r,e.expand,{outChannels:i.midChannels,kernel:1,stride:1,padding:0,activation:"relu6"}):null;let s=this.expandOp?this.expandOp.output:r;this.dwOp=t.ops.DepthwiseConv2d(s,e.dw,{kernel:i.kernel,stride:i.stride,padding:i.padding,activation:"relu6"}),this.projOp=n?t.ops.ProjResidual(this.dwOp.output,r,e.proj,{outChannels:i.outChannels}):t.ops.Conv2d(this.dwOp.output,e.proj,{outChannels:i.outChannels,kernel:1,stride:1,padding:0,activation:"none"}),this.output=this.projOp.output}run(){this.expandOp?.run(),this.dwOp.run(),this.projOp.run()}};var G=class{constructor(t,r,e,i,o){a(this,"inputs");a(this,"output");a(this,"upOp");a(this,"concatConvOp");a(this,"conv2Op");this.inputs=[r,e],this.upOp=t.ops.BilinearUpsample(r,{outH:e.h,outW:e.w}),this.concatConvOp=t.ops.ConcatConv2d(this.upOp.output,e,i.conv1,{outChannels:o.outChannels}),this.conv2Op=t.ops.Conv2d(this.concatConvOp.output,i.conv2,{outChannels:o.outChannels,kernel:3,stride:1,padding:1,activation:"relu6"}),this.output=this.conv2Op.output}run(){this.upOp.run(),this.concatConvOp.run(),this.conv2Op.run()}};var ae=class{constructor(t,r,e){a(this,"output");a(this,"featLowRes");a(this,"encoderTaps");a(this,"halfTap");a(this,"stem");a(this,"s0");a(this,"s1b0");a(this,"s1b1");a(this,"s2b0");a(this,"s2b1");a(this,"s3b0");a(this,"s3b1");a(this,"s3b2");a(this,"s4b0");a(this,"s4b1");a(this,"s4b2");a(this,"bottleneck");a(this,"dec0");a(this,"dec1");a(this,"finalUp");a(this,"outConv");a(this,"alpha");this.stem=t.ops.Conv2d(r,e.encoder.stem,{outChannels:32,kernel:3,stride:2,padding:"same",activation:"relu6"}),this.s0=new L(t,this.stem.output,e.encoder.s0,{outChannels:16,kernel:3,stride:1,padding:1}),this.s1b0=new w(t,this.s0.output,e.encoder.s1[0],{inChannels:16,midChannels:96,outChannels:24,kernel:3,stride:2,padding:"same"}),this.s1b1=new w(t,this.s1b0.output,e.encoder.s1[1],{inChannels:24,midChannels:144,outChannels:24,kernel:3,stride:1,padding:1}),this.s2b0=new w(t,this.s1b1.output,e.encoder.s2[0],{inChannels:24,midChannels:144,outChannels:40,kernel:5,stride:2,padding:"same"}),this.s2b1=new w(t,this.s2b0.output,e.encoder.s2[1],{inChannels:40,midChannels:240,outChannels:40,kernel:5,stride:1,padding:2}),this.s3b0=new w(t,this.s2b1.output,e.encoder.s3[0],{inChannels:40,midChannels:240,outChannels:80,kernel:3,stride:2,padding:"same"}),this.s3b1=new w(t,this.s3b0.output,e.encoder.s3[1],{inChannels:80,midChannels:480,outChannels:80,kernel:3,stride:1,padding:1}),this.s3b2=new w(t,this.s3b1.output,e.encoder.s3[2],{inChannels:80,midChannels:480,outChannels:80,kernel:3,stride:1,padding:1}),this.s4b0=new w(t,this.s3b2.output,e.encoder.s4[0],{inChannels:80,midChannels:480,outChannels:112,kernel:5,stride:1,padding:2}),this.s4b1=new w(t,this.s4b0.output,e.encoder.s4[1],{inChannels:112,midChannels:672,outChannels:112,kernel:5,stride:1,padding:2}),this.s4b2=new w(t,this.s4b1.output,e.encoder.s4[2],{inChannels:112,midChannels:672,outChannels:112,kernel:5,stride:1,padding:2}),this.bottleneck=t.ops.Conv2d(this.s4b2.output,e.bottleneck,{outChannels:128,kernel:1,stride:1,padding:0,activation:"relu6"}),this.dec0=new G(t,this.bottleneck.output,this.s2b1.output,e.decoder.blocks[0],{outChannels:64}),this.dec1=new G(t,this.dec0.output,this.s1b1.output,e.decoder.blocks[1],{outChannels:32}),this.finalUp=t.ops.UpsampleConv1x1(this.dec1.output,e.decoder.finalUpsample,{outH:this.dec1.output.h*2,outW:this.dec1.output.w*2,outChannels:32,activation:"relu6"}),this.featLowRes=this.finalUp.output,this.encoderTaps=[this.s1b1.output,this.s2b1.output,this.s4b2.output],this.halfTap=this.s0.output,this.outConv=t.ops.Conv2d(this.finalUp.output,e.decoder.outputConv,{outChannels:4,kernel:1,stride:1,padding:0,activation:"none"}),this.alpha=t.ops.UpsampleSigmoid(this.outConv.output,{outH:this.outConv.output.h*2,outW:this.outConv.output.w*2}),this.output=this.alpha.output}run(){this.stem.run(),this.s0.run(),this.s1b0.run(),this.s1b1.run(),this.s2b0.run(),this.s2b1.run(),this.s3b0.run(),this.s3b1.run(),this.s3b2.run(),this.s4b0.run(),this.s4b1.run(),this.s4b2.run(),this.bottleneck.run(),this.dec0.run(),this.dec1.run(),this.finalUp.run(),this.outConv.run(),this.alpha.run()}};var ne=class{constructor(t,r,e){a(this,"output");a(this,"featLowRes");a(this,"encoderTaps");a(this,"stem");a(this,"s0");a(this,"s1b0");a(this,"s1b1");a(this,"s2b0");a(this,"s2b1");a(this,"s3b0");a(this,"s3b1");a(this,"s3b2");a(this,"s4b0");a(this,"s4b1");a(this,"s4b2");a(this,"s5b0");a(this,"s5b1");a(this,"s5b2");a(this,"s5b3");a(this,"s6b0");a(this,"bottleneck");a(this,"dec0");a(this,"dec1");a(this,"dec2");a(this,"finalUp");a(this,"outConv");a(this,"alpha");this.stem=t.ops.Conv2d(r,e.encoder.stem,{outChannels:32,kernel:3,stride:2,padding:"same",activation:"relu6"}),this.s0=new L(t,this.stem.output,e.encoder.s0,{outChannels:16,kernel:3,stride:1,padding:1}),this.s1b0=new w(t,this.s0.output,e.encoder.s1[0],{inChannels:16,midChannels:96,outChannels:24,kernel:3,stride:2,padding:"same"}),this.s1b1=new w(t,this.s1b0.output,e.encoder.s1[1],{inChannels:24,midChannels:144,outChannels:24,kernel:3,stride:1,padding:1}),this.s2b0=new w(t,this.s1b1.output,e.encoder.s2[0],{inChannels:24,midChannels:144,outChannels:40,kernel:5,stride:2,padding:"same"}),this.s2b1=new w(t,this.s2b0.output,e.encoder.s2[1],{inChannels:40,midChannels:240,outChannels:40,kernel:5,stride:1,padding:2}),this.s3b0=new w(t,this.s2b1.output,e.encoder.s3[0],{inChannels:40,midChannels:240,outChannels:80,kernel:3,stride:2,padding:"same"}),this.s3b1=new w(t,this.s3b0.output,e.encoder.s3[1],{inChannels:80,midChannels:480,outChannels:80,kernel:3,stride:1,padding:1}),this.s3b2=new w(t,this.s3b1.output,e.encoder.s3[2],{inChannels:80,midChannels:480,outChannels:80,kernel:3,stride:1,padding:1}),this.s4b0=new w(t,this.s3b2.output,e.encoder.s4[0],{inChannels:80,midChannels:480,outChannels:112,kernel:5,stride:1,padding:2}),this.s4b1=new w(t,this.s4b0.output,e.encoder.s4[1],{inChannels:112,midChannels:672,outChannels:112,kernel:5,stride:1,padding:2}),this.s4b2=new w(t,this.s4b1.output,e.encoder.s4[2],{inChannels:112,midChannels:672,outChannels:112,kernel:5,stride:1,padding:2}),this.s5b0=new w(t,this.s4b2.output,e.encoder.s5[0],{inChannels:112,midChannels:672,outChannels:192,kernel:5,stride:2,padding:"same"}),this.s5b1=new w(t,this.s5b0.output,e.encoder.s5[1],{inChannels:192,midChannels:1152,outChannels:192,kernel:5,stride:1,padding:2}),this.s5b2=new w(t,this.s5b1.output,e.encoder.s5[2],{inChannels:192,midChannels:1152,outChannels:192,kernel:5,stride:1,padding:2}),this.s5b3=new w(t,this.s5b2.output,e.encoder.s5[3],{inChannels:192,midChannels:1152,outChannels:192,kernel:5,stride:1,padding:2}),this.s6b0=new w(t,this.s5b3.output,e.encoder.s6[0],{inChannels:192,midChannels:1152,outChannels:320,kernel:3,stride:1,padding:1}),this.bottleneck=t.ops.Conv2d(this.s6b0.output,e.bottleneck,{outChannels:128,kernel:1,stride:1,padding:0,activation:"relu6"}),this.dec0=new G(t,this.bottleneck.output,this.s4b2.output,e.decoder.blocks[0],{outChannels:64}),this.dec1=new G(t,this.dec0.output,this.s2b1.output,e.decoder.blocks[1],{outChannels:32}),this.dec2=new G(t,this.dec1.output,this.s1b1.output,e.decoder.blocks[2],{outChannels:16}),this.finalUp=t.ops.UpsampleConv1x1(this.dec2.output,e.decoder.finalUpsample,{outH:this.dec2.output.h*2,outW:this.dec2.output.w*2,outChannels:16,activation:"relu6"}),this.featLowRes=this.finalUp.output,this.encoderTaps=[this.s1b1.output,this.s2b1.output,this.s4b2.output,this.s6b0.output],this.outConv=t.ops.Conv2d(this.finalUp.output,e.decoder.outputConv,{outChannels:4,kernel:1,stride:1,padding:0,activation:"none"}),this.alpha=t.ops.UpsampleSigmoid(this.outConv.output,{outH:this.outConv.output.h*2,outW:this.outConv.output.w*2}),this.output=this.alpha.output}run(){this.stem.run(),this.s0.run(),this.s1b0.run(),this.s1b1.run(),this.s2b0.run(),this.s2b1.run(),this.s3b0.run(),this.s3b1.run(),this.s3b2.run(),this.s4b0.run(),this.s4b1.run(),this.s4b2.run(),this.s5b0.run(),this.s5b1.run(),this.s5b2.run(),this.s5b3.run(),this.s6b0.run(),this.bottleneck.run(),this.dec0.run(),this.dec1.run(),this.dec2.run(),this.finalUp.run(),this.outConv.run(),this.alpha.run()}};var wt=[[{in:24,mid:144,out:32,k:3,s:2},{in:32,mid:192,out:32,k:3,s:1},{in:32,mid:192,out:32,k:3,s:1},{in:32,mid:192,out:32,k:3,s:1}],[{in:32,mid:192,out:56,k:5,s:2},{in:56,mid:336,out:56,k:5,s:1},{in:56,mid:336,out:56,k:5,s:1},{in:56,mid:336,out:56,k:5,s:1}],[{in:56,mid:336,out:112,k:3,s:2},{in:112,mid:672,out:112,k:3,s:1},{in:112,mid:672,out:112,k:3,s:1},{in:112,mid:672,out:112,k:3,s:1},{in:112,mid:672,out:112,k:3,s:1},{in:112,mid:672,out:112,k:3,s:1}],[{in:112,mid:672,out:160,k:5,s:1},{in:160,mid:960,out:160,k:5,s:1},{in:160,mid:960,out:160,k:5,s:1},{in:160,mid:960,out:160,k:5,s:1},{in:160,mid:960,out:160,k:5,s:1},{in:160,mid:960,out:160,k:5,s:1}],[{in:160,mid:960,out:272,k:5,s:2},{in:272,mid:1632,out:272,k:5,s:1},{in:272,mid:1632,out:272,k:5,s:1},{in:272,mid:1632,out:272,k:5,s:1},{in:272,mid:1632,out:272,k:5,s:1},{in:272,mid:1632,out:272,k:5,s:1},{in:272,mid:1632,out:272,k:5,s:1},{in:272,mid:1632,out:272,k:5,s:1}],[{in:272,mid:1632,out:448,k:3,s:1}]],se=class{constructor(t,r,e){a(this,"output");a(this,"featLowRes");a(this,"encoderTaps");a(this,"stem");a(this,"s0");a(this,"stages");a(this,"bottleneck");a(this,"dec0");a(this,"dec1");a(this,"dec2");a(this,"finalUp");a(this,"outConv");a(this,"alpha");this.stem=t.ops.Conv2d(r,e.encoder.stem,{outChannels:32,kernel:3,stride:2,padding:"same",activation:"relu6"}),this.s0=new L(t,this.stem.output,e.encoder.s0,{outChannels:24,kernel:3,stride:1,padding:1});let i=[e.encoder.s1,e.encoder.s2,e.encoder.s3,e.encoder.s4,e.encoder.s5,e.encoder.s6];this.stages=[];let o=this.s0.output;for(let d=0;d<wt.length;d++){let _=[];for(let b=0;b<wt[d].length;b++){let g=wt[d][b],v=new w(t,o,i[d][b],{inChannels:g.in,midChannels:g.mid,outChannels:g.out,kernel:g.k,stride:g.s,padding:g.s===2?"same":(g.k-1)/2});_.push(v),o=v.output}this.stages.push(_)}let n=d=>this.stages[d][this.stages[d].length-1].output,s=n(0),p=n(1),l=n(3),c=n(5);this.bottleneck=t.ops.Conv2d(c,e.bottleneck,{outChannels:256,kernel:1,stride:1,padding:0,activation:"relu6"}),this.dec0=new G(t,this.bottleneck.output,l,e.decoder.blocks[0],{outChannels:128}),this.dec1=new G(t,this.dec0.output,p,e.decoder.blocks[1],{outChannels:64}),this.dec2=new G(t,this.dec1.output,s,e.decoder.blocks[2],{outChannels:32}),this.finalUp=t.ops.UpsampleConv1x1(this.dec2.output,e.decoder.finalUpsample,{outH:this.dec2.output.h*2,outW:this.dec2.output.w*2,outChannels:32,activation:"relu6"}),this.featLowRes=this.finalUp.output,this.encoderTaps=[s,p,l,c],this.outConv=t.ops.Conv2d(this.finalUp.output,e.decoder.outputConv,{outChannels:4,kernel:1,stride:1,padding:0,activation:"none"}),this.alpha=t.ops.UpsampleSigmoid(this.outConv.output,{outH:this.outConv.output.h*2,outW:this.outConv.output.w*2}),this.output=this.alpha.output}run(){this.stem.run(),this.s0.run();for(let t of this.stages)for(let r of t)r.run();this.bottleneck.run(),this.dec0.run(),this.dec1.run(),this.dec2.run(),this.finalUp.run(),this.outConv.run(),this.alpha.run()}};var Bt=ae,Ut=ne,zo=se,O={xs:{base:Bt,wrapper:{variant:"B",cHigh:4,cLow:4,cUp:2},canvasRes:{w:384,h:216},baseRes:{w:128,h:72},flowFuseStem:!0},small:{base:Bt,wrapper:{variant:"A",cHigh:4,cLow:4,cUp:2},canvasRes:{w:384,h:216},baseRes:{w:192,h:108}},medium:{base:Ut,wrapper:{variant:"A",cHigh:4,cLow:4,cUp:2},canvasRes:{w:512,h:288},baseRes:{w:256,h:144}},large:{base:Ut,wrapper:{variant:"D",cHigh:4,cLow:4,cUp:2},canvasRes:{w:640,h:360},baseRes:{w:256,h:144}},xl:{base:zo,wrapper:{variant:"E",cHigh:4,cLow:4,cUp:2},canvasRes:{w:1280,h:720},baseRes:{w:320,h:180}}};var Vo=16,No={tLo:.15,tHi:2.5,leak:.15,release:.9,tDiv:1,divScale:2},$o=15,Xo=5,St=1e3,ue=class{constructor(t){a(this,"canvas");a(this,"backend");a(this,"backendKind");a(this,"topology");a(this,"preset",null);a(this,"enabled");a(this,"currentBackground");a(this,"modelTimingCounter",0);a(this,"renderOp");a(this,"flow",null);a(this,"bgImageInputs",new Map);a(this,"bgVideoInputs",new Map);a(this,"bgVideoPorts",new Map);a(this,"previewCanvas",null);a(this,"previewCtx",null);a(this,"previewBg",null);a(this,"previewEffectSpec",null);a(this,"previewIntervalMs",1e3/$o);a(this,"lastPreviewAt",0);a(this,"skipCounter",0);a(this,"framesRenderedAt",[]);a(this,"modelRunSamples",[]);a(this,"displayRunSamples",[]);a(this,"skippedCount",0);this.backend=t.backend,this.backendKind=t.backendKind,this.canvas=t.canvas,this.enabled=t.enabled,this.currentBackground=t.background,this.topology=t.topology,this.renderOp=new te(this.backend)}process(t){this.renderOp.setSource(t);let r=performance.now(),e=this.renderOp.hasNetwork(),i=this.enabled&&e&&this.currentBackground.kind!=="none",o=this.isPreviewTick(r),n=o&&e&&this.previewBg!==null&&this.previewBg.kind!=="none",s=!1;i&&this.flow?s=this.stepFlow():i&&(this.shouldRunModel()?(this.runModelOnce(),s=!0):this.skippedCount++),!s&&n&&(this.runModelOnce(),s=!0);let p=performance.now();o&&this.previewCanvas?(this.backendKind==="webgl"?this.compositePreviewWebGL(i,n):(this.compositeMain(i),this.renderOp.compositeTo("preview",this.previewSpec(n))),this.lastPreviewAt=r):this.compositeMain(i),this.displayRunSamples.push({ts:performance.now(),ms:performance.now()-p}),this.trimSamples(this.displayRunSamples),this.framesRenderedAt.push(performance.now()),this.trim(this.framesRenderedAt)}compositeMain(t){t?this.renderOp.runDisplay():this.renderOp.runPassthrough()}compositePreviewWebGL(t,r){this.renderOp.refreshDisplayInput(),this.renderOp.compositeTo("preview",this.previewSpec(r));let e=this.canvas.transferToImageBitmap();this.previewCtx.transferFromImageBitmap(e),this.renderOp.compositeMain(!t)}previewSpec(t){return t&&this.previewEffectSpec?this.previewEffectSpec:{mode:"passthrough"}}runModelOnce(){let t=performance.now();this.renderOp.runModel(),this.backendKind==="webgpu"&&this.modelTimingCounter%Xo===0&&this.backend.sync().then(()=>{this.modelRunSamples.push({ts:performance.now(),ms:performance.now()-t}),this.trimSamples(this.modelRunSamples)}).catch(()=>{}),this.modelTimingCounter++}stepFlow(){let t=this.flow,r=!1;return t.networkInput.run(),t.curBaseDown.run(),t.everyFrame?(t.net.run(),t.up.run(),this.runModelOnce(),r=!0,this.backend.copyTensor(t.curBaseDown.output,t.frameAHeld),this.backend.copyTensor(t.tier.output,t.predBuf)):this.shouldRunModel()?(this.runModelOnce(),r=!0,this.backend.copyTensor(t.curBaseDown.output,t.frameAHeld),this.backend.copyTensor(t.tier.output,t.alphaHeld),this.backend.copyTensor(t.tier.output,t.predBuf)):(this.skippedCount++,t.net.run(),t.up.run(),t.predWarp.run(),this.backend.copyTensor(t.predWarp.output,t.predBuf)),t.warm?(t.refWarp.run(),t.stab.run(),this.backend.copyTensor(t.stab.output,t.stabPrev),this.renderOp.applyAlpha(t.stab.output),r):(this.backend.copyTensor(t.tier.output,t.stabPrev),t.warm=r,r)}isPreviewTick(t){return!this.previewCanvas||this.previewBg===null||!this.enabled?!1:t-this.lastPreviewAt>=this.previewIntervalMs}shouldRunModel(){return this.skipCounter===0?(this.skipCounter=this.preset?.skipFrames??0,!0):(this.skipCounter--,!1)}setBackground(t){this.currentBackground=t,this.renderOp.setBackground(this.translateBackgroundFor("main",t))}setEnabled(t){this.enabled=t}attachPreview(t){if(t.width=this.canvas.width,t.height=this.canvas.height,this.previewCanvas=t,this.backendKind==="webgpu")this.backend.attachCanvas("preview",t);else{let r=t.getContext("bitmaprenderer");if(!r)throw new Error("renderer: failed to get bitmaprenderer context for preview canvas");this.previewCtx=r}}setPreview(t,r){this.previewBg=t,this.previewEffectSpec=t.kind==="none"?null:this.translateBackgroundFor("preview",t),r?.fps&&r.fps>0&&(this.previewIntervalMs=1e3/r.fps),this.lastPreviewAt=0}clearPreview(){this.previewBg=null,this.previewEffectSpec=null;let t=this.bgVideoPorts.get("preview");t&&(t.close(),this.bgVideoPorts.delete("preview"))}setPreset(t,r){let e=O[t.model];if(!e)throw new Error(\`renderer: no TIER_CONFIG entry for model '\${t.model}'\`);let i=Wt(r),o=this.backend.ops.Input(e.canvasRes.h,e.canvasRes.w),n=new re(this.backend,o.output,i.base,i.wrapper,e.wrapper,e.base);if(this.renderOp.attachNetwork(n,o,{upscaler:"bilinear",background:this.translateBackgroundFor("main",this.currentBackground)}),this.flow=null,i.flow){let s=e.baseRes,p=e.canvasRes,l=t.skipFrames===0,c=(D,V)=>this.backend.tensor(D,V,4,new Float32Array(D*V*4)),d=this.backend.ops.BilinearUpsample(o.output,{outH:s.h,outW:s.w}),_=c(s.h,s.w),b=new ie(this.backend,_,d.output,n.encoderTaps,i.flow,Vo,e.flowFuseStem?{fuseStem:!0,halfTap:n.halfTap}:{}),g=this.backend.ops.BilinearUpsample(b.output,{outH:p.h,outW:p.w}),v=p.w/s.w,x=c(p.h,p.w),k=c(p.h,p.w),B=this.backend.ops.Warp(k,g.output,{flowScale:v}),U=Math.max(1,Math.round(p.w/b.output.w)),X=Math.max(1,Math.round(p.h/b.output.h)),vt=this.backend.ops.Stabilize(g.output,x,B.output,k,{...No,stepX:U,stepY:X}),z=l?null:c(p.h,p.w),j=z?this.backend.ops.Warp(z,g.output,{flowScale:v}):null;this.flow={tier:n,everyFrame:l,warm:!1,networkInput:o,curBaseDown:d,frameAHeld:_,net:b,up:g,predBuf:x,stabPrev:k,refWarp:B,stab:vt,alphaHeld:z,predWarp:j}}this.preset=t,this.skipCounter=0}destroy(){for(let t of this.bgVideoPorts.values())t.close();this.bgVideoPorts.clear(),this.backend.destroy()}getStats(){let t=performance.now();return this.trimRecent(this.framesRenderedAt,t),this.trimSamplesAt(this.modelRunSamples,t),this.trimSamplesAt(this.displayRunSamples,t),{fps:this.framesRenderedAt.length,modelFps:this.modelRunSamples.length,modelMs:Lt(this.modelRunSamples.map(r=>r.ms)),displayMs:Lt(this.displayRunSamples.map(r=>r.ms)),skipped:this.skippedCount,preset:this.preset?.model??"boot",skipFrames:this.preset?.skipFrames??0,enabled:this.enabled,inputPath:this.topology.input,outputPath:this.topology.output}}translateBackgroundFor(t,r){let e=this.bgVideoPorts.get(t);switch(r.kind!=="video"&&e&&(e.close(),this.bgVideoPorts.delete(t)),r.kind){case"none":return{mode:"solid",color:[0,0,0]};case"color":return{mode:"solid",color:r.rgb};case"blur":return{mode:"blur",sigma:r.sigma};case"image":{let i=this.bgInputFor(this.bgImageInputs,t);return i.setSource(r.bitmap),i.run(),{mode:"image",image:i.output}}case"video":{let i=this.bgInputFor(this.bgVideoInputs,t);return e&&e.close(),this.bgVideoPorts.set(t,r.port),r.port.onmessage=o=>{let n=o.data.frame;try{i.setSource(n),i.run()}finally{n.close()}},r.port.start?.(),{mode:"image",image:i.output}}}}bgInputFor(t,r){let e=t.get(r);return e||(e=this.backend.ops.Input(this.canvas.height,this.canvas.width),t.set(r,e)),e}trim(t){t.length>240&&t.splice(0,t.length-240)}trimSamples(t){t.length>240&&t.splice(0,t.length-240)}trimRecent(t,r){let e=r-St,i=0;for(;i<t.length&&t[i]<e;)i++;i>0&&t.splice(0,i)}trimSamplesAt(t,r){let e=r-St,i=0;for(;i<t.length&&t[i].ts<e;)i++;i>0&&t.splice(0,i)}};function Lt(u){if(u.length===0)return 0;let t=u.slice().sort((e,i)=>e-i),r=t.length>>1;return t.length%2?t[r]:(t[r-1]+t[r])/2}var I=new Float32Array(1),N=new Uint32Array(I.buffer);function jo(u){I[0]=u;let t=N[0],r=t>>>16&32768,e=t&2147483647,i=(e>>>23)-127+15;if((t&2139095040)===2139095040)return(t&8388607)!==0?r|32256:r|31744;if(i>=31)return r|31744;if(i<=0){if(i<-10)return r;let l=e&8388607|8388608,c=14-i,d=l>>>c,_=l>>>c-1&1,b=(l&(1<<c-1)-1)!==0?1:0;return _&&(b||d&1)&&(d+=1),r|d}let o=e>>>13&1023,n=e>>>12&1,s=(e&4095)!==0?1:0,p=i<<10|o;return n&&(s||o&1)&&(p+=1,(p>>>10&31)===31)?r|31744:r|p}function kt(u){let t=(u&32768)<<16,r=(u&31744)>>>10,e=u&1023;if(r===0){if(e===0)return N[0]=t,I[0];let i=e,o=1;for(;(i&1024)===0;)i<<=1,o-=1;return i&=1023,N[0]=t|o+127-15<<23|i<<13,I[0]}return r===31?(N[0]=t|2139095040|e<<13,I[0]):(N[0]=t|r+127-15<<23|e<<13,I[0])}function pe(u){let t=new Uint16Array(u.length);for(let r=0;r<u.length;r++)t[r]=jo(u[r]);return t}function A(u){let t=new Float32Array(u.length);for(let r=0;r<u.length;r++)t[r]=kt(u[r]);return t}var f=class{constructor(t){a(this,"backend",t);a(this,"shader","");a(this,"pipeline");a(this,"bindGroup");a(this,"uniformDefs",[]);a(this,"uniformBuffers",{})}createUniform(t,r){this.uniformDefs.push({name:t,type:r})}setUniform(t,r){let e=this.backend.device.createBuffer({size:r.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});r instanceof Uint32Array?new Uint32Array(e.getMappedRange()).set(r):new Float32Array(e.getMappedRange()).set(r),e.unmap(),this.uniformBuffers[t]=e}defaultBindGroup(){let t=[],r=0;for(let e of this.inputs)t.push({binding:r++,resource:{buffer:e.buffer}});for(let e of this.weights)t.push({binding:r++,resource:{buffer:e.buffer}});for(let e of this.uniformDefs)t.push({binding:r++,resource:{buffer:this.uniformBuffers[e.name]}});return t.push({binding:r,resource:{buffer:this.output.buffer}}),this.backend.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:t})}defaultSetup(){let t=this.backend.device.createShaderModule({code:this.shader});this.pipeline=this.backend.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}),this.bindGroup=this.defaultBindGroup()}run(){let t=this.backend.device.createCommandEncoder(),r=t.beginComputePass();r.setPipeline(this.pipeline),r.setBindGroup(0,this.bindGroup),r.dispatchWorkgroups(...this.dispatch),r.end(),this.backend.device.queue.submit([t.finish()])}};var Ft=\`// Conv2d, output-channel-blocked (K=2) \\u2014 drop-in replacement for conv2d.wgsl.
//
// Identical math, layout, and output to conv2d.wgsl, but each thread computes 2
// output channel-groups (8 channels) for one pixel, loading each input vec4 ONCE
// and reusing it across both groups' mat4x4 weight blocks in registers. Half the
// register pressure of the K=4 variant (2 accumulators vs 4). Output is bit-
// identical to conv2d.wgsl (\\u22641 ULP from FMA contraction). Dispatch
// ceil(out_groups / 2) in z (see conv2d.ts).
//
// Tensor layout: NHWC, channels in vec4 groups (same as conv2d.wgsl).
// Weight layout: [K*K][out_groups][in_groups] array of mat4x4 (same as conv2d.wgsl).

struct Params {
    in_h        : u32,
    in_w        : u32,
    out_h       : u32,
    out_w       : u32,
    in_groups   : u32,   // in_channels / 4
    out_groups  : u32,   // out_channels / 4
    kernel_h    : u32,
    kernel_w    : u32,
    stride      : u32,
    pad_top     : u32,
    pad_left    : u32,
    activation  : u32,   // 0 = none, 1 = relu6, 2 = relu, 3 = leaky
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       weight_buf : array<mat4x4<f32>>;
@group(0) @binding(2) var<storage, read>       bias_buf   : array<vec4<f32>>;
@group(0) @binding(3) var<uniform>             params     : Params;
@group(0) @binding(4) var<storage, read_write> output_buf : array<vec4<f32>>;

const KB = 2u;

fn act(v: vec4<f32>, a: u32) -> vec4<f32> {
    if (a == 1u) { return clamp(v, vec4<f32>(0.0), vec4<f32>(6.0)); }
    if (a == 2u) { return max(v, vec4<f32>(0.0)); }
    if (a == 3u) { return max(v, 0.1 * v); }   // leaky relu (slope 0.1)
    return v;
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x  = gid.x;       // output column
    let y  = gid.y;       // output row
    let o0 = gid.z * KB;  // first output channel group

    if (x >= params.out_w || y >= params.out_h || o0 >= params.out_groups) {
        return;
    }

    let I = params.in_groups;
    let O = params.out_groups;
    // Tail handling when out_groups is odd: clamp the spare lane to o0 (valid
    // index, no OOB) and just don't write it.
    let has1 = (o0 + 1u) < O;
    let o1 = select(o0, o0 + 1u, has1);

    var acc0 = bias_buf[o0];
    var acc1 = bias_buf[o1];

    for (var ky = 0u; ky < params.kernel_h; ky++) {
        for (var kx = 0u; kx < params.kernel_w; kx++) {
            let in_y_s = i32(y * params.stride + ky) - i32(params.pad_top);
            let in_x_s = i32(x * params.stride + kx) - i32(params.pad_left);

            if (in_y_s < 0 || in_x_s < 0 ||
                u32(in_y_s) >= params.in_h || u32(in_x_s) >= params.in_w) {
                continue;
            }

            let z   = ky * params.kernel_w + kx;
            let inB = u32(in_y_s) * params.in_w * I + u32(in_x_s) * I;
            let wb0 = z * O * I + o0 * I;
            let wb1 = z * O * I + o1 * I;
            for (var i = 0u; i < I; i++) {
                let iv = input_buf[inB + i];   // loaded ONCE, reused across 2 groups
                acc0 += weight_buf[wb0 + i] * iv;
                acc1 += weight_buf[wb1 + i] * iv;
            }
        }
    }

    let baseO = y * params.out_w * O + x * O;
    output_buf[baseO + o0] = act(acc0, params.activation);
    if (has1) { output_buf[baseO + o1] = act(acc1, params.activation); }
}
\`;var Et=\`enable f16;

// Conv2d, output-channel-blocked (K=2) \\u2014 full f16. Drop-in replacement for
// conv2d_f16.wgsl. Each thread computes 2 output channel-groups for one pixel,
// loading each input vec4 ONCE and reusing it across both weight blocks. Half the
// register pressure of the K=4 variant (2 accumulators vs 4). Output is bit-
// identical to conv2d_f16.wgsl. Dispatch ceil(out_groups / 2) in z.

struct Params {
    in_h        : u32,
    in_w        : u32,
    out_h       : u32,
    out_w       : u32,
    in_groups   : u32,
    out_groups  : u32,
    kernel_h    : u32,
    kernel_w    : u32,
    stride      : u32,
    pad_top     : u32,
    pad_left    : u32,
    activation  : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       weight_buf : array<mat4x4<f16>>;
@group(0) @binding(2) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(3) var<uniform>             params     : Params;
@group(0) @binding(4) var<storage, read_write> output_buf : array<vec4<f16>>;

const KB = 2u;

fn act(v: vec4<f16>, a: u32) -> vec4<f16> {
    if (a == 1u) { return clamp(v, vec4<f16>(0.0h), vec4<f16>(6.0h)); }
    if (a == 2u) { return max(v, vec4<f16>(0.0h)); }
    if (a == 3u) { return max(v, 0.1h * v); }   // leaky relu (slope 0.1)
    return v;
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x  = gid.x;
    let y  = gid.y;
    let o0 = gid.z * KB;

    if (x >= params.out_w || y >= params.out_h || o0 >= params.out_groups) {
        return;
    }

    let I = params.in_groups;
    let O = params.out_groups;
    let has1 = (o0 + 1u) < O;
    let o1 = select(o0, o0 + 1u, has1);

    var acc0 = bias_buf[o0];
    var acc1 = bias_buf[o1];

    for (var ky = 0u; ky < params.kernel_h; ky++) {
        for (var kx = 0u; kx < params.kernel_w; kx++) {
            let in_y_s = i32(y * params.stride + ky) - i32(params.pad_top);
            let in_x_s = i32(x * params.stride + kx) - i32(params.pad_left);

            if (in_y_s < 0 || in_x_s < 0 ||
                u32(in_y_s) >= params.in_h || u32(in_x_s) >= params.in_w) {
                continue;
            }

            let z   = ky * params.kernel_w + kx;
            let inB = u32(in_y_s) * params.in_w * I + u32(in_x_s) * I;
            let wb0 = z * O * I + o0 * I;
            let wb1 = z * O * I + o1 * I;
            for (var i = 0u; i < I; i++) {
                let iv = input_buf[inB + i];   // loaded ONCE, reused across 2 groups
                acc0 += weight_buf[wb0 + i] * iv;
                acc1 += weight_buf[wb1 + i] * iv;
            }
        }
    }

    let baseO = y * params.out_w * O + x * O;
    output_buf[baseO + o0] = act(acc0, params.activation);
    if (has1) { output_buf[baseO + o1] = act(acc1, params.activation); }
}
\`;function T(u,t,r,e){return typeof e=="number"?Math.floor((u+2*e-t)/r)+1:e==="same"?Math.ceil(u/r):Math.floor((u-t)/r)+1}function M(u,t,r,e){return(u-1)*r-2*e+t}function Yo(u,t,r,e){return Math.floor(Math.max((t-1)*e+r-u,0)/2)}function C(u,t,r,e,i){return typeof u=="number"?u:u==="same"?Yo(t,r,e,i):0}function m(u){return u instanceof Float32Array||u instanceof Uint16Array?u:new Float32Array(u)}function y(u){let t=Math.max(4,Math.ceil(u.length/4)*4),r=new Float32Array(t),e=u instanceof Uint16Array;for(let i=0;i<u.length;i++)r[i]=e?kt(u[i]):u[i];return r}var le=class extends f{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Et:Ft;let n=T(e.h,o.kernel,o.stride,o.padding),s=T(e.w,o.kernel,o.stride,o.padding),p=e.c/4,l=o.outChannels/4,c=C(o.padding,e.h,n,o.kernel,o.stride),d=C(o.padding,e.w,s,o.kernel,o.stride);this.output=r.tensor(n,s,o.outChannels),this.inputs=[e],this.weights=[r.upload(m(i.weights)),r.upload(m(i.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,n,s,p,l,o.kernel,o.kernel,o.stride,c,d,o.activation==="relu6"?1:o.activation==="relu"?2:o.activation==="leaky"?3:0])),this.defaultSetup(),this.dispatch=[Math.ceil(s/8),Math.ceil(n/8),Math.ceil(l/2)]}};var Dt=\`// ConvTranspose2d \\u2014 gather form, f32 variant. See conv_transpose2d_f16.wgsl for
// the math; this is the f32 storage build (mat4x4<f32>).

struct Params {
    in_h       : u32,
    in_w       : u32,
    out_h      : u32,
    out_w      : u32,
    in_groups  : u32,
    out_groups : u32,
    kernel_h   : u32,
    kernel_w   : u32,
    stride     : u32,
    pad_top    : u32,
    pad_left   : u32,
    activation : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       weight_buf : array<mat4x4<f32>>;
@group(0) @binding(2) var<storage, read>       bias_buf   : array<vec4<f32>>;
@group(0) @binding(3) var<uniform>             params     : Params;
@group(0) @binding(4) var<storage, read_write> output_buf : array<vec4<f32>>;

fn act(v: vec4<f32>, a: u32) -> vec4<f32> {
    if (a == 1u) { return clamp(v, vec4<f32>(0.0), vec4<f32>(6.0)); }
    if (a == 2u) { return max(v, vec4<f32>(0.0)); }
    if (a == 3u) { return max(v, 0.1 * v); }
    return v;
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let o  = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || o >= params.out_groups) {
        return;
    }

    let I = params.in_groups;
    let O = params.out_groups;
    let s = i32(params.stride);

    var result = bias_buf[o];

    for (var ky = 0u; ky < params.kernel_h; ky++) {
        for (var kx = 0u; kx < params.kernel_w; kx++) {
            let iy_num = i32(oy) + i32(params.pad_top)  - i32(ky);
            let ix_num = i32(ox) + i32(params.pad_left) - i32(kx);
            if (iy_num < 0 || ix_num < 0 || (iy_num % s) != 0 || (ix_num % s) != 0) {
                continue;
            }
            let iy = iy_num / s;
            let ix = ix_num / s;
            if (iy >= i32(params.in_h) || ix >= i32(params.in_w)) {
                continue;
            }

            let z = ky * params.kernel_w + kx;
            for (var i = 0u; i < I; i++) {
                let in_idx = u32(iy) * params.in_w * I + u32(ix) * I + i;
                let w_idx  = z * O * I + o * I + i;
                result += weight_buf[w_idx] * input_buf[in_idx];
            }
        }
    }

    output_buf[oy * params.out_w * O + ox * O + o] = act(result, params.activation);
}
\`;var Ot=\`enable f16;

// ConvTranspose2d \\u2014 gather form, full f16 variant.
// Each output (oy,ox) sums every input pixel + kernel tap that maps onto it:
//   iy = (oy + pad - ky) / stride   (must divide evenly and be in bounds)
// No explicit kernel flip \\u2014 the (oy + pad - ky) indexing carries it.
// Weight layout is IDENTICAL to conv2d (mat4x4[z][o][i], M[in_sub][out_sub] =
// W(in, out, ky, kx)), so the op uploads the flat buffer unchanged.

struct Params {
    in_h       : u32,
    in_w       : u32,
    out_h      : u32,
    out_w      : u32,
    in_groups  : u32,
    out_groups : u32,
    kernel_h   : u32,
    kernel_w   : u32,
    stride     : u32,
    pad_top    : u32,
    pad_left   : u32,
    activation : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       weight_buf : array<mat4x4<f16>>;
@group(0) @binding(2) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(3) var<uniform>             params     : Params;
@group(0) @binding(4) var<storage, read_write> output_buf : array<vec4<f16>>;

fn act(v: vec4<f16>, a: u32) -> vec4<f16> {
    if (a == 1u) { return clamp(v, vec4<f16>(0.0h), vec4<f16>(6.0h)); }
    if (a == 2u) { return max(v, vec4<f16>(0.0h)); }
    if (a == 3u) { return max(v, 0.1h * v); }
    return v;
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let o  = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || o >= params.out_groups) {
        return;
    }

    let I = params.in_groups;
    let O = params.out_groups;
    let s = i32(params.stride);

    var result = bias_buf[o];

    for (var ky = 0u; ky < params.kernel_h; ky++) {
        for (var kx = 0u; kx < params.kernel_w; kx++) {
            let iy_num = i32(oy) + i32(params.pad_top)  - i32(ky);
            let ix_num = i32(ox) + i32(params.pad_left) - i32(kx);
            if (iy_num < 0 || ix_num < 0 || (iy_num % s) != 0 || (ix_num % s) != 0) {
                continue;
            }
            let iy = iy_num / s;
            let ix = ix_num / s;
            if (iy >= i32(params.in_h) || ix >= i32(params.in_w)) {
                continue;
            }

            let z = ky * params.kernel_w + kx;
            for (var i = 0u; i < I; i++) {
                let in_idx = u32(iy) * params.in_w * I + u32(ix) * I + i;
                let w_idx  = z * O * I + o * I + i;
                result += weight_buf[w_idx] * input_buf[in_idx];
            }
        }
    }

    output_buf[oy * params.out_w * O + ox * O + o] = act(result, params.activation);
}
\`;var ce=class extends f{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Ot:Dt;let n=M(e.h,o.kernel,o.stride,o.padding),s=M(e.w,o.kernel,o.stride,o.padding),p=e.c/4,l=o.outChannels/4;this.output=r.tensor(n,s,o.outChannels),this.inputs=[e],this.weights=[r.upload(m(i.weights)),r.upload(m(i.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,n,s,p,l,o.kernel,o.kernel,o.stride,o.padding,o.padding,o.activation==="relu6"?1:o.activation==="relu"?2:o.activation==="leaky"?3:0])),this.defaultSetup(),this.dispatch=[Math.ceil(s/8),Math.ceil(n/8),l]}};var It=\`// Depthwise Conv2d \\u2014 groups = in_channels (each channel convolved independently).
//
// Weight layout: [K*K][channel_groups] array of vec4
//   weight index = (ky*kernel_w + kx) * channel_groups + c
//   Each vec4 holds the kernel weight for 4 consecutive channels at one spatial position.
//   Operation: element-wise multiply (each input channel multiplied by its own weight).
//
// Contrast with conv2d.wgsl which uses mat4x4 (dense cross-channel mixing).
// 4\\xD7 smaller weight buffer than a diagonal mat4x4 representation (4 floats vs 16 per group).
//
// Padding model: only \\\`pad_top\\\` and \\\`pad_left\\\` are applied to the input offset.
// Asymmetric SAME padding is handled implicitly via the in_h/in_w bounds check.

struct Params {
    in_h           : u32,
    in_w           : u32,
    out_h          : u32,
    out_w          : u32,
    channel_groups : u32,   // channels / 4
    kernel_h       : u32,
    kernel_w       : u32,
    stride         : u32,
    pad_top        : u32,
    pad_left       : u32,
    apply_relu6    : u32,
    _pad0          : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       weight_buf : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read>       bias_buf   : array<vec4<f32>>;
@group(0) @binding(3) var<uniform>             params     : Params;
@group(0) @binding(4) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;  // output column
    let y = gid.y;  // output row
    let c = gid.z;  // channel group

    if (x >= params.out_w || y >= params.out_h || c >= params.channel_groups) {
        return;
    }

    let C = params.channel_groups;

    var result = bias_buf[c];

    for (var ky = 0u; ky < params.kernel_h; ky++) {
        for (var kx = 0u; kx < params.kernel_w; kx++) {
            let in_y_s = i32(y * params.stride + ky) - i32(params.pad_top);
            let in_x_s = i32(x * params.stride + kx) - i32(params.pad_left);

            if (in_y_s < 0 || in_x_s < 0 ||
                u32(in_y_s) >= params.in_h || u32(in_x_s) >= params.in_w) {
                continue;
            }

            let in_y = u32(in_y_s);
            let in_x = u32(in_x_s);
            let z    = ky * params.kernel_w + kx;

            let in_idx = in_y * params.in_w * C + in_x * C + c;
            let w_idx  = z * C + c;
            result += weight_buf[w_idx] * input_buf[in_idx];
        }
    }

    if (params.apply_relu6 == 1u) {
        result = clamp(result, vec4<f32>(0.0), vec4<f32>(6.0));
    }

    let out_idx = y * params.out_w * C + x * C + c;
    output_buf[out_idx] = result;
}
\`;var At=\`enable f16;

// Depthwise conv2d \\u2014 full f16 variant. All buffers f16.

struct Params {
    in_h           : u32,
    in_w           : u32,
    out_h          : u32,
    out_w          : u32,
    channel_groups : u32,
    kernel_h       : u32,
    kernel_w       : u32,
    stride         : u32,
    pad_top        : u32,
    pad_left       : u32,
    apply_relu6    : u32,
    _pad0          : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       weight_buf : array<vec4<f16>>;
@group(0) @binding(2) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(3) var<uniform>             params     : Params;
@group(0) @binding(4) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let c = gid.z;

    if (x >= params.out_w || y >= params.out_h || c >= params.channel_groups) {
        return;
    }

    let C = params.channel_groups;

    var result = bias_buf[c];

    for (var ky = 0u; ky < params.kernel_h; ky++) {
        for (var kx = 0u; kx < params.kernel_w; kx++) {
            let in_y_s = i32(y * params.stride + ky) - i32(params.pad_top);
            let in_x_s = i32(x * params.stride + kx) - i32(params.pad_left);

            if (in_y_s < 0 || in_x_s < 0 ||
                u32(in_y_s) >= params.in_h || u32(in_x_s) >= params.in_w) {
                continue;
            }

            let in_y = u32(in_y_s);
            let in_x = u32(in_x_s);
            let z    = ky * params.kernel_w + kx;

            let in_idx = in_y * params.in_w * C + in_x * C + c;
            let w_idx  = z * C + c;
            result += weight_buf[w_idx] * input_buf[in_idx];
        }
    }

    if (params.apply_relu6 == 1u) {
        result = clamp(result, vec4<f16>(0.0h), vec4<f16>(6.0h));
    }

    output_buf[y * params.out_w * C + x * C + c] = result;
}
\`;var de=class extends f{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?At:It;let n=T(e.h,o.kernel,o.stride,o.padding),s=T(e.w,o.kernel,o.stride,o.padding),p=e.c/4,l=C(o.padding,e.h,n,o.kernel,o.stride),c=C(o.padding,e.w,s,o.kernel,o.stride);this.output=r.tensor(n,s,e.c),this.inputs=[e],this.weights=[r.upload(m(i.weights)),r.upload(m(i.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,n,s,p,o.kernel,o.kernel,o.stride,l,c,o.activation==="relu6"?1:0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(s/8),Math.ceil(n/8),p]}};var Mt=\`// Element-wise add of two tensors \\u2014 used for residual connections in MBConv blocks.
// Operates on the flat float buffer directly; layout is irrelevant for a pure element-wise op.

struct Params {
    size  : u32,   // total number of f32 elements
    _pad0 : u32,
    _pad1 : u32,
    _pad2 : u32,
}

@group(0) @binding(0) var<storage, read>       input_a : array<f32>;
@group(0) @binding(1) var<storage, read>       input_b : array<f32>;
@group(0) @binding(2) var<uniform>             params  : Params;
@group(0) @binding(3) var<storage, read_write> output  : array<f32>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if (idx >= params.size) { return; }
    output[idx] = input_a[idx] + input_b[idx];
}
\`;var Rt=\`enable f16;

// Element-wise add \\u2014 full f16 variant.
// array<f16> is binary-compatible with array<vec4<f16>> written by the f16 conv shaders.

struct Params {
    size  : u32,
    _pad0 : u32,
    _pad1 : u32,
    _pad2 : u32,
}

@group(0) @binding(0) var<storage, read>       input_a : array<f16>;
@group(0) @binding(1) var<storage, read>       input_b : array<f16>;
@group(0) @binding(2) var<uniform>             params  : Params;
@group(0) @binding(3) var<storage, read_write> output  : array<f16>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if (idx >= params.size) { return; }
    output[idx] = input_a[idx] + input_b[idx];
}
\`;var me=class extends f{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Rt:Mt;let o=e.h*e.w*e.c;this.output=r.tensor(e.h,e.w,e.c),this.inputs=[e,i],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([o,0,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(o/256),1,1]}};var Ht=\`// Element-wise sigmoid: output = 1 / (1 + exp(-x)).
// Operates on packed vec4 buffers (NHWC layout). exp() and arithmetic are element-wise on vec4.

struct Params {
    n_groups : u32,   // total vec4 elements (H * W * channel_groups)
    _pad0    : u32,
    _pad1    : u32,
    _pad2    : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if (idx >= params.n_groups) { return; }
    output_buf[idx] = 1.0 / (1.0 + exp(-input_buf[idx]));
}
\`;var zt=\`enable f16;

// Sigmoid \\u2014 full f16 variant.

struct Params {
    n_groups : u32,
    _pad0    : u32,
    _pad1    : u32,
    _pad2    : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if (idx >= params.n_groups) { return; }
    let x = vec4<f32>(input_buf[idx]);
    output_buf[idx] = vec4<f16>(1.0 / (1.0 + exp(-x)));
}
\`;var fe=class extends f{constructor(r,e){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?zt:Ht;let i=e.h*e.w*(e.c/4);this.output=r.tensor(e.h,e.w,e.c),this.inputs=[e],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([i,0,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(i/256),1,1]}};var Vt=\`// Element-wise tanh \\u2014 used by ConvGRU candidate activation.
// Operates on packed vec4 buffers (NHWC layout). tanh() is element-wise on vec4.

struct Params {
    n_groups : u32,
    _pad0    : u32,
    _pad1    : u32,
    _pad2    : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if (idx >= params.n_groups) { return; }
    output_buf[idx] = tanh(input_buf[idx]);
}
\`;var Nt=\`enable f16;

// Tanh \\u2014 full f16 variant.

struct Params {
    n_groups : u32,
    _pad0    : u32,
    _pad1    : u32,
    _pad2    : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if (idx >= params.n_groups) { return; }
    let x = vec4<f32>(input_buf[idx]);
    output_buf[idx] = vec4<f16>(tanh(x));
}
\`;var he=class extends f{constructor(r,e){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Nt:Vt;let i=e.h*e.w*(e.c/4);this.output=r.tensor(e.h,e.w,e.c),this.inputs=[e],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([i,0,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(i/256),1,1]}};var $t=\`// Element-wise multiply \\u2014 used in ConvGRU for r \\u2299 h_prev.
// Same flat-float layout as add.wgsl.

struct Params {
    size  : u32,
    _pad0 : u32,
    _pad1 : u32,
    _pad2 : u32,
}

@group(0) @binding(0) var<storage, read>       input_a : array<f32>;
@group(0) @binding(1) var<storage, read>       input_b : array<f32>;
@group(0) @binding(2) var<uniform>             params  : Params;
@group(0) @binding(3) var<storage, read_write> output  : array<f32>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if (idx >= params.size) { return; }
    output[idx] = input_a[idx] * input_b[idx];
}
\`;var Xt=\`enable f16;

// Element-wise multiply \\u2014 full f16 variant.
// array<f16> is binary-compatible with array<vec4<f16>> written by the f16 conv shaders.

struct Params {
    size  : u32,
    _pad0 : u32,
    _pad1 : u32,
    _pad2 : u32,
}

@group(0) @binding(0) var<storage, read>       input_a : array<f16>;
@group(0) @binding(1) var<storage, read>       input_b : array<f16>;
@group(0) @binding(2) var<uniform>             params  : Params;
@group(0) @binding(3) var<storage, read_write> output  : array<f16>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if (idx >= params.size) { return; }
    output[idx] = input_a[idx] * input_b[idx];
}
\`;var _e=class extends f{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Xt:$t;let o=e.h*e.w*e.c;this.output=r.tensor(e.h,e.w,e.c),this.inputs=[e,i],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([o,0,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(o/256),1,1]}};var jt=\`// Bilinear gather-warp (f32). See warp_f16.wgsl for the math.

struct Params {
    h          : u32,
    w          : u32,
    flow_scale : f32,
}

@group(0) @binding(0) var<storage, read>       source_buf : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       flow_buf   : array<vec4<f32>>;
@group(0) @binding(2) var<uniform>             params     : Params;
@group(0) @binding(3) var<storage, read_write> output_buf : array<vec4<f32>>;

fn samp(x: i32, y: i32, W: i32, H: i32) -> vec4<f32> {
    let cx = clamp(x, 0, W - 1);
    let cy = clamp(y, 0, H - 1);
    return source_buf[u32(cy) * u32(W) + u32(cx)];
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    let W = i32(params.w);
    let H = i32(params.h);
    let idx = y * params.w + x;

    let f  = flow_buf[idx].xy;
    let sx = clamp(f32(x) + params.flow_scale * f.x, 0.0, f32(W - 1));
    let sy = clamp(f32(y) + params.flow_scale * f.y, 0.0, f32(H - 1));

    let x0 = i32(floor(sx));
    let y0 = i32(floor(sy));
    let tx = sx - f32(x0);
    let ty = sy - f32(y0);

    let top = mix(samp(x0, y0, W, H), samp(x0 + 1, y0, W, H), tx);
    let bot = mix(samp(x0, y0 + 1, W, H), samp(x0 + 1, y0 + 1, W, H), tx);
    output_buf[idx] = mix(top, bot, ty);
}
\`;var qt=\`enable f16;

// Bilinear gather-warp (f16 storage, f32 coordinate math). For each output pixel
// p, sample the source at p + flow_scale\\xB7flow[p].xy and bilinearly interpolate,
// clamping the sample to the edge (border-replicate). Source + flow are 4-ch
// (1 group), same resolution; flow vector is in .xy.

struct Params {
    h          : u32,
    w          : u32,
    flow_scale : f32,
}

@group(0) @binding(0) var<storage, read>       source_buf : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       flow_buf   : array<vec4<f16>>;
@group(0) @binding(2) var<uniform>             params     : Params;
@group(0) @binding(3) var<storage, read_write> output_buf : array<vec4<f16>>;

fn samp(x: i32, y: i32, W: i32, H: i32) -> vec4<f32> {
    let cx = clamp(x, 0, W - 1);
    let cy = clamp(y, 0, H - 1);
    return vec4<f32>(source_buf[u32(cy) * u32(W) + u32(cx)]);
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    let W = i32(params.w);
    let H = i32(params.h);
    let idx = y * params.w + x;

    let f  = vec2<f32>(flow_buf[idx].xy);
    let sx = clamp(f32(x) + params.flow_scale * f.x, 0.0, f32(W - 1));
    let sy = clamp(f32(y) + params.flow_scale * f.y, 0.0, f32(H - 1));

    let x0 = i32(floor(sx));
    let y0 = i32(floor(sy));
    let tx = sx - f32(x0);
    let ty = sy - f32(y0);

    let top = mix(samp(x0, y0, W, H), samp(x0 + 1, y0, W, H), tx);
    let bot = mix(samp(x0, y0 + 1, W, H), samp(x0 + 1, y0 + 1, W, H), tx);
    output_buf[idx] = vec4<f16>(mix(top, bot, ty));
}
\`;var ge=class extends f{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?qt:jt,this.output=r.tensor(e.h,e.w,e.c),this.inputs=[e,i],this.createUniform("params","Params");let n=new Uint32Array(3);n[0]=e.h,n[1]=e.w,new Float32Array(n.buffer)[2]=o.flowScale,this.setUniform("params",n),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),1]}};var Kt=\`// Flow-gated temporal stabilizer (f32). See stabilize_f16.wgsl for the math.

struct Params {
    h        : u32,
    w        : u32,
    t_lo     : f32,
    t_hi     : f32,
    leak     : f32,
    release  : f32,
    t_div    : f32,
    div_scale: f32,
    step_x   : u32,
    step_y   : u32,
}

@group(0) @binding(0) var<storage, read>       flow_buf     : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       pred_buf     : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read>       ref_buf      : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read>       env_prev_buf : array<vec4<f32>>;
@group(0) @binding(4) var<uniform>             params       : Params;
@group(0) @binding(5) var<storage, read_write> output_buf   : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }
    let idx = y * params.w + x;

    let mag      = length(flow_buf[idx].xy);
    let env_prev = env_prev_buf[idx].y;
    let env      = max(mag, params.release * env_prev);

    let xr = min(x + params.step_x, params.w - 1u);
    let xl = select(x - params.step_x, 0u, x < params.step_x);
    let yd = min(y + params.step_y, params.h - 1u);
    let yu = select(y - params.step_y, 0u, y < params.step_y);
    let dfx = flow_buf[y * params.w + xr].x - flow_buf[y * params.w + xl].x;
    let dfy = flow_buf[yd * params.w + x].y - flow_buf[yu * params.w + x].y;
    let divg = abs(dfx + dfy);

    let g_mag = clamp((env - params.t_lo) / max(params.t_hi - params.t_lo, 1e-3), 0.0, 1.0);
    let g_div = clamp((divg - params.t_div) / max(params.div_scale, 1e-3), 0.0, 1.0);
    let g = max(max(g_mag, g_div), params.leak);

    let pred = pred_buf[idx].x;
    let refv = ref_buf[idx].x;
    let stab = g * pred + (1.0 - g) * refv;

    output_buf[idx] = vec4<f32>(stab, env, 0.0, 0.0);
}
\`;var Yt=\`enable f16;

// Flow-gated temporal stabilizer (f16 storage, f32 gate math). Per pixel:
//   env = max(|flow.xy|, release\\xB7envPrev.y)      peak-hold (fast attack, slow release)
//   div = |\\u2202fx/\\u2202x + \\u2202fy/\\u2202y|                       flow divergence (occlusion seam)
//   g   = max(clamp((env-tLo)/(tHi-tLo),0,1), clamp((div-tDiv)/divScale,0,1), leak)
//   out = vec4((g\\xB7pred + (1-g)\\xB7ref).x, env, 0, 0)
// The divergence term opens the gate at occlusion/disocclusion boundaries (where
// the flow tears but the revealed-background magnitude is ~0). Finite-difference
// step spans ~1 base/4 pixel. alpha is in .x of pred/ref; env threads via .y.

struct Params {
    h        : u32,
    w        : u32,
    t_lo     : f32,
    t_hi     : f32,
    leak     : f32,
    release  : f32,
    t_div    : f32,
    div_scale: f32,
    step_x   : u32,
    step_y   : u32,
}

@group(0) @binding(0) var<storage, read>       flow_buf     : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       pred_buf     : array<vec4<f16>>;
@group(0) @binding(2) var<storage, read>       ref_buf      : array<vec4<f16>>;
@group(0) @binding(3) var<storage, read>       env_prev_buf : array<vec4<f16>>;
@group(0) @binding(4) var<uniform>             params       : Params;
@group(0) @binding(5) var<storage, read_write> output_buf   : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }
    let idx = y * params.w + x;

    let mag      = length(vec2<f32>(flow_buf[idx].xy));
    let env_prev = f32(env_prev_buf[idx].y);
    let env      = max(mag, params.release * env_prev);

    // Flow divergence over a \\xB1step finite-difference (clamped to the edges).
    let xr = min(x + params.step_x, params.w - 1u);
    let xl = select(x - params.step_x, 0u, x < params.step_x);
    let yd = min(y + params.step_y, params.h - 1u);
    let yu = select(y - params.step_y, 0u, y < params.step_y);
    let dfx = f32(flow_buf[y * params.w + xr].x) - f32(flow_buf[y * params.w + xl].x);
    let dfy = f32(flow_buf[yd * params.w + x].y) - f32(flow_buf[yu * params.w + x].y);
    let divg = abs(dfx + dfy);

    let g_mag = clamp((env - params.t_lo) / max(params.t_hi - params.t_lo, 1e-3), 0.0, 1.0);
    let g_div = clamp((divg - params.t_div) / max(params.div_scale, 1e-3), 0.0, 1.0);
    let g = max(max(g_mag, g_div), params.leak);

    let pred = f32(pred_buf[idx].x);
    let refv = f32(ref_buf[idx].x);
    let stab = g * pred + (1.0 - g) * refv;

    output_buf[idx] = vec4<f16>(f16(stab), f16(env), 0.0h, 0.0h);
}
\`;var be=class extends f{constructor(r,e,i,o,n,s){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Yt:Kt,this.output=r.tensor(e.h,e.w,4),this.inputs=[e,i,o,n],this.createUniform("params","Params");let p=new Uint32Array(10);p[0]=e.h,p[1]=e.w;let l=new Float32Array(p.buffer);l[2]=s.tLo,l[3]=s.tHi,l[4]=s.leak,l[5]=s.release,l[6]=s.tDiv,l[7]=s.divScale,p[8]=s.stepX,p[9]=s.stepY,this.setUniform("params",p),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),1]}};var Qt=\`// Bilinear upsample (arbitrary ratio), align_corners=False (matches PyTorch default).
// Input/output in NHWC vec4 format: index = y*W*(C/4) + x*(C/4) + c_group.
// Each thread computes one output pixel for one channel group (vec4 = 4 channels).

struct Params {
    in_h           : u32,
    in_w           : u32,
    out_h          : u32,
    out_w          : u32,
    channel_groups : u32,
    _pad0          : u32,
    _pad1          : u32,
    _pad2          : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let c  = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || c >= params.channel_groups) {
        return;
    }

    let IH = params.in_h;
    let IW = params.in_w;
    let C  = params.channel_groups;

    // align_corners=False: src = (out + 0.5) * (in / out) - 0.5
    let src_x = (f32(ox) + 0.5) * (f32(IW) / f32(params.out_w)) - 0.5;
    let src_y = (f32(oy) + 0.5) * (f32(IH) / f32(params.out_h)) - 0.5;

    // Clamp to [0, in-1] for border replication. Use i32 intermediates so that
    // floor() returning -1.0 doesn't produce an invalid u32 conversion.
    let x0 = u32(clamp(i32(floor(src_x)),     0, i32(IW) - 1));
    let x1 = u32(clamp(i32(floor(src_x)) + 1, 0, i32(IW) - 1));
    let y0 = u32(clamp(i32(floor(src_y)),     0, i32(IH) - 1));
    let y1 = u32(clamp(i32(floor(src_y)) + 1, 0, i32(IH) - 1));

    let wx = src_x - floor(src_x);
    let wy = src_y - floor(src_y);

    let tl = input_buf[y0 * IW * C + x0 * C + c];
    let tr = input_buf[y0 * IW * C + x1 * C + c];
    let bl = input_buf[y1 * IW * C + x0 * C + c];
    let br = input_buf[y1 * IW * C + x1 * C + c];

    // Bilinear blend \\u2014 vec4 ops are element-wise, so all 4 channels blend identically.
    let result = (1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
               +        wy  * ((1.0 - wx) * bl + wx * br);

    output_buf[oy * params.out_w * C + ox * C + c] = result;
}
\`;var Jt=\`enable f16;

// Bilinear upsample 2\\xD7 \\u2014 full f16 variant.
// Interpolation weights (wx, wy) and intermediate blends computed in f32 for
// accuracy; result cast to f16 on write.

struct Params {
    in_h           : u32,
    in_w           : u32,
    out_h          : u32,
    out_w          : u32,
    channel_groups : u32,
    _pad0          : u32,
    _pad1          : u32,
    _pad2          : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let c  = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || c >= params.channel_groups) {
        return;
    }

    let IH = params.in_h;
    let IW = params.in_w;
    let C  = params.channel_groups;

    let src_x = (f32(ox) + 0.5) * (f32(IW) / f32(params.out_w)) - 0.5;
    let src_y = (f32(oy) + 0.5) * (f32(IH) / f32(params.out_h)) - 0.5;

    let x0 = u32(clamp(i32(floor(src_x)),     0, i32(IW) - 1));
    let x1 = u32(clamp(i32(floor(src_x)) + 1, 0, i32(IW) - 1));
    let y0 = u32(clamp(i32(floor(src_y)),     0, i32(IH) - 1));
    let y1 = u32(clamp(i32(floor(src_y)) + 1, 0, i32(IH) - 1));

    let wx = src_x - floor(src_x);
    let wy = src_y - floor(src_y);

    let tl = vec4<f32>(input_buf[y0 * IW * C + x0 * C + c]);
    let tr = vec4<f32>(input_buf[y0 * IW * C + x1 * C + c]);
    let bl = vec4<f32>(input_buf[y1 * IW * C + x0 * C + c]);
    let br = vec4<f32>(input_buf[y1 * IW * C + x1 * C + c]);

    let result = (1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
               +        wy  * ((1.0 - wx) * bl + wx * br);

    output_buf[oy * params.out_w * C + ox * C + c] = vec4<f16>(result);
}
\`;var ve=class extends f{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Jt:Qt;let o=e.c/4;this.output=r.tensor(i.outH,i.outW,e.c),this.inputs=[e],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,i.outH,i.outW,o,0,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(i.outW/8),Math.ceil(i.outH/8),o]}};var Zt=\`// Top-left crop (f32). See crop_f16.wgsl.

struct Params {
    in_w   : u32,
    out_h  : u32,
    out_w  : u32,
    groups : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let g = gid.z;
    if (x >= params.out_w || y >= params.out_h || g >= params.groups) { return; }
    let G = params.groups;
    output_buf[y * params.out_w * G + x * G + g] = input_buf[y * params.in_w * G + x * G + g];
}
\`;var er=\`enable f16;

// Top-left crop: output[y,x,g] = input[y,x,g] for y<outH, x<outW (training crop_like).

struct Params {
    in_w   : u32,
    out_h  : u32,
    out_w  : u32,
    groups : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let g = gid.z;
    if (x >= params.out_w || y >= params.out_h || g >= params.groups) { return; }
    let G = params.groups;
    output_buf[y * params.out_w * G + x * G + g] = input_buf[y * params.in_w * G + x * G + g];
}
\`;var xe=class extends f{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?er:Zt;let o=e.c/4;this.output=r.tensor(i.outH,i.outW,e.c),this.inputs=[e],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.w,i.outH,i.outW,o])),this.defaultSetup(),this.dispatch=[Math.ceil(i.outW/8),Math.ceil(i.outH/8),o]}};var tr=\`// Bicubic upsample (arbitrary scale) \\u2014 Keys cubic, a=-0.75 (PyTorch default
// for mode='bicubic', align_corners=False). Direct 2D, 4\\xD74 = 16 taps per
// output pixel. NHWC vec4 layout: index = y*W*(C/4) + x*(C/4) + c_group.

struct Params {
    in_h           : u32,
    in_w           : u32,
    out_h          : u32,
    out_w          : u32,
    channel_groups : u32,
    _pad0          : u32,
    _pad1          : u32,
    _pad2          : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f32>>;

const A: f32 = -0.75;

fn wcubic(d: f32) -> f32 {
    let ad = abs(d);
    if (ad <= 1.0) { return ((A + 2.0) * ad - (A + 3.0)) * ad * ad + 1.0; }
    if (ad <  2.0) { return ((A * ad - 5.0 * A) * ad + 8.0 * A) * ad - 4.0 * A; }
    return 0.0;
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let c  = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || c >= params.channel_groups) {
        return;
    }

    let IH = params.in_h;
    let IW = params.in_w;
    let C  = params.channel_groups;

    let src_x = (f32(ox) + 0.5) * (f32(IW) / f32(params.out_w)) - 0.5;
    let src_y = (f32(oy) + 0.5) * (f32(IH) / f32(params.out_h)) - 0.5;

    let x0 = i32(floor(src_x));
    let y0 = i32(floor(src_y));
    let fx = src_x - f32(x0);
    let fy = src_y - f32(y0);

    var wx: array<f32, 4>;
    var wy: array<f32, 4>;
    wx[0] = wcubic(1.0 + fx); wx[1] = wcubic(fx); wx[2] = wcubic(1.0 - fx); wx[3] = wcubic(2.0 - fx);
    wy[0] = wcubic(1.0 + fy); wy[1] = wcubic(fy); wy[2] = wcubic(1.0 - fy); wy[3] = wcubic(2.0 - fy);

    var acc: vec4<f32> = vec4<f32>(0.0);
    for (var j: i32 = 0; j < 4; j = j + 1) {
        let sy = u32(clamp(y0 + j - 1, 0, i32(IH) - 1));
        for (var i: i32 = 0; i < 4; i = i + 1) {
            let sx = u32(clamp(x0 + i - 1, 0, i32(IW) - 1));
            let v  = input_buf[sy * IW * C + sx * C + c];
            acc = acc + (wx[i] * wy[j]) * v;
        }
    }

    output_buf[oy * params.out_w * C + ox * C + c] = acc;
}
\`;var rr=\`enable f16;

// Bicubic upsample \\u2014 full f16 storage variant. Bicubic weights and the per-
// pixel accumulator are computed in f32 (cheap to keep precision around the
// kernel arithmetic), then demoted to f16 when written to the output buffer.

struct Params {
    in_h           : u32,
    in_w           : u32,
    out_h          : u32,
    out_w          : u32,
    channel_groups : u32,
    _pad0          : u32,
    _pad1          : u32,
    _pad2          : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f16>>;

const A: f32 = -0.75;

fn wcubic(d: f32) -> f32 {
    let ad = abs(d);
    if (ad <= 1.0) { return ((A + 2.0) * ad - (A + 3.0)) * ad * ad + 1.0; }
    if (ad <  2.0) { return ((A * ad - 5.0 * A) * ad + 8.0 * A) * ad - 4.0 * A; }
    return 0.0;
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let c  = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || c >= params.channel_groups) {
        return;
    }

    let IH = params.in_h;
    let IW = params.in_w;
    let C  = params.channel_groups;

    let src_x = (f32(ox) + 0.5) * (f32(IW) / f32(params.out_w)) - 0.5;
    let src_y = (f32(oy) + 0.5) * (f32(IH) / f32(params.out_h)) - 0.5;

    let x0 = i32(floor(src_x));
    let y0 = i32(floor(src_y));
    let fx = src_x - f32(x0);
    let fy = src_y - f32(y0);

    var wx: array<f32, 4>;
    var wy: array<f32, 4>;
    wx[0] = wcubic(1.0 + fx); wx[1] = wcubic(fx); wx[2] = wcubic(1.0 - fx); wx[3] = wcubic(2.0 - fx);
    wy[0] = wcubic(1.0 + fy); wy[1] = wcubic(fy); wy[2] = wcubic(1.0 - fy); wy[3] = wcubic(2.0 - fy);

    var acc: vec4<f32> = vec4<f32>(0.0);
    for (var j: i32 = 0; j < 4; j = j + 1) {
        let sy = u32(clamp(y0 + j - 1, 0, i32(IH) - 1));
        for (var i: i32 = 0; i < 4; i = i + 1) {
            let sx = u32(clamp(x0 + i - 1, 0, i32(IW) - 1));
            let v  = vec4<f32>(input_buf[sy * IW * C + sx * C + c]);
            acc = acc + (wx[i] * wy[j]) * v;
        }
    }

    output_buf[oy * params.out_w * C + ox * C + c] = vec4<f16>(acc);
}
\`;var ye=class extends f{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?rr:tr;let o=e.c/4;this.output=r.tensor(i.outH,i.outW,e.c),this.inputs=[e],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,i.outH,i.outW,o,0,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(i.outW/8),Math.ceil(i.outH/8),o]}};var or=\`// Channel concatenation: output = cat(A, B, dim=channel).
// Both A and B must share the same H\\xD7W and be in NHWC vec4 format.
// Output layout: for each (y, x), the first a_groups vec4s come from A,
// followed by b_groups vec4s from B.

struct Params {
    height    : u32,
    width     : u32,
    a_groups  : u32,  // Ca / 4
    b_groups  : u32,  // Cb / 4
    out_groups: u32,  // a_groups + b_groups
    _pad0     : u32,
    _pad1     : u32,
    _pad2     : u32,
}

@group(0) @binding(0) var<storage, read>       input_a    : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       input_b    : array<vec4<f32>>;
@group(0) @binding(2) var<uniform>             params     : Params;
@group(0) @binding(3) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let c = gid.z;  // output channel group

    let W   = params.width;
    let Ag  = params.a_groups;
    let Bg  = params.b_groups;
    let Cg  = params.out_groups;

    if (x >= W || y >= params.height || c >= Cg) {
        return;
    }

    let out_idx = y * W * Cg + x * Cg + c;

    if (c < Ag) {
        output_buf[out_idx] = input_a[y * W * Ag + x * Ag + c];
    } else {
        let c_b = c - Ag;
        output_buf[out_idx] = input_b[y * W * Bg + x * Bg + c_b];
    }
}
\`;var ir=\`enable f16;

// Channel concatenation \\u2014 full f16 variant.

struct Params {
    height    : u32,
    width     : u32,
    a_groups  : u32,
    b_groups  : u32,
    out_groups: u32,
    _pad0     : u32,
    _pad1     : u32,
    _pad2     : u32,
}

@group(0) @binding(0) var<storage, read>       input_a    : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       input_b    : array<vec4<f16>>;
@group(0) @binding(2) var<uniform>             params     : Params;
@group(0) @binding(3) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let c = gid.z;

    let W  = params.width;
    let Ag = params.a_groups;
    let Bg = params.b_groups;
    let Cg = params.out_groups;

    if (x >= W || y >= params.height || c >= Cg) { return; }

    let out_idx = y * W * Cg + x * Cg + c;
    if (c < Ag) {
        output_buf[out_idx] = input_a[y * W * Ag + x * Ag + c];
    } else {
        let c_b = c - Ag;
        output_buf[out_idx] = input_b[y * W * Bg + x * Bg + c_b];
    }
}
\`;var we=class extends f{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?ir:or;let o=e.c/4,n=i.c/4,s=o+n;this.output=r.tensor(e.h,e.w,e.c+i.c),this.inputs=[e,i],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,o,n,s,0,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),s]}};var ar=\`// Conv2d + skip add fused.
// Identical to conv2d.wgsl except skip is an activation input (binding 1),
// added element-wise to the conv result at write time.
// Eliminates the separate add dispatch and its intermediate buffer round-trip.
// Binding order: input(0), skip(1), weights(2), bias(3), params(4), output(5)

struct Params {
    in_h        : u32,
    in_w        : u32,
    out_h       : u32,
    out_w       : u32,
    in_groups   : u32,
    out_groups  : u32,
    kernel_h    : u32,
    kernel_w    : u32,
    stride      : u32,
    pad_top     : u32,
    pad_left    : u32,
    activation  : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       skip_buf   : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<mat4x4<f32>>;
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f32>>;
@group(0) @binding(4) var<uniform>             params     : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let o = gid.z;

    if (x >= params.out_w || y >= params.out_h || o >= params.out_groups) {
        return;
    }

    let I = params.in_groups;
    let O = params.out_groups;

    var result = bias_buf[o];

    for (var ky = 0u; ky < params.kernel_h; ky++) {
        for (var kx = 0u; kx < params.kernel_w; kx++) {
            let in_y_s = i32(y * params.stride + ky) - i32(params.pad_top);
            let in_x_s = i32(x * params.stride + kx) - i32(params.pad_left);

            if (in_y_s < 0 || in_x_s < 0 ||
                u32(in_y_s) >= params.in_h || u32(in_x_s) >= params.in_w) {
                continue;
            }

            let in_y = u32(in_y_s);
            let in_x = u32(in_x_s);
            let z    = ky * params.kernel_w + kx;

            for (var i = 0u; i < I; i++) {
                let in_idx = in_y * params.in_w * I + in_x * I + i;
                let w_idx  = z * O * I + o * I + i;
                result += weight_buf[w_idx] * input_buf[in_idx];
            }
        }
    }

    if (params.activation == 1u) {
        result = clamp(result, vec4<f32>(0.0), vec4<f32>(6.0));
    } else if (params.activation == 2u) {
        result = max(result, vec4<f32>(0.0));
    }

    let out_idx = y * params.out_w * O + x * O + o;
    output_buf[out_idx] = result + skip_buf[out_idx];
}
\`;var nr=\`enable f16;

// Conv2d + skip add fused \\u2014 full f16 variant.

struct Params {
    in_h        : u32,
    in_w        : u32,
    out_h       : u32,
    out_w       : u32,
    in_groups   : u32,
    out_groups  : u32,
    kernel_h    : u32,
    kernel_w    : u32,
    stride      : u32,
    pad_top     : u32,
    pad_left    : u32,
    activation  : u32,
}

// Binding order matches conv2d_add.wgsl: input(0), skip(1), weight(2), bias(3),
// params(4), output(5).
@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       skip_buf   : array<vec4<f16>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<mat4x4<f16>>;
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(4) var<uniform>             params     : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let o = gid.z;

    if (x >= params.out_w || y >= params.out_h || o >= params.out_groups) {
        return;
    }

    let I = params.in_groups;
    let O = params.out_groups;

    var result = bias_buf[o];

    for (var ky = 0u; ky < params.kernel_h; ky++) {
        for (var kx = 0u; kx < params.kernel_w; kx++) {
            let in_y_s = i32(y * params.stride + ky) - i32(params.pad_top);
            let in_x_s = i32(x * params.stride + kx) - i32(params.pad_left);

            if (in_y_s < 0 || in_x_s < 0 ||
                u32(in_y_s) >= params.in_h || u32(in_x_s) >= params.in_w) {
                continue;
            }

            let in_y = u32(in_y_s);
            let in_x = u32(in_x_s);
            let z    = ky * params.kernel_w + kx;

            for (var i = 0u; i < I; i++) {
                let in_idx = in_y * params.in_w * I + in_x * I + i;
                let w_idx  = z * O * I + o * I + i;
                result += weight_buf[w_idx] * input_buf[in_idx];
            }
        }
    }

    if (params.activation == 1u) {
        result = clamp(result, vec4<f16>(0.0h), vec4<f16>(6.0h));
    } else if (params.activation == 2u) {
        result = max(result, vec4<f16>(0.0h));
    }

    let out_idx = y * params.out_w * O + x * O + o;
    output_buf[out_idx] = result + skip_buf[out_idx];
}
\`;var ke=class extends f{constructor(r,e,i,o,n){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?nr:ar;let s=T(e.h,n.kernel,n.stride,n.padding),p=T(e.w,n.kernel,n.stride,n.padding),l=e.c/4,c=n.outChannels/4,d=C(n.padding,e.h,s,n.kernel,n.stride),_=C(n.padding,e.w,p,n.kernel,n.stride);this.output=r.tensor(s,p,n.outChannels),this.inputs=[e,i],this.weights=[r.upload(m(o.weights)),r.upload(m(o.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,s,p,l,c,n.kernel,n.kernel,n.stride,d,_,n.activation==="relu6"?1:0])),this.defaultSetup(),this.dispatch=[Math.ceil(p/8),Math.ceil(s/8),c]}};var sr=\`// proj_residual: bespoke 1\\xD71 conv (no activation) + residual add, fused.
// Specializes conv2d_add to kernel=1 / stride=1 / pad=0 / no activation: drops
// the kernel loop, the padding checks, and the activation branch. Used by the
// MBConv project+residual tail. Both inputs share the same spatial resolution.
//
// Weight layout: [out_groups][in_groups] mat4x4 (no K*K dim since K=1).
// Bias: [out_groups] vec4.
// Binding order: input(0), skip(1), weights(2), bias(3), params(4), output(5)

struct Params {
    h          : u32,
    w          : u32,
    in_groups  : u32,
    out_groups : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       skip_buf   : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<mat4x4<f32>>;
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f32>>;
@group(0) @binding(4) var<uniform>             params     : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let o = gid.z;

    if (x >= params.w || y >= params.h || o >= params.out_groups) {
        return;
    }

    let I = params.in_groups;
    let O = params.out_groups;
    let pix = y * params.w + x;

    var result = bias_buf[o];
    for (var i = 0u; i < I; i++) {
        result += weight_buf[o * I + i] * input_buf[pix * I + i];
    }
    result += skip_buf[pix * O + o];

    output_buf[pix * O + o] = result;
}
\`;var ur=\`enable f16;

// proj_residual \\u2014 full f16 variant. See proj_residual.wgsl for layout details.
// Bespoke 1\\xD71 conv (no activation) + residual add, fused.
// Binding order: input(0), skip(1), weights(2), bias(3), params(4), output(5)

struct Params {
    h          : u32,
    w          : u32,
    in_groups  : u32,
    out_groups : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       skip_buf   : array<vec4<f16>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<mat4x4<f16>>;
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(4) var<uniform>             params     : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let o = gid.z;

    if (x >= params.w || y >= params.h || o >= params.out_groups) {
        return;
    }

    let I = params.in_groups;
    let O = params.out_groups;
    let pix = y * params.w + x;

    var result = bias_buf[o];
    for (var i = 0u; i < I; i++) {
        result += weight_buf[o * I + i] * input_buf[pix * I + i];
    }
    result += skip_buf[pix * O + o];

    output_buf[pix * O + o] = result;
}
\`;var Te=class extends f{constructor(r,e,i,o,n){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?ur:sr;let s=e.c/4,p=n.outChannels/4;this.output=r.tensor(e.h,e.w,n.outChannels),this.inputs=[e,i],this.weights=[r.upload(m(o.weights)),r.upload(m(o.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,s,p])),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),p]}};var pr=\`// concat_conv2d: fuses [concat(a, b) \\u2192 conv 3\\xD73 (pad 1) \\u2192 relu6] into one
// dispatch. Both inputs are already at the output resolution (the upstream
// upsample stays a separate dispatch writing a clean intermediate, so the conv
// reads are plain-indexed). Identical math to conv2d; the only difference is
// that input channels are split across two buffers: weight cols [0, a_groups)
// read a, [a_groups, I) read b.
//
// Weight layout matches conv2d: [kpos][out_groups][in_groups] mat4x4, where
// in_groups = a_groups + b_groups and the input channel order is [a, b].
// Binding order: a(0), b(1), weights(2), bias(3), params(4), output(5)

struct Params {
    h          : u32,   // a, b and output all share this shape
    w          : u32,
    a_groups   : u32,
    b_groups   : u32,
    out_groups : u32,
    _pad0      : u32,
    _pad1      : u32,
    _pad2      : u32,
}

@group(0) @binding(0) var<storage, read>       buf_a      : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       buf_b      : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<mat4x4<f32>>;
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f32>>;
@group(0) @binding(4) var<uniform>             p          : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y; let o = gid.z;
    if (x >= p.w || y >= p.h || o >= p.out_groups) { return; }

    let A = p.a_groups;
    let B = p.b_groups;
    let I = A + B;
    let O = p.out_groups;

    var result = bias_buf[o];

    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let nx = i32(x + kx) - 1;
            let ny = i32(y + ky) - 1;
            if (nx < 0 || ny < 0 || u32(nx) >= p.w || u32(ny) >= p.h) { continue; }
            let z   = ky * 3u + kx;
            let pix = u32(ny) * p.w + u32(nx);
            for (var i = 0u; i < A; i++) {
                result += weight_buf[z * O * I + o * I + i] * buf_a[pix * A + i];
            }
            for (var i = 0u; i < B; i++) {
                result += weight_buf[z * O * I + o * I + (A + i)] * buf_b[pix * B + i];
            }
        }
    }

    result = clamp(result, vec4<f32>(0.0), vec4<f32>(6.0));
    output_buf[(y * p.w + x) * O + o] = result;
}
\`;var lr=\`enable f16;

// concat_conv2d \\u2014 full f16 variant. See concat_conv2d.wgsl for layout details.
// Fuses [concat(a, b) \\u2192 conv 3\\xD73 (pad 1) \\u2192 relu6] into one dispatch.
// Binding order: a(0), b(1), weights(2), bias(3), params(4), output(5)

struct Params {
    h          : u32,
    w          : u32,
    a_groups   : u32,
    b_groups   : u32,
    out_groups : u32,
    _pad0      : u32,
    _pad1      : u32,
    _pad2      : u32,
}

@group(0) @binding(0) var<storage, read>       buf_a      : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       buf_b      : array<vec4<f16>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<mat4x4<f16>>;
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(4) var<uniform>             p          : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y; let o = gid.z;
    if (x >= p.w || y >= p.h || o >= p.out_groups) { return; }

    let A = p.a_groups;
    let B = p.b_groups;
    let I = A + B;
    let O = p.out_groups;

    var result = bias_buf[o];

    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let nx = i32(x + kx) - 1;
            let ny = i32(y + ky) - 1;
            if (nx < 0 || ny < 0 || u32(nx) >= p.w || u32(ny) >= p.h) { continue; }
            let z   = ky * 3u + kx;
            let pix = u32(ny) * p.w + u32(nx);
            for (var i = 0u; i < A; i++) {
                result += weight_buf[z * O * I + o * I + i] * buf_a[pix * A + i];
            }
            for (var i = 0u; i < B; i++) {
                result += weight_buf[z * O * I + o * I + (A + i)] * buf_b[pix * B + i];
            }
        }
    }

    result = clamp(result, vec4<f16>(0.0h), vec4<f16>(6.0h));
    output_buf[(y * p.w + x) * O + o] = result;
}
\`;var Ce=class extends f{constructor(r,e,i,o,n){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?lr:pr;let s=e.c/4,p=i.c/4,l=n.outChannels/4;this.output=r.tensor(e.h,e.w,n.outChannels),this.inputs=[e,i],this.weights=[r.upload(m(o.weights)),r.upload(m(o.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,s,p,l,0,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),l]}};var cr=\`// gates_fused: ConvGRU z + r gates, fused into one dispatch.
// Production config (c_up=2, split_ratio=0.5 \\u2192 passthrough=1, recurrent=1):
//   u_in   : c_up=2 packed in a vec4 (.x = passthrough a, .y = recurrent b)
//   h_prev : hidden carrier \\u2014 recurrent state in .z (see cand_update_fused: the
//            GRU output tensor doubles as next frame's h_prev, hidden in .z)
// Weight: 9 vec4 per kpos = (z_w_b, z_w_h, r_w_b, r_w_h). Bias .xy = (z, r).
// Output: vec4(z, r, 0, 0) \\u2014 consumed by cand_update_fused.
// Binding order: u_in(0), h_prev(1), weights(2), bias(3), params(4), output(5)

struct Params { h: u32, w: u32, _pad0: u32, _pad1: u32 }

@group(0) @binding(0) var<storage, read>       u_in_buf   : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       h_prev_buf : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<vec4<f32>>;   // 9 vec4
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f32>>;   // .xy = (z, r)
@group(0) @binding(4) var<uniform>             params     : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    let bias = bias_buf[0].xy;
    var z_pre = bias.x;
    var r_pre = bias.y;

    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            let idx  = u32(iy) * params.w + u32(ix);
            let b_n  = u_in_buf[idx].y;
            let h_n  = h_prev_buf[idx].z;
            let w    = weight_buf[kpos];
            z_pre += w.x * b_n + w.y * h_n;
            r_pre += w.z * b_n + w.w * h_n;
        }
    }

    let z = 1.0 / (1.0 + exp(-z_pre));
    let r = 1.0 / (1.0 + exp(-r_pre));
    output_buf[y * params.w + x] = vec4<f32>(z, r, 0.0, 0.0);
}
\`;var dr=\`enable f16;

// gates_fused \\u2014 full f16 variant. See gates_fused.wgsl for layout details.
// ConvGRU z + r gates (production config c_up=2, recurrent=1).
// Binding order: u_in(0), h_prev(1), weights(2), bias(3), params(4), output(5)

struct Params { h: u32, w: u32, _pad0: u32, _pad1: u32 }

@group(0) @binding(0) var<storage, read>       u_in_buf   : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       h_prev_buf : array<vec4<f16>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<vec4<f16>>;
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(4) var<uniform>             params     : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    let bias = bias_buf[0].xy;
    var z_pre = bias.x;
    var r_pre = bias.y;

    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            let idx  = u32(iy) * params.w + u32(ix);
            let b_n  = u_in_buf[idx].y;
            let h_n  = h_prev_buf[idx].z;
            let w    = weight_buf[kpos];
            z_pre += w.x * b_n + w.y * h_n;
            r_pre += w.z * b_n + w.w * h_n;
        }
    }

    let z = 1.0h / (1.0h + exp(-z_pre));
    let r = 1.0h / (1.0h + exp(-r_pre));
    output_buf[y * params.w + x] = vec4<f16>(z, r, 0.0h, 0.0h);
}
\`;var We=class extends f{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?dr:cr,this.output=r.tensor(e.h,e.w,4),this.inputs=[e,i],this.weights=[r.upload(m(o.weights)),r.upload(y(o.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),1]}};var mr=\`// cand_update_fused: ConvGRU candidate path + state update + output, fused.
// Production config (c_up=2, recurrent=1):
//   u_in      : c_up=2 (.x = a passthrough, .y = b recurrent)
//   h_prev    : hidden carrier \\u2014 recurrent state in .z (the previous frame's
//               output of THIS op; on frame 0 it is a zero tensor)
//   gates_out : (.x = z, .y = r) from gates_fused
// cand_pre = bias + \\u03A3_kpos (b_w*b_n + rh_w*(r_n*h_n));  h_til = tanh(cand_pre);
//   h_new = (1-z)*h_prev + z*h_til;  b_out = b + gamma*h_new.
// Output: vec4(a, b_out, h_new, 0) \\u2014 .xy is the c_up=2 feature consumed
// downstream; .z carries h_new so the same tensor is fed back as next h_prev
// (no separate hidden-state buffer). Cand weight: 9 vec4 per kpos, .xy = (b_w, rh_w).
// Binding order: u_in(0), h_prev(1), gates_out(2), weight(3), bias(4), gamma(5), params(6), output(7)

struct Params { h: u32, w: u32, _pad0: u32, _pad1: u32 }

@group(0) @binding(0) var<storage, read>       u_in_buf      : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       h_prev_buf    : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read>       gates_out_buf : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read>       weight_buf    : array<vec4<f32>>;   // 9 vec4
@group(0) @binding(4) var<storage, read>       bias_buf      : array<vec4<f32>>;   // .x = cand_bias
@group(0) @binding(5) var<storage, read>       gamma_buf     : array<vec4<f32>>;   // .x = gamma
@group(0) @binding(6) var<uniform>             params        : Params;
@group(0) @binding(7) var<storage, read_write> output_buf    : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    var cand_pre = bias_buf[0].x;
    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            let idx  = u32(iy) * params.w + u32(ix);
            let b_n  = u_in_buf[idx].y;
            let h_n  = h_prev_buf[idx].z;
            let r_n  = gates_out_buf[idx].y;
            let w    = weight_buf[kpos].xy;
            cand_pre += w.x * b_n + w.y * (r_n * h_n);
        }
    }

    let h_til      = tanh(cand_pre);
    let cur        = y * params.w + x;
    let u_cur      = u_in_buf[cur];
    let z_cur      = gates_out_buf[cur].x;
    let h_prev_cur = h_prev_buf[cur].z;
    let h_new      = (1.0 - z_cur) * h_prev_cur + z_cur * h_til;
    let b_out      = u_cur.y + gamma_buf[0].x * h_new;
    output_buf[cur] = vec4<f32>(u_cur.x, b_out, h_new, 0.0);
}
\`;var fr=\`enable f16;

// cand_update_fused \\u2014 full f16 variant. See cand_update_fused.wgsl for details.
// ConvGRU candidate + state update + output (production config c_up=2, recurrent=1).
// Binding order: u_in(0), h_prev(1), gates_out(2), weight(3), bias(4), gamma(5), params(6), output(7)

struct Params { h: u32, w: u32, _pad0: u32, _pad1: u32 }

@group(0) @binding(0) var<storage, read>       u_in_buf      : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       h_prev_buf    : array<vec4<f16>>;
@group(0) @binding(2) var<storage, read>       gates_out_buf : array<vec4<f16>>;
@group(0) @binding(3) var<storage, read>       weight_buf    : array<vec4<f16>>;
@group(0) @binding(4) var<storage, read>       bias_buf      : array<vec4<f16>>;
@group(0) @binding(5) var<storage, read>       gamma_buf     : array<vec4<f16>>;
@group(0) @binding(6) var<uniform>             params        : Params;
@group(0) @binding(7) var<storage, read_write> output_buf    : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    var cand_pre = bias_buf[0].x;
    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            let idx  = u32(iy) * params.w + u32(ix);
            let b_n  = u_in_buf[idx].y;
            let h_n  = h_prev_buf[idx].z;
            let r_n  = gates_out_buf[idx].y;
            let w    = weight_buf[kpos].xy;
            cand_pre += w.x * b_n + w.y * (r_n * h_n);
        }
    }

    let h_til      = tanh(cand_pre);
    let cur        = y * params.w + x;
    let u_cur      = u_in_buf[cur];
    let z_cur      = gates_out_buf[cur].x;
    let h_prev_cur = h_prev_buf[cur].z;
    let h_new      = (1.0h - z_cur) * h_prev_cur + z_cur * h_til;
    let b_out      = u_cur.y + gamma_buf[0].x * h_new;
    output_buf[cur] = vec4<f16>(u_cur.x, b_out, h_new, 0.0h);
}
\`;var Pe=class extends f{constructor(r,e,i,o,n,s){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?fr:mr,this.output=r.tensor(e.h,e.w,4),this.inputs=[e,i,o],this.weights=[r.upload(m(n.weights)),r.upload(y(n.bias)),r.upload(y(s))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),1]}};var hr=\`// conv_expand: bespoke N\\u21922 conv 3\\xD73 (pad 1) + relu (wrapper expand_feat).
// Expands feat_lr (in_c, mult of 4) to the c_up=2 carrier \\u2014 output .xy = the 2
// native channels, .zw = 0. mat4x2 per (kpos, in_group) with a vec2 accumulator.
// Weight: 9 * in_groups mat4x2 (8 floats each, col-major). Bias .xy.
// Binding order: input(0), weights(1), bias(2), params(3), output(4)

struct Params { h: u32, w: u32, in_groups: u32, _pad: u32 }

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       weight_buf : array<mat4x2<f32>>;
@group(0) @binding(2) var<storage, read>       bias_buf   : array<vec4<f32>>;   // .xy used
@group(0) @binding(3) var<uniform>             params     : Params;
@group(0) @binding(4) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    var result = bias_buf[0].xy;
    let I = params.in_groups;

    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            for (var i = 0u; i < I; i++) {
                let in_idx = (u32(iy) * params.w + u32(ix)) * I + i;
                result += weight_buf[kpos * I + i] * input_buf[in_idx];
            }
        }
    }

    result = max(result, vec2<f32>(0.0));   // expand_feat is F.relu
    output_buf[y * params.w + x] = vec4<f32>(result, 0.0, 0.0);
}
\`;var _r=\`enable f16;

// conv_expand \\u2014 full f16 variant. See conv_expand.wgsl for layout details.
// Bespoke N\\u21922 conv 3\\xD73 (pad 1) + relu (wrapper expand_feat).
// Binding order: input(0), weights(1), bias(2), params(3), output(4)

struct Params { h: u32, w: u32, in_groups: u32, _pad: u32 }

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       weight_buf : array<mat4x2<f16>>;
@group(0) @binding(2) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(3) var<uniform>             params     : Params;
@group(0) @binding(4) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    var result = bias_buf[0].xy;
    let I = params.in_groups;

    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            for (var i = 0u; i < I; i++) {
                let in_idx = (u32(iy) * params.w + u32(ix)) * I + i;
                result += weight_buf[kpos * I + i] * input_buf[in_idx];
            }
        }
    }

    result = max(result, vec2<f16>(0.0h));
    output_buf[y * params.w + x] = vec4<f16>(result, 0.0h, 0.0h);
}
\`;var Ge=class extends f{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?_r:hr;let o=e.c/4;this.output=r.tensor(e.h,e.w,4),this.inputs=[e],this.weights=[r.upload(m(i.weights)),r.upload(y(i.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,o,0])),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),1]}};var gr=\`// cat_conv_6to2: fused concat(u, d) + 6\\u21922 conv 3\\xD73 (pad 1) + relu (E up1_combine).
// u = c_up=2 carrier (.xy); d = c_high=4 (full vec4). Both same resolution.
// Channel order concat([u, d]) = (u.x, u.y, d.x, d.y, d.z, d.w), split into
//   v3a = (u.x, u.y, d.x)   v3b = d.yzw
// Weight: 9 * 2 mat3x2 (6 floats each, col-major). Bias .xy. Output c_up=2 carrier.
// Binding order: u(0), d(1), weights(2), bias(3), params(4), output(5)

struct Params { h: u32, w: u32, _pad0: u32, _pad1: u32 }

@group(0) @binding(0) var<storage, read>       u_buf      : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       d_buf      : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<mat3x2<f32>>;
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f32>>;   // .xy used
@group(0) @binding(4) var<uniform>             params     : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    var result = bias_buf[0].xy;
    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            let pix = u32(iy) * params.w + u32(ix);
            let u = u_buf[pix];
            let d = d_buf[pix];
            let v3a = vec3<f32>(u.xy, d.x);
            let v3b = d.yzw;
            result += weight_buf[kpos * 2u + 0u] * v3a;
            result += weight_buf[kpos * 2u + 1u] * v3b;
        }
    }

    result = max(result, vec2<f32>(0.0));   // up1_combine is F.relu
    output_buf[y * params.w + x] = vec4<f32>(result, 0.0, 0.0);
}
\`;var br=\`enable f16;

// cat_conv_6to2 \\u2014 full f16 variant. See cat_conv_6to2.wgsl for layout details.
// Fused concat(u, d) + 6\\u21922 conv 3\\xD73 (pad 1) + relu (E up1_combine).
// Binding order: u(0), d(1), weights(2), bias(3), params(4), output(5)

struct Params { h: u32, w: u32, _pad0: u32, _pad1: u32 }

@group(0) @binding(0) var<storage, read>       u_buf      : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       d_buf      : array<vec4<f16>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<mat3x2<f16>>;
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(4) var<uniform>             params     : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    var result = bias_buf[0].xy;
    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            let pix = u32(iy) * params.w + u32(ix);
            let u = u_buf[pix];
            let d = d_buf[pix];
            let v3a = vec3<f16>(u.xy, d.x);
            let v3b = d.yzw;
            result += weight_buf[kpos * 2u + 0u] * v3a;
            result += weight_buf[kpos * 2u + 1u] * v3b;
        }
    }

    result = max(result, vec2<f16>(0.0h));
    output_buf[y * params.w + x] = vec4<f16>(result, 0.0h, 0.0h);
}
\`;var Be=class extends f{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?br:gr,this.output=r.tensor(e.h,e.w,4),this.inputs=[e,i],this.weights=[r.upload(m(o.weights)),r.upload(y(o.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),1]}};var vr=\`// down_adapter: fused stride-N 3\\xD73 conv (4\\u21924) + relu + 1\\xD71 adapter (4\\u21923, no
// act) into one dispatch. E variant: down2 (c_high=4 \\u2192 c_low=4, stride 2) +
// adapter. A/B variant: down1 (RGB .xyz \\u2192 4, stride 2/3) + adapter (the down
// weight's 4th input column is zeroed at export for RGB input). Symmetric pad.
//
// down_w: 9 mat4x4 (3\\xD73, 4\\u21924). adapt_w: 1 mat4x4 (1\\xD71, 4\\u21924 padded from 4\\u21923,
// last row 0). adapt_b: .xyz used. Output: vec4(adapter.xyz, 0).
// Binding order: input(0), down_w(1), down_b(2), adapt_w(3), adapt_b(4), params(5), output(6)

struct Params {
    in_h     : u32,
    in_w     : u32,
    out_h    : u32,
    out_w    : u32,
    stride   : u32,
    pad_top  : u32,
    pad_left : u32,
    _pad     : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       down_w     : array<mat4x4<f32>>;   // 9 mat4x4
@group(0) @binding(2) var<storage, read>       down_b     : array<vec4<f32>>;     // 1 vec4
@group(0) @binding(3) var<storage, read>       adapt_w    : array<mat4x4<f32>>;   // 1 mat4x4
@group(0) @binding(4) var<storage, read>       adapt_b    : array<vec4<f32>>;     // .xyz used
@group(0) @binding(5) var<uniform>             p          : Params;
@group(0) @binding(6) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= p.out_w || y >= p.out_h) { return; }

    var down_out = down_b[0];
    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y * p.stride + ky) - i32(p.pad_top);
            let ix = i32(x * p.stride + kx) - i32(p.pad_left);
            if (iy < 0 || ix < 0 || u32(iy) >= p.in_h || u32(ix) >= p.in_w) { continue; }
            let kpos = ky * 3u + kx;
            down_out += down_w[kpos] * input_buf[u32(iy) * p.in_w + u32(ix)];
        }
    }
    down_out = max(down_out, vec4<f32>(0.0));   // F.relu

    let adapt_out = adapt_w[0] * down_out + adapt_b[0];
    output_buf[y * p.out_w + x] = vec4<f32>(adapt_out.xyz, 0.0);
}
\`;var xr=\`enable f16;

// down_adapter \\u2014 full f16 variant. See down_adapter.wgsl for layout details.
// Fused stride-N 3\\xD73 conv (4\\u21924) + relu + 1\\xD71 adapter (4\\u21923, no act).
// Binding order: input(0), down_w(1), down_b(2), adapt_w(3), adapt_b(4), params(5), output(6)

struct Params {
    in_h     : u32,
    in_w     : u32,
    out_h    : u32,
    out_w    : u32,
    stride   : u32,
    pad_top  : u32,
    pad_left : u32,
    _pad     : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       down_w     : array<mat4x4<f16>>;
@group(0) @binding(2) var<storage, read>       down_b     : array<vec4<f16>>;
@group(0) @binding(3) var<storage, read>       adapt_w    : array<mat4x4<f16>>;
@group(0) @binding(4) var<storage, read>       adapt_b    : array<vec4<f16>>;
@group(0) @binding(5) var<uniform>             p          : Params;
@group(0) @binding(6) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= p.out_w || y >= p.out_h) { return; }

    var down_out = down_b[0];
    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y * p.stride + ky) - i32(p.pad_top);
            let ix = i32(x * p.stride + kx) - i32(p.pad_left);
            if (iy < 0 || ix < 0 || u32(iy) >= p.in_h || u32(ix) >= p.in_w) { continue; }
            let kpos = ky * 3u + kx;
            down_out += down_w[kpos] * input_buf[u32(iy) * p.in_w + u32(ix)];
        }
    }
    down_out = max(down_out, vec4<f16>(0.0h));

    let adapt_out = adapt_w[0] * down_out + adapt_b[0];
    output_buf[y * p.out_w + x] = vec4<f16>(adapt_out.xyz, 0.0h);
}
\`;var Ue=class extends f{constructor(r,e,i,o,n){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?xr:vr;let s=T(e.h,3,n.stride,1),p=T(e.w,3,n.stride,1),l=C(1,e.h,s,3,n.stride),c=C(1,e.w,p,3,n.stride);this.output=r.tensor(s,p,4),this.inputs=[e],this.weights=[r.upload(m(i.weights)),r.upload(y(i.bias)),r.upload(m(o.weights)),r.upload(y(o.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,s,p,n.stride,l,c,0])),this.defaultSetup(),this.dispatch=[Math.ceil(p/8),Math.ceil(s/8),1]}};var yr=\`// up_final: fused concat(u, rgb) \\u2192 conv 3\\xD73 5\\u21921 \\u2192 sigmoid (A/B alpha head).
// u = c_up=2 carrier (.xy); rgb = x_hr (.xyz). 5 inputs \\u2192 1 alpha (output .x).
// Weight: 18 vec4 \\u2014 [0..8] = (w0, w1, 0, 0) for u per kpos; [9..17] =
// (w2, w3, w4, 0) for rgb per kpos. Bias .x.
// Binding order: u(0), rgb(1), weights(2), bias(3), params(4), output(5)

struct Params { h: u32, w: u32, _pad0: u32, _pad1: u32 }

@group(0) @binding(0) var<storage, read>       u_gru      : array<vec4<f32>>;   // .xy
@group(0) @binding(1) var<storage, read>       rgb        : array<vec4<f32>>;   // .xyz
@group(0) @binding(2) var<storage, read>       weight_buf : array<vec4<f32>>;   // 18 vec4
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f32>>;   // .x
@group(0) @binding(4) var<uniform>             params     : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f32>>;   // .x = alpha

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    var acc = bias_buf[0].x;
    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            let p = u32(iy) * params.w + u32(ix);
            acc += dot(weight_buf[kpos].xy,       u_gru[p].xy);
            acc += dot(weight_buf[9u + kpos].xyz, rgb[p].xyz);
        }
    }

    output_buf[y * params.w + x] = vec4<f32>(1.0 / (1.0 + exp(-acc)), 0.0, 0.0, 0.0);
}
\`;var wr=\`enable f16;

// up_final \\u2014 full f16 variant. See up_final.wgsl for layout details.
// Fused concat(u, rgb) \\u2192 conv 3\\xD73 5\\u21921 \\u2192 sigmoid (A/B alpha head).
// Binding order: u(0), rgb(1), weights(2), bias(3), params(4), output(5)

struct Params { h: u32, w: u32, _pad0: u32, _pad1: u32 }

@group(0) @binding(0) var<storage, read>       u_gru      : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       rgb        : array<vec4<f16>>;
@group(0) @binding(2) var<storage, read>       weight_buf : array<vec4<f16>>;
@group(0) @binding(3) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(4) var<uniform>             params     : Params;
@group(0) @binding(5) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    var acc = bias_buf[0].x;
    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            let p = u32(iy) * params.w + u32(ix);
            acc += dot(weight_buf[kpos].xy,       u_gru[p].xy);
            acc += dot(weight_buf[9u + kpos].xyz, rgb[p].xyz);
        }
    }

    output_buf[y * params.w + x] = vec4<f16>(1.0h / (1.0h + exp(-acc)), 0.0h, 0.0h, 0.0h);
}
\`;var Se=class extends f{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?wr:yr,this.output=r.tensor(e.h,e.w,4),this.inputs=[e,i],this.weights=[r.upload(m(o.weights)),r.upload(y(o.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),1]}};var kr=\`// up_final_skip: C/D alpha head. Fused concat(u, d_full, rgb) \\u2192 conv 3\\xD73 9\\u21921
// \\u2192 sigmoid. u = c_up=2 (.xy); d_full = c_high=4 full-res skip (full vec4);
// rgb = x_hr (.xyz). Channel order concat = 2 + 4 + 3 = 9. Output .x = alpha.
// Weight: 27 vec4 (3 per kpos): [kpos*3+0]=(w0,w1,0,0) u; [kpos*3+1]=(w2..w5)
// d_full; [kpos*3+2]=(w6,w7,w8,0) rgb. Bias .x.
// Binding order: u(0), d_full(1), rgb(2), weights(3), bias(4), params(5), output(6)

struct Params { h: u32, w: u32, _pad0: u32, _pad1: u32 }

@group(0) @binding(0) var<storage, read>       u_gru      : array<vec4<f32>>;   // .xy
@group(0) @binding(1) var<storage, read>       d_full     : array<vec4<f32>>;   // full vec4
@group(0) @binding(2) var<storage, read>       rgb        : array<vec4<f32>>;   // .xyz
@group(0) @binding(3) var<storage, read>       weight_buf : array<vec4<f32>>;   // 27 vec4
@group(0) @binding(4) var<storage, read>       bias_buf   : array<vec4<f32>>;   // .x
@group(0) @binding(5) var<uniform>             params     : Params;
@group(0) @binding(6) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    var acc = bias_buf[0].x;
    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            let p = u32(iy) * params.w + u32(ix);
            acc += dot(weight_buf[kpos * 3u + 0u].xy,  u_gru[p].xy);
            acc += dot(weight_buf[kpos * 3u + 1u],     d_full[p]);
            acc += dot(weight_buf[kpos * 3u + 2u].xyz, rgb[p].xyz);
        }
    }

    output_buf[y * params.w + x] = vec4<f32>(1.0 / (1.0 + exp(-acc)), 0.0, 0.0, 0.0);
}
\`;var Tr=\`enable f16;

// up_final_skip \\u2014 full f16 variant. See up_final_skip.wgsl for layout details.
// C/D alpha head: fused concat(u, d_full, rgb) \\u2192 conv 3\\xD73 9\\u21921 \\u2192 sigmoid.
// Binding order: u(0), d_full(1), rgb(2), weights(3), bias(4), params(5), output(6)

struct Params { h: u32, w: u32, _pad0: u32, _pad1: u32 }

@group(0) @binding(0) var<storage, read>       u_gru      : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       d_full     : array<vec4<f16>>;
@group(0) @binding(2) var<storage, read>       rgb        : array<vec4<f16>>;
@group(0) @binding(3) var<storage, read>       weight_buf : array<vec4<f16>>;
@group(0) @binding(4) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(5) var<uniform>             params     : Params;
@group(0) @binding(6) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x; let y = gid.y;
    if (x >= params.w || y >= params.h) { return; }

    var acc = bias_buf[0].x;
    for (var ky = 0u; ky < 3u; ky++) {
        for (var kx = 0u; kx < 3u; kx++) {
            let iy = i32(y + ky) - 1; let ix = i32(x + kx) - 1;
            if (iy < 0 || ix < 0 || u32(iy) >= params.h || u32(ix) >= params.w) { continue; }
            let kpos = ky * 3u + kx;
            let p = u32(iy) * params.w + u32(ix);
            acc += dot(weight_buf[kpos * 3u + 0u].xy,  u_gru[p].xy);
            acc += dot(weight_buf[kpos * 3u + 1u],     d_full[p]);
            acc += dot(weight_buf[kpos * 3u + 2u].xyz, rgb[p].xyz);
        }
    }

    output_buf[y * params.w + x] = vec4<f16>(1.0h / (1.0h + exp(-acc)), 0.0h, 0.0h, 0.0h);
}
\`;var Le=class extends f{constructor(r,e,i,o,n){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Tr:kr,this.output=r.tensor(e.h,e.w,4),this.inputs=[e,i,o],this.weights=[r.upload(m(n.weights)),r.upload(y(n.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(e.w/8),Math.ceil(e.h/8),1]}};var Cr=\`// Bilinear upsample + channel concat fused.
// input_a is the decoder tensor at small spatial resolution (in_h \\xD7 in_w).
// input_b is the encoder skip feature already at output resolution (out_h \\xD7 out_w).
// For output channels 0..a_groups-1: bilinearly interpolate from input_a.
// For output channels a_groups..out_groups-1: copy directly from input_b.
// Eliminates the intermediate upsample buffer and the separate concat dispatch.

struct Params {
    in_h       : u32,   // input_a spatial height
    in_w       : u32,   // input_a spatial width
    out_h      : u32,
    out_w      : u32,
    a_groups   : u32,   // input_a channel groups (upsampled)
    b_groups   : u32,   // input_b channel groups (encoder feature)
    out_groups : u32,   // a_groups + b_groups
    _pad0      : u32,
}

@group(0) @binding(0) var<storage, read>       input_a    : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       input_b    : array<vec4<f32>>;
@group(0) @binding(2) var<uniform>             params     : Params;
@group(0) @binding(3) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let c  = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || c >= params.out_groups) { return; }

    let out_idx = oy * params.out_w * params.out_groups + ox * params.out_groups + c;

    if (c < params.a_groups) {
        let IH = params.in_h;
        let IW = params.in_w;
        let AG = params.a_groups;

        let src_x = (f32(ox) + 0.5) * (f32(IW) / f32(params.out_w)) - 0.5;
        let src_y = (f32(oy) + 0.5) * (f32(IH) / f32(params.out_h)) - 0.5;

        let x0 = u32(clamp(i32(floor(src_x)),     0, i32(IW) - 1));
        let x1 = u32(clamp(i32(floor(src_x)) + 1, 0, i32(IW) - 1));
        let y0 = u32(clamp(i32(floor(src_y)),     0, i32(IH) - 1));
        let y1 = u32(clamp(i32(floor(src_y)) + 1, 0, i32(IH) - 1));

        let wx = src_x - floor(src_x);
        let wy = src_y - floor(src_y);

        let tl = input_a[y0 * IW * AG + x0 * AG + c];
        let tr = input_a[y0 * IW * AG + x1 * AG + c];
        let bl = input_a[y1 * IW * AG + x0 * AG + c];
        let br = input_a[y1 * IW * AG + x1 * AG + c];

        output_buf[out_idx] = (1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
                            +        wy  * ((1.0 - wx) * bl + wx * br);
    } else {
        let c_b = c - params.a_groups;
        output_buf[out_idx] = input_b[oy * params.out_w * params.b_groups + ox * params.b_groups + c_b];
    }
}
\`;var Wr=\`enable f16;

// Bilinear upsample + channel concat fused \\u2014 full f16 variant.
// Bilinear weights (wx, wy) and intermediate blends computed in f32; result cast to f16.

struct Params {
    in_h       : u32,
    in_w       : u32,
    out_h      : u32,
    out_w      : u32,
    a_groups   : u32,
    b_groups   : u32,
    out_groups : u32,
    _pad0      : u32,
}

@group(0) @binding(0) var<storage, read>       input_a    : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       input_b    : array<vec4<f16>>;
@group(0) @binding(2) var<uniform>             params     : Params;
@group(0) @binding(3) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let c  = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || c >= params.out_groups) { return; }

    let out_idx = oy * params.out_w * params.out_groups + ox * params.out_groups + c;

    if (c < params.a_groups) {
        let IH = params.in_h;
        let IW = params.in_w;
        let AG = params.a_groups;

        let src_x = (f32(ox) + 0.5) * (f32(IW) / f32(params.out_w)) - 0.5;
        let src_y = (f32(oy) + 0.5) * (f32(IH) / f32(params.out_h)) - 0.5;

        let x0 = u32(clamp(i32(floor(src_x)),     0, i32(IW) - 1));
        let x1 = u32(clamp(i32(floor(src_x)) + 1, 0, i32(IW) - 1));
        let y0 = u32(clamp(i32(floor(src_y)),     0, i32(IH) - 1));
        let y1 = u32(clamp(i32(floor(src_y)) + 1, 0, i32(IH) - 1));

        let wx = src_x - floor(src_x);
        let wy = src_y - floor(src_y);

        let tl = vec4<f32>(input_a[y0 * IW * AG + x0 * AG + c]);
        let tr = vec4<f32>(input_a[y0 * IW * AG + x1 * AG + c]);
        let bl = vec4<f32>(input_a[y1 * IW * AG + x0 * AG + c]);
        let br = vec4<f32>(input_a[y1 * IW * AG + x1 * AG + c]);

        let result = (1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
                   +        wy  * ((1.0 - wx) * bl + wx * br);
        output_buf[out_idx] = vec4<f16>(result);
    } else {
        let c_b = c - params.a_groups;
        output_buf[out_idx] = input_b[oy * params.out_w * params.b_groups + ox * params.b_groups + c_b];
    }
}
\`;var Fe=class extends f{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Wr:Cr;let n=e.c/4,s=i.c/4,p=n+s;this.output=r.tensor(o.outH,o.outW,e.c+i.c),this.inputs=[e,i],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,o.outH,o.outW,n,s,p,0])),this.defaultSetup(),this.dispatch=[Math.ceil(o.outW/8),Math.ceil(o.outH/8),p]}};var Pr=\`// Bilinear upsample + 1\\xD71 pointwise conv fused.
// For each output pixel, bilinearly samples the small input for each in_group,
// immediately applies the 1\\xD71 conv weights, and writes the activated result.
// Eliminates the intermediate full-resolution upsample buffer.

struct Params {
    in_h       : u32,
    in_w       : u32,
    out_h      : u32,
    out_w      : u32,
    in_groups  : u32,
    out_groups : u32,
    activation : u32,
    _pad0      : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<storage, read>       weight_buf : array<mat4x4<f32>>;
@group(0) @binding(2) var<storage, read>       bias_buf   : array<vec4<f32>>;
@group(0) @binding(3) var<uniform>             params     : Params;
@group(0) @binding(4) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let og = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || og >= params.out_groups) { return; }

    let IH = params.in_h;
    let IW = params.in_w;
    let IG = params.in_groups;

    let src_x = (f32(ox) + 0.5) * (f32(IW) / f32(params.out_w)) - 0.5;
    let src_y = (f32(oy) + 0.5) * (f32(IH) / f32(params.out_h)) - 0.5;

    let x0 = u32(clamp(i32(floor(src_x)),     0, i32(IW) - 1));
    let x1 = u32(clamp(i32(floor(src_x)) + 1, 0, i32(IW) - 1));
    let y0 = u32(clamp(i32(floor(src_y)),     0, i32(IH) - 1));
    let y1 = u32(clamp(i32(floor(src_y)) + 1, 0, i32(IH) - 1));

    let wx = src_x - floor(src_x);
    let wy = src_y - floor(src_y);

    var result = bias_buf[og];

    for (var ig = 0u; ig < IG; ig++) {
        let tl = input_buf[y0 * IW * IG + x0 * IG + ig];
        let tr = input_buf[y0 * IW * IG + x1 * IG + ig];
        let bl = input_buf[y1 * IW * IG + x0 * IG + ig];
        let br = input_buf[y1 * IW * IG + x1 * IG + ig];

        let sampled = (1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
                    +        wy  * ((1.0 - wx) * bl + wx * br);

        result += weight_buf[og * IG + ig] * sampled;
    }

    if (params.activation == 1u) {
        result = clamp(result, vec4<f32>(0.0), vec4<f32>(6.0));
    } else if (params.activation == 2u) {
        result = result * clamp(result + 3.0, vec4<f32>(0.0), vec4<f32>(6.0)) / 6.0;
    }

    output_buf[oy * params.out_w * params.out_groups + ox * params.out_groups + og] = result;
}
\`;var Gr=\`enable f16;

// Bilinear upsample + 1\\xD71 pointwise conv fused \\u2014 full f16 variant.
// Bilinear weights and intermediate blends computed in f32; conv accumulation in f16.

struct Params {
    in_h       : u32,
    in_w       : u32,
    out_h      : u32,
    out_w      : u32,
    in_groups  : u32,
    out_groups : u32,
    activation : u32,
    _pad0      : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read>       weight_buf : array<mat4x4<f16>>;
@group(0) @binding(2) var<storage, read>       bias_buf   : array<vec4<f16>>;
@group(0) @binding(3) var<uniform>             params     : Params;
@group(0) @binding(4) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let og = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || og >= params.out_groups) { return; }

    let IH = params.in_h;
    let IW = params.in_w;
    let IG = params.in_groups;

    let src_x = (f32(ox) + 0.5) * (f32(IW) / f32(params.out_w)) - 0.5;
    let src_y = (f32(oy) + 0.5) * (f32(IH) / f32(params.out_h)) - 0.5;

    let x0 = u32(clamp(i32(floor(src_x)),     0, i32(IW) - 1));
    let x1 = u32(clamp(i32(floor(src_x)) + 1, 0, i32(IW) - 1));
    let y0 = u32(clamp(i32(floor(src_y)),     0, i32(IH) - 1));
    let y1 = u32(clamp(i32(floor(src_y)) + 1, 0, i32(IH) - 1));

    let wx = src_x - floor(src_x);
    let wy = src_y - floor(src_y);

    var result = bias_buf[og];

    for (var ig = 0u; ig < IG; ig++) {
        let tl = vec4<f32>(input_buf[y0 * IW * IG + x0 * IG + ig]);
        let tr = vec4<f32>(input_buf[y0 * IW * IG + x1 * IG + ig]);
        let bl = vec4<f32>(input_buf[y1 * IW * IG + x0 * IG + ig]);
        let br = vec4<f32>(input_buf[y1 * IW * IG + x1 * IG + ig]);

        let sampled = vec4<f16>((1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
                              +        wy  * ((1.0 - wx) * bl + wx * br));

        result += weight_buf[og * IG + ig] * sampled;
    }

    if (params.activation == 1u) {
        result = clamp(result, vec4<f16>(0.0h), vec4<f16>(6.0h));
    } else if (params.activation == 2u) {
        result = result * clamp(result + 3.0h, vec4<f16>(0.0h), vec4<f16>(6.0h)) / 6.0h;
    }

    output_buf[oy * params.out_w * params.out_groups + ox * params.out_groups + og] = result;
}
\`;var Ee=class extends f{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Gr:Pr;let n=e.c/4,s=o.outChannels/4;this.output=r.tensor(o.outH,o.outW,o.outChannels),this.inputs=[e],this.weights=[r.upload(m(i.weights)),r.upload(m(i.bias))],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,o.outH,o.outW,n,s,o.activation==="relu6"?1:0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(o.outW/8),Math.ceil(o.outH/8),s]}};var Br=\`// Bilinear upsample + sigmoid fused.
// Identical to bilinear_upsample.wgsl except sigmoid is applied at write time.
// Eliminates the intermediate full-resolution buffer and the separate sigmoid dispatch.

struct Params {
    in_h           : u32,
    in_w           : u32,
    out_h          : u32,
    out_w          : u32,
    channel_groups : u32,
    _pad0          : u32,
    _pad1          : u32,
    _pad2          : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f32>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let c  = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || c >= params.channel_groups) {
        return;
    }

    let IH = params.in_h;
    let IW = params.in_w;
    let C  = params.channel_groups;

    let src_x = (f32(ox) + 0.5) * (f32(IW) / f32(params.out_w)) - 0.5;
    let src_y = (f32(oy) + 0.5) * (f32(IH) / f32(params.out_h)) - 0.5;

    let x0 = u32(clamp(i32(floor(src_x)),     0, i32(IW) - 1));
    let x1 = u32(clamp(i32(floor(src_x)) + 1, 0, i32(IW) - 1));
    let y0 = u32(clamp(i32(floor(src_y)),     0, i32(IH) - 1));
    let y1 = u32(clamp(i32(floor(src_y)) + 1, 0, i32(IH) - 1));

    let wx = src_x - floor(src_x);
    let wy = src_y - floor(src_y);

    let tl = input_buf[y0 * IW * C + x0 * C + c];
    let tr = input_buf[y0 * IW * C + x1 * C + c];
    let bl = input_buf[y1 * IW * C + x0 * C + c];
    let br = input_buf[y1 * IW * C + x1 * C + c];

    let result = (1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
               +        wy  * ((1.0 - wx) * bl + wx * br);

    output_buf[oy * params.out_w * C + ox * C + c] = 1.0 / (1.0 + exp(-result));
}
\`;var Ur=\`enable f16;

// Bilinear upsample + sigmoid fused \\u2014 full f16 variant.
// Interpolation computed in f32 for accuracy; sigmoid and result cast to f16.

struct Params {
    in_h           : u32,
    in_w           : u32,
    out_h          : u32,
    out_w          : u32,
    channel_groups : u32,
    _pad0          : u32,
    _pad1          : u32,
    _pad2          : u32,
}

@group(0) @binding(0) var<storage, read>       input_buf  : array<vec4<f16>>;
@group(0) @binding(1) var<uniform>             params     : Params;
@group(0) @binding(2) var<storage, read_write> output_buf : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let ox = gid.x;
    let oy = gid.y;
    let c  = gid.z;

    if (ox >= params.out_w || oy >= params.out_h || c >= params.channel_groups) {
        return;
    }

    let IH = params.in_h;
    let IW = params.in_w;
    let C  = params.channel_groups;

    let src_x = (f32(ox) + 0.5) * (f32(IW) / f32(params.out_w)) - 0.5;
    let src_y = (f32(oy) + 0.5) * (f32(IH) / f32(params.out_h)) - 0.5;

    let x0 = u32(clamp(i32(floor(src_x)),     0, i32(IW) - 1));
    let x1 = u32(clamp(i32(floor(src_x)) + 1, 0, i32(IW) - 1));
    let y0 = u32(clamp(i32(floor(src_y)),     0, i32(IH) - 1));
    let y1 = u32(clamp(i32(floor(src_y)) + 1, 0, i32(IH) - 1));

    let wx = src_x - floor(src_x);
    let wy = src_y - floor(src_y);

    let tl = vec4<f32>(input_buf[y0 * IW * C + x0 * C + c]);
    let tr = vec4<f32>(input_buf[y0 * IW * C + x1 * C + c]);
    let bl = vec4<f32>(input_buf[y1 * IW * C + x0 * C + c]);
    let br = vec4<f32>(input_buf[y1 * IW * C + x1 * C + c]);

    let result = (1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
               +        wy  * ((1.0 - wx) * bl + wx * br);

    output_buf[oy * params.out_w * C + ox * C + c] = vec4<f16>(1.0 / (1.0 + exp(-result)));
}
\`;var De=class extends f{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader");this.shader=r.dtype==="f16"?Ur:Br;let o=e.c/4;this.output=r.tensor(i.outH,i.outW,e.c),this.inputs=[e],this.createUniform("params","Params"),this.setUniform("params",new Uint32Array([e.h,e.w,i.outH,i.outW,o,0,0,0])),this.defaultSetup(),this.dispatch=[Math.ceil(i.outW/8),Math.ceil(i.outH/8),o]}};var Sr=\`// Composite an RGBA image over a solid background, gated by a 1-ch alpha.
// Fragment writes the canvas's swapchain texture (premultiplied output).
//
// Caller invariants (matched in CompositeSolidWebGPU):
//   - image and alpha are NHWC vec4 storage buffers, same h \\xD7 w
//   - canvas.width === image.w, canvas.height === image.h (no resampling)

struct VertexOut {
    @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs(@builtin(vertex_index) vi: u32) -> VertexOut {
    let verts = array<vec2<f32>, 6>(
        vec2(-1.0, -1.0), vec2( 1.0, -1.0), vec2(-1.0,  1.0),
        vec2(-1.0,  1.0), vec2( 1.0, -1.0), vec2( 1.0,  1.0),
    );
    var out: VertexOut;
    out.pos = vec4<f32>(verts[vi], 0.0, 1.0);
    return out;
}

struct Params {
    width:    u32,           // image width in pixels (= canvas width)
    _pad0:    u32,
    _pad1:    u32,
    _pad2:    u32,
    bgColor:  vec4<f32>,     // .rgb used; .a ignored
};

@group(0) @binding(0) var<storage, read> image:  array<vec4<f32>>;
@group(0) @binding(1) var<storage, read> alpha:  array<vec4<f32>>;
@group(0) @binding(2) var<uniform>       params: Params;

@fragment
fn fs(in: VertexOut) -> @location(0) vec4<f32> {
    let x = u32(in.pos.x);
    let y = u32(in.pos.y);
    let i = y * params.width + x;

    let fg = image[i].rgb;
    let a  = alpha[i].r;
    let rgb = fg * a + params.bgColor.rgb * (1.0 - a);
    return vec4<f32>(rgb, 1.0);
}
\`;var Lr=\`enable f16;

// Composite an RGBA image over a solid background, gated by a 1-ch alpha.
// f16 variant: image and alpha are stored as f16; values promote to f32 on
// read and the fragment writes f32 to the canvas swapchain (color attachment
// format is the swapchain's preferred format, always f32-equivalent).
//
// Caller invariants (matched in CompositeSolidWebGPU):
//   - image and alpha are NHWC vec4 storage buffers, same h \\xD7 w
//   - canvas.width === image.w, canvas.height === image.h (no resampling)

struct VertexOut {
    @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs(@builtin(vertex_index) vi: u32) -> VertexOut {
    let verts = array<vec2<f32>, 6>(
        vec2(-1.0, -1.0), vec2( 1.0, -1.0), vec2(-1.0,  1.0),
        vec2(-1.0,  1.0), vec2( 1.0, -1.0), vec2( 1.0,  1.0),
    );
    var out: VertexOut;
    out.pos = vec4<f32>(verts[vi], 0.0, 1.0);
    return out;
}

struct Params {
    width:    u32,
    _pad0:    u32,
    _pad1:    u32,
    _pad2:    u32,
    bgColor:  vec4<f32>,
};

@group(0) @binding(0) var<storage, read> image:  array<vec4<f16>>;
@group(0) @binding(1) var<storage, read> alpha:  array<vec4<f16>>;
@group(0) @binding(2) var<uniform>       params: Params;

@fragment
fn fs(in: VertexOut) -> @location(0) vec4<f32> {
    let x = u32(in.pos.x);
    let y = u32(in.pos.y);
    let i = y * params.width + x;

    let fg = vec3<f32>(image[i].rgb);
    let a  = f32(alpha[i].r);
    let rgb = fg * a + params.bgColor.rgb * (1.0 - a);
    return vec4<f32>(rgb, 1.0);
}
\`;var Oe=class{constructor(t,r,e,i){a(this,"backend",t);a(this,"pipeline");a(this,"bindGroup");a(this,"uniformBuffer");a(this,"outputView",null);if(r.h!==e.h||r.w!==e.w)throw new Error(\`CompositeSolid: image (\${r.h}\\xD7\${r.w}) and alpha (\${e.h}\\xD7\${e.w}) must match. Run the upscaler first.\`);let o=t.device;this.uniformBuffer=o.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let n=new ArrayBuffer(32);new Uint32Array(n,0,1)[0]=r.w,new Float32Array(n,16,4).set([i[0],i[1],i[2],0]),o.queue.writeBuffer(this.uniformBuffer,0,n);let s=t.dtype==="f16"?Lr:Sr,p=o.createShaderModule({code:s});this.pipeline=o.createRenderPipeline({layout:"auto",vertex:{module:p,entryPoint:"vs"},fragment:{module:p,entryPoint:"fs",targets:[{format:t.canvasFormat}]},primitive:{topology:"triangle-list"}}),this.bindGroup=o.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:r.buffer}},{binding:1,resource:{buffer:e.buffer}},{binding:2,resource:{buffer:this.uniformBuffer}}]})}setOutput(t){this.outputView=t.createView()}run(){if(!this.outputView)throw new Error("CompositeSolidWebGPU.run() called before setOutput()");let t=this.backend.device.createCommandEncoder(),r=t.beginRenderPass({colorAttachments:[{view:this.outputView,clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.pipeline),r.setBindGroup(0,this.bindGroup),r.draw(6),r.end(),this.backend.device.queue.submit([t.finish()]),this.outputView=null}};var Fr=\`// Like composite_solid but bg is an NHWC vec4 storage buffer (e.g. virtual
// background image, or a blurred copy of the input).

struct VertexOut {
    @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs(@builtin(vertex_index) vi: u32) -> VertexOut {
    let verts = array<vec2<f32>, 6>(
        vec2(-1.0, -1.0), vec2( 1.0, -1.0), vec2(-1.0,  1.0),
        vec2(-1.0,  1.0), vec2( 1.0, -1.0), vec2( 1.0,  1.0),
    );
    var out: VertexOut;
    out.pos = vec4<f32>(verts[vi], 0.0, 1.0);
    return out;
}

struct Params {
    width: u32,
    _pad0: u32,
    _pad1: u32,
    _pad2: u32,
};

@group(0) @binding(0) var<storage, read> image:  array<vec4<f32>>;
@group(0) @binding(1) var<storage, read> alpha:  array<vec4<f32>>;
@group(0) @binding(2) var<uniform>       params: Params;
@group(0) @binding(3) var<storage, read> bg:     array<vec4<f32>>;

@fragment
fn fs(in: VertexOut) -> @location(0) vec4<f32> {
    let x = u32(in.pos.x);
    let y = u32(in.pos.y);
    let i = y * params.width + x;

    let fg  = image[i].rgb;
    let a   = alpha[i].r;
    let bgc = bg[i].rgb;
    let rgb = fg * a + bgc * (1.0 - a);
    return vec4<f32>(rgb, 1.0);
}
\`;var Er=\`enable f16;

// Like composite_solid_f16 but bg is an NHWC vec4<f16> storage buffer (e.g. a
// virtual background image, or a blurred copy of the input).

struct VertexOut {
    @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs(@builtin(vertex_index) vi: u32) -> VertexOut {
    let verts = array<vec2<f32>, 6>(
        vec2(-1.0, -1.0), vec2( 1.0, -1.0), vec2(-1.0,  1.0),
        vec2(-1.0,  1.0), vec2( 1.0, -1.0), vec2( 1.0,  1.0),
    );
    var out: VertexOut;
    out.pos = vec4<f32>(verts[vi], 0.0, 1.0);
    return out;
}

struct Params {
    width: u32,
    _pad0: u32,
    _pad1: u32,
    _pad2: u32,
};

@group(0) @binding(0) var<storage, read> image:  array<vec4<f16>>;
@group(0) @binding(1) var<storage, read> alpha:  array<vec4<f16>>;
@group(0) @binding(2) var<uniform>       params: Params;
@group(0) @binding(3) var<storage, read> bg:     array<vec4<f16>>;

@fragment
fn fs(in: VertexOut) -> @location(0) vec4<f32> {
    let x = u32(in.pos.x);
    let y = u32(in.pos.y);
    let i = y * params.width + x;

    let fg  = vec3<f32>(image[i].rgb);
    let a   = f32(alpha[i].r);
    let bgc = vec3<f32>(bg[i].rgb);
    let rgb = fg * a + bgc * (1.0 - a);
    return vec4<f32>(rgb, 1.0);
}
\`;var Ie=class{constructor(t,r,e,i){a(this,"backend",t);a(this,"pipeline");a(this,"bindGroup");a(this,"uniformBuffer");a(this,"outputView",null);if(r.h!==e.h||r.w!==e.w||r.h!==i.h||r.w!==i.w)throw new Error(\`CompositeImage: image (\${r.h}\\xD7\${r.w}), alpha (\${e.h}\\xD7\${e.w}), and bg (\${i.h}\\xD7\${i.w}) must all match. Run upscaler / resizer first.\`);let o=t.device;this.uniformBuffer=o.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let n=new ArrayBuffer(16);new Uint32Array(n,0,1)[0]=r.w,o.queue.writeBuffer(this.uniformBuffer,0,n);let s=t.dtype==="f16"?Er:Fr,p=o.createShaderModule({code:s});this.pipeline=o.createRenderPipeline({layout:"auto",vertex:{module:p,entryPoint:"vs"},fragment:{module:p,entryPoint:"fs",targets:[{format:t.canvasFormat}]},primitive:{topology:"triangle-list"}}),this.bindGroup=o.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:r.buffer}},{binding:1,resource:{buffer:e.buffer}},{binding:2,resource:{buffer:this.uniformBuffer}},{binding:3,resource:{buffer:i.buffer}}]})}setOutput(t){this.outputView=t.createView()}run(){if(!this.outputView)throw new Error("CompositeImageWebGPU.run() called before setOutput()");let t=this.backend.device.createCommandEncoder(),r=t.beginRenderPass({colorAttachments:[{view:this.outputView,clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.pipeline),r.setBindGroup(0,this.bindGroup),r.draw(6),r.end(),this.backend.device.queue.submit([t.finish()]),this.outputView=null}};var Dr=\`// Like composite_image but bg is sampled bilinearly \\u2014 bg may be smaller than
// (image, alpha). Used by CompositorBlur to skip the final full-res upsample
// in the blur pyramid and let this shader's own per-pixel scan do the
// expansion (the work is already happening here for the composite anyway).
//
// Layout invariant: image, alpha share output dims (canvas h \\xD7 w); bg is
// at a smaller resolution (bg_h \\xD7 bg_w). All NHWC vec4 storage buffers,
// channelGroups = 1 (RGB padded to vec4).

struct VertexOut {
    @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs(@builtin(vertex_index) vi: u32) -> VertexOut {
    let verts = array<vec2<f32>, 6>(
        vec2(-1.0, -1.0), vec2( 1.0, -1.0), vec2(-1.0,  1.0),
        vec2(-1.0,  1.0), vec2( 1.0, -1.0), vec2( 1.0,  1.0),
    );
    var out: VertexOut;
    out.pos = vec4<f32>(verts[vi], 0.0, 1.0);
    return out;
}

struct Params {
    out_w: u32,
    out_h: u32,
    bg_w:  u32,
    bg_h:  u32,
};

@group(0) @binding(0) var<storage, read> image:  array<vec4<f32>>;
@group(0) @binding(1) var<storage, read> alpha:  array<vec4<f32>>;
@group(0) @binding(2) var<uniform>       params: Params;
@group(0) @binding(3) var<storage, read> bg:     array<vec4<f32>>;

@fragment
fn fs(in: VertexOut) -> @location(0) vec4<f32> {
    let x = u32(in.pos.x);
    let y = u32(in.pos.y);
    let i = y * params.out_w + x;

    let fg = image[i].rgb;
    let a  = alpha[i].r;

    // Bilinear sample bg at the corresponding location. align_corners=False.
    let src_x = (f32(x) + 0.5) * (f32(params.bg_w) / f32(params.out_w)) - 0.5;
    let src_y = (f32(y) + 0.5) * (f32(params.bg_h) / f32(params.out_h)) - 0.5;
    let x0 = u32(clamp(i32(floor(src_x)),     0, i32(params.bg_w) - 1));
    let x1 = u32(clamp(i32(floor(src_x)) + 1, 0, i32(params.bg_w) - 1));
    let y0 = u32(clamp(i32(floor(src_y)),     0, i32(params.bg_h) - 1));
    let y1 = u32(clamp(i32(floor(src_y)) + 1, 0, i32(params.bg_h) - 1));
    let wx = src_x - floor(src_x);
    let wy = src_y - floor(src_y);

    let tl = bg[y0 * params.bg_w + x0].rgb;
    let tr = bg[y0 * params.bg_w + x1].rgb;
    let bl = bg[y1 * params.bg_w + x0].rgb;
    let br = bg[y1 * params.bg_w + x1].rgb;
    let bgc = (1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
            +        wy  * ((1.0 - wx) * bl + wx * br);

    let rgb = fg * a + bgc * (1.0 - a);
    return vec4<f32>(rgb, 1.0);
}
\`;var Or=\`enable f16;

// f16 storage variant of composite_image_bilinear. bg is at a smaller
// resolution and is bilinearly sampled to match (image, alpha) at full res.
// Computation in f32; storage in f16.

struct VertexOut {
    @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs(@builtin(vertex_index) vi: u32) -> VertexOut {
    let verts = array<vec2<f32>, 6>(
        vec2(-1.0, -1.0), vec2( 1.0, -1.0), vec2(-1.0,  1.0),
        vec2(-1.0,  1.0), vec2( 1.0, -1.0), vec2( 1.0,  1.0),
    );
    var out: VertexOut;
    out.pos = vec4<f32>(verts[vi], 0.0, 1.0);
    return out;
}

struct Params {
    out_w: u32,
    out_h: u32,
    bg_w:  u32,
    bg_h:  u32,
};

@group(0) @binding(0) var<storage, read> image:  array<vec4<f16>>;
@group(0) @binding(1) var<storage, read> alpha:  array<vec4<f16>>;
@group(0) @binding(2) var<uniform>       params: Params;
@group(0) @binding(3) var<storage, read> bg:     array<vec4<f16>>;

@fragment
fn fs(in: VertexOut) -> @location(0) vec4<f32> {
    let x = u32(in.pos.x);
    let y = u32(in.pos.y);
    let i = y * params.out_w + x;

    let fg = vec3<f32>(image[i].rgb);
    let a  = f32(alpha[i].r);

    let src_x = (f32(x) + 0.5) * (f32(params.bg_w) / f32(params.out_w)) - 0.5;
    let src_y = (f32(y) + 0.5) * (f32(params.bg_h) / f32(params.out_h)) - 0.5;
    let x0 = u32(clamp(i32(floor(src_x)),     0, i32(params.bg_w) - 1));
    let x1 = u32(clamp(i32(floor(src_x)) + 1, 0, i32(params.bg_w) - 1));
    let y0 = u32(clamp(i32(floor(src_y)),     0, i32(params.bg_h) - 1));
    let y1 = u32(clamp(i32(floor(src_y)) + 1, 0, i32(params.bg_h) - 1));
    let wx = src_x - floor(src_x);
    let wy = src_y - floor(src_y);

    let tl = vec3<f32>(bg[y0 * params.bg_w + x0].rgb);
    let tr = vec3<f32>(bg[y0 * params.bg_w + x1].rgb);
    let bl = vec3<f32>(bg[y1 * params.bg_w + x0].rgb);
    let br = vec3<f32>(bg[y1 * params.bg_w + x1].rgb);
    let bgc = (1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
            +        wy  * ((1.0 - wx) * bl + wx * br);

    let rgb = fg * a + bgc * (1.0 - a);
    return vec4<f32>(rgb, 1.0);
}
\`;var Ae=class{constructor(t,r,e,i){a(this,"backend",t);a(this,"pipeline");a(this,"bindGroup");a(this,"uniformBuffer");a(this,"outputView",null);if(r.h!==e.h||r.w!==e.w)throw new Error(\`CompositeImageBilinear: image (\${r.h}\\xD7\${r.w}) and alpha (\${e.h}\\xD7\${e.w}) must match.\`);let o=t.device;this.uniformBuffer=o.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let n=new ArrayBuffer(16),s=new Uint32Array(n);s[0]=r.w,s[1]=r.h,s[2]=i.w,s[3]=i.h,o.queue.writeBuffer(this.uniformBuffer,0,n);let p=t.dtype==="f16"?Or:Dr,l=o.createShaderModule({code:p});this.pipeline=o.createRenderPipeline({layout:"auto",vertex:{module:l,entryPoint:"vs"},fragment:{module:l,entryPoint:"fs",targets:[{format:t.canvasFormat}]},primitive:{topology:"triangle-list"}}),this.bindGroup=o.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:r.buffer}},{binding:1,resource:{buffer:e.buffer}},{binding:2,resource:{buffer:this.uniformBuffer}},{binding:3,resource:{buffer:i.buffer}}]})}setOutput(t){this.outputView=t.createView()}run(){if(!this.outputView)throw new Error("CompositeImageBilinearWebGPU.run() called before setOutput()");let t=this.backend.device.createCommandEncoder(),r=t.beginRenderPass({colorAttachments:[{view:this.outputView,clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.pipeline),r.setBindGroup(0,this.bindGroup),r.draw(6),r.end(),this.backend.device.queue.submit([t.finish()]),this.outputView=null}};var Ir=\`// Passthrough "compositor" \\u2014 writes the image directly to the canvas
// swapchain texture with no alpha math and no background. Used by RenderOp
// when the renderer is in disabled state, so the output canvas reflects
// the unmodified input frame instead of a stale matted result.
//
// Caller invariants (matched in CompositePassthroughWebGPU):
//   - image is an NHWC vec4 storage buffer
//   - canvas.width === image.w, canvas.height === image.h (no resampling)

struct VertexOut {
    @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs(@builtin(vertex_index) vi: u32) -> VertexOut {
    let verts = array<vec2<f32>, 6>(
        vec2(-1.0, -1.0), vec2( 1.0, -1.0), vec2(-1.0,  1.0),
        vec2(-1.0,  1.0), vec2( 1.0, -1.0), vec2( 1.0,  1.0),
    );
    var out: VertexOut;
    out.pos = vec4<f32>(verts[vi], 0.0, 1.0);
    return out;
}

struct Params {
    width: u32,
};

@group(0) @binding(0) var<storage, read> image:  array<vec4<f32>>;
@group(0) @binding(1) var<uniform>       params: Params;

@fragment
fn fs(in: VertexOut) -> @location(0) vec4<f32> {
    let x = u32(in.pos.x);
    let y = u32(in.pos.y);
    let i = y * params.width + x;
    return vec4<f32>(image[i].rgb, 1.0);
}
\`;var Ar=\`enable f16;

// Passthrough "compositor" \\u2014 f16 variant. Image is stored as f16; values
// promote to f32 on read and the fragment writes f32 to the canvas
// swapchain (color attachment is the swapchain's preferred f32-equivalent
// format). See composite_passthrough.wgsl for the f32 version.

struct VertexOut {
    @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs(@builtin(vertex_index) vi: u32) -> VertexOut {
    let verts = array<vec2<f32>, 6>(
        vec2(-1.0, -1.0), vec2( 1.0, -1.0), vec2(-1.0,  1.0),
        vec2(-1.0,  1.0), vec2( 1.0, -1.0), vec2( 1.0,  1.0),
    );
    var out: VertexOut;
    out.pos = vec4<f32>(verts[vi], 0.0, 1.0);
    return out;
}

struct Params {
    width: u32,
};

@group(0) @binding(0) var<storage, read> image:  array<vec4<f16>>;
@group(0) @binding(1) var<uniform>       params: Params;

@fragment
fn fs(in: VertexOut) -> @location(0) vec4<f32> {
    let x = u32(in.pos.x);
    let y = u32(in.pos.y);
    let i = y * params.width + x;
    return vec4<f32>(vec3<f32>(image[i].rgb), 1.0);
}
\`;var Me=class{constructor(t,r){a(this,"backend",t);a(this,"pipeline");a(this,"bindGroup");a(this,"uniformBuffer");a(this,"outputView",null);let e=t.device;this.uniformBuffer=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let i=new ArrayBuffer(16);new Uint32Array(i,0,1)[0]=r.w,e.queue.writeBuffer(this.uniformBuffer,0,i);let o=t.dtype==="f16"?Ar:Ir,n=e.createShaderModule({code:o});this.pipeline=e.createRenderPipeline({layout:"auto",vertex:{module:n,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:t.canvasFormat}]},primitive:{topology:"triangle-list"}}),this.bindGroup=e.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:r.buffer}},{binding:1,resource:{buffer:this.uniformBuffer}}]})}setOutput(t){this.outputView=t.createView()}run(){if(!this.outputView)throw new Error("CompositePassthroughWebGPU.run() called before setOutput()");let t=this.backend.device.createCommandEncoder(),r=t.beginRenderPass({colorAttachments:[{view:this.outputView,clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.pipeline),r.setBindGroup(0,this.bindGroup),r.draw(6),r.end(),this.backend.device.queue.submit([t.finish()]),this.outputView=null}};var Mr=\`// Input op \\u2014 sample a regular 2D source texture (RGBA8 unorm) into the NHWC
// vec4<f32> output buffer at the target resolution. Used for ImageBitmap
// sources, which are uploaded into a persistent staging texture via
// copyExternalImageToTexture before each dispatch.

struct Params {
    out_w : u32,
    out_h : u32,
    _pad0 : u32,
    _pad1 : u32,
}

@group(0) @binding(0) var                       src_tex     : texture_2d<f32>;
@group(0) @binding(1) var                       src_sampler : sampler;
@group(0) @binding(2) var<uniform>              params      : Params;
@group(0) @binding(3) var<storage, read_write>  output_buf  : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= params.out_w || y >= params.out_h) { return; }

    let uv = vec2<f32>(
        (f32(x) + 0.5) / f32(params.out_w),
        (f32(y) + 0.5) / f32(params.out_h),
    );
    let rgba = textureSampleLevel(src_tex, src_sampler, uv, 0.0);
    output_buf[y * params.out_w + x] = rgba;
}
\`;var Rr=\`enable f16;

// Input op \\u2014 f16 storage variant. Source is sampled as vec4<f32>; only the
// store is demoted to vec4<f16>.

struct Params {
    out_w : u32,
    out_h : u32,
    _pad0 : u32,
    _pad1 : u32,
}

@group(0) @binding(0) var                       src_tex     : texture_2d<f32>;
@group(0) @binding(1) var                       src_sampler : sampler;
@group(0) @binding(2) var<uniform>              params      : Params;
@group(0) @binding(3) var<storage, read_write>  output_buf  : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= params.out_w || y >= params.out_h) { return; }

    let uv = vec2<f32>(
        (f32(x) + 0.5) / f32(params.out_w),
        (f32(y) + 0.5) / f32(params.out_h),
    );
    let rgba = textureSampleLevel(src_tex, src_sampler, uv, 0.0);
    output_buf[y * params.out_w + x] = vec4<f16>(rgba);
}
\`;var Hr=\`// Input op \\u2014 sample a GPUExternalTexture (zero-copy VideoFrame import) into
// the NHWC vec4<f32> output buffer at the target resolution. Used when the
// caller passes a VideoFrame to setSource(); requires importExternalTexture
// to be called in the same task as the dispatch (the texture is invalidated
// after the current task completes).

struct Params {
    out_w : u32,
    out_h : u32,
    _pad0 : u32,
    _pad1 : u32,
}

@group(0) @binding(0) var                       src_tex     : texture_external;
@group(0) @binding(1) var                       src_sampler : sampler;
@group(0) @binding(2) var<uniform>              params      : Params;
@group(0) @binding(3) var<storage, read_write>  output_buf  : array<vec4<f32>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= params.out_w || y >= params.out_h) { return; }

    let uv = vec2<f32>(
        (f32(x) + 0.5) / f32(params.out_w),
        (f32(y) + 0.5) / f32(params.out_h),
    );
    let rgba = textureSampleBaseClampToEdge(src_tex, src_sampler, uv);
    output_buf[y * params.out_w + x] = rgba;
}
\`;var zr=\`enable f16;

// Input op \\u2014 texture_external + f16 storage. Sample in f32, store as f16.

struct Params {
    out_w : u32,
    out_h : u32,
    _pad0 : u32,
    _pad1 : u32,
}

@group(0) @binding(0) var                       src_tex     : texture_external;
@group(0) @binding(1) var                       src_sampler : sampler;
@group(0) @binding(2) var<uniform>              params      : Params;
@group(0) @binding(3) var<storage, read_write>  output_buf  : array<vec4<f16>>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= params.out_w || y >= params.out_h) { return; }

    let uv = vec2<f32>(
        (f32(x) + 0.5) / f32(params.out_w),
        (f32(y) + 0.5) / f32(params.out_h),
    );
    let rgba = textureSampleBaseClampToEdge(src_tex, src_sampler, uv);
    output_buf[y * params.out_w + x] = vec4<f16>(rgba);
}
\`;var aa=u=>typeof VideoFrame<"u"&&u instanceof VideoFrame,Re=class{constructor(t,r,e){a(this,"output");a(this,"device");a(this,"dtype");a(this,"sampler");a(this,"uniformBuffer");a(this,"dispatch");a(this,"pipeline2d",null);a(this,"pipelineExternal",null);a(this,"stagingTex",null);a(this,"stagingW",0);a(this,"stagingH",0);a(this,"source",null);this.device=t.device,this.dtype=t.dtype,this.output=t.tensor(r,e,4),this.sampler=this.device.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.uniformBuffer=this.device.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let i=new ArrayBuffer(16);new Uint32Array(i,0,2).set([e,r]),this.device.queue.writeBuffer(this.uniformBuffer,0,i),this.dispatch=[Math.ceil(e/8),Math.ceil(r/8),1],this.pipeline2d=this.buildPipeline(this.dtype==="f16"?Rr:Mr)}setSource(t){this.source=t}run(){if(!this.source)throw new Error("InputWebGPU.run() called before setSource()");aa(this.source)?this.runExternal(this.source):this.run2d(this.source)}run2d(t){this.ensureStagingTexture(t.width,t.height),this.device.queue.copyExternalImageToTexture({source:t,flipY:!1},{texture:this.stagingTex},[t.width,t.height]);let r=this.device.createBindGroup({layout:this.pipeline2d.getBindGroupLayout(0),entries:[{binding:0,resource:this.stagingTex.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.uniformBuffer}},{binding:3,resource:{buffer:this.output.buffer}}]});this.dispatchOnce(this.pipeline2d,r)}runExternal(t){this.pipelineExternal||(this.pipelineExternal=this.buildPipeline(this.dtype==="f16"?zr:Hr));let r=this.device.importExternalTexture({source:t}),e=this.device.createBindGroup({layout:this.pipelineExternal.getBindGroupLayout(0),entries:[{binding:0,resource:r},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.uniformBuffer}},{binding:3,resource:{buffer:this.output.buffer}}]});this.dispatchOnce(this.pipelineExternal,e)}ensureStagingTexture(t,r){this.stagingTex&&this.stagingW===t&&this.stagingH===r||(this.stagingTex?.destroy(),this.stagingTex=this.device.createTexture({size:[t,r,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),this.stagingW=t,this.stagingH=r)}buildPipeline(t){let r=this.device.createShaderModule({code:t});return this.device.createComputePipeline({layout:"auto",compute:{module:r,entryPoint:"main"}})}dispatchOnce(t,r){let e=this.device.createCommandEncoder(),i=e.beginComputePass();i.setPipeline(t),i.setBindGroup(0,r),i.dispatchWorkgroups(...this.dispatch),i.end(),this.device.queue.submit([e.finish()])}};var na=navigator.gpu?GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST:0,R=class u{constructor(t,r,e){a(this,"device",t);a(this,"canvas",r);a(this,"dtype",e);a(this,"ops");a(this,"presenters");a(this,"canvasContext");a(this,"canvasFormat");a(this,"bytesPerElement");a(this,"contexts",new Map);this.bytesPerElement=e==="f16"?2:4;let i=r.getContext("webgpu");if(!i)throw new Error("Failed to get WebGPU context from canvas");this.canvasFormat=navigator.gpu.getPreferredCanvasFormat(),this.configureContext(i),this.canvasContext=i,this.contexts.set("main",i),this.ops={Conv2d:(o,n,s)=>new le(this,o,n,s),ConvTranspose2d:(o,n,s)=>new ce(this,o,n,s),DepthwiseConv2d:(o,n,s)=>new de(this,o,n,s),Add:(o,n)=>new me(this,o,n),Sigmoid:o=>new fe(this,o),Tanh:o=>new he(this,o),ElementwiseMul:(o,n)=>new _e(this,o,n),Warp:(o,n,s)=>new ge(this,o,n,s),Stabilize:(o,n,s,p,l)=>new be(this,o,n,s,p,l),BilinearUpsample:(o,n)=>new ve(this,o,n),Crop:(o,n)=>new xe(this,o,n),BicubicUpsample:(o,n)=>new ye(this,o,n),ChannelConcat:(o,n)=>new we(this,o,n),Conv2dAdd:(o,n,s,p)=>new ke(this,o,n,s,p),ProjResidual:(o,n,s,p)=>new Te(this,o,n,s,p),ConcatConv2d:(o,n,s,p)=>new Ce(this,o,n,s,p),GatesFused:(o,n,s)=>new We(this,o,n,s),CandUpdateFused:(o,n,s,p,l)=>new Pe(this,o,n,s,p,l),ConvExpand:(o,n)=>new Ge(this,o,n),CatConv6to2:(o,n,s)=>new Be(this,o,n,s),DownAdapter:(o,n,s,p)=>new Ue(this,o,n,s,p),UpFinal:(o,n,s)=>new Se(this,o,n,s),UpFinalSkip:(o,n,s,p)=>new Le(this,o,n,s,p),UpsampleConcat:(o,n,s)=>new Fe(this,o,n,s),UpsampleConv1x1:(o,n,s)=>new Ee(this,o,n,s),UpsampleSigmoid:(o,n)=>new De(this,o,n),Input:(o,n)=>new Re(this,o,n)},this.presenters={CompositeSolid:(o,n,s,p="main")=>{let l=new Oe(this,o,n,s);return{run:()=>{l.setOutput(this.getCurrentDisplayTexture(p)),l.run()}}},CompositeImage:(o,n,s,p="main")=>{let l=new Ie(this,o,n,s);return{run:()=>{l.setOutput(this.getCurrentDisplayTexture(p)),l.run()}}},CompositeImageBilinear:(o,n,s,p="main")=>{let l=new Ae(this,o,n,s);return{run:()=>{l.setOutput(this.getCurrentDisplayTexture(p)),l.run()}}},CompositePassthrough:(o,n="main")=>{let s=new Me(this,o);return{run:()=>{s.setOutput(this.getCurrentDisplayTexture(n)),s.run()}}}}}configureContext(t){t.configure({device:this.device,format:this.canvasFormat,alphaMode:"premultiplied"})}attachCanvas(t,r){if(t==="main")throw new Error("attachCanvas: 'main' is reserved for the create() canvas");let e=r.getContext("webgpu");if(!e)throw new Error(\`attachCanvas: failed to get WebGPU context for target '\${t}'\`);this.configureContext(e),this.contexts.set(t,e)}static async isAvailable(){return navigator.gpu?await navigator.gpu.requestAdapter()!==null:!1}static async hasF16Support(){if(!navigator.gpu)return!1;let t=await navigator.gpu.requestAdapter();return t?t.features.has("shader-f16"):!1}static async create(t){let r=t.dtype??"f32",e=t.device;if(e){if(r==="f16"&&!e.features.has("shader-f16"))throw new Error("WebGPU dtype='f16' requested but supplied device lacks \`shader-f16\`")}else{let i=await navigator.gpu.requestAdapter();if(!i)throw new Error("WebGPU adapter not available");if(r==="f16"&&!i.features.has("shader-f16"))throw new Error("WebGPU dtype='f16' requested but adapter lacks \`shader-f16\` feature");e=await i.requestDevice({requiredFeatures:r==="f16"?["shader-f16"]:[]})}return new u(e,t.canvas,r)}getCurrentDisplayTexture(t="main"){let r=this.contexts.get(t);if(!r)throw new Error(\`getCurrentDisplayTexture: no canvas attached for target '\${t}'\`);return r.getCurrentTexture()}tensor(t,r,e,i){let n=t*r*e*this.bytesPerElement,s=this.device.createBuffer({size:n,usage:na,mappedAtCreation:i!==void 0});if(i!==void 0){let p=s.getMappedRange();this.writeView(p,i),s.unmap()}return{h:t,w:r,c:e,buffer:s}}upload(t){let e=t.length*this.bytesPerElement,i=this.device.createBuffer({size:e,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});return this.writeView(i.getMappedRange(),t),i.unmap(),{buffer:i}}writeView(t,r){let e=this.dtype==="f16",i=r instanceof Uint16Array;if(e===i){e?new Uint16Array(t).set(r):new Float32Array(t).set(r);return}e?new Uint16Array(t).set(pe(r)):new Float32Array(t).set(A(r))}async readback(t){let r=this.device.createBuffer({size:t.buffer.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),e=this.device.createCommandEncoder();e.copyBufferToBuffer(t.buffer,0,r,0,t.buffer.size),this.device.queue.submit([e.finish()]),await r.mapAsync(GPUMapMode.READ);let i=r.getMappedRange(),o=this.dtype==="f16"?A(new Uint16Array(i.slice(0))):new Float32Array(i.slice(0));return r.unmap(),r.destroy(),o}copyTensor(t,r){if(t.buffer.size!==r.buffer.size)throw new Error(\`copyTensor: size mismatch (src \${t.buffer.size} vs dst \${r.buffer.size})\`);let e=this.device.createCommandEncoder();e.copyBufferToBuffer(t.buffer,0,r.buffer,0,t.buffer.size),this.device.queue.submit([e.finish()])}async sync(){await this.device.queue.onSubmittedWorkDone()}destroy(){this.device.destroy()}};var sa=\`#version 300 es
const vec2 VERTS[6] = vec2[6](
    vec2(-1.0,-1.0), vec2(1.0,-1.0), vec2(-1.0,1.0),
    vec2(-1.0,1.0),  vec2(1.0,-1.0), vec2(1.0,1.0)
);
void main() { gl_Position = vec4(VERTS[gl_VertexID], 0.0, 1.0); }\`,h=class{constructor(t){a(this,"backend",t);a(this,"shader","");a(this,"program");a(this,"samplers",[]);a(this,"uniformInts",{});a(this,"uniformFloats",{})}makeTexture(t,r,e){let i=this.backend.gl,o=this.backend.textureFormat,n=this.backend.toTextureView(t),s=i.createTexture();return i.bindTexture(i.TEXTURE_2D,s),i.texImage2D(i.TEXTURE_2D,0,o.internalFormat,r,e,0,o.format,o.type,n),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),s}defaultSetup(){let t=this.backend.gl,r=t.createShader(t.VERTEX_SHADER);t.shaderSource(r,sa),t.compileShader(r);let e=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(e,this.shader),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))throw new Error(\`GLSL compile error: \${t.getShaderInfoLog(e)}\`);if(this.program=t.createProgram(),t.attachShader(this.program,r),t.attachShader(this.program,e),t.linkProgram(this.program),!t.getProgramParameter(this.program,t.LINK_STATUS))throw new Error(\`GLSL link error: \${t.getProgramInfoLog(this.program)}\`)}run(){let t=this.backend.gl;t.useProgram(this.program),this.samplers.forEach(({name:r,texture:e},i)=>{t.activeTexture(t.TEXTURE0+i),t.bindTexture(t.TEXTURE_2D,e),t.uniform1i(t.getUniformLocation(this.program,r),i)});for(let[r,e]of Object.entries(this.uniformInts))t.uniform1i(t.getUniformLocation(this.program,r),e);for(let[r,e]of Object.entries(this.uniformFloats))t.uniform1f(t.getUniformLocation(this.program,r),e);t.bindFramebuffer(t.FRAMEBUFFER,this.backend.fbo),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.output.texture,0),t.viewport(0,0,this.dispatch[0],this.dispatch[1]),t.bindVertexArray(null),t.drawArrays(t.TRIANGLES,0,6)}};var Vr=\`#version 300 es
// Conv2d \\u2014 handles all variants: 1\\xD71 (pointwise), 3\\xD73, 5\\xD75, strided, BN-fused.
//
// Tensor layout: NHWC vec4 \\u2014 texture dimensions (W * C/4, H).
//   texel (x * C_groups + c_group, y) = channels [c_group*4 .. c_group*4+3] at pixel (x,y).
//
// Weight layout: (I_groups * 4, K\\xB2 * O_groups) RGBA32F texture.
//   Row  = z * u_out_c_groups + o_group   (kernel_pos outer, out_group inner)
//   Col  = i_group * 4 + mat_col          (4 texels per mat4)
//   mat4[col][row] = weight(in_channel=col, out_channel=row)
//   Operation: (mat4 * in_val)[r] = \\u03A3_c weight(in=c, out=r) * in_val[c]  \\u2014 same as WGSL.
//
// Bias layout: (O_groups, 1).
//
// Padding model: pad_top / pad_left applied to input offset; right/bottom asymmetry
// is handled implicitly by the bounds check, same as the WGSL implementation.

precision highp float;
precision highp int;

uniform sampler2D u_input;    // (in_W * in_C_groups, in_H)
uniform sampler2D u_weights;  // (in_C_groups * 4, K\\xB2 * out_C_groups)
uniform sampler2D u_bias;     // (out_C_groups, 1)

uniform int u_in_w;
uniform int u_in_h;
uniform int u_in_c_groups;
uniform int u_out_c_groups;
uniform int u_kernel_h;
uniform int u_kernel_w;
uniform int u_stride;
uniform int u_pad_top;
uniform int u_pad_left;
uniform int u_activation;   // 0 = none, 1 = relu6, 2 = relu, 3 = leaky(0.1)

out vec4 fragColor;

void main() {
    int fx      = int(gl_FragCoord.x);
    int fy      = int(gl_FragCoord.y);
    int x_out   = fx / u_out_c_groups;
    int y_out   = fy;
    int o_group = fx - x_out * u_out_c_groups;

    vec4 result = texelFetch(u_bias, ivec2(o_group, 0), 0);

    for (int ky = 0; ky < u_kernel_h; ky++) {
        for (int kx = 0; kx < u_kernel_w; kx++) {
            int in_y = y_out * u_stride + ky - u_pad_top;
            int in_x = x_out * u_stride + kx - u_pad_left;

            if (in_y < 0 || in_y >= u_in_h || in_x < 0 || in_x >= u_in_w) continue;

            int z     = ky * u_kernel_w + kx;
            int w_row = z * u_out_c_groups + o_group;

            for (int i = 0; i < u_in_c_groups; i++) {
                vec4 in_val = texelFetch(u_input, ivec2(in_x * u_in_c_groups + i, in_y), 0);

                int base = i * 4;
                mat4 w = mat4(
                    texelFetch(u_weights, ivec2(base,     w_row), 0),
                    texelFetch(u_weights, ivec2(base + 1, w_row), 0),
                    texelFetch(u_weights, ivec2(base + 2, w_row), 0),
                    texelFetch(u_weights, ivec2(base + 3, w_row), 0)
                );
                result += w * in_val;
            }
        }
    }

    if      (u_activation == 1) result = clamp(result, 0.0, 6.0);
    else if (u_activation == 2) result = max(result, vec4(0.0));
    else if (u_activation == 3) result = max(result, 0.1 * result);

    fragColor = result;
}
\`;var He=class extends h{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",Vr);let n=T(e.h,o.kernel,o.stride,o.padding),s=T(e.w,o.kernel,o.stride,o.padding),p=e.c/4,l=o.outChannels/4,c=C(o.padding,e.h,n,o.kernel,o.stride),d=C(o.padding,e.w,s,o.kernel,o.stride),_=m(i.weights),b=m(i.bias),g=this.makeTexture(_,p*4,o.kernel*o.kernel*l),v=this.makeTexture(b,l,1),x=s*l,k=this.makeTexture(null,x,n);this.output={h:n,w:s,c:o.outChannels,texture:k,texW:x,texH:n},this.inputs=[e],this.weights=[],this.samplers=[{name:"u_input",texture:e.texture},{name:"u_weights",texture:g},{name:"u_bias",texture:v}],this.uniformInts={u_in_w:e.w,u_in_h:e.h,u_in_c_groups:p,u_out_c_groups:l,u_kernel_h:o.kernel,u_kernel_w:o.kernel,u_stride:o.stride,u_pad_top:c,u_pad_left:d,u_activation:o.activation==="relu6"?1:o.activation==="relu"?2:o.activation==="leaky"?3:0},this.defaultSetup(),this.dispatch=[x,n]}};var Nr=\`#version 300 es
// ConvTranspose2d \\u2014 gather form. Identical texture layouts + mat4 weight
// semantics as conv2d.glsl; only the spatial mapping differs:
//   in_y = (y_out + pad - ky) / stride   (must divide evenly + be in bounds)
// No explicit kernel flip \\u2014 the (y_out + pad - ky) indexing carries it.

precision highp float;
precision highp int;

uniform sampler2D u_input;    // (in_W * in_C_groups, in_H)
uniform sampler2D u_weights;  // (in_C_groups * 4, K\\xB2 * out_C_groups)
uniform sampler2D u_bias;     // (out_C_groups, 1)

uniform int u_in_w;
uniform int u_in_h;
uniform int u_in_c_groups;
uniform int u_out_c_groups;
uniform int u_kernel_h;
uniform int u_kernel_w;
uniform int u_stride;
uniform int u_pad_top;
uniform int u_pad_left;
uniform int u_activation;   // 0 = none, 1 = relu6, 2 = relu, 3 = leaky(0.1)

out vec4 fragColor;

void main() {
    int fx      = int(gl_FragCoord.x);
    int fy      = int(gl_FragCoord.y);
    int x_out   = fx / u_out_c_groups;
    int y_out   = fy;
    int o_group = fx - x_out * u_out_c_groups;

    vec4 result = texelFetch(u_bias, ivec2(o_group, 0), 0);

    for (int ky = 0; ky < u_kernel_h; ky++) {
        for (int kx = 0; kx < u_kernel_w; kx++) {
            int iy_num = y_out + u_pad_top  - ky;
            int ix_num = x_out + u_pad_left - kx;
            if (iy_num < 0 || ix_num < 0) continue;
            if ((iy_num % u_stride) != 0 || (ix_num % u_stride) != 0) continue;
            int in_y = iy_num / u_stride;
            int in_x = ix_num / u_stride;
            if (in_y >= u_in_h || in_x >= u_in_w) continue;

            int z     = ky * u_kernel_w + kx;
            int w_row = z * u_out_c_groups + o_group;

            for (int i = 0; i < u_in_c_groups; i++) {
                vec4 in_val = texelFetch(u_input, ivec2(in_x * u_in_c_groups + i, in_y), 0);

                int base = i * 4;
                mat4 w = mat4(
                    texelFetch(u_weights, ivec2(base,     w_row), 0),
                    texelFetch(u_weights, ivec2(base + 1, w_row), 0),
                    texelFetch(u_weights, ivec2(base + 2, w_row), 0),
                    texelFetch(u_weights, ivec2(base + 3, w_row), 0)
                );
                result += w * in_val;
            }
        }
    }

    if      (u_activation == 1) result = clamp(result, 0.0, 6.0);
    else if (u_activation == 2) result = max(result, vec4(0.0));
    else if (u_activation == 3) result = max(result, 0.1 * result);

    fragColor = result;
}
\`;var ze=class extends h{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",Nr);let n=M(e.h,o.kernel,o.stride,o.padding),s=M(e.w,o.kernel,o.stride,o.padding),p=e.c/4,l=o.outChannels/4,c=m(i.weights),d=m(i.bias),_=this.makeTexture(c,p*4,o.kernel*o.kernel*l),b=this.makeTexture(d,l,1),g=s*l,v=this.makeTexture(null,g,n);this.output={h:n,w:s,c:o.outChannels,texture:v,texW:g,texH:n},this.inputs=[e],this.weights=[],this.samplers=[{name:"u_input",texture:e.texture},{name:"u_weights",texture:_},{name:"u_bias",texture:b}],this.uniformInts={u_in_w:e.w,u_in_h:e.h,u_in_c_groups:p,u_out_c_groups:l,u_kernel_h:o.kernel,u_kernel_w:o.kernel,u_stride:o.stride,u_pad_top:o.padding,u_pad_left:o.padding,u_activation:o.activation==="relu6"?1:o.activation==="relu"?2:o.activation==="leaky"?3:0},this.defaultSetup(),this.dispatch=[g,n]}};var $r=\`#version 300 es
// Depthwise Conv2d \\u2014 groups = in_channels (each channel convolved independently).
//
// Weight layout: (C_groups, K\\xB2) RGBA32F texture \\u2014 contrast with conv2d which uses mat4.
//   texel (c_group, z) = vec4 kernel weights for 4 channels at kernel position z.
//   Operation: element-wise multiply (not matmul). 4\\xD7 smaller than a mat4 approach.
//
// Padding model: same asymmetric SAME-pad handling as conv2d.glsl.

precision highp float;
precision highp int;

uniform sampler2D u_input;    // (in_W * C_groups, in_H)
uniform sampler2D u_weights;  // (C_groups, K\\xB2)
uniform sampler2D u_bias;     // (C_groups, 1)

uniform int u_in_w;
uniform int u_in_h;
uniform int u_c_groups;
uniform int u_kernel_h;
uniform int u_kernel_w;
uniform int u_stride;
uniform int u_pad_top;
uniform int u_pad_left;
uniform int u_apply_relu6;   // 0 = none, 1 = relu6

out vec4 fragColor;

void main() {
    int fx      = int(gl_FragCoord.x);
    int fy      = int(gl_FragCoord.y);
    int x_out   = fx / u_c_groups;
    int y_out   = fy;
    int c_group = fx - x_out * u_c_groups;

    vec4 result = texelFetch(u_bias, ivec2(c_group, 0), 0);

    for (int ky = 0; ky < u_kernel_h; ky++) {
        for (int kx = 0; kx < u_kernel_w; kx++) {
            int in_y = y_out * u_stride + ky - u_pad_top;
            int in_x = x_out * u_stride + kx - u_pad_left;

            if (in_y < 0 || in_y >= u_in_h || in_x < 0 || in_x >= u_in_w) continue;

            int z = ky * u_kernel_w + kx;

            vec4 in_val = texelFetch(u_input,   ivec2(in_x * u_c_groups + c_group, in_y), 0);
            vec4 w      = texelFetch(u_weights, ivec2(c_group, z), 0);

            result += w * in_val;  // element-wise multiply, not matmul
        }
    }

    if (u_apply_relu6 == 1) result = clamp(result, 0.0, 6.0);

    fragColor = result;
}
\`;var Ve=class extends h{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",$r);let n=T(e.h,o.kernel,o.stride,o.padding),s=T(e.w,o.kernel,o.stride,o.padding),p=e.c/4,l=C(o.padding,e.h,n,o.kernel,o.stride),c=C(o.padding,e.w,s,o.kernel,o.stride),d=m(i.weights),_=m(i.bias),b=this.makeTexture(d,p,o.kernel*o.kernel),g=this.makeTexture(_,p,1),v=s*p,x=this.makeTexture(null,v,n);this.output={h:n,w:s,c:e.c,texture:x,texW:v,texH:n},this.inputs=[e],this.weights=[],this.samplers=[{name:"u_input",texture:e.texture},{name:"u_weights",texture:b},{name:"u_bias",texture:g}],this.uniformInts={u_in_w:e.w,u_in_h:e.h,u_c_groups:p,u_kernel_h:o.kernel,u_kernel_w:o.kernel,u_stride:o.stride,u_pad_top:l,u_pad_left:c,u_apply_relu6:o.activation==="relu6"?1:0},this.defaultSetup(),this.dispatch=[v,n]}};var Xr=\`#version 300 es
// Element-wise add \\u2014 both inputs and output share the same texture dimensions.
// Works for any 2D layout; used here with a flat (nVec4, 1) texture.

precision highp float;

uniform sampler2D u_input_a;
uniform sampler2D u_input_b;

out vec4 fragColor;

void main() {
    ivec2 fc = ivec2(gl_FragCoord.xy);
    fragColor = texelFetch(u_input_a, fc, 0) + texelFetch(u_input_b, fc, 0);
}
\`;var Ne=class extends h{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",Xr);let o=e,n=this.makeTexture(null,o.texW,o.texH);this.output={h:e.h,w:e.w,c:e.c,texture:n,texW:o.texW,texH:o.texH},this.inputs=[e,i],this.samplers=[{name:"u_input_a",texture:e.texture},{name:"u_input_b",texture:i.texture}],this.defaultSetup(),this.dispatch=[o.texW,o.texH]}};var jr=\`#version 300 es
// Element-wise sigmoid \\u2014 works on any texture layout (flat or spatial).

precision highp float;

uniform sampler2D u_input;

out vec4 fragColor;

void main() {
    vec4 x = texelFetch(u_input, ivec2(gl_FragCoord.xy), 0);
    fragColor = 1.0 / (1.0 + exp(-x));
}
\`;var $e=class extends h{constructor(r,e){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",jr);let i=e,o=this.makeTexture(null,i.texW,i.texH);this.output={h:e.h,w:e.w,c:e.c,texture:o,texW:i.texW,texH:i.texH},this.inputs=[e],this.samplers=[{name:"u_input",texture:i.texture}],this.defaultSetup(),this.dispatch=[i.texW,i.texH]}};var qr=\`#version 300 es
// Element-wise tanh \\u2014 used by ConvGRU candidate activation.
// Layout-agnostic (flat or spatial); GLSL tanh is element-wise on vec4.

precision highp float;

uniform sampler2D u_input;

out vec4 fragColor;

void main() {
    fragColor = tanh(texelFetch(u_input, ivec2(gl_FragCoord.xy), 0));
}
\`;var Xe=class extends h{constructor(r,e){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",qr);let i=e,o=this.makeTexture(null,i.texW,i.texH);this.output={h:e.h,w:e.w,c:e.c,texture:o,texW:i.texW,texH:i.texH},this.inputs=[e],this.samplers=[{name:"u_input",texture:i.texture}],this.defaultSetup(),this.dispatch=[i.texW,i.texH]}};var Kr=\`#version 300 es
// Element-wise multiply \\u2014 used in ConvGRU for r \\u2299 h_prev.
// Same shape constraint as add.glsl.

precision highp float;

uniform sampler2D u_input_a;
uniform sampler2D u_input_b;

out vec4 fragColor;

void main() {
    ivec2 fc = ivec2(gl_FragCoord.xy);
    fragColor = texelFetch(u_input_a, fc, 0) * texelFetch(u_input_b, fc, 0);
}
\`;var je=class extends h{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",Kr);let o=e,n=this.makeTexture(null,o.texW,o.texH);this.output={h:e.h,w:e.w,c:e.c,texture:n,texW:o.texW,texH:o.texH},this.inputs=[e,i],this.samplers=[{name:"u_input_a",texture:e.texture},{name:"u_input_b",texture:i.texture}],this.defaultSetup(),this.dispatch=[o.texW,o.texH]}};var Yr=\`#version 300 es
// Bilinear gather-warp. out[p] = sample(source, p + flow_scale\\xB7flow[p].xy),
// edge-clamped. Source + flow are 4-ch (1 group), same resolution; flow in .xy.

precision highp float;
precision highp int;

uniform sampler2D u_source;   // (W, H)
uniform sampler2D u_flow;     // (W, H), flow in .xy
uniform int   u_w;
uniform int   u_h;
uniform float u_flow_scale;

out vec4 fragColor;

vec4 samp(int x, int y) {
    int cx = clamp(x, 0, u_w - 1);
    int cy = clamp(y, 0, u_h - 1);
    return texelFetch(u_source, ivec2(cx, cy), 0);
}

void main() {
    int x = int(gl_FragCoord.x);
    int y = int(gl_FragCoord.y);

    vec2 f  = texelFetch(u_flow, ivec2(x, y), 0).xy;
    float sx = clamp(float(x) + u_flow_scale * f.x, 0.0, float(u_w - 1));
    float sy = clamp(float(y) + u_flow_scale * f.y, 0.0, float(u_h - 1));

    int x0 = int(floor(sx));
    int y0 = int(floor(sy));
    float tx = sx - float(x0);
    float ty = sy - float(y0);

    vec4 top = mix(samp(x0, y0), samp(x0 + 1, y0), tx);
    vec4 bot = mix(samp(x0, y0 + 1), samp(x0 + 1, y0 + 1), tx);
    fragColor = mix(top, bot, ty);
}
\`;var qe=class extends h{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",Yr);let n=e.w,s=e.h,p=this.makeTexture(null,n,s);this.output={h:s,w:n,c:e.c,texture:p,texW:n,texH:s},this.inputs=[e,i],this.samplers=[{name:"u_source",texture:e.texture},{name:"u_flow",texture:i.texture}],this.uniformInts={u_w:n,u_h:s},this.uniformFloats={u_flow_scale:o.flowScale},this.defaultSetup(),this.dispatch=[n,s]}};var Qr=\`#version 300 es
// Flow-gated temporal stabilizer. Per pixel:
//   env = max(|flow.xy|, release\\xB7envPrev.y)   peak-hold
//   g   = max(clamp((env - tLo)/(tHi - tLo), 0, 1), leak)
//   out = vec4((g\\xB7pred + (1-g)\\xB7ref).x, env, 0, 0)

precision highp float;
precision highp int;

uniform sampler2D u_flow;
uniform sampler2D u_pred;
uniform sampler2D u_ref;
uniform sampler2D u_env_prev;
uniform int   u_w;
uniform int   u_h;
uniform float u_t_lo;
uniform float u_t_hi;
uniform float u_leak;
uniform float u_release;
uniform float u_t_div;
uniform float u_div_scale;
uniform int   u_step_x;
uniform int   u_step_y;

out vec4 fragColor;

void main() {
    int x = int(gl_FragCoord.x);
    int y = int(gl_FragCoord.y);

    float mag     = length(texelFetch(u_flow, ivec2(x, y), 0).xy);
    float envPrev = texelFetch(u_env_prev, ivec2(x, y), 0).y;
    float env     = max(mag, u_release * envPrev);

    // Flow divergence over a \\xB1step finite-difference (clamped to the edges).
    int xr = min(x + u_step_x, u_w - 1);
    int xl = max(x - u_step_x, 0);
    int yd = min(y + u_step_y, u_h - 1);
    int yu = max(y - u_step_y, 0);
    float dfx = texelFetch(u_flow, ivec2(xr, y), 0).x - texelFetch(u_flow, ivec2(xl, y), 0).x;
    float dfy = texelFetch(u_flow, ivec2(x, yd), 0).y - texelFetch(u_flow, ivec2(x, yu), 0).y;
    float divg = abs(dfx + dfy);

    float gMag = clamp((env - u_t_lo) / max(u_t_hi - u_t_lo, 1e-3), 0.0, 1.0);
    float gDiv = clamp((divg - u_t_div) / max(u_div_scale, 1e-3), 0.0, 1.0);
    float g = max(max(gMag, gDiv), u_leak);

    float pred = texelFetch(u_pred, ivec2(x, y), 0).x;
    float refv = texelFetch(u_ref,  ivec2(x, y), 0).x;
    float stab = g * pred + (1.0 - g) * refv;

    fragColor = vec4(stab, env, 0.0, 0.0);
}
\`;var Ke=class extends h{constructor(r,e,i,o,n,s){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",Qr);let p=e.w,l=e.h,c=this.makeTexture(null,p,l);this.output={h:l,w:p,c:4,texture:c,texW:p,texH:l},this.inputs=[e,i,o,n],this.samplers=[{name:"u_flow",texture:e.texture},{name:"u_pred",texture:i.texture},{name:"u_ref",texture:o.texture},{name:"u_env_prev",texture:n.texture}],this.uniformInts={u_w:p,u_h:l,u_step_x:s.stepX,u_step_y:s.stepY},this.uniformFloats={u_t_lo:s.tLo,u_t_hi:s.tHi,u_leak:s.leak,u_release:s.release,u_t_div:s.tDiv,u_div_scale:s.divScale},this.defaultSetup(),this.dispatch=[p,l]}};var Jr=\`#version 300 es
// Bilinear upsample (arbitrary scale) \\u2014 align_corners=False.
//
// Hardware texture filtering can't be used: adjacent texels in x belong to
// different channel groups, not spatial neighbours. Manual 4-tap blend.
//
// Input:  (in_W  * c_groups, in_H)
// Output: (out_W * c_groups, out_H)

precision highp float;
precision highp int;

uniform sampler2D u_input;
uniform int u_in_w;
uniform int u_in_h;
uniform int u_out_w;
uniform int u_out_h;
uniform int u_c_groups;

out vec4 fragColor;

void main() {
    ivec2 fc    = ivec2(gl_FragCoord.xy);
    int x_out   = fc.x / u_c_groups;
    int y_out   = fc.y;
    int c_group = fc.x - x_out * u_c_groups;

    float scale_x = float(u_in_w) / float(u_out_w);
    float scale_y = float(u_in_h) / float(u_out_h);
    float src_x = (float(x_out) + 0.5) * scale_x - 0.5;
    float src_y = (float(y_out) + 0.5) * scale_y - 0.5;

    int x0 = int(floor(src_x));
    int y0 = int(floor(src_y));
    int x1 = x0 + 1;
    int y1 = y0 + 1;
    float fx = src_x - float(x0);
    float fy = src_y - float(y0);

    x0 = clamp(x0, 0, u_in_w - 1);
    y0 = clamp(y0, 0, u_in_h - 1);
    x1 = clamp(x1, 0, u_in_w - 1);
    y1 = clamp(y1, 0, u_in_h - 1);

    vec4 v00 = texelFetch(u_input, ivec2(x0 * u_c_groups + c_group, y0), 0);
    vec4 v10 = texelFetch(u_input, ivec2(x1 * u_c_groups + c_group, y0), 0);
    vec4 v01 = texelFetch(u_input, ivec2(x0 * u_c_groups + c_group, y1), 0);
    vec4 v11 = texelFetch(u_input, ivec2(x1 * u_c_groups + c_group, y1), 0);

    fragColor = mix(mix(v00, v10, fx), mix(v01, v11, fx), fy);
}
\`;var Ye=class extends h{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",Jr);let o=e.c/4,n=i.outW*o,s=this.makeTexture(null,n,i.outH);this.output={h:i.outH,w:i.outW,c:e.c,texture:s,texW:n,texH:i.outH},this.inputs=[e],this.samplers=[{name:"u_input",texture:e.texture}],this.uniformInts={u_in_w:e.w,u_in_h:e.h,u_out_w:i.outW,u_out_h:i.outH,u_c_groups:o},this.defaultSetup(),this.dispatch=[n,i.outH]}};var Zr=\`#version 300 es
// Top-left crop: the output viewport is smaller than the input texture, so reading
// the same fragment coord yields the top-left subregion (channel groups packed in
// the x axis line up because group count is unchanged).

precision highp float;
precision highp int;

uniform sampler2D u_input;
out vec4 fragColor;

void main() {
    fragColor = texelFetch(u_input, ivec2(int(gl_FragCoord.x), int(gl_FragCoord.y)), 0);
}
\`;var Qe=class extends h{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",Zr);let o=e.c/4,n=i.outW*o,s=this.makeTexture(null,n,i.outH);this.output={h:i.outH,w:i.outW,c:e.c,texture:s,texW:n,texH:i.outH},this.inputs=[e],this.samplers=[{name:"u_input",texture:e.texture}],this.defaultSetup(),this.dispatch=[n,i.outH]}};var eo=\`#version 300 es
// Bicubic upsample (arbitrary scale) \\u2014 Keys cubic, a=-0.75 (PyTorch default
// for mode='bicubic', align_corners=False).
//
// Direct 2D, 4\\xD74 = 16 taps per output pixel. Hardware texture filtering
// can't be used (NHWC vec4 layout means adjacent texels in x belong to
// different channel groups, not spatial neighbours).

precision highp float;
precision highp int;

uniform sampler2D u_input;
uniform int u_in_w;
uniform int u_in_h;
uniform int u_out_w;
uniform int u_out_h;
uniform int u_c_groups;

const float A = -0.75;

float wcubic(float d) {
    float ad = abs(d);
    if (ad <= 1.0) return ((A + 2.0) * ad - (A + 3.0)) * ad * ad + 1.0;
    if (ad <  2.0) return ((A * ad - 5.0 * A) * ad + 8.0 * A) * ad - 4.0 * A;
    return 0.0;
}

out vec4 fragColor;

void main() {
    ivec2 fc    = ivec2(gl_FragCoord.xy);
    int x_out   = fc.x / u_c_groups;
    int y_out   = fc.y;
    int c_group = fc.x - x_out * u_c_groups;

    float src_x = (float(x_out) + 0.5) * float(u_in_w) / float(u_out_w) - 0.5;
    float src_y = (float(y_out) + 0.5) * float(u_in_h) / float(u_out_h) - 0.5;

    int   x0 = int(floor(src_x));
    int   y0 = int(floor(src_y));
    float fx = src_x - float(x0);
    float fy = src_y - float(y0);

    // Weights for offsets {-1, 0, 1, 2} from x0/y0.
    float wx[4];
    float wy[4];
    wx[0] = wcubic(1.0 + fx); wx[1] = wcubic(fx);       wx[2] = wcubic(1.0 - fx); wx[3] = wcubic(2.0 - fx);
    wy[0] = wcubic(1.0 + fy); wy[1] = wcubic(fy);       wy[2] = wcubic(1.0 - fy); wy[3] = wcubic(2.0 - fy);

    vec4 acc = vec4(0.0);
    for (int j = 0; j < 4; j++) {
        int sy = clamp(y0 + j - 1, 0, u_in_h - 1);
        for (int i = 0; i < 4; i++) {
            int sx = clamp(x0 + i - 1, 0, u_in_w - 1);
            vec4 v = texelFetch(u_input, ivec2(sx * u_c_groups + c_group, sy), 0);
            acc += (wx[i] * wy[j]) * v;
        }
    }
    fragColor = acc;
}
\`;var Je=class extends h{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",eo);let o=e.c/4,n=i.outW*o,s=this.makeTexture(null,n,i.outH);this.output={h:i.outH,w:i.outW,c:e.c,texture:s,texW:n,texH:i.outH},this.inputs=[e],this.samplers=[{name:"u_input",texture:e.texture}],this.uniformInts={u_in_w:e.w,u_in_h:e.h,u_out_w:i.outW,u_out_h:i.outH,u_c_groups:o},this.defaultSetup(),this.dispatch=[n,i.outH]}};var to=\`#version 300 es
// Channel concat \\u2014 concatenates two NHWC textures along the channel dimension.
// Both inputs must share the same spatial dimensions (W, H). Channel counts are
// multiples of 4 so each "group" is one vec4 texel.
//
// Input  A: (W * a_c_groups, H)
// Input  B: (W * b_c_groups, H)
// Output:   (W * (a_c_groups + b_c_groups), H)

precision highp float;
precision highp int;

uniform sampler2D u_input_a;
uniform sampler2D u_input_b;
uniform int u_a_c_groups;
uniform int u_b_c_groups;

out vec4 fragColor;

void main() {
    ivec2 fc       = ivec2(gl_FragCoord.xy);
    int out_groups = u_a_c_groups + u_b_c_groups;
    int x_spatial  = fc.x / out_groups;
    int c_out      = fc.x - x_spatial * out_groups;
    int y          = fc.y;

    if (c_out < u_a_c_groups) {
        fragColor = texelFetch(u_input_a, ivec2(x_spatial * u_a_c_groups + c_out, y), 0);
    } else {
        int c_b = c_out - u_a_c_groups;
        fragColor = texelFetch(u_input_b, ivec2(x_spatial * u_b_c_groups + c_b, y), 0);
    }
}
\`;var Ze=class extends h{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",to);let o=e.c/4,n=i.c/4,s=o+n,p=e.c+i.c,l=e.w*s,c=this.makeTexture(null,l,e.h);this.output={h:e.h,w:e.w,c:p,texture:c,texW:l,texH:e.h},this.inputs=[e,i],this.samplers=[{name:"u_input_a",texture:e.texture},{name:"u_input_b",texture:i.texture}],this.uniformInts={u_a_c_groups:o,u_b_c_groups:n},this.defaultSetup(),this.dispatch=[l,e.h]}};var ro=\`#version 300 es
// Bilinear upsample + sigmoid fused \\u2014 sigmoid applied at write time, no intermediate buffer.
// See bilinear_upsample.glsl for the manual 4-tap blend rationale.
//
// Input:  (in_W  * c_groups, in_H)
// Output: (out_W * c_groups, out_H)

precision highp float;
precision highp int;

uniform sampler2D u_input;
uniform int u_in_w;
uniform int u_in_h;
uniform int u_out_w;
uniform int u_out_h;
uniform int u_c_groups;

out vec4 fragColor;

void main() {
    ivec2 fc    = ivec2(gl_FragCoord.xy);
    int x_out   = fc.x / u_c_groups;
    int y_out   = fc.y;
    int c_group = fc.x - x_out * u_c_groups;

    float scale_x = float(u_in_w) / float(u_out_w);
    float scale_y = float(u_in_h) / float(u_out_h);
    float src_x = (float(x_out) + 0.5) * scale_x - 0.5;
    float src_y = (float(y_out) + 0.5) * scale_y - 0.5;

    int x0 = int(floor(src_x));
    int y0 = int(floor(src_y));
    int x1 = x0 + 1;
    int y1 = y0 + 1;
    float fx = src_x - float(x0);
    float fy = src_y - float(y0);

    x0 = clamp(x0, 0, u_in_w - 1);
    y0 = clamp(y0, 0, u_in_h - 1);
    x1 = clamp(x1, 0, u_in_w - 1);
    y1 = clamp(y1, 0, u_in_h - 1);

    vec4 v00 = texelFetch(u_input, ivec2(x0 * u_c_groups + c_group, y0), 0);
    vec4 v10 = texelFetch(u_input, ivec2(x1 * u_c_groups + c_group, y0), 0);
    vec4 v01 = texelFetch(u_input, ivec2(x0 * u_c_groups + c_group, y1), 0);
    vec4 v11 = texelFetch(u_input, ivec2(x1 * u_c_groups + c_group, y1), 0);

    vec4 result = mix(mix(v00, v10, fx), mix(v01, v11, fx), fy);
    fragColor = 1.0 / (1.0 + exp(-result));
}
\`;var et=class extends h{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",ro);let o=e.c/4,n=i.outW*o,s=this.makeTexture(null,n,i.outH);this.output={h:i.outH,w:i.outW,c:e.c,texture:s,texW:n,texH:i.outH},this.inputs=[e],this.samplers=[{name:"u_input",texture:e.texture}],this.uniformInts={u_in_w:e.w,u_in_h:e.h,u_out_w:i.outW,u_out_h:i.outH,u_c_groups:o},this.defaultSetup(),this.dispatch=[n,i.outH]}};var oo=\`#version 300 es
// Bilinear upsample (input_a) + channel concat (with input_b) fused.
// input_a is the decoder tensor at small spatial res (in_h \\xD7 in_w), bilinearly resized to (out_h \\xD7 out_w).
// input_b is the encoder skip feature already at output resolution.
// Output channels [0..a_groups-1] come from upsampled input_a.
// Output channels [a_groups..out_groups-1] come from input_b (passthrough).

precision highp float;
precision highp int;

uniform sampler2D u_input_a;
uniform sampler2D u_input_b;
uniform int u_in_w;
uniform int u_in_h;
uniform int u_out_w;
uniform int u_out_h;
uniform int u_a_c_groups;
uniform int u_b_c_groups;

out vec4 fragColor;

void main() {
    ivec2 fc       = ivec2(gl_FragCoord.xy);
    int out_groups = u_a_c_groups + u_b_c_groups;
    int x_out      = fc.x / out_groups;
    int c_out      = fc.x - x_out * out_groups;
    int y_out      = fc.y;

    if (c_out < u_a_c_groups) {
        // Bilinear sample from input_a at (x_out, y_out) for channel group c_out.
        float scale_x = float(u_in_w) / float(u_out_w);
        float scale_y = float(u_in_h) / float(u_out_h);
        float src_x = (float(x_out) + 0.5) * scale_x - 0.5;
        float src_y = (float(y_out) + 0.5) * scale_y - 0.5;

        int x0 = int(floor(src_x));
        int y0 = int(floor(src_y));
        int x1 = x0 + 1;
        int y1 = y0 + 1;
        float fx = src_x - float(x0);
        float fy = src_y - float(y0);

        x0 = clamp(x0, 0, u_in_w - 1);
        y0 = clamp(y0, 0, u_in_h - 1);
        x1 = clamp(x1, 0, u_in_w - 1);
        y1 = clamp(y1, 0, u_in_h - 1);

        vec4 v00 = texelFetch(u_input_a, ivec2(x0 * u_a_c_groups + c_out, y0), 0);
        vec4 v10 = texelFetch(u_input_a, ivec2(x1 * u_a_c_groups + c_out, y0), 0);
        vec4 v01 = texelFetch(u_input_a, ivec2(x0 * u_a_c_groups + c_out, y1), 0);
        vec4 v11 = texelFetch(u_input_a, ivec2(x1 * u_a_c_groups + c_out, y1), 0);

        fragColor = mix(mix(v00, v10, fx), mix(v01, v11, fx), fy);
    } else {
        int c_b = c_out - u_a_c_groups;
        fragColor = texelFetch(u_input_b, ivec2(x_out * u_b_c_groups + c_b, y_out), 0);
    }
}
\`;var tt=class extends h{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights",[]);a(this,"output");a(this,"dispatch");a(this,"shader",oo);let n=e.c/4,s=i.c/4,p=n+s,l=e.c+i.c,c=o.outW*p,d=this.makeTexture(null,c,o.outH);this.output={h:o.outH,w:o.outW,c:l,texture:d,texW:c,texH:o.outH},this.inputs=[e,i],this.samplers=[{name:"u_input_a",texture:e.texture},{name:"u_input_b",texture:i.texture}],this.uniformInts={u_in_w:e.w,u_in_h:e.h,u_out_w:o.outW,u_out_h:o.outH,u_a_c_groups:n,u_b_c_groups:s},this.defaultSetup(),this.dispatch=[c,o.outH]}};var io=\`#version 300 es
// Bilinear upsample + 1\\xD71 pointwise conv fused.
// For each output pixel + out group, bilinearly samples each in_group from input,
// applies the 1\\xD71 conv weight, and writes the activated result.
//
// Input:   (in_W  * in_groups,  in_H)
// Output:  (out_W * out_groups, out_H)
// Weights: (in_groups * 4, out_groups)  (K=1, so kernel-row dimension collapses)
//          mat4[col][row] = weight(in_channel=col, out_channel=row)
// Bias:    (out_groups, 1)

precision highp float;
precision highp int;

uniform sampler2D u_input;
uniform sampler2D u_weights;
uniform sampler2D u_bias;

uniform int u_in_w;
uniform int u_in_h;
uniform int u_out_w;
uniform int u_out_h;
uniform int u_in_c_groups;
uniform int u_out_c_groups;
uniform int u_activation;   // 0 = none, 1 = relu6, 2 = relu

out vec4 fragColor;

void main() {
    int fx      = int(gl_FragCoord.x);
    int fy      = int(gl_FragCoord.y);
    int x_out   = fx / u_out_c_groups;
    int y_out   = fy;
    int o_group = fx - x_out * u_out_c_groups;

    float scale_x = float(u_in_w) / float(u_out_w);
    float scale_y = float(u_in_h) / float(u_out_h);
    float src_x = (float(x_out) + 0.5) * scale_x - 0.5;
    float src_y = (float(y_out) + 0.5) * scale_y - 0.5;

    int x0 = int(floor(src_x));
    int y0 = int(floor(src_y));
    int x1 = x0 + 1;
    int y1 = y0 + 1;
    float fx_w = src_x - float(x0);
    float fy_w = src_y - float(y0);

    x0 = clamp(x0, 0, u_in_w - 1);
    y0 = clamp(y0, 0, u_in_h - 1);
    x1 = clamp(x1, 0, u_in_w - 1);
    y1 = clamp(y1, 0, u_in_h - 1);

    vec4 result = texelFetch(u_bias, ivec2(o_group, 0), 0);

    for (int i = 0; i < u_in_c_groups; i++) {
        vec4 v00 = texelFetch(u_input, ivec2(x0 * u_in_c_groups + i, y0), 0);
        vec4 v10 = texelFetch(u_input, ivec2(x1 * u_in_c_groups + i, y0), 0);
        vec4 v01 = texelFetch(u_input, ivec2(x0 * u_in_c_groups + i, y1), 0);
        vec4 v11 = texelFetch(u_input, ivec2(x1 * u_in_c_groups + i, y1), 0);

        vec4 sampled = mix(mix(v00, v10, fx_w), mix(v01, v11, fx_w), fy_w);

        int base = i * 4;
        mat4 w = mat4(
            texelFetch(u_weights, ivec2(base,     o_group), 0),
            texelFetch(u_weights, ivec2(base + 1, o_group), 0),
            texelFetch(u_weights, ivec2(base + 2, o_group), 0),
            texelFetch(u_weights, ivec2(base + 3, o_group), 0)
        );
        result += w * sampled;
    }

    if      (u_activation == 1) result = clamp(result, 0.0, 6.0);
    else if (u_activation == 2) result = max(result, vec4(0.0));

    fragColor = result;
}
\`;var rt=class extends h{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",io);let n=e.c/4,s=o.outChannels/4,p=m(i.weights),l=m(i.bias),c=this.makeTexture(p,n*4,s),d=this.makeTexture(l,s,1),_=o.outW*s,b=this.makeTexture(null,_,o.outH);this.output={h:o.outH,w:o.outW,c:o.outChannels,texture:b,texW:_,texH:o.outH},this.inputs=[e],this.weights=[],this.samplers=[{name:"u_input",texture:e.texture},{name:"u_weights",texture:c},{name:"u_bias",texture:d}],this.uniformInts={u_in_w:e.w,u_in_h:e.h,u_out_w:o.outW,u_out_h:o.outH,u_in_c_groups:n,u_out_c_groups:s,u_activation:o.activation==="relu6"?1:0},this.defaultSetup(),this.dispatch=[_,o.outH]}};var ao=\`#version 300 es
// Conv2d + skip add fused \\u2014 identical to conv2d.glsl with a skip texture added at write time.
// See conv2d.glsl for tensor/weight layout details.

precision highp float;
precision highp int;

uniform sampler2D u_input;
uniform sampler2D u_skip;
uniform sampler2D u_weights;
uniform sampler2D u_bias;

uniform int u_in_w;
uniform int u_in_h;
uniform int u_in_c_groups;
uniform int u_out_c_groups;
uniform int u_kernel_h;
uniform int u_kernel_w;
uniform int u_stride;
uniform int u_pad_top;
uniform int u_pad_left;
uniform int u_activation;   // 0 = none, 1 = relu6, 2 = relu

out vec4 fragColor;

void main() {
    int fx      = int(gl_FragCoord.x);
    int fy      = int(gl_FragCoord.y);
    int x_out   = fx / u_out_c_groups;
    int y_out   = fy;
    int o_group = fx - x_out * u_out_c_groups;

    vec4 result = texelFetch(u_bias, ivec2(o_group, 0), 0);

    for (int ky = 0; ky < u_kernel_h; ky++) {
        for (int kx = 0; kx < u_kernel_w; kx++) {
            int in_y = y_out * u_stride + ky - u_pad_top;
            int in_x = x_out * u_stride + kx - u_pad_left;

            if (in_y < 0 || in_y >= u_in_h || in_x < 0 || in_x >= u_in_w) continue;

            int z     = ky * u_kernel_w + kx;
            int w_row = z * u_out_c_groups + o_group;

            for (int i = 0; i < u_in_c_groups; i++) {
                vec4 in_val = texelFetch(u_input, ivec2(in_x * u_in_c_groups + i, in_y), 0);

                int base = i * 4;
                mat4 w = mat4(
                    texelFetch(u_weights, ivec2(base,     w_row), 0),
                    texelFetch(u_weights, ivec2(base + 1, w_row), 0),
                    texelFetch(u_weights, ivec2(base + 2, w_row), 0),
                    texelFetch(u_weights, ivec2(base + 3, w_row), 0)
                );
                result += w * in_val;
            }
        }
    }

    if      (u_activation == 1) result = clamp(result, 0.0, 6.0);
    else if (u_activation == 2) result = max(result, vec4(0.0));

    fragColor = result + texelFetch(u_skip, ivec2(fx, fy), 0);
}
\`;var ot=class extends h{constructor(r,e,i,o,n){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",ao);let s=T(e.h,n.kernel,n.stride,n.padding),p=T(e.w,n.kernel,n.stride,n.padding),l=e.c/4,c=n.outChannels/4,d=C(n.padding,e.h,s,n.kernel,n.stride),_=C(n.padding,e.w,p,n.kernel,n.stride),b=m(o.weights),g=m(o.bias),v=this.makeTexture(b,l*4,n.kernel*n.kernel*c),x=this.makeTexture(g,c,1),k=p*c,B=this.makeTexture(null,k,s);this.output={h:s,w:p,c:n.outChannels,texture:B,texW:k,texH:s},this.inputs=[e,i],this.weights=[],this.samplers=[{name:"u_input",texture:e.texture},{name:"u_skip",texture:i.texture},{name:"u_weights",texture:v},{name:"u_bias",texture:x}],this.uniformInts={u_in_w:e.w,u_in_h:e.h,u_in_c_groups:l,u_out_c_groups:c,u_kernel_h:n.kernel,u_kernel_w:n.kernel,u_stride:n.stride,u_pad_top:d,u_pad_left:_,u_activation:n.activation==="relu6"?1:0},this.defaultSetup(),this.dispatch=[k,s]}};var no=\`#version 300 es
// proj_residual: bespoke 1\\xD71 conv (no activation) + residual add, fused.
// Specializes conv2d_add to kernel=1 / stride=1 / pad=0 / no activation. Both
// inputs share the same spatial resolution. See conv2d.glsl for the weight
// texture layout (here K=1, so the weight texture is (inGroups*4, outGroups)).

precision highp float;
precision highp int;

uniform sampler2D u_input;
uniform sampler2D u_skip;
uniform sampler2D u_weights;
uniform sampler2D u_bias;

uniform int u_in_c_groups;
uniform int u_out_c_groups;

out vec4 fragColor;

void main() {
    int fx      = int(gl_FragCoord.x);
    int fy      = int(gl_FragCoord.y);
    int x_out   = fx / u_out_c_groups;
    int o_group = fx - x_out * u_out_c_groups;

    vec4 result = texelFetch(u_bias, ivec2(o_group, 0), 0);

    for (int i = 0; i < u_in_c_groups; i++) {
        vec4 in_val = texelFetch(u_input, ivec2(x_out * u_in_c_groups + i, fy), 0);

        int base = i * 4;
        mat4 w = mat4(
            texelFetch(u_weights, ivec2(base,     o_group), 0),
            texelFetch(u_weights, ivec2(base + 1, o_group), 0),
            texelFetch(u_weights, ivec2(base + 2, o_group), 0),
            texelFetch(u_weights, ivec2(base + 3, o_group), 0)
        );
        result += w * in_val;
    }

    fragColor = result + texelFetch(u_skip, ivec2(fx, fy), 0);
}
\`;var it=class extends h{constructor(r,e,i,o,n){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",no);let s=e.c/4,p=n.outChannels/4,l=m(o.weights),c=m(o.bias),d=this.makeTexture(l,s*4,p),_=this.makeTexture(c,p,1),b=e.w*p,g=this.makeTexture(null,b,e.h);this.output={h:e.h,w:e.w,c:n.outChannels,texture:g,texW:b,texH:e.h},this.inputs=[e,i],this.weights=[],this.samplers=[{name:"u_input",texture:e.texture},{name:"u_skip",texture:i.texture},{name:"u_weights",texture:d},{name:"u_bias",texture:_}],this.uniformInts={u_in_c_groups:s,u_out_c_groups:p},this.defaultSetup(),this.dispatch=[b,e.h]}};var so=\`#version 300 es
// concat_conv2d: fuses [concat(a, b) \\u2192 conv 3\\xD73 (pad 1) \\u2192 relu6] into one pass.
// Both inputs already at output resolution. Weight cols [0, a_groups) read a,
// [a_groups, I) read b. Weight texture layout matches conv2d.glsl
// ((in_groups*4, 9*out_groups), in_groups = a_groups + b_groups).

precision highp float;
precision highp int;

uniform sampler2D u_a;
uniform sampler2D u_b;
uniform sampler2D u_weights;
uniform sampler2D u_bias;

uniform int u_w;
uniform int u_h;
uniform int u_a_groups;
uniform int u_b_groups;
uniform int u_out_c_groups;

out vec4 fragColor;

void main() {
    int fx      = int(gl_FragCoord.x);
    int fy      = int(gl_FragCoord.y);
    int x_out   = fx / u_out_c_groups;
    int o_group = fx - x_out * u_out_c_groups;
    int A = u_a_groups;
    int B = u_b_groups;
    int I = A + B;

    vec4 result = texelFetch(u_bias, ivec2(o_group, 0), 0);

    for (int ky = 0; ky < 3; ky++) {
        for (int kx = 0; kx < 3; kx++) {
            int in_y = fy    + ky - 1;
            int in_x = x_out + kx - 1;
            if (in_x < 0 || in_y < 0 || in_x >= u_w || in_y >= u_h) continue;

            int z     = ky * 3 + kx;
            int w_row = z * u_out_c_groups + o_group;

            for (int i = 0; i < I; i++) {
                vec4 in_val = (i < A)
                    ? texelFetch(u_a, ivec2(in_x * A + i,       in_y), 0)
                    : texelFetch(u_b, ivec2(in_x * B + (i - A), in_y), 0);

                int base = i * 4;
                mat4 w = mat4(
                    texelFetch(u_weights, ivec2(base,     w_row), 0),
                    texelFetch(u_weights, ivec2(base + 1, w_row), 0),
                    texelFetch(u_weights, ivec2(base + 2, w_row), 0),
                    texelFetch(u_weights, ivec2(base + 3, w_row), 0)
                );
                result += w * in_val;
            }
        }
    }

    fragColor = clamp(result, 0.0, 6.0);
}
\`;var at=class extends h{constructor(r,e,i,o,n){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",so);let s=e.c/4,p=i.c/4,l=s+p,c=n.outChannels/4,d=m(o.weights),_=m(o.bias),b=this.makeTexture(d,l*4,9*c),g=this.makeTexture(_,c,1),v=e.w*c,x=this.makeTexture(null,v,e.h);this.output={h:e.h,w:e.w,c:n.outChannels,texture:x,texW:v,texH:e.h},this.inputs=[e,i],this.weights=[],this.samplers=[{name:"u_a",texture:e.texture},{name:"u_b",texture:i.texture},{name:"u_weights",texture:b},{name:"u_bias",texture:g}],this.uniformInts={u_w:e.w,u_h:e.h,u_a_groups:s,u_b_groups:p,u_out_c_groups:c},this.defaultSetup(),this.dispatch=[v,e.h]}};var uo=\`#version 300 es
// gates_fused: ConvGRU z + r gates, fused. Production config (c_up=2,
// recurrent=1). u_in (.x=a, .y=b), h_prev (.x). weights 9 vec4 =
// (z_w_b, z_w_h, r_w_b, r_w_h) in a (9,1) texture. bias .xy. output (z, r, 0, 0).

precision highp float;
precision highp int;

uniform sampler2D u_u_in;     // (W, H)
uniform sampler2D u_h_prev;   // (W, H)
uniform sampler2D u_weights;  // (9, 1)
uniform sampler2D u_bias;     // (1, 1)
uniform int u_w;
uniform int u_h;

out vec4 fragColor;

void main() {
    int x = int(gl_FragCoord.x);
    int y = int(gl_FragCoord.y);

    vec2 b = texelFetch(u_bias, ivec2(0, 0), 0).xy;
    float z_pre = b.x;
    float r_pre = b.y;

    for (int ky = 0; ky < 3; ky++) {
        for (int kx = 0; kx < 3; kx++) {
            int iy = y + ky - 1;
            int ix = x + kx - 1;
            if (iy < 0 || ix < 0 || iy >= u_h || ix >= u_w) continue;
            int kpos  = ky * 3 + kx;
            float b_n = texelFetch(u_u_in,   ivec2(ix, iy), 0).y;
            float h_n = texelFetch(u_h_prev, ivec2(ix, iy), 0).z;
            vec4 w    = texelFetch(u_weights, ivec2(kpos, 0), 0);
            z_pre += w.x * b_n + w.y * h_n;
            r_pre += w.z * b_n + w.w * h_n;
        }
    }

    float z = 1.0 / (1.0 + exp(-z_pre));
    float r = 1.0 / (1.0 + exp(-r_pre));
    fragColor = vec4(z, r, 0.0, 0.0);
}
\`;var nt=class extends h{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",uo);let n=this.makeTexture(m(o.weights),9,1),s=this.makeTexture(y(o.bias),1,1),p=e.w,l=this.makeTexture(null,p,e.h);this.output={h:e.h,w:e.w,c:4,texture:l,texW:p,texH:e.h},this.inputs=[e,i],this.weights=[],this.samplers=[{name:"u_u_in",texture:e.texture},{name:"u_h_prev",texture:i.texture},{name:"u_weights",texture:n},{name:"u_bias",texture:s}],this.uniformInts={u_w:e.w,u_h:e.h},this.defaultSetup(),this.dispatch=[p,e.h]}};var po=\`#version 300 es
// cand_update_fused: ConvGRU candidate + state update + output, fused.
// Production config (c_up=2, recurrent=1). u_in (.x=a, .y=b), h_prev (.x),
// gates_out (.x=z, .y=r). weights 9 vec4 (.xy = b_w, rh_w) in a (9,1) texture.
// bias .x, gamma .x. output (a, b_out, 0, 0).

precision highp float;
precision highp int;

uniform sampler2D u_u_in;       // (W, H)
uniform sampler2D u_h_prev;     // (W, H)
uniform sampler2D u_gates_out;  // (W, H)
uniform sampler2D u_weights;    // (9, 1)
uniform sampler2D u_bias;       // (1, 1)
uniform sampler2D u_gamma;      // (1, 1)
uniform int u_w;
uniform int u_h;

out vec4 fragColor;

void main() {
    int x = int(gl_FragCoord.x);
    int y = int(gl_FragCoord.y);

    float cand_pre = texelFetch(u_bias, ivec2(0, 0), 0).x;
    for (int ky = 0; ky < 3; ky++) {
        for (int kx = 0; kx < 3; kx++) {
            int iy = y + ky - 1;
            int ix = x + kx - 1;
            if (iy < 0 || ix < 0 || iy >= u_h || ix >= u_w) continue;
            int kpos  = ky * 3 + kx;
            float b_n = texelFetch(u_u_in,      ivec2(ix, iy), 0).y;
            float h_n = texelFetch(u_h_prev,    ivec2(ix, iy), 0).z;
            float r_n = texelFetch(u_gates_out, ivec2(ix, iy), 0).y;
            vec4 w    = texelFetch(u_weights,   ivec2(kpos, 0), 0);
            cand_pre += w.x * b_n + w.y * (r_n * h_n);
        }
    }

    float h_til      = tanh(cand_pre);
    vec4  u_cur      = texelFetch(u_u_in,      ivec2(x, y), 0);
    float z_cur      = texelFetch(u_gates_out, ivec2(x, y), 0).x;
    float h_prev_cur = texelFetch(u_h_prev,    ivec2(x, y), 0).z;
    float h_new      = (1.0 - z_cur) * h_prev_cur + z_cur * h_til;
    float gamma      = texelFetch(u_gamma,     ivec2(0, 0), 0).x;
    float b_out      = u_cur.y + gamma * h_new;
    fragColor = vec4(u_cur.x, b_out, h_new, 0.0);
}
\`;var st=class extends h{constructor(r,e,i,o,n,s){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",po);let p=this.makeTexture(m(n.weights),9,1),l=this.makeTexture(y(n.bias),1,1),c=this.makeTexture(y(s),1,1),d=e.w,_=this.makeTexture(null,d,e.h);this.output={h:e.h,w:e.w,c:4,texture:_,texW:d,texH:e.h},this.inputs=[e,i,o],this.weights=[],this.samplers=[{name:"u_u_in",texture:e.texture},{name:"u_h_prev",texture:i.texture},{name:"u_gates_out",texture:o.texture},{name:"u_weights",texture:p},{name:"u_bias",texture:l},{name:"u_gamma",texture:c}],this.uniformInts={u_w:e.w,u_h:e.h},this.defaultSetup(),this.dispatch=[d,e.h]}};var lo=\`#version 300 es
// conv_expand: bespoke N\\u21922 conv 3\\xD73 (pad 1) + relu (wrapper expand_feat).
// Input N ch (in_groups vec4); output 2ch in .xy (.zw = 0). Weights: 9 *
// in_groups mat4x2 (8 floats each, col-major c0r0,c0r1,...,c3r0,c3r1) in a
// 1-row texture \\u2014 bounded small (feat_ch \\u2264 32).

precision highp float;
precision highp int;

uniform sampler2D u_input;    // (W*in_groups, H)
uniform sampler2D u_weights;  // (ceil(9*in_groups*8/4), 1)
uniform sampler2D u_bias;     // (1, 1) \\u2014 .xy
uniform int u_w;
uniform int u_h;
uniform int u_in_groups;

out vec4 fragColor;

float wf(int i) { return texelFetch(u_weights, ivec2(i / 4, 0), 0)[i & 3]; }

void main() {
    int x = int(gl_FragCoord.x);
    int y = int(gl_FragCoord.y);

    vec2 result = texelFetch(u_bias, ivec2(0, 0), 0).xy;

    for (int ky = 0; ky < 3; ky++) {
        for (int kx = 0; kx < 3; kx++) {
            int iy = y + ky - 1;
            int ix = x + kx - 1;
            if (iy < 0 || ix < 0 || iy >= u_h || ix >= u_w) continue;
            int kpos = ky * 3 + kx;
            for (int ig = 0; ig < u_in_groups; ig++) {
                vec4 v = texelFetch(u_input, ivec2(ix * u_in_groups + ig, iy), 0);
                int base = (kpos * u_in_groups + ig) * 8;  // mat4x2 = 8 floats
                result.x += wf(base + 0) * v.x + wf(base + 2) * v.y + wf(base + 4) * v.z + wf(base + 6) * v.w;
                result.y += wf(base + 1) * v.x + wf(base + 3) * v.y + wf(base + 5) * v.z + wf(base + 7) * v.w;
            }
        }
    }

    fragColor = vec4(max(result, vec2(0.0)), 0.0, 0.0);   // expand_feat is F.relu
}
\`;var ut=class extends h{constructor(r,e,i){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",lo);let o=e.c/4,n=this.makeTexture(m(i.weights),18*o,1),s=this.makeTexture(y(i.bias),1,1),p=e.w,l=this.makeTexture(null,p,e.h);this.output={h:e.h,w:e.w,c:4,texture:l,texW:p,texH:e.h},this.inputs=[e],this.weights=[],this.samplers=[{name:"u_input",texture:e.texture},{name:"u_weights",texture:n},{name:"u_bias",texture:s}],this.uniformInts={u_w:e.w,u_h:e.h,u_in_groups:o},this.defaultSetup(),this.dispatch=[p,e.h]}};var co=\`#version 300 es
// cat_conv_6to2: fused concat(u[2], d[4]) \\u2192 6\\u21922 conv 3\\xD73 (pad 1) + relu
// (E up1_combine). Channel order v3a=(u.x,u.y,d.x), v3b=d.yzw. weights = 9*2
// mat3x2 (6 floats each, col-major) in a 1-row (27-texel) texture.

precision highp float;
precision highp int;

uniform sampler2D u_u_in;     // (W, H) \\u2014 .xy
uniform sampler2D u_d_in;     // (W, H) \\u2014 full vec4
uniform sampler2D u_weights;  // (27, 1)
uniform sampler2D u_bias;     // (1, 1) \\u2014 .xy
uniform int u_w;
uniform int u_h;

out vec4 fragColor;

float wf(int i) { return texelFetch(u_weights, ivec2(i / 4, 0), 0)[i & 3]; }

void main() {
    int x = int(gl_FragCoord.x);
    int y = int(gl_FragCoord.y);

    vec2 result = texelFetch(u_bias, ivec2(0, 0), 0).xy;
    for (int ky = 0; ky < 3; ky++) {
        for (int kx = 0; kx < 3; kx++) {
            int iy = y + ky - 1;
            int ix = x + kx - 1;
            if (iy < 0 || ix < 0 || iy >= u_h || ix >= u_w) continue;
            int kpos = ky * 3 + kx;
            vec4 u = texelFetch(u_u_in, ivec2(ix, iy), 0);
            vec4 d = texelFetch(u_d_in, ivec2(ix, iy), 0);
            vec3 v3a = vec3(u.x, u.y, d.x);
            vec3 v3b = d.yzw;
            for (int ig = 0; ig < 2; ig++) {
                int base = (kpos * 2 + ig) * 6;
                vec3 v3 = (ig == 0) ? v3a : v3b;
                for (int col = 0; col < 3; col++) {
                    result.x += wf(base + col * 2 + 0) * v3[col];
                    result.y += wf(base + col * 2 + 1) * v3[col];
                }
            }
        }
    }

    fragColor = vec4(max(result, vec2(0.0)), 0.0, 0.0);   // up1_combine is F.relu
}
\`;var pt=class extends h{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",co);let n=this.makeTexture(m(o.weights),27,1),s=this.makeTexture(y(o.bias),1,1),p=e.w,l=this.makeTexture(null,p,e.h);this.output={h:e.h,w:e.w,c:4,texture:l,texW:p,texH:e.h},this.inputs=[e,i],this.weights=[],this.samplers=[{name:"u_u_in",texture:e.texture},{name:"u_d_in",texture:i.texture},{name:"u_weights",texture:n},{name:"u_bias",texture:s}],this.uniformInts={u_w:e.w,u_h:e.h},this.defaultSetup(),this.dispatch=[p,e.h]}};var mo=\`#version 300 es
// down_adapter: stride-N 3\\xD73 conv (mat4x4, 4\\u21924) + relu, then 1\\xD71 adapter
// (4\\u21923, last row 0). down_w = 9 mat4x4 (1-row, 36 texels); adapt_w = 1 mat4x4
// (4 texels). Output 3ch in .xyz (.w=0). Symmetric pad. Weight packing matches
// conv2d (col-major mat4x4 via the flat accessor).

precision highp float;
precision highp int;

uniform sampler2D u_input;     // (in_W, in_H) \\u2014 in_c padded to 1 vec4
uniform sampler2D u_down_w;    // (36, 1)
uniform sampler2D u_down_b;    // (1, 1)
uniform sampler2D u_adapt_w;   // (4, 1)
uniform sampler2D u_adapt_b;   // (1, 1) \\u2014 .xyz
uniform int u_in_w;
uniform int u_in_h;
uniform int u_stride;
uniform int u_pad;

out vec4 fragColor;

float dwf(int i) { return texelFetch(u_down_w,  ivec2(i / 4, 0), 0)[i & 3]; }
float awf(int i) { return texelFetch(u_adapt_w, ivec2(i / 4, 0), 0)[i & 3]; }

void main() {
    int x = int(gl_FragCoord.x);
    int y = int(gl_FragCoord.y);

    vec4 d = texelFetch(u_down_b, ivec2(0, 0), 0);
    for (int ky = 0; ky < 3; ky++) {
        for (int kx = 0; kx < 3; kx++) {
            int iy = y * u_stride + ky - u_pad;
            int ix = x * u_stride + kx - u_pad;
            if (iy < 0 || ix < 0 || iy >= u_in_h || ix >= u_in_w) continue;
            int kpos = ky * 3 + kx;
            vec4 v = texelFetch(u_input, ivec2(ix, iy), 0);
            int m = kpos * 16;
            d.x += dwf(m + 0) * v.x + dwf(m + 4) * v.y + dwf(m + 8)  * v.z + dwf(m + 12) * v.w;
            d.y += dwf(m + 1) * v.x + dwf(m + 5) * v.y + dwf(m + 9)  * v.z + dwf(m + 13) * v.w;
            d.z += dwf(m + 2) * v.x + dwf(m + 6) * v.y + dwf(m + 10) * v.z + dwf(m + 14) * v.w;
            d.w += dwf(m + 3) * v.x + dwf(m + 7) * v.y + dwf(m + 11) * v.z + dwf(m + 15) * v.w;
        }
    }
    d = max(d, vec4(0.0));   // relu

    vec4 ab = texelFetch(u_adapt_b, ivec2(0, 0), 0);
    vec4 a;
    a.x = awf(0) * d.x + awf(4) * d.y + awf(8)  * d.z + awf(12) * d.w + ab.x;
    a.y = awf(1) * d.x + awf(5) * d.y + awf(9)  * d.z + awf(13) * d.w + ab.y;
    a.z = awf(2) * d.x + awf(6) * d.y + awf(10) * d.z + awf(14) * d.w + ab.z;
    fragColor = vec4(a.xyz, 0.0);
}
\`;var lt=class extends h{constructor(r,e,i,o,n){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",mo);let s=T(e.h,3,n.stride,1),p=T(e.w,3,n.stride,1),l=C(1,e.h,s,3,n.stride),c=this.makeTexture(m(i.weights),36,1),d=this.makeTexture(y(i.bias),1,1),_=this.makeTexture(m(o.weights),4,1),b=this.makeTexture(y(o.bias),1,1),g=p,v=this.makeTexture(null,g,s);this.output={h:s,w:p,c:4,texture:v,texW:g,texH:s},this.inputs=[e],this.weights=[],this.samplers=[{name:"u_input",texture:e.texture},{name:"u_down_w",texture:c},{name:"u_down_b",texture:d},{name:"u_adapt_w",texture:_},{name:"u_adapt_b",texture:b}],this.uniformInts={u_in_w:e.w,u_in_h:e.h,u_stride:n.stride,u_pad:l},this.defaultSetup(),this.dispatch=[g,s]}};var fo=\`#version 300 es
// up_final: cat(u[2], rgb[3]) \\u2192 conv 3\\xD73 5\\u21921 \\u2192 sigmoid (A/B alpha head).
// weights 18 vec4 (1-row): [kpos]=(w0,w1,0,0) for u, [9+kpos]=(w2,w3,w4,0) rgb.

precision highp float;
precision highp int;

uniform sampler2D u_u_gru;    // (W, H) \\u2014 .xy
uniform sampler2D u_rgb;      // (W, H) \\u2014 .xyz
uniform sampler2D u_weights;  // (18, 1)
uniform sampler2D u_bias;     // (1, 1) \\u2014 .x
uniform int u_w;
uniform int u_h;

out vec4 fragColor;

void main() {
    int x = int(gl_FragCoord.x);
    int y = int(gl_FragCoord.y);

    float acc = texelFetch(u_bias, ivec2(0, 0), 0).x;
    for (int ky = 0; ky < 3; ky++) {
        for (int kx = 0; kx < 3; kx++) {
            int iy = y + ky - 1;
            int ix = x + kx - 1;
            if (iy < 0 || ix < 0 || iy >= u_h || ix >= u_w) continue;
            int kpos = ky * 3 + kx;
            vec4 u  = texelFetch(u_u_gru,   ivec2(ix, iy), 0);
            vec4 r  = texelFetch(u_rgb,     ivec2(ix, iy), 0);
            vec4 wu = texelFetch(u_weights, ivec2(kpos, 0), 0);
            vec4 wr = texelFetch(u_weights, ivec2(9 + kpos, 0), 0);
            acc += dot(wu.xy, u.xy);
            acc += dot(wr.xyz, r.xyz);
        }
    }

    fragColor = vec4(1.0 / (1.0 + exp(-acc)), 0.0, 0.0, 0.0);
}
\`;var ct=class extends h{constructor(r,e,i,o){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",fo);let n=this.makeTexture(m(o.weights),18,1),s=this.makeTexture(y(o.bias),1,1),p=e.w,l=this.makeTexture(null,p,e.h);this.output={h:e.h,w:e.w,c:4,texture:l,texW:p,texH:e.h},this.inputs=[e,i],this.weights=[],this.samplers=[{name:"u_u_gru",texture:e.texture},{name:"u_rgb",texture:i.texture},{name:"u_weights",texture:n},{name:"u_bias",texture:s}],this.uniformInts={u_w:e.w,u_h:e.h},this.defaultSetup(),this.dispatch=[p,e.h]}};var ho=\`#version 300 es
// up_final_skip (C/D alpha head): cat(u[2], d_full[4], rgb[3]) \\u2192 conv 9\\u21921 \\u2192
// sigmoid. Weights = 27 vec4 (3 per kpos): [kpos*3+0]=(w0,w1,0,0) u;
// [kpos*3+1]=(w2..w5) d_full; [kpos*3+2]=(w6,w7,w8,0) rgb.

precision highp float;
precision highp int;

uniform sampler2D u_u_gru;    // (W, H) \\u2014 .xy
uniform sampler2D u_d_full;   // (W, H) \\u2014 full vec4
uniform sampler2D u_rgb;      // (W, H) \\u2014 .xyz
uniform sampler2D u_weights;  // (27, 1)
uniform sampler2D u_bias;     // (1, 1) \\u2014 .x
uniform int u_w;
uniform int u_h;

out vec4 fragColor;

float wf(int i) { return texelFetch(u_weights, ivec2(i / 4, 0), 0)[i & 3]; }

void main() {
    int x = int(gl_FragCoord.x);
    int y = int(gl_FragCoord.y);

    float acc = texelFetch(u_bias, ivec2(0, 0), 0).x;
    for (int ky = 0; ky < 3; ky++) {
        for (int kx = 0; kx < 3; kx++) {
            int iy = y + ky - 1;
            int ix = x + kx - 1;
            if (iy < 0 || ix < 0 || iy >= u_h || ix >= u_w) continue;
            int kpos = ky * 3 + kx;
            vec4 u = texelFetch(u_u_gru,  ivec2(ix, iy), 0);
            vec4 d = texelFetch(u_d_full, ivec2(ix, iy), 0);
            vec4 r = texelFetch(u_rgb,    ivec2(ix, iy), 0);
            int b0 = (kpos * 3 + 0) * 4, b1 = (kpos * 3 + 1) * 4, b2 = (kpos * 3 + 2) * 4;
            acc += wf(b0 + 0) * u.x + wf(b0 + 1) * u.y;
            acc += wf(b1 + 0) * d.x + wf(b1 + 1) * d.y + wf(b1 + 2) * d.z + wf(b1 + 3) * d.w;
            acc += wf(b2 + 0) * r.x + wf(b2 + 1) * r.y + wf(b2 + 2) * r.z;
        }
    }

    fragColor = vec4(1.0 / (1.0 + exp(-acc)), 0.0, 0.0, 0.0);
}
\`;var dt=class extends h{constructor(r,e,i,o,n){super(r);a(this,"inputs");a(this,"weights");a(this,"output");a(this,"dispatch");a(this,"shader",ho);let s=this.makeTexture(m(n.weights),27,1),p=this.makeTexture(y(n.bias),1,1),l=e.w,c=this.makeTexture(null,l,e.h);this.output={h:e.h,w:e.w,c:4,texture:c,texW:l,texH:e.h},this.inputs=[e,i,o],this.weights=[],this.samplers=[{name:"u_u_gru",texture:e.texture},{name:"u_d_full",texture:i.texture},{name:"u_rgb",texture:o.texture},{name:"u_weights",texture:s},{name:"u_bias",texture:p}],this.uniformInts={u_w:e.w,u_h:e.h},this.defaultSetup(),this.dispatch=[l,e.h]}};var _o=\`#version 300 es
// Composite an RGBA image over a solid background color, gated by a
// 1-channel alpha mask. Output: premultiplied RGBA.
//
// Assumes image and alpha textures are the same h\\xD7w and that the canvas
// (viewport) matches that resolution \\u2014 no resampling here. The upscaler op
// (separate) handles aligning alpha to the image resolution upstream.

precision highp float;

uniform sampler2D u_image;   // image as NHWC vec4 (RGBA in vec4)
uniform sampler2D u_alpha;   // alpha as NHWC vec4 (value in .r)
uniform vec3      u_bgColor; // straight-alpha background color, [0,1]

out vec4 fragColor;

void main() {
    // WebGL gl_FragCoord origin is bottom-left, but tensor textures are
    // stored top-down (matches NHWC + getImageData). Flip y when sampling so
    // the displayed image is upright. (WebGPU's @builtin(position) is already
    // top-down, so its compositor doesn't need this.)
    int H = textureSize(u_image, 0).y;
    ivec2 px = ivec2(int(gl_FragCoord.x), H - 1 - int(gl_FragCoord.y));
    vec3  fg = texelFetch(u_image, px, 0).rgb;
    float a  = texelFetch(u_alpha, px, 0).r;

    // Straight-alpha composite, then premultiply for the canvas's
    // premultiplied surface format.
    vec3 rgb = fg * a + u_bgColor * (1.0 - a);
    fragColor = vec4(rgb, 1.0);
}
\`;var Da=\`#version 300 es
const vec2 VERTS[6] = vec2[6](
    vec2(-1.0,-1.0), vec2(1.0,-1.0), vec2(-1.0,1.0),
    vec2(-1.0,1.0),  vec2(1.0,-1.0), vec2(1.0,1.0)
);
void main() { gl_Position = vec4(VERTS[gl_VertexID], 0.0, 1.0); }\`,mt=class{constructor(t,r,e,i){a(this,"backend",t);a(this,"program");a(this,"imageTex");a(this,"alphaTex");a(this,"bgColor");if(r.h!==e.h||r.w!==e.w)throw new Error(\`CompositeSolid: image (\${r.h}\\xD7\${r.w}) and alpha (\${e.h}\\xD7\${e.w}) must match. Run the upscaler first.\`);let o=r,n=e;this.imageTex=o.texture,this.alphaTex=n.texture,this.bgColor=i;let s=t.gl,p=s.createShader(s.VERTEX_SHADER);s.shaderSource(p,Da),s.compileShader(p);let l=s.createShader(s.FRAGMENT_SHADER);if(s.shaderSource(l,_o),s.compileShader(l),!s.getShaderParameter(l,s.COMPILE_STATUS))throw new Error(\`composite_solid GLSL compile error: \${s.getShaderInfoLog(l)}\`);if(this.program=s.createProgram(),s.attachShader(this.program,p),s.attachShader(this.program,l),s.linkProgram(this.program),!s.getProgramParameter(this.program,s.LINK_STATUS))throw new Error(\`composite_solid GLSL link error: \${s.getProgramInfoLog(this.program)}\`)}run(){let t=this.backend.gl;t.useProgram(this.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.imageTex),t.uniform1i(t.getUniformLocation(this.program,"u_image"),0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.alphaTex),t.uniform1i(t.getUniformLocation(this.program,"u_alpha"),1),t.uniform3f(t.getUniformLocation(this.program,"u_bgColor"),this.bgColor[0],this.bgColor[1],this.bgColor[2]),this.backend.bindDisplayFramebuffer(),t.bindVertexArray(null),t.drawArrays(t.TRIANGLES,0,6)}};var go=\`#version 300 es
// Same as composite_solid but bg is a texture (NHWC vec4 tensor) instead of
// a uniform color. Caller invariants: image, alpha, bg all share h \\xD7 w, and
// canvas dimensions match.

precision highp float;
precision highp int;

uniform sampler2D u_image;
uniform sampler2D u_alpha;
uniform sampler2D u_bg;

out vec4 fragColor;

void main() {
    // WebGL gl_FragCoord origin is bottom-left; tensor textures are top-down.
    int H = textureSize(u_image, 0).y;
    ivec2 px = ivec2(int(gl_FragCoord.x), H - 1 - int(gl_FragCoord.y));

    vec3  fg = texelFetch(u_image, px, 0).rgb;
    float a  = texelFetch(u_alpha, px, 0).r;
    vec3  bg = texelFetch(u_bg,    px, 0).rgb;

    vec3 rgb = fg * a + bg * (1.0 - a);
    fragColor = vec4(rgb, 1.0);
}
\`;var Ia=\`#version 300 es
const vec2 VERTS[6] = vec2[6](
    vec2(-1.0,-1.0), vec2(1.0,-1.0), vec2(-1.0,1.0),
    vec2(-1.0,1.0),  vec2(1.0,-1.0), vec2(1.0,1.0)
);
void main() { gl_Position = vec4(VERTS[gl_VertexID], 0.0, 1.0); }\`,ft=class{constructor(t,r,e,i){a(this,"backend",t);a(this,"program");a(this,"imageTex");a(this,"alphaTex");a(this,"bgTex");if(r.h!==e.h||r.w!==e.w||r.h!==i.h||r.w!==i.w)throw new Error(\`CompositeImage: image (\${r.h}\\xD7\${r.w}), alpha (\${e.h}\\xD7\${e.w}), and bg (\${i.h}\\xD7\${i.w}) must all match. Run upscaler / resizer first.\`);this.imageTex=r.texture,this.alphaTex=e.texture,this.bgTex=i.texture;let o=t.gl,n=o.createShader(o.VERTEX_SHADER);o.shaderSource(n,Ia),o.compileShader(n);let s=o.createShader(o.FRAGMENT_SHADER);if(o.shaderSource(s,go),o.compileShader(s),!o.getShaderParameter(s,o.COMPILE_STATUS))throw new Error(\`composite_image GLSL compile error: \${o.getShaderInfoLog(s)}\`);if(this.program=o.createProgram(),o.attachShader(this.program,n),o.attachShader(this.program,s),o.linkProgram(this.program),!o.getProgramParameter(this.program,o.LINK_STATUS))throw new Error(\`composite_image GLSL link error: \${o.getProgramInfoLog(this.program)}\`)}run(){let t=this.backend.gl;t.useProgram(this.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.imageTex),t.uniform1i(t.getUniformLocation(this.program,"u_image"),0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.alphaTex),t.uniform1i(t.getUniformLocation(this.program,"u_alpha"),1),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.bgTex),t.uniform1i(t.getUniformLocation(this.program,"u_bg"),2),this.backend.bindDisplayFramebuffer(),t.bindVertexArray(null),t.drawArrays(t.TRIANGLES,0,6)}};var bo=\`#version 300 es
// Like composite_image but bg is bilinearly sampled \\u2014 bg is at a smaller
// resolution than (image, alpha) at canvas h \\xD7 w. Used by CompositorBlur to
// skip the final full-res upsample in the blur pyramid.
//
// Tensor textures are top-down (origin at top-left of the source image),
// while gl_FragCoord origin is bottom-left \\u2014 flip y when computing px.

precision highp float;
precision highp int;

uniform sampler2D u_image;
uniform sampler2D u_alpha;
uniform sampler2D u_bg;

uniform int u_out_w;
uniform int u_out_h;
uniform int u_bg_w;
uniform int u_bg_h;

out vec4 fragColor;

void main() {
    int x = int(gl_FragCoord.x);
    int y = u_out_h - 1 - int(gl_FragCoord.y);

    vec3  fg = texelFetch(u_image, ivec2(x, y), 0).rgb;
    float a  = texelFetch(u_alpha, ivec2(x, y), 0).r;

    // Bilinear sample bg at the corresponding location. align_corners=False.
    float src_x = (float(x) + 0.5) * (float(u_bg_w) / float(u_out_w)) - 0.5;
    float src_y = (float(y) + 0.5) * (float(u_bg_h) / float(u_out_h)) - 0.5;
    int x0 = clamp(int(floor(src_x)),     0, u_bg_w - 1);
    int x1 = clamp(int(floor(src_x)) + 1, 0, u_bg_w - 1);
    int y0 = clamp(int(floor(src_y)),     0, u_bg_h - 1);
    int y1 = clamp(int(floor(src_y)) + 1, 0, u_bg_h - 1);
    float wx = src_x - floor(src_x);
    float wy = src_y - floor(src_y);

    vec3 tl = texelFetch(u_bg, ivec2(x0, y0), 0).rgb;
    vec3 tr = texelFetch(u_bg, ivec2(x1, y0), 0).rgb;
    vec3 bl = texelFetch(u_bg, ivec2(x0, y1), 0).rgb;
    vec3 br = texelFetch(u_bg, ivec2(x1, y1), 0).rgb;
    vec3 bg = (1.0 - wy) * ((1.0 - wx) * tl + wx * tr)
            +        wy  * ((1.0 - wx) * bl + wx * br);

    vec3 rgb = fg * a + bg * (1.0 - a);
    fragColor = vec4(rgb, 1.0);
}
\`;var Ma=\`#version 300 es
const vec2 VERTS[6] = vec2[6](
    vec2(-1.0,-1.0), vec2(1.0,-1.0), vec2(-1.0,1.0),
    vec2(-1.0,1.0),  vec2(1.0,-1.0), vec2(1.0,1.0)
);
void main() { gl_Position = vec4(VERTS[gl_VertexID], 0.0, 1.0); }\`,ht=class{constructor(t,r,e,i){a(this,"backend",t);a(this,"program");a(this,"imageTex");a(this,"alphaTex");a(this,"bgTex");a(this,"outW");a(this,"outH");a(this,"bgW");a(this,"bgH");if(r.h!==e.h||r.w!==e.w)throw new Error(\`CompositeImageBilinear: image (\${r.h}\\xD7\${r.w}) and alpha (\${e.h}\\xD7\${e.w}) must match.\`);this.imageTex=r.texture,this.alphaTex=e.texture,this.bgTex=i.texture,this.outW=r.w,this.outH=r.h,this.bgW=i.w,this.bgH=i.h;let o=t.gl,n=o.createShader(o.VERTEX_SHADER);o.shaderSource(n,Ma),o.compileShader(n);let s=o.createShader(o.FRAGMENT_SHADER);if(o.shaderSource(s,bo),o.compileShader(s),!o.getShaderParameter(s,o.COMPILE_STATUS))throw new Error(\`composite_image_bilinear GLSL compile error: \${o.getShaderInfoLog(s)}\`);if(this.program=o.createProgram(),o.attachShader(this.program,n),o.attachShader(this.program,s),o.linkProgram(this.program),!o.getProgramParameter(this.program,o.LINK_STATUS))throw new Error(\`composite_image_bilinear GLSL link error: \${o.getProgramInfoLog(this.program)}\`)}run(){let t=this.backend.gl;t.useProgram(this.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.imageTex),t.uniform1i(t.getUniformLocation(this.program,"u_image"),0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.alphaTex),t.uniform1i(t.getUniformLocation(this.program,"u_alpha"),1),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.bgTex),t.uniform1i(t.getUniformLocation(this.program,"u_bg"),2),t.uniform1i(t.getUniformLocation(this.program,"u_out_w"),this.outW),t.uniform1i(t.getUniformLocation(this.program,"u_out_h"),this.outH),t.uniform1i(t.getUniformLocation(this.program,"u_bg_w"),this.bgW),t.uniform1i(t.getUniformLocation(this.program,"u_bg_h"),this.bgH),this.backend.bindDisplayFramebuffer(),t.bindVertexArray(null),t.drawArrays(t.TRIANGLES,0,6)}};var vo=\`#version 300 es
// Passthrough "compositor": writes the image directly to the canvas
// (default framebuffer). No alpha math, no background. Used by RenderOp
// when the renderer is in disabled state.
//
// Caller invariants:
//   - canvas (viewport) === image h \\xD7 w (no resampling here)

precision highp float;

uniform sampler2D u_image;   // image as NHWC vec4 (RGBA)

out vec4 fragColor;

void main() {
    // WebGL gl_FragCoord origin is bottom-left; tensor textures are stored
    // top-down. Flip y so the displayed image is upright. (Matches what the
    // existing composite_solid.glsl does.)
    int H = textureSize(u_image, 0).y;
    ivec2 px = ivec2(int(gl_FragCoord.x), H - 1 - int(gl_FragCoord.y));
    vec3  rgb = texelFetch(u_image, px, 0).rgb;
    fragColor = vec4(rgb, 1.0);
}
\`;var Ha=\`#version 300 es
const vec2 VERTS[6] = vec2[6](
    vec2(-1.0,-1.0), vec2(1.0,-1.0), vec2(-1.0,1.0),
    vec2(-1.0,1.0),  vec2(1.0,-1.0), vec2(1.0,1.0)
);
void main() { gl_Position = vec4(VERTS[gl_VertexID], 0.0, 1.0); }\`,_t=class{constructor(t,r){a(this,"backend",t);a(this,"program");a(this,"imageTex");this.imageTex=r.texture;let e=t.gl,i=e.createShader(e.VERTEX_SHADER);e.shaderSource(i,Ha),e.compileShader(i);let o=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(o,vo),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS))throw new Error(\`composite_passthrough GLSL compile error: \${e.getShaderInfoLog(o)}\`);if(this.program=e.createProgram(),e.attachShader(this.program,i),e.attachShader(this.program,o),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS))throw new Error(\`composite_passthrough GLSL link error: \${e.getProgramInfoLog(this.program)}\`)}run(){let t=this.backend.gl;t.useProgram(this.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.imageTex),t.uniform1i(t.getUniformLocation(this.program,"u_image"),0),this.backend.bindDisplayFramebuffer(),t.bindVertexArray(null),t.drawArrays(t.TRIANGLES,0,6)}};var xo=\`#version 300 es
precision highp float;

// Input op \\u2014 bilinear-sample a source texture (RGBA8 unorm uploaded from an
// ImageBitmap or VideoFrame) at the target resolution. Output texture format
// is RGBA32F or RGBA16F depending on backend.dtype; the framebuffer write
// stores fragColor into whatever format is bound.

uniform sampler2D u_src;
uniform int       u_out_w;
uniform int       u_out_h;

out vec4 fragColor;

void main() {
    vec2 uv = (gl_FragCoord.xy + vec2(0.5)) / vec2(float(u_out_w), float(u_out_h));
    fragColor = texture(u_src, uv);
}
\`;var Va=\`#version 300 es
const vec2 VERTS[6] = vec2[6](
    vec2(-1.0,-1.0), vec2(1.0,-1.0), vec2(-1.0,1.0),
    vec2(-1.0,1.0),  vec2(1.0,-1.0), vec2(1.0,1.0)
);
void main() { gl_Position = vec4(VERTS[gl_VertexID], 0.0, 1.0); }\`,gt=class{constructor(t,r,e){a(this,"backend",t);a(this,"output");a(this,"gl");a(this,"program");a(this,"srcTex");a(this,"uOutW");a(this,"uOutH");a(this,"uSrc");a(this,"source",null);let i=t.gl;this.gl=i,this.output=t.tensor(r,e,4),this.srcTex=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.srcTex),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);let o=i.createShader(i.VERTEX_SHADER);i.shaderSource(o,Va),i.compileShader(o);let n=i.createShader(i.FRAGMENT_SHADER);if(i.shaderSource(n,xo),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw new Error(\`Input GLSL compile error: \${i.getShaderInfoLog(n)}\`);if(this.program=i.createProgram(),i.attachShader(this.program,o),i.attachShader(this.program,n),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error(\`Input GLSL link error: \${i.getProgramInfoLog(this.program)}\`);this.uSrc=i.getUniformLocation(this.program,"u_src"),this.uOutW=i.getUniformLocation(this.program,"u_out_w"),this.uOutH=i.getUniformLocation(this.program,"u_out_h")}setSource(t){this.source=t}run(){if(!this.source)throw new Error("InputWebGL.run() called before setSource()");let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.srcTex),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.source),t.useProgram(this.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.srcTex),t.uniform1i(this.uSrc,0),t.uniform1i(this.uOutW,this.output.w),t.uniform1i(this.uOutH,this.output.h),t.bindFramebuffer(t.FRAMEBUFFER,this.backend.fbo),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.output.texture,0),t.viewport(0,0,this.output.texW,this.output.texH),t.bindVertexArray(null),t.drawArrays(t.TRIANGLES,0,6)}};var F=class u{constructor(t,r,e){a(this,"gl",t);a(this,"canvas",r);a(this,"dtype",e);a(this,"ops");a(this,"presenters");a(this,"fbo");a(this,"textureFormat");this.fbo=t.createFramebuffer(),this.textureFormat=e==="f16"?{internalFormat:t.RGBA16F,format:t.RGBA,type:t.HALF_FLOAT,bytesPerElement:2}:{internalFormat:t.RGBA32F,format:t.RGBA,type:t.FLOAT,bytesPerElement:4},this.ops={Conv2d:(i,o,n)=>new He(this,i,o,n),ConvTranspose2d:(i,o,n)=>new ze(this,i,o,n),DepthwiseConv2d:(i,o,n)=>new Ve(this,i,o,n),Add:(i,o)=>new Ne(this,i,o),Sigmoid:i=>new $e(this,i),Tanh:i=>new Xe(this,i),ElementwiseMul:(i,o)=>new je(this,i,o),Warp:(i,o,n)=>new qe(this,i,o,n),Stabilize:(i,o,n,s,p)=>new Ke(this,i,o,n,s,p),BilinearUpsample:(i,o)=>new Ye(this,i,o),Crop:(i,o)=>new Qe(this,i,o),BicubicUpsample:(i,o)=>new Je(this,i,o),ChannelConcat:(i,o)=>new Ze(this,i,o),Conv2dAdd:(i,o,n,s)=>new ot(this,i,o,n,s),ProjResidual:(i,o,n,s)=>new it(this,i,o,n,s),ConcatConv2d:(i,o,n,s)=>new at(this,i,o,n,s),GatesFused:(i,o,n)=>new nt(this,i,o,n),CandUpdateFused:(i,o,n,s,p)=>new st(this,i,o,n,s,p),ConvExpand:(i,o)=>new ut(this,i,o),CatConv6to2:(i,o,n)=>new pt(this,i,o,n),DownAdapter:(i,o,n,s)=>new lt(this,i,o,n,s),UpFinal:(i,o,n)=>new ct(this,i,o,n),UpFinalSkip:(i,o,n,s)=>new dt(this,i,o,n,s),UpsampleConcat:(i,o,n)=>new tt(this,i,o,n),UpsampleConv1x1:(i,o,n)=>new rt(this,i,o,n),UpsampleSigmoid:(i,o)=>new et(this,i,o),Input:(i,o)=>new gt(this,i,o)},this.presenters={CompositeSolid:(i,o,n)=>new mt(this,i,o,n),CompositeImage:(i,o,n)=>new ft(this,i,o,n),CompositeImageBilinear:(i,o,n)=>new ht(this,i,o,n),CompositePassthrough:i=>new _t(this,i)}}static isAvailable(){let t=null;try{return t=new OffscreenCanvas(1,1).getContext("webgl2"),!(!t||!t.getExtension("EXT_color_buffer_float"))}catch{return!1}finally{t?.getExtension("WEBGL_lose_context")?.loseContext()}}static create(t){let r=t.canvas.getContext("webgl2");if(!r)throw new Error("WebGL2 not available");if(!r.getExtension("EXT_color_buffer_float"))throw new Error("EXT_color_buffer_float not available");return new u(r,t.canvas,t.dtype??"f32")}attachCanvas(t){throw new Error(\`WebGLBackend.attachCanvas('\${t}'): WebGL cannot render to a second canvas; use the renderer's snapshot-and-present path for preview output\`)}bindDisplayFramebuffer(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}toTextureView(t){if(t===null)return null;let r=this.dtype==="f16",e=t instanceof Uint16Array;return r===e?t:r?pe(t):A(t)}tensor(t,r,e,i){let o=r*(e/4),n=t,s=this.gl,p=s.createTexture(),l=this.textureFormat,c=this.toTextureView(i??null);return s.bindTexture(s.TEXTURE_2D,p),s.texImage2D(s.TEXTURE_2D,0,l.internalFormat,o,n,0,l.format,l.type,c),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),{h:t,w:r,c:e,texture:p,texW:o,texH:n}}upload(t){return{data:t}}async readback(t){let r=this.gl,e=this.textureFormat;if(r.bindFramebuffer(r.FRAMEBUFFER,this.fbo),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t.texture,0),this.dtype==="f16"){let o=new Uint16Array(t.texW*t.texH*4);return r.readPixels(0,0,t.texW,t.texH,e.format,r.HALF_FLOAT,o),r.bindFramebuffer(r.FRAMEBUFFER,null),A(o)}let i=new Float32Array(t.texW*t.texH*4);return r.readPixels(0,0,t.texW,t.texH,e.format,r.FLOAT,i),r.bindFramebuffer(r.FRAMEBUFFER,null),i}copyTensor(t,r){if(t.texW!==r.texW||t.texH!==r.texH)throw new Error(\`copyTensor: size mismatch (src \${t.texW}\\xD7\${t.texH} vs dst \${r.texW}\\xD7\${r.texH})\`);let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.texture,0),e.bindTexture(e.TEXTURE_2D,r.texture),e.copyTexSubImage2D(e.TEXTURE_2D,0,0,0,0,0,t.texW,t.texH),e.bindFramebuffer(e.FRAMEBUFFER,null)}async sync(){let t=this.gl,r=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0);if(!r){t.finish();return}for(t.flush();;){let e=t.clientWaitSync(r,0,0);if(e===t.ALREADY_SIGNALED||e===t.CONDITION_SATISFIED){t.deleteSync(r);return}if(e===t.WAIT_FAILED)throw t.deleteSync(r),new Error("WebGLBackend.sync: clientWaitSync returned WAIT_FAILED");await new Promise(i=>setTimeout(i,1))}}destroy(){this.gl.deleteFramebuffer(this.fbo),this.gl.getExtension("WEBGL_lose_context")?.loseContext()}};var Tt=S("setup_backend");async function yo(u,t,r={}){let e=u.backend==="webgpu"||u.backend==="auto",i=!!u.outputCanvas,o=()=>u.outputCanvas??new OffscreenCanvas(t.w,t.h),n=null;if(e&&await R.isAvailable()){let p=u.dtype==="f16"&&!await R.hasF16Support()?"f32":u.dtype,l=o();try{let c=await R.create({canvas:l,dtype:p});return c.device.lost.then(d=>{d.reason!=="destroyed"&&r.onContextLost?.({message:\`WebGPU device lost: \${d.reason}\${d.message?" \\u2014 "+d.message:""}\`,source:"backend-lost",recoverable:!1,cause:d})}).catch(()=>{}),{backend:c,resolvedBackend:"webgpu",resolvedDtype:p,canvas:l}}catch(c){Tt.warn("WebGPU isAvailable but create() threw; trying WebGL fallback:",c),n=c,i&&Tt.warn("transfer-capture topology: WebGL fallback may also fail on the same canvas")}}if(F.isAvailable()){let p=o();try{let l=F.create({canvas:p,dtype:u.dtype});return p.addEventListener("webglcontextlost",c=>{r.onContextLost?.({message:"WebGL context lost",source:"backend-lost",recoverable:!1,cause:c})}),{backend:l,resolvedBackend:"webgl",resolvedDtype:u.dtype,canvas:p}}catch(l){Tt.warn("WebGL create() threw:",l),n=l}}let s=n?\` (last error: \${n.message??n})\`:"";throw new Error(\`setup_backend: no usable GPU backend\${s}\`)}var wo=.5,Na=3,ko=10,$a=30,E=S("autotune");async function To(u,t=$a){let r=u instanceof F?wo*.5:wo,e=1e3/t*r;E(\`start; budget per source frame: \${e.toFixed(1)}ms (source \${t}fps \\xD7 \${r} safety)\`),E("backend dtype:",u.dtype);let i=null;for(let o of yt){if(!O[o.model]){E("skip",o.model,"(no TIER_CONFIG entry)");continue}try{let n=O[o.model].baseRes;E(\`bench \${o.model} base @ \${n.w}\\xD7\${n.h} skipFrames=\${o.skipFrames} \\u2026\`);let s=await qa(u,o),p=s<=e;if(E(\`  \${o.model}: \${s.toFixed(1)}ms / source frame \${p?"\\u2713 within budget":"\\u2717 over budget"}\`),(p||i===null)&&(i=o),!p)break}catch(n){E("  bench failed for",o.model,":",n);break}}if(!i)throw new Error("autotune: no implementable preset available");return E("picked",i.model),i}function Xa(u){let t=Object.create(u);return t.ops={...u.ops,Conv2d:(r,e,i)=>{let o={weights:new Float32Array(i.kernel*i.kernel*r.c*i.outChannels),bias:new Float32Array(i.outChannels)};return u.ops.Conv2d(r,o,i)},DepthwiseConv2d:(r,e,i)=>{let o={weights:new Float32Array(i.kernel*i.kernel*r.c),bias:new Float32Array(r.c)};return u.ops.DepthwiseConv2d(r,o,i)},Conv2dAdd:(r,e,i,o)=>{let n={weights:new Float32Array(o.kernel*o.kernel*r.c*o.outChannels),bias:new Float32Array(o.outChannels)};return u.ops.Conv2dAdd(r,e,n,o)},UpsampleConv1x1:(r,e,i)=>{let o={weights:new Float32Array(r.c*i.outChannels),bias:new Float32Array(i.outChannels)};return u.ops.UpsampleConv1x1(r,o,i)},ProjResidual:(r,e,i,o)=>{let n={weights:new Float32Array(r.c*o.outChannels),bias:new Float32Array(o.outChannels)};return u.ops.ProjResidual(r,e,n,o)},ConcatConv2d:(r,e,i,o)=>{let n={weights:new Float32Array(9*(r.c+e.c)*o.outChannels),bias:new Float32Array(o.outChannels)};return u.ops.ConcatConv2d(r,e,n,o)}},t}function ja(){let u=new Proxy({},{get:()=>u});return u}async function qa(u,t){let r=O[t.model];if(!r)throw new Error(\`microbench: no TIER_CONFIG entry for '\${t.model}'\`);let e=r.base,i=Xa(u),o=i.tensor(r.baseRes.h,r.baseRes.w,4),n=new e(i,o,ja());for(let c=0;c<Na;c++)n.run(),await u.sync();let s=t.skipFrames+1,p=performance.now();for(let c=0;c<ko;c++)c%s===0&&n.run();return await u.sync(),(performance.now()-p)/ko}async function Co(u,t,r){let e;if(u==="auto")e=await To(r);else if(typeof u=="string"){let i=q(u);if(!i)throw new Error(\`resolve_preset: unknown preset name '\${u}'\`);e=i}else e=u;return e.dtype!==t?{...e,dtype:t}:e}function Wo(u){let t=null,r=null;return u.onmessage=e=>{let{frame:i}=e.data;if(r){let o=r;r=null,o(i)}else t&&t.close(),t=i},u.start?.(),new ReadableStream({pull(e){if(t){e.enqueue(t),t=null;return}return new Promise(i=>{r=o=>{e.enqueue(o),i()}})},cancel(){t&&(t.close(),t=null),u.close()}},{highWaterMark:0})}function Po(u){switch(u.topology.input){case"mstp":if(!u.inputReadable)throw new Error("create_input: topology.input='mstp' but InitData.inputReadable missing");return u.inputReadable;case"rvfc-postmessage":if(!u.inputPort)throw new Error("create_input: topology.input='rvfc-postmessage' but InitData.inputPort missing");return Wo(u.inputPort)}}function Go(u){return new TransformStream({transform(t,r){u.process(t);let e=new VideoFrame(u.canvas,{timestamp:t.timestamp});t.close(),r.enqueue(e)}})}function Bo(u){return new WritableStream({write(t){u.process(t),t.close()}})}function Uo(u,t){return new WritableStream({write(r){u.process(r),r.close();let e=u.canvas.transferToImageBitmap();t.postMessage({bmp:e},[e])},close(){t.close()}})}var Ka=S("create_output");function So(u,t,r){switch(u.topology.output){case"mstg":{if(!u.outputWritable)throw new Error("create_output: topology.output='mstg' but InitData.outputWritable missing");let e=Go(t);return e.readable.pipeTo(u.outputWritable,{signal:r}).catch(i=>{r.aborted||Ka.warn("mstg downstream pipe failed:",i)}),e.writable}case"transfer-capture":return Bo(t);case"bitmap-shuttle":{if(!u.outputPort)throw new Error("create_output: topology.output='bitmap-shuttle' but InitData.outputPort missing");return Uo(t,u.outputPort)}}}function Lo(u){if(!u.onFirstFrame)return u.input.pipeTo(u.output,{signal:u.signal});let t=!1,r=u.onFirstFrame,e=new TransformStream({transform(i,o){o.enqueue(i),t||(t=!0,queueMicrotask(r))}});return u.input.pipeThrough(e,{signal:u.signal}).pipeTo(u.output,{signal:u.signal})}var W=S("worker");W("script loaded");var P=null,H=null,bt=null;self.onmessage=async function(u){let{cmd:t,data:r,request_id:e}=u.data;W("cmd received:",t,"request_id:",e);try{let i=await Ya(t,r);W("cmd ok:",t),un(e,i)}catch(i){W("cmd FAILED:",t,i),$("error",{message:\`\${t} failed: \${i.message??String(i)}\`,source:"worker",recoverable:!1,cause:i})}};async function Ya(u,t){switch(u){case"init":return Qa(t);case"startRender":return Ja(t.weights);case"setBackground":return Za(t);case"setEnabled":return en(t.enabled);case"setPreset":return an(t);case"getStats":return P?.getStats()??null;case"destroy":return nn();case"attachPreview":return tn(t);case"setPreview":return rn(t);case"clearPreview":return on();default:throw new Error(\`unknown cmd: \${u}\`)}}async function Qa(u){if(Ct(!!u.debug),W("handleInit: start; topology=",u.topology,"preset=",u.preset,"backend=",u.backend,"dtype=",u.dtype),P)throw new Error("handleInit: already initialized");W("handleInit: setupBackend\\u2026");let t=await yo(u,u.canvasSize,{onContextLost:o=>{W("GPU context lost:",o.message),$("error",o)}});W("handleInit: backend ready:",t.resolvedBackend,t.resolvedDtype,"canvas:",t.canvas.width,"x",t.canvas.height),W("handleInit: constructing Renderer (boot mode)\\u2026"),P=new ue({backend:t.backend,backendKind:t.resolvedBackend,canvas:t.canvas,background:u.background,enabled:u.enabled,topology:u.topology}),H=new AbortController,W("handleInit: createInputStream\\u2026");let r=Po(u);W("handleInit: createOutputSink\\u2026");let e=So(u,P,H.signal);W("handleInit: starting pipe (passthrough)\\u2026"),Lo({input:r,output:e,signal:H.signal}).then(()=>{W("pipe completed (input ended)")}).catch(o=>{if(H?.signal.aborted){W("pipe aborted (expected on destroy)");return}W("pipe FAILED:",o),$("error",{message:\`pipe failed: \${o.message}\`,source:"worker",recoverable:!1,cause:o})}),W("handleInit: resolvePreset\\u2026");let i=await Co(u.preset,t.resolvedDtype,t.backend);return W("handleInit: preset resolved:",i),bt=i,W("handleInit: done; returning InitResponse, awaiting startRender"),{resolvedPreset:i,resolvedBackend:t.resolvedBackend,resolvedDtype:t.resolvedDtype}}async function Ja(u){if(W("handleStartRender: start; weights bytes:",u.byteLength),!P||!bt)throw new Error("handleStartRender: handleInit not completed");W("handleStartRender: attaching network via setPreset\\u2026"),P.setPreset(bt,u),W("handleStartRender: ready (effect mode active)"),$("ready",void 0)}async function Za(u){P?.setBackground(u)}async function en(u){P?.setEnabled(u)}async function tn(u){if(!P)throw new Error("handleAttachPreview: not initialized");P.attachPreview(u.canvas)}async function rn(u){if(!P)throw new Error("handleSetPreview: not initialized");P.setPreview(u.background,u.fps!==void 0?{fps:u.fps}:void 0)}async function on(){P?.clearPreview()}async function an(u){if(!P)throw new Error("handleSetPreset: not initialized");if(!u.weights)throw new Error("handleSetPreset: weights required for runtime preset swap");if(u.preset==="auto")throw new Error("handleSetPreset: 'auto' not supported on runtime swap (use at init for autotune)");let t=typeof u.preset=="string"?q(u.preset)??sn(u.preset):u.preset;return P.setPreset(t,u.weights),{resolvedPreset:t}}async function nn(){H?.abort(),H=null,P?.destroy(),P=null,bt=null}function sn(u){throw new Error(\`handleSetPreset: unknown preset '\${u}'\`)}function un(u,t){let r={request_id:u,res:t};self.postMessage(r)}function $(u,t){let r={request_id:u,res:t};self.postMessage(r)}function Vg(u){$("stats",u)}export{Vg as emitStats};
`,Ma=Oi(`pipeline`);function Na(){{let e=new Blob([ja],{type:`application/javascript`}),t=URL.createObjectURL(e),n=new Worker(t,{type:`module`});return URL.revokeObjectURL(t),n}}var Pa={background:`blur`,preset:`auto`,weightsBaseUrl:`https://cdn.longpipe.dev/models/v/0.0.4/`,audio:`passthrough`,enabled:!0,adaptive:!0,debug:!1},Fa={w:1280,h:720};function Ia(e,t){if(t)return t;let n=e.getVideoTracks()[0]?.getSettings()??{};return{w:n.width||Fa.w,h:n.height||Fa.h}}function La(e,t,n){let r=n===`f16`?`.f16.bin`:`.bin`;return`${e.replace(/\/$/,``)}/model_${t}${r}`}async function Ra(e,t,n){if(n===`f16`){let n=await fetch(La(e,t,`f16`));if(n.ok)return n.arrayBuffer()}let r=La(e,t,`f32`),i=await fetch(r);if(!i.ok)throw Error(`weights fetch failed: ${i.status} ${r}`);return i.arrayBuffer()}var za=class{stream;ready;controller;worker;inputCleanup;outputCleanup;adaptive=null;denoiser=null;bgCleanup=null;previewBgCleanup=null;constructor(e,t){let n={...Pa,...t};Di(n.debug);let r=Yi(),i=wa(r.input,e),a=Ia(e,n.outputResolution),o=Aa(r.output,a);this.inputCleanup=i.cleanup,this.outputCleanup=o.cleanup;let s=Qi(n.audio),c;if(s.mode===`denoise`){let t=e.getAudioTracks()[0];t?(this.denoiser=new _a(t,{model:s.denoise?.model??`auto`,weightsBaseUrl:n.weightsBaseUrl,postFilterBeta:s.denoise?.postFilterBeta,gruLeak:s.denoise?.gruLeak,enabled:s.denoise?.enabled,onError:e=>n.onError?.({message:e,source:`audio`,recoverable:!0})}),c=this.denoiser.outputTrack):n.onError?.({message:`audio: "denoise" requested but the input stream has no audio track`,source:`audio`,recoverable:!0})}this.stream=$i(o.videoTrack,e,s,c),o.startPassthrough?.(e),this.worker=Na(),this.controller=new ba(this.worker),this.ready=new Promise((e,t)=>{this.controller.addPersistentListener(`ready`,()=>{Ma(`ready handler invoked; resolving .ready`),n.onReady?.(),e()}),this.controller.addPersistentListener(`error`,e=>{console.error(`[longpipe/pipeline] error (${e.source}):`,e.message),e.recoverable||t(Error(e.message)),n.onError?.(e)})});let l={topology:r,preset:n.preset,enabled:n.enabled,backend:`auto`,dtype:`f16`,canvasSize:a,debug:n.debug,...i.initFields,...o.initFields},u=[...i.transferList,...o.transferList];this.bootstrap(l,n.background,u,n.weightsBaseUrl,n.adaptive,n.onError)}async bootstrap(e,t,n,r,i,a){try{Ma(`normalizing background…`);let o=await Hi(t);this.bgCleanup=o.cleanup??null;let s={...e,background:o.background},c=[...n,...o.transferList??[]];Ma(`sending init…`);let l=await this.controller.sendMessage(`init`,s,c);Ma(`init resolved:`,l),Ma(`fetching weights:`,l.resolvedPreset.model,l.resolvedDtype);let u=await Ra(r,l.resolvedPreset.model,l.resolvedDtype);Ma(`weights bytes:`,u.byteLength),Ma(`sending startRender…`),await this.controller.sendMessage(`startRender`,{weights:u},[u]),Ma(`startRender resolved; awaiting first frame`),s.preset===`auto`&&i&&(this.adaptive=new Li({backendKind:l.resolvedBackend,initialModel:l.resolvedPreset.model,fetchWeights:e=>Ra(r,e,l.resolvedDtype),getStats:()=>this.getStats(),swapPreset:async(e,t)=>{await this.controller.sendMessage(`setPreset`,{preset:e,weights:t},[t])},onError:a}),this.adaptive.start())}catch(e){console.error(`[longpipe/pipeline] bootstrap failed:`,e),this.controller.handleMessage.call(this.controller,{data:{request_id:`error`,res:{message:e.message??String(e),source:`worker`,recoverable:!1,cause:e}}})}}then(e,t){return this.ready.then(()=>e?e(this):this,t)}async setBackground(e){let t=await Hi(e),n=this.bgCleanup;this.bgCleanup=t.cleanup??null,await this.controller.sendMessage(`setBackground`,t.background,t.transferList),n?.()}setPreset(e,t){this.controller.sendMessage(`setPreset`,{preset:e,weights:t})}attachPreview(e){let t=e.transferControlToOffscreen();this.controller.sendMessage(`attachPreview`,{canvas:t},[t])}async setPreview(e){let t=await Hi(e.background),n=this.previewBgCleanup;this.previewBgCleanup=t.cleanup??null,await this.controller.sendMessage(`setPreview`,{background:t.background,fps:e.fps},t.transferList),n?.()}clearPreview(){this.controller.sendMessage(`clearPreview`,{}),this.previewBgCleanup?.(),this.previewBgCleanup=null}setEnabled(e){this.controller.sendMessage(`setEnabled`,{enabled:e})}async getStats(){return this.controller.sendMessage(`getStats`,{})}setDenoise(e){if(this.denoiser){if(typeof e==`boolean`){this.denoiser.setEnabled(e);return}(e.postFilterBeta!=null||e.gruLeak!=null)&&this.denoiser.setConfig({postFilterBeta:e.postFilterBeta,gruLeak:e.gruLeak}),e.enabled!=null&&this.denoiser.setEnabled(e.enabled)}}getAudioStats(){return this.denoiser?.getStats()??null}destroy(){this.adaptive?.stop(),this.adaptive=null,this.denoiser?.destroy(),this.denoiser=null,this.bgCleanup?.(),this.bgCleanup=null,this.previewBgCleanup?.(),this.previewBgCleanup=null,this.controller.sendMessage(`destroy`,{}),this.controller.terminate(),this.inputCleanup(),this.outputCleanup()}};new Uint32Array(new Float32Array(1).buffer),navigator.gpu&&GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;var Ba=(0,_.createContext)({theme:`system`,setTheme:()=>null});function Va(){let e=(0,_.useContext)(Ba);if(e===void 0)throw Error(`useTheme must be used within a ThemeProvider`);return e}var Ha=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),G=o(((e,t)=>{t.exports=Ha()}))();function Ua(e){let t=(0,b.c)(20),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({children:n,defaultTheme:i,storageKey:a,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=i===void 0?`system`:i,s=a===void 0?`vite-ui-theme`:a,c;t[5]!==o||t[6]!==s?(c=()=>localStorage.getItem(s)||o,t[5]=o,t[6]=s,t[7]=c):c=t[7];let[l,u]=(0,_.useState)(c),d,f;t[8]===l?(d=t[9],f=t[10]):(d=()=>{let e=window.document.documentElement;if(e.classList.remove(`light`,`dark`),l===`system`){let t=window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`;e.classList.add(t);return}e.classList.add(l)},f=[l],t[8]=l,t[9]=d,t[10]=f),(0,_.useEffect)(d,f);let p;t[11]===s?p=t[12]:(p=e=>{localStorage.setItem(s,e),u(e)},t[11]=s,t[12]=p);let m;t[13]!==p||t[14]!==l?(m={theme:l,setTheme:p},t[13]=p,t[14]=l,t[15]=m):m=t[15];let h=m,g;return t[16]!==n||t[17]!==r||t[18]!==h?(g=(0,G.jsx)(Ba.Provider,{...r,value:h,children:n}),t[16]=n,t[17]=r,t[18]=h,t[19]=g):g=t[19],g}var Wa=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Ga=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Ka=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),qa=e=>{let t=Ka(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ja={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Ya=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Xa=(0,_.createContext)({}),Za=()=>(0,_.useContext)(Xa),Qa=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=Za()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...Ja,width:t??l??Ja.width,height:t??l??Ja.height,stroke:e??f,strokeWidth:m,className:Wa(`lucide`,p,i),...!a&&!Ya(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),$a=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(Qa,{ref:i,iconNode:t,className:Wa(`lucide-${Ga(qa(e))}`,`lucide-${e}`,n),...r}));return n.displayName=qa(e),n},eo=$a(`ban`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M4.929 4.929 19.07 19.071`,key:`196cmz`}]]),to=$a(`camera-off`,[[`path`,{d:`M14.564 14.558a3 3 0 1 1-4.122-4.121`,key:`1rnrzw`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}],[`path`,{d:`M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175`,key:`1x3arw`}],[`path`,{d:`M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344`,key:`1i84u0`}]]),no=$a(`camera`,[[`path`,{d:`M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,key:`18u6gg`}],[`circle`,{cx:`12`,cy:`13`,r:`3`,key:`1vg3eu`}]]),ro=$a(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),io=$a(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),ao=$a(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),oo=$a(`ellipsis`,[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]]),so=$a(`grip-horizontal`,[[`circle`,{cx:`12`,cy:`9`,r:`1`,key:`124mty`}],[`circle`,{cx:`19`,cy:`9`,r:`1`,key:`1ruzo2`}],[`circle`,{cx:`5`,cy:`9`,r:`1`,key:`1a8b28`}],[`circle`,{cx:`12`,cy:`15`,r:`1`,key:`1e56xg`}],[`circle`,{cx:`19`,cy:`15`,r:`1`,key:`1a92ep`}],[`circle`,{cx:`5`,cy:`15`,r:`1`,key:`5r1jwy`}]]),co=$a(`grip`,[[`circle`,{cx:`12`,cy:`5`,r:`1`,key:`gxeob9`}],[`circle`,{cx:`19`,cy:`5`,r:`1`,key:`w8mnmm`}],[`circle`,{cx:`5`,cy:`5`,r:`1`,key:`lttvr7`}],[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}],[`circle`,{cx:`12`,cy:`19`,r:`1`,key:`lyex9k`}],[`circle`,{cx:`19`,cy:`19`,r:`1`,key:`shf9b7`}],[`circle`,{cx:`5`,cy:`19`,r:`1`,key:`bfqh0e`}]]),lo=$a(`image-off`,[[`line`,{x1:`2`,x2:`22`,y1:`2`,y2:`22`,key:`a6p6uj`}],[`path`,{d:`M10.41 10.41a2 2 0 1 1-2.83-2.83`,key:`1bzlo9`}],[`line`,{x1:`13.5`,x2:`6`,y1:`13.5`,y2:`21`,key:`1q0aeu`}],[`line`,{x1:`18`,x2:`21`,y1:`12`,y2:`15`,key:`5mozeu`}],[`path`,{d:`M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59`,key:`mmje98`}],[`path`,{d:`M21 15V5a2 2 0 0 0-2-2H9`,key:`43el77`}]]),uo=$a(`image`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}]]),fo=$a(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),po=$a(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),mo=$a(`mic-off`,[[`path`,{d:`M12 19v3`,key:`npa21l`}],[`path`,{d:`M15 9.34V5a3 3 0 0 0-5.68-1.33`,key:`1gzdoj`}],[`path`,{d:`M16.95 16.95A7 7 0 0 1 5 12v-2`,key:`cqa7eg`}],[`path`,{d:`M18.89 13.23A7 7 0 0 0 19 12v-2`,key:`16hl24`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}],[`path`,{d:`M9 9v3a3 3 0 0 0 5.12 2.12`,key:`r2i35w`}]]),ho=$a(`mic`,[[`path`,{d:`M12 19v3`,key:`npa21l`}],[`path`,{d:`M19 10v2a7 7 0 0 1-14 0v-2`,key:`1vc78b`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`13`,rx:`3`,key:`s6n7sd`}]]),go=$a(`monitor-up`,[[`path`,{d:`m9 10 3-3 3 3`,key:`11gsxs`}],[`path`,{d:`M12 13V7`,key:`h0r20n`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`,key:`48i651`}],[`path`,{d:`M12 17v4`,key:`1riwvh`}],[`path`,{d:`M8 21h8`,key:`1ev6f3`}]]),_o=$a(`monitor-x`,[[`path`,{d:`m14.5 12.5-5-5`,key:`1jahn5`}],[`path`,{d:`m9.5 12.5 5-5`,key:`1k2t7b`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`,key:`48i651`}],[`path`,{d:`M12 17v4`,key:`1riwvh`}],[`path`,{d:`M8 21h8`,key:`1ev6f3`}]]),vo=$a(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),yo=$a(`square-play`,[[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z`,key:`kmsa83`}]]),bo=$a(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),xo=$a(`video-off`,[[`path`,{d:`M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196`,key:`w8jjjt`}],[`path`,{d:`M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2`,key:`1xawa7`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),So=$a(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]);function Co(){return typeof window<`u`}function wo(e){return Do(e)?(e.nodeName||``).toLowerCase():`#document`}function To(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Eo(e){return((Do(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Do(e){return Co()?e instanceof Node||e instanceof To(e).Node:!1}function K(e){return Co()?e instanceof Element||e instanceof To(e).Element:!1}function Oo(e){return Co()?e instanceof HTMLElement||e instanceof To(e).HTMLElement:!1}function ko(e){return!Co()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof To(e).ShadowRoot}function Ao(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Vo(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function jo(e){return/^(table|td|th)$/.test(wo(e))}function Mo(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var No=/transform|translate|scale|rotate|perspective|filter/,Po=/paint|layout|strict|content/,Fo=e=>!!e&&e!==`none`,Io;function Lo(e){let t=K(e)?Vo(e):e;return Fo(t.transform)||Fo(t.translate)||Fo(t.scale)||Fo(t.rotate)||Fo(t.perspective)||!zo()&&(Fo(t.backdropFilter)||Fo(t.filter))||No.test(t.willChange||``)||Po.test(t.contain||``)}function Ro(e){let t=Uo(e);for(;Oo(t)&&!Bo(t);){if(Lo(t))return t;if(Mo(t))return null;t=Uo(t)}return null}function zo(){return Io??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Io}function Bo(e){return/^(html|body|#document)$/.test(wo(e))}function Vo(e){return To(e).getComputedStyle(e)}function Ho(e){return K(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Uo(e){if(wo(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||ko(e)&&e.host||Eo(e);return ko(t)?t.host:t}function Wo(e){let t=Uo(e);return Bo(t)?e.ownerDocument?e.ownerDocument.body:e.body:Oo(t)&&Ao(t)?t:Wo(t)}function Go(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Wo(e),i=r===e.ownerDocument?.body,a=To(r);if(i){let e=Ko(a);return t.concat(a,a.visualViewport||[],Ao(r)?r:[],e&&n?Go(e):[])}else return t.concat(r,Go(r,[],n))}function Ko(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var qo={..._},Jo={};function Yo(e,t){let n=_.useRef(Jo);return n.current===Jo&&(n.current=e(t)),n}var Xo=qo.useInsertionEffect,Zo=Xo&&Xo!==qo.useLayoutEffect?Xo:e=>e();function q(e){let t=Yo(Qo).current;return t.next=e,Zo(t.effect),t.trampoline}function Qo(){let e={next:void 0,callback:$o,trampoline:(...t)=>e.callback?.(...t),effect:()=>{e.callback=e.next}};return e}function $o(){}var J=typeof document<`u`?_.useLayoutEffect:()=>{};function es(e,t){if(e&&!t)return e;if(!e&&t)return t;if(e||t)return{...e,...t}}var ts={};function ns(e,t,n,r,i){if(!n&&!r&&!i&&!e)return is(t);let a=is(e);return t&&(a=as(a,t)),n&&(a=as(a,n)),r&&(a=as(a,r)),i&&(a=as(a,i)),a}function rs(e){if(e.length===0)return ts;if(e.length===1)return is(e[0]);let t=is(e[0]);for(let n=1;n<e.length;n+=1)t=as(t,e[n]);return t}function is(e){return ls(e)?{...us(e,ts)}:os(e)}function as(e,t){return ls(t)?us(t,e):ss(e,t)}function os(e){let t={...e};for(let e in t){let n=t[e];cs(e,n)&&(t[e]=fs(n))}return t}function ss(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(n){case`style`:e[n]=es(e.style,r);break;case`className`:e[n]=ms(e.className,r);break;default:cs(n,r)?e[n]=ds(e[n],r):e[n]=r}}return e}function cs(e,t){let n=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2);return n===111&&r===110&&i>=65&&i<=90&&(typeof t==`function`||t===void 0)}function ls(e){return typeof e==`function`}function us(e,t){return ls(e)?e(t):e??ts}function ds(e,t){return t?e?(...n)=>{let r=n[0];if(hs(r)){let i=r;ps(i);let a=t(...n);return i.baseUIHandlerPrevented||e?.(...n),a}let i=t(...n);return e?.(...n),i}:fs(t):e}function fs(e){return e&&((...t)=>{let n=t[0];return hs(n)&&ps(n),e(...t)})}function ps(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function ms(e,t){return t?e?t+` `+e:t:e}function hs(e){return typeof e==`object`&&!!e&&`nativeEvent`in e}function gs(e,t){return function(n,...r){let i=new URL(e);return i.searchParams.set(`code`,n.toString()),r.forEach(e=>i.searchParams.append(`args[]`,e)),`${t} error #${n}; visit ${i} for the full message.`}}var _s=gs(`https://base-ui.com/production-error`,`Base UI`),vs=_.createContext(void 0);function ys(e=!1){let t=_.useContext(vs);if(t===void 0&&!e)throw Error(_s(16));return t}function bs(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return{props:_.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}}function xs(e={}){let{disabled:t=!1,focusableWhenDisabled:n,tabIndex:r=0,native:i=!0,composite:a}=e,o=_.useRef(null),s=ys(!0),c=a??s!==void 0,{props:l}=bs({focusableWhenDisabled:n,disabled:t,composite:c,tabIndex:r,isNativeButton:i}),u=_.useCallback(()=>{let e=o.current;Ss(e)&&c&&t&&l.disabled===void 0&&e.disabled&&(e.disabled=!1)},[t,l.disabled,c]);return J(u,[u]),{getButtonProps:_.useCallback((e={})=>{let{onClick:n,onMouseDown:r,onKeyUp:a,onKeyDown:o,onPointerDown:s,...u}=e;return ns({onClick(e){if(t){e.preventDefault();return}n?.(e)},onMouseDown(e){t||r?.(e)},onKeyDown(e){if(t||(ps(e),o?.(e),e.baseUIHandlerPrevented))return;let r=e.target===e.currentTarget,a=e.currentTarget,s=Ss(a),l=!i&&Cs(a),u=r&&(i?s:!l),d=e.key===`Enter`,f=e.key===` `,p=a.getAttribute(`role`),m=p?.startsWith(`menuitem`)||p===`option`||p===`gridcell`;if(r&&c&&f){if(e.defaultPrevented&&m)return;e.preventDefault(),l||i&&s?(a.click(),e.preventBaseUIHandler()):u&&(n?.(e),e.preventBaseUIHandler());return}u&&(!i&&(f||d)&&e.preventDefault(),!i&&d&&n?.(e))},onKeyUp(e){if(!t){if(ps(e),a?.(e),e.target===e.currentTarget&&i&&c&&Ss(e.currentTarget)&&e.key===` `){e.preventDefault();return}e.baseUIHandlerPrevented||e.target===e.currentTarget&&!i&&!c&&e.key===` `&&n?.(e)}},onPointerDown(e){if(t){e.preventDefault();return}s?.(e)}},i?{type:`button`}:{role:`button`},l,u)},[t,l,c,i]),buttonRef:q(e=>{o.current=e,u()})}}function Ss(e){return Oo(e)&&e.tagName===`BUTTON`}function Cs(e){return!!(e?.tagName===`A`&&e?.href)}function ws(e,t,n,r){let i=Yo(Es).current;return Ds(i,e,t,n,r)&&ks(i,[e,t,n,r]),i.callback}function Ts(e){let t=Yo(Es).current;return Os(t,e)&&ks(t,e),t.callback}function Es(){return{callback:null,cleanup:null,refs:[]}}function Ds(e,t,n,r,i){return e.refs[0]!==t||e.refs[1]!==n||e.refs[2]!==r||e.refs[3]!==i}function Os(e,t){return e.refs.length!==t.length||e.refs.some((e,n)=>e!==t[n])}function ks(e,t){if(e.refs=t,t.every(e=>e==null)){e.callback=null;return}e.callback=n=>{if(e.cleanup&&=(e.cleanup(),null),n!=null){let r=Array(t.length).fill(null);for(let e=0;e<t.length;e+=1){let i=t[e];if(i!=null)switch(typeof i){case`function`:{let t=i(n);typeof t==`function`&&(r[e]=t);break}case`object`:i.current=n;break;default:}}e.cleanup=()=>{for(let e=0;e<t.length;e+=1){let n=t[e];if(n!=null)switch(typeof n){case`function`:{let t=r[e];typeof t==`function`?t():n(null);break}case`object`:n.current=null;break;default:}}}}}}var As=19;function js(e){return As>=e}function Ms(e){if(!_.isValidElement(e))return null;let t=e,n=t.props;return(js(19)?n?.ref:t.ref)??null}function Ns(){}var Ps=Object.freeze([]),Fs=Object.freeze({});function Is(e,t){let n={};for(let r in e){let i=e[r];if(t?.hasOwnProperty(r)){let e=t[r](i);e!=null&&Object.assign(n,e);continue}i===!0?n[`data-${r.toLowerCase()}`]=``:i&&(n[`data-${r.toLowerCase()}`]=i.toString())}return n}function Ls(e,t){return typeof e==`function`?e(t):e}function Rs(e,t){return typeof e==`function`?e(t):e}function zs(e,t,n={}){let r=t.render,i=Bs(t,n);return n.enabled===!1?null:Us(e,r,i,n.state??Fs)}function Bs(e,t={}){let{className:n,style:r,render:i}=e,{state:a=Fs,ref:o,props:s,stateAttributesMapping:c,enabled:l=!0}=t,u=l?Ls(n,a):void 0,d=l?Rs(r,a):void 0,f=l?Is(a,c):Fs,p=l&&s?Vs(s):void 0,m=l?es(f,p)??{}:Fs;return typeof document<`u`&&(l?Array.isArray(o)?m.ref=Ts([m.ref,Ms(i),...o]):m.ref=ws(m.ref,Ms(i),o):ws(null,null)),l?(u!==void 0&&(m.className=ms(m.className,u)),d!==void 0&&(m.style=es(m.style,d)),m):Fs}function Vs(e){return Array.isArray(e)?rs(e):ns(void 0,e)}var Hs=Symbol.for(`react.lazy`);function Us(e,t,n,r){if(t){if(typeof t==`function`)return t(n,r);let e=ns(n,t.props);e.ref=n.ref;let i=t;return i?.$$typeof===Hs&&(i=_.Children.toArray(t)[0]),_.cloneElement(i,e)}if(e&&typeof e==`string`)return Ws(e,n);throw Error(_s(8))}function Ws(e,t){return e===`button`?(0,_.createElement)(`button`,{type:`button`,...t,key:t.key}):e===`img`?(0,_.createElement)(`img`,{alt:``,...t,key:t.key}):_.createElement(e,t)}var Gs=_.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,focusableWhenDisabled:a=!1,nativeButton:o=!0,style:s,...c}=e,{getButtonProps:l,buttonRef:u}=xs({disabled:i,focusableWhenDisabled:a,native:o});return zs(`button`,e,{state:{disabled:i},ref:[t,u],props:[c,l]})});function Ks(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ks(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function qs(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ks(e))&&(r&&(r+=` `),r+=t);return r}var Js=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Ys=(e,t)=>({classGroupId:e,validator:t}),Xs=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Zs=`-`,Qs=[],$s=`arbitrary..`,ec=e=>{let t=rc(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return nc(e);let n=e.split(Zs);return tc(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?Js(i,t):t:i||Qs}return n[e]||Qs}}},tc=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=tc(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Zs):e.slice(t).join(Zs),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},nc=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?$s+r:void 0})(),rc=e=>{let{theme:t,classGroups:n}=e;return ic(n,t)},ic=(e,t)=>{let n=Xs();for(let r in e){let i=e[r];ac(i,n,r,t)}return n},ac=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];oc(i,t,n,r)}},oc=(e,t,n,r)=>{if(typeof e==`string`){sc(e,t,n);return}if(typeof e==`function`){cc(e,t,n,r);return}lc(e,t,n,r)},sc=(e,t,n)=>{let r=e===``?t:uc(t,e);r.classGroupId=n},cc=(e,t,n,r)=>{if(dc(e)){ac(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Ys(n,e))},lc=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];ac(o,uc(t,a),n,r)}},uc=(e,t)=>{let n=e,r=t.split(Zs),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Xs(),n.nextPart.set(t,i)),n=i}return n},dc=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,fc=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},pc=`!`,mc=`:`,hc=[],gc=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),_c=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===mc){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(pc)?(c=s.slice(0,-1),l=!0):s.startsWith(pc)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return gc(t,l,c,u)};if(t){let e=t+mc,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):gc(hc,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},vc=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},yc=e=>({cache:fc(e.cacheSize),parseClassName:_c(e),sortModifiers:vc(e),postfixLookupClassGroupIds:bc(e),...ec(e)}),bc=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},xc=/\s+/,Sc=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(xc),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+pc:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},Cc=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=wc(n))&&(i&&(i+=` `),i+=r);return i},wc=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=wc(e[r]))&&(n&&(n+=` `),n+=t);return n},Tc=(e,...t)=>{let n,r,i,a,o=o=>(n=yc(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Sc(e,n);return i(e,a),a};return a=o,(...e)=>a(Cc(...e))},Ec=[],Dc=e=>{let t=t=>t[e]||Ec;return t.isThemeGetter=!0,t},Oc=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,kc=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Ac=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,jc=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Mc=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Nc=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Pc=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Fc=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ic=e=>Ac.test(e),Y=e=>!!e&&!Number.isNaN(Number(e)),Lc=e=>!!e&&Number.isInteger(Number(e)),Rc=e=>e.endsWith(`%`)&&Y(e.slice(0,-1)),zc=e=>jc.test(e),Bc=()=>!0,Vc=e=>Mc.test(e)&&!Nc.test(e),Hc=()=>!1,Uc=e=>Pc.test(e),Wc=e=>Fc.test(e),Gc=e=>!X(e)&&!Z(e),Kc=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),qc=e=>cl(e,fl,Hc),X=e=>Oc.test(e),Jc=e=>cl(e,pl,Vc),Yc=e=>cl(e,ml,Y),Xc=e=>cl(e,gl,Bc),Zc=e=>cl(e,hl,Hc),Qc=e=>cl(e,ul,Hc),$c=e=>cl(e,dl,Wc),el=e=>cl(e,_l,Uc),Z=e=>kc.test(e),tl=e=>ll(e,pl),nl=e=>ll(e,hl),rl=e=>ll(e,ul),il=e=>ll(e,fl),al=e=>ll(e,dl),ol=e=>ll(e,_l,!0),sl=e=>ll(e,gl,!0),cl=(e,t,n)=>{let r=Oc.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},ll=(e,t,n=!1)=>{let r=kc.exec(e);return r?r[1]?t(r[1]):n:!1},ul=e=>e===`position`||e===`percentage`,dl=e=>e===`image`||e===`url`,fl=e=>e===`length`||e===`size`||e===`bg-size`,pl=e=>e===`length`,ml=e=>e===`number`,hl=e=>e===`family-name`,gl=e=>e===`number`||e===`weight`,_l=e=>e===`shadow`,vl=Tc(()=>{let e=Dc(`color`),t=Dc(`font`),n=Dc(`text`),r=Dc(`font-weight`),i=Dc(`tracking`),a=Dc(`leading`),o=Dc(`breakpoint`),s=Dc(`container`),c=Dc(`spacing`),l=Dc(`radius`),u=Dc(`shadow`),d=Dc(`inset-shadow`),f=Dc(`text-shadow`),p=Dc(`drop-shadow`),m=Dc(`blur`),h=Dc(`perspective`),g=Dc(`aspect`),_=Dc(`ease`),v=Dc(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),Z,X],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[Z,X,c],T=()=>[Ic,`full`,`auto`,...w()],E=()=>[Lc,`none`,`subgrid`,Z,X],D=()=>[`auto`,{span:[`full`,Lc,Z,X]},Lc,Z,X],O=()=>[Lc,`auto`,Z,X],k=()=>[`auto`,`min`,`max`,`fr`,Z,X],A=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],j=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],M=()=>[`auto`,...w()],N=()=>[Ic,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],P=()=>[Ic,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],F=()=>[Ic,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],I=()=>[e,Z,X],L=()=>[...b(),rl,Qc,{position:[Z,X]}],R=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],ee=()=>[`auto`,`cover`,`contain`,il,qc,{size:[Z,X]}],te=()=>[Rc,tl,Jc],z=()=>[``,`none`,`full`,l,Z,X],B=()=>[``,Y,tl,Jc],V=()=>[`solid`,`dashed`,`dotted`,`double`],H=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],U=()=>[Y,Rc,rl,Qc],ne=()=>[``,`none`,m,Z,X],W=()=>[`none`,Y,Z,X],re=()=>[`none`,Y,Z,X],ie=()=>[Y,Z,X],ae=()=>[Ic,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[zc],breakpoint:[zc],color:[Bc],container:[zc],"drop-shadow":[zc],ease:[`in`,`out`,`in-out`],font:[Gc],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[zc],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[zc],shadow:[zc],spacing:[`px`,Y],text:[zc],"text-shadow":[zc],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,Ic,X,Z,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,Z,X]}],"container-named":[Kc],columns:[{columns:[Y,X,Z,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[Lc,`auto`,Z,X]}],basis:[{basis:[Ic,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[Y,Ic,`auto`,`initial`,`none`,X]}],grow:[{grow:[``,Y,Z,X]}],shrink:[{shrink:[``,Y,Z,X]}],order:[{order:[Lc,`first`,`last`,`none`,Z,X]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":k()}],"auto-rows":[{"auto-rows":k()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...A(),`normal`]}],"justify-items":[{"justify-items":[...j(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...j()]}],"align-content":[{content:[`normal`,...A()]}],"align-items":[{items:[...j(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...j(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":A()}],"place-items":[{"place-items":[...j(),`baseline`]}],"place-self":[{"place-self":[`auto`,...j()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:M()}],mx:[{mx:M()}],my:[{my:M()}],ms:[{ms:M()}],me:[{me:M()}],mbs:[{mbs:M()}],mbe:[{mbe:M()}],mt:[{mt:M()}],mr:[{mr:M()}],mb:[{mb:M()}],ml:[{ml:M()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:N()}],"inline-size":[{inline:[`auto`,...P()]}],"min-inline-size":[{"min-inline":[`auto`,...P()]}],"max-inline-size":[{"max-inline":[`none`,...P()]}],"block-size":[{block:[`auto`,...F()]}],"min-block-size":[{"min-block":[`auto`,...F()]}],"max-block-size":[{"max-block":[`none`,...F()]}],w:[{w:[s,`screen`,...N()]}],"min-w":[{"min-w":[s,`screen`,`none`,...N()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...N()]}],h:[{h:[`screen`,`lh`,...N()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...N()]}],"max-h":[{"max-h":[`screen`,`lh`,...N()]}],"font-size":[{text:[`base`,n,tl,Jc]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,sl,Xc]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,Rc,X]}],"font-family":[{font:[nl,Zc,t]}],"font-features":[{"font-features":[X]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,Z,X]}],"line-clamp":[{"line-clamp":[Y,`none`,Z,Yc]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,Z,X]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,Z,X]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...V(),`wavy`]}],"text-decoration-thickness":[{decoration:[Y,`from-font`,`auto`,Z,Jc]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[Y,`auto`,Z,X]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[Lc,Z,X]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,Z,X]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,Z,X]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:L()}],"bg-repeat":[{bg:R()}],"bg-size":[{bg:ee()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},Lc,Z,X],radial:[``,Z,X],conic:[Lc,Z,X]},al,$c]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:te()}],"gradient-via-pos":[{via:te()}],"gradient-to-pos":[{to:te()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:z()}],"rounded-s":[{"rounded-s":z()}],"rounded-e":[{"rounded-e":z()}],"rounded-t":[{"rounded-t":z()}],"rounded-r":[{"rounded-r":z()}],"rounded-b":[{"rounded-b":z()}],"rounded-l":[{"rounded-l":z()}],"rounded-ss":[{"rounded-ss":z()}],"rounded-se":[{"rounded-se":z()}],"rounded-ee":[{"rounded-ee":z()}],"rounded-es":[{"rounded-es":z()}],"rounded-tl":[{"rounded-tl":z()}],"rounded-tr":[{"rounded-tr":z()}],"rounded-br":[{"rounded-br":z()}],"rounded-bl":[{"rounded-bl":z()}],"border-w":[{border:B()}],"border-w-x":[{"border-x":B()}],"border-w-y":[{"border-y":B()}],"border-w-s":[{"border-s":B()}],"border-w-e":[{"border-e":B()}],"border-w-bs":[{"border-bs":B()}],"border-w-be":[{"border-be":B()}],"border-w-t":[{"border-t":B()}],"border-w-r":[{"border-r":B()}],"border-w-b":[{"border-b":B()}],"border-w-l":[{"border-l":B()}],"divide-x":[{"divide-x":B()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":B()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...V(),`hidden`,`none`]}],"divide-style":[{divide:[...V(),`hidden`,`none`]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-bs":[{"border-bs":I()}],"border-color-be":[{"border-be":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...V(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[Y,Z,X]}],"outline-w":[{outline:[``,Y,tl,Jc]}],"outline-color":[{outline:I()}],shadow:[{shadow:[``,`none`,u,ol,el]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":[`none`,d,ol,el]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:B()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[Y,Jc]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":B()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":[`none`,f,ol,el]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[Y,Z,X]}],"mix-blend":[{"mix-blend":[...H(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":H()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[Y]}],"mask-image-linear-from-pos":[{"mask-linear-from":U()}],"mask-image-linear-to-pos":[{"mask-linear-to":U()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":U()}],"mask-image-t-to-pos":[{"mask-t-to":U()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":U()}],"mask-image-r-to-pos":[{"mask-r-to":U()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":U()}],"mask-image-b-to-pos":[{"mask-b-to":U()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":U()}],"mask-image-l-to-pos":[{"mask-l-to":U()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":U()}],"mask-image-x-to-pos":[{"mask-x-to":U()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":U()}],"mask-image-y-to-pos":[{"mask-y-to":U()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[Z,X]}],"mask-image-radial-from-pos":[{"mask-radial-from":U()}],"mask-image-radial-to-pos":[{"mask-radial-to":U()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[Y]}],"mask-image-conic-from-pos":[{"mask-conic-from":U()}],"mask-image-conic-to-pos":[{"mask-conic-to":U()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:L()}],"mask-repeat":[{mask:R()}],"mask-size":[{mask:ee()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,Z,X]}],filter:[{filter:[``,`none`,Z,X]}],blur:[{blur:ne()}],brightness:[{brightness:[Y,Z,X]}],contrast:[{contrast:[Y,Z,X]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,ol,el]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:[``,Y,Z,X]}],"hue-rotate":[{"hue-rotate":[Y,Z,X]}],invert:[{invert:[``,Y,Z,X]}],saturate:[{saturate:[Y,Z,X]}],sepia:[{sepia:[``,Y,Z,X]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,Z,X]}],"backdrop-blur":[{"backdrop-blur":ne()}],"backdrop-brightness":[{"backdrop-brightness":[Y,Z,X]}],"backdrop-contrast":[{"backdrop-contrast":[Y,Z,X]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,Y,Z,X]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Y,Z,X]}],"backdrop-invert":[{"backdrop-invert":[``,Y,Z,X]}],"backdrop-opacity":[{"backdrop-opacity":[Y,Z,X]}],"backdrop-saturate":[{"backdrop-saturate":[Y,Z,X]}],"backdrop-sepia":[{"backdrop-sepia":[``,Y,Z,X]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,Z,X]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[Y,`initial`,Z,X]}],ease:[{ease:[`linear`,`initial`,_,Z,X]}],delay:[{delay:[Y,Z,X]}],animate:[{animate:[`none`,v,Z,X]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,Z,X]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:W()}],"rotate-x":[{"rotate-x":W()}],"rotate-y":[{"rotate-y":W()}],"rotate-z":[{"rotate-z":W()}],scale:[{scale:re()}],"scale-x":[{"scale-x":re()}],"scale-y":[{"scale-y":re()}],"scale-z":[{"scale-z":re()}],"scale-3d":[`scale-3d`],skew:[{skew:ie()}],"skew-x":[{"skew-x":ie()}],"skew-y":[{"skew-y":ie()}],transform:[{transform:[Z,X,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:ae()}],"translate-x":[{"translate-x":ae()}],"translate-y":[{"translate-y":ae()}],"translate-z":[{"translate-z":ae()}],"translate-none":[`translate-none`],zoom:[{zoom:[Lc,Z,X]}],accent:[{accent:I()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,Z,X]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":I()}],"scrollbar-track-color":[{"scrollbar-track":I()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,Z,X]}],fill:[{fill:[`none`,...I()]}],"stroke-w":[{stroke:[Y,tl,Jc,Yc]}],stroke:[{stroke:[`none`,...I()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function yl(...e){return vl(qs(e))}var bl=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,xl=qs,Sl=((e,t)=>n=>{if(t?.variants==null)return xl(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=bl(t)||bl(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return xl(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)})(`group/button inline-flex shrink-0 items-center justify-center rounded-4xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:`bg-primary text-primary-foreground hover:bg-primary/80`,outline:`border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-transparent dark:hover:bg-input/30`,secondary:`bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,ghost:`hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50`,destructive:`bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5`,xs:`h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3`,sm:`h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,lg:`h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3`,icon:`size-9`,"icon-xs":`size-6 [&_svg:not([class*='size-'])]:size-3`,"icon-sm":`size-8`,"icon-lg":`size-10`}},defaultVariants:{variant:`default`,size:`default`}});function Cl(e){let t=(0,b.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({className:n,variant:i,size:a,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=i===void 0?`default`:i,s=a===void 0?`default`:a,c;t[5]!==n||t[6]!==s||t[7]!==o?(c=yl(Sl({variant:o,size:s,className:n})),t[5]=n,t[6]=s,t[7]=o,t[8]=c):c=t[8];let l;return t[9]!==r||t[10]!==c?(l=(0,G.jsx)(Gs,{"data-slot":`button`,className:c,...r}),t[9]=r,t[10]=c,t[11]=l):l=t[11],l}function wl(){let e=(0,b.c)(11),{theme:t,setTheme:n}=Va(),r;e[0]!==n||e[1]!==t?(r=()=>{n(t===`dark`?`light`:`dark`)},e[0]=n,e[1]=t,e[2]=r):r=e[2];let i=r,a=t===`dark`?`Switch to light mode`:`Switch to dark mode`,o,s;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,G.jsx)(bo,{className:`h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90`}),s=(0,G.jsx)(vo,{className:`absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0`}),e[3]=o,e[4]=s):(o=e[3],s=e[4]);let c=t===`dark`?`Switch to light mode`:`Switch to dark mode`,l;e[5]===c?l=e[6]:(l=(0,G.jsx)(`span`,{className:`sr-only`,children:c}),e[5]=c,e[6]=l);let u;return e[7]!==a||e[8]!==l||e[9]!==i?(u=(0,G.jsxs)(Cl,{variant:`outline`,size:`icon`,onClick:i,"aria-label":a,children:[o,s,l]}),e[7]=a,e[8]=l,e[9]=i,e[10]=u):u=e[10],u}var Tl=_.forwardRef(function(e,t){let{className:n,render:r,orientation:i=`horizontal`,style:a,...o}=e;return zs(`div`,e,{state:{orientation:i},ref:t,props:[{role:`separator`,"aria-orientation":i},o]})});function El(e){let t=(0,b.c)(10),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({className:n,orientation:i,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let a=i===void 0?`horizontal`:i,o;t[4]===n?o=t[5]:(o=yl(`shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch`,n),t[4]=n,t[5]=o);let s;return t[6]!==a||t[7]!==r||t[8]!==o?(s=(0,G.jsx)(Tl,{"data-slot":`separator`,orientation:a,className:o,...r}),t[6]=a,t[7]=r,t[8]=o,t[9]=s):s=t[9],s}var Dl=function(e){return e.disabled=`data-disabled`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({}),Ol={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},kl={valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},Al={disabled:!1,...kl},jl={valid(e){return e===null?null:e?{[Dl.valid]:``}:{[Dl.invalid]:``}}},Ml={invalid:void 0,name:void 0,validityData:{state:Ol,errors:[],error:``,value:``,initialValue:null},setValidityData:Ns,disabled:void 0,touched:kl.touched,setTouched:Ns,dirty:kl.dirty,setDirty:Ns,filled:kl.filled,setFilled:Ns,focused:kl.focused,setFocused:Ns,validate:()=>null,validationMode:`onSubmit`,validationDebounceTime:0,shouldValidateOnChange:()=>!1,state:Al,markedDirtyRef:{current:!1},registerFieldControl:Ns,validation:{getValidationProps:(e,t=Fs)=>t,inputRef:{current:null},registerInput:Ns,commit:async()=>{},change:Ns}},Nl=_.createContext(Ml);function Pl(e=!0){let t=_.useContext(Nl);if(t.setValidityData===Ns&&!e)throw Error(_s(28));return t}var Fl=_.createContext({formRef:{current:{fields:new Map}},errors:{},clearErrors:Ns,validationMode:`onSubmit`,submitAttemptedRef:{current:!1}});function Il(){return _.useContext(Fl)}var Ll=0;function Rl(e,t=`mui`){let[n,r]=_.useState(e),i=e||n;return _.useEffect(()=>{n??(Ll+=1,r(`${t}-${Ll}`))},[n,t]),i}var zl=qo.useId;function Bl(e,t){if(zl!==void 0){let n=zl();return e??(t?`${t}-${n}`:n)}return Rl(e,t)}function Vl(e){return Bl(e,`base-ui`)}var Hl=_.createContext({controlId:void 0,registerControlId:Ns,labelId:void 0,setLabelId:Ns,messageIds:[],setMessageIds:Ns,getDescriptionProps:e=>e});function Ul(){return _.useContext(Hl)}function Wl(e={}){let{id:t,implicit:n=!1,controlRef:r}=e,{controlId:i,registerControlId:a}=Ul(),o=Vl(t),s=n?i:void 0,c=Yo(()=>Symbol(`labelable-control`)),l=_.useRef(!1),u=_.useRef(t!=null),d=q(()=>{!l.current||a===Ns||(l.current=!1,a(c.current,void 0))});return J(()=>{if(a===Ns)return;let e;if(n){let n=r?.current;e=K(n)&&n.closest(`label`)!=null?t??null:s??o}else if(t!=null)u.current=!0,e=t;else if(u.current)e=o;else{d();return}if(e===void 0){d();return}l.current=!0,a(c.current,e)},[t,r,s,a,n,o,c,d]),_.useEffect(()=>d,[d]),i??o}function Gl(e){return e?.ownerDocument||document}function Kl(){return typeof navigator>`u`?{userAgent:``,platform:``,maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform??``,maxTouchPoints:navigator.maxTouchPoints??0}}var{userAgent:ql,platform:Jl,maxTouchPoints:Yl}=Kl(),Xl=ql.toLowerCase(),Zl=Jl.toLowerCase(),Ql=/^i(os$|p)/.test(Zl)||Zl===`macintel`&&Yl>1,$l=`android`,eu=Zl===$l||Xl.includes($l),tu=!Ql&&Zl.startsWith(`mac`);Zl.startsWith(`win`),!eu&&/^(linux|chrome os)/.test(Zl);var nu=tu||Ql,ru=typeof CSS<`u`&&!!CSS.supports?.(`-webkit-backdrop-filter:none`);!ru&&Xl.includes(`firefox`),!ru&&Xl.includes(`chrom`);var iu=nu,au=/jsdom|happydom/.test(Xl),ou=`data-base-ui-focusable`,su=`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`,cu=`ArrowLeft`,lu=`ArrowRight`,uu=`ArrowUp`,du=`ArrowDown`;function fu(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function Q(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&ko(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function pu(e){return`composedPath`in e?e.composedPath()[0]:e.target}function mu(e,t){if(!K(e))return!1;let n=e;if(t.hasElement(n))return!n.hasAttribute(`data-trigger-disabled`);for(let[,e]of t.entries())if(Q(e,n))return!e.hasAttribute(`data-trigger-disabled`);return!1}function hu(e,t){if(t==null)return!1;if(`composedPath`in e)return e.composedPath().includes(t);let n=e;return n.target!=null&&t.contains(n.target)}function gu(e){return e.matches(`html,body`)}function _u(e){return Oo(e)&&e.matches(`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`)}function vu(e){return e?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${su}`)!=null}function yu(e){return e?e.getAttribute(`role`)===`combobox`&&_u(e):!1}function bu(e){if(!e||au)return!0;try{return e.matches(`:focus-visible`)}catch{return!0}}function xu(e){return e?e.hasAttribute(`data-base-ui-focusable`)?e:e.querySelector(`[data-base-ui-focusable]`)||e:null}function Su(e,t,n=!0){return e.filter(e=>e.parentId===t).flatMap(t=>[...!n||t.context?.open?[t]:[],...Su(e,t.id,n)])}function Cu(e,t){let n=[],r=e.find(e=>e.id===t)?.parentId;for(;r;){let t=e.find(e=>e.id===r);r=t?.parentId,t&&(n=n.concat(t))}return n}function wu(e){e.preventDefault(),e.stopPropagation()}function Tu(e){return`nativeEvent`in e}function Eu(e){return e.pointerType===``&&e.isTrusted?!0:eu&&e.pointerType?e.type===`click`&&e.buttons===1:e.detail===0&&!e.pointerType}function Du(e){return au?!1:!eu&&e.width===0&&e.height===0||eu&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType===`mouse`||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType===`touch`}function Ou(e,t){let n=[`mouse`,`pen`];return t||n.push(``,void 0),n.includes(e)}function ku(e){let t=e.type;return t===`click`||t===`mousedown`||t===`keydown`||t===`keyup`}var Au=[`top`,`right`,`bottom`,`left`],ju=Math.min,Mu=Math.max,Nu=Math.round,Pu=Math.floor,Fu=e=>({x:e,y:e}),Iu={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Lu(e,t,n){return Mu(e,ju(t,n))}function Ru(e,t){return typeof e==`function`?e(t):e}function zu(e){return e.split(`-`)[0]}function Bu(e){return e.split(`-`)[1]}function Vu(e){return e===`x`?`y`:`x`}function Hu(e){return e===`y`?`height`:`width`}function Uu(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Wu(e){return Vu(Uu(e))}function Gu(e,t,n){n===void 0&&(n=!1);let r=Bu(e),i=Wu(e),a=Hu(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=ed(o)),[o,ed(o)]}function Ku(e){let t=ed(e);return[qu(e),t,qu(t)]}function qu(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Ju=[`left`,`right`],Yu=[`right`,`left`],Xu=[`top`,`bottom`],Zu=[`bottom`,`top`];function Qu(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Yu:Ju:t?Ju:Yu;case`left`:case`right`:return t?Xu:Zu;default:return[]}}function $u(e,t,n,r){let i=Bu(e),a=Qu(zu(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(qu)))),a}function ed(e){let t=zu(e);return Iu[t]+e.slice(t.length)}function td(e){return{top:0,right:0,bottom:0,left:0,...e}}function nd(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:td(e)}function rd(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function id(e,t){return t<0||t>=e.length}function ad(e,t){return sd(e.current,{disabledIndices:t})}function od(e,t){return sd(e.current,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function sd(e,{startingIndex:t=-1,decrement:n=!1,disabledIndices:r,amount:i=1}={}){let a=t;do a+=n?-i:i;while(a>=0&&a<=e.length-1&&cd(e,a,r));return a}function cd(e,t,n){if(typeof n==`function`?n(t):n?.includes(t)??!1)return!0;let r=e[t];return r?ud(r)?!n&&(r.hasAttribute(`disabled`)||r.getAttribute(`aria-disabled`)===`true`):!0:!1}function ld(e){return e.visibility===`hidden`||e.visibility===`collapse`}function ud(e,t=e?Vo(e):null){return!e||!e.isConnected||!t||ld(t)?!1:typeof e.checkVisibility==`function`?e.checkVisibility():t.display!==`none`&&t.display!==`contents`}var dd=`a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`;function fd(e){let t=e.assignedSlot;if(t)return t;if(e.parentElement)return e.parentElement;let n=e.getRootNode();return ko(n)?n.host:null}function pd(e){for(let t of Array.from(e.children))if(wo(t)===`summary`)return t;return null}function md(e,t){let n=pd(t);return!!n&&(e===n||Q(n,e))}function hd(e){let t=e?wo(e):``;return e!=null&&e.matches(dd)&&(t!==`summary`||e.parentElement!=null&&wo(e.parentElement)===`details`&&pd(e.parentElement)===e)&&(t!==`details`||pd(e)==null)&&(t!==`input`||e.type!==`hidden`)}function gd(e){if(!hd(e)||!e.isConnected||e.matches(`:disabled`))return!1;for(let t=e;t;t=fd(t)){let n=t!==e,r=wo(t)===`slot`;if(t.hasAttribute(`inert`)||n&&wo(t)===`details`&&!t.open&&!md(e,t)||t.hasAttribute(`hidden`)||!r&&!_d(t,n))return!1}return!0}function _d(e,t){let n=Vo(e);return t?n.display!==`none`:ud(e,n)}function vd(e){let t=e.tabIndex;if(t<0){let t=wo(e);if(t===`details`||t===`audio`||t===`video`||Oo(e)&&e.isContentEditable)return 0}return t}function yd(e){if(wo(e)!==`input`)return null;let t=e;return t.type===`radio`&&t.name!==``?t:null}function bd(e,t){let n=yd(e);if(!n)return!0;let r=t.find(e=>{let t=yd(e);return t?.name===n.name&&t.form===n.form&&t.checked});return r?r===n:t.find(e=>{let t=yd(e);return t?.name===n.name&&t.form===n.form})===n}function xd(e){if(Oo(e)&&wo(e)===`slot`){let t=e.assignedElements({flatten:!0});if(t.length>0)return t}return Oo(e)&&e.shadowRoot?Array.from(e.shadowRoot.children):Array.from(e.children)}function Sd(e,t){xd(e).forEach(e=>{hd(e)&&t.push(e),Sd(e,t)})}function Cd(e,t,n){xd(e).forEach(e=>{Oo(e)&&e.matches(t)&&n.push(e),Cd(e,t,n)})}function wd(e){return gd(e)&&vd(e)>=0}function Td(e){let t=[];return Sd(e,t),t.filter(gd)}function Ed(e){let t=Td(e);return t.filter(e=>vd(e)>=0&&bd(e,t))}function Dd(e,t){let n=Ed(e),r=n.length;if(r===0)return;let i=fu(Gl(e)),a=n.indexOf(i);return n[a===-1?t===1?0:r-1:a+t]}function Od(e){return Dd(Gl(e).body,1)||e}function kd(e){return Dd(Gl(e).body,-1)||e}function Ad(e,t){if(!e)return null;let n=Ed(Gl(e).body),r=n.length;if(r===0)return null;let i=n.indexOf(e);return i===-1?null:n[(i+t+r)%r]}function jd(e){return Ad(e,1)}function Md(e){return Ad(e,-1)}function Nd(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!Q(n,r)}function Pd(e){Ed(e).forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)})}function Fd(e){let t=[];Cd(e,`[data-tabindex]`,t),t.forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute(`tabindex`,t):e.removeAttribute(`tabindex`)})}var Id=[];function Ld(e){_.useEffect(e,Id)}var Rd=0,zd=class e{static create(){return new e}currentId=Rd;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=Rd,t()},e)}isStarted(){return this.currentId!==Rd}clear=()=>{this.currentId!==Rd&&(clearTimeout(this.currentId),this.currentId=Rd)};disposeEffect=()=>this.clear};function Bd(){let e=Yo(zd.create).current;return Ld(e.disposeEffect),e}var Vd=null;globalThis.requestAnimationFrame;var Hd=new class{callbacks=[];callbacksCount=0;nextId=1;startId=1;isScheduled=!1;tick=e=>{this.isScheduled=!1;let t=this.callbacks,n=this.callbacksCount;if(this.callbacks=[],this.callbacksCount=0,this.startId=this.nextId,n>0)for(let n=0;n<t.length;n+=1)t[n]?.(e)};request(e){let t=this.nextId;return this.nextId+=1,this.callbacks.push(e),this.callbacksCount+=1,this.isScheduled||=(requestAnimationFrame(this.tick),!0),t}cancel(e){let t=e-this.startId;t<0||t>=this.callbacks.length||(this.callbacks[t]=null,--this.callbacksCount)}},Ud=class e{static create(){return new e}static request(e){return Hd.request(e)}static cancel(e){return Hd.cancel(e)}currentId=Vd;request(e){this.cancel(),this.currentId=Hd.request(()=>{this.currentId=Vd,e()})}cancel=()=>{this.currentId!==Vd&&(Hd.cancel(this.currentId),this.currentId=Vd)};disposeEffect=()=>this.cancel};function Wd(){let e=Yo(Ud.create).current;return Ld(e.disposeEffect),e}function Gd(e){return e==null?e:`current`in e?e.current:e}var Kd=function(e){return e.startingStyle=`data-starting-style`,e.endingStyle=`data-ending-style`,e}({}),qd={[Kd.startingStyle]:``},Jd={[Kd.endingStyle]:``},Yd={transitionStatus(e){return e===`starting`?qd:e===`ending`?Jd:null}},Xd=c(m(),1);function Zd(e,t=!1,n=!0){let r=Wd();return q((i,a=null)=>{r.cancel();let o=Gd(e);if(o==null)return;let s=o,c=()=>{Xd.flushSync(i)};if(typeof s.getAnimations!=`function`||globalThis.BASE_UI_ANIMATIONS_DISABLED){i();return}function l(){Promise.all(s.getAnimations().map(e=>e.finished)).then(()=>{a?.aborted||c()}).catch(()=>{if(n){a?.aborted||c();return}let e=s.getAnimations();!a?.aborted&&e.length>0&&e.some(e=>e.pending||e.playState!==`finished`)&&l()})}if(t){let e=Kd.startingStyle;if(!s.hasAttribute(e)){r.request(l);return}let t=new MutationObserver(()=>{s.hasAttribute(e)||(t.disconnect(),l())});t.observe(s,{attributes:!0,attributeFilter:[e]}),a?.addEventListener(`abort`,()=>t.disconnect(),{once:!0});return}r.request(l)})}function Qd(e){let{enabled:t=!0,open:n,ref:r,onComplete:i}=e,a=q(i),o=Zd(r,n,!1);_.useEffect(()=>{if(!t)return;let e=new AbortController;return o(a,e.signal),()=>{e.abort()}},[t,n,a,o])}function $d(e,t=!1,n=!1){let[r,i]=_.useState(e&&t?`idle`:void 0),[a,o]=_.useState(e);return e&&!a&&(o(!0),i(`starting`)),!e&&a&&r!==`ending`&&!n&&i(`ending`),!e&&!a&&r===`ending`&&i(void 0),J(()=>{if(!e&&a&&r!==`ending`&&n){let e=Ud.request(()=>{i(`ending`)});return()=>{Ud.cancel(e)}}},[e,a,r,n]),J(()=>{if(!e||t)return;let n=Ud.request(()=>{i(void 0)});return()=>{Ud.cancel(n)}},[t,e]),J(()=>{if(!e||!t)return;e&&a&&r!==`idle`&&i(`starting`);let n=Ud.request(()=>{i(`idle`)});return()=>{Ud.cancel(n)}},[t,e,a,r]),{mounted:a,setMounted:o,transitionStatus:r}}function ef({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=_.useRef(e!==void 0),[a,o]=_.useState(t);return[i?e:a,_.useCallback(e=>{i||o(e)},[])]}function tf(e,t,n,r,i=!0,a){let{registerFieldControl:o}=Pl(),s=_.useRef(null);s.current||=Symbol(),J(()=>{let c=s.current;if(!(!c||!i))return o(c,{controlRef:e,getValue:r,id:t,name:a,value:n}),()=>{o(c,void 0)}},[e,i,r,t,a,o,n])}var nf=`none`,rf=`trigger-press`,af=`trigger-hover`,of=`trigger-focus`,sf=`outside-press`,cf=`item-press`,lf=`close-press`,uf=`focus-out`,df=`escape-key`,ff=`list-navigation`,pf=`cancel-open`,mf=`sibling-open`,hf=`disabled`,gf=`imperative-action`;function _f(e,t,n,r){let i=!1,a=!1,o=r??Fs;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}var vf=_.forwardRef(function(e,t){let{render:n,className:r,id:i,name:a,value:o,disabled:s=!1,onValueChange:c,defaultValue:l,autoFocus:u=!1,style:d,...f}=e,{state:p,name:m,disabled:h,setTouched:g,setDirty:v,validityData:y,setFocused:b,setFilled:x,validationMode:S,validation:C}=Pl(),{clearErrors:w}=Il(),T=h||s,E=m??a,D={...p,disabled:T},{labelId:O}=Ul(),k=Wl({id:i});J(()=>{let e=o!=null;C.inputRef.current?.value||e&&o!==``?x(!0):e&&o===``&&x(!1)},[C.inputRef,x,o]);let A=_.useRef(null);J(()=>{u&&A.current===fu(Gl(A.current))&&b(!0)},[u,b]);let[j]=ef({controlled:o,default:l,name:`FieldControl`,state:`value`}),M=o!==void 0,N=M?j:void 0,P=q(()=>C.inputRef.current?.value);return tf(C.inputRef,k,N,P,!T,a),zs(`input`,e,{ref:[t,A],state:D,props:[{id:k,disabled:T,name:E,ref:C.inputRef,"aria-labelledby":O,autoFocus:u,...M?{value:N}:{defaultValue:l},onChange(e){let t=e.currentTarget.value;c?.(t,_f(nf,e.nativeEvent)),v(t!==y.initialValue),x(t!==``),e.nativeEvent.defaultPrevented||(w(E),C.change(t))},onFocus(){b(!0)},onBlur(e){g(!0),b(!1),S===`onBlur`&&C.commit(e.currentTarget.value)},onKeyDown(e){e.currentTarget.tagName===`INPUT`&&e.key===`Enter`&&(g(!0),C.commit(e.currentTarget.value))}},f,e=>C.getValidationProps(T,e)],stateAttributesMapping:jl})}),yf=_.forwardRef(function(e,t){return(0,G.jsx)(vf,{ref:t,...e})});function bf(e){let t=(0,b.c)(10),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({className:n,type:i,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let a;t[4]===n?a=t[5]:(a=yl(`h-9 w-full min-w-0 rounded-3xl border border-transparent bg-input/50 px-3 py-1 text-base transition-[color,box-shadow,background-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40`,n),t[4]=n,t[5]=a);let o;return t[6]!==r||t[7]!==a||t[8]!==i?(o=(0,G.jsx)(yf,{type:i,"data-slot":`input`,className:a,...r}),t[6]=r,t[7]=a,t[8]=i,t[9]=o):o=t[9],o}function xf(e){let t=(0,b.c)(10),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({className:n,size:i,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let a=i===void 0?`default`:i,o;t[4]===n?o=t[5]:(o=yl(`group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-4xl bg-card py-(--card-spacing) text-sm text-card-foreground shadow-md ring-1 ring-foreground/5 [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] dark:ring-foreground/10 *:[img:first-child]:rounded-t-4xl *:[img:last-child]:rounded-b-4xl`,n),t[4]=n,t[5]=o);let s;return t[6]!==r||t[7]!==a||t[8]!==o?(s=(0,G.jsx)(`div`,{"data-slot":`card`,"data-size":a,className:o,...r}),t[6]=r,t[7]=a,t[8]=o,t[9]=s):s=t[9],s}var Sf=[],Cf=void 0;function wf(){return Cf}function Tf(e){Sf.push(e)}function Ef(e){let t=(t,n)=>{let r=Yo(Of).current,i;try{Cf=r;for(let e of Sf)e.before(r);i=e(t,n);for(let e of Sf)e.after(r);r.didInitialize=!0}finally{Cf=void 0}return i};return t.displayName=e.displayName||e.name,t}function Df(e){return _.forwardRef(Ef(e))}function Of(){return{didInitialize:!1}}var kf=_.createContext(void 0);function Af(e){let t=_.useContext(kf);if(t===void 0&&!e)throw Error(_s(72));return t}function jf(e,t){return t!=null&&!Ou(t)?0:typeof e==`function`?e():e}function Mf(e,t,n){let r=jf(e,n);return typeof r==`number`?r:r?.[t]}function Nf(e){return typeof e==`function`?e():e}function Pf(e,t){return t||e===`click`||e===`mousedown`}function Ff(e){return e?.includes(`mouse`)&&e!==`mousedown`}var If=_.createContext({hasProvider:!1,timeoutMs:0,delayRef:{current:0},initialDelayRef:{current:0},timeout:new zd,currentIdRef:{current:null},currentContextRef:{current:null}});function Lf(e,t){e.current=t.current}function Rf(e){let{children:t,delay:n,timeoutMs:r=0}=e,i=_.useRef(n),a=_.useRef(n),o=_.useRef(null),s=_.useRef(null),c=Bd();return J(()=>{if(a.current=n,!o.current){i.current=n;return}i.current={open:Mf(i.current,`open`),close:Mf(n,`close`)}},[n,o,i,a]),(0,G.jsx)(If.Provider,{value:_.useMemo(()=>({hasProvider:!0,delayRef:i,initialDelayRef:a,currentIdRef:o,timeoutMs:r,currentContextRef:s,timeout:c}),[r,c]),children:t})}function zf(e,t={open:!1}){let{open:n}=t,r=`rootStore`in e?e.rootStore:e,i=r.useState(`floatingId`),{currentIdRef:a,delayRef:o,timeoutMs:s,initialDelayRef:c,currentContextRef:l,hasProvider:u,timeout:d}=_.useContext(If),[f,p]=_.useState(!1),m=_.useRef(n),h=_.useRef(!1);return J(()=>{m.current=n},[n]),J(()=>()=>{h.current=!0},[]),J(()=>{function e(){h.current||p(!1),l.current?.setIsInstantPhase(!1),a.current=null,l.current=null,o.current=c.current,d.clear()}if(a.current&&!n&&a.current===i){if(p(!1),s){let t=i;return d.start(s,()=>{r.select(`open`)||a.current&&a.current!==t||e()}),()=>{(m.current||a.current!==t)&&d.clear()}}e()}},[n,i,a,o,s,c,l,d,r]),J(()=>{if(!n)return;let e=l.current,t=a.current;d.clear(),l.current={onOpenChange:r.setOpen,setIsInstantPhase:p},a.current=i,o.current={open:0,close:Mf(c.current,`close`)},t!==null&&t!==i?(p(!0),e?.setIsInstantPhase(!0),e?.onOpenChange(!1,_f(nf))):(p(!1),e?.setIsInstantPhase(!1))},[n,i,r,a,o,c,l,d]),J(()=>()=>{if(a.current===i){if(l.current=null,!m.current)return;a.current=null,Lf(o,c),d.clear()}},[l,a,o,i,c,d]),_.useMemo(()=>({hasProvider:u,delayRef:o,isInstantPhase:f}),[u,o,f])}function Bf(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function Vf(...e){return()=>{for(let t=0;t<e.length;t+=1){let n=e[t];n&&n()}}}function Hf(e){let t=Yo(Uf,e).current;return t.next=e,J(t.effect),t}function Uf(e){let t={current:e,next:e,effect:()=>{t.current=t.next}};return t}var Wf={clipPath:`inset(50%)`,overflow:`hidden`,whiteSpace:`nowrap`,border:0,padding:0,width:1,height:1,margin:-1},Gf={...Wf,position:`fixed`,top:0,left:0};({...Wf});var Kf=_.forwardRef(function(e,t){let[n,r]=_.useState();J(()=>{iu&&ru&&r(`button`)},[]);let i={tabIndex:0,role:n};return(0,G.jsx)(`span`,{...e,ref:t,style:Gf,"aria-hidden":n?void 0:!0,...i,"data-base-ui-focus-guard":``})});function qf(e){return`data-base-ui-${e}`}var Jf=0;function Yf(e,t={}){let{preventScroll:n=!1,sync:r=!1,shouldFocus:i}=t;cancelAnimationFrame(Jf);function a(){i&&!i()||e?.focus({preventScroll:n})}if(r)return a(),Ns;let o=requestAnimationFrame(a);return Jf=o,()=>{Jf===o&&(cancelAnimationFrame(o),Jf=0)}}var Xf={inert:new WeakMap,"aria-hidden":new WeakMap},Zf=`data-base-ui-inert`,Qf={inert:new WeakSet,"aria-hidden":new WeakSet},$f=new WeakMap,ep=0;function tp(e){return Qf[e]}function np(e){return e?ko(e)?e.host:np(e.parentNode):null}var rp=(e,t)=>t.map(t=>{if(e.contains(t))return t;let n=np(t);return e.contains(n)?n:null}).filter(e=>e!=null),ip=e=>{let t=new Set;return e.forEach(e=>{let n=e;for(;n&&!t.has(n);)t.add(n),n=n.parentNode}),t},ap=(e,t,n)=>{let r=[],i=e=>{!e||n.has(e)||Array.from(e.children).forEach(e=>{wo(e)!==`script`&&(t.has(e)?i(e):r.push(e))})};return i(e),r};function op(e,t,n,r,{mark:i=!0}){let a=null;r?a=`inert`:n&&(a=`aria-hidden`);let o=null,s=null,c=rp(t,e),l=i?ap(t,ip(c),new Set(c)):[],u=[],d=[];if(a){let e=Xf[a],n=tp(a);s=n,o=e;let r=rp(t,Array.from(t.querySelectorAll(`[aria-live]`))),i=c.concat(r);ap(t,ip(i),new Set(i)).forEach(t=>{let r=t.getAttribute(a),i=r!==null&&r!==`false`,o=(e.get(t)||0)+1;e.set(t,o),u.push(t),o===1&&i&&n.add(t),i||t.setAttribute(a,a===`inert`?``:`true`)})}return i&&l.forEach(e=>{let t=($f.get(e)||0)+1;$f.set(e,t),d.push(e),t===1&&e.setAttribute(Zf,``)}),ep+=1,()=>{o&&u.forEach(e=>{let t=(o.get(e)||0)-1;o.set(e,t),t||(!s?.has(e)&&a&&e.removeAttribute(a),s?.delete(e))}),i&&d.forEach(e=>{let t=($f.get(e)||0)-1;$f.set(e,t),t||e.removeAttribute(Zf)}),--ep,ep||(Xf.inert=new WeakMap,Xf[`aria-hidden`]=new WeakMap,Qf.inert=new WeakSet,Qf[`aria-hidden`]=new WeakSet,$f=new WeakMap)}}function sp(e,t={}){let{ariaHidden:n=!1,inert:r=!1,mark:i=!0}=t,a=Gl(e[0]).body;return op(e,a,n,r,{mark:i})}var cp={style:{transition:`none`}},lp={fallbackAxisSide:`none`},up={fallbackAxisSide:`end`},dp={clipPath:`inset(50%)`,position:`fixed`,top:0,left:0},fp=_.createContext(null),pp=()=>_.useContext(fp),mp=qf(`portal`);function hp(e={}){let{ref:t,container:n,componentProps:r=Fs,elementProps:i}=e,a=Bl(),o=pp()?.portalNode,[s,c]=_.useState(null),[l,u]=_.useState(null),d=q(e=>{e!==null&&u(e)}),f=_.useRef(null);J(()=>{if(n===null){f.current&&(f.current=null,u(null),c(null));return}if(a==null)return;let e=(n&&(Do(n)?n:n.current))??o??document.body;if(e==null){f.current&&(f.current=null,u(null),c(null));return}f.current!==e&&(f.current=e,u(null),c(e))},[n,o,a]);let p=zs(`div`,r,{ref:[t,d],props:[{id:a,[mp]:``},i]});return{portalNode:l,portalSubtree:s&&p?Xd.createPortal(p,s):null}}var gp=_.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,container:o,renderGuards:s,...c}=e,{portalNode:l,portalSubtree:u}=hp({container:o,ref:t,componentProps:e,elementProps:c}),d=_.useRef(null),f=_.useRef(null),p=_.useRef(null),m=_.useRef(null),[h,g]=_.useState(null),v=_.useRef(!1),y=h?.modal,b=h?.open,x=typeof s==`boolean`?s:!!h&&!h.modal&&h.open&&!!l;_.useEffect(()=>{if(!l||y)return;function e(e){l&&e.relatedTarget&&Nd(e)&&(e.type===`focusin`?v.current&&=(Fd(l),!1):(Pd(l),v.current=!0))}return Vf(Bf(l,`focusin`,e,!0),Bf(l,`focusout`,e,!0))},[l,y]),J(()=>{!l||b!==!0||!v.current||(Fd(l),v.current=!1)},[b,l]);let S=_.useMemo(()=>({beforeOutsideRef:d,afterOutsideRef:f,beforeInsideRef:p,afterInsideRef:m,portalNode:l,setFocusManagerState:g}),[l]);return(0,G.jsxs)(_.Fragment,{children:[u,(0,G.jsxs)(fp.Provider,{value:S,children:[x&&l&&(0,G.jsx)(Kf,{"data-type":`outside`,ref:d,onFocus:e=>{Nd(e,l)?p.current?.focus():kd(h?h.domReference:null)?.focus()}}),x&&l&&(0,G.jsx)(`span`,{"aria-owns":l.id,style:dp}),l&&Xd.createPortal(a,l),x&&l&&(0,G.jsx)(Kf,{"data-type":`outside`,ref:f,onFocus:e=>{Nd(e,l)?m.current?.focus():(Od(h?h.domReference:null)?.focus(),h?.closeOnFocusOut&&h?.onOpenChange(!1,_f(`focus-out`,e.nativeEvent)))}})]})]})});function _p(){let e=new Map;return{emit(t,n){e.get(t)?.forEach(e=>e(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){e.get(t)?.delete(n)}}}var vp=class{nodesRef={current:[]};events=_p();addNode(e){this.nodesRef.current.push(e)}removeNode(e){let t=this.nodesRef.current.findIndex(t=>t===e);t!==-1&&this.nodesRef.current.splice(t,1)}},yp=_.createContext(null),bp=_.createContext(null),xp=()=>_.useContext(yp)?.id||null,Sp=e=>{let t=_.useContext(bp);return e??t};function Cp(e){let t=Bl(),n=Sp(e),r=xp();return J(()=>{if(!t)return;let e={id:t,parentId:r};return n?.addNode(e),()=>{n?.removeNode(e)}},[n,t,r]),t}function wp(e){let{children:t,id:n}=e,r=xp();return(0,G.jsx)(yp.Provider,{value:_.useMemo(()=>({id:n,parentId:r}),[n,r]),children:t})}function Tp(e){let{children:t,externalTree:n}=e,r=Yo(()=>n??new vp).current;return(0,G.jsx)(bp.Provider,{value:r,children:t})}function Ep(e,t){let n=To(pu(e));return e instanceof n.KeyboardEvent?`keyboard`:e instanceof n.FocusEvent?t||`keyboard`:`pointerType`in e?e.pointerType||`keyboard`:`touches`in e?`touch`:e instanceof n.MouseEvent?t||(e.detail===0?`keyboard`:`mouse`):``}var Dp=20,Op=[];function kp(){Op=Op.filter(e=>e.deref()?.isConnected)}function Ap(e){kp(),e&&wo(e)!==`body`&&(Op.push(new WeakRef(e)),Op.length>Dp&&(Op=Op.slice(-20)))}function jp(){return kp(),Op[Op.length-1]?.deref()}function Mp(e){return e?wd(e)?e:Ed(e)[0]||e:null}function Np(e){if(e.hasAttribute(`tabindex`)&&!e.hasAttribute(`data-tabindex`)||!e.getAttribute(`role`)?.includes(`dialog`))return;let t=Td(e).filter(e=>{let t=e.getAttribute(`data-tabindex`)||``;return wd(e)||e.hasAttribute(`data-tabindex`)&&!t.startsWith(`-`)}),n=e.getAttribute(`tabindex`);t.length===0?n!==`0`&&(e.setAttribute(`tabindex`,`0`),e.setAttribute(`data-tabindex`,`0`)):(n!==`-1`||e.hasAttribute(`data-tabindex`)&&e.getAttribute(`data-tabindex`)!==`-1`)&&(e.setAttribute(`tabindex`,`-1`),e.setAttribute(`data-tabindex`,`-1`))}function Pp(e){let{context:t,children:n,disabled:r=!1,initialFocus:i=!0,returnFocus:a=!0,restoreFocus:o=!1,modal:s=!0,closeOnFocusOut:c=!0,openInteractionType:l=``,nextFocusableElement:u,previousFocusableElement:d,beforeContentFocusGuardRef:f,externalTree:p,getInsideElements:m}=e,h=`rootStore`in t?t.rootStore:t,g=h.useState(`open`),v=h.useState(`domReferenceElement`),y=h.useState(`floatingElement`),{events:b,dataRef:x}=h.context,S=q(()=>x.current.floatingContext?.nodeId),C=i===!1,w=yu(v)&&C,T=Hf(i),E=Hf(a),D=Hf(l),O=Hf(g),k=Sp(p),A=pp(),j=_.useRef(!1),M=_.useRef(!1),N=_.useRef(!1),P=_.useRef(null),F=_.useRef(``),I=_.useRef(``),L=_.useRef(null),R=_.useRef(null),ee=ws(L,f,A?.beforeInsideRef),te=ws(R,A?.afterInsideRef),z=Bd(),B=Bd(),V=Wd(),H=A!=null,U=xu(y),ne=q((e=U)=>e?Ed(e):[]),W=q(()=>m?.().filter(e=>e!=null)??[]);_.useEffect(()=>{if(r||!s)return;function e(e){e.key===`Tab`&&Q(U,fu(Gl(U)))&&ne().length===0&&!w&&wu(e)}return Bf(Gl(U),`keydown`,e)},[r,U,s,w,ne]),_.useEffect(()=>{if(r||!g)return;let e=Gl(U);function t(){N.current=!1}function n(e){let t=pu(e),n=W(),r=Q(y,t)||Q(v,t)||Q(A?.portalNode,t)||n.some(e=>e===t||Q(e,t));N.current=!r,I.current=e.pointerType||`keyboard`,t?.closest(`[data-base-ui-click-trigger]`)&&(M.current=!0,B.start(0,()=>{M.current=!1}))}function i(){I.current=`keyboard`}return Vf(Bf(e,`pointerdown`,n,!0),Bf(e,`pointerup`,t,!0),Bf(e,`pointercancel`,t,!0),Bf(e,`keydown`,i,!0),t)},[r,y,v,U,g,A,B,W]),_.useEffect(()=>{if(r||!c)return;let e=Gl(U);function t(){M.current=!0,B.start(0,()=>{M.current=!1})}function n(e){let t=pu(e);wd(t)&&(P.current=t)}function i(t){let n=t.relatedTarget,r=t.currentTarget,i=pu(t);s&&n==null&&i!=null&&Q(y,i)&&Ap(i),queueMicrotask(()=>{let a=S(),c=h.context.triggerElements,l=W(),f=n?.hasAttribute(qf(`focus-guard`))&&[L.current,R.current,A?.beforeInsideRef.current,A?.afterInsideRef.current,A?.beforeOutsideRef.current,A?.afterOutsideRef.current,Gd(d),Gd(u)].includes(n),p=!(Q(v,n)||Q(y,n)||Q(n,y)||Q(A?.portalNode,n)||l.some(e=>e===n||Q(e,n))||n!=null&&c.hasElement(n)||c.hasMatchingElement(e=>Q(e,n))||f||k&&(Su(k.nodesRef.current,a).find(e=>Q(e.context?.elements.floating,n)||Q(e.context?.elements.domReference,n))||Cu(k.nodesRef.current,a).find(e=>[e.context?.elements.floating,xu(e.context?.elements.floating)].includes(n)||e.context?.elements.domReference===n)));if(r===v&&U&&Np(U),o&&r!==v&&!ud(i)&&fu(e)===e.body){if(Oo(U)&&(U.focus(),o===`popup`)){V.request(()=>{U.focus()});return}let e=ne(),t=P.current,n=(t&&e.includes(t)?t:null)||e[e.length-1]||U;Oo(n)&&n.focus()}if(x.current.insideReactTree){x.current.insideReactTree=!1;return}(w||!s)&&n&&p&&!M.current&&(w||n!==jp())&&(j.current=!0,h.setOpen(!1,_f(uf,t)))})}function a(){N.current||(x.current.insideReactTree=!0,z.start(0,()=>{x.current.insideReactTree=!1}))}let l=Oo(v)?v:null;if(!(!y&&!l))return Vf(l&&Bf(l,`focusout`,i),l&&Bf(l,`pointerdown`,t),y&&Bf(y,`focusin`,n),y&&Bf(y,`focusout`,i),y&&A&&Bf(y,`focusout`,a,!0))},[r,v,y,U,s,k,A,h,c,o,ne,w,S,x,z,B,V,u,d,W]),_.useEffect(()=>{if(r||!y||!g)return;let e=Array.from(A?.portalNode?.querySelectorAll(`[${qf(`portal`)}]`)||[]),t=(k?Cu(k.nodesRef.current,S()):[]).find(e=>yu(e.context?.elements.domReference||null))?.context?.elements.domReference,n=sp([y,...e,L.current,R.current,A?.beforeOutsideRef.current,A?.afterOutsideRef.current,...W(),t,Gd(d),Gd(u),w?v:null].filter(e=>e!=null),{ariaHidden:s||w,mark:!1}),i=sp([y,...e].filter(e=>e!=null));return()=>{i(),n()}},[g,r,v,y,s,A,w,k,S,u,d,W]),J(()=>{if(!g||r||!Oo(U))return;let e=Gl(U),t=fu(e);queueMicrotask(()=>{let n=T.current,r=typeof n==`function`?n(D.current||``):n;if(r===void 0||r===!1||Q(U,t))return;let i=null,a=()=>(i??=ne(U),i[0]||U),o;o=r===!0||r===null?a():Gd(r),o||=a();let s=Q(U,fu(e));Yf(o,{preventScroll:o===U,shouldFocus(){if(!O.current)return!1;if(s)return!0;let t=fu(e);return!(t!==o&&Q(U,t))}})})},[r,g,U,ne,T,D,O]),J(()=>{if(r||!U)return;let e=Gl(U),t=fu(e),n=D.current==null;Ap(t);function i(e){if(e.open||(F.current=Ep(e.nativeEvent,I.current)),e.reason===`trigger-hover`&&e.nativeEvent.type===`mouseleave`&&(j.current=!0),e.reason===`outside-press`)if(e.nested)j.current=!1;else if(Eu(e.nativeEvent)||Du(e.nativeEvent))j.current=!1;else{let e=!1;Gl(U).createElement(`div`).focus({get preventScroll(){return e=!0,!1}}),e?j.current=!1:j.current=!0}}b.on(`openchange`,i);function a(){let e=E.current,r=typeof e==`function`?e(F.current):e;if(r===void 0||r===!1)return null;r===null&&(r=!0);let i=v?.isConnected?v:null,a=t?.isConnected&&wo(t)!==`body`?t:null,o=n?a||i:i||a;return o||=jp()||null,typeof r==`boolean`?o:Gd(r)||o||null}return()=>{b.off(`openchange`,i);let t=fu(e),n=W(),r=Q(y,t)||n.some(e=>e===t||Q(e,t))||k&&Su(k.nodesRef.current,S(),!1).some(e=>Q(e.context?.elements.floating,t)),o=E.current,s=a();queueMicrotask(()=>{let n=Mp(s),i=typeof o!=`boolean`;o&&!j.current&&Oo(n)&&(!(!i&&n!==t&&t!==e.body)||r)&&n.focus({preventScroll:!0}),j.current=!1})}},[r,y,U,E,D,b,k,v,S,W]),J(()=>{if(!ru||g||!y)return;let e=fu(Gl(y));!Oo(e)||!_u(e)||Q(y,e)&&e.blur()},[g,y]),J(()=>{if(!(r||!A))return A.setFocusManagerState({modal:s,closeOnFocusOut:c,open:g,onOpenChange:h.setOpen,domReference:v}),()=>{A.setFocusManagerState(null)}},[r,A,s,g,h,c,v]),J(()=>{if(!(r||!U))return Np(U),()=>{queueMicrotask(kp)}},[r,U]);let re=!r&&(s?!w:!0)&&(H||s);return(0,G.jsxs)(_.Fragment,{children:[re&&(0,G.jsx)(Kf,{"data-type":`inside`,ref:ee,onFocus:e=>{if(s){let e=ne();Yf(e[e.length-1])}else A?.portalNode&&(j.current=!1,Nd(e,A.portalNode)?Od(v)?.focus():Gd(d??A.beforeOutsideRef)?.focus())}}),n,re&&(0,G.jsx)(Kf,{"data-type":`inside`,ref:te,onFocus:e=>{s?Yf(ne()[0]):A?.portalNode&&(c&&(j.current=!0),Nd(e,A.portalNode)?kd(v)?.focus():Gd(u??A.afterOutsideRef)?.focus())}})]})}function Fp(e,t={}){let{enabled:n=!0,event:r=`click`,toggle:i=!0,ignoreMouse:a=!1,stickIfOpen:o=!0,touchOpenDelay:s=0,reason:c=rf}=t,l=`rootStore`in e?e.rootStore:e,u=l.context.dataRef,d=_.useRef(void 0),f=Wd(),p=Bd(),m=_.useMemo(()=>{function e(e,t,n,r){let i=_f(c,t,n);e&&r===`touch`&&s>0?p.start(s,()=>{l.setOpen(!0,i)}):l.setOpen(e,i)}function t(e,t,n){let r=u.current.openEvent,a=l.select(`domReferenceElement`)!==t;return e&&a||!e||!i?!0:r&&o?!n(r.type):!1}return{onPointerDown(e){d.current=e.pointerType},onMouseDown(n){let i=d.current,o=n.nativeEvent,s=l.select(`open`);if(n.button!==0||r===`click`||Ou(i,!0)&&a)return;let c=t(s,n.currentTarget,e=>e===`click`||e===`mousedown`),u=pu(o);if(_u(u)){e(c,o,u,i);return}let p=n.currentTarget;f.request(()=>{e(c,o,p,i)})},onClick(n){if(r===`mousedown-only`)return;let i=d.current;if(r===`mousedown`&&i){d.current=void 0;return}Ou(i,!0)&&a||e(t(l.select(`open`),n.currentTarget,e=>e===`click`||e===`mousedown`||e===`keydown`||e===`keyup`),n.nativeEvent,n.currentTarget,i)},onKeyDown(){d.current=void 0}}},[u,r,a,c,l,o,i,f,p,s]);return _.useMemo(()=>n?{reference:m}:Fs,[n,m])}function Ip(e,t){let n=null,r=null,i=!1;return{contextElement:e||void 0,getBoundingClientRect(){let a=e?.getBoundingClientRect()||{width:0,height:0,x:0,y:0},o=t.axis===`x`||t.axis===`both`,s=t.axis===`y`||t.axis===`both`,c=[`mouseenter`,`mousemove`].includes(t.dataRef.current.openEvent?.type||``)&&t.pointerType!==`touch`,l=a.width,u=a.height,d=a.x,f=a.y;return n==null&&t.x&&o&&(n=a.x-t.x),r==null&&t.y&&s&&(r=a.y-t.y),d-=n||0,f-=r||0,l=0,u=0,!i||c?(l=t.axis===`y`?a.width:0,u=t.axis===`x`?a.height:0,d=o&&t.x!=null?t.x:d,f=s&&t.y!=null?t.y:f):i&&!c&&(u=t.axis===`x`?a.height:u,l=t.axis===`y`?a.width:l),i=!0,{width:l,height:u,x:d,y:f,top:f,right:d+l,bottom:f+u,left:d}}}}function Lp(e){return e!=null&&e.clientX!=null}function Rp(e,t={}){let{enabled:n=!0,axis:r=`both`}=t,i=`rootStore`in e?e.rootStore:e,a=i.useState(`open`),o=i.useState(`floatingElement`),s=i.useState(`domReferenceElement`),c=i.context.dataRef,l=_.useRef(!1),u=_.useRef(null),[d,f]=_.useState(),[p,m]=_.useState([]),h=q(e=>{i.set(`positionReference`,e)}),g=q((e,t,n)=>{l.current||c.current.openEvent&&!Lp(c.current.openEvent)||i.set(`positionReference`,Ip(n??s,{x:e,y:t,axis:r,dataRef:c,pointerType:d}))}),v=q(e=>{a?u.current||(g(e.clientX,e.clientY,e.currentTarget),m([])):g(e.clientX,e.clientY,e.currentTarget)}),y=Ou(d)?o:a;_.useEffect(()=>{if(!n){h(s);return}if(!y)return;function e(){u.current?.(),u.current=null}let t=To(o);function r(t){let n=pu(t);Q(o,n)?e():g(t.clientX,t.clientY)}return!c.current.openEvent||Lp(c.current.openEvent)?u.current=Bf(t,`mousemove`,r):h(s),e},[y,n,o,c,s,i,g,h,p]),_.useEffect(()=>()=>{i.set(`positionReference`,null)},[i]),_.useEffect(()=>{n&&!o&&(l.current=!1)},[n,o]),_.useEffect(()=>{!n&&a&&(l.current=!0)},[n,a]);let b=_.useMemo(()=>{function e(e){f(e.pointerType)}return{onPointerDown:e,onPointerEnter:e,onMouseMove:v,onMouseEnter:v}},[v]);return _.useMemo(()=>n?{reference:b,trigger:b}:{},[n,b])}function zp(){return!1}function Bp(e){return{escapeKey:typeof e==`boolean`?e:e?.escapeKey??!1,outsidePress:typeof e==`boolean`?e:e?.outsidePress??!0}}function Vp(e,t={}){let{enabled:n=!0,escapeKey:r=!0,outsidePress:i=!0,outsidePressEvent:a=`sloppy`,referencePress:o=zp,bubbles:s,externalTree:c}=t,l=`rootStore`in e?e.rootStore:e,u=l.useState(`open`),d=l.useState(`floatingElement`),{dataRef:f}=l.context,p=Sp(c),m=q(typeof i==`function`?i:()=>!1),h=typeof i==`function`?m:i,g=h!==!1,v=q(()=>a),{escapeKey:y,outsidePress:b}=Bp(s),x=_.useRef(!1),S=_.useRef(!1),C=_.useRef(!1),w=_.useRef(!1),T=_.useRef(``),E=_.useRef(null),D=Bd(),O=Bd(),k=q(()=>{O.clear(),f.current.insideReactTree=!1}),A=q(e=>{let t=f.current.floatingContext?.nodeId;return(p?Su(p.nodesRef.current,t):[]).some(t=>t.context?.open&&!t.context.dataRef.current[e])}),j=q(e=>hu(e,l.select(`floatingElement`))||hu(e,l.select(`domReferenceElement`))),M=q(e=>{o()&&l.setOpen(!1,_f(rf,e.nativeEvent))}),N=q(e=>{if(!u||!n||!r||e.key!==`Escape`||w.current||!y&&A(`__escapeKeyBubbles`))return;let t=_f(df,Tu(e)?e.nativeEvent:e);l.setOpen(!1,t),t.isCanceled||e.preventDefault(),!y&&!t.isPropagationAllowed&&e.stopPropagation()}),P=q(()=>{f.current.insideReactTree=!0,O.start(0,k)}),F=q(e=>{if(!u||!n||e.button!==0)return;let t=pu(e.nativeEvent);Q(l.select(`floatingElement`),t)&&(x.current||(x.current=!0,S.current=!1))}),I=q(e=>{!u||!n||(e.defaultPrevented||e.nativeEvent.defaultPrevented)&&x.current&&(S.current=!0)});_.useEffect(()=>{if(!u||!n)return;f.current.__escapeKeyBubbles=y,f.current.__outsidePressBubbles=b;let e=new zd,t=new zd;function i(){e.clear(),w.current=!0}function a(){e.start(ru?5:0,()=>{w.current=!1})}function o(){C.current=!0,t.start(0,()=>{C.current=!1})}function s(){x.current=!1,S.current=!1}function c(){let e=T.current,t=e===`pen`||!e?`mouse`:e,n=v(),r=typeof n==`function`?n():n;return typeof r==`string`?r:r[t]}function m(e){let t=c();return t===`intentional`&&e.type!==`click`||t===`sloppy`&&e.type===`click`}function _(e){let t=f.current.floatingContext?.nodeId,n=p&&Su(p.nodesRef.current,t).some(t=>hu(e,t.context?.elements.floating));return j(e)||n}function O(e){if(m(e)){e.type!==`click`&&!j(e)&&(t.clear(),C.current=!1),k();return}if(f.current.insideReactTree){k();return}let n=pu(e),r=`[${qf(`inert`)}]`,i=K(n)?n.getRootNode():null,a=Array.from((ko(i)?i:Gl(l.select(`floatingElement`))).querySelectorAll(r)),o=l.context.triggerElements;if(n&&(o.hasElement(n)||o.hasMatchingElement(e=>Q(e,n))))return;let s=K(n)?n:null;for(;s&&!Bo(s);){let e=Uo(s);if(Bo(e)||!K(e))break;s=e}if(!(a.length&&K(n)&&!gu(n)&&!Q(n,l.select(`floatingElement`))&&a.every(e=>!Q(s,e)))){if(Oo(n)&&!(`touches`in e)){let t=Bo(n),r=Vo(n),i=/auto|scroll/,a=t||i.test(r.overflowX),o=t||i.test(r.overflowY),s=a&&n.clientWidth>0&&n.scrollWidth>n.clientWidth,c=o&&n.clientHeight>0&&n.scrollHeight>n.clientHeight,l=r.direction===`rtl`,u=c&&(l?e.offsetX<=n.offsetWidth-n.clientWidth:e.offsetX>n.clientWidth),d=s&&e.offsetY>n.clientHeight;if(u||d)return}if(!_(e)){if(c()===`intentional`&&C.current){t.clear(),C.current=!1;return}typeof h==`function`&&!h(e)||A(`__outsidePressBubbles`)||(l.setOpen(!1,_f(sf,e)),k())}}}function M(e){c()!==`sloppy`||e.pointerType===`touch`||!l.select(`open`)||!n||j(e)||O(e)}function P(e){if(c()!==`sloppy`||!l.select(`open`)||!n||j(e))return;let t=e.touches[0];t&&(E.current={startTime:Date.now(),startX:t.clientX,startY:t.clientY,dismissOnTouchEnd:!1,dismissOnMouseDown:!0},D.start(1e3,()=>{E.current&&(E.current.dismissOnTouchEnd=!1,E.current.dismissOnMouseDown=!1)}))}function F(e,t){let n=pu(e);if(!n)return;let r=Bf(n,e.type,()=>{t(e),r()})}function I(e){T.current=`touch`,F(e,P)}function L(e){D.clear(),e.type===`pointerdown`&&(T.current=e.pointerType),!(e.type===`mousedown`&&E.current&&!E.current.dismissOnMouseDown)&&F(e,e=>{e.type===`pointerdown`?M(e):O(e)})}function R(e){if(!x.current)return;let n=S.current;if(s(),c()===`intentional`){if(e.type===`pointercancel`){n&&o();return}if(!_(e)){if(n){o();return}typeof h==`function`&&!h(e)||(t.clear(),C.current=!0,k())}}}function ee(e){if(c()!==`sloppy`||!E.current||j(e))return;let t=e.touches[0];if(!t)return;let n=Math.abs(t.clientX-E.current.startX),r=Math.abs(t.clientY-E.current.startY),i=Math.sqrt(n*n+r*r);i>5&&(E.current.dismissOnTouchEnd=!0),i>10&&(O(e),D.clear(),E.current=null)}function te(e){F(e,ee)}function z(e){c()!==`sloppy`||!E.current||j(e)||(E.current.dismissOnTouchEnd&&O(e),D.clear(),E.current=null)}function B(e){F(e,z)}let V=Gl(d),H=Vf(r&&Vf(Bf(V,`keydown`,N),Bf(V,`compositionstart`,i),Bf(V,`compositionend`,a)),g&&Vf(Bf(V,`click`,L,!0),Bf(V,`pointerdown`,L,!0),Bf(V,`pointerup`,R,!0),Bf(V,`pointercancel`,R,!0),Bf(V,`mousedown`,L,!0),Bf(V,`mouseup`,R,!0),Bf(V,`touchstart`,I,!0),Bf(V,`touchmove`,te,!0),Bf(V,`touchend`,B,!0)));return()=>{H(),e.clear(),t.clear(),s(),C.current=!1}},[f,d,r,g,h,u,n,y,b,N,k,v,A,j,p,l,D]),_.useEffect(k,[h,k]);let L=_.useMemo(()=>({onKeyDown:N,onPointerDown:M,onClick:M}),[N,M]),R=_.useMemo(()=>({onKeyDown:N,onPointerDown:I,onMouseDown:I,onClickCapture:P,onMouseDownCapture(e){P(),F(e)},onPointerDownCapture(e){P(),F(e)},onMouseUpCapture:P,onTouchEndCapture:P,onTouchMoveCapture:P}),[N,P,F,I]);return _.useMemo(()=>n?{reference:L,floating:R,trigger:L}:{},[n,L,R])}function Hp(e,t,n){let{reference:r,floating:i}=e,a=Uu(t),o=Wu(t),s=Hu(o),c=zu(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Bu(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function Up(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Ru(t,e),p=nd(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=rd(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=rd(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Wp=50,Gp=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Up},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Hp(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Wp&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Hp(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Kp=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Ru(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=zu(r),_=Uu(o),v=zu(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[ed(o)]:Ku(o)),x=p!==`none`;!d&&x&&b.push(...$u(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Gu(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==Uu(t))||T.every(e=>Uu(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Uu(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}};function qp(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Jp(e){return Au.some(t=>e[t]>=0)}var Yp=function(e){return e===void 0&&(e={}),{name:`hide`,options:e,async fn(t){let{rects:n,platform:r}=t,{strategy:i=`referenceHidden`,...a}=Ru(e,t);switch(i){case`referenceHidden`:{let e=qp(await r.detectOverflow(t,{...a,elementContext:`reference`}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:Jp(e)}}}case`escaped`:{let e=qp(await r.detectOverflow(t,{...a,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:Jp(e)}}}default:return{}}}}},Xp=new Set([`left`,`top`]);async function Zp(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=zu(n),s=Bu(n),c=Uu(n)===`y`,l=Xp.has(o)?-1:1,u=a&&c?-1:1,d=Ru(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Qp=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Zp(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},$p=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Ru(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Uu(zu(i)),p=Vu(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=Lu(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=Lu(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}},em=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=Ru(e,t),u={x:n,y:r},d=Uu(i),f=Vu(d),p=u[f],m=u[d],h=Ru(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=Xp.has(zu(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},tm=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Ru(e,t),u=await o.detectOverflow(t,l),d=zu(i),f=Bu(i),p=Uu(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=ju(h-u[g],v),x=ju(m-u[_],y),S=!t.middlewareData.shift,C=b,w=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(w=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=v),S&&!f){let e=Mu(u.left,0),t=Mu(u.right,0),n=Mu(u.top,0),r=Mu(u.bottom,0);p?w=m-2*(e!==0||t!==0?e+t:Mu(u.left,u.right)):C=h-2*(n!==0||r!==0?n+r:Mu(u.top,u.bottom))}await c({...t,availableWidth:w,availableHeight:C});let T=await o.getDimensions(s.floating);return m!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}};function nm(e){let t=Vo(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Oo(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Nu(n)!==a||Nu(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function rm(e){return K(e)?e:e.contextElement}function im(e){let t=rm(e);if(!Oo(t))return Fu(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=nm(t),o=(a?Nu(n.width):n.width)/r,s=(a?Nu(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var am=Fu(0);function om(e){let t=To(e);return!zo()||!t.visualViewport?am:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function sm(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==To(e)?!1:t}function cm(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=rm(e),o=Fu(1);t&&(r?K(r)&&(o=im(r)):o=im(e));let s=sm(a,n,r)?om(a):Fu(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=To(a),t=r&&K(r)?To(r):r,n=e,i=Ko(n);for(;i&&r&&t!==n;){let e=im(i),t=i.getBoundingClientRect(),r=Vo(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=To(i),i=Ko(n)}}return rd({width:u,height:d,x:c,y:l})}function lm(e,t){let n=Ho(e).scrollLeft;return t?t.left+n:cm(Eo(e)).left+n}function um(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-lm(e,n),y:n.top+t.scrollTop}}function dm(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Eo(r),s=t?Mo(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Fu(1),u=Fu(0),d=Oo(r);if((d||!d&&!a)&&((wo(r)!==`body`||Ao(o))&&(c=Ho(r)),d)){let e=cm(r);l=im(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?um(o,c):Fu(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function fm(e){return Array.from(e.getClientRects())}function pm(e){let t=Eo(e),n=Ho(e),r=e.ownerDocument.body,i=Mu(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Mu(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+lm(e),s=-n.scrollTop;return Vo(r).direction===`rtl`&&(o+=Mu(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var mm=25;function hm(e,t){let n=To(e),r=Eo(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=zo();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=lm(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=mm&&(a-=o)}else l<=mm&&(a+=l);return{width:a,height:o,x:s,y:c}}function gm(e,t){let n=cm(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Oo(e)?im(e):Fu(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function _m(e,t,n){let r;if(t===`viewport`)r=hm(e,n);else if(t===`document`)r=pm(Eo(e));else if(K(t))r=gm(t,n);else{let n=om(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return rd(r)}function vm(e,t){let n=Uo(e);return n===t||!K(n)||Bo(n)?!1:Vo(n).position===`fixed`||vm(n,t)}function ym(e,t){let n=t.get(e);if(n)return n;let r=Go(e,[],!1).filter(e=>K(e)&&wo(e)!==`body`),i=null,a=Vo(e).position===`fixed`,o=a?Uo(e):e;for(;K(o)&&!Bo(o);){let t=Vo(o),n=Lo(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&(i.position===`absolute`||i.position===`fixed`)||Ao(o)&&!n&&vm(e,o))?r=r.filter(e=>e!==o):i=t,o=Uo(o)}return t.set(e,r),r}function bm(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Mo(t)?[]:ym(t,this._c):[].concat(n),r],o=_m(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=_m(t,a[e],i);s=Mu(n.top,s),c=ju(n.right,c),l=ju(n.bottom,l),u=Mu(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function xm(e){let{width:t,height:n}=nm(e);return{width:t,height:n}}function Sm(e,t,n){let r=Oo(t),i=Eo(t),a=n===`fixed`,o=cm(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Fu(0);function l(){c.x=lm(i)}if(r||!r&&!a)if((wo(t)!==`body`||Ao(i))&&(s=Ho(t)),r){let e=cm(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?um(i,s):Fu(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Cm(e){return Vo(e).position===`static`}function wm(e,t){if(!Oo(e)||Vo(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Eo(e)===n&&(n=n.ownerDocument.body),n}function Tm(e,t){let n=To(e);if(Mo(e))return n;if(!Oo(e)){let t=Uo(e);for(;t&&!Bo(t);){if(K(t)&&!Cm(t))return t;t=Uo(t)}return n}let r=wm(e,t);for(;r&&jo(r)&&Cm(r);)r=wm(r,t);return r&&Bo(r)&&Cm(r)&&!Lo(r)?n:r||Ro(e)||n}var Em=async function(e){let t=this.getOffsetParent||Tm,n=this.getDimensions,r=await n(e.floating);return{reference:Sm(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Dm(e){return Vo(e).direction===`rtl`}var Om={convertOffsetParentRelativeRectToViewportRelativeRect:dm,getDocumentElement:Eo,getClippingRect:bm,getOffsetParent:Tm,getElementRects:Em,getClientRects:fm,getDimensions:xm,getScale:im,isElement:K,isRTL:Dm};function km(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Am(e,t){let n=null,r,i=Eo(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Pu(d),h=Pu(i.clientWidth-(u+f)),g=Pu(i.clientHeight-(d+p)),_=Pu(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Mu(0,ju(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!km(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function jm(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=rm(e),u=i||a?[...l?Go(l):[],...t?Go(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Am(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?cm(e):null;c&&g();function g(){let t=cm(e);h&&!km(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Mm=Qp,Nm=$p,Pm=Kp,Fm=tm,Im=Yp,Lm=em,Rm=(e,t,n)=>{let r=new Map,i={platform:Om,...n},a={...i.platform,_c:r};return Gp(e,t,{...i,platform:a})},zm=typeof document<`u`?_.useLayoutEffect:function(){};function Bm(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Bm(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!Bm(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Vm(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Hm(e,t){let n=Vm(e);return Math.round(t*n)/n}function Um(e){let t=_.useRef(e);return zm(()=>{t.current=e}),t}function Wm(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[u,d]=_.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=_.useState(r);Bm(f,r)||p(r);let[m,h]=_.useState(null),[g,v]=_.useState(null),y=_.useCallback(e=>{e!==C.current&&(C.current=e,h(e))},[]),b=_.useCallback(e=>{e!==w.current&&(w.current=e,v(e))},[]),x=a||m,S=o||g,C=_.useRef(null),w=_.useRef(null),T=_.useRef(u),E=c!=null,D=Um(c),O=Um(i),k=Um(l),A=_.useCallback(()=>{if(!C.current||!w.current)return;let e={placement:t,strategy:n,middleware:f};O.current&&(e.platform=O.current),Rm(C.current,w.current,e).then(e=>{let t={...e,isPositioned:k.current!==!1};j.current&&!Bm(T.current,t)&&(T.current=t,Xd.flushSync(()=>{d(t)}))})},[f,t,n,O,k]);zm(()=>{l===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[l]);let j=_.useRef(!1);zm(()=>(j.current=!0,()=>{j.current=!1}),[]),zm(()=>{if(x&&(C.current=x),S&&(w.current=S),x&&S){if(D.current)return D.current(x,S,A);A()}},[x,S,A,D,E]);let M=_.useMemo(()=>({reference:C,floating:w,setReference:y,setFloating:b}),[y,b]),N=_.useMemo(()=>({reference:x,floating:S}),[x,S]),P=_.useMemo(()=>{let e={position:n,left:0,top:0};if(!N.floating)return e;let t=Hm(N.floating,u.x),r=Hm(N.floating,u.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...Vm(N.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,N.floating,u.x,u.y]);return _.useMemo(()=>({...u,update:A,refs:M,elements:N,floatingStyles:P}),[u,A,M,N,P])}var Gm=(e,t)=>{let n=Mm(e);return{name:n.name,fn:n.fn,options:[e,t]}},Km=(e,t)=>{let n=Nm(e);return{name:n.name,fn:n.fn,options:[e,t]}},qm=(e,t)=>({fn:Lm(e).fn,options:[e,t]}),Jm=(e,t)=>{let n=Pm(e);return{name:n.name,fn:n.fn,options:[e,t]}},Ym=(e,t)=>{let n=Fm(e);return{name:n.name,fn:n.fn,options:[e,t]}},Xm=(e,t)=>{let n=Im(e);return{name:n.name,fn:n.fn,options:[e,t]}};function Zm(e){let t=_.useRef(!0);t.current&&(t.current=!1,e())}var $=(e,t,n,r,i,a,...o)=>{if(o.length>0)throw Error(_s(1));let s;if(e&&t&&n&&r&&i&&a)s=(o,s,c,l)=>a(e(o,s,c,l),t(o,s,c,l),n(o,s,c,l),r(o,s,c,l),i(o,s,c,l),s,c,l);else if(e&&t&&n&&r&&i)s=(a,o,s,c)=>i(e(a,o,s,c),t(a,o,s,c),n(a,o,s,c),r(a,o,s,c),o,s,c);else if(e&&t&&n&&r)s=(i,a,o,s)=>r(e(i,a,o,s),t(i,a,o,s),n(i,a,o,s),a,o,s);else if(e&&t&&n)s=(r,i,a,o)=>n(e(r,i,a,o),t(r,i,a,o),i,a,o);else if(e&&t)s=(n,r,i,a)=>t(e(n,r,i,a),r,i,a);else if(e)s=e;else throw Error(`Missing arguments`);return s},Qm=o((e=>{var t=u();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,s=t.useDebugValue;function c(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return o(function(){c.value=n,c.getSnapshot=t,l(c)&&u({inst:c})},[e,n,t]),a(function(){return l(c)&&u({inst:c}),e(function(){l(c)&&u({inst:c})})},[e]),s(n),n}function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:c;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),$m=o(((e,t)=>{t.exports=Qm()})),eh=o((e=>{var t=u(),n=$m();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useSyncExternalStore,o=t.useRef,s=t.useEffect,c=t.useMemo,l=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var d=o(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=c(function(){function e(e){if(!a){if(a=!0,o=e,e=r(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return s=t}return s=e}if(t=s,i(o,e))return t;var n=r(e);return u!==void 0&&u(t,n)?(o=e,t):(o=e,s=n)}var a=!1,o,s,c=n===void 0?null:n;return[function(){return e(t())},c===null?void 0:function(){return e(c())}]},[t,n,r,u]);var p=a(e,d[0],d[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),l(p),p}})),th=o(((e,t)=>{t.exports=eh()})),nh=$m(),rh=th(),ih=js(19)?sh:ch;function ah(e,t,n,r,i){return ih(e,t,n,r,i)}function oh(e,t,n,r,i){let a=_.useCallback(()=>t(e.getSnapshot(),n,r,i),[e,t,n,r,i]);return(0,nh.useSyncExternalStore)(e.subscribe,a,a)}Tf({before(e){e.syncIndex=0,e.didInitialize||(e.syncTick=1,e.syncHooks=[],e.didChangeStore=!0,e.getSnapshot=()=>{let t=!1;for(let n=0;n<e.syncHooks.length;n+=1){let r=e.syncHooks[n],i=r.selector(r.store.state,r.a1,r.a2,r.a3);Object.is(r.value,i)||(t=!0,r.value=i)}return t&&(e.syncTick+=1),e.syncTick})},after(e){e.syncHooks.length>0&&(e.didChangeStore&&(e.didChangeStore=!1,e.subscribe=t=>{let n=new Set;for(let t of e.syncHooks)n.add(t.store);let r=[];for(let e of n)r.push(e.subscribe(t));return()=>{for(let e of r)e()}}),(0,nh.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot))}});function sh(e,t,n,r,i){let a=wf();if(!a)return oh(e,t,n,r,i);let o=a.syncIndex;a.syncIndex+=1;let s;return a.didInitialize?(s=a.syncHooks[o],(s.store!==e||s.selector!==t||!Object.is(s.a1,n)||!Object.is(s.a2,r)||!Object.is(s.a3,i))&&(s.store!==e&&(a.didChangeStore=!0),s.store=e,s.selector=t,s.a1=n,s.a2=r,s.a3=i,s.value=t(e.getSnapshot(),n,r,i))):(s={store:e,selector:t,a1:n,a2:r,a3:i,value:t(e.getSnapshot(),n,r,i)},a.syncHooks.push(s)),s.value}function ch(e,t,n,r,i){return(0,rh.useSyncExternalStoreWithSelector)(e.subscribe,e.getSnapshot,e.getSnapshot,e=>t(e,n,r,i))}var lh=class{constructor(e){this.state=e,this.listeners=new Set,this.updateTick=0}subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)});getSnapshot=()=>this.state;setState(e){if(this.state===e)return;this.state=e,this.updateTick+=1;let t=this.updateTick;for(let n of this.listeners){if(t!==this.updateTick)return;n(e)}}update(e){for(let t in e)if(!Object.is(this.state[t],e[t])){this.setState({...this.state,...e});return}}set(e,t){Object.is(this.state[e],t)||this.setState({...this.state,[e]:t})}notifyAll(){let e={...this.state};this.setState(e)}use(e,t,n,r){return ah(this,e,t,n,r)}},uh=class extends lh{constructor(e,t={},n){super(e),this.context=t,this.selectors=n}useSyncedValue(e,t){_.useDebugValue(e);let n=this;J(()=>{n.state[e]!==t&&n.set(e,t)},[n,e,t])}useSyncedValueWithCleanup(e,t){let n=this;J(()=>(n.state[e]!==t&&n.set(e,t),()=>{n.set(e,void 0)}),[n,e,t])}useSyncedValues(e){let t=this;J(()=>{t.update(e)},[t,...Object.values(e)])}useControlledProp(e,t){_.useDebugValue(e);let n=this,r=t!==void 0;J(()=>{r&&!Object.is(n.state[e],t)&&n.setState({...n.state,[e]:t})},[n,e,t,r])}select(e,t,n,r){let i=this.selectors[e];return i(this.state,t,n,r)}useState(e,t,n,r){return _.useDebugValue(e),ah(this,this.selectors[e],t,n,r)}useContextCallback(e,t){_.useDebugValue(e);let n=q(t??Ns);this.context[e]=n}useStateSetter(e){let t=_.useRef(void 0);return t.current===void 0&&(t.current=t=>{this.set(e,t)}),t.current}observe(e,t){let n;n=typeof e==`function`?e:this.selectors[e];let r=n(this.state);return t(r,r,this),this.subscribe(e=>{let i=n(e);if(!Object.is(r,i)){let e=r;r=i,t(i,e,this)}})}},dh={open:$(e=>e.open),transitionStatus:$(e=>e.transitionStatus),domReferenceElement:$(e=>e.domReferenceElement),referenceElement:$(e=>e.positionReference??e.referenceElement),floatingElement:$(e=>e.floatingElement),floatingId:$(e=>e.floatingId)},fh=class extends uh{constructor(e){let{syncOnly:t,nested:n,onOpenChange:r,triggerElements:i,...a}=e;super({...a,positionReference:a.referenceElement,domReferenceElement:a.referenceElement},{onOpenChange:r,dataRef:{current:{}},events:_p(),nested:n,triggerElements:i},dh),this.syncOnly=t}syncOpenEvent=(e,t)=>{(!e||!this.state.open||t!=null&&ku(t))&&(this.context.dataRef.current.openEvent=e?t:void 0)};dispatchOpenChange=(e,t)=>{this.syncOpenEvent(e,t.event);let n={open:e,reason:t.reason,nativeEvent:t.event,nested:this.context.nested,triggerElement:t.trigger};this.context.events.emit(`openchange`,n)};setOpen=(e,t)=>{if(this.syncOnly){this.context.onOpenChange?.(e,t);return}this.dispatchOpenChange(e,t),this.context.onOpenChange?.(e,t)}};function ph(e){let{popupStore:t,treatPopupAsFloatingElement:n=!1,floatingRootContext:r,floatingId:i,nested:a,onOpenChange:o}=e,s=t.useState(`open`),c=t.useState(`activeTriggerElement`),l=t.useState(n?`popupElement`:`positionerElement`),u=t.context.triggerElements,d=o,f=_.useRef(null);r===void 0&&f.current===null&&(f.current=new fh({open:s,transitionStatus:void 0,referenceElement:c,floatingElement:l,triggerElements:u,onOpenChange:d,floatingId:i,syncOnly:!0,nested:a}));let p=r??f.current;return t.useSyncedValue(`floatingId`,i),J(()=>{let e={open:s,floatingId:i,referenceElement:c,floatingElement:l};K(c)&&(e.domReferenceElement=c),p.state.positionReference===p.state.referenceElement&&(e.positionReference=c),p.update(e)},[s,i,c,l,p]),p.context.onOpenChange=d,p.context.nested=a,p}var mh={tabIndex:-1,[ou]:``};function hh(e){return t=>t===`touch`?e.current:!0}function gh(e,t,n=!1){let r=Bl(),i=xp()!=null,a=_.useRef(null);e===void 0&&a.current===null&&(a.current=t(r,i));let o=e??a.current;return ph({popupStore:o,treatPopupAsFloatingElement:n,floatingRootContext:o.state.floatingRootContext,floatingId:r,nested:i,onOpenChange:o.setOpen}),{store:o,internalStore:a.current}}function _h(e,t){let n=_.useRef(null),r=_.useRef(null);return _.useCallback(i=>{if(e===void 0)return;let a=!1;if(n.current!==null){let e=n.current,i=r.current,o=t.context.triggerElements.getById(e);i&&o===i&&(t.context.triggerElements.delete(e),a=!0),n.current=null,r.current=null}if(i!==null&&(n.current=e,r.current=i,t.context.triggerElements.add(e,i),a=!0),a){let e=t.context.triggerElements.size;t.select(`open`)&&t.state.triggerCount!==e&&t.set(`triggerCount`,e)}},[t,e])}function vh(e,t,n,r=!1){t?e.preventUnmountingOnClose=!1:r&&(e.preventUnmountingOnClose=!0);let i=n?.id??null;(i||t)&&(e.activeTriggerId=i,e.activeTriggerElement=n??null)}function yh(e){let t=!1;return e.preventUnmountOnClose=()=>{t=!0},()=>t}function bh(e,t,n,r={}){let i=n.reason,a=i===af,o=t&&i===`trigger-focus`,s=!t&&(i===`trigger-press`||i===`escape-key`),c=yh(n);if(e.context.onOpenChange?.(t,n),n.isCanceled)return;r.onBeforeDispatch?.(),e.state.floatingRootContext.dispatchOpenChange(t,n);let l=()=>{let i={...r.extraState,open:t};o?i.instantType=`focus`:s?i.instantType=`dismiss`:a&&(i.instantType=void 0),vh(i,t,n.trigger,c()),e.update(i)};a?Xd.flushSync(l):l()}function xh(e,t,n,r){Zm(()=>{t===void 0&&e.state.open===!1&&n&&(e.state={...e.state,open:!0,activeTriggerId:r,preventUnmountingOnClose:!1})})}function Sh(e,t,n,r){let i=n.useState(`isMountedByTrigger`,e),a=_h(e,n),o=q(t=>{if(a(t),!t)return;let i=n.select(`open`),o=n.select(`activeTriggerId`);if(o===e){n.update({activeTriggerElement:t,...i?r:null});return}o==null&&i&&n.update({activeTriggerId:e,activeTriggerElement:t,...r})});return J(()=>{i&&n.update({activeTriggerElement:t.current,...r})},[i,n,t,...Object.values(r)]),{registerTrigger:o,isMountedByThisTrigger:i}}function Ch(e,t={}){let{closeOnActiveTriggerUnmount:n=!1}=t,r=e.useState(`open`);J(()=>{if(!r){e.state.triggerCount!==0&&e.set(`triggerCount`,0);return}let t=e.context.triggerElements.size,i={};e.state.triggerCount!==t&&(i.triggerCount=t);let a=e.select(`activeTriggerId`),o=null;if(a){let t=e.context.triggerElements.getById(a);t?t!==e.state.activeTriggerElement&&(i.activeTriggerElement=t):o=a}if(!o&&!a&&t===1){let t=e.context.triggerElements.entries().next();if(!t.done){let[e,n]=t.value;i.activeTriggerId=e,i.activeTriggerElement=n}}(i.triggerCount!==void 0||i.activeTriggerId!==void 0||i.activeTriggerElement!==void 0)&&e.update(i),o&&n&&queueMicrotask(()=>{if(e.select(`open`)&&e.select(`activeTriggerId`)===o&&!e.context.triggerElements.getById(o)){let t=_f(nf);e.setOpen(!1,t),t.isCanceled||e.update({activeTriggerId:null,activeTriggerElement:null})}})},[r,e,e.useState(`triggerCount`),n])}function wh(e,t,n){let{mounted:r,setMounted:i,transitionStatus:a}=$d(e),o=t.useState(`preventUnmountingOnClose`),s=e?!1:o;t.useSyncedValues({mounted:r,transitionStatus:a,preventUnmountingOnClose:s});let c=q(()=>{i(!1),t.update({activeTriggerId:null,activeTriggerElement:null,mounted:!1,preventUnmountingOnClose:!1}),n?.(),t.context.onOpenChangeComplete?.(!1)});return Qd({enabled:r&&!e&&!s,open:e,ref:t.context.popupRef,onComplete(){e||c()}}),{forceUnmount:c,transitionStatus:a}}function Th(e,t){e.useSyncedValues(t),J(()=>()=>{e.update({activeTriggerProps:Fs,inactiveTriggerProps:Fs,popupProps:Fs})},[e])}function Eh(e,t){J(()=>{!t&&e.state.openMethod!==null&&e.set(`openMethod`,null)},[t,e]),J(()=>()=>{e.state.openMethod!==null&&e.set(`openMethod`,null)},[e])}var Dh=class{constructor(){this.elementsSet=new Set,this.idMap=new Map}add(e,t){let n=this.idMap.get(e);n!==t&&(n!==void 0&&this.elementsSet.delete(n),this.elementsSet.add(t),this.idMap.set(e,t))}delete(e){let t=this.idMap.get(e);t&&(this.elementsSet.delete(t),this.idMap.delete(e))}hasElement(e){return this.elementsSet.has(e)}hasMatchingElement(e){for(let t of this.elementsSet)if(e(t))return!0;return!1}getById(e){return this.idMap.get(e)}entries(){return this.idMap.entries()}elements(){return this.elementsSet.values()}get size(){return this.idMap.size}};function Oh(){return new fh({open:!1,transitionStatus:void 0,floatingElement:null,referenceElement:null,triggerElements:new Dh,floatingId:void 0,syncOnly:!1,nested:!1,onOpenChange:void 0})}function kh(){return{open:!1,openProp:void 0,mounted:!1,transitionStatus:void 0,floatingRootContext:Oh(),floatingId:void 0,triggerCount:0,preventUnmountingOnClose:!1,payload:void 0,activeTriggerId:null,activeTriggerElement:null,triggerIdProp:void 0,popupElement:null,positionerElement:null,activeTriggerProps:Fs,inactiveTriggerProps:Fs,popupProps:Fs}}function Ah(e,t,n=!1){return new fh({open:!1,transitionStatus:void 0,floatingElement:null,referenceElement:null,triggerElements:e,floatingId:t,syncOnly:!0,nested:n,onOpenChange:void 0})}var jh=$(e=>e.triggerIdProp??e.activeTriggerId),Mh=$(e=>e.openProp??e.open),Nh=$(e=>(e.popupElement?.id??e.floatingId)||void 0);function Ph(e,t){return t!==void 0&&Mh(e)&&jh(e)===t}function Fh(e,t){return Ph(e,t)?!0:t!==void 0&&Mh(e)&&jh(e)==null&&e.triggerCount===1}var Ih={open:Mh,mounted:$(e=>e.mounted),transitionStatus:$(e=>e.transitionStatus),floatingRootContext:$(e=>e.floatingRootContext),triggerCount:$(e=>e.triggerCount),preventUnmountingOnClose:$(e=>e.preventUnmountingOnClose),payload:$(e=>e.payload),activeTriggerId:jh,activeTriggerElement:$(e=>e.mounted?e.activeTriggerElement:null),popupId:Nh,isTriggerActive:$((e,t)=>t!==void 0&&jh(e)===t),isOpenedByTrigger:$((e,t)=>Ph(e,t)),isMountedByTrigger:$((e,t)=>t!==void 0&&jh(e)===t&&e.mounted),triggerProps:$((e,t)=>t?e.activeTriggerProps:e.inactiveTriggerProps),triggerPopupId:$((e,t)=>Fh(e,t)?Nh(e):void 0),popupProps:$(e=>e.popupProps),popupElement:$(e=>e.popupElement),positionerElement:$(e=>e.positionerElement)};function Lh(e){let{open:t=!1,onOpenChange:n,elements:r={}}=e,i=Bl(),a=xp()!=null,o=Yo(()=>new fh({open:t,transitionStatus:void 0,onOpenChange:n,referenceElement:r.reference??null,floatingElement:r.floating??null,triggerElements:new Dh,floatingId:i,syncOnly:!1,nested:a})).current;return J(()=>{let e={open:t,floatingId:i};r.reference!==void 0&&(e.referenceElement=r.reference,e.domReferenceElement=K(r.reference)?r.reference:null),r.floating!==void 0&&(e.floatingElement=r.floating),o.update(e)},[t,i,r.reference,r.floating,o]),o.context.onOpenChange=n,o.context.nested=a,o}function Rh(e={}){let{nodeId:t,externalTree:n}=e,r=Lh(e),i=e.rootContext||r,a=i.useState(`referenceElement`),o=i.useState(`floatingElement`),s=i.useState(`domReferenceElement`),c=i.useState(`open`),l=i.useState(`floatingId`),[u,d]=_.useState(null),[f,p]=_.useState(void 0),[m,h]=_.useState(void 0),g=_.useRef(null),v=Sp(n),y=_.useMemo(()=>({reference:a,floating:o,domReference:s}),[a,o,s]),b=Wm({...e,elements:{...y,...u&&{reference:u}}}),x=K(f)?f:null,S=m===void 0?i.state.floatingElement:m;i.useSyncedValue(`referenceElement`,f??null),i.useSyncedValue(`domReferenceElement`,f===void 0?s:x),i.useSyncedValue(`floatingElement`,S);let C=_.useCallback(e=>{let t=K(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),getClientRects:()=>e.getClientRects(),contextElement:e}:e;d(t),b.refs.setReference(t)},[b.refs]),w=_.useCallback(e=>{(K(e)||e===null)&&(g.current=e,p(e)),(K(b.refs.reference.current)||b.refs.reference.current===null||e!==null&&!K(e))&&b.refs.setReference(e)},[b.refs,p]),T=_.useCallback(e=>{h(e),b.refs.setFloating(e)},[b.refs]),E=_.useMemo(()=>({...b.refs,setReference:w,setFloating:T,setPositionReference:C,domReference:g}),[b.refs,w,T,C]),D=_.useMemo(()=>({...b.elements,domReference:s}),[b.elements,s]),O=_.useMemo(()=>({...b,dataRef:i.context.dataRef,open:c,onOpenChange:i.setOpen,events:i.context.events,floatingId:l,refs:E,elements:D,nodeId:t,rootStore:i}),[b,E,D,t,i,c,l]);return J(()=>{s&&(g.current=s)},[s]),J(()=>{i.context.dataRef.current.floatingContext=O;let e=v?.nodesRef.current.find(e=>e.id===t);e&&(e.context=O)}),_.useMemo(()=>({...b,context:O,refs:E,elements:D,rootStore:i}),[b,E,D,O,i])}var zh=tu&&ru;function Bh(e,t={}){let{enabled:n=!0,delay:r}=t,i=`rootStore`in e?e.rootStore:e,{events:a,dataRef:o}=i.context,s=_.useRef(!1),c=_.useRef(null),l=_.useRef(!0),u=Bd();_.useEffect(()=>{let e=i.select(`domReferenceElement`);if(!n)return;let t=To(e);function r(){let e=i.select(`domReferenceElement`);!i.select(`open`)&&Oo(e)&&e===fu(Gl(e))&&(s.current=!0)}function a(){l.current=!0}function o(){l.current=!1}return Vf(Bf(t,`blur`,r),zh&&Bf(t,`keydown`,a,!0),zh&&Bf(t,`pointerdown`,o,!0))},[i,n]),_.useEffect(()=>{if(!n)return;function e(e){if(e.reason===`trigger-press`||e.reason===`escape-key`){let e=i.select(`domReferenceElement`);K(e)&&(c.current=e,s.current=!0)}}return a.on(`openchange`,e),()=>{a.off(`openchange`,e)}},[a,n,i]);let d=_.useMemo(()=>{function e(){s.current=!1,c.current=null}return{onMouseLeave(){e()},onFocus(t){let n=t.currentTarget;if(s.current){if(c.current===n)return;e()}let a=pu(t.nativeEvent);if(K(a)){if(zh&&!t.relatedTarget){if(!l.current&&!_u(a))return}else if(!bu(a))return}let o=mu(t.relatedTarget,i.context.triggerElements),{nativeEvent:d,currentTarget:f}=t,p=typeof r==`function`?r():r;if(i.select(`open`)&&o||p===0||p===void 0){i.setOpen(!0,_f(of,d,f));return}u.start(p,()=>{s.current||i.setOpen(!0,_f(of,d,f))})},onBlur(t){e();let n=t.relatedTarget,r=t.nativeEvent,a=K(n)&&n.hasAttribute(qf(`focus-guard`))&&n.getAttribute(`data-type`)===`outside`;u.start(0,()=>{let e=i.select(`domReferenceElement`),t=fu(Gl(e));!n&&t===e||Q(o.current.floatingContext?.refs.floating.current,t)||Q(e,t)||a||mu(n??t,i.context.triggerElements)||i.setOpen(!1,_f(of,r))})}}},[o,r,i,u]);return _.useMemo(()=>n?{reference:d,trigger:d}:{},[n,d])}var Vh=class e{constructor(){this.pointerType=void 0,this.interactedInside=!1,this.handler=void 0,this.blockMouseMove=!0,this.performedPointerEventsMutation=!1,this.pointerEventsScopeElement=null,this.pointerEventsReferenceElement=null,this.pointerEventsFloatingElement=null,this.restTimeoutPending=!1,this.openChangeTimeout=new zd,this.restTimeout=new zd,this.handleCloseOptions=void 0}static create(){return new e}dispose=()=>{this.openChangeTimeout.clear(),this.restTimeout.clear()};disposeEffect=()=>this.dispose},Hh=new WeakMap;function Uh(e){if(!e.performedPointerEventsMutation)return;let t=e.pointerEventsScopeElement;t&&Hh.get(t)===e&&(e.pointerEventsScopeElement?.style.removeProperty(`pointer-events`),e.pointerEventsReferenceElement?.style.removeProperty(`pointer-events`),e.pointerEventsFloatingElement?.style.removeProperty(`pointer-events`),Hh.delete(t)),e.performedPointerEventsMutation=!1,e.pointerEventsScopeElement=null,e.pointerEventsReferenceElement=null,e.pointerEventsFloatingElement=null}function Wh(e,t){let{scopeElement:n,referenceElement:r,floatingElement:i}=t,a=Hh.get(n);a&&a!==e&&Uh(a),Uh(e),e.performedPointerEventsMutation=!0,e.pointerEventsScopeElement=n,e.pointerEventsReferenceElement=r,e.pointerEventsFloatingElement=i,Hh.set(n,e),n.style.pointerEvents=`none`,r.style.pointerEvents=`auto`,i.style.pointerEvents=`auto`}function Gh(e){let t=e.context.dataRef.current,n=Yo(()=>t.hoverInteractionState??Vh.create()).current;return t.hoverInteractionState||=n,Ld(t.hoverInteractionState.disposeEffect),t.hoverInteractionState}function Kh(e,t={}){let{enabled:n=!0,closeDelay:r=0,nodeId:i}=t,a=`rootStore`in e?e.rootStore:e,o=a.useState(`open`),s=a.useState(`floatingElement`),c=a.useState(`domReferenceElement`),{dataRef:l}=a.context,u=Sp(),d=xp(),f=Gh(a),p=Bd(),m=q(()=>Pf(l.current.openEvent?.type,f.interactedInside)),h=q(()=>Ff(l.current.openEvent?.type)),g=q(()=>{Uh(f)});J(()=>{o||(f.pointerType=void 0,f.restTimeoutPending=!1,f.interactedInside=!1,g())},[o,f,g]),_.useEffect(()=>g,[g]),J(()=>{if(n&&o&&f.handleCloseOptions?.blockPointerEvents&&h()&&K(c)&&s){let e=c,t=s,n=Gl(s),r=u?.nodesRef.current.find(e=>e.id===d)?.context?.elements.floating;r&&(r.style.pointerEvents=``);let i=f.pointerEventsScopeElement===t?null:f.pointerEventsScopeElement,a=r===t?null:r,o=f.handleCloseOptions?.getScope?.()??i??a??e.closest(`[data-rootownerid]`)??n.body;return Wh(f,{scopeElement:o,referenceElement:e,floatingElement:t}),()=>{g()}}},[n,o,c,s,f,h,u,d,g]),_.useEffect(()=>{if(!n)return;function e(){return!!(u&&d&&Su(u.nodesRef.current,d).length>0)}function t(e){let t=Mf(r,`close`,f.pointerType),n=()=>{a.setOpen(!1,_f(af,e)),u?.events.emit(`floating.closed`,e)};t?f.openChangeTimeout.start(t,n):(f.openChangeTimeout.clear(),n())}function o(e){let t=pu(e);if(!vu(t)){f.interactedInside=!1;return}f.interactedInside=t?.closest(`[aria-haspopup]`)!=null}function c(){f.openChangeTimeout.clear(),p.clear(),u?.events.off(`floating.closed`,v),g()}function _(n){if(e()&&u){u.events.on(`floating.closed`,v);return}if(mu(n.relatedTarget,a.context.triggerElements))return;let r=l.current.floatingContext?.nodeId??i,o=n.relatedTarget;if(!(u&&r&&K(o)&&Su(u.nodesRef.current,r,!1).some(e=>Q(e.context?.elements.floating,o)))){if(f.handler){f.handler(n);return}g(),h()&&!m()&&t(n)}}function v(t){!u||!d||e()||p.start(0,()=>{u.events.off(`floating.closed`,v),a.setOpen(!1,_f(af,t)),u.events.emit(`floating.closed`,t)})}let y=s;return Vf(y&&Bf(y,`mouseenter`,c),y&&Bf(y,`mouseleave`,_),y&&Bf(y,`pointerdown`,o,!0),()=>{u?.events.off(`floating.closed`,v)})},[n,s,a,l,r,i,h,m,g,f,u,d,p])}var qh={current:null};function Jh(e,t={}){let{enabled:n=!0,delay:r=0,handleClose:i=null,mouseOnly:a=!1,restMs:o=0,move:s=!0,triggerElementRef:c=qh,externalTree:l,isActiveTrigger:u=!0,getHandleCloseContext:d,isClosing:f,shouldOpen:p}=t,m=`rootStore`in e?e.rootStore:e,{dataRef:h,events:g}=m.context,v=Sp(l),y=Gh(m),b=_.useRef(!1),x=Hf(i),S=Hf(r),C=Hf(o),w=Hf(n),T=Hf(p),E=Hf(f),D=q(()=>Pf(h.current.openEvent?.type,y.interactedInside)),O=q(()=>T.current?.()!==!1),k=q((e,t,n)=>{let r=m.context.triggerElements;if(r.hasElement(t))return!e||!Q(e,t);if(!K(n))return!1;let i=n;return r.hasMatchingElement(e=>Q(e,i))&&(!e||!Q(e,i))}),A=q(()=>{y.handler&&=(Gl(m.select(`domReferenceElement`)).removeEventListener(`mousemove`,y.handler),void 0)}),j=q(()=>{Uh(y)});return u&&(y.handleCloseOptions=x.current?.__options),_.useEffect(()=>A,[A]),_.useEffect(()=>{if(!n)return;function e(e){e.open?b.current=!1:(b.current=e.reason===af,A(),y.openChangeTimeout.clear(),y.restTimeout.clear(),y.blockMouseMove=!0,y.restTimeoutPending=!1)}return g.on(`openchange`,e),()=>{g.off(`openchange`,e)}},[n,g,y,A]),_.useEffect(()=>{if(!n)return;function e(e,t=!0){let n=Mf(S.current,`close`,y.pointerType);n?y.openChangeTimeout.start(n,()=>{m.setOpen(!1,_f(af,e)),v?.events.emit(`floating.closed`,e)}):t&&(y.openChangeTimeout.clear(),m.setOpen(!1,_f(af,e)),v?.events.emit(`floating.closed`,e))}let t=c.current??(u?m.select(`domReferenceElement`):null);if(!K(t))return;function r(e){if(y.openChangeTimeout.clear(),y.blockMouseMove=!1,a&&!Ou(y.pointerType))return;let t=Nf(C.current),n=Mf(S.current,`open`,y.pointerType),r=pu(e),i=e.currentTarget??null,o=m.select(`domReferenceElement`),s=i;if(K(r)&&!m.context.triggerElements.hasElement(r)){for(let e of m.context.triggerElements.elements())if(Q(e,r)){s=e;break}}K(i)&&K(o)&&!m.context.triggerElements.hasElement(i)&&Q(i,o)&&(s=o);let c=s==null?!1:k(o,s,r),l=m.select(`open`),u=E.current?.()??m.select(`transitionStatus`)===`ending`,d=!l&&u&&b.current,f=!c&&K(s)&&K(o)&&Q(o,s)&&d,p=t>0&&!n,h=c&&(l||d)||f,g=!l||c;if(h){O()&&m.setOpen(!0,_f(af,e,s));return}p||(n?y.openChangeTimeout.start(n,()=>{g&&O()&&m.setOpen(!0,_f(af,e,s))}):g&&O()&&m.setOpen(!0,_f(af,e,s)))}function i(t){if(D()){j();return}A();let n=Gl(m.select(`domReferenceElement`));y.restTimeout.clear(),y.restTimeoutPending=!1;let r=h.current.floatingContext??d?.();if(!mu(t.relatedTarget,m.context.triggerElements)){if(x.current&&r){m.select(`open`)||y.openChangeTimeout.clear();let i=c.current;y.handler=x.current({...r,tree:v,x:t.clientX,y:t.clientY,onClose(){j(),A(),w.current&&!D()&&i===m.select(`domReferenceElement`)&&e(t,!0)}}),n.addEventListener(`mousemove`,y.handler),y.handler(t);return}(y.pointerType!==`touch`||!Q(m.select(`floatingElement`),t.relatedTarget))&&e(t)}}return s?Vf(Bf(t,`mousemove`,r,{once:!0}),Bf(t,`mouseenter`,r),Bf(t,`mouseleave`,i)):Vf(Bf(t,`mouseenter`,r),Bf(t,`mouseleave`,i))},[A,j,h,S,m,n,x,y,u,k,D,a,s,C,c,v,w,d,E,O]),_.useMemo(()=>{if(!n)return;function e(e){y.pointerType=e.pointerType}return{onPointerDown:e,onPointerEnter:e,onMouseMove(e){let{nativeEvent:t}=e,n=e.currentTarget,r=m.select(`domReferenceElement`),i=m.select(`open`),o=k(r,n,e.target);if(a&&!Ou(y.pointerType))return;if(i&&o&&y.handleCloseOptions?.blockPointerEvents){let e=m.select(`floatingElement`);if(e){let t=y.handleCloseOptions?.getScope?.()??n.ownerDocument.body;Wh(y,{scopeElement:t,referenceElement:n,floatingElement:e})}}let s=Nf(C.current);if(i&&!o||s===0||!o&&y.restTimeoutPending&&e.movementX**2+e.movementY**2<2)return;y.restTimeout.clear();function c(){if(y.restTimeoutPending=!1,D())return;let e=m.select(`open`);!y.blockMouseMove&&(!e||o)&&O()&&m.setOpen(!0,_f(af,t,n))}y.pointerType===`touch`?Xd.flushSync(()=>{c()}):o&&i?c():(y.restTimeoutPending=!0,y.restTimeout.start(s,c))}}},[n,y,D,k,a,m,C,O])}var Yh=`Escape`;function Xh(e,t,n){switch(e){case`vertical`:return t;case`horizontal`:return n;default:return t||n}}function Zh(e,t){return Xh(t,e===`ArrowUp`||e===`ArrowDown`,e===`ArrowLeft`||e===`ArrowRight`)}function Qh(e,t,n){return Xh(t,e===`ArrowDown`,n?e===`ArrowLeft`:e===`ArrowRight`)||e===`Enter`||e===` `||e===``}function $h(e,t,n){return Xh(t,n?e===cu:e===lu,e===du)}function eg(e,t,n,r){return t===`both`||t===`horizontal`&&r?e===Yh:Xh(t,n?e===lu:e===cu,e===uu)}function tg(e,t){let{listRef:n,activeIndex:r,onNavigate:i=()=>{},enabled:a=!0,selectedIndex:o=null,allowEscape:s=!1,loopFocus:c=!1,nested:l=!1,rtl:u=!1,virtual:d=!1,focusItemOnOpen:f=`auto`,focusItemOnHover:p=!0,openOnArrowKeyDown:m=!0,disabledIndices:h=void 0,orientation:g=`vertical`,parentOrientation:v,id:y,resetOnPointerLeave:b=!0,externalTree:x,grid:S}=t,C=S!=null,w=`rootStore`in e?e.rootStore:e,T=w.useState(`open`),E=w.useState(`floatingElement`),D=w.useState(`domReferenceElement`),O=w.context.dataRef,k=xu(E),A=yu(D),j=Hf(k),M=xp(),N=Sp(x),P=_.useRef(f),F=_.useRef(o??-1),I=_.useRef(null),L=_.useRef(!0),R=q(e=>{i(F.current===-1?null:F.current,e)}),ee=_.useRef(!!E),te=_.useRef(T),z=_.useRef(!1),B=_.useRef(!1),V=_.useRef(null),H=Hf(h),U=Hf(T),ne=Hf(o),W=Hf(b),re=Wd(),ie=Wd(),ae=q(()=>{function e(e){d?N?.events.emit(`virtualfocus`,e):V.current=Yf(e,{sync:z.current,preventScroll:!0})}let t=n.current[F.current],r=B.current;t&&e(t),(z.current?e=>e():e=>re.request(e))(()=>{let i=n.current[F.current]||t;i&&(t||e(i),de&&(r||!L.current)&&i.scrollIntoView?.({block:`nearest`,inline:`nearest`}))})});J(()=>{O.current.orientation=g},[O,g]),J(()=>{a&&(T&&E?(F.current=o??-1,P.current&&o!=null&&(B.current=!0,R())):ee.current&&(F.current=-1,R()))},[a,T,E,o,R]),J(()=>{if(a){if(!T){z.current=!1;return}if(E)if(r==null){if(z.current=!1,ne.current!=null)return;if(ee.current&&(F.current=-1,ae()),(!te.current||!ee.current)&&P.current&&(I.current!=null||P.current===!0&&I.current==null)){let e=0,t=()=>{n.current[0]==null?(e<2&&(e?e=>ie.request(e):queueMicrotask)(t),e+=1):(F.current=I.current==null||Qh(I.current,g,u)||l?ad(n):od(n),I.current=null,R())};t()}}else id(n.current,r)||(F.current=r,ae(),B.current=!1)}},[a,T,E,r,ne,l,n,g,u,R,ae,ie]),J(()=>{if(!a||E||!N||d||!ee.current)return;let e=N.nodesRef.current,t=e.find(e=>e.id===M)?.context?.elements.floating,n=fu(Gl(D??t??null)),r=e.some(e=>e.context&&Q(e.context.elements.floating,n));t&&!r&&L.current&&t.focus({preventScroll:!0})},[a,E,D,N,M,d]),J(()=>{te.current=T,ee.current=!!E}),J(()=>{T||(I.current=null,P.current=f)},[T,f]);let oe=r!=null,se=q(e=>{if(!U.current)return;let t=n.current.indexOf(e.currentTarget);t!==-1&&(F.current!==t||r!==t)&&(F.current=t,R(e))}),ce=q(()=>v??N?.nodesRef.current.find(e=>e.id===M)?.context?.dataRef?.current.orientation),le=q(()=>ad(n,H.current)),ue=q(e=>{if(L.current=!1,z.current=!0,e.which===229||!U.current&&e.currentTarget===j.current)return;if(l&&eg(e.key,g,u,C)){Zh(e.key,ce())||wu(e),w.setOpen(!1,_f(ff,e.nativeEvent)),Oo(D)&&(d?N?.events.emit(`virtualfocus`,D):D.focus());return}let t=F.current,r=ad(n,h),i=od(n,h);if(A||(e.key===`Home`&&(wu(e),F.current=r,R(e)),e.key===`End`&&(wu(e),F.current=i,R(e))),S!=null){let t=S(e,F.current,n,g,c,u,h,r,i);if(t!=null&&(F.current=t,R(e)),g===`both`)return}if(Zh(e.key,g)){if(wu(e),T&&!d&&fu(e.currentTarget.ownerDocument)===e.currentTarget){F.current=Qh(e.key,g,u)?r:i,R(e);return}Qh(e.key,g,u)?c?t>=i?s&&t!==n.current.length?F.current=-1:(z.current=!1,F.current=r):F.current=sd(n.current,{startingIndex:t,disabledIndices:h}):F.current=Math.min(i,sd(n.current,{startingIndex:t,disabledIndices:h})):c?t<=r?s&&t!==-1?F.current=n.current.length:(z.current=!1,F.current=i):F.current=sd(n.current,{startingIndex:t,decrement:!0,disabledIndices:h}):F.current=Math.max(r,sd(n.current,{startingIndex:t,decrement:!0,disabledIndices:h})),id(n.current,F.current)&&(F.current=-1),R(e)}}),de=_.useMemo(()=>({onFocus(e){z.current=!0,se(e)},onClick:({currentTarget:e})=>e.focus({preventScroll:!0}),onMouseMove(e){z.current=!0,B.current=!1,p&&se(e)},onPointerLeave(e){if(!U.current||!L.current||e.pointerType===`touch`)return;z.current=!0;let t=e.relatedTarget;if(!(!p||n.current.includes(t))&&W.current&&(V.current?.(),V.current=null,F.current=-1,R(e),!d)){let e=j.current,t=fu(Gl(e));e&&Q(e,t)&&e.focus({preventScroll:!0})}}}),[se,U,j,p,n,R,W,d]),fe=_.useMemo(()=>d&&T&&oe&&{"aria-activedescendant":`${y}-${r}`},[d,T,oe,y,r]),pe=_.useMemo(()=>({"aria-orientation":g===`both`?void 0:g,...A?{}:fe,onKeyDown(e){if(e.key===`Tab`&&e.shiftKey&&T&&!d){let t=pu(e.nativeEvent);if(t&&!Q(j.current,t))return;wu(e),w.setOpen(!1,_f(uf,e.nativeEvent)),Oo(D)&&D.focus();return}ue(e)},onPointerMove(){L.current=!0}}),[fe,ue,j,g,A,w,T,d,D]),me=_.useMemo(()=>{function e(e){w.setOpen(!0,_f(ff,e.nativeEvent,e.currentTarget))}function t(e){f===`auto`&&Eu(e.nativeEvent)&&(P.current=!d)}function n(e){P.current=f,f===`auto`&&Du(e.nativeEvent)&&(P.current=!0)}return{onKeyDown(t){let n=w.select(`open`);L.current=!1;let r=t.key.startsWith(`Arrow`),i=$h(t.key,ce(),u),a=Zh(t.key,g),o=(l?i:a)||t.key===`Enter`||t.key.trim()===``;if(d&&n)return ue(t);if(!(!n&&!m&&r)){if(o){let e=Zh(t.key,ce());I.current=l&&e?null:t.key}if(l){i&&(wu(t),n?(F.current=le(),R(t)):e(t));return}a&&(ne.current!=null&&(F.current=ne.current),wu(t),!n&&m?e(t):ue(t),n&&R(t))}},onFocus(e){w.select(`open`)&&!d&&(F.current=-1,R(e))},onPointerDown:n,onPointerEnter:n,onMouseDown:t,onClick:t}},[ue,f,le,l,R,w,m,g,ce,u,ne,d]),he=_.useMemo(()=>({...fe,...me}),[fe,me]);return _.useMemo(()=>a?{reference:he,floating:pe,item:de,trigger:me}:{},[a,he,pe,me,de])}function ng(e,t){let{listRef:n,elementsRef:r,activeIndex:i,onMatch:a,disabledIndices:o,onTyping:s,enabled:c=!0,resetMs:l=750,selectedIndex:u=null}=t,d=`rootStore`in e?e.rootStore:e,f=d.useState(`open`),p=Bd(),m=_.useRef(``),h=_.useRef(u??i??-1),g=_.useRef(null),v=q(e=>{function t(e){let t=r?.current[e];return!t||ud(t)}function c(e){return t(e)?o==null||!cd(Ps,e,o):!1}function d(e,t,n=0){if(e.length===0)return-1;let r=(n%e.length+e.length)%e.length,i=t.toLowerCase();for(let t=0;t<e.length;t+=1){let n=(r+t)%e.length;if(!(!e[n]?.toLowerCase().startsWith(i)||!c(n)))return n}return-1}let _=n.current;if(m.current.length>0&&e.key===` `&&(wu(e),s?.(!0)),m.current.length>0&&m.current[0]!==` `&&d(_,m.current)===-1&&e.key!==` `&&s?.(!1),_==null||e.key.length!==1||e.ctrlKey||e.metaKey||e.altKey)return;f&&e.key!==` `&&(wu(e),s?.(!0));let v=m.current===``;v&&(h.current=u??i??-1),_.every((e,t)=>e&&c(t)?e[0]?.toLowerCase()!==e[1]?.toLowerCase():!0)&&m.current===e.key&&(m.current=``,h.current=g.current),m.current+=e.key,p.start(l,()=>{m.current=``,h.current=g.current,s?.(!1)});let y=((v?u??i??-1:h.current)??0)+1,b=d(_,m.current,y);b===-1?e.key!==` `&&(m.current=``,s?.(!1)):(a?.(b),g.current=b)}),y=q(e=>{let t=e.relatedTarget,n=d.select(`domReferenceElement`),r=d.select(`floatingElement`);Q(n,t)||Q(r,t)||(p.clear(),m.current=``,h.current=g.current,s?.(!1))});J(()=>{!f&&u!==null||(p.clear(),g.current=null,m.current!==``&&(m.current=``))},[f,u,p]),J(()=>{f&&m.current===``&&(h.current=u??i??-1)},[f,u,i]);let b=_.useMemo(()=>({onKeyDown:v,onBlur:y}),[v,y]);return _.useMemo(()=>c?{reference:b,floating:b}:{},[c,b])}var rg=.1,ig=rg*rg,ag=.5;function og(e,t,n,r,i,a){return r>=t!=a>=t&&e<=(i-n)*(t-r)/(a-r)+n}function sg(e,t,n,r,i,a,o,s,c,l){let u=!1;return og(e,t,n,r,i,a)&&(u=!u),og(e,t,i,a,o,s)&&(u=!u),og(e,t,o,s,c,l)&&(u=!u),og(e,t,c,l,n,r)&&(u=!u),u}function cg(e,t,n){return e>=n.x&&e<=n.x+n.width&&t>=n.y&&t<=n.y+n.height}function lg(e,t,n,r,i,a){return e>=Math.min(n,i)&&e<=Math.max(n,i)&&t>=Math.min(r,a)&&t<=Math.max(r,a)}function ug(e={}){let{blockPointerEvents:t=!1}=e,n=new zd,r=({x:e,y:t,placement:r,elements:i,onClose:a,nodeId:o,tree:s})=>{let c=r?.split(`-`)[0],l=!1,u=null,d=null,f=typeof performance<`u`?performance.now():0;function p(e,t){let n=performance.now(),r=n-f;if(u===null||d===null||r===0)return u=e,d=t,f=n,!1;let i=e-u,a=t-d,o=i*i+a*a,s=r*r*ig;return u=e,d=t,f=n,o<s}function m(){n.clear(),a()}return function(r){n.clear();let a=i.domReference,u=i.floating;if(!a||!u||c==null||e==null||t==null)return;let{clientX:d,clientY:f}=r,h=pu(r),g=r.type===`mouseleave`,_=Q(u,h),v=Q(a,h);if(_&&(l=!0,!g))return;if(v&&(l=!1,!g)){l=!0;return}if(g&&K(r.relatedTarget)&&Q(u,r.relatedTarget))return;function y(){return!!(s&&Su(s.nodesRef.current,o).length>0)}function b(){y()||m()}if(y())return;let x=a.getBoundingClientRect(),S=u.getBoundingClientRect(),C=e>S.right-S.width/2,w=t>S.bottom-S.height/2,T=S.width>x.width,E=S.height>x.height,D=(T?x:S).left,O=(T?x:S).right,k=(E?x:S).top,A=(E?x:S).bottom;if(c===`top`&&t>=x.bottom-1||c===`bottom`&&t<=x.top+1||c===`left`&&e>=x.right-1||c===`right`&&e<=x.left+1){b();return}let j=!1;switch(c){case`top`:j=lg(d,f,D,x.top+1,O,S.bottom-1);break;case`bottom`:j=lg(d,f,D,S.top+1,O,x.bottom-1);break;case`left`:j=lg(d,f,S.right-1,A,x.left+1,k);break;case`right`:j=lg(d,f,x.right-1,A,S.left+1,k);break;default:}if(j)return;if(l&&!cg(d,f,x)){b();return}if(!g&&p(d,f)){b();return}let M=!1;switch(c){case`top`:{let n=T?ag/2:ag*4,r=T||C?e+n:e-n,i=T?e-n:C?e+n:e-n,a=t+ag+1,o=C||T?S.bottom-ag:S.top,s=C?T?S.bottom-ag:S.top:S.bottom-ag;M=sg(d,f,r,a,i,a,S.left,o,S.right,s);break}case`bottom`:{let n=T?ag/2:ag*4,r=T||C?e+n:e-n,i=T?e-n:C?e+n:e-n,a=t-ag,o=C||T?S.top+ag:S.bottom,s=C?T?S.top+ag:S.bottom:S.top+ag;M=sg(d,f,r,a,i,a,S.left,o,S.right,s);break}case`left`:{let n=E?ag/2:ag*4,r=E||w?t+n:t-n,i=E?t-n:w?t+n:t-n,a=e+ag+1,o=w||E?S.right-ag:S.left,s=w?E?S.right-ag:S.left:S.right-ag;M=sg(d,f,o,S.top,s,S.bottom,a,r,a,i);break}case`right`:{let n=E?ag/2:ag*4,r=E||w?t+n:t-n,i=E?t-n:w?t+n:t-n,a=e-ag,o=w||E?S.left+ag:S.right,s=w?E?S.left+ag:S.right:S.left+ag;M=sg(d,f,a,r,a,i,o,S.top,s,S.bottom);break}default:}M?l||n.start(40,b):b()}};return r.__options={...e,blockPointerEvents:t},r}var dg={...Ih,disabled:$(e=>e.disabled),instantType:$(e=>e.instantType),isInstantPhase:$(e=>e.isInstantPhase),trackCursorAxis:$(e=>e.trackCursorAxis),disableHoverablePopup:$(e=>e.disableHoverablePopup),lastOpenChangeReason:$(e=>e.openChangeReason),closeOnClick:$(e=>e.closeOnClick),closeDelay:$(e=>e.closeDelay),hasViewport:$(e=>e.hasViewport)},fg=class e extends uh{constructor(e,t,n=!1){let r=new Dh,i={...pg(),...e};i.floatingRootContext=Ah(r,t,n),super(i,{popupRef:_.createRef(),onOpenChange:void 0,onOpenChangeComplete:void 0,triggerElements:r},dg)}setOpen=(e,t)=>{bh(this,e,t,{extraState:{openChangeReason:t.reason}})};cancelPendingOpen(e){this.state.floatingRootContext.dispatchOpenChange(!1,_f(rf,e))}static useStore(t,n){return gh(t,(t,r)=>new e(n,t,r)).store}};function pg(){return{...kh(),disabled:!1,instantType:void 0,isInstantPhase:!1,trackCursorAxis:`none`,disableHoverablePopup:!1,openChangeReason:null,closeOnClick:!0,closeDelay:0,hasViewport:!1}}var mg=Ef(function(e){let{disabled:t=!1,defaultOpen:n=!1,open:r,disableHoverablePopup:i=!1,trackCursorAxis:a=`none`,actionsRef:o,onOpenChange:s,onOpenChangeComplete:c,handle:l,triggerId:u,defaultTriggerId:d=null,children:f}=e,p=fg.useStore(l?.store,{open:n,openProp:r,activeTriggerId:d,triggerIdProp:u});xh(p,r,n,d),p.useControlledProp(`openProp`,r),p.useControlledProp(`triggerIdProp`,u),p.useContextCallback(`onOpenChange`,s),p.useContextCallback(`onOpenChangeComplete`,c);let m=p.useState(`open`),h=!t&&m,g=p.useState(`activeTriggerId`),v=p.useState(`mounted`),y=p.useState(`payload`);p.useSyncedValues({trackCursorAxis:a,disableHoverablePopup:i}),p.useSyncedValue(`disabled`,t),Ch(p,{closeOnActiveTriggerUnmount:!0});let{forceUnmount:b,transitionStatus:x}=wh(h,p),S=p.useState(`isInstantPhase`),C=p.useState(`instantType`),w=p.useState(`lastOpenChangeReason`),T=_.useRef(null);J(()=>{m&&t&&p.setOpen(!1,_f(hf))},[m,t,p]),J(()=>{x===`ending`&&w===`none`||x!==`ending`&&S?(C!==`delay`&&(T.current=C),p.set(`instantType`,`delay`)):T.current!==null&&(p.set(`instantType`,T.current),T.current=null)},[x,S,w,C,p]),J(()=>{h&&(g??p.set(`payload`,void 0))},[p,g,h]);let E=_.useCallback(()=>{p.setOpen(!1,_f(gf))},[p]);_.useImperativeHandle(o,()=>({unmount:b,close:E}),[b,E]);let D=h||v||!t&&a!==`none`;return(0,G.jsxs)(kf.Provider,{value:p,children:[D&&(0,G.jsx)(hg,{store:p,disabled:t,trackCursorAxis:a}),typeof f==`function`?f({payload:y}):f]})});function hg({store:e,disabled:t,trackCursorAxis:n}){let r=e.useState(`floatingRootContext`),i=Vp(r,{enabled:!t,referencePress:()=>e.select(`closeOnClick`)}),a=Rp(r,{enabled:!t&&n!==`none`,axis:n===`none`?void 0:n});return Th(e,{activeTriggerProps:_.useMemo(()=>ns(a.reference,i.reference),[a.reference,i.reference]),inactiveTriggerProps:_.useMemo(()=>ns(a.trigger,i.trigger),[a.trigger,i.trigger]),popupProps:_.useMemo(()=>ns(mh,a.floating,i.floating),[a.floating,i.floating])}),null}var gg=function(e){return e.open=`data-open`,e.closed=`data-closed`,e[e.startingStyle=Kd.startingStyle]=`startingStyle`,e[e.endingStyle=Kd.endingStyle]=`endingStyle`,e.anchorHidden=`data-anchor-hidden`,e.side=`data-side`,e.align=`data-align`,e}({}),_g=function(e){return e.popupOpen=`data-popup-open`,e.pressed=`data-pressed`,e}({}),vg={[_g.popupOpen]:``},yg={[_g.popupOpen]:``,[_g.pressed]:``},bg={[gg.open]:``},xg={[gg.closed]:``},Sg={[gg.anchorHidden]:``},Cg={open(e){return e?vg:null}},wg={open(e){return e?yg:null}},Tg={open(e){return e?bg:xg},anchorHidden(e){return e?Sg:null}},Eg=_.createContext(void 0);function Dg(){return _.useContext(Eg)}var Og=function(e){return e[e.popupOpen=_g.popupOpen]=`popupOpen`,e.triggerDisabled=`data-trigger-disabled`,e}({}),kg=`data-base-ui-tooltip-trigger`;function Ag(e){if(`composedPath`in e){let t=e.composedPath();for(let e=0;e<t.length;e+=1){let n=t[e];if(K(n))return n}}let t=e.target;return K(t)?t:null}function jg(e){let t=e;for(;t;){if(t.hasAttribute(kg))return t;let e=t.parentElement;if(e){t=e;continue}let n=t.getRootNode();t=`host`in n&&K(n.host)?n.host:null}return null}var Mg=Df(function(e,t){let{render:n,className:r,style:i,handle:a,payload:o,disabled:s,delay:c,closeOnClick:l=!0,closeDelay:u,id:d,...f}=e,p=Af(!0),m=a?.store??p;if(!m)throw Error(_s(82));let h=Vl(d),g=m.useState(`isTriggerActive`,h),v=m.useState(`isOpenedByTrigger`,h),y=m.useState(`floatingRootContext`),b=_.useRef(null),x=c??600,S=u??0,{registerTrigger:C,isMountedByThisTrigger:w}=Sh(h,b,m,{payload:o,closeOnClick:l,closeDelay:S}),T=Dg(),{delayRef:E,isInstantPhase:D,hasProvider:O}=zf(y,{open:v}),k=Gh(y);m.useSyncedValue(`isInstantPhase`,D);let A=m.useState(`disabled`),j=s??A,M=Hf(j),N=m.useState(`trackCursorAxis`),P=m.useState(`disableHoverablePopup`),F=_.useRef(!1),I=Bd(),L=_.useRef(void 0);function R(){let e=T?.delay,t=typeof E.current==`object`?E.current.open:void 0,n=x;return O&&(n=t===0?0:c??e??x),n}function ee(e){let t=b.current;if(!t||!e)return!1;let n=jg(e);return n!==null&&n!==t&&Q(t,n)}function te(e){let t=ee(e);return F.current=t,t&&(k.openChangeTimeout.clear(),k.restTimeout.clear(),k.restTimeoutPending=!1,I.clear()),t}let z=Jh(y,{enabled:!j,mouseOnly:!0,move:!1,handleClose:!P&&N!==`both`?ug():null,restMs:R,delay(){let e=typeof E.current==`object`?E.current.close:void 0,t=S;return u==null&&O&&(t=e),{close:t}},triggerElementRef:b,isActiveTrigger:g,isClosing:()=>m.select(`transitionStatus`)===`ending`,shouldOpen(){return!F.current}}),B=Bh(y,{enabled:!j}).reference,V=e=>{let t=F.current,n=Ag(e),r=te(n),i=b.current,a=i&&n&&Q(i,n);if(r&&m.select(`open`)&&m.select(`lastOpenChangeReason`)===`trigger-hover`){m.setOpen(!1,_f(af,e));return}if(t&&!r&&a&&!M.current&&!m.select(`open`)&&i&&Ou(L.current)){let t=()=>{!F.current&&!M.current&&!m.select(`open`)&&m.setOpen(!0,_f(af,e,i))},n=R();n===0?(I.clear(),t()):I.start(n,t)}},H=m.useState(`triggerProps`,w);return zs(`button`,e,{state:{open:v},ref:[t,C,b],props:[z,B,w||N!==`none`?H:void 0,{onMouseOver(e){V(e.nativeEvent)},onFocus(e){ee(Ag(e.nativeEvent))&&e.preventBaseUIHandler()},onMouseLeave(){F.current=!1,I.clear(),L.current=void 0},onPointerEnter(e){L.current=e.pointerType},onPointerDown(e){L.current=e.pointerType,m.set(`closeOnClick`,l),l&&!m.select(`open`)&&m.cancelPendingOpen(e.nativeEvent)},onClick(e){l&&!m.select(`open`)&&m.cancelPendingOpen(e.nativeEvent)},id:h,[Og.triggerDisabled]:j?``:void 0,[kg]:j?void 0:``},f],stateAttributesMapping:Cg})}),Ng=_.createContext(void 0);function Pg(){let e=_.useContext(Ng);if(e===void 0)throw Error(_s(70));return e}var Fg=_.forwardRef(function(e,t){let{children:n,container:r,className:i,render:a,style:o,...s}=e,{portalNode:c,portalSubtree:l}=hp({container:r,ref:t,componentProps:e,elementProps:s});return!l&&!c?null:(0,G.jsxs)(_.Fragment,{children:[l,c&&Xd.createPortal(n,c)]})}),Ig=_.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e;return Af().useState(`mounted`)||n?(0,G.jsx)(Ng.Provider,{value:n,children:(0,G.jsx)(Fg,{ref:t,...r})}):null}),Lg=_.createContext(void 0);function Rg(){let e=_.useContext(Lg);if(e===void 0)throw Error(_s(71));return e}var zg=_.createContext(void 0);function Bg(){return _.useContext(zg)?.direction??`ltr`}var Vg=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0,offsetParent:d=`real`}=Ru(e,t)||{};if(l==null)return{};let f=nd(u),p={x:n,y:r},m=Wu(i),h=Hu(m),g=await o.getDimensions(l),_=m===`y`,v=_?`top`:`left`,y=_?`bottom`:`right`,b=_?`clientHeight`:`clientWidth`,x=a.reference[h]+a.reference[m]-p[m]-a.floating[h],S=p[m]-a.reference[m],C=d===`real`?await o.getOffsetParent?.(l):s.floating,w=s.floating[b]||a.floating[h];(!w||!await o.isElement?.(C))&&(w=s.floating[b]||a.floating[h]);let T=x/2-S/2,E=w/2-g[h]/2-1,D=Math.min(f[v],E),O=Math.min(f[y],E),k=D,A=w-g[h]-O,j=w/2-g[h]/2+T,M=Lu(k,j,A),N=!c.arrow&&Bu(i)!=null&&j!==M&&a.reference[h]/2-(j<k?D:O)-g[h]/2<0,P=N?j<k?j-k:j-A:0;return{[m]:p[m]+P,data:{[m]:M,centerOffset:j-M-P,...N&&{alignmentOffset:P}},reset:N}}}),Hg=(e,t)=>({...Vg(e),options:[e,t]}),Ug=Xm().fn,Wg={name:`hide`,async fn(e){let{width:t,height:n,x:r,y:i}=e.rects.reference,a=t===0&&n===0&&r===0&&i===0;return{data:{referenceHidden:(await Ug(e)).data?.referenceHidden||a}}}},Gg={sideX:`left`,sideY:`top`},Kg={name:`adaptiveOrigin`,async fn(e){let{x:t,y:n,rects:{floating:r},elements:{floating:i},platform:a,strategy:o,placement:s}=e,c=To(i),l=c.getComputedStyle(i);if(!(l.transitionDuration!==`0s`&&l.transitionDuration!==``))return{x:t,y:n,data:Gg};let u=await a.getOffsetParent?.(i),d={width:0,height:0};if(o===`fixed`&&c?.visualViewport)d={width:c.visualViewport.width,height:c.visualViewport.height};else if(u===c){let e=Gl(i);d={width:e.documentElement.clientWidth,height:e.documentElement.clientHeight}}else await a.isElement?.(u)&&(d=await a.getDimensions(u));let f=zu(s),p=t,m=n;f===`left`&&(p=d.width-(t+r.width)),f===`top`&&(m=d.height-(n+r.height));let h=f===`left`?`right`:Gg.sideX,g=f===`top`?`bottom`:Gg.sideY;return{x:p,y:m,data:{sideX:h,sideY:g}}}};function qg(e,t,n){let r=e===`inline-start`||e===`inline-end`;return{top:`top`,right:r?n?`inline-start`:`inline-end`:`right`,bottom:`bottom`,left:r?n?`inline-end`:`inline-start`:`left`}[t]}function Jg(e,t,n){let{rects:r,placement:i}=e;return{side:qg(t,zu(i),n),align:Bu(i)||`center`,anchor:{width:r.reference.width,height:r.reference.height},positioner:{width:r.floating.width,height:r.floating.height}}}function Yg(e){let{anchor:t,positionMethod:n=`absolute`,side:r=`bottom`,sideOffset:i=0,align:a=`center`,alignOffset:o=0,collisionBoundary:s,collisionPadding:c=5,sticky:l=!1,arrowPadding:u=5,disableAnchorTracking:d=!1,inline:f,keepMounted:p=!1,floatingRootContext:m,mounted:h,collisionAvoidance:g,shiftCrossAxis:v=!1,nodeId:y,adaptiveOrigin:b,lazyFlip:x=!1,externalTree:S}=e,[C,w]=_.useState(null);!h&&C!==null&&w(null);let T=g.side||`flip`,E=g.align||`flip`,D=g.fallbackAxisSide||`end`,O=typeof t==`function`?t:void 0,k=q(O),A=O?k:t,j=Hf(t),M=Hf(h),N=Bg()===`rtl`,P=C||{top:`top`,right:`right`,bottom:`bottom`,left:`left`,"inline-end":N?`left`:`right`,"inline-start":N?`right`:`left`}[r],F=a===`center`?P:`${P}-${a}`,I=c,L=+(r===`bottom`),R=+(r===`top`),ee=+(r===`right`),te=+(r===`left`);typeof I==`number`?I={top:I+L,right:I+te,bottom:I+R,left:I+ee}:I&&={top:(I.top||0)+L,right:(I.right||0)+te,bottom:(I.bottom||0)+R,left:(I.left||0)+ee};let z={boundary:s===`clipping-ancestors`?`clippingAncestors`:s,padding:I},B=_.useRef(null),V=Hf(i),H=Hf(o),U=typeof i==`function`?0:i,ne=typeof o==`function`?0:o,W=[];f&&W.push(f),W.push(Gm(e=>{let t=Jg(e,r,N),n=typeof V.current==`function`?V.current(t):V.current,i=typeof H.current==`function`?H.current(t):H.current;return{mainAxis:n,crossAxis:i,alignmentAxis:i}},[U,ne,N,r]));let re=E===`none`&&T!==`shift`,ie=!re&&(l||v||T===`shift`),ae=T===`none`?null:Jm({...z,padding:{top:I.top+1,right:I.right+1,bottom:I.bottom+1,left:I.left+1},mainAxis:!v&&T===`flip`,crossAxis:E===`flip`?`alignment`:!1,fallbackAxisSideDirection:D}),oe=re?null:Km(e=>{let t=Gl(e.elements.floating).documentElement;return{...z,rootBoundary:v?{x:0,y:0,width:t.clientWidth,height:t.clientHeight}:void 0,mainAxis:E!==`none`,crossAxis:ie,limiter:l||v?void 0:qm(e=>{if(!B.current)return{};let{width:t,height:n}=B.current.getBoundingClientRect(),r=Uu(zu(e.placement)),i=r===`y`?t:n,a=r===`y`?I.left+I.right:I.top+I.bottom;return{offset:i/2+a/2}})}},[z,l,v,I,E]);T===`shift`||E===`shift`||a===`center`?W.push(oe,ae):W.push(ae,oe),W.push(Ym({...z,apply({elements:{floating:e},availableWidth:t,availableHeight:n,rects:r}){if(!M.current)return;let i=e.style;i.setProperty(`--available-width`,`${t}px`),i.setProperty(`--available-height`,`${n}px`);let a=To(e).devicePixelRatio||1,{x:o,y:s,width:c,height:l}=r.reference,u=(Math.round((o+c)*a)-Math.round(o*a))/a,d=(Math.round((s+l)*a)-Math.round(s*a))/a;i.setProperty(`--anchor-width`,`${u}px`),i.setProperty(`--anchor-height`,`${d}px`)}}),Hg(e=>({element:B.current||Gl(e.elements.floating).createElement(`div`),padding:u,offsetParent:`floating`}),[u]),{name:`transformOrigin`,fn(e){let{elements:t,middlewareData:n,placement:a,rects:o,y:s}=e,c=zu(a),l=Uu(c),u=B.current,d=n.arrow?.x||0,f=n.arrow?.y||0,p=u?.clientWidth||0,m=u?.clientHeight||0,h=d+p/2,g=f+m/2,_=Math.abs(n.shift?.y||0),v=o.reference.height/2,y=typeof i==`function`?i(Jg(e,r,N)):i,b=_>y,x={top:`${h}px calc(100% + ${y}px)`,bottom:`${h}px ${-y}px`,left:`calc(100% + ${y}px) ${g}px`,right:`${-y}px ${g}px`}[c],S=`${h}px ${o.reference.y+v-s}px`;return t.floating.style.setProperty(`--transform-origin`,ie&&l===`y`&&b?S:x),{}}},Wg,b),J(()=>{!h&&m&&m.update({referenceElement:null,floatingElement:null,domReferenceElement:null,positionReference:null})},[h,m]);let se=_.useMemo(()=>({elementResize:!d&&typeof ResizeObserver<`u`,layoutShift:!d&&typeof IntersectionObserver<`u`}),[d]),{refs:ce,elements:le,x:ue,y:de,middlewareData:fe,update:pe,placement:me,context:he,isPositioned:ge,floatingStyles:_e}=Rh({rootContext:m,open:p?h:void 0,placement:F,middleware:W,strategy:n,whileElementsMounted:p?void 0:(...e)=>jm(...e,se),nodeId:y,externalTree:S}),{sideX:ve,sideY:ye}=fe.adaptiveOrigin||Gg,be=ge?n:`fixed`,xe=_.useMemo(()=>{let e=b?{position:be,[ve]:ue,[ye]:de}:{position:be,..._e};return ge||(e.opacity=0),e},[b,be,ve,ue,ye,de,_e,ge]),Se=_.useRef(null);J(()=>{if(!h)return;let e=j.current,t=typeof e==`function`?e():e,n=(Xg(t)?t.current:t)||null;n!==Se.current&&(ce.setPositionReference(n),Se.current=n)},[h,ce,A,j]),_.useEffect(()=>{if(!h)return;let e=j.current;typeof e!=`function`&&Xg(e)&&e.current!==Se.current&&(ce.setPositionReference(e.current),Se.current=e.current)},[h,ce,A,j]),_.useEffect(()=>{if(p&&h&&le.reference&&le.floating)return jm(le.reference,le.floating,pe,se)},[p,h,le,pe,se]);let Ce=zu(me),we=qg(r,Ce,N),Te=Bu(me)||`center`,Ee=!!fe.hide?.referenceHidden;J(()=>{x&&h&&ge&&w(Ce)},[x,h,ge,Ce]);let De=_.useMemo(()=>({position:`absolute`,top:fe.arrow?.y,left:fe.arrow?.x}),[fe.arrow]),Oe=fe.arrow?.centerOffset!==0;return _.useMemo(()=>({positionerStyles:xe,arrowStyles:De,arrowRef:B,arrowUncentered:Oe,side:we,align:Te,physicalSide:Ce,anchorHidden:Ee,refs:ce,context:he,isPositioned:ge,update:pe}),[xe,De,B,Oe,we,Te,Ce,Ee,ce,he,ge,pe])}function Xg(e){return e!=null&&`current`in e}function Zg(e){return e===`starting`?cp:Fs}function Qg(e,t,{styles:n,transitionStatus:r,props:i,refs:a,hidden:o,inert:s=!1}){let c={...n};return s&&(c.pointerEvents=`none`),zs(`div`,e,{state:t,ref:a,props:[{role:`presentation`,hidden:o,style:c},Zg(r),i],stateAttributesMapping:Tg})}var $g=_.forwardRef(function(e,t){let{render:n,className:r,anchor:i,positionMethod:a=`absolute`,side:o=`top`,align:s=`center`,sideOffset:c=0,alignOffset:l=0,collisionBoundary:u=`clipping-ancestors`,collisionPadding:d=5,arrowPadding:f=5,sticky:p=!1,disableAnchorTracking:m=!1,collisionAvoidance:h=up,style:g,...v}=e,y=Af(),b=Pg(),x=y.useState(`open`),S=y.useState(`mounted`),C=y.useState(`trackCursorAxis`),w=y.useState(`disableHoverablePopup`),T=y.useState(`floatingRootContext`),E=y.useState(`instantType`),D=y.useState(`transitionStatus`),O=Yg({anchor:i,positionMethod:a,floatingRootContext:T,mounted:S,side:o,sideOffset:c,align:s,alignOffset:l,collisionBoundary:u,collisionPadding:d,sticky:p,arrowPadding:f,disableAnchorTracking:m,keepMounted:b,collisionAvoidance:h,adaptiveOrigin:y.useState(`hasViewport`)?Kg:void 0}),k=Qg(e,_.useMemo(()=>({open:x,side:O.side,align:O.align,anchorHidden:O.anchorHidden,instant:C===`none`?E:`tracking-cursor`}),[x,O.side,O.align,O.anchorHidden,C,E]),{styles:O.positionerStyles,transitionStatus:D,props:v,refs:[t,y.useStateSetter(`positionerElement`)],hidden:!S,inert:!x||C===`both`||w});return(0,G.jsx)(Lg.Provider,{value:O,children:k})}),e_={...Tg,...Yd},t_=_.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=Af(),{side:s,align:c}=Rg(),l=o.useState(`open`),u=o.useState(`instantType`),d=o.useState(`transitionStatus`),f=o.useState(`popupProps`),p=o.useState(`floatingRootContext`),m=o.useState(`disabled`),h=o.useState(`closeDelay`);Qd({open:l,ref:o.context.popupRef,onComplete(){l&&o.context.onOpenChangeComplete?.(!0)}}),Kh(p,{enabled:!m,closeDelay:h});let g=o.useStateSetter(`popupElement`);return zs(`div`,e,{state:{open:l,side:s,align:c,instant:u,transitionStatus:d},ref:[t,o.context.popupRef,g],props:[f,Zg(d),a],stateAttributesMapping:e_})}),n_=_.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=Af(),{arrowRef:s,side:c,align:l,arrowUncentered:u,arrowStyles:d}=Rg();return zs(`div`,e,{state:{open:o.useState(`open`),side:c,align:l,uncentered:u,instant:o.useState(`instantType`)},ref:[t,s],props:[{style:d,"aria-hidden":!0},a],stateAttributesMapping:Tg})}),r_=function(e){let{delay:t,closeDelay:n,timeout:r=400}=e,i=_.useMemo(()=>({delay:t,closeDelay:n}),[t,n]),a=_.useMemo(()=>({open:t,close:n}),[t,n]);return(0,G.jsx)(Eg.Provider,{value:i,children:(0,G.jsx)(Rf,{delay:a,timeoutMs:r,children:e.children})})};function i_(e){return js(19)?e:e?`true`:void 0}function a_(e){let t=(0,b.c)(6),n,r;t[0]===e?(n=t[1],r=t[2]):({delay:r,...n}=e,t[0]=e,t[1]=n,t[2]=r);let i=r===void 0?0:r,a;return t[3]!==i||t[4]!==n?(a=(0,G.jsx)(r_,{"data-slot":`tooltip-provider`,delay:i,...n}),t[3]=i,t[4]=n,t[5]=a):a=t[5],a}function o_(e){let t=(0,b.c)(4),n;t[0]===e?n=t[1]:({...n}=e,t[0]=e,t[1]=n);let r;return t[2]===n?r=t[3]:(r=(0,G.jsx)(mg,{"data-slot":`tooltip`,...n}),t[2]=n,t[3]=r),r}function s_(e){let t=(0,b.c)(4),n;t[0]===e?n=t[1]:({...n}=e,t[0]=e,t[1]=n);let r;return t[2]===n?r=t[3]:(r=(0,G.jsx)(Mg,{"data-slot":`tooltip-trigger`,...n}),t[2]=n,t[3]=r),r}function c_(e){let t=(0,b.c)(21),n,r,i,a,o,s,c;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7]):({className:r,side:a,sideOffset:o,align:s,alignOffset:c,children:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=c);let l=a===void 0?`top`:a,u=o===void 0?4:o,d=s===void 0?`center`:s,f=c===void 0?0:c,p;t[8]===r?p=t[9]:(p=yl(`z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-lg data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,r),t[8]=r,t[9]=p);let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,G.jsx)(n_,{className:`z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:translate-x-[1.5px] data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:translate-x-[-1.5px] data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:translate-x-[-1.5px] data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:translate-x-[1.5px] data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5`}),t[10]=m):m=t[10];let h;t[11]!==n||t[12]!==i||t[13]!==p?(h=(0,G.jsxs)(t_,{"data-slot":`tooltip-content`,className:p,...i,children:[n,m]}),t[11]=n,t[12]=i,t[13]=p,t[14]=h):h=t[14];let g;return t[15]!==d||t[16]!==f||t[17]!==l||t[18]!==u||t[19]!==h?(g=(0,G.jsx)(Ig,{children:(0,G.jsx)($g,{align:d,alignOffset:f,side:l,sideOffset:u,className:`isolate z-50`,children:h})}),t[15]=d,t[16]=f,t[17]=l,t[18]=u,t[19]=h,t[20]=g):g=t[20],g}var l_=_.createContext(!1),u_=_.createContext(void 0);function d_(e){let t=_.useContext(u_);if(e===!1&&t===void 0)throw Error(_s(27));return t}var f_={...Tg,...Yd},p_=_.forwardRef(function(e,t){let{render:n,className:r,style:i,forceRender:a=!1,...o}=e,{store:s}=d_(),c=s.useState(`open`),l=s.useState(`nested`),u=s.useState(`mounted`);return zs(`div`,e,{state:{open:c,transitionStatus:s.useState(`transitionStatus`)},ref:[s.context.backdropRef,t],stateAttributesMapping:f_,props:[{role:`presentation`,hidden:!u,style:{userSelect:`none`,WebkitUserSelect:`none`}},o],enabled:a||!l})}),m_=_.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,...s}=e,{store:c}=d_(),l=c.useState(`open`),{getButtonProps:u,buttonRef:d}=xs({disabled:a,native:o}),f={disabled:a};function p(e){l&&c.setOpen(!1,_f(lf,e.nativeEvent))}return zs(`button`,e,{state:f,ref:[t,d],props:[{onClick:p},s,u]})}),h_=_.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,{store:s}=d_(),c=Vl(a);return s.useSyncedValueWithCleanup(`descriptionElementId`,c),zs(`p`,e,{ref:t,props:[{id:c},o]})}),g_=function(e){return e.nestedDialogs=`--nested-dialogs`,e}({}),__=function(e){return e[e.open=gg.open]=`open`,e[e.closed=gg.closed]=`closed`,e[e.startingStyle=gg.startingStyle]=`startingStyle`,e[e.endingStyle=gg.endingStyle]=`endingStyle`,e.nested=`data-nested`,e.nestedDialogOpen=`data-nested-dialog-open`,e}({}),v_=_.createContext(void 0);function y_(){let e=_.useContext(v_);if(e===void 0)throw Error(_s(26));return e}var b_=`ArrowUp`,x_=`ArrowDown`,S_=`ArrowLeft`,C_=`ArrowRight`,w_=`Home`,T_=new Set([S_,C_]),E_=new Set([b_,x_]),D_=new Set([...T_,...E_]),O_=new Set([...D_,w_,`End`]),k_={...Tg,...Yd,nestedDialogOpen(e){return e?{[__.nestedDialogOpen]:``}:null}},A_=_.forwardRef(function(e,t){let{render:n,className:r,style:i,finalFocus:a,initialFocus:o,...s}=e,{store:c}=d_(),l=c.useState(`descriptionElementId`),u=c.useState(`disablePointerDismissal`),d=c.useState(`floatingRootContext`),f=c.useState(`popupProps`),p=c.useState(`modal`),m=c.useState(`mounted`),h=c.useState(`nested`),g=c.useState(`nestedOpenDialogCount`),_=c.useState(`open`),v=c.useState(`openMethod`),y=c.useState(`titleElementId`),b=c.useState(`transitionStatus`),x=c.useState(`role`),S=d.useState(`floatingId`),C=s.id??S;y_(),Qd({open:_,ref:c.context.popupRef,onComplete(){_&&c.context.onOpenChangeComplete?.(!0)}});let w=o===void 0?hh(c.context.popupRef):o,T=g>0,E=c.useStateSetter(`popupElement`),D=zs(`div`,e,{state:{open:_,nested:h,transitionStatus:b,nestedDialogOpen:T},props:[f,{id:C,"aria-labelledby":y??void 0,"aria-describedby":l??void 0,role:x,...mh,hidden:!m,onKeyDown(e){O_.has(e.key)&&e.stopPropagation()},style:{[g_.nestedDialogs]:g}},s],ref:[t,c.context.popupRef,E],stateAttributesMapping:k_});return(0,G.jsx)(Pp,{context:d,openInteractionType:v,disabled:!m,closeOnFocusOut:!u,initialFocus:w,returnFocus:a,modal:p!==!1,restoreFocus:`popup`,children:D})}),j_=_.forwardRef(function(e,t){let{cutout:n,...r}=e,i;if(n){let e=n.getBoundingClientRect();i=`polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`}return(0,G.jsx)(`div`,{ref:t,role:`presentation`,"data-base-ui-inert":``,...r,style:{position:`fixed`,inset:0,userSelect:`none`,WebkitUserSelect:`none`,clipPath:i}})}),M_=_.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,{store:i}=d_(),a=i.useState(`mounted`),o=i.useState(`modal`),s=i.useState(`open`);return a||n?(0,G.jsx)(v_.Provider,{value:n,children:(0,G.jsxs)(gp,{ref:t,...r,children:[a&&o===!0&&(0,G.jsx)(j_,{ref:i.context.internalBackdropRef,inert:i_(!s)}),e.children]})}):null}),N_={},P_={},F_=``;function I_(e){if(typeof document>`u`)return!1;let t=Gl(e);return To(t).innerWidth-t.documentElement.clientWidth>0}function L_(e){if(!(typeof CSS<`u`&&CSS.supports&&CSS.supports(`scrollbar-gutter`,`stable`))||typeof document>`u`)return!1;let t=Gl(e),n=t.documentElement,r=t.body,i=Ao(n)?n:r,a=i.style.overflowY,o=n.style.scrollbarGutter;n.style.scrollbarGutter=`stable`,i.style.overflowY=`scroll`;let s=i.offsetWidth;i.style.overflowY=`hidden`;let c=i.offsetWidth;return i.style.overflowY=a,n.style.scrollbarGutter=o,s===c}function R_(e){let t=Gl(e),n=t.documentElement,r=t.body,i=Ao(n)?n:r,a={overflowY:i.style.overflowY,overflowX:i.style.overflowX};return Object.assign(i.style,{overflowY:`hidden`,overflowX:`hidden`}),()=>{Object.assign(i.style,a)}}function z_(e){let t=Gl(e),n=t.documentElement,r=t.body,i=To(n),a=0,o=0,s=!1,c=Ud.create();if(ru&&(i.visualViewport?.scale??1)!==1)return()=>{};function l(){let t=i.getComputedStyle(n),c=i.getComputedStyle(r),l=(t.scrollbarGutter||``).includes(`both-edges`)?`stable both-edges`:`stable`;a=n.scrollTop,o=n.scrollLeft,N_={scrollbarGutter:n.style.scrollbarGutter,overflowY:n.style.overflowY,overflowX:n.style.overflowX},F_=n.style.scrollBehavior,P_={position:r.style.position,height:r.style.height,width:r.style.width,boxSizing:r.style.boxSizing,overflowY:r.style.overflowY,overflowX:r.style.overflowX,scrollBehavior:r.style.scrollBehavior};let u=n.scrollHeight>n.clientHeight,d=n.scrollWidth>n.clientWidth,f=t.overflowY===`scroll`||c.overflowY===`scroll`,p=t.overflowX===`scroll`||c.overflowX===`scroll`,m=Math.max(0,i.innerWidth-r.clientWidth),h=Math.max(0,i.innerHeight-r.clientHeight),g=parseFloat(c.marginTop)+parseFloat(c.marginBottom),_=parseFloat(c.marginLeft)+parseFloat(c.marginRight),v=Ao(n)?n:r;if(s=L_(e),s){n.style.scrollbarGutter=l,v.style.overflowY=`hidden`,v.style.overflowX=`hidden`;return}Object.assign(n.style,{scrollbarGutter:l,overflowY:`hidden`,overflowX:`hidden`}),(u||f)&&(n.style.overflowY=`scroll`),(d||p)&&(n.style.overflowX=`scroll`),Object.assign(r.style,{position:`relative`,height:g||h?`calc(100dvh - ${g+h}px)`:`100dvh`,width:_||m?`calc(100vw - ${_+m}px)`:`100vw`,boxSizing:`border-box`,overflow:`hidden`,scrollBehavior:`unset`}),r.scrollTop=a,r.scrollLeft=o,n.setAttribute(`data-base-ui-scroll-locked`,``),n.style.scrollBehavior=`unset`}function u(){Object.assign(n.style,N_),Object.assign(r.style,P_),s||(n.scrollTop=a,n.scrollLeft=o,n.removeAttribute(`data-base-ui-scroll-locked`),n.style.scrollBehavior=F_)}function d(){u(),c.request(l)}l();let f=Bf(i,`resize`,d);return()=>{c.cancel(),u(),typeof i.removeEventListener==`function`&&f()}}var B_=new class{lockCount=0;restore=null;timeoutLock=zd.create();timeoutUnlock=zd.create();acquire(e){return this.lockCount+=1,this.lockCount===1&&this.restore===null&&this.timeoutLock.start(0,()=>this.lock(e)),this.release}release=()=>{--this.lockCount,this.lockCount===0&&this.restore&&this.timeoutUnlock.start(0,this.unlock)};unlock=()=>{this.lockCount===0&&this.restore&&(this.restore?.(),this.restore=null)};lock(e){if(this.lockCount===0||this.restore!==null)return;let t=Gl(e).documentElement,n=To(t).getComputedStyle(t).overflowY;if(n===`hidden`||n===`clip`){this.restore=Ns;return}let r=Ql||!I_(e);this.restore=r?R_(e):z_(e)}};function V_(e=!0,t=null){J(()=>{if(e)return B_.acquire(t)},[e,t])}function H_(e){let{store:t,actionsRef:n}=e,r=t.useState(`open`);Eh(t,r),Ch(t);let{forceUnmount:i}=wh(r,t),a=_.useCallback(()=>{t.setOpen(!1,_f(gf))},[t]);_.useImperativeHandle(n,()=>({unmount:i,close:a}),[i,a])}function U_({store:e,parentContext:t,isDrawer:n}){let r=e.useState(`open`),i=e.useState(`disablePointerDismissal`),a=e.useState(`modal`),o=e.useState(`popupElement`),s=e.useState(`floatingRootContext`),[c,l]=_.useState(0),[u,d]=_.useState(0),f=c===0,p=Vp(s,{outsidePressEvent(){return e.context.internalBackdropRef.current||e.context.backdropRef.current?`intentional`:{mouse:a===`trap-focus`?`sloppy`:`intentional`,touch:`sloppy`}},outsidePress(t){if(!e.context.outsidePressEnabledRef.current||`button`in t&&t.button!==0||`touches`in t&&t.touches.length!==1)return!1;let n=pu(t);return f&&!i?a&&(e.context.internalBackdropRef.current||e.context.backdropRef.current)?e.context.internalBackdropRef.current===n||e.context.backdropRef.current===n||Q(n,o)&&!n?.hasAttribute(`data-base-ui-portal`):!0:!1},escapeKey:f});return V_(r&&a===!0,o),e.useContextCallback(`onNestedDialogOpen`,(e,t)=>{l(e),d(t)}),e.useContextCallback(`onNestedDialogClose`,()=>{l(0),d(0)}),_.useEffect(()=>(t?.onNestedDialogOpen&&r&&t.onNestedDialogOpen(c+1,u+ +!!n),t?.onNestedDialogClose&&!r&&t.onNestedDialogClose(),()=>{t?.onNestedDialogClose&&r&&t.onNestedDialogClose()}),[n,r,c,u,t]),Th(e,{activeTriggerProps:p.reference??Fs,inactiveTriggerProps:p.trigger??Fs,popupProps:p.floating??Fs,nestedOpenDialogCount:c,nestedOpenDrawerCount:u}),null}var W_={...Ih,modal:$(e=>e.modal),nested:$(e=>e.nested),nestedOpenDialogCount:$(e=>e.nestedOpenDialogCount),nestedOpenDrawerCount:$(e=>e.nestedOpenDrawerCount),disablePointerDismissal:$(e=>e.disablePointerDismissal),openMethod:$(e=>e.openMethod),descriptionElementId:$(e=>e.descriptionElementId),titleElementId:$(e=>e.titleElementId),viewportElement:$(e=>e.viewportElement),role:$(e=>e.role)},G_=class e extends uh{constructor(e,t,n=!1){let r=new Dh,i=K_(e);i.floatingRootContext=Ah(r,t,n),super(i,{popupRef:_.createRef(),backdropRef:_.createRef(),internalBackdropRef:_.createRef(),outsidePressEnabledRef:{current:!0},triggerElements:r,onOpenChange:void 0,onOpenChangeComplete:void 0},W_)}setOpen=(e,t)=>{if(t.preventUnmountOnClose=()=>{this.set(`preventUnmountingOnClose`,!0)},!e&&t.trigger==null&&this.state.activeTriggerId!=null&&(t.trigger=this.state.activeTriggerElement??void 0),this.context.onOpenChange?.(e,t),t.isCanceled)return;this.state.floatingRootContext.dispatchOpenChange(e,t);let n={open:e};vh(n,e,t.trigger),this.update(n)};static useStore(t,n){return gh(t,(t,r)=>new e(n,t,r),!0).store}};function K_(e={}){return{...kh(),modal:!0,disablePointerDismissal:!1,popupElement:null,viewportElement:null,descriptionElementId:void 0,titleElementId:void 0,openMethod:null,nested:!1,nestedOpenDialogCount:0,nestedOpenDrawerCount:0,role:`dialog`,...e}}function q_(e,t=`dialog`){let{children:n,open:r,defaultOpen:i=!1,onOpenChange:a,onOpenChangeComplete:o,disablePointerDismissal:s=!1,modal:c=!0,actionsRef:l,handle:u,triggerId:d,defaultTriggerId:f=null}=e,p=t===`drawer`,m=t===`alert-dialog`,h=m?!0:c,g=m||s,v=m?`alertdialog`:`dialog`,y=d_(!0),b={modal:h,disablePointerDismissal:g,nested:!!y,role:v},x=G_.useStore(u?.store,{open:i,openProp:r,activeTriggerId:f,triggerIdProp:d,...b});Zm(()=>{let e=r===void 0&&x.state.open===!1&&i===!0?{open:!0,activeTriggerId:f}:null;m?x.update(e?{...b,...e}:b):e&&x.update(e)}),x.useControlledProp(`openProp`,r),x.useControlledProp(`triggerIdProp`,d),x.useSyncedValues(b),x.useContextCallback(`onOpenChange`,a),x.useContextCallback(`onOpenChangeComplete`,o);let S=x.useState(`open`),C=x.useState(`mounted`),w=x.useState(`payload`);H_({store:x,actionsRef:l});let T=S||C,E=_.useMemo(()=>({store:x}),[x]);return(0,G.jsx)(l_.Provider,{value:!1,children:(0,G.jsxs)(u_.Provider,{value:E,children:[T&&(0,G.jsx)(U_,{store:x,parentContext:y?.store.context,isDrawer:p}),typeof n==`function`?n({payload:w}):n]})})}function J_(e){return q_(e,_.useContext(l_)?`drawer`:`dialog`)}var Y_=_.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,{store:s}=d_(),c=Vl(a);return s.useSyncedValueWithCleanup(`titleElementId`,c),zs(`h2`,e,{ref:t,props:[{id:c},o]})});function X_(e){let t=_.useRef(``),n=_.useCallback(n=>{n.defaultPrevented||(t.current=n.pointerType,e(n,n.pointerType))},[e]);return{onClick:_.useCallback(n=>{if(n.detail===0){e(n,`keyboard`);return}`pointerType`in n?e(n,n.pointerType):e(n,t.current),t.current=``},[e]),onPointerDown:n}}function Z_(e,t){let n=_.useRef(e),r=q(t);J(()=>{n.current!==e&&r(n.current)},[e,r]),J(()=>{n.current=e},[e])}function Q_(e,t){let{onClick:n,onPointerDown:r}=X_(q((n,r)=>{(typeof e==`function`?e():e)||t(r||(Ql?`touch`:``))}));return _.useMemo(()=>({onClick:n,onPointerDown:r}),[n,r])}function $_(e){let[t,n]=_.useState(null),r=Q_(e,n);return Z_(e,t=>{t&&!e&&n(null)}),_.useMemo(()=>({openMethod:t,triggerProps:r}),[t,r])}function ev(e){let t=(0,b.c)(4),n;t[0]===e?n=t[1]:({...n}=e,t[0]=e,t[1]=n);let r;return t[2]===n?r=t[3]:(r=(0,G.jsx)(J_,{"data-slot":`dialog`,...n}),t[2]=n,t[3]=r),r}function tv(e){let t=(0,b.c)(4),n;t[0]===e?n=t[1]:({...n}=e,t[0]=e,t[1]=n);let r;return t[2]===n?r=t[3]:(r=(0,G.jsx)(M_,{"data-slot":`dialog-portal`,...n}),t[2]=n,t[3]=r),r}function nv(e){let t=(0,b.c)(8),n,r;t[0]===e?(n=t[1],r=t[2]):({className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r);let i;t[3]===n?i=t[4]:(i=yl(`fixed inset-0 isolate z-50 bg-black/30 duration-100 supports-backdrop-filter:backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0`,n),t[3]=n,t[4]=i);let a;return t[5]!==r||t[6]!==i?(a=(0,G.jsx)(p_,{"data-slot":`dialog-overlay`,className:i,...r}),t[5]=r,t[6]=i,t[7]=a):a=t[7],a}function rv(e){let t=(0,b.c)(15),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({className:r,children:n,showCloseButton:a,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=a===void 0?!0:a,s;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,G.jsx)(nv,{}),t[5]=s):s=t[5];let c;t[6]===r?c=t[7]:(c=yl(`fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-4xl bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 duration-100 outline-none sm:max-w-md dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,r),t[6]=r,t[7]=c);let l;t[8]===o?l=t[9]:(l=o&&(0,G.jsxs)(m_,{"data-slot":`dialog-close`,render:(0,G.jsx)(Cl,{variant:`ghost`,className:`absolute top-4 right-4 bg-secondary`,size:`icon-sm`}),children:[(0,G.jsx)(So,{}),(0,G.jsx)(`span`,{className:`sr-only`,children:`Close`})]}),t[8]=o,t[9]=l);let u;return t[10]!==n||t[11]!==i||t[12]!==c||t[13]!==l?(u=(0,G.jsxs)(tv,{children:[s,(0,G.jsxs)(A_,{"data-slot":`dialog-content`,className:c,...i,children:[n,l]})]}),t[10]=n,t[11]=i,t[12]=c,t[13]=l,t[14]=u):u=t[14],u}function iv(e){let t=(0,b.c)(8),n,r;t[0]===e?(n=t[1],r=t[2]):({className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r);let i;t[3]===n?i=t[4]:(i=yl(`flex flex-col gap-1.5`,n),t[3]=n,t[4]=i);let a;return t[5]!==r||t[6]!==i?(a=(0,G.jsx)(`div`,{"data-slot":`dialog-header`,className:i,...r}),t[5]=r,t[6]=i,t[7]=a):a=t[7],a}function av(e){let t=(0,b.c)(8),n,r;t[0]===e?(n=t[1],r=t[2]):({className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r);let i;t[3]===n?i=t[4]:(i=yl(`font-heading text-base leading-none font-medium`,n),t[3]=n,t[4]=i);let a;return t[5]!==r||t[6]!==i?(a=(0,G.jsx)(Y_,{"data-slot":`dialog-title`,className:i,...r}),t[5]=r,t[6]=i,t[7]=a):a=t[7],a}function ov(e){let t=(0,b.c)(8),n,r;t[0]===e?(n=t[1],r=t[2]):({className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r);let i;t[3]===n?i=t[4]:(i=yl(`text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground`,n),t[3]=n,t[4]=i);let a;return t[5]!==r||t[6]!==i?(a=(0,G.jsx)(h_,{"data-slot":`dialog-description`,className:i,...r}),t[5]=r,t[6]=i,t[7]=a):a=t[7],a}var sv=_.createContext(void 0);function cv(e){let t=_.useContext(sv);if(t===void 0&&!e)throw Error(_s(33));return t}var lv=_.createContext(void 0);function uv(e){let t=_.useContext(lv);if(t===void 0&&!e)throw Error(_s(36));return t}var dv=_.createContext(void 0);function fv(e=!0){let t=_.useContext(dv);if(t===void 0&&!e)throw Error(_s(25));return t}function pv(e){let{closeOnClick:t,highlighted:n,id:r,nodeId:i,store:a,typingRef:o,itemRef:s,itemMetadata:c}=e,{events:l}=a.useState(`floatingTreeRoot`),u=a.useState(`open`),d=fv(!0),f=d!==void 0;return _.useMemo(()=>({id:r,role:`menuitem`,tabIndex:u&&n?0:-1,onKeyDown(e){e.key===` `&&o?.current&&e.preventDefault()},onMouseMove(e){i&&l.emit(`itemhover`,{nodeId:i,target:e.currentTarget})},onClick(e){t&&l.emit(`close`,{domEvent:e,reason:cf})},onMouseUp(e){if(d){let t=d.initialCursorPointRef.current;if(d.initialCursorPointRef.current=null,f&&t&&Math.abs(e.clientX-t.x)<=1&&Math.abs(e.clientY-t.y)<=1||f&&!tu&&e.button===2)return}s.current&&a.context.allowMouseUpTriggerRef.current&&(!f||e.button===2)&&(!c||c.type===`regular-item`)&&s.current.click()}}),[t,n,r,l,i,u,a,o,s,d,f,c])}var mv={type:`regular-item`};function hv(e){let{closeOnClick:t,disabled:n=!1,highlighted:r,id:i,store:a,typingRef:o=a.context.typingRef,nativeButton:s,itemMetadata:c,nodeId:l}=e,u=a.useState(`disabled`),d=n||u,f=_.useRef(null),{getButtonProps:p,buttonRef:m}=xs({disabled:d,focusableWhenDisabled:!0,native:s,composite:!0}),h=pv({closeOnClick:t,highlighted:r,id:i,nodeId:l,store:a,typingRef:o,itemRef:f,itemMetadata:c}),g=_.useCallback(e=>ns(h,{onMouseEnter(){c.type===`submenu-trigger`&&c.setActive()}},e,p),[h,p,c]),v=ws(f,m);return _.useMemo(()=>({getItemProps:g,itemRef:v}),[g,v])}var gv=_.createContext({register:()=>{},unregister:()=>{},subscribeMapChange:()=>()=>{},elementsRef:{current:[]},nextIndexRef:{current:0}});function _v(){return _.useContext(gv)}var vv=function(e){return e[e.None=0]=`None`,e[e.GuessFromOrder=1]=`GuessFromOrder`,e}({});function yv(e={}){let{label:t,metadata:n,textRef:r,indexGuessBehavior:i,index:a}=e,{register:o,unregister:s,subscribeMapChange:c,elementsRef:l,labelsRef:u,nextIndexRef:d}=_v(),f=_.useRef(-1),[p,m]=_.useState(a??(i===vv.GuessFromOrder?()=>{if(f.current===-1){let e=d.current;d.current+=1,f.current=e}return f.current}:-1)),h=_.useRef(null),g=_.useCallback(e=>{if(h.current=e,p!==-1&&e!==null&&(l.current[p]=e,u)){let n=t!==void 0;u.current[p]=n?t:r?.current?.textContent??e.textContent}},[p,l,u,t,r]);return J(()=>{if(a!=null)return;let e=h.current;if(e)return o(e,n),()=>{s(e)}},[a,o,s,n]),J(()=>{if(a==null)return c(e=>{let t=h.current?e.get(h.current)?.index:null;t!=null&&m(t)})},[a,c,m]),{ref:g,index:p}}var bv=function(e){return e.checked=`data-checked`,e.unchecked=`data-unchecked`,e.disabled=`data-disabled`,e.highlighted=`data-highlighted`,e}({}),xv={checked(e){return e?{[bv.checked]:``}:{[bv.unchecked]:``}},...Yd},Sv=_.createContext(void 0),Cv=_.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,[o,s]=_.useState(void 0),c=zs(`div`,e,{ref:t,props:{role:`group`,"aria-labelledby":o,...a}});return(0,G.jsx)(Sv.Provider,{value:s,children:c})}),wv=_.createContext(void 0);function Tv(e){let t=_.useContext(wv);if(t===void 0&&!e)throw Error(_s(69));return t}var Ev={...Tg,...Yd},Dv=_.forwardRef(function(e,t){let{render:n,className:r,style:i,finalFocus:a,...o}=e,{store:s}=uv(),{side:c,align:l}=cv(),u=Tv(!0)!=null,d=s.useState(`open`),f=s.useState(`transitionStatus`),p=s.useState(`popupProps`),m=s.useState(`mounted`),h=s.useState(`instantType`),g=s.useState(`activeTriggerElement`),v=s.useState(`parent`),y=s.useState(`lastOpenChangeReason`),b=s.useState(`rootId`),x=s.useState(`floatingRootContext`),S=s.useState(`floatingTreeRoot`),C=s.useState(`closeDelay`),w=s.useState(`activeTriggerElement`),T=s.useState(`hoverEnabled`),E=s.useState(`disabled`),D=s.useState(`openMethod`),O=v.type===`context-menu`;Qd({open:d,ref:s.context.popupRef,onComplete(){d&&s.context.onOpenChangeComplete?.(!0)}}),_.useEffect(()=>{function e(e){s.setOpen(!1,_f(e.reason,e.domEvent))}return S.events.on(`close`,e),()=>{S.events.off(`close`,e)}},[S.events,s]),Kh(x,{enabled:T&&!E&&!O&&v.type!==`menubar`,closeDelay:C});let k=_.useCallback(e=>{s.set(`popupElement`,e)},[s]),A=zs(`div`,e,{state:{transitionStatus:f,side:c,align:l,open:d,nested:v.type===`menu`,instant:h},ref:[t,s.context.popupRef,k],stateAttributesMapping:Ev,props:[p,{onKeyDown(e){u&&O_.has(e.key)&&e.stopPropagation()}},Zg(f),o,{"data-rootownerid":b}]}),j=v.type===void 0||O;return(g||v.type===`menubar`&&y!==`outside-press`)&&(j=!0),(0,G.jsx)(Pp,{context:x,openInteractionType:D,modal:O,disabled:!m,returnFocus:a===void 0?j:a,initialFocus:v.type!==`menu`,restoreFocus:!0,externalTree:v.type===`menubar`?void 0:S,previousFocusableElement:w,nextFocusableElement:v.type===void 0?s.context.triggerFocusTargetRef:void 0,beforeContentFocusGuardRef:v.type===void 0?s.context.beforeContentFocusGuardRef:void 0,children:A})}),Ov=_.createContext(void 0);function kv(){let e=_.useContext(Ov);if(e===void 0)throw Error(_s(32));return e}var Av=_.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,{store:i}=uv();return i.useState(`mounted`)||n?(0,G.jsx)(Ov.Provider,{value:n,children:(0,G.jsx)(gp,{ref:t,...r})}):null});function jv(e){let{children:t,elementsRef:n,labelsRef:r,onMapChange:i}=e,a=q(i),o=_.useRef(0),s=Yo(Nv).current,c=Yo(Mv).current,[l,u]=_.useState(0),d=_.useRef(l),f=q((e,t)=>{c.set(e,t??null),d.current+=1,u(d.current)}),p=q(e=>{c.delete(e),d.current+=1,u(d.current)}),m=_.useMemo(()=>{let e=new Map;return Array.from(c.keys()).filter(e=>e.isConnected).sort(Pv).forEach((t,n)=>{let r=c.get(t)??{};e.set(t,{...r,index:n})}),e},[c,l]);J(()=>{if(typeof MutationObserver!=`function`||m.size===0)return;let e=new MutationObserver(e=>{let t=new Set,n=e=>t.has(e)?t.delete(e):t.add(e);e.forEach(e=>{e.removedNodes.forEach(n),e.addedNodes.forEach(n)}),t.size===0&&(d.current+=1,u(d.current))});return m.forEach((t,n)=>{n.parentElement&&e.observe(n.parentElement,{childList:!0})}),()=>{e.disconnect()}},[m]),J(()=>{d.current===l&&(n.current.length!==m.size&&(n.current.length=m.size),r&&r.current.length!==m.size&&(r.current.length=m.size),o.current=m.size),a(m)},[a,m,n,r,l]),J(()=>()=>{n.current=[]},[n]),J(()=>()=>{r&&(r.current=[])},[r]);let h=q(e=>(s.add(e),()=>{s.delete(e)}));J(()=>{s.forEach(e=>e(m))},[s,m]);let g=_.useMemo(()=>({register:f,unregister:p,subscribeMapChange:h,elementsRef:n,labelsRef:r,nextIndexRef:o}),[f,p,h,n,r,o]);return(0,G.jsx)(gv.Provider,{value:g,children:t})}function Mv(){return new Map}function Nv(){return new Set}function Pv(e,t){let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS?1:0}var Fv=20;function Iv(e,t,n,r){let[i,a]=_.useState(!1);J(()=>{if(!e||!t||n==null){a(!1);return}let r=Gl(n).documentElement.clientWidth,i=n.offsetWidth;a(r>0&&i>0&&i>=r-Fv)},[e,t,n]),V_(e&&(!t||i),r)}var Lv=_.forwardRef(function(e,t){let{anchor:n,positionMethod:r=`absolute`,className:i,render:a,side:o,align:s,sideOffset:c=0,alignOffset:l=0,collisionBoundary:u=`clipping-ancestors`,collisionPadding:d=5,arrowPadding:f=5,sticky:p=!1,disableAnchorTracking:m=!1,collisionAvoidance:h=lp,style:g,...v}=e,{store:y}=uv(),b=kv(),x=fv(!0),S=y.useState(`parent`),C=y.useState(`floatingRootContext`),w=y.useState(`floatingTreeRoot`),T=y.useState(`mounted`),E=y.useState(`open`),D=y.useState(`modal`),O=y.useState(`openMethod`),k=y.useState(`activeTriggerElement`),A=y.useState(`transitionStatus`),j=y.useState(`positionerElement`),M=y.useState(`instantType`),N=y.useState(`hasViewport`),P=y.useState(`lastOpenChangeReason`),F=y.useState(`floatingNodeId`),I=y.useState(`floatingParentNodeId`),L=C.useState(`domReferenceElement`),R=_.useRef(null),ee=Zd(j,!1,!1),te=n,z=c,B=l,V=s,H=h;S.type===`context-menu`&&(te=n??S.context?.anchor,V??=`start`,!o&&V!==`center`&&(B=e.alignOffset??2,z=e.sideOffset??-5));let U=o,ne=V;S.type===`menu`?(U??=`inline-end`,ne??=`start`,H=e.collisionAvoidance??up):S.type===`menubar`&&(U??=S.context.orientation===`vertical`?`inline-end`:`bottom`,ne??=`start`);let W=S.type===`context-menu`,re=Yg({anchor:te,floatingRootContext:C,positionMethod:x?`fixed`:r,mounted:T,side:U,sideOffset:z,align:ne,alignOffset:B,arrowPadding:W?0:f,collisionBoundary:u,collisionPadding:d,sticky:p,nodeId:F,keepMounted:b,disableAnchorTracking:m,collisionAvoidance:H,shiftCrossAxis:W&&!(`side`in H&&H.side===`flip`),externalTree:w,adaptiveOrigin:N?Kg:void 0});_.useEffect(()=>{function e(e){e.open&&(e.parentNodeId===F&&y.set(`hoverEnabled`,!1),e.nodeId!==F&&e.parentNodeId===y.select(`floatingParentNodeId`)&&y.setOpen(!1,_f(mf)))}return w.events.on(`menuopenchange`,e),()=>{w.events.off(`menuopenchange`,e)}},[y,w.events,F]),_.useEffect(()=>{if(y.select(`floatingParentNodeId`)==null)return;function e(e){if(e.open||e.nodeId!==y.select(`floatingParentNodeId`))return;let t=e.reason??`sibling-open`;y.setOpen(!1,_f(t))}return w.events.on(`menuopenchange`,e),()=>{w.events.off(`menuopenchange`,e)}},[w.events,y]);let ie=Bd();_.useEffect(()=>{E||ie.clear()},[E,ie]),_.useEffect(()=>{function e(e){if(!(!E||e.nodeId!==y.select(`floatingParentNodeId`)))if(e.target&&k&&k!==e.target){let e=y.select(`closeDelay`);e>0?ie.isStarted()||ie.start(e,()=>{y.setOpen(!1,_f(mf))}):y.setOpen(!1,_f(mf))}else ie.clear()}return w.events.on(`itemhover`,e),()=>{w.events.off(`itemhover`,e)}},[w.events,E,k,y,ie]),_.useEffect(()=>{let e={open:E,nodeId:F,parentNodeId:I,reason:y.select(`lastOpenChangeReason`)};w.events.emit(`menuopenchange`,e)},[w.events,E,y,F,I]),J(()=>{let e=L,t=R.current;if(e&&(R.current=e),t&&e&&e!==t){y.set(`instantType`,void 0);let e=new AbortController;return ee(()=>{y.set(`instantType`,`trigger-change`)},e.signal),()=>{e.abort()}}},[L,ee,y]);let ae={open:E,side:re.side,align:re.align,anchorHidden:re.anchorHidden,nested:S.type===`menu`,instant:M},oe=S.type===`menubar`&&S.context.modal;Iv(E&&(oe||D&&P!==`trigger-hover`),O===`touch`,j,k);let se=Qg(e,ae,{styles:re.positionerStyles,transitionStatus:A,props:v,refs:[t,y.useStateSetter(`positionerElement`)],hidden:!T,inert:!E}),ce=T&&S.type!==`menu`&&(S.type!==`menubar`&&D&&P!==`trigger-hover`||S.type===`menubar`&&S.context.modal),le=null;return S.type===`menubar`?le=S.context.contentElement:S.type===void 0&&(le=k),(0,G.jsxs)(sv.Provider,{value:re,children:[ce&&(0,G.jsx)(j_,{ref:S.type===`context-menu`||S.type===`nested-context-menu`?S.context.internalBackdropRef:null,inert:i_(!E),cutout:le}),(0,G.jsx)(wp,{id:F,children:(0,G.jsx)(jv,{elementsRef:y.context.itemDomElements,labelsRef:y.context.itemLabels,children:se})})]})}),Rv=_.createContext(void 0);function zv(){let e=_.useContext(Rv);if(e===void 0)throw Error(_s(34));return e}var Bv=_.memo(_.forwardRef(function(e,t){let{render:n,className:r,value:i,defaultValue:a,onValueChange:o,disabled:s=!1,style:c,"aria-labelledby":l,...u}=e,[d,f]=_.useState(void 0),[p,m]=ef({controlled:i,default:a,name:`MenuRadioGroup`}),h=q((e,t)=>{o?.(e,t),!t.isCanceled&&m(e)}),g=zs(`div`,e,{state:{disabled:s},ref:t,props:{role:`group`,"aria-labelledby":l??d,"aria-disabled":s||void 0,...u}}),v=_.useMemo(()=>({value:p,setValue:h,disabled:s}),[p,h,s]);return(0,G.jsx)(Sv.Provider,{value:f,children:(0,G.jsx)(Rv.Provider,{value:v,children:g})})})),Vv=_.createContext(void 0);function Hv(){let e=_.useContext(Vv);if(e===void 0)throw Error(_s(35));return e}var Uv=_.forwardRef(function(e,t){let{render:n,className:r,id:i,label:a,nativeButton:o=!1,disabled:s=!1,closeOnClick:c=!1,value:l,style:u,...d}=e,f=yv({label:a}),p=cv(!0),m=Vl(i),{store:h}=uv(),g=h.useState(`isActive`,f.index),v=h.useState(`itemProps`),{value:y,setValue:b,disabled:x}=zv(),S=x||s,C=y===l,{getItemProps:w,itemRef:T}=hv({closeOnClick:c,disabled:S,highlighted:g,id:m,store:h,nativeButton:o,nodeId:p?.context.nodeId,itemMetadata:mv}),E=_.useMemo(()=>({disabled:S,highlighted:g,checked:C}),[S,g,C]);function D(e){let t=_f(cf,e.nativeEvent,void 0,{preventUnmountOnClose(){}});b(l,t)}let O=zs(`div`,e,{state:E,stateAttributesMapping:xv,props:[v,{role:`menuitemradio`,"aria-checked":C,onClick:D},d,w],ref:[T,t,f.ref]});return(0,G.jsx)(Vv.Provider,{value:E,children:O})}),Wv=_.forwardRef(function(e,t){let{render:n,className:r,style:i,keepMounted:a=!1,...o}=e,s=Hv(),c=_.useRef(null),{transitionStatus:l,setMounted:u}=$d(s.checked);return Qd({open:s.checked,ref:c,onComplete(){s.checked||u(!1)}}),zs(`span`,e,{state:{checked:s.checked,disabled:s.disabled,highlighted:s.highlighted,transitionStatus:l},stateAttributesMapping:xv,ref:[t,c],props:{"aria-hidden":!0,...o},enabled:a||s.checked})}),Gv=_.createContext(null);function Kv(e){let t=_.useContext(Gv);if(t===null&&!e)throw Error(_s(5));return t}var qv={...Ih,disabled:$(e=>e.parent.type===`menubar`&&e.parent.context.disabled||e.disabled),modal:$(e=>(e.parent.type===void 0||e.parent.type===`context-menu`)&&(e.modal??!0)),openMethod:$(e=>e.openMethod),allowMouseEnter:$(e=>e.allowMouseEnter),highlightItemOnHover:$(e=>e.highlightItemOnHover),stickIfOpen:$(e=>e.stickIfOpen),parent:$(e=>e.parent),rootId:$(e=>e.parent.type===`menu`?e.parent.store.select(`rootId`):e.parent.type===void 0?e.rootId:e.parent.context.rootId),activeIndex:$(e=>e.activeIndex),isActive:$((e,t)=>e.activeIndex===t),hoverEnabled:$(e=>e.hoverEnabled),instantType:$(e=>e.instantType),lastOpenChangeReason:$(e=>e.openChangeReason),floatingTreeRoot:$(e=>e.parent.type===`menu`?e.parent.store.select(`floatingTreeRoot`):e.floatingTreeRoot),floatingNodeId:$(e=>e.floatingNodeId),floatingParentNodeId:$(e=>e.floatingParentNodeId),itemProps:$(e=>e.itemProps),closeDelay:$(e=>e.closeDelay),hasViewport:$(e=>e.hasViewport),keyboardEventRelay:$(e=>{if(e.keyboardEventRelay)return e.keyboardEventRelay;if(e.parent.type===`menu`)return e.parent.store.select(`keyboardEventRelay`)})},Jv=class e extends uh{constructor(e){super({...Yv(),...e},{positionerRef:_.createRef(),popupRef:_.createRef(),typingRef:{current:!1},itemDomElements:{current:[]},itemLabels:{current:[]},allowMouseUpTriggerRef:{current:!1},triggerFocusTargetRef:_.createRef(),beforeContentFocusGuardRef:_.createRef(),onOpenChangeComplete:void 0,triggerElements:new Dh},qv),this.unsubscribeParentListener=this.observe(`parent`,e=>{if(this.unsubscribeParentListener?.(),e.type===`menu`){let t=e.store.select(`rootId`),n=e.store.select(`floatingTreeRoot`),r=e.store.select(`keyboardEventRelay`);this.unsubscribeParentListener=e.store.subscribe(()=>{let i=e.store.select(`rootId`),a=e.store.select(`floatingTreeRoot`),o=e.store.select(`keyboardEventRelay`);t===i&&n===a&&r===o||(t=i,n=a,r=o,this.notifyAll())}),this.context.allowMouseUpTriggerRef=e.store.context.allowMouseUpTriggerRef;return}e.type!==void 0&&(this.context.allowMouseUpTriggerRef=e.context.allowMouseUpTriggerRef),this.unsubscribeParentListener=null})}setOpen(e,t){this.state.floatingRootContext.context.events.emit(`setOpen`,{open:e,eventDetails:t})}static useStore(t,n){let r=Yo(()=>new e(n)).current;return t??r}unsubscribeParentListener=null};function Yv(){return{...kh(),disabled:!1,modal:!0,openMethod:null,allowMouseEnter:!1,highlightItemOnHover:!0,stickIfOpen:!0,parent:{type:void 0},rootId:void 0,activeIndex:null,hoverEnabled:!0,instantType:void 0,openChangeReason:null,floatingTreeRoot:new vp,floatingNodeId:void 0,floatingParentNodeId:null,itemProps:Fs,keyboardEventRelay:void 0,closeDelay:0,hasViewport:!1}}var Xv=_.createContext(void 0);function Zv(){return _.useContext(Xv)}var Qv=Ef(function(e){let{children:t,open:n,onOpenChange:r,onOpenChangeComplete:i,defaultOpen:a=!1,disabled:o=!1,modal:s,loopFocus:c=!0,orientation:l=`vertical`,actionsRef:u,closeParentOnEsc:d=!1,handle:f,triggerId:p,defaultTriggerId:m=null,highlightItemOnHover:h=!0}=e,g=fv(!0),v=uv(!0),y=Kv(!0),b=Zv(),x=_.useMemo(()=>b&&v?{type:`menu`,store:v.store}:y?{type:`menubar`,context:y}:g&&!v?{type:`context-menu`,context:g}:{type:void 0},[g,v,y,b]),S=Jv.useStore(f?.store,{open:a,openProp:n,activeTriggerId:m,triggerIdProp:p,parent:x});xh(S,n,a,m),S.useControlledProp(`openProp`,n),S.useControlledProp(`triggerIdProp`,p),S.useContextCallback(`onOpenChangeComplete`,i);let C=Bl(),w=Bl(),T=S.useState(`floatingTreeRoot`),E=Cp(T),D=xp(),O=S.useState(`open`),k=S.useState(`activeTriggerElement`),A=S.useState(`positionerElement`),j=S.useState(`hoverEnabled`),M=S.useState(`disabled`),N=S.useState(`lastOpenChangeReason`),P=S.useState(`parent`),F=S.useState(`activeIndex`),I=S.useState(`payload`),L=S.useState(`floatingParentNodeId`),R=_.useRef(null),ee=_.useRef(P.type!==`context-menu`),te=Bd(),z=_.useRef(!0),B=Bd(),V=L!=null,{openMethod:H,triggerProps:U}=$_(O);S.useSyncedValues({disabled:o,highlightItemOnHover:h,modal:P.type===void 0?s:void 0,openMethod:H,rootId:C}),Ch(S);let{forceUnmount:ne}=wh(O,S,()=>{S.update({allowMouseEnter:!1,stickIfOpen:!0})});J(()=>{g&&!v?S.update({parent:{type:`context-menu`,context:g},floatingNodeId:E,floatingParentNodeId:D}):v&&S.update({floatingNodeId:E,floatingParentNodeId:D})},[g,v,E,D,S]),_.useEffect(()=>{if(O||(R.current=null),P.type===`context-menu`){if(!O){te.clear(),ee.current=!1;return}te.start(500,()=>{ee.current=!0})}},[te,O,P.type]),J(()=>{!O&&!j&&S.set(`hoverEnabled`,!0)},[O,j,S]);let W=q((e,t)=>{let n=t.reason;if(O===e&&t.trigger===k&&N===n)return;let i=yh(t);if(!e&&t.trigger==null&&(t.trigger=k??void 0),r?.(e,t),t.isCanceled)return;S.state.floatingRootContext.dispatchOpenChange(e,t);let a=t.event;if(e===!1&&a?.type===`click`&&a.pointerType===`touch`&&!z.current)return;e&&n===`trigger-focus`?(z.current=!1,B.start(300,()=>{z.current=!0})):(z.current=!0,B.clear());let o=(n===`trigger-press`||n===`item-press`)&&a.detail===0&&a?.isTrusted,s=!e&&(n===`escape-key`||n==null),c={open:e,openChangeReason:n};R.current=t.event??null,vh(c,e,t.trigger,i()),S.update(c),P.type===`menubar`&&(n===`trigger-focus`||n===`focus-out`||n===`trigger-hover`||n===`list-navigation`||n===`sibling-open`)?S.set(`instantType`,`group`):o||s?S.set(`instantType`,o?`click`:`dismiss`):S.set(`instantType`,void 0)}),re=ph({popupStore:S,floatingId:w,nested:D!=null,onOpenChange:W}),ie=re.context.events;_.useEffect(()=>{let e=({open:e,eventDetails:t})=>W(e,t);return ie.on(`setOpen`,e),()=>{ie?.off(`setOpen`,e)}},[ie,W]);let ae=_.useCallback(()=>{S.setOpen(!1,_f(gf))},[S]);_.useImperativeHandle(u,()=>({unmount:ne,close:ae}),[ne,ae]);let oe;P.type===`context-menu`&&(oe=P.context),_.useImperativeHandle(oe?.positionerRef,()=>A,[A]),_.useImperativeHandle(oe?.actionsRef,()=>({setOpen:W}),[W]);let se=Vp(re,{enabled:!M,bubbles:{escapeKey:d&&P.type===`menu`},outsidePress(){return P.type!==`context-menu`||R.current?.type===`contextmenu`?!0:ee.current},externalTree:V?T:void 0}),ce=Bg(),le=_.useCallback(e=>{S.select(`activeIndex`)!==e&&S.set(`activeIndex`,e)},[S]),ue=tg(re,{enabled:!M,listRef:S.context.itemDomElements,activeIndex:F,nested:P.type!==void 0,loopFocus:c,orientation:l,parentOrientation:P.type===`menubar`?P.context.orientation:void 0,rtl:ce===`rtl`,disabledIndices:Ps,onNavigate:le,openOnArrowKeyDown:P.type!==`context-menu`,externalTree:V?T:void 0,focusItemOnHover:h}),de=_.useCallback(e=>{S.context.typingRef.current=e},[S]),fe=ng(re,{enabled:!M,listRef:S.context.itemLabels,elementsRef:S.context.itemDomElements,activeIndex:F,resetMs:500,onMatch:e=>{O&&e!==F&&S.set(`activeIndex`,e)},onTyping:de});Th(S,{floatingRootContext:re,activeTriggerProps:_.useMemo(()=>{let e=ns(fe.reference,ue.reference,se.reference,{onMouseMove(){S.set(`allowMouseEnter`,!0)}},U);return e[`aria-haspopup`]=`menu`,e[`aria-expanded`]=O,e},[S,fe.reference,ue.reference,se.reference,U,O]),inactiveTriggerProps:_.useMemo(()=>{let e=ns(ue.trigger,se.trigger,U);return e[`aria-haspopup`]=`menu`,e[`aria-expanded`]=!1,e},[ue.trigger,se.trigger,U]),popupProps:_.useMemo(()=>ns(mh,{id:w,role:`menu`,"aria-labelledby":k?.id,onMouseMove(){S.set(`allowMouseEnter`,!0),P.type===`menu`&&S.set(`hoverEnabled`,!1)},onClick(){S.select(`hoverEnabled`)&&S.set(`hoverEnabled`,!1)},onKeyDown(e){let t=S.select(`keyboardEventRelay`);t&&!e.isPropagationStopped()&&t(e)}},fe.floating,ue.floating,se.floating),[k,w,P.type,S,fe.floating,ue.floating,se.floating]),itemProps:ue.item??Fs});let pe=_.useMemo(()=>({store:S,parent:x}),[S,x]),me=(0,G.jsx)(lv.Provider,{value:pe,children:typeof t==`function`?t({payload:I}):t});return P.type===void 0||P.type===`context-menu`?(0,G.jsx)(Tp,{externalTree:T,children:me}):me});function $v(e){let t=uv().store,n=_.useMemo(()=>({parentMenu:t}),[t]);return(0,G.jsx)(Xv.Provider,{value:n,children:(0,G.jsx)(Qv,{...e})})}function ey(e){let t=e.getBoundingClientRect(),n=To(e);if(au)return t;let r=n.getComputedStyle(e,`::before`),i=n.getComputedStyle(e,`::after`);if(!(r.content!==`none`||i.content!==`none`))return t;let a=parseFloat(r.width)||0,o=parseFloat(r.height)||0,s=parseFloat(i.width)||0,c=parseFloat(i.height)||0,l=Math.max(t.width,a,s),u=Math.max(t.height,o,c),d=l-t.width,f=u-t.height;return{left:t.left-d/2,right:t.right+d/2,top:t.top-f/2,bottom:t.bottom+f/2}}function ty(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=ys(),{ref:i,index:a}=yv(e),o=n===a,s=_.useRef(null),c=ws(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}function ny(e){let{render:t,className:n,style:r,state:i=Fs,props:a=Ps,refs:o=Ps,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=ty({metadata:s});return zs(l,e,{state:i,ref:[...o,f],props:[d,...a,u],stateAttributesMapping:c})}function ry(e){if(Oo(e)&&e.hasAttribute(`data-rootownerid`))return e.getAttribute(`data-rootownerid`)??void 0;if(!Bo(e))return ry(Uo(e))}function iy(e,t){let n=_.useRef(null);function r(t){Xd.flushSync(()=>{e.setOpen(!1,_f(uf,t.nativeEvent,t.currentTarget))}),Md(n.current)?.focus()}function i(n){let r=e.select(`positionerElement`);if(r&&Nd(n,r))e.context.beforeContentFocusGuardRef.current?.focus();else{Xd.flushSync(()=>{e.setOpen(!1,_f(uf,n.nativeEvent,n.currentTarget))});let i=jd(e.context.triggerFocusTargetRef.current||t.current);for(;i!==null&&Q(r,i);){let e=i;if(i=Od(i),i===e)break}i?.focus()}}return{preFocusGuardRef:n,handlePreFocusGuardFocus:r,handleFocusTargetFocus:i}}function ay(e){let{enabled:t=!0,mouseDownAction:n,open:r}=e,i=_.useRef(!1);return _.useMemo(()=>t?{onMouseDown:e=>{(n===`open`&&!r||n===`close`&&r)&&(i.current=!0,Gl(e.currentTarget).addEventListener(`click`,()=>{i.current=!1},{once:!0}))},onClick:e=>{i.current&&(i.current=!1,e.preventBaseUIHandler())}}:Fs,[t,n,r])}var oy=2,sy=Df(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,id:s,openOnHover:c,delay:l=100,closeDelay:u=0,handle:d,payload:f,...p}=e,m=uv(!0),h=d?.store??m?.store;if(!h)throw Error(_s(85));let g=Vl(s),v=h.useState(`isTriggerActive`,g),y=h.useState(`floatingRootContext`),b=h.useState(`isOpenedByTrigger`,g),x=h.useState(`triggerPopupId`,g),S=_.useRef(null),C=ly(),w=ys(!0),T=Sp(),E=_.useMemo(()=>T??new vp,[T]),{registerTrigger:D,isMountedByThisTrigger:O}=Sh(g,S,h,{payload:f,closeDelay:u,parent:C,floatingTreeRoot:E,floatingNodeId:Cp(E),floatingParentNodeId:xp(),keyboardEventRelay:w?.relayKeyboardEvent}),k=C.type===`menubar`,A=h.useState(`disabled`),j=a||A||k&&C.context.disabled,{getButtonProps:M,buttonRef:N}=xs({disabled:j,native:o});_.useEffect(()=>{!b&&C.type===void 0&&(h.context.allowMouseUpTriggerRef.current=!1)},[h,b,C.type]);let P=_.useRef(null),F=Bd(),I=q(e=>{if(!P.current)return;F.clear(),h.context.allowMouseUpTriggerRef.current=!1;let t=e.target;if(Q(P.current,t)||Q(h.select(`positionerElement`),t)||t===P.current||t!=null&&ry(t)===h.select(`rootId`))return;let n=ey(P.current);e.clientX>=n.left-oy&&e.clientX<=n.right+oy&&e.clientY>=n.top-oy&&e.clientY<=n.bottom+oy||E.events.emit(`close`,{domEvent:e,reason:pf})});_.useEffect(()=>{b&&h.select(`lastOpenChangeReason`)===`trigger-hover`&&Gl(P.current).addEventListener(`mouseup`,I,{once:!0})},[b,I,h]);let L=k&&C.context.hasSubmenuOpen,R=Jh(y,{enabled:(c??L)&&!j&&C.type!==`context-menu`&&(!k||L&&!O),handleClose:ug({blockPointerEvents:!k}),mouseOnly:!0,move:!1,restMs:C.type===void 0?l:void 0,delay:{close:u},triggerElementRef:S,externalTree:E,isActiveTrigger:v,isClosing:()=>h.select(`transitionStatus`)===`ending`}),ee=cy(b,h.select(`lastOpenChangeReason`)),te=Fp(y,{enabled:!j&&C.type!==`context-menu`,event:b&&k?`click`:`mousedown`,toggle:!0,ignoreMouse:!1,stickIfOpen:C.type===void 0?ee:!1}),z=Bh(y,{enabled:!j&&L}),B=ay({open:b,enabled:k,mouseDownAction:`open`}),V=_.useMemo(()=>ns(z.reference,te.reference),[z.reference,te.reference]),H=h.useState(`triggerProps`,O),{preFocusGuardRef:U,handlePreFocusGuardFocus:ne,handleFocusTargetFocus:W}=iy(h,S),re={disabled:j,open:b},ie=[P,t,N,D,S],ae=[V,R??Fs,H,{"aria-haspopup":`menu`,"aria-controls":x,id:g,onMouseDown:e=>{h.select(`open`)||(F.start(200,()=>{h.context.allowMouseUpTriggerRef.current=!0}),Gl(e.currentTarget).addEventListener(`mouseup`,I,{once:!0}))}},k?{role:`menuitem`}:{},B,p,M],oe=zs(`button`,e,{enabled:!k,stateAttributesMapping:wg,state:re,ref:ie,props:ae});return k?(0,G.jsx)(ny,{tag:`button`,render:n,className:r,style:i,state:re,refs:ie,props:ae,stateAttributesMapping:wg}):b?(0,G.jsxs)(_.Fragment,{children:[(0,G.jsx)(Kf,{ref:U,onFocus:ne},`${g}-pre-focus-guard`),(0,G.jsx)(_.Fragment,{children:oe},g),(0,G.jsx)(Kf,{ref:h.context.triggerFocusTargetRef,onFocus:W},`${g}-post-focus-guard`)]}):(0,G.jsx)(_.Fragment,{children:oe},g)});function cy(e,t){let n=Bd(),[r,i]=_.useState(!1);return J(()=>{e&&t===`trigger-hover`?(i(!0),n.start(500,()=>{i(!1)})):e||(n.clear(),i(!1))},[e,t,n]),r}function ly(){let e=fv(!0),t=uv(!0),n=Kv(!0);return _.useMemo(()=>n?{type:`menubar`,context:n}:e&&!t?{type:`context-menu`,context:e}:{type:void 0},[e,t,n])}var uy=_.forwardRef(function(e,t){let{render:n,className:r,style:i,label:a,id:o,nativeButton:s=!1,openOnHover:c=!0,delay:l=100,closeDelay:u=0,disabled:d=!1,...f}=e,p=yv({label:a}),m=cv(),{store:h}=uv(),g=Vl(o),v=h.useState(`open`),y=h.useState(`floatingRootContext`),b=h.useState(`floatingTreeRoot`),x=h.useState(`triggerPopupId`,g),S=_h(g,h),C=_.useCallback(e=>{let t=S(e);return e!==null&&h.select(`open`)&&h.select(`activeTriggerId`)==null&&h.update({activeTriggerId:g,activeTriggerElement:e,closeDelay:u}),t},[S,u,h,g]),w=_.useRef(null),T=_.useCallback(e=>{w.current=e,h.set(`activeTriggerElement`,e)},[h]),E=Zv();if(!E?.parentMenu)throw Error(_s(37));h.useSyncedValue(`closeDelay`,u);let D=E.parentMenu,O=h.useState(`disabled`),k=D.useState(`disabled`),A=d||O||k,j=D.useState(`itemProps`),M=D.useState(`isActive`,p.index),N=_.useMemo(()=>({type:`submenu-trigger`,setActive(){D.select(`highlightItemOnHover`)&&D.set(`activeIndex`,p.index)}}),[D,p.index]),{getItemProps:P,itemRef:F}=hv({closeOnClick:!1,disabled:A,highlighted:M,id:g,store:h,typingRef:D.context.typingRef,nativeButton:s,itemMetadata:N,nodeId:m?.context.nodeId}),I=Jh(y,{enabled:h.useState(`hoverEnabled`)&&c&&!A,handleClose:ug({blockPointerEvents:!0}),mouseOnly:!0,move:!0,restMs:l,delay:{open:l,close:u},shouldOpen:l>0?()=>D.select(`allowMouseEnter`):void 0,triggerElementRef:w,externalTree:b,isClosing:()=>h.select(`transitionStatus`)===`ending`}),L=Fp(y,{enabled:!A,event:`mousedown`,toggle:!c,ignoreMouse:c,stickIfOpen:!1}).reference??Fs,R=h.useState(`triggerProps`,!0);return delete R.id,zs(`div`,e,{state:{disabled:A,highlighted:M,open:v},stateAttributesMapping:Cg,props:[L,I,R,j,{"aria-controls":x,tabIndex:v||M?0:-1,onBlur(){M&&D.set(`activeIndex`,null)}},f,P],ref:[t,p.ref,F,C,T]})});function dy(e){let t=(0,b.c)(4),n;t[0]===e?n=t[1]:({...n}=e,t[0]=e,t[1]=n);let r;return t[2]===n?r=t[3]:(r=(0,G.jsx)(Qv,{"data-slot":`dropdown-menu`,...n}),t[2]=n,t[3]=r),r}function fy(e){let t=(0,b.c)(4),n;t[0]===e?n=t[1]:({...n}=e,t[0]=e,t[1]=n);let r;return t[2]===n?r=t[3]:(r=(0,G.jsx)(Av,{"data-slot":`dropdown-menu-portal`,...n}),t[2]=n,t[3]=r),r}function py(e){let t=(0,b.c)(4),n;t[0]===e?n=t[1]:({...n}=e,t[0]=e,t[1]=n);let r;return t[2]===n?r=t[3]:(r=(0,G.jsx)(sy,{"data-slot":`dropdown-menu-trigger`,...n}),t[2]=n,t[3]=r),r}function my(e){let t=(0,b.c)(18),n,r,i,a,o,s;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6]):({align:i,alignOffset:a,side:o,sideOffset:s,className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s);let c=i===void 0?`start`:i,l=a===void 0?0:a,u=o===void 0?`bottom`:o,d=s===void 0?4:s,f;t[7]===n?f=t[8]:(f=yl(`z-50 max-h-(--available-height) w-(--anchor-width) min-w-48 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-3xl p-1.5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!`,n),t[7]=n,t[8]=f);let p;t[9]!==r||t[10]!==f?(p=(0,G.jsx)(Dv,{"data-slot":`dropdown-menu-content`,className:f,...r}),t[9]=r,t[10]=f,t[11]=p):p=t[11];let m;return t[12]!==c||t[13]!==l||t[14]!==u||t[15]!==d||t[16]!==p?(m=(0,G.jsx)(Av,{children:(0,G.jsx)(Lv,{className:`isolate z-50 outline-none`,align:c,alignOffset:l,side:u,sideOffset:d,children:p})}),t[12]=c,t[13]=l,t[14]=u,t[15]=d,t[16]=p,t[17]=m):m=t[17],m}function hy(e){let t=(0,b.c)(4),n;t[0]===e?n=t[1]:({...n}=e,t[0]=e,t[1]=n);let r;return t[2]===n?r=t[3]:(r=(0,G.jsx)(Cv,{"data-slot":`dropdown-menu-group`,...n}),t[2]=n,t[3]=r),r}function gy(e){let t=(0,b.c)(4),n;t[0]===e?n=t[1]:({...n}=e,t[0]=e,t[1]=n);let r;return t[2]===n?r=t[3]:(r=(0,G.jsx)($v,{"data-slot":`dropdown-menu-sub`,...n}),t[2]=n,t[3]=r),r}function _y(e){let t=(0,b.c)(13),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({className:r,inset:i,children:n,...a}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o;t[5]===r?o=t[6]:(o=yl(`flex cursor-default items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-9.5 data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,r),t[5]=r,t[6]=o);let s;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,G.jsx)(io,{className:`ml-auto`}),t[7]=s):s=t[7];let c;return t[8]!==n||t[9]!==i||t[10]!==a||t[11]!==o?(c=(0,G.jsxs)(uy,{"data-slot":`dropdown-menu-sub-trigger`,"data-inset":i,className:o,...a,children:[n,s]}),t[8]=n,t[9]=i,t[10]=a,t[11]=o,t[12]=c):c=t[12],c}function vy(e){let t=(0,b.c)(16),n,r,i,a,o,s;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6]):({align:i,alignOffset:a,side:o,sideOffset:s,className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s);let c=i===void 0?`start`:i,l=a===void 0?-3:a,u=o===void 0?`right`:o,d=s===void 0?0:s,f;t[7]===n?f=t[8]:(f=yl(`w-auto min-w-36 rounded-3xl p-1.5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!`,n),t[7]=n,t[8]=f);let p;return t[9]!==c||t[10]!==l||t[11]!==r||t[12]!==u||t[13]!==d||t[14]!==f?(p=(0,G.jsx)(my,{"data-slot":`dropdown-menu-sub-content`,className:f,align:c,alignOffset:l,side:u,sideOffset:d,...r}),t[9]=c,t[10]=l,t[11]=r,t[12]=u,t[13]=d,t[14]=f,t[15]=p):p=t[15],p}function yy(e){let t=(0,b.c)(4),n;t[0]===e?n=t[1]:({...n}=e,t[0]=e,t[1]=n);let r;return t[2]===n?r=t[3]:(r=(0,G.jsx)(Bv,{"data-slot":`dropdown-menu-radio-group`,...n}),t[2]=n,t[3]=r),r}function by(e){let t=(0,b.c)(13),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({className:r,children:n,inset:i,...a}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o;t[5]===r?o=t[6]:(o=yl(`relative flex cursor-default items-center gap-2.5 rounded-2xl py-2 pr-8 pl-3 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-9.5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,r),t[5]=r,t[6]=o);let s;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,G.jsx)(`span`,{className:`pointer-events-none absolute right-2 flex items-center justify-center`,"data-slot":`dropdown-menu-radio-item-indicator`,children:(0,G.jsx)(Wv,{children:(0,G.jsx)(ro,{})})}),t[7]=s):s=t[7];let c;return t[8]!==n||t[9]!==i||t[10]!==a||t[11]!==o?(c=(0,G.jsxs)(Uv,{"data-slot":`dropdown-menu-radio-item`,"data-inset":i,className:o,...a,children:[s,n]}),t[8]=n,t[9]=i,t[10]=a,t[11]=o,t[12]=c):c=t[12],c}function xy(e){let t=(0,b.c)(8),n,r;t[0]===e?(n=t[1],r=t[2]):({className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r);let i;t[3]===n?i=t[4]:(i=yl(`-mx-1.5 my-1.5 h-px bg-border/50`,n),t[3]=n,t[4]=i);let a;return t[5]!==r||t[6]!==i?(a=(0,G.jsx)(Tl,{"data-slot":`dropdown-menu-separator`,className:i,...r}),t[5]=r,t[6]=i,t[7]=a):a=t[7],a}var Sy=`p2p-meet-temo_koki`,Cy={facingMode:`user`,width:{ideal:1280},height:{ideal:720}},wy=[`loadedmetadata`,`loadeddata`,`canplay`],Ty=[`pointerdown`,`touchstart`,`keydown`];function Ey(){return Math.random().toString(36).slice(2,12).toUpperCase()}function Dy(e){return e===`mic`?`Microphone`:e===`camera`?`Camera`:`Camera and microphone`}function Oy(e,t){let n=Dy(t),r=e instanceof DOMException?e.name:``;return!window.isSecureContext||!navigator.mediaDevices?.getUserMedia?{title:`${n} access is unavailable`,message:`Camera and microphone access requires HTTPS or localhost.`}:r===`NotAllowedError`||r===`SecurityError`?{title:`${n} access is blocked`,message:`The browser is blocking this site. Click the camera icon in the address bar or open site settings, allow camera and microphone access, then try again.`}:r===`NotFoundError`||r===`DevicesNotFoundError`?{title:`${n} not found`,message:`Check that your device is connected, enabled in your operating system, and available to this browser.`}:r===`NotReadableError`||r===`TrackStartError`?{title:`${n} is busy`,message:`Another app or browser tab may be using it. Close the other app, then try again.`}:{title:`${n} did not start`,message:`Check your browser and operating system permissions, make sure the device is connected, then try again.`}}function ky(e){let t=(0,b.c)(7),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),o,s;t[0]===e?(o=t[1],s=t[2]):(o=()=>{if(!e){a(!1);return}let t=()=>a(e.getAudioTracks().length>0);return t(),e.addEventListener(`addtrack`,t),e.addEventListener(`removetrack`,t),()=>{e.removeEventListener(`addtrack`,t),e.removeEventListener(`removetrack`,t)}},s=[e],t[0]=e,t[1]=o,t[2]=s),(0,_.useEffect)(o,s);let c,l;return t[3]!==i||t[4]!==e?(c=()=>{if(!e||!i){r(!1);return}let t,n=null,a=null,o=null,s=null,c=()=>{if(!(!n||n.state!==`running`||a))try{a=n.createMediaStreamSource(e),o=n.createAnalyser(),o.fftSize=256,o.smoothingTimeConstant=.4,a.connect(o),s=new Uint8Array(o.frequencyBinCount)}catch(e){console.error(`Audio graph init failed:`,e)}},l=()=>{window.removeEventListener(`click`,u),window.removeEventListener(`pointerdown`,u),window.removeEventListener(`keydown`,u)},u=()=>{n?.state===`running`?(c(),l()):n?.state===`suspended`&&n.resume().then(()=>{n?.state===`running`&&(c(),l())}).catch(jy)};try{n=new AudioContext,n.state===`suspended`?(window.addEventListener(`click`,u),window.addEventListener(`pointerdown`,u),window.addEventListener(`keydown`,u)):c(),t=window.setInterval(()=>{if(n?.state===`running`&&!a&&c(),o&&s){o.getByteFrequencyData(s);let e=0;for(let t=0;t<s.length;t++)e+=s[t];r(e/s.length>12)}},100)}catch{return}return()=>{window.clearInterval(t),l(),n?.close().catch(Ay)}},l=[e,i],t[3]=i,t[4]=e,t[5]=c,t[6]=l):(c=t[5],l=t[6]),(0,_.useEffect)(c,l),n}function Ay(){}function jy(){}function My(e){let t=(0,b.c)(28),{tile:n,isLocal:r,localVideoActive:i}=e,a=(0,_.useRef)(null),o=ky(r?null:n.stream),[s,c]=(0,_.useState)(!1),l=r?i:s&&n.isVideoOn,u,d;t[0]===n.stream?(u=t[1],d=t[2]):(u=()=>{let e=n.stream;if(!e){c(!1);return}let t=()=>c(e.getVideoTracks().some(Fy));return t(),e.addEventListener(`addtrack`,t),e.addEventListener(`removetrack`,t),e.getVideoTracks().forEach(e=>{e.addEventListener(`ended`,t)}),()=>{e.removeEventListener(`addtrack`,t),e.removeEventListener(`removetrack`,t),e.getVideoTracks().forEach(e=>{e.removeEventListener(`ended`,t)})}},d=[n.stream],t[0]=n.stream,t[1]=u,t[2]=d),(0,_.useEffect)(u,d);let f;t[3]!==r||t[4]!==n.kind||t[5]!==n.peerId||t[6]!==n.stream?(f=()=>{let e=a.current;if(e&&(e.muted=!0,e.playsInline=!0,e.srcObject!==n.stream&&(e.srcObject=n.stream)),!n.stream)return;let t=null,i=()=>{if(!(!e||!e.srcObject||t)){if(r){e.muted=!0,e.paused&&(t=e.play(),t?.finally(()=>{t=null}).catch(Py));return}e.paused?(e.muted=!1,t=e.play().catch(()=>(e.muted=!0,e.play())).catch(e=>{console.warn(`Video play failed`,{peerId:n.peerId,kind:n.kind,name:e?.name,message:e?.message})}).finally(()=>{t=null})):e.muted&&=!1}};i();let o=requestAnimationFrame(i);return wy.forEach(t=>{e?.addEventListener(t,i)}),Ty.forEach(e=>{window.addEventListener(e,i)}),n.stream.getTracks().forEach(e=>{e.addEventListener(`unmute`,i)}),()=>{cancelAnimationFrame(o),wy.forEach(t=>{e?.removeEventListener(t,i)}),Ty.forEach(e=>{window.removeEventListener(e,i)}),n.stream?.getTracks().forEach(e=>{e.removeEventListener(`unmute`,i)})}},t[3]=r,t[4]=n.kind,t[5]=n.peerId,t[6]=n.stream,t[7]=f):f=t[7];let p;t[8]!==r||t[9]!==n?(p=[r,n],t[8]=r,t[9]=n,t[10]=p):p=t[10],(0,_.useEffect)(f,p);let m;t[11]===Symbol.for(`react.memo_cache_sentinel`)?(m=()=>a.current?.requestFullscreen?.().catch(Ny),t[11]=m):m=t[11];let h=m,g=o&&`ring-3 ring-emerald-500/70 shadow-lg shadow-emerald-500/30`,v;t[12]===g?v=t[13]:(v=yl(`relative overflow-hidden p-0 [--card-spacing:0] transition-shadow duration-300`,g),t[12]=g,t[13]=v);let y;t[14]!==l||t[15]!==n.stream?(y=n.stream&&(0,G.jsx)(`video`,{ref:a,autoPlay:!0,playsInline:!0,className:yl(`absolute inset-0 h-full w-full object-cover transition-opacity duration-300`,l?`opacity-100`:`opacity-0`)}),t[14]=l,t[15]=n.stream,t[16]=y):y=t[16];let x;t[17]===l?x=t[18]:(x=!l&&(0,G.jsx)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center gap-2`,children:(0,G.jsx)(xo,{className:`size-14 text-muted-foreground/60`})}),t[17]=l,t[18]=x);let S;t[19]!==y||t[20]!==x?(S=(0,G.jsxs)(`div`,{className:`relative aspect-video overflow-hidden bg-muted/10`,children:[y,x]}),t[19]=y,t[20]=x,t[21]=S):S=t[21];let C;t[22]===l?C=t[23]:(C=l&&(0,G.jsxs)(o_,{children:[(0,G.jsx)(s_,{render:(0,G.jsx)(Cl,{variant:`ghost`,size:`icon-sm`,className:`absolute top-3 right-3 bg-background/60 backdrop-blur-md hover:bg-background/80`,onClick:h}),children:(0,G.jsx)(po,{className:`size-4`})}),(0,G.jsx)(c_,{children:`Fullscreen`})]}),t[22]=l,t[23]=C);let w;return t[24]!==S||t[25]!==C||t[26]!==v?(w=(0,G.jsxs)(xf,{className:v,children:[S,C]}),t[24]=S,t[25]=C,t[26]=v,t[27]=w):w=t[27],w}function Ny(){}function Py(){}function Fy(e){return e.readyState===`live`&&e.enabled}function Iy(){let[e,t]=(0,_.useState)(``),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(`none`),x=(0,_.useRef)(null),S=(0,_.useRef)(null),C=(0,_.useRef)(null),w=(0,_.useRef)(null),T=(0,_.useRef)(!1),E=(0,_.useRef)(!1),D=(0,_.useRef)(!1),O=(0,_.useRef)(!1),k=(0,_.useRef)(()=>{}),A=(0,_.useRef)(null),j=(0,_.useRef)(null),M=(0,_.useRef)(null),N=(0,_.useRef)(null),P=n!==null;E.current=u,D.current=f;let F=e=>{let t=e.target.files?.[0];if(t){let n=URL.createObjectURL(t);t.type.startsWith(`image/`)?j.current?.setBackground({image:n}):t.type.startsWith(`video/`)&&j.current?.setBackground({video:n}),e.target.value=``}},I=(e,t,n,r=!1)=>{a(i=>{let a=i.find(t=>t.peerId===e);return a?a.stream===t&&a.kind===n?i:i.map(i=>i===a?{...i,id:`${e}-${n}`,stream:t,kind:n,isVideoOn:r}:i):[...i,{id:`${e}-${n}`,peerId:e,stream:t,kind:n,isVideoOn:r}]})},L=e=>a(t=>t.filter(t=>t.peerId!==e)),R=()=>(S.current||=(j.current=new za(new MediaStream,{background:`none`}),j.current.stream),S.current),ee=async()=>{S.current?.getTracks().forEach(e=>e.stop()),S.current=null;let e=await navigator.mediaDevices.getUserMedia({audio:!0,video:Cy});return j.current=new za(e,{background:`none`}),S.current=j.current.stream,S.current},te=async e=>{try{let t=await navigator.mediaDevices.getUserMedia(e===`mic`?{audio:!0}:{video:Cy}),n=e===`mic`?t.getAudioTracks()[0]:t.getVideoTracks()[0];if(!n)throw new DOMException(`No media track was returned.`,`NotFoundError`);let r=R(),i=e===`mic`?r.getAudioTracks()[0]:r.getVideoTracks()[0];if(i)x.current?.replaceTrack(i,n),r.removeTrack(i),i.stop(),r.addTrack(n);else if(r.addTrack(n),r.getTracks().length===1)x.current?.addStream(r,{metadata:{kind:`camera`}});else{let t=e===`camera`?{metadata:{kind:`camera`}}:void 0;x.current?.addTrack(n,r,t)}e===`mic`?l(!0):(w.current=n,i||I(ut,r,`camera`),d(!0),A.current?.({isOn:!0})),v(null)}catch(t){console.warn(`${e} media request failed`,t),v(Oy(t,e))}},z=async e=>{let n=e.trim();if(!n)return;try{let e=new URL(n).searchParams.get(`ROOM`);e&&(n=e.trim())}catch{}s(!0),v(null);let i;try{i=await ee()}catch(e){console.warn(`Initial media request failed`,e),i=R()}let o=i.getVideoTracks().some(e=>e.readyState===`live`&&e.enabled),c=i.getAudioTracks().some(e=>e.readyState===`live`&&e.enabled);w.current=i.getVideoTracks()[0]??null;let u=Ci({appId:Sy},n);x.current=u;let f=u.makeAction(`cam-state`),p=(e,t)=>{f.send(e,t?{target:t}:void 0)};A.current=p,f.onMessage=(e,{peerId:t})=>{a(n=>{let r=n.find(e=>e.peerId===t);return r?.isVideoOn===e.isOn?n:n.map(t=>t===r?{...t,isVideoOn:e.isOn}:t)})},u.onPeerJoin=e=>{I(e,null,`camera`);let t=w.current?.enabled??!1;p({isOn:t},e);let n=D.current?C.current:S.current;n&&n.getTracks().length>0&&u.addStream(n,{target:e,metadata:{kind:D.current?`screen`:`camera`}})},u.onPeerLeave=e=>{L(e)},u.onPeerStream=(e,t,n)=>{let r=n?.kind===`screen`?`screen`:`camera`;I(t,e,r,!0)},I(ut,i,`camera`,!0),d(o),l(c),t(n),r(n),s(!1),window.history.replaceState({},``,`?room=${n}`)},B=async()=>{await x.current?.leave(),window.location.href=window.location.href.split(`?`)[0]},V=()=>z(Ey()),H=async()=>{let e=(S.current?.getAudioTracks()??[]).filter(e=>e.readyState===`live`);c?(e.forEach(e=>e.enabled=!1),l(!1)):e.length>0?(e.forEach(e=>e.enabled=!0),l(!0)):await te(`mic`)},U=async()=>{if(f)return;let e=(S.current?.getVideoTracks()??[]).filter(e=>e.readyState===`live`);if(u)e.forEach(e=>e.enabled=!1),d(!1),A.current?.({isOn:!1});else if(e.length>0){e.forEach(e=>e.enabled=!0);let t=e[0];w.current=t??null,d(!!t),A.current?.({isOn:!!t})}else await te(`camera`)},ne=()=>{let e=C.current?.getVideoTracks()[0],t=S.current?.getVideoTracks()[0];if(e&&t)x.current?.replaceTrack(e,t);else if(C.current)try{x.current?.removeStream(C.current)}catch{}C.current?.getTracks().forEach(e=>e.stop()),C.current=null,p(!1);let n=T.current&&!!t;n&&(t.enabled=!0,w.current=t),d(n),A.current?.({isOn:n}),S.current&&I(ut,S.current,`camera`)};k.current=ne;let W=async()=>{try{let e=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});C.current=e,T.current=u;let t=w.current,n=e.getVideoTracks()[0];t&&n?(t.enabled=!1,x.current?.replaceTrack(t,n)):n&&x.current?.addStream(e,{metadata:{kind:`screen`}}),w.current=n,d(!1),p(!0),A.current?.({isOn:!0}),I(ut,e,`camera`),n?.addEventListener(`ended`,()=>k.current())}catch{}},re=()=>{f?ne():W()},ie=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{h(!0),setTimeout(()=>h(!1),2e3)})};(0,_.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get(`room`)?.trim();e&&!O.current&&(O.current=!0,t(e),z(e))},[]),(0,_.useEffect)(()=>()=>{try{x.current?.leave()}catch{}S.current?.getTracks().forEach(e=>e.stop()),C.current?.getTracks().forEach(e=>e.stop())},[]);let ae=i.filter(e=>e.peerId!==ut),oe=ae.length>0?ae:i,se=i.find(e=>e.peerId===ut),ce=oe.length<=1?`grid-cols-1 max-w-7xl`:oe.length===2?`grid-cols-1 sm:grid-cols-2`:`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`;return(0,G.jsx)(Ua,{defaultTheme:`dark`,storageKey:`vite-ui-theme`,children:(0,G.jsxs)(a_,{children:[(0,G.jsx)(`main`,{className:`min-h-dvh bg-background text-foreground transition-colors duration-300`,children:P?(0,G.jsxs)(`div`,{className:`flex min-h-dvh flex-col animate-in fade-in-0 duration-300`,children:[(0,G.jsxs)(`header`,{className:`flex items-center justify-between px-4 py-3 sm:px-6`,children:[(0,G.jsx)(`div`,{className:`flex flex-1 items-center justify-start min-w-0`,children:(0,G.jsxs)(`div`,{className:`truncate`,children:[(0,G.jsx)(`h1`,{className:`text-lg font-semibold tracking-tight`,children:`P2P Meet`}),(0,G.jsx)(`p`,{className:`hidden text-xs text-muted-foreground truncate sm:block`,children:`Secure peer-to-peer · end-to-end encrypted`})]})}),(0,G.jsx)(`div`,{className:`flex shrink-0 items-center justify-center`,children:(0,G.jsxs)(`div`,{className:`flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-1.5 sm:px-3 py-1 sm:py-1.5`,children:[(0,G.jsx)(`span`,{className:`font-mono text-sm font-medium tracking-widest `,children:n}),(0,G.jsx)(El,{orientation:`vertical`}),(0,G.jsxs)(Cl,{variant:`ghost`,size:`sm`,className:`h-7 gap-1.5 rounded-full px-1.5 text-xs`,onClick:ie,children:[m?(0,G.jsx)(ro,{className:`size-3.5 text-emerald-500`}):(0,G.jsx)(ao,{className:`size-3.5`}),m?`Copied!`:`Copy Link`]})]})}),(0,G.jsx)(`div`,{className:`flex flex-1 items-center justify-end min-w-0`,children:(0,G.jsx)(wl,{})})]}),(0,G.jsx)(El,{}),(0,G.jsx)(`div`,{className:`flex flex-1 items-center justify-center px-3 pb-24 pt-3 sm:px-6 sm:pt-6`,children:(0,G.jsx)(`div`,{className:yl(`mx-auto grid w-full gap-3`,ce),children:oe.map(e=>(0,G.jsx)(My,{tile:e,isLocal:e.peerId===ut,localVideoActive:u||f},e.id))})}),ae.length>0&&se&&(0,G.jsx)(`div`,{className:`fixed bottom-24 sm:bottom-6 right-3 sm:right-6 z-40 w-48 sm:w-64 animate-in slide-in-from-bottom-8 fade-in-0 duration-500 bg-transparent`,children:(0,G.jsx)(My,{tile:se,isLocal:!0,localVideoActive:u||f})}),(0,G.jsx)(`div`,{className:`pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-5`,children:(0,G.jsxs)(`div`,{className:`pointer-events-auto flex items-center gap-1.5 rounded-full border border-border/50 bg-background/80 px-3 py-2.5 shadow-2xl backdrop-blur-xl`,children:[(0,G.jsxs)(o_,{children:[(0,G.jsx)(s_,{render:(0,G.jsx)(Cl,{variant:c?`ghost`:`destructive`,size:`icon`,onClick:()=>H()}),children:c?(0,G.jsx)(ho,{className:`size-4.5`}):(0,G.jsx)(mo,{className:`size-4.5`})}),(0,G.jsx)(c_,{children:c?`Mute`:`Unmute`})]}),(0,G.jsxs)(o_,{children:[(0,G.jsx)(s_,{render:(0,G.jsx)(Cl,{size:`icon`,variant:u?`ghost`:`destructive`,className:f?`opacity-50`:``,onClick:e=>{f?e.preventDefault():U()}}),children:u?(0,G.jsx)(no,{className:`size-4.5`}):(0,G.jsx)(to,{className:`size-4.5`})}),(0,G.jsx)(c_,{children:f?`Camera disabled while sharing screen`:u?`Turn off camera`:`Turn on camera`})]}),(0,G.jsxs)(dy,{children:[(0,G.jsxs)(o_,{children:[(0,G.jsx)(py,{render:(0,G.jsx)(s_,{render:(0,G.jsx)(Cl,{size:`icon`,variant:u?`ghost`:`destructive`,className:u?``:`opacity-50`,onClick:e=>{u||e.preventDefault()},onPointerDown:e=>{u||e.preventDefault()}}),children:u?(0,G.jsx)(uo,{className:`size-4.5`}):(0,G.jsx)(lo,{className:`size-4.5`})})}),(0,G.jsx)(c_,{children:f?`Camera effects disabled while sharing screen`:u?`Camera effects`:`Camera effects disabled while camera is off`})]}),(0,G.jsx)(my,{children:(0,G.jsxs)(yy,{value:y,onValueChange:b,children:[(0,G.jsxs)(hy,{children:[(0,G.jsxs)(gy,{children:[(0,G.jsxs)(_y,{children:[(0,G.jsx)(co,{}),`Blur`]}),(0,G.jsx)(fy,{children:(0,G.jsxs)(vy,{children:[(0,G.jsxs)(by,{value:`blurLow`,onClick:()=>j.current?.setBackground({blur:{strength:`low`}}),children:[(0,G.jsx)(oo,{}),`Low`]}),(0,G.jsxs)(by,{value:`blurMedium`,onClick:()=>j.current?.setBackground({blur:{strength:`medium`}}),children:[(0,G.jsx)(so,{}),`Medium`]}),(0,G.jsxs)(by,{value:`blurHigh`,onClick:()=>j.current?.setBackground({blur:{strength:`high`}}),children:[(0,G.jsx)(co,{}),`High`]})]})})]}),(0,G.jsxs)(by,{value:`image`,onClick:()=>M.current?.click(),children:[(0,G.jsx)(`input`,{type:`file`,accept:`image/*`,ref:M,onChange:F,style:{display:`none`}}),(0,G.jsx)(uo,{}),`Image`]}),(0,G.jsxs)(by,{value:`video`,onClick:()=>N.current?.click(),children:[(0,G.jsx)(`input`,{type:`file`,accept:`video/*`,ref:N,onChange:F,style:{display:`none`}}),(0,G.jsx)(yo,{}),`Video`]})]}),(0,G.jsx)(xy,{}),(0,G.jsx)(hy,{children:(0,G.jsxs)(by,{value:`none`,onClick:()=>j.current?.setBackground(`none`),children:[(0,G.jsx)(eo,{}),`None`]})})]})})]}),(0,G.jsxs)(o_,{children:[(0,G.jsx)(s_,{render:(0,G.jsx)(Cl,{variant:f?`secondary`:`ghost`,size:`icon`,onClick:re}),children:f?(0,G.jsx)(_o,{className:`size-4.5`}):(0,G.jsx)(go,{className:`size-4.5`})}),(0,G.jsx)(c_,{children:f?`Stop sharing`:`Share screen`})]}),(0,G.jsx)(El,{orientation:`vertical`}),(0,G.jsxs)(o_,{children:[(0,G.jsx)(s_,{render:(0,G.jsx)(Cl,{variant:`destructive`,size:`icon`,onClick:B}),children:(0,G.jsx)(fo,{className:`size-4.5`})}),(0,G.jsx)(c_,{children:`Leave meeting`})]})]})})]}):(0,G.jsx)(`div`,{className:`flex min-h-dvh flex-col items-center justify-center px-4`,children:(0,G.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-700`,children:[(0,G.jsxs)(`div`,{className:`flex w-full items-start justify-between gap-4`,children:[(0,G.jsxs)(`div`,{className:`space-y-2`,children:[(0,G.jsx)(`h1`,{className:`text-4xl font-bold tracking-tight`,children:`P2P Meet`}),(0,G.jsx)(`p`,{className:`text-sm leading-relaxed text-muted-foreground`,children:`Secure, peer-to-peer meetings with end-to-end encryption. No central servers, no tracking — just direct connections.`})]}),(0,G.jsx)(wl,{})]}),(0,G.jsx)(El,{}),(0,G.jsxs)(`div`,{className:`flex w-full flex-col gap-3`,children:[(0,G.jsx)(Cl,{className:`w-full`,size:`lg`,onClick:V,disabled:o,children:`Start New Meeting`}),(0,G.jsxs)(`div`,{className:`flex items-center gap-3 text-sm text-muted-foreground`,children:[(0,G.jsx)(El,{className:`flex-1`}),(0,G.jsx)(`span`,{children:`or join existing`}),(0,G.jsx)(El,{className:`flex-1`})]}),(0,G.jsxs)(`div`,{className:`flex gap-2`,children:[(0,G.jsx)(bf,{value:e,onChange:e=>t(e.target.value.toUpperCase()),placeholder:`Enter Room ID`,className:`flex-1`,onKeyDown:t=>{t.key===`Enter`&&e.trim()&&z(e)}}),(0,G.jsx)(Cl,{variant:`outline`,onClick:()=>z(e),disabled:o||!e.trim(),children:`Join`})]})]})]})})}),(0,G.jsx)(ev,{open:g!==null,onOpenChange:e=>{e||v(null)},children:(0,G.jsxs)(rv,{className:`sm:max-w-md`,children:[(0,G.jsxs)(iv,{children:[(0,G.jsx)(av,{className:`text-xl font-semibold`,children:g?.title}),(0,G.jsx)(ov,{className:`text-base pt-2`,children:g?.message})]}),(0,G.jsx)(`div`,{className:`flex justify-end pt-4`,children:(0,G.jsx)(Cl,{onClick:()=>v(null),children:`Got it`})})]})})]})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,G.jsx)(_.StrictMode,{children:(0,G.jsx)(Iy,{})}));