---
layout: post
title:  "Using simpleDOM"
headtitle:  "Using simpleDOM - Helion3 - Web, Desktop, & Mobile Software Architects - Portland Oregon"
categories: helion3,jquery,javascript,dom,framework
date:   2014-02-08 20:00:00
---

Introducing **[simpleDOM](https://github.com/botskonet/simpleDOM )** - an extremely light DOM manipulation library. Modeled after jQuery, it provides a handful of the most useful DOM manipulation functions for projects that don't need a large library.

simpleDOM supports IE9 and above - and obviously all modern versions of Firefox, Chrome, Safari, and Opera.

By default, you may use the global `simpleDOM` function, or for a jQuery-like experience you can switch to the dollar sign:

{% highlight javascript %}
(function($){
  // your code
})(simpleDOM);
{% endhighlight %}

Since the focus is DOM manipulation, your code should execute after the HTML document has loaded. You can wrap your code in the `$(document).ready()` method, or you may directly pass the function to simpleDOM:

{% highlight javascript %}
$(function(){
  // your code
});
{% endhighlight %}

Once loaded you can query the DOM using css selectors. simpleDOM currently uses the native `querySelectorAll` functions. The result will be a simpleDOM object containing the matching elements.

Let's work with the following HTML snippet:

{% highlight html %}
<ul id="nav">
  <li><a href="">test link</a></li>
  <li><a href="">test link</a></li>
  <li><a href="">test link</a></li>
  <li><a href="">test link</a></li>
  <li><a href="">test link</a></li>
</ul>
{% endhighlight %}

Querying all `li` elements in the `nav`:

{% highlight javascript %}
$('#nav li');
{% endhighlight %}

The result is an object that will allow us to invoke any simpleDOM methods on any or all matching elements. The methods are `chainable`, meaning they can be strung together with limited use of variables.

For example, we can add a css class, and remove a different one:

{% highlight javascript %}
$('#nav li')
   .addClass('newClass')
   .removeClass('oldClass');
{% endhighlight %}

If we need to extract a single matched `li`, we can use the `get` method:

{% highlight javascript %}
$('#nav li').get(1).addClass('newClass');
{% endhighlight %}

Binding events is just as easy:

{% highlight javascript %}
$('#nav li').bind('click',function(event){
  // do stuff
});
{% endhighlight %}


### Complete Example

Here's a complete example of using the native function, using document ready, watching for anchor clicks, and assigning an `active` class:

{% highlight javascript %}
simpleDOM(function(){
  simpleDOM('#nav a').bind('click',function(event){
    event.preventDefault();
    simpleDOM(event.currentTarget)
      .addClass('active');
  });
});
{% endhighlight %}


### Current API

As we integrate the library into live projects we'll update this list as we add more functionality. We also plan on adding unit testing, and proper bower package support.

`get( key )`  
Returns the specific element at provided index, wrapped in simpleDOM

`each( function(key,element) )`  
Applies a callback function to each matching element.

`ready( function )`  
Fires a callback function on document ready.

`addClass( className )`  
Add a new class to matching elements.

`hasClass( className )`  
Returns true if matching elements have a class.

`removeClass( className )`  
Removes a class from matching elements.

`bind( eventName, function )`  
Binds a function to an event.

`unbind( eventName, function )`  
Removes a function from an event.

`css( attribute, value )`  
Sets a css `attribute` to `value`.

`hide()`  
Hides matching elements.

`show()`  
Shows matching elements.

`addAttr( attribute, value )`  
Add a new `attribute` and `value` to matching elements.

`attr( attribute )`  
Read the current `value` for the `attribute`

`removeAttr( attribute )`  
Removes the attribute from matching elements.