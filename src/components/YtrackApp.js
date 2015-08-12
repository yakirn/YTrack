'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var Router = require('react-router');

var YtrackApp = React.createClass({
  render: function() {
  	console.log('YtrackApp');
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
      	<Router.RouteHandler/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = YtrackApp;
