---
layout: post
title:  "Fixed + Dynamic Heights in CSS"
headtitle:  "Fixed + Dynamic Heights in CSS - Helion3 - Web, Desktop, & Mobile Software Architects - Portland Oregon"
categories: css,dom
date:   2014-02-11 20:00:00
---

Your web project has a fixed-height (let's say `6px`) header - and your content should automatically fill the remaining height. Solutions like `flexbox` are too new and don't have support across current browsers, namely IE.

Percentage-based height values won't work because one or more of the page elements needs a fixed height. There is no "percent remaining" value in CSS unless you're using percentages for every body-level element. Now that all modern browsers support `box-sizing: border-box` (IE8+) using percentages is much safer because they include the padding/border measurements.

Percentage-based height values won't mix with fixed-heights anyway. The fixed-height will always be a different ratio to the viewport, especially when the user manually resizes.

The solution is to create your own **absolutely-positioned wrapper**. Browser *do* know how to calculate the height for an absolutely positioned element that's attached to the correct pixel offsets.

<p data-height="268" data-theme-id="0" data-slug-hash="kcjGC" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/helion3/pen/kcjGC'>Dynamic Height w/fixed header, scroll content</a> by Mike Botsko (<a href='http://codepen.io/helion3'>@helion3</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Let's start with the core HTML markup. We have a fixed-height header and the page content below:

{% highlight html %}
<header>header content</header>
<div id="wrapper">
  <article id="content">
  <!-- site content -->
  </article>
</div>
{% endhighlight %}

{% highlight css %}
header { height: 60px }
{% endhighlight %}

So far, there's no way to tell the `content` element to fill the remaining height of the page. By creating our own "viewport" that's attached `60px` from the top (to leave room for the header), and to the `0` edges of the left, right, and bottom - the browser will always calculate the height of this div automatically.

{% highlight css %}
#wrapper {
 position: absolute;
 top: 60px;
 left: 0;
 bottom: 0; 
 ight: 0;
 overflow-y: scroll
}
#wrapper div { min-height: 100% }
{% endhighlight %}

This provides a new context in which the content's height can be set. When we set the `content` element to `min-height: 100%`, it will be exactly `100%` of the **remaining viewport space**.

Setting `overflow-y: scroll` will allow the wrapper to scroll when the content exceeds this length.

It works on *all* browsers, including IE.