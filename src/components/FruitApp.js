var React 		= require("react");
var FruitHeader = require("./FruitHeader");
var FruitList 	= require("./FruitList");
var FruitFooter = require("./FruitFooter");

function getStateFromData() {
	return {
		fruities: [
			{ id: "12345", fruit: "Chicken", quantity:6 },
			{ id: "12346", fruit: "Apples" , quantity:2 },
			{ id: "12347", fruit: "Oranges", quantity:4 },
			{ id: "12348", fruit: "Peaches", quantity:1 },
		]
	};
} 

var FruitApp = React.createClass({
	
	getInitialState: function() {
		return getStateFromData();
	},

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
	},

	incrementQuantity: function(id) {
		var newFruities = [];
		this.state.fruities.forEach(function(ele) {
			if (ele.id === id) ele.quantity += 1;
			return newFruities.push(ele);
		});
		return this.setState({fruities: newFruities});
	},

	render: function() {
		return (
			<div className="app-wrapper">
				<FruitHeader />
				<FruitList fruities={this.state.fruities} incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity}/>
				<FruitFooter />
			</div>
		);
	}
});

module.exports = FruitApp;