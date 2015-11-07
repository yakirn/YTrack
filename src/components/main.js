'use strict';

var YtrackApp = require('./YtrackApp');
import React from 'react';
import ReactDOM from 'react-dom';
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

import Atest from './Atest';
import Index from './Index';

var content = document.getElementById('content');

var Routes = (
  <Route handler={YtrackApp}>
    <DefaultRoute handler={Index}/>
    <Route name="/atest" handler={Atest}/>
  </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  ReactDOM.render(<Handler/>, content);
});
