UTE
===

###Underscore.js Template Editor

Firstly, if you already know Underscore.js, JavaScript Templating and Underscore's Templating you can skip everything below and directly using the editor [here](http://niranjan-borawake.github.io/ute). 

Let's start by discussing, what actually is Underscore.js?

####Underscore.js

[Underscore.js](http://underscorejs.org/), in short, is a utility-belt library for JavaScript. It provides many utility functions as well as more specialized helper functions like binding, javascript templating, deep equality testing, and so on.

When I started working on [Backbone.js](http://backbonejs.org/) (a lightweight JavaScript library that adds structure to client-side code), I came across Underscore.js which is Backbone's only hard dependency. Then I used it a lot and I would not at all hesitate to say that, once you get a hold of Underscore, I assure you it's always going to be the first or rather second (if JQuery is first) library you would like to add to your application.

Here we are mostly interested in the Underscore's templating part. 
Now, what is templating, more precisely JavaScript templating? [JavaScript templating](http://en.wikipedia.org/wiki/JavaScript_templating) refers to the client side data binding method implemented with the JavaScript language.

Underscore provides a function [template](http://underscorejs.org/#template) which compiles JavaScript templates into functions that can be evaluated for rendering. Initially, I did face some difficulties in writing complex templates and debugging them. I then felt a need of some editor which would help you by showing the errors upfront while you are writing the templates. I thought of developing a very basic editor to write and learn Underscore's templating and with some efforts I did develop it.

####Underscore Template Editor

[Underscore Template Editor](http://niranjan-borawake.github.io/ute)

####Usage

It has three sections (from left to right) namely **Template**, **JSON** and **Result**. As soon as you start creating template and submit the JSON to template you could see the HTML getting generated in the **Result** section or errors if any.
