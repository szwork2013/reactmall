/*!
 * dorado
 *
 * Copyright(c) 2012-2015 weizoom
 * MIT Licensed
 */

'use strict';

var mongoose = require('mongoose');

/**
 * Product
 */
var ProductSchema = new mongoose.Schema({
	name: String,
	thumbnails_url: String,
	models: [mongoose.Schema.Types.Mixed],
	detail: String,
	is_collected: Boolean,
	comments: [String],
	created_at: {type:Date, default:Date.now}
}, {
	collection: 'mall_product'
});
exports.Product = mongoose.model('Product', ProductSchema);


/**
 * ShoppingCart
 */
var ShoppingCartSchema = new mongoose.Schema({
	product_id: String,
	count: Number,
	created_at: {type:Date, default:Date.now}
}, {
	collection: 'mall_shopping_cart'
});
exports.ShoppingCart = mongoose.model('ShoppingCart', ShoppingCartSchema);
