'use strict';

import React from 'react';
import MovieItem from './MovieItem';
var searchStore = require('stores/SearchStore');

require('styles/Results.scss');

export class Results extends React.Component {

constructor (props) {
    super(props);
    this.state = {results: searchStore.results};
  }
 componentDidMount() {
     this.unsubscribeCountChange = searchStore.listen(this.onStoreChange);
  }
  componentWillUnmount() {
    this.unsubscribeCountChange();
  }
  onStoreChange = (searchResults) => {
    this.setState({results: searchResults});
  }
  render () {
    return (
        <div className="Results">
          {this.state.count}
          <ul className="ResultsList">
          { this.state.results.map(function(result){
          		switch (result.type){
          			case 'movie':
						      return <MovieItem key={result.movie.ids.trakt} 
                                    title={result.movie.title}
                                    year={result.movie.year}
                                    ids={result.movie.ids}
                                    />;
          			break;
          		}
                            
            })}
          </ul>
        </div>
      );
  }
}
