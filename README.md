# ![react logo](/assets/img/react_logo_fandc.png) REACT_SCHMEACT ![react logo](/assets/img/react_logo_fandc.png)
A simple tutorial for simple people who want to use react.

## The plan
We'll be making a 5-a-day tracker app, because we like pretending to be healthy (read: you). The aim of this app is to be able to add fruit items to a list and keep track of how many of those items you've eaten, as well as being able to search through and clear the list. And by 'fruit', I mean whatever you want.
With that in mind, we're going to want to break this app down into a number of distinct pieces of functionality. We want to be able to:

1. Add food items to a list.
2. Increment or decrement a counter for each food item.
3. Reset the items on the list.
4. Filter the items on the list with search terms.

Now that we know what functionality we want from the app, let's make a mockup of it in html. If you open up mockup.html in your browser, you'll see something like this:   
![](/assets/img/App-Mockup.png)

Sweet. But there's one glaring problem.

There's no functionality; it's basically just a picture. We want it to be functional. Where do we go from here? We need to break this shiznit down into __components__.

## Key Koncept 1: Komponents
Any UI built with react has, as its basic building-blocks, components. A component is just a function. It takes some inputs, and gives us an output. More specifically, it takes in props and/or state (more on these later, but just read that as 'data' for now) and spits out HTML. Each component should be, ideally, a self-contained and distinct portion of your app that does only one thing. In other words, that single component of your app should be able to operate without knowledge of other components, and in any context, as long as it is given the data it needs.

Components stand in a heirarchical relationship. We will see this fairly clearly when we (finally) start writing our code, and we see components being rendered within other components' render functions. Concerning types of relationship, instances of react components can be described according to the standard DOM parent-child relationship, but a more fruitful and precise description of component heirarchy references the owner-ownee relationship. An owner component is just one that passes data (props) down to ownee components.

So, enough conceptual crap. What does our 5-a-day tracker look like when broken down into components?

![](/assets/img/App-Mockup-Components.png)

In case that diagram isn't clear enough for you, I got a friend to draw a diagram to show you whats up.
```
App
--Header
--List
----List item
--Footer
```

K, so at the top of the food-chain, we've got the __big green app__. This holds everything, and is the owner of every other component.
Directly nested within the big green app, we have three distinct components. These are outlined in that pretty sickly turquoise. These each do something different:
* __The header__ has an input and a button. You can see the input placeholder text as the title of the app, and the button as that little pokemon-card-style leaf. Basically, the header has two roles. Firstly, and formostenly (!??!!), it lets us type in the names of fruit, click the button and they get added to the list. Secondmostly, as we type in the names of fruit, it filters the list accordingly. Why do we need the filter? Why do you need to ask questions?
* __The list__ is just a holder for list items. Or is it? The list component actually generates the list items. It takes a bunch of data, and spits out a list item for every suitable chunk of data in there. Our app would be pretty cr-app without it (lmao).
  * __The list item__ is mental. Each one of these has its fruit-text, a little counter, and buttons that decrement and increment that counter respectively. Impressed? You should be. Oh yeah, this is outlined in yellow, and is owned by the list.
* __The footer__ is boring. In fact, the footer is so conscious of how boring it is that it spends its whole life wishing that those slightly-less-dull list items would just shrivel up and disappear. In case that wasn't clear enough for you, our footer holds a little button that clears all of the list items.

## I'm bored, can you just get to the code?
Nah.

## The Setup
Spike was worried about this - he'd done too many deals not to know something was up. Since the phone call, he had this nagging feeling that Little Jimmy was a narc. Lucky for Jimmy, Spike liked his blunt humour, and his ability to hide himself in peoples' shoes had come in useful more times than Spike could count. Maybe, just maybe, Jimmy will prove my hunch wrong, and we can go back to playing solitaire together later. "What the hell is happening to me", Spike thought. "Solitaire is a solo game".   

Spike's mind was starting to unravel. He'd felt this before. Last time it turned out he was actually an old lady stuck in a television set. God that was a pain, he wheezed. Why was he wheezing? As he kept reading, he started to realise that actually he wasn't about to be set up by Little Jimmy. He didn't even know a Little Jimmy. It started to dawn on Spike that he'd been half-way through reading something when he was transported into what seemed like a scene from a cheesy mafia film. In fact, he remembered very clearly what he was doing. He'd just about got to the end of his patience with a smartass react tutorial that didnt even have any code in it, when he saw the start of a strained joke about a setup.    

Now that he thought about it, he didn't need to do any setup. All the setup had been done for him. Spike already knew about JSX from his army days. He knew that it was a top-secret technology used in the war, a way to write XML syntax in javascript code, so the rumours went. He'd also been told as a young squirt by his pa about browserify, or something like that, which apparently let its wielder use the node/commonjs 'require'/'module.exports' pattern in client-side js. He'd also heard much about the mythical gulp, the fleet-of-foot task runner that did all of his build tasks and such for him. Spike found himself slipping more and more into a fantasy novel, and as the bright screen morphed into rolling hills and he turned into a lost infant elf, he saw one last mocking image on the monitor:

```
// -- Terminal window
npm install
gulp

// -- Another Terminal Window
python -m SimpleHTTPServer

// -- Browser window
localhost:8000
```

## WIP Key Koncept 2: Props

## WIP Key Koncept 3: State

## Where do I go now?
__a.__ Play around with react a bit more, then to [a simple flux tutorial](https://github.com/MIJOTHY/FOR_FLUX_SAKE).

_or_

__b.__ [Away to a place that will teach you to code really well for free](http://foundersandcoders.org/apply.html)
