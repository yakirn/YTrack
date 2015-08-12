'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var Router = require('react-router');

var YtrackApp = React.createClass({
  render: function() {
  	console.debug(Router.RouteHandler);
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
        <span>hello</span>
      	<Router.RouteHandler/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = YtrackApp;
