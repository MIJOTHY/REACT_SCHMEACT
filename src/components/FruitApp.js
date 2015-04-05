var React 		= require("react");
var FruitHeader = require("./FruitHeader");
var FruitList 	= require("./FruitList");
var FruitFooter = require("./FruitFooter");

var FRUITIES = [
			{ fruit: "Chicken", quantity:6 },
			{ fruit: "Apples" , quantity:2 },
			{ fruit: "Oranges", quantity:4 },
			{ fruit: "Peaches", quantity:1 },
		];

var FruitApp = React.createClass({
	render: function() {
		return (
			<div className="app-wrapper">
				<FruitHeader />
				<FruitList fruities={FRUITIES} />
				<FruitFooter />
			</div>
		);
	}
});

module.exports = FruitApp;