(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{TysM:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("E/Ix"),s=n("Hs1y"),o=n.n(s),l=n("A/5z");var i={title:"Hello World!",subtitle:"My first blog post on this site. I go over how I made my website and what I learnt along the way.",date:"2019-02-09"},r={_frontmatter:i},d="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.mdx)(d,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"I've finally shipped! After about a month of what seems like going backwards and forwards I've made my first post on my brand new website. I’m going to try and do at least one post a month, and I plan to keep them relatively short. I can’t promise they won’t end up longer though if I really get into it!"),Object(a.mdx)("h2",null,"Jekyll and GitHub Pages"),Object(a.mdx)("p",null,"So you want to know how I made this site right? Well initially I was thinking of using what I know from work - C# ",Object(a.mdx)("a",{href:"https://dotnet.microsoft.com/apps/aspnet/mvc",className:"blueLink"},"ASP.NET MVC"),". But I figured it would be better if I learnt something new and all that server side setup and maintenance seemed like a pain. After a recommendation from a friend I found that GitHub offers ",Object(a.mdx)("strong",{parentName:"p"},"free hosting")," for websites running ",Object(a.mdx)("a",{className:"blueLink",href:"https://pages.github.com/"},"GitHub Pages"),". This seemed perfect for what I needed and no server side hassle! From GitHub Pages I was directed to ",Object(a.mdx)("a",{href:"https://jekyllrb.com/",className:"blueLink"},"Jekyll"),". Jekyll is an amazing open source blogging tool, which among other things has inbuilt support for ",Object(a.mdx)("a",{href:"https://daringfireball.net/projects/markdown/",className:"blueLink"},"Markdown")," making writing blog posts a breeze",Object(a.mdx)("sup",Object.assign({parentName:"p"},{id:"fnref-1"}),Object(a.mdx)("a",Object.assign({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),"."),Object(a.mdx)("p",null,"Here's an example of the JavaScript markdown which uses ",Object(a.mdx)("a",{href:"https://pypi.org/project/Pygments/",className:"blueLink"},"Pygments"),":"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'(function() {\n    console.log("Hello World! 😊");\n})();\n')),Object(a.mdx)("p",null,"Jekyll also has a great HTML templating through use of ",Object(a.mdx)("a",{href:"https://jekyllrb.com/docs/includes/",className:"blueLink"},"includes")," and ",Object(a.mdx)("a",{href:"https://jekyllrb.com/docs/step-by-step/04-layouts/",className:"blueLink"},"layouts")," which help keep your project well structured."),Object(a.mdx)("h2",null,"Sass and Gulp"),Object(a.mdx)("p",null,"At work we predominantly use CSS libraries like ",Object(a.mdx)("a",{href:"https://getbootstrap.com/",className:"blueLink"},"Bootstrap"),", but one thing I decided fairly early on was that I was going to develop all the CSS myself to improve my front-end skills. After a bit of online research I decided I was going to use the ",Object(a.mdx)("a",{href:"https://sass-lang.com/",className:"blueLink"},"Sass")," CSS templating language. Here's the Sass for those crazy blue links:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$color--skyblue: #00c1c1;\n$color--white: #fff;\n\n%transition-duration {\n    transition-duration: 0.5s;\n}\n\n.blueLink, %blueLink {\n    color: $color--skyblue;\n    text-decoration: none;\n    background-image: linear-gradient(\n        to top,\n        $color--skyblue,\n        $color--skyblue 50%,\n        transparent 50%,\n        transparent);\n    background-position: 0% 0%;\n    background-size: 100% 200%;\n    @extend %transition-duration;\n\n    &:hover{\n        color: $color--white;\n        background-position: 0 100%;\n    }\n}\n")),Object(a.mdx)("p",null,"Sass makes your CSS code simpler with things like variables ",Object(a.mdx)("inlineCode",{parentName:"p"},"$color--skyblue"),", placeholder selectors ",Object(a.mdx)("inlineCode",{parentName:"p"},"%transition-duration")," and parent selectors ",Object(a.mdx)("inlineCode",{parentName:"p"},"&:hover"),". Essentially Sass means you don't have to repeat yourself so often!"),Object(a.mdx)("p",null,"While investigating Sass I was directed to ",Object(a.mdx)("a",{href:"https://gulpjs.com/",className:"blueLink"},"Gulp")," a DevOps build tool. Gulp essentially allows you to automate command line tools for things like:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Compiling Sass files to CSS when they change."),Object(a.mdx)("li",{parentName:"ul"},"Minifying JavaScript and CSS files."),Object(a.mdx)("li",{parentName:"ul"},"Running a Jekyll build when a markdown file is updated."),Object(a.mdx)("li",{parentName:"ul"},"Reloading your browser once a build is complete.")),Object(a.mdx)("p",null,"This makes development a lot easier and faster. Here's an example of a gulp command that compiles a Sass file and minifies the outputed CSS:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'/**\n * Compile .scss files.\n */\ngulp.task("sass", function () {\n    return gulp.src("_scss/main.scss")\n        .pipe(sass().on("error", sass.logError))\n        .pipe(cssnano())\n        .pipe(rename("main.min.css"))\n        .pipe(gulp.dest("assets/css/"));\n});\n')),Object(a.mdx)("h2",null,"Photos"),Object(a.mdx)("div",{className:l.halfWidthContainer},Object(a.mdx)("div",{className:l.halfWidthLeft},Object(a.mdx)("img",{style:{width:"100%"},src:o.a,alt:"sunset"})),Object(a.mdx)("div",{className:l.halfWidthRight},Object(a.mdx)("p",null,"One thing I thought I'd share on this blog is some ",Object(a.mdx)("a",{className:"blueLink",href:"/Photos"},"photos")," I've taken on my travels. In the future I'd like to develop that area into a gallery of some kind. The photos have been compressed using ",Object(a.mdx)("a",{className:"blueLink",href:"https://squoosh.app/"},"Squoosh")," making them take up less space and load quickly (hopefully)."))),Object(a.mdx)("h2",null,"Conclusion"),Object(a.mdx)("p",null,'In fact creating this website was a lot easier than I imagined thanks to all the great freely available open source tools on the web. Now that I started writing about some of these tools I realised most of them probably need an entire post to be explained with any detail. So I might be doing some "idiots guide to..." posts in the near future. Anyhow hope you enjoyed my first post and are looking forward to the next instalment. 😏'),Object(a.mdx)("div",{className:"footnotes"},Object(a.mdx)("hr",{parentName:"div"}),Object(a.mdx)("ol",{parentName:"div"},Object(a.mdx)("li",Object.assign({parentName:"ol"},{id:"fn-1"}),"That's the plan anyway!",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"↩")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-2019-02-09-hello-world-index-mdx-edd57fb41dd28bc74f80.js.map