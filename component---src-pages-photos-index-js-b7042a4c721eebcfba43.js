(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(0),a=n.n(r),o=n(311),i=n(289),c=n(321),l=n.n(c),s=n(322),u=n.n(s),f=n(323),p=n.n(f),E=n(324),T=n.n(E),m=n(140),d=n.n(m),A=n(325),h=n.n(A),b=n(326),g=n.n(b),y=n(327),S=n.n(y);var v=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(o.a,{page:"Photos"},a.a.createElement("div",null,a.a.createElement("h2",{className:i.photosTitle},"Photos"),a.a.createElement("div",{className:i.gallery},a.a.createElement("div",null,a.a.createElement("a",{href:l.a},a.a.createElement("img",{className:i.galleryImage,src:l.a,alt:"CommonBlue"}))),a.a.createElement("div",null,a.a.createElement("a",{href:u.a},a.a.createElement("img",{className:i.galleryImage,src:u.a,alt:"Alps"}))),a.a.createElement("div",null,a.a.createElement("a",{href:p.a},a.a.createElement("img",{className:i.galleryImage,src:p.a,alt:"Harvest"}))),a.a.createElement("div",null,a.a.createElement("a",{href:T.a},a.a.createElement("img",{className:i.galleryImage,src:T.a,alt:"GreatWillowHerb"}))),a.a.createElement("div",null,a.a.createElement("a",{href:d.a},a.a.createElement("img",{className:i.galleryImage,src:d.a,alt:"Sunset"}))),a.a.createElement("div",null,a.a.createElement("a",{href:h.a},a.a.createElement("img",{className:i.galleryImage,src:h.a,alt:"Rockpools"}))),a.a.createElement("div",null,a.a.createElement("a",{href:g.a},a.a.createElement("img",{className:i.galleryImage,src:g.a,alt:"Peninsula"}))),a.a.createElement("div",null,a.a.createElement("a",{href:S.a},a.a.createElement("img",{className:i.galleryImage,src:S.a,alt:"Beach"}))))))},r}(a.a.Component)},300:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(97),i=n.n(o);n.d(t,"a",function(){return i.a});n(302),n(17).default.enqueue,a.a.createContext({})},301:function(e,t,n){n(99),n(33),n(7),n(16),n(3),n(22),n(53),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map(function(e){return r[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce(function(e,t){return e[a[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},302:function(e,t,n){var r;e.exports=(r=n(310))&&r.default||r},303:function(e,t,n){n(54),n(200),n(7),n(16),n(3),n(22),n(34),n(202),n(98),n(23),n(76),n(28),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n(0)),i=f(n(2)),c=f(n(304)),l=f(n(306)),s=n(307),u=n(301);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var E,T,m,d=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)(function(){return null}),A=(E=d,m=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach(function(t){var a;n=r({},n,((a={})[t]=e[t],a))}),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,o=a.children,i=p(a,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(E,a)},a(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(o.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=E.peek,T.rewind=function(){var e=E.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},304:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n(23),n(53),n(33),n(98),n(76);var a=n(0),o=r(a),i=r(n(305));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function f(){s=e(u.map(function(e){return e.props})),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){u.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},c.render=function(){return o.createElement(r,this.props)},a}(a.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",l),p}}},305:function(e,t,n){n(69),n(7),n(16),n(3),n(22),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var s=o[l];if(!c(s))return!1;var u=e[s],f=t[s];if(!1===(a=n?n.call(r,u,f,s):void 0)||void 0===a&&u!==f)return!1}return!0}},306:function(e,t,n){"use strict";n(33),n(103),n(26),n(68),n(201),n(7),n(16),n(3),n(22),n(54);var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,s,u=r(t),f=r(n);if(u&&f){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,E=n instanceof Date;if(p!=E)return!1;if(p&&E)return t.getTime()==n.getTime();var T=t instanceof RegExp,m=n instanceof RegExp;if(T!=m)return!1;if(T&&m)return t.toString()==n.toString();var d=a(t);if((l=d.length)!==a(n).length)return!1;for(c=l;0!=c--;)if(!o.call(n,d[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(s=d[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},307:function(e,t,n){(function(e){n(200),n(35),n(105),n(34),n(54),n(23),n(7),n(16),n(3),n(22),n(70),n(53),n(99),n(18),n(28),n(24),n(11),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n(0)),i=l(n(104)),c=n(301);function l(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=d(e,c.TAG_NAMES.TITLE),n=d(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=d(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return d(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},T=function(e,t){return t.filter(function(e){return void 0!==e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t},[])},m=function(e,t,n){var a={};return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var r={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],s=l.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(r),l=0;l<o.length;l++){var s=o[l],u=(0,i.default)({},a[s],r[s]);a[s]=u}return e},[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout(function(){A(e)},0)}),h=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,p=e.title,E=e.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,a),O(p,E);var T={baseTag:N(c.TAG_NAMES.BASE,n),linkTags:N(c.TAG_NAMES.LINK,o),metaTags:N(c.TAG_NAMES.META,i),noscriptTags:N(c.TAG_NAMES.NOSCRIPT,l),scriptTags:N(c.TAG_NAMES.SCRIPT,u),styleTags:N(c.TAG_NAMES.STYLE,f)},m={},d={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(d[e]=T[e].oldTags)}),t&&t(),s(e,m,d)},_=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var s=i[l],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var f=o.indexOf(s);-1!==f&&o.splice(f,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},N=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return i=t,n.isEqualNode(e)})?a.splice(i,1):o.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:o}},R=function(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},M=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=w(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=R(n),o=_(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),o.default.createElement(e,a)})}(e,t)},toString:function(){return function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a},""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")},"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},t.handleClientStateChange=function(e){S&&g(S),e.defer?S=b(function(){v(e,function(){S=null})}):(v(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,p=void 0===f?"":f,E=e.titleAttributes;return{base:M(c.TAG_NAMES.BASE,t,r),bodyAttributes:M(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:M(c.ATTRIBUTE_NAMES.HTML,a,r),link:M(c.TAG_NAMES.LINK,o,r),meta:M(c.TAG_NAMES.META,i,r),noscript:M(c.TAG_NAMES.NOSCRIPT,l,r),script:M(c.TAG_NAMES.SCRIPT,s,r),style:M(c.TAG_NAMES.STYLE,u,r),title:M(c.TAG_NAMES.TITLE,{title:p,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:E(c.ATTRIBUTE_NAMES.BODY,e),defer:d(e,c.HELMET_PROPS.DEFER),encode:d(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:E(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=y}).call(this,n(78))},308:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"George Pearson","siteDescription":"A blog about software development, science, and other musings by George Pearson.","siteUrl":"https://georgepearson.co.uk","twitterUsername":"@georgepearson_"}}}}')},309:function(e,t,n){e.exports=n.p+"static/logo-36c380baed089e7babf4701d113abc74.png"},310:function(e,t,n){"use strict";n.r(t);n(77),n(11),n(7),n(16),n(3),n(22);var r=n(0),a=n.n(r),o=n(139);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},311:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(303),i=n.n(o),c=n(308),l=function(){return c.data.site.siteMetadata},s=n(309),u=n.n(s),f=function(e){var t=e.page,n=e.post,r=l(),o=r.author,c=r.siteDescription,s=r.siteUrl,f=r.twitterUsername,p=n?n.frontmatter.title:t,E=n?n.frontmatter.subtitle:c,T=p+" | "+o,m=n&&n.frontmatter.image?n.frontmatter.image:u.a;return a.a.createElement(i.a,null,a.a.createElement("title",null,T),a.a.createElement("meta",{name:"description",content:E}),a.a.createElement("meta",{property:"og:url",content:s}),a.a.createElement("meta",{property:"og:site_name",content:s}),a.a.createElement("meta",{property:"og:description",content:E}),a.a.createElement("meta",{property:"og:title",content:T}),a.a.createElement("meta",{property:"og:image",content:m}),a.a.createElement("meta",{name:"twitter:title",content:T}),a.a.createElement("meta",{name:"twitter:creator",content:f}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:description",content:E}),a.a.createElement("meta",{name:"twitter:image",content:m}),"production"==={}&&a.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-134616286-1"}),"production"==={}&&a.a.createElement("script",null,"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'UA-134616286-1');\n        "))},p=n(138),E=n.n(p),T=n(274),m=n(300),d=n(100),A=n(101),h=function(e){var t=e.navButtonClickHandler,n=e.show?T.header:T.headerClosed;return a.a.createElement("header",{className:n},a.a.createElement("nav",{className:T.navBar},a.a.createElement(m.a,{to:"/"},a.a.createElement(E.a,{className:T.logo})),a.a.createElement("button",{className:T.navButton,onClick:t},a.a.createElement(d.a,{className:T.navButtonIcon,icon:A.a,size:"2x"})),a.a.createElement("div",{className:T.navBarMenu},a.a.createElement(m.a,{to:"/",className:T.navBarItem},"Home"),a.a.createElement(m.a,{to:"/about",className:T.navBarItem},"About"),a.a.createElement(m.a,{to:"/photos",className:T.navBarItem},"Photos"))))},b={prefix:"fab",iconName:"github-alt",icon:[480,512,[],"f113","M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"]},g={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},y={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},S=n(275),v=function(){var e=l().twitterUsername;return a.a.createElement("footer",{className:S.footer},a.a.createElement("div",{className:S.socialIcons},a.a.createElement("a",{className:S.socialIconLink,href:"https://github.com/george-pearson"},a.a.createElement(d.a,{icon:b,className:S.socialIcon,size:"3x"})),a.a.createElement("a",{className:S.socialIconLink,href:"https://linkedin.com/in/george-pearson-27244a30"},a.a.createElement(d.a,{icon:g,className:S.socialIcon,size:"3x"})),a.a.createElement("a",{className:S.socialIconLink,href:"https://twitter.com/"+e},a.a.createElement(d.a,{icon:y,className:S.socialIcon,size:"3x"})),a.a.createElement("a",{className:S.socialIconLink,href:"mailto:george-pearson.business@outlook.com"},a.a.createElement(d.a,{icon:A.d,className:S.socialIcon,size:"3x"}))),a.a.createElement("p",null,"© George Pearson ",(new Date).getFullYear()))},_=n(276),O=function(e){var t=e.show;return a.a.createElement("nav",{className:t?_.sidebarOpen:_.sidebar},a.a.createElement(E.a,{className:_.logo}),a.a.createElement(m.a,{to:"/",className:_.sidebarItem},"Home"),a.a.createElement(m.a,{to:"/about",className:_.sidebarItem},"About"),a.a.createElement(m.a,{to:"/photos",className:_.sidebarItem},"Photos"))},P=n(277),N=function(e){var t=e.backdropClickHandler;return a.a.createElement("div",{className:P.backdrop,onClick:t})},R=n(278);t.a=function(e){var t=e.page,n=e.post,o=e.children,i=Object(r.useState)(!1),c=i[0],l=i[1],s=Object(r.useState)(!0),u=s[0],p=s[1],E=Object(r.useState)(0),T=E[0],m=E[1];Object(r.useLayoutEffect)(function(){return document.addEventListener("scroll",d),function(){document.removeEventListener("scroll",d)}});var d=function(){var e="undefined"!=typeof window?window.pageYOffset:0;p(T>=e),m(e)};return a.a.createElement("div",null,a.a.createElement(f,{page:t,post:n}),a.a.createElement(h,{show:u,navButtonClickHandler:function(){l(function(e){return!e.sidebarOpen})}}),a.a.createElement(O,{show:c}),c&&a.a.createElement(N,{backdropClickHandler:function(){l(!1)}}),a.a.createElement("div",{className:R.fixedFooterWrapper},a.a.createElement("main",{className:R.main},o),a.a.createElement(v,null)))}},321:function(e,t,n){e.exports=n.p+"static/CommonBlue-4ea902dd0bf4c351805da6d0764f16ed.jpg"},322:function(e,t,n){e.exports=n.p+"static/Alps-c9de20e6a4c99a695be476b0237444a2.jpg"},323:function(e,t,n){e.exports=n.p+"static/Harvest-4dce8119bfa7df2e694185909356987b.jpg"},324:function(e,t,n){e.exports=n.p+"static/GreatWillowHerb-b2ec1213061d487c722ef10f84c6333c.jpg"},325:function(e,t,n){e.exports=n.p+"static/Rockpools-6b0035f9e08545c0290d1407315f48c3.jpg"},326:function(e,t,n){e.exports=n.p+"static/Peninsula-a8067e961c042e3f4cd36ef1c8caf2ad.jpg"},327:function(e,t,n){e.exports=n.p+"static/Beach-3db96686823e8e098a868fd03b312a2e.jpg"}}]);
//# sourceMappingURL=component---src-pages-photos-index-js-b7042a4c721eebcfba43.js.map