'use strict';

import LoginSource from 'sources/LoginSource';
import React from 'react';
var Router = require('react-router');

var UserActions = require('actions/UserActionCreators');
var userStore = require('stores/UserStore');

require('styles/Login.scss');

var Login  = React.createClass({

  mixins: [ Router.State ],

	getInitialState () {
      return { user: userStore.user };
  	},

    onUserChange (user) {
        this.setState({
            user: user
        });
    },
    async componentDidMount () {
      this.unsubscribe = userStore.listen(this.onUserChange);
      let code = this.getQuery().code;
      if(code) { 
        try {
          let tokenData = await LoginSource.getToken(code);
          tokenData = JSON.parse(tokenData);
          UserActions.token(tokenData);
          const profileData = await LoginSource.getProfileData(tokenData.access_token);
          UserActions.login(profileData);
          window.location.replace('/');
        } catch(err){
          console.log(err);
        }
      }
    },
    componentWillUnmount () {
      this.unsubscribe();
    },
    onLoginClick () {
      	LoginSource.authorize();
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
