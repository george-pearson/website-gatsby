(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3/N7":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"George Pearson","siteDescription":"A blog about software development, science, and other musings by George Pearson.","siteUrl":"https://georgepearson.co.uk","twitterUsername":"@georgepearson_"}}}}')},"4Daz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("8k0H"),i=n("RmR6"),l=n.n(i),s=n("rnSj");var c=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(o.a,{page:"NotFound"},a.a.createElement("div",{className:s.container},a.a.createElement(l.a,{className:s.logoBracketsNotFound}),a.a.createElement("p",null,"Uh-oh, we can't seem to find that page..."),a.a.createElement("a",{className:"blueLink",href:"/"},"Back to homepage")))},r}(a.a.Component)},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function f(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){u.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},l.render=function(){return o.createElement(r,this.props)},a}(a.Component);return l(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(d,"canUseDOM",s),d}}},"8k0H":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),l=n("3/N7"),s=function(){return l.data.site.siteMetadata},c=n("AArq"),u=n.n(c),f=function(e){var t=e.page,n=e.post,r=s(),o=r.author,l=r.siteDescription,c=r.siteUrl,f=r.twitterUsername,d=n?n.frontmatter.title:t,m=n?n.frontmatter.subtitle:l,p=d+" | "+o,E=n&&n.frontmatter.image?""+c+n.frontmatter.image:u.a,T=n&&n.fields.slug?""+c+n.fields.slug:c;return a.a.createElement(i.a,null,a.a.createElement("html",{lang:"en"}),a.a.createElement("title",null,p),a.a.createElement("meta",{name:"description",content:m}),a.a.createElement("meta",{property:"og:url",content:T}),a.a.createElement("meta",{property:"og:site_name",content:c}),a.a.createElement("meta",{property:"og:description",content:m}),a.a.createElement("meta",{property:"og:title",content:p}),a.a.createElement("meta",{property:"og:image",content:E}),a.a.createElement("meta",{name:"twitter:title",content:p}),a.a.createElement("meta",{name:"twitter:creator",content:f}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:description",content:m}),a.a.createElement("meta",{name:"twitter:image",content:E}),a.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-134616286-1"}),a.a.createElement("script",null,"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'UA-134616286-1');\n        "))},d=n("f1eh"),m=n.n(d),p=n("ZJa9"),E=n("Wbzz"),T=n("IP2g"),h=n("wHSu"),y=function(e){var t=e.navButtonClickHandler,n=e.show?p.header:p.headerClosed;return a.a.createElement("header",{className:n},a.a.createElement("nav",{className:p.navBar},a.a.createElement(E.Link,{to:"/"},a.a.createElement(m.a,{"aria-label":"home",className:p.logo})),a.a.createElement("button",{"aria-label":"navigation button",className:p.navButton,onClick:t},a.a.createElement(T.a,{className:p.navButtonIcon,icon:h.a,size:"2x"})),a.a.createElement("div",{className:p.navBarMenu},a.a.createElement(E.Link,{to:"/",className:p.navBarItem},"Home"),a.a.createElement(E.Link,{to:"/about",className:p.navBarItem},"About"),a.a.createElement(E.Link,{to:"/photos",className:p.navBarItem},"Photos"))))},A={prefix:"fab",iconName:"github-alt",icon:[480,512,[],"f113","M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"]},k={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},b={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},S=n("TZu4"),g=function(){var e=s().twitterUsername;return a.a.createElement("footer",{className:S.footer},a.a.createElement("div",{className:S.socialIcons},a.a.createElement("a",{"aria-label":"GitHub",className:S.socialIconLink,href:"https://github.com/george-pearson"},a.a.createElement(T.a,{icon:A,className:S.socialIcon,size:"3x"})),a.a.createElement("a",{"aria-label":"Linkedin",className:S.socialIconLink,href:"https://linkedin.com/in/george-pearson-27244a30"},a.a.createElement(T.a,{icon:k,className:S.socialIcon,size:"3x"})),a.a.createElement("a",{"aria-label":"Twitter",className:S.socialIconLink,href:"https://twitter.com/"+e},a.a.createElement(T.a,{icon:b,className:S.socialIcon,size:"3x"})),a.a.createElement("a",{"aria-label":"Email",className:S.socialIconLink,href:"mailto:george-pearson.business@outlook.com"},a.a.createElement(T.a,{icon:h.d,className:S.socialIcon,size:"3x"}))),a.a.createElement("p",null,"© George Pearson ",(new Date).getFullYear()))},N=n("Vo7p"),v=function(e){var t=e.show;return a.a.createElement("nav",{className:t?N.sidebarOpen:N.sidebar},a.a.createElement(m.a,{className:N.logo}),a.a.createElement(E.Link,{to:"/",className:N.sidebarItem},"Home"),a.a.createElement(E.Link,{to:"/about",className:N.sidebarItem},"About"),a.a.createElement(E.Link,{to:"/photos",className:N.sidebarItem},"Photos"))},_=n("i+qx"),O=function(e){var t=e.backdropClickHandler;return a.a.createElement("div",{className:_.backdrop,onClick:t,onKeyDown:t,role:"menuitem",tabIndex:"0"})},R=n("yzM9");t.a=function(e){var t=e.page,n=e.post,o=e.children,i=Object(r.useState)(!1),l=i[0],s=i[1],c=Object(r.useState)(!0),u=c[0],d=c[1],m=Object(r.useState)(0),p=m[0],E=m[1];Object(r.useLayoutEffect)((function(){return document.addEventListener("scroll",T),function(){document.removeEventListener("scroll",T)}}));var T=function(){var e="undefined"!=typeof window?window.pageYOffset:0;d(p>=e),E(e)};return a.a.createElement("div",null,a.a.createElement(f,{page:t,post:n}),a.a.createElement(y,{show:u,navButtonClickHandler:function(){s((function(e){return!e.sidebarOpen}))}}),a.a.createElement(v,{show:l}),l&&a.a.createElement(O,{backdropClickHandler:function(){s(!1)}}),a.a.createElement("div",{className:R.fixedFooterWrapper},a.a.createElement("main",{className:R.main},o),a.a.createElement(g,null)))}},AArq:function(e,t,n){e.exports=n.p+"static/logo-36c380baed089e7babf4701d113abc74.png"},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],f=t[c];if(!1===(a=n?n.call(r,u,f,c):void 0)||void 0===a&&u!==f)return!1}return!0}},RmR6:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("text",{id:"404",className:"text",style:{fontSize:"730px",fontFamily:"sans-serif",fill:"#00c1c1",stroke:"#09616c",strokeWidth:"15",strokeLinejoin:"round"},x:"30",y:"540",key:0},"404"),r.createElement("text",{id:"questionMark",className:"text",style:{fontSize:"400px",fontFamily:"sans-serif",fill:"#00c1c1",stroke:"#09616c",strokeWidth:"11",strokeLinejoin:"round"},x:"720",y:"860",key:1},"?"),r.createElement("path",{id:"hair",className:"shade",style:{fill:"#312929",fillOpacity:"1",fillRule:"nonzero",stroke:"none",strokeWidth:"4"},d:"m 381.79528,820.96888 c -4.1407,-14.81568 -6.276,-34.10848 -9.0371,-50.72733 -6.3951,-48.53633 -5.4314,-102.95898 26.3089,-143.18993 11.1056,-15.29491 27.9196,-25.27745 46.08,-29.66443 4.102,-0.68284 16.4402,-9.19631 10.3705,-0.20831 -4.3379,7.09986 -13.6935,34.16911 1.4777,20.591 29.1645,-16.99129 61.4536,-29.52375 94.8651,-34.58093 13.572,-0.81272 27.0118,1.74736 40.4939,2.90093 -8.2541,7.94071 -19.6111,13.3597 -25.92,22.72 38.0844,2.03756 72.17,23.17729 99.0621,48.93938 -6.8511,2.37581 -27.5023,-0.52607 -39.3363,3.16375 -17.3235,1.42384 -32.6089,10.3838 -46.2868,20.53687 -43.3567,30.73622 -94.299,52.04884 -147.464,56.85 -6.6616,6.47001 -0.1124,27.96215 -5.2569,39.6668 -4.2414,22.26047 -23.1442,39.27185 -45.0381,43.6422 z",key:2}),r.createElement("path",{id:"face",className:"shade",style:{fill:"#efcebd",fillOpacity:"1",fillRule:"nonzero",stroke:"none",strokeWidth:"4"},d:"m 588.19328,945.76788 c -49.7859,-1.78289 -93.696,-27.95143 -136.5903,-50.49375 -12.6559,-5.54369 -24.7444,14.48778 -40.2782,10.77781 -26.5165,-0.42335 -48.7549,-23.75238 -55.2352,-48.31531 -5.4398,-18.92392 13.3325,-31.78863 29.2247,-36.12775 21.8186,-5.97249 41.4161,-23.43182 43.6714,-46.91352 3.293,-15.19856 -6.5639,-41.39531 18.7017,-37.84398 37.5432,-5.74581 74.232,-17.62722 106.4755,-37.98784 13.1359,-3.37221 30.0466,-28.98432 40.2208,-18.98366 5.0769,16.63334 20.3755,36.27496 11.3002,53.19344 -13.7542,18.3016 -23.2359,43.98202 -11.9131,65.79906 8.6203,17.49344 26.0965,28.75866 43.3825,36.8165 -8.0053,36.00398 -16.646,72.30451 -31.8063,106.05625 -2.5631,6.59635 -11.8384,2.78543 -17.1537,4.02275 z m -1.28,-40 c 6.8765,-3.80189 19.3804,-19.27694 16.285,-21.26 -1.3495,12.9642 -26.3454,21.39606 -24.7,27.56 3.2373,-1.42346 5.4957,-4.37708 8.415,-6.3 z m -24.64,-34.56 c 30.4345,-24.38664 31.4748,-77.28873 -0.5338,-100.824 -23.7738,-21.23615 -60.6045,-14.53757 -83.6262,4.185 -19.8332,20.23263 -24.7031,54.38306 -10.0212,78.955 12.3524,25.0954 43.7669,33.37911 69.6297,28.77563 9.348,-0.57952 17.6163,-5.01531 24.5515,-11.09163 z m -148.479,4.48 c 2.2277,-7.20227 -18.7409,13.69844 -23.48,-0.52 -17.1716,-22.97847 16.9734,-20.69895 28.145,-19.675 -13.8633,-5.56872 -45.8704,-4.51846 -31.065,17.595 5.7379,11.14121 17.8726,8.60518 26.4,2.6 z",key:3}),r.createElement("path",{id:"rightEyeLeftFill",className:"shade",style:{fill:"#00adef",fillOpacity:"1",fillRule:"nonzero",stroke:"none",strokeWidth:"4"},d:"m 657.63328,830.56888 c -16.3884,6.3829 -32.8686,-0.3136 -45.3745,-11.40078 -25.2738,-18.87186 -29.5163,-60.80327 -8.118,-83.95203 10.4263,-11.11047 26.4312,-12.86892 40.6925,-15.04719 -11.6033,9.1473 -24.4014,19.32227 -28.5307,34.53356 -8.9024,26.51634 4.3047,61.16623 33.0456,68.38332 5.4536,1.68671 22.9034,3.58349 8.2851,7.48312 z",key:4}),r.createElement("path",{id:"leftEyeLeftFill",className:"shade",style:{fill:"#00adef",fillOpacity:"1",fillRule:"nonzero",stroke:"none",strokeWidth:"4"},d:"m 507.87428,881.44888 c -30.4708,-5.78363 -53.2174,-38.29544 -46.1094,-68.88313 1.8303,-21.24734 13.6935,-45.09311 37.0097,-48.24807 6.3306,-1.63343 12.6443,-3.33499 19.0197,-4.7888 -15.8413,9.98879 -28.4556,26.44469 -35.1397,43.90617 -9.8584,29.28995 7.6494,63.27929 36.2903,74.01071 15.1104,6.47177 -7.868,4.43827 -11.0706,4.00312 z",key:5}),r.createElement("path",{id:"rightEyeRightFill",className:"shade",style:{fill:"#4c7287",fillOpacity:"1",fillRule:"nonzero",stroke:"none",strokeWidth:"4"},d:"m 686.11328,813.28888 c 20.6987,-24.01073 16.0189,-62.20314 -5.44,-84.16 -9.9122,-1.64986 -16.299,-11.1305 -1.6,-7.04 23.7444,12.99025 41.8164,44.02961 28.547,70.40148 -5.1514,12.63525 -13.1115,25.75207 -27.1655,29.23621 -5.3895,2.95993 5.5241,-7.28188 5.6585,-8.43769 z",key:6}),r.createElement("path",{id:"leftEyeFill",className:"shade",style:{fill:"#8ccef7",fillOpacity:"1",fillRule:"nonzero",stroke:"none",strokeWidth:"4"},d:"m 532.83428,880.48888 c -42.4622,-3.82902 -67.181,-59.07024 -43.125,-93.84 11.6429,-18.21879 34.7645,-34.32047 56.7688,-23.88461 18.8314,6.89707 33.2311,23.57078 36.4437,43.53117 8.216,30.4185 -10.2298,69.47686 -43.0475,74.51844 l -3.43,6.3e-4 z",key:7}),r.createElement("path",{id:"rightEyeFill",className:"shade",style:{fill:"#8ccef7",fillOpacity:"1",fillRule:"nonzero",stroke:"none",strokeWidth:"4"},d:"m 657.63328,825.12888 c -28.1236,-4.85494 -48.6488,-35.29858 -41.3782,-63.19023 4.4085,-19.56774 20.6095,-41.5661 42.3732,-41.09977 26.7127,4.89712 44.7239,32.1904 41.0177,58.62276 -2.0593,18.39389 -11.4592,40.06186 -30.6096,45.58599 -3.7772,0.49952 -7.6183,0.49618 -11.4031,0.0813 z",key:8}),r.createElement("path",{id:"leftEyeSmallTint",className:"shade",style:{fill:"#ffffff",fillOpacity:"1",fillRule:"nonzero",stroke:"#ffffff",strokeWidth:"0.31999999",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"m 535.71328,796.64888 c -4.0532,24.23374 28.8318,-0.96837 2.155,-1.325 z",key:9}),r.createElement("path",{id:"leftEyeBigTint",className:"shade",style:{fill:"#ffffff",fillOpacity:"1",fillRule:"nonzero",stroke:"#ffffff",strokeWidth:"0.31999999",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"m 514.27428,781.28888 c -13.6234,23.23239 34.2099,17.4479 14.93,-1.675 -4.7198,-3.42966 -10.9359,-2.38684 -14.93,1.675 z",key:10}),r.createElement("path",{id:"rightEyeSmallTint",className:"shade",style:{fill:"#ffffff",fillOpacity:"1",fillRule:"nonzero",stroke:"#ffffff",strokeWidth:"0.63999999",strokeLinecap:"butt",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"m 664.99328,749.28988 c -18.0854,6.98785 7.0901,26.07096 8,6.72 -1.0052,-3.20344 -4.2826,-7.29425 -8,-6.72 z",key:11}),r.createElement("path",{id:"rightEyeBigTint",className:"shade",style:{fill:"#ffffff",fillOpacity:"1",fillRule:"nonzero",stroke:"#ffffff",strokeWidth:"0.63999999",strokeLinecap:"butt",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"m 641.31328,734.56988 c -23.1654,13.48053 16.2235,36.19796 16.84,10.08 -0.554,-8.7522 -8.8039,-13.74638 -16.84,-10.08 z",key:12}),r.createElement("path",{id:"jawShade",className:"shade",style:{fill:"#9a8179",fillOpacity:"1",fillRule:"nonzero",stroke:"#9a8179",strokeWidth:"3.83999991",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"m 399.07528,816.80888 c -15.3356,4.76402 -33.8643,9.2884 -41.68,24.89909 -5.6301,12.96044 1.3579,27.41901 8.6686,38.21253 10.4127,13.62351 25.842,25.66249 43.5682,26.32365 13.9182,-0.0162 27.0424,-5.74363 39.0552,-12.28785 38.9002,22.65515 79.197,46.85331 124.908,51.60811 8.9443,0.89592 17.9747,0.9776 26.9281,0.15697 -10.8,-5.52231 -23.5025,-6.24815 -34.8353,-10.63905 -52.7802,-14.94511 -105.2534,-39.41872 -141.5372,-81.81391 -9.5422,-11.26995 -17.8096,-23.61652 -25.0756,-36.45954 z",key:13}),r.createElement("path",{id:"backheadShade",className:"shade",style:{fill:"#171717",fillOpacity:"1",fillRule:"nonzero",stroke:"#181818",strokeWidth:"3.83999991",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"m 399.39528,813.28888 c -13.7364,-51.15624 -27.1084,-105.88806 -11.2622,-158.23023 0.9887,-6.00064 11.5337,-30.35816 3.8009,-14.00791 -18.4075,32.68257 -26.3996,70.6153 -22.8387,107.96372 1.6528,24.26835 6.0082,48.26766 11.42,71.95442 6.5653,-1.56175 14.1075,-2.3256 18.88,-7.68 z",key:14}),r.createElement("path",{id:"backHairShade",className:"shade",style:{fill:"#181818",fillOpacity:"1",fillRule:"nonzero",stroke:"#181818",strokeWidth:"4.15999985",strokeLinecap:"butt",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"m 447.39428,624.48988 c 0.1567,5.96685 -1.6426,12.70467 4.48,16.32 13.9345,-19.52961 35.4829,-31.03922 54.72,-44.48 -14.4055,5.0496 -28.9089,9.88582 -41.7475,18.35331 -5.8175,3.2689 -11.635,6.5378 -17.4525,9.80669 z",key:15}),r.createElement("path",{id:"frontHairShade",className:"shade",style:{fill:"#181818",fillOpacity:"1",fillRule:"nonzero",stroke:"#181818",strokeWidth:"3.83999991",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"m 558.43328,626.72988 c 39.0951,-6.12608 72.6235,18.12397 106.88,32.32 -25.8285,-27.35425 -61.0698,-50.53527 -100.16,-48 -4.4221,3.95881 -6.5013,9.86066 -6.72,15.68 z",key:16}),r.createElement("path",{id:"foreheadShade",className:"shade",style:{fill:"#9a8179",fillOpacity:"1",fillRule:"nonzero",stroke:"#9a8179",strokeWidth:"3.83999991",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"m 429.15428,738.72988 c 60.2761,3.32632 120.7657,-16.23383 168.639,-52.8 -3.0731,-8.8671 -5.9655,-17.69153 -13.9947,-5.41523 -43.3853,35.78347 -99.0328,54.17798 -154.6443,58.21523 z",key:17}),r.createElement("path",{id:"lines1",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 526.43328,757.92988 c 79.2047,7.78078 72.6777,114.43784 12.954,123.33482 -78.7553,-5.71575 -73.0224,-101.88127 -12.954,-123.33482 z",key:18}),r.createElement("path",{id:"lines2",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 539.87428,880.81388 c -98.1162,18.86577 -105.4357,-124.52494 -13.44,-122.885",key:19}),r.createElement("path",{id:"lines3",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 652.83328,719.20888 c 78.1772,11.74101 42.7906,123.12265 -3.4052,104.49962 -48.0639,-22.31459 -43.7795,-88.16123 3.4052,-104.49962 z",key:20}),r.createElement("path",{id:"lines4",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 637.47328,834.72888 c 113.7162,-13.62889 73.0019,-125.21531 15.36,-115.52 -19.6432,1.13381 -31.9578,4.91189 -42.56,8",key:21}),r.createElement("path",{id:"lines5",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 638.75328,835.36888 c -52.1093,-21.01429 -59.6764,-69.84092 -28.48,-108.16",key:22}),r.createElement("path",{id:"lines6",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 638.11328,835.04888 c -6.8507,38.10239 -19.408,74.98511 -34.88,110.4",key:23}),r.createElement("path",{id:"lines7",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 448.68728,893.9563 c 45.5993,26.57551 100.6808,60.51216 153.586,52.13258 2.1339,-0.17552 -2.1143,0.33904 0,0",key:24}),r.createElement("path",{id:"lines8",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 382.11328,821.92888 c -80.1161,39.6821 32.1445,116.2418 66.574,72.02742",key:25}),r.createElement("path",{id:"lines9",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 382.11328,821.92888 c -33.3709,-89.58384 -21.8725,-203.02025 78.4,-230.718",key:26}),r.createElement("path",{id:"lines10",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 460.51428,591.21088 c -7.8834,8.40386 -10.6899,20.1851 -11.52,31.36",key:27}),r.createElement("path",{id:"lines11",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 448.99428,622.57088 c 43.4527,-27.45249 95.8477,-43.32381 147.518,-37.441",key:28}),r.createElement("path",{id:"lines12",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 596.51228,585.12988 c -11.9736,5.24941 -21.9626,14.2102 -30.08,24.32",key:29}),r.createElement("path",{id:"lines13",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 566.43328,609.45088 c -3.9048,4.38923 -8.0384,9.47457 -8,15.68",key:30}),r.createElement("path",{id:"lines14",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 566.43228,609.44988 c 38.5708,1.08235 72.8672,22.97327 100.16,48.64",key:31}),r.createElement("path",{id:"lines15",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 666.59228,658.08988 c -25.2861,-0.93692 -51.0577,3.25585 -73.92,14.4",key:32}),r.createElement("path",{id:"lines16",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 429.15428,738.72988 c 59.6567,-4.58454 116.7052,-29.49885 163.52,-66.24",key:33}),r.createElement("path",{id:"lines17",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 382.11328,821.92888 c 43.4447,-16.54532 49.3332,-46.12996 47.04,-83.2",key:34}),r.createElement("path",{id:"lines18",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 610.27328,727.20888 c -3.3124,-18.70495 -9.1604,-37.22261 -17.92,-54.079",key:35}),r.createElement("path",{id:"lines19",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 418.91528,856.16888 c -53.0645,-13.54691 -29.2372,45.62389 -3.84,16.96",key:36}),r.createElement("path",{id:"lines20",className:"line",style:{fill:"none",stroke:"#000000",strokeWidth:"3.83999991"},d:"m 576.35428,911.52888 c 11.4457,-6.73588 22.5173,-15.47232 28.159,-27.84",key:37})])}a.defaultProps={width:"1250",height:"960",viewBox:"0 0 1250 960"},e.exports=a,a.default=a},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n("q1tI")),i=f(n("17x9")),l=f(n("8+s/")),s=f(n("bmMU")),c=n("v1p5"),u=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var m,p,E,T=(0,l.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),h=(m=T,E=p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=l,t.titleAttributes=r({},i),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=d(a,["children"]),l=(0,c.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=d(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(o.default.Component),p.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=m.peek,p.rewind=function(){var e=m.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);h.renderStatic=h.rewind,t.Helmet=h,t.default=h},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,s,c,u=r(t),f=r(n);if(u&&f){if((s=t.length)!=n.length)return!1;for(l=s;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(u!=f)return!1;var d=t instanceof Date,m=n instanceof Date;if(d!=m)return!1;if(d&&m)return t.getTime()==n.getTime();var p=t instanceof RegExp,E=n instanceof RegExp;if(p!=E)return!1;if(p&&E)return t.toString()==n.toString();var T=a(t);if((s=T.length)!==a(n).length)return!1;for(l=s;0!=l--;)if(!o.call(n,T[l]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(l=s;0!=l--;)if(!("_owner"===(c=T[l])&&t.$$typeof||e(t[c],n[c])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("q1tI")),i=s(n("MgzW")),l=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var c,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=T(e,l.TAG_NAMES.TITLE),n=T(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=T(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return T(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},E=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],c=s.toLowerCase();-1===t.indexOf(c)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==l.TAG_PROPERTIES.INNER_HTML&&s!==l.TAG_PROPERTIES.CSS_TEXT&&s!==l.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),s=0;s<o.length;s++){var c=o[s],u=(0,i.default)({},a[c],r[c]);a[c]=u}return e}),[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){h(e)}),0)}),y=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,k="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,d=e.title,m=e.titleAttributes;_(l.TAG_NAMES.BODY,r),_(l.TAG_NAMES.HTML,a),v(d,m);var p={baseTag:O(l.TAG_NAMES.BASE,n),linkTags:O(l.TAG_NAMES.LINK,o),metaTags:O(l.TAG_NAMES.META,i),noscriptTags:O(l.TAG_NAMES.NOSCRIPT,s),scriptTags:O(l.TAG_NAMES.SCRIPT,u),styleTags:O(l.TAG_NAMES.STYLE,f)},E={},T={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(T[e]=p[e].oldTags)})),t&&t(),c(e,E,T)},N=function(e){return Array.isArray(e)?e.join(""):e},v=function(e,t){void 0!==e&&document.title!==e&&(document.title=N(e)),_(l.TAG_NAMES.TITLE,t)},_=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var f=o.indexOf(c);-1!==f&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},O=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},R=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},P=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=M(n,r),[o.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=R(n),o=N(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&k(S),e.defer?S=A((function(){g(e,(function(){S=null}))})):(g(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,f=e.title,d=void 0===f?"":f,m=e.titleAttributes;return{base:P(l.TAG_NAMES.BASE,t,r),bodyAttributes:P(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:P(l.ATTRIBUTE_NAMES.HTML,a,r),link:P(l.TAG_NAMES.LINK,o,r),meta:P(l.TAG_NAMES.META,i,r),noscript:P(l.TAG_NAMES.NOSCRIPT,s,r),script:P(l.TAG_NAMES.SCRIPT,c,r),style:P(l.TAG_NAMES.STYLE,u,r),title:P(l.TAG_NAMES.TITLE,{title:d,titleAttributes:m},r)}},t.reducePropsToState=function(e){return{baseTag:p([l.TAG_PROPERTIES.HREF],e),bodyAttributes:m(l.ATTRIBUTE_NAMES.BODY,e),defer:T(e,l.HELMET_PROPS.DEFER),encode:T(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(l.ATTRIBUTE_NAMES.HTML,e),linkTags:E(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:E(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:E(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:m(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=b}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-404-index-js-ff0e8de8282192597af6.js.map