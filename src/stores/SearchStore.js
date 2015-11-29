'use strict';

var Reflux = require('reflux');
var Actions = require('actions/SearchActionCreators');
import SearchSource from 'sources/SearchSource';

var SearchStore = Reflux.createStore({
  listenables: Actions,
  results: [],

  async search (searchValues) {
  	searchValues.type = 'movie';
    try {
      let results = await SearchSource.search(searchValues);
      this.results = results;
      this.trigger(this.results);
    } catch(err) {
      console.log(err);
    }
  	
  }
});

module.exports = SearchStore; 
