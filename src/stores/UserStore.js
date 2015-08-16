'use strict';

var Reflux = require('reflux');
var Actions = require('actions/UserActionCreators');


var UserStore = Reflux.createStore({
  user: {},
  listenables: Actions,
  localStorageKey: 'UserStore',

  init () {
  	console.log('UserStore init');
  	this.loadFromLocalStorage();
  },

  token (token) {
	this.user.token = token;
  	this.saveToLacalStorage();
  	this.trigger(this.user);
  },

  login (profile) {
  	this.user.profile = profile;
  	this.saveToLacalStorage();
  	this.trigger(this.user);
  },

  logout () {

  },

  loadFromLocalStorage () {
	var loadedUser = JSON.parse(localStorage.getItem(this.localStorageKey));
    if (loadedUser) {
        this.user = loadedUser;
    }
  },

  saveToLacalStorage () {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.user));
  }
});

module.exports = UserStore;
