(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Qw3n:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return u}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("7ljp"),i=t("S3xE"),o=t("0WNA"),s=t.n(o),r=t("TL3s"),c=t("aCjp"),h=t("TEp7"),l=t("3kCp"),d=t("A/5z");var p={title:"SVG Path Animations",subtitle:"A look into how to create SVG path animations using CSS transitions and a bit of JavaScript.",date:"2019-03-06",image:"/coffee.png"},m={_frontmatter:p};function u(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.mdx)("wrapper",Object.assign({},m,t,{components:a,mdxType:"MDXLayout"}),Object(n.mdx)(i.a,{mdxType:"LogoDrawself"}),Object(n.mdx)("p",null,"Hey that animation was pretty cool, right? Just click on him again to re-run it. Today's post is on how to create awesome SVG line animations like the one above."),Object(n.mdx)("h2",null,"SVG Paths"),Object(n.mdx)("p",null,"The SVG path format can seem rather cryptic:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-xml"}),'<svg id="coffee" class="coffee" xmlns="http://www.w3.org/2000/svg" width="250" height="375" viewBox="0 0 250 375">\n    <path style="fill:none;stroke:#000000;stroke-width:5;"\n        d="m 19.892717,176.8917 1.190429,139.87515 c 3.078475,25.1789 11.076205,36.7905 41.069744,43.45065 21.81719,4.35025 40.50001,2.4318 60.11656,2.38085 29.56052,-2.41735 45.03841,-16.4321 47.61711,-41.06975 4.77735,-29.65355 -2.57891,-63.04595 2.3117,-95.7242 2.34095,-4.81735 1.6138,-10.7567 11.3782,-12.6047 4.893,-0.9099 8.9718,-0.73415 12.60465,0.035 7.01395,2.64455 11.4282,6.27795 13.7335,12.4634 2.27135,9.325 1.9101,18.65 1.04165,27.97505 -0.6871,6.0357 -2.34285,11.2697 -4.6129,15.32675 -5.56075,6.92775 -13.47125,11.10545 -19.3264,17.11985 -1.76685,2.77765 -1.1949,6.44065 -1.05965,9.21835 0.5008,3.07045 2.91735,4.2252 5.3569,5.3569 3.42525,0.73005 6.89725,1.2265 10.71385,0 7.5242,-2.499 12.99665,-7.5627 19.0468,-11.90425 4.9011,-5.3231 8.77275,-12.36185 12.4995,-19.64205 3.12195,-6.4744 3.27535,-14.4331 4.1665,-22.0229 -0.119,-7.5046 -0.4315,-14.9127 -1.33925,-22.02295 -4.8731,-19.68355 -18.54195,-35.8845 -38.54005,-39.28405 -5.1125,-0.42 -11.90225,0.1125 -20.622,-1.12135 -5.4145,-2.00515 -6.06795,-5.30365 -6.1265,-8.78685 0.78285,-7.14255 -0.6129,-14.4956 -4.20258,-21.63815 -6.66151,-9.72085 -18.17041,-13.45375 -31.54633,-14.88035 -22.53748,-3.28225 -43.72335,-3.05035 -64.28306,-1.1904 -9.30141,0.7866 -18.504954,1.1328 -28.570254,5.3569 -2.97607,1.27915 -5.95214,2.72185 -8.9282,5.95215 -1.224895,4.1665 -1.133765,8.333 2.38085,12.4995 7.77138,5.5689 15.83991,9.5035 24.403764,10.71385 15.9467,2.91015 32.12713,5.0412 49.25393,4.01765 13.53319,-1.55345 27.199,-2.84165 37.64724,-10.565 7.41696,-3.9148 9.57699,-9.80095 10.71385,-16.0708 -1.1491,-6.68715 -2.97648,-13.34485 -13.0947,-19.64205 -10.03057,-6.67185 -20.92652,-10.1706 -32.14153,-12.4995 -17.96892,-2.87915 -35.80275,-1.9664 -52.974,-4.46395 -16.962344,-2.0638 -17.978594,-7.64395 -17.558814,-14.582746 -1.55086,-4.59945 7.83395,-12.36765 13.68992,-12.2019 10.898904,-1.20005 22.995044,-2.5708 38.986494,-1.488 10.18657,2.1145 20.57079,4.03135 31.54631,5.3569 19.23428,-1.2312 23.56941,-6.5704 24.40375,-12.4995 0.76904,-5.48375 0.84257,-11.20525 -4.16649,-17.856405 -3.3469,-3.83015 -8.16664,-6.482 -15.47555,-7.14255 -25.80935,-0.76405 -51.29432,5.6476 -79.758614,5.95215 -18.34454,-0.4225 -32.777509,-4.74995 -38.837699,-15.4756 -0.686105,-6.3489 -1.214195,-12.99545 7.737779,-19.3444 7.163605,-5.637 17.07073,-10.58535 28.9326,-12.3071"\n    />\n</svg>\n')),Object(n.mdx)("p",null,"In reality nobody sane edits path elements by hand, and the best way to change them is with the use of an SVG editor like ",Object(n.mdx)("a",{className:"blueLink",href:"https://inkscape.org/"},"Inkscape"),'. I create my SVGs in Inkscape then cut out the "bloat elements" Inkscape adds that aren\'t needed.'),Object(n.mdx)("h2",null,"Single Path Animations"),Object(n.mdx)("p",null,"We'll start with a simple single path SVG:"),Object(n.mdx)("div",{className:d.halfWidthContainer},Object(n.mdx)("div",{className:d.halfWidthLeft},Object(n.mdx)(s.a,{mdxType:"Coffee"})),Object(n.mdx)("div",{className:d.halfWidthRight},Object(n.mdx)(r.a,{mdxType:"CoffeeDashed"}))),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".coffee-dashed path {\n  stroke-dasharray: 20 20;\n  stroke-dashoffset: 1547;\n  animation: coffee-dash 20s linear infinite;\n}\n@keyframes coffee-dash {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n")),Object(n.mdx)("p",null,"We can add dashes to an SVG path with the use of the ",Object(n.mdx)("inlineCode",{parentName:"p"},"stroke-dasharray")," property, the first number gives the length of the dashes and the second gives the length of the gaps. The ",Object(n.mdx)("inlineCode",{parentName:"p"},"stroke-dashoffset")," property specifies where the dasharray starts. By changing the ",Object(n.mdx)("inlineCode",{parentName:"p"},"stroke-dashoffset")," from the path length to 0 using a ",Object(n.mdx)("inlineCode",{parentName:"p"},"@keyframes")," animation we can move the dashes about (try clicking on the dashed mug)."),Object(n.mdx)("p",null,"Now imagine we made the dashes and gaps the length of the path, such that we only ever see one dash. To do this we increase the ",Object(n.mdx)("inlineCode",{parentName:"p"},"stroke-dasharray")," values to the path length and we've got a coffee mug that draws itself:"),Object(n.mdx)(c.a,{mdxType:"CoffeeDrawself"}),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".coffee-drawself path {\n  stroke-dasharray: 1547 1547;\n  stroke-dashoffset: 1547;\n  animation: draw 15s linear infinite;\n}\n@keyframes draw {\n  0% {\n    stroke-dashoffset: 1547;\n  }\n  75%,\n  100% {\n    stroke-dashoffset: 0; /* Pause for 75%-100% of animation */\n  }\n}\n")),Object(n.mdx)("p",null,"But wait, how do you know the path length? It turns out there is a handy JavaScript method ",Object(n.mdx)("inlineCode",{parentName:"p"},"getTotalLength")," that does this for you:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'var path = document.querySelector(".coffee-drawself path");\nvar length = path.getTotalLength(); // 1546.7664794921875\n')),Object(n.mdx)("h2",null,"Multi-path Animations"),Object(n.mdx)("p",null,"To do multi-path animations we can reproduce what we did for single line animations in JavaScript, then repeat that over all the paths in the SVG. Try clicking on this cupcake:"),Object(n.mdx)(h.a,{mdxType:"CupcakeDrawself"}),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'var cupcake = document.querySelector(".cupcake-drawself");\nvar cupcakePaths = Array.from(cupcake.querySelectorAll("path"));\nvar cupcakeAnimations = cupcakePaths.map(function(path) {\n  var pathLength = path.getTotalLength();\n  var duration = Math.pow(pathLength, 0.5) * 0.03;\n  return { path, pathLength, duration };\n});\n\nfunction runCupcakeAnimations() {\n  // Initial conditions\n  cupcakeAnimations.forEach(function(animation) {\n    animation.path.style.transition = "none"; // Clear previous transition => fast removal\n    animation.path.style.strokeDasharray = `${animation.pathLength} ${animation.pathLength}`;\n    animation.path.style.strokeDashoffset = animation.pathLength;\n    animation.path.getBoundingClientRect(); // Trigger reflow of each path\n  });\n\n  // Triggering a reflow on first path so we animate from here\n  cupcakeAnimations[0].path.getBoundingClientRect();\n\n  // Run line animations\n  var begin = 0;\n  cupcakeAnimations.forEach(function(animation) {\n    animation.path.style.transition = `stroke-dashoffset ${animation.duration}s ${begin}s ease-in-out`;\n    animation.path.style.strokeDashoffset = "0";\n    begin += animation.duration + 0.1; // Slight 0.1s delay for drawing effect\n  });\n}\n\ncupcake.addEventListener("click", runCupcakeAnimations);\n')),Object(n.mdx)("p",null,"Finally if you want to make things really snazzy you can add fade effects by varying ",Object(n.mdx)("inlineCode",{parentName:"p"},"fill-opacity")," and adding path class names to differentiate between lines and shade:"),Object(n.mdx)(l.a,{mdxType:"CupcakeDrawselfFade"}),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'var cupcakeFade = document.querySelector(".cupcake-drawself-fade");\nvar cupcakeLines = Array.from(cupcakeFade.querySelectorAll(".line"));\nvar cupcakeShades = Array.from(cupcakeFade.querySelectorAll(".shade"));\nvar cupcakeFadePaths = [...cupcakeLines, ...cupcakeShades]; // Run shades last.\n\nvar cupcakeFadeAnimations = cupcakeFadePaths.map(function(path) {\n  var pathLength = path.getTotalLength();\n  var duration = Math.pow(pathLength, 0.5) * 0.03;\n  return { path, pathLength, duration };\n});\n\nfunction runCupcakeFadeAnimations() {\n  // Initial conditions\n  cupcakeFadeAnimations.forEach(function(animation) {\n    animation.path.style.transition = "none"; // Clear previous transition => fast removal\n    animation.path.style.strokeDasharray = `${animation.pathLength} ${animation.pathLength}`;\n    animation.path.style.strokeDashoffset = animation.pathLength;\n    animation.path.style.fillOpacity = "0";\n    animation.path.getBoundingClientRect(); // Trigger reflow of each path\n  });\n\n  // Triggering a reflow on first path so we animate from here\n  cupcakeFadeAnimations[0].path.getBoundingClientRect();\n\n  // Run line animations\n  var begin = 0;\n  cupcakeFadeAnimations.forEach(function(animation) {\n    animation.path.style.transition = `stroke-dashoffset ${animation.duration}s ${begin}s ease-in-out, fill-opacity ${animation.duration}s ${begin}s ease-in-out`;\n    animation.path.style.strokeDashoffset = "0";\n    animation.path.style.fillOpacity = "1.0";\n    begin += animation.duration + 0.1; // Slight 0.1s delay for drawing effect\n  });\n}\n\ncupcakeFade.addEventListener("click", runCupcakeFadeAnimations);\n')),Object(n.mdx)("p",null,"As always the full code for all these animations is on my ",Object(n.mdx)("a",{href:"https://github.com/george-pearson",className:"blueLink"},"GitHub"),"."),Object(n.mdx)("h2",null,"Further reading"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",{className:"blueLink",href:"https://jakearchibald.com/2013/animated-line-drawing-svg/"},"Jake Archibald's blog post on this in 2013!")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",{className:"blueLink",href:"https://css-tricks.com/svg-line-animation-works/"},"CSS-Tricks on SVG line animation"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-2019-03-06-svg-path-animations-index-mdx-0ebec60cc57a635083f1.js.map