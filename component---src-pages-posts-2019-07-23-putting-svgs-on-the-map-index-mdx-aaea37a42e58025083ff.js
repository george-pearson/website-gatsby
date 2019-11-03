(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{299:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",function(){return o}),a.d(n,"default",function(){return h});a(7),a(15),a(3),a(18),a(30),a(0);var t=a(103),i=a(165),c=a.n(i),r=a(166),l=a.n(r),s=a(167);var o={title:"Putting SVGs On The Map",subtitle:"Packing circles in a map of the UK and Ireland using JavaScript.",date:"2019-07-23",image:"UKAndIrelandCircles.png"},d={_frontmatter:o},m="wrapper";function h(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(t.mdx)(m,Object.assign({},d,a,{components:n,mdxType:"MDXLayout"}),Object(t.mdx)("p",null,"In the ",Object(t.mdx)("a",{className:"blueLink",href:"/2019-06-17-circles-everywhere"},"previous blog post")," I showed how to generate Scalable Vector Graphics (SVGs) of small circles packed inside a larger circle using JavaScript. In today's post I'm packing circles inside a map of the UK and Ireland."),Object(t.mdx)("p",null,"The first thing we will need is a black and white map of the UK and Ireland. This is surprisingly difficult to find online, but after some intense search engine work I was able to get one:"),Object(t.mdx)("img",{style:{width:"100%",maxWidth:"30rem"},src:c.a,alt:"UK and Ireland"}),Object(t.mdx)("p",null,"A black and white image allows us to easily check whether a pixel in the image is land (black) or sea (white), using its RGB(Red, Green, Blue) values. White, RGB(255, 255, 255), pixels will have an average RGB of 255 whereas black, RGB(0, 0, 0), pixels will have an average RGB of 0."),Object(t.mdx)("p",null,"The majority of the code is much the same as ",Object(t.mdx)("a",{className:"blueLink",href:"/2019-06-17-circles-everywhere"},"before"),", we just need to change how the circles are placed:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const image = document.querySelector(\"#uk_and_ireland\");\nconst LX = image.width;\nconst LY = image.height;\nconst canvas = figure.querySelector(\"canvas\");\ncanvas.width = LX;\ncanvas.height = LY;\nconst ctx = canvas.getContext(\"2d\");\nctx.drawImage(image, 0, 0);\nconst imageData = (ctx.getImageData(0, 0, LX, LY)).data;\n\nfunction placeCircle(circles, radius, imageData, circleColours, LX, LY){\n    //The guard number: if we don't place a circle within this number of trials, we give up.\n    let guard = 500;\n    while(guard > 0){\n        // Pick a random position on the image.\n        const cx = randomIntFromInterval(0, LX-1);\n        const cy = randomIntFromInterval(0, LY-1);\n        const index = (cx + cy*LX)*4;\n        const red = imageData[index + 0];\n        const green = imageData[index + 1];\n        const blue = imageData[index + 2];\n        const average = (red + green + blue) / 3;\n        if(average < 255/2 && !circles.some((existingCircle) => overlapWith(cx, cy, radius, existingCircle.cx, existingCircle.cy, existingCircle.r))){\n          const circle = {'cx': cx, 'cy': cy, 'r': radius, 'colour': circleColours[randomIntFromInterval(0,3)]};\n          circles.push(circle);\n          return;\n        }\n        guard -= 1;\n    }\n  }\n")),Object(t.mdx)("p",null,"We can use the half way point between 0 and 255 (128) to determine if a pixel is black or white. If the pixel is black and the circle doesn't overlap with any of the others then we place it otherwise we find a different location on the image."),Object(t.mdx)("p",null,"The finished result (with 3000 circle place attempts!) looks pretty good:"),Object(t.mdx)("img",{style:{width:"100%",maxWidth:"30rem"},src:l.a,alt:"UK and Ireland Circles"}),Object(t.mdx)("p",null,"Here's a smaller interactive version, so you can make your own:"),Object(t.mdx)(s.a,{mdxType:"CirclesMapTool"}),Object(t.mdx)("p",null,"As always all of the code is available on my ",Object(t.mdx)("a",{href:"https://github.com/george-pearson",className:"blueLink"},"GitHub"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-2019-07-23-putting-svgs-on-the-map-index-mdx-aaea37a42e58025083ff.js.map