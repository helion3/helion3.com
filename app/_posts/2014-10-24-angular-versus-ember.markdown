---
layout: post
title:  "AngularJS v. EmberJS"
headtitle:  "AngularJS v. EmberJS - Helion3 - Web, Desktop, & Mobile Software Architects - Portland Oregon"
categories: css,dom
date:   2014-10-24 20:00:00
---

I've spent roughly two months working with Angular on a few projects. I've spent a few days trying to learn Ember, because I've heard that it's a better framework. So far I've spent exponentially more time fighting Ember - I couldn't get an insanely simple, day-one experiment to work and no one on stackoveflow could help figure out why.

After several hours wasted, I realized there were [*three* unrelated issues](http://stackoverflow.com/questions/26246066/ember-data-no-mapping-error-despite-having-a-properly-named-model) at play. Two of which were important pieces of information never mentioned in the Ember documentation.

I have a large application I'd like to migrate to a better client-side framework, and I wanted to feel confident in my choices.

I've spent a day scouring the internet - trying to understand why I should choose one over the other. I knew how I felt personally, but maybe there was some amazing, life-changing information I hadn't found about Ember.


#### The "Learning Cliff"

Immediately, it was clear that nearly everyone had the same "day-one" experience:

>  I... spent 90 percent of my day fighting with (Ember). Invariably, the master Ember users would encourage me to stick it out. “If you just give it a few weeks, you’ll never want to switch back.” I didn’t have to put up with a huge amount of pain when switching to Angular or Knockout for the first time. In fact, it was downright pleasant.

[wekeroad.com](http://www.wekeroad.com/2014/03/22/every-who-tried-to-convince-me-to-use-ember-was-wrong/)


This exact sentiment shows up on the Ember forums in a giant thread discussing why people aren't adopting ember:

> Ember.js was a super steep learning curve, much steeper than Angular.js. Ember.js makes it very easy to get something up and running, if your use case is normal and nothing goes wrong. The second that you need something special, or something breaks, it requires several hours of digging through documentation to figure out"

and:

> "I've used AngularJS, BackboneJS, and other javascript framework without any issues, even developed small applications, without asking for any help at all, but with Ember it is still confusing after 1-2 weeks, because things doesn't work as they should, or maybe I just cannot understand it."

[discuss.emberjs.com](http://discuss.emberjs.com/t/how-do-we-beat-angularjs-in-the-developers-mindset/3948/4)

The consensus of the thread was that they all knew it was an issue. Jeff Atwood (stackoverflow/discourse founder and supporter of Ember) chimed in that it was the single biggest issue the community faced.

Ember is still a young library - Angular had a two-year head start. Angular already has a larger community, was stable already while Ember went through breaking changes. After Discourse posted about their vote of confidence in Ember, the top reddit reply started:

> I've been playing with ember for a couple months now and I really want to love it, but I feel that there is still a lot lacking especially with documentation, and ember-data not being production ready is a big downside for me.

A year later, than I could easily believe that was written today. Ember does feel very much in flux to me - the documentation and code doesn't match the examples/tutorials I found. The ember-data project seems very unofficial and abandoned. I had no trouble using angular's basic http system to load data from a REST endpoint - and the angular resources module was even more enjoyable, if still incomplete itself.


#### Where are the facts?

I read post after post comparing the two frameworks, but nearly every blog entry, article, reddit thread, and tutorial failed me:

- Content compared the two, didn't cover any valuable differences. 
- Everyone *claimed* one was better ("ember is faster" or "ember is better for large web apps") but no one provided any actual **proof**.
- Authors chose a winner based solely off style. (i.e. one dislikes handlebars template syntax so they recommended Anglar, and one chose Ember because they didn't like the look of Angular templates.)

Discourse is likely the most well-known recent adopter of Ember, but their explanation as to [why they chose it](http://eviltrout.com/2013/02/10/why-discourse-uses-emberjs.html) really isn't convincing, and honestly just boils down to "we liked it and it worked".

I finally found an article that highlights some of the [technical problems in Angular](http://eviltrout.com/2013/06/15/ember-vs-angular.html). I was excited to read about some of the core technical issues in Angular. Unfortunately, several of the issues are still stessing personal preference over any impact the framework will have on an app. [On reddit](http://www.reddit.com/r/programming/comments/1ggvdm/angularjs_vs_ember_its_not_even_close/), several points have equally compelling counter-arguments.

One author provides a great [visual demonstration of the differences between handlebars and Angular templates](http://pivotallabs.com/ember-vs-angular-templates/). While he states his personal preferences, it's much easier to choose for ourselves by looking at the comparison. 

Technical debate aside, Angular clearly leads with a well-estabslished community (which some bloggers have [attempted to quantify](http://blog.fusioncharts.com/2014/08/angularjs-vs-backbone-js-vs-ember-js%E2%80%95choosing-a-javascript-framework-part-2/)).

#### In Reality

Ember and Angular do much of the same thing... they both hook-up controllers and templates to routes, and they attempt to make it easier to bind DOM elements to your data. They both have opinions as to how these items should be handled - Ember seems more opinionated as to how your *javascript* should be written and Angular is modular and guides you toward an ideal organization. 

From all of my research, I've been able to organize a list of Pros and Cons about each.

#### Angular

**Pros:**

- Larger community: A wider array of docs, tutorials, blog posts, stack overflow questions, and yeoman generators
- Clean API, very easy to understand what object type you're adding. Ember uses the backbone syntax which a lot of people dislike.
- Clear organization system - modules, separation between route controllers and UI controllers, much more
- Dependency Injection, better organization/separation of code
- Easiest bootstrapping of all the frameworks (include file, add ngApp attribute)
- Because it uses plain javascript and html, it's very easy to learn
- Stand-alone. No other libraries needed.
- Angular is roughly half the size of ember when compressed
- Backed by Google

**Middle Ground:**
- Templating inside html. If you prefer this method, it's a Pro for Angular.

**Cons:**

- Routing sucks. However, the `ui-router` module/plugin is MUCH better. Angular is working to make those features default in 2.0.
- People complain about learning directives, transclusions, scope. They are confusing for new users, but the time spent resolving my issues is far less than similar problems in Ember.


#### Ember

**Pros:**
 
- A few core differences in their use of JavaScript, which can provide better performance (though as some suggest, only levels that become apparent in high-performance environments)
- Some claim it's easier to unit test, but I've seen no facts as to how/why.
- ??

**Meh:**

- Uses handlebars for templating. It's a Pro if you prefer Handlebars over the angular system.

**Cons:**

- Requires jQuery and Handlebars.
- Convention over configuration. Supposedly makes it easy to write code, but in reality everything is poorly documented, new devs get stuck with code that won't work because of some hidden "convention".
- Tries to polyfill ES6 javascript methods for older browsers. In my experience, using a library like lodash is necessary anyway, and has methods to cover missing functionality, so this shouldn't be handled by ember anyway.
- Ember is a lot younger, only left beta this year, and has been going through a lot of breaking changes. Many of the blog posts and tutorials out there are now incorrect, leading to confusion.


##### Conclusion

Two other developers at a client company did their own research and came to the exact same conclusions, so we've decided to continue the project with Angular. I've also chosen Angular for some of my own project rewrites.
