'use strict';

var Reflux = require('reflux');
var Actions = require('actions/UserActionCreators');


var UserStore = Reflux.createStore({
	user: {},
  listenables: Actions,

  login (token) {
  	this.user.token = token;
  	this.trigger(this.user);
  },

  logout () {

  }
});

module.exports = UserStore;
