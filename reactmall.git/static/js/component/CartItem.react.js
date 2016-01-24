/*
Copyright (c) 2011-2012 Weizoom Inc
*/
var React = require('react');

var CartItem = React.createClass({
	getInitialState: function() {
		return {
			isChecked: true,
		}
	},

	onChangeSelect: function(){
		this.setState({
			isChecked: !this.state.isChecked
		});
	},

	render: function() {
		var product = this.props.product;
		return (
			<tr>
				<td>
					<input type="checkbox" className="mr20" checked={this.state.isChecked ? "checked" : ""} onChange={this.onChangeSelect}/>
					<img src={product.product_img} />
				</td>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>{product.count}</td>
			</tr>
		)
	}
});

module.exports = CartItem;