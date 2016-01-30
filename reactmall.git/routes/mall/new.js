/*!
 * dorado
 *
 * Copyright(c) 2012-2015 weizoom
 * MIT Licensed
 */

'use strict';

var express = require('express');
var router = express.Router();
var debug = require('debug')('reactmall:mall');

var settings = require('settings');
var accountModels = require('routes/account/models');
var precondition = require('lib/precondition');
var dumpRequest = require('core/dump_request').dumpRequest;
var RequestContext = require('core/request_context').RequestContext;

var models = require('./models');

var data_all;
var selected_products;


router.get('/', function(req, res, next) {
	models.Product.find({}).exec(function(err, products) {
		if (err) {
			return next(err);
		}

		data_all = products.map(function(product) {
			var data = product.toJSON();
			return data;
		});

	});
	

	models.ShoppingCart.find({}).exec(function(err, products) {
		if (err) {
			return next(err);
		}

		selected_products = products.map(function(product) {
			var data = product.toJSON();
			return data;
		});
	});

	for(var j in data_all){
		for(var i in selected_products){
			if (selected_products[i].product_id == data_all[j]._id){
				selected_products[i]['name'] = data_all[j].name;
				selected_products[i]['product_img'] = data_all[j].thumbnails_url;
				selected_products[i]['price'] = data_all[j].models[0].price;
			}
		}
	}
	
	var totalPrice;
	for(var n in selected_products){
		console.log(selected_products[n]['count'])
		console.log(selected_products[n]['price'])
		var count = selected_products[n]['count'];
		var price = selected_products[n]['price'];
		totalPrice += count * price;
	}
	// console.log('===============')
	// console.log(totalPrice)
	// console.log('===============')
	// var c = RequestContext(req, {
	// 	products: selected_products,
	// });

	res.render('mall/new.html', c)
});


router.isResource = true;
module.exports = router;
