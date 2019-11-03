(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{303:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return s}),t.d(n,"default",function(){return m});t(7),t(15),t(3),t(19),t(30),t(0);var i=t(103),r=t(184),c=t.n(r),a=t(185);var s={title:"Circles Everywhere!",subtitle:"Packing circles in a circle with JavaScript.",date:"2019-06-17",image:"circlesInCircle.png"},o={_frontmatter:s},l="wrapper";function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)t=c[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(i.mdx)(l,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"I'm a big fan of Scalable Vector Graphics (SVGs). Other than retaining their quality when scaled, SVGs are particularly cool because you can animate them (see ",Object(i.mdx)("a",{className:"blueLink",href:"/2019-03-06-svg-path-animations"},"SVG Path Animations"),"). I typically create my SVGs in ",Object(i.mdx)("a",{className:"blueLink",href:"https://inkscape.org/"},"Inkscape"),' then cut out the "bloat elements" Inkscape adds that aren\'t needed. However with browsers getting faster and faster these days, there is now the possibility of creating SVGs programmatically using JavaScript.'),Object(i.mdx)("p",null,"In this post I show off some code to generate an SVG image of packing a set amount of randomly sized small circles into a larger one, similar to the image below."),Object(i.mdx)(c.a,{style:{maxWidth:"600px",margin:"auto",display:"block"},mdxType:"CirclesInCircle"}),Object(i.mdx)("p",null,"Here's the code:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const svgWidth = 600, svgHeight = 600;\nconst svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\nsvg.setAttribute(\"width\", svgWidth);\nsvg.setAttribute(\"height\", svgHeight);\nconst R = 250; // R is the radius of the large circle within which the small circles are to fit.\nconst CX = svgWidth / 2; // The x-coordinate of centre of the large circle.\nconst CY = svgHeight / 2; // The y-coordinate of centre of the large circle.\nconst n = 2000; // n is the maximum number of circles to pack inside the large circle.\nconst rho_min = 0.005; // rho_min is rmin/R, where rmin is the minimum packing circle radius.\nconst rho_max = 0.05; // rho_max is rmax/R, where rmax is the maximum packing circle radius.\nconst rmin = R * rho_min; // The minimum packing circle radius.\nconst rmax = R * rho_max; // The maximum packing circle radius.\nconst circleColours = ['#993300', '#a5c916', '#00AA66', '#FF9900'];\nconst circles = makeCircles(); // Gets a list of small circle coordinates, radii and colours.\n\nfor(let i = 0; i < circles.length; i++){\n    const circle = document.createElementNS(svg.namespaceURI, 'circle');\n    circle.setAttribute('cx', circles[i].cx);\n    circle.setAttribute('cy', circles[i].cy);\n    circle.setAttribute('r', circles[i].r);\n    circle.setAttribute('fill', circles[i].colour);\n    svg.appendChild(circle); // Add each circle in the list to the SVG.\n}\nconst svgDiv = document.querySelector('#myDiv');\nsvgDiv.appendChild(svg); // Add SVG to page.\n\nfunction makeCircles(){\n    const circles = [];\n    const radii = [];\n    // First choose a set of n random radii and sort them. We use\n    // Math.random()*Math.random() to favour small circles.\n    for(let i = 0; i < n; i++){\n        const r = rmin + (rmax - rmin)*(Math.random()*Math.random())\n        radii.push(r);\n    }\n    radii.sort().reverse();\n    // Do our best to place the circles, larger ones first.\n    for(let i = 0; i < n; i++){\n        placeCircle(circles, radii[i]);\n    }\n    return circles;\n}\n\nfunction placeCircle(circles, r){\n    //The guard number: if we don't place a circle within this number of trials, we give up.\n    let guard = 500;\n    while(guard > 0){\n        // Pick a random position, uniformly on the larger circle's interior.\n        const cr = R * Math.sqrt(Math.random());\n        const cphi = 2 * Math.PI * Math.random();\n        const cx = cr * Math.cos(cphi);\n        const cy = cr * Math.sin(cphi);\n        \n        if(cr + r < R){\n            // The circle fits inside the larger circle.\n            if(!circles.some(\n                (existingCircle) => overlapWith(CX + cx, CY + cy, r, existingCircle.cx, existingCircle.cy, existingCircle.r))\n            ){\n                // The circle doesn't overlap with any other small circles.\n                const circle = {'cx':CX + cx,'cy':CY + cy, 'r':r, 'colour':circleColours[randomIntFromInterval(0,3)]};\n                circles.push(circle); // Add the circle.\n                return;\n            }\n        }\n        guard -= 1;\n    }\n}\n\nfunction randomIntFromInterval(min, max){\n    // Random int from min to max.\n    return Math.floor(Math.random()*(max-min+1)+min);\n}\n\nfunction overlapWith(cx1, cy1, r1, cx2, cy2, r2){\n    // Do two circles overlap?\n    const d = Math.sqrt((cx1-cx2)*(cx1-cx2) + (cy1-cy2)*(cy1-cy2))\n    return d < r1 + r2;\n}\n")),Object(i.mdx)("p",null,"And here's a half size interactive version with colour selectors:"),Object(i.mdx)(a.a,{mdxType:"CirclesTool"}),Object(i.mdx)("p",null,"As always all the full code for this tool is available on my ",Object(i.mdx)("a",{href:"https://github.com/george-pearson",className:"blueLink"},"GitHub"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-2019-06-17-circles-everywhere-index-mdx-b3ab5019511ffee7e26d.js.map