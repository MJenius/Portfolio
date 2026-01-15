(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var Qo={exports:{}},qr={},$o={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),sc=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),Ds=Symbol.iterator;function hc(e){return e===null||typeof e!="object"?null:(e=Ds&&e[Ds]||e["@@iterator"],typeof e=="function"?e:null)}var Ko={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Go=Object.assign,Yo={};function nn(e,t,n){this.props=e,this.context=t,this.refs=Yo,this.updater=n||Ko}nn.prototype.isReactComponent={};nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jo(){}Jo.prototype=nn.prototype;function Fi(e,t,n){this.props=e,this.context=t,this.refs=Yo,this.updater=n||Ko}var Vi=Fi.prototype=new Jo;Vi.constructor=Fi;Go(Vi,nn.prototype);Vi.isPureReactComponent=!0;var Rs=Array.isArray,Xo=Object.prototype.hasOwnProperty,Bi={current:null},Zo={key:!0,ref:!0,__self:!0,__source:!0};function qo(e,t,n){var r,l={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Xo.call(t,r)&&!Zo.hasOwnProperty(r)&&(l[r]=t[r]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var a=Array(o),c=0;c<o;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:Kn,type:e,key:i,ref:s,props:l,_owner:Bi.current}}function gc(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ui(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function xc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Os=/\/+/g;function yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xc(""+e.key):t.toString(36)}function gr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Kn:case sc:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+yl(s,0):r,Rs(l)?(n="",e!=null&&(n=e.replace(Os,"$&/")+"/"),gr(l,t,n,"",function(c){return c})):l!=null&&(Ui(l)&&(l=gc(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Os,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",Rs(e))for(var o=0;o<e.length;o++){i=e[o];var a=r+yl(i,o);s+=gr(i,t,n,a,l)}else if(a=hc(e),typeof a=="function")for(e=a.call(e),o=0;!(i=e.next()).done;)i=i.value,a=r+yl(i,o++),s+=gr(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function er(e,t,n){if(e==null)return e;var r=[],l=0;return gr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function yc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},xr={transition:null},wc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Bi};function ea(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:er,forEach:function(e,t,n){er(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return er(e,function(){t++}),t},toArray:function(e){return er(e,function(t){return t})||[]},only:function(e){if(!Ui(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=nn;j.Fragment=oc;j.Profiler=uc;j.PureComponent=Fi;j.StrictMode=ac;j.Suspense=pc;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wc;j.act=ea;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Go({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in t)Xo.call(t,a)&&!Zo.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&o!==void 0?o[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){o=Array(a);for(var c=0;c<a;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:Kn,type:e.type,key:l,ref:i,props:r,_owner:s}};j.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};j.createElement=qo;j.createFactory=function(e){var t=qo.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:fc,render:e}};j.isValidElement=Ui;j.lazy=function(e){return{$$typeof:vc,_payload:{_status:-1,_result:e},_init:yc}};j.memo=function(e,t){return{$$typeof:mc,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};j.unstable_act=ea;j.useCallback=function(e,t){return se.current.useCallback(e,t)};j.useContext=function(e){return se.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return se.current.useDeferredValue(e)};j.useEffect=function(e,t){return se.current.useEffect(e,t)};j.useId=function(){return se.current.useId()};j.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return se.current.useMemo(e,t)};j.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};j.useRef=function(e){return se.current.useRef(e)};j.useState=function(e){return se.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return se.current.useTransition()};j.version="18.3.1";$o.exports=j;var Hi=$o.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc=Hi,Sc=Symbol.for("react.element"),Ec=Symbol.for("react.fragment"),Cc=Object.prototype.hasOwnProperty,Pc=kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mc={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var r,l={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Cc.call(t,r)&&!Mc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Sc,type:e,key:i,ref:s,props:l,_owner:Pc.current}}qr.Fragment=Ec;qr.jsx=ta;qr.jsxs=ta;Qo.exports=qr;var na=Qo.exports,Ql={},ra={exports:{}},ge={},la={exports:{}},ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,_){var L=E.length;E.push(_);e:for(;0<L;){var H=L-1>>>1,G=E[H];if(0<l(G,_))E[H]=_,E[L]=G,L=H;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var _=E[0],L=E.pop();if(L!==_){E[0]=L;e:for(var H=0,G=E.length,Zn=G>>>1;H<Zn;){var mt=2*(H+1)-1,xl=E[mt],vt=mt+1,qn=E[vt];if(0>l(xl,L))vt<G&&0>l(qn,xl)?(E[H]=qn,E[vt]=L,H=vt):(E[H]=xl,E[mt]=L,H=mt);else if(vt<G&&0>l(qn,L))E[H]=qn,E[vt]=L,H=vt;else break e}}return _}function l(E,_){var L=E.sortIndex-_.sortIndex;return L!==0?L:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var a=[],c=[],v=1,m=null,p=3,x=!1,y=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=E)r(c),_.sortIndex=_.expirationTime,t(a,_);else break;_=n(c)}}function h(E){if(w=!1,f(E),!y)if(n(a)!==null)y=!0,hl(S);else{var _=n(c);_!==null&&gl(h,_.startTime-E)}}function S(E,_){y=!1,w&&(w=!1,d(M),M=-1),x=!0;var L=p;try{for(f(_),m=n(a);m!==null&&(!(m.expirationTime>_)||E&&!Pe());){var H=m.callback;if(typeof H=="function"){m.callback=null,p=m.priorityLevel;var G=H(m.expirationTime<=_);_=e.unstable_now(),typeof G=="function"?m.callback=G:m===n(a)&&r(a),f(_)}else r(a);m=n(a)}if(m!==null)var Zn=!0;else{var mt=n(c);mt!==null&&gl(h,mt.startTime-_),Zn=!1}return Zn}finally{m=null,p=L,x=!1}}var C=!1,P=null,M=-1,U=5,z=-1;function Pe(){return!(e.unstable_now()-z<U)}function sn(){if(P!==null){var E=e.unstable_now();z=E;var _=!0;try{_=P(!0,E)}finally{_?on():(C=!1,P=null)}}else C=!1}var on;if(typeof u=="function")on=function(){u(sn)};else if(typeof MessageChannel<"u"){var As=new MessageChannel,ic=As.port2;As.port1.onmessage=sn,on=function(){ic.postMessage(null)}}else on=function(){R(sn,0)};function hl(E){P=E,C||(C=!0,on())}function gl(E,_){M=R(function(){E(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,hl(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var _=3;break;default:_=p}var L=p;p=_;try{return E()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=p;p=E;try{return _()}finally{p=L}},e.unstable_scheduleCallback=function(E,_,L){var H=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,E){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=L+G,E={id:v++,callback:_,priorityLevel:E,startTime:L,expirationTime:G,sortIndex:-1},L>H?(E.sortIndex=L,t(c,E),n(a)===null&&E===n(c)&&(w?(d(M),M=-1):w=!0,gl(h,L-H))):(E.sortIndex=G,t(a,E),y||x||(y=!0,hl(S))),E},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(E){var _=p;return function(){var L=p;p=_;try{return E.apply(this,arguments)}finally{p=L}}}})(ia);la.exports=ia;var _c=la.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=Hi,he=_c;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sa=new Set,jn={};function Lt(e,t){Yt(e,t),Yt(e+"Capture",t)}function Yt(e,t){for(jn[e]=t,e=0;e<t.length;e++)sa.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,jc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},Fs={};function zc(e){return $l.call(Fs,e)?!0:$l.call(bs,e)?!1:jc.test(e)?Fs[e]=!0:(bs[e]=!0,!1)}function Ic(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nc(e,t,n,r){if(t===null||typeof t>"u"||Ic(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function oe(e,t,n,r,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){q[e]=new oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){q[e]=new oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){q[e]=new oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){q[e]=new oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);q[t]=new oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);q[t]=new oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,Qi);q[t]=new oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){q[e]=new oe(e,1,!1,e.toLowerCase(),null,!1,!1)});q.xlinkHref=new oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){q[e]=new oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function $i(e,t,n,r){var l=q.hasOwnProperty(t)?q[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nc(t,n,l,r)&&(n=null),r||l===null?zc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),It=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),Ki=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),oa=Symbol.for("react.provider"),aa=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),ua=Symbol.for("react.offscreen"),Vs=Symbol.iterator;function an(e){return e===null||typeof e!="object"?null:(e=Vs&&e[Vs]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,wl;function hn(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var kl=!1;function Sl(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,o=i.length-1;1<=s&&0<=o&&l[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(l[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||l[s]!==i[o]){var a=`
`+l[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=o);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hn(e):""}function Tc(e){switch(e.tag){case 5:return hn(e.type);case 16:return hn("Lazy");case 13:return hn("Suspense");case 19:return hn("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nt:return"Fragment";case It:return"Portal";case Kl:return"Profiler";case Ki:return"StrictMode";case Gl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case aa:return(e.displayName||"Context")+".Consumer";case oa:return(e._context.displayName||"Context")+".Provider";case Gi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function Ac(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===Ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ca(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=ca(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nr(e){e._valueTracker||(e._valueTracker=Dc(e))}function da(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ca(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fa(e,t){t=t.checked,t!=null&&$i(e,"checked",t,!1)}function Zl(e,t){fa(e,t);var n=ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Us(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gn=Array.isArray;function Ht(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(gn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ut(n)}}function pa(e,t){var n=ut(t.value),r=ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ma(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ma(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rr,va=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rc=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){Rc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function ha(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function ga(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ha(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Oc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,t){if(t){if(Oc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,Wt=null,Qt=null;function Qs(e){if(e=Jn(e)){if(typeof ii!="function")throw Error(g(280));var t=e.stateNode;t&&(t=ll(t),ii(e.stateNode,e.type,t))}}function xa(e){Wt?Qt?Qt.push(e):Qt=[e]:Wt=e}function ya(){if(Wt){var e=Wt,t=Qt;if(Qt=Wt=null,Qs(e),t)for(e=0;e<t.length;e++)Qs(t[e])}}function wa(e,t){return e(t)}function ka(){}var El=!1;function Sa(e,t,n){if(El)return e(t,n);El=!0;try{return wa(e,t,n)}finally{El=!1,(Wt!==null||Qt!==null)&&(ka(),ya())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var si=!1;if(He)try{var un={};Object.defineProperty(un,"passive",{get:function(){si=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{si=!1}function bc(e,t,n,r,l,i,s,o,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var kn=!1,zr=null,Ir=!1,oi=null,Fc={onError:function(e){kn=!0,zr=e}};function Vc(e,t,n,r,l,i,s,o,a){kn=!1,zr=null,bc.apply(Fc,arguments)}function Bc(e,t,n,r,l,i,s,o,a){if(Vc.apply(this,arguments),kn){if(kn){var c=zr;kn=!1,zr=null}else throw Error(g(198));Ir||(Ir=!0,oi=c)}}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ea(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $s(e){if(jt(e)!==e)throw Error(g(188))}function Uc(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return $s(l),e;if(i===r)return $s(l),t;i=i.sibling}throw Error(g(188))}if(n.return!==r.return)n=l,r=i;else{for(var s=!1,o=l.child;o;){if(o===n){s=!0,n=l,r=i;break}if(o===r){s=!0,r=l,n=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===n){s=!0,n=i,r=l;break}if(o===r){s=!0,r=i,n=l;break}o=o.sibling}if(!s)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Ca(e){return e=Uc(e),e!==null?Pa(e):null}function Pa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pa(e);if(t!==null)return t;e=e.sibling}return null}var Ma=he.unstable_scheduleCallback,Ks=he.unstable_cancelCallback,Hc=he.unstable_shouldYield,Wc=he.unstable_requestPaint,W=he.unstable_now,Qc=he.unstable_getCurrentPriorityLevel,Xi=he.unstable_ImmediatePriority,_a=he.unstable_UserBlockingPriority,Nr=he.unstable_NormalPriority,$c=he.unstable_LowPriority,La=he.unstable_IdlePriority,el=null,Re=null;function Kc(e){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Jc,Gc=Math.log,Yc=Math.LN2;function Jc(e){return e>>>=0,e===0?32:31-(Gc(e)/Yc|0)|0}var lr=64,ir=4194304;function xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~l;o!==0?r=xn(o):(i&=s,i!==0&&(r=xn(i)))}else s=n&~l,s!==0?r=xn(s):i!==0&&(r=xn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),l=1<<n,r|=e[n],t&=~l;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ze(i),o=1<<s,a=l[s];a===-1?(!(o&n)||o&r)&&(l[s]=Xc(o,t)):a<=t&&(e.expiredLanes|=o),i&=~o}}function ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ja(){var e=lr;return lr<<=1,!(lr&4194240)&&(lr=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function qc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ze(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var N=0;function za(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ia,qi,Na,Ta,Aa,ui=!1,sr=[],tt=null,nt=null,rt=null,Nn=new Map,Tn=new Map,Xe=[],ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gs(e,t){switch(e){case"focusin":case"focusout":tt=null;break;case"dragenter":case"dragleave":nt=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function cn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&qi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function td(e,t,n,r,l){switch(t){case"focusin":return tt=cn(tt,e,t,n,r,l),!0;case"dragenter":return nt=cn(nt,e,t,n,r,l),!0;case"mouseover":return rt=cn(rt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Nn.set(i,cn(Nn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Tn.set(i,cn(Tn.get(i)||null,e,t,n,r,l)),!0}return!1}function Da(e){var t=xt(e.target);if(t!==null){var n=jt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ea(n),t!==null){e.blockedOn=t,Aa(e.priority,function(){Na(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);li=r,n.target.dispatchEvent(r),li=null}else return t=Jn(n),t!==null&&qi(t),e.blockedOn=n,!1;t.shift()}return!0}function Ys(e,t,n){yr(e)&&n.delete(t)}function nd(){ui=!1,tt!==null&&yr(tt)&&(tt=null),nt!==null&&yr(nt)&&(nt=null),rt!==null&&yr(rt)&&(rt=null),Nn.forEach(Ys),Tn.forEach(Ys)}function dn(e,t){e.blockedOn===t&&(e.blockedOn=null,ui||(ui=!0,he.unstable_scheduleCallback(he.unstable_NormalPriority,nd)))}function An(e){function t(l){return dn(l,e)}if(0<sr.length){dn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tt!==null&&dn(tt,e),nt!==null&&dn(nt,e),rt!==null&&dn(rt,e),Nn.forEach(t),Tn.forEach(t),n=0;n<Xe.length;n++)r=Xe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xe.length&&(n=Xe[0],n.blockedOn===null);)Da(n),n.blockedOn===null&&Xe.shift()}var $t=Ke.ReactCurrentBatchConfig,Ar=!0;function rd(e,t,n,r){var l=N,i=$t.transition;$t.transition=null;try{N=1,es(e,t,n,r)}finally{N=l,$t.transition=i}}function ld(e,t,n,r){var l=N,i=$t.transition;$t.transition=null;try{N=4,es(e,t,n,r)}finally{N=l,$t.transition=i}}function es(e,t,n,r){if(Ar){var l=ci(e,t,n,r);if(l===null)Al(e,t,r,Dr,n),Gs(e,r);else if(td(l,e,t,n,r))r.stopPropagation();else if(Gs(e,r),t&4&&-1<ed.indexOf(e)){for(;l!==null;){var i=Jn(l);if(i!==null&&Ia(i),i=ci(e,t,n,r),i===null&&Al(e,t,r,Dr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Al(e,t,r,null,n)}}var Dr=null;function ci(e,t,n,r){if(Dr=null,e=Ji(r),e=xt(e),e!==null)if(t=jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ea(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function Ra(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qc()){case Xi:return 1;case _a:return 4;case Nr:case $c:return 16;case La:return 536870912;default:return 16}default:return 16}}var qe=null,ts=null,wr=null;function Oa(){if(wr)return wr;var e,t=ts,n=t.length,r,l="value"in qe?qe.value:qe.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[i-r];r++);return wr=l.slice(e,1<r?1-r:void 0)}function kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function or(){return!0}function Js(){return!1}function xe(e){function t(n,r,l,i,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?or:Js,this.isPropagationStopped=Js,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),t}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=xe(rn),Yn=V({},rn,{view:0,detail:0}),id=xe(Yn),Pl,Ml,fn,tl=V({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fn&&(fn&&e.type==="mousemove"?(Pl=e.screenX-fn.screenX,Ml=e.screenY-fn.screenY):Ml=Pl=0,fn=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),Xs=xe(tl),sd=V({},tl,{dataTransfer:0}),od=xe(sd),ad=V({},Yn,{relatedTarget:0}),_l=xe(ad),ud=V({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),cd=xe(ud),dd=V({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=xe(dd),pd=V({},rn,{data:0}),Zs=xe(pd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function rs(){return gd}var xd=V({},Yn,{key:function(e){if(e.key){var t=md[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=xe(xd),wd=V({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qs=xe(wd),kd=V({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),Sd=xe(kd),Ed=V({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cd=xe(Ed),Pd=V({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=xe(Pd),_d=[9,13,27,32],ls=He&&"CompositionEvent"in window,Sn=null;He&&"documentMode"in document&&(Sn=document.documentMode);var Ld=He&&"TextEvent"in window&&!Sn,ba=He&&(!ls||Sn&&8<Sn&&11>=Sn),eo=" ",to=!1;function Fa(e,t){switch(e){case"keyup":return _d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Va(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function jd(e,t){switch(e){case"compositionend":return Va(t);case"keypress":return t.which!==32?null:(to=!0,eo);case"textInput":return e=t.data,e===eo&&to?null:e;default:return null}}function zd(e,t){if(Tt)return e==="compositionend"||!ls&&Fa(e,t)?(e=Oa(),wr=ts=qe=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ba&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function Ba(e,t,n,r){xa(r),t=Rr(t,"onChange"),0<t.length&&(n=new ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var En=null,Dn=null;function Nd(e){Za(e,0)}function nl(e){var t=Rt(e);if(da(t))return e}function Td(e,t){if(e==="change")return t}var Ua=!1;if(He){var Ll;if(He){var jl="oninput"in document;if(!jl){var ro=document.createElement("div");ro.setAttribute("oninput","return;"),jl=typeof ro.oninput=="function"}Ll=jl}else Ll=!1;Ua=Ll&&(!document.documentMode||9<document.documentMode)}function lo(){En&&(En.detachEvent("onpropertychange",Ha),Dn=En=null)}function Ha(e){if(e.propertyName==="value"&&nl(Dn)){var t=[];Ba(t,Dn,e,Ji(e)),Sa(Nd,t)}}function Ad(e,t,n){e==="focusin"?(lo(),En=t,Dn=n,En.attachEvent("onpropertychange",Ha)):e==="focusout"&&lo()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Dn)}function Rd(e,t){if(e==="click")return nl(t)}function Od(e,t){if(e==="input"||e==="change")return nl(t)}function bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ne=typeof Object.is=="function"?Object.is:bd;function Rn(e,t){if(Ne(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!$l.call(t,l)||!Ne(e[l],t[l]))return!1}return!0}function io(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function so(e,t){var n=io(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=io(n)}}function Wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qa(){for(var e=window,t=jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jr(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fd(e){var t=Qa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wa(n.ownerDocument.documentElement,n)){if(r!==null&&is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=so(n,i);var s=so(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=He&&"documentMode"in document&&11>=document.documentMode,At=null,di=null,Cn=null,fi=!1;function oo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fi||At==null||At!==jr(r)||(r=At,"selectionStart"in r&&is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cn&&Rn(Cn,r)||(Cn=r,r=Rr(di,"onSelect"),0<r.length&&(t=new ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=At)))}function ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dt={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},zl={},$a={};He&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Dt.animationend.animation,delete Dt.animationiteration.animation,delete Dt.animationstart.animation),"TransitionEvent"in window||delete Dt.transitionend.transition);function rl(e){if(zl[e])return zl[e];if(!Dt[e])return e;var t=Dt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $a)return zl[e]=t[n];return e}var Ka=rl("animationend"),Ga=rl("animationiteration"),Ya=rl("animationstart"),Ja=rl("transitionend"),Xa=new Map,ao="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dt(e,t){Xa.set(e,t),Lt(t,[e])}for(var Il=0;Il<ao.length;Il++){var Nl=ao[Il],Bd=Nl.toLowerCase(),Ud=Nl[0].toUpperCase()+Nl.slice(1);dt(Bd,"on"+Ud)}dt(Ka,"onAnimationEnd");dt(Ga,"onAnimationIteration");dt(Ya,"onAnimationStart");dt("dblclick","onDoubleClick");dt("focusin","onFocus");dt("focusout","onBlur");dt(Ja,"onTransitionEnd");Yt("onMouseEnter",["mouseout","mouseover"]);Yt("onMouseLeave",["mouseout","mouseover"]);Yt("onPointerEnter",["pointerout","pointerover"]);Yt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hd=new Set("cancel close invalid load scroll toggle".split(" ").concat(yn));function uo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function Za(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],a=o.instance,c=o.currentTarget;if(o=o.listener,a!==i&&l.isPropagationStopped())break e;uo(l,o,c),i=a}else for(s=0;s<r.length;s++){if(o=r[s],a=o.instance,c=o.currentTarget,o=o.listener,a!==i&&l.isPropagationStopped())break e;uo(l,o,c),i=a}}}if(Ir)throw e=oi,Ir=!1,oi=null,e}function A(e,t){var n=t[gi];n===void 0&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(qa(t,e,2,!1),n.add(r))}function Tl(e,t,n){var r=0;t&&(r|=4),qa(n,e,r,t)}var ur="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[ur]){e[ur]=!0,sa.forEach(function(n){n!=="selectionchange"&&(Hd.has(n)||Tl(n,!1,e),Tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ur]||(t[ur]=!0,Tl("selectionchange",!1,t))}}function qa(e,t,n,r){switch(Ra(t)){case 1:var l=rd;break;case 4:l=ld;break;default:l=es}n=l.bind(null,t,n,e),l=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Al(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;s=s.return}for(;o!==null;){if(s=xt(o),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}o=o.parentNode}}r=r.return}Sa(function(){var c=i,v=Ji(n),m=[];e:{var p=Xa.get(e);if(p!==void 0){var x=ns,y=e;switch(e){case"keypress":if(kr(n)===0)break e;case"keydown":case"keyup":x=yd;break;case"focusin":y="focus",x=_l;break;case"focusout":y="blur",x=_l;break;case"beforeblur":case"afterblur":x=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Sd;break;case Ka:case Ga:case Ya:x=cd;break;case Ja:x=Cd;break;case"scroll":x=id;break;case"wheel":x=Md;break;case"copy":case"cut":case"paste":x=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=qs}var w=(t&4)!==0,R=!w&&e==="scroll",d=w?p!==null?p+"Capture":null:p;w=[];for(var u=c,f;u!==null;){f=u;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,d!==null&&(h=In(u,d),h!=null&&w.push(bn(u,h,f)))),R)break;u=u.return}0<w.length&&(p=new x(p,y,null,n,v),m.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&n!==li&&(y=n.relatedTarget||n.fromElement)&&(xt(y)||y[We]))break e;if((x||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?xt(y):null,y!==null&&(R=jt(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(w=Xs,h="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=qs,h="onPointerLeave",d="onPointerEnter",u="pointer"),R=x==null?p:Rt(x),f=y==null?p:Rt(y),p=new w(h,u+"leave",x,n,v),p.target=R,p.relatedTarget=f,h=null,xt(v)===c&&(w=new w(d,u+"enter",y,n,v),w.target=f,w.relatedTarget=R,h=w),R=h,x&&y)t:{for(w=x,d=y,u=0,f=w;f;f=zt(f))u++;for(f=0,h=d;h;h=zt(h))f++;for(;0<u-f;)w=zt(w),u--;for(;0<f-u;)d=zt(d),f--;for(;u--;){if(w===d||d!==null&&w===d.alternate)break t;w=zt(w),d=zt(d)}w=null}else w=null;x!==null&&co(m,p,x,w,!1),y!==null&&R!==null&&co(m,R,y,w,!0)}}e:{if(p=c?Rt(c):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var S=Td;else if(no(p))if(Ua)S=Od;else{S=Dd;var C=Ad}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Rd);if(S&&(S=S(e,c))){Ba(m,S,n,v);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ql(p,"number",p.value)}switch(C=c?Rt(c):window,e){case"focusin":(no(C)||C.contentEditable==="true")&&(At=C,di=c,Cn=null);break;case"focusout":Cn=di=At=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,oo(m,n,v);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":oo(m,n,v)}var P;if(ls)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Tt?Fa(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(ba&&n.locale!=="ko"&&(Tt||M!=="onCompositionStart"?M==="onCompositionEnd"&&Tt&&(P=Oa()):(qe=v,ts="value"in qe?qe.value:qe.textContent,Tt=!0)),C=Rr(c,M),0<C.length&&(M=new Zs(M,e,null,n,v),m.push({event:M,listeners:C}),P?M.data=P:(P=Va(n),P!==null&&(M.data=P)))),(P=Ld?jd(e,n):zd(e,n))&&(c=Rr(c,"onBeforeInput"),0<c.length&&(v=new Zs("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:c}),v.data=P))}Za(m,t)})}function bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=In(e,n),i!=null&&r.unshift(bn(e,i,l)),i=In(e,t),i!=null&&r.push(bn(e,i,l))),e=e.return}return r}function zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function co(e,t,n,r,l){for(var i=t._reactName,s=[];n!==null&&n!==r;){var o=n,a=o.alternate,c=o.stateNode;if(a!==null&&a===r)break;o.tag===5&&c!==null&&(o=c,l?(a=In(n,i),a!=null&&s.unshift(bn(n,a,o))):l||(a=In(n,i),a!=null&&s.push(bn(n,a,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Wd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function fo(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace(Qd,"")}function cr(e,t,n){if(t=fo(t),fo(e)!==t&&n)throw Error(g(425))}function Or(){}var pi=null,mi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hi=typeof setTimeout=="function"?setTimeout:void 0,$d=typeof clearTimeout=="function"?clearTimeout:void 0,po=typeof Promise=="function"?Promise:void 0,Kd=typeof queueMicrotask=="function"?queueMicrotask:typeof po<"u"?function(e){return po.resolve(null).then(e).catch(Gd)}:hi;function Gd(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),An(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);An(t)}function lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ln=Math.random().toString(36).slice(2),De="__reactFiber$"+ln,Fn="__reactProps$"+ln,We="__reactContainer$"+ln,gi="__reactEvents$"+ln,Yd="__reactListeners$"+ln,Jd="__reactHandles$"+ln;function xt(e){var t=e[De];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[De]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mo(e);e!==null;){if(n=e[De])return n;e=mo(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[De]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ll(e){return e[Fn]||null}var xi=[],Ot=-1;function ft(e){return{current:e}}function D(e){0>Ot||(e.current=xi[Ot],xi[Ot]=null,Ot--)}function T(e,t){Ot++,xi[Ot]=e.current,e.current=t}var ct={},re=ft(ct),ce=ft(!1),Et=ct;function Jt(e,t){var n=e.type.contextTypes;if(!n)return ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function br(){D(ce),D(re)}function vo(e,t,n){if(re.current!==ct)throw Error(g(168));T(re,t),T(ce,n)}function eu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(g(108,Ac(e)||"Unknown",l));return V({},n,r)}function Fr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ct,Et=re.current,T(re,e),T(ce,ce.current),!0}function ho(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=eu(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,D(ce),D(re),T(re,e)):D(ce),T(ce,n)}var Fe=null,il=!1,Rl=!1;function tu(e){Fe===null?Fe=[e]:Fe.push(e)}function Xd(e){il=!0,tu(e)}function pt(){if(!Rl&&Fe!==null){Rl=!0;var e=0,t=N;try{var n=Fe;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Fe=null,il=!1}catch(l){throw Fe!==null&&(Fe=Fe.slice(e+1)),Ma(Xi,pt),l}finally{N=t,Rl=!1}}return null}var bt=[],Ft=0,Vr=null,Br=0,ye=[],we=0,Ct=null,Ve=1,Be="";function ht(e,t){bt[Ft++]=Br,bt[Ft++]=Vr,Vr=e,Br=t}function nu(e,t,n){ye[we++]=Ve,ye[we++]=Be,ye[we++]=Ct,Ct=e;var r=Ve;e=Be;var l=32-ze(r)-1;r&=~(1<<l),n+=1;var i=32-ze(t)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,Ve=1<<32-ze(t)+l|n<<l|r,Be=i+e}else Ve=1<<i|n<<l|r,Be=e}function ss(e){e.return!==null&&(ht(e,1),nu(e,1,0))}function os(e){for(;e===Vr;)Vr=bt[--Ft],bt[Ft]=null,Br=bt[--Ft],bt[Ft]=null;for(;e===Ct;)Ct=ye[--we],ye[we]=null,Be=ye[--we],ye[we]=null,Ve=ye[--we],ye[we]=null}var ve=null,me=null,O=!1,je=null;function ru(e,t){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function go(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,me=lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ct!==null?{id:Ve,overflow:Be}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,me=null,!0):!1;default:return!1}}function yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(O){var t=me;if(t){var n=t;if(!go(e,t)){if(yi(e))throw Error(g(418));t=lt(n.nextSibling);var r=ve;t&&go(e,t)?ru(r,n):(e.flags=e.flags&-4097|2,O=!1,ve=e)}}else{if(yi(e))throw Error(g(418));e.flags=e.flags&-4097|2,O=!1,ve=e}}}function xo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function dr(e){if(e!==ve)return!1;if(!O)return xo(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=me)){if(yi(e))throw lu(),Error(g(418));for(;t;)ru(e,t),t=lt(t.nextSibling)}if(xo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ve?lt(e.stateNode.nextSibling):null;return!0}function lu(){for(var e=me;e;)e=lt(e.nextSibling)}function Xt(){me=ve=null,O=!1}function as(e){je===null?je=[e]:je.push(e)}var Zd=Ke.ReactCurrentBatchConfig;function pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=l.refs;s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function fr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){var t=e._init;return t(e._payload)}function iu(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function l(d,u){return d=at(d,u),d.index=0,d.sibling=null,d}function i(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,u,f,h){return u===null||u.tag!==6?(u=Hl(f,d.mode,h),u.return=d,u):(u=l(u,f),u.return=d,u)}function a(d,u,f,h){var S=f.type;return S===Nt?v(d,u,f.props.children,h,f.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ye&&yo(S)===u.type)?(h=l(u,f.props),h.ref=pn(d,u,f),h.return=d,h):(h=Lr(f.type,f.key,f.props,null,d.mode,h),h.ref=pn(d,u,f),h.return=d,h)}function c(d,u,f,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Wl(f,d.mode,h),u.return=d,u):(u=l(u,f.children||[]),u.return=d,u)}function v(d,u,f,h,S){return u===null||u.tag!==7?(u=St(f,d.mode,h,S),u.return=d,u):(u=l(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Hl(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case tr:return f=Lr(u.type,u.key,u.props,null,d.mode,f),f.ref=pn(d,null,u),f.return=d,f;case It:return u=Wl(u,d.mode,f),u.return=d,u;case Ye:var h=u._init;return m(d,h(u._payload),f)}if(gn(u)||an(u))return u=St(u,d.mode,f,null),u.return=d,u;fr(d,u)}return null}function p(d,u,f,h){var S=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:o(d,u,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===S?a(d,u,f,h):null;case It:return f.key===S?c(d,u,f,h):null;case Ye:return S=f._init,p(d,u,S(f._payload),h)}if(gn(f)||an(f))return S!==null?null:v(d,u,f,h,null);fr(d,f)}return null}function x(d,u,f,h,S){if(typeof h=="string"&&h!==""||typeof h=="number")return d=d.get(f)||null,o(u,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case tr:return d=d.get(h.key===null?f:h.key)||null,a(u,d,h,S);case It:return d=d.get(h.key===null?f:h.key)||null,c(u,d,h,S);case Ye:var C=h._init;return x(d,u,f,C(h._payload),S)}if(gn(h)||an(h))return d=d.get(f)||null,v(u,d,h,S,null);fr(u,h)}return null}function y(d,u,f,h){for(var S=null,C=null,P=u,M=u=0,U=null;P!==null&&M<f.length;M++){P.index>M?(U=P,P=null):U=P.sibling;var z=p(d,P,f[M],h);if(z===null){P===null&&(P=U);break}e&&P&&z.alternate===null&&t(d,P),u=i(z,u,M),C===null?S=z:C.sibling=z,C=z,P=U}if(M===f.length)return n(d,P),O&&ht(d,M),S;if(P===null){for(;M<f.length;M++)P=m(d,f[M],h),P!==null&&(u=i(P,u,M),C===null?S=P:C.sibling=P,C=P);return O&&ht(d,M),S}for(P=r(d,P);M<f.length;M++)U=x(P,d,M,f[M],h),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?M:U.key),u=i(U,u,M),C===null?S=U:C.sibling=U,C=U);return e&&P.forEach(function(Pe){return t(d,Pe)}),O&&ht(d,M),S}function w(d,u,f,h){var S=an(f);if(typeof S!="function")throw Error(g(150));if(f=S.call(f),f==null)throw Error(g(151));for(var C=S=null,P=u,M=u=0,U=null,z=f.next();P!==null&&!z.done;M++,z=f.next()){P.index>M?(U=P,P=null):U=P.sibling;var Pe=p(d,P,z.value,h);if(Pe===null){P===null&&(P=U);break}e&&P&&Pe.alternate===null&&t(d,P),u=i(Pe,u,M),C===null?S=Pe:C.sibling=Pe,C=Pe,P=U}if(z.done)return n(d,P),O&&ht(d,M),S;if(P===null){for(;!z.done;M++,z=f.next())z=m(d,z.value,h),z!==null&&(u=i(z,u,M),C===null?S=z:C.sibling=z,C=z);return O&&ht(d,M),S}for(P=r(d,P);!z.done;M++,z=f.next())z=x(P,d,M,z.value,h),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?M:z.key),u=i(z,u,M),C===null?S=z:C.sibling=z,C=z);return e&&P.forEach(function(sn){return t(d,sn)}),O&&ht(d,M),S}function R(d,u,f,h){if(typeof f=="object"&&f!==null&&f.type===Nt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var S=f.key,C=u;C!==null;){if(C.key===S){if(S=f.type,S===Nt){if(C.tag===7){n(d,C.sibling),u=l(C,f.props.children),u.return=d,d=u;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ye&&yo(S)===C.type){n(d,C.sibling),u=l(C,f.props),u.ref=pn(d,C,f),u.return=d,d=u;break e}n(d,C);break}else t(d,C);C=C.sibling}f.type===Nt?(u=St(f.props.children,d.mode,h,f.key),u.return=d,d=u):(h=Lr(f.type,f.key,f.props,null,d.mode,h),h.ref=pn(d,u,f),h.return=d,d=h)}return s(d);case It:e:{for(C=f.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=l(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Wl(f,d.mode,h),u.return=d,d=u}return s(d);case Ye:return C=f._init,R(d,u,C(f._payload),h)}if(gn(f))return y(d,u,f,h);if(an(f))return w(d,u,f,h);fr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=l(u,f),u.return=d,d=u):(n(d,u),u=Hl(f,d.mode,h),u.return=d,d=u),s(d)):n(d,u)}return R}var Zt=iu(!0),su=iu(!1),Ur=ft(null),Hr=null,Vt=null,us=null;function cs(){us=Vt=Hr=null}function ds(e){var t=Ur.current;D(Ur),e._currentValue=t}function ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kt(e,t){Hr=e,us=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ue=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Hr===null)throw Error(g(308));Vt=e,Hr.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var yt=null;function fs(e){yt===null?yt=[e]:yt.push(e)}function ou(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fs(t)):(n.next=l.next,l.next=n),t.interleaved=n,Qe(e,r)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function it(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Qe(e,n)}return l=r.interleaved,l===null?(t.next=t,fs(r)):(t.next=l.next,l.next=t),r.interleaved=t,Qe(e,n)}function Sr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function wo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wr(e,t,n,r){var l=e.updateQueue;Je=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var a=o,c=a.next;a.next=null,s===null?i=c:s.next=c,s=a;var v=e.alternate;v!==null&&(v=v.updateQueue,o=v.lastBaseUpdate,o!==s&&(o===null?v.firstBaseUpdate=c:o.next=c,v.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;s=0,v=c=a=null,o=i;do{var p=o.lane,x=o.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,w=o;switch(p=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(x,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(x,m,p):y,p==null)break e;m=V({},m,p);break e;case 2:Je=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[o]:p.push(o))}else x={eventTime:x,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},v===null?(c=v=x,a=m):v=v.next=x,s|=p;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;p=o,o=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(v===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Mt|=s,e.lanes=s,e.memoizedState=m}}function ko(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var Xn={},Oe=ft(Xn),Vn=ft(Xn),Bn=ft(Xn);function wt(e){if(e===Xn)throw Error(g(174));return e}function ms(e,t){switch(T(Bn,t),T(Vn,e),T(Oe,Xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ti(t,e)}D(Oe),T(Oe,t)}function qt(){D(Oe),D(Vn),D(Bn)}function uu(e){wt(Bn.current);var t=wt(Oe.current),n=ti(t,e.type);t!==n&&(T(Vn,e),T(Oe,n))}function vs(e){Vn.current===e&&(D(Oe),D(Vn))}var b=ft(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function hs(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var Er=Ke.ReactCurrentDispatcher,bl=Ke.ReactCurrentBatchConfig,Pt=0,F=null,$=null,Y=null,$r=!1,Pn=!1,Un=0,qd=0;function ee(){throw Error(g(321))}function gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ne(e[n],t[n]))return!1;return!0}function xs(e,t,n,r,l,i){if(Pt=i,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?rf:lf,e=n(r,l),Pn){i=0;do{if(Pn=!1,Un=0,25<=i)throw Error(g(301));i+=1,Y=$=null,t.updateQueue=null,Er.current=sf,e=n(r,l)}while(Pn)}if(Er.current=Kr,t=$!==null&&$.next!==null,Pt=0,Y=$=F=null,$r=!1,t)throw Error(g(300));return e}function ys(){var e=Un!==0;return Un=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?F.memoizedState=Y=e:Y=Y.next=e,Y}function Ce(){if($===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=$.next;var t=Y===null?F.memoizedState:Y.next;if(t!==null)Y=t,$=e;else{if(e===null)throw Error(g(310));$=e,e={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},Y===null?F.memoizedState=Y=e:Y=Y.next=e}return Y}function Hn(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=$,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var o=s=null,a=null,c=i;do{var v=c.lane;if((Pt&v)===v)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(o=a=m,s=r):a=a.next=m,F.lanes|=v,Mt|=v}c=c.next}while(c!==null&&c!==i);a===null?s=r:a.next=o,Ne(r,t.memoizedState)||(ue=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,F.lanes|=i,Mt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);Ne(i,t.memoizedState)||(ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function cu(){}function du(e,t){var n=F,r=Ce(),l=t(),i=!Ne(r.memoizedState,l);if(i&&(r.memoizedState=l,ue=!0),r=r.queue,ws(mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,Wn(9,pu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(g(349));Pt&30||fu(n,t,l)}return l}function fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pu(e,t,n,r){t.value=n,t.getSnapshot=r,vu(t)&&hu(e)}function mu(e,t,n){return n(function(){vu(t)&&hu(e)})}function vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ne(e,n)}catch{return!0}}function hu(e){var t=Qe(e,1);t!==null&&Ie(t,e,1,-1)}function So(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:e},t.queue=e,e=e.dispatch=nf.bind(null,F,e),[t.memoizedState,e]}function Wn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gu(){return Ce().memoizedState}function Cr(e,t,n,r){var l=Ae();F.flags|=e,l.memoizedState=Wn(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=Ce();r=r===void 0?null:r;var i=void 0;if($!==null){var s=$.memoizedState;if(i=s.destroy,r!==null&&gs(r,s.deps)){l.memoizedState=Wn(t,n,i,r);return}}F.flags|=e,l.memoizedState=Wn(1|t,n,i,r)}function Eo(e,t){return Cr(8390656,8,e,t)}function ws(e,t){return sl(2048,8,e,t)}function xu(e,t){return sl(4,2,e,t)}function yu(e,t){return sl(4,4,e,t)}function wu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ku(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,wu.bind(null,t,e),n)}function ks(){}function Su(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eu(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cu(e,t,n){return Pt&21?(Ne(n,t)||(n=ja(),F.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=n)}function ef(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{N=n,bl.transition=r}}function Pu(){return Ce().memoizedState}function tf(e,t,n){var r=ot(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mu(e))_u(t,n);else if(n=ou(e,t,n,r),n!==null){var l=ie();Ie(n,e,r,l),Lu(n,t,r)}}function nf(e,t,n){var r=ot(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))_u(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,n);if(l.hasEagerState=!0,l.eagerState=o,Ne(o,s)){var a=t.interleaved;a===null?(l.next=l,fs(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=ou(e,t,l,r),n!==null&&(l=ie(),Ie(n,e,r,l),Lu(n,t,r))}}function Mu(e){var t=e.alternate;return e===F||t!==null&&t===F}function _u(e,t){Pn=$r=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Kr={readContext:Ee,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},rf={readContext:Ee,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Eo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,wu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tf.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:So,useDebugValue:ks,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=So(!1),t=e[0];return e=ef.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=F,l=Ae();if(O){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),J===null)throw Error(g(349));Pt&30||fu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Eo(mu.bind(null,r,i,e),[e]),r.flags|=2048,Wn(9,pu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ae(),t=J.identifierPrefix;if(O){var n=Be,r=Ve;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Un++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lf={readContext:Ee,useCallback:Su,useContext:Ee,useEffect:ws,useImperativeHandle:ku,useInsertionEffect:xu,useLayoutEffect:yu,useMemo:Eu,useReducer:Fl,useRef:gu,useState:function(){return Fl(Hn)},useDebugValue:ks,useDeferredValue:function(e){var t=Ce();return Cu(t,$.memoizedState,e)},useTransition:function(){var e=Fl(Hn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:cu,useSyncExternalStore:du,useId:Pu,unstable_isNewReconciler:!1},sf={readContext:Ee,useCallback:Su,useContext:Ee,useEffect:ws,useImperativeHandle:ku,useInsertionEffect:xu,useLayoutEffect:yu,useMemo:Eu,useReducer:Vl,useRef:gu,useState:function(){return Vl(Hn)},useDebugValue:ks,useDeferredValue:function(e){var t=Ce();return $===null?t.memoizedState=e:Cu(t,$.memoizedState,e)},useTransition:function(){var e=Vl(Hn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:cu,useSyncExternalStore:du,useId:Pu,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Si(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ie(),l=ot(e),i=Ue(r,l);i.payload=t,n!=null&&(i.callback=n),t=it(e,i,l),t!==null&&(Ie(t,e,l,r),Sr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ie(),l=ot(e),i=Ue(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=it(e,i,l),t!==null&&(Ie(t,e,l,r),Sr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),r=ot(e),l=Ue(n,r);l.tag=2,t!=null&&(l.callback=t),t=it(e,l,r),t!==null&&(Ie(t,e,r,n),Sr(t,e,r))}};function Co(e,t,n,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Rn(n,r)||!Rn(l,i):!0}function ju(e,t,n){var r=!1,l=ct,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=de(t)?Et:re.current,r=t.contextTypes,i=(r=r!=null)?Jt(e,l):ct),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Po(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function Ei(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ps(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=de(t)?Et:re.current,l.context=Jt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Si(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ol.enqueueReplaceState(l,l.state,null),Wr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function en(e,t){try{var n="",r=t;do n+=Tc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ci(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var of=typeof WeakMap=="function"?WeakMap:Map;function zu(e,t,n){n=Ue(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yr||(Yr=!0,Ai=r),Ci(e,t)},n}function Iu(e,t,n){n=Ue(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ci(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ci(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Mo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=kf.bind(null,e,t,n),t.then(e,e))}function _o(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lo(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ue(-1,1),t.tag=2,it(n,t,1))),n.lanes|=1),e)}var af=Ke.ReactCurrentOwner,ue=!1;function le(e,t,n,r){t.child=e===null?su(t,null,n,r):Zt(t,e.child,n,r)}function jo(e,t,n,r,l){n=n.render;var i=t.ref;return Kt(t,l),r=xs(e,t,n,r,i,l),n=ys(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,$e(e,t,l)):(O&&n&&ss(t),t.flags|=1,le(e,t,r,l),t.child)}function zo(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!js(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Nu(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Rn,n(s,r)&&e.ref===t.ref)return $e(e,t,l)}return t.flags|=1,e=at(i,r),e.ref=t.ref,e.return=t,t.child=e}function Nu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Rn(i,r)&&e.ref===t.ref)if(ue=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ue=!0);else return t.lanes=e.lanes,$e(e,t,l)}return Pi(e,t,n,r,l)}function Tu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},T(Ut,pe),pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,T(Ut,pe),pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,T(Ut,pe),pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,T(Ut,pe),pe|=r;return le(e,t,l,n),t.child}function Au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pi(e,t,n,r,l){var i=de(n)?Et:re.current;return i=Jt(t,i),Kt(t,l),n=xs(e,t,n,r,i,l),r=ys(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,$e(e,t,l)):(O&&r&&ss(t),t.flags|=1,le(e,t,n,l),t.child)}function Io(e,t,n,r,l){if(de(n)){var i=!0;Fr(t)}else i=!1;if(Kt(t,l),t.stateNode===null)Pr(e,t),ju(t,n,r),Ei(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=de(n)?Et:re.current,c=Jt(t,c));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||a!==c)&&Po(t,s,r,c),Je=!1;var p=t.memoizedState;s.state=p,Wr(t,r,s,l),a=t.memoizedState,o!==r||p!==a||ce.current||Je?(typeof v=="function"&&(Si(t,n,v,r),a=t.memoizedState),(o=Je||Co(t,n,o,r,p,a,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,au(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:_e(t.type,o),s.props=c,m=t.pendingProps,p=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=de(n)?Et:re.current,a=Jt(t,a));var x=n.getDerivedStateFromProps;(v=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==m||p!==a)&&Po(t,s,r,a),Je=!1,p=t.memoizedState,s.state=p,Wr(t,r,s,l);var y=t.memoizedState;o!==m||p!==y||ce.current||Je?(typeof x=="function"&&(Si(t,n,x,r),y=t.memoizedState),(c=Je||Co(t,n,c,r,p,y,a)||!1)?(v||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Mi(e,t,n,r,i,l)}function Mi(e,t,n,r,l,i){Au(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&ho(t,n,!1),$e(e,t,i);r=t.stateNode,af.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Zt(t,e.child,null,i),t.child=Zt(t,null,o,i)):le(e,t,o,i),t.memoizedState=r.state,l&&ho(t,n,!0),t.child}function Du(e){var t=e.stateNode;t.pendingContext?vo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vo(e,t.context,!1),ms(e,t.containerInfo)}function No(e,t,n,r,l){return Xt(),as(l),t.flags|=256,le(e,t,n,r),t.child}var _i={dehydrated:null,treeContext:null,retryLane:0};function Li(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ru(e,t,n){var r=t.pendingProps,l=b.current,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),T(b,l&1),e===null)return wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=cl(s,r,0,null),e=St(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Li(n),t.memoizedState=_i,e):Ss(t,s));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return uf(e,t,s,r,o,l,n);if(i){i=r.fallback,s=t.mode,l=e.child,o=l.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=at(l,a),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=at(o,i):(i=St(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Li(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=_i,r}return i=e.child,e=i.sibling,r=at(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ss(e,t){return t=cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pr(e,t,n,r){return r!==null&&as(r),Zt(t,e.child,null,n),e=Ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uf(e,t,n,r,l,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(g(422))),pr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=cl({mode:"visible",children:r.children},l,0,null),i=St(i,l,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Zt(t,e.child,null,s),t.child.memoizedState=Li(s),t.memoizedState=_i,i);if(!(t.mode&1))return pr(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(g(419)),r=Bl(i,r,void 0),pr(e,t,s,r)}if(o=(s&e.childLanes)!==0,ue||o){if(r=J,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Qe(e,l),Ie(r,e,l,-1))}return Ls(),r=Bl(Error(g(421))),pr(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Sf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,me=lt(l.nextSibling),ve=t,O=!0,je=null,e!==null&&(ye[we++]=Ve,ye[we++]=Be,ye[we++]=Ct,Ve=e.id,Be=e.overflow,Ct=t),t=Ss(t,r.children),t.flags|=4096,t)}function To(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ki(e.return,t,n)}function Ul(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ou(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(le(e,t,r.children,n),r=b.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&To(e,n,t);else if(e.tag===19)To(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(T(b,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Qr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ul(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Qr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ul(t,!0,n,null,i);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $e(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=at(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=at(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cf(e,t,n){switch(t.tag){case 3:Du(t),Xt();break;case 5:uu(t);break;case 1:de(t.type)&&Fr(t);break;case 4:ms(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;T(Ur,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(T(b,b.current&1),t.flags|=128,null):n&t.child.childLanes?Ru(e,t,n):(T(b,b.current&1),e=$e(e,t,n),e!==null?e.sibling:null);T(b,b.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ou(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),T(b,b.current),r)break;return null;case 22:case 23:return t.lanes=0,Tu(e,t,n)}return $e(e,t,n)}var bu,ji,Fu,Vu;bu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ji=function(){};Fu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,wt(Oe.current);var i=null;switch(n){case"input":l=Xl(e,l),r=Xl(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=ei(e,l),r=ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Or)}ni(n,r);var s;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var o=l[c];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(o=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==o&&(a!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&o[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&A("scroll",e),i||o===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Vu=function(e,t,n,r){n!==r&&(t.flags|=4)};function mn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function df(e,t,n){var r=t.pendingProps;switch(os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return de(t.type)&&br(),te(t),null;case 3:return r=t.stateNode,qt(),D(ce),D(re),hs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&(Oi(je),je=null))),ji(e,t),te(t),null;case 5:vs(t);var l=wt(Bn.current);if(n=t.type,e!==null&&t.stateNode!=null)Fu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return te(t),null}if(e=wt(Oe.current),dr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[De]=t,r[Fn]=i,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<yn.length;l++)A(yn[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":Bs(r,i),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},A("invalid",r);break;case"textarea":Hs(r,i),A("invalid",r)}ni(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&cr(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&cr(r.textContent,o,e),l=["children",""+o]):jn.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&A("scroll",r)}switch(n){case"input":nr(r),Us(r,i,!0);break;case"textarea":nr(r),Ws(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Or)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ma(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[De]=t,e[Fn]=r,bu(e,t,!1,!1),t.stateNode=e;e:{switch(s=ri(n,r),n){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<yn.length;l++)A(yn[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":Bs(e,r),l=Xl(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),A("invalid",e);break;case"textarea":Hs(e,r),l=ei(e,r),A("invalid",e);break;default:l=r}ni(n,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="style"?ga(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&va(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&zn(e,a):typeof a=="number"&&zn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&A("scroll",e):a!=null&&$i(e,i,a,s))}switch(n){case"input":nr(e),Us(e,r,!1);break;case"textarea":nr(e),Ws(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ut(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ht(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Or)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)Vu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=wt(Bn.current),wt(Oe.current),dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[De]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[De]=t,t.stateNode=r}return te(t),null;case 13:if(D(b),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&me!==null&&t.mode&1&&!(t.flags&128))lu(),Xt(),t.flags|=98560,i=!1;else if(i=dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[De]=t}else Xt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;te(t),i=!1}else je!==null&&(Oi(je),je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||b.current&1?K===0&&(K=3):Ls())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return qt(),ji(e,t),e===null&&On(t.stateNode.containerInfo),te(t),null;case 10:return ds(t.type._context),te(t),null;case 17:return de(t.type)&&br(),te(t),null;case 19:if(D(b),i=t.memoizedState,i===null)return te(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)mn(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Qr(e),s!==null){for(t.flags|=128,mn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return T(b,b.current&1|2),t.child}e=e.sibling}i.tail!==null&&W()>tn&&(t.flags|=128,r=!0,mn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Qr(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!O)return te(t),null}else 2*W()-i.renderingStartTime>tn&&n!==1073741824&&(t.flags|=128,r=!0,mn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=W(),t.sibling=null,n=b.current,T(b,r?n&1|2:n&1),t):(te(t),null);case 22:case 23:return _s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?pe&1073741824&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function ff(e,t){switch(os(t),t.tag){case 1:return de(t.type)&&br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(),D(ce),D(re),hs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vs(t),null;case 13:if(D(b),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));Xt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(b),null;case 4:return qt(),null;case 10:return ds(t.type._context),null;case 22:case 23:return _s(),null;case 24:return null;default:return null}}var mr=!1,ne=!1,pf=typeof WeakSet=="function"?WeakSet:Set,k=null;function Bt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function zi(e,t,n){try{n()}catch(r){B(e,t,r)}}var Ao=!1;function mf(e,t){if(pi=Ar,e=Qa(),is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,o=-1,a=-1,c=0,v=0,m=e,p=null;t:for(;;){for(var x;m!==n||l!==0&&m.nodeType!==3||(o=s+l),m!==i||r!==0&&m.nodeType!==3||(a=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(x=m.firstChild)!==null;)p=m,m=x;for(;;){if(m===e)break t;if(p===n&&++c===l&&(o=s),p===i&&++v===r&&(a=s),(x=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=x}n=o===-1||a===-1?null:{start:o,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Ar=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,R=y.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:_e(t.type,w),R);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(h){B(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return y=Ao,Ao=!1,y}function Mn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&zi(t,n,i)}l=l.next}while(l!==r)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ii(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bu(e){var t=e.alternate;t!==null&&(e.alternate=null,Bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[De],delete t[Fn],delete t[gi],delete t[Yd],delete t[Jd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uu(e){return e.tag===5||e.tag===3||e.tag===4}function Do(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ni(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Or));else if(r!==4&&(e=e.child,e!==null))for(Ni(e,t,n),e=e.sibling;e!==null;)Ni(e,t,n),e=e.sibling}function Ti(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ti(e,t,n),e=e.sibling;e!==null;)Ti(e,t,n),e=e.sibling}var X=null,Le=!1;function Ge(e,t,n){for(n=n.child;n!==null;)Hu(e,t,n),n=n.sibling}function Hu(e,t,n){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(el,n)}catch{}switch(n.tag){case 5:ne||Bt(n,t);case 6:var r=X,l=Le;X=null,Ge(e,t,n),X=r,Le=l,X!==null&&(Le?(e=X,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):X.removeChild(n.stateNode));break;case 18:X!==null&&(Le?(e=X,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),An(e)):Dl(X,n.stateNode));break;case 4:r=X,l=Le,X=n.stateNode.containerInfo,Le=!0,Ge(e,t,n),X=r,Le=l;break;case 0:case 11:case 14:case 15:if(!ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&zi(n,t,s),l=l.next}while(l!==r)}Ge(e,t,n);break;case 1:if(!ne&&(Bt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){B(n,t,o)}Ge(e,t,n);break;case 21:Ge(e,t,n);break;case 22:n.mode&1?(ne=(r=ne)||n.memoizedState!==null,Ge(e,t,n),ne=r):Ge(e,t,n);break;default:Ge(e,t,n)}}function Ro(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pf),t.forEach(function(r){var l=Ef.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:X=o.stateNode,Le=!1;break e;case 3:X=o.stateNode.containerInfo,Le=!0;break e;case 4:X=o.stateNode.containerInfo,Le=!0;break e}o=o.return}if(X===null)throw Error(g(160));Hu(i,s,l),X=null,Le=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){B(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Te(e),r&4){try{Mn(3,e,e.return),al(3,e)}catch(w){B(e,e.return,w)}try{Mn(5,e,e.return)}catch(w){B(e,e.return,w)}}break;case 1:Me(t,e),Te(e),r&512&&n!==null&&Bt(n,n.return);break;case 5:if(Me(t,e),Te(e),r&512&&n!==null&&Bt(n,n.return),e.flags&32){var l=e.stateNode;try{zn(l,"")}catch(w){B(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&fa(l,i),ri(o,s);var c=ri(o,i);for(s=0;s<a.length;s+=2){var v=a[s],m=a[s+1];v==="style"?ga(l,m):v==="dangerouslySetInnerHTML"?va(l,m):v==="children"?zn(l,m):$i(l,v,m,c)}switch(o){case"input":Zl(l,i);break;case"textarea":pa(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Ht(l,!!i.multiple,x,!1):p!==!!i.multiple&&(i.defaultValue!=null?Ht(l,!!i.multiple,i.defaultValue,!0):Ht(l,!!i.multiple,i.multiple?[]:"",!1))}l[Fn]=i}catch(w){B(e,e.return,w)}}break;case 6:if(Me(t,e),Te(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){B(e,e.return,w)}}break;case 3:if(Me(t,e),Te(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{An(t.containerInfo)}catch(w){B(e,e.return,w)}break;case 4:Me(t,e),Te(e);break;case 13:Me(t,e),Te(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ps=W())),r&4&&Ro(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(c=ne)||v,Me(t,e),ne=c):Me(t,e),Te(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(k=e,v=e.child;v!==null;){for(m=k=v;k!==null;){switch(p=k,x=p.child,p.tag){case 0:case 11:case 14:case 15:Mn(4,p,p.return);break;case 1:Bt(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){B(r,n,w)}}break;case 5:Bt(p,p.return);break;case 22:if(p.memoizedState!==null){bo(m);continue}}x!==null?(x.return=p,k=x):bo(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=m.stateNode,a=m.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=ha("display",s))}catch(w){B(e,e.return,w)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){B(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(t,e),Te(e),r&4&&Ro(e);break;case 21:break;default:Me(t,e),Te(e)}}function Te(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uu(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(zn(l,""),r.flags&=-33);var i=Do(e);Ti(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,o=Do(e);Ni(e,o,s);break;default:throw Error(g(161))}}catch(a){B(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e,t,n){k=e,Qu(e)}function Qu(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var l=k,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||mr;if(!s){var o=l.alternate,a=o!==null&&o.memoizedState!==null||ne;o=mr;var c=ne;if(mr=s,(ne=a)&&!c)for(k=l;k!==null;)s=k,a=s.child,s.tag===22&&s.memoizedState!==null?Fo(l):a!==null?(a.return=s,k=a):Fo(l);for(;i!==null;)k=i,Qu(i),i=i.sibling;k=l,mr=o,ne=c}Oo(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,k=i):Oo(e)}}function Oo(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ne||al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ne)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ko(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ko(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&An(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}ne||t.flags&512&&Ii(t)}catch(p){B(t,t.return,p)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function bo(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Fo(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{al(4,t)}catch(a){B(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){B(t,l,a)}}var i=t.return;try{Ii(t)}catch(a){B(t,i,a)}break;case 5:var s=t.return;try{Ii(t)}catch(a){B(t,s,a)}}}catch(a){B(t,t.return,a)}if(t===e){k=null;break}var o=t.sibling;if(o!==null){o.return=t.return,k=o;break}k=t.return}}var hf=Math.ceil,Gr=Ke.ReactCurrentDispatcher,Es=Ke.ReactCurrentOwner,Se=Ke.ReactCurrentBatchConfig,I=0,J=null,Q=null,Z=0,pe=0,Ut=ft(0),K=0,Qn=null,Mt=0,ul=0,Cs=0,_n=null,ae=null,Ps=0,tn=1/0,be=null,Yr=!1,Ai=null,st=null,vr=!1,et=null,Jr=0,Ln=0,Di=null,Mr=-1,_r=0;function ie(){return I&6?W():Mr!==-1?Mr:Mr=W()}function ot(e){return e.mode&1?I&2&&Z!==0?Z&-Z:Zd.transition!==null?(_r===0&&(_r=ja()),_r):(e=N,e!==0||(e=window.event,e=e===void 0?16:Ra(e.type)),e):1}function Ie(e,t,n,r){if(50<Ln)throw Ln=0,Di=null,Error(g(185));Gn(e,n,r),(!(I&2)||e!==J)&&(e===J&&(!(I&2)&&(ul|=n),K===4&&Ze(e,Z)),fe(e,r),n===1&&I===0&&!(t.mode&1)&&(tn=W()+500,il&&pt()))}function fe(e,t){var n=e.callbackNode;Zc(e,t);var r=Tr(e,e===J?Z:0);if(r===0)n!==null&&Ks(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ks(n),t===1)e.tag===0?Xd(Vo.bind(null,e)):tu(Vo.bind(null,e)),Kd(function(){!(I&6)&&pt()}),n=null;else{switch(za(r)){case 1:n=Xi;break;case 4:n=_a;break;case 16:n=Nr;break;case 536870912:n=La;break;default:n=Nr}n=qu(n,$u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $u(e,t){if(Mr=-1,_r=0,I&6)throw Error(g(327));var n=e.callbackNode;if(Gt()&&e.callbackNode!==n)return null;var r=Tr(e,e===J?Z:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xr(e,r);else{t=r;var l=I;I|=2;var i=Gu();(J!==e||Z!==t)&&(be=null,tn=W()+500,kt(e,t));do try{yf();break}catch(o){Ku(e,o)}while(!0);cs(),Gr.current=i,I=l,Q!==null?t=0:(J=null,Z=0,t=K)}if(t!==0){if(t===2&&(l=ai(e),l!==0&&(r=l,t=Ri(e,l))),t===1)throw n=Qn,kt(e,0),Ze(e,r),fe(e,W()),n;if(t===6)Ze(e,r);else{if(l=e.current.alternate,!(r&30)&&!gf(l)&&(t=Xr(e,r),t===2&&(i=ai(e),i!==0&&(r=i,t=Ri(e,i))),t===1))throw n=Qn,kt(e,0),Ze(e,r),fe(e,W()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:gt(e,ae,be);break;case 3:if(Ze(e,r),(r&130023424)===r&&(t=Ps+500-W(),10<t)){if(Tr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=hi(gt.bind(null,e,ae,be),t);break}gt(e,ae,be);break;case 4:if(Ze(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-ze(r);i=1<<s,s=t[s],s>l&&(l=s),r&=~i}if(r=l,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=hi(gt.bind(null,e,ae,be),r);break}gt(e,ae,be);break;case 5:gt(e,ae,be);break;default:throw Error(g(329))}}}return fe(e,W()),e.callbackNode===n?$u.bind(null,e):null}function Ri(e,t){var n=_n;return e.current.memoizedState.isDehydrated&&(kt(e,t).flags|=256),e=Xr(e,t),e!==2&&(t=ae,ae=n,t!==null&&Oi(t)),e}function Oi(e){ae===null?ae=e:ae.push.apply(ae,e)}function gf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ne(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ze(e,t){for(t&=~Cs,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function Vo(e){if(I&6)throw Error(g(327));Gt();var t=Tr(e,0);if(!(t&1))return fe(e,W()),null;var n=Xr(e,t);if(e.tag!==0&&n===2){var r=ai(e);r!==0&&(t=r,n=Ri(e,r))}if(n===1)throw n=Qn,kt(e,0),Ze(e,t),fe(e,W()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gt(e,ae,be),fe(e,W()),null}function Ms(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(tn=W()+500,il&&pt())}}function _t(e){et!==null&&et.tag===0&&!(I&6)&&Gt();var t=I;I|=1;var n=Se.transition,r=N;try{if(Se.transition=null,N=1,e)return e()}finally{N=r,Se.transition=n,I=t,!(I&6)&&pt()}}function _s(){pe=Ut.current,D(Ut)}function kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$d(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(os(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&br();break;case 3:qt(),D(ce),D(re),hs();break;case 5:vs(r);break;case 4:qt();break;case 13:D(b);break;case 19:D(b);break;case 10:ds(r.type._context);break;case 22:case 23:_s()}n=n.return}if(J=e,Q=e=at(e.current,null),Z=pe=t,K=0,Qn=null,Cs=ul=Mt=0,ae=_n=null,yt!==null){for(t=0;t<yt.length;t++)if(n=yt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}n.pending=r}yt=null}return e}function Ku(e,t){do{var n=Q;try{if(cs(),Er.current=Kr,$r){for(var r=F.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}$r=!1}if(Pt=0,Y=$=F=null,Pn=!1,Un=0,Es.current=null,n===null||n.return===null){K=1,Qn=t,Q=null;break}e:{var i=e,s=n.return,o=n,a=t;if(t=Z,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,v=o,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var x=_o(s);if(x!==null){x.flags&=-257,Lo(x,s,o,i,t),x.mode&1&&Mo(i,c,t),t=x,a=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){Mo(i,c,t),Ls();break e}a=Error(g(426))}}else if(O&&o.mode&1){var R=_o(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Lo(R,s,o,i,t),as(en(a,o));break e}}i=a=en(a,o),K!==4&&(K=2),_n===null?_n=[i]:_n.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=zu(i,a,t);wo(i,d);break e;case 1:o=a;var u=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(st===null||!st.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var h=Iu(i,o,t);wo(i,h);break e}}i=i.return}while(i!==null)}Ju(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Gu(){var e=Gr.current;return Gr.current=Kr,e===null?Kr:e}function Ls(){(K===0||K===3||K===2)&&(K=4),J===null||!(Mt&268435455)&&!(ul&268435455)||Ze(J,Z)}function Xr(e,t){var n=I;I|=2;var r=Gu();(J!==e||Z!==t)&&(be=null,kt(e,t));do try{xf();break}catch(l){Ku(e,l)}while(!0);if(cs(),I=n,Gr.current=r,Q!==null)throw Error(g(261));return J=null,Z=0,K}function xf(){for(;Q!==null;)Yu(Q)}function yf(){for(;Q!==null&&!Hc();)Yu(Q)}function Yu(e){var t=Zu(e.alternate,e,pe);e.memoizedProps=e.pendingProps,t===null?Ju(e):Q=t,Es.current=null}function Ju(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ff(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Q=null;return}}else if(n=df(n,t,pe),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);K===0&&(K=5)}function gt(e,t,n){var r=N,l=Se.transition;try{Se.transition=null,N=1,wf(e,t,n,r)}finally{Se.transition=l,N=r}return null}function wf(e,t,n,r){do Gt();while(et!==null);if(I&6)throw Error(g(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(qc(e,i),e===J&&(Q=J=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,qu(Nr,function(){return Gt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Se.transition,Se.transition=null;var s=N;N=1;var o=I;I|=4,Es.current=null,mf(e,n),Wu(n,e),Fd(mi),Ar=!!pi,mi=pi=null,e.current=n,vf(n),Wc(),I=o,N=s,Se.transition=i}else e.current=n;if(vr&&(vr=!1,et=e,Jr=l),i=e.pendingLanes,i===0&&(st=null),Kc(n.stateNode),fe(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Yr)throw Yr=!1,e=Ai,Ai=null,e;return Jr&1&&e.tag!==0&&Gt(),i=e.pendingLanes,i&1?e===Di?Ln++:(Ln=0,Di=e):Ln=0,pt(),null}function Gt(){if(et!==null){var e=za(Jr),t=Se.transition,n=N;try{if(Se.transition=null,N=16>e?16:e,et===null)var r=!1;else{if(e=et,et=null,Jr=0,I&6)throw Error(g(331));var l=I;for(I|=4,k=e.current;k!==null;){var i=k,s=i.child;if(k.flags&16){var o=i.deletions;if(o!==null){for(var a=0;a<o.length;a++){var c=o[a];for(k=c;k!==null;){var v=k;switch(v.tag){case 0:case 11:case 15:Mn(8,v,i)}var m=v.child;if(m!==null)m.return=v,k=m;else for(;k!==null;){v=k;var p=v.sibling,x=v.return;if(Bu(v),v===c){k=null;break}if(p!==null){p.return=x,k=p;break}k=x}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}k=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,k=s;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Mn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,k=d;break e}k=i.return}}var u=e.current;for(k=u;k!==null;){s=k;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,k=f;else e:for(s=u;k!==null;){if(o=k,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:al(9,o)}}catch(S){B(o,o.return,S)}if(o===s){k=null;break e}var h=o.sibling;if(h!==null){h.return=o.return,k=h;break e}k=o.return}}if(I=l,pt(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(el,e)}catch{}r=!0}return r}finally{N=n,Se.transition=t}}return!1}function Bo(e,t,n){t=en(n,t),t=zu(e,t,1),e=it(e,t,1),t=ie(),e!==null&&(Gn(e,1,t),fe(e,t))}function B(e,t,n){if(e.tag===3)Bo(e,e,n);else for(;t!==null;){if(t.tag===3){Bo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=en(n,e),e=Iu(t,e,1),t=it(t,e,1),e=ie(),t!==null&&(Gn(t,1,e),fe(t,e));break}}t=t.return}}function kf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(Z&n)===n&&(K===4||K===3&&(Z&130023424)===Z&&500>W()-Ps?kt(e,0):Cs|=n),fe(e,t)}function Xu(e,t){t===0&&(e.mode&1?(t=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):t=1);var n=ie();e=Qe(e,t),e!==null&&(Gn(e,t,n),fe(e,n))}function Sf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Ef(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),Xu(e,n)}var Zu;Zu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ce.current)ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ue=!1,cf(e,t,n);ue=!!(e.flags&131072)}else ue=!1,O&&t.flags&1048576&&nu(t,Br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var l=Jt(t,re.current);Kt(t,n),l=xs(null,t,r,e,l,n);var i=ys();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(r)?(i=!0,Fr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ps(t),l.updater=ol,t.stateNode=l,l._reactInternals=t,Ei(t,r,e,n),t=Mi(null,t,r,!0,i,n)):(t.tag=0,O&&i&&ss(t),le(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Pf(r),e=_e(r,e),l){case 0:t=Pi(null,t,r,e,n);break e;case 1:t=Io(null,t,r,e,n);break e;case 11:t=jo(null,t,r,e,n);break e;case 14:t=zo(null,t,r,_e(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),Pi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),Io(e,t,r,l,n);case 3:e:{if(Du(t),e===null)throw Error(g(387));r=t.pendingProps,i=t.memoizedState,l=i.element,au(e,t),Wr(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=en(Error(g(423)),t),t=No(e,t,r,n,l);break e}else if(r!==l){l=en(Error(g(424)),t),t=No(e,t,r,n,l);break e}else for(me=lt(t.stateNode.containerInfo.firstChild),ve=t,O=!0,je=null,n=su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xt(),r===l){t=$e(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return uu(t),e===null&&wi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,vi(r,l)?s=null:i!==null&&vi(r,i)&&(t.flags|=32),Au(e,t),le(e,t,s,n),t.child;case 6:return e===null&&wi(t),null;case 13:return Ru(e,t,n);case 4:return ms(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zt(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),jo(e,t,r,l,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,T(Ur,r._currentValue),r._currentValue=s,i!==null)if(Ne(i.value,s)){if(i.children===l.children&&!ce.current){t=$e(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var a=o.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ue(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?a.next=a:(a.next=v.next,v.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ki(i.return,n,t),o.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(g(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ki(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}le(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Kt(t,n),l=Ee(l),r=r(l),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,l=_e(r,t.pendingProps),l=_e(r.type,l),zo(e,t,r,l,n);case 15:return Nu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),Pr(e,t),t.tag=1,de(r)?(e=!0,Fr(t)):e=!1,Kt(t,n),ju(t,r,l),Ei(t,r,l,n),Mi(null,t,r,!0,e,n);case 19:return Ou(e,t,n);case 22:return Tu(e,t,n)}throw Error(g(156,t.tag))};function qu(e,t){return Ma(e,t)}function Cf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,n,r){return new Cf(e,t,n,r)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pf(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gi)return 11;if(e===Yi)return 14}return 2}function at(e,t){var n=e.alternate;return n===null?(n=ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var s=2;if(r=e,typeof e=="function")js(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Nt:return St(n.children,l,i,t);case Ki:s=8,l|=8;break;case Kl:return e=ke(12,n,t,l|2),e.elementType=Kl,e.lanes=i,e;case Gl:return e=ke(13,n,t,l),e.elementType=Gl,e.lanes=i,e;case Yl:return e=ke(19,n,t,l),e.elementType=Yl,e.lanes=i,e;case ua:return cl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oa:s=10;break e;case aa:s=9;break e;case Gi:s=11;break e;case Yi:s=14;break e;case Ye:s=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=ke(s,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function St(e,t,n,r){return e=ke(7,e,r,t),e.lanes=n,e}function cl(e,t,n,r){return e=ke(22,e,r,t),e.elementType=ua,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=ke(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function zs(e,t,n,r,l,i,s,o,a){return e=new Mf(e,t,n,o,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(i),e}function _f(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ec(e){if(!e)return ct;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(de(n))return eu(e,n,t)}return t}function tc(e,t,n,r,l,i,s,o,a){return e=zs(n,r,!0,e,l,i,s,o,a),e.context=ec(null),n=e.current,r=ie(),l=ot(n),i=Ue(r,l),i.callback=t??null,it(n,i,l),e.current.lanes=l,Gn(e,l,r),fe(e,r),e}function dl(e,t,n,r){var l=t.current,i=ie(),s=ot(l);return n=ec(n),t.context===null?t.context=n:t.pendingContext=n,t=Ue(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=it(l,t,s),e!==null&&(Ie(e,l,s,i),Sr(e,l,s)),s}function Zr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Uo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Is(e,t){Uo(e,t),(e=e.alternate)&&Uo(e,t)}function Lf(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ns(e){this._internalRoot=e}fl.prototype.render=Ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));dl(e,t,null,null)};fl.prototype.unmount=Ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){dl(null,e,null,null)}),t[We]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ta();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xe.length&&t!==0&&t<Xe[n].priority;n++);Xe.splice(n,0,e),n===0&&Da(e)}};function Ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ho(){}function jf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Zr(s);i.call(c)}}var s=tc(t,r,e,0,null,!1,!1,"",Ho);return e._reactRootContainer=s,e[We]=s.current,On(e.nodeType===8?e.parentNode:e),_t(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var c=Zr(a);o.call(c)}}var a=zs(e,0,!1,null,null,!1,!1,"",Ho);return e._reactRootContainer=a,e[We]=a.current,On(e.nodeType===8?e.parentNode:e),_t(function(){dl(t,a,n,r)}),a}function ml(e,t,n,r,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var o=l;l=function(){var a=Zr(s);o.call(a)}}dl(t,s,e,l)}else s=jf(n,t,e,l,r);return Zr(s)}Ia=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xn(t.pendingLanes);n!==0&&(Zi(t,n|1),fe(t,W()),!(I&6)&&(tn=W()+500,pt()))}break;case 13:_t(function(){var r=Qe(e,1);if(r!==null){var l=ie();Ie(r,e,1,l)}}),Is(e,1)}};qi=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=ie();Ie(t,e,134217728,n)}Is(e,134217728)}};Na=function(e){if(e.tag===13){var t=ot(e),n=Qe(e,t);if(n!==null){var r=ie();Ie(n,e,t,r)}Is(e,t)}};Ta=function(){return N};Aa=function(e,t){var n=N;try{return N=e,t()}finally{N=n}};ii=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ll(r);if(!l)throw Error(g(90));da(r),Zl(r,l)}}}break;case"textarea":pa(e,n);break;case"select":t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}};wa=Ms;ka=_t;var zf={usingClientEntryPoint:!1,Events:[Jn,Rt,ll,xa,ya,Ms]},vn={findFiberByHostInstance:xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ca(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hr.isDisabled&&hr.supportsFiber)try{el=hr.inject(If),Re=hr}catch{}}ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zf;ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ts(t))throw Error(g(200));return _f(e,t,null,n)};ge.createRoot=function(e,t){if(!Ts(e))throw Error(g(299));var n=!1,r="",l=nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=zs(e,1,!1,null,null,n,!1,r,l),e[We]=t.current,On(e.nodeType===8?e.parentNode:e),new Ns(t)};ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Ca(t),e=e===null?null:e.stateNode,e};ge.flushSync=function(e){return _t(e)};ge.hydrate=function(e,t,n){if(!pl(t))throw Error(g(200));return ml(null,e,t,!0,n)};ge.hydrateRoot=function(e,t,n){if(!Ts(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",s=nc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=tc(t,null,e,1,n??null,l,!1,i,s),e[We]=t.current,On(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new fl(t)};ge.render=function(e,t,n){if(!pl(t))throw Error(g(200));return ml(null,e,t,!1,n)};ge.unmountComponentAtNode=function(e){if(!pl(e))throw Error(g(40));return e._reactRootContainer?(_t(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1};ge.unstable_batchedUpdates=Ms;ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pl(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return ml(e,t,n,!1,r)};ge.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),ra.exports=ge;var Nf=ra.exports,Wo=Nf;Ql.createRoot=Wo.createRoot,Ql.hydrateRoot=Wo.hydrateRoot;const vl=e=>{if(!(typeof window>"u"))return window[e]},$n=()=>vl("anime"),lc=(e,t)=>{let n;return(...r)=>{const l=()=>{clearTimeout(n),e(...r)};clearTimeout(n),n=setTimeout(l,t)}},Tf=()=>{const e=document.querySelectorAll(".reveal-element");if(!e.length)return;const t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("revealed")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});e.forEach(n=>{t.observe(n)})},Af=()=>{if(!document.getElementById("typed-text"))return;const t=vl("Typed");t&&new t("#typed-text",{strings:["AI/ML Developer","Software Engineer","Full-Stack Developer","Data Analyst","Problem Solver","Machine Learning Enthusiast"],typeSpeed:80,backSpeed:40,backDelay:2e3,startDelay:500,loop:!0,showCursor:!1})},Df=()=>{if(!document.getElementById("featured-projects"))return;const t=vl("Splide");t&&new t("#featured-projects",{type:"loop",perPage:1,perMove:1,gap:"2rem",autoplay:!0,interval:5e3,pauseOnHover:!0,arrows:!0,pagination:!0,breakpoints:{768:{perPage:1,gap:"1rem"}}}).mount()},Rf=()=>{const e=document.getElementById("project-search"),t=document.querySelectorAll(".filter-btn"),n=document.querySelectorAll("#projects-grid .project-card");if(!e||!t.length||!n.length)return;let r="all";t.forEach(s=>{s.addEventListener("click",()=>{t.forEach(o=>o.classList.remove("active")),s.classList.add("active"),r=s.dataset.filter,i()})});const l=lc(()=>{i()},300);e.addEventListener("input",l);function i(){const s=e.value.toLowerCase();n.forEach(o=>{const a=o.dataset.category,c=o.dataset.title.toLowerCase(),v=r==="all"||a===r,m=s===""||c.includes(s);if(v&&m){o.style.display="block";const p=$n();p&&p({targets:o,opacity:[0,1],translateY:[20,0],duration:300,easing:"easeOutQuad"})}else{const p=$n();p?p({targets:o,opacity:[1,0],translateY:[0,-20],duration:200,easing:"easeInQuad",complete:()=>{o.style.display="none"}}):o.style.display="none"}})}},Of=()=>{const e=document.getElementById("radar-chart");if(!e)return;const t=vl("echarts");if(!t)return;const n=t.init(e),r={backgroundColor:"transparent",radar:{indicator:[{name:"Python",max:100},{name:"JavaScript",max:100},{name:"Machine Learning",max:100},{name:"React",max:100},{name:"Node.js",max:100},{name:"Databases",max:100},{name:"AI/ML",max:100},{name:"Web Development",max:100}],shape:"polygon",splitNumber:4,axisName:{color:"#f8fafc",fontSize:12,fontFamily:"Inter"},splitLine:{lineStyle:{color:"rgba(59, 130, 246, 0.2)"}},splitArea:{show:!1},axisLine:{lineStyle:{color:"rgba(59, 130, 246, 0.3)"}}},series:[{name:"Skills",type:"radar",data:[{value:[95,90,90,90,85,80,90,90],name:"Current Skills",areaStyle:{color:"rgba(59, 130, 246, 0.2)"},lineStyle:{color:"#3b82f6",width:2},itemStyle:{color:"#3b82f6",borderColor:"#1e293b",borderWidth:2}}],animationDuration:2e3,animationEasing:"cubicOut"}]};n.setOption(r),window.addEventListener("resize",()=>{n.resize()})},bf=()=>{const e=document.querySelectorAll(".progress-fill");if(!e.length)return;const t=new IntersectionObserver(n=>{n.forEach(r=>{if(r.isIntersecting){const l=r.target.style.width;r.target.style.width="0%";const i=$n();i?i({targets:r.target,width:l,duration:1500,easing:"easeOutQuad",delay:200}):r.target.style.width=l}})},{threshold:.5});e.forEach(n=>t.observe(n))},Ff=()=>{const e=document.getElementById("mobile-menu-btn");e&&e.addEventListener("click",()=>{alert("Mobile menu functionality - can be expanded with a dropdown menu")})},Vf=e=>{const t=document.getElementById(`modal-${e}`);if(!t)return;t.classList.add("active"),document.body.style.overflow="hidden";const n=t.querySelector(".modal-content"),r=$n();r&&n&&r({targets:n,scale:[.8,1],opacity:[0,1],duration:300,easing:"easeOutQuad"})},bi=e=>{const t=document.getElementById(`modal-${e}`);if(!t)return;const n=t.querySelector(".modal-content"),r=$n();r&&n?r({targets:n,scale:[1,.8],opacity:[1,0],duration:200,easing:"easeInQuad",complete:()=>{t.classList.remove("active"),document.body.style.overflow=""}}):(t.classList.remove("active"),document.body.style.overflow="")},Bf=()=>{document.addEventListener("click",e=>{if(e.target.classList.contains("modal")){const t=e.target.id.replace("modal-","");bi(t)}}),document.addEventListener("keydown",e=>{if(e.key==="Escape"){const t=document.querySelector(".modal.active");if(t){const n=t.id.replace("modal-","");bi(n)}}})},Uf=()=>{document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{const n=e.getAttribute("href");if(!n)return;const r=document.querySelector(n);r&&(t.preventDefault(),r.scrollIntoView({behavior:"smooth",block:"start"}))})})},Hf=async()=>{try{const e=await fetch("cert-links.json");if(!e.ok)return;const t=await e.json();document.querySelectorAll("[data-cert]").forEach(n=>{const r=n.getAttribute("data-cert");t[r]&&(n.setAttribute("href",t[r]),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener noreferrer"))})}catch(e){console.warn("cert-links.json not loaded:",e)}},Wf=()=>{const e=document.querySelectorAll("img[data-src]");if(!e.length)return;const t=new IntersectionObserver(n=>{n.forEach(r=>{if(r.isIntersecting){const l=r.target;l.src=l.dataset.src,l.removeAttribute("data-src"),t.unobserve(l)}})});e.forEach(n=>t.observe(n))},Qf=()=>{const e=Array.from(document.querySelectorAll(".nav-link"));if(!e.length)return;const t=e.map(r=>{const l=r.getAttribute("href");if(!l||!l.startsWith("#"))return null;const i=document.querySelector(l);return i?{link:r,section:i}:null}).filter(Boolean);if(!t.length)return;const n=new IntersectionObserver(r=>{r.forEach(l=>{if(l.isIntersecting){e.forEach(s=>s.classList.remove("active"));const i=t.find(s=>s.section===l.target);i&&i.link.classList.add("active")}})},{threshold:.4});t.forEach(r=>n.observe(r.section))},$f=()=>{Tf(),Af(),Df(),Rf(),Of(),bf(),Ff(),Uf(),Bf(),Qf(),Wf(),Hf(),window.addEventListener("resize",lc(()=>{},150)),window.addEventListener("beforeunload",()=>{document.body.style.opacity="0.7"}),window.addEventListener("error",e=>{console.warn("Portfolio warning:",e.message)}),console.log("%c👋 Hello! Welcome to Mevin Jose's Portfolio","color: #3b82f6; font-size: 16px; font-weight: bold;"),console.log("%cBuilt with modern web technologies and lots of ☕","color: #64748b; font-size: 12px;"),console.log("%cFeel free to explore the code and reach out for collaboration!","color: #10b981; font-size: 12px;"),window.openModal=Vf,window.closeModal=bi},Kf=`
  <nav class="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
    <div class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <a href="#home" class="text-xl font-bold gradient-text" style="text-decoration:none;">Mevin Jose
          Portfolio</a>
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="nav-link active text-slate-300 hover:text-white">Home</a>
          <a href="#projects" class="nav-link text-slate-300 hover:text-white">Projects</a>
          <a href="#skills" class="nav-link text-slate-300 hover:text-white">Skills</a>
          <a href="#contact" class="nav-link text-slate-300 hover:text-white">Contact</a>
        </div>
        <button class="md:hidden text-slate-300 hover:text-white" id="mobile-menu-btn">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <section id="home" class="min-h-screen flex items-center justify-center pt-20 px-6">
    <div class="hero-bg"></div>
    <div class="max-w-6xl mx-auto text-center">
      <div class="reveal-element">
        <img src="resources/profile-avatar.png" alt="Mevin Jose Profile Pic"
          class="profile-avatar mx-auto mb-8 floating-animation">
      </div>

      <div class="reveal-element">
        <h1 class="hero-title text-5xl md:text-7xl font-bold mb-6">
          <span class="gradient-text" id="typed-text"></span>
          <span class="typewriter-cursor">|</span>
        </h1>
      </div>

      <div class="reveal-element">
        <p class="hero-subtitle text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Turning ideas into impactful products with AI and modern web tech. Building smart, scalable
          solutions for tomorrow.
        </p>
      </div>

      <div class="reveal-element flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <a href="#projects"
          class="border border-slate-600 px-8 py-3 rounded-lg font-semibold text-slate-300 transition-all btn-highlight-hover">
          View My Work
        </a>
        <a href="#contact"
          class="border border-slate-600 px-8 py-3 rounded-lg font-semibold text-slate-300 hover:text-white hover:border-slate-400 transition-all btn-highlight-hover">
          Get In Touch
        </a>
        <a href="Mevin%20Jose%20Resume.pdf" download
          class="border border-slate-600 px-8 py-3 rounded-lg font-semibold text-slate-300 hover:text-white hover:border-slate-400 transition-all btn-highlight-hover">
          Download Resume
        </a>
      </div>

      <div class="reveal-element flex justify-center space-x-6 text-slate-400">
        <a href="https://github.com/MJenius" target="_blank" class="skill-icon hover:text-blue-400">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a href="https://leetcode.com/u/mjenius1357/" target="_blank" class="skill-icon hover:text-orange-400">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0L1.605 6.021v7.958L12 19.5l10.395-5.521V6.021L12 0zm0 2.5l7.5 4.5v6l-7.5 4.5-7.5-4.5v-6l7.5-4.5z" />
          </svg>
        </a>
        <a href="mailto:mjenius1357@gmail.com" class="skill-icon hover:text-green-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 reveal-element">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          A showcase of my most impactful work in AI/ML and full-stack development
        </p>
      </div>

      <div class="splide reveal-element" id="featured-projects">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <div class="project-card p-8 rounded-xl card-hover">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Demand Forecasting ML</h3>
                    <p class="text-slate-400">MLOps • End-to-End • Production</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-6">
                  End-to-end retail demand forecasting with hybrid ML + statistical models,
                  drift detection, and auto-retraining pipeline.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Python</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">LightGBM</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">FastAPI</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Pandas</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="text-sm text-slate-400">
                    <span class="text-green-400">●</span> ↓25% MAE improvement
                  </div>
                  <a href="https://github.com/MJenius/Demand-Forecasting-ML-System" target="_blank"
                    class="text-blue-400 hover:text-blue-300 transition-colors">
                    View Code →
                  </a>
                </div>
              </div>
            </li>

            <li class="splide__slide">
              <div class="project-card p-8 rounded-xl card-hover">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">AEGIS Surveillance</h3>
                    <p class="text-slate-400">CV • Security • Top-10 Hackathon</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-6">
                  Tamper-resistant surveillance system using HMAC-SHA256 watermarking and real-time
                  tamper detection (blur, glare, blackout).
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Python</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">OpenCV</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Flask</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Socket.IO</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="text-sm text-slate-400">
                    <span class="text-green-400">●</span> &lt;2% false positives
                  </div>
                  <a href="https://github.com/ZeroDeaths7/AegisAI-tamper-resistent-surveillance-system"
                    target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors">
                    View Code →
                  </a>
                </div>
              </div>
            </li>

            <li class="splide__slide">
              <div class="project-card p-8 rounded-xl card-hover">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Adaptive Traffic Control</h3>
                    <p class="text-slate-400">RL • PPO • Smart City</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-6">
                  Reinforcement Learning agent (PPO) optimizing emergency vehicle routing in SUMO,
                  trained on Bangalore traffic data.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Python</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Stable-Baselines3</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">SUMO</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Pandas</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="text-sm text-slate-400">
                    <span class="text-green-400">●</span> 10.6% faster emergency travel
                  </div>
                  <a href="https://github.com/rajeev8008/sumo-traffic-rl-project" target="_blank"
                    class="text-blue-400 hover:text-blue-300 transition-colors">
                    View Code →
                  </a>
                </div>
              </div>
            </li>

            <li class="splide__slide">
              <div class="project-card p-8 rounded-xl card-hover">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">DocParse AI</h3>
                    <p class="text-slate-400">Full Stack • Multi-Model • SaaS</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-6">
                  Multi-model PDF extraction platform (Surya, Docling, MinerU) with PyMuPDF fallback.
                  Deployed via Modal + Vercel.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">FastAPI</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Modal</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Vercel</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="text-sm text-slate-400">
                    <span class="text-green-400">●</span> 99% accuracy
                  </div>
                  <div class="flex gap-4">
                    <a href="https://pdf-playground-8wlek8vg8-mevin-joses-projects.vercel.app/" target="_blank"
                      class="text-blue-400 hover:text-blue-300 transition-colors">Live Demo →</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-6 bg-slate-800/50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 reveal-element">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technical Expertise</h2>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          Specialized in AI/ML and modern web development technologies
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 reveal-element">
        <div class="text-center">
          <div
            class="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 skill-icon">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">AI/ML Development</h3>
          <p class="text-slate-300 mb-6">
            Building intelligent solutions with cutting-edge machine learning algorithms and data-driven
            insights
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <span class="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm">Python</span>
            <span class="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm">TensorFlow</span>
            <span class="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm">Scikit-learn</span>
            <span class="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm">Pandas</span>
            <span class="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm">NumPy</span>
          </div>
        </div>

        <div class="text-center">
          <div
            class="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6 skill-icon">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">Web Development</h3>
          <p class="text-slate-300 mb-6">
            Creating scalable, responsive applications with modern frameworks and clean architecture
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <span class="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">React</span>
            <span class="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">Node.js</span>
            <span class="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">MongoDB</span>
            <span class="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">Express</span>
            <span class="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <div class="reveal-element">
        <h2 class="text-4xl md:text-5xl font-bold mb-8 gradient-text">About Me</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300">
          <div class="prose max-w-none text-left">
            <p class="mb-4">
              Hi, I'm Mevin Jose, an AI/ML and Software Engineering student at PES University (2023–2027)
              with hands-on experience designing and deploying real-time computer vision applications
              and end-to-end ML pipelines in production environments.
            </p>

            <p class="mb-4">
              I'm proficient in Python, FastAPI, Node.js, React, TensorFlow, and PyTorch, with strong
              foundations in system design, microservices, RESTful APIs, CI/CD automation, and cloud
              deployment (Vercel, Modal).
            </p>

            <p class="mt-4">
              I'm passionate about building high-performance software that integrates AI innovation
              and clean engineering practices to deliver measurable impact. Currently open to
              internships and collaboration opportunities.
            </p>

          </div>
          <div class="bg-slate-800/40 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-white mb-3">Quick facts</h3>
            <ul class="list-none space-y-2 text-left">
              <li><strong>Education:</strong> B.Tech (AI & ML), PES University</li>
              <li><strong>Location:</strong> Bangalore, India</li>
              <li><strong>Email:</strong> <a href="mailto:mjenius1357@gmail.com"
                  class="text-blue-400 hover:underline">mjenius1357@gmail.com</a></li>
              <li><strong>Open to:</strong> Internships & Collaboration</li>
            </ul>
            <h4 class="mt-4 font-semibold">Certifications</h4>
            <ul class="list-disc pl-5 mt-2">
              <li><a href="https://coursera.org/share/11aafe0abcf8437084bc6d19db82c564"
                  data-cert="google-data-analytics" class="text-blue-400 hover:underline"
                  target="_blank" rel="noopener noreferrer">Google Data Analytics</a></li>
              <li><a href="https://coursera.org/share/beaa01b66b9804e5d9547c403fa9840f"
                  data-cert="ibm-generative-ai" class="text-blue-400 hover:underline" target="_blank"
                  rel="noopener noreferrer">IBM Generative AI</a></li>
              <li><a href="https://coursera.org/share/3b59ffff270c01b2e6ffdc4fb13abc2f"
                  data-cert="meta-genai-analytics" class="text-blue-400 hover:underline"
                  target="_blank" rel="noopener noreferrer">Meta GenAI</a></li>
              <li><a href="https://coursera.org/share/2db49eb5a4a3fbd458b3c759d3635992"
                  class="text-blue-400 hover:underline" target="_blank"
                  rel="noopener noreferrer">Microsoft Computer Vision</a></li>
              <li><a href="https://www.kaggle.com/mjeniusmj" class="text-blue-400 hover:underline"
                  target="_blank" rel="noopener noreferrer">Kaggle ML & DL</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="pt-20 pb-6 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <div class="reveal-element">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 gradient-text">My Projects</h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          A comprehensive showcase of my work in AI/ML, full-stack development, and innovative problem-solving
        </p>
      </div>
    </div>
  </section>

  <section class="pb-12 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="reveal-element flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
        <div class="flex-1 max-w-md">
          <input type="text" id="project-search" placeholder="Search projects..."
            class="search-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-400 focus:outline-none">
        </div>

        <div class="flex flex-wrap gap-3">
          <button class="filter-btn active px-4 py-2 rounded-lg text-sm font-medium" data-filter="all">
            All Projects
          </button>
          <button class="filter-btn px-4 py-2 rounded-lg text-sm font-medium" data-filter="ai-ml">
            AI/ML
          </button>
          <button class="filter-btn px-4 py-2 rounded-lg text-sm font-medium" data-filter="web">
            Web Development
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-20 px-6">
    <div class="max-w-6xl mx-auto" style="max-width:1560px;">
      <div class="project-grid reveal-element" id="projects-grid">
        <div class="project-card p-6 rounded-xl" data-category="ai-ml" data-title="AEGIS Surveillance System">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">AEGIS Surveillance</h3>
              <p class="text-slate-400 text-sm">CV • Security • Top-10 Hackathon</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            Tamper-resistant surveillance system using HMAC-SHA256 watermarking and real-time tamper
            detection (blur, glare, blackout).
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Python</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">OpenCV</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Flask</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Socket.IO</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> &lt;2% false positives
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('aegis')">
              View Details →
            </button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="ai-ml" data-title="Adaptive Traffic Control">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Adaptive Traffic Control</h3>
              <p class="text-slate-400 text-sm">RL • PPO • Smart City</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            Reinforcement Learning agent (PPO) optimizing emergency vehicle routing in SUMO, trained on
            Bangalore traffic data.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Python</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Stable-Baselines3</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">SUMO</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Pandas</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> 10.6% faster emergency travel
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('traffic-rl')">
              View Details →
            </button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="web" data-title="DocParse AI">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
            
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">DocParse AI</h3>
              <p class="text-slate-400 text-sm">Full Stack • Multi-Model • SaaS</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            Multi-model PDF extraction platform (Surya, Docling, MinerU) with PyMuPDF fallback. Deployed via
            Modal + Vercel.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">FastAPI</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Next.js</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Modal</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Vercel</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> 99% accuracy
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('pdf-playground')">
              View Details →
            </button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="ai-ml"
          data-title="AI Voice Assistant for LeetCode">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">AI Voice Assistant</h3>
              <p class="text-slate-400 text-sm">Python • NLP • Voice</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            Voice-enabled assistant for LeetCode problem solving with company-specific suggestions using
            spaCy NLP and LeetCode API integration.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Python</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">spaCy</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">ElevenLabs</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">LeetCode API</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> 30% accuracy improvement
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('voice-assistant')">
              View Details →
            </button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="web" data-title="Superhhero Learning Platform">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Superhhero Learning</h3>
              <p class="text-slate-400 text-sm">MERN • Ed-Tech</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            Full-stack MERN application for online learning platform with scalable architecture and
            optimized performance.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">React</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Node.js</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">MongoDB</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Express</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> 25% faster development
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('superhhero')">
              View Details →
            </button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="ai-ml"
          data-title="CT-Based Radiomics for COVID-19">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 2l4 4-4 4-4-4 4-4z M2 20l4-4 4 4-4 4-4-4z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">CT-Based Radiomics for COVID-19</h3>
              <p class="text-slate-400 text-sm">Medical Imaging • Radiomics</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">A research-oriented radiomics pipeline for CT-based triage of
            COVID-19 patients, including feature extraction and model evaluation.</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Python</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">PyRadiomics</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Scikit-learn</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Image Processing</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400"><span class="text-green-400">●</span> Research pipeline
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('ct-radiomics')">View Details →</button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="ai-ml"
          data-title="Demand Forecasting ML System">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Demand Forecasting ML</h3>
              <p class="text-slate-400 text-sm">MLOps • End-to-End • Production</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            End-to-end retail demand forecasting system with hybrid ML modeling, drift detection, model
            registry,
            and safe auto-retraining pipeline.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Python</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">LightGBM</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">FastAPI</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">MLOps</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> ∙25% MAE improvement
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('demand-forecasting')">View Details →</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div id="modal-voice-assistant" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('voice-assistant')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">AI Voice Assistant for LeetCode</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A sophisticated voice-enabled assistant that revolutionizes how developers prepare for technical
          interviews.
          This project combines natural language processing with voice synthesis to create an interactive
          learning experience.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Features:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Voice command recognition for hands-free operation</li>
          <li>Company-specific problem suggestions using LeetCode API</li>
          <li>Context-aware problem recommendations based on user history</li>
          <li>Real-time voice feedback using ElevenLabs API</li>
          <li>Dynamic problem query handling (50+ problem types)</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Implementation:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>spaCy NLP for intent recognition and entity extraction</li>
          <li>LeetCode API integration for problem data</li>
          <li>ElevenLabs for natural voice synthesis</li>
          <li>Python-based backend with async processing</li>
          <li>30% improvement in response accuracy over rule-based systems</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/AI-Voice-Assistant-Python" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-superhhero" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('superhhero')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Superhhero Learning Platform</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A comprehensive full-stack MERN application serving as the official landing page for Superhhero
          Learning,
          an innovative ed-tech platform. This project demonstrates enterprise-level development practices and
          scalable architecture.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Developed and deployed full-stack MERN application</li>
          <li>Collaborated with 4+ developers to streamline integration</li>
          <li>Reduced development time by 25% through optimized workflows</li>
          <li>Improved load time performance by 10% through API optimization</li>
          <li>Ensured cross-platform compatibility across devices</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>React with modern hooks and state management</li>
          <li>Node.js with Express.js backend architecture</li>
          <li>MongoDB for flexible data storage</li>
          <li>Responsive design with mobile-first approach</li>
          <li>RESTful API design with proper error handling</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://www.superhhero.com/" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-spotify" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('spotify')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Spotify Song Recommender</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A K-Nearest Neighbors recommendation engine that uses audio features from the Spotify API to provide
          personalized song suggestions tailored to user taste.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Analyzes 10+ audio features (tempo, energy, danceability, instrumentalness, etc.) to compute
            similarity</li>
          <li>Produces personalized playlists with an 80% relevance score on user validation</li>
          <li>Optimized feature pipeline for faster similarity lookups and reduced latency</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, Scikit-learn (KNN), Spotipy / Spotify Web API</li>
          <li>Pandas & NumPy for data processing</li>
          <li>Simple Flask/Streamlit demo for interactive exploration</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/Spotify-Song-Recommender" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-cardiovascular" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('cardiovascular')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Cardiovascular Disease Prediction</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A clinical prediction model using Support Vector Machines to estimate cardiovascular disease risk
          from patient vitals and laboratory features.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Engineered and selected 11 clinical predictors to improve model robustness</li>
          <li>Achieved 72% accuracy on held-out test data with cross-validation</li>
          <li>Produced explainability plots to highlight top contributing features for clinicians</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, Scikit-learn (SVM), Pandas</li>
          <li>Matplotlib/Seaborn for visualization</li>
          <li>Notebook-based analysis with reproducible preprocessing steps</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/Cardiovascular-Disease-Prediction" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-delivery" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('delivery')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Food Delivery Platform</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A multi-vendor full-stack platform built to manage listings, orders, and real-time delivery updates
          across multiple restaurants.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Integrated 5+ vendors with order management and admin dashboards</li>
          <li>Implemented real-time order tracking and notifications using Socket.io</li>
          <li>Designed admin analytics to monitor vendor performance and orders</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>React frontend, Node.js + Express backend</li>
          <li>MongoDB for vendor & order storage, Socket.io for realtime</li>
          <li>Deployed with basic CI and environment-based configuration</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/BetterPESwiggy" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-aegis" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('aegis')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">AEGIS Surveillance System</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A tamper-resistant surveillance system developed for the Kodikon Hackathon (Top-10/280 teams). It
          secures CCTV feeds using HMAC-SHA256 watermarks and detects tampering in real-time.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Real-time detection of blur, shake, glare, and blackout events</li>
          <li>Achieved &lt;2% false positives and &lt;100ms detection latency</li>
          <li>Implemented glare rescue (CLAHE) and flow-based reposition detection</li>
          <li>Secure incident logging with cryptographic verification</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, OpenCV, Flask, Socket.IO</li>
          <li>HMAC-SHA256 for watermarking</li>
          <li>ffmpeg for stream processing</li>
          <li>SQLite for incident logging</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/ZeroDeaths7/AegisAI-tamper-resistent-surveillance-system"
            target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-traffic-rl" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('traffic-rl')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Adaptive Traffic-Signal Control</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A Reinforcement Learning system optimizing emergency vehicle routing using Proximal Policy
          Optimization (PPO), trained on a large Bangalore traffic dataset.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Reduced emergency travel time by 10.6%</li>
          <li>Improved general traffic flow: Trucks (4.2%), Cars (3.4%), Bikes (1.2%)</li>
          <li>Built custom SUMO environments and PPO agent training pipelines</li>
          <li>Developed comprehensive analytics visualizations for performance metrics</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, Stable-Baselines3 (PPO)</li>
          <li>SUMO Traffic Simulator</li>
          <li>Pandas, NumPy for data analysis</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/rajeev8008/sumo-traffic-rl-project" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-pdf-playground" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('pdf-playground')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">DocParse AI – Intelligent PDF Extraction Platform</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A full-stack multi-model PDF extraction platform that leverages state-of-the-art models like Surya,
          Docling, and MinerU, with a PyMuPDF fallback for speed.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Achieved 99% extraction accuracy across complex document layouts</li>
          <li>35% faster processing with optimized pipelines</li>
          <li>Deployed via Modal for serverless GPU inference and Vercel for frontend</li>
          <li>Automated CI/CD workflows for seamless updates</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>FastAPI, Next.js, TypeScript</li>
          <li>PyMuPDF, Surya, Docling, MinerU</li>
          <li>Modal, Vercel, GitHub Actions</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/PDF-Extractor-With-PymuPDF" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
          <a href="https://pdf-playground-8wlek8vg8-mevin-joses-projects.vercel.app/" target="_blank"
            class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition-colors">Live
            Demo</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-ct-radiomics" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('ct-radiomics')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">CT-Based Radiomics for COVID-19</h2>
      <div class="space-y-4 text-slate-300">
        <p>This project provides a radiomics pipeline for extracting quantitative features from chest CT scans
          to support triage and prognosis for COVID-19 patients.</p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>End-to-end feature extraction using PyRadiomics</li>
          <li>Model evaluation and reproducible experiments</li>
          <li>Comprehensive README and usage examples</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, PyRadiomics, NumPy</li>
          <li>Scikit-learn for modeling and evaluation</li>
          <li>ITK / SimpleITK for image IO and preprocessing</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/rajeev8008/CT-Based-Radiomics-for-COVID-19-Patient-Triage"
            target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-demand-forecasting" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('demand-forecasting')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Demand Forecasting ML System</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          End-to-end retail demand forecasting system with hybrid ML modeling, monitoring, and
          auto-retraining.
          Designed for 30k+ SKU–store time series in production environments.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Deployed hybrid ML + statistical forecasting (∙25% MAE improvement)</li>
          <li>Implemented drift detection & model versioning for production-safe retraining</li>
          <li>Leakage-safe feature engineering with explicit baseline validation</li>
          <li>Model registry with versioning, rollback support, and safe promotions</li>
          <li>Production-style FastAPI inference with /health, /model-info, /predict endpoints</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, LightGBM, Pandas, NumPy, SciPy</li>
          <li>FastAPI for production inference API</li>
          <li>SQLite, Parquet for storage</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/Demand-Forecasting-ML-System" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <section id="skills" class="pt-32 pb-16 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <div class="reveal-element">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 gradient-text">Technical Skills</h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          A comprehensive overview of my expertise across AI/ML, web development, and software engineering
        </p>
      </div>
    </div>
  </section>

  <section class="py-16 px-6 bg-slate-800/30">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12 reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Experience Timeline</h2>
        <p class="text-slate-300">My journey in technology and software development</p>
      </div>

      <div class="space-y-8 reveal-element">
        <div class="timeline-item">
          <div class="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-bold text-white">B.Tech in AI & ML</h3>
              <span class="text-blue-400 font-semibold">2023 - 2027</span>
            </div>
            <p class="text-slate-400 font-medium mb-2">PES University, Bangalore</p>
            <p class="text-slate-300 text-sm mb-3">
              Pursuing Bachelor's degree in Artificial Intelligence and Machine Learning with CGPA of
              7.54.
              Relevant coursework includes Data Structures, Operating Systems, Database Management
              Systems,
              Computer Networks, Software Engineering, and Machine Learning.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs">Machine
                Learning</span>
              <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs">Data Structures</span>
              <span class="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">Software
                Engineering</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-bold text-white">Web Development Intern</h3>
              <span class="text-blue-400 font-semibold">July 2025 - Sept 2025</span>
            </div>
            <p class="text-slate-400 font-medium mb-2">Superhhero Learning</p>
            <p class="text-slate-300 text-sm mb-3">
              Developed and deployed a production MERN landing platform receiving ~100 monthly users.
              Integrated APIs and improved workflow efficiency, reducing development time by 25%.
              Optimized backend performance and caching, improving load time by 10%.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs">React</span>
              <span class="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">Node.js</span>
              <span class="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs">MongoDB</span>
              <span class="bg-orange-600/20 text-orange-400 px-2 py-1 rounded text-xs">Vercel
                Auto-Deploy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
        <p class="text-slate-300">Organized by category and expertise level</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-element">
        <div class="skill-card p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            Programming Languages
          </h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Python</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">JavaScript/TypeScript</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">SQL</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Java</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">C</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">R</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
          </div>
        </div>

        <div class="skill-card p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            AI/ML
          </h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-slate-300">PyTorch</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">TensorFlow</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Scikit-Learn</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">OpenCV</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Pandas / NumPy</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
          </div>
        </div>

        <div class="skill-card p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            Web Development
          </h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-slate-300">FastAPI / Flask</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">React / Next.js</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Node.js / Express</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">RESTful APIs</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">MongoDB / PostgreSQL</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
          </div>
        </div>

        <div class="skill-card p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
            
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            Tools & Platforms
          </h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-slate-300">MLOps & Model Deployment</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">CI/CD (GitHub Actions, Vercel)</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Docker</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Git & Version Control</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Testing (PyTest, Unit)</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-6 bg-slate-800/30">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technologies & Frameworks</h2>
        <p class="text-slate-300">Tools and technologies I work with regularly</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="skill-card p-6 rounded-xl reveal-element">
          <h3 class="text-xl font-bold text-white mb-6 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
            
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            Web Development
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">FastAPI</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Flask</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">React</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Express</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Next.js</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">TypeScript</span>
          </div>
        </div>

        <div class="skill-card p-6 rounded-xl reveal-element">
          <h3 class="text-xl font-bold text-white mb-6 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
            
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            AI/ML
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">PyTorch</span>
            <span class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">TensorFlow</span>
            <span
              class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">Scikit-Learn</span>
            <span class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">OpenCV</span>
            <span class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">Pandas</span>
            <span class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">NumPy</span>
          </div>
        </div>

        <div class="skill-card p-6 rounded-xl reveal-element">
          <h3 class="text-xl font-bold text-white mb-6 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
            
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            Tools & Platforms
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Machine
              Learning</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Deep
              Learning</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Computer
              Vision</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">NLP</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Generative
              AI</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Reinforcement
              Learning</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">MLOps</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Model
              Deployment</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Docker</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Git
              & GitHub Actions</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Vercel
              CI/CD</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Modal</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">PyTest</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">MongoDB</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">SQLite</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Tableau</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">TensorBoard</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Certifications</h2>
        <p class="text-slate-300">Professional certifications and achievements</p>
      </div>

      <div class="cert-grid reveal-element">
        <a href="https://coursera.org/share/11aafe0abcf8437084bc6d19db82c564" data-cert="google-data-analytics"
          target="_blank" rel="noopener noreferrer"
          class="certification-badge p-6 rounded-xl block hover:bg-slate-700/50 transition-colors">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Google Data Analytics</h3>
              <p class="text-slate-400 text-sm">Coursera</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm">Comprehensive certification in data analysis, visualization, and
            business intelligence using Google tools.</p>
        </a>

        <a href="https://coursera.org/share/beaa01b66b9804e5d9547c403fa9840f" data-cert="ibm-generative-ai"
          target="_blank" rel="noopener noreferrer"
          class="certification-badge p-6 rounded-xl block hover:bg-slate-700/50 transition-colors">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">IBM Generative AI</h3>
              <p class="text-slate-400 text-sm">Coursera</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm">Advanced certification in generative AI technologies, including
            GPT models and prompt engineering.</p>
        </a>

        <a href="https://coursera.org/share/2db49eb5a4a3fbd458b3c759d3635992"
          data-cert="microsoft-computer-vision" target="_blank" rel="noopener noreferrer"
          class="certification-badge p-6 rounded-xl block hover:bg-slate-700/50 transition-colors">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Microsoft Computer Vision</h3>
              <p class="text-slate-400 text-sm">Azure AI</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm">Specialized certification in Azure Cognitive Services for computer
            vision and image processing.</p>
        </a>

        <a href="https://www.kaggle.com/mjeniusmj" data-cert="kaggle-ml-dl" target="_blank"
          rel="noopener noreferrer"
          class="certification-badge p-6 rounded-xl block hover:bg-slate-700/50 transition-colors">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Kaggle ML & DL</h3>
              <p class="text-slate-400 text-sm">Kaggle</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm">Expert-level certification in machine learning and deep learning
            through practical competitions.</p>
        </a>

        <a href="https://coursera.org/share/3b59ffff270c01b2e6ffdc4fb13abc2f" data-cert="meta-genai-analytics"
          target="_blank" rel="noopener noreferrer"
          class="certification-badge p-6 rounded-xl block hover:bg-slate-700/50 transition-colors">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Meta GenAI Analytics</h3>
              <p class="text-slate-400 text-sm">Meta/Coursera</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm">Advanced certification in generative AI applications for data
            analytics and business intelligence.</p>
        </a>
      </div>
    </div>
  </section>

  <section id="contact" class="pt-32 pb-16 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <div class="reveal-element">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 gradient-text">Get In Touch</h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          Let's connect and explore opportunities to collaborate on innovative projects.
          I'm always open to discussing AI/ML, web development, and technology.
        </p>
      </div>
    </div>
  </section>

  <section class="pb-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="reveal-element">
          <div class="contact-card p-8 rounded-xl">
            <h2 class="text-2xl font-bold text-white mb-6">Get In Touch</h2>

            <div class="text-center space-y-6">
              <p class="text-slate-300">
                I'm always interested in discussing new opportunities, collaborating on projects,
                or just connecting with like-minded professionals in the tech community.
              </p>

              <div class="space-y-4">
                <a href="mailto:mjenius1357@gmail.com"
                  class="btn-primary w-full py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>

                <p class="text-slate-400 text-sm">
                  Direct email: <a href="mailto:mjenius1357@gmail.com"
                    class="text-blue-400 hover:text-blue-300">mjenius1357@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="reveal-element">
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-white mb-6">Let's Connect</h2>
              <p class="text-slate-300 mb-6">
                I'm currently available for freelance projects, full-time opportunities, and
                collaborative work.
                Whether you have a project in mind or just want to discuss technology, I'd love to hear
                from you.
              </p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Email</h3>
                  <a href="mailto:mjenius1357@gmail.com"
                    class="text-slate-300 hover:text-blue-400 transition-colors">
                    mjenius1357@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0L1.605 6.021v7.958L12 19.5l10.395-5.521V6.021L12 0zm0 2.5l7.5 4.5v6l-7.5 4.5-7.5-4.5v-6l7.5-4.5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Location</h3>
                  <p class="text-slate-300">Bangalore, Karnataka, India</p>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Availability</h3>
                  <p class="text-slate-300">Open to opportunities</p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-bold text-white mb-4">Professional Profiles</h3>
              <div class="grid grid-cols-2 gap-4">
                <a href="https://github.com/MJenius" target="_blank"
                  class="social-link p-4 rounded-lg flex items-center">
                  <svg class="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div>
                    <h4 class="text-white font-semibold">GitHub</h4>
                    <p class="text-slate-400 text-sm">@MJenius</p>
                  </div>
                </a>

                <a href="https://leetcode.com/u/mjenius1357/" target="_blank"
                  class="social-link p-4 rounded-lg flex items-center">
                  <svg class="w-6 h-6 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0L1.605 6.021v7.958L12 19.5l10.395-5.521V6.021L12 0zm0 2.5l7.5 4.5v6l-7.5 4.5-7.5-4.5v-6l7.5-4.5z" />
                  </svg>
                  <div>
                    <h4 class="text-white font-semibold">LeetCode</h4>
                    <p class="text-slate-400 text-sm">@mjenius1357</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-bold text-white mb-4">Resume</h3>
              <a href="Mevin%20Jose%20Resume.pdf" download
                class="btn-primary w-full py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="py-12 px-6 border-t border-slate-700">
    <div class="max-w-6xl mx-auto text-center">
      <div class="flex justify-center space-x-6 mb-6">
        <a href="https://leetcode.com/u/mjenius1357/" target="_blank"
          class="text-slate-400 hover:text-white transition-colors">
          LeetCode
        </a>
        <a href="https://github.com/MJenius" target="_blank"
          class="text-slate-400 hover:text-white transition-colors">
          GitHub
        </a>
        <a href="mailto:mjenius1357@gmail.com" class="text-slate-400 hover:text-white transition-colors">
          Email
        </a>
      </div>
      <p class="text-slate-400">
        Mevin Jose, AIML Student at PES University
      </p>
    </div>
  </footer>
`;function Gf(){return Hi.useEffect(()=>{$f()},[]),na.jsx("div",{dangerouslySetInnerHTML:{__html:Kf}})}Ql.createRoot(document.getElementById("root")).render(na.jsx(Gf,{}));
