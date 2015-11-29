'use strict';

import React from 'react';
import { Link } from 'react-router'

//var Actions = require('actions/xxx')

require('styles/MovieItem.scss');

var MovieItem = React.createClass({

  render: function () {
    let { ids, title, year } = this.props;
  	let relatedURL = '/related/' + ids.trakt;
    return (
        <li className="MovieItem">
            <div className="title">{title} ({year})</div>
            {ids.imdb ? <div className="imdb-link"><a href={'http://www.imdb.com/title/'+ids.imdb} target="_blank">IMDB</a></div> : '' }
            <div className="related-movies"><Link to={relatedURL}>Show related movies</Link></div>
        </li>
      );
  }
});

module.exports = MovieItem;
