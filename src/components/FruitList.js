var React 		  = require("react");
var FruitListItem = require("./FruitListItem");

var FruitList = React.createClass({
	
	render: function() {
		var fruititems = this.props.fruities.map(function(fruitObject) {
			return (
				<FruitListItem fruit={fruitObject.fruit} quantity={fruitObject.quantity} />
			);
		});
		return (
			<div className="fruit-list">
				{fruititems}
			</div>
			);
	}

});

module.exports = FruitList;