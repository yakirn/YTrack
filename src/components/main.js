'use strict';

var YtrackApp = require('./YtrackApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

import Login from './Login';
import Atest from './Atest';

var content = document.getElementById('content');

var Routes = (
  <Route handler={YtrackApp}>
    <DefaultRoute handler={Login}/>
    <Route name="/atest" handler={Atest}/>
  </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, content);
});
