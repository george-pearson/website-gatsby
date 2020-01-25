(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{XFNa:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return i})),a.d(n,"default",(function(){return s}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var t=a("E/Ix"),r=a("I3Gz");var i={title:"The Game Of Life",subtitle:"A post about Conway's Game Of Life, and some JavaScript code to simulate it.",date:"2019-04-06",image:"/gol.png"},o={_frontmatter:i},l="wrapper";function s(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(t.mdx)(l,Object.assign({},o,a,{components:n,mdxType:"MDXLayout"}),Object(t.mdx)("p",null,"The ",Object(t.mdx)("a",{className:"blueLink",href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Game of Life")," is a ",Object(t.mdx)("a",{className:"blueLink",href:"https://en.wikipedia.org/wiki/Cellular_automaton"},"cellular automataton")," designed by the British mathematician ",Object(t.mdx)("a",{className:"blueLink",href:"https://en.wikipedia.org/wiki/John_Horton_Conway"},"John Conway"),'. A cellular automataton is a mathematical model that consists of a grid of cells, with each cell having an finite number of states (e.g "on" or "off"). A new grid configuration (a new ',Object(t.mdx)("em",{parentName:"p"},"generation"),") is created according to a fixed set of rules that determine the state of each cell based on its current state and the state of the cells around it (its ",Object(t.mdx)("em",{parentName:"p"},"neighbourhood"),"). Cellular automata can be used to simulate a variety of real-world systems, from the ",Object(t.mdx)("a",{className:"blueLink",href:"https://en.wikipedia.org/wiki/Belousov%E2%80%93Zhabotinsky_reaction"},"Belousov–Zhabotinsky reaction")," to ",Object(t.mdx)("a",{className:"blueLink",href:"https://blogs.msdn.microsoft.com/calvin_hsia/2014/09/30/fish-vs-sharks-predator-prey-simulation/"},"predator prey relationships"),"."),Object(t.mdx)("p",null,"In Conway's Game of Life, the grid is a 2D array of square cells each with two states ",Object(t.mdx)("em",{parentName:"p"},"alive")," and ",Object(t.mdx)("em",{parentName:"p"},"dead"),". Each cell interacts with its 8 neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent to it. The rules are:"),Object(t.mdx)("ul",null,Object(t.mdx)("li",{parentName:"ul"},"Any live cell with fewer than two live neighbours dies, as if by underpopulation."),Object(t.mdx)("li",{parentName:"ul"},"Any live cell with two or three live neighbours lives on to the next generation."),Object(t.mdx)("li",{parentName:"ul"},"Any live cell with more than three live neighbours dies, as if by overpopulation."),Object(t.mdx)("li",{parentName:"ul"},"Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.")),Object(t.mdx)("p",null,"We can get the number of alive neighbours of a cell in 2D array with the code below. Note we are applying ",Object(t.mdx)("a",{href:"https://en.wikipedia.org/wiki/Periodic_boundary_conditions",className:"blueLink"},"periodic boundary conditions")," in both the x and y directions."),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"var ALIVE = 1;\nvar DEAD = 0;\nvar N = 200;\nvar arr = create2Darray(N, N, DEAD); // Iitialises a new 2D array with array values set to 0.\nvar neighbourhood = [\n  [1, 0],\n  [1, 1],\n  [0, 1],\n  [-1, 1],\n  [-1, 0],\n  [-1, -1],\n  [0, -1],\n  [1, -1],\n];\n\n// Get number of ALIVE neighbours for point (x,y)\nfunction getneighcount(arr, x, y) {\n  var nc = 0;\n  for (var nn = 0; nn < neighbourhood.length; nn++) {\n    var dx = neighbourhood[nn][0];\n    var dy = neighbourhood[nn][1];\n    if (arr[pbcz(x + dx, arr.length)][pbcz(y + dy, arr[x].length)] === ALIVE) {\n      nc++;\n    }\n  }\n  return nc;\n}\n\n// Periodic boundary conditions in z-direction:\nfunction pbcz(iz, Lz) {\n  if (iz >= Lz) {\n    iz = iz - Lz;\n  }\n  if (iz < 0) {\n    iz = iz + Lz;\n  }\n  return iz;\n}\n")),Object(t.mdx)("p",null,"Then we can just turn the Game of Life rules into some simple JavaScript code:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"var ALIVE = 1;\nvar DEAD = 0;\nvar N = 200;\nvar arr = create2Darray(N, N, DEAD); // Iitialises a new 2D array with array values set to 0.\nvar requestId;\ngameLoop();\n\n// Runs forever, call cancelAnimationFrame(requestId) to stop.\nfunction gameLoop() {\n  arr = iterate(arr);\n  print_to_canvas(arr);\n  requestId = requestAnimationFrame(gameLoop);\n}\n\n// Iterate the next state of the array.\nfunction iterate(oldArray) {\n  var newArray = clone2Darray(oldArray);\n  for (var x = 0; x < oldArray.length; x++) {\n    for (var y = 0; y < oldArray[0].length; y++) {\n      var aliveNeighbourCount = getneighcount(oldArray, x, y);\n      if (oldArray[x][y] === ALIVE) {\n        if (aliveNeighbourCount < 2) {\n          newArray[x][y] = DEAD; // Underpopulation kills cell.\n        } else if (aliveNeighbourCount === 2 || aliveNeighbourCount === 3) {\n          newArray[x][y] = ALIVE; // Surivies!\n        } else if (aliveNeighbourCount > 3) {\n          newArray[x][y] = DEAD; // Overpopulation kills cell.\n        }\n      } else if (oldArray[x][y] === DEAD && aliveNeighbourCount === 3) {\n        newArray[x][y] = ALIVE; // Reproduction.\n      }\n    }\n  }\n  return newArray;\n}\n")),Object(t.mdx)("p",null,"I've packaged the Game of Life code up into interactive tool below."),Object(t.mdx)(r.a,{mdxType:"GOLTool"}),Object(t.mdx)("p",null,"The full code for this tool is available on my ",Object(t.mdx)("a",{href:"https://github.com/george-pearson",className:"blueLink"},"GitHub"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-2019-04-06-the-game-of-life-index-mdx-51e4b0304a7b070b32fa.js.map