/*
Copyright (c) 2011-2016 Weizoom Inc
*/

'use strict';

require('../css/component.css');

var React = require('react');
var ReactDOM = require('react-dom');

var Mall = require('./component.js');
var ProductList = require('./component/ProductList.react');
var ProductDetail = require('./component/ProductDetail.react');
var ProductNew = require('./component/ProductNew.react');

window.myDebug = require("debug");

$(document).ready(function() {
	console.log(W.data_all)
	myDebug.enable("mall:*");
	
	var $page = $('#page').eq(0);
	var pageNode = $page.get(0);
	var pageName = $page.data('pageName');

	if (pageName === 'products') {
		ReactDOM.render(<ProductList products={W.products} />, pageNode);
	} else if (pageName === 'product') {
		ReactDOM.render(<ProductDetail product={W.product} />, pageNode);
	} else if (pageName === 'new') {
		ReactDOM.render(<ProductNew products={W.products} data_all={W.data_all} />, pageNode);
	}
});