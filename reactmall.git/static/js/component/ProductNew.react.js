/*
Copyright (c) 2011-2012 Weizoom Inc
*/
var React = require('react');
var CartItem = require('./CartItem.react');

var ProductList = React.createClass({
	displayName: 'ProductList',

	render: function() {
		var productNodes = this.props.products.map(function(product) {
			return (
				<CartItem product={product} />
			)
		});

		return (
			<div className="cui-shopping-car">
				<h3>购物车</h3>
				<table className="table table-condensed shopping-car-table">
					<thead>
						<tr>
							<th>商品</th>
							<th>名称</th>
							<th>单价</th>
							<th>数量</th>
						</tr>
					</thead>
					<tbody>
						{productNodes}
					</tbody>
				</table>
				<span>总价：</span>
				<button className="btn btn-success cui-pay fr mr10 mt10">去结算</button>
			</div>
		);
	}
});

module.exports = ProductList;