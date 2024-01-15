"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[342],{9255:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(1151),a=t(7294),o=t.p+"static/cloudImage-87f1914e207807a93c4e80ec41197865.jpg",l="style-module--displayBlock--24073",i="style-module--displayHidden--bb185",s="style-module--inputControl--78869";function c(e,n,t,r,a,o,l){for(let i=0;i<r;i++)for(let s=0;s<r;s++){const r=i*a,c=(i+1)*a,u=s*a,d=(s+1)*a;n=u+o,t[e=r+o][n]=(t[u][r]+t[u][c]+t[d][r]+t[d][c])/4,t[e][n]+=l*(2*Math.random()-1)}}function u(e,n,t,r,a,o,l,i){const s=[[-1,0],[1,0],[0,-1],[0,1]];for(let c=0;c<2*r+1;c++){e=o*c;for(let u=0;u<2*r+1;u++){if(n=a*u+o*(1-c%2),!(e<i&&e>0&&n<i&&n>0))continue;let r=0,d=0;for(let a=0;a<s.length;a++){const l=e+s[a][0]*o,c=n+s[a][1]*o;l<i&&l>0&&c<i&&c>0&&(r+=t[l][c],d+=1)}t[e][n]+=r/d+l*(2*Math.random()-1)}}}var d=()=>{const e=(0,a.useRef)(),{0:n,1:t}=(0,a.useState)("#3c69ff"),{0:r,1:d}=(0,a.useState)("#ffffff"),{0:m,1:h}=(0,a.useState)(!1),f=Math.pow(2,9)+1;return a.createElement("div",{className:"style-module--container--889be"},a.createElement("canvas",{ref:e,className:m?l:i}),a.createElement("img",{className:m?i:l,src:o,alt:"cloud"}),a.createElement("div",{className:"style-module--controls--02552"},a.createElement("input",{className:s,type:"color",value:n,onChange:e=>t(e.target.value)}),a.createElement("input",{className:s,type:"color",value:r,onChange:e=>d(e.target.value)}),a.createElement("button",{onClick:t=>{const a=function(e){const n=function(e,n,t){const r=[];for(let a=0;a<e;a++)r[a]=[];for(let a=0;a<e;a++)for(let e=0;e<n;e++)r[a][e]=t;return r}(e,e,0);n[0][0]=2*Math.random()-1,n[0][e-1]=2*Math.random()-1,n[e-1][0]=2*Math.random()-1,n[e-1][e-1]=2*Math.random()-1;let t=e-1,r=1,a=1;for(;t>1;){const o=Math.round(t/2);let l,i;c(l,i,n,r,t,o,a),u(l,i,n,r,t,o,a,e),t=o,r*=2,a/=2}for(let o=0;o<e;o++)for(let t=0;t<e;t++)n[o][t]=(n[o][t]+1)/2,n[o][t]<0&&(n[o][t]=0),n[o][t]>1&&(n[o][t]=1);return n}(f);!function(e,n,t,r){n.current.width=e.length,n.current.height=e.length;const a=n.current.getContext("2d"),o=a.getImageData(0,0,e.length,e.length),l=function(e){const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}(t);for(let i=0;i<e.length;i++)for(let n=0;n<e.length;n++){const t=4*(i+n*e.length);o.data[t+0]=l.r*e[i][n],o.data[t+1]=l.g*e[i][n],o.data[t+2]=l.b*e[i][n],o.data[t+3]=255*e[i][n]}a.fillStyle=r,a.fillRect(0,0,n.current.width,n.current.height),a.globalCompositeOperation="source-atop",createImageBitmap(o).then((function(e){a.drawImage(e,0,0)}))}(a,e,n,r),h(!0),t.preventDefault()}},"Reload")))};function m(e){const n=Object.assign({p:"p",code:"code",pre:"pre",ol:"ol",li:"li"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"The ",a.createElement("a",{href:"https://en.wikipedia.org/wiki/Diamond-square_algorithm",class:"blueLink"},"Diamond-square algorithm (DSA)")," is a popular method used to generate realistic ",a.createElement("a",{href:"https://en.wikipedia.org/wiki/Heightmap",class:"blueLink"},"heightmaps")," which resemble clouds, terrain and/or plasma. The JavaScript code below can be used to generate square cloud images of size ",a.createElement(n.code,null,"N = 2^(n+1)"),". The images make great unique backgrounds (I have one on my phone!) and look rather pretty in my opinion."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'var n = 9;\r\nvar N = Math.pow(2, n) + 1;\r\nvar arr;\r\n\r\nfunction runDSA(N) {\r\n  // Initialise the array with random numbers at its corners\r\n  arr = create2Darray(N, N);\r\n  arr[0][0] = 2 * Math.random() - 1;\r\n  arr[0][N - 1] = 2 * Math.random() - 1;\r\n  arr[N - 1][0] = 2 * Math.random() - 1;\r\n  arr[N - 1][N - 1] = 2 * Math.random() - 1;\r\n\r\n  var side = N - 1;\r\n  var nSq = 1; // Number of Squares.\r\n  var f = 1.0; // f scales the random numbers at each stage of the algorithm\r\n  while (side > 1) {\r\n    var sideo2 = Math.round(side / 2);\r\n    var x0, x1, y0, y1, xc, yc, tot, ntot, dx, dy, xs, ys;\r\n    var diff = [[-1, 0], [1, 0], [0, -1], [0, 1]];\r\n    // Diamond step:\r\n    for (var ix = 0; ix < nSq; ix++) {\r\n      for (var iy = 0; iy < nSq; iy++) {\r\n        x0 = ix * side;\r\n        x1 = (ix + 1) * side;\r\n        y0 = iy * side;\r\n        y1 = (iy + 1) * side;\r\n        xc = x0 + sideo2;\r\n        yc = y0 + sideo2;\r\n        // Set this pixel to the mean of its "diamond" neighbours plus\r\n        // a random offset.\r\n        arr[xc][yc] =\r\n          (arr[y0][x0] + arr[y0][x1] + arr[y1][x0] + arr[y1][x1]) / 4;\r\n        arr[xc][yc] += f * (2 * Math.random() - 1);\r\n      }\r\n    }\r\n\r\n    //Square step:\r\n    for (var ix = 0; ix < 2 * nSq + 1; ix++) {\r\n      xc = sideo2 * ix;\r\n      for (var iy = 0; iy < 2 * nSq + 1; iy++) {\r\n        yc = side * iy + sideo2 * (1 - (ix % 2));\r\n        if (!(xc < N && xc > 0 && yc < N && yc > 0)) {\r\n          continue;\r\n        }\r\n        tot = 0.0;\r\n        ntot = 0;\r\n        // Set this pixel to the mean of its "square" neighbours plus\r\n        // a random offset. At the edges, it has only three neighbours.\r\n        for (var ii = 0; ii < diff.length; ii++) {\r\n          dx = diff[ii][0];\r\n          dy = diff[ii][1];\r\n          xs = xc + dx * sideo2;\r\n          ys = yc + dy * sideo2;\r\n          if (!(xs < N && xs > 0 && ys < N && ys > 0)) {\r\n            continue;\r\n          } else {\r\n            tot += arr[xs][ys];\r\n            ntot += 1;\r\n          }\r\n        }\r\n        arr[xc][yc] += tot / ntot + f * (2 * Math.random() - 1);\r\n      }\r\n    }\r\n    side = sideo2;\r\n    nSq = nSq * 2;\r\n    f = f / 2;\r\n  }\r\n  return arr;\r\n}\n')),"\n",a.createElement(n.p,null,"I've packaged the DSA code up into a easy to use tool with colour selectors below. This code:"),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"Runs the DSA, for ",a.createElement(n.code,null,"n = 9"),"."),"\n",a.createElement(n.li,null,"Scales the range from ",a.createElement(n.code,null,"[-1, +1]")," to ",a.createElement(n.code,null,"[0, +1]"),"."),"\n",a.createElement(n.li,null,"Creates a hidden ",a.createElement("a",{href:"https://www.w3schools.com/graphics/canvas_intro.asp",class:"blueLink"},"Canvas")," of size ",a.createElement(n.code,null,"N = 2^(n+1)"),"."),"\n",a.createElement(n.li,null,"Adds pixels to the Canvas with ",a.createElement("a",{href:"https://en.wikipedia.org/wiki/RGBA_color_space",class:"blueLink"},"RGBA")," values scaled by the DSA output."),"\n",a.createElement(n.li,null,"Converts the canvas to an image and displays it on the screen."),"\n"),"\n",a.createElement(n.p,null,'Just hit "Reload" below and you\'ll have your very own cloud image!'),"\n",a.createElement(d),"\n",a.createElement(n.p,null,"The full code for this is available on my ",a.createElement("a",{href:"https://github.com/george-pearson",class:"blueLink"},"GitHub"),". If you want a bigger image just increase ",a.createElement(n.code,null,"n"),". Please bear in mind I've found ",a.createElement(n.code,null,"n > 11")," tends to give my laptop a hard time and I haven't tested this on mobile so be careful (wouldn't want your browser to crash!)."))}var h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(m,e)):m(e)}},5741:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(9255),a=t(7294),o=t(8610),l=t(1750),i=t(8013),s=t(5814),c=t(1151),u=t(8977);const d=e=>{let{data:{mdx:n},children:t}=e;const r={code:i.Z,inlineCode:s.Z},d=n;return a.createElement(o.Z,{page:"Post",post:d},a.createElement("div",{className:u.fI},a.createElement("div",{className:u.v_},a.createElement(l.Z,{post:d}),a.createElement(c.Zo,{components:r},t))))};function m(e){return a.createElement(d,e,a.createElement(r.default,e))}}}]);
//# sourceMappingURL=component---src-templates-post-template-post-template-js-content-file-path-src-pages-posts-2019-02-20-dsa-cloud-images-index-mdx-edb6b2aea9b2e4006041.js.map