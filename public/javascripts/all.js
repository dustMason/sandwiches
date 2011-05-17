/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);


// https://github.com/rails/jquery-ujs
(function(e){function d(k,h,j){var i=new e.Event(h);k.trigger(i,j);return i.result!==false}function a(k){var m,i,l,h=k.attr("data-type")||(e.ajaxSettings&&e.ajaxSettings.dataType);if(k.is("form")){m=k.attr("method");i=k.attr("action");l=k.serializeArray();var j=k.data("ujs:submit-button");if(j){l.push(j);k.data("ujs:submit-button",null)}}else{m=k.attr("data-method");i=k.attr("href");l=null}e.ajax({url:i,type:m||"GET",data:l,dataType:h,beforeSend:function(o,n){if(n.dataType===undefined){o.setRequestHeader("accept","*/*;q=0.5, "+n.accepts.script)}return d(k,"ajax:beforeSend",[o,n])},success:function(o,n,p){k.trigger("ajax:success",[o,n,p])},complete:function(o,n){k.trigger("ajax:complete",[o,n])},error:function(p,n,o){k.trigger("ajax:error",[p,n,o])}})}function b(l){var i=l.attr("href"),n=l.attr("data-method"),j=e("meta[name=csrf-token]").attr("content"),m=e("meta[name=csrf-param]").attr("content"),k=e('<form method="post" action="'+i+'"></form>'),h='<input name="_method" value="'+n+'" type="hidden" />';if(m!==undefined&&j!==undefined){h+='<input name="'+m+'" value="'+j+'" type="hidden" />'}k.hide().append(h).appendTo("body");k.submit()}function c(h){h.find("input[data-disable-with]").each(function(){var i=e(this);i.data("ujs:enable-with",i.val()).val(i.attr("data-disable-with")).attr("disabled","disabled")})}function g(h){h.find("input[data-disable-with]").each(function(){var i=e(this);i.val(i.data("ujs:enable-with")).removeAttr("disabled")})}function f(h){var i=h.attr("data-confirm");return !i||(d(h,"confirm")&&confirm(i))}e("a[data-confirm], a[data-method], a[data-remote]").live("click.rails",function(i){var h=e(this);if(!f(h)){return false}if(h.attr("data-remote")){a(h);return false}else{if(h.attr("data-method")){b(h);return false}}});e("form").live("submit.rails",function(i){var h=e(this);if(!f(h)){return false}if(h.attr("data-remote")){a(h);return false}else{c(h)}});e("form input[type=submit], form button[type=submit], form button:not([type])").live("click.rails",function(){var i=e(this);if(!f(i)){return false}var h=i.attr("name"),j=h?{name:h,value:i.val()}:null;i.closest("form").data("ujs:submit-button",j)});e("form").live("ajax:beforeSend.rails",function(h){if(this==h.target){c(e(this))}});e("form").live("ajax:complete.rails",function(h){if(this==h.target){g(e(this))}})})(jQuery);

/*
 * jQuery Form Plugin
 * version: 2.36 (07-NOV-2009)
 * @requires jQuery v1.2.6 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(b){b.fn.ajaxSubmit=function(s){if(!this.length){a("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof s=="function"){s={success:s}}var e=b.trim(this.attr("action"));if(e){e=(e.match(/^([^#]+)/)||[])[1]}e=e||window.location.href||"";s=b.extend({url:e,type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},s||{});var u={};this.trigger("form-pre-serialize",[this,s,u]);if(u.veto){a("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(s.beforeSerialize&&s.beforeSerialize(this,s)===false){a("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var m=this.formToArray(s.semantic);if(s.data){s.extraData=s.data;for(var f in s.data){if(s.data[f] instanceof Array){for(var g in s.data[f]){m.push({name:f,value:s.data[f][g]})}}else{m.push({name:f,value:s.data[f]})}}}if(s.beforeSubmit&&s.beforeSubmit(m,this,s)===false){a("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[m,this,s,u]);if(u.veto){a("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var d=b.param(m);if(s.type.toUpperCase()=="GET"){s.url+=(s.url.indexOf("?")>=0?"&":"?")+d;s.data=null}else{s.data=d}var t=this,l=[];if(s.resetForm){l.push(function(){t.resetForm()})}if(s.clearForm){l.push(function(){t.clearForm()})}if(!s.dataType&&s.target){var p=s.success||function(){};l.push(function(j){b(s.target).html(j).each(p,arguments)})}else{if(s.success){l.push(s.success)}}s.success=function(q,k){for(var n=0,j=l.length;n<j;n++){l[n].apply(s,[q,k,t])}};var c=b("input:file",this).fieldValue();var r=false;for(var i=0;i<c.length;i++){if(c[i]){r=true}}var h=false;if((c.length&&s.iframe!==false)||s.iframe||r||h){if(s.closeKeepAlive){b.get(s.closeKeepAlive,o)}else{o()}}else{b.ajax(s)}this.trigger("form-submit-notify",[this,s]);return this;function o(){var w=t[0];if(b(":input[name=submit]",w).length){alert('Error: Form elements must not be named "submit".');return}var q=b.extend({},b.ajaxSettings,s);var G=b.extend(true,{},b.extend(true,{},b.ajaxSettings),q);var v="jqFormIO"+(new Date().getTime());var C=b('<iframe id="'+v+'" name="'+v+'" src="'+q.iframeSrc+'" />');var E=C[0];C.css({position:"absolute",top:"-1000px",left:"-1000px"});var F={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;C.attr("src",q.iframeSrc)}};var D=q.global;if(D&&!b.active++){b.event.trigger("ajaxStart")}if(D){b.event.trigger("ajaxSend",[F,q])}if(G.beforeSend&&G.beforeSend(F,G)===false){G.global&&b.active--;return}if(F.aborted){return}var k=0;var z=0;var j=w.clk;if(j){var x=j.name;if(x&&!j.disabled){s.extraData=s.extraData||{};s.extraData[x]=j.value;if(j.type=="image"){s.extraData[name+".x"]=w.clk_x;s.extraData[name+".y"]=w.clk_y}}}setTimeout(function(){var J=t.attr("target"),H=t.attr("action");w.setAttribute("target",v);if(w.getAttribute("method")!="POST"){w.setAttribute("method","POST")}if(w.getAttribute("action")!=q.url){w.setAttribute("action",q.url)}if(!s.skipEncodingOverride){t.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(q.timeout){setTimeout(function(){z=true;A()},q.timeout)}var I=[];try{if(s.extraData){for(var K in s.extraData){I.push(b('<input type="hidden" name="'+K+'" value="'+s.extraData[K]+'" />').appendTo(w)[0])}}C.appendTo("body");E.attachEvent?E.attachEvent("onload",A):E.addEventListener("load",A,false);w.submit()}finally{w.setAttribute("action",H);J?w.setAttribute("target",J):t.removeAttr("target");b(I).remove()}},10);var y=50;function A(){if(k++){return}E.detachEvent?E.detachEvent("onload",A):E.removeEventListener("load",A,false);var H=true;try{if(z){throw"timeout"}var I,L;L=E.contentWindow?E.contentWindow.document:E.contentDocument?E.contentDocument:E.document;var M=q.dataType=="xml"||L.XMLDocument||b.isXMLDoc(L);a("isXml="+M);if(!M&&(L.body==null||L.body.innerHTML=="")){if(--y){k=0;setTimeout(A,100);return}a("Could not access iframe DOM after 50 tries.");return}F.responseText=L.body?L.body.innerHTML:null;F.responseXML=L.XMLDocument?L.XMLDocument:L;F.getResponseHeader=function(O){var N={"content-type":q.dataType};return N[O]};if(q.dataType=="json"||q.dataType=="script"){var n=L.getElementsByTagName("textarea")[0];if(n){F.responseText=n.value}else{var K=L.getElementsByTagName("pre")[0];if(K){F.responseText=K.innerHTML}}}else{if(q.dataType=="xml"&&!F.responseXML&&F.responseText!=null){F.responseXML=B(F.responseText)}}I=b.httpData(F,q.dataType)}catch(J){H=false;b.handleError(q,F,"error",J)}if(H){q.success(I,"success");if(D){b.event.trigger("ajaxSuccess",[F,q])}}if(D){b.event.trigger("ajaxComplete",[F,q])}if(D&&!--b.active){b.event.trigger("ajaxStop")}if(q.complete){q.complete(F,H?"success":"error")}setTimeout(function(){C.remove();F.responseXML=null},100)}function B(n,H){if(window.ActiveXObject){H=new ActiveXObject("Microsoft.XMLDOM");H.async="false";H.loadXML(n)}else{H=(new DOMParser()).parseFromString(n,"text/xml")}return(H&&H.documentElement&&H.documentElement.tagName!="parsererror")?H:null}}};b.fn.ajaxForm=function(c){return this.ajaxFormUnbind().bind("submit.form-plugin",function(){b(this).ajaxSubmit(c);return false}).bind("click.form-plugin",function(i){var h=i.target;var f=b(h);if(!(f.is(":submit,input:image"))){var d=f.closest(":submit");if(d.length==0){return}h=d[0]}var g=this;g.clk=h;if(h.type=="image"){if(i.offsetX!=undefined){g.clk_x=i.offsetX;g.clk_y=i.offsetY}else{if(typeof b.fn.offset=="function"){var j=f.offset();g.clk_x=i.pageX-j.left;g.clk_y=i.pageY-j.top}else{g.clk_x=i.pageX-h.offsetLeft;g.clk_y=i.pageY-h.offsetTop}}}setTimeout(function(){g.clk=g.clk_x=g.clk_y=null},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(q){var p=[];if(this.length==0){return p}var d=this[0];var h=q?d.getElementsByTagName("*"):d.elements;if(!h){return p}for(var k=0,m=h.length;k<m;k++){var e=h[k];var f=e.name;if(!f){continue}if(q&&d.clk&&e.type=="image"){if(!e.disabled&&d.clk==e){p.push({name:f,value:b(e).val()});p.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})}continue}var r=b.fieldValue(e,true);if(r&&r.constructor==Array){for(var g=0,c=r.length;g<c;g++){p.push({name:f,value:r[g]})}}else{if(r!==null&&typeof r!="undefined"){p.push({name:f,value:r})}}}if(!q&&d.clk){var l=b(d.clk),o=l[0],f=o.name;if(f&&!o.disabled&&o.type=="image"){p.push({name:f,value:l.val()});p.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})}}return p};b.fn.formSerialize=function(c){return b.param(this.formToArray(c))};b.fn.fieldSerialize=function(d){var c=[];this.each(function(){var h=this.name;if(!h){return}var f=b.fieldValue(this,d);if(f&&f.constructor==Array){for(var g=0,e=f.length;g<e;g++){c.push({name:h,value:f[g]})}}else{if(f!==null&&typeof f!="undefined"){c.push({name:this.name,value:f})}}});return b.param(c)};b.fn.fieldValue=function(h){for(var g=[],e=0,c=this.length;e<c;e++){var f=this[e];var d=b.fieldValue(f,h);if(d===null||typeof d=="undefined"||(d.constructor==Array&&!d.length)){continue}d.constructor==Array?b.merge(g,d):g.push(d)}return g};b.fieldValue=function(c,j){var e=c.name,p=c.type,q=c.tagName.toLowerCase();if(typeof j=="undefined"){j=true}if(j&&(!e||c.disabled||p=="reset"||p=="button"||(p=="checkbox"||p=="radio")&&!c.checked||(p=="submit"||p=="image")&&c.form&&c.form.clk!=c||q=="select"&&c.selectedIndex==-1)){return null}if(q=="select"){var k=c.selectedIndex;if(k<0){return null}var m=[],d=c.options;var g=(p=="select-one");var l=(g?k+1:d.length);for(var f=(g?k:0);f<l;f++){var h=d[f];if(h.selected){var o=h.value;if(!o){o=(h.attributes&&h.attributes.value&&!(h.attributes.value.specified))?h.text:h.value}if(g){return o}m.push(o)}}return m}return c.value};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var d=this.type,c=this.tagName.toLowerCase();if(d=="text"||d=="password"||c=="textarea"){this.value=""}else{if(d=="checkbox"||d=="radio"){this.checked=false}else{if(c=="select"){this.selectedIndex=-1}}}})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};b.fn.enable=function(c){if(c==undefined){c=true}return this.each(function(){this.disabled=!c})};b.fn.selected=function(c){if(c==undefined){c=true}return this.each(function(){var d=this.type;if(d=="checkbox"||d=="radio"){this.checked=c}else{if(this.tagName.toLowerCase()=="option"){var e=b(this).parent("select");if(c&&e[0]&&e[0].type=="select-one"){e.find("option").selected(false)}this.selected=c}}})};function a(){if(b.fn.ajaxSubmit.debug&&window.console&&window.console.log){window.console.log("[jquery.form] "+Array.prototype.join.call(arguments,""))}}})(jQuery);

// EZPZ Hint v1.1.1; Copyright (c) 2009 Mike Enriquez, http://theezpzway.com; Released under the MIT License
(function(a){a.fn.ezpz_hint=function(e){var f={hintClass:'ezpz-hint',hintName:'ezpz_hint_dummy_input'};var c=a.extend(f,e);return this.each(function(){var b;var d;text=a(this).attr('title');a('<input type="text" name="temp" value="" />').insertBefore(a(this));b=a(this).prev('input:first');b.attr('class',a(this).attr('class'));b.attr('size',a(this).attr('size'));b.attr('name',c.hintName);b.attr('autocomplete','off');b.attr('tabIndex',a(this).attr('tabIndex'));b.addClass(c.hintClass);b.val(text);a(this).hide();a(this).attr('autocomplete','off');b.focus(function(){d=a(this);a(this).next('input:first').show();a(this).next('input:first').focus();a(this).next('input:first').unbind('blur').blur(function(){if(a(this).val()==''){a(this).hide();d.show()}});a(this).hide()});if(a(this).val()!=''){b.focus()};a('form').submit(function(){a('.'+c.hintName).remove()})})}})(jQuery);

/**
 * jQuery Shuffle (http://mktgdept.com/jquery-shuffle)
 * A jQuery plugin for shuffling a set of elements
 *
 * v0.0.1 - 13 November 2009
 *
 * Copyright (c) 2009 Chad Smith (http://twitter.com/chadsmith)
 * Dual licensed under the MIT and GPL licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/gpl-license.php
 *
 * Shuffle elements using: $(selector).shuffle() or $.shuffle(selector)
 *
 **/
(function(d){d.fn.shuffle=function(c){c=[];return this.each(function(){c.push(d(this).clone(true))}).each(function(a,b){d(b).replaceWith(c[a=Math.floor(Math.random()*c.length)]);c.splice(a,1)})};d.shuffle=function(a){return d(a).shuffle()}})(jQuery);

/** @license

 SoundManager 2: JavaScript Sound for the Web
 ----------------------------------------------
 http://schillmania.com/projects/soundmanager2/

 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/soundmanager2/license.txt

 V2.97a.20110424
*/
(function(Y){function M(M,X){function i(c){return function(a){return!this._t||!this._t._a?null:c.call(this,a)}}function pa(){if(c.debugURLParam.test(N))c.debugMode=!0}this.flashVersion=8;this.debugFlash=this.debugMode=!1;this.useConsole=!0;this.waitForWindowLoad=this.consoleOnly=!1;this.nullURL="about:blank";this.allowPolling=!0;this.useFastPolling=!1;this.useMovieStar=!0;this.bgColor="#ffffff";this.useHighPerformance=!1;this.flashPollingInterval=null;this.flashLoadTimeout=1E3;this.wmode=null;this.allowScriptAccess=
"always";this.useHTML5Audio=this.useFlashBlock=!1;this.html5Test=/^probably$/i;this.useGlobalHTML5Audio=!0;this.requireFlash=!1;this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!0},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave",
"audio/x-wav"],required:!1}};this.defaultOptions={autoLoad:!1,stream:!0,autoPlay:!1,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onstop:null,onfailure:null,onfinish:null,onbeforefinish:null,onbeforefinishtime:5E3,onbeforefinishcomplete:null,onjustbeforefinish:null,onjustbeforefinishtime:200,multiShot:!0,multiShotEvents:!1,position:null,pan:0,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,
useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.version=null;this.versionNumber="V2.97a.20110424";this.movieURL=null;this.url=M||null;this.altURL=null;this.enabled=this.swfLoaded=!1;this.o=null;this.movieID="sm2-container";this.id=X||"sm2movie";this.swfCSS={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",
highPerf:"high_performance",flashDebug:"flash_debug"};this.oMC=null;this.sounds={};this.soundIDs=[];this.muted=!1;this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.didFlashBlock=this.specialWmodeCase=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.baseMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.netStreamMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.netStreamTypes=["aac","flv","mov","mp4","m4v",
"f4v","m4a","mp4v","3gp","3g2"];this.netStreamPattern=RegExp("\\.("+this.netStreamTypes.join("|")+")(\\?.*)?$","i");this.mimePattern=this.baseMimeTypes;this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.hasHTML5=null;this.html5={usingFlash:null};this.ignoreFlash=!1;var Z,c=this,y,n=navigator.userAgent,h=Y,N=h.location.href.toString(),k=this.flashVersion,g=document,$,O,r=[],E=!1,F=!1,m=!1,t=!1,qa=!1,G,o,aa,u,z,ba,P,ra,ca,v,sa,H,A,da,ea,Q,fa,ta,ua,R,
va,I=null,ga=null,w,ha,B,S,T,ia,j,U=!1,ja=!1,wa,xa,x=null,ya,V,p=!1,J,s,ka,za,l,Da=Array.prototype.slice,K=!1,la,C,Aa,Ba=n.match(/pre\//i),Ea=n.match(/(ipad|iphone|ipod)/i);n.match(/mobile/i);var q=n.match(/msie/i),Fa=n.match(/webkit/i),L=n.match(/safari/i)&&!n.match(/chrome/i),Ga=n.match(/opera/i),ma=!N.match(/usehtml5audio/i)&&!N.match(/sm2\-ignorebadua/i)&&L&&n.match(/OS X 10_6_([3-9])/i),na=typeof g.hasFocus!=="undefined"?g.hasFocus():null,D=typeof g.hasFocus==="undefined"&&L,Ca=!D;this._use_maybe=
N.match(/sm2\-useHTML5Maybe\=1/i);this._overHTTP=g.location?g.location.protocol.match(/http/i):null;this._http=!this._overHTTP?"http:":"";this.useAltURL=!this._overHTTP;this._global_a=null;if(Ea||Ba)c.useHTML5Audio=!0,c.ignoreFlash=!0,c.useGlobalHTML5Audio&&(K=!0);if(Ba||this._use_maybe)c.html5Test=/^(probably|maybe)$/i;this.supported=this.ok=function(){return x?m&&!t:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(c){return q?h[c]:L?y(c)||g[c]:y(c)};this.createSound=function(b){function a(){e=
S(e);c.sounds[d.id]=new Z(d);c.soundIDs.push(d.id);return c.sounds[d.id]}var e=null,f=null,d=null;if(!m||!c.ok())return ia("soundManager.createSound(): "+w(!m?"notReady":"notOK")),!1;arguments.length===2&&(b={id:arguments[0],url:arguments[1]});d=e=o(b);if(j(d.id,!0))return c.sounds[d.id];if(V(d))f=a(),f._setup_html5(d);else{if(k>8&&c.useMovieStar){if(d.isMovieStar===null)d.isMovieStar=d.serverURL||d.type&&d.type.match(c.netStreamPattern)||d.url.match(c.netStreamPattern)?!0:!1;if(d.isMovieStar&&d.usePeakData)d.usePeakData=
!1}d=T(d,"soundManager.createSound(): ");f=a();if(k===8)c.o._createSound(d.id,d.onjustbeforefinishtime,d.loops||1,d.usePolicyFile);else if(c.o._createSound(d.id,d.url,d.onjustbeforefinishtime,d.usePeakData,d.useWaveformData,d.useEQData,d.isMovieStar,d.isMovieStar?d.bufferTime:!1,d.loops||1,d.serverURL,d.duration||null,d.autoPlay,!0,d.autoLoad,d.usePolicyFile),!d.serverURL)f.connected=!0,d.onconnect&&d.onconnect.apply(f);(d.autoLoad||d.autoPlay)&&!d.serverURL&&f.load(d)}d.autoPlay&&!d.serverURL&&f.play();
return f};this.destroySound=function(b,a){if(!j(b))return!1;var e=c.sounds[b],f;e._iO={};e.stop();e.unload();for(f=0;f<c.soundIDs.length;f++)if(c.soundIDs[f]===b){c.soundIDs.splice(f,1);break}a||e.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,a){if(!j(b))return!1;return c.sounds[b].load(a)};this.unload=function(b){if(!j(b))return!1;return c.sounds[b].unload()};this.start=this.play=function(b,a){if(!m||!c.ok())return ia("soundManager.play(): "+w(!m?"notReady":"notOK")),!1;if(!j(b))return a instanceof
Object||(a={url:a}),a&&a.url?(a.id=b,c.createSound(a).play()):!1;return c.sounds[b].play(a)};this.setPosition=function(b,a){if(!j(b))return!1;return c.sounds[b].setPosition(a)};this.stop=function(b){if(!j(b))return!1;return c.sounds[b].stop()};this.stopAll=function(){for(var b in c.sounds)c.sounds[b]instanceof Z&&c.sounds[b].stop()};this.pause=function(b){if(!j(b))return!1;return c.sounds[b].pause()};this.pauseAll=function(){for(var b=c.soundIDs.length;b--;)c.sounds[c.soundIDs[b]].pause()};this.resume=
function(b){if(!j(b))return!1;return c.sounds[b].resume()};this.resumeAll=function(){for(var b=c.soundIDs.length;b--;)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){if(!j(b))return!1;return c.sounds[b].togglePause()};this.setPan=function(b,a){if(!j(b))return!1;return c.sounds[b].setPan(a)};this.setVolume=function(b,a){if(!j(b))return!1;return c.sounds[b].setVolume(a)};this.mute=function(b){var a=0;typeof b!=="string"&&(b=null);if(b){if(!j(b))return!1;return c.sounds[b].mute()}else{for(a=
c.soundIDs.length;a--;)c.sounds[c.soundIDs[a]].mute();c.muted=!0}return!0};this.muteAll=function(){c.mute()};this.unmute=function(b){typeof b!=="string"&&(b=null);if(b){if(!j(b))return!1;return c.sounds[b].unmute()}else{for(b=c.soundIDs.length;b--;)c.sounds[c.soundIDs[b]].unmute();c.muted=!1}return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(b){if(!j(b))return!1;return c.sounds[b].toggleMute()};this.getMemoryUse=function(){if(k===8)return 0;if(c.o)return parseInt(c.o._getMemoryUse(),
10)};this.disable=function(b){typeof b==="undefined"&&(b=!1);if(t)return!1;t=!0;for(var a=c.soundIDs.length;a--;)ua(c.sounds[c.soundIDs[a]]);G(b);l.remove(h,"load",z);return!0};this.canPlayMIME=function(b){var a;c.hasHTML5&&(a=J({type:b}));return!x||a?a:b?b.match(c.mimePattern)?!0:!1:null};this.canPlayURL=function(b){var a;c.hasHTML5&&(a=J(b));return!x||a?a:b?b.match(c.filePattern)?!0:!1:null};this.canPlayLink=function(b){if(typeof b.type!=="undefined"&&b.type&&c.canPlayMIME(b.type))return!0;return c.canPlayURL(b.href)};
this.getSoundById=function(b){if(!b)throw Error("soundManager.getSoundById(): sID is null/undefined");return c.sounds[b]};this.onready=function(c,a){if(c&&c instanceof Function)return a||(a=h),aa("onready",c,a),u(),!0;else throw w("needFunction","onready");};this.ontimeout=function(c,a){if(c&&c instanceof Function)return a||(a=h),aa("ontimeout",c,a),u({type:"ontimeout"}),!0;else throw w("needFunction","ontimeout");};this.getMoviePercent=function(){return c.o&&typeof c.o.PercentLoaded!=="undefined"?
c.o.PercentLoaded():null};this._wD=this._writeDebug=function(){return!0};this._debug=function(){};this.reboot=function(){var b,a;for(b=c.soundIDs.length;b--;)c.sounds[c.soundIDs[b]].destruct();try{if(q)ga=c.o.innerHTML;I=c.o.parentNode.removeChild(c.o)}catch(e){}ga=I=null;c.enabled=m=U=ja=E=F=t=c.swfLoaded=!1;c.soundIDs=c.sounds=[];c.o=null;for(b in r)if(r.hasOwnProperty(b))for(a=r[b].length;a--;)r[b][a].fired=!1;h.setTimeout(function(){c.beginDelayedInit()},20)};this.destruct=function(){c.disable(!0)};
this.beginDelayedInit=function(){qa=!0;A();setTimeout(sa,20);P()};this._html5_events={abort:i(function(){}),canplay:i(function(){this._t._onbufferchange(0);var c=!isNaN(this._t.position)?this._t.position/1E3:null;this._t._html5_canplay=!0;if(this._t.position&&this.currentTime!==c)try{this.currentTime=c}catch(a){}}),load:i(function(){this._t.loaded||(this._t._onbufferchange(0),this._t._whileloading(this._t.bytesTotal,this._t.bytesTotal,this._t._get_html5_duration()),this._t._onload(!0))}),emptied:i(function(){}),
ended:i(function(){this._t._onfinish()}),error:i(function(){this._t._onload(!1)}),loadeddata:i(function(){}),loadedmetadata:i(function(){}),loadstart:i(function(){this._t._onbufferchange(1)}),play:i(function(){this._t._onbufferchange(0)}),playing:i(function(){this._t._onbufferchange(0)}),progress:i(function(b){if(this._t.loaded)return!1;var a,e=0,f=b.type==="progress",d=b.target.buffered;a=b.loaded||0;var oa=b.total||1;if(d&&d.length){for(a=d.length;a--;)e=d.end(a)-d.start(a);a=e/b.target.duration;
f&&isNaN(a)}isNaN(a)||(this._t._onbufferchange(0),this._t._whileloading(a,oa,this._t._get_html5_duration()),a&&oa&&a===oa&&c._html5_events.load.call(this,b))}),ratechange:i(function(){}),suspend:i(function(b){c._html5_events.progress.call(this,b)}),stalled:i(function(){}),timeupdate:i(function(){this._t._onTimer()}),waiting:i(function(){this._t._onbufferchange(1)})};Z=function(b){var a=this,e,f,d;this.sID=b.id;this.url=b.url;this._iO=this.instanceOptions=this.options=o(b);this.pan=this.options.pan;
this.volume=this.options.volume;this._lastURL=null;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};this._debug();this.load=function(b){var d=null;if(typeof b!=="undefined")a._iO=o(b,a.options),a.instanceOptions=a._iO;else if(b=a.options,a._iO=b,a.instanceOptions=a._iO,a._lastURL&&a._lastURL!==a.url)a._iO.url=a.url,a.url=null;if(!a._iO.url)a._iO.url=a.url;if(a._iO.url===a.url&&a.readyState!==0&&a.readyState!==2)return a;a._lastURL=a.url;a.loaded=!1;a.readyState=1;a.playState=0;if(V(a._iO)){if(d=
a._setup_html5(a._iO),!d._called_load)d.load(),d._called_load=!0,a._iO.autoPlay&&a.play()}else try{a.isHTML5=!1,a._iO=T(S(a._iO)),k===8?c.o._load(a.sID,a._iO.url,a._iO.stream,a._iO.autoPlay,a._iO.whileloading?1:0,a._iO.loops||1,a._iO.usePolicyFile):c.o._load(a.sID,a._iO.url,a._iO.stream?!0:!1,a._iO.autoPlay?!0:!1,a._iO.loops||1,a._iO.autoLoad?!0:!1,a._iO.usePolicyFile)}catch(e){fa()}return a};this.unload=function(){if(a.readyState!==0){if(a.isHTML5){if(f(),a._a)a._a.pause(),a._a.src=""}else k===8?
c.o._unload(a.sID,c.nullURL):c.o._unload(a.sID);e()}return a};this.destruct=function(b){if(a.isHTML5){if(f(),a._a)a._a.pause(),a._a.src="",K||a._remove_html5_events()}else a._iO.onfailure=null,c.o._destroySound(a.sID);b||c.destroySound(a.sID,!0)};this.start=this.play=function(b,W){var e,W=W===void 0?!0:W;b||(b={});a._iO=o(b,a._iO);a._iO=o(a._iO,a.options);a.instanceOptions=a._iO;if(a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;V(a._iO)&&(a._setup_html5(a._iO),d());if(a.playState===
1&&!a.paused)if(e=a._iO.multiShot)a.isHTML5&&a.setPosition(a._iO.position);else return a;if(!a.loaded)if(a.readyState===0){if(!a.isHTML5)a._iO.autoPlay=!0;a.load(a._iO)}else if(a.readyState===2)return a;if(a.paused&&a.position&&a.position>0)a.resume();else{a.playState=1;a.paused=!1;(!a.instanceCount||a._iO.multiShotEvents||k>8&&!a.isHTML5&&!a.getAutoPlay())&&a.instanceCount++;a.position=typeof a._iO.position!=="undefined"&&!isNaN(a._iO.position)?a._iO.position:0;if(!a.isHTML5)a._iO=T(S(a._iO));if(a._iO.onplay&&
W)a._iO.onplay.apply(a),a._onplay_called=!0;a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?(d(),a._setup_html5().play()):c.o._start(a.sID,a._iO.loops||1,k===9?a.position:a.position/1E3)}return a};this.stop=function(b){if(a.playState===1){a._onbufferchange(0);a.resetOnPosition(0);if(!a.isHTML5)a.playState=0;a.paused=!1;a._iO.onstop&&a._iO.onstop.apply(a);if(a.isHTML5){if(a._a)a.setPosition(0),a._a.pause(),a.playState=0,a._onTimer(),f(),a.unload()}else c.o._stop(a.sID,b),a._iO.serverURL&&
a.unload();a.instanceCount=0;a._iO={}}return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5?a._a&&b&&a.play():c.o._setAutoPlay(a.sID,b);b&&!a.instanceCount&&a.readyState===1&&a.instanceCount++};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(b){b===void 0&&(b=0);var d=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,Math.max(b,0));a.position=d;b=a.position/1E3;a.resetOnPosition(a.position);a._iO.position=d;if(a.isHTML5){if(a._a&&a._html5_canplay&&
a._a.currentTime!==b)try{a._a.currentTime=b}catch(e){}}else b=k===9?a.position:b,a.readyState&&a.readyState!==2&&c.o._setPosition(a.sID,b,a.paused||!a.playState);a.isHTML5&&a.paused&&a._onTimer(!0);return a};this.pause=function(b){if(a.paused||a.playState===0&&a.readyState!==1)return a;a.paused=!0;a.isHTML5?(a._setup_html5().pause(),f()):(b||b===void 0)&&c.o._pause(a.sID);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?
(a._setup_html5().play(),d()):(a._iO.isMovieStar&&a.setPosition(a.position),c.o._pause(a.sID));!a._onplay_called&&a._iO.onplay?(a._iO.onplay.apply(a),a._onplay_called=!0):a._iO.onresume&&a._iO.onresume.apply(a);return a};this.togglePause=function(){if(a.playState===0)return a.play({position:k===9&&!a.isHTML5?a.position:a.position/1E3}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,d){typeof b==="undefined"&&(b=0);typeof d==="undefined"&&(d=!1);a.isHTML5||c.o._setPan(a.sID,b);a._iO.pan=
b;if(!d)a.pan=b,a.options.pan=b;return a};this.setVolume=function(b,d){typeof b==="undefined"&&(b=100);typeof d==="undefined"&&(d=!1);if(a.isHTML5){if(a._a)a._a.volume=Math.max(0,Math.min(1,b/100))}else c.o._setVolume(a.sID,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;if(!d)a.volume=b,a.options.volume=b;return a};this.mute=function(){a.muted=!0;if(a.isHTML5){if(a._a)a._a.muted=!0}else c.o._setVolume(a.sID,0);return a};this.unmute=function(){a.muted=!1;var b=typeof a._iO.volume!=="undefined";if(a.isHTML5){if(a._a)a._a.muted=
!1}else c.o._setVolume(a.sID,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=function(c,b,d){a._onPositionItems.push({position:c,method:b,scope:typeof d!=="undefined"?d:a,fired:!1});return a};this.processOnPosition=function(){var b,d;b=a._onPositionItems.length;if(!b||!a.playState||a._onPositionFired>=b)return!1;for(;b--;)if(d=a._onPositionItems[b],!d.fired&&a.position>=d.position)d.method.apply(d.scope,[d.position]),d.fired=
!0,c._onPositionFired++;return!0};this.resetOnPosition=function(b){var d,e;d=a._onPositionItems.length;if(!d)return!1;for(;d--;)if(e=a._onPositionItems[d],e.fired&&b<=e.position)e.fired=!1,c._onPositionFired--;return!0};this._onTimer=function(c){var b={};if(a._hasTimer||c)return a._a&&(c||(a.playState>0||a.readyState===1)&&!a.paused)?(a.duration=a._get_html5_duration(),a.durationEstimate=a.duration,c=a._a.currentTime?a._a.currentTime*1E3:0,a._whileplaying(c,b,b,b,b),!0):!1};this._get_html5_duration=
function(){var c=a._a?a._a.duration*1E3:a._iO?a._iO.duration:void 0;return c&&!isNaN(c)&&c!==Infinity?c:a._iO?a._iO.duration:null};d=function(){a.isHTML5&&wa(a)};f=function(){a.isHTML5&&xa(a)};e=function(){a._onPositionItems=[];a._onPositionFired=0;a._hasTimer=null;a._onplay_called=!1;a._a=null;a._html5_canplay=!1;a.bytesLoaded=null;a.bytesTotal=null;a.position=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.failures=0;a.loaded=!1;a.playState=0;a.paused=!1;a.readyState=
0;a.muted=!1;a.didBeforeFinish=!1;a.didJustBeforeFinish=!1;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.eqData=[];a.eqData.left=[];a.eqData.right=[]};e();this._setup_html5=function(b){var b=o(a._iO,b),d=K?c._global_a:a._a;decodeURI(b.url);var f=d&&d._t?d._t.instanceOptions:null;if(d){if(d._t&&f.url===b.url&&(!a._lastURL||a._lastURL===f.url))return d;K&&d._t&&d._t.playState&&b.url!==f.url&&d._t.stop();e();d.src=b.url;a.url=
b.url;a._lastURL=b.url;d._called_load=!1}else if(d=new Audio(b.url),d._called_load=!1,K)c._global_a=d;a.isHTML5=!0;a._a=d;d._t=a;a._add_html5_events();d.loop=b.loops>1?"loop":"";b.autoLoad||b.autoPlay?(d.autobuffer="auto",d.preload="auto",a.load(),d._called_load=!0):(d.autobuffer=!1,d.preload="none");d.loop=b.loops>1?"loop":"";return d};this._add_html5_events=function(){if(a._a._added_events)return!1;var b;a._a._added_events=!0;for(b in c._html5_events)c._html5_events.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,
c._html5_events[b],!1);return!0};this._remove_html5_events=function(){a._a._added_events=!1;for(var b in c._html5_events)c._html5_events.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,c._html5_events[b],!1)};this._whileloading=function(c,b,d,e){a.bytesLoaded=c;a.bytesTotal=b;a.duration=Math.floor(d);a.bufferLength=e;if(a._iO.isMovieStar)a.durationEstimate=a.duration;else if(a.durationEstimate=a._iO.duration?a.duration>a._iO.duration?a.duration:a._iO.duration:parseInt(a.bytesTotal/a.bytesLoaded*
a.duration,10),a.durationEstimate===void 0)a.durationEstimate=a.duration;a.readyState!==3&&a._iO.whileloading&&a._iO.whileloading.apply(a)};this._onid3=function(c,b){var d=[],e,f;e=0;for(f=c.length;e<f;e++)d[c[e]]=b[e];a.id3=o(a.id3,d);a._iO.onid3&&a._iO.onid3.apply(a)};this._whileplaying=function(b,d,e,f,g){if(isNaN(b)||b===null)return!1;a.playState===0&&b>0&&(b=0);a.position=b;a.processOnPosition();if(k>8&&!a.isHTML5){if(a._iO.usePeakData&&typeof d!=="undefined"&&d)a.peakData={left:d.leftPeak,right:d.rightPeak};
if(a._iO.useWaveformData&&typeof e!=="undefined"&&e)a.waveformData={left:e.split(","),right:f.split(",")};if(a._iO.useEQData&&typeof g!=="undefined"&&g&&g.leftEQ&&(b=g.leftEQ.split(","),a.eqData=b,a.eqData.left=b,typeof g.rightEQ!=="undefined"&&g.rightEQ))a.eqData.right=g.rightEQ.split(",")}a.playState===1&&(!a.isHTML5&&c.flashVersion===8&&!a.position&&a.isBuffering&&a._onbufferchange(0),a._iO.whileplaying&&a._iO.whileplaying.apply(a),(a.loaded||!a.loaded&&a._iO.isMovieStar)&&a._iO.onbeforefinish&&
a._iO.onbeforefinishtime&&!a.didBeforeFinish&&a.duration-a.position<=a._iO.onbeforefinishtime&&a._onbeforefinish());return!0};this._onconnect=function(b){b=b===1;if(a.connected=b)a.failures=0,j(a.sID)&&(a.getAutoPlay()?a.play(void 0,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._onload=function(b){b=b?!0:!1;a.loaded=b;a.readyState=b?3:2;a._onbufferchange(0);a._iO.onload&&a._iO.onload.apply(a,[b]);return!0};this._onfailure=function(b,c,d){a.failures++;
if(a._iO.onfailure&&a.failures===1)a._iO.onfailure(a,b,c,d)};this._onbeforefinish=function(){if(!a.didBeforeFinish)a.didBeforeFinish=!0,a._iO.onbeforefinish&&a._iO.onbeforefinish.apply(a)};this._onjustbeforefinish=function(){if(!a.didJustBeforeFinish)a.didJustBeforeFinish=!0,a._iO.onjustbeforefinish&&a._iO.onjustbeforefinish.apply(a)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a.resetOnPosition(0);a._iO.onbeforefinishcomplete&&a._iO.onbeforefinishcomplete.apply(a);a.didBeforeFinish=
!1;a.didJustBeforeFinish=!1;if(a.instanceCount){a.instanceCount--;if(!a.instanceCount)a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},f();(!a.instanceCount||a._iO.multiShotEvents)&&b&&b.apply(a)}};this._onbufferchange=function(b){if(a.playState===0)return!1;if(b&&a.isBuffering||!b&&!a.isBuffering)return!1;a.isBuffering=b===1;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a);return!0};this._ondataerror=function(){a.playState>0&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};
ea=function(){return g.body?g.body:g._docElement?g.documentElement:g.getElementsByTagName("div")[0]};y=function(b){return g.getElementById(b)};o=function(b,a){var e={},f,d;for(f in b)b.hasOwnProperty(f)&&(e[f]=b[f]);f=typeof a==="undefined"?c.defaultOptions:a;for(d in f)f.hasOwnProperty(d)&&typeof e[d]==="undefined"&&(e[d]=f[d]);return e};l=function(){function b(a){var a=Da.call(a),b=a.length;c?(a[1]="on"+a[1],b>3&&a.pop()):b===3&&a.push(!1);return a}function a(a,b){var g=a.shift(),h=[f[b]];if(c)g[h](a[0],
a[1]);else g[h].apply(g,a)}var c=h.attachEvent,f={add:c?"attachEvent":"addEventListener",remove:c?"detachEvent":"removeEventListener"};return{add:function(){a(b(arguments),"add")},remove:function(){a(b(arguments),"remove")}}}();V=function(b){return!b.serverURL&&(b.type?J({type:b.type}):J(b.url)||p)};J=function(b){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var a,e=c.audioFormats;if(!s){s=[];for(a in e)e.hasOwnProperty(a)&&(s.push(a),e[a].related&&(s=s.concat(e[a].related)));s=RegExp("\\.("+s.join("|")+
")","i")}a=typeof b.type!=="undefined"?b.type:null;b=typeof b==="string"?b.toLowerCase().match(s):null;if(!b||!b.length)if(a)b=a.indexOf(";"),b=(b!==-1?a.substr(0,b):a).substr(6);else return!1;else b=b[0].substr(1);if(b&&typeof c.html5[b]!=="undefined")return c.html5[b];else{if(!a)if(b&&c.html5[b])return c.html5[b];else a="audio/"+b;a=c.html5.canPlayType(a);return c.html5[b]=a}};za=function(){function b(b){var d,e,f=!1;if(!a||typeof a.canPlayType!=="function")return!1;if(b instanceof Array){d=0;for(e=
b.length;d<e&&!f;d++)if(c.html5[b[d]]||a.canPlayType(b[d]).match(c.html5Test))f=!0,c.html5[b[d]]=!0;return f}else return(b=a&&typeof a.canPlayType==="function"?a.canPlayType(b):!1)&&(b.match(c.html5Test)?!0:!1)}if(!c.useHTML5Audio||typeof Audio==="undefined")return!1;var a=typeof Audio!=="undefined"?Ga?new Audio(null):new Audio:null,e,f={},d,g;C();d=c.audioFormats;for(e in d)if(d.hasOwnProperty(e)&&(f[e]=b(d[e].type),d[e]&&d[e].related))for(g=d[e].related.length;g--;)c.html5[d[e].related[g]]=f[e];
f.canPlayType=a?b:null;c.html5=o(c.html5,f);return!0};w=function(){};S=function(b){if(k===8&&b.loops>1&&b.stream)b.stream=!1;return b};T=function(b){if(b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};ia=function(b){typeof console!=="undefined"&&typeof console.warn!=="undefined"&&console.warn(b)};$=function(){return!1};ua=function(b){for(var a in b)b.hasOwnProperty(a)&&typeof b[a]==="function"&&(b[a]=$)};R=function(b){typeof b==="undefined"&&
(b=!1);(t||b)&&c.disable(b)};va=function(b){var a=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(a=b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+="/");return(b&&b.lastIndexOf("/")!==-1?b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL};ca=function(){if(k!==8&&k!==9)c.flashVersion=8;var b=c.debugMode||c.debugFlash?"_debug.swf":".swf";if(c.useHTML5Audio&&!p&&c.audioFormats.mp4.required&&c.flashVersion<9)c.flashVersion=9;k=c.flashVersion;c.version=c.versionNumber+
(p?" (HTML5-only mode)":k===9?" (AS3/Flash 9)":" (AS2/Flash 8)");if(k>8)c.defaultOptions=o(c.defaultOptions,c.flash9Options),c.features.buffering=!0;k>8&&c.useMovieStar?(c.defaultOptions=o(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+c.netStreamTypes.join("|")+")(\\?.*)?$","i"),c.mimePattern=c.netStreamMimeTypes,c.features.movieStar=!0):(c.useMovieStar=!1,c.features.movieStar=!1);c.filePattern=c.filePatterns[k!==8?"flash9":"flash8"];c.movieURL=(k===8?"soundmanager2.swf":
"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=k>8};ta=function(b,a){if(!c.o||!c.allowPolling)return!1;c.o._setPolling(b,a)};Q=function(b,a){var e=a?a:c.url,f=c.altURL?c.altURL:e,d;d=ea();var h,k,i=B(),j,l=null,l=(l=g.getElementsByTagName("html")[0])&&l.dir&&l.dir.match(/rtl/i),b=typeof b==="undefined"?c.id:b;if(E&&F)return!1;if(p)return ca(),c.oMC=y(c.movieID),O(),F=E=!0,!1;E=!0;ca();c.url=va(c._overHTTP?e:f);a=c.url;c.wmode=!c.wmode&&
c.useHighPerformance&&!c.useMovieStar?"transparent":c.wmode;if(c.wmode!==null&&(n.match(/msie 8/i)||!q&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))c.specialWmodeCase=!0,c.wmode=null;d={name:b,id:b,src:a,width:"100%",height:"100%",quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:c._http+"//www.macromedia.com/go/getflashplayer",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};if(c.debugFlash)d.FlashVars="debug=1";c.wmode||
delete d.wmode;if(q)e=g.createElement("div"),k='<object id="'+b+'" data="'+a+'" type="'+d.type+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+c._http+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="'+d.width+'" height="'+d.height+'"><param name="movie" value="'+a+'" /><param name="AllowScriptAccess" value="'+c.allowScriptAccess+'" /><param name="quality" value="'+d.quality+'" />'+(c.wmode?'<param name="wmode" value="'+c.wmode+'" /> ':"")+
'<param name="bgcolor" value="'+c.bgColor+'" />'+(c.debugFlash?'<param name="FlashVars" value="'+d.FlashVars+'" />':"")+"</object>";else for(h in e=g.createElement("embed"),d)d.hasOwnProperty(h)&&e.setAttribute(h,d[h]);pa();i=B();if(d=ea())if(c.oMC=y(c.movieID)?y(c.movieID):g.createElement("div"),c.oMC.id){j=c.oMC.className;c.oMC.className=(j?j+" ":c.swfCSS.swfDefault)+(i?" "+i:"");c.oMC.appendChild(e);if(q)h=c.oMC.appendChild(g.createElement("div")),h.className=c.swfCSS.swfBox,h.innerHTML=k;F=!0}else{c.oMC.id=
c.movieID;c.oMC.className=c.swfCSS.swfDefault+" "+i;h=i=null;if(!c.useFlashBlock)if(c.useHighPerformance)i={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"};else if(i={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},l)i.left=Math.abs(parseInt(i.left,10))+"px";if(Fa)c.oMC.style.zIndex=1E4;if(!c.debugFlash)for(j in i)i.hasOwnProperty(j)&&(c.oMC.style[j]=i[j]);try{q||c.oMC.appendChild(e);d.appendChild(c.oMC);if(q)h=c.oMC.appendChild(g.createElement("div")),
h.className=c.swfCSS.swfBox,h.innerHTML=k;F=!0}catch(m){throw Error(w("appXHTML"));}}return!0};j=this.getSoundById;H=function(){if(p)return Q(),!1;if(c.o)return!1;c.o=c.getMovie(c.id);if(!c.o)I?(q?c.oMC.innerHTML=ga:c.oMC.appendChild(I),I=null,E=!0):Q(c.id,c.url),c.o=c.getMovie(c.id);c.oninitmovie instanceof Function&&setTimeout(c.oninitmovie,1);return!0};ba=function(b){if(b)c.url=b;H()};P=function(){setTimeout(ra,500)};ra=function(){if(U)return!1;U=!0;l.remove(h,"load",P);if(D&&!na)return!1;var b;
m||(b=c.getMoviePercent());setTimeout(function(){b=c.getMoviePercent();!m&&Ca&&(b===null?c.useFlashBlock||c.flashLoadTimeout===0?c.useFlashBlock&&ha():R(!0):c.flashLoadTimeout!==0&&R(!0))},c.flashLoadTimeout)};ba=function(b){if(b)c.url=b;H()};B=function(){var b=[];c.debugMode&&b.push(c.swfCSS.sm2Debug);c.debugFlash&&b.push(c.swfCSS.flashDebug);c.useHighPerformance&&b.push(c.swfCSS.highPerf);return b.join(" ")};ha=function(){w("fbHandler");var b=c.getMoviePercent(),a=c.swfCSS;if(c.ok()){if(c.oMC)c.oMC.className=
[B(),a.swfDefault,a.swfLoaded+(c.didFlashBlock?" "+a.swfUnblocked:"")].join(" ")}else{if(x)c.oMC.className=B()+" "+a.swfDefault+" "+(b===null?a.swfTimedout:a.swfError);c.didFlashBlock=!0;u({type:"ontimeout",ignoreInit:!0});c.onerror instanceof Function&&c.onerror.apply(h)}};v=function(){function b(){l.remove(h,"focus",v);l.remove(h,"load",v)}if(na||!D)return b(),!0;na=Ca=!0;L&&D&&l.remove(h,"mousemove",v);U=!1;b();return!0};G=function(b){if(m)return!1;if(p)return m=!0,u(),z(),!0;c.useFlashBlock&&
c.flashLoadTimeout&&!c.getMoviePercent()||(m=!0);if(t||b){if(c.useFlashBlock)c.oMC.className=B()+" "+(c.getMoviePercent()===null?c.swfCSS.swfTimedout:c.swfCSS.swfError);u({type:"ontimeout"});c.onerror instanceof Function&&c.onerror.apply(h);return!1}l.add(h,"unload",$);if(c.waitForWindowLoad&&!qa)return l.add(h,"load",z),!1;else z();return!0};aa=function(b,a,c){typeof r[b]==="undefined"&&(r[b]=[]);r[b].push({method:a,scope:c||null,fired:!1})};u=function(b){b||(b={type:"onready"});if(!m&&b&&!b.ignoreInit)return!1;
var a={success:b&&b.ignoreInit?c.ok():!t},e=b&&b.type?r[b.type]||[]:[],b=[],f,d=x&&c.useFlashBlock&&!c.ok();for(f=0;f<e.length;f++)e[f].fired!==!0&&b.push(e[f]);if(b.length){f=0;for(e=b.length;f<e;f++)if(b[f].scope?b[f].method.apply(b[f].scope,[a]):b[f].method(a),!d)b[f].fired=!0}return!0};z=function(){h.setTimeout(function(){c.useFlashBlock&&ha();u();c.onload instanceof Function&&c.onload.apply(h);c.waitForWindowLoad&&l.add(h,"load",z)},1)};C=function(){if(la!==void 0)return la;var b=!1,a=navigator,
c=a.plugins,f,d=h.ActiveXObject;if(c&&c.length)(a=a.mimeTypes)&&a["application/x-shockwave-flash"]&&a["application/x-shockwave-flash"].enabledPlugin&&a["application/x-shockwave-flash"].enabledPlugin.description&&(b=!0);else if(typeof d!=="undefined"){try{f=new d("ShockwaveFlash.ShockwaveFlash")}catch(g){}b=!!f}return la=b};ya=function(){var b,a;if(n.match(/iphone os (1|2|3_0|3_1)/i)){c.hasHTML5=!1;p=!0;if(c.oMC)c.oMC.style.display="none";return!1}if(c.useHTML5Audio){if(!c.html5||!c.html5.canPlayType)return c.hasHTML5=
!1,!0;else c.hasHTML5=!0;if(ma&&C())return!0}else return!0;for(a in c.audioFormats)c.audioFormats.hasOwnProperty(a)&&c.audioFormats[a].required&&!c.html5.canPlayType(c.audioFormats[a].type)&&(b=!0);c.ignoreFlash&&(b=!1);p=c.useHTML5Audio&&c.hasHTML5&&!b&&!c.requireFlash;return C()&&b};O=function(){var b,a=[];if(m)return!1;if(c.hasHTML5)for(b in c.audioFormats)c.audioFormats.hasOwnProperty(b)&&a.push(b+": "+c.html5[b]);if(p){if(!m)l.remove(h,"load",c.beginDelayedInit),c.enabled=!0,G();return!0}H();
try{c.o._externalInterfaceTest(!1),c.allowPolling&&ta(!0,c.flashPollingInterval?c.flashPollingInterval:c.useFastPolling?10:50),c.debugMode||c.o._disableDebug(),c.enabled=!0}catch(e){return R(!0),G(),!1}G();l.remove(h,"load",c.beginDelayedInit);return!0};sa=function(){if(ja)return!1;Q();H();return ja=!0};A=function(){if(da)return!1;da=!0;pa();if(!c.useHTML5Audio&&!C())c.useHTML5Audio=!0;za();c.html5.usingFlash=ya();x=c.html5.usingFlash;da=!0;g.removeEventListener&&g.removeEventListener("DOMContentLoaded",
A,!1);ba();return!0};wa=function(b){if(!b._hasTimer)b._hasTimer=!0};xa=function(b){if(b._hasTimer)b._hasTimer=!1};fa=function(){if(c.onerror instanceof Function)c.onerror();c.disable()};Aa=function(){if(!ma||!C())return!1;var b=c.audioFormats,a,e;for(e in b)if(b.hasOwnProperty(e)&&(e==="mp3"||e==="mp4"))if(c.html5[e]=!1,b[e]&&b[e].related)for(a=b[e].related.length;a--;)c.html5[b[e].related[a]]=!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(c.swfLoaded)return!1;(new Date).getTime();
c.swfLoaded=!0;D=!1;ma&&Aa();q?setTimeout(O,100):O()};ka=function(){g.readyState==="complete"&&(A(),g.detachEvent("onreadystatechange",ka));return!0};if(!c.hasHTML5||x)l.add(h,"focus",v),l.add(h,"load",v),l.add(h,"load",P),L&&D&&l.add(h,"mousemove",v);g.addEventListener?g.addEventListener("DOMContentLoaded",A,!1):g.attachEvent?g.attachEvent("onreadystatechange",ka):fa();g.readyState==="complete"&&setTimeout(A,100)}var X=null;if(typeof SM2_DEFER==="undefined"||!SM2_DEFER)X=new M;Y.SoundManager=M;Y.soundManager=
X})(window);

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

/*
Uploadify v2.1.4
Release Date: November 8, 2010

Copyright (c) 2010 Ronnie Garcia, Travis Nickels

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

if(jQuery){(function(a){a.extend(a.fn,{uploadify:function(b){a(this).each(function(){var f=a.extend({id:a(this).attr("id"),uploader:"uploadify.swf",script:"uploadify.php",expressInstall:null,folder:"",height:30,width:120,cancelImg:"cancel.png",wmode:"opaque",scriptAccess:"sameDomain",fileDataName:"Filedata",method:"POST",queueSizeLimit:999,simUploadLimit:1,queueID:false,displayData:"percentage",removeCompleted:true,onInit:function(){},onSelect:function(){},onSelectOnce:function(){},onQueueFull:function(){},onCheck:function(){},onCancel:function(){},onClearQueue:function(){},onError:function(){},onProgress:function(){},onComplete:function(){},onAllComplete:function(){}},b);a(this).data("settings",f);var e=location.pathname;e=e.split("/");e.pop();e=e.join("/")+"/";var g={};g.uploadifyID=f.id;g.pagepath=e;if(f.buttonImg){g.buttonImg=escape(f.buttonImg)}if(f.buttonText){g.buttonText=escape(f.buttonText)}if(f.rollover){g.rollover=true}g.script=f.script;g.folder=escape(f.folder);if(f.scriptData){var h="";for(var d in f.scriptData){h+="&"+d+"="+f.scriptData[d]}g.scriptData=escape(h.substr(1))}g.width=f.width;g.height=f.height;g.wmode=f.wmode;g.method=f.method;g.queueSizeLimit=f.queueSizeLimit;g.simUploadLimit=f.simUploadLimit;if(f.hideButton){g.hideButton=true}if(f.fileDesc){g.fileDesc=f.fileDesc}if(f.fileExt){g.fileExt=f.fileExt}if(f.multi){g.multi=true}if(f.auto){g.auto=true}if(f.sizeLimit){g.sizeLimit=f.sizeLimit}if(f.checkScript){g.checkScript=f.checkScript}if(f.fileDataName){g.fileDataName=f.fileDataName}if(f.queueID){g.queueID=f.queueID}if(f.onInit()!==false){a(this).css("display","none");a(this).after('<div id="'+a(this).attr("id")+'Uploader"></div>');swfobject.embedSWF(f.uploader,f.id+"Uploader",f.width,f.height,"9.0.24",f.expressInstall,g,{quality:"high",wmode:f.wmode,allowScriptAccess:f.scriptAccess},{},function(i){if(typeof(f.onSWFReady)=="function"&&i.success){f.onSWFReady()}});if(f.queueID==false){a("#"+a(this).attr("id")+"Uploader").after('<div id="'+a(this).attr("id")+'Queue" class="uploadifyQueue"></div>')}else{a("#"+f.queueID).addClass("uploadifyQueue")}}if(typeof(f.onOpen)=="function"){a(this).bind("uploadifyOpen",f.onOpen)}a(this).bind("uploadifySelect",{action:f.onSelect,queueID:f.queueID},function(k,i,j){if(k.data.action(k,i,j)!==false){var l=Math.round(j.size/1024*100)*0.01;var m="KB";if(l>1000){l=Math.round(l*0.001*100)*0.01;m="MB"}var n=l.toString().split(".");if(n.length>1){l=n[0]+"."+n[1].substr(0,2)}else{l=n[0]}if(j.name.length>20){fileName=j.name.substr(0,20)+"..."}else{fileName=j.name}queue="#"+a(this).attr("id")+"Queue";if(k.data.queueID){queue="#"+k.data.queueID}a(queue).append('<div id="'+a(this).attr("id")+i+'" class="uploadifyQueueItem"><div class="cancel"><a href="javascript:jQuery(\'#'+a(this).attr("id")+"').uploadifyCancel('"+i+'\')"><img src="'+f.cancelImg+'" border="0" /></a></div><span class="fileName">'+fileName+" ("+l+m+')</span><span class="percentage"></span><div class="uploadifyProgress"><div id="'+a(this).attr("id")+i+'ProgressBar" class="uploadifyProgressBar"><!--Progress Bar--></div></div></div>')}});a(this).bind("uploadifySelectOnce",{action:f.onSelectOnce},function(i,j){i.data.action(i,j);if(f.auto){if(f.checkScript){a(this).uploadifyUpload(null,false)}else{a(this).uploadifyUpload(null,true)}}});a(this).bind("uploadifyQueueFull",{action:f.onQueueFull},function(i,j){if(i.data.action(i,j)!==false){alert("The queue is full.  The max size is "+j+".")}});a(this).bind("uploadifyCheckExist",{action:f.onCheck},function(n,m,l,k,p){var j=new Object();j=l;j.folder=(k.substr(0,1)=="/")?k:e+k;if(p){for(var i in l){var o=i}}a.post(m,j,function(s){for(var q in s){if(n.data.action(n,s,q)!==false){var r=confirm("Do you want to replace the file "+s[q]+"?");if(!r){document.getElementById(a(n.target).attr("id")+"Uploader").cancelFileUpload(q,true,true)}}}if(p){document.getElementById(a(n.target).attr("id")+"Uploader").startFileUpload(o,true)}else{document.getElementById(a(n.target).attr("id")+"Uploader").startFileUpload(null,true)}},"json")});a(this).bind("uploadifyCancel",{action:f.onCancel},function(n,j,m,o,i,l){if(n.data.action(n,j,m,o,l)!==false){if(i){var k=(l==true)?0:250;a("#"+a(this).attr("id")+j).fadeOut(k,function(){a(this).remove()})}}});a(this).bind("uploadifyClearQueue",{action:f.onClearQueue},function(k,j){var i=(f.queueID)?f.queueID:a(this).attr("id")+"Queue";if(j){a("#"+i).find(".uploadifyQueueItem").remove()}if(k.data.action(k,j)!==false){a("#"+i).find(".uploadifyQueueItem").each(function(){var l=a(".uploadifyQueueItem").index(this);a(this).delay(l*100).fadeOut(250,function(){a(this).remove()})})}});var c=[];a(this).bind("uploadifyError",{action:f.onError},function(m,i,l,k){if(m.data.action(m,i,l,k)!==false){var j=new Array(i,l,k);c.push(j);a("#"+a(this).attr("id")+i).find(".percentage").text(" - "+k.type+" Error");a("#"+a(this).attr("id")+i).find(".uploadifyProgress").hide();a("#"+a(this).attr("id")+i).addClass("uploadifyError")}});if(typeof(f.onUpload)=="function"){a(this).bind("uploadifyUpload",f.onUpload)}a(this).bind("uploadifyProgress",{action:f.onProgress,toDisplay:f.displayData},function(k,i,j,l){if(k.data.action(k,i,j,l)!==false){a("#"+a(this).attr("id")+i+"ProgressBar").animate({width:l.percentage+"%"},250,function(){if(l.percentage==100){a(this).closest(".uploadifyProgress").fadeOut(250,function(){a(this).remove()})}});if(k.data.toDisplay=="percentage"){displayData=" - "+l.percentage+"%"}if(k.data.toDisplay=="speed"){displayData=" - "+l.speed+"KB/s"}if(k.data.toDisplay==null){displayData=" "}a("#"+a(this).attr("id")+i).find(".percentage").text(displayData)}});a(this).bind("uploadifyComplete",{action:f.onComplete},function(l,i,k,j,m){if(l.data.action(l,i,k,unescape(j),m)!==false){a("#"+a(this).attr("id")+i).find(".percentage").text(" - Completed");if(f.removeCompleted){a("#"+a(l.target).attr("id")+i).fadeOut(250,function(){a(this).remove()})}a("#"+a(l.target).attr("id")+i).addClass("completed")}});if(typeof(f.onAllComplete)=="function"){a(this).bind("uploadifyAllComplete",{action:f.onAllComplete},function(i,j){if(i.data.action(i,j)!==false){c=[]}})}})},uploadifySettings:function(f,j,c){var g=false;a(this).each(function(){if(f=="scriptData"&&j!=null){if(c){var i=j}else{var i=a.extend(a(this).data("settings").scriptData,j)}var l="";for(var k in i){l+="&"+k+"="+i[k]}j=escape(l.substr(1))}g=document.getElementById(a(this).attr("id")+"Uploader").updateSettings(f,j)});if(j==null){if(f=="scriptData"){var b=unescape(g).split("&");var e=new Object();for(var d=0;d<b.length;d++){var h=b[d].split("=");e[h[0]]=h[1]}g=e}}return g},uploadifyUpload:function(b,c){a(this).each(function(){if(!c){c=false}document.getElementById(a(this).attr("id")+"Uploader").startFileUpload(b,c)})},uploadifyCancel:function(b){a(this).each(function(){document.getElementById(a(this).attr("id")+"Uploader").cancelFileUpload(b,true,true,false)})},uploadifyClearQueue:function(){a(this).each(function(){document.getElementById(a(this).attr("id")+"Uploader").clearFileUploadQueue(false)})}})})(jQuery)};

/*

  SoundManager 2 Demo: "Page as playlist" UI
  ----------------------------------------------
  http://schillmania.com/projects/soundmanager2/

  An example of a Muxtape.com-style UI, where an
  unordered list of MP3 links becomes a playlist

  Flash 9 "MovieStar" edition supports MPEG4
  audio as well.

  Requires SoundManager 2 Javascript API.

*/

/*jslint white: false, onevar: true, undef: true, nomen: false, eqeqeq: true, plusplus: false, bitwise: true, newcap: true, immed: true */
/*global soundManager, window, document, navigator, setTimeout, attachEvent, Metadata, PP_CONFIG */

var pagePlayer = null;

function PagePlayer() {

  var self = this,
      pl = this,
      sm = soundManager, // soundManager instance
      _event,
      vuDataCanvas = null,
      controlTemplate = null,
      _head = document.getElementsByTagName('head')[0],
      spectrumContainer = null,
      // sniffing for favicon stuff, IE workarounds and touchy-feely devices
      ua = navigator.userAgent,
      supportsFavicon = (ua.match(/(opera|firefox)/i)),
      isTouchDevice = (ua.match(/ipad|ipod|iphone/i)),
      cleanup;

  // configuration options
  // note that if Flash 9 is required, you must set soundManager.flashVersion = 9 in your script before this point.

  this.config = {
    usePeakData: false,     // [Flash 9 only]: show peak data
    useWaveformData: false, // [Flash 9 only]: enable sound spectrum (raw waveform data) - WARNING: CPU-INTENSIVE: may set CPUs on fire.
    useEQData: false,       // [Flash 9 only]: enable sound EQ (frequency spectrum data) - WARNING: Also CPU-intensive.
    fillGraph: false,       // [Flash 9 only]: draw full lines instead of only top (peak) spectrum points
    useMovieStar: true,     // [Flash 9 only]: Support for MPEG4 audio formats
    allowRightClick: true,  // let users right-click MP3 links ("save as...", etc.) or discourage (can't prevent.)
    useThrottling: true,    // try to rate-limit potentially-expensive calls (eg. dragging position around)
    autoStart: false,       // begin playing first sound when page loads
    playNext: true,         // stop after one sound, or play through list until end
    updatePageTitle: true,  // change the page title while playing sounds
    emptyTime: '-:--',      // null/undefined timer values (before data is available)
    useFavIcon: false       // try to show peakData in address bar (Firefox + Opera) - may be too CPU heavy
  };

  this.css = {              // CSS class names appended to link during various states
    sDefault: 'sm2_link',   // default state
    sLoading: 'sm2_loading',
    sPlaying: 'sm2_playing',
    sPaused: 'sm2_paused'
  };

  this.sounds = [];
  this.soundsByObject = [];
  this.lastSound = null;
  this.soundCount = 0;
  this.strings = [];
  this.dragActive = false;
  this.dragExec = new Date();
  this.dragTimer = null;
  this.pageTitle = document.title;
  this.lastWPExec = new Date();
  this.lastWLExec = new Date();
  this.vuMeterData = [];
  this.oControls = null;

  this._mergeObjects = function(oMain,oAdd) {
    // non-destructive merge
    var o1 = {}, o2, i, o; // clone o1
    for (i in oMain) {
      if (oMain.hasOwnProperty(i)) {
        o1[i] = oMain[i];
      }
    }
    o2 = (typeof oAdd === 'undefined'?{}:oAdd);
    for (o in o2) {
      if (typeof o1[o] === 'undefined') {
        o1[o] = o2[o];
      }
    }
    return o1;
  };

  _event = (function() {

    var old = (window.attachEvent && !window.addEventListener),
    _slice = Array.prototype.slice,
    evt = {
      add: (old?'attachEvent':'addEventListener'),
      remove: (old?'detachEvent':'removeEventListener')
    };

    function getArgs(oArgs) {
      var args = _slice.call(oArgs), len = args.length;
      if (old) {
        args[1] = 'on' + args[1]; // prefix
        if (len > 3) {
          args.pop(); // no capture
        }
      } else if (len === 3) {
        args.push(false);
      }
      return args;
    }

    function apply(args, sType) {
      var element = args.shift(),
          method = [evt[sType]];
      if (old) {
        element[method](args[0], args[1]);
      } else {
        element[method].apply(element, args);
      }
    }

    function add() {
      apply(getArgs(arguments), 'add');
    }

    function remove() {
      apply(getArgs(arguments), 'remove');
    }

    return {
      'add': add,
      'remove': remove
    };

  }());

  this.hasClass = function(o, cStr) {
    return (typeof(o.className)!=='undefined'?new RegExp('(^|\\s)'+cStr+'(\\s|$)').test(o.className):false);
  };

  this.addClass = function(o, cStr) {
    if (!o || !cStr || self.hasClass(o,cStr)) {
      return false; // safety net
    }
    o.className = (o.className?o.className+' ':'')+cStr;
  };

  this.removeClass = function(o, cStr) {
    if (!o || !cStr || !self.hasClass(o,cStr)) {
      return false;
    }
    o.className = o.className.replace(new RegExp('( '+cStr+')|('+cStr+')','g'),'');
  };

  this.select = function(className, oParent) {
    var result = self.getByClassName(className, 'div', oParent||null);
    return (result ? result[0] : null);
  };

  this.getByClassName = (document.querySelectorAll ? function(className, tagNames, oParent) { // tagNames: string or ['div', 'p'] etc.

    var pattern = ('.'+className), qs;
    if (tagNames) {
      tagNames = tagNames.split(' ');
    }
    qs = (tagNames.length > 1 ? tagNames.join(pattern+', ') : tagNames[0]+pattern);
    return (oParent?oParent:document).querySelectorAll(qs);

  } : function(className, tagNames, oParent) {

    var node = (oParent?oParent:document), matches = [], i, j, nodes = [];
    if (tagNames) {
      tagNames = tagNames.split(' ');
    }
    if (tagNames instanceof Array) {
      for (i=tagNames.length; i--;) {
        if (!nodes || !nodes[tagNames[i]]) {
          nodes[tagNames[i]] = node.getElementsByTagName(tagNames[i]);
        }
      }
      for (i=tagNames.length; i--;) {
        for (j=nodes[tagNames[i]].length; j--;) {
          if (self.hasClass(nodes[tagNames[i]][j], className)) {
            matches.push(nodes[tagNames[i]][j]);
          }
        }
      }
    } else {
      nodes = node.all||node.getElementsByTagName('*');
      for (i=0, j=nodes.length; i<j; i++) {
        if (self.hasClass(nodes[i],className)) {
          matches.push(nodes[i]);
        }
      }
    }
    return matches;

  });
  
  this.isChildOfClass = function(oChild, oClass) {
    if (!oChild || !oClass) {
      return false;
    }
    while (oChild.parentNode && !self.hasClass(oChild,oClass)) {
      oChild = oChild.parentNode;
    }
    return (self.hasClass(oChild,oClass));
  };

  this.getParentByNodeName = function(oChild, sParentNodeName) {
    if (!oChild || !sParentNodeName) {
      return false;
    }
    sParentNodeName = sParentNodeName.toLowerCase();
    while (oChild.parentNode && sParentNodeName !== oChild.parentNode.nodeName.toLowerCase()) {
      oChild = oChild.parentNode;
    }
    return (oChild.parentNode && sParentNodeName === oChild.parentNode.nodeName.toLowerCase()?oChild.parentNode:null);
  };

  this.getOffX = function(o) {
    // http://www.xs4all.nl/~ppk/js/findpos.html
    var curleft = 0;
    if (o.offsetParent) {
      while (o.offsetParent) {
        curleft += o.offsetLeft;
        o = o.offsetParent;
      }
    }
    else if (o.x) {
      curleft += o.x;
    }
    return curleft;
  };

  this.getTime = function(nMSec, bAsString) {
    // convert milliseconds to mm:ss, return as object literal or string
    var nSec = Math.floor(nMSec/1000),
        min = Math.floor(nSec/60),
        sec = nSec-(min*60);
    // if (min === 0 && sec === 0) return null; // return 0:00 as null
    return (bAsString?(min+':'+(sec<10?'0'+sec:sec)):{'min':min,'sec':sec});
  };

  this.getSoundByObject = function(o) {
    return (typeof self.soundsByObject[o.id] !== 'undefined'?self.soundsByObject[o.id]:null);
  };

  this.getNextItem = function(o) {
    // given <li> playlist item, find next <li> and then <a>
    if (o.nextElementSibling) {
      o = o.nextElementSibling;
    } else {
      o = o.nextSibling; // move from original node..
      while (o && o.nextSibling && o.nextSibling.nodeType !== 1) {
        o = o.nextSibling;
      }
    }
    if (o.nodeName.toLowerCase() !== 'li') {
      return null;
    } else {
      return o.getElementsByTagName('a')[0];
    }
  };

  this.playNext = function(oSound) {
    if (!oSound) {
      oSound = self.lastSound;
    }
    if (!oSound) {
      return false;
    }
    var nextItem = self.getNextItem(oSound._data.oLI);
    if (nextItem) {
      pl.handleClick({target:nextItem}); // fake a click event - aren't we sneaky. ;)
    }
    return nextItem;
  };

  this.setPageTitle = function(sTitle) {
    if (!self.config.updatePageTitle) {
      return false;
    }
    try {
      document.title = (sTitle?sTitle+' - ':'')+self.pageTitle;
    } catch(e) {
      // oh well
      self.setPageTitle = function() {
        return false;
      };
    }
  };

  this.events = {

    // handlers for sound events as they're started/stopped/played

    play: function() {
      pl.removeClass(this._data.oLI,this._data.className);
      this._data.className = pl.css.sPlaying;
      pl.addClass(this._data.oLI,this._data.className);
      self.setPageTitle(this._data.originalTitle);
    },

    stop: function() {
      pl.removeClass(this._data.oLI,this._data.className);
      this._data.className = '';
      this._data.oPosition.style.width = '0px';
      self.setPageTitle();
      self.resetPageIcon();
    },

    pause: function() {
      if (pl.dragActive) {
        return false;
      }
      pl.removeClass(this._data.oLI,this._data.className);
      this._data.className = pl.css.sPaused;
      pl.addClass(this._data.oLI,this._data.className);
      self.setPageTitle();
      self.resetPageIcon();
    },

    resume: function() {
      if (pl.dragActive) {
        return false;
      }
      pl.removeClass(this._data.oLI,this._data.className);
      this._data.className = pl.css.sPlaying;
      pl.addClass(this._data.oLI,this._data.className);
    },

    finish: function() {
      pl.removeClass(this._data.oLI,this._data.className);
      this._data.className = '';
      this._data.oPosition.style.width = '0px';
      // play next if applicable
      if (self.config.playNext) {
        pl.playNext(this);
      } else {
        self.setPageTitle();
        self.resetPageIcon();
      }
    },

    whileloading: function() {
      function doWork() {
        this._data.oLoading.style.width = (((this.bytesLoaded/this.bytesTotal)*100)+'%'); // theoretically, this should work.
        if (!this._data.didRefresh && this._data.metadata) {
          this._data.didRefresh = true;
          this._data.metadata.refresh();
        }
      }
      if (!pl.config.useThrottling) {
        doWork.apply(this);
      } else {
        var d = new Date();
        if (d && d-self.lastWLExec>30 || this.bytesLoaded === this.bytesTotal) {
          doWork.apply(this);
          self.lastWLExec = d;
        }
      }

    },

    onload: function() {
      if (!this.loaded) {
        var oTemp = this._data.oLI.getElementsByTagName('a')[0],
            oString = oTemp.innerHTML,
            oThis = this;
        oTemp.innerHTML = oString+' <span style="font-size:0.5em"> | Load failed, d\'oh! '+(sm.sandbox.noRemote?' Possible cause: Flash sandbox is denying remote URL access.':(sm.sandbox.noLocal?'Flash denying local filesystem access':'404?'))+'</span>';
        setTimeout(function(){
          oTemp.innerHTML = oString;
          // pl.events.finish.apply(oThis); // load next
        },5000);
      } else {
        if (this._data.metadata) {
          this._data.metadata.refresh();
        }
      }
    },

    whileplaying: function() {
      var d = null;
      if (pl.dragActive || !pl.config.useThrottling) {
        // self.updateTime.apply(this);
        if (sm.flashVersion >= 9) {
          if (pl.config.usePeakData && this.instanceOptions.usePeakData) {
            self.updatePeaks.apply(this);
          }
          if (pl.config.useWaveformData && this.instanceOptions.useWaveformData || pl.config.useEQData && this.instanceOptions.useEQData) {
            self.updateGraph.apply(this);
          }
        }
        if (this._data.metadata) {
          d = new Date();
          if (d && d-self.lastWPExec>500) {
            this._data.metadata.refreshMetadata(this);
            self.lastWPExec = d;
          }
        }
        this._data.oPosition.style.width = (((this.position/self.getDurationEstimate(this))*100)+'%');
      } else {
        d = new Date();
        if (d-self.lastWPExec>30) {
          // self.updateTime.apply(this);
          if (sm.flashVersion >= 9) {
            if (pl.config.usePeakData && this.instanceOptions.usePeakData) {
              self.updatePeaks.apply(this);
            }
            if (pl.config.useWaveformData && this.instanceOptions.useWaveformData || pl.config.useEQData && this.instanceOptions.useEQData) {
              self.updateGraph.apply(this);
            }
          }
          if (this._data.metadata) {
            this._data.metadata.refreshMetadata(this);
          }
          this._data.oPosition.style.width = (((this.position/self.getDurationEstimate(this))*100)+'%');
          self.lastWPExec = d;
        }
      }
    }

  }; // events{}

  this.setPageIcon = function(sDataURL) {
    if (!self.config.useFavIcon || !self.config.usePeakData || !sDataURL) {
      return false;
    }
    var link = document.getElementById('sm2-favicon');
    if (link) {
      _head.removeChild(link);
      link = null;
    }
    if (!link) {
      link = document.createElement('link');
      link.id = 'sm2-favicon';
      link.rel = 'shortcut icon';
      link.type = 'image/png';
      link.href = sDataURL;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  };

  this.resetPageIcon = function() {
    if (!self.config.useFavIcon) {
      return false;
    }
    var link = document.getElementById('favicon');
    if (link) {
      link.href = '/favicon.ico';
    }
  };

  this.updatePeaks = function() {
    var o = this._data.oPeak,
        oSpan = o.getElementsByTagName('span');
    oSpan[0].style.marginTop = (13-(Math.floor(15*this.peakData.left))+'px');
    oSpan[1].style.marginTop = (13-(Math.floor(15*this.peakData.right))+'px');
    if (sm.flashVersion > 8 && self.config.useFavIcon && self.config.usePeakData) {
      self.setPageIcon(self.vuMeterData[parseInt(16*this.peakData.left,10)][parseInt(16*this.peakData.right,10)]);
    }
  };
  
  this.updateGraph = function() {
    if (pl.config.flashVersion < 9 || (!pl.config.useWaveformData && !pl.config.useEQData)) {
      return false;
    }
    var sbC = this._data.oGraph.getElementsByTagName('div'),
        scale, i, offset;
    if (pl.config.useWaveformData) {
      // raw waveform
      scale = 8; // Y axis (+/- this distance from 0)
      for (i=255; i--;) {
        sbC[255-i].style.marginTop = (1+scale+Math.ceil(this.waveformData.left[i]*-scale))+'px';
      }
    } else {
      // eq spectrum
      offset = 9;
      for (i=255; i--;) {
        sbC[255-i].style.marginTop = ((offset*2)-1+Math.ceil(this.eqData[i]*-offset))+'px';
      }
    }
  };
  
  this.resetGraph = function() {
    if (!pl.config.useEQData || pl.config.flashVersion<9) {
      return false;
    }
    var sbC = this._data.oGraph.getElementsByTagName('div'),
        scale = (!pl.config.useEQData?'9px':'17px'),
        nHeight = (!pl.config.fillGraph?'1px':'32px'),
        i;
    for (i=255; i--;) {
      sbC[255-i].style.marginTop = scale; // EQ scale
      sbC[255-i].style.height = nHeight;
    }
  };
  
  // this.updateTime = function() {
  //   var str = self.strings.timing.replace('%s1',self.getTime(this.position,true));
  //   str = str.replace('%s2',self.getTime(self.getDurationEstimate(this),true));
  //   this._data.oTiming.innerHTML = str;
  // };

  this.getTheDamnTarget = function(e) {
    return (e.target||(window.event?window.event.srcElement:null));
  };
  
  this.withinStatusBar = function(o) {
    return (self.isChildOfClass(o,'controls'));
  };

  this.handleClick = function(e) {

    // a sound (or something) was clicked - determine what and handle appropriately

    if (e.button === 2) {
      if (!pl.config.allowRightClick) {
        pl.stopEvent(e);
      }
      return pl.config.allowRightClick; // ignore right-clicks
    }
    var o = self.getTheDamnTarget(e),
        sURL, soundURL, thisSound, oControls, oLI, str;
    if (!o) {
      return true;
    }
    if (self.dragActive) {
      self.stopDrag(); // to be safe
    }
    if (self.withinStatusBar(o)) {
      // self.handleStatusClick(e);
      return false;
    }
    if (o.nodeName.toLowerCase() !== 'a') {
      o = self.getParentByNodeName(o,'a');
    }
    if (!o) {
      // not a link
      return true;
    }

    // OK, we're dealing with a link

    sURL = o.getAttribute('href');

    if (!o.href || (!sm.canPlayLink(o) && !self.hasClass(o,'playable')) || self.hasClass(o,'exclude')) {

      // do nothing, don't return anything.
      return true;

    } else {

      // we have something we're interested in.

      // find and init parent UL, if need be
      self.initUL(self.getParentByNodeName(o, 'ul'));

      // and decorate the link too, if needed
      self.initItem(o);

      soundURL = o.href;
      thisSound = self.getSoundByObject(o);

      if (thisSound) {

        // sound already exists
        self.setPageTitle(thisSound._data.originalTitle);
        if (thisSound === self.lastSound) {
          // ..and was playing (or paused) and isn't in an error state
          if (thisSound.readyState !== 2) {
            if (thisSound.playState !== 1) {
              // not yet playing
              thisSound.play();
            } else {
              thisSound.togglePause();
            }
          } else {
            sm._writeDebug('Warning: sound failed to load (security restrictions, 404 or bad format)',2);
          }
        } else {
          // ..different sound
          if (self.lastSound) {
            self.stopSound(self.lastSound);
          }
          if (spectrumContainer) {
            // thisSound._data.oTimingBox.appendChild(spectrumContainer);
          }
          thisSound.togglePause(); // start playing current
        }

      } else {

        // create sound
        thisSound = sm.createSound({
          id:o.id,
          url:decodeURI(soundURL),
          onplay:self.events.play,
          onstop:self.events.stop,
          onpause:self.events.pause,
          onresume:self.events.resume,
          onfinish:self.events.finish,
          whileloading:self.events.whileloading,
          whileplaying:self.events.whileplaying,
          onmetadata:self.events.metadata,
          onload:self.events.onload
        });

        // append control template
        oControls = self.oControls.cloneNode(true);
        oLI = o.parentNode;
        oLI.appendChild(oControls);
        if (spectrumContainer) {
          oLI.appendChild(spectrumContainer);
        }
        self.soundsByObject[o.id] = thisSound;

        // tack on some custom data
        thisSound._data = {
          oLink: o, // DOM reference within SM2 object event handlers
          oLI: oLI,
          oControls: self.select('controls',oLI),
          oStatus: self.select('statusbar',oLI),
          oLoading: self.select('loading',oLI),
          oPosition: self.select('position',oLI),
          // oTimingBox: self.select('timing',oLI),
          // oTiming: self.select('timing',oLI).getElementsByTagName('div')[0],
          oPeak: self.select('peak',oLI),
          oGraph: self.select('spectrum-box',oLI),
          className: self.css.sPlaying,
          originalTitle: o.innerHTML,
          metadata: null
        };

        if (spectrumContainer) {
          // thisSound._data.oTimingBox.appendChild(spectrumContainer);
        }

        // "Metadata"
        if (thisSound._data.oLI.getElementsByTagName('ul').length) {
          thisSound._data.metadata = new Metadata(thisSound);
        }

        // set initial timer stuff (before loading)
        // str = self.strings.timing.replace('%s1',self.config.emptyTime);
        // str = str.replace('%s2',self.config.emptyTime);
        // thisSound._data.oTiming.innerHTML = str;
        self.sounds.push(thisSound);
        if (self.lastSound) {
          self.stopSound(self.lastSound);
        }
        self.resetGraph.apply(thisSound);
        thisSound.play();

      }

      self.lastSound = thisSound; // reference for next call
      return self.stopEvent(e);

    }

  };
  
  this.handleMouseDown = function(e) {
    // a sound link was clicked
    if (isTouchDevice && e.touches) {
      e = e.touches[0];
    }
    if (e.button === 2) {
      if (!pl.config.allowRightClick) {
        pl.stopEvent(e);
      }
      return pl.config.allowRightClick; // ignore right-clicks
    }
    var o = self.getTheDamnTarget(e);
    if (!o) {
      return true;
    }
    if (!self.withinStatusBar(o)) {
      return true;
    }
    self.dragActive = true;
    self.lastSound.pause();
    self.setPosition(e);
    if (!isTouchDevice) {
      _event.add(document,'mousemove',self.handleMouseMove);
    } else {
      _event.add(document,'touchmove',self.handleMouseMove);
    }
    self.addClass(self.lastSound._data.oControls,'dragging');
    return self.stopEvent(e);
  };
  
  this.handleMouseMove = function(e) {
    if (isTouchDevice && e.touches) {
      e = e.touches[0];
    }
    // set position accordingly
    if (self.dragActive) {
      if (self.config.useThrottling) {
        // be nice to CPU/externalInterface
        var d = new Date();
        if (d-self.dragExec>20) {
          self.setPosition(e);
        } else {
          window.clearTimeout(self.dragTimer);
          self.dragTimer = window.setTimeout(function(){self.setPosition(e);},20);
        }
        self.dragExec = d;
      } else {
        // oh the hell with it
        self.setPosition(e);
      }
    } else {
      self.stopDrag();
    }
    e.stopPropagation = true;
    return false;
  };
  
  this.stopDrag = function(e) {
    if (self.dragActive) {
      self.removeClass(self.lastSound._data.oControls,'dragging');
      if (!isTouchDevice) {
        _event.remove(document,'mousemove',self.handleMouseMove);
      } else {
        _event.remove(document,'touchmove',self.handleMouseMove);
      }
      if (!pl.hasClass(self.lastSound._data.oLI,self.css.sPaused)) {
        self.lastSound.resume();
      }
      self.dragActive = false;
      return self.stopEvent(e);
    }
  };
  
  this.handleStatusClick = function(e) {
    self.setPosition(e);
    if (!pl.hasClass(self.lastSound._data.oLI,self.css.sPaused)) {
      self.resume();
    }
    return self.stopEvent(e);
  };
  
  this.stopEvent = function(e) {
    if (typeof e !== 'undefined') {
      if (typeof e.preventDefault !== 'undefined') {
        e.preventDefault();
      } else {
        e.stopPropagation = true;
        e.returnValue = false;
      }
    }
    return false;
  };
 
  this.setPosition = function(e) {
    // called from slider control
    var oThis = self.getTheDamnTarget(e),
        x, oControl, oSound, nMsecOffset;
    if (!oThis) {
      return true;
    }
    oControl = oThis;
    while (!self.hasClass(oControl,'controls') && oControl.parentNode) {
      oControl = oControl.parentNode;
    }
    oSound = self.lastSound;
    x = parseInt(e.clientX,10);
    // play sound at this position
    nMsecOffset = Math.floor((x-self.getOffX(oControl)-4)/(oControl.offsetWidth)*self.getDurationEstimate(oSound));
    if (!isNaN(nMsecOffset)) {
      nMsecOffset = Math.min(nMsecOffset,oSound.duration);
    }
    if (!isNaN(nMsecOffset)) {
      oSound.setPosition(nMsecOffset);
    }
  };

  this.stopSound = function(oSound) {
    sm._writeDebug('stopping sound: '+oSound.sID);
    sm.stop(oSound.sID);
    if (!isTouchDevice) { // iOS 4.2+ security blocks onfinish() -> playNext() if we set a .src in-between(?)
      sm.unload(oSound.sID);
    }
  };

  this.getDurationEstimate = function(oSound) {
    if (oSound.instanceOptions.isMovieStar) {
      return (oSound.duration);
    } else {
      return (!oSound._data.metadata || !oSound._data.metadata.data.givenDuration ? (oSound.durationEstimate||0) : oSound._data.metadata.data.givenDuration);
    }
  };

  this.createVUData = function() {

    var i=0, j=0,
      canvas = vuDataCanvas.getContext('2d'),
      vuGrad = canvas.createLinearGradient(0, 16, 0, 0),
      bgGrad, outline;

    vuGrad.addColorStop(0,'rgb(0,192,0)');
    vuGrad.addColorStop(0.30,'rgb(0,255,0)');
    vuGrad.addColorStop(0.625,'rgb(255,255,0)');
    vuGrad.addColorStop(0.85,'rgb(255,0,0)');
    bgGrad = canvas.createLinearGradient(0, 16, 0, 0);
    outline = 'rgba(0,0,0,0.2)';
    bgGrad.addColorStop(0,outline);
    bgGrad.addColorStop(1,'rgba(0,0,0,0.5)');
    for (i=0; i<16; i++) {
      self.vuMeterData[i] = [];
    }
    for (i=0; i<16; i++) {
      for (j=0; j<16; j++) {
        // reset/erase canvas
        vuDataCanvas.setAttribute('width',16);
        vuDataCanvas.setAttribute('height',16);
        // draw new stuffs
        canvas.fillStyle = bgGrad;
        canvas.fillRect(0,0,7,15);
        canvas.fillRect(8,0,7,15);
        /*
        // shadow
        canvas.fillStyle = 'rgba(0,0,0,0.1)';
        canvas.fillRect(1,15-i,7,17-(17-i));
        canvas.fillRect(9,15-j,7,17-(17-j));
        */
        canvas.fillStyle = vuGrad;
        canvas.fillRect(0,15-i,7,16-(16-i));
        canvas.fillRect(8,15-j,7,16-(16-j));
        // and now, clear out some bits.
        canvas.clearRect(0,3,16,1);
        canvas.clearRect(0,7,16,1);
        canvas.clearRect(0,11,16,1);
        self.vuMeterData[i][j] = vuDataCanvas.toDataURL('image/png');
        // for debugging VU images
        /*
        var o = document.createElement('img');
        o.style.marginRight = '5px'; 
        o.src = self.vuMeterData[i][j];
        document.documentElement.appendChild(o);
        */
      }
    }

  };

  this.testCanvas = function() {
    // canvas + toDataURL();
    var c = document.createElement('canvas'),
        ctx = null, ok;
    if (!c || typeof c.getContext === 'undefined') {
      return null;
    }
    ctx = c.getContext('2d');
    if (!ctx || typeof c.toDataURL !== 'function') {
        return null;
    }
    // just in case..
    try {
        ok = c.toDataURL('image/png');
    } catch(e) {
      // no canvas or no toDataURL()
      return null;
    }
    // assume we're all good.
    return c;
  };

  this.initItem = function(oNode) {
    if (!oNode.id) {
      oNode.id = 'pagePlayerMP3Sound'+(self.soundCount++);
    }
    self.addClass(oNode,self.css.sDefault); // add default CSS decoration
  };

  this.initUL = function(oULNode) {
    // set up graph box stuffs
    if (sm.flashVersion >= 9) {
        self.addClass(oULNode,self.cssBase);
    }
  };

  this.init = function(oConfig) {

    if (oConfig) {
      // allow overriding via arguments object
      sm._writeDebug('pagePlayer.init(): Using custom configuration');
      this.config = this._mergeObjects(oConfig,this.config);
    } else {
      sm._writeDebug('pagePlayer.init(): Using default configuration');
    }

    var i, spectrumBox, sbC, oF, oClone, oTiming;

    // apply externally-defined override, if applicable
    this.cssBase = []; // optional features added to ul.playlist

    // apply some items to SM2
    sm.useFlashBlock = true;

    if (sm.flashVersion >= 9) {

      sm.useMovieStar = this.config.useMovieStar; // enable playing FLV, MP4 etc.
      sm.defaultOptions.usePeakData = this.config.usePeakData;
      sm.defaultOptions.useWaveformData = this.config.useWaveformData;
      sm.defaultOptions.useEQData = this.config.useEQData;

      if (this.config.usePeakData) {
        this.cssBase.push('use-peak');
      }

      if (this.config.useWaveformData || this.config.useEQData) {
        this.cssBase.push('use-spectrum');
      }

      this.cssBase = this.cssBase.join(' ');

      if (this.config.useFavIcon) {
        vuDataCanvas = self.testCanvas();
        if (vuDataCanvas && supportsFavicon) {
          // these browsers support dynamically-updating the favicon
          self.createVUData();
        } else {
          // browser doesn't support doing this
          this.config.useFavIcon = false;
        }
      }

    } else if (this.config.usePeakData || this.config.useWaveformData || this.config.useEQData) {

      sm._writeDebug('Page player: Note: soundManager.flashVersion = 9 is required for peak/waveform/EQ features.');

    }

    controlTemplate = document.createElement('div');

     controlTemplate.innerHTML = [

      // control markup inserted dynamically after each page player link
      // if you want to change the UI layout, this is the place to do it.

      '  <div class="controls">',
      '   <div class="statusbar">',
      '    <div class="loading"></div>',
      '    <div class="position"></div>',
      '   </div>',
      '  </div>',

      // '  <div class="timing">',
      // '   <div id="sm2_timing" class="timing-data">',
      // '    <span class="sm2_position">%s1</span> / <span class="sm2_total">%s2</span>',
      // '   </div>',
      // '  </div>',

      '  <div class="peak">',
      '   <div class="peak-box"><span class="l"></span><span class="r"></span></div>',
      '  </div>',

      ' <div class="spectrum-container">',
      '  <div class="spectrum-box">',
      '   <div class="spectrum"></div>',
      '  </div>',
      ' </div>'

    ].join('\n');

    if (sm.flashVersion >= 9) {

      // create the spectrum box ish
      spectrumContainer = self.select('spectrum-container',controlTemplate);

      // take out of template, too
      spectrumContainer = controlTemplate.removeChild(spectrumContainer);

      spectrumBox = self.select('spectrum-box',spectrumContainer);

      sbC = spectrumBox.getElementsByTagName('div')[0];
      oF = document.createDocumentFragment();
      oClone = null;
      for (i=256; i--;) {
        oClone = sbC.cloneNode(false);
        oClone.style.left = (i)+'px';
        oF.appendChild(oClone);
      }
      spectrumBox.removeChild(sbC);
      spectrumBox.appendChild(oF);

    } else {

      // flash 8-only, take out the spectrum container and peak elements
      controlTemplate.removeChild(self.select('spectrum-container',controlTemplate));
      controlTemplate.removeChild(self.select('peak',controlTemplate));

    }

    self.oControls = controlTemplate.cloneNode(true);

    // oTiming = self.select('timing-data',controlTemplate);
    // self.strings.timing = oTiming.innerHTML;
    // oTiming.innerHTML = '';
    // oTiming.id = '';

    function doEvents(action) { // action: add / remove

      _event[action](document,'click',self.handleClick);

      if (!isTouchDevice) {
        _event[action](document,'mousedown',self.handleMouseDown);
        _event[action](document,'mouseup',self.stopDrag);
      } else {
        _event[action](document,'touchstart',self.handleMouseDown);
        _event[action](document,'touchend',self.stopDrag);
      }

      _event[action](window, 'unload', cleanup);

    }

    cleanup = function() {
      doEvents('remove');
    };

    doEvents('add');

    sm._writeDebug('pagePlayer.init(): Ready',1);

    if (self.config.autoStart) {
      // grab the first ul.playlist link
      pl.handleClick({target:pl.getByClassName('playlist', 'ul')[0].getElementsByTagName('a')[0]});
    }

  };

}

soundManager.useFlashBlock = true;

soundManager.onready(function() {
  pagePlayer = new PagePlayer();
  pagePlayer.init(typeof PP_CONFIG !== 'undefined' ? PP_CONFIG : null);
});

// application.js

function human_size(bytes) {
  var s = ['bytes', 'kb', 'MB', 'GB', 'TB', 'PB'];
  var e = Math.floor(Math.log(bytes)/Math.log(1024));
  return (bytes/Math.pow(1024, Math.floor(e))).toFixed(2)+" "+s[e];
}

Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

// soundmanager

// demo only, but you can use these settings too..
soundManager.useHTML5Audio = true;
soundManager.flashVersion = 9;
soundManager.useHighPerformance = true; // keep flash on screen, boost performance
soundManager.wmode = 'transparent'; // transparent SWF, if possible
soundManager.useFastPolling = true; // increased JS callback frequency
soundManager.url = '/flash/';

// custom page player configuration

var PP_CONFIG = {
  autoStart: false,      // begin playing first sound when page loads
  playNext: true,        // stop after one sound, or play through list until end
  useThrottling: false,  // try to rate-limit potentially-expensive calls (eg. dragging position around)</span>
  usePeakData: false,     // [Flash 9 only] whether or not to show peak data (left/right channel values) - nor noticable on CPU
  useWaveformData: false,// [Flash 9 only] show raw waveform data - WARNING: LIKELY VERY CPU-HEAVY
  useEQData: false,      // [Flash 9 only] show EQ (frequency spectrum) data
  useFavIcon: false,     
  useMovieStar: true,     // Flash 9.0r115+ only: Support for a subset of MPEG4 formats.
  updatePageTitle: false
}

$(document).ready(function(){
  
  // new invitation form

  $("input#invitation_email").ezpz_hint();

  function newInvitationSubmit() {
    $("#new_invitation_status").html('<img src="/images/spinner1.gif" /></div>');
    $("#new_invitation_submit").attr("value", "sending...").attr("disabled", true);
  }

  function newInvitationSuccess() {
    $("#new_invitation_submit").attr("value", "send").attr("disabled", false);
  }

  $('#new_invitation').ajaxForm({
    target : '#new_invitation_status',
    beforeSubmit : newInvitationSubmit,
    success : newInvitationSuccess,
    clearForm : true,
    resetForm : true
  });
  
  $('#sandwiches h5 .like-link').click(function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    var action = url.split('/').pop();
    var me = this;
    $(this).html('...');
    $.getJSON(url, function(json) {
      if (action == 'like') {
        // we just liked it, change the link to unlike
        $(me).attr('href', url.replace('like','unlike'));
        $(me).html('Unlike');
        // increment the count!
        var cur = $(me).siblings('.count').html();
        $(me).siblings('.count').html(parseInt(cur)+1);
      } else {
        // we just unliked it, change the link to like
        $(me).attr('href', url.replace('unlike','like'));
        $(me).html('Like');
        // decrement the count!
        var cur = $(me).siblings('.count').html();
        $(me).siblings('.count').html(parseInt(cur)-1);
      };
    });
  });
  
  $('#sandwiches h5 .comments-link').toggle(function(e) {
    e.preventDefault();
    var cur = $(this).html();
    var me = this;
    $(this).html('Loading...').closest('.sandwich').find('.comments').load($(this).attr('href'),function(){
        $(me).html(cur);
        $(this).slideDown('fast');
        $(this).find('form').ajaxForm({
          beforeSubmit: function(arr,form) {
            form.siblings('ul').find('li.error').remove();
          },
          success: function(resp,a,form) {
            form.siblings('ul').append(resp);
            form.find('textarea').val('');
          }
        });
    });
  }, function(e) {
    e.preventDefault();
    // hide comments
    $(this).closest('.sandwich').find('.comments').slideUp('fast', function() {
      $(this).html('');
    });
    ;
  });
    



  // var sm = soundManager;
  // 
  // sm.url = '/flash';
  // sm.debugMode = false;
  // sm.useConsole = false;
  // sm.useHighPerformance = true;
  // soundManager.flashVersion = 9;
  // sm.useMovieStar = true; // MP4/M4A/AAC
  // 
  // sm.onready(function(){
  //   $('a.post').each(function(){
  //     $(this).makePlayable();
  //   });
  // });
  // 
  // $.fn.makePlayable = function(){
  //   $(this).addClass('playable');
  // 
  //   soundManager.createSound({
  //    id:$(this).attr('id'),
  //    url:$(this).attr('href'),
  //    onfinish:function(){
  //      $('#'+this.sID).parent().next().find('a.playable').play();
  //    }
  //   });
  // 
  //   $(this).click(function(e){
  //     e.preventDefault();
  //     $(this).play();
  //   });
  // };
  // 
  // $.fn.play = function(){
  //   if ($(this).hasClass('playing')){
  //     $(this).removeClass('playing');
  //     $(this).addClass('paused');
  //     sm.pause($(this).attr('id'));
  //     return;
  //   } if ($(this).hasClass('paused')){
  //     $(this).removeClass('paused');
  //     $(this).addClass('playing');
  //     sm.resume($(this).attr('id'));
  //     return;
  //   } else {
  //     sm.stopAll();
  //     $('.playing').removeClass('playing');
  //     $('.paused').removeClass('paused');
  //     $(this).addClass('playing');
  //     sm.play($(this).attr('id'));
  //     return;
  //   }
  // };

});
