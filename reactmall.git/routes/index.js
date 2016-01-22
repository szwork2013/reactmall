/*!
 * dorado
 *
 * Copyright(c) 2012-2015 weizoom
 * MIT Licensed
 */

var express = require('express');
var router = express.Router();

var settings = require('settings');
var RequestContext = require('core/request_context').RequestContext;

router.get('/', function(req, res, next) {
	var c = RequestContext(req, {
	})
	res.render('index.html', c);
});


module.exports = router;
