(self.webpackChunkblog=self.webpackChunkblog||[]).push([[317],{9756:function(e,n,a){"use strict";function i(e,n){if(null==e)return{};var a,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}a.d(n,{Z:function(){return i}})},9297:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return d}});var i=a(9756),t=(a(7294),a(3497)),r=a(4032),o={title:"Diamond-square Algorithm Cloud Images",subtitle:"I show off some JavaScript code to make cool cloud images using the Diamond-square algorithm.",date:"2019-02-20",image:"/cloudImage.jpg"},s={_frontmatter:o};function d(e){var n=e.components,a=(0,i.Z)(e,["components"]);return(0,t.mdx)("wrapper",Object.assign({},s,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("p",null,"The ",(0,t.mdx)("a",{href:"https://en.wikipedia.org/wiki/Diamond-square_algorithm",className:"blueLink"},"Diamond-square algorithm (DSA)")," is a popular method used to generate realistic ",(0,t.mdx)("a",{href:"https://en.wikipedia.org/wiki/Heightmap",className:"blueLink"},"heightmaps")," which resemble clouds, terrain and/or plasma. The JavaScript code below can be used to generate square cloud images of size ",(0,t.mdx)("inlineCode",{parentName:"p"},"N = 2^(n+1)"),". The images make great unique backgrounds (I have one on my phone!) and look rather pretty in my opinion."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},'var n = 9;\nvar N = Math.pow(2, n) + 1;\nvar arr;\n\nfunction runDSA(N) {\n  // Initialise the array with random numbers at its corners\n  arr = create2Darray(N, N);\n  arr[0][0] = 2 * Math.random() - 1;\n  arr[0][N - 1] = 2 * Math.random() - 1;\n  arr[N - 1][0] = 2 * Math.random() - 1;\n  arr[N - 1][N - 1] = 2 * Math.random() - 1;\n\n  var side = N - 1;\n  var nSq = 1; // Number of Squares.\n  var f = 1.0; // f scales the random numbers at each stage of the algorithm\n  while (side > 1) {\n    var sideo2 = Math.round(side / 2);\n    var x0, x1, y0, y1, xc, yc, tot, ntot, dx, dy, xs, ys;\n    var diff = [[-1, 0], [1, 0], [0, -1], [0, 1]];\n    // Diamond step:\n    for (var ix = 0; ix < nSq; ix++) {\n      for (var iy = 0; iy < nSq; iy++) {\n        x0 = ix * side;\n        x1 = (ix + 1) * side;\n        y0 = iy * side;\n        y1 = (iy + 1) * side;\n        xc = x0 + sideo2;\n        yc = y0 + sideo2;\n        // Set this pixel to the mean of its "diamond" neighbours plus\n        // a random offset.\n        arr[xc][yc] =\n          (arr[y0][x0] + arr[y0][x1] + arr[y1][x0] + arr[y1][x1]) / 4;\n        arr[xc][yc] += f * (2 * Math.random() - 1);\n      }\n    }\n\n    //Square step:\n    for (var ix = 0; ix < 2 * nSq + 1; ix++) {\n      xc = sideo2 * ix;\n      for (var iy = 0; iy < 2 * nSq + 1; iy++) {\n        yc = side * iy + sideo2 * (1 - (ix % 2));\n        if (!(xc < N && xc > 0 && yc < N && yc > 0)) {\n          continue;\n        }\n        tot = 0.0;\n        ntot = 0;\n        // Set this pixel to the mean of its "square" neighbours plus\n        // a random offset. At the edges, it has only three neighbours.\n        for (var ii = 0; ii < diff.length; ii++) {\n          dx = diff[ii][0];\n          dy = diff[ii][1];\n          xs = xc + dx * sideo2;\n          ys = yc + dy * sideo2;\n          if (!(xs < N && xs > 0 && ys < N && ys > 0)) {\n            continue;\n          } else {\n            tot += arr[xs][ys];\n            ntot += 1;\n          }\n        }\n        arr[xc][yc] += tot / ntot + f * (2 * Math.random() - 1);\n      }\n    }\n    side = sideo2;\n    nSq = nSq * 2;\n    f = f / 2;\n  }\n  return arr;\n}\n')),(0,t.mdx)("p",null,"I've packaged the DSA code up into a easy to use tool with colour selectors below. This code:"),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},"Runs the DSA, for ",(0,t.mdx)("inlineCode",{parentName:"li"},"n = 9"),"."),(0,t.mdx)("li",{parentName:"ol"},"Scales the range from ",(0,t.mdx)("inlineCode",{parentName:"li"},"[-1, +1]")," to ",(0,t.mdx)("inlineCode",{parentName:"li"},"[0, +1]"),"."),(0,t.mdx)("li",{parentName:"ol"},"Creates a hidden ",(0,t.mdx)("a",{href:"https://www.w3schools.com/graphics/canvas_intro.asp",className:"blueLink"},"Canvas")," of size ",(0,t.mdx)("inlineCode",{parentName:"li"},"N = 2^(n+1)"),"."),(0,t.mdx)("li",{parentName:"ol"},"Adds pixels to the Canvas with ",(0,t.mdx)("a",{href:"https://en.wikipedia.org/wiki/RGBA_color_space",className:"blueLink"},"RGBA")," values scaled by the DSA output."),(0,t.mdx)("li",{parentName:"ol"},"Converts the canvas to an image and displays it on the screen.")),(0,t.mdx)("p",null,'Just hit "Reload" below and you\'ll have your very own cloud image!'),(0,t.mdx)(r.Z,{mdxType:"DSATool"}),(0,t.mdx)("p",null,"The full code for this is available on my ",(0,t.mdx)("a",{href:"https://github.com/george-pearson",className:"blueLink"},"GitHub"),". If you want a bigger image just increase ",(0,t.mdx)("inlineCode",{parentName:"p"},"n"),". Please bear in mind I've found ",(0,t.mdx)("inlineCode",{parentName:"p"},"n > 11")," tends to give my laptop a hard time and I haven't tested this on mobile so be careful (wouldn't want your browser to crash!)."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-2019-02-20-diamond-square-algorithm-cloud-images-index-mdx-445b1899154c0b9a37bb.js.map