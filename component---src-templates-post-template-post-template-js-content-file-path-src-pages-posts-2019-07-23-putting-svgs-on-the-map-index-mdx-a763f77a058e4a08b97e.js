"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[926],{2951:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(1151),r=n(7294),c=n.p+"static/UKAndIreland-10e38dab76cd45c144a37fbb0b69f0d2.png",l=n.p+"static/UKAndIrelandCircles-0a478804265f2e7929d77e46199e55b3.png",i=n(5785),s=n(7762),o="style-module--control--c9f77",u="style-module--controlGroup--c7ad7",m="style-module--displayBlock--1794c",d="style-module--displayNone--a3c0a",h=n.p+"static/UKAndIrelandSmall-845f40a322bb455e59b94e66f49f65e0.png";function g(e,t,n,a,r,c){let l=500;for(;l>0;){const i=p(0,r-1),s=p(0,c-1),o=4*(i+s*r),u=(n[o+0]+n[o+1]+n[o+2])/3;if(!e.some((e=>f(i,s,t,e.cx,e.cy,e.r)))&&u<127.5){const n={cx:i,cy:s,r:t,colour:a[p(0,3)]};return void e.push(n)}l-=1}}function p(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function f(e,t,n,a,r,c){return Math.sqrt((e-a)*(e-a)+(t-r)*(t-r))<n+c}var v=()=>{const e=(0,r.useRef)(),t=(0,r.useRef)(),{0:n,1:a}=(0,r.useState)("#993300"),{0:c,1:l}=(0,r.useState)("#a5c916"),{0:p,1:f}=(0,r.useState)("#00AA66"),{0:v,1:w}=(0,r.useState)("#FF9900"),{0:E,1:b}=(0,r.useState)(2),{0:y,1:x}=(0,r.useState)(8),{0:I,1:k}=(0,r.useState)(!1);return r.createElement("div",null,r.createElement("img",{className:I?d:m,ref:t,src:h,alt:"UK and Ireland"}),r.createElement("canvas",{className:I?m:d,ref:e}),r.createElement("div",null,r.createElement("div",{className:u},r.createElement("input",{className:o,type:"color",value:n,onChange:function(e){a(e.target.value)}}),r.createElement("input",{className:o,type:"color",value:c,onChange:function(e){l(e.target.value)}}),r.createElement("input",{className:o,type:"color",value:p,onChange:function(e){f(e.target.value)}}),r.createElement("input",{className:o,type:"color",value:v,onChange:function(e){w(e.target.value)}})),r.createElement("div",{className:u},r.createElement("label",{htmlFor:"minRadius"},"Min radius:"),r.createElement("input",{id:"minRadius",className:o,type:"range",step:"0.25",min:"2",max:"5",value:E,onChange:function(e){b(parseFloat(e.target.value))}}),r.createElement("span",{className:o},E)),r.createElement("div",{className:u},r.createElement("label",{htmlFor:"maxRadius"},"Max radius:"),r.createElement("input",{id:"maxRadius",className:o,type:"range",step:"0.25",min:"5",max:"8",value:y,onChange:function(e){x(parseFloat(e.target.value))}}),r.createElement("span",{className:o},y)),r.createElement("button",{onClick:function(){const a=Math.round(t.current.naturalWidth),l=Math.round(t.current.naturalHeight),o=document.createElement("canvas");o.width=a,o.height=l;const u=o.getContext("2d");u.drawImage(t.current,0,0,a,l);const m=function(e,t,n,a,r,c,l){const i=[],s=[];for(let o=0;o<r;o++){const e=n+(a-n)*(Math.random()*Math.random());s.push(e)}s.sort().reverse();for(let o=0;o<r;o++)g(i,s[o],e,t,c,l);return i}(u.getImageData(0,0,a,l).data,[n,c,p,v],E,y,800,a,l),d=function(e,t,n){const a="http://www.w3.org/2000/svg",c=e.map((e=>r.createElement("circle",{xmlns:a,cx:e.cx,cy:e.cy,r:e.r,fill:e.colour})));return r.createElement.apply(r,["svg",{xmlns:a,width:t,height:n}].concat((0,i.Z)(c)))}(m,a,l),h=s.renderToString(d),f=new Blob([h],{type:"image/svg+xml"}),w=URL.createObjectURL(f),b=new Image;b.onload=()=>{e.current.width=a,e.current.height=l;e.current.getContext("2d").drawImage(b,0,0),URL.revokeObjectURL(w),k(!0)},b.src=w}},"Run")))};function w(e){const t=Object.assign({p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"In the ",r.createElement("a",{class:"blueLink",href:"/2019-06-17-circles-everywhere"},"previous blog post")," I showed how to generate Scalable Vector Graphics (SVGs) of small circles packed inside a larger circle using JavaScript. In today's post I'm packing circles inside a map of the UK and Ireland."),"\n",r.createElement(t.p,null,"The first thing we will need is a black and white map of the UK and Ireland. This is surprisingly difficult to find online, but after some intense search engine work I was able to get one:"),"\n",r.createElement("img",{style:{width:"100%",maxWidth:"30rem"},src:c,alt:"UK and Ireland"}),"\n",r.createElement(t.p,null,"A black and white image allows us to easily check whether a pixel in the image is land (black) or sea (white), using its RGB(Red, Green, Blue) values. White, RGB(255, 255, 255), pixels will have an average RGB of 255 whereas black, RGB(0, 0, 0), pixels will have an average RGB of 0."),"\n",r.createElement(t.p,null,"The majority of the code is much the same as ",r.createElement("a",{class:"blueLink",href:"/2019-06-17-circles-everywhere"},"before"),", we just need to change how the circles are placed:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-javascript"},'const image = document.querySelector("#uk_and_ireland");\r\nconst LX = image.width;\r\nconst LY = image.height;\r\nconst canvas = figure.querySelector("canvas");\r\ncanvas.width = LX;\r\ncanvas.height = LY;\r\nconst ctx = canvas.getContext("2d");\r\nctx.drawImage(image, 0, 0);\r\nconst imageData = ctx.getImageData(0, 0, LX, LY).data;\r\n\r\nfunction placeCircle(circles, radius, imageData, circleColours, LX, LY) {\r\n  //The guard number: if we don\'t place a circle within this number of trials, we give up.\r\n  let guard = 500;\r\n  while (guard > 0) {\r\n    // Pick a random position on the image.\r\n    const cx = randomIntFromInterval(0, LX - 1);\r\n    const cy = randomIntFromInterval(0, LY - 1);\r\n    const index = (cx + cy * LX) * 4;\r\n    const red = imageData[index + 0];\r\n    const green = imageData[index + 1];\r\n    const blue = imageData[index + 2];\r\n    const average = (red + green + blue) / 3;\r\n    const overlaps = circles.some(existingCircle =>\r\n      overlapWith(\r\n        cx,\r\n        cy,\r\n        radius,\r\n        existingCircle.cx,\r\n        existingCircle.cy,\r\n        existingCircle.r\r\n      )\r\n    );\r\n    // The circle doesn\'t overlap with any other circles and its in the dark image area.\r\n    if (!overlaps && average < 255 / 2) {\r\n      const circle = {\r\n        cx: cx,\r\n        cy: cy,\r\n        r: radius,\r\n        colour: circleColours[randomIntFromInterval(0, 3)],\r\n      };\r\n      circles.push(circle);\r\n      return;\r\n    }\r\n    guard -= 1;\r\n  }\r\n}\n')),"\n",r.createElement(t.p,null,"We can use the half way point between 0 and 255 (128) to determine if a pixel is black or white. If the pixel is black and the circle doesn't overlap with any of the others then we place it otherwise we find a different location on the image."),"\n",r.createElement(t.p,null,"The finished result (with 3000 circle place attempts!) looks pretty good:"),"\n",r.createElement("img",{style:{width:"100%",maxWidth:"30rem"},src:l,alt:"UK and Ireland Circles"}),"\n",r.createElement(t.p,null,"Here's a smaller interactive version, so you can make your own:"),"\n",r.createElement(v),"\n",r.createElement(t.p,null,"As always all of the code is available on my ",r.createElement("a",{href:"https://github.com/george-pearson",class:"blueLink"},"GitHub"),"."))}var E=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(w,e)):w(e)}},3588:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(2951),r=n(7294),c=n(8610),l=n(1750),i=n(8013),s=n(5814),o=n(1151),u=n(8977);function m(e){let{data:{mdx:t},children:n}=e;const a={code:i.Z,inlineCode:s.Z},m=t;return r.createElement(c.Z,{page:"Post",post:m},r.createElement("div",{className:u.fI},r.createElement("div",{className:u.v_},r.createElement(l.Z,{post:m}),r.createElement(o.Zo,{components:a},n))))}function d(e){return r.createElement(m,e,r.createElement(a.default,e))}}}]);
//# sourceMappingURL=component---src-templates-post-template-post-template-js-content-file-path-src-pages-posts-2019-07-23-putting-svgs-on-the-map-index-mdx-a763f77a058e4a08b97e.js.map