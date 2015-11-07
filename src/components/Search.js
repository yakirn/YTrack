'use strict';

import React from 'react';
var Actions = require('actions/SearchActionCreators');
// var searchStore = require('stores/SearchStore');

require('styles/Search.scss');

var Search = React.createClass({

	handleSubmit (e) {
		e.preventDefault();
	    var query = React.findDOMNode(this.refs.query).value.trim();
	    var year = React.findDOMNode(this.refs.year).value.trim();
	    if (!query) {
	      return;
	    }
	    
	    Actions.search({query})

	    return;
	},

  render () {
    return (
        <div>
	        <form className="Search" onSubmit={this.handleSubmit}>
	          	<input type="text" placeholder="Search title or description..." ref="query"/>
	          	<input type="text" placeholder="Year" ref="year"/>
	          	<button type="submit">Search</button>
	        </form>
      	</div>
      );
  }
});

module.exports = Search;
