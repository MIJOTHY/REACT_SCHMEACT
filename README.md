# ![react logo](/assets/img/react_logo_fandc.png) REACT_SCHMEACT ![react logo](/assets/img/react_logo_fandc.png)
A simple tutorial for simple people who want to use react.

## The plan
We'll be making a 5-a-day tracker app, because we like pretending to be healthy (read: you). The aim of this app is to be able to add fruit items to a list and keep track of how many of those items you've eaten, as well as being able to search through and clear the list. And by 'fruit', I mean whatever you want.
With that in mind, we're going to want to break this app down into a number of distinct pieces of functionality. We want to be able to:

1. Add food items to a list.
2. Increment or decrement a counter for each food item.
3. Reset the items on the list.
4. Filter the items on the list with search terms.

Now that we know what functionality we want from the app, let's make a mockup of it in html. If you `git clone` this repo and then open up mockup.html in your browser, you'll see something like this:   
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
Spike was worried about this - he'd done too many deals not to know something was up. Since the phone call, he had this nagging feeling that Little Jimmy was a narc. Lucky for Jimmy, Spike liked his blunt humour, and his ability to hide himself in peoples' shoes had come in useful more times than Spike could count. Maybe, just maybe, Jimmy would prove his hunch wrong, and they could go back to playing solitaire together later. "What the hell is happening to me", Spike thought. "Solitaire is a solo game".   

Spike's mind was starting to unravel. He'd felt this before. Last time it turned out he was actually an old lady stuck in a television set. God that was a pain, he wheezed. Why was he wheezing? As he kept reading, he started to realise that actually he wasn't about to be set up by Little Jimmy. He didn't even know a Little Jimmy. It started to dawn on Spike that he'd been half-way through reading something when he was transported into what seemed like a scene from a cheesy mafia film. In fact, he remembered very clearly what he was doing. He'd just about got to the end of his patience with a smartass react tutorial that didnt even have any code in it, when he saw the start of a strained joke about a setup.    

```
// -- Terminal window: Let's install and get our build process running
git clone https://github.com/MIJOTHY/REACT_SCHMEACT.git // If you haven't already
cd REACT_SCHMEACT
git checkout project
npm install gulp -g
npm install browserify -g
npm install
gulp

// -- Another Terminal Window: Let's start up a basic static file server
python -m SimpleHTTPServer

// -- Browser window: Let's navigate to where our content is being served
localhost:8000
```  

You may have a few questions:
What just happened? Head to the notes if you're concerned.
Why did nothing appear? Because we got no code.  

For the less suspicious among you, let's get coding woop woop.

## The Code
Although it's tempting to write another story, and I know you'd love me for it, I want to get coding just as much as you do, so stop distracting me and let's get on with it.  
If you look in your folder, you'll see a src and a build folder, as well as an index.html. We never touch the build folder but we do touch the src folder. the build js is made for us automatically by gulp's task running. Src is where we work our magic. In there you'll see two things - main.js, and a components folder.

## WIP Key Koncept 2: Props

## WIP Key Koncept 3: State

## Where do I go now?
__a.__ Play around with react a bit more, then to [a simple flux tutorial](https://github.com/MIJOTHY/FOR_FLUX_SAKE).

_or_

__b.__ [Away to a place that will teach you to code really well for free](http://foundersandcoders.org/apply.html)

### The Glossary 
...
Now that Spike thought about it, he didn't need to do any setup. All the setup had been done for him. Spike already knew about __JSX__ from his army days. He knew that it was a top-secret technology used in the war, a way to write __XML syntax in javascript code__, so the rumours went.  
He'd also been told as a young squirt by his pa about __browserify__, or something like that, which apparently let its wielder use the node/commonjs __'require'/'module.exports' pattern in client-side js__. It would look in a single entry point js file you gave it, and whenever it found a 'require', it would jump to that file and do the same there, all the time adding these files to its massive js bundle which it would eventually dump elsewhere for you to reference in your html.  
Stuff like __watchify__ apparently made the process much faster by only rebuilding parts of the bundled JS which had been changed. while __reactify__ transformed JSX into normal javascript during this bundling process, eliminating the need for a seperate compiler.  
Perhaps most importantly though, he'd also heard much about the mythical __gulp__, the fleet-of-foot __task runner that would do all of his build tasks and such for him__, provided he gave it instructions on what to do each time he called its name in a strange thing called a __gulpfile__.  
Spike found himself slipping more and more into a fantasy novel, and as the bright screen morphed into rolling hills and he turned into a lost infant elf, he saw one last mocking image on the monitor:  
__Jest__ 
