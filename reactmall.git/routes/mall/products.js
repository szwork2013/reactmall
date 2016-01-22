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

router.get('/', function(req, res, next) {
	models.Product.find({}).exec(function(err, products) {
		if (err) {
			return next(err);
		}

		products = products.map(function(product) {
			var data = product.toJSON();
			data['price_info'] = {
				'display_price': product.models[0].price
			}
			return data;
		});

		var c = RequestContext(req, {
			products: products
		});

		res.render('mall/products.html', c)
	});
});


router.isResource = true;
module.exports = router;
