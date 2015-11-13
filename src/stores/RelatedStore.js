'use strict';

var Reflux = require('reflux');
var Actions = require('actions/RelatedActionCreators');
import Api from 'sources/api';


var RelatedStore = Reflux.createStore({
  listenables: Actions,
  results: [],

  onFindRelated (movieId) {
  	Api.related(movieId)
	.done(
  		related => {
			this.relatedMovies = {
				movies: related, to: movieId
			}
			this.trigger(this.relatedMovies);
  		}
	);
  }
});

module.exports = RelatedStore; 
