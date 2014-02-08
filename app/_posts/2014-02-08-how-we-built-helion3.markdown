---
layout: post
title:  "How We Built Helion3.com"
headtitle:  "How We Built Helion3.com - Helion3 - Web, Desktop, & Mobile Software Architects - Portland Oregon"
date:   2014-02-08 20:00:00
categories: helion3,jekyll,grunt,sass,compass
---

Every new project is also a chance to learn something new. Whether you're trying to incorporate a different code structure, design pattern, best practice, or you're trying to build a project using an entirely new-to-you technology, it's critical to keep up to date.

Designing an actual website for Helion3 was the perfect time to try to switch things up. 

**[Jekyll](http://jekyllrb.com/ )**

Jekyll is a ruby-based application that converts markup content (in this case Markdown-formatted blog posts) into static html files. There's no need for a database and no server-side processing languages so the result is an extremely portable, blazingly fast site.

**[Grunt](http://gruntjs.com )**

Grunt is a javascript-based task runner - a tool to automate the tediousness of building web projects for deployment. I've been using grunt in a limited capacity for a while, but it was time to wrap my entire project in it.

**[SASS](http://sass-lang.com/ )/ [Compass](http://compass-style.org/ )**

Whenever possible I build sites using SASS. The ability to use variables, includes, and mixins makes css authoring even easier. Grunt handles activating the compass preprocessor during project build.

**[simpleDOM](https://github.com/botskonet/simpleDOM )**

jQuery can be too much smaller sites. Months back I had a fun assignment - to build a simple demonstration application which needed a very small subset of dom manipulation features. The assignment required that I make my own tiny library, simpleDOM. It mimics some of the more common jQuery methods but currently only supports modern browsers.

**[jshint](http://www.jshint.com/ ) + [Uglify](https://github.com/mishoo/UglifyJS )**

Vendor and application javascript is linted, concatenated, and minified on deployment. Fewer http requests and the minified source are additional improvements to the performance and load time of the website.

Because of the combined files, minification, and compression, the helion3 site files themselves total no more than **50k**. The Typekit font/scripts adds the remainder of the page weight.

**[Typekit](http://typekit.com)**

Typekit is one of the leading web-font providers. We've been a customer of Typekit for several years and enjoy how easy they make serving web fonts. We're currently using `Source Sans Pro` and `Proxima Nova Alternate Extended`.

**Next Steps**

We're still missing a category links, a build system for dev and live environments, the `watch` system needs some tweaks.