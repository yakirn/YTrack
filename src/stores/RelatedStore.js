'use strict';

var Reflux = require('reflux');
var Actions = require('actions/RelatedActionCreators');
import RelatedSource from 'sources/RelatedSource';


var RelatedStore = Reflux.createStore({
  listenables: Actions,
  relatedMovies: {},

  async onFindRelated (movieId) {
    try {
      let related = await RelatedSource.related(movieId);
        this.relatedMovies = {
          movies: related, to: movieId
        };
        this.trigger(this.relatedMovies);
    }
    catch (err) {
      console.log(err);
    }
  	

	// .then(
 //  		(related) => {
	// 		this.relatedMovies = {
	// 			movies: related, to: movieId
	// 		}
	// 		this.trigger(this.relatedMovies);
 //  		}
	// );
  }
});

module.exports = RelatedStore; 
