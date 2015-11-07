'use strict';

import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

// CSS
require('normalize.css');
require('../styles/main.scss');

import Header from './Header';

var Router = require('react-router');

var YtrackApp = React.createClass({
  render: function() {
    return (
      <div className="main">
      	<Header/>
        <ReactTransitionGroup transitionName="fade">
      	<Router.RouteHandler/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = YtrackApp;
