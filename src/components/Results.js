'use strict';

import React from 'react/addons';
import MovieItem from './MovieItem';
var searchStore = require('stores/SearchStore');

require('styles/Results.scss');

export class Results extends React.Component {

constructor (props) {
    super(props);
    this.state = {results: searchStore.results};
    this.onStoreChange = this.onStoreChange.bind(this);
  }
 componentDidMount() {
     this.unsubscribeCountChange = searchStore.listen(this.onStoreChange);
  }
  componentWillUnmount() {
    this.unsubscribeCountChange();
  }
  onStoreChange (searchResults){
    this.setState({results: searchResults});
  }
  render () {
    return (
        <div className="Results">
          {this.state.count}
          <ul className="results-list">
          { this.state.results.map(function(result){
          		switch (result.type){
          			case 'movie':
						return <MovieItem title={result.movie.title} year={result.movie.year} imdbId={result.movie.ids.imdb}/>;
          			break;
          		}
                            
            })}
          </ul>
        </div>
      );
  }
}
