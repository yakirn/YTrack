'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/MovieItem.scss');

var MovieItem = React.createClass({

  render: function () {
  	var url = 'http://www.imdb.com/title/'+this.props.imdbId;
    return (
        <li className="MovieItem">
            <div className="title">{this.props.title}</div>
            <div className="year">{this.props.year}</div>
            <div className="imdb-link"><a href={url} target="_blank">IMDB</a></div>
        </li>
      );
  }
});

module.exports = MovieItem;
