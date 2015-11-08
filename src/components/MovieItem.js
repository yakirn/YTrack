'use strict';

import React from 'react';

//var Actions = require('actions/xxx')

require('styles/MovieItem.scss');

var MovieItem = React.createClass({

  render: function () {
    let { ids, title, year } = this.props;
  	let relatedURL = '/related?id=' + ids.trakt;
    return (
        <li className="MovieItem">
            <div className="title">{title}</div>
            <div className="year">{year}</div>
            {ids.imdb ? <div className="imdb-link"><a href={'http://www.imdb.com/title/'+ids.imdb} target="_blank">IMDB</a></div> : '' }
            <div className="related-movies"><a href={relatedURL}>Show related movies</a></div>
        </li>
      );
  }
});

module.exports = MovieItem;
