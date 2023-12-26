"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[511],{5567:function(e,t,n){n.r(t);var a=n(1151),l=n(7294),r=n(9339),s=n(2906);function o(e){const t=Object.assign({p:"p",h2:"h2",strong:"strong",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"I've finally shipped! After about a month of what seems like going backwards and forwards I've made my first post on my brand new website. I’m going to try and do at least one post a month, and I plan to keep them relatively short. I can’t promise they won’t end up longer though if I really get into it!"),"\n",l.createElement(t.h2,null,"Jekyll and GitHub Pages"),"\n",l.createElement(t.p,null,"So you want to know how I made this site right? Well initially I was thinking of using what I know from work - C# ",l.createElement("a",{href:"https://dotnet.microsoft.com/apps/aspnet/mvc",class:"blueLink"},"ASP.NET MVC"),". But I figured it would be better if I learnt something new and all that server side setup and maintenance seemed like a pain. After a recommendation from a friend I found that GitHub offers ",l.createElement(t.strong,null,"free hosting")," for websites running ",l.createElement("a",{class:"blueLink",href:"https://pages.github.com/"},"GitHub Pages"),". This seemed perfect for what I needed and no server side hassle! From GitHub Pages I was directed to ",l.createElement("a",{href:"https://jekyllrb.com/",class:"blueLink"},"Jekyll"),". Jekyll is an amazing open source blogging tool, which among other things has inbuilt support for ",l.createElement("a",{href:"https://daringfireball.net/projects/markdown/",class:"blueLink"},"Markdown")," making writing blog posts a breeze[^1]."),"\n",l.createElement(t.p,null,"Here's an example of the JavaScript markdown which uses ",l.createElement("a",{href:"https://pypi.org/project/Pygments/",class:"blueLink"},"Pygments"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript"},'(function() {\r\n  console.log("Hello World! 😊");\r\n})();\n')),"\n",l.createElement(t.p,null,"Jekyll also has a great HTML templating through use of ",l.createElement("a",{href:"https://jekyllrb.com/docs/includes/",class:"blueLink"},"includes")," and ",l.createElement("a",{href:"https://jekyllrb.com/docs/step-by-step/04-layouts/",class:"blueLink"},"layouts")," which help keep your project well structured."),"\n",l.createElement(t.h2,null,"Sass and Gulp"),"\n",l.createElement(t.p,null,"At work we predominantly use CSS libraries like ",l.createElement("a",{href:"https://getbootstrap.com/",class:"blueLink"},"Bootstrap"),", but one thing I decided fairly early on was that I was going to develop all the CSS myself to improve my front-end skills. After a bit of online research I decided I was going to use the ",l.createElement("a",{href:"https://sass-lang.com/",class:"blueLink"},"Sass")," CSS templating language. Here's the Sass for those crazy blue links:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},"$color--skyblue: #00c1c1;\r\n$color--white: #fff;\r\n\r\n%transition-duration {\r\n  transition-duration: 0.5s;\r\n}\r\n\r\n.blueLink,\r\n%blueLink {\r\n  color: $color--skyblue;\r\n  text-decoration: none;\r\n  background-image: linear-gradient(\r\n    to top,\r\n    $color--skyblue,\r\n    $color--skyblue 50%,\r\n    transparent 50%,\r\n    transparent\r\n  );\r\n  background-position: 0% 0%;\r\n  background-size: 100% 200%;\r\n  @extend %transition-duration;\r\n\r\n  &:hover {\r\n    color: $color--white;\r\n    background-position: 0 100%;\r\n  }\r\n}\n")),"\n",l.createElement(t.p,null,"Sass makes your CSS code simpler with things like variables ",l.createElement(t.code,null,"$color--skyblue"),", placeholder selectors ",l.createElement(t.code,null,"%transition-duration")," and parent selectors ",l.createElement(t.code,null,"&:hover"),". Essentially Sass means you don't have to repeat yourself so often!"),"\n",l.createElement(t.p,null,"While investigating Sass I was directed to ",l.createElement("a",{href:"https://gulpjs.com/",class:"blueLink"},"Gulp")," a DevOps build tool. Gulp essentially allows you to automate command line tools for things like:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Compiling Sass files to CSS when they change."),"\n",l.createElement(t.li,null,"Minifying JavaScript and CSS files."),"\n",l.createElement(t.li,null,"Running a Jekyll build when a markdown file is updated."),"\n",l.createElement(t.li,null,"Reloading your browser once a build is complete."),"\n"),"\n",l.createElement(t.p,null,"This makes development a lot easier and faster. Here's an example of a gulp command that compiles a Sass file and minifies the outputed CSS:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript"},'/**\r\n * Compile .scss files.\r\n */\r\ngulp.task("sass", function() {\r\n  return gulp\r\n    .src("_scss/main.scss")\r\n    .pipe(sass().on("error", sass.logError))\r\n    .pipe(cssnano())\r\n    .pipe(rename("main.min.css"))\r\n    .pipe(gulp.dest("assets/css/"));\r\n});\n')),"\n",l.createElement(t.h2,null,"Photos"),"\n",l.createElement("div",{className:s.rY},l.createElement("div",{className:s.U4},l.createElement("img",{style:{width:"100%"},src:r.Z,alt:"sunset"})),l.createElement("div",{className:s.y4},l.createElement("p",null,l.createElement(t.p,null,"One thing I thought I'd share on this blog is\r\nsome ",l.createElement("a",{class:"blueLink",href:"/Photos"},"photos")," I've\r\ntaken on my travels. In the future I'd like to develop that\r\narea into a gallery of some kind. The photos have been compressed\r\nusing ",l.createElement("a",{class:"blueLink",href:"https://squoosh.app/"},"Squoosh")," making\r\nthem take up less space and load quickly (hopefully).")))),"\n",l.createElement(t.h2,null,"Conclusion"),"\n",l.createElement(t.p,null,'In fact creating this website was a lot easier than I imagined thanks to all the great freely available open source tools on the web. Now that I started writing about some of these tools I realised most of them probably need an entire post to be explained with any detail. So I might be doing some "idiots guide to..." posts in the near future. Anyhow hope you enjoyed my first post and are looking forward to the next instalment. 😏'),"\n",l.createElement(t.p,null,"[^1]: That's the plan anyway!"))}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}},2821:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(5567),l=n(7294),r=n(8610),s=n(1750),o=n(8013),i=n(5814),c=n(1151),u=n(8977);function m(e){let{data:{mdx:t},children:n}=e;const a={code:o.Z,inlineCode:i.Z},m=t;return l.createElement(r.Z,{page:"Post",post:m},l.createElement("div",{className:u.fI},l.createElement("div",{className:u.v_},l.createElement(s.Z,{post:m}),l.createElement(c.Zo,{components:a},n))))}function h(e){return l.createElement(m,e,l.createElement(a.default,e))}},2906:function(e,t,n){n.d(t,{U4:function(){return l},rY:function(){return a},y4:function(){return r}});var a="common-module--halfWidthContainer--10282",l="common-module--halfWidthLeft--83707",r="common-module--halfWidthRight--3851a"},9339:function(e,t,n){t.Z=n.p+"static/Sunset-c8281b903a04016037eaaa62ec1600a9.jpg"}}]);
//# sourceMappingURL=component---src-templates-post-template-post-template-js-content-file-path-src-pages-posts-2019-02-09-hello-world-index-mdx-0592d9d4025344960b8d.js.map