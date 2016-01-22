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
	models.ShoppingCart.find({}).exec(function(err, shopping_cart_items) {
		var productCount = 0;
		shopping_cart_items.forEach(function(shopping_cart_item) {
			productCount += shopping_cart_item.count;
		})

		res.json({
			code: 200, 
			data: {
				productCount: productCount
			}
		});
	});
});

router.isResource = true;
module.exports = router;
