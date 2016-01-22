/*!
 * dorado
 *
 * Copyright(C) 2012-2015 Weizoom, Inc.
 * MIT Licensed
 */

'use strict';

var path = require('path');

exports.MODE = 'develop';
exports.DEBUG = (exports.MODE === 'develop');

//用于session加密的token串
exports.SECRET = 'weizoom_reactmall';

//mongodb连接信息
exports.MONGO = 'mongodb://127.0.0.1/reactmall';

//未登录情况下跳转的登录链接
exports.LOGIN_URL = '/mall/products/';

//登录成功情况下跳转的页面链接
exports.LOGINED_URL = '/project/projects/'

//RequectContext使用的processor
exports.CONTEXT_PROCESSORS = [
	'lib.context_processor.publicDir'
]

//seig filters
exports.FILTERS = [
	// setting filter like 'lib.filters'
]

//connect中间件
exports.MIDDLEWARES = [
	'lib.middleware.auth'
]

//是否开启CORS支持
exports.ENABLE_CORS = true;

//API Server支持
exports.API_HOSTS = {
	//"api.anthole.com": true, 
	//"127.0.0.1:3000": true
}

//mongodb错误的处理函数
exports.MONGO_ERROR_HANDLER = function(err) { return next(err); };

//项目相关目录
exports.PROJECT_HOME = __dirname; //home目录
exports.UPLOAD_DIR = path.join(__dirname, 'static/upload'); //上传图片目录

if (exports.MODE === 'develop') {
	exports.PUBLIC_DIR = 'http://localhost:3080/static'
} else {
	exports.PUBLIC_DIR = '/static'
}