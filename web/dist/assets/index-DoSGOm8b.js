(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var fh={exports:{}},Ko={},dh={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function Z_(){if(Vm)return yt;Vm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(O,te,Oe){this.props=O,this.context=te,this.refs=E,this.updater=Oe||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,te){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,te,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function L(O,te,Oe){this.props=O,this.context=te,this.refs=E,this.updater=Oe||x}var A=L.prototype=new _;A.constructor=L,M(A,S.prototype),A.isPureReactComponent=!0;var R=Array.isArray,B=Object.prototype.hasOwnProperty,k={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function H(O,te,Oe){var Q,pe={},Re=null,Me=null;if(te!=null)for(Q in te.ref!==void 0&&(Me=te.ref),te.key!==void 0&&(Re=""+te.key),te)B.call(te,Q)&&!U.hasOwnProperty(Q)&&(pe[Q]=te[Q]);var be=arguments.length-2;if(be===1)pe.children=Oe;else if(1<be){for(var Ye=Array(be),qe=0;qe<be;qe++)Ye[qe]=arguments[qe+2];pe.children=Ye}if(O&&O.defaultProps)for(Q in be=O.defaultProps,be)pe[Q]===void 0&&(pe[Q]=be[Q]);return{$$typeof:i,type:O,key:Re,ref:Me,props:pe,_owner:k.current}}function b(O,te){return{$$typeof:i,type:O.type,key:te,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function F(O){var te={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Oe){return te[Oe]})}var ie=/\/+/g;function $(O,te){return typeof O=="object"&&O!==null&&O.key!=null?F(""+O.key):te.toString(36)}function ce(O,te,Oe,Q,pe){var Re=typeof O;(Re==="undefined"||Re==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Re){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case i:case e:Me=!0}}if(Me)return Me=O,pe=pe(Me),O=Q===""?"."+$(Me,0):Q,R(pe)?(Oe="",O!=null&&(Oe=O.replace(ie,"$&/")+"/"),ce(pe,te,Oe,"",function(qe){return qe})):pe!=null&&(C(pe)&&(pe=b(pe,Oe+(!pe.key||Me&&Me.key===pe.key?"":(""+pe.key).replace(ie,"$&/")+"/")+O)),te.push(pe)),1;if(Me=0,Q=Q===""?".":Q+":",R(O))for(var be=0;be<O.length;be++){Re=O[be];var Ye=Q+$(Re,be);Me+=ce(Re,te,Oe,Ye,pe)}else if(Ye=v(O),typeof Ye=="function")for(O=Ye.call(O),be=0;!(Re=O.next()).done;)Re=Re.value,Ye=Q+$(Re,be++),Me+=ce(Re,te,Oe,Ye,pe);else if(Re==="object")throw te=String(O),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return Me}function he(O,te,Oe){if(O==null)return O;var Q=[],pe=0;return ce(O,Q,"","",function(Re){return te.call(Oe,Re,pe++)}),Q}function oe(O){if(O._status===-1){var te=O._result;te=te(),te.then(function(Oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Oe)},function(Oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Oe)}),O._status===-1&&(O._status=0,O._result=te)}if(O._status===1)return O._result.default;throw O._result}var le={current:null},V={transition:null},fe={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:V,ReactCurrentOwner:k};function se(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:he,forEach:function(O,te,Oe){he(O,function(){te.apply(this,arguments)},Oe)},count:function(O){var te=0;return he(O,function(){te++}),te},toArray:function(O){return he(O,function(te){return te})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},yt.Component=S,yt.Fragment=t,yt.Profiler=o,yt.PureComponent=L,yt.StrictMode=r,yt.Suspense=f,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,yt.act=se,yt.cloneElement=function(O,te,Oe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Q=M({},O.props),pe=O.key,Re=O.ref,Me=O._owner;if(te!=null){if(te.ref!==void 0&&(Re=te.ref,Me=k.current),te.key!==void 0&&(pe=""+te.key),O.type&&O.type.defaultProps)var be=O.type.defaultProps;for(Ye in te)B.call(te,Ye)&&!U.hasOwnProperty(Ye)&&(Q[Ye]=te[Ye]===void 0&&be!==void 0?be[Ye]:te[Ye])}var Ye=arguments.length-2;if(Ye===1)Q.children=Oe;else if(1<Ye){be=Array(Ye);for(var qe=0;qe<Ye;qe++)be[qe]=arguments[qe+2];Q.children=be}return{$$typeof:i,type:O.type,key:pe,ref:Re,props:Q,_owner:Me}},yt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},yt.createElement=H,yt.createFactory=function(O){var te=H.bind(null,O);return te.type=O,te},yt.createRef=function(){return{current:null}},yt.forwardRef=function(O){return{$$typeof:c,render:O}},yt.isValidElement=C,yt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:oe}},yt.memo=function(O,te){return{$$typeof:d,type:O,compare:te===void 0?null:te}},yt.startTransition=function(O){var te=V.transition;V.transition={};try{O()}finally{V.transition=te}},yt.unstable_act=se,yt.useCallback=function(O,te){return le.current.useCallback(O,te)},yt.useContext=function(O){return le.current.useContext(O)},yt.useDebugValue=function(){},yt.useDeferredValue=function(O){return le.current.useDeferredValue(O)},yt.useEffect=function(O,te){return le.current.useEffect(O,te)},yt.useId=function(){return le.current.useId()},yt.useImperativeHandle=function(O,te,Oe){return le.current.useImperativeHandle(O,te,Oe)},yt.useInsertionEffect=function(O,te){return le.current.useInsertionEffect(O,te)},yt.useLayoutEffect=function(O,te){return le.current.useLayoutEffect(O,te)},yt.useMemo=function(O,te){return le.current.useMemo(O,te)},yt.useReducer=function(O,te,Oe){return le.current.useReducer(O,te,Oe)},yt.useRef=function(O){return le.current.useRef(O)},yt.useState=function(O){return le.current.useState(O)},yt.useSyncExternalStore=function(O,te,Oe){return le.current.useSyncExternalStore(O,te,Oe)},yt.useTransition=function(){return le.current.useTransition()},yt.version="18.3.1",yt}var Gm;function Kf(){return Gm||(Gm=1,dh.exports=Z_()),dh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function K_(){if(Wm)return Ko;Wm=1;var i=Kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,f,d){var m,g={},v=null,x=null;d!==void 0&&(v=""+d),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(x=f.ref);for(m in f)r.call(f,m)&&!a.hasOwnProperty(m)&&(g[m]=f[m]);if(c&&c.defaultProps)for(m in f=c.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:c,key:v,ref:x,props:g,_owner:o.current}}return Ko.Fragment=t,Ko.jsx=u,Ko.jsxs=u,Ko}var Xm;function J_(){return Xm||(Xm=1,fh.exports=K_()),fh.exports}var Pe=J_(),re=Kf(),Ol={},ph={exports:{}},Un={},mh={exports:{}},gh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function Q_(){return jm||(jm=1,function(i){function e(V,fe){var se=V.length;V.push(fe);e:for(;0<se;){var O=se-1>>>1,te=V[O];if(0<o(te,fe))V[O]=fe,V[se]=te,se=O;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var fe=V[0],se=V.pop();if(se!==fe){V[0]=se;e:for(var O=0,te=V.length,Oe=te>>>1;O<Oe;){var Q=2*(O+1)-1,pe=V[Q],Re=Q+1,Me=V[Re];if(0>o(pe,se))Re<te&&0>o(Me,pe)?(V[O]=Me,V[Re]=se,O=Re):(V[O]=pe,V[Q]=se,O=Q);else if(Re<te&&0>o(Me,se))V[O]=Me,V[Re]=se,O=Re;else break e}}return fe}function o(V,fe){var se=V.sortIndex-fe.sortIndex;return se!==0?se:V.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;i.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();i.unstable_now=function(){return u.now()-c}}var f=[],d=[],m=1,g=null,v=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(V){for(var fe=t(d);fe!==null;){if(fe.callback===null)r(d);else if(fe.startTime<=V)r(d),fe.sortIndex=fe.expirationTime,e(f,fe);else break;fe=t(d)}}function R(V){if(E=!1,A(V),!M)if(t(f)!==null)M=!0,oe(B);else{var fe=t(d);fe!==null&&le(R,fe.startTime-V)}}function B(V,fe){M=!1,E&&(E=!1,_(H),H=-1),x=!0;var se=v;try{for(A(fe),g=t(f);g!==null&&(!(g.expirationTime>fe)||V&&!F());){var O=g.callback;if(typeof O=="function"){g.callback=null,v=g.priorityLevel;var te=O(g.expirationTime<=fe);fe=i.unstable_now(),typeof te=="function"?g.callback=te:g===t(f)&&r(f),A(fe)}else r(f);g=t(f)}if(g!==null)var Oe=!0;else{var Q=t(d);Q!==null&&le(R,Q.startTime-fe),Oe=!1}return Oe}finally{g=null,v=se,x=!1}}var k=!1,U=null,H=-1,b=5,C=-1;function F(){return!(i.unstable_now()-C<b)}function ie(){if(U!==null){var V=i.unstable_now();C=V;var fe=!0;try{fe=U(!0,V)}finally{fe?$():(k=!1,U=null)}}else k=!1}var $;if(typeof L=="function")$=function(){L(ie)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=ie,$=function(){he.postMessage(null)}}else $=function(){S(ie,0)};function oe(V){U=V,k||(k=!0,$())}function le(V,fe){H=S(function(){V(i.unstable_now())},fe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_continueExecution=function(){M||x||(M=!0,oe(B))},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function(V){switch(v){case 1:case 2:case 3:var fe=3;break;default:fe=v}var se=v;v=fe;try{return V()}finally{v=se}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(V,fe){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var se=v;v=V;try{return fe()}finally{v=se}},i.unstable_scheduleCallback=function(V,fe,se){var O=i.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,V){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=se+te,V={id:m++,callback:fe,priorityLevel:V,startTime:se,expirationTime:te,sortIndex:-1},se>O?(V.sortIndex=se,e(d,V),t(f)===null&&V===t(d)&&(E?(_(H),H=-1):E=!0,le(R,se-O))):(V.sortIndex=te,e(f,V),M||x||(M=!0,oe(B))),V},i.unstable_shouldYield=F,i.unstable_wrapCallback=function(V){var fe=v;return function(){var se=v;v=fe;try{return V.apply(this,arguments)}finally{v=se}}}}(gh)),gh}var Ym;function ex(){return Ym||(Ym=1,mh.exports=Q_()),mh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function tx(){if(qm)return Un;qm=1;var i=Kf(),e=ex();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(n,s){u(n,s),u(n+"Capture",s)}function u(n,s){for(o[n]=s,n=0;n<s.length;n++)r.add(s[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return f.call(g,n)?!0:f.call(m,n)?!1:d.test(n)?g[n]=!0:(m[n]=!0,!1)}function x(n,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,s,l,h){if(s===null||typeof s>"u"||x(n,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(n,s,l,h,p,y,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=y,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];S[s]=new E(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(_,L);S[s]=new E(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(_,L);S[s]=new E(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(_,L);S[s]=new E(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function A(n,s,l,h){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,h)&&(l=null),h||p===null?v(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?n.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?n.setAttributeNS(h,s,l):n.setAttribute(s,l))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),k=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),F=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),V=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function te(n){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var Oe=!1;function Q(n,s){if(!n||Oe)return"";Oe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ee){var h=ee}Reflect.construct(n,[],s)}else{try{s.call()}catch(ee){h=ee}n.call(s.prototype)}else{try{throw Error()}catch(ee){h=ee}n()}}catch(ee){if(ee&&h&&typeof ee.stack=="string"){for(var p=ee.stack.split(`
`),y=h.stack.split(`
`),T=p.length-1,N=y.length-1;1<=T&&0<=N&&p[T]!==y[N];)N--;for(;1<=T&&0<=N;T--,N--)if(p[T]!==y[N]){if(T!==1||N!==1)do if(T--,N--,0>N||p[T]!==y[N]){var z=`
`+p[T].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=T&&0<=N);break}}}finally{Oe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?te(n):""}function pe(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case k:return"Portal";case b:return"Profiler";case H:return"StrictMode";case $:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ie:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return s=n.displayName||null,s!==null?s:Re(n.type)||"Memo";case oe:s=n._payload,n=n._init;try{return Re(n(s))}catch{}}return null}function Me(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(s);case 8:return s===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ye(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function qe(n){var s=Ye(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),h=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){h=""+T,y.call(this,T)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Lt(n){n._valueTracker||(n._valueTracker=qe(n))}function Mt(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return n&&(h=Ye(n)?n.checked?"true":"false":n.value),n=h,n!==l?(s.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function D(n,s){var l=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Le(n,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=be(s.value!=null?s.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Se(n,s){s=s.checked,s!=null&&A(n,"checked",s,!1)}function De(n,s){Se(n,s);var l=be(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Ge(n,s.type,l):s.hasOwnProperty("defaultValue")&&Ge(n,s.type,be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function de(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Ge(n,s,l){(s!=="number"||pt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ee=Array.isArray;function ze(n,s,l,h){if(n=n.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=s.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&h&&(n[l].defaultSelected=!0)}else{for(l=""+be(l),s=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,h&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function ft(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function I(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Ee(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:be(l)}}function w(n,s){var l=be(s.value),h=be(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function K(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function ae(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?ae(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,et=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return n(s,l,h,p)})}:n}(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Ie(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var Xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(Xe).forEach(function(n){nt.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Xe[s]=Xe[n]})});function ve(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Xe.hasOwnProperty(n)&&Xe[n]?(""+s).trim():s+"px"}function We(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=ve(l,s[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,p):n[l]=p}}var ut=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(n,s){if(s){if(ut[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ue(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fe=null,xe=null,He=null;function we(n){if(n=Fo(n)){if(typeof Fe!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Ja(s),Fe(n.stateNode,n.type,s))}}function me(n){xe?He?He.push(n):He=[n]:xe=n}function Je(){if(xe){var n=xe,s=He;if(He=xe=null,we(n),s)for(n=0;n<s.length;n++)we(s[n])}}function mt(n,s){return n(s)}function Dt(){}var At=!1;function Pn(n,s,l){if(At)return n(s,l);At=!0;try{return mt(n,s,l)}finally{At=!1,(xe!==null||He!==null)&&(Dt(),Je())}}function Mn(n,s){var l=n.stateNode;if(l===null)return null;var h=Ja(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var ms=!1;if(c)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){ms=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{ms=!1}function bi(n,s,l,h,p,y,T,N,z){var ee=Array.prototype.slice.call(arguments,3);try{s.apply(l,ee)}catch(ye){this.onError(ye)}}var Li=!1,Fr=null,Or=!1,nr=null,ba={onError:function(n){Li=!0,Fr=n}};function gs(n,s,l,h,p,y,T,N,z){Li=!1,Fr=null,bi.apply(ba,arguments)}function La(n,s,l,h,p,y,T,N,z){if(gs.apply(this,arguments),Li){if(Li){var ee=Fr;Li=!1,Fr=null}else throw Error(t(198));Or||(Or=!0,nr=ee)}}function _i(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,s.flags&4098&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function Da(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Ia(n){if(_i(n)!==n)throw Error(t(188))}function Uu(n){var s=n.alternate;if(!s){if(s=_i(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,h=s;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return Ia(p),n;if(y===h)return Ia(p),s;y=y.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=y;else{for(var T=!1,N=p.child;N;){if(N===l){T=!0,l=p,h=y;break}if(N===h){T=!0,h=p,l=y;break}N=N.sibling}if(!T){for(N=y.child;N;){if(N===l){T=!0,l=y,h=p;break}if(N===h){T=!0,h=y,l=p;break}N=N.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function Na(n){return n=Uu(n),n!==null?Ua(n):null}function Ua(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ua(n);if(s!==null)return s;n=n.sibling}return null}var Fa=e.unstable_scheduleCallback,P=e.unstable_cancelCallback,j=e.unstable_shouldYield,ne=e.unstable_requestPaint,Z=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Ae=e.unstable_ImmediatePriority,ke=e.unstable_UserBlockingPriority,$e=e.unstable_NormalPriority,je=e.unstable_LowPriority,ct=e.unstable_IdlePriority,lt=null,Ke=null;function St(n){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(lt,n,void 0,(n.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Tt,kt=Math.log,Ht=Math.LN2;function Tt(n){return n>>>=0,n===0?32:31-(kt(n)/Ht|0)|0}var rt=64,Yt=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pn(n,s){var l=n.pendingLanes;if(l===0)return 0;var h=0,p=n.suspendedLanes,y=n.pingedLanes,T=l&268435455;if(T!==0){var N=T&~p;N!==0?h=Et(N):(y&=T,y!==0&&(h=Et(y)))}else T=l&~p,T!==0?h=Et(T):y!==0&&(h=Et(y));if(h===0)return 0;if(s!==0&&s!==h&&!(s&p)&&(p=h&-h,y=s&-s,p>=y||p===16&&(y&4194240)!==0))return s;if(h&4&&(h|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=h;0<s;)l=31-gt(s),p=1<<l,h|=n[l],s&=~p;return h}function ir(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,s){for(var l=n.suspendedLanes,h=n.pingedLanes,p=n.expirationTimes,y=n.pendingLanes;0<y;){var T=31-gt(y),N=1<<T,z=p[T];z===-1?(!(N&l)||N&h)&&(p[T]=ir(N,s)):z<=s&&(n.expiredLanes|=N),y&=~N}}function Di(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ut(){var n=rt;return rt<<=1,!(rt&4194240)&&(rt=64),n}function mn(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function sn(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-gt(s),n[s]=l}function hn(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-gt(l),y=1<<p;s[p]=0,h[p]=-1,n[p]=-1,l&=~y}}function on(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var h=31-gt(l),p=1<<h;p&s|n[h]&s&&(n[h]|=s),l&=~p}}var Rt=0;function xi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Sd,Fu,Md,Ed,Td,Ou=!1,Oa=[],rr=null,sr=null,or=null,yo=new Map,So=new Map,ar=[],x0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wd(n,s){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":yo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(s.pointerId)}}function Mo(n,s,l,h,p,y){return n===null||n.nativeEvent!==y?(n={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:y,targetContainers:[p]},s!==null&&(s=Fo(s),s!==null&&Fu(s)),n):(n.eventSystemFlags|=h,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function y0(n,s,l,h,p){switch(s){case"focusin":return rr=Mo(rr,n,s,l,h,p),!0;case"dragenter":return sr=Mo(sr,n,s,l,h,p),!0;case"mouseover":return or=Mo(or,n,s,l,h,p),!0;case"pointerover":var y=p.pointerId;return yo.set(y,Mo(yo.get(y)||null,n,s,l,h,p)),!0;case"gotpointercapture":return y=p.pointerId,So.set(y,Mo(So.get(y)||null,n,s,l,h,p)),!0}return!1}function Ad(n){var s=kr(n.target);if(s!==null){var l=_i(s);if(l!==null){if(s=l.tag,s===13){if(s=Da(l),s!==null){n.blockedOn=s,Td(n.priority,function(){Md(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ka(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=Bu(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);ht=h,l.target.dispatchEvent(h),ht=null}else return s=Fo(l),s!==null&&Fu(s),n.blockedOn=l,!1;s.shift()}return!0}function Rd(n,s,l){ka(n)&&l.delete(s)}function S0(){Ou=!1,rr!==null&&ka(rr)&&(rr=null),sr!==null&&ka(sr)&&(sr=null),or!==null&&ka(or)&&(or=null),yo.forEach(Rd),So.forEach(Rd)}function Eo(n,s){n.blockedOn===s&&(n.blockedOn=null,Ou||(Ou=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,S0)))}function To(n){function s(p){return Eo(p,n)}if(0<Oa.length){Eo(Oa[0],n);for(var l=1;l<Oa.length;l++){var h=Oa[l];h.blockedOn===n&&(h.blockedOn=null)}}for(rr!==null&&Eo(rr,n),sr!==null&&Eo(sr,n),or!==null&&Eo(or,n),yo.forEach(s),So.forEach(s),l=0;l<ar.length;l++)h=ar[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<ar.length&&(l=ar[0],l.blockedOn===null);)Ad(l),l.blockedOn===null&&ar.shift()}var vs=R.ReactCurrentBatchConfig,Ba=!0;function M0(n,s,l,h){var p=Rt,y=vs.transition;vs.transition=null;try{Rt=1,ku(n,s,l,h)}finally{Rt=p,vs.transition=y}}function E0(n,s,l,h){var p=Rt,y=vs.transition;vs.transition=null;try{Rt=4,ku(n,s,l,h)}finally{Rt=p,vs.transition=y}}function ku(n,s,l,h){if(Ba){var p=Bu(n,s,l,h);if(p===null)nc(n,s,h,za,l),wd(n,h);else if(y0(p,n,s,l,h))h.stopPropagation();else if(wd(n,h),s&4&&-1<x0.indexOf(n)){for(;p!==null;){var y=Fo(p);if(y!==null&&Sd(y),y=Bu(n,s,l,h),y===null&&nc(n,s,h,za,l),y===p)break;p=y}p!==null&&h.stopPropagation()}else nc(n,s,h,null,l)}}var za=null;function Bu(n,s,l,h){if(za=null,n=G(h),n=kr(n),n!==null)if(s=_i(n),s===null)n=null;else if(l=s.tag,l===13){if(n=Da(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return za=n,null}function Cd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Ae:return 1;case ke:return 4;case $e:case je:return 16;case ct:return 536870912;default:return 16}default:return 16}}var lr=null,zu=null,Ha=null;function Pd(){if(Ha)return Ha;var n,s=zu,l=s.length,h,p="value"in lr?lr.value:lr.textContent,y=p.length;for(n=0;n<l&&s[n]===p[n];n++);var T=l-n;for(h=1;h<=T&&s[l-h]===p[y-h];h++);return Ha=p.slice(n,1<h?1-h:void 0)}function Va(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Ga(){return!0}function bd(){return!1}function Hn(n){function s(l,h,p,y,T){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=y,this.target=T,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(l=n[N],this[N]=l?l(y):y[N]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Ga:bd,this.isPropagationStopped=bd,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),s}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=Hn(_s),wo=se({},_s,{view:0,detail:0}),T0=Hn(wo),Vu,Gu,Ao,Wa=se({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ao&&(Ao&&n.type==="mousemove"?(Vu=n.screenX-Ao.screenX,Gu=n.screenY-Ao.screenY):Gu=Vu=0,Ao=n),Vu)},movementY:function(n){return"movementY"in n?n.movementY:Gu}}),Ld=Hn(Wa),w0=se({},Wa,{dataTransfer:0}),A0=Hn(w0),R0=se({},wo,{relatedTarget:0}),Wu=Hn(R0),C0=se({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=Hn(C0),b0=se({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),L0=Hn(b0),D0=se({},_s,{data:0}),Dd=Hn(D0),I0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=U0[n])?!!s[n]:!1}function Xu(){return F0}var O0=se({},wo,{key:function(n){if(n.key){var s=I0[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Va(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?N0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(n){return n.type==="keypress"?Va(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Va(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),k0=Hn(O0),B0=se({},Wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=Hn(B0),z0=se({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),H0=Hn(z0),V0=se({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),G0=Hn(V0),W0=se({},Wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=Hn(W0),j0=[9,13,27,32],ju=c&&"CompositionEvent"in window,Ro=null;c&&"documentMode"in document&&(Ro=document.documentMode);var Y0=c&&"TextEvent"in window&&!Ro,Nd=c&&(!ju||Ro&&8<Ro&&11>=Ro),Ud=" ",Fd=!1;function Od(n,s){switch(n){case"keyup":return j0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function q0(n,s){switch(n){case"compositionend":return kd(s);case"keypress":return s.which!==32?null:(Fd=!0,Ud);case"textInput":return n=s.data,n===Ud&&Fd?null:n;default:return null}}function $0(n,s){if(xs)return n==="compositionend"||!ju&&Od(n,s)?(n=Pd(),Ha=zu=lr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Nd&&s.locale!=="ko"?null:s.data;default:return null}}var Z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Z0[n.type]:s==="textarea"}function zd(n,s,l,h){me(h),s=$a(s,"onChange"),0<s.length&&(l=new Hu("onChange","change",null,l,h),n.push({event:l,listeners:s}))}var Co=null,Po=null;function K0(n){rp(n,0)}function Xa(n){var s=Ts(n);if(Mt(s))return n}function J0(n,s){if(n==="change")return s}var Hd=!1;if(c){var Yu;if(c){var qu="oninput"in document;if(!qu){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),qu=typeof Vd.oninput=="function"}Yu=qu}else Yu=!1;Hd=Yu&&(!document.documentMode||9<document.documentMode)}function Gd(){Co&&(Co.detachEvent("onpropertychange",Wd),Po=Co=null)}function Wd(n){if(n.propertyName==="value"&&Xa(Po)){var s=[];zd(s,Po,n,G(n)),Pn(K0,s)}}function Q0(n,s,l){n==="focusin"?(Gd(),Co=s,Po=l,Co.attachEvent("onpropertychange",Wd)):n==="focusout"&&Gd()}function e_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xa(Po)}function t_(n,s){if(n==="click")return Xa(s)}function n_(n,s){if(n==="input"||n==="change")return Xa(s)}function i_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var ii=typeof Object.is=="function"?Object.is:i_;function bo(n,s){if(ii(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!ii(n[p],s[p]))return!1}return!0}function Xd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jd(n,s){var l=Xd(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=s&&h>=s)return{node:l,offset:s-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Xd(l)}}function Yd(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Yd(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function qd(){for(var n=window,s=pt();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=pt(n.document)}return s}function $u(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function r_(n){var s=qd(),l=n.focusedElem,h=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&Yd(l.ownerDocument.documentElement,l)){if(h!==null&&$u(l)){if(s=h.start,n=h.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,y=Math.min(h.start,p);h=h.end===void 0?y:Math.min(h.end,p),!n.extend&&y>h&&(p=h,h=y,y=p),p=jd(l,y);var T=jd(l,h);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),y>h?(n.addRange(s),n.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var s_=c&&"documentMode"in document&&11>=document.documentMode,ys=null,Zu=null,Lo=null,Ku=!1;function $d(n,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ku||ys==null||ys!==pt(h)||(h=ys,"selectionStart"in h&&$u(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Lo&&bo(Lo,h)||(Lo=h,h=$a(Zu,"onSelect"),0<h.length&&(s=new Hu("onSelect","select",null,s,l),n.push({event:s,listeners:h}),s.target=ys)))}function ja(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var Ss={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},Ju={},Zd={};c&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Ya(n){if(Ju[n])return Ju[n];if(!Ss[n])return n;var s=Ss[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in Zd)return Ju[n]=s[l];return n}var Kd=Ya("animationend"),Jd=Ya("animationiteration"),Qd=Ya("animationstart"),ep=Ya("transitionend"),tp=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,s){tp.set(n,s),a(s,[n])}for(var Qu=0;Qu<np.length;Qu++){var ec=np[Qu],o_=ec.toLowerCase(),a_=ec[0].toUpperCase()+ec.slice(1);ur(o_,"on"+a_)}ur(Kd,"onAnimationEnd"),ur(Jd,"onAnimationIteration"),ur(Qd,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(ep,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function ip(n,s,l){var h=n.type||"unknown-event";n.currentTarget=l,La(h,s,void 0,n),n.currentTarget=null}function rp(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],p=h.event;h=h.listeners;e:{var y=void 0;if(s)for(var T=h.length-1;0<=T;T--){var N=h[T],z=N.instance,ee=N.currentTarget;if(N=N.listener,z!==y&&p.isPropagationStopped())break e;ip(p,N,ee),y=z}else for(T=0;T<h.length;T++){if(N=h[T],z=N.instance,ee=N.currentTarget,N=N.listener,z!==y&&p.isPropagationStopped())break e;ip(p,N,ee),y=z}}}if(Or)throw n=nr,Or=!1,nr=null,n}function Bt(n,s){var l=s[lc];l===void 0&&(l=s[lc]=new Set);var h=n+"__bubble";l.has(h)||(sp(s,n,2,!1),l.add(h))}function tc(n,s,l){var h=0;s&&(h|=4),sp(l,n,h,s)}var qa="_reactListening"+Math.random().toString(36).slice(2);function Io(n){if(!n[qa]){n[qa]=!0,r.forEach(function(l){l!=="selectionchange"&&(l_.has(l)||tc(l,!1,n),tc(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[qa]||(s[qa]=!0,tc("selectionchange",!1,s))}}function sp(n,s,l,h){switch(Cd(s)){case 1:var p=M0;break;case 4:p=E0;break;default:p=ku}l=p.bind(null,s,l,n),p=void 0,!ms||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?n.addEventListener(s,l,{capture:!0,passive:p}):n.addEventListener(s,l,!0):p!==void 0?n.addEventListener(s,l,{passive:p}):n.addEventListener(s,l,!1)}function nc(n,s,l,h,p){var y=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var N=h.stateNode.containerInfo;if(N===p||N.nodeType===8&&N.parentNode===p)break;if(T===4)for(T=h.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;T=T.return}for(;N!==null;){if(T=kr(N),T===null)return;if(z=T.tag,z===5||z===6){h=y=T;continue e}N=N.parentNode}}h=h.return}Pn(function(){var ee=y,ye=G(l),Te=[];e:{var _e=tp.get(n);if(_e!==void 0){var Ve=Hu,Qe=n;switch(n){case"keypress":if(Va(l)===0)break e;case"keydown":case"keyup":Ve=k0;break;case"focusin":Qe="focus",Ve=Wu;break;case"focusout":Qe="blur",Ve=Wu;break;case"beforeblur":case"afterblur":Ve=Wu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=H0;break;case Kd:case Jd:case Qd:Ve=P0;break;case ep:Ve=G0;break;case"scroll":Ve=T0;break;case"wheel":Ve=X0;break;case"copy":case"cut":case"paste":Ve=L0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Id}var tt=(s&4)!==0,$t=!tt&&n==="scroll",q=tt?_e!==null?_e+"Capture":null:_e;tt=[];for(var W=ee,J;W!==null;){J=W;var Ce=J.stateNode;if(J.tag===5&&Ce!==null&&(J=Ce,q!==null&&(Ce=Mn(W,q),Ce!=null&&tt.push(No(W,Ce,J)))),$t)break;W=W.return}0<tt.length&&(_e=new Ve(_e,Qe,null,l,ye),Te.push({event:_e,listeners:tt}))}}if(!(s&7)){e:{if(_e=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",_e&&l!==ht&&(Qe=l.relatedTarget||l.fromElement)&&(kr(Qe)||Qe[Ii]))break e;if((Ve||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ve?(Qe=l.relatedTarget||l.toElement,Ve=ee,Qe=Qe?kr(Qe):null,Qe!==null&&($t=_i(Qe),Qe!==$t||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(Ve=null,Qe=ee),Ve!==Qe)){if(tt=Ld,Ce="onMouseLeave",q="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(tt=Id,Ce="onPointerLeave",q="onPointerEnter",W="pointer"),$t=Ve==null?_e:Ts(Ve),J=Qe==null?_e:Ts(Qe),_e=new tt(Ce,W+"leave",Ve,l,ye),_e.target=$t,_e.relatedTarget=J,Ce=null,kr(ye)===ee&&(tt=new tt(q,W+"enter",Qe,l,ye),tt.target=J,tt.relatedTarget=$t,Ce=tt),$t=Ce,Ve&&Qe)t:{for(tt=Ve,q=Qe,W=0,J=tt;J;J=Ms(J))W++;for(J=0,Ce=q;Ce;Ce=Ms(Ce))J++;for(;0<W-J;)tt=Ms(tt),W--;for(;0<J-W;)q=Ms(q),J--;for(;W--;){if(tt===q||q!==null&&tt===q.alternate)break t;tt=Ms(tt),q=Ms(q)}tt=null}else tt=null;Ve!==null&&op(Te,_e,Ve,tt,!1),Qe!==null&&$t!==null&&op(Te,$t,Qe,tt,!0)}}e:{if(_e=ee?Ts(ee):window,Ve=_e.nodeName&&_e.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&_e.type==="file")var it=J0;else if(Bd(_e))if(Hd)it=n_;else{it=e_;var ot=Q0}else(Ve=_e.nodeName)&&Ve.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(it=t_);if(it&&(it=it(n,ee))){zd(Te,it,l,ye);break e}ot&&ot(n,_e,ee),n==="focusout"&&(ot=_e._wrapperState)&&ot.controlled&&_e.type==="number"&&Ge(_e,"number",_e.value)}switch(ot=ee?Ts(ee):window,n){case"focusin":(Bd(ot)||ot.contentEditable==="true")&&(ys=ot,Zu=ee,Lo=null);break;case"focusout":Lo=Zu=ys=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,$d(Te,l,ye);break;case"selectionchange":if(s_)break;case"keydown":case"keyup":$d(Te,l,ye)}var at;if(ju)e:{switch(n){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else xs?Od(n,l)&&(dt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(dt="onCompositionStart");dt&&(Nd&&l.locale!=="ko"&&(xs||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&xs&&(at=Pd()):(lr=ye,zu="value"in lr?lr.value:lr.textContent,xs=!0)),ot=$a(ee,dt),0<ot.length&&(dt=new Dd(dt,n,null,l,ye),Te.push({event:dt,listeners:ot}),at?dt.data=at:(at=kd(l),at!==null&&(dt.data=at)))),(at=Y0?q0(n,l):$0(n,l))&&(ee=$a(ee,"onBeforeInput"),0<ee.length&&(ye=new Dd("onBeforeInput","beforeinput",null,l,ye),Te.push({event:ye,listeners:ee}),ye.data=at))}rp(Te,s)})}function No(n,s,l){return{instance:n,listener:s,currentTarget:l}}function $a(n,s){for(var l=s+"Capture",h=[];n!==null;){var p=n,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=Mn(n,l),y!=null&&h.unshift(No(n,y,p)),y=Mn(n,s),y!=null&&h.push(No(n,y,p))),n=n.return}return h}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function op(n,s,l,h,p){for(var y=s._reactName,T=[];l!==null&&l!==h;){var N=l,z=N.alternate,ee=N.stateNode;if(z!==null&&z===h)break;N.tag===5&&ee!==null&&(N=ee,p?(z=Mn(l,y),z!=null&&T.unshift(No(l,z,N))):p||(z=Mn(l,y),z!=null&&T.push(No(l,z,N)))),l=l.return}T.length!==0&&n.push({event:s,listeners:T})}var u_=/\r\n?/g,c_=/\u0000|\uFFFD/g;function ap(n){return(typeof n=="string"?n:""+n).replace(u_,`
`).replace(c_,"")}function Za(n,s,l){if(s=ap(s),ap(n)!==s&&l)throw Error(t(425))}function Ka(){}var ic=null,rc=null;function sc(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var oc=typeof setTimeout=="function"?setTimeout:void 0,h_=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,f_=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(n){return lp.resolve(null).then(n).catch(d_)}:oc;function d_(n){setTimeout(function(){throw n})}function ac(n,s){var l=s,h=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){n.removeChild(p),To(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);To(s)}function cr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function up(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var Es=Math.random().toString(36).slice(2),yi="__reactFiber$"+Es,Uo="__reactProps$"+Es,Ii="__reactContainer$"+Es,lc="__reactEvents$"+Es,p_="__reactListeners$"+Es,m_="__reactHandles$"+Es;function kr(n){var s=n[yi];if(s)return s;for(var l=n.parentNode;l;){if(s=l[Ii]||l[yi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=up(n);n!==null;){if(l=n[yi])return l;n=up(n)}return s}n=l,l=n.parentNode}return null}function Fo(n){return n=n[yi]||n[Ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ja(n){return n[Uo]||null}var uc=[],ws=-1;function hr(n){return{current:n}}function zt(n){0>ws||(n.current=uc[ws],uc[ws]=null,ws--)}function Ot(n,s){ws++,uc[ws]=n.current,n.current=s}var fr={},gn=hr(fr),bn=hr(!1),Br=fr;function As(n,s){var l=n.type.contextTypes;if(!l)return fr;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=s[y];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function Ln(n){return n=n.childContextTypes,n!=null}function Qa(){zt(bn),zt(gn)}function cp(n,s,l){if(gn.current!==fr)throw Error(t(168));Ot(gn,s),Ot(bn,l)}function hp(n,s,l){var h=n.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(t(108,Me(n)||"Unknown",p));return se({},l,h)}function el(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,Br=gn.current,Ot(gn,n),Ot(bn,bn.current),!0}function fp(n,s,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=hp(n,s,Br),h.__reactInternalMemoizedMergedChildContext=n,zt(bn),zt(gn),Ot(gn,n)):zt(bn),Ot(bn,l)}var Ni=null,tl=!1,cc=!1;function dp(n){Ni===null?Ni=[n]:Ni.push(n)}function g_(n){tl=!0,dp(n)}function dr(){if(!cc&&Ni!==null){cc=!0;var n=0,s=Rt;try{var l=Ni;for(Rt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Ni=null,tl=!1}catch(p){throw Ni!==null&&(Ni=Ni.slice(n+1)),Fa(Ae,dr),p}finally{Rt=s,cc=!1}}return null}var Rs=[],Cs=0,nl=null,il=0,qn=[],$n=0,zr=null,Ui=1,Fi="";function Hr(n,s){Rs[Cs++]=il,Rs[Cs++]=nl,nl=n,il=s}function pp(n,s,l){qn[$n++]=Ui,qn[$n++]=Fi,qn[$n++]=zr,zr=n;var h=Ui;n=Fi;var p=32-gt(h)-1;h&=~(1<<p),l+=1;var y=32-gt(s)+p;if(30<y){var T=p-p%5;y=(h&(1<<T)-1).toString(32),h>>=T,p-=T,Ui=1<<32-gt(s)+p|l<<p|h,Fi=y+n}else Ui=1<<y|l<<p|h,Fi=n}function hc(n){n.return!==null&&(Hr(n,1),pp(n,1,0))}function fc(n){for(;n===nl;)nl=Rs[--Cs],Rs[Cs]=null,il=Rs[--Cs],Rs[Cs]=null;for(;n===zr;)zr=qn[--$n],qn[$n]=null,Fi=qn[--$n],qn[$n]=null,Ui=qn[--$n],qn[$n]=null}var Vn=null,Gn=null,Vt=!1,ri=null;function mp(n,s){var l=Qn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function gp(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,Vn=n,Gn=cr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,Vn=n,Gn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=zr!==null?{id:Ui,overflow:Fi}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Qn(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,Vn=n,Gn=null,!0):!1;default:return!1}}function dc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function pc(n){if(Vt){var s=Gn;if(s){var l=s;if(!gp(n,s)){if(dc(n))throw Error(t(418));s=cr(l.nextSibling);var h=Vn;s&&gp(n,s)?mp(h,l):(n.flags=n.flags&-4097|2,Vt=!1,Vn=n)}}else{if(dc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Vn=n}}}function vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function rl(n){if(n!==Vn)return!1;if(!Vt)return vp(n),Vt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!sc(n.type,n.memoizedProps)),s&&(s=Gn)){if(dc(n))throw _p(),Error(t(418));for(;s;)mp(n,s),s=cr(s.nextSibling)}if(vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){Gn=cr(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}Gn=null}}else Gn=Vn?cr(n.stateNode.nextSibling):null;return!0}function _p(){for(var n=Gn;n;)n=cr(n.nextSibling)}function Ps(){Gn=Vn=null,Vt=!1}function mc(n){ri===null?ri=[n]:ri.push(n)}var v_=R.ReactCurrentBatchConfig;function Oo(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var p=h,y=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(T){var N=p.refs;T===null?delete N[y]:N[y]=T},s._stringRef=y,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function sl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function xp(n){var s=n._init;return s(n._payload)}function yp(n){function s(q,W){if(n){var J=q.deletions;J===null?(q.deletions=[W],q.flags|=16):J.push(W)}}function l(q,W){if(!n)return null;for(;W!==null;)s(q,W),W=W.sibling;return null}function h(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function p(q,W){return q=Sr(q,W),q.index=0,q.sibling=null,q}function y(q,W,J){return q.index=J,n?(J=q.alternate,J!==null?(J=J.index,J<W?(q.flags|=2,W):J):(q.flags|=2,W)):(q.flags|=1048576,W)}function T(q){return n&&q.alternate===null&&(q.flags|=2),q}function N(q,W,J,Ce){return W===null||W.tag!==6?(W=oh(J,q.mode,Ce),W.return=q,W):(W=p(W,J),W.return=q,W)}function z(q,W,J,Ce){var it=J.type;return it===U?ye(q,W,J.props.children,Ce,J.key):W!==null&&(W.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===oe&&xp(it)===W.type)?(Ce=p(W,J.props),Ce.ref=Oo(q,W,J),Ce.return=q,Ce):(Ce=Pl(J.type,J.key,J.props,null,q.mode,Ce),Ce.ref=Oo(q,W,J),Ce.return=q,Ce)}function ee(q,W,J,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=ah(J,q.mode,Ce),W.return=q,W):(W=p(W,J.children||[]),W.return=q,W)}function ye(q,W,J,Ce,it){return W===null||W.tag!==7?(W=$r(J,q.mode,Ce,it),W.return=q,W):(W=p(W,J),W.return=q,W)}function Te(q,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=oh(""+W,q.mode,J),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case B:return J=Pl(W.type,W.key,W.props,null,q.mode,J),J.ref=Oo(q,null,W),J.return=q,J;case k:return W=ah(W,q.mode,J),W.return=q,W;case oe:var Ce=W._init;return Te(q,Ce(W._payload),J)}if(Ee(W)||fe(W))return W=$r(W,q.mode,J,null),W.return=q,W;sl(q,W)}return null}function _e(q,W,J,Ce){var it=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return it!==null?null:N(q,W,""+J,Ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case B:return J.key===it?z(q,W,J,Ce):null;case k:return J.key===it?ee(q,W,J,Ce):null;case oe:return it=J._init,_e(q,W,it(J._payload),Ce)}if(Ee(J)||fe(J))return it!==null?null:ye(q,W,J,Ce,null);sl(q,J)}return null}function Ve(q,W,J,Ce,it){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return q=q.get(J)||null,N(W,q,""+Ce,it);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case B:return q=q.get(Ce.key===null?J:Ce.key)||null,z(W,q,Ce,it);case k:return q=q.get(Ce.key===null?J:Ce.key)||null,ee(W,q,Ce,it);case oe:var ot=Ce._init;return Ve(q,W,J,ot(Ce._payload),it)}if(Ee(Ce)||fe(Ce))return q=q.get(J)||null,ye(W,q,Ce,it,null);sl(W,Ce)}return null}function Qe(q,W,J,Ce){for(var it=null,ot=null,at=W,dt=W=0,un=null;at!==null&&dt<J.length;dt++){at.index>dt?(un=at,at=null):un=at.sibling;var Pt=_e(q,at,J[dt],Ce);if(Pt===null){at===null&&(at=un);break}n&&at&&Pt.alternate===null&&s(q,at),W=y(Pt,W,dt),ot===null?it=Pt:ot.sibling=Pt,ot=Pt,at=un}if(dt===J.length)return l(q,at),Vt&&Hr(q,dt),it;if(at===null){for(;dt<J.length;dt++)at=Te(q,J[dt],Ce),at!==null&&(W=y(at,W,dt),ot===null?it=at:ot.sibling=at,ot=at);return Vt&&Hr(q,dt),it}for(at=h(q,at);dt<J.length;dt++)un=Ve(at,q,dt,J[dt],Ce),un!==null&&(n&&un.alternate!==null&&at.delete(un.key===null?dt:un.key),W=y(un,W,dt),ot===null?it=un:ot.sibling=un,ot=un);return n&&at.forEach(function(Mr){return s(q,Mr)}),Vt&&Hr(q,dt),it}function tt(q,W,J,Ce){var it=fe(J);if(typeof it!="function")throw Error(t(150));if(J=it.call(J),J==null)throw Error(t(151));for(var ot=it=null,at=W,dt=W=0,un=null,Pt=J.next();at!==null&&!Pt.done;dt++,Pt=J.next()){at.index>dt?(un=at,at=null):un=at.sibling;var Mr=_e(q,at,Pt.value,Ce);if(Mr===null){at===null&&(at=un);break}n&&at&&Mr.alternate===null&&s(q,at),W=y(Mr,W,dt),ot===null?it=Mr:ot.sibling=Mr,ot=Mr,at=un}if(Pt.done)return l(q,at),Vt&&Hr(q,dt),it;if(at===null){for(;!Pt.done;dt++,Pt=J.next())Pt=Te(q,Pt.value,Ce),Pt!==null&&(W=y(Pt,W,dt),ot===null?it=Pt:ot.sibling=Pt,ot=Pt);return Vt&&Hr(q,dt),it}for(at=h(q,at);!Pt.done;dt++,Pt=J.next())Pt=Ve(at,q,dt,Pt.value,Ce),Pt!==null&&(n&&Pt.alternate!==null&&at.delete(Pt.key===null?dt:Pt.key),W=y(Pt,W,dt),ot===null?it=Pt:ot.sibling=Pt,ot=Pt);return n&&at.forEach(function($_){return s(q,$_)}),Vt&&Hr(q,dt),it}function $t(q,W,J,Ce){if(typeof J=="object"&&J!==null&&J.type===U&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case B:e:{for(var it=J.key,ot=W;ot!==null;){if(ot.key===it){if(it=J.type,it===U){if(ot.tag===7){l(q,ot.sibling),W=p(ot,J.props.children),W.return=q,q=W;break e}}else if(ot.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===oe&&xp(it)===ot.type){l(q,ot.sibling),W=p(ot,J.props),W.ref=Oo(q,ot,J),W.return=q,q=W;break e}l(q,ot);break}else s(q,ot);ot=ot.sibling}J.type===U?(W=$r(J.props.children,q.mode,Ce,J.key),W.return=q,q=W):(Ce=Pl(J.type,J.key,J.props,null,q.mode,Ce),Ce.ref=Oo(q,W,J),Ce.return=q,q=Ce)}return T(q);case k:e:{for(ot=J.key;W!==null;){if(W.key===ot)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){l(q,W.sibling),W=p(W,J.children||[]),W.return=q,q=W;break e}else{l(q,W);break}else s(q,W);W=W.sibling}W=ah(J,q.mode,Ce),W.return=q,q=W}return T(q);case oe:return ot=J._init,$t(q,W,ot(J._payload),Ce)}if(Ee(J))return Qe(q,W,J,Ce);if(fe(J))return tt(q,W,J,Ce);sl(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(l(q,W.sibling),W=p(W,J),W.return=q,q=W):(l(q,W),W=oh(J,q.mode,Ce),W.return=q,q=W),T(q)):l(q,W)}return $t}var bs=yp(!0),Sp=yp(!1),ol=hr(null),al=null,Ls=null,gc=null;function vc(){gc=Ls=al=null}function _c(n){var s=ol.current;zt(ol),n._currentValue=s}function xc(n,s,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),n===l)break;n=n.return}}function Ds(n,s){al=n,gc=Ls=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&s&&(Dn=!0),n.firstContext=null)}function Zn(n){var s=n._currentValue;if(gc!==n)if(n={context:n,memoizedValue:s,next:null},Ls===null){if(al===null)throw Error(t(308));Ls=n,al.dependencies={lanes:0,firstContext:n}}else Ls=Ls.next=n;return s}var Vr=null;function yc(n){Vr===null?Vr=[n]:Vr.push(n)}function Mp(n,s,l,h){var p=s.interleaved;return p===null?(l.next=l,yc(s)):(l.next=p.next,p.next=l),s.interleaved=l,Oi(n,h)}function Oi(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var pr=!1;function Sc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ep(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function mr(n,s,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,Ct&2){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,Oi(n,l)}return p=h.interleaved,p===null?(s.next=s,yc(h)):(s.next=p.next,p.next=s),h.interleaved=s,Oi(n,l)}function ll(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=n.pendingLanes,l|=h,s.lanes=l,on(n,l)}}function Tp(n,s){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=T:y=y.next=T,l=l.next}while(l!==null);y===null?p=y=s:y=y.next=s}else p=y=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function ul(n,s,l,h){var p=n.updateQueue;pr=!1;var y=p.firstBaseUpdate,T=p.lastBaseUpdate,N=p.shared.pending;if(N!==null){p.shared.pending=null;var z=N,ee=z.next;z.next=null,T===null?y=ee:T.next=ee,T=z;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,N=ye.lastBaseUpdate,N!==T&&(N===null?ye.firstBaseUpdate=ee:N.next=ee,ye.lastBaseUpdate=z))}if(y!==null){var Te=p.baseState;T=0,ye=ee=z=null,N=y;do{var _e=N.lane,Ve=N.eventTime;if((h&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Ve,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Qe=n,tt=N;switch(_e=s,Ve=l,tt.tag){case 1:if(Qe=tt.payload,typeof Qe=="function"){Te=Qe.call(Ve,Te,_e);break e}Te=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=tt.payload,_e=typeof Qe=="function"?Qe.call(Ve,Te,_e):Qe,_e==null)break e;Te=se({},Te,_e);break e;case 2:pr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,_e=p.effects,_e===null?p.effects=[N]:_e.push(N))}else Ve={eventTime:Ve,lane:_e,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ye===null?(ee=ye=Ve,z=Te):ye=ye.next=Ve,T|=_e;if(N=N.next,N===null){if(N=p.shared.pending,N===null)break;_e=N,N=_e.next,_e.next=null,p.lastBaseUpdate=_e,p.shared.pending=null}}while(!0);if(ye===null&&(z=Te),p.baseState=z,p.firstBaseUpdate=ee,p.lastBaseUpdate=ye,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else y===null&&(p.shared.lanes=0);Xr|=T,n.lanes=T,n.memoizedState=Te}}function wp(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var h=n[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var ko={},Si=hr(ko),Bo=hr(ko),zo=hr(ko);function Gr(n){if(n===ko)throw Error(t(174));return n}function Mc(n,s){switch(Ot(zo,s),Ot(Bo,n),Ot(Si,ko),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ge(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=ge(s,n)}zt(Si),Ot(Si,s)}function Is(){zt(Si),zt(Bo),zt(zo)}function Ap(n){Gr(zo.current);var s=Gr(Si.current),l=ge(s,n.type);s!==l&&(Ot(Bo,n),Ot(Si,l))}function Ec(n){Bo.current===n&&(zt(Si),zt(Bo))}var Gt=hr(0);function cl(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Tc=[];function wc(){for(var n=0;n<Tc.length;n++)Tc[n]._workInProgressVersionPrimary=null;Tc.length=0}var hl=R.ReactCurrentDispatcher,Ac=R.ReactCurrentBatchConfig,Wr=0,Wt=null,Qt=null,an=null,fl=!1,Ho=!1,Vo=0,__=0;function vn(){throw Error(t(321))}function Rc(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!ii(n[l],s[l]))return!1;return!0}function Cc(n,s,l,h,p,y){if(Wr=y,Wt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,hl.current=n===null||n.memoizedState===null?M_:E_,n=l(h,p),Ho){y=0;do{if(Ho=!1,Vo=0,25<=y)throw Error(t(301));y+=1,an=Qt=null,s.updateQueue=null,hl.current=T_,n=l(h,p)}while(Ho)}if(hl.current=ml,s=Qt!==null&&Qt.next!==null,Wr=0,an=Qt=Wt=null,fl=!1,s)throw Error(t(300));return n}function Pc(){var n=Vo!==0;return Vo=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Wt.memoizedState=an=n:an=an.next=n,an}function Kn(){if(Qt===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var s=an===null?Wt.memoizedState:an.next;if(s!==null)an=s,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},an===null?Wt.memoizedState=an=n:an=an.next=n}return an}function Go(n,s){return typeof s=="function"?s(n):s}function bc(n){var s=Kn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=Qt,p=h.baseQueue,y=l.pending;if(y!==null){if(p!==null){var T=p.next;p.next=y.next,y.next=T}h.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,h=h.baseState;var N=T=null,z=null,ee=y;do{var ye=ee.lane;if((Wr&ye)===ye)z!==null&&(z=z.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),h=ee.hasEagerState?ee.eagerState:n(h,ee.action);else{var Te={lane:ye,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};z===null?(N=z=Te,T=h):z=z.next=Te,Wt.lanes|=ye,Xr|=ye}ee=ee.next}while(ee!==null&&ee!==y);z===null?T=h:z.next=N,ii(h,s.memoizedState)||(Dn=!0),s.memoizedState=h,s.baseState=T,s.baseQueue=z,l.lastRenderedState=h}if(n=l.interleaved,n!==null){p=n;do y=p.lane,Wt.lanes|=y,Xr|=y,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Lc(n){var s=Kn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,p=l.pending,y=s.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do y=n(y,T.action),T=T.next;while(T!==p);ii(y,s.memoizedState)||(Dn=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,h]}function Rp(){}function Cp(n,s){var l=Wt,h=Kn(),p=s(),y=!ii(h.memoizedState,p);if(y&&(h.memoizedState=p,Dn=!0),h=h.queue,Dc(Lp.bind(null,l,h,n),[n]),h.getSnapshot!==s||y||an!==null&&an.memoizedState.tag&1){if(l.flags|=2048,Wo(9,bp.bind(null,l,h,p,s),void 0,null),ln===null)throw Error(t(349));Wr&30||Pp(l,s,p)}return p}function Pp(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=Wt.updateQueue,s===null?(s={lastEffect:null,stores:null},Wt.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function bp(n,s,l,h){s.value=l,s.getSnapshot=h,Dp(s)&&Ip(n)}function Lp(n,s,l){return l(function(){Dp(s)&&Ip(n)})}function Dp(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!ii(n,l)}catch{return!0}}function Ip(n){var s=Oi(n,1);s!==null&&li(s,n,1,-1)}function Np(n){var s=Mi();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:n},s.queue=n,n=n.dispatch=S_.bind(null,Wt,n),[s.memoizedState,n]}function Wo(n,s,l,h){return n={tag:n,create:s,destroy:l,deps:h,next:null},s=Wt.updateQueue,s===null?(s={lastEffect:null,stores:null},Wt.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,s.lastEffect=n)),n}function Up(){return Kn().memoizedState}function dl(n,s,l,h){var p=Mi();Wt.flags|=n,p.memoizedState=Wo(1|s,l,void 0,h===void 0?null:h)}function pl(n,s,l,h){var p=Kn();h=h===void 0?null:h;var y=void 0;if(Qt!==null){var T=Qt.memoizedState;if(y=T.destroy,h!==null&&Rc(h,T.deps)){p.memoizedState=Wo(s,l,y,h);return}}Wt.flags|=n,p.memoizedState=Wo(1|s,l,y,h)}function Fp(n,s){return dl(8390656,8,n,s)}function Dc(n,s){return pl(2048,8,n,s)}function Op(n,s){return pl(4,2,n,s)}function kp(n,s){return pl(4,4,n,s)}function Bp(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function zp(n,s,l){return l=l!=null?l.concat([n]):null,pl(4,4,Bp.bind(null,s,n),l)}function Ic(){}function Hp(n,s){var l=Kn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Rc(s,h[1])?h[0]:(l.memoizedState=[n,s],n)}function Vp(n,s){var l=Kn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Rc(s,h[1])?h[0]:(n=n(),l.memoizedState=[n,s],n)}function Gp(n,s,l){return Wr&21?(ii(l,s)||(l=Ut(),Wt.lanes|=l,Xr|=l,n.baseState=!0),s):(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=l)}function x_(n,s){var l=Rt;Rt=l!==0&&4>l?l:4,n(!0);var h=Ac.transition;Ac.transition={};try{n(!1),s()}finally{Rt=l,Ac.transition=h}}function Wp(){return Kn().memoizedState}function y_(n,s,l){var h=xr(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Xp(n))jp(s,l);else if(l=Mp(n,s,l,h),l!==null){var p=wn();li(l,n,h,p),Yp(l,s,h)}}function S_(n,s,l){var h=xr(n),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Xp(n))jp(s,p);else{var y=n.alternate;if(n.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var T=s.lastRenderedState,N=y(T,l);if(p.hasEagerState=!0,p.eagerState=N,ii(N,T)){var z=s.interleaved;z===null?(p.next=p,yc(s)):(p.next=z.next,z.next=p),s.interleaved=p;return}}catch{}finally{}l=Mp(n,s,p,h),l!==null&&(p=wn(),li(l,n,h,p),Yp(l,s,h))}}function Xp(n){var s=n.alternate;return n===Wt||s!==null&&s===Wt}function jp(n,s){Ho=fl=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function Yp(n,s,l){if(l&4194240){var h=s.lanes;h&=n.pendingLanes,l|=h,s.lanes=l,on(n,l)}}var ml={readContext:Zn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},M_={readContext:Zn,useCallback:function(n,s){return Mi().memoizedState=[n,s===void 0?null:s],n},useContext:Zn,useEffect:Fp,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,dl(4194308,4,Bp.bind(null,s,n),l)},useLayoutEffect:function(n,s){return dl(4194308,4,n,s)},useInsertionEffect:function(n,s){return dl(4,2,n,s)},useMemo:function(n,s){var l=Mi();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var h=Mi();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},h.queue=n,n=n.dispatch=y_.bind(null,Wt,n),[h.memoizedState,n]},useRef:function(n){var s=Mi();return n={current:n},s.memoizedState=n},useState:Np,useDebugValue:Ic,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=Np(!1),s=n[0];return n=x_.bind(null,n[1]),Mi().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var h=Wt,p=Mi();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),ln===null)throw Error(t(349));Wr&30||Pp(h,s,l)}p.memoizedState=l;var y={value:l,getSnapshot:s};return p.queue=y,Fp(Lp.bind(null,h,y,n),[n]),h.flags|=2048,Wo(9,bp.bind(null,h,y,l,s),void 0,null),l},useId:function(){var n=Mi(),s=ln.identifierPrefix;if(Vt){var l=Fi,h=Ui;l=(h&~(1<<32-gt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=Vo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=__++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},E_={readContext:Zn,useCallback:Hp,useContext:Zn,useEffect:Dc,useImperativeHandle:zp,useInsertionEffect:Op,useLayoutEffect:kp,useMemo:Vp,useReducer:bc,useRef:Up,useState:function(){return bc(Go)},useDebugValue:Ic,useDeferredValue:function(n){var s=Kn();return Gp(s,Qt.memoizedState,n)},useTransition:function(){var n=bc(Go)[0],s=Kn().memoizedState;return[n,s]},useMutableSource:Rp,useSyncExternalStore:Cp,useId:Wp,unstable_isNewReconciler:!1},T_={readContext:Zn,useCallback:Hp,useContext:Zn,useEffect:Dc,useImperativeHandle:zp,useInsertionEffect:Op,useLayoutEffect:kp,useMemo:Vp,useReducer:Lc,useRef:Up,useState:function(){return Lc(Go)},useDebugValue:Ic,useDeferredValue:function(n){var s=Kn();return Qt===null?s.memoizedState=n:Gp(s,Qt.memoizedState,n)},useTransition:function(){var n=Lc(Go)[0],s=Kn().memoizedState;return[n,s]},useMutableSource:Rp,useSyncExternalStore:Cp,useId:Wp,unstable_isNewReconciler:!1};function si(n,s){if(n&&n.defaultProps){s=se({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function Nc(n,s,l,h){s=n.memoizedState,l=l(h,s),l=l==null?s:se({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var gl={isMounted:function(n){return(n=n._reactInternals)?_i(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var h=wn(),p=xr(n),y=ki(h,p);y.payload=s,l!=null&&(y.callback=l),s=mr(n,y,p),s!==null&&(li(s,n,p,h),ll(s,n,p))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var h=wn(),p=xr(n),y=ki(h,p);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=mr(n,y,p),s!==null&&(li(s,n,p,h),ll(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=wn(),h=xr(n),p=ki(l,h);p.tag=2,s!=null&&(p.callback=s),s=mr(n,p,h),s!==null&&(li(s,n,h,l),ll(s,n,h))}};function qp(n,s,l,h,p,y,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,y,T):s.prototype&&s.prototype.isPureReactComponent?!bo(l,h)||!bo(p,y):!0}function $p(n,s,l){var h=!1,p=fr,y=s.contextType;return typeof y=="object"&&y!==null?y=Zn(y):(p=Ln(s)?Br:gn.current,h=s.contextTypes,y=(h=h!=null)?As(n,p):fr),s=new s(l,y),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=gl,n.stateNode=s,s._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=y),s}function Zp(n,s,l,h){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==n&&gl.enqueueReplaceState(s,s.state,null)}function Uc(n,s,l,h){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Sc(n);var y=s.contextType;typeof y=="object"&&y!==null?p.context=Zn(y):(y=Ln(s)?Br:gn.current,p.context=As(n,y)),p.state=n.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Nc(n,s,y,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&gl.enqueueReplaceState(p,p.state,null),ul(n,l,p,h),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,s){try{var l="",h=s;do l+=pe(h),h=h.return;while(h);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:n,source:s,stack:p,digest:null}}function Fc(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function Oc(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var w_=typeof WeakMap=="function"?WeakMap:Map;function Kp(n,s,l){l=ki(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){El||(El=!0,Jc=h),Oc(n,s)},l}function Jp(n,s,l){l=ki(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){Oc(n,s)}}var y=n.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){Oc(n,s),typeof h!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),l}function Qp(n,s,l){var h=n.pingCache;if(h===null){h=n.pingCache=new w_;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),n=B_.bind(null,n,s,l),s.then(n,n))}function em(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function tm(n,s,l,h,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ki(-1,1),s.tag=2,mr(l,s,1))),l.lanes|=1),n)}var A_=R.ReactCurrentOwner,Dn=!1;function Tn(n,s,l,h){s.child=n===null?Sp(s,null,l,h):bs(s,n.child,l,h)}function nm(n,s,l,h,p){l=l.render;var y=s.ref;return Ds(s,p),h=Cc(n,s,l,h,y,p),l=Pc(),n!==null&&!Dn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Bi(n,s,p)):(Vt&&l&&hc(s),s.flags|=1,Tn(n,s,h,p),s.child)}function im(n,s,l,h,p){if(n===null){var y=l.type;return typeof y=="function"&&!sh(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,rm(n,s,y,h,p)):(n=Pl(l.type,null,h,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(y=n.child,!(n.lanes&p)){var T=y.memoizedProps;if(l=l.compare,l=l!==null?l:bo,l(T,h)&&n.ref===s.ref)return Bi(n,s,p)}return s.flags|=1,n=Sr(y,h),n.ref=s.ref,n.return=s,s.child=n}function rm(n,s,l,h,p){if(n!==null){var y=n.memoizedProps;if(bo(y,h)&&n.ref===s.ref)if(Dn=!1,s.pendingProps=h=y,(n.lanes&p)!==0)n.flags&131072&&(Dn=!0);else return s.lanes=n.lanes,Bi(n,s,p)}return kc(n,s,l,h,p)}function sm(n,s,l){var h=s.pendingProps,p=h.children,y=n!==null?n.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Fs,Wn),Wn|=l;else{if(!(l&1073741824))return n=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ot(Fs,Wn),Wn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=y!==null?y.baseLanes:l,Ot(Fs,Wn),Wn|=h}else y!==null?(h=y.baseLanes|l,s.memoizedState=null):h=l,Ot(Fs,Wn),Wn|=h;return Tn(n,s,p,l),s.child}function om(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function kc(n,s,l,h,p){var y=Ln(l)?Br:gn.current;return y=As(s,y),Ds(s,p),l=Cc(n,s,l,h,y,p),h=Pc(),n!==null&&!Dn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Bi(n,s,p)):(Vt&&h&&hc(s),s.flags|=1,Tn(n,s,l,p),s.child)}function am(n,s,l,h,p){if(Ln(l)){var y=!0;el(s)}else y=!1;if(Ds(s,p),s.stateNode===null)_l(n,s),$p(s,l,h),Uc(s,l,h,p),h=!0;else if(n===null){var T=s.stateNode,N=s.memoizedProps;T.props=N;var z=T.context,ee=l.contextType;typeof ee=="object"&&ee!==null?ee=Zn(ee):(ee=Ln(l)?Br:gn.current,ee=As(s,ee));var ye=l.getDerivedStateFromProps,Te=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Te||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==h||z!==ee)&&Zp(s,T,h,ee),pr=!1;var _e=s.memoizedState;T.state=_e,ul(s,h,T,p),z=s.memoizedState,N!==h||_e!==z||bn.current||pr?(typeof ye=="function"&&(Nc(s,l,ye,h),z=s.memoizedState),(N=pr||qp(s,l,N,h,_e,z,ee))?(Te||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=z),T.props=h,T.state=z,T.context=ee,h=N):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{T=s.stateNode,Ep(n,s),N=s.memoizedProps,ee=s.type===s.elementType?N:si(s.type,N),T.props=ee,Te=s.pendingProps,_e=T.context,z=l.contextType,typeof z=="object"&&z!==null?z=Zn(z):(z=Ln(l)?Br:gn.current,z=As(s,z));var Ve=l.getDerivedStateFromProps;(ye=typeof Ve=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==Te||_e!==z)&&Zp(s,T,h,z),pr=!1,_e=s.memoizedState,T.state=_e,ul(s,h,T,p);var Qe=s.memoizedState;N!==Te||_e!==Qe||bn.current||pr?(typeof Ve=="function"&&(Nc(s,l,Ve,h),Qe=s.memoizedState),(ee=pr||qp(s,l,ee,h,_e,Qe,z)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,Qe,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,Qe,z)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=Qe),T.props=h,T.state=Qe,T.context=z,h=ee):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&_e===n.memoizedState||(s.flags|=1024),h=!1)}return Bc(n,s,l,h,y,p)}function Bc(n,s,l,h,p,y){om(n,s);var T=(s.flags&128)!==0;if(!h&&!T)return p&&fp(s,l,!1),Bi(n,s,y);h=s.stateNode,A_.current=s;var N=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,n!==null&&T?(s.child=bs(s,n.child,null,y),s.child=bs(s,null,N,y)):Tn(n,s,N,y),s.memoizedState=h.state,p&&fp(s,l,!0),s.child}function lm(n){var s=n.stateNode;s.pendingContext?cp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&cp(n,s.context,!1),Mc(n,s.containerInfo)}function um(n,s,l,h,p){return Ps(),mc(p),s.flags|=256,Tn(n,s,l,h),s.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Hc(n){return{baseLanes:n,cachePool:null,transitions:null}}function cm(n,s,l){var h=s.pendingProps,p=Gt.current,y=!1,T=(s.flags&128)!==0,N;if((N=T)||(N=n!==null&&n.memoizedState===null?!1:(p&2)!==0),N?(y=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ot(Gt,p&1),n===null)return pc(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(s.mode&1?n.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(T=h.children,n=h.fallback,y?(h=s.mode,y=s.child,T={mode:"hidden",children:T},!(h&1)&&y!==null?(y.childLanes=0,y.pendingProps=T):y=bl(T,h,0,null),n=$r(n,h,l,null),y.return=s,n.return=s,y.sibling=n,s.child=y,s.child.memoizedState=Hc(l),s.memoizedState=zc,n):Vc(s,T));if(p=n.memoizedState,p!==null&&(N=p.dehydrated,N!==null))return R_(n,s,T,h,N,p,l);if(y){y=h.fallback,T=s.mode,p=n.child,N=p.sibling;var z={mode:"hidden",children:h.children};return!(T&1)&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=z,s.deletions=null):(h=Sr(p,z),h.subtreeFlags=p.subtreeFlags&14680064),N!==null?y=Sr(N,y):(y=$r(y,T,l,null),y.flags|=2),y.return=s,h.return=s,h.sibling=y,s.child=h,h=y,y=s.child,T=n.child.memoizedState,T=T===null?Hc(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},y.memoizedState=T,y.childLanes=n.childLanes&~l,s.memoizedState=zc,h}return y=n.child,n=y.sibling,h=Sr(y,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=l),h.return=s,h.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=h,s.memoizedState=null,h}function Vc(n,s){return s=bl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function vl(n,s,l,h){return h!==null&&mc(h),bs(s,n.child,null,l),n=Vc(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function R_(n,s,l,h,p,y,T){if(l)return s.flags&256?(s.flags&=-257,h=Fc(Error(t(422))),vl(n,s,T,h)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(y=h.fallback,p=s.mode,h=bl({mode:"visible",children:h.children},p,0,null),y=$r(y,p,T,null),y.flags|=2,h.return=s,y.return=s,h.sibling=y,s.child=h,s.mode&1&&bs(s,n.child,null,T),s.child.memoizedState=Hc(T),s.memoizedState=zc,y);if(!(s.mode&1))return vl(n,s,T,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var N=h.dgst;return h=N,y=Error(t(419)),h=Fc(y,h,void 0),vl(n,s,T,h)}if(N=(T&n.childLanes)!==0,Dn||N){if(h=ln,h!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|T)?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,Oi(n,p),li(h,n,p,-1))}return rh(),h=Fc(Error(t(421))),vl(n,s,T,h)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=z_.bind(null,n),p._reactRetry=s,null):(n=y.treeContext,Gn=cr(p.nextSibling),Vn=s,Vt=!0,ri=null,n!==null&&(qn[$n++]=Ui,qn[$n++]=Fi,qn[$n++]=zr,Ui=n.id,Fi=n.overflow,zr=s),s=Vc(s,h.children),s.flags|=4096,s)}function hm(n,s,l){n.lanes|=s;var h=n.alternate;h!==null&&(h.lanes|=s),xc(n.return,s,l)}function Gc(n,s,l,h,p){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=l,y.tailMode=p)}function fm(n,s,l){var h=s.pendingProps,p=h.revealOrder,y=h.tail;if(Tn(n,s,h.children,l),h=Gt.current,h&2)h=h&1|2,s.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hm(n,l,s);else if(n.tag===19)hm(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(Ot(Gt,h),!(s.mode&1))s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)n=l.alternate,n!==null&&cl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Gc(s,!1,p,l,y);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&cl(n)===null){s.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Gc(s,!0,l,null,y);break;case"together":Gc(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function _l(n,s){!(s.mode&1)&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Bi(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),Xr|=s.lanes,!(l&s.childLanes))return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=Sr(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=Sr(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function C_(n,s,l){switch(s.tag){case 3:lm(s),Ps();break;case 5:Ap(s);break;case 1:Ln(s.type)&&el(s);break;case 4:Mc(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;Ot(ol,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ot(Gt,Gt.current&1),s.flags|=128,null):l&s.child.childLanes?cm(n,s,l):(Ot(Gt,Gt.current&1),n=Bi(n,s,l),n!==null?n.sibling:null);Ot(Gt,Gt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,n.flags&128){if(h)return fm(n,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ot(Gt,Gt.current),h)break;return null;case 22:case 23:return s.lanes=0,sm(n,s,l)}return Bi(n,s,l)}var dm,Wc,pm,mm;dm=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Wc=function(){},pm=function(n,s,l,h){var p=n.memoizedProps;if(p!==h){n=s.stateNode,Gr(Si.current);var y=null;switch(l){case"input":p=D(n,p),h=D(n,h),y=[];break;case"select":p=se({},p,{value:void 0}),h=se({},h,{value:void 0}),y=[];break;case"textarea":p=ft(n,p),h=ft(n,h),y=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=Ka)}st(l,h);var T;l=null;for(ee in p)if(!h.hasOwnProperty(ee)&&p.hasOwnProperty(ee)&&p[ee]!=null)if(ee==="style"){var N=p[ee];for(T in N)N.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?y||(y=[]):(y=y||[]).push(ee,null));for(ee in h){var z=h[ee];if(N=p!=null?p[ee]:void 0,h.hasOwnProperty(ee)&&z!==N&&(z!=null||N!=null))if(ee==="style")if(N){for(T in N)!N.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in z)z.hasOwnProperty(T)&&N[T]!==z[T]&&(l||(l={}),l[T]=z[T])}else l||(y||(y=[]),y.push(ee,l)),l=z;else ee==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,N=N?N.__html:void 0,z!=null&&N!==z&&(y=y||[]).push(ee,z)):ee==="children"?typeof z!="string"&&typeof z!="number"||(y=y||[]).push(ee,""+z):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(z!=null&&ee==="onScroll"&&Bt("scroll",n),y||N===z||(y=[])):(y=y||[]).push(ee,z))}l&&(y=y||[]).push("style",l);var ee=y;(s.updateQueue=ee)&&(s.flags|=4)}},mm=function(n,s,l,h){l!==h&&(s.flags|=4)};function Xo(n,s){if(!Vt)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function _n(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(s)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=h,n.childLanes=l,s}function P_(n,s,l){var h=s.pendingProps;switch(fc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(s),null;case 1:return Ln(s.type)&&Qa(),_n(s),null;case 3:return h=s.stateNode,Is(),zt(bn),zt(gn),wc(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(rl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,ri!==null&&(th(ri),ri=null))),Wc(n,s),_n(s),null;case 5:Ec(s);var p=Gr(zo.current);if(l=s.type,n!==null&&s.stateNode!=null)pm(n,s,l,h,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return _n(s),null}if(n=Gr(Si.current),rl(s)){h=s.stateNode,l=s.type;var y=s.memoizedProps;switch(h[yi]=s,h[Uo]=y,n=(s.mode&1)!==0,l){case"dialog":Bt("cancel",h),Bt("close",h);break;case"iframe":case"object":case"embed":Bt("load",h);break;case"video":case"audio":for(p=0;p<Do.length;p++)Bt(Do[p],h);break;case"source":Bt("error",h);break;case"img":case"image":case"link":Bt("error",h),Bt("load",h);break;case"details":Bt("toggle",h);break;case"input":Le(h,y),Bt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!y.multiple},Bt("invalid",h);break;case"textarea":I(h,y),Bt("invalid",h)}st(l,y),p=null;for(var T in y)if(y.hasOwnProperty(T)){var N=y[T];T==="children"?typeof N=="string"?h.textContent!==N&&(y.suppressHydrationWarning!==!0&&Za(h.textContent,N,n),p=["children",N]):typeof N=="number"&&h.textContent!==""+N&&(y.suppressHydrationWarning!==!0&&Za(h.textContent,N,n),p=["children",""+N]):o.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&Bt("scroll",h)}switch(l){case"input":Lt(h),de(h,y,!0);break;case"textarea":Lt(h),K(h);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(h.onclick=Ka)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ae(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=T.createElement(l,{is:h.is}):(n=T.createElement(l),l==="select"&&(T=n,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):n=T.createElementNS(n,l),n[yi]=s,n[Uo]=h,dm(n,s,!1,!1),s.stateNode=n;e:{switch(T=Ue(l,h),l){case"dialog":Bt("cancel",n),Bt("close",n),p=h;break;case"iframe":case"object":case"embed":Bt("load",n),p=h;break;case"video":case"audio":for(p=0;p<Do.length;p++)Bt(Do[p],n);p=h;break;case"source":Bt("error",n),p=h;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),p=h;break;case"details":Bt("toggle",n),p=h;break;case"input":Le(n,h),p=D(n,h),Bt("invalid",n);break;case"option":p=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},p=se({},h,{value:void 0}),Bt("invalid",n);break;case"textarea":I(n,h),p=ft(n,h),Bt("invalid",n);break;default:p=h}st(l,p),N=p;for(y in N)if(N.hasOwnProperty(y)){var z=N[y];y==="style"?We(n,z):y==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&et(n,z)):y==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&Ie(n,z):typeof z=="number"&&Ie(n,""+z):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?z!=null&&y==="onScroll"&&Bt("scroll",n):z!=null&&A(n,y,z,T))}switch(l){case"input":Lt(n),de(n,h,!1);break;case"textarea":Lt(n),K(n);break;case"option":h.value!=null&&n.setAttribute("value",""+be(h.value));break;case"select":n.multiple=!!h.multiple,y=h.value,y!=null?ze(n,!!h.multiple,y,!1):h.defaultValue!=null&&ze(n,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Ka)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return _n(s),null;case 6:if(n&&s.stateNode!=null)mm(n,s,n.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=Gr(zo.current),Gr(Si.current),rl(s)){if(h=s.stateNode,l=s.memoizedProps,h[yi]=s,(y=h.nodeValue!==l)&&(n=Vn,n!==null))switch(n.tag){case 3:Za(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Za(h.nodeValue,l,(n.mode&1)!==0)}y&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[yi]=s,s.stateNode=h}return _n(s),null;case 13:if(zt(Gt),h=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Gn!==null&&s.mode&1&&!(s.flags&128))_p(),Ps(),s.flags|=98560,y=!1;else if(y=rl(s),h!==null&&h.dehydrated!==null){if(n===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[yi]=s}else Ps(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;_n(s),y=!1}else ri!==null&&(th(ri),ri=null),y=!0;if(!y)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(n===null||Gt.current&1?en===0&&(en=3):rh())),s.updateQueue!==null&&(s.flags|=4),_n(s),null);case 4:return Is(),Wc(n,s),n===null&&Io(s.stateNode.containerInfo),_n(s),null;case 10:return _c(s.type._context),_n(s),null;case 17:return Ln(s.type)&&Qa(),_n(s),null;case 19:if(zt(Gt),y=s.memoizedState,y===null)return _n(s),null;if(h=(s.flags&128)!==0,T=y.rendering,T===null)if(h)Xo(y,!1);else{if(en!==0||n!==null&&n.flags&128)for(n=s.child;n!==null;){if(T=cl(n),T!==null){for(s.flags|=128,Xo(y,!1),h=T.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)y=l,n=h,y.flags&=14680066,T=y.alternate,T===null?(y.childLanes=0,y.lanes=n,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=T.childLanes,y.lanes=T.lanes,y.child=T.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=T.memoizedProps,y.memoizedState=T.memoizedState,y.updateQueue=T.updateQueue,y.type=T.type,n=T.dependencies,y.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ot(Gt,Gt.current&1|2),s.child}n=n.sibling}y.tail!==null&&Z()>Os&&(s.flags|=128,h=!0,Xo(y,!1),s.lanes=4194304)}else{if(!h)if(n=cl(T),n!==null){if(s.flags|=128,h=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Xo(y,!0),y.tail===null&&y.tailMode==="hidden"&&!T.alternate&&!Vt)return _n(s),null}else 2*Z()-y.renderingStartTime>Os&&l!==1073741824&&(s.flags|=128,h=!0,Xo(y,!1),s.lanes=4194304);y.isBackwards?(T.sibling=s.child,s.child=T):(l=y.last,l!==null?l.sibling=T:s.child=T,y.last=T)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=Z(),s.sibling=null,l=Gt.current,Ot(Gt,h?l&1|2:l&1),s):(_n(s),null);case 22:case 23:return ih(),h=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?Wn&1073741824&&(_n(s),s.subtreeFlags&6&&(s.flags|=8192)):_n(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function b_(n,s){switch(fc(s),s.tag){case 1:return Ln(s.type)&&Qa(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Is(),zt(bn),zt(gn),wc(),n=s.flags,n&65536&&!(n&128)?(s.flags=n&-65537|128,s):null;case 5:return Ec(s),null;case 13:if(zt(Gt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ps()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return zt(Gt),null;case 4:return Is(),null;case 10:return _c(s.type._context),null;case 22:case 23:return ih(),null;case 24:return null;default:return null}}var xl=!1,xn=!1,L_=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Us(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){qt(n,s,h)}else l.current=null}function Xc(n,s,l){try{l()}catch(h){qt(n,s,h)}}var gm=!1;function D_(n,s){if(ic=Ba,n=qd(),$u(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var T=0,N=-1,z=-1,ee=0,ye=0,Te=n,_e=null;t:for(;;){for(var Ve;Te!==l||p!==0&&Te.nodeType!==3||(N=T+p),Te!==y||h!==0&&Te.nodeType!==3||(z=T+h),Te.nodeType===3&&(T+=Te.nodeValue.length),(Ve=Te.firstChild)!==null;)_e=Te,Te=Ve;for(;;){if(Te===n)break t;if(_e===l&&++ee===p&&(N=T),_e===y&&++ye===h&&(z=T),(Ve=Te.nextSibling)!==null)break;Te=_e,_e=Te.parentNode}Te=Ve}l=N===-1||z===-1?null:{start:N,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(rc={focusedElem:n,selectionRange:l},Ba=!1,Ze=s;Ze!==null;)if(s=Ze,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Ze=n;else for(;Ze!==null;){s=Ze;try{var Qe=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var tt=Qe.memoizedProps,$t=Qe.memoizedState,q=s.stateNode,W=q.getSnapshotBeforeUpdate(s.elementType===s.type?tt:si(s.type,tt),$t);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=s.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){qt(s,s.return,Ce)}if(n=s.sibling,n!==null){n.return=s.return,Ze=n;break}Ze=s.return}return Qe=gm,gm=!1,Qe}function jo(n,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&n)===n){var y=p.destroy;p.destroy=void 0,y!==void 0&&Xc(s,l,y)}p=p.next}while(p!==h)}}function yl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function jc(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function vm(n){var s=n.alternate;s!==null&&(n.alternate=null,vm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[yi],delete s[Uo],delete s[lc],delete s[p_],delete s[m_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _m(n){return n.tag===5||n.tag===3||n.tag===4}function xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_m(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yc(n,s,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Ka));else if(h!==4&&(n=n.child,n!==null))for(Yc(n,s,l),n=n.sibling;n!==null;)Yc(n,s,l),n=n.sibling}function qc(n,s,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(qc(n,s,l),n=n.sibling;n!==null;)qc(n,s,l),n=n.sibling}var fn=null,oi=!1;function gr(n,s,l){for(l=l.child;l!==null;)ym(n,s,l),l=l.sibling}function ym(n,s,l){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(lt,l)}catch{}switch(l.tag){case 5:xn||Us(l,s);case 6:var h=fn,p=oi;fn=null,gr(n,s,l),fn=h,oi=p,fn!==null&&(oi?(n=fn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):fn.removeChild(l.stateNode));break;case 18:fn!==null&&(oi?(n=fn,l=l.stateNode,n.nodeType===8?ac(n.parentNode,l):n.nodeType===1&&ac(n,l),To(n)):ac(fn,l.stateNode));break;case 4:h=fn,p=oi,fn=l.stateNode.containerInfo,oi=!0,gr(n,s,l),fn=h,oi=p;break;case 0:case 11:case 14:case 15:if(!xn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var y=p,T=y.destroy;y=y.tag,T!==void 0&&(y&2||y&4)&&Xc(l,s,T),p=p.next}while(p!==h)}gr(n,s,l);break;case 1:if(!xn&&(Us(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(N){qt(l,s,N)}gr(n,s,l);break;case 21:gr(n,s,l);break;case 22:l.mode&1?(xn=(h=xn)||l.memoizedState!==null,gr(n,s,l),xn=h):gr(n,s,l);break;default:gr(n,s,l)}}function Sm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new L_),s.forEach(function(h){var p=H_.bind(null,n,h);l.has(h)||(l.add(h),h.then(p,p))})}}function ai(n,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var y=n,T=s,N=T;e:for(;N!==null;){switch(N.tag){case 5:fn=N.stateNode,oi=!1;break e;case 3:fn=N.stateNode.containerInfo,oi=!0;break e;case 4:fn=N.stateNode.containerInfo,oi=!0;break e}N=N.return}if(fn===null)throw Error(t(160));ym(y,T,p),fn=null,oi=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(ee){qt(p,s,ee)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Mm(s,n),s=s.sibling}function Mm(n,s){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(s,n),Ei(n),h&4){try{jo(3,n,n.return),yl(3,n)}catch(tt){qt(n,n.return,tt)}try{jo(5,n,n.return)}catch(tt){qt(n,n.return,tt)}}break;case 1:ai(s,n),Ei(n),h&512&&l!==null&&Us(l,l.return);break;case 5:if(ai(s,n),Ei(n),h&512&&l!==null&&Us(l,l.return),n.flags&32){var p=n.stateNode;try{Ie(p,"")}catch(tt){qt(n,n.return,tt)}}if(h&4&&(p=n.stateNode,p!=null)){var y=n.memoizedProps,T=l!==null?l.memoizedProps:y,N=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{N==="input"&&y.type==="radio"&&y.name!=null&&Se(p,y),Ue(N,T);var ee=Ue(N,y);for(T=0;T<z.length;T+=2){var ye=z[T],Te=z[T+1];ye==="style"?We(p,Te):ye==="dangerouslySetInnerHTML"?et(p,Te):ye==="children"?Ie(p,Te):A(p,ye,Te,ee)}switch(N){case"input":De(p,y);break;case"textarea":w(p,y);break;case"select":var _e=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var Ve=y.value;Ve!=null?ze(p,!!y.multiple,Ve,!1):_e!==!!y.multiple&&(y.defaultValue!=null?ze(p,!!y.multiple,y.defaultValue,!0):ze(p,!!y.multiple,y.multiple?[]:"",!1))}p[Uo]=y}catch(tt){qt(n,n.return,tt)}}break;case 6:if(ai(s,n),Ei(n),h&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,y=n.memoizedProps;try{p.nodeValue=y}catch(tt){qt(n,n.return,tt)}}break;case 3:if(ai(s,n),Ei(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{To(s.containerInfo)}catch(tt){qt(n,n.return,tt)}break;case 4:ai(s,n),Ei(n);break;case 13:ai(s,n),Ei(n),p=n.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(Kc=Z())),h&4&&Sm(n);break;case 22:if(ye=l!==null&&l.memoizedState!==null,n.mode&1?(xn=(ee=xn)||ye,ai(s,n),xn=ee):ai(s,n),Ei(n),h&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!ye&&n.mode&1)for(Ze=n,ye=n.child;ye!==null;){for(Te=Ze=ye;Ze!==null;){switch(_e=Ze,Ve=_e.child,_e.tag){case 0:case 11:case 14:case 15:jo(4,_e,_e.return);break;case 1:Us(_e,_e.return);var Qe=_e.stateNode;if(typeof Qe.componentWillUnmount=="function"){h=_e,l=_e.return;try{s=h,Qe.props=s.memoizedProps,Qe.state=s.memoizedState,Qe.componentWillUnmount()}catch(tt){qt(h,l,tt)}}break;case 5:Us(_e,_e.return);break;case 22:if(_e.memoizedState!==null){wm(Te);continue}}Ve!==null?(Ve.return=_e,Ze=Ve):wm(Te)}ye=ye.sibling}e:for(ye=null,Te=n;;){if(Te.tag===5){if(ye===null){ye=Te;try{p=Te.stateNode,ee?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(N=Te.stateNode,z=Te.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,N.style.display=ve("display",T))}catch(tt){qt(n,n.return,tt)}}}else if(Te.tag===6){if(ye===null)try{Te.stateNode.nodeValue=ee?"":Te.memoizedProps}catch(tt){qt(n,n.return,tt)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;ye===Te&&(ye=null),Te=Te.return}ye===Te&&(ye=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:ai(s,n),Ei(n),h&4&&Sm(n);break;case 21:break;default:ai(s,n),Ei(n)}}function Ei(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(_m(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Ie(p,""),h.flags&=-33);var y=xm(n);qc(n,y,p);break;case 3:case 4:var T=h.stateNode.containerInfo,N=xm(n);Yc(n,N,T);break;default:throw Error(t(161))}}catch(z){qt(n,n.return,z)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function I_(n,s,l){Ze=n,Em(n)}function Em(n,s,l){for(var h=(n.mode&1)!==0;Ze!==null;){var p=Ze,y=p.child;if(p.tag===22&&h){var T=p.memoizedState!==null||xl;if(!T){var N=p.alternate,z=N!==null&&N.memoizedState!==null||xn;N=xl;var ee=xn;if(xl=T,(xn=z)&&!ee)for(Ze=p;Ze!==null;)T=Ze,z=T.child,T.tag===22&&T.memoizedState!==null?Am(p):z!==null?(z.return=T,Ze=z):Am(p);for(;y!==null;)Ze=y,Em(y),y=y.sibling;Ze=p,xl=N,xn=ee}Tm(n)}else p.subtreeFlags&8772&&y!==null?(y.return=p,Ze=y):Tm(n)}}function Tm(n){for(;Ze!==null;){var s=Ze;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:xn||yl(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!xn)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:si(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&wp(s,y,h);break;case 3:var T=s.updateQueue;if(T!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}wp(s,T,l)}break;case 5:var N=s.stateNode;if(l===null&&s.flags&4){l=N;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ee=s.alternate;if(ee!==null){var ye=ee.memoizedState;if(ye!==null){var Te=ye.dehydrated;Te!==null&&To(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||s.flags&512&&jc(s)}catch(_e){qt(s,s.return,_e)}}if(s===n){Ze=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ze=l;break}Ze=s.return}}function wm(n){for(;Ze!==null;){var s=Ze;if(s===n){Ze=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ze=l;break}Ze=s.return}}function Am(n){for(;Ze!==null;){var s=Ze;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{yl(4,s)}catch(z){qt(s,l,z)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(z){qt(s,p,z)}}var y=s.return;try{jc(s)}catch(z){qt(s,y,z)}break;case 5:var T=s.return;try{jc(s)}catch(z){qt(s,T,z)}}}catch(z){qt(s,s.return,z)}if(s===n){Ze=null;break}var N=s.sibling;if(N!==null){N.return=s.return,Ze=N;break}Ze=s.return}}var N_=Math.ceil,Sl=R.ReactCurrentDispatcher,$c=R.ReactCurrentOwner,Jn=R.ReactCurrentBatchConfig,Ct=0,ln=null,Kt=null,dn=0,Wn=0,Fs=hr(0),en=0,Yo=null,Xr=0,Ml=0,Zc=0,qo=null,In=null,Kc=0,Os=1/0,zi=null,El=!1,Jc=null,vr=null,Tl=!1,_r=null,wl=0,$o=0,Qc=null,Al=-1,Rl=0;function wn(){return Ct&6?Z():Al!==-1?Al:Al=Z()}function xr(n){return n.mode&1?Ct&2&&dn!==0?dn&-dn:v_.transition!==null?(Rl===0&&(Rl=Ut()),Rl):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:Cd(n.type)),n):1}function li(n,s,l,h){if(50<$o)throw $o=0,Qc=null,Error(t(185));sn(n,l,h),(!(Ct&2)||n!==ln)&&(n===ln&&(!(Ct&2)&&(Ml|=l),en===4&&yr(n,dn)),Nn(n,h),l===1&&Ct===0&&!(s.mode&1)&&(Os=Z()+500,tl&&dr()))}function Nn(n,s){var l=n.callbackNode;En(n,s);var h=pn(n,n===ln?dn:0);if(h===0)l!==null&&P(l),n.callbackNode=null,n.callbackPriority=0;else if(s=h&-h,n.callbackPriority!==s){if(l!=null&&P(l),s===1)n.tag===0?g_(Cm.bind(null,n)):dp(Cm.bind(null,n)),f_(function(){!(Ct&6)&&dr()}),l=null;else{switch(xi(h)){case 1:l=Ae;break;case 4:l=ke;break;case 16:l=$e;break;case 536870912:l=ct;break;default:l=$e}l=Fm(l,Rm.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function Rm(n,s){if(Al=-1,Rl=0,Ct&6)throw Error(t(327));var l=n.callbackNode;if(ks()&&n.callbackNode!==l)return null;var h=pn(n,n===ln?dn:0);if(h===0)return null;if(h&30||h&n.expiredLanes||s)s=Cl(n,h);else{s=h;var p=Ct;Ct|=2;var y=bm();(ln!==n||dn!==s)&&(zi=null,Os=Z()+500,Yr(n,s));do try{O_();break}catch(N){Pm(n,N)}while(!0);vc(),Sl.current=y,Ct=p,Kt!==null?s=0:(ln=null,dn=0,s=en)}if(s!==0){if(s===2&&(p=Di(n),p!==0&&(h=p,s=eh(n,p))),s===1)throw l=Yo,Yr(n,0),yr(n,h),Nn(n,Z()),l;if(s===6)yr(n,h);else{if(p=n.current.alternate,!(h&30)&&!U_(p)&&(s=Cl(n,h),s===2&&(y=Di(n),y!==0&&(h=y,s=eh(n,y))),s===1))throw l=Yo,Yr(n,0),yr(n,h),Nn(n,Z()),l;switch(n.finishedWork=p,n.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:qr(n,In,zi);break;case 3:if(yr(n,h),(h&130023424)===h&&(s=Kc+500-Z(),10<s)){if(pn(n,0)!==0)break;if(p=n.suspendedLanes,(p&h)!==h){wn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=oc(qr.bind(null,n,In,zi),s);break}qr(n,In,zi);break;case 4:if(yr(n,h),(h&4194240)===h)break;for(s=n.eventTimes,p=-1;0<h;){var T=31-gt(h);y=1<<T,T=s[T],T>p&&(p=T),h&=~y}if(h=p,h=Z()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*N_(h/1960))-h,10<h){n.timeoutHandle=oc(qr.bind(null,n,In,zi),h);break}qr(n,In,zi);break;case 5:qr(n,In,zi);break;default:throw Error(t(329))}}}return Nn(n,Z()),n.callbackNode===l?Rm.bind(null,n):null}function eh(n,s){var l=qo;return n.current.memoizedState.isDehydrated&&(Yr(n,s).flags|=256),n=Cl(n,s),n!==2&&(s=In,In=l,s!==null&&th(s)),n}function th(n){In===null?In=n:In.push.apply(In,n)}function U_(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],y=p.getSnapshot;p=p.value;try{if(!ii(y(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function yr(n,s){for(s&=~Zc,s&=~Ml,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-gt(s),h=1<<l;n[l]=-1,s&=~h}}function Cm(n){if(Ct&6)throw Error(t(327));ks();var s=pn(n,0);if(!(s&1))return Nn(n,Z()),null;var l=Cl(n,s);if(n.tag!==0&&l===2){var h=Di(n);h!==0&&(s=h,l=eh(n,h))}if(l===1)throw l=Yo,Yr(n,0),yr(n,s),Nn(n,Z()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,qr(n,In,zi),Nn(n,Z()),null}function nh(n,s){var l=Ct;Ct|=1;try{return n(s)}finally{Ct=l,Ct===0&&(Os=Z()+500,tl&&dr())}}function jr(n){_r!==null&&_r.tag===0&&!(Ct&6)&&ks();var s=Ct;Ct|=1;var l=Jn.transition,h=Rt;try{if(Jn.transition=null,Rt=1,n)return n()}finally{Rt=h,Jn.transition=l,Ct=s,!(Ct&6)&&dr()}}function ih(){Wn=Fs.current,zt(Fs)}function Yr(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,h_(l)),Kt!==null)for(l=Kt.return;l!==null;){var h=l;switch(fc(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Qa();break;case 3:Is(),zt(bn),zt(gn),wc();break;case 5:Ec(h);break;case 4:Is();break;case 13:zt(Gt);break;case 19:zt(Gt);break;case 10:_c(h.type._context);break;case 22:case 23:ih()}l=l.return}if(ln=n,Kt=n=Sr(n.current,null),dn=Wn=s,en=0,Yo=null,Zc=Ml=Xr=0,In=qo=null,Vr!==null){for(s=0;s<Vr.length;s++)if(l=Vr[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,y=l.pending;if(y!==null){var T=y.next;y.next=p,h.next=T}l.pending=h}Vr=null}return n}function Pm(n,s){do{var l=Kt;try{if(vc(),hl.current=ml,fl){for(var h=Wt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}fl=!1}if(Wr=0,an=Qt=Wt=null,Ho=!1,Vo=0,$c.current=null,l===null||l.return===null){en=1,Yo=s,Kt=null;break}e:{var y=n,T=l.return,N=l,z=s;if(s=dn,N.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=z,ye=N,Te=ye.tag;if(!(ye.mode&1)&&(Te===0||Te===11||Te===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ve=em(T);if(Ve!==null){Ve.flags&=-257,tm(Ve,T,N,y,s),Ve.mode&1&&Qp(y,ee,s),s=Ve,z=ee;var Qe=s.updateQueue;if(Qe===null){var tt=new Set;tt.add(z),s.updateQueue=tt}else Qe.add(z);break e}else{if(!(s&1)){Qp(y,ee,s),rh();break e}z=Error(t(426))}}else if(Vt&&N.mode&1){var $t=em(T);if($t!==null){!($t.flags&65536)&&($t.flags|=256),tm($t,T,N,y,s),mc(Ns(z,N));break e}}y=z=Ns(z,N),en!==4&&(en=2),qo===null?qo=[y]:qo.push(y),y=T;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var q=Kp(y,z,s);Tp(y,q);break e;case 1:N=z;var W=y.type,J=y.stateNode;if(!(y.flags&128)&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(vr===null||!vr.has(J)))){y.flags|=65536,s&=-s,y.lanes|=s;var Ce=Jp(y,N,s);Tp(y,Ce);break e}}y=y.return}while(y!==null)}Dm(l)}catch(it){s=it,Kt===l&&l!==null&&(Kt=l=l.return);continue}break}while(!0)}function bm(){var n=Sl.current;return Sl.current=ml,n===null?ml:n}function rh(){(en===0||en===3||en===2)&&(en=4),ln===null||!(Xr&268435455)&&!(Ml&268435455)||yr(ln,dn)}function Cl(n,s){var l=Ct;Ct|=2;var h=bm();(ln!==n||dn!==s)&&(zi=null,Yr(n,s));do try{F_();break}catch(p){Pm(n,p)}while(!0);if(vc(),Ct=l,Sl.current=h,Kt!==null)throw Error(t(261));return ln=null,dn=0,en}function F_(){for(;Kt!==null;)Lm(Kt)}function O_(){for(;Kt!==null&&!j();)Lm(Kt)}function Lm(n){var s=Um(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,s===null?Dm(n):Kt=s,$c.current=null}function Dm(n){var s=n;do{var l=s.alternate;if(n=s.return,s.flags&32768){if(l=b_(l,s),l!==null){l.flags&=32767,Kt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Kt=null;return}}else if(l=P_(l,s,Wn),l!==null){Kt=l;return}if(s=s.sibling,s!==null){Kt=s;return}Kt=s=n}while(s!==null);en===0&&(en=5)}function qr(n,s,l){var h=Rt,p=Jn.transition;try{Jn.transition=null,Rt=1,k_(n,s,l,h)}finally{Jn.transition=p,Rt=h}return null}function k_(n,s,l,h){do ks();while(_r!==null);if(Ct&6)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var y=l.lanes|l.childLanes;if(hn(n,y),n===ln&&(Kt=ln=null,dn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Tl||(Tl=!0,Fm($e,function(){return ks(),null})),y=(l.flags&15990)!==0,l.subtreeFlags&15990||y){y=Jn.transition,Jn.transition=null;var T=Rt;Rt=1;var N=Ct;Ct|=4,$c.current=null,D_(n,l),Mm(l,n),r_(rc),Ba=!!ic,rc=ic=null,n.current=l,I_(l),ne(),Ct=N,Rt=T,Jn.transition=y}else n.current=l;if(Tl&&(Tl=!1,_r=n,wl=p),y=n.pendingLanes,y===0&&(vr=null),St(l.stateNode),Nn(n,Z()),s!==null)for(h=n.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(El)throw El=!1,n=Jc,Jc=null,n;return wl&1&&n.tag!==0&&ks(),y=n.pendingLanes,y&1?n===Qc?$o++:($o=0,Qc=n):$o=0,dr(),null}function ks(){if(_r!==null){var n=xi(wl),s=Jn.transition,l=Rt;try{if(Jn.transition=null,Rt=16>n?16:n,_r===null)var h=!1;else{if(n=_r,_r=null,wl=0,Ct&6)throw Error(t(331));var p=Ct;for(Ct|=4,Ze=n.current;Ze!==null;){var y=Ze,T=y.child;if(Ze.flags&16){var N=y.deletions;if(N!==null){for(var z=0;z<N.length;z++){var ee=N[z];for(Ze=ee;Ze!==null;){var ye=Ze;switch(ye.tag){case 0:case 11:case 15:jo(8,ye,y)}var Te=ye.child;if(Te!==null)Te.return=ye,Ze=Te;else for(;Ze!==null;){ye=Ze;var _e=ye.sibling,Ve=ye.return;if(vm(ye),ye===ee){Ze=null;break}if(_e!==null){_e.return=Ve,Ze=_e;break}Ze=Ve}}}var Qe=y.alternate;if(Qe!==null){var tt=Qe.child;if(tt!==null){Qe.child=null;do{var $t=tt.sibling;tt.sibling=null,tt=$t}while(tt!==null)}}Ze=y}}if(y.subtreeFlags&2064&&T!==null)T.return=y,Ze=T;else e:for(;Ze!==null;){if(y=Ze,y.flags&2048)switch(y.tag){case 0:case 11:case 15:jo(9,y,y.return)}var q=y.sibling;if(q!==null){q.return=y.return,Ze=q;break e}Ze=y.return}}var W=n.current;for(Ze=W;Ze!==null;){T=Ze;var J=T.child;if(T.subtreeFlags&2064&&J!==null)J.return=T,Ze=J;else e:for(T=W;Ze!==null;){if(N=Ze,N.flags&2048)try{switch(N.tag){case 0:case 11:case 15:yl(9,N)}}catch(it){qt(N,N.return,it)}if(N===T){Ze=null;break e}var Ce=N.sibling;if(Ce!==null){Ce.return=N.return,Ze=Ce;break e}Ze=N.return}}if(Ct=p,dr(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(lt,n)}catch{}h=!0}return h}finally{Rt=l,Jn.transition=s}}return!1}function Im(n,s,l){s=Ns(l,s),s=Kp(n,s,1),n=mr(n,s,1),s=wn(),n!==null&&(sn(n,1,s),Nn(n,s))}function qt(n,s,l){if(n.tag===3)Im(n,n,l);else for(;s!==null;){if(s.tag===3){Im(s,n,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(vr===null||!vr.has(h))){n=Ns(l,n),n=Jp(s,n,1),s=mr(s,n,1),n=wn(),s!==null&&(sn(s,1,n),Nn(s,n));break}}s=s.return}}function B_(n,s,l){var h=n.pingCache;h!==null&&h.delete(s),s=wn(),n.pingedLanes|=n.suspendedLanes&l,ln===n&&(dn&l)===l&&(en===4||en===3&&(dn&130023424)===dn&&500>Z()-Kc?Yr(n,0):Zc|=l),Nn(n,s)}function Nm(n,s){s===0&&(n.mode&1?(s=Yt,Yt<<=1,!(Yt&130023424)&&(Yt=4194304)):s=1);var l=wn();n=Oi(n,s),n!==null&&(sn(n,s,l),Nn(n,l))}function z_(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),Nm(n,l)}function H_(n,s){var l=0;switch(n.tag){case 13:var h=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Nm(n,l)}var Um;Um=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||bn.current)Dn=!0;else{if(!(n.lanes&l)&&!(s.flags&128))return Dn=!1,C_(n,s,l);Dn=!!(n.flags&131072)}else Dn=!1,Vt&&s.flags&1048576&&pp(s,il,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;_l(n,s),n=s.pendingProps;var p=As(s,gn.current);Ds(s,l),p=Cc(null,s,h,n,p,l);var y=Pc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Ln(h)?(y=!0,el(s)):y=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Sc(s),p.updater=gl,s.stateNode=p,p._reactInternals=s,Uc(s,h,n,l),s=Bc(null,s,h,!0,y,l)):(s.tag=0,Vt&&y&&hc(s),Tn(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(_l(n,s),n=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=G_(h),n=si(h,n),p){case 0:s=kc(null,s,h,n,l);break e;case 1:s=am(null,s,h,n,l);break e;case 11:s=nm(null,s,h,n,l);break e;case 14:s=im(null,s,h,si(h.type,n),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:si(h,p),kc(n,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:si(h,p),am(n,s,h,p,l);case 3:e:{if(lm(s),n===null)throw Error(t(387));h=s.pendingProps,y=s.memoizedState,p=y.element,Ep(n,s),ul(s,h,null,l);var T=s.memoizedState;if(h=T.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){p=Ns(Error(t(423)),s),s=um(n,s,h,l,p);break e}else if(h!==p){p=Ns(Error(t(424)),s),s=um(n,s,h,l,p);break e}else for(Gn=cr(s.stateNode.containerInfo.firstChild),Vn=s,Vt=!0,ri=null,l=Sp(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ps(),h===p){s=Bi(n,s,l);break e}Tn(n,s,h,l)}s=s.child}return s;case 5:return Ap(s),n===null&&pc(s),h=s.type,p=s.pendingProps,y=n!==null?n.memoizedProps:null,T=p.children,sc(h,p)?T=null:y!==null&&sc(h,y)&&(s.flags|=32),om(n,s),Tn(n,s,T,l),s.child;case 6:return n===null&&pc(s),null;case 13:return cm(n,s,l);case 4:return Mc(s,s.stateNode.containerInfo),h=s.pendingProps,n===null?s.child=bs(s,null,h,l):Tn(n,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:si(h,p),nm(n,s,h,p,l);case 7:return Tn(n,s,s.pendingProps,l),s.child;case 8:return Tn(n,s,s.pendingProps.children,l),s.child;case 12:return Tn(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,y=s.memoizedProps,T=p.value,Ot(ol,h._currentValue),h._currentValue=T,y!==null)if(ii(y.value,T)){if(y.children===p.children&&!bn.current){s=Bi(n,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var N=y.dependencies;if(N!==null){T=y.child;for(var z=N.firstContext;z!==null;){if(z.context===h){if(y.tag===1){z=ki(-1,l&-l),z.tag=2;var ee=y.updateQueue;if(ee!==null){ee=ee.shared;var ye=ee.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),ee.pending=z}}y.lanes|=l,z=y.alternate,z!==null&&(z.lanes|=l),xc(y.return,l,s),N.lanes|=l;break}z=z.next}}else if(y.tag===10)T=y.type===s.type?null:y.child;else if(y.tag===18){if(T=y.return,T===null)throw Error(t(341));T.lanes|=l,N=T.alternate,N!==null&&(N.lanes|=l),xc(T,l,s),T=y.sibling}else T=y.child;if(T!==null)T.return=y;else for(T=y;T!==null;){if(T===s){T=null;break}if(y=T.sibling,y!==null){y.return=T.return,T=y;break}T=T.return}y=T}Tn(n,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,Ds(s,l),p=Zn(p),h=h(p),s.flags|=1,Tn(n,s,h,l),s.child;case 14:return h=s.type,p=si(h,s.pendingProps),p=si(h.type,p),im(n,s,h,p,l);case 15:return rm(n,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:si(h,p),_l(n,s),s.tag=1,Ln(h)?(n=!0,el(s)):n=!1,Ds(s,l),$p(s,h,p),Uc(s,h,p,l),Bc(null,s,h,!0,n,l);case 19:return fm(n,s,l);case 22:return sm(n,s,l)}throw Error(t(156,s.tag))};function Fm(n,s){return Fa(n,s)}function V_(n,s,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,s,l,h){return new V_(n,s,l,h)}function sh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function G_(n){if(typeof n=="function")return sh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===he)return 14}return 2}function Sr(n,s){var l=n.alternate;return l===null?(l=Qn(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Pl(n,s,l,h,p,y){var T=2;if(h=n,typeof n=="function")sh(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return $r(l.children,p,y,s);case H:T=8,p|=8;break;case b:return n=Qn(12,l,s,p|2),n.elementType=b,n.lanes=y,n;case $:return n=Qn(13,l,s,p),n.elementType=$,n.lanes=y,n;case ce:return n=Qn(19,l,s,p),n.elementType=ce,n.lanes=y,n;case le:return bl(l,p,y,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:T=10;break e;case F:T=9;break e;case ie:T=11;break e;case he:T=14;break e;case oe:T=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=Qn(T,l,s,p),s.elementType=n,s.type=h,s.lanes=y,s}function $r(n,s,l,h){return n=Qn(7,n,h,s),n.lanes=l,n}function bl(n,s,l,h){return n=Qn(22,n,h,s),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function oh(n,s,l){return n=Qn(6,n,null,s),n.lanes=l,n}function ah(n,s,l){return s=Qn(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function W_(n,s,l,h,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function lh(n,s,l,h,p,y,T,N,z){return n=new W_(n,s,l,N,z),s===1?(s=1,y===!0&&(s|=8)):s=0,y=Qn(3,null,null,s),n.current=y,y.stateNode=n,y.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(y),n}function X_(n,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:h==null?null:""+h,children:n,containerInfo:s,implementation:l}}function Om(n){if(!n)return fr;n=n._reactInternals;e:{if(_i(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Ln(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Ln(l))return hp(n,l,s)}return s}function km(n,s,l,h,p,y,T,N,z){return n=lh(l,h,!0,n,p,y,T,N,z),n.context=Om(null),l=n.current,h=wn(),p=xr(l),y=ki(h,p),y.callback=s??null,mr(l,y,p),n.current.lanes=p,sn(n,p,h),Nn(n,h),n}function Ll(n,s,l,h){var p=s.current,y=wn(),T=xr(p);return l=Om(l),s.context===null?s.context=l:s.pendingContext=l,s=ki(y,T),s.payload={element:n},h=h===void 0?null:h,h!==null&&(s.callback=h),n=mr(p,s,T),n!==null&&(li(n,p,T,y),ll(n,p,T)),T}function Dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Bm(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function uh(n,s){Bm(n,s),(n=n.alternate)&&Bm(n,s)}var zm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ch(n){this._internalRoot=n}Il.prototype.render=ch.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Ll(n,s,null,null)},Il.prototype.unmount=ch.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;jr(function(){Ll(null,n,null,null)}),s[Ii]=null}};function Il(n){this._internalRoot=n}Il.prototype.unstable_scheduleHydration=function(n){if(n){var s=Ed();n={blockedOn:null,target:n,priority:s};for(var l=0;l<ar.length&&s!==0&&s<ar[l].priority;l++);ar.splice(l,0,n),l===0&&Ad(n)}};function hh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function j_(n,s,l,h,p){if(p){if(typeof h=="function"){var y=h;h=function(){var ee=Dl(T);y.call(ee)}}var T=km(s,h,n,0,null,!1,!1,"",Hm);return n._reactRootContainer=T,n[Ii]=T.current,Io(n.nodeType===8?n.parentNode:n),jr(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof h=="function"){var N=h;h=function(){var ee=Dl(z);N.call(ee)}}var z=lh(n,0,!1,null,null,!1,!1,"",Hm);return n._reactRootContainer=z,n[Ii]=z.current,Io(n.nodeType===8?n.parentNode:n),jr(function(){Ll(s,z,l,h)}),z}function Ul(n,s,l,h,p){var y=l._reactRootContainer;if(y){var T=y;if(typeof p=="function"){var N=p;p=function(){var z=Dl(T);N.call(z)}}Ll(s,T,n,p)}else T=j_(l,s,n,p,h);return Dl(T)}Sd=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=Et(s.pendingLanes);l!==0&&(on(s,l|1),Nn(s,Z()),!(Ct&6)&&(Os=Z()+500,dr()))}break;case 13:jr(function(){var h=Oi(n,1);if(h!==null){var p=wn();li(h,n,1,p)}}),uh(n,1)}},Fu=function(n){if(n.tag===13){var s=Oi(n,134217728);if(s!==null){var l=wn();li(s,n,134217728,l)}uh(n,134217728)}},Md=function(n){if(n.tag===13){var s=xr(n),l=Oi(n,s);if(l!==null){var h=wn();li(l,n,s,h)}uh(n,s)}},Ed=function(){return Rt},Td=function(n,s){var l=Rt;try{return Rt=n,s()}finally{Rt=l}},Fe=function(n,s,l){switch(s){case"input":if(De(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==n&&h.form===n.form){var p=Ja(h);if(!p)throw Error(t(90));Mt(h),De(h,p)}}}break;case"textarea":w(n,l);break;case"select":s=l.value,s!=null&&ze(n,!!l.multiple,s,!1)}},mt=nh,Dt=jr;var Y_={usingClientEntryPoint:!1,Events:[Fo,Ts,Ja,me,Je,nh]},Zo={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q_={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Na(n),n===null?null:n.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{lt=Fl.inject(q_),Ke=Fl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y_,Un.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(s))throw Error(t(200));return X_(n,s,null,l)},Un.createRoot=function(n,s){if(!hh(n))throw Error(t(299));var l=!1,h="",p=zm;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=lh(n,1,!1,null,null,l,!1,h,p),n[Ii]=s.current,Io(n.nodeType===8?n.parentNode:n),new ch(s)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Na(s),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return jr(n)},Un.hydrate=function(n,s,l){if(!Nl(s))throw Error(t(200));return Ul(null,n,s,!0,l)},Un.hydrateRoot=function(n,s,l){if(!hh(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,y="",T=zm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),s=km(s,null,n,1,l??null,p,!1,y,T),n[Ii]=s.current,Io(n),h)for(n=0;n<h.length;n++)l=h[n],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Il(s)},Un.render=function(n,s,l){if(!Nl(s))throw Error(t(200));return Ul(null,n,s,!1,l)},Un.unmountComponentAtNode=function(n){if(!Nl(n))throw Error(t(40));return n._reactRootContainer?(jr(function(){Ul(null,null,n,!1,function(){n._reactRootContainer=null,n[Ii]=null})}),!0):!1},Un.unstable_batchedUpdates=nh,Un.unstable_renderSubtreeIntoContainer=function(n,s,l,h){if(!Nl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ul(n,s,l,!1,h)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var $m;function nx(){if($m)return ph.exports;$m=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),ph.exports=tx(),ph.exports}var Zm;function ix(){if(Zm)return Ol;Zm=1;var i=nx();return Ol.createRoot=i.createRoot,Ol.hydrateRoot=i.hydrateRoot,Ol}var rx=ix(),Jo={},Km;function sx(){if(Km)return Jo;Km=1,Object.defineProperty(Jo,"__esModule",{value:!0}),Jo.parse=u,Jo.serialize=d;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function u(v,x){const M=new a,E=v.length;if(E<2)return M;const S=(x==null?void 0:x.decode)||m;let _=0;do{const L=v.indexOf("=",_);if(L===-1)break;const A=v.indexOf(";",_),R=A===-1?E:A;if(L>R){_=v.lastIndexOf(";",L-1)+1;continue}const B=c(v,_,L),k=f(v,L,B),U=v.slice(B,k);if(M[U]===void 0){let H=c(v,L+1,R),b=f(v,R,H);const C=S(v.slice(H,b));M[U]=C}_=R+1}while(_<E);return M}function c(v,x,M){do{const E=v.charCodeAt(x);if(E!==32&&E!==9)return x}while(++x<M);return M}function f(v,x,M){for(;x>M;){const E=v.charCodeAt(--x);if(E!==32&&E!==9)return x+1}return M}function d(v,x,M){const E=(M==null?void 0:M.encode)||encodeURIComponent;if(!i.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=E(x);if(!e.test(S))throw new TypeError(`argument val is invalid: ${x}`);let _=v+"="+S;if(!M)return _;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);_+="; Max-Age="+M.maxAge}if(M.domain){if(!t.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);_+="; Domain="+M.domain}if(M.path){if(!r.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);_+="; Path="+M.path}if(M.expires){if(!g(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);_+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(_+="; HttpOnly"),M.secure&&(_+="; Secure"),M.partitioned&&(_+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return _}function m(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function g(v){return o.call(v)==="[object Date]"}return Jo}sx();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jm="popstate";function ox(i={}){function e(r,o){let{pathname:a,search:u,hash:c}=r.location;return tf("",{pathname:a,search:u,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:va(o)}return lx(e,t,null,i)}function jt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function gi(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ax(){return Math.random().toString(36).substring(2,10)}function Qm(i,e){return{usr:i.state,key:i.key,idx:e}}function tf(i,e,t=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?po(e):e,state:t,key:e&&e.key||r||ax()}}function va({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function po(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substring(r),i=i.substring(0,r)),i&&(e.pathname=i)}return e}function lx(i,e,t,r={}){let{window:o=document.defaultView,v5Compat:a=!1}=r,u=o.history,c="POP",f=null,d=m();d==null&&(d=0,u.replaceState({...u.state,idx:d},""));function m(){return(u.state||{idx:null}).idx}function g(){c="POP";let S=m(),_=S==null?null:S-d;d=S,f&&f({action:c,location:E.location,delta:_})}function v(S,_){c="PUSH";let L=tf(E.location,S,_);d=m()+1;let A=Qm(L,d),R=E.createHref(L);try{u.pushState(A,"",R)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign(R)}a&&f&&f({action:c,location:E.location,delta:1})}function x(S,_){c="REPLACE";let L=tf(E.location,S,_);d=m();let A=Qm(L,d),R=E.createHref(L);u.replaceState(A,"",R),a&&f&&f({action:c,location:E.location,delta:0})}function M(S){let _=o.location.origin!=="null"?o.location.origin:o.location.href,L=typeof S=="string"?S:va(S);return L=L.replace(/ $/,"%20"),jt(_,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,_)}let E={get action(){return c},get location(){return i(o,u)},listen(S){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Jm,g),f=S,()=>{o.removeEventListener(Jm,g),f=null}},createHref(S){return e(o,S)},createURL:M,encodeLocation(S){let _=M(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:x,go(S){return u.go(S)}};return E}function _v(i,e,t="/"){return ux(i,e,t,!1)}function ux(i,e,t,r){let o=typeof e=="string"?po(e):e,a=Ir(o.pathname||"/",t);if(a==null)return null;let u=xv(i);cx(u);let c=null;for(let f=0;c==null&&f<u.length;++f){let d=Sx(a);c=xx(u[f],d,r)}return c}function xv(i,e=[],t=[],r=""){let o=(a,u,c)=>{let f={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(jt(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let d=Zi([r,f.relativePath]),m=t.concat(f);a.children&&a.children.length>0&&(jt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),xv(a.children,e,m,d)),!(a.path==null&&!a.index)&&e.push({path:d,score:vx(d,a.index),routesMeta:m})};return i.forEach((a,u)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))o(a,u);else for(let f of yv(a.path))o(a,u,f)}),e}function yv(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let u=yv(r.join("/")),c=[];return c.push(...u.map(f=>f===""?a:[a,f].join("/"))),o&&c.push(...u),c.map(f=>i.startsWith("/")&&f===""?"/":f)}function cx(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:_x(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var hx=/^:[\w-]+$/,fx=3,dx=2,px=1,mx=10,gx=-2,eg=i=>i==="*";function vx(i,e){let t=i.split("/"),r=t.length;return t.some(eg)&&(r+=gx),e&&(r+=dx),t.filter(o=>!eg(o)).reduce((o,a)=>o+(hx.test(a)?fx:a===""?px:mx),r)}function _x(i,e){return i.length===e.length&&i.slice(0,-1).every((r,o)=>r===e[o])?i[i.length-1]-e[e.length-1]:0}function xx(i,e,t=!1){let{routesMeta:r}=i,o={},a="/",u=[];for(let c=0;c<r.length;++c){let f=r[c],d=c===r.length-1,m=a==="/"?e:e.slice(a.length)||"/",g=Mu({path:f.relativePath,caseSensitive:f.caseSensitive,end:d},m),v=f.route;if(!g&&d&&t&&!r[r.length-1].route.index&&(g=Mu({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:Zi([a,g.pathname]),pathnameBase:wx(Zi([a,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(a=Zi([a,g.pathnameBase]))}return u}function Mu(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=yx(i.path,i.caseSensitive,i.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:r.reduce((d,{paramName:m,isOptional:g},v)=>{if(m==="*"){let M=c[v]||"";u=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const x=c[v];return g&&!x?d[m]=void 0:d[m]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:u,pattern:i}}function yx(i,e=!1,t=!0){gi(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,f)=>(r.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function Sx(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gi(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Ir(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function Mx(i,e="/"){let{pathname:t,search:r="",hash:o=""}=typeof i=="string"?po(i):i;return{pathname:t?t.startsWith("/")?t:Ex(t,e):e,search:Ax(r),hash:Rx(o)}}function Ex(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function vh(i,e,t,r){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tx(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Sv(i){let e=Tx(i);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Mv(i,e,t,r=!1){let o;typeof i=="string"?o=po(i):(o={...i},jt(!o.pathname||!o.pathname.includes("?"),vh("?","pathname","search",o)),jt(!o.pathname||!o.pathname.includes("#"),vh("#","pathname","hash",o)),jt(!o.search||!o.search.includes("#"),vh("#","search","hash",o)));let a=i===""||o.pathname==="",u=a?"/":o.pathname,c;if(u==null)c=t;else{let g=e.length-1;if(!r&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),g-=1;o.pathname=v.join("/")}c=g>=0?e[g]:"/"}let f=Mx(o,c),d=u&&u!=="/"&&u.endsWith("/"),m=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(d||m)&&(f.pathname+="/"),f}var Zi=i=>i.join("/").replace(/\/\/+/g,"/"),wx=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Ax=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Rx=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Cx(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Ev=["POST","PUT","PATCH","DELETE"];new Set(Ev);var Px=["GET",...Ev];new Set(Px);var mo=re.createContext(null);mo.displayName="DataRouter";var Cu=re.createContext(null);Cu.displayName="DataRouterState";var Tv=re.createContext({isTransitioning:!1});Tv.displayName="ViewTransition";var bx=re.createContext(new Map);bx.displayName="Fetchers";var Lx=re.createContext(null);Lx.displayName="Await";var Ci=re.createContext(null);Ci.displayName="Navigation";var Aa=re.createContext(null);Aa.displayName="Location";var er=re.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var Jf=re.createContext(null);Jf.displayName="RouteError";function Dx(i,{relative:e}={}){jt(Ra(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=re.useContext(Ci),{hash:o,pathname:a,search:u}=Ca(i,{relative:e}),c=a;return t!=="/"&&(c=a==="/"?t:Zi([t,a])),r.createHref({pathname:c,search:u,hash:o})}function Ra(){return re.useContext(Aa)!=null}function Ur(){return jt(Ra(),"useLocation() may be used only in the context of a <Router> component."),re.useContext(Aa).location}var wv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Av(i){re.useContext(Ci).static||re.useLayoutEffect(i)}function Qf(){let{isDataRoute:i}=re.useContext(er);return i?Xx():Ix()}function Ix(){jt(Ra(),"useNavigate() may be used only in the context of a <Router> component.");let i=re.useContext(mo),{basename:e,navigator:t}=re.useContext(Ci),{matches:r}=re.useContext(er),{pathname:o}=Ur(),a=JSON.stringify(Sv(r)),u=re.useRef(!1);return Av(()=>{u.current=!0}),re.useCallback((f,d={})=>{if(gi(u.current,wv),!u.current)return;if(typeof f=="number"){t.go(f);return}let m=Mv(f,JSON.parse(a),o,d.relative==="path");i==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Zi([e,m.pathname])),(d.replace?t.replace:t.push)(m,d.state,d)},[e,t,a,o,i])}re.createContext(null);function Ca(i,{relative:e}={}){let{matches:t}=re.useContext(er),{pathname:r}=Ur(),o=JSON.stringify(Sv(t));return re.useMemo(()=>Mv(i,JSON.parse(o),r,e==="path"),[i,o,r,e])}function Nx(i,e){return Rv(i,e)}function Rv(i,e,t,r){var L;jt(Ra(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:a}=re.useContext(Ci),{matches:u}=re.useContext(er),c=u[u.length-1],f=c?c.params:{},d=c?c.pathname:"/",m=c?c.pathnameBase:"/",g=c&&c.route;{let A=g&&g.path||"";Cv(d,!g||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let v=Ur(),x;if(e){let A=typeof e=="string"?po(e):e;jt(m==="/"||((L=A.pathname)==null?void 0:L.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${A.pathname}" was given in the \`location\` prop.`),x=A}else x=v;let M=x.pathname||"/",E=M;if(m!=="/"){let A=m.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(A.length).join("/")}let S=!a&&t&&t.matches&&t.matches.length>0?t.matches:_v(i,{pathname:E});gi(g||S!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),gi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Bx(S&&S.map(A=>Object.assign({},A,{params:Object.assign({},f,A.params),pathname:Zi([m,o.encodeLocation?o.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?m:Zi([m,o.encodeLocation?o.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),u,t,r);return e&&_?re.createElement(Aa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},_):_}function Ux(){let i=Wx(),e=Cx(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",i),u=re.createElement(re.Fragment,null,re.createElement("p",null,"💿 Hey developer 👋"),re.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",re.createElement("code",{style:a},"ErrorBoundary")," or"," ",re.createElement("code",{style:a},"errorElement")," prop on your route.")),re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),t?re.createElement("pre",{style:o},t):null,u)}var Fx=re.createElement(Ux,null),Ox=class extends re.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?re.createElement(er.Provider,{value:this.props.routeContext},re.createElement(Jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function kx({routeContext:i,match:e,children:t}){let r=re.useContext(mo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),re.createElement(er.Provider,{value:i},t)}function Bx(i,e=[],t=null,r=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let o=i,a=t==null?void 0:t.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);jt(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(t)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:m,errors:g}=t,v=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,m)=>{let g,v=!1,x=null,M=null;t&&(g=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||Fx,u&&(c<0&&m===0?(Cv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,M=null):c===m&&(v=!0,M=d.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),S=()=>{let _;return g?_=x:v?_=M:d.route.Component?_=re.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=f,re.createElement(kx,{match:d,routeContext:{outlet:f,matches:E,isDataRoute:t!=null},children:_})};return t&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?re.createElement(Ox,{location:t.location,revalidation:t.revalidation,component:x,error:g,children:S(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):S()},null)}function ed(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zx(i){let e=re.useContext(mo);return jt(e,ed(i)),e}function Hx(i){let e=re.useContext(Cu);return jt(e,ed(i)),e}function Vx(i){let e=re.useContext(er);return jt(e,ed(i)),e}function td(i){let e=Vx(i),t=e.matches[e.matches.length-1];return jt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function Gx(){return td("useRouteId")}function Wx(){var r;let i=re.useContext(Jf),e=Hx("useRouteError"),t=td("useRouteError");return i!==void 0?i:(r=e.errors)==null?void 0:r[t]}function Xx(){let{router:i}=zx("useNavigate"),e=td("useNavigate"),t=re.useRef(!1);return Av(()=>{t.current=!0}),re.useCallback(async(o,a={})=>{gi(t.current,wv),t.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...a}))},[i,e])}var tg={};function Cv(i,e,t){!e&&!tg[i]&&(tg[i]=!0,gi(!1,t))}re.memo(jx);function jx({routes:i,future:e,state:t}){return Rv(i,void 0,t,e)}function nf(i){jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yx({basename:i="/",children:e=null,location:t,navigationType:r="POP",navigator:o,static:a=!1}){jt(!Ra(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=i.replace(/^\/*/,"/"),c=re.useMemo(()=>({basename:u,navigator:o,static:a,future:{}}),[u,o,a]);typeof t=="string"&&(t=po(t));let{pathname:f="/",search:d="",hash:m="",state:g=null,key:v="default"}=t,x=re.useMemo(()=>{let M=Ir(f,u);return M==null?null:{location:{pathname:M,search:d,hash:m,state:g,key:v},navigationType:r}},[u,f,d,m,g,v,r]);return gi(x!=null,`<Router basename="${u}"> is not able to match the URL "${f}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:re.createElement(Ci.Provider,{value:c},re.createElement(Aa.Provider,{children:e,value:x}))}function qx({children:i,location:e}){return Nx(rf(i),e)}function rf(i,e=[]){let t=[];return re.Children.forEach(i,(r,o)=>{if(!re.isValidElement(r))return;let a=[...e,o];if(r.type===re.Fragment){t.push.apply(t,rf(r.props.children,a));return}jt(r.type===nf,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=rf(r.props.children,a)),t.push(u)}),t}var du="get",pu="application/x-www-form-urlencoded";function Pu(i){return i!=null&&typeof i.tagName=="string"}function $x(i){return Pu(i)&&i.tagName.toLowerCase()==="button"}function Zx(i){return Pu(i)&&i.tagName.toLowerCase()==="form"}function Kx(i){return Pu(i)&&i.tagName.toLowerCase()==="input"}function Jx(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Qx(i,e){return i.button===0&&(!e||e==="_self")&&!Jx(i)}function sf(i=""){return new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((e,t)=>{let r=i[t];return e.concat(Array.isArray(r)?r.map(o=>[t,o]):[[t,r]])},[]))}function ey(i,e){let t=sf(i);return e&&e.forEach((r,o)=>{t.has(o)||e.getAll(o).forEach(a=>{t.append(o,a)})}),t}var kl=null;function ty(){if(kl===null)try{new FormData(document.createElement("form"),0),kl=!1}catch{kl=!0}return kl}var ny=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _h(i){return i!=null&&!ny.has(i)?(gi(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pu}"`),null):i}function iy(i,e){let t,r,o,a,u;if(Zx(i)){let c=i.getAttribute("action");r=c?Ir(c,e):null,t=i.getAttribute("method")||du,o=_h(i.getAttribute("enctype"))||pu,a=new FormData(i)}else if($x(i)||Kx(i)&&(i.type==="submit"||i.type==="image")){let c=i.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=i.getAttribute("formaction")||c.getAttribute("action");if(r=f?Ir(f,e):null,t=i.getAttribute("formmethod")||c.getAttribute("method")||du,o=_h(i.getAttribute("formenctype"))||_h(c.getAttribute("enctype"))||pu,a=new FormData(c,i),!ty()){let{name:d,type:m,value:g}=i;if(m==="image"){let v=d?`${d}.`:"";a.append(`${v}x`,"0"),a.append(`${v}y`,"0")}else d&&a.append(d,g)}}else{if(Pu(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=du,r=null,o=pu,u=i}return a&&o==="text/plain"&&(u=a,a=void 0),{action:r,method:t.toLowerCase(),encType:o,formData:a,body:u}}function nd(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function ry(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sy(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function oy(i,e,t){let r=await Promise.all(i.map(async o=>{let a=e.routes[o.route.id];if(a){let u=await ry(a,t);return u.links?u.links():[]}return[]}));return cy(r.flat(1).filter(sy).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ng(i,e,t,r,o,a){let u=(f,d)=>t[d]?f.route.id!==t[d].route.id:!0,c=(f,d)=>{var m;return t[d].pathname!==f.pathname||((m=t[d].route.path)==null?void 0:m.endsWith("*"))&&t[d].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,d)=>u(f,d)||c(f,d)):a==="data"?e.filter((f,d)=>{var g;let m=r.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(u(f,d)||c(f,d))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(i,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function ay(i,e,{includeHydrateFallback:t}={}){return ly(i.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function ly(i){return[...new Set(i)]}function uy(i){let e={},t=Object.keys(i).sort();for(let r of t)e[r]=i[r];return e}function cy(i,e){let t=new Set;return new Set(e),i.reduce((r,o)=>{let a=JSON.stringify(uy(o));return t.has(a)||(t.add(a),r.push({key:a,link:o})),r},[])}function hy(i){let e=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function fy(){let i=re.useContext(mo);return nd(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function dy(){let i=re.useContext(Cu);return nd(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var id=re.createContext(void 0);id.displayName="FrameworkContext";function Pv(){let i=re.useContext(id);return nd(i,"You must render this element inside a <HydratedRouter> element"),i}function py(i,e){let t=re.useContext(id),[r,o]=re.useState(!1),[a,u]=re.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:d,onMouseLeave:m,onTouchStart:g}=e,v=re.useRef(null);re.useEffect(()=>{if(i==="render"&&u(!0),i==="viewport"){let E=_=>{_.forEach(L=>{u(L.isIntersecting)})},S=new IntersectionObserver(E,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[i]),re.useEffect(()=>{if(r){let E=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(E)}}},[r]);let x=()=>{o(!0)},M=()=>{o(!1),u(!1)};return t?i!=="intent"?[a,v,{}]:[a,v,{onFocus:Qo(c,x),onBlur:Qo(f,M),onMouseEnter:Qo(d,x),onMouseLeave:Qo(m,M),onTouchStart:Qo(g,x)}]:[!1,v,{}]}function Qo(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function my({page:i,...e}){let{router:t}=fy(),r=re.useMemo(()=>_v(t.routes,i,t.basename),[t.routes,i,t.basename]);return r?re.createElement(vy,{page:i,matches:r,...e}):null}function gy(i){let{manifest:e,routeModules:t}=Pv(),[r,o]=re.useState([]);return re.useEffect(()=>{let a=!1;return oy(i,e,t).then(u=>{a||o(u)}),()=>{a=!0}},[i,e,t]),r}function vy({page:i,matches:e,...t}){let r=Ur(),{manifest:o,routeModules:a}=Pv(),{loaderData:u,matches:c}=dy(),f=re.useMemo(()=>ng(i,e,c,o,r,"data"),[i,e,c,o,r]),d=re.useMemo(()=>ng(i,e,c,o,r,"assets"),[i,e,c,o,r]),m=re.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let x=new Set,M=!1;if(e.forEach(S=>{var L;let _=o.routes[S.route.id];!_||!_.hasLoader||(!f.some(A=>A.route.id===S.route.id)&&S.route.id in u&&((L=a[S.route.id])!=null&&L.shouldRevalidate)||_.hasClientLoader?M=!0:x.add(S.route.id))}),x.size===0)return[];let E=hy(i);return M&&x.size>0&&E.searchParams.set("_routes",e.filter(S=>x.has(S.route.id)).map(S=>S.route.id).join(",")),[E.pathname+E.search]},[u,r,o,f,e,i,a]),g=re.useMemo(()=>ay(d,o),[d,o]),v=gy(d);return re.createElement(re.Fragment,null,m.map(x=>re.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),g.map(x=>re.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),v.map(({key:x,link:M})=>re.createElement("link",{key:x,...M})))}function _y(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var bv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bv&&(window.__reactRouterVersion="7.2.0")}catch{}function xy({basename:i,children:e,window:t}){let r=re.useRef();r.current==null&&(r.current=ox({window:t,v5Compat:!0}));let o=r.current,[a,u]=re.useState({action:o.action,location:o.location}),c=re.useCallback(f=>{re.startTransition(()=>u(f))},[u]);return re.useLayoutEffect(()=>o.listen(c),[o,c]),re.createElement(Yx,{basename:i,children:e,location:a.location,navigationType:a.action,navigator:o})}var Lv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dv=re.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:o,reloadDocument:a,replace:u,state:c,target:f,to:d,preventScrollReset:m,viewTransition:g,...v},x){let{basename:M}=re.useContext(Ci),E=typeof d=="string"&&Lv.test(d),S,_=!1;if(typeof d=="string"&&E&&(S=d,bv))try{let b=new URL(window.location.href),C=d.startsWith("//")?new URL(b.protocol+d):new URL(d),F=Ir(C.pathname,M);C.origin===b.origin&&F!=null?d=F+C.search+C.hash:_=!0}catch{gi(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Dx(d,{relative:o}),[A,R,B]=py(r,v),k=My(d,{replace:u,state:c,target:f,preventScrollReset:m,relative:o,viewTransition:g});function U(b){e&&e(b),b.defaultPrevented||k(b)}let H=re.createElement("a",{...v,...B,href:S||L,onClick:_||a?e:U,ref:_y(x,R),target:f,"data-discover":!E&&t==="render"?"true":void 0});return A&&!E?re.createElement(re.Fragment,null,H,re.createElement(my,{page:L})):H});Dv.displayName="Link";var aa=re.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:o=!1,style:a,to:u,viewTransition:c,children:f,...d},m){let g=Ca(u,{relative:d.relative}),v=Ur(),x=re.useContext(Cu),{navigator:M,basename:E}=re.useContext(Ci),S=x!=null&&Cy(g)&&c===!0,_=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,L=v.pathname,A=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(L=L.toLowerCase(),A=A?A.toLowerCase():null,_=_.toLowerCase()),A&&E&&(A=Ir(A,E)||A);const R=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let B=L===_||!o&&L.startsWith(_)&&L.charAt(R)==="/",k=A!=null&&(A===_||!o&&A.startsWith(_)&&A.charAt(_.length)==="/"),U={isActive:B,isPending:k,isTransitioning:S},H=B?e:void 0,b;typeof r=="function"?b=r(U):b=[r,B?"active":null,k?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof a=="function"?a(U):a;return re.createElement(Dv,{...d,"aria-current":H,className:b,ref:m,style:C,to:u,viewTransition:c},typeof f=="function"?f(U):f)});aa.displayName="NavLink";var yy=re.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:o,state:a,method:u=du,action:c,onSubmit:f,relative:d,preventScrollReset:m,viewTransition:g,...v},x)=>{let M=Ay(),E=Ry(c,{relative:d}),S=u.toLowerCase()==="get"?"get":"post",_=typeof c=="string"&&Lv.test(c),L=A=>{if(f&&f(A),A.defaultPrevented)return;A.preventDefault();let R=A.nativeEvent.submitter,B=(R==null?void 0:R.getAttribute("formmethod"))||u;M(R||A.currentTarget,{fetcherKey:e,method:B,navigate:t,replace:o,state:a,relative:d,preventScrollReset:m,viewTransition:g})};return re.createElement("form",{ref:x,method:S,action:E,onSubmit:r?f:L,...v,"data-discover":!_&&i==="render"?"true":void 0})});yy.displayName="Form";function Sy(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Iv(i){let e=re.useContext(mo);return jt(e,Sy(i)),e}function My(i,{target:e,replace:t,state:r,preventScrollReset:o,relative:a,viewTransition:u}={}){let c=Qf(),f=Ur(),d=Ca(i,{relative:a});return re.useCallback(m=>{if(Qx(m,e)){m.preventDefault();let g=t!==void 0?t:va(f)===va(d);c(i,{replace:g,state:r,preventScrollReset:o,relative:a,viewTransition:u})}},[f,c,d,t,r,e,i,o,a,u])}function Ey(i){gi(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=re.useRef(sf(i)),t=re.useRef(!1),r=Ur(),o=re.useMemo(()=>ey(r.search,t.current?null:e.current),[r.search]),a=Qf(),u=re.useCallback((c,f)=>{const d=sf(typeof c=="function"?c(o):c);t.current=!0,a("?"+d,f)},[a,o]);return[o,u]}var Ty=0,wy=()=>`__${String(++Ty)}__`;function Ay(){let{router:i}=Iv("useSubmit"),{basename:e}=re.useContext(Ci),t=Gx();return re.useCallback(async(r,o={})=>{let{action:a,method:u,encType:c,formData:f,body:d}=iy(r,e);if(o.navigate===!1){let m=o.fetcherKey||wy();await i.fetch(m,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:f,body:d,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await i.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:f,body:d,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,t])}function Ry(i,{relative:e}={}){let{basename:t}=re.useContext(Ci),r=re.useContext(er);jt(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...Ca(i||".",{relative:e})},u=Ur();if(i==null){a.search=u.search;let c=new URLSearchParams(a.search),f=c.getAll("index");if(f.some(m=>m==="")){c.delete("index"),f.filter(g=>g).forEach(g=>c.append("index",g));let m=c.toString();a.search=m?`?${m}`:""}}return(!i||i===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Zi([t,a.pathname])),va(a)}function Cy(i,e={}){let t=re.useContext(Tv);jt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Iv("useViewTransitionState"),o=Ca(i,{relative:e.relative});if(!t.isTransitioning)return!1;let a=Ir(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Ir(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Mu(o.pathname,u)!=null||Mu(o.pathname,a)!=null}new TextEncoder;const Py=10;function xh(i,e){if(!e)return[];let t;try{t=new RegExp(`^${e}`,"i")}catch{return[]}return Array.from(i).filter(r=>t.test(r)).slice(0,Py)}const by=({data:i,onFranchiseInput:e,prefill:t})=>{const[r,o]=re.useState(""),[a,u]=re.useState(!1),[c,f]=re.useState(0),[d,m]=re.useState([]),[g,v]=re.useState(Math.round(Math.random()*i.length));return re.useEffect(()=>{t.length>0&&o(t)},[t]),re.useEffect(()=>{const x=setInterval(()=>{v(Math.round(Math.random()*i.length))},2e3);return()=>clearInterval(x)},[i]),Pe.jsxs("div",{className:"autocompleteParent",style:{position:"relative"},children:[Pe.jsx("input",{className:"inputBox",type:"text",list:"franchise",value:r,onChange:x=>{const M=x.target.value;o(M),f(0),m(xh(i,M))},ref:x=>{!a&&x&&x.blur()},onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:x=>{switch(x.key){case"ArrowUp":f(M=>{const E=Math.max(M-1,0);return m(xh(i,r)),E});break;case"ArrowDown":f(M=>{const E=Math.min(M+1,d.length-1);return m(xh(i,r)),E});break;case"Enter":if(c<0)break;o(d[c]),u(!1),e(d[c]);break}},placeholder:i[g]}),a&&r.length>0&&Pe.jsx("div",{className:"resultsList",children:d.map((x,M)=>Pe.jsx("div",{className:"option",ref:E=>{E&&M===c&&E.scrollIntoView({block:"nearest"})},onMouseDown:E=>{o(x),u(!1),e(x)},style:{...M===c&&{backgroundColor:"#5E5E5E"}},children:x},x))})]})};function ig({date:i,description:e,franchiseName:t,displayArrow:r}){const o=r?{marginTop:"30px"}:{};return Pe.jsxs("div",{className:"timelineCardParent",style:o,children:[r&&Pe.jsxs("div",{style:{position:"relative"},children:[Pe.jsx("div",{className:"arrowLine"}),Pe.jsx("div",{className:"arrowHead"})]}),Pe.jsxs("div",{className:"cardParent",children:[Pe.jsx("a",{href:`https://fictionalcrossover.fandom.com/wiki/${t}`,style:{color:"white"},target:"_blank",children:Pe.jsx("h3",{className:"title",children:t})}),r&&Pe.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:[Pe.jsx("p",{className:"crossoverDate",children:i}),Pe.jsx("hr",{className:"dividerBar"}),Pe.jsx("p",{className:"description",children:e})]})]})]})}function Ly({selectedFranchise:i,crossoverData:e,wasAPIError:t}){if(i)return t?"Something went wrong reaching the API. Please try again later.":e.found?Pe.jsxs("div",{style:{display:"flex",flexDirection:"column",marginBottom:"30px"},children:[Pe.jsx(ig,{franchiseName:i,date:"",description:"",displayArrow:!1},0),e.path.map((r,o)=>Pe.jsx(ig,{franchiseName:r.name,date:r.date,description:r.description,displayArrow:!0},o+1))]}):`No connection found. ${i} isn't part of the Fortnite multiverse.`}const Dy="/assets/cant_unconnect-C5ApLYmX.png";function Iy(){return Pe.jsxs("div",{className:"aboutParent",children:[Pe.jsxs("figure",{style:{textAlign:"center"},children:[Pe.jsx("img",{src:Dy,style:{width:"65%"},alt:"Can't unconnect meme"}),Pe.jsxs("figcaption",{className:"caption",children:["Original Image: ",Pe.jsx("a",{href:"https://twitter.com/Snowfoot_/status/1422779901325807617",children:"@Snowfoot_"})," on Twitter",Pe.jsx("br",{}),"Captioned meme: ",Pe.jsx("a",{href:"https://www.reddit.com/r/teenagers/comments/piyihu/cry_all_you_want_you_cant_disconnect_your/",children:"This post"})," on Reddit"]})]}),Pe.jsxs("p",{className:"aboutText",children:["Inspired by ",Pe.jsx("a",{href:"https://www.sixdegreesofwikipedia.com/",children:"Six Degrees of Wikipedia"})," and the above meme, Six Degrees of Fortnite attempts to find a way to connect any franchise back to Fortnite solely through crossovers.",Pe.jsx("br",{}),Pe.jsx("br",{}),"All the crossover data on this website is sourced from the ",Pe.jsx("a",{href:"https://fictionalcrossover.fandom.com/wiki/Crossover_Wiki",children:"Crossover Wiki"}),". All the franchises mentioned on this site are registered trademarks of their respective owners. Fortnite is a registered trademark of Epic Games. This site was made by someone with no affiliation to any those brands/companies."]})]})}function Nv(){const[i,e]=re.useState(!1);return Pe.jsxs(Pe.Fragment,{children:[Pe.jsxs("nav",{className:"navParent",children:[Pe.jsx(aa,{to:"/",end:!0,className:"navLinkText",children:"Home"}),Pe.jsx("span",{className:"verticalSeparator"}),Pe.jsx(aa,{to:"/3d-visualizer",end:!0,className:"navLinkText",children:"3D Visualizer"}),Pe.jsx("span",{className:"verticalSeparator"}),Pe.jsx(aa,{to:"#",onClick:()=>e(!i),className:"navLinkText",children:"About"}),Pe.jsx("span",{className:"verticalSeparator"}),Pe.jsx(aa,{to:"https://github.com/iconsumeplutonium/six-degrees-of-fortnite",end:!0,className:"navLinkText",children:"GitHub"})]}),i&&Pe.jsx("div",{className:"aboutOverlay",onClick:()=>e(!1),children:Pe.jsx("div",{onClick:t=>t.stopPropagation(),children:Pe.jsx(Iy,{})})})]})}function Ny(){const[i,e]=re.useState([]),t=re.useMemo(()=>new Set(i),[i]);return re.useEffect(()=>{(async()=>{const o=await fetch("/filtered_franchises.txt");if(!o.ok)throw new Error("Failed to load franchises");const u=(await o.text()).split(`
`).map(c=>c.trim());e(u)})()},[]),{franchiseList:i,franchiseSet:t}}const Uy="http://localhost:8000",Uv=Uy;function Fy(){const[i,e]=re.useState(""),[t,r]=re.useState({found:!1,path:[]}),[o,a]=re.useState(!1),{franchiseList:u,franchiseSet:c}=Ny(),f=Qf(),[d]=Ey(),[m,g]=re.useState("");re.useEffect(()=>{const x=d.get("source");x&&c.has(x)&&(e(x),g(x))},[d,c]);const v=async()=>{if(i)try{const x=await fetch(`${Uv}/path/${encodeURIComponent(i)}`);if(!x.ok)throw new Error("Error: Something went wrong accessing API");const M=await x.json();r(M),a(!1)}catch{a(!0)}};return re.useEffect(()=>{i&&v()},[i]),Pe.jsxs(Pe.Fragment,{children:[Pe.jsxs("div",{className:"mainPageLayout",children:[Pe.jsx(Nv,{}),Pe.jsx("a",{href:"/",children:Pe.jsx("img",{className:"logo",src:"/6dof_logo.png"})}),Pe.jsxs("div",{className:"searchContainer",children:[Pe.jsx("label",{className:"connectText",children:"Connect "}),Pe.jsx(by,{data:u,onFranchiseInput:x=>{c.has(x)&&(f(`?source=${encodeURIComponent(x)}`),e(x))},prefill:m}),Pe.jsx("label",{className:"connectText",children:" to Fortnite"})]})]}),Pe.jsx("button",{onClick:v,style:{marginTop:"10px"},className:"goButton",children:Pe.jsx("b",{style:{color:"black"},children:"Go!"})}),Pe.jsx("br",{}),Pe.jsx("br",{}),Pe.jsx(Ly,{selectedFranchise:i,crossoverData:t,wasAPIError:o})]})}const Oy="data:image/svg+xml,%3csvg%20xml:space='preserve'%20viewBox='458.784%20460.944%20164.16%20166.32'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns='http://www.w3.org/2000/svg'%20style='max-height:%20500px'%20width='164.16'%20height='166.32'%3e%3cdesc%3eCreated%20with%20Fabric.js%205.2.4%3c/desc%3e%3cdefs%3e%3c/defs%3e%3crect%20fill='transparent'%20height='100%25'%20width='100%25'%20y='0'%20x='0'/%3e%3cg%20id='a4df0420-fb8c-4225-ad17-2e60f03276af'%20transform='matrix(1%200%200%201%20540%20540)'%3e%3crect%20height='1080'%20width='1080'%20ry='0'%20rx='0'%20y='-540'%20x='-540'%20style='stroke:%20none;%20stroke-width:%2010;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-dashoffset:%200;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%204;%20fill:%20rgb(255,255,255);%20fill-rule:%20nonzero;%20opacity:%201;%20visibility:%20hidden;'/%3e%3c/g%3e%3cg%20id='b0b358b1-895c-42bf-b208-f239c23d0587'%20transform='matrix(1%200%200%201%20540%20540)'%3e%3c/g%3e%3cg%20id='9b823af0-e4bd-4098-a700-e274deb3514e'%20transform='matrix(1%200%200%201%20540%20540)'%3e%3cpath%20stroke-linecap='round'%20d='M%20202.82861%20197.17188%20C%20204.39053754669146%20198.73407816621886%20204.3903181662189%20201.26668245330853%20202.82812%20202.82860999999997%20C%20201.26592183378114%20204.39053754669143%20198.73331754669147%20204.39031816621886%20197.17139%20202.82811999999998%20L%20128%20133.65723%20L%2058.82861%20202.82812%20C%2057.26668245330853%20204.3903181662189%2054.73407816621888%20204.3905375466915%2053.17188%20202.82861000000003%20C%2051.60968183378112%20201.26668245330856%2051.60946245330853%20198.7340781662189%2053.171389999999995%20197.17188000000002%20L%20122.343%20128%20L%2053.17139%2058.82812%20C%2051.60946245330854%2057.26592183378112%2051.609681833781124%2054.73331754669146%2053.17188%2053.17139%20C%2054.734078166218886%2051.60946245330854%2057.26668245330854%2051.609681833781124%2058.828610000000005%2053.17188%20L%20128%20122.34277%20L%20197.17139%2053.17188%20C%20198.73331754669147%2051.609681833781124%20201.2659218337811%2051.60946245330854%20202.82811999999998%2053.17139%20C%20204.3903181662189%2054.73331754669146%20204.39053754669146%2057.265921833781114%20202.82861%2058.82812%20L%20133.657%20128%20Z'%20transform='translate(-128,%20-128)'%20style='stroke:%20rgb(255,255,255);%20stroke-width:%2010;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-dashoffset:%200;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%204;%20fill:%20rgb(255,255,255);%20fill-rule:%20nonzero;%20opacity:%201;'/%3e%3c/g%3e%3c/svg%3e",ky="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCjxzdmcgaWQ9InN2ZzIiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjcwMCIgd2lkdGg9IjcwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPg0KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGE3Ij4NCiAgPHJkZjpSREY+DQogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+DQogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+DQogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPg0KICAgIDxkYzp0aXRsZS8+DQogICA8L2NjOldvcms+DQogIDwvcmRmOlJERj4NCiA8L21ldGFkYXRhPg0KIDxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTM1Mi4zNikiPg0KICA8dGV4dCBpZD0idGV4dDI5ODUiIHN0eWxlPSJ3b3JkLXNwYWNpbmc6MHB4O2xldHRlci1zcGFjaW5nOjBweCIgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZvbnQtc2l6ZT0iMjVweCIgbGluZS1oZWlnaHQ9IjEyNSUiIHk9Ijk5MS42MiIgeD0iMTAzLjEyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjMDAwMDAwIj48dHNwYW4gaWQ9InRzcGFuMjk4NyIgZm9udC1zaXplPSI4MDBweCIgeT0iOTkxLjYyIiB4PSIxMDMuMTI1IiBmaWxsPSIjZmZmZmZmIj4/PC90c3Bhbj48L3RleHQ+DQogPC9nPg0KPC9zdmc+";function By(){const[i,e]=re.useState(!0);return i?Pe.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[Pe.jsxs("div",{children:["This 3D graph visualizes the shortest paths from every franchise back to Fortnite. Note that this visualization works better on with keyboard and mouse than on a touch display.",Pe.jsx("br",{}),Pe.jsx("br",{}),Pe.jsx("h4",{style:{margin:"0px"},children:"Controls"}),Pe.jsx("p",{style:{margin:"0px"},children:"Left click + drag to pan"}),Pe.jsx("p",{style:{margin:"0px"},children:"Scrollwheel to zoom"}),Pe.jsx("p",{style:{margin:"0px"},children:"Mouse over node to view franchise name"}),Pe.jsx("p",{style:{margin:"0px"},children:"Hold shift + mouse over node to view path to Fortnite"})]}),Pe.jsx("div",{children:Pe.jsx("button",{onClick:()=>{e(!1)},className:"closeButton",children:Pe.jsx("img",{src:Oy,style:{width:"10px",height:"10px"},alt:"Close"})})})]}):Pe.jsx("button",{onClick:()=>{e(!0)},className:"helpButton",children:Pe.jsx("img",{src:ky,style:{width:"15px",height:"15px",display:"block"}})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="177",io={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zy=0,rg=1,Hy=2,Fv=1,Vy=2,Yi=3,Nr=0,kn=1,qi=2,Lr=0,ro=1,sg=2,og=3,ag=4,Gy=5,is=100,Wy=101,Xy=102,jy=103,Yy=104,qy=200,$y=201,Zy=202,Ky=203,of=204,af=205,Jy=206,Qy=207,eS=208,tS=209,nS=210,iS=211,rS=212,sS=213,oS=214,lf=0,uf=1,cf=2,ao=3,hf=4,ff=5,df=6,pf=7,Ov=0,aS=1,lS=2,Dr=0,uS=1,cS=2,hS=3,fS=4,dS=5,pS=6,mS=7,kv=300,lo=301,uo=302,mf=303,gf=304,bu=306,vf=1e3,ss=1001,_f=1002,Yn=1003,gS=1004,Bl=1005,wi=1006,yh=1007,os=1008,Ji=1009,Bv=1010,zv=1011,_a=1012,sd=1013,ls=1014,Ai=1015,Pa=1016,od=1017,ad=1018,xa=1020,Hv=35902,Vv=1021,Gv=1022,pi=1023,ya=1026,Sa=1027,ld=1028,ud=1029,Wv=1030,cd=1031,hd=1033,mu=33776,gu=33777,vu=33778,_u=33779,xf=35840,yf=35841,Sf=35842,Mf=35843,Ef=36196,Tf=37492,wf=37496,Af=37808,Rf=37809,Cf=37810,Pf=37811,bf=37812,Lf=37813,Df=37814,If=37815,Nf=37816,Uf=37817,Ff=37818,Of=37819,kf=37820,Bf=37821,xu=36492,zf=36494,Hf=36495,Xv=36283,Vf=36284,Gf=36285,Wf=36286,vS=3200,_S=3201,jv=0,xS=1,br="",ti="srgb",co="srgb-linear",Eu="linear",It="srgb",Bs=7680,lg=519,yS=512,SS=513,MS=514,Yv=515,ES=516,TS=517,wS=518,AS=519,ug=35044,cg="300 es",$i=2e3,Tu=2001;class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hg=1234567;const ha=Math.PI/180,Ma=180/Math.PI;function ds(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function fd(i,e){return(i%e+e)%e}function RS(i,e,t,r,o){return r+(i-e)*(o-r)/(t-e)}function CS(i,e,t){return i!==e?(t-i)/(e-i):0}function fa(i,e,t){return(1-t)*i+t*e}function PS(i,e,t,r){return fa(i,e,1-Math.exp(-t*r))}function bS(i,e=1){return e-Math.abs(fd(i,e*2)-e)}function LS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function DS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function IS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function NS(i,e){return i+Math.random()*(e-i)}function US(i){return i*(.5-Math.random())}function FS(i){i!==void 0&&(hg=i);let e=hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OS(i){return i*ha}function kS(i){return i*Ma}function BS(i){return(i&i-1)===0&&i!==0}function zS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function HS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function VS(i,e,t,r,o){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+r)/2),m=u((e+r)/2),g=a((e-r)/2),v=u((e-r)/2),x=a((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":i.set(c*m,f*g,f*v,c*d);break;case"YZY":i.set(f*v,c*m,f*g,c*d);break;case"ZXZ":i.set(f*g,f*v,c*m,c*d);break;case"XZX":i.set(c*m,f*M,f*x,c*d);break;case"YXY":i.set(f*x,c*m,f*M,c*d);break;case"ZYZ":i.set(f*M,f*x,c*m,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function eo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const GS={DEG2RAD:ha,RAD2DEG:Ma,generateUUID:ds,clamp:xt,euclideanModulo:fd,mapLinear:RS,inverseLerp:CS,lerp:fa,damp:PS,pingpong:bS,smoothstep:LS,smootherstep:DS,randInt:IS,randFloat:NS,randFloatSpread:US,seededRandom:FS,degToRad:OS,radToDeg:kS,isPowerOfTwo:BS,ceilPowerOfTwo:zS,floorPowerOfTwo:HS,setQuaternionFromProperEuler:VS,normalize:An,denormalize:eo};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*r-u*o+e.x,this.y=a*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class us{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,u,c){let f=r[o+0],d=r[o+1],m=r[o+2],g=r[o+3];const v=a[u+0],x=a[u+1],M=a[u+2],E=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||f!==v||d!==x||m!==M){let S=1-c;const _=f*v+d*x+m*M+g*E,L=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const B=Math.sqrt(A),k=Math.atan2(B,_*L);S=Math.sin(S*k)/B,c=Math.sin(c*k)/B}const R=c*L;if(f=f*S+v*R,d=d*S+x*R,m=m*S+M*R,g=g*S+E*R,S===1-c){const B=1/Math.sqrt(f*f+d*d+m*m+g*g);f*=B,d*=B,m*=B,g*=B}}e[t]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,a,u){const c=r[o],f=r[o+1],d=r[o+2],m=r[o+3],g=a[u],v=a[u+1],x=a[u+2],M=a[u+3];return e[t]=c*M+m*g+f*x-d*v,e[t+1]=f*M+m*v+d*g-c*x,e[t+2]=d*M+m*x+c*v-f*g,e[t+3]=m*M-c*g-f*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(r/2),m=c(o/2),g=c(a/2),v=f(r/2),x=f(o/2),M=f(a/2);switch(u){case"XYZ":this._x=v*m*g+d*x*M,this._y=d*x*g-v*m*M,this._z=d*m*M+v*x*g,this._w=d*m*g-v*x*M;break;case"YXZ":this._x=v*m*g+d*x*M,this._y=d*x*g-v*m*M,this._z=d*m*M-v*x*g,this._w=d*m*g+v*x*M;break;case"ZXY":this._x=v*m*g-d*x*M,this._y=d*x*g+v*m*M,this._z=d*m*M+v*x*g,this._w=d*m*g-v*x*M;break;case"ZYX":this._x=v*m*g-d*x*M,this._y=d*x*g+v*m*M,this._z=d*m*M-v*x*g,this._w=d*m*g+v*x*M;break;case"YZX":this._x=v*m*g+d*x*M,this._y=d*x*g+v*m*M,this._z=d*m*M-v*x*g,this._w=d*m*g-v*x*M;break;case"XZY":this._x=v*m*g-d*x*M,this._y=d*x*g-v*m*M,this._z=d*m*M+v*x*g,this._w=d*m*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],m=t[6],g=t[10],v=r+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-f)*x,this._y=(a-d)*x,this._z=(u-o)*x}else if(r>c&&r>g){const x=2*Math.sqrt(1+r-c-g);this._w=(m-f)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+d)/x}else if(c>g){const x=2*Math.sqrt(1+c-r-g);this._w=(a-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(f+m)/x}else{const x=2*Math.sqrt(1+g-r-c);this._w=(u-o)/x,this._x=(a+d)/x,this._y=(f+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,m=t._w;return this._x=r*m+u*c+o*d-a*f,this._y=o*m+u*f+a*c-r*d,this._z=a*m+u*d+r*f-o*c,this._w=u*m-r*c-o*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),m=Math.atan2(d,c),g=Math.sin((1-t)*m)/d,v=Math.sin(t*m)/d;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*o-c*r),m=2*(c*t-a*o),g=2*(a*r-u*t);return this.x=t+f*d+u*g-c*m,this.y=r+f*m+c*d-a*g,this.z=o+f*g+a*m-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=o*f-a*c,this.y=a*u-r*f,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new X,fg=new us;class vt{constructor(e,t,r,o,a,u,c,f,d){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,u,c,f,d)}set(e,t,r,o,a,u,c,f,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=a,m[5]=f,m[6]=r,m[7]=u,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,u=r[0],c=r[3],f=r[6],d=r[1],m=r[4],g=r[7],v=r[2],x=r[5],M=r[8],E=o[0],S=o[3],_=o[6],L=o[1],A=o[4],R=o[7],B=o[2],k=o[5],U=o[8];return a[0]=u*E+c*L+f*B,a[3]=u*S+c*A+f*k,a[6]=u*_+c*R+f*U,a[1]=d*E+m*L+g*B,a[4]=d*S+m*A+g*k,a[7]=d*_+m*R+g*U,a[2]=v*E+x*L+M*B,a[5]=v*S+x*A+M*k,a[8]=v*_+x*R+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],m=e[8];return t*u*m-t*c*d-r*a*m+r*c*f+o*a*d-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],m=e[8],g=m*u-c*d,v=c*f-m*a,x=d*a-u*f,M=t*g+r*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*d-m*r)*E,e[2]=(c*r-o*u)*E,e[3]=v*E,e[4]=(m*t-o*f)*E,e[5]=(o*a-c*t)*E,e[6]=x*E,e[7]=(r*f-d*t)*E,e[8]=(u*t-r*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(r*f,r*d,-r*(f*u+d*c)+u+e,-o*d,o*f,-o*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mh=new vt;function qv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function WS(){const i=wu("canvas");return i.style.display="block",i}const dg={};function so(i){i in dg||(dg[i]=!0,console.warn(i))}function XS(i,e,t){return new Promise(function(r,o){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}function jS(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function YS(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const pg=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mg=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qS(){const i={enabled:!0,workingColorSpace:co,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===It&&(o.r=Ki(o.r),o.g=Ki(o.g),o.b=Ki(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=oo(o.r),o.g=oo(o.g),o.b=oo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===br?Eu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return so("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return so("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[co]:{primaries:e,whitePoint:r,transfer:Eu,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:It,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),i}const bt=qS();function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zs;class $S{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zs===void 0&&(zs=wu("canvas")),zs.width=e.width,zs.height=e.height;const o=zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=Ki(a[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ki(t[r]/255)*255):t[r]=Ki(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZS=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(Eh(o[u].image)):a.push(Eh(o[u]))}else a=Eh(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Eh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$S.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KS=0;const Th=new X;class Cn extends fs{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,r=ss,o=ss,a=wi,u=os,c=pi,f=Ji,d=Cn.DEFAULT_ANISOTROPY,m=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=ds(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case ss:e.x=e.x<0?0:1;break;case _f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case ss:e.y=e.y<0?0:1;break;case _f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=kv;Cn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,r=0,o=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const f=e.elements,d=f[0],m=f[4],g=f[8],v=f[1],x=f[5],M=f[9],E=f[2],S=f[6],_=f[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(d+1)/2,R=(x+1)/2,B=(_+1)/2,k=(m+v)/4,U=(g+E)/4,H=(M+S)/4;return A>R&&A>B?A<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(A),o=k/r,a=U/r):R>B?R<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),r=k/o,a=H/o):B<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(B),r=U/a,o=H/a),this.set(r,o,a,t),this}let L=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-E)/L,this.z=(v-m)/L,this.w=Math.acos((d+x+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends fs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const o={width:e,height:t,depth:r.depth},a=new Cn(o);this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new dd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends JS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class $v extends Cn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends Cn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,ui):ui.fromBufferAttribute(a,u),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),zl.copy(r.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Hl.subVectors(this.max,ea),Hs.subVectors(e.a,ea),Vs.subVectors(e.b,ea),Gs.subVectors(e.c,ea),Er.subVectors(Vs,Hs),Tr.subVectors(Gs,Vs),Zr.subVectors(Hs,Gs);let t=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-Zr.z,Zr.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,Zr.z,0,-Zr.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-Zr.y,Zr.x,0];return!wh(t,Hs,Vs,Gs,Hl)||(t=[1,0,0,0,1,0,0,0,1],!wh(t,Hs,Vs,Gs,Hl))?!1:(Vl.crossVectors(Er,Tr),t=[Vl.x,Vl.y,Vl.z],wh(t,Hs,Vs,Gs,Hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hi=[new X,new X,new X,new X,new X,new X,new X,new X],ui=new X,zl=new ps,Hs=new X,Vs=new X,Gs=new X,Er=new X,Tr=new X,Zr=new X,ea=new X,Hl=new X,Vl=new X,Kr=new X;function wh(i,e,t,r,o){for(let a=0,u=i.length-3;a<=u;a+=3){Kr.fromArray(i,a);const c=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),f=e.dot(Kr),d=t.dot(Kr),m=r.dot(Kr);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>c)return!1}return!0}const eM=new ps,ta=new X,Ah=new X;class go{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):eM.setFromPoints(e).getCenter(r);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const t=ta.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ta,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(Ah)),this.expandByPoint(ta.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vi=new X,Rh=new X,Gl=new X,wr=new X,Ch=new X,Wl=new X,Ph=new X;class Lu{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Rh.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(Rh);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Gl),c=wr.dot(this.direction),f=-wr.dot(Gl),d=wr.lengthSq(),m=Math.abs(1-u*u);let g,v,x,M;if(m>0)if(g=u*f-c,v=u*c-f,M=a*m,g>=0)if(v>=-M)if(v<=M){const E=1/m;g*=E,v*=E,x=g*(g+u*v+2*c)+v*(u*g+v+2*f)+d}else v=a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*f)+d;else v=-a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*f)+d;else v<=-M?(g=Math.max(0,-(-u*a+c)),v=g>0?-a:Math.min(Math.max(-a,-f),a),x=-g*g+v*(v+2*f)+d):v<=M?(g=0,v=Math.min(Math.max(-a,-f),a),x=v*(v+2*f)+d):(g=Math.max(0,-(u*a+c)),v=g>0?a:Math.min(Math.max(-a,-f),a),x=-g*g+v*(v+2*f)+d);else v=u>0?-a:a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*f)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Rh).addScaledVector(Gl,v),x}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const r=Vi.dot(this.direction),o=Vi.dot(Vi)-r*r,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=r-u,f=r+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,u,c,f;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),m>=0?(a=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||a>o||((a>r||isNaN(r))&&(r=a),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,f=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,f=(e.min.z-v.z)*g),r>f||c>o)||((c>r||r!==r)&&(r=c),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,r,o,a){Ch.subVectors(t,e),Wl.subVectors(r,e),Ph.crossVectors(Ch,Wl);let u=this.direction.dot(Ph),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;wr.subVectors(this.origin,e);const f=c*this.direction.dot(Wl.crossVectors(wr,Wl));if(f<0)return null;const d=c*this.direction.dot(Ch.cross(wr));if(d<0||f+d>u)return null;const m=-c*wr.dot(Ph);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,r,o,a,u,c,f,d,m,g,v,x,M,E,S){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,u,c,f,d,m,g,v,x,M,E,S)}set(e,t,r,o,a,u,c,f,d,m,g,v,x,M,E,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=a,_[5]=u,_[9]=c,_[13]=f,_[2]=d,_[6]=m,_[10]=g,_[14]=v,_[3]=x,_[7]=M,_[11]=E,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Ws.setFromMatrixColumn(e,0).length(),a=1/Ws.setFromMatrixColumn(e,1).length(),u=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,u=Math.cos(r),c=Math.sin(r),f=Math.cos(o),d=Math.sin(o),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=u*m,x=u*g,M=c*m,E=c*g;t[0]=f*m,t[4]=-f*g,t[8]=d,t[1]=x+M*d,t[5]=v-E*d,t[9]=-c*f,t[2]=E-v*d,t[6]=M+x*d,t[10]=u*f}else if(e.order==="YXZ"){const v=f*m,x=f*g,M=d*m,E=d*g;t[0]=v+E*c,t[4]=M*c-x,t[8]=u*d,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=x*c-M,t[6]=E+v*c,t[10]=u*f}else if(e.order==="ZXY"){const v=f*m,x=f*g,M=d*m,E=d*g;t[0]=v-E*c,t[4]=-u*g,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*m,t[9]=E-v*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const v=u*m,x=u*g,M=c*m,E=c*g;t[0]=f*m,t[4]=M*d-x,t[8]=v*d+E,t[1]=f*g,t[5]=E*d+v,t[9]=x*d-M,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*d,M=c*f,E=c*d;t[0]=f*m,t[4]=E-v*g,t[8]=M*g+x,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-d*m,t[6]=x*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=u*f,x=u*d,M=c*f,E=c*d;t[0]=f*m,t[4]=-g,t[8]=d*m,t[1]=v*g+E,t[5]=u*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=c*m,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tM,e,nM)}lookAt(e,t,r){const o=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Ar.crossVectors(r,Xn),Ar.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Ar.crossVectors(r,Xn)),Ar.normalize(),Xl.crossVectors(Xn,Ar),o[0]=Ar.x,o[4]=Xl.x,o[8]=Xn.x,o[1]=Ar.y,o[5]=Xl.y,o[9]=Xn.y,o[2]=Ar.z,o[6]=Xl.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,u=r[0],c=r[4],f=r[8],d=r[12],m=r[1],g=r[5],v=r[9],x=r[13],M=r[2],E=r[6],S=r[10],_=r[14],L=r[3],A=r[7],R=r[11],B=r[15],k=o[0],U=o[4],H=o[8],b=o[12],C=o[1],F=o[5],ie=o[9],$=o[13],ce=o[2],he=o[6],oe=o[10],le=o[14],V=o[3],fe=o[7],se=o[11],O=o[15];return a[0]=u*k+c*C+f*ce+d*V,a[4]=u*U+c*F+f*he+d*fe,a[8]=u*H+c*ie+f*oe+d*se,a[12]=u*b+c*$+f*le+d*O,a[1]=m*k+g*C+v*ce+x*V,a[5]=m*U+g*F+v*he+x*fe,a[9]=m*H+g*ie+v*oe+x*se,a[13]=m*b+g*$+v*le+x*O,a[2]=M*k+E*C+S*ce+_*V,a[6]=M*U+E*F+S*he+_*fe,a[10]=M*H+E*ie+S*oe+_*se,a[14]=M*b+E*$+S*le+_*O,a[3]=L*k+A*C+R*ce+B*V,a[7]=L*U+A*F+R*he+B*fe,a[11]=L*H+A*ie+R*oe+B*se,a[15]=L*b+A*$+R*le+B*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],m=e[2],g=e[6],v=e[10],x=e[14],M=e[3],E=e[7],S=e[11],_=e[15];return M*(+a*f*g-o*d*g-a*c*v+r*d*v+o*c*x-r*f*x)+E*(+t*f*x-t*d*v+a*u*v-o*u*x+o*d*m-a*f*m)+S*(+t*d*g-t*c*x-a*u*g+r*u*x+a*c*m-r*d*m)+_*(-o*c*m-t*f*g+t*c*v+o*u*g-r*u*v+r*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],m=e[8],g=e[9],v=e[10],x=e[11],M=e[12],E=e[13],S=e[14],_=e[15],L=g*S*d-E*v*d+E*f*x-c*S*x-g*f*_+c*v*_,A=M*v*d-m*S*d-M*f*x+u*S*x+m*f*_-u*v*_,R=m*E*d-M*g*d+M*c*x-u*E*x-m*c*_+u*g*_,B=M*g*f-m*E*f-M*c*v+u*E*v+m*c*S-u*g*S,k=t*L+r*A+o*R+a*B;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return e[0]=L*U,e[1]=(E*v*a-g*S*a-E*o*x+r*S*x+g*o*_-r*v*_)*U,e[2]=(c*S*a-E*f*a+E*o*d-r*S*d-c*o*_+r*f*_)*U,e[3]=(g*f*a-c*v*a-g*o*d+r*v*d+c*o*x-r*f*x)*U,e[4]=A*U,e[5]=(m*S*a-M*v*a+M*o*x-t*S*x-m*o*_+t*v*_)*U,e[6]=(M*f*a-u*S*a-M*o*d+t*S*d+u*o*_-t*f*_)*U,e[7]=(u*v*a-m*f*a+m*o*d-t*v*d-u*o*x+t*f*x)*U,e[8]=R*U,e[9]=(M*g*a-m*E*a-M*r*x+t*E*x+m*r*_-t*g*_)*U,e[10]=(u*E*a-M*c*a+M*r*d-t*E*d-u*r*_+t*c*_)*U,e[11]=(m*c*a-u*g*a-m*r*d+t*g*d+u*r*x-t*c*x)*U,e[12]=B*U,e[13]=(m*E*o-M*g*o+M*r*v-t*E*v-m*r*S+t*g*S)*U,e[14]=(M*c*o-u*E*o-M*r*f+t*E*f+u*r*S-t*c*S)*U,e[15]=(u*g*o-m*c*o+m*r*f-t*g*f-u*r*v+t*c*v)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,u=e.x,c=e.y,f=e.z,d=a*u,m=a*c;return this.set(d*u+r,d*c-o*f,d*f+o*c,0,d*c+o*f,m*c+r,m*f-o*u,0,d*f-o*c,m*f+o*u,a*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,u){return this.set(1,r,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,m=u+u,g=c+c,v=a*d,x=a*m,M=a*g,E=u*m,S=u*g,_=c*g,L=f*d,A=f*m,R=f*g,B=r.x,k=r.y,U=r.z;return o[0]=(1-(E+_))*B,o[1]=(x+R)*B,o[2]=(M-A)*B,o[3]=0,o[4]=(x-R)*k,o[5]=(1-(v+_))*k,o[6]=(S+L)*k,o[7]=0,o[8]=(M+A)*U,o[9]=(S-L)*U,o[10]=(1-(v+E))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let a=Ws.set(o[0],o[1],o[2]).length();const u=Ws.set(o[4],o[5],o[6]).length(),c=Ws.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],ci.copy(this);const d=1/a,m=1/u,g=1/c;return ci.elements[0]*=d,ci.elements[1]*=d,ci.elements[2]*=d,ci.elements[4]*=m,ci.elements[5]*=m,ci.elements[6]*=m,ci.elements[8]*=g,ci.elements[9]*=g,ci.elements[10]*=g,t.setFromRotationMatrix(ci),r.x=a,r.y=u,r.z=c,this}makePerspective(e,t,r,o,a,u,c=$i){const f=this.elements,d=2*a/(t-e),m=2*a/(r-o),g=(t+e)/(t-e),v=(r+o)/(r-o);let x,M;if(c===$i)x=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===Tu)x=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,a,u,c=$i){const f=this.elements,d=1/(t-e),m=1/(r-o),g=1/(u-a),v=(t+e)*d,x=(r+o)*m;let M,E;if(c===$i)M=(u+a)*g,E=-2*g;else if(c===Tu)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=E,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ws=new X,ci=new Ft,tM=new X(0,0,0),nM=new X(1,1,1),Ar=new X,Xl=new X,Xn=new X,gg=new Ft,vg=new us;class Ri{constructor(e=0,t=0,r=0,o=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],f=o[1],d=o[5],m=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vg.setFromEuler(this),this.setFromQuaternion(vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iM=0;const _g=new X,Xs=new us,Gi=new Ft,jl=new X,na=new X,rM=new X,sM=new us,xg=new X(1,0,0),yg=new X(0,1,0),Sg=new X(0,0,1),Mg={type:"added"},oM={type:"removed"},js={type:"childadded",child:null},bh={type:"childremoved",child:null};class Bn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new X,t=new Ri,r=new us,o=new X(1,1,1);function a(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ft},normalMatrix:{value:new vt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(xg,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,t){return _g.copy(e).applyQuaternion(this.quaternion),this.position.add(_g.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xg,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?jl.copy(e):jl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(na,jl,this.up):Gi.lookAt(jl,na,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Xs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mg),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oM),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mg),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,rM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,sM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const g=f[d];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];o.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),f.length>0&&(r.materials=f),d.length>0&&(r.textures=d),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Bn.DEFAULT_UP=new X(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new X,Wi=new X,Lh=new X,Xi=new X,Ys=new X,qs=new X,Eg=new X,Dh=new X,Ih=new X,Nh=new X,Uh=new Zt,Fh=new Zt,Oh=new Zt;class di{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),hi.subVectors(e,t),o.cross(hi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){hi.subVectors(o,t),Wi.subVectors(r,t),Lh.subVectors(e,t);const u=hi.dot(hi),c=hi.dot(Wi),f=hi.dot(Lh),d=Wi.dot(Wi),m=Wi.dot(Lh),g=u*d-c*c;if(g===0)return a.set(0,0,0),null;const v=1/g,x=(d*f-c*m)*v,M=(u*m-c*f)*v;return a.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,r,o,a,u,c,f){return this.getBarycoord(e,t,r,o,Xi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Xi.x),f.addScaledVector(u,Xi.y),f.addScaledVector(c,Xi.z),f)}static getInterpolatedAttribute(e,t,r,o,a,u){return Uh.setScalar(0),Fh.setScalar(0),Oh.setScalar(0),Uh.fromBufferAttribute(e,t),Fh.fromBufferAttribute(e,r),Oh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Uh,a.x),u.addScaledVector(Fh,a.y),u.addScaledVector(Oh,a.z),u}static isFrontFacing(e,t,r,o){return hi.subVectors(r,t),Wi.subVectors(e,t),hi.cross(Wi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),hi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return di.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let u,c;Ys.subVectors(o,r),qs.subVectors(a,r),Dh.subVectors(e,r);const f=Ys.dot(Dh),d=qs.dot(Dh);if(f<=0&&d<=0)return t.copy(r);Ih.subVectors(e,o);const m=Ys.dot(Ih),g=qs.dot(Ih);if(m>=0&&g<=m)return t.copy(o);const v=f*g-m*d;if(v<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(r).addScaledVector(Ys,u);Nh.subVectors(e,a);const x=Ys.dot(Nh),M=qs.dot(Nh);if(M>=0&&x<=M)return t.copy(a);const E=x*d-f*M;if(E<=0&&d>=0&&M<=0)return c=d/(d-M),t.copy(r).addScaledVector(qs,c);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return Eg.subVectors(a,o),c=(g-m)/(g-m+(x-M)),t.copy(o).addScaledVector(Eg,c);const _=1/(S+E+v);return u=E*_,c=v*_,t.copy(r).addScaledVector(Ys,u).addScaledVector(qs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function kh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=bt.workingColorSpace){if(e=fd(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,u=2*r-a;this.r=kh(u,a,e+1/3),this.g=kh(u,a,e),this.b=kh(u,a,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=ti){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const r=Zv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return bt.workingToColorSpace(Sn.copy(this),e),Math.round(xt(Sn.r*255,0,255))*65536+Math.round(xt(Sn.g*255,0,255))*256+Math.round(xt(Sn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Sn.copy(this),t);const r=Sn.r,o=Sn.g,a=Sn.b,u=Math.max(r,o,a),c=Math.min(r,o,a);let f,d;const m=(c+u)/2;if(c===u)f=0,d=0;else{const g=u-c;switch(d=m<=.5?g/(u+c):g/(2-u-c),u){case r:f=(o-a)/g+(o<a?6:0);break;case o:f=(a-r)/g+2;break;case a:f=(r-o)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=m,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ti){bt.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,o=Sn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Yl);const r=fa(Rr.h,Yl.h,t),o=fa(Rr.s,Yl.s,t),a=fa(Rr.l,Yl.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new wt;wt.NAMES=Zv;let aM=0;class vo extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=ro,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=af,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(r.blending=this.blending),this.side!==Nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==of&&(r.blendSrc=this.blendSrc),this.blendDst!==af&&(r.blendDst=this.blendDst),this.blendEquation!==is&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(r.textures=a),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class da extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new X,ql=new Ne;let lM=0;class mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ug,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ql.fromBufferAttribute(this,t),ql.applyMatrix3(e),this.setXY(t,ql.x,ql.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=eo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array),o=An(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array),o=An(o,this.array),a=An(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ug&&(e.usage=this.usage),e}}class Kv extends mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Jv extends mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class zn extends mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let uM=0;const ei=new Ft,Bh=new Bn,$s=new X,jn=new ps,ia=new ps,cn=new X;class vi extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qv(e)?Jv:Kv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new vt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,r){return ei.makeTranslation(e,t,r),this.applyMatrix4(ei),this}scale(e,t,r){return ei.makeScale(e,t,r),this.applyMatrix4(ei),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new zn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];jn.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];ia.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors(jn.min,ia.min),jn.expandByPoint(cn),cn.addVectors(jn.max,ia.max),jn.expandByPoint(cn)):(jn.expandByPoint(ia.min),jn.expandByPoint(ia.max))}jn.getCenter(r);let o=0;for(let a=0,u=e.count;a<u;a++)cn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(cn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,m=c.count;d<m;d++)cn.fromBufferAttribute(c,d),f&&($s.fromBufferAttribute(e,d),cn.add($s)),o=Math.max(o,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let H=0;H<r.count;H++)c[H]=new X,f[H]=new X;const d=new X,m=new X,g=new X,v=new Ne,x=new Ne,M=new Ne,E=new X,S=new X;function _(H,b,C){d.fromBufferAttribute(r,H),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),v.fromBufferAttribute(a,H),x.fromBufferAttribute(a,b),M.fromBufferAttribute(a,C),m.sub(d),g.sub(d),x.sub(v),M.sub(v);const F=1/(x.x*M.y-M.x*x.y);isFinite(F)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(F),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(F),c[H].add(E),c[b].add(E),c[C].add(E),f[H].add(S),f[b].add(S),f[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let H=0,b=L.length;H<b;++H){const C=L[H],F=C.start,ie=C.count;for(let $=F,ce=F+ie;$<ce;$+=3)_(e.getX($+0),e.getX($+1),e.getX($+2))}const A=new X,R=new X,B=new X,k=new X;function U(H){B.fromBufferAttribute(o,H),k.copy(B);const b=c[H];A.copy(b),A.sub(B.multiplyScalar(B.dot(b))).normalize(),R.crossVectors(k,b);const F=R.dot(f[H])<0?-1:1;u.setXYZW(H,A.x,A.y,A.z,F)}for(let H=0,b=L.length;H<b;++H){const C=L[H],F=C.start,ie=C.count;for(let $=F,ce=F+ie;$<ce;$+=3)U(e.getX($+0)),U(e.getX($+1)),U(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new X,a=new X,u=new X,c=new X,f=new X,d=new X,m=new X,g=new X;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),m.subVectors(u,a),g.subVectors(o,a),m.cross(g),c.fromBufferAttribute(r,M),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,S),c.add(m),f.add(m),d.add(m),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,a),g.subVectors(o,a),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(c,f){const d=c.array,m=c.itemSize,g=c.normalized,v=new d.constructor(f.length*m);let x=0,M=0;for(let E=0,S=f.length;E<S;E++){c.isInterleavedBufferAttribute?x=f[E]*c.data.stride+c.offset:x=f[E]*m;for(let _=0;_<m;_++)v[M++]=d[x++]}return new mi(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,r=this.index.array,o=this.attributes;for(const c in o){const f=o[c],d=e(f,r);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let m=0,g=d.length;m<g;m++){const v=d[m],x=e(v,r);f.push(x)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const d=r[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let g=0,v=d.length;g<v;g++){const x=d[g];m.push(x.toJSON(e.data))}m.length>0&&(o[f]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(t))}const a=e.morphAttributes;for(const d in a){const m=[],g=a[d];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,m=u.length;d<m;d++){const g=u[d];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tg=new Ft,Jr=new Lu,$l=new go,wg=new X,Zl=new X,Kl=new X,Jl=new X,zh=new X,Ql=new X,Ag=new X,eu=new X;class On extends Bn{constructor(e=new vi,t=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Ql.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const m=c[f],g=a[f];m!==0&&(zh.fromBufferAttribute(g,e),u?Ql.addScaledVector(zh,m):Ql.addScaledVector(zh.sub(t),m))}t.add(Ql)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(a),Jr.copy(e.ray).recast(e.near),!($l.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere($l,wg)===null||Jr.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Tg.copy(a).invert(),Jr.copy(e.ray).applyMatrix4(Tg),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,r){let o;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],_=u[S.materialIndex],L=Math.max(S.start,x.start),A=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let R=L,B=A;R<B;R+=3){const k=c.getX(R),U=c.getX(R+1),H=c.getX(R+2);o=tu(this,_,e,r,d,m,g,k,U,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(c.count,x.start+x.count);for(let S=M,_=E;S<_;S+=3){const L=c.getX(S),A=c.getX(S+1),R=c.getX(S+2);o=tu(this,u,e,r,d,m,g,L,A,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],_=u[S.materialIndex],L=Math.max(S.start,x.start),A=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let R=L,B=A;R<B;R+=3){const k=R,U=R+1,H=R+2;o=tu(this,_,e,r,d,m,g,k,U,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let S=M,_=E;S<_;S+=3){const L=S,A=S+1,R=S+2;o=tu(this,u,e,r,d,m,g,L,A,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function cM(i,e,t,r,o,a,u,c){let f;if(e.side===kn?f=r.intersectTriangle(u,a,o,!0,c):f=r.intersectTriangle(o,a,u,e.side===Nr,c),f===null)return null;eu.copy(c),eu.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(eu);return d<t.near||d>t.far?null:{distance:d,point:eu.clone(),object:i}}function tu(i,e,t,r,o,a,u,c,f,d){i.getVertexPosition(c,Zl),i.getVertexPosition(f,Kl),i.getVertexPosition(d,Jl);const m=cM(i,e,t,r,Zl,Kl,Jl,Ag);if(m){const g=new X;di.getBarycoord(Ag,Zl,Kl,Jl,g),o&&(m.uv=di.getInterpolatedAttribute(o,c,f,d,g,new Ne)),a&&(m.uv1=di.getInterpolatedAttribute(a,c,f,d,g,new Ne)),u&&(m.normal=di.getInterpolatedAttribute(u,c,f,d,g,new X),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:f,c:d,normal:new X,materialIndex:0};di.getNormal(Zl,Kl,Jl,v.normal),m.face=v,m.barycoord=g}return m}class _o extends vi{constructor(e=1,t=1,r=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],m=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,u,a,0),M("z","y","x",1,-1,r,t,-e,u,a,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(f),this.setAttribute("position",new zn(d,3)),this.setAttribute("normal",new zn(m,3)),this.setAttribute("uv",new zn(g,2));function M(E,S,_,L,A,R,B,k,U,H,b){const C=R/U,F=B/H,ie=R/2,$=B/2,ce=k/2,he=U+1,oe=H+1;let le=0,V=0;const fe=new X;for(let se=0;se<oe;se++){const O=se*F-$;for(let te=0;te<he;te++){const Oe=te*C-ie;fe[E]=Oe*L,fe[S]=O*A,fe[_]=ce,d.push(fe.x,fe.y,fe.z),fe[E]=0,fe[S]=0,fe[_]=k>0?1:-1,m.push(fe.x,fe.y,fe.z),g.push(te/U),g.push(1-se/H),le+=1}}for(let se=0;se<H;se++)for(let O=0;O<U;O++){const te=v+O+he*se,Oe=v+O+he*(se+1),Q=v+(O+1)+he*(se+1),pe=v+(O+1)+he*se;f.push(te,Oe,pe),f.push(Oe,Q,pe),V+=6}c.addGroup(x,V,b),x+=V,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Rn(i){const e={};for(let t=0;t<i.length;t++){const r=ho(i[t]);for(const o in r)e[o]=r[o]}return e}function hM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const fM={clone:ho,merge:Rn};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=hM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class e0 extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new X,Rg=new Ne,Cg=new Ne;class ni extends e0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Rg,Cg),t.subVectors(Cg,Rg)}setViewOffset(e,t,r,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*o/f,t-=u.offsetY*r/d,o*=u.width/f,r*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Ks=1;class mM extends Bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(Zs,Ks,e,t);o.layers=this.layers,this.add(o);const a=new ni(Zs,Ks,e,t);a.layers=this.layers,this.add(a);const u=new ni(Zs,Ks,e,t);u.layers=this.layers,this.add(u);const c=new ni(Zs,Ks,e,t);c.layers=this.layers,this.add(c);const f=new ni(Zs,Ks,e,t);f.layers=this.layers,this.add(f);const d=new ni(Zs,Ks,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===$i)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Tu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,a),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,d),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class t0 extends Cn{constructor(e=[],t=lo,r,o,a,u,c,f,d,m){super(e,t,r,o,a,u,c,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gM extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new t0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new _o(5,5,5),a=new Qi({name:"CubemapFromEquirect",uniforms:ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Lr});a.uniforms.tEquirect.value=t;const u=new On(o,a),c=t.minFilter;return t.minFilter===os&&(t.minFilter=wi),new mM(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(a)}}class la extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vM={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),_=this._getHandJoint(d,E);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,M=.005;d.inputState.pinching&&v>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(vM)))}return c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new la;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class _M extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xM extends Cn{constructor(e=null,t=1,r=1,o,a,u,c,f,d=Yn,m=Yn,g,v){super(null,u,c,f,d,m,o,a,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pg extends mi{constructor(e,t,r,o=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new Ft,bg=new Ft,nu=[],Lg=new ps,yM=new Ft,ra=new On,sa=new go;class n0 extends On{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pg(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<r;o++)this.setMatrixAt(o,yM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ps),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Js),Lg.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Lg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Js),sa.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=r.length+1,u=e*a+1;for(let c=0;c<r.length;c++)r[c]=o[u+c]}raycast(e,t){const r=this.matrixWorld,o=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(r),e.ray.intersectsSphere(sa)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,Js),bg.multiplyMatrices(r,Js),ra.matrixWorld=bg,ra.raycast(e,nu);for(let u=0,c=nu.length;u<c;u++){const f=nu[u];f.instanceId=a,f.object=this,t.push(f)}nu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const r=t.morphTargetInfluences,o=r.length+1;this.morphTexture===null&&(this.morphTexture=new xM(new Float32Array(o*this.count),o,this.count,ld,Ai));const a=this.morphTexture.source.data.data;let u=0;for(let d=0;d<r.length;d++)u+=r[d];const c=this.geometry.morphTargetsRelative?1:1-u,f=o*e;a[f]=c,a.set(r,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vh=new X,SM=new X,MM=new vt;class Pr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Vh.subVectors(r,t).cross(SM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Vh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||MM.getNormalMatrix(e),o=this.coplanarPoint(Vh).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new go,iu=new X;class i0{constructor(e=new Pr,t=new Pr,r=new Pr,o=new Pr,a=new Pr,u=new Pr){this.planes=[e,t,r,o,a,u]}set(e,t,r,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=$i){const r=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],f=o[3],d=o[4],m=o[5],g=o[6],v=o[7],x=o[8],M=o[9],E=o[10],S=o[11],_=o[12],L=o[13],A=o[14],R=o[15];if(r[0].setComponents(f-a,v-d,S-x,R-_).normalize(),r[1].setComponents(f+a,v+d,S+x,R+_).normalize(),r[2].setComponents(f+u,v+m,S+M,R+L).normalize(),r[3].setComponents(f-u,v-m,S-M,R-L).normalize(),r[4].setComponents(f-c,v-g,S-E,R-A).normalize(),t===$i)r[5].setComponents(f+c,v+g,S+E,R+A).normalize();else if(t===Tu)r[5].setComponents(c,g,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(iu.x=o.normal.x>0?e.max.x:e.min.x,iu.y=o.normal.y>0?e.max.y:e.min.y,iu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class EM extends vo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Au=new X,Ru=new X,Dg=new Ft,oa=new Lu,ru=new go,Gh=new X,Ig=new X;class TM extends Bn{constructor(e=new vi,t=new EM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,a=t.count;o<a;o++)Au.fromBufferAttribute(t,o-1),Ru.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Au.distanceTo(Ru);e.setAttribute("lineDistance",new zn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(o),ru.radius+=a,e.ray.intersectsSphere(ru)===!1)return;Dg.copy(o).invert(),oa.copy(e.ray).applyMatrix4(Dg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=this.isLineSegments?2:1,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=d){const _=m.getX(E),L=m.getX(E+1),A=su(this,e,oa,f,_,L,E);A&&t.push(A)}if(this.isLineLoop){const E=m.getX(M-1),S=m.getX(x),_=su(this,e,oa,f,E,S,M-1);_&&t.push(_)}}else{const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=d){const _=su(this,e,oa,f,E,E+1,E);_&&t.push(_)}if(this.isLineLoop){const E=su(this,e,oa,f,M-1,x,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function su(i,e,t,r,o,a,u){const c=i.geometry.attributes.position;if(Au.fromBufferAttribute(c,o),Ru.fromBufferAttribute(c,a),t.distanceSqToSegment(Au,Ru,Gh,Ig)>r)return;Gh.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Gh);if(!(d<e.near||d>e.far))return{distance:d,point:Ig.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const Ng=new X,Ug=new X;class wM extends TM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,a=t.count;o<a;o+=2)Ng.fromBufferAttribute(t,o),Ug.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Ng.distanceTo(Ug);e.setAttribute("lineDistance",new zn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class r0 extends Cn{constructor(e,t,r=ls,o,a,u,c=Yn,f=Yn,d,m=ya,g=1){if(m!==ya&&m!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,o,a,u,c,f,m,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),a=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),a+=r.distanceTo(o),t.push(a),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const a=r.length;let u;t?u=t:u=e*r[a-1];let c=0,f=a-1,d;for(;c<=f;)if(o=Math.floor(c+(f-c)/2),d=r[o]-u,d<0)c=o+1;else if(d>0)f=o-1;else{f=o;break}if(o=f,r[o]===u)return o/(a-1);const m=r[o],v=r[o+1]-m,x=(u-m)/v;return(o+x)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const u=this.getPoint(o),c=this.getPoint(a),f=t||(u.isVector2?new Ne:new X);return f.copy(c).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new X,o=[],a=[],u=[],c=new X,f=new Ft;for(let x=0;x<=e;x++){const M=x/e;o[x]=this.getTangentAt(M,new X)}a[0]=new X,u[0]=new X;let d=Number.MAX_VALUE;const m=Math.abs(o[0].x),g=Math.abs(o[0].y),v=Math.abs(o[0].z);m<=d&&(d=m,r.set(1,0,0)),g<=d&&(d=g,r.set(0,1,0)),v<=d&&r.set(0,0,1),c.crossVectors(o[0],r).normalize(),a[0].crossVectors(o[0],c),u[0].crossVectors(o[0],a[0]);for(let x=1;x<=e;x++){if(a[x]=a[x-1].clone(),u[x]=u[x-1].clone(),c.crossVectors(o[x-1],o[x]),c.length()>Number.EPSILON){c.normalize();const M=Math.acos(xt(o[x-1].dot(o[x]),-1,1));a[x].applyMatrix4(f.makeRotationAxis(c,M))}u[x].crossVectors(o[x],a[x])}if(t===!0){let x=Math.acos(xt(a[0].dot(a[e]),-1,1));x/=e,o[0].dot(c.crossVectors(a[0],a[e]))>0&&(x=-x);for(let M=1;M<=e;M++)a[M].applyMatrix4(f.makeRotationAxis(o[M],x*M)),u[M].crossVectors(o[M],a[M])}return{tangents:o,normals:a,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class md extends Pi{constructor(e=0,t=0,r=1,o=1,a=0,u=Math.PI*2,c=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=a,this.aEndAngle=u,this.aClockwise=c,this.aRotation=f}getPoint(e,t=new Ne){const r=t,o=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const u=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=o;for(;a>o;)a-=o;a<Number.EPSILON&&(u?a=0:a=o),this.aClockwise===!0&&!u&&(a===o?a=-o:a=a-o);const c=this.aStartAngle+e*a;let f=this.aX+this.xRadius*Math.cos(c),d=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=f-this.aX,x=d-this.aY;f=v*m-x*g+this.aX,d=v*g+x*m+this.aY}return r.set(f,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class AM extends md{constructor(e,t,r,o,a,u){super(e,t,r,r,o,a,u),this.isArcCurve=!0,this.type="ArcCurve"}}function gd(){let i=0,e=0,t=0,r=0;function o(a,u,c,f){i=a,e=c,t=-3*a+3*u-2*c-f,r=2*a-2*u+c+f}return{initCatmullRom:function(a,u,c,f,d){o(u,c,d*(c-a),d*(f-u))},initNonuniformCatmullRom:function(a,u,c,f,d,m,g){let v=(u-a)/d-(c-a)/(d+m)+(c-u)/m,x=(c-u)/m-(f-u)/(m+g)+(f-c)/g;v*=m,x*=m,o(u,c,v,x)},calc:function(a){const u=a*a,c=u*a;return i+e*a+t*u+r*c}}}const ou=new X,Wh=new gd,Xh=new gd,jh=new gd;class RM extends Pi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new X){const r=t,o=this.points,a=o.length,u=(a-(this.closed?0:1))*e;let c=Math.floor(u),f=u-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/a)+1)*a:f===0&&c===a-1&&(c=a-2,f=1);let d,m;this.closed||c>0?d=o[(c-1)%a]:(ou.subVectors(o[0],o[1]).add(o[0]),d=ou);const g=o[c%a],v=o[(c+1)%a];if(this.closed||c+2<a?m=o[(c+2)%a]:(ou.subVectors(o[a-1],o[a-2]).add(o[a-1]),m=ou),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(d.distanceToSquared(g),x),E=Math.pow(g.distanceToSquared(v),x),S=Math.pow(v.distanceToSquared(m),x);E<1e-4&&(E=1),M<1e-4&&(M=E),S<1e-4&&(S=E),Wh.initNonuniformCatmullRom(d.x,g.x,v.x,m.x,M,E,S),Xh.initNonuniformCatmullRom(d.y,g.y,v.y,m.y,M,E,S),jh.initNonuniformCatmullRom(d.z,g.z,v.z,m.z,M,E,S)}else this.curveType==="catmullrom"&&(Wh.initCatmullRom(d.x,g.x,v.x,m.x,this.tension),Xh.initCatmullRom(d.y,g.y,v.y,m.y,this.tension),jh.initCatmullRom(d.z,g.z,v.z,m.z,this.tension));return r.set(Wh.calc(f),Xh.calc(f),jh.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fg(i,e,t,r,o){const a=(r-e)*.5,u=(o-t)*.5,c=i*i,f=i*c;return(2*t-2*r+a+u)*f+(-3*t+3*r-2*a-u)*c+a*i+t}function CM(i,e){const t=1-i;return t*t*e}function PM(i,e){return 2*(1-i)*i*e}function bM(i,e){return i*i*e}function pa(i,e,t,r){return CM(i,e)+PM(i,t)+bM(i,r)}function LM(i,e){const t=1-i;return t*t*t*e}function DM(i,e){const t=1-i;return 3*t*t*i*e}function IM(i,e){return 3*(1-i)*i*i*e}function NM(i,e){return i*i*i*e}function ma(i,e,t,r,o){return LM(i,e)+DM(i,t)+IM(i,r)+NM(i,o)}class s0 extends Pi{constructor(e=new Ne,t=new Ne,r=new Ne,o=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ne){const r=t,o=this.v0,a=this.v1,u=this.v2,c=this.v3;return r.set(ma(e,o.x,a.x,u.x,c.x),ma(e,o.y,a.y,u.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class UM extends Pi{constructor(e=new X,t=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new X){const r=t,o=this.v0,a=this.v1,u=this.v2,c=this.v3;return r.set(ma(e,o.x,a.x,u.x,c.x),ma(e,o.y,a.y,u.y,c.y),ma(e,o.z,a.z,u.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class o0 extends Pi{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class FM extends Pi{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a0 extends Pi{constructor(e=new Ne,t=new Ne,r=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ne){const r=t,o=this.v0,a=this.v1,u=this.v2;return r.set(pa(e,o.x,a.x,u.x),pa(e,o.y,a.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class OM extends Pi{constructor(e=new X,t=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new X){const r=t,o=this.v0,a=this.v1,u=this.v2;return r.set(pa(e,o.x,a.x,u.x),pa(e,o.y,a.y,u.y),pa(e,o.z,a.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class l0 extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){const r=t,o=this.points,a=(o.length-1)*e,u=Math.floor(a),c=a-u,f=o[u===0?u:u-1],d=o[u],m=o[u>o.length-2?o.length-1:u+1],g=o[u>o.length-3?o.length-1:u+2];return r.set(Fg(c,f.x,d.x,m.x,g.x),Fg(c,f.y,d.y,m.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ne().fromArray(o))}return this}}var Xf=Object.freeze({__proto__:null,ArcCurve:AM,CatmullRomCurve3:RM,CubicBezierCurve:s0,CubicBezierCurve3:UM,EllipseCurve:md,LineCurve:o0,LineCurve3:FM,QuadraticBezierCurve:a0,QuadraticBezierCurve3:OM,SplineCurve:l0});class kM extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xf[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let a=0;for(;a<o.length;){if(o[a]>=r){const u=o[a]-r,c=this.curves[a],f=c.getLength(),d=f===0?0:1-u/f;return c.getPointAt(d,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,a=this.curves;o<a.length;o++){const u=a[o],c=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,f=u.getPoints(c);for(let d=0;d<f.length;d++){const m=f[d];r&&r.equals(m)||(t.push(m),r=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Xf[o.type]().fromJSON(o))}return this}}class jf extends kM{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new o0(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const a=new a0(this.currentPoint.clone(),new Ne(e,t),new Ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,a,u){const c=new s0(this.currentPoint.clone(),new Ne(e,t),new Ne(r,o),new Ne(a,u));return this.curves.push(c),this.currentPoint.set(a,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new l0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,a,u){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+c,t+f,r,o,a,u),this}absarc(e,t,r,o,a,u){return this.absellipse(e,t,r,r,o,a,u),this}ellipse(e,t,r,o,a,u,c,f){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+d,t+m,r,o,a,u,c,f),this}absellipse(e,t,r,o,a,u,c,f){const d=new md(e,t,r,o,a,u,c,f);if(this.curves.length>0){const g=d.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(d);const m=d.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yu extends jf{constructor(e){super(e),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new jf().fromJSON(o))}return this}}function BM(i,e,t=2){const r=e&&e.length,o=r?e[0]*t:i.length;let a=u0(i,0,o,t,!0);const u=[];if(!a||a.next===a.prev)return u;let c,f,d;if(r&&(a=WM(i,e,a,t)),i.length>80*t){c=1/0,f=1/0;let m=-1/0,g=-1/0;for(let v=t;v<o;v+=t){const x=i[v],M=i[v+1];x<c&&(c=x),M<f&&(f=M),x>m&&(m=x),M>g&&(g=M)}d=Math.max(m-c,g-f),d=d!==0?32767/d:0}return Ea(a,u,t,c,f,d,0),u}function u0(i,e,t,r,o){let a;if(o===tE(i,e,t,r)>0)for(let u=e;u<t;u+=r)a=Og(u/r|0,i[u],i[u+1],a);else for(let u=t-r;u>=e;u-=r)a=Og(u/r|0,i[u],i[u+1],a);return a&&fo(a,a.next)&&(wa(a),a=a.next),a}function hs(i,e){if(!i)return i;e||(e=i);let t=i,r;do if(r=!1,!t.steiner&&(fo(t,t.next)||Xt(t.prev,t,t.next)===0)){if(wa(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Ea(i,e,t,r,o,a,u){if(!i)return;!u&&a&&$M(i,r,o,a);let c=i;for(;i.prev!==i.next;){const f=i.prev,d=i.next;if(a?HM(i,r,o,a):zM(i)){e.push(f.i,i.i,d.i),wa(i),i=d.next,c=d.next;continue}if(i=d,i===c){u?u===1?(i=VM(hs(i),e),Ea(i,e,t,r,o,a,2)):u===2&&GM(i,e,t,r,o,a):Ea(hs(i),e,t,r,o,a,1);break}}}function zM(i){const e=i.prev,t=i,r=i.next;if(Xt(e,t,r)>=0)return!1;const o=e.x,a=t.x,u=r.x,c=e.y,f=t.y,d=r.y,m=Math.min(o,a,u),g=Math.min(c,f,d),v=Math.max(o,a,u),x=Math.max(c,f,d);let M=r.next;for(;M!==e;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=x&&ua(o,c,a,f,u,d,M.x,M.y)&&Xt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function HM(i,e,t,r){const o=i.prev,a=i,u=i.next;if(Xt(o,a,u)>=0)return!1;const c=o.x,f=a.x,d=u.x,m=o.y,g=a.y,v=u.y,x=Math.min(c,f,d),M=Math.min(m,g,v),E=Math.max(c,f,d),S=Math.max(m,g,v),_=Yf(x,M,e,t,r),L=Yf(E,S,e,t,r);let A=i.prevZ,R=i.nextZ;for(;A&&A.z>=_&&R&&R.z<=L;){if(A.x>=x&&A.x<=E&&A.y>=M&&A.y<=S&&A!==o&&A!==u&&ua(c,m,f,g,d,v,A.x,A.y)&&Xt(A.prev,A,A.next)>=0||(A=A.prevZ,R.x>=x&&R.x<=E&&R.y>=M&&R.y<=S&&R!==o&&R!==u&&ua(c,m,f,g,d,v,R.x,R.y)&&Xt(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;A&&A.z>=_;){if(A.x>=x&&A.x<=E&&A.y>=M&&A.y<=S&&A!==o&&A!==u&&ua(c,m,f,g,d,v,A.x,A.y)&&Xt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;R&&R.z<=L;){if(R.x>=x&&R.x<=E&&R.y>=M&&R.y<=S&&R!==o&&R!==u&&ua(c,m,f,g,d,v,R.x,R.y)&&Xt(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function VM(i,e){let t=i;do{const r=t.prev,o=t.next.next;!fo(r,o)&&h0(r,t,t.next,o)&&Ta(r,o)&&Ta(o,r)&&(e.push(r.i,t.i,o.i),wa(t),wa(t.next),t=i=o),t=t.next}while(t!==i);return hs(t)}function GM(i,e,t,r,o,a){let u=i;do{let c=u.next.next;for(;c!==u.prev;){if(u.i!==c.i&&JM(u,c)){let f=f0(u,c);u=hs(u,u.next),f=hs(f,f.next),Ea(u,e,t,r,o,a,0),Ea(f,e,t,r,o,a,0);return}c=c.next}u=u.next}while(u!==i)}function WM(i,e,t,r){const o=[];for(let a=0,u=e.length;a<u;a++){const c=e[a]*r,f=a<u-1?e[a+1]*r:i.length,d=u0(i,c,f,r,!1);d===d.next&&(d.steiner=!0),o.push(KM(d))}o.sort(XM);for(let a=0;a<o.length;a++)t=jM(o[a],t);return t}function XM(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const r=(i.next.y-i.y)/(i.next.x-i.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function jM(i,e){const t=YM(i,e);if(!t)return e;const r=f0(t,i);return hs(r,r.next),hs(t,t.next)}function YM(i,e){let t=e;const r=i.x,o=i.y;let a=-1/0,u;if(fo(i,t))return t;do{if(fo(i,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const g=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=r&&g>a&&(a=g,u=t.x<t.next.x?t:t.next,g===r))return u}t=t.next}while(t!==e);if(!u)return null;const c=u,f=u.x,d=u.y;let m=1/0;t=u;do{if(r>=t.x&&t.x>=f&&r!==t.x&&c0(o<d?r:a,o,f,d,o<d?a:r,o,t.x,t.y)){const g=Math.abs(o-t.y)/(r-t.x);Ta(t,i)&&(g<m||g===m&&(t.x>u.x||t.x===u.x&&qM(u,t)))&&(u=t,m=g)}t=t.next}while(t!==c);return u}function qM(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function $M(i,e,t,r){let o=i;do o.z===0&&(o.z=Yf(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,ZM(o)}function ZM(i){let e,t=1;do{let r=i,o;i=null;let a=null;for(e=0;r;){e++;let u=r,c=0;for(let d=0;d<t&&(c++,u=u.nextZ,!!u);d++);let f=t;for(;c>0||f>0&&u;)c!==0&&(f===0||!u||r.z<=u.z)?(o=r,r=r.nextZ,c--):(o=u,u=u.nextZ,f--),a?a.nextZ=o:i=o,o.prevZ=a,a=o;r=u}a.nextZ=null,t*=2}while(e>1);return i}function Yf(i,e,t,r,o){return i=(i-t)*o|0,e=(e-r)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function KM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function c0(i,e,t,r,o,a,u,c){return(o-u)*(e-c)>=(i-u)*(a-c)&&(i-u)*(r-c)>=(t-u)*(e-c)&&(t-u)*(a-c)>=(o-u)*(r-c)}function ua(i,e,t,r,o,a,u,c){return!(i===u&&e===c)&&c0(i,e,t,r,o,a,u,c)}function JM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!QM(i,e)&&(Ta(i,e)&&Ta(e,i)&&eE(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||fo(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fo(i,e){return i.x===e.x&&i.y===e.y}function h0(i,e,t,r){const o=lu(Xt(i,e,t)),a=lu(Xt(i,e,r)),u=lu(Xt(t,r,i)),c=lu(Xt(t,r,e));return!!(o!==a&&u!==c||o===0&&au(i,t,e)||a===0&&au(i,r,e)||u===0&&au(t,i,r)||c===0&&au(t,e,r))}function au(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function lu(i){return i>0?1:i<0?-1:0}function QM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&h0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ta(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function eE(i,e){let t=i,r=!1;const o=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&o<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==i);return r}function f0(i,e){const t=qf(i.i,i.x,i.y),r=qf(e.i,e.x,e.y),o=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=o,o.prev=t,r.next=t,t.prev=r,a.next=r,r.prev=a,r}function Og(i,e,t,r){const o=qf(i,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function wa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qf(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tE(i,e,t,r){let o=0;for(let a=e,u=t-r;a<t;a+=r)o+=(i[u]-i[a])*(i[a+1]+i[u+1]),u=a;return o}class nE{static triangulate(e,t,r=2){return BM(e,t,r)}}class as{static area(e){const t=e.length;let r=0;for(let o=t-1,a=0;a<t;o=a++)r+=e[o].x*e[a].y-e[a].x*e[o].y;return r*.5}static isClockWise(e){return as.area(e)<0}static triangulateShape(e,t){const r=[],o=[],a=[];kg(e),Bg(r,e);let u=e.length;t.forEach(kg);for(let f=0;f<t.length;f++)o.push(u),u+=t[f].length,Bg(r,t[f]);const c=nE.triangulate(r,o);for(let f=0;f<c.length;f+=3)a.push(c.slice(f,f+3));return a}}function kg(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bg(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class vd extends vi{constructor(e=new yu([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],a=[];for(let c=0,f=e.length;c<f;c++){const d=e[c];u(d)}this.setAttribute("position",new zn(o,3)),this.setAttribute("uv",new zn(a,2)),this.computeVertexNormals();function u(c){const f=[],d=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:x-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,L=t.UVGenerator!==void 0?t.UVGenerator:iE;let A,R=!1,B,k,U,H;_&&(A=_.getSpacedPoints(m),R=!0,v=!1,B=_.computeFrenetFrames(m,!1),k=new X,U=new X,H=new X),v||(S=0,x=0,M=0,E=0);const b=c.extractPoints(d);let C=b.shape;const F=b.holes;if(!as.isClockWise(C)){C=C.reverse();for(let D=0,Le=F.length;D<Le;D++){const Se=F[D];as.isClockWise(Se)&&(F[D]=Se.reverse())}}function $(D){const Se=10000000000000001e-36;let De=D[0];for(let de=1;de<=D.length;de++){const Ge=de%D.length,Ee=D[Ge],ze=Ee.x-De.x,ft=Ee.y-De.y,I=ze*ze+ft*ft,w=Math.max(Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(De.x),Math.abs(De.y)),K=Se*w*w;if(I<=K){D.splice(Ge,1),de--;continue}De=Ee}}$(C),F.forEach($);const ce=F.length,he=C;for(let D=0;D<ce;D++){const Le=F[D];C=C.concat(Le)}function oe(D,Le,Se){return Le||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(Le,Se)}const le=C.length;function V(D,Le,Se){let De,de,Ge;const Ee=D.x-Le.x,ze=D.y-Le.y,ft=Se.x-D.x,I=Se.y-D.y,w=Ee*Ee+ze*ze,K=Ee*I-ze*ft;if(Math.abs(K)>Number.EPSILON){const ae=Math.sqrt(w),ge=Math.sqrt(ft*ft+I*I),ue=Le.x-ze/ae,et=Le.y+Ee/ae,Ie=Se.x-I/ge,Xe=Se.y+ft/ge,nt=((Ie-ue)*I-(Xe-et)*ft)/(Ee*I-ze*ft);De=ue+Ee*nt-D.x,de=et+ze*nt-D.y;const ve=De*De+de*de;if(ve<=2)return new Ne(De,de);Ge=Math.sqrt(ve/2)}else{let ae=!1;Ee>Number.EPSILON?ft>Number.EPSILON&&(ae=!0):Ee<-Number.EPSILON?ft<-Number.EPSILON&&(ae=!0):Math.sign(ze)===Math.sign(I)&&(ae=!0),ae?(De=-ze,de=Ee,Ge=Math.sqrt(w)):(De=Ee,de=ze,Ge=Math.sqrt(w/2))}return new Ne(De/Ge,de/Ge)}const fe=[];for(let D=0,Le=he.length,Se=Le-1,De=D+1;D<Le;D++,Se++,De++)Se===Le&&(Se=0),De===Le&&(De=0),fe[D]=V(he[D],he[Se],he[De]);const se=[];let O,te=fe.concat();for(let D=0,Le=ce;D<Le;D++){const Se=F[D];O=[];for(let De=0,de=Se.length,Ge=de-1,Ee=De+1;De<de;De++,Ge++,Ee++)Ge===de&&(Ge=0),Ee===de&&(Ee=0),O[De]=V(Se[De],Se[Ge],Se[Ee]);se.push(O),te=te.concat(O)}let Oe;if(S===0)Oe=as.triangulateShape(he,F);else{const D=[],Le=[];for(let Se=0;Se<S;Se++){const De=Se/S,de=x*Math.cos(De*Math.PI/2),Ge=M*Math.sin(De*Math.PI/2)+E;for(let Ee=0,ze=he.length;Ee<ze;Ee++){const ft=oe(he[Ee],fe[Ee],Ge);Ye(ft.x,ft.y,-de),De===0&&D.push(ft)}for(let Ee=0,ze=ce;Ee<ze;Ee++){const ft=F[Ee];O=se[Ee];const I=[];for(let w=0,K=ft.length;w<K;w++){const ae=oe(ft[w],O[w],Ge);Ye(ae.x,ae.y,-de),De===0&&I.push(ae)}De===0&&Le.push(I)}}Oe=as.triangulateShape(D,Le)}const Q=Oe.length,pe=M+E;for(let D=0;D<le;D++){const Le=v?oe(C[D],te[D],pe):C[D];R?(U.copy(B.normals[0]).multiplyScalar(Le.x),k.copy(B.binormals[0]).multiplyScalar(Le.y),H.copy(A[0]).add(U).add(k),Ye(H.x,H.y,H.z)):Ye(Le.x,Le.y,0)}for(let D=1;D<=m;D++)for(let Le=0;Le<le;Le++){const Se=v?oe(C[Le],te[Le],pe):C[Le];R?(U.copy(B.normals[D]).multiplyScalar(Se.x),k.copy(B.binormals[D]).multiplyScalar(Se.y),H.copy(A[D]).add(U).add(k),Ye(H.x,H.y,H.z)):Ye(Se.x,Se.y,g/m*D)}for(let D=S-1;D>=0;D--){const Le=D/S,Se=x*Math.cos(Le*Math.PI/2),De=M*Math.sin(Le*Math.PI/2)+E;for(let de=0,Ge=he.length;de<Ge;de++){const Ee=oe(he[de],fe[de],De);Ye(Ee.x,Ee.y,g+Se)}for(let de=0,Ge=F.length;de<Ge;de++){const Ee=F[de];O=se[de];for(let ze=0,ft=Ee.length;ze<ft;ze++){const I=oe(Ee[ze],O[ze],De);R?Ye(I.x,I.y+A[m-1].y,A[m-1].x+Se):Ye(I.x,I.y,g+Se)}}}Re(),Me();function Re(){const D=o.length/3;if(v){let Le=0,Se=le*Le;for(let De=0;De<Q;De++){const de=Oe[De];qe(de[2]+Se,de[1]+Se,de[0]+Se)}Le=m+S*2,Se=le*Le;for(let De=0;De<Q;De++){const de=Oe[De];qe(de[0]+Se,de[1]+Se,de[2]+Se)}}else{for(let Le=0;Le<Q;Le++){const Se=Oe[Le];qe(Se[2],Se[1],Se[0])}for(let Le=0;Le<Q;Le++){const Se=Oe[Le];qe(Se[0]+le*m,Se[1]+le*m,Se[2]+le*m)}}r.addGroup(D,o.length/3-D,0)}function Me(){const D=o.length/3;let Le=0;be(he,Le),Le+=he.length;for(let Se=0,De=F.length;Se<De;Se++){const de=F[Se];be(de,Le),Le+=de.length}r.addGroup(D,o.length/3-D,1)}function be(D,Le){let Se=D.length;for(;--Se>=0;){const De=Se;let de=Se-1;de<0&&(de=D.length-1);for(let Ge=0,Ee=m+S*2;Ge<Ee;Ge++){const ze=le*Ge,ft=le*(Ge+1),I=Le+De+ze,w=Le+de+ze,K=Le+de+ft,ae=Le+De+ft;Lt(I,w,K,ae)}}}function Ye(D,Le,Se){f.push(D),f.push(Le),f.push(Se)}function qe(D,Le,Se){Mt(D),Mt(Le),Mt(Se);const De=o.length/3,de=L.generateTopUV(r,o,De-3,De-2,De-1);pt(de[0]),pt(de[1]),pt(de[2])}function Lt(D,Le,Se,De){Mt(D),Mt(Le),Mt(De),Mt(Le),Mt(Se),Mt(De);const de=o.length/3,Ge=L.generateSideWallUV(r,o,de-6,de-3,de-2,de-1);pt(Ge[0]),pt(Ge[1]),pt(Ge[3]),pt(Ge[1]),pt(Ge[2]),pt(Ge[3])}function Mt(D){o.push(f[D*3+0]),o.push(f[D*3+1]),o.push(f[D*3+2])}function pt(D){a.push(D.x),a.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return rE(t,r,e)}static fromJSON(e,t){const r=[];for(let a=0,u=e.shapes.length;a<u;a++){const c=t[e.shapes[a]];r.push(c)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Xf[o.type]().fromJSON(o)),new vd(r,e.options)}}const iE={generateTopUV:function(i,e,t,r,o){const a=e[t*3],u=e[t*3+1],c=e[r*3],f=e[r*3+1],d=e[o*3],m=e[o*3+1];return[new Ne(a,u),new Ne(c,f),new Ne(d,m)]},generateSideWallUV:function(i,e,t,r,o,a){const u=e[t*3],c=e[t*3+1],f=e[t*3+2],d=e[r*3],m=e[r*3+1],g=e[r*3+2],v=e[o*3],x=e[o*3+1],M=e[o*3+2],E=e[a*3],S=e[a*3+1],_=e[a*3+2];return Math.abs(c-m)<Math.abs(u-d)?[new Ne(u,1-f),new Ne(d,1-g),new Ne(v,1-M),new Ne(E,1-_)]:[new Ne(c,1-f),new Ne(m,1-g),new Ne(x,1-M),new Ne(S,1-_)]}};function rE(i,e,t){if(t.shapes=[],Array.isArray(i))for(let r=0,o=i.length;r<o;r++){const a=i[r];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Du extends vi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(r),f=Math.floor(o),d=c+1,m=f+1,g=e/c,v=t/f,x=[],M=[],E=[],S=[];for(let _=0;_<m;_++){const L=_*v-u;for(let A=0;A<d;A++){const R=A*g-a;M.push(R,-L,0),E.push(0,0,1),S.push(A/c),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let L=0;L<c;L++){const A=L+d*_,R=L+d*(_+1),B=L+1+d*(_+1),k=L+1+d*_;x.push(A,R,k),x.push(R,B,k)}this.setIndex(x),this.setAttribute("position",new zn(M,3)),this.setAttribute("normal",new zn(E,3)),this.setAttribute("uv",new zn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}class Iu extends vi{constructor(e=1,t=32,r=16,o=0,a=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:a,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+c,Math.PI);let d=0;const m=[],g=new X,v=new X,x=[],M=[],E=[],S=[];for(let _=0;_<=r;_++){const L=[],A=_/r;let R=0;_===0&&u===0?R=.5/t:_===r&&f===Math.PI&&(R=-.5/t);for(let B=0;B<=t;B++){const k=B/t;g.x=-e*Math.cos(o+k*a)*Math.sin(u+A*c),g.y=e*Math.cos(u+A*c),g.z=e*Math.sin(o+k*a)*Math.sin(u+A*c),M.push(g.x,g.y,g.z),v.copy(g).normalize(),E.push(v.x,v.y,v.z),S.push(k+R,1-A),L.push(d++)}m.push(L)}for(let _=0;_<r;_++)for(let L=0;L<t;L++){const A=m[_][L+1],R=m[_][L],B=m[_+1][L],k=m[_+1][L+1];(_!==0||u>0)&&x.push(A,R,k),(_!==r-1||f<Math.PI)&&x.push(R,B,k)}this.setIndex(x),this.setAttribute("position",new zn(M,3)),this.setAttribute("normal",new zn(E,3)),this.setAttribute("uv",new zn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sE extends vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jv,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oE extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aE extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lE{constructor(e,t,r){const o=this;let a=!1,u=0,c=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(m){c++,a===!1&&o.onStart!==void 0&&o.onStart(m,u,c),a=!0},this.itemEnd=function(m){u++,o.onProgress!==void 0&&o.onProgress(m,u,c),u===c&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return d.push(m,g),this},this.removeHandler=function(m){const g=d.indexOf(m);return g!==-1&&d.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=d.length;g<v;g+=2){const x=d[g],M=d[g+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null}}}const uE=new lE;class _d{constructor(e){this.manager=e!==void 0?e:uE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,a){r.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_d.DEFAULT_MATERIAL_NAME="__DEFAULT";const ji={};class cE extends Error{constructor(e,t){super(e),this.response=t}}class hE extends _d{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=zg.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:r,onError:o});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:r,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,f=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const m=ji[e],g=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=v?parseInt(v):0,M=x!==0;let E=0;const S=new ReadableStream({start(_){L();function L(){g.read().then(({done:A,value:R})=>{if(A)_.close();else{E+=R.byteLength;const B=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let k=0,U=m.length;k<U;k++){const H=m[k];H.onProgress&&H.onProgress(B)}_.enqueue(R),L()}},A=>{_.error(A)})}}});return new Response(S)}else throw new cE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(m=>new DOMParser().parseFromString(m,c));case"json":return d.json();default:if(c==="")return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(c),v=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(v);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{zg.add(e,d);const m=ji[e];delete ji[e];for(let g=0,v=m.length;g<v;g++){const x=m[g];x.onLoad&&x.onLoad(d)}}).catch(d=>{const m=ji[e];if(m===void 0)throw this.manager.itemError(e),d;delete ji[e];for(let g=0,v=m.length;g<v;g++){const x=m[g];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class fE extends e0{constructor(e=-1,t=1,r=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,u=r+e,c=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=m*this.view.offsetY,f=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dE extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Hg=new Ft;class pE{constructor(e,t,r=0,o=1/0){this.ray=new Lu(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new pd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hg),this}intersectObject(e,t=!0,r=[]){return $f(e,this,r,t),r.sort(Vg),r}intersectObjects(e,t=!0,r=[]){for(let o=0,a=e.length;o<a;o++)$f(e[o],this,r,t);return r.sort(Vg),r}}function Vg(i,e){return i.distance-e.distance}function $f(i,e,t,r){let o=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const a=i.children;for(let u=0,c=a.length;u<c;u++)$f(a[u],e,t,!0)}}class Gg{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mE{constructor(){this.type="ShapePath",this.color=new wt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new jf,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,r,o){return this.currentPath.quadraticCurveTo(e,t,r,o),this}bezierCurveTo(e,t,r,o,a,u){return this.currentPath.bezierCurveTo(e,t,r,o,a,u),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const L=[];for(let A=0,R=_.length;A<R;A++){const B=_[A],k=new yu;k.curves=B.curves,L.push(k)}return L}function r(_,L){const A=L.length;let R=!1;for(let B=A-1,k=0;k<A;B=k++){let U=L[B],H=L[k],b=H.x-U.x,C=H.y-U.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(U=L[k],b=-b,H=L[B],C=-C),_.y<U.y||_.y>H.y)continue;if(_.y===U.y){if(_.x===U.x)return!0}else{const F=C*(_.x-U.x)-b*(_.y-U.y);if(F===0)return!0;if(F<0)continue;R=!R}}else{if(_.y!==U.y)continue;if(H.x<=_.x&&_.x<=U.x||U.x<=_.x&&_.x<=H.x)return!0}}return R}const o=as.isClockWise,a=this.subPaths;if(a.length===0)return[];let u,c,f;const d=[];if(a.length===1)return c=a[0],f=new yu,f.curves=c.curves,d.push(f),d;let m=!o(a[0].getPoints());m=e?!m:m;const g=[],v=[];let x=[],M=0,E;v[M]=void 0,x[M]=[];for(let _=0,L=a.length;_<L;_++)c=a[_],E=c.getPoints(),u=o(E),u=e?!u:u,u?(!m&&v[M]&&M++,v[M]={s:new yu,p:E},v[M].s.curves=c.curves,m&&M++,x[M]=[]):x[M].push({h:c,p:E[0]});if(!v[0])return t(a);if(v.length>1){let _=!1,L=0;for(let A=0,R=v.length;A<R;A++)g[A]=[];for(let A=0,R=v.length;A<R;A++){const B=x[A];for(let k=0;k<B.length;k++){const U=B[k];let H=!0;for(let b=0;b<v.length;b++)r(U.p,v[b].p)&&(A!==b&&L++,H?(H=!1,g[b].push(U)):_=!0);H&&g[A].push(U)}}L>0&&_===!1&&(x=g)}let S;for(let _=0,L=v.length;_<L;_++){f=v[_].s,d.push(f),S=x[_];for(let A=0,R=S.length;A<R;A++)f.holes.push(S[A].h)}return d}}class gE extends fs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Wg(i,e,t,r){const o=vE(r);switch(t){case Vv:return i*e;case ld:return i*e/o.components*o.byteLength;case ud:return i*e/o.components*o.byteLength;case Wv:return i*e*2/o.components*o.byteLength;case cd:return i*e*2/o.components*o.byteLength;case Gv:return i*e*3/o.components*o.byteLength;case pi:return i*e*4/o.components*o.byteLength;case hd:return i*e*4/o.components*o.byteLength;case mu:case gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vu:case _u:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yf:case Mf:return Math.max(i,16)*Math.max(e,8)/4;case xf:case Sf:return Math.max(i,8)*Math.max(e,8)/2;case Ef:case Tf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Of:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xu:case zf:case Hf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xv:case Vf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Gf:case Wf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vE(i){switch(i){case Ji:case Bv:return{byteLength:1,components:1};case _a:case zv:case Pa:return{byteLength:2,components:1};case od:case ad:return{byteLength:2,components:4};case ls:case sd:case Ai:return{byteLength:4,components:1};case Hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function d0(){let i=null,e=!1,t=null,r=null;function o(a,u){t(a,u),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function _E(i){const e=new WeakMap;function t(c,f){const d=c.array,m=c.usage,g=d.byteLength,v=i.createBuffer();i.bindBuffer(f,v),i.bufferData(f,d,m),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,f,d){const m=f.array,g=f.updateRanges;if(i.bindBuffer(d,c),g.length===0)i.bufferSubData(d,0,m);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];i.bufferSubData(d,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(i.deleteBuffer(f.buffer),e.delete(c))}function u(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:u}}var xE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,SE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ME=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,VE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$E="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:xE,alphahash_pars_fragment:yE,alphamap_fragment:SE,alphamap_pars_fragment:ME,alphatest_fragment:EE,alphatest_pars_fragment:TE,aomap_fragment:wE,aomap_pars_fragment:AE,batching_pars_vertex:RE,batching_vertex:CE,begin_vertex:PE,beginnormal_vertex:bE,bsdfs:LE,iridescence_fragment:DE,bumpmap_pars_fragment:IE,clipping_planes_fragment:NE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:FE,clipping_planes_vertex:OE,color_fragment:kE,color_pars_fragment:BE,color_pars_vertex:zE,color_vertex:HE,common:VE,cube_uv_reflection_fragment:GE,defaultnormal_vertex:WE,displacementmap_pars_vertex:XE,displacementmap_vertex:jE,emissivemap_fragment:YE,emissivemap_pars_fragment:qE,colorspace_fragment:$E,colorspace_pars_fragment:ZE,envmap_fragment:KE,envmap_common_pars_fragment:JE,envmap_pars_fragment:QE,envmap_pars_vertex:e1,envmap_physical_pars_fragment:h1,envmap_vertex:t1,fog_vertex:n1,fog_pars_vertex:i1,fog_fragment:r1,fog_pars_fragment:s1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:a1,lights_lambert_fragment:l1,lights_lambert_pars_fragment:u1,lights_pars_begin:c1,lights_toon_fragment:f1,lights_toon_pars_fragment:d1,lights_phong_fragment:p1,lights_phong_pars_fragment:m1,lights_physical_fragment:g1,lights_physical_pars_fragment:v1,lights_fragment_begin:_1,lights_fragment_maps:x1,lights_fragment_end:y1,logdepthbuf_fragment:S1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:T1,map_fragment:w1,map_pars_fragment:A1,map_particle_fragment:R1,map_particle_pars_fragment:C1,metalnessmap_fragment:P1,metalnessmap_pars_fragment:b1,morphinstance_vertex:L1,morphcolor_vertex:D1,morphnormal_vertex:I1,morphtarget_pars_vertex:N1,morphtarget_vertex:U1,normal_fragment_begin:F1,normal_fragment_maps:O1,normal_pars_fragment:k1,normal_pars_vertex:B1,normal_vertex:z1,normalmap_pars_fragment:H1,clearcoat_normal_fragment_begin:V1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:X1,opaque_fragment:j1,packing:Y1,premultiplied_alpha_fragment:q1,project_vertex:$1,dithering_fragment:Z1,dithering_pars_fragment:K1,roughnessmap_fragment:J1,roughnessmap_pars_fragment:Q1,shadowmap_pars_fragment:eT,shadowmap_pars_vertex:tT,shadowmap_vertex:nT,shadowmask_pars_fragment:iT,skinbase_vertex:rT,skinning_pars_vertex:sT,skinning_vertex:oT,skinnormal_vertex:aT,specularmap_fragment:lT,specularmap_pars_fragment:uT,tonemapping_fragment:cT,tonemapping_pars_fragment:hT,transmission_fragment:fT,transmission_pars_fragment:dT,uv_pars_fragment:pT,uv_pars_vertex:mT,uv_vertex:gT,worldpos_vertex:vT,background_vert:_T,background_frag:xT,backgroundCube_vert:yT,backgroundCube_frag:ST,cube_vert:MT,cube_frag:ET,depth_vert:TT,depth_frag:wT,distanceRGBA_vert:AT,distanceRGBA_frag:RT,equirect_vert:CT,equirect_frag:PT,linedashed_vert:bT,linedashed_frag:LT,meshbasic_vert:DT,meshbasic_frag:IT,meshlambert_vert:NT,meshlambert_frag:UT,meshmatcap_vert:FT,meshmatcap_frag:OT,meshnormal_vert:kT,meshnormal_frag:BT,meshphong_vert:zT,meshphong_frag:HT,meshphysical_vert:VT,meshphysical_frag:GT,meshtoon_vert:WT,meshtoon_frag:XT,points_vert:jT,points_frag:YT,shadow_vert:qT,shadow_frag:$T,sprite_vert:ZT,sprite_frag:KT},Be={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ti={basic:{uniforms:Rn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Rn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new wt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Rn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Rn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Rn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new wt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Rn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Rn([Be.points,Be.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Rn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Rn([Be.common,Be.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Rn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Rn([Be.sprite,Be.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Rn([Be.common,Be.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Rn([Be.lights,Be.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ti.physical={uniforms:Rn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const uu={r:0,b:0,g:0},es=new Ri,JT=new Ft;function QT(i,e,t,r,o,a,u){const c=new wt(0);let f=a===!0?0:1,d,m,g=null,v=0,x=null;function M(A){let R=A.isScene===!0?A.background:null;return R&&R.isTexture&&(R=(A.backgroundBlurriness>0?t:e).get(R)),R}function E(A){let R=!1;const B=M(A);B===null?_(c,f):B&&B.isColor&&(_(B,1),R=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(i.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(A,R){const B=M(R);B&&(B.isCubeTexture||B.mapping===bu)?(m===void 0&&(m=new On(new _o(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:ho(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,U,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),es.copy(R.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.material.uniforms.envMap.value=B,m.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(JT.makeRotationFromEuler(es)),m.material.toneMapped=bt.getTransfer(B.colorSpace)!==It,(g!==B||v!==B.version||x!==i.toneMapping)&&(m.material.needsUpdate=!0,g=B,v=B.version,x=i.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null)):B&&B.isTexture&&(d===void 0&&(d=new On(new Du(2,2),new Qi({name:"BackgroundMaterial",uniforms:ho(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=B,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=bt.getTransfer(B.colorSpace)!==It,B.matrixAutoUpdate===!0&&B.updateMatrix(),d.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||v!==B.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,g=B,v=B.version,x=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function _(A,R){A.getRGB(uu,Qv(i)),r.buffers.color.setClear(uu.r,uu.g,uu.b,R,u)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,R=1){c.set(A),f=R,_(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,_(c,f)},render:E,addToRenderList:S,dispose:L}}function ew(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=v(null);let a=o,u=!1;function c(C,F,ie,$,ce){let he=!1;const oe=g($,ie,F);a!==oe&&(a=oe,d(a.object)),he=x(C,$,ie,ce),he&&M(C,$,ie,ce),ce!==null&&e.update(ce,i.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(C,F,ie,$),ce!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function f(){return i.createVertexArray()}function d(C){return i.bindVertexArray(C)}function m(C){return i.deleteVertexArray(C)}function g(C,F,ie){const $=ie.wireframe===!0;let ce=r[C.id];ce===void 0&&(ce={},r[C.id]=ce);let he=ce[F.id];he===void 0&&(he={},ce[F.id]=he);let oe=he[$];return oe===void 0&&(oe=v(f()),he[$]=oe),oe}function v(C){const F=[],ie=[],$=[];for(let ce=0;ce<t;ce++)F[ce]=0,ie[ce]=0,$[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ie,attributeDivisors:$,object:C,attributes:{},index:null}}function x(C,F,ie,$){const ce=a.attributes,he=F.attributes;let oe=0;const le=ie.getAttributes();for(const V in le)if(le[V].location>=0){const se=ce[V];let O=he[V];if(O===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;oe++}return a.attributesNum!==oe||a.index!==$}function M(C,F,ie,$){const ce={},he=F.attributes;let oe=0;const le=ie.getAttributes();for(const V in le)if(le[V].location>=0){let se=he[V];se===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),ce[V]=O,oe++}a.attributes=ce,a.attributesNum=oe,a.index=$}function E(){const C=a.newAttributes;for(let F=0,ie=C.length;F<ie;F++)C[F]=0}function S(C){_(C,0)}function _(C,F){const ie=a.newAttributes,$=a.enabledAttributes,ce=a.attributeDivisors;ie[C]=1,$[C]===0&&(i.enableVertexAttribArray(C),$[C]=1),ce[C]!==F&&(i.vertexAttribDivisor(C,F),ce[C]=F)}function L(){const C=a.newAttributes,F=a.enabledAttributes;for(let ie=0,$=F.length;ie<$;ie++)F[ie]!==C[ie]&&(i.disableVertexAttribArray(ie),F[ie]=0)}function A(C,F,ie,$,ce,he,oe){oe===!0?i.vertexAttribIPointer(C,F,ie,ce,he):i.vertexAttribPointer(C,F,ie,$,ce,he)}function R(C,F,ie,$){E();const ce=$.attributes,he=ie.getAttributes(),oe=F.defaultAttributeValues;for(const le in he){const V=he[le];if(V.location>=0){let fe=ce[le];if(fe===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),fe!==void 0){const se=fe.normalized,O=fe.itemSize,te=e.get(fe);if(te===void 0)continue;const Oe=te.buffer,Q=te.type,pe=te.bytesPerElement,Re=Q===i.INT||Q===i.UNSIGNED_INT||fe.gpuType===sd;if(fe.isInterleavedBufferAttribute){const Me=fe.data,be=Me.stride,Ye=fe.offset;if(Me.isInstancedInterleavedBuffer){for(let qe=0;qe<V.locationSize;qe++)_(V.location+qe,Me.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let qe=0;qe<V.locationSize;qe++)S(V.location+qe);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let qe=0;qe<V.locationSize;qe++)A(V.location+qe,O/V.locationSize,Q,se,be*pe,(Ye+O/V.locationSize*qe)*pe,Re)}else{if(fe.isInstancedBufferAttribute){for(let Me=0;Me<V.locationSize;Me++)_(V.location+Me,fe.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<V.locationSize;Me++)S(V.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Me=0;Me<V.locationSize;Me++)A(V.location+Me,O/V.locationSize,Q,se,O*pe,O/V.locationSize*Me*pe,Re)}}else if(oe!==void 0){const se=oe[le];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(V.location,se);break;case 3:i.vertexAttrib3fv(V.location,se);break;case 4:i.vertexAttrib4fv(V.location,se);break;default:i.vertexAttrib1fv(V.location,se)}}}}L()}function B(){H();for(const C in r){const F=r[C];for(const ie in F){const $=F[ie];for(const ce in $)m($[ce].object),delete $[ce];delete F[ie]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const F=r[C.id];for(const ie in F){const $=F[ie];for(const ce in $)m($[ce].object),delete $[ce];delete F[ie]}delete r[C.id]}function U(C){for(const F in r){const ie=r[F];if(ie[C.id]===void 0)continue;const $=ie[C.id];for(const ce in $)m($[ce].object),delete $[ce];delete ie[C.id]}}function H(){b(),u=!0,a!==o&&(a=o,d(a.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:H,resetDefaultState:b,dispose:B,releaseStatesOfGeometry:k,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function tw(i,e,t){let r;function o(d){r=d}function a(d,m){i.drawArrays(r,d,m),t.update(m,r,1)}function u(d,m,g){g!==0&&(i.drawArraysInstanced(r,d,m,g),t.update(m,r,g))}function c(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,r,1)}function f(d,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)u(d[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,d,0,m,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*v[E];t.update(M,r,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function nw(i,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==pi&&r.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const H=U===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Ji&&r.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ai&&!H)}function f(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=f(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,k=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:A,maxFragmentUniforms:R,vertexTextures:B,maxSamples:k}}function iw(i){const e=this;let t=null,r=0,o=!1,a=!1;const u=new Pr,c=new vt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||r!==0||o;return o=v,r=g.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,_=i.get(g);if(!o||M===null||M.length===0||a&&!S)a?m(null):d();else{const L=a?0:r,A=L*4;let R=_.clippingState||null;f.value=R,R=m(M,v,A,x);for(let B=0;B!==A;++B)R[B]=t[B];_.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,v,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=f.value,M!==!0||S===null){const _=x+E*4,L=v.matrixWorldInverse;c.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let A=0,R=x;A!==E;++A,R+=4)u.copy(g[A]).applyMatrix4(L,c),u.normal.toArray(S,R),S[R+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function rw(i){let e=new WeakMap;function t(u,c){return c===mf?u.mapping=lo:c===gf&&(u.mapping=uo),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===mf||c===gf)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new gM(f.height);return d.fromEquirectangularTexture(i,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}const no=4,Xg=[.125,.215,.35,.446,.526,.582],rs=20,Yh=new fE,jg=new wt;let qh=null,$h=0,Zh=0,Kh=!1;const ns=(1+Math.sqrt(5))/2,Qs=1/ns,Yg=[new X(-ns,Qs,0),new X(ns,Qs,0),new X(-Qs,0,ns),new X(Qs,0,ns),new X(0,ns,-Qs),new X(0,ns,Qs),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],sw=new X;class qg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,a={}){const{size:u=256,position:c=sw}=a;qh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,o,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qh,$h,Zh),this._renderer.xr.enabled=Kh,e.scissorTest=!1,cu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Pa,format:pi,colorSpace:co,depthBuffer:!1},o=$g(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$g(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ow(a)),this._blurMaterial=aw(a,e,t)}return o}_compileMaterial(e){const t=new On(this._lodPlanes[0],e);this._renderer.compile(t,Yh)}_sceneToCubeUV(e,t,r,o,a){const f=new ni(90,1,t,r),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(jg),g.toneMapping=Dr,g.autoClear=!1;const M=new da({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new On(new _o,M);let S=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,S=!0):(M.color.copy(jg),S=!0);for(let L=0;L<6;L++){const A=L%3;A===0?(f.up.set(0,d[L],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+m[L],a.y,a.z)):A===1?(f.up.set(0,0,d[L]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+m[L],a.z)):(f.up.set(0,d[L],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+m[L]));const R=this._cubeSize;cu(o,A*R,L>2?R:0,R,R),g.setRenderTarget(o),S&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===lo||e.mapping===uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zg());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new On(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;cu(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,Yh)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Yg[(o-a-1)%Yg.length];this._blur(e,a-1,a,u,c)}t.autoClear=r}_blur(e,t,r,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",a),this._halfBlur(u,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new On(this._lodPlanes[o],d),v=d.uniforms,x=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*rs-1),E=a/M,S=isFinite(a)?1+Math.floor(m*E):rs;S>rs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${rs}`);const _=[];let L=0;for(let U=0;U<rs;++U){const H=U/E,b=Math.exp(-H*H/2);_.push(b),U===0?L+=b:U<S&&(L+=2*b)}for(let U=0;U<_.length;U++)_[U]=_[U]/L;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:A}=this;v.dTheta.value=M,v.mipInt.value=A-r;const R=this._sizeLods[o],B=3*R*(o>A-no?o-A+no:0),k=4*(this._cubeSize-R);cu(t,B,k,3*R,2*R),f.setRenderTarget(t),f.render(g,Yh)}}function ow(i){const e=[],t=[],r=[];let o=i;const a=i-no+1+Xg.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let f=1/c;u>i-no?f=Xg[u-i+no-1]:u===0&&(f=0),r.push(f);const d=1/(c-2),m=-d,g=1+d,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,E=3,S=2,_=1,L=new Float32Array(E*M*x),A=new Float32Array(S*M*x),R=new Float32Array(_*M*x);for(let k=0;k<x;k++){const U=k%3*2/3-1,H=k>2?0:-1,b=[U,H,0,U+2/3,H,0,U+2/3,H+1,0,U,H,0,U+2/3,H+1,0,U,H+1,0];L.set(b,E*M*k),A.set(v,S*M*k);const C=[k,k,k,k,k,k];R.set(C,_*M*k)}const B=new vi;B.setAttribute("position",new mi(L,E)),B.setAttribute("uv",new mi(A,S)),B.setAttribute("faceIndex",new mi(R,_)),e.push(B),o>no&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function $g(i,e,t){const r=new cs(i,e,t);return r.texture.mapping=bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function cu(i,e,t,r,o){i.viewport.set(e,t,r,o),i.scissor.set(e,t,r,o)}function aw(i,e,t){const r=new Float32Array(rs),o=new X(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Zg(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Kg(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lw(i){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const f=c.mapping,d=f===mf||f===gf,m=f===lo||f===uo;if(d||m){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new qg(i)),g=d?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return d&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new qg(i)),g=d?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function o(c){let f=0;const d=6;for(let m=0;m<d;m++)c[m]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function uw(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&so("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function cw(i,e,t,r){const o={},a=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function f(g){const v=g.attributes;for(const x in v)e.update(v[x],i.ARRAY_BUFFER)}function d(g){const v=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const L=x.array;E=x.version;for(let A=0,R=L.length;A<R;A+=3){const B=L[A+0],k=L[A+1],U=L[A+2];v.push(B,k,k,U,U,B)}}else if(M!==void 0){const L=M.array;E=M.version;for(let A=0,R=L.length/3-1;A<R;A+=3){const B=A+0,k=A+1,U=A+2;v.push(B,k,k,U,U,B)}}else return;const S=new(qv(v)?Jv:Kv)(v,1);S.version=E;const _=a.get(g);_&&e.remove(_),a.set(g,S)}function m(g){const v=a.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&d(g)}else d(g);return a.get(g)}return{get:c,update:f,getWireframeAttribute:m}}function hw(i,e,t){let r;function o(v){r=v}let a,u;function c(v){a=v.type,u=v.bytesPerElement}function f(v,x){i.drawElements(r,x,a,v*u),t.update(x,r,1)}function d(v,x,M){M!==0&&(i.drawElementsInstanced(r,x,a,v*u,M),t.update(x,r,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,a,v,0,M);let S=0;for(let _=0;_<M;_++)S+=x[_];t.update(S,r,1)}function g(v,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)d(v[_]/u,x[_],E[_]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,a,v,0,E,0,M);let _=0;for(let L=0;L<M;L++)_+=x[L]*E[L];t.update(_,r,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function fw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,u,c){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function dw(i,e,t){const r=new WeakMap,o=new Zt;function a(u,c,f){const d=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(c);if(v===void 0||v.count!==g){let C=function(){H.dispose(),r.delete(c),c.removeEventListener("dispose",C)};var x=C;v!==void 0&&v.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let R=0;M===!0&&(R=1),E===!0&&(R=2),S===!0&&(R=3);let B=c.attributes.position.count*R,k=1;B>e.maxTextureSize&&(k=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const U=new Float32Array(B*k*4*g),H=new $v(U,B,k,g);H.type=Ai,H.needsUpdate=!0;const b=R*4;for(let F=0;F<g;F++){const ie=_[F],$=L[F],ce=A[F],he=B*k*4*F;for(let oe=0;oe<ie.count;oe++){const le=oe*b;M===!0&&(o.fromBufferAttribute(ie,oe),U[he+le+0]=o.x,U[he+le+1]=o.y,U[he+le+2]=o.z,U[he+le+3]=0),E===!0&&(o.fromBufferAttribute($,oe),U[he+le+4]=o.x,U[he+le+5]=o.y,U[he+le+6]=o.z,U[he+le+7]=0),S===!0&&(o.fromBufferAttribute(ce,oe),U[he+le+8]=o.x,U[he+le+9]=o.y,U[he+le+10]=o.z,U[he+le+11]=ce.itemSize===4?o.w:1)}}v={count:g,texture:H,size:new Ne(B,k)},r.set(c,v),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=c.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",d)}f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:a}}function pw(i,e,t,r){let o=new WeakMap;function a(f){const d=r.render.frame,m=f.geometry,g=e.get(f,m);if(o.get(g)!==d&&(e.update(g),o.set(g,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),o.get(f)!==d&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return g}function u(){o=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}const p0=new Cn,Jg=new r0(1,1),m0=new $v,g0=new QS,v0=new t0,Qg=[],ev=[],tv=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function xo(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let a=Qg[o];if(a===void 0&&(a=new Float32Array(o),Qg[o]=a),e!==0){r.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,i[u].toArray(a,c)}return a}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Nu(i,e){let t=ev[e];t===void 0&&(t=new Int32Array(e),ev[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function mw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function vw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function _w(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function xw(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;iv.set(r),i.uniformMatrix2fv(this.addr,!1,iv),rn(t,r)}}function yw(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;nv.set(r),i.uniformMatrix3fv(this.addr,!1,nv),rn(t,r)}}function Sw(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;tv.set(r),i.uniformMatrix4fv(this.addr,!1,tv),rn(t,r)}}function Mw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ew(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Tw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function ww(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Aw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Pw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function bw(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let a;this.type===i.SAMPLER_2D_SHADOW?(Jg.compareFunction=Yv,a=Jg):a=p0,t.setTexture2D(e||a,o)}function Lw(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||g0,o)}function Dw(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||v0,o)}function Iw(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||m0,o)}function Nw(i){switch(i){case 5126:return mw;case 35664:return gw;case 35665:return vw;case 35666:return _w;case 35674:return xw;case 35675:return yw;case 35676:return Sw;case 5124:case 35670:return Mw;case 35667:case 35671:return Ew;case 35668:case 35672:return Tw;case 35669:case 35673:return ww;case 5125:return Aw;case 36294:return Rw;case 36295:return Cw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Iw}}function Uw(i,e){i.uniform1fv(this.addr,e)}function Fw(i,e){const t=xo(e,this.size,2);i.uniform2fv(this.addr,t)}function Ow(i,e){const t=xo(e,this.size,3);i.uniform3fv(this.addr,t)}function kw(i,e){const t=xo(e,this.size,4);i.uniform4fv(this.addr,t)}function Bw(i,e){const t=xo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zw(i,e){const t=xo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hw(i,e){const t=xo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vw(i,e){i.uniform1iv(this.addr,e)}function Gw(i,e){i.uniform2iv(this.addr,e)}function Ww(i,e){i.uniform3iv(this.addr,e)}function Xw(i,e){i.uniform4iv(this.addr,e)}function jw(i,e){i.uniform1uiv(this.addr,e)}function Yw(i,e){i.uniform2uiv(this.addr,e)}function qw(i,e){i.uniform3uiv(this.addr,e)}function $w(i,e){i.uniform4uiv(this.addr,e)}function Zw(i,e,t){const r=this.cache,o=e.length,a=Nu(t,o);nn(r,a)||(i.uniform1iv(this.addr,a),rn(r,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||p0,a[u])}function Kw(i,e,t){const r=this.cache,o=e.length,a=Nu(t,o);nn(r,a)||(i.uniform1iv(this.addr,a),rn(r,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||g0,a[u])}function Jw(i,e,t){const r=this.cache,o=e.length,a=Nu(t,o);nn(r,a)||(i.uniform1iv(this.addr,a),rn(r,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||v0,a[u])}function Qw(i,e,t){const r=this.cache,o=e.length,a=Nu(t,o);nn(r,a)||(i.uniform1iv(this.addr,a),rn(r,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||m0,a[u])}function eA(i){switch(i){case 5126:return Uw;case 35664:return Fw;case 35665:return Ow;case 35666:return kw;case 35674:return Bw;case 35675:return zw;case 35676:return Hw;case 5124:case 35670:return Vw;case 35667:case 35671:return Gw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return jw;case 36294:return Yw;case 36295:return qw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return Qw}}class tA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Nw(t.type)}}class nA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eA(t.type)}}class iA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],r)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function rv(i,e){i.seq.push(e),i.map[e.id]=e}function rA(i,e,t){const r=i.name,o=r.length;for(Jh.lastIndex=0;;){const a=Jh.exec(r),u=Jh.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===o){rv(t,d===void 0?new tA(c,i,e):new nA(c,i,e));break}else{let g=t.map[c];g===void 0&&(g=new iA(c),rv(t,g)),t=g}}}class Su{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);rA(a,u,this)}}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=r[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function sv(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const sA=37297;let oA=0;function aA(i,e){const t=i.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const ov=new vt;function lA(i){bt._getMatrix(ov,bt.workingColorSpace,i);const e=`mat3( ${ov.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case Eu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function av(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(r&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+aA(i.getShaderSource(e),u)}else return o}function uA(i,e){const t=lA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cA(i,e){let t;switch(e){case uS:t="Linear";break;case cS:t="Reinhard";break;case hS:t="Cineon";break;case fS:t="ACESFilmic";break;case pS:t="AgX";break;case mS:t="Neutral";break;case dS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hu=new X;function hA(){bt.getLuminanceCoefficients(hu);const i=hu.x.toFixed(4),e=hu.y.toFixed(4),t=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function dA(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function pA(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=i.getActiveAttrib(e,o),u=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:i.getAttribLocation(e,u),locationSize:c}}return t}function ca(i){return i!==""}function lv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(i){return i.replace(mA,vA)}const gA=new Map;function vA(i,e){let t=_t[e];if(t===void 0){const r=gA.get(e);if(r!==void 0)t=_t[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zf(t)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cv(i){return i.replace(_A,xA)}function xA(i,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function hv(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vy?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lo:case uo:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function EA(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ov:e="ENVMAP_BLENDING_MULTIPLY";break;case aS:e="ENVMAP_BLENDING_MIX";break;case lS:e="ENVMAP_BLENDING_ADD";break}return e}function TA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function wA(i,e,t,r){const o=i.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=yA(t),d=SA(t),m=MA(t),g=EA(t),v=TA(t),x=fA(t),M=dA(a),E=o.createProgram();let S,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ca).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ca).join(`
`),_.length>0&&(_+=`
`)):(S=[hv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),_=[hv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?_t.tonemapping_pars_fragment:"",t.toneMapping!==Dr?cA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,uA("linearToOutputTexel",t.outputColorSpace),hA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),u=Zf(u),u=lv(u,t),u=uv(u,t),c=Zf(c),c=lv(c,t),c=uv(c,t),u=cv(u),c=cv(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=L+S+u,R=L+_+c,B=sv(o,o.VERTEX_SHADER,A),k=sv(o,o.FRAGMENT_SHADER,R);o.attachShader(E,B),o.attachShader(E,k),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(F){if(i.debug.checkShaderErrors){const ie=o.getProgramInfoLog(E).trim(),$=o.getShaderInfoLog(B).trim(),ce=o.getShaderInfoLog(k).trim();let he=!0,oe=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,E,B,k);else{const le=av(o,B,"vertex"),V=av(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ie+`
`+le+`
`+V)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):($===""||ce==="")&&(oe=!1);oe&&(F.diagnostics={runnable:he,programLog:ie,vertexShader:{log:$,prefix:S},fragmentShader:{log:ce,prefix:_}})}o.deleteShader(B),o.deleteShader(k),H=new Su(o,E),b=pA(o,E)}let H;this.getUniforms=function(){return H===void 0&&U(this),H};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(E,sA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=B,this.fragmentShader=k,this}let AA=0;class RA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new CA(e),t.set(e,r)),r}}class CA{constructor(e){this.id=AA++,this.code=e,this.usedTimes=0}}function PA(i,e,t,r,o,a,u){const c=new pd,f=new RA,d=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return d.add(b),b===0?"uv":`uv${b}`}function S(b,C,F,ie,$){const ce=ie.fog,he=$.geometry,oe=b.isMeshStandardMaterial?ie.environment:null,le=(b.isMeshStandardMaterial?t:e).get(b.envMap||oe),V=le&&le.mapping===bu?le.image.height:null,fe=M[b.type];b.precision!==null&&(x=o.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,O=se!==void 0?se.length:0;let te=0;he.morphAttributes.position!==void 0&&(te=1),he.morphAttributes.normal!==void 0&&(te=2),he.morphAttributes.color!==void 0&&(te=3);let Oe,Q,pe,Re;if(fe){const At=Ti[fe];Oe=At.vertexShader,Q=At.fragmentShader}else Oe=b.vertexShader,Q=b.fragmentShader,f.update(b),pe=f.getVertexShaderID(b),Re=f.getFragmentShaderID(b);const Me=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ye=$.isInstancedMesh===!0,qe=$.isBatchedMesh===!0,Lt=!!b.map,Mt=!!b.matcap,pt=!!le,D=!!b.aoMap,Le=!!b.lightMap,Se=!!b.bumpMap,De=!!b.normalMap,de=!!b.displacementMap,Ge=!!b.emissiveMap,Ee=!!b.metalnessMap,ze=!!b.roughnessMap,ft=b.anisotropy>0,I=b.clearcoat>0,w=b.dispersion>0,K=b.iridescence>0,ae=b.sheen>0,ge=b.transmission>0,ue=ft&&!!b.anisotropyMap,et=I&&!!b.clearcoatMap,Ie=I&&!!b.clearcoatNormalMap,Xe=I&&!!b.clearcoatRoughnessMap,nt=K&&!!b.iridescenceMap,ve=K&&!!b.iridescenceThicknessMap,We=ae&&!!b.sheenColorMap,ut=ae&&!!b.sheenRoughnessMap,st=!!b.specularMap,Ue=!!b.specularColorMap,ht=!!b.specularIntensityMap,G=ge&&!!b.transmissionMap,Fe=ge&&!!b.thicknessMap,xe=!!b.gradientMap,He=!!b.alphaMap,we=b.alphaTest>0,me=!!b.alphaHash,Je=!!b.extensions;let mt=Dr;b.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(mt=i.toneMapping);const Dt={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:Oe,fragmentShader:Q,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:qe,batchingColor:qe&&$._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&$.instanceColor!==null,instancingMorph:Ye&&$.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:co,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:Mt,envMap:pt,envMapMode:pt&&le.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:Le,bumpMap:Se,normalMap:De,displacementMap:v&&de,emissiveMap:Ge,normalMapObjectSpace:De&&b.normalMapType===xS,normalMapTangentSpace:De&&b.normalMapType===jv,metalnessMap:Ee,roughnessMap:ze,anisotropy:ft,anisotropyMap:ue,clearcoat:I,clearcoatMap:et,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Xe,dispersion:w,iridescence:K,iridescenceMap:nt,iridescenceThicknessMap:ve,sheen:ae,sheenColorMap:We,sheenRoughnessMap:ut,specularMap:st,specularColorMap:Ue,specularIntensityMap:ht,transmission:ge,transmissionMap:G,thicknessMap:Fe,gradientMap:xe,opaque:b.transparent===!1&&b.blending===ro&&b.alphaToCoverage===!1,alphaMap:He,alphaTest:we,alphaHash:me,combine:b.combine,mapUv:Lt&&E(b.map.channel),aoMapUv:D&&E(b.aoMap.channel),lightMapUv:Le&&E(b.lightMap.channel),bumpMapUv:Se&&E(b.bumpMap.channel),normalMapUv:De&&E(b.normalMap.channel),displacementMapUv:de&&E(b.displacementMap.channel),emissiveMapUv:Ge&&E(b.emissiveMap.channel),metalnessMapUv:Ee&&E(b.metalnessMap.channel),roughnessMapUv:ze&&E(b.roughnessMap.channel),anisotropyMapUv:ue&&E(b.anisotropyMap.channel),clearcoatMapUv:et&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:We&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:ut&&E(b.sheenRoughnessMap.channel),specularMapUv:st&&E(b.specularMap.channel),specularColorMapUv:Ue&&E(b.specularColorMap.channel),specularIntensityMapUv:ht&&E(b.specularIntensityMap.channel),transmissionMapUv:G&&E(b.transmissionMap.channel),thicknessMapUv:Fe&&E(b.thicknessMap.channel),alphaMapUv:He&&E(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(De||ft),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!he.attributes.uv&&(Lt||He),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:be,skinning:$.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&bt.getTransfer(b.map.colorSpace)===It,decodeVideoTextureEmissive:Ge&&b.emissiveMap.isVideoTexture===!0&&bt.getTransfer(b.emissiveMap.colorSpace)===It,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qi,flipSided:b.side===kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Je&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&b.extensions.multiDraw===!0||qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Dt.vertexUv1s=d.has(1),Dt.vertexUv2s=d.has(2),Dt.vertexUv3s=d.has(3),d.clear(),Dt}function _(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)C.push(F),C.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(L(C,b),A(C,b),C.push(i.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function L(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function A(b,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),b.push(c.mask)}function R(b){const C=M[b.type];let F;if(C){const ie=Ti[C];F=fM.clone(ie.uniforms)}else F=b.uniforms;return F}function B(b,C){let F;for(let ie=0,$=m.length;ie<$;ie++){const ce=m[ie];if(ce.cacheKey===C){F=ce,++F.usedTimes;break}}return F===void 0&&(F=new wA(i,C,b,a),m.push(F)),F}function k(b){if(--b.usedTimes===0){const C=m.indexOf(b);m[C]=m[m.length-1],m.pop(),b.destroy()}}function U(b){f.remove(b)}function H(){f.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:R,acquireProgram:B,releaseProgram:k,releaseShaderCache:U,programs:m,dispose:H}}function bA(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let c=i.get(u);return c===void 0&&(c={},i.set(u,c)),c}function r(u){i.delete(u)}function o(u,c,f){i.get(u)[c]=f}function a(){i=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function LA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dv(){const i=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,x,M,E,S){let _=i[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},i[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=x,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=E,_.group=S),e++,_}function c(g,v,x,M,E,S){const _=u(g,v,x,M,E,S);x.transmission>0?r.push(_):x.transparent===!0?o.push(_):t.push(_)}function f(g,v,x,M,E,S){const _=u(g,v,x,M,E,S);x.transmission>0?r.unshift(_):x.transparent===!0?o.unshift(_):t.unshift(_)}function d(g,v){t.length>1&&t.sort(g||LA),r.length>1&&r.sort(v||fv),o.length>1&&o.sort(v||fv)}function m(){for(let g=e,v=i.length;g<v;g++){const x=i[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:c,unshift:f,finish:m,sort:d}}function DA(){let i=new WeakMap;function e(r,o){const a=i.get(r);let u;return a===void 0?(u=new dv,i.set(r,[u])):o>=a.length?(u=new dv,a.push(u)):u=a[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function IA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new wt};break;case"SpotLight":t={position:new X,direction:new X,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function NA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let UA=0;function FA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function OA(i){const e=new IA,t=NA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new X);const o=new X,a=new Ft,u=new Ft;function c(d){let m=0,g=0,v=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let x=0,M=0,E=0,S=0,_=0,L=0,A=0,R=0,B=0,k=0,U=0;d.sort(FA);for(let b=0,C=d.length;b<C;b++){const F=d[b],ie=F.color,$=F.intensity,ce=F.distance,he=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=ie.r*$,g+=ie.g*$,v+=ie.b*$;else if(F.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(F.sh.coefficients[oe],$);U++}else if(F.isDirectionalLight){const oe=e.get(F);if(oe.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const le=F.shadow,V=t.get(F);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,r.directionalShadow[x]=V,r.directionalShadowMap[x]=he,r.directionalShadowMatrix[x]=F.shadow.matrix,L++}r.directional[x]=oe,x++}else if(F.isSpotLight){const oe=e.get(F);oe.position.setFromMatrixPosition(F.matrixWorld),oe.color.copy(ie).multiplyScalar($),oe.distance=ce,oe.coneCos=Math.cos(F.angle),oe.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),oe.decay=F.decay,r.spot[E]=oe;const le=F.shadow;if(F.map&&(r.spotLightMap[B]=F.map,B++,le.updateMatrices(F),F.castShadow&&k++),r.spotLightMatrix[E]=le.matrix,F.castShadow){const V=t.get(F);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,r.spotShadow[E]=V,r.spotShadowMap[E]=he,R++}E++}else if(F.isRectAreaLight){const oe=e.get(F);oe.color.copy(ie).multiplyScalar($),oe.halfWidth.set(F.width*.5,0,0),oe.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=oe,S++}else if(F.isPointLight){const oe=e.get(F);if(oe.color.copy(F.color).multiplyScalar(F.intensity),oe.distance=F.distance,oe.decay=F.decay,F.castShadow){const le=F.shadow,V=t.get(F);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,V.shadowCameraNear=le.camera.near,V.shadowCameraFar=le.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=he,r.pointShadowMatrix[M]=F.shadow.matrix,A++}r.point[M]=oe,M++}else if(F.isHemisphereLight){const oe=e.get(F);oe.skyColor.copy(F.color).multiplyScalar($),oe.groundColor.copy(F.groundColor).multiplyScalar($),r.hemi[_]=oe,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const H=r.hash;(H.directionalLength!==x||H.pointLength!==M||H.spotLength!==E||H.rectAreaLength!==S||H.hemiLength!==_||H.numDirectionalShadows!==L||H.numPointShadows!==A||H.numSpotShadows!==R||H.numSpotMaps!==B||H.numLightProbes!==U)&&(r.directional.length=x,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=R+B-k,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=U,H.directionalLength=x,H.pointLength=M,H.spotLength=E,H.rectAreaLength=S,H.hemiLength=_,H.numDirectionalShadows=L,H.numPointShadows=A,H.numSpotShadows=R,H.numSpotMaps=B,H.numLightProbes=U,r.version=UA++)}function f(d,m){let g=0,v=0,x=0,M=0,E=0;const S=m.matrixWorldInverse;for(let _=0,L=d.length;_<L;_++){const A=d[_];if(A.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),g++}else if(A.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),x++}else if(A.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(S),u.identity(),a.copy(A.matrixWorld),a.premultiply(S),u.extractRotation(a),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(A.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(S),v++}else if(A.isHemisphereLight){const R=r.hemi[E];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(S),E++}}}return{setup:c,setupView:f,state:r}}function pv(i){const e=new OA(i),t=[],r=[];function o(m){d.camera=m,t.length=0,r.length=0}function a(m){t.push(m)}function u(m){r.push(m)}function c(){e.setup(t)}function f(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:u}}function kA(i){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let c;return u===void 0?(c=new pv(i),e.set(o,[c])):a>=u.length?(c=new pv(i),u.push(c)):c=u[a],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const BA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HA(i,e,t){let r=new i0;const o=new Ne,a=new Ne,u=new Zt,c=new oE({depthPacking:_S}),f=new aE,d={},m=t.maxTextureSize,g={[Nr]:kn,[kn]:Nr,[qi]:qi},v=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:BA,fragmentShader:zA}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new vi;M.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new On(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fv;let _=this.type;this.render=function(k,U,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const b=i.getRenderTarget(),C=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),ie=i.state;ie.setBlending(Lr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const $=_!==Yi&&this.type===Yi,ce=_===Yi&&this.type!==Yi;for(let he=0,oe=k.length;he<oe;he++){const le=k[he],V=le.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const fe=V.getFrameExtents();if(o.multiply(fe),a.copy(V.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/fe.x),o.x=a.x*fe.x,V.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/fe.y),o.y=a.y*fe.y,V.mapSize.y=a.y)),V.map===null||$===!0||ce===!0){const O=this.type!==Yi?{minFilter:Yn,magFilter:Yn}:{};V.map!==null&&V.map.dispose(),V.map=new cs(o.x,o.y,O),V.map.texture.name=le.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const se=V.getViewportCount();for(let O=0;O<se;O++){const te=V.getViewport(O);u.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),ie.viewport(u),V.updateMatrices(le,O),r=V.getFrustum(),R(U,H,V.camera,le,this.type)}V.isPointLightShadow!==!0&&this.type===Yi&&L(V,H),V.needsUpdate=!1}_=this.type,S.needsUpdate=!1,i.setRenderTarget(b,C,F)};function L(k,U){const H=e.update(E);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,x.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new cs(o.x,o.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(U,null,H,v,E,null),x.uniforms.shadow_pass.value=k.mapPass.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(U,null,H,x,E,null)}function A(k,U,H,b){let C=null;const F=H.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(F!==void 0)C=F;else if(C=H.isPointLight===!0?f:c,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const ie=C.uuid,$=U.uuid;let ce=d[ie];ce===void 0&&(ce={},d[ie]=ce);let he=ce[$];he===void 0&&(he=C.clone(),ce[$]=he,U.addEventListener("dispose",B)),C=he}if(C.visible=U.visible,C.wireframe=U.wireframe,b===Yi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:g[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ie=i.properties.get(C);ie.light=H}return C}function R(k,U,H,b,C){if(k.visible===!1)return;if(k.layers.test(U.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===Yi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,k.matrixWorld);const $=e.update(k),ce=k.material;if(Array.isArray(ce)){const he=$.groups;for(let oe=0,le=he.length;oe<le;oe++){const V=he[oe],fe=ce[V.materialIndex];if(fe&&fe.visible){const se=A(k,fe,b,C);k.onBeforeShadow(i,k,U,H,$,se,V),i.renderBufferDirect(H,null,$,se,k,V),k.onAfterShadow(i,k,U,H,$,se,V)}}}else if(ce.visible){const he=A(k,ce,b,C);k.onBeforeShadow(i,k,U,H,$,he,null),i.renderBufferDirect(H,null,$,he,k,null),k.onAfterShadow(i,k,U,H,$,he,null)}}const ie=k.children;for(let $=0,ce=ie.length;$<ce;$++)R(ie[$],U,H,b,C)}function B(k){k.target.removeEventListener("dispose",B);for(const H in d){const b=d[H],C=k.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const VA={[lf]:uf,[cf]:df,[hf]:pf,[ao]:ff,[uf]:lf,[df]:cf,[pf]:hf,[ff]:ao};function GA(i,e){function t(){let G=!1;const Fe=new Zt;let xe=null;const He=new Zt(0,0,0,0);return{setMask:function(we){xe!==we&&!G&&(i.colorMask(we,we,we,we),xe=we)},setLocked:function(we){G=we},setClear:function(we,me,Je,mt,Dt){Dt===!0&&(we*=mt,me*=mt,Je*=mt),Fe.set(we,me,Je,mt),He.equals(Fe)===!1&&(i.clearColor(we,me,Je,mt),He.copy(Fe))},reset:function(){G=!1,xe=null,He.set(-1,0,0,0)}}}function r(){let G=!1,Fe=!1,xe=null,He=null,we=null;return{setReversed:function(me){if(Fe!==me){const Je=e.get("EXT_clip_control");me?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Fe=me;const mt=we;we=null,this.setClear(mt)}},getReversed:function(){return Fe},setTest:function(me){me?Me(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(me){xe!==me&&!G&&(i.depthMask(me),xe=me)},setFunc:function(me){if(Fe&&(me=VA[me]),He!==me){switch(me){case lf:i.depthFunc(i.NEVER);break;case uf:i.depthFunc(i.ALWAYS);break;case cf:i.depthFunc(i.LESS);break;case ao:i.depthFunc(i.LEQUAL);break;case hf:i.depthFunc(i.EQUAL);break;case ff:i.depthFunc(i.GEQUAL);break;case df:i.depthFunc(i.GREATER);break;case pf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}He=me}},setLocked:function(me){G=me},setClear:function(me){we!==me&&(Fe&&(me=1-me),i.clearDepth(me),we=me)},reset:function(){G=!1,xe=null,He=null,we=null,Fe=!1}}}function o(){let G=!1,Fe=null,xe=null,He=null,we=null,me=null,Je=null,mt=null,Dt=null;return{setTest:function(At){G||(At?Me(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(At){Fe!==At&&!G&&(i.stencilMask(At),Fe=At)},setFunc:function(At,Pn,Mn){(xe!==At||He!==Pn||we!==Mn)&&(i.stencilFunc(At,Pn,Mn),xe=At,He=Pn,we=Mn)},setOp:function(At,Pn,Mn){(me!==At||Je!==Pn||mt!==Mn)&&(i.stencilOp(At,Pn,Mn),me=At,Je=Pn,mt=Mn)},setLocked:function(At){G=At},setClear:function(At){Dt!==At&&(i.clearStencil(At),Dt=At)},reset:function(){G=!1,Fe=null,xe=null,He=null,we=null,me=null,Je=null,mt=null,Dt=null}}}const a=new t,u=new r,c=new o,f=new WeakMap,d=new WeakMap;let m={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,_=null,L=null,A=null,R=null,B=null,k=null,U=new wt(0,0,0),H=0,b=!1,C=null,F=null,ie=null,$=null,ce=null;const he=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(V)[1]),oe=le>=1):V.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),oe=le>=2);let fe=null,se={};const O=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),Oe=new Zt().fromArray(O),Q=new Zt().fromArray(te);function pe(G,Fe,xe,He){const we=new Uint8Array(4),me=i.createTexture();i.bindTexture(G,me),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<xe;Je++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Fe,0,i.RGBA,1,1,He,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Fe+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return me}const Re={};Re[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Me(i.DEPTH_TEST),u.setFunc(ao),Se(!1),De(rg),Me(i.CULL_FACE),D(Lr);function Me(G){m[G]!==!0&&(i.enable(G),m[G]=!0)}function be(G){m[G]!==!1&&(i.disable(G),m[G]=!1)}function Ye(G,Fe){return g[G]!==Fe?(i.bindFramebuffer(G,Fe),g[G]=Fe,G===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Fe),G===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Fe),!0):!1}function qe(G,Fe){let xe=x,He=!1;if(G){xe=v.get(Fe),xe===void 0&&(xe=[],v.set(Fe,xe));const we=G.textures;if(xe.length!==we.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Je=we.length;me<Je;me++)xe[me]=i.COLOR_ATTACHMENT0+me;xe.length=we.length,He=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,He=!0);He&&i.drawBuffers(xe)}function Lt(G){return M!==G?(i.useProgram(G),M=G,!0):!1}const Mt={[is]:i.FUNC_ADD,[Wy]:i.FUNC_SUBTRACT,[Xy]:i.FUNC_REVERSE_SUBTRACT};Mt[jy]=i.MIN,Mt[Yy]=i.MAX;const pt={[qy]:i.ZERO,[$y]:i.ONE,[Zy]:i.SRC_COLOR,[of]:i.SRC_ALPHA,[nS]:i.SRC_ALPHA_SATURATE,[eS]:i.DST_COLOR,[Jy]:i.DST_ALPHA,[Ky]:i.ONE_MINUS_SRC_COLOR,[af]:i.ONE_MINUS_SRC_ALPHA,[tS]:i.ONE_MINUS_DST_COLOR,[Qy]:i.ONE_MINUS_DST_ALPHA,[iS]:i.CONSTANT_COLOR,[rS]:i.ONE_MINUS_CONSTANT_COLOR,[sS]:i.CONSTANT_ALPHA,[oS]:i.ONE_MINUS_CONSTANT_ALPHA};function D(G,Fe,xe,He,we,me,Je,mt,Dt,At){if(G===Lr){E===!0&&(be(i.BLEND),E=!1);return}if(E===!1&&(Me(i.BLEND),E=!0),G!==Gy){if(G!==S||At!==b){if((_!==is||R!==is)&&(i.blendEquation(i.FUNC_ADD),_=is,R=is),At)switch(G){case ro:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sg:i.blendFunc(i.ONE,i.ONE);break;case og:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ag:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sg:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case og:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ag:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,A=null,B=null,k=null,U.set(0,0,0),H=0,S=G,b=At}return}we=we||Fe,me=me||xe,Je=Je||He,(Fe!==_||we!==R)&&(i.blendEquationSeparate(Mt[Fe],Mt[we]),_=Fe,R=we),(xe!==L||He!==A||me!==B||Je!==k)&&(i.blendFuncSeparate(pt[xe],pt[He],pt[me],pt[Je]),L=xe,A=He,B=me,k=Je),(mt.equals(U)===!1||Dt!==H)&&(i.blendColor(mt.r,mt.g,mt.b,Dt),U.copy(mt),H=Dt),S=G,b=!1}function Le(G,Fe){G.side===qi?be(i.CULL_FACE):Me(i.CULL_FACE);let xe=G.side===kn;Fe&&(xe=!xe),Se(xe),G.blending===ro&&G.transparent===!1?D(Lr):D(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const He=G.stencilWrite;c.setTest(He),He&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ge(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(G){C!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),C=G)}function De(G){G!==zy?(Me(i.CULL_FACE),G!==F&&(G===rg?i.cullFace(i.BACK):G===Hy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),F=G}function de(G){G!==ie&&(oe&&i.lineWidth(G),ie=G)}function Ge(G,Fe,xe){G?(Me(i.POLYGON_OFFSET_FILL),($!==Fe||ce!==xe)&&(i.polygonOffset(Fe,xe),$=Fe,ce=xe)):be(i.POLYGON_OFFSET_FILL)}function Ee(G){G?Me(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function ze(G){G===void 0&&(G=i.TEXTURE0+he-1),fe!==G&&(i.activeTexture(G),fe=G)}function ft(G,Fe,xe){xe===void 0&&(fe===null?xe=i.TEXTURE0+he-1:xe=fe);let He=se[xe];He===void 0&&(He={type:void 0,texture:void 0},se[xe]=He),(He.type!==G||He.texture!==Fe)&&(fe!==xe&&(i.activeTexture(xe),fe=xe),i.bindTexture(G,Fe||Re[G]),He.type=G,He.texture=Fe)}function I(){const G=se[fe];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function K(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(G){Oe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Oe.copy(G))}function ut(G){Q.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function st(G,Fe){let xe=d.get(Fe);xe===void 0&&(xe=new WeakMap,d.set(Fe,xe));let He=xe.get(G);He===void 0&&(He=i.getUniformBlockIndex(Fe,G.name),xe.set(G,He))}function Ue(G,Fe){const He=d.get(Fe).get(G);f.get(Fe)!==He&&(i.uniformBlockBinding(Fe,He,G.__bindingPointIndex),f.set(Fe,He))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},fe=null,se={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,_=null,L=null,A=null,R=null,B=null,k=null,U=new wt(0,0,0),H=0,b=!1,C=null,F=null,ie=null,$=null,ce=null,Oe.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:Me,disable:be,bindFramebuffer:Ye,drawBuffers:qe,useProgram:Lt,setBlending:D,setMaterial:Le,setFlipSided:Se,setCullFace:De,setLineWidth:de,setPolygonOffset:Ge,setScissorTest:Ee,activeTexture:ze,bindTexture:ft,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:K,texImage2D:nt,texImage3D:ve,updateUBOMapping:st,uniformBlockBinding:Ue,texStorage2D:Ie,texStorage3D:Xe,texSubImage2D:ae,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:et,scissor:We,viewport:ut,reset:ht}}function WA(i,e,t,r,o,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ne,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,w){return x?new OffscreenCanvas(I,w):wu("canvas")}function E(I,w,K){let ae=1;const ge=ft(I);if((ge.width>K||ge.height>K)&&(ae=K/Math.max(ge.width,ge.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ue=Math.floor(ae*ge.width),et=Math.floor(ae*ge.height);g===void 0&&(g=M(ue,et));const Ie=w?M(ue,et):g;return Ie.width=ue,Ie.height=et,Ie.getContext("2d").drawImage(I,0,0,ue,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+et+")."),Ie}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function S(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(I,w,K,ae,ge=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ue=w;if(w===i.RED&&(K===i.FLOAT&&(ue=i.R32F),K===i.HALF_FLOAT&&(ue=i.R16F),K===i.UNSIGNED_BYTE&&(ue=i.R8)),w===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ue=i.R8UI),K===i.UNSIGNED_SHORT&&(ue=i.R16UI),K===i.UNSIGNED_INT&&(ue=i.R32UI),K===i.BYTE&&(ue=i.R8I),K===i.SHORT&&(ue=i.R16I),K===i.INT&&(ue=i.R32I)),w===i.RG&&(K===i.FLOAT&&(ue=i.RG32F),K===i.HALF_FLOAT&&(ue=i.RG16F),K===i.UNSIGNED_BYTE&&(ue=i.RG8)),w===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ue=i.RG8UI),K===i.UNSIGNED_SHORT&&(ue=i.RG16UI),K===i.UNSIGNED_INT&&(ue=i.RG32UI),K===i.BYTE&&(ue=i.RG8I),K===i.SHORT&&(ue=i.RG16I),K===i.INT&&(ue=i.RG32I)),w===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),K===i.UNSIGNED_INT&&(ue=i.RGB32UI),K===i.BYTE&&(ue=i.RGB8I),K===i.SHORT&&(ue=i.RGB16I),K===i.INT&&(ue=i.RGB32I)),w===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),K===i.UNSIGNED_INT&&(ue=i.RGBA32UI),K===i.BYTE&&(ue=i.RGBA8I),K===i.SHORT&&(ue=i.RGBA16I),K===i.INT&&(ue=i.RGBA32I)),w===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),w===i.RGBA){const et=ge?Eu:bt.getTransfer(ae);K===i.FLOAT&&(ue=i.RGBA32F),K===i.HALF_FLOAT&&(ue=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ue=et===It?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function R(I,w){let K;return I?w===null||w===ls||w===xa?K=i.DEPTH24_STENCIL8:w===Ai?K=i.DEPTH32F_STENCIL8:w===_a&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ls||w===xa?K=i.DEPTH_COMPONENT24:w===Ai?K=i.DEPTH_COMPONENT32F:w===_a&&(K=i.DEPTH_COMPONENT16),K}function B(I,w){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Yn&&I.minFilter!==wi?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function k(I){const w=I.target;w.removeEventListener("dispose",k),H(w),w.isVideoTexture&&m.delete(w)}function U(I){const w=I.target;w.removeEventListener("dispose",U),C(w)}function H(I){const w=r.get(I);if(w.__webglInit===void 0)return;const K=I.source,ae=v.get(K);if(ae){const ge=ae[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(I),Object.keys(ae).length===0&&v.delete(K)}r.remove(I)}function b(I){const w=r.get(I);i.deleteTexture(w.__webglTexture);const K=I.source,ae=v.get(K);delete ae[w.__cacheKey],u.memory.textures--}function C(I){const w=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let ge=0;ge<w.__webglFramebuffer[ae].length;ge++)i.deleteFramebuffer(w.__webglFramebuffer[ae][ge]);else i.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)i.deleteFramebuffer(w.__webglFramebuffer[ae]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=I.textures;for(let ae=0,ge=K.length;ae<ge;ae++){const ue=r.get(K[ae]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),u.memory.textures--),r.remove(K[ae])}r.remove(I)}let F=0;function ie(){F=0}function $(){const I=F;return I>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),F+=1,I}function ce(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function he(I,w){const K=r.get(I);if(I.isVideoTexture&&Ee(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const ae=I.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(K,I,w);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+w)}function oe(I,w){const K=r.get(I);if(I.version>0&&K.__version!==I.version){Re(K,I,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+w)}function le(I,w){const K=r.get(I);if(I.version>0&&K.__version!==I.version){Re(K,I,w);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+w)}function V(I,w){const K=r.get(I);if(I.version>0&&K.__version!==I.version){Me(K,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+w)}const fe={[vf]:i.REPEAT,[ss]:i.CLAMP_TO_EDGE,[_f]:i.MIRRORED_REPEAT},se={[Yn]:i.NEAREST,[gS]:i.NEAREST_MIPMAP_NEAREST,[Bl]:i.NEAREST_MIPMAP_LINEAR,[wi]:i.LINEAR,[yh]:i.LINEAR_MIPMAP_NEAREST,[os]:i.LINEAR_MIPMAP_LINEAR},O={[yS]:i.NEVER,[AS]:i.ALWAYS,[SS]:i.LESS,[Yv]:i.LEQUAL,[MS]:i.EQUAL,[wS]:i.GEQUAL,[ES]:i.GREATER,[TS]:i.NOTEQUAL};function te(I,w){if(w.type===Ai&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===wi||w.magFilter===yh||w.magFilter===Bl||w.magFilter===os||w.minFilter===wi||w.minFilter===yh||w.minFilter===Bl||w.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,fe[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,fe[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,fe[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,se[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yn||w.minFilter!==Bl&&w.minFilter!==os||w.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(I,w){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",k));const ae=w.source;let ge=v.get(ae);ge===void 0&&(ge={},v.set(ae,ge));const ue=ce(w);if(ue!==I.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,K=!0),ge[ue].usedTimes++;const et=ge[I.__cacheKey];et!==void 0&&(ge[I.__cacheKey].usedTimes--,et.usedTimes===0&&b(w)),I.__cacheKey=ue,I.__webglTexture=ge[ue].texture}return K}function Q(I,w,K){return Math.floor(Math.floor(I/K)/w)}function pe(I,w,K,ae){const ue=I.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,K,ae,w.data);else{ue.sort((ve,We)=>ve.start-We.start);let et=0;for(let ve=1;ve<ue.length;ve++){const We=ue[et],ut=ue[ve],st=We.start+We.count,Ue=Q(ut.start,w.width,4),ht=Q(We.start,w.width,4);ut.start<=st+1&&Ue===ht&&Q(ut.start+ut.count-1,w.width,4)===Ue?We.count=Math.max(We.count,ut.start+ut.count-We.start):(++et,ue[et]=ut)}ue.length=et+1;const Ie=i.getParameter(i.UNPACK_ROW_LENGTH),Xe=i.getParameter(i.UNPACK_SKIP_PIXELS),nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ve=0,We=ue.length;ve<We;ve++){const ut=ue[ve],st=Math.floor(ut.start/4),Ue=Math.ceil(ut.count/4),ht=st%w.width,G=Math.floor(st/w.width),Fe=Ue,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,ht,G,Fe,xe,K,ae,w.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,nt)}}function Re(I,w,K){let ae=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=i.TEXTURE_3D);const ge=Oe(I,w),ue=w.source;t.bindTexture(ae,I.__webglTexture,i.TEXTURE0+K);const et=r.get(ue);if(ue.version!==et.__version||ge===!0){t.activeTexture(i.TEXTURE0+K);const Ie=bt.getPrimaries(bt.workingColorSpace),Xe=w.colorSpace===br?null:bt.getPrimaries(w.colorSpace),nt=w.colorSpace===br||Ie===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ve=E(w.image,!1,o.maxTextureSize);ve=ze(w,ve);const We=a.convert(w.format,w.colorSpace),ut=a.convert(w.type);let st=A(w.internalFormat,We,ut,w.colorSpace,w.isVideoTexture);te(ae,w);let Ue;const ht=w.mipmaps,G=w.isVideoTexture!==!0,Fe=et.__version===void 0||ge===!0,xe=ue.dataReady,He=B(w,ve);if(w.isDepthTexture)st=R(w.format===Sa,w.type),Fe&&(G?t.texStorage2D(i.TEXTURE_2D,1,st,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,st,ve.width,ve.height,0,We,ut,null));else if(w.isDataTexture)if(ht.length>0){G&&Fe&&t.texStorage2D(i.TEXTURE_2D,He,st,ht[0].width,ht[0].height);for(let we=0,me=ht.length;we<me;we++)Ue=ht[we],G?xe&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Ue.width,Ue.height,We,ut,Ue.data):t.texImage2D(i.TEXTURE_2D,we,st,Ue.width,Ue.height,0,We,ut,Ue.data);w.generateMipmaps=!1}else G?(Fe&&t.texStorage2D(i.TEXTURE_2D,He,st,ve.width,ve.height),xe&&pe(w,ve,We,ut)):t.texImage2D(i.TEXTURE_2D,0,st,ve.width,ve.height,0,We,ut,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,st,ht[0].width,ht[0].height,ve.depth);for(let we=0,me=ht.length;we<me;we++)if(Ue=ht[we],w.format!==pi)if(We!==null)if(G){if(xe)if(w.layerUpdates.size>0){const Je=Wg(Ue.width,Ue.height,w.format,w.type);for(const mt of w.layerUpdates){const Dt=Ue.data.subarray(mt*Je/Ue.data.BYTES_PER_ELEMENT,(mt+1)*Je/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,mt,Ue.width,Ue.height,1,We,Dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,ve.depth,We,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,st,Ue.width,Ue.height,ve.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,ve.depth,We,ut,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,st,Ue.width,Ue.height,ve.depth,0,We,ut,Ue.data)}else{G&&Fe&&t.texStorage2D(i.TEXTURE_2D,He,st,ht[0].width,ht[0].height);for(let we=0,me=ht.length;we<me;we++)Ue=ht[we],w.format!==pi?We!==null?G?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,Ue.width,Ue.height,We,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,we,st,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?xe&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Ue.width,Ue.height,We,ut,Ue.data):t.texImage2D(i.TEXTURE_2D,we,st,Ue.width,Ue.height,0,We,ut,Ue.data)}else if(w.isDataArrayTexture)if(G){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,st,ve.width,ve.height,ve.depth),xe)if(w.layerUpdates.size>0){const we=Wg(ve.width,ve.height,w.format,w.type);for(const me of w.layerUpdates){const Je=ve.data.subarray(me*we/ve.data.BYTES_PER_ELEMENT,(me+1)*we/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ve.width,ve.height,1,We,ut,Je)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,We,ut,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,st,ve.width,ve.height,ve.depth,0,We,ut,ve.data);else if(w.isData3DTexture)G?(Fe&&t.texStorage3D(i.TEXTURE_3D,He,st,ve.width,ve.height,ve.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,We,ut,ve.data)):t.texImage3D(i.TEXTURE_3D,0,st,ve.width,ve.height,ve.depth,0,We,ut,ve.data);else if(w.isFramebufferTexture){if(Fe)if(G)t.texStorage2D(i.TEXTURE_2D,He,st,ve.width,ve.height);else{let we=ve.width,me=ve.height;for(let Je=0;Je<He;Je++)t.texImage2D(i.TEXTURE_2D,Je,st,we,me,0,We,ut,null),we>>=1,me>>=1}}else if(ht.length>0){if(G&&Fe){const we=ft(ht[0]);t.texStorage2D(i.TEXTURE_2D,He,st,we.width,we.height)}for(let we=0,me=ht.length;we<me;we++)Ue=ht[we],G?xe&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,We,ut,Ue):t.texImage2D(i.TEXTURE_2D,we,st,We,ut,Ue);w.generateMipmaps=!1}else if(G){if(Fe){const we=ft(ve);t.texStorage2D(i.TEXTURE_2D,He,st,we.width,we.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,ut,ve)}else t.texImage2D(i.TEXTURE_2D,0,st,We,ut,ve);S(w)&&_(ae),et.__version=ue.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Me(I,w,K){if(w.image.length!==6)return;const ae=Oe(I,w),ge=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+K);const ue=r.get(ge);if(ge.version!==ue.__version||ae===!0){t.activeTexture(i.TEXTURE0+K);const et=bt.getPrimaries(bt.workingColorSpace),Ie=w.colorSpace===br?null:bt.getPrimaries(w.colorSpace),Xe=w.colorSpace===br||et===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const nt=w.isCompressedTexture||w.image[0].isCompressedTexture,ve=w.image[0]&&w.image[0].isDataTexture,We=[];for(let me=0;me<6;me++)!nt&&!ve?We[me]=E(w.image[me],!0,o.maxCubemapSize):We[me]=ve?w.image[me].image:w.image[me],We[me]=ze(w,We[me]);const ut=We[0],st=a.convert(w.format,w.colorSpace),Ue=a.convert(w.type),ht=A(w.internalFormat,st,Ue,w.colorSpace),G=w.isVideoTexture!==!0,Fe=ue.__version===void 0||ae===!0,xe=ge.dataReady;let He=B(w,ut);te(i.TEXTURE_CUBE_MAP,w);let we;if(nt){G&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ht,ut.width,ut.height);for(let me=0;me<6;me++){we=We[me].mipmaps;for(let Je=0;Je<we.length;Je++){const mt=we[Je];w.format!==pi?st!==null?G?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je,0,0,mt.width,mt.height,st,mt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je,ht,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je,0,0,mt.width,mt.height,st,Ue,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je,ht,mt.width,mt.height,0,st,Ue,mt.data)}}}else{if(we=w.mipmaps,G&&Fe){we.length>0&&He++;const me=ft(We[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ht,me.width,me.height)}for(let me=0;me<6;me++)if(ve){G?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We[me].width,We[me].height,st,Ue,We[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,We[me].width,We[me].height,0,st,Ue,We[me].data);for(let Je=0;Je<we.length;Je++){const Dt=we[Je].image[me].image;G?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je+1,0,0,Dt.width,Dt.height,st,Ue,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je+1,ht,Dt.width,Dt.height,0,st,Ue,Dt.data)}}else{G?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,st,Ue,We[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,st,Ue,We[me]);for(let Je=0;Je<we.length;Je++){const mt=we[Je];G?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je+1,0,0,st,Ue,mt.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je+1,ht,st,Ue,mt.image[me])}}}S(w)&&_(i.TEXTURE_CUBE_MAP),ue.__version=ge.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function be(I,w,K,ae,ge,ue){const et=a.convert(K.format,K.colorSpace),Ie=a.convert(K.type),Xe=A(K.internalFormat,et,Ie,K.colorSpace),nt=r.get(w),ve=r.get(K);if(ve.__renderTarget=w,!nt.__hasExternalTextures){const We=Math.max(1,w.width>>ue),ut=Math.max(1,w.height>>ue);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,Xe,We,ut,w.depth,0,et,Ie,null):t.texImage2D(ge,ue,Xe,We,ut,0,et,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ge(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ge,ve.__webglTexture,0,de(w)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ge,ve.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(I,w,K){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const ae=w.depthTexture,ge=ae&&ae.isDepthTexture?ae.type:null,ue=R(w.stencilBuffer,ge),et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=de(w);Ge(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,ue,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ue,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ue,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,I)}else{const ae=w.textures;for(let ge=0;ge<ae.length;ge++){const ue=ae[ge],et=a.convert(ue.format,ue.colorSpace),Ie=a.convert(ue.type),Xe=A(ue.internalFormat,et,Ie,ue.colorSpace),nt=de(w);K&&Ge(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Xe,w.width,w.height):Ge(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Xe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Xe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=r.get(w.depthTexture);ae.__renderTarget=w,(!ae.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const ge=ae.__webglTexture,ue=de(w);if(w.depthTexture.format===ya)Ge(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Sa)Ge(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Lt(I){const w=r.get(I),K=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const ae=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",ge)};ae.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=ae}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const ae=I.texture.mipmaps;ae&&ae.length>0?qe(w.__webglFramebuffer[0],I):qe(w.__webglFramebuffer,I)}else if(K){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=i.createRenderbuffer(),Ye(w.__webglDepthbuffer[ae],I,!1);else{const ge=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,ue)}}else{const ae=I.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ye(w.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(I,w,K){const ae=r.get(I);w!==void 0&&be(ae.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Lt(I)}function pt(I){const w=I.texture,K=r.get(I),ae=r.get(w);I.addEventListener("dispose",U);const ge=I.textures,ue=I.isWebGLCubeRenderTarget===!0,et=ge.length>1;if(et||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=w.version,u.memory.textures++),ue){K.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Ie]=[];for(let Xe=0;Xe<w.mipmaps.length;Xe++)K.__webglFramebuffer[Ie][Xe]=i.createFramebuffer()}else K.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)K.__webglFramebuffer[Ie]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(et)for(let Ie=0,Xe=ge.length;Ie<Xe;Ie++){const nt=r.get(ge[Ie]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),u.memory.textures++)}if(I.samples>0&&Ge(I)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ie=0;Ie<ge.length;Ie++){const Xe=ge[Ie];K.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Ie]);const nt=a.convert(Xe.format,Xe.colorSpace),ve=a.convert(Xe.type),We=A(Xe.internalFormat,nt,ve,Xe.colorSpace,I.isXRRenderTarget===!0),ut=de(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,We,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,K.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),te(i.TEXTURE_CUBE_MAP,w);for(let Ie=0;Ie<6;Ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let Xe=0;Xe<w.mipmaps.length;Xe++)be(K.__webglFramebuffer[Ie][Xe],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Xe);else be(K.__webglFramebuffer[Ie],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(w)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(et){for(let Ie=0,Xe=ge.length;Ie<Xe;Ie++){const nt=ge[Ie],ve=r.get(nt);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),te(i.TEXTURE_2D,nt),be(K.__webglFramebuffer,I,nt,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),S(nt)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ie=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,ae.__webglTexture),te(Ie,w),w.mipmaps&&w.mipmaps.length>0)for(let Xe=0;Xe<w.mipmaps.length;Xe++)be(K.__webglFramebuffer[Xe],I,w,i.COLOR_ATTACHMENT0,Ie,Xe);else be(K.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,Ie,0);S(w)&&_(Ie),t.unbindTexture()}I.depthBuffer&&Lt(I)}function D(I){const w=I.textures;for(let K=0,ae=w.length;K<ae;K++){const ge=w[K];if(S(ge)){const ue=L(I),et=r.get(ge).__webglTexture;t.bindTexture(ue,et),_(ue),t.unbindTexture()}}}const Le=[],Se=[];function De(I){if(I.samples>0){if(Ge(I)===!1){const w=I.textures,K=I.width,ae=I.height;let ge=i.COLOR_BUFFER_BIT;const ue=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=r.get(I),Ie=w.length>1;if(Ie)for(let nt=0;nt<w.length;nt++)t.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer);const Xe=I.texture.mipmaps;Xe&&Xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let nt=0;nt<w.length;nt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,et.__webglColorRenderbuffer[nt]);const ve=r.get(w[nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,K,ae,0,0,K,ae,ge,i.NEAREST),f===!0&&(Le.length=0,Se.length=0,Le.push(i.COLOR_ATTACHMENT0+nt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Le.push(ue),Se.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let nt=0;nt<w.length;nt++){t.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,et.__webglColorRenderbuffer[nt]);const ve=r.get(w[nt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&f){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function de(I){return Math.min(o.maxSamples,I.samples)}function Ge(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ee(I){const w=u.render.frame;m.get(I)!==w&&(m.set(I,w),I.update())}function ze(I,w){const K=I.colorSpace,ae=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==co&&K!==br&&(bt.getTransfer(K)===It?(ae!==pi||ge!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function ft(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=$,this.resetTextureUnits=ie,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=V,this.rebindTextures=Mt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ge}function XA(i,e){function t(r,o=br){let a;const u=bt.getTransfer(o);if(r===Ji)return i.UNSIGNED_BYTE;if(r===od)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ad)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Hv)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Bv)return i.BYTE;if(r===zv)return i.SHORT;if(r===_a)return i.UNSIGNED_SHORT;if(r===sd)return i.INT;if(r===ls)return i.UNSIGNED_INT;if(r===Ai)return i.FLOAT;if(r===Pa)return i.HALF_FLOAT;if(r===Vv)return i.ALPHA;if(r===Gv)return i.RGB;if(r===pi)return i.RGBA;if(r===ya)return i.DEPTH_COMPONENT;if(r===Sa)return i.DEPTH_STENCIL;if(r===ld)return i.RED;if(r===ud)return i.RED_INTEGER;if(r===Wv)return i.RG;if(r===cd)return i.RG_INTEGER;if(r===hd)return i.RGBA_INTEGER;if(r===mu||r===gu||r===vu||r===_u)if(u===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===mu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===mu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_u)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xf||r===yf||r===Sf||r===Mf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===xf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ef||r===Tf||r===wf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ef||r===Tf)return u===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===wf)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===If||r===Nf||r===Uf||r===Ff||r===Of||r===kf||r===Bf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Af)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rf)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cf)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pf)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bf)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lf)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Df)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===If)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nf)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uf)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ff)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Of)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kf)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bf)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xu||r===zf||r===Hf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===xu)return u===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xv||r===Vf||r===Gf||r===Wf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===xu)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Vf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xa?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Cn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Qi({vertexShader:jA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new On(new Du(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $A extends fs{constructor(e,t){super();const r=this;let o=null,a=1,u=null,c="local-floor",f=1,d=null,m=null,g=null,v=null,x=null,M=null;const E=new qA,S=t.getContextAttributes();let _=null,L=null;const A=[],R=[],B=new Ne;let k=null;const U=new ni;U.viewport=new Zt;const H=new ni;H.viewport=new Zt;const b=[U,H],C=new dE;let F=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=A[Q];return pe===void 0&&(pe=new Hh,A[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=A[Q];return pe===void 0&&(pe=new Hh,A[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=A[Q];return pe===void 0&&(pe=new Hh,A[Q]=pe),pe.getHandSpace()};function $(Q){const pe=R.indexOf(Q.inputSource);if(pe===-1)return;const Re=A[pe];Re!==void 0&&(Re.update(Q.inputSource,Q.frame,d||u),Re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",he);for(let Q=0;Q<A.length;Q++){const pe=R[Q];pe!==null&&(R[Q]=null,A[Q].disconnect(pe))}F=null,ie=null,E.reset(),e.setRenderTarget(_),x=null,v=null,g=null,o=null,L=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Me=null,be=null;S.depth&&(be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=S.stencil?Sa:ya,Me=S.stencil?xa:ls);const Ye={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ye),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new cs(v.textureWidth,v.textureHeight,{format:pi,type:Ji,depthTexture:new r0(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Re={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,Re),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new cs(x.framebufferWidth,x.framebufferHeight,{format:pi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await o.requestReferenceSpace(c),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he(Q){for(let pe=0;pe<Q.removed.length;pe++){const Re=Q.removed[pe],Me=R.indexOf(Re);Me>=0&&(R[Me]=null,A[Me].disconnect(Re))}for(let pe=0;pe<Q.added.length;pe++){const Re=Q.added[pe];let Me=R.indexOf(Re);if(Me===-1){for(let Ye=0;Ye<A.length;Ye++)if(Ye>=R.length){R.push(Re),Me=Ye;break}else if(R[Ye]===null){R[Ye]=Re,Me=Ye;break}if(Me===-1)break}const be=A[Me];be&&be.connect(Re)}}const oe=new X,le=new X;function V(Q,pe,Re){oe.setFromMatrixPosition(pe.matrixWorld),le.setFromMatrixPosition(Re.matrixWorld);const Me=oe.distanceTo(le),be=pe.projectionMatrix.elements,Ye=Re.projectionMatrix.elements,qe=be[14]/(be[10]-1),Lt=be[14]/(be[10]+1),Mt=(be[9]+1)/be[5],pt=(be[9]-1)/be[5],D=(be[8]-1)/be[0],Le=(Ye[8]+1)/Ye[0],Se=qe*D,De=qe*Le,de=Me/(-D+Le),Ge=de*-D;if(pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ge),Q.translateZ(de),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ee=qe+de,ze=Lt+de,ft=Se-Ge,I=De+(Me-Ge),w=Mt*Lt/ze*Ee,K=pt*Lt/ze*Ee;Q.projectionMatrix.makePerspective(ft,I,w,K,Ee,ze),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let pe=Q.near,Re=Q.far;E.texture!==null&&(E.depthNear>0&&(pe=E.depthNear),E.depthFar>0&&(Re=E.depthFar)),C.near=H.near=U.near=pe,C.far=H.far=U.far=Re,(F!==C.near||ie!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,ie=C.far),U.layers.mask=Q.layers.mask|2,H.layers.mask=Q.layers.mask|4,C.layers.mask=U.layers.mask|H.layers.mask;const Me=Q.parent,be=C.cameras;fe(C,Me);for(let Ye=0;Ye<be.length;Ye++)fe(be[Ye],Me);be.length===2?V(C,U,H):C.projectionMatrix.copy(U.projectionMatrix),se(Q,C,Me)};function se(Q,pe,Re){Re===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(Re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ma*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let O=null;function te(Q,pe){if(m=pe.getViewerPose(d||u),M=pe,m!==null){const Re=m.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Me=!1;Re.length!==C.cameras.length&&(C.cameras.length=0,Me=!0);for(let qe=0;qe<Re.length;qe++){const Lt=Re[qe];let Mt=null;if(x!==null)Mt=x.getViewport(Lt);else{const D=g.getViewSubImage(v,Lt);Mt=D.viewport,qe===0&&(e.setRenderTargetTextures(L,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(L))}let pt=b[qe];pt===void 0&&(pt=new ni,pt.layers.enable(qe),pt.viewport=new Zt,b[qe]=pt),pt.matrix.fromArray(Lt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Lt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),qe===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Me===!0&&C.cameras.push(pt)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const qe=g.getDepthInformation(Re[0]);qe&&qe.isValid&&qe.texture&&E.init(e,qe,o.renderState)}}for(let Re=0;Re<A.length;Re++){const Me=R[Re],be=A[Re];Me!==null&&be!==void 0&&be.update(Me,pe,d||u)}O&&O(Q,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Oe=new d0;Oe.setAnimationLoop(te),this.setAnimationLoop=function(Q){O=Q},this.dispose=function(){}}}const ts=new Ri,ZA=new Ft;function KA(i,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Qv(i)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,L,A,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(S,_):_.isMeshToonMaterial?(a(S,_),g(S,_)):_.isMeshPhongMaterial?(a(S,_),m(S,_)):_.isMeshStandardMaterial?(a(S,_),v(S,_),_.isMeshPhysicalMaterial&&x(S,_,R)):_.isMeshMatcapMaterial?(a(S,_),M(S,_)):_.isMeshDepthMaterial?a(S,_):_.isMeshDistanceMaterial?(a(S,_),E(S,_)):_.isMeshNormalMaterial?a(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&c(S,_)):_.isPointsMaterial?f(S,_,L,A):_.isSpriteMaterial?d(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===kn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===kn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),A=L.envMap,R=L.envMapRotation;A&&(S.envMap.value=A,ts.copy(R),ts.x*=-1,ts.y*=-1,ts.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),S.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(ts)),S.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function c(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,L,A){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=A*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function x(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function E(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function JA(i,e,t,r){let o={},a={},u=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,A){const R=A.program;r.uniformBlockBinding(L,R)}function d(L,A){let R=o[L.id];R===void 0&&(M(L),R=m(L),o[L.id]=R,L.addEventListener("dispose",S));const B=A.program;r.updateUBOMapping(L,B);const k=e.render.frame;a[L.id]!==k&&(v(L),a[L.id]=k)}function m(L){const A=g();L.__bindingPointIndex=A;const R=i.createBuffer(),B=L.__size,k=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,B,k),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,R),R}function g(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const A=o[L.id],R=L.uniforms,B=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let k=0,U=R.length;k<U;k++){const H=Array.isArray(R[k])?R[k]:[R[k]];for(let b=0,C=H.length;b<C;b++){const F=H[b];if(x(F,k,b,B)===!0){const ie=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ce=0;for(let he=0;he<$.length;he++){const oe=$[he],le=E(oe);typeof oe=="number"||typeof oe=="boolean"?(F.__data[0]=oe,i.bufferSubData(i.UNIFORM_BUFFER,ie+ce,F.__data)):oe.isMatrix3?(F.__data[0]=oe.elements[0],F.__data[1]=oe.elements[1],F.__data[2]=oe.elements[2],F.__data[3]=0,F.__data[4]=oe.elements[3],F.__data[5]=oe.elements[4],F.__data[6]=oe.elements[5],F.__data[7]=0,F.__data[8]=oe.elements[6],F.__data[9]=oe.elements[7],F.__data[10]=oe.elements[8],F.__data[11]=0):(oe.toArray(F.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ie,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(L,A,R,B){const k=L.value,U=A+"_"+R;if(B[U]===void 0)return typeof k=="number"||typeof k=="boolean"?B[U]=k:B[U]=k.clone(),!0;{const H=B[U];if(typeof k=="number"||typeof k=="boolean"){if(H!==k)return B[U]=k,!0}else if(H.equals(k)===!1)return H.copy(k),!0}return!1}function M(L){const A=L.uniforms;let R=0;const B=16;for(let U=0,H=A.length;U<H;U++){const b=Array.isArray(A[U])?A[U]:[A[U]];for(let C=0,F=b.length;C<F;C++){const ie=b[C],$=Array.isArray(ie.value)?ie.value:[ie.value];for(let ce=0,he=$.length;ce<he;ce++){const oe=$[ce],le=E(oe),V=R%B,fe=V%le.boundary,se=V+fe;R+=fe,se!==0&&B-se<le.storage&&(R+=B-se),ie.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=R,R+=le.storage}}}const k=R%B;return k>0&&(R+=B-k),L.__size=R,L.__cache={},this}function E(L){const A={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(A.boundary=4,A.storage=4):L.isVector2?(A.boundary=8,A.storage=8):L.isVector3||L.isColor?(A.boundary=16,A.storage=12):L.isVector4?(A.boundary=16,A.storage=16):L.isMatrix3?(A.boundary=48,A.storage=48):L.isMatrix4?(A.boundary=64,A.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),A}function S(L){const A=L.target;A.removeEventListener("dispose",S);const R=u.indexOf(A.__bindingPointIndex);u.splice(R,1),i.deleteBuffer(o[A.id]),delete o[A.id],delete a[A.id]}function _(){for(const L in o)i.deleteBuffer(o[L]);u=[],o={},a={}}return{bind:f,update:d,dispose:_}}class QA{constructor(e={}){const{canvas:t=WS(),context:r=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,_=null;const L=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let B=!1;this._outputColorSpace=ti;let k=0,U=0,H=null,b=-1,C=null;const F=new Zt,ie=new Zt;let $=null;const ce=new wt(0);let he=0,oe=t.width,le=t.height,V=1,fe=null,se=null;const O=new Zt(0,0,oe,le),te=new Zt(0,0,oe,le);let Oe=!1;const Q=new i0;let pe=!1,Re=!1;const Me=new Ft,be=new Ft,Ye=new X,qe=new Zt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function pt(){return H===null?V:1}let D=r;function Le(P,j){return t.getContext(P,j)}try{const P={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rd}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",me,!1),D===null){const j="webgl2";if(D=Le(j,P),D===null)throw Le(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Se,De,de,Ge,Ee,ze,ft,I,w,K,ae,ge,ue,et,Ie,Xe,nt,ve,We,ut,st,Ue,ht,G;function Fe(){Se=new uw(D),Se.init(),Ue=new XA(D,Se),De=new nw(D,Se,e,Ue),de=new GA(D,Se),De.reverseDepthBuffer&&v&&de.buffers.depth.setReversed(!0),Ge=new fw(D),Ee=new bA,ze=new WA(D,Se,de,Ee,De,Ue,Ge),ft=new rw(R),I=new lw(R),w=new _E(D),ht=new ew(D,w),K=new cw(D,w,Ge,ht),ae=new pw(D,K,w,Ge),We=new dw(D,De,ze),Xe=new iw(Ee),ge=new PA(R,ft,I,Se,De,ht,Xe),ue=new KA(R,Ee),et=new DA,Ie=new kA(Se),ve=new QT(R,ft,I,de,ae,x,f),nt=new HA(R,ae,De),G=new JA(D,Ge,De,de),ut=new tw(D,Se,Ge),st=new hw(D,Se,Ge),Ge.programs=ge.programs,R.capabilities=De,R.extensions=Se,R.properties=Ee,R.renderLists=et,R.shadowMap=nt,R.state=de,R.info=Ge}Fe();const xe=new $A(R,D);this.xr=xe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=Se.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Se.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(oe,le,!1))},this.getSize=function(P){return P.set(oe,le)},this.setSize=function(P,j,ne=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=P,le=j,t.width=Math.floor(P*V),t.height=Math.floor(j*V),ne===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(oe*V,le*V).floor()},this.setDrawingBufferSize=function(P,j,ne){oe=P,le=j,V=ne,t.width=Math.floor(P*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(O)},this.setViewport=function(P,j,ne,Z){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,j,ne,Z),de.viewport(F.copy(O).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(te)},this.setScissor=function(P,j,ne,Z){P.isVector4?te.set(P.x,P.y,P.z,P.w):te.set(P,j,ne,Z),de.scissor(ie.copy(te).multiplyScalar(V).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(P){de.setScissorTest(Oe=P)},this.setOpaqueSort=function(P){fe=P},this.setTransparentSort=function(P){se=P},this.getClearColor=function(P){return P.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(P=!0,j=!0,ne=!0){let Z=0;if(P){let Y=!1;if(H!==null){const Ae=H.texture.format;Y=Ae===hd||Ae===cd||Ae===ud}if(Y){const Ae=H.texture.type,ke=Ae===Ji||Ae===ls||Ae===_a||Ae===xa||Ae===od||Ae===ad,$e=ve.getClearColor(),je=ve.getClearAlpha(),ct=$e.r,lt=$e.g,Ke=$e.b;ke?(M[0]=ct,M[1]=lt,M[2]=Ke,M[3]=je,D.clearBufferuiv(D.COLOR,0,M)):(E[0]=ct,E[1]=lt,E[2]=Ke,E[3]=je,D.clearBufferiv(D.COLOR,0,E))}else Z|=D.COLOR_BUFFER_BIT}j&&(Z|=D.DEPTH_BUFFER_BIT),ne&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ve.dispose(),et.dispose(),Ie.dispose(),Ee.dispose(),ft.dispose(),I.dispose(),ae.dispose(),ht.dispose(),G.dispose(),ge.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ms),xe.removeEventListener("sessionend",tr),bi.stop()};function He(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const P=Ge.autoReset,j=nt.enabled,ne=nt.autoUpdate,Z=nt.needsUpdate,Y=nt.type;Fe(),Ge.autoReset=P,nt.enabled=j,nt.autoUpdate=ne,nt.needsUpdate=Z,nt.type=Y}function me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Je(P){const j=P.target;j.removeEventListener("dispose",Je),mt(j)}function mt(P){Dt(P),Ee.remove(P)}function Dt(P){const j=Ee.get(P).programs;j!==void 0&&(j.forEach(function(ne){ge.releaseProgram(ne)}),P.isShaderMaterial&&ge.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,ne,Z,Y,Ae){j===null&&(j=Lt);const ke=Y.isMesh&&Y.matrixWorld.determinant()<0,$e=Da(P,j,ne,Z,Y);de.setMaterial(Z,ke);let je=ne.index,ct=1;if(Z.wireframe===!0){if(je=K.getWireframeAttribute(ne),je===void 0)return;ct=2}const lt=ne.drawRange,Ke=ne.attributes.position;let St=lt.start*ct,gt=(lt.start+lt.count)*ct;Ae!==null&&(St=Math.max(St,Ae.start*ct),gt=Math.min(gt,(Ae.start+Ae.count)*ct)),je!==null?(St=Math.max(St,0),gt=Math.min(gt,je.count)):Ke!=null&&(St=Math.max(St,0),gt=Math.min(gt,Ke.count));const kt=gt-St;if(kt<0||kt===1/0)return;ht.setup(Y,Z,$e,ne,je);let Ht,Tt=ut;if(je!==null&&(Ht=w.get(je),Tt=st,Tt.setIndex(Ht)),Y.isMesh)Z.wireframe===!0?(de.setLineWidth(Z.wireframeLinewidth*pt()),Tt.setMode(D.LINES)):Tt.setMode(D.TRIANGLES);else if(Y.isLine){let rt=Z.linewidth;rt===void 0&&(rt=1),de.setLineWidth(rt*pt()),Y.isLineSegments?Tt.setMode(D.LINES):Y.isLineLoop?Tt.setMode(D.LINE_LOOP):Tt.setMode(D.LINE_STRIP)}else Y.isPoints?Tt.setMode(D.POINTS):Y.isSprite&&Tt.setMode(D.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)so("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const rt=Y._multiDrawStarts,Yt=Y._multiDrawCounts,Et=Y._multiDrawCount,pn=je?w.get(je).bytesPerElement:1,ir=Ee.get(Z).currentProgram.getUniforms();for(let En=0;En<Et;En++)ir.setValue(D,"_gl_DrawID",En),Tt.render(rt[En]/pn,Yt[En])}else if(Y.isInstancedMesh)Tt.renderInstances(St,kt,Y.count);else if(ne.isInstancedBufferGeometry){const rt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Yt=Math.min(ne.instanceCount,rt);Tt.renderInstances(St,kt,Yt)}else Tt.render(St,kt)};function At(P,j,ne){P.transparent===!0&&P.side===qi&&P.forceSinglePass===!1?(P.side=kn,P.needsUpdate=!0,gs(P,j,ne),P.side=Nr,P.needsUpdate=!0,gs(P,j,ne),P.side=qi):gs(P,j,ne)}this.compile=function(P,j,ne=null){ne===null&&(ne=P),_=Ie.get(ne),_.init(j),A.push(_),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),P!==ne&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const Z=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let ke=0;ke<Ae.length;ke++){const $e=Ae[ke];At($e,ne,Y),Z.add($e)}else At(Ae,ne,Y),Z.add(Ae)}),_=A.pop(),Z},this.compileAsync=function(P,j,ne=null){const Z=this.compile(P,j,ne);return new Promise(Y=>{function Ae(){if(Z.forEach(function(ke){Ee.get(ke).currentProgram.isReady()&&Z.delete(ke)}),Z.size===0){Y(P);return}setTimeout(Ae,10)}Se.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Pn=null;function Mn(P){Pn&&Pn(P)}function ms(){bi.stop()}function tr(){bi.start()}const bi=new d0;bi.setAnimationLoop(Mn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(P){Pn=P,xe.setAnimationLoop(P),P===null?bi.stop():bi.start()},xe.addEventListener("sessionstart",ms),xe.addEventListener("sessionend",tr),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(j),j=xe.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,j,H),_=Ie.get(P,A.length),_.init(j),A.push(_),be.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(be),Re=this.localClippingEnabled,pe=Xe.init(this.clippingPlanes,Re),S=et.get(P,L.length),S.init(),L.push(S),xe.enabled===!0&&xe.isPresenting===!0){const Ae=R.xr.getDepthSensingMesh();Ae!==null&&Li(Ae,j,-1/0,R.sortObjects)}Li(P,j,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(fe,se),Mt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Mt&&ve.addToRenderList(S,P),this.info.render.frame++,pe===!0&&Xe.beginShadows();const ne=_.state.shadowsArray;nt.render(ne,P,j),pe===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=S.opaque,Y=S.transmissive;if(_.setupLights(),j.isArrayCamera){const Ae=j.cameras;if(Y.length>0)for(let ke=0,$e=Ae.length;ke<$e;ke++){const je=Ae[ke];Or(Z,Y,P,je)}Mt&&ve.render(P);for(let ke=0,$e=Ae.length;ke<$e;ke++){const je=Ae[ke];Fr(S,P,je,je.viewport)}}else Y.length>0&&Or(Z,Y,P,j),Mt&&ve.render(P),Fr(S,P,j);H!==null&&U===0&&(ze.updateMultisampleRenderTarget(H),ze.updateRenderTargetMipmap(H)),P.isScene===!0&&P.onAfterRender(R,P,j),ht.resetDefaultState(),b=-1,C=null,A.pop(),A.length>0?(_=A[A.length-1],pe===!0&&Xe.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Li(P,j,ne,Z){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)_.pushLight(P),P.castShadow&&_.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){Z&&qe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(be);const ke=ae.update(P),$e=P.material;$e.visible&&S.push(P,ke,$e,ne,qe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){const ke=ae.update(P),$e=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),qe.copy(P.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),qe.copy(ke.boundingSphere.center)),qe.applyMatrix4(P.matrixWorld).applyMatrix4(be)),Array.isArray($e)){const je=ke.groups;for(let ct=0,lt=je.length;ct<lt;ct++){const Ke=je[ct],St=$e[Ke.materialIndex];St&&St.visible&&S.push(P,ke,St,ne,qe.z,Ke)}}else $e.visible&&S.push(P,ke,$e,ne,qe.z,null)}}const Ae=P.children;for(let ke=0,$e=Ae.length;ke<$e;ke++)Li(Ae[ke],j,ne,Z)}function Fr(P,j,ne,Z){const Y=P.opaque,Ae=P.transmissive,ke=P.transparent;_.setupLightsView(ne),pe===!0&&Xe.setGlobalState(R.clippingPlanes,ne),Z&&de.viewport(F.copy(Z)),Y.length>0&&nr(Y,j,ne),Ae.length>0&&nr(Ae,j,ne),ke.length>0&&nr(ke,j,ne),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Or(P,j,ne,Z){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Z.id]===void 0&&(_.state.transmissionRenderTarget[Z.id]=new cs(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?Pa:Ji,minFilter:os,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[Z.id],ke=Z.viewport||F;Ae.setSize(ke.z*R.transmissionResolutionScale,ke.w*R.transmissionResolutionScale);const $e=R.getRenderTarget();R.setRenderTarget(Ae),R.getClearColor(ce),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),Mt&&ve.render(ne);const je=R.toneMapping;R.toneMapping=Dr;const ct=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),_.setupLightsView(Z),pe===!0&&Xe.setGlobalState(R.clippingPlanes,Z),nr(P,ne,Z),ze.updateMultisampleRenderTarget(Ae),ze.updateRenderTargetMipmap(Ae),Se.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Ke=0,St=j.length;Ke<St;Ke++){const gt=j[Ke],kt=gt.object,Ht=gt.geometry,Tt=gt.material,rt=gt.group;if(Tt.side===qi&&kt.layers.test(Z.layers)){const Yt=Tt.side;Tt.side=kn,Tt.needsUpdate=!0,ba(kt,ne,Z,Ht,Tt,rt),Tt.side=Yt,Tt.needsUpdate=!0,lt=!0}}lt===!0&&(ze.updateMultisampleRenderTarget(Ae),ze.updateRenderTargetMipmap(Ae))}R.setRenderTarget($e),R.setClearColor(ce,he),ct!==void 0&&(Z.viewport=ct),R.toneMapping=je}function nr(P,j,ne){const Z=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Ae=P.length;Y<Ae;Y++){const ke=P[Y],$e=ke.object,je=ke.geometry,ct=ke.group;let lt=ke.material;lt.allowOverride===!0&&Z!==null&&(lt=Z),$e.layers.test(ne.layers)&&ba($e,j,ne,je,lt,ct)}}function ba(P,j,ne,Z,Y,Ae){P.onBeforeRender(R,j,ne,Z,Y,Ae),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(R,j,ne,Z,P,Ae),Y.transparent===!0&&Y.side===qi&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,R.renderBufferDirect(ne,j,Z,Y,P,Ae),Y.side=Nr,Y.needsUpdate=!0,R.renderBufferDirect(ne,j,Z,Y,P,Ae),Y.side=qi):R.renderBufferDirect(ne,j,Z,Y,P,Ae),P.onAfterRender(R,j,ne,Z,Y,Ae)}function gs(P,j,ne){j.isScene!==!0&&(j=Lt);const Z=Ee.get(P),Y=_.state.lights,Ae=_.state.shadowsArray,ke=Y.state.version,$e=ge.getParameters(P,Y.state,Ae,j,ne),je=ge.getProgramCacheKey($e);let ct=Z.programs;Z.environment=P.isMeshStandardMaterial?j.environment:null,Z.fog=j.fog,Z.envMap=(P.isMeshStandardMaterial?I:ft).get(P.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,ct===void 0&&(P.addEventListener("dispose",Je),ct=new Map,Z.programs=ct);let lt=ct.get(je);if(lt!==void 0){if(Z.currentProgram===lt&&Z.lightsStateVersion===ke)return _i(P,$e),lt}else $e.uniforms=ge.getUniforms(P),P.onBeforeCompile($e,R),lt=ge.acquireProgram($e,je),ct.set(je,lt),Z.uniforms=$e.uniforms;const Ke=Z.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ke.clippingPlanes=Xe.uniform),_i(P,$e),Z.needsLights=Uu(P),Z.lightsStateVersion=ke,Z.needsLights&&(Ke.ambientLightColor.value=Y.state.ambient,Ke.lightProbe.value=Y.state.probe,Ke.directionalLights.value=Y.state.directional,Ke.directionalLightShadows.value=Y.state.directionalShadow,Ke.spotLights.value=Y.state.spot,Ke.spotLightShadows.value=Y.state.spotShadow,Ke.rectAreaLights.value=Y.state.rectArea,Ke.ltc_1.value=Y.state.rectAreaLTC1,Ke.ltc_2.value=Y.state.rectAreaLTC2,Ke.pointLights.value=Y.state.point,Ke.pointLightShadows.value=Y.state.pointShadow,Ke.hemisphereLights.value=Y.state.hemi,Ke.directionalShadowMap.value=Y.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ke.spotShadowMap.value=Y.state.spotShadowMap,Ke.spotLightMatrix.value=Y.state.spotLightMatrix,Ke.spotLightMap.value=Y.state.spotLightMap,Ke.pointShadowMap.value=Y.state.pointShadowMap,Ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=lt,Z.uniformsList=null,lt}function La(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=Su.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function _i(P,j){const ne=Ee.get(P);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function Da(P,j,ne,Z,Y){j.isScene!==!0&&(j=Lt),ze.resetTextureUnits();const Ae=j.fog,ke=Z.isMeshStandardMaterial?j.environment:null,$e=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:co,je=(Z.isMeshStandardMaterial?I:ft).get(Z.envMap||ke),ct=Z.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,lt=!!ne.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ke=!!ne.morphAttributes.position,St=!!ne.morphAttributes.normal,gt=!!ne.morphAttributes.color;let kt=Dr;Z.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(kt=R.toneMapping);const Ht=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Tt=Ht!==void 0?Ht.length:0,rt=Ee.get(Z),Yt=_.state.lights;if(pe===!0&&(Re===!0||P!==C)){const hn=P===C&&Z.id===b;Xe.setState(Z,P,hn)}let Et=!1;Z.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Yt.state.version||rt.outputColorSpace!==$e||Y.isBatchedMesh&&rt.batching===!1||!Y.isBatchedMesh&&rt.batching===!0||Y.isBatchedMesh&&rt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&rt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&rt.instancing===!1||!Y.isInstancedMesh&&rt.instancing===!0||Y.isSkinnedMesh&&rt.skinning===!1||!Y.isSkinnedMesh&&rt.skinning===!0||Y.isInstancedMesh&&rt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&rt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&rt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&rt.instancingMorph===!1&&Y.morphTexture!==null||rt.envMap!==je||Z.fog===!0&&rt.fog!==Ae||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Xe.numPlanes||rt.numIntersection!==Xe.numIntersection)||rt.vertexAlphas!==ct||rt.vertexTangents!==lt||rt.morphTargets!==Ke||rt.morphNormals!==St||rt.morphColors!==gt||rt.toneMapping!==kt||rt.morphTargetsCount!==Tt)&&(Et=!0):(Et=!0,rt.__version=Z.version);let pn=rt.currentProgram;Et===!0&&(pn=gs(Z,j,Y));let ir=!1,En=!1,Di=!1;const Ut=pn.getUniforms(),mn=rt.uniforms;if(de.useProgram(pn.program)&&(ir=!0,En=!0,Di=!0),Z.id!==b&&(b=Z.id,En=!0),ir||C!==P){de.buffers.depth.getReversed()?(Me.copy(P.projectionMatrix),jS(Me),YS(Me),Ut.setValue(D,"projectionMatrix",Me)):Ut.setValue(D,"projectionMatrix",P.projectionMatrix),Ut.setValue(D,"viewMatrix",P.matrixWorldInverse);const on=Ut.map.cameraPosition;on!==void 0&&on.setValue(D,Ye.setFromMatrixPosition(P.matrixWorld)),De.logarithmicDepthBuffer&&Ut.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ut.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,En=!0,Di=!0)}if(Y.isSkinnedMesh){Ut.setOptional(D,Y,"bindMatrix"),Ut.setOptional(D,Y,"bindMatrixInverse");const hn=Y.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ut.setValue(D,"boneTexture",hn.boneTexture,ze))}Y.isBatchedMesh&&(Ut.setOptional(D,Y,"batchingTexture"),Ut.setValue(D,"batchingTexture",Y._matricesTexture,ze),Ut.setOptional(D,Y,"batchingIdTexture"),Ut.setValue(D,"batchingIdTexture",Y._indirectTexture,ze),Ut.setOptional(D,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ut.setValue(D,"batchingColorTexture",Y._colorsTexture,ze));const sn=ne.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&We.update(Y,ne,pn),(En||rt.receiveShadow!==Y.receiveShadow)&&(rt.receiveShadow=Y.receiveShadow,Ut.setValue(D,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(mn.envMap.value=je,mn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&j.environment!==null&&(mn.envMapIntensity.value=j.environmentIntensity),En&&(Ut.setValue(D,"toneMappingExposure",R.toneMappingExposure),rt.needsLights&&Ia(mn,Di),Ae&&Z.fog===!0&&ue.refreshFogUniforms(mn,Ae),ue.refreshMaterialUniforms(mn,Z,V,le,_.state.transmissionRenderTarget[P.id]),Su.upload(D,La(rt),mn,ze)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Su.upload(D,La(rt),mn,ze),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ut.setValue(D,"center",Y.center),Ut.setValue(D,"modelViewMatrix",Y.modelViewMatrix),Ut.setValue(D,"normalMatrix",Y.normalMatrix),Ut.setValue(D,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const hn=Z.uniformsGroups;for(let on=0,Rt=hn.length;on<Rt;on++){const xi=hn[on];G.update(xi,pn),G.bind(xi,pn)}}return pn}function Ia(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Uu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(P,j,ne){const Z=Ee.get(P);Z.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ee.get(P.texture).__webglTexture=j,Ee.get(P.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ne,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,j){const ne=Ee.get(P);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0};const Na=D.createFramebuffer();this.setRenderTarget=function(P,j=0,ne=0){H=P,k=j,U=ne;let Z=!0,Y=null,Ae=!1,ke=!1;if(P){const je=Ee.get(P);if(je.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(je.__webglFramebuffer===void 0)ze.setupRenderTarget(P);else if(je.__hasExternalTextures)ze.rebindTextures(P,Ee.get(P.texture).__webglTexture,Ee.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ke=P.depthTexture;if(je.__boundDepthTexture!==Ke){if(Ke!==null&&Ee.has(Ke)&&(P.width!==Ke.image.width||P.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(P)}}const ct=P.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(ke=!0);const lt=Ee.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(lt[j])?Y=lt[j][ne]:Y=lt[j],Ae=!0):P.samples>0&&ze.useMultisampledRTT(P)===!1?Y=Ee.get(P).__webglMultisampledFramebuffer:Array.isArray(lt)?Y=lt[ne]:Y=lt,F.copy(P.viewport),ie.copy(P.scissor),$=P.scissorTest}else F.copy(O).multiplyScalar(V).floor(),ie.copy(te).multiplyScalar(V).floor(),$=Oe;if(ne!==0&&(Y=Na),de.bindFramebuffer(D.FRAMEBUFFER,Y)&&Z&&de.drawBuffers(P,Y),de.viewport(F),de.scissor(ie),de.setScissorTest($),Ae){const je=Ee.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+j,je.__webglTexture,ne)}else if(ke){const je=Ee.get(P.texture),ct=j;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,je.__webglTexture,ne,ct)}else if(P!==null&&ne!==0){const je=Ee.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,je.__webglTexture,ne)}b=-1},this.readRenderTargetPixels=function(P,j,ne,Z,Y,Ae,ke,$e=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ee.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je){de.bindFramebuffer(D.FRAMEBUFFER,je);try{const ct=P.textures[$e],lt=ct.format,Ke=ct.type;if(!De.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-Z&&ne>=0&&ne<=P.height-Y&&(P.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+$e),D.readPixels(j,ne,Z,Y,Ue.convert(lt),Ue.convert(Ke),Ae))}finally{const ct=H!==null?Ee.get(H).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(P,j,ne,Z,Y,Ae,ke,$e=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Ee.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je)if(j>=0&&j<=P.width-Z&&ne>=0&&ne<=P.height-Y){de.bindFramebuffer(D.FRAMEBUFFER,je);const ct=P.textures[$e],lt=ct.format,Ke=ct.type;if(!De.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,Ae.byteLength,D.STREAM_READ),P.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+$e),D.readPixels(j,ne,Z,Y,Ue.convert(lt),Ue.convert(Ke),0);const gt=H!==null?Ee.get(H).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,gt);const kt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await XS(D,kt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ae),D.deleteBuffer(St),D.deleteSync(kt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,j=null,ne=0){const Z=Math.pow(2,-ne),Y=Math.floor(P.image.width*Z),Ae=Math.floor(P.image.height*Z),ke=j!==null?j.x:0,$e=j!==null?j.y:0;ze.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,ne,0,0,ke,$e,Y,Ae),de.unbindTexture()};const Ua=D.createFramebuffer(),Fa=D.createFramebuffer();this.copyTextureToTexture=function(P,j,ne=null,Z=null,Y=0,Ae=null){Ae===null&&(Y!==0?(so("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Y,Y=0):Ae=0);let ke,$e,je,ct,lt,Ke,St,gt,kt;const Ht=P.isCompressedTexture?P.mipmaps[Ae]:P.image;if(ne!==null)ke=ne.max.x-ne.min.x,$e=ne.max.y-ne.min.y,je=ne.isBox3?ne.max.z-ne.min.z:1,ct=ne.min.x,lt=ne.min.y,Ke=ne.isBox3?ne.min.z:0;else{const sn=Math.pow(2,-Y);ke=Math.floor(Ht.width*sn),$e=Math.floor(Ht.height*sn),P.isDataArrayTexture?je=Ht.depth:P.isData3DTexture?je=Math.floor(Ht.depth*sn):je=1,ct=0,lt=0,Ke=0}Z!==null?(St=Z.x,gt=Z.y,kt=Z.z):(St=0,gt=0,kt=0);const Tt=Ue.convert(j.format),rt=Ue.convert(j.type);let Yt;j.isData3DTexture?(ze.setTexture3D(j,0),Yt=D.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ze.setTexture2DArray(j,0),Yt=D.TEXTURE_2D_ARRAY):(ze.setTexture2D(j,0),Yt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,j.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,j.unpackAlignment);const Et=D.getParameter(D.UNPACK_ROW_LENGTH),pn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ir=D.getParameter(D.UNPACK_SKIP_PIXELS),En=D.getParameter(D.UNPACK_SKIP_ROWS),Di=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ct),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);const Ut=P.isDataArrayTexture||P.isData3DTexture,mn=j.isDataArrayTexture||j.isData3DTexture;if(P.isDepthTexture){const sn=Ee.get(P),hn=Ee.get(j),on=Ee.get(sn.__renderTarget),Rt=Ee.get(hn.__renderTarget);de.bindFramebuffer(D.READ_FRAMEBUFFER,on.__webglFramebuffer),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let xi=0;xi<je;xi++)Ut&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.get(P).__webglTexture,Y,Ke+xi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.get(j).__webglTexture,Ae,kt+xi)),D.blitFramebuffer(ct,lt,ke,$e,St,gt,ke,$e,D.DEPTH_BUFFER_BIT,D.NEAREST);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Y!==0||P.isRenderTargetTexture||Ee.has(P)){const sn=Ee.get(P),hn=Ee.get(j);de.bindFramebuffer(D.READ_FRAMEBUFFER,Ua),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fa);for(let on=0;on<je;on++)Ut?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,Y,Ke+on):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,Y),mn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,hn.__webglTexture,Ae,kt+on):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,hn.__webglTexture,Ae),Y!==0?D.blitFramebuffer(ct,lt,ke,$e,St,gt,ke,$e,D.COLOR_BUFFER_BIT,D.NEAREST):mn?D.copyTexSubImage3D(Yt,Ae,St,gt,kt+on,ct,lt,ke,$e):D.copyTexSubImage2D(Yt,Ae,St,gt,ct,lt,ke,$e);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mn?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Yt,Ae,St,gt,kt,ke,$e,je,Tt,rt,Ht.data):j.isCompressedArrayTexture?D.compressedTexSubImage3D(Yt,Ae,St,gt,kt,ke,$e,je,Tt,Ht.data):D.texSubImage3D(Yt,Ae,St,gt,kt,ke,$e,je,Tt,rt,Ht):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ae,St,gt,ke,$e,Tt,rt,Ht.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ae,St,gt,Ht.width,Ht.height,Tt,Ht.data):D.texSubImage2D(D.TEXTURE_2D,Ae,St,gt,ke,$e,Tt,rt,Ht);D.pixelStorei(D.UNPACK_ROW_LENGTH,Et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ir),D.pixelStorei(D.UNPACK_SKIP_ROWS,En),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Di),Ae===0&&j.generateMipmaps&&D.generateMipmap(Yt),de.unbindTexture()},this.copyTextureToTexture3D=function(P,j,ne=null,Z=null,Y=0){return so('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,j,ne,Z,Y)},this.initRenderTarget=function(P){Ee.get(P).__webglFramebuffer===void 0&&ze.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ze.setTextureCube(P,0):P.isData3DTexture?ze.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ze.setTexture2DArray(P,0):ze.setTexture2D(P,0),de.unbindTexture()},this.resetState=function(){k=0,U=0,H=null,de.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}class eR extends vd{constructor(e,t={}){const r=t.font;if(r===void 0)super();else{const o=r.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(o,t)}this.type="TextGeometry"}}var fi;(i=>{i.posScale=800,i.sizeScale=a=>Math.min(Math.max(a,10),100),i.nodeIDtoPosition={};function e(a){const u=new n0(new Iu(.1,16,16),new da({color:30719}),a.nodes.length),c=new Ft;return a.nodes.forEach((f,d)=>{c.makeTranslation(f.position),c.scale(new X((0,i.sizeScale)(f.value),(0,i.sizeScale)(f.value),(0,i.sizeScale)(f.value))),u.setMatrixAt(d,c)}),u.instanceMatrix.needsUpdate=!0,u}i.GenerateGraphNodes=e;function t(a,u,c=-1){const f=[];if(c<0)a.links.forEach(g=>{f.push(i.nodeIDtoPosition[g.source],i.nodeIDtoPosition[g.target])});else{const g=a.paths[c];let v=c;for(let x=0;x<g.length;x++)f.push(i.nodeIDtoPosition[v],i.nodeIDtoPosition[g[x]]),v=g[x]}const d=new vi().setFromPoints(f),m=new Qi({uniforms:{camPos:{value:u.position},color:{value:new wt(16777215)}},vertexShader:`
                        varying vec3 vWorldPosition;

                        void main() {
                            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                            vWorldPosition = worldPosition.xyz;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        }
                    `,fragmentShader:`
                        precision mediump float;
                        uniform vec3 camPos;
                        uniform vec3 color;
                        uniform float fadeDistance;
                        uniform float minAlpha;
                        
                        varying vec3 vWorldPosition;
                        
                        void main() {
                            float distFromCamera = length(vWorldPosition - camPos);
                            float dist01 = 1.0 - clamp(distFromCamera / 1000.0, 0.0, 1.0);

                            gl_FragColor = vec4(color, dist01);
                        }
                    `,transparent:!0});return new wM(d,m)}i.GenerateGraphEdges=t;function r(a,u){const c=new eR(`${u.name}`,{font:a,size:.05*(0,i.sizeScale)(u.value),depth:0,curveSegments:12}),f=new On(c,new da({color:65535,depthTest:!1,depthWrite:!1,transparent:!0}));f.geometry.computeBoundingBox();const d=f.geometry.boundingBox,m=new _o(d.max.x-d.min.x+.4,d.max.y-d.min.y+.4,.01),g=new da({color:0,depthTest:!1,depthWrite:!1,transparent:!0}),v=new On(m,g);v.position.set((d.max.x+d.min.x)/2,(d.max.y+d.min.y)/2,-.001),v.renderOrder=1,f.renderOrder=2;const x=new la;return x.add(v),x.add(f),x}i.CreateInfoBoxMeshGeometry=r;function o(a,u){return a==0?u==="Fortnite"?"The Center of the Universe":"No path to Fortnite":`${a} hop${a>1?"s":""} away from Fortnite`}i.PrintHopsFromFortnite=o})(fi||(fi={}));var ga=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(m){m.preventDefault(),r(++i%e.children.length)},!1);function t(m){return e.appendChild(m.dom),m}function r(m){for(var g=0;g<e.children.length;g++)e.children[g].style.display=g===m?"block":"none";i=m}var o=(performance||Date).now(),a=o,u=0,c=t(new ga.Panel("FPS","#0ff","#002")),f=t(new ga.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=t(new ga.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:e,addPanel:t,showPanel:r,begin:function(){o=(performance||Date).now()},end:function(){u++;var m=(performance||Date).now();if(f.update(m-o,200),m>=a+1e3&&(c.update(u*1e3/(m-a),100),a=m,u=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){o=this.end()},domElement:e,setMode:r}};ga.Panel=function(i,e,t){var r=1/0,o=0,a=Math.round,u=a(window.devicePixelRatio||1),c=80*u,f=48*u,d=3*u,m=2*u,g=3*u,v=15*u,x=74*u,M=30*u,E=document.createElement("canvas");E.width=c,E.height=f,E.style.cssText="width:80px;height:48px";var S=E.getContext("2d");return S.font="bold "+9*u+"px Helvetica,Arial,sans-serif",S.textBaseline="top",S.fillStyle=t,S.fillRect(0,0,c,f),S.fillStyle=e,S.fillText(i,d,m),S.fillRect(g,v,x,M),S.fillStyle=t,S.globalAlpha=.9,S.fillRect(g,v,x,M),{dom:E,update:function(_,L){r=Math.min(r,_),o=Math.max(o,_),S.fillStyle=t,S.globalAlpha=1,S.fillRect(0,0,c,v),S.fillStyle=e,S.fillText(a(_)+" "+i+" ("+a(r)+"-"+a(o)+")",d,m),S.drawImage(E,g+u,v,x-u,M,g,v,x-u,M),S.fillRect(g+x-u,v,u,M),S.fillStyle=t,S.globalAlpha=.9,S.fillRect(g+x-u,v,u,a((1-_/L)*M))}}};const mv={type:"change"},yd={type:"start"},_0={type:"end"},fu=new Lu,gv=new Pr,tR=Math.cos(70*GS.DEG2RAD),tn=new X,Fn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qh=1e-6;class nR extends gE{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:io.ROTATE,MIDDLE:io.DOLLY,RIGHT:io.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new us,this._lastTargetPosition=new X,this._quat=new us().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gg,this._sphericalDelta=new Gg,this._scale=1,this._panOffset=new X,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new X,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rR.bind(this),this._onPointerDown=iR.bind(this),this._onPointerUp=sR.bind(this),this._onContextMenu=fR.bind(this),this._onMouseWheel=lR.bind(this),this._onKeyDown=uR.bind(this),this._onTouchStart=cR.bind(this),this._onTouchMove=hR.bind(this),this._onMouseDown=oR.bind(this),this._onMouseMove=aR.bind(this),this._interceptControlDown=dR.bind(this),this._interceptControlUp=pR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mv),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Fn:r>Math.PI&&(r-=Fn),o<-Math.PI?o+=Fn:o>Math.PI&&(o-=Fn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=u!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=tn.length();u=this._clampDistance(c*this._scale);const f=c-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),u=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(fu.origin.copy(this.object.position),fu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fu.direction))<tR?this.object.lookAt(this.target):(gv.setFromNormalAndCoplanarPoint(this.object.up,this.target),fu.intersectPlane(gv,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qh||this._lastTargetPosition.distanceToSquared(this.target)>Qh?(this.dispatchEvent(mv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Fn/60*this.autoRotateSpeed*e:Fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;tn.copy(o).sub(this.target);let a=tn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/r.clientHeight,this.object.matrix),this._panUp(2*t*a/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,a=t-r.top,u=r.width,c=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(r*r+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),a=.5*(e.pageY+r.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function iR(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function rR(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sR(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_0),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function oR(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case io.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Nt.DOLLY;break;case io.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Nt.ROTATE}break;case io.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(yd)}function aR(i){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function lR(i){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(i.preventDefault(),this.dispatchEvent(yd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(_0))}function uR(i){this.enabled!==!1&&this._handleKeyDown(i)}function cR(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case to.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Nt.TOUCH_ROTATE;break;case to.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case to.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Nt.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(yd)}function hR(i){switch(this._trackPointer(i),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Nt.NONE}}function fR(i){this.enabled!==!1&&i.preventDefault()}function dR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class mR extends _d{constructor(e){super(e)}load(e,t,r,o){const a=this,u=new hE(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(c){const f=a.parse(JSON.parse(c));t&&t(f)},r,o)}parse(e){return new gR(e)}}class gR{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const r=[],o=vR(e,t,this.data);for(let a=0,u=o.length;a<u;a++)r.push(...o[a].toShapes());return r}}function vR(i,e,t){const r=Array.from(i),o=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*o,u=[];let c=0,f=0;for(let d=0;d<r.length;d++){const m=r[d];if(m===`
`)c=0,f-=a;else{const g=_R(m,o,c,f,t);c+=g.offsetX,u.push(g.path)}}return u}function _R(i,e,t,r,o){const a=o.glyphs[i]||o.glyphs["?"];if(!a){console.error('THREE.Font: character "'+i+'" does not exists in font family '+o.familyName+".");return}const u=new mE;let c,f,d,m,g,v,x,M;if(a.o){const E=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let S=0,_=E.length;S<_;)switch(E[S++]){case"m":c=E[S++]*e+t,f=E[S++]*e+r,u.moveTo(c,f);break;case"l":c=E[S++]*e+t,f=E[S++]*e+r,u.lineTo(c,f);break;case"q":d=E[S++]*e+t,m=E[S++]*e+r,g=E[S++]*e+t,v=E[S++]*e+r,u.quadraticCurveTo(g,v,d,m);break;case"b":d=E[S++]*e+t,m=E[S++]*e+r,g=E[S++]*e+t,v=E[S++]*e+r,x=E[S++]*e+t,M=E[S++]*e+r,u.bezierCurveTo(g,v,x,M,d,m);break}}return{offsetX:a.ha*e,path:u}}let vv,ef=!1;function xR(){const i=re.useRef(null),e=re.useRef(null),t=re.useRef(null),r=re.useRef(null),o=re.useRef(null),a=re.useRef(null),[u,c]=re.useState(null),[f,d]=re.useState(!1);return re.useEffect(()=>{if(!i.current)return;const m=new _M;m.background=new wt(0);const g=new ni(75,i.current.clientWidth/i.current.clientHeight,.1,1e5);g.position.z=50,g.lookAt(0,0,0);const v=new QA({antialias:!0});v.setPixelRatio(window.devicePixelRatio),v.setSize(i.current.clientWidth,i.current.clientHeight),i.current.appendChild(v.domElement);let x=null;const M=new nR(g,v.domElement);M.enableDamping=!0,M.dampingFactor=.25,M.target.set(0,0,0),M.update();const E=new ga;E.showPanel(0),E.dom.style.position="absolute",E.dom.style.top="0px",E.dom.style.right="0px",E.dom.style.left="auto",E.dom.style.bottom="auto",i.current.appendChild(E.dom);const S=()=>{g.aspect=i.current.clientWidth/i.current.clientHeight,g.updateProjectionMatrix(),v.setSize(i.current.clientWidth,i.current.clientHeight)};window.addEventListener("resize",S),fetch(`${Uv}/graph`).then(F=>F.json()).then(F=>{F.nodes.forEach($=>{$.position=new X(...$.position.map(ce=>ce*fi.posScale)),fi.nodeIDtoPosition[$.id]=$.position}),e.current=F,m.add(fi.GenerateGraphNodes(F));const ie=fi.GenerateGraphEdges(F,g);a.current=ie??null,o.current=ie??null,a.current&&m.add(a.current)});const _=new pE,L=new Ne;let A=!1;const R=F=>{F.shiftKey&&(ef=!0,d(!0))},B=F=>{F.key==="Shift"&&(ef=!1,d(!1))},k=()=>{A=!1},U=F=>{const ie=v.domElement.getBoundingClientRect();L.x=(F.clientX-ie.left)/ie.width*2-1,L.y=-((F.clientY-ie.top)/ie.height)*2+1,A=F.clientX>=ie.left&&F.clientX<=ie.right&&F.clientY>=ie.top&&F.clientY<=ie.bottom};v.domElement.addEventListener("pointerleave",k),v.domElement.addEventListener("pointermove",U),document.addEventListener("keydown",R),document.addEventListener("keyup",B);const H=new On(new Iu(.101,16,16),new sE({color:30719,emissive:30719,emissiveIntensity:20})),b=()=>{if(E.begin(),M.update(),A){_.setFromCamera(L,g);const ie=_.intersectObjects(m.children).find($=>$.object instanceof n0);if(ie){const $=e.current.nodes[ie.instanceId];r.current=$,c($),x&&m.remove(x),x=fi.CreateInfoBoxMeshGeometry(vv,$),m.add(x),H.position.copy($.position);const ce=fi.sizeScale($.value);if(H.scale.set(ce,ce,ce),m.add(H),ef&&e.current&&a.current){m.remove(a.current);const he=fi.GenerateGraphEdges(e.current,g,$.id);a.current=he??null,a.current&&m.add(a.current)}else m.remove(a.current),a.current=o.current,m.add(a.current)}else m.remove(H),x&&(m.remove(x),x=null,r.current=null,c(null)),a.current&&(m.remove(a.current),a.current=o.current,m.add(a.current))}if(x&&r.current){const F=r.current,ie=F.position.clone(),$=ie.clone().sub(g.position).normalize(),ce=new X;g.getWorldDirection(ce),ce.cross(g.up).normalize();const he=ce.clone();he.sub($.clone().multiplyScalar(ce.dot($))),he.normalize();const oe=.15*fi.sizeScale(F.value);x.position.copy(ie.add(he.multiplyScalar(oe))),x.lookAt(g.position)}v.render(m,g),E.end(),t.current=requestAnimationFrame(b)};return new mR().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(F){vv=F,b()}),()=>{t.current&&cancelAnimationFrame(t.current),window.removeEventListener("resize",S),v.domElement.removeEventListener("pointerleave",k),v.domElement.removeEventListener("pointermove",U),document.addEventListener("keydown",R),document.addEventListener("keyup",B),document.body.classList.remove("no-scroll"),v.dispose()}},[]),Pe.jsx(Pe.Fragment,{children:Pe.jsxs("div",{className:"pageContainer",children:[Pe.jsx(Nv,{}),Pe.jsxs("div",{ref:i,className:"canvas",children:[u&&Pe.jsxs("div",{className:"panel selectionInfo",children:[Pe.jsx("h3",{children:u.name}),f&&e.current&&Pe.jsx("p",{children:fi.PrintHopsFromFortnite(e.current.paths[u.id].length,u.name)})]}),Pe.jsx("div",{className:"panel controlInfo",children:Pe.jsx(By,{})})]})]})})}rx.createRoot(document.getElementById("root")).render(Pe.jsx(xy,{children:Pe.jsxs(qx,{children:[Pe.jsx(nf,{path:"/",element:Pe.jsx(re.StrictMode,{children:Pe.jsx(Fy,{})})}),Pe.jsx(nf,{path:"3d-visualizer",element:Pe.jsx(xR,{})})]})}));
