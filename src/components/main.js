'use strict';

var YtrackApp = require('./YtrackApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

//import { Login } from './Login';
import { Atest } from './Atest';

var content = document.getElementById('content');

var Routes = (
  <Route handler={YtrackApp}>
    <DefaultRoute name="/" handler={Atest}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
