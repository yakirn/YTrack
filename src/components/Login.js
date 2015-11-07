'use strict';

import Api from 'sources/api';
import React from 'react';
var Router = require('react-router');

var UserActions = require('actions/UserActionCreators');
var userStore = require('stores/UserStore');

require('styles/Login.scss');

var Login  = React.createClass({

  mixins: [ Router.State ],

	getInitialState () {
		  // super(props);
    	// this.render = this.render.bind(this);
      // this.componentDidMount = this.componentDidMount.bind(this);
      // this.componentWillUnmount = this.componentWillUnmount.bind(this);
      // this.onUserChange = this.onUserChange.bind(this);
      return { user: userStore.user };
  	},

    onUserChange (user) {
        this.setState({
            user: user
        });
    },
    componentDidMount () {
      this.unsubscribe = userStore.listen(this.onUserChange);
      let code = this.getQuery().code;
      if(code) { 
        Api.getToken(code)
        .then( tokenData => {
          tokenData = JSON.parse(tokenData);
          UserActions.token(tokenData);
          return Api.getProfileData(tokenData.access_token);
        })
        .done( profileData => {
            UserActions.login(profileData);
            window.location.replace('/');
          });
      }
    },
    componentWillUnmount () {
      this.unsubscribe();
    },
    onLoginClick () {
      	Api.authorize();
    },
    renderGreeting () {
      return (<span>Welcom {this.state.user.profile.name}</span>);
    },
    renderLoginButton () {
		  return (<button type="button" onClick={this.onLoginClick} >Login</button>);
    },

  render () {
    let content;
    if(this.state.user.profile)
      content = this.renderGreeting();
    else
      content = this.renderLoginButton();
    return (
        <div className="Login">
          {content}
        </div>
      );
  }
});

module.exports = Login;
