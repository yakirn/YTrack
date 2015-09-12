'use strict';

var React = require('react/addons');
var Search = require('./Search');
var Results = require('./Results').Results;

//var Actions = require('actions/xxx')

require('styles/Index.scss');

var Index = React.createClass({

  render: function () {
    return (
        <div className="Index">
          <h1>Find movies and shows</h1>
          <Search/>
          <Results/>
        </div>
      );
  }
});

module.exports = Index;
