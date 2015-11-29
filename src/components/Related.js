'use strict';

import _ from 'lodash'
import React from 'react';
import Actions from 'actions/RelatedActionCreators';
import RelatedStore from 'stores/RelatedStore';
import MovieItem from 'components/MovieItem'

var searchStore = require('stores/SearchStore');


require('styles/Related.scss');

export default class Related extends React.Component {

	constructor (props) {
    	super(props);
    	this.state = {
    		loading: true,
    		relatedMovies: {},
        to: _.filter(searchStore.results, 'movie.ids.trakt', Number(this.props.params.id))[0]
    	};
	}

	componentDidMount() {
    let id = this.props.params.id
     this.unsubscribe = RelatedStore.listen(this.updateRelated);
     if(RelatedStore.relatedMovies.to == id)
        this.updateRelated(RelatedStore.relatedMovies)
    else 
      Actions.findRelated(id);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  updateRelated = (relatedMovies) => {
    this.setState({loading: false, relatedMovies: relatedMovies});
  }

  render () {
  	let {loading, relatedMovies, to} = this.state;
  	if(loading)
  		return (
  			<div className="loading">loading...</div>
  			);

    return (
        <div className="Related">
          <MovieItem title={to.movie.title} year={to.movie.year} ids={to.movie.ids}/>
          <ul className="RelatedList">
          { relatedMovies.movies.map((relatedMovie) => {
		      	return <MovieItem key={relatedMovie.ids.trakt} title={relatedMovie.title} year={relatedMovie.year} ids={relatedMovie.ids}/>;
                            
            })}
          </ul>
        </div>
      );
  }
}

