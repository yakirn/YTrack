'use strict';

var Reflux = require('reflux');
var Actions = require('actions/UserActionCreators');


var UserStore = Reflux.createStore({
  listenables: Actions,

  login () {

  },

  logout () {

  }
});

module.exports = UserStore;
