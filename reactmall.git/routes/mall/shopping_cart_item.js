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


router.put('/', function(req, res, next) {
	var productId = req.POST['product_id'];
	var count = parseInt(req.POST['count']);

	var query = {'product_id': productId};
	var updateOp = {'$inc': {'count': count}};

	models.ShoppingCart.findOneAndUpdate(query, updateOp, {upsert:true, 'new':true}, function(err, shopping_cart_item) {
		var productCount = 0;
		if (shopping_cart_item) {
			productCount = shopping_cart_item.count;
		}

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
