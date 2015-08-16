'use strict';

import Api from 'classes/api';
var React = require('react/addons');

var UserActions = require('actions/UserActionCreators');
var userStore = require('stores/UserStore');

require('styles/Login.scss');

export default class Login extends React.Component{
	constructor (props) {
		  super(props);
    	this.render = this.render.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.componentWillUnmount = this.componentWillUnmount.bind(this);
      this.onUserChange = this.onUserChange.bind(this);
      this.onLoginClick = this.onLoginClick.bind(this);
      // this.state = {foo: 'bar'};
      this.state = { user: userStore.user };
  	}

    onUserChange (user) {
        this.setState({
            user: user
        });
    }
    componentDidMount () {
      this.unsubscribe = userStore.listen(this.onUserChange);

      if(this.props.query.code) { 
        Api.getToken(this.props.query.code)
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
    }
    componentWillUnmount () {
      this.unsubscribe();
    }
    onLoginClick () {
      	Api.authorize();
    }
    renderGreeting () {
      return (<p>Welcom {this.state.user.profile.name}</p>);
    }
    renderGettingProfile () {
		  return (<p>Welcom {this.state.user.token.access_token}</p>);
    }
    renderLoginButton () {
		  return (<button type="button" onClick={this.onLoginClick} >Login</button>);
    }

  render () {
    let content;
    if(this.state.user.profile)
      content = this.renderGreeting();
    //else if (this.state.user.token)
      //content = this.renderGettingProfile();
    else
      content = this.renderLoginButton();
    return (
        <div className="Login">
          {content}
        </div>
      );
  }
}
