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
		if (err) {
			return next(err);
		}

		res.json({
			code: 200, 
			data: {
				isLiked: product.is_collected
			}
		});
	});
});

router.post('/', function(req, res, next) {
	var query = {_id:req.POST.id};
	var updateOp = {$set:{is_collected:req.POST.is_liked === 'true'}};
	debug(req.POST);
	debug(updateOp);
	models.Product.update(query, updateOp).exec(function(err) {
		if (err) {
			return next(err);
		}
		res.json({code:200});
	});
});


router.isResource = true;
module.exports = router;
