var React 		  = require("react");
var FruitListItem = require("./FruitListItem");

var FruitList = React.createClass({
	
	render: function() {
		var fruititems = this.props.fruities.map(function(fruit) {
			return (
				<FruitListItem key={fruit.id} id={fruit.id} fruit={fruit.fruit} quantity={fruit.quantity} incrementQuantity={this.props.incrementQuantity} decrementQuantity={this.props.decrementQuantity}/>
			);
		}, this);
		return (
			<div className="fruit-list">
				{fruititems}
			</div>
			);
	}

});

module.exports = FruitList;