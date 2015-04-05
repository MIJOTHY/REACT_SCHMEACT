# ![react logo](/assets/img/react_logo_fandc.png) REACT_SCHMEACT ![react logo](/assets/img/react_logo_fandc.png)
A simple tutorial for simple people who want to use react.  
If you don't care about the tutorial and just want to see the final version:
```
git clone https://github.com/MIJOTHY/REACT_SCHMEACT.git 
cd REACT_SCHMEACT
git checkout finalversion

npm install browserify gulp -g
npm install
gulp build

python -m SimpleHTTPServer
```

## The plan
We'll be making a 5-a-day tracker app, because we like pretending to be healthy (read: you). The aim of this app is to be able to add fruit items to a list and keep track of how many of those items you've eaten, as well as being able to search through and clear the list. And by 'fruit', I mean whatever you want.
With that in mind, we're going to want to break this app down into a number of distinct pieces of functionality. We want to be able to:

1. Add food items to a list.
2. Increment or decrement a counter for each food item.
3. Reset the items on the list.
4. Filter the items on the list with search terms.

Now that we know what functionality we want from the app, let's make a mockup of it in html. 
```
git checkout mockup
```
Open up mockup.html in your browser, and you'll see something like this:   
![](/assets/img/App-Mockup.png)

Sweet. But there's one glaring problem.

There's no functionality; it's basically just a picture. We want it to be functional. Where do we go from here? We need to break this shiznit down into __components__. But before we do that, 

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

In actual fact, we can break the app down even more, but for learning's sake, I'll leave it as-is for now. If you want to see an extreme-component version, `git checkout crazycomponents`, which doesn't exist yet.

## I'm bored, can you just get to the code?
Nah.

## The Setup
Spike was worried about this - he'd done too many deals not to know something was up. Since the phone call, he had this nagging feeling that Little Jimmy was a narc. Lucky for Jimmy, Spike liked his blunt humour, and his ability to hide himself in peoples' shoes had come in useful more times than Spike could count. Maybe, just maybe, Jimmy would prove his hunch wrong, and they could go back to playing solitaire together later. "What the hell is happening to me", Spike thought. "Solitaire is a solo game".   

Spike's mind was starting to unravel. He'd felt this before. Last time it turned out he was actually an old lady stuck in a television set. God that was a pain, he wheezed. Why was he wheezing? As he kept reading, he started to realise that actually he wasn't about to be set up by Little Jimmy. He didn't even know a Little Jimmy. It started to dawn on Spike that he'd been half-way through reading something when he was transported into what seemed like a scene from a cheesy mafia film. In fact, he remembered very clearly what he was doing. He'd just about got to the end of his patience with a smartass react tutorial that didnt even have any code in it, when he saw the start of a strained joke about a setup.    

```
// -- Terminal window: Let's install and get our build process running
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

### Main.js
In here we'll need to give our react components a way to be rendered - we'll need to bootstrap the entire project through this one poor file. How do we do that? Simple:
```js
var React 	 = require("react");
var FruitApp     = require("./components/FruitApp");

// Here, we grab a DOM node with the ID of "content", and render our FruitApp into it.
// We only need to render FruitApp as, as you will soon see, FruitApp is the parent and owner of
// all our other components.
React.render(
	<FruitApp />, 
	document.getElementById("content")
);
```
Right, so we've done this, but there are two things wrong. Firstly, we haven't made a FruitApp yet. Secondly, We're not asking for any script files in our index.html. Let's add a script file pointing to `/build/main.js` just before we close the body tag, and start making files! Or alternatively, `git checkout props`.

## WIP Key Koncept 2: Props
Props are, as the name suggests, properties of a component instance. This is how components get access to data passed down to them. Owners pass ownee components their props, and those ownee components can reference those props in their `render` function in order to output them.  

In FruitApp.js, we can see some data defined in the document, which we then reference in our render function. What this does is that it passes the `FRUITIES` array down to the FruitList component, and the FRUITIES component can access that array through `this.props.fruities`. Note the ownee component references the data through `this.props` + whatever name the owner has given it when passing it to the component. So if in our FruitApp render function we said `<FruitList fruitsOrChickens={FRUITIES} />`, FruitList would have to ask for `this.props.fruitsOrChickens`.    

One important thing to remember is that __props should be treated as being immutable__. Never directly touch props. For this reason, our project so far is in the same position as it was when it was just an HTML page. It's got no functionality. However, we've come leaps and bounds since then. We're so close to making the app interactive and it's so easy you won't believe it.

Let's get moving to a version that allows _interactivity_. For that, we'll need to use __state__.

## Key Koncept 3: State
State is just as it says. That's not helpful? Tough.  
But seriously, any time you'd want your UI to change, your application would be in a different state. This could even be as simple as having a different tab open. So in order to change our application, we need to use state. Props should be treated as immutable - we don't want to touch those.  
You want as few of your components to be stateful as possible. What this practically means is that state should be kept in as top-level a component as possible. In this case, that'll be our FruitApp. "How can nested components change the state of the application then?", I hear you whine. Don't worry. Just as owners pass their own data to ownees through props, they can also pass __state-changing functions__ down to ownees. A top-level stateful component can define its own 'setState()' method and give it to lower-level components for usage.

To recap, any time we want the application to respond to some action or input (be it a click, or a server response), we'll need to change the state of the application. But we should change state in as few places as possible. We're keeping state in FruitApp, so we need to be able to set the state of FruitApp from places in the app. We do that by passing callbacks down through props. Let's return to our FruitListItem and sort out those increment and decrement buttons!

### Increment and Decrement
Let's define an action in FruitApp that we can pass down to FruitListItem. This function will take an id, look for a fruit in our current state with that id, increment its quantity, and call `setState()` to re-render the application. There are a number of ways we could do this, but since fruities is an array, I'm going to `.forEach()` over it, and if an element's id matches the id passed as an argument, I'll increment the value. I'll then push every element to a newFruities array, and then set the state to the new array.  
```js
incrementQuantity: function(id) {
	var newFruities = [];
	this.state.fruities.forEach(function(ele) {
		if (ele.id === id) ele.quantity += 1;
		return newFruities.push(ele);
	});
	return this.setState({fruities: newFruities});
}
```  
Messy? The whole bloody thing's gonna get messy. We can tidy the whole thing up when we finish this tutorial and [learn about flux](https://github.com/MIJOTHY/FOR_FLUX_SAKE).
Anyway, once we've done that, we can pass that function down to FruitList:  
`<FruitList fruities={this.state.fruities} incrementQuantity={this.incrementQuantity} />`  
And then on to FruitListItem, in FruitList's `.map()` function in the same way.   
`<FruitListItem ... incrementQuantity={this.props.incrementQuantity}/>`  
Once we've done that, we can go into FruitListItem, add a handler to the component that prevents default behaviour and then calls `this.props.incrementQuantity`, passing in `this.props.id`, tack on `onClick={this.plusHandler}` to our plus button! 
If you're still gulping, pop open your browser window and have a look at the glorious product of your sweat and blood!    


Uh oh! Something's gone wrong!
![lol](/assets/img/uhoh.png)    


### Troubles with `this`
The problem lies in FruitList, and the problem lies with `this`. I'm sure you know what I mean when I say you'll need to `.bind()` the value of `this` to `this`.  
`map()` & `forEach()` each take two parameters. I'll assume that you know that the first is a callback used for producing the new array element or doing something respectively. The second is a value to use as `this` within the callback. An alternative way of doing this is to call `.bind()` on the function, passing as an argument whatever you want that function to use as `this`. But even so, why do we need to do this?  
The callback within our `forEach()` isn't setting what `this` should point to, nor is it an object method (in which case `this` would point to the object that is calling the method). Hence `this` panics, gets all wonky and points to the global object (i.e. the window). But our window doesn't have the props we need! Our component does. So we need to point to our component, and tell our callback within `.forEach()` to point to it too whenever it uses `this`. Luckily for us, `this` outside of the callback points to the component.   
Why? Look at the render function. It's got a colon sat next to it, as you might if you were in the hospital waiting room. What does that mean? It means it's a method of an object. What object? The FruitList component! So `this` within the context of the render function (or any other function directly inside the component) points to the component. But once some other execution context is created (i.e. a function is called) that isn't directly within the component, or isn't called by the component itself, `this` will stop pointing to the component on its own.  
So what do we do? Either use `.bind`: 
```js
function(fruit) {
	// do some crap in here
}.bind(this)
```  
or use the second `.map` parameter:
```js
.forEach(function(fruit) {some crap}, this)
```  

### Back to work
Now let's try again, and we should be able to increment the number of any fruit! Woop Woop. Let's do the same for our decrement function, but add some spice. If the quantity of a fruit is 0 and it gets decremented, let's remove it! Same procedure, just with a little more logic within our forEach function. Instead of always pushing the potentially modified elements to the new array, we'll make sure not to push ones that have a quantity of 0 and have been decremented again. So, if `ele.quantity === 0`, we want to cease execution of the function. We could shorten this to `if(!ele.quantity)`, but that's less clear regarding what we want to do, as we're then dealing with falsy values rather than the strictly numerical values we actually care about.
```js
decrementQuantity: function(id) {
	var newFruities = [];
	this.state.fruities.forEach(function(ele) {
		if (ele.id === id) {
			if (ele.quantity === 0) return;
			ele.quantity -= 1;
		}
		return newFruities.push(ele);
	});
	return this.setState({fruities: newFruities});
}
```    

Sweet. We can increment, decrement, and get rid of individual items. Now let's figure out how to add items to our list. To the header!

##WIP

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
