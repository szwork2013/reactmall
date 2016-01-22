/*!
 * dorado
 *
 * Copyright(c) 2012-2015 weizoom
 * MIT Licensed
 */
'use strict';

var models = require('./routes/mall/models');
var debug = require('debug')('reactmall:init');
var settings = require('./settings')

var products = [{
	name: '热干面',
	thumbnails_url: '/static/img/mian2.jpg',
	models: [{
		name: 'standard',
		price: 1.5
	}],
	details: "热干面的详情",
	is_collected: false,
	comments: []
}, {
	name: '黄桥烧饼',
	thumbnails_url: '/static/img/mian1.jpg',
	models: [{
		name: 'standard',
		price: 2.0
	}],
	details: "黄桥烧饼的详情",
	is_collected: false,
	comments: []
}, {
	name: '武昌鱼',
	thumbnails_url: '/static/img/yu1.jpg',
	models: [{
		name: 'hong_s',
		property_values: [{
			property: '颜色',
			value: '红',
		}, {
			property: '尺寸',
			value: 'S',
		}],
		price: 2.0
	}, {
		name: 'huang_m',
		property_values: [{
			property: '颜色',
			value: '黄',
		}, {
			property: '尺寸',
			value: 'M',
		}],
		price: 2.1
	}, {
		name: 'lan_s',
		property_values: [{
			property: '颜色',
			value: '蓝',
		}, {
			property: '尺寸',
			value: 'S',
		}],
		price: 2.2
	}],
	details: "黄桥烧饼的详情",
	is_collected: false,
	comments: []
}]

console.log('connect mongodb ' + settings.MONGO);
var mongoose = require('mongoose');
mongoose.connect(settings.MONGO);
models.Product.remove({}, function(err) {
	console.log('clear mongodb database success');
	var finished = 0;
	products.forEach(function(productData) {
		var product = new models.Product(productData);
		product.save(function(err) {
			finished = 3;
			if (err) {
				console.log("[" + productData.name + "] failed!!!");
			}
			else {
				console.log("[" + productData.name + "] success");
			}
		});
	});

	var intervalId = setInterval(function() {
		if (finished == 3) {
			mongoose.disconnect();
			clearInterval(intervalId);
		}
	}, 100);
})
