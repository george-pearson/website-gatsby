(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{302:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return c}),a.d(t,"default",function(){return g});a(7),a(15),a(3),a(19),a(30),a(0);var n=a(103),i=a(180),o=a(181),r=a(182),s=a.n(r),l=a(183);a(65);var c={title:"Sobel Edge Detection",subtitle:"A look at Sobel edge detection using HTML canvas and JavaScript.",date:"2019-05-19",image:"sobelFlower.png"},d={_frontmatter:c},m="wrapper";function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.mdx)(m,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("p",null,"I recently watched a ",Object(n.mdx)("a",{className:"blueLink",href:"https://youtu.be/uihBwtPIBxM"},"Computerphile YouTube video")," about Sobel edge detection and thought I'd write a post about it. In Sobel edge detection a ",Object(n.mdx)("a",{href:"https://en.wikipedia.org/wiki/Sobel_operator",className:"blueLink"},"Sobel operation")," is applied to an image in order to detect shapes/edges in the image. The main application of edge detection is in robotic vision, for example allowing self-driving vehicles to detect motorway lanes, but it can be used for any image analysis."),Object(n.mdx)("p",null,"The first step in the Sobel operation is to ",Object(n.mdx)("a",{href:"https://en.wikipedia.org/wiki/Grayscale",className:"blueLink"},"greyscale")," the image. This can be done with a few lines of JavaScript code:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'var gsFigure = document.querySelector("#fig-greyscale");\nvar gsImage = gsFigure.querySelector("img");\nvar gsCanvas = gsFigure.querySelector("canvas");\nvar gsbutton = gsFigure.querySelector(".button");\nvar gsCtx = gsCanvas.getContext("2d");\n\ngsbutton.addEventListener("click", () => {\n  gsCanvas.width = gsImage.width;\n  gsCanvas.height = gsImage.height;\n  gsCtx.drawImage(gsImage, 0, 0);\n  var gsImageData = gsCtx.getImageData(0, 0, gsCanvas.width, gsCanvas.height);\n  var id = greyScale(gsImageData);\n  gsCtx.putImageData(id, 0, 0);\n}\n\nfunction greyScale (imageData) {\n  var d = imageData.data;\n  for (var i=0; i<d.length; i+=4) {\n    var r = d[i];\n    var g = d[i+1];\n    var b = d[i+2];\n    // CIE luminance for RGB\n    // Human vision is most sensitive to green, so this has the greatest coefficient value.\n    var v = 0.2126*r + 0.7152*g + 0.0722*b;\n    d[i] = d[i+1] = d[i+2] = v\n  }\n  return imageData;\n};\n')),Object(n.mdx)(i.a,{transformType:"greyscale",mdxType:"FlowerSobel"}),Object(n.mdx)("p",null,"The next step in the Sobel operation is to ",Object(n.mdx)("a",{className:"blueLink",href:"https://en.wikipedia.org/wiki/Kernel_(image_processing)#Convolution"},"convolve")," the image with two 3x3 ",Object(n.mdx)("a",{className:"blueLink",href:"https://en.wikipedia.org/wiki/Kernel_(image_processing)"},"kernels"),", ",Object(n.mdx)("inlineCode",{parentName:"p"},"Gx")," and ",Object(n.mdx)("inlineCode",{parentName:"p"},"Gy"),". What this basically means is the strength of each pixel is weighted by its neighbours. The magnitude of ",Object(n.mdx)("inlineCode",{parentName:"p"},"Gx")," is greatest when the pixels to the right and left of the pixel being convolved are most different, whereas the magnitude of ",Object(n.mdx)("inlineCode",{parentName:"p"},"Gy")," is greatest when the pixels above and below are most different. ",Object(n.mdx)("inlineCode",{parentName:"p"},"Gx")," and ",Object(n.mdx)("inlineCode",{parentName:"p"},"Gy")," can therefore be considered gradient functions and effectively emphasise edges in the x and y directions respectively."),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"     |-1 0 +1|               |-1 -2 -1|\nGx = |-2 0 +2| * A  ,   Gy = | 0  0  0| * A  ,  where A is the source image.\n     |-1 0 +1|               |+1 +2 +1|\n")),Object(n.mdx)("p",null,"The gradient functions can be combined to form a gradient magnitude ",Object(n.mdx)("inlineCode",{parentName:"p"},"G = sqrt(Gx^2 + Gy^2)"),". This produces an image where all the areas with large changes in pixel intensity (edges) are highlighted, just hit the button below to see an example:"),Object(n.mdx)(i.a,{transformType:"sobel",mdxType:"FlowerSobel"}),Object(n.mdx)("img",{className:l.colourWheel,src:s.a,alt:"colour wheel"}),Object(n.mdx)("p",null,"In fact we can even find out the orientation of the edges by taking the arctan of the gradient functions, ",Object(n.mdx)("inlineCode",{parentName:"p"},"θ = atan(Gy/Gx)"),". The orientation can then be mapped to a colour using a colour wheel. Try running the example Sobel operation below:"),Object(n.mdx)(i.a,{transformType:"sobelColour",mdxType:"FlowerSobel"}),Object(n.mdx)("p",null,"Wow that's pretty fancy! Notice how the edges orientation maps to that of the colour wheel."),Object(n.mdx)("p",null,"Finally have a play with the JavaScript tool below allowing you to create your own Sobel images. The saturation input controls the amount of orientational colour added. Also I've set it to scale the images to 600px for performance."),Object(n.mdx)(o.a,{mdxType:"SobelTool"}),Object(n.mdx)("h2",null,"Further reading / watching"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",{className:"blueLink",href:"https://youtu.be/uihBwtPIBxM"},"Finding the Edges (Sobel Operator) - Computerphile")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",{className:"blueLink",href:"https://www.html5rocks.com/en/tutorials/canvas/imagefilters/"},"Image Filters with Canvas"))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-2019-05-19-sobel-index-mdx-5cccbdf342e541480cdd.js.map