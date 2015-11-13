'use strict';

import React from 'react';
import Actions from 'actions/RelatedActionCreators';
import Store from 'stores/RelatedStore';
import MovieItem from 'components/MovieItem'

require('styles/Related.scss');

export default class Related extends React.Component {

	constructor (props) {
    	super(props);
    	// let isStoreValid = (Store.relatedMovies && Store.relatedMovies.to == this.props.params.id);
    	this.state = {
    		loading: true, //!isStoreValid,
    		relatedMovies: {} //isStoreValid ? Store.relatedMovies : {}
    	};
	}

	componentDidMount() {
     this.unsubscribe = Store.listen(this.onStoreChange);
     Actions.findRelated(this.props.params.id);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onStoreChange = (relatedMovies) => {
    this.setState({loading: false, relatedMovies: relatedMovies});
  }

  render () {
  	let {loading, relatedMovies} = this.state;
  	if(loading)
  		return (
  			<div className="loading">loading...</div>
  			);

    return (
        <div className="Related">
          <ul className="related-list">
          { relatedMovies.movies.map((relatedMovie) => {
		      	return <MovieItem key={relatedMovie.ids.trakt} title={relatedMovie.title} year={relatedMovie.year} ids={relatedMovie.ids}/>;
                            
            })}
          </ul>
        </div>
      );
  }
}

