'use strict';
require("babel-polyfill");
var YtrackApp = require('./YtrackApp');
import React from 'react';
import ReactDOM from 'react-dom';
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

import Related from './Related';
import Index from './Index';

var content = document.getElementById('content');

var Routes = (
  <Route handler={YtrackApp}>
    <DefaultRoute handler={Index}/>
    <Route name="related/:id" handler={Related}/>
  </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  ReactDOM.render(<Handler/>, content);
});
