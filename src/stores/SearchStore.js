'use strict';

var Reflux = require('reflux');
var Actions = require('actions/SearchActionCreators');
import Api from 'classes/api';


var SearchStore = Reflux.createStore({
  listenables: Actions,
  results: [],

  search (searchValues) {
  	searchValues.type = 'movie';
  	Api.search(searchValues)
	.done(
  		results => {
			this.results = results;
			this.trigger(this.results);
  		}
	);
  }
});

module.exports = SearchStore; 
