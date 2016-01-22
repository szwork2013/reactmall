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
	models.Product.findOne({_id:req.GET['id']}).exec(function(err, product) {
		debug(product);
 		var c = RequestContext(req, {
			product: product
		});

		res.render('mall/product.html', c);
	});
});

router.isResource = true;
module.exports = router;
