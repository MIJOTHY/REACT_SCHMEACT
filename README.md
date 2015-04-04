# ![react logo](/assets/img/react_logo_fandc.png) REACT_SCHMEACT ![react logo](/assets/img/react_logo_fandc.png)
A simple tutorial for simple people who want to use react.

## The plan
We'll be making a 5-a-day tracker app. The aim of this app is to be able to add food items to a list and keep track of how many of those items you've eaten, as well as being able to clear and search through the list.
With that in mind, we're going to want to break this app down into a number of distinct pieces of functionality. We want to be able to:  
1. Add food items to a list.  
2. Increment or decrement a counter for each food item.  
3. Reset the items on the list.  
4. Filter the items on the list with search terms.  

Now that we know what functionality we want from the app, let's make a mockup of it in html. If you open up mockup.html in your browser, you'll see something like this:  
![](/assets/img/App-Mockup.png)

Sweet. But there are two problems.

Firstly, some mug has put chicken in our 5-a-day tracker. More importantly though, there's no functionality; it's basically just a picture. We want it to be functional. Where do we go from here? We need to break this shiznit down into __components__.

## Key concept 1: Components
Any UI built with react has, as its basic building-blocks, components. Each component should be, ideally, a self-contained and distinct portion of your app that does only one thing. In other words, that single component of your app should be able to operate without knowledge of other components, and regardless of its location (provided it is given the correct data).
You should be able to give each component to anyone wanting that piece of functionality and they'd be able to use it in their project with minimal effort.

So what does our 5-a-day tracker look like when broken down into components?
![](/assets/img/App-Mockup-Components.png)

## Key concept 2: Props

## Key concept 3: State

## Where do I go now?
__a.__ Play around with react a bit more, then to [a simple flux tutorial](https://github.com/MIJOTHY/FOR_FLUX_SAKE).

_or_

__b.__ [Away to a place that will teach you to code really well for free](http://foundersandcoders.org/apply.html)
