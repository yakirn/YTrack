'use strict';

var Reflux = require('reflux');

var UserActionCreators = Reflux.createActions([
	'login', 'logout'
]);


module.exports = UserActionCreators;
