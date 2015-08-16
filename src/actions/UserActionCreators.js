'use strict';

var Reflux = require('reflux');

var UserActionCreators = Reflux.createActions([
	'token', 'login', 'logout'
]);


module.exports = UserActionCreators;
