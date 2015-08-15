'use strict';

import Api from 'classes/api';
var React = require('react/addons');

//var UserActions = require('actions/UserActionCreators');
var userStore = require('stores/UserStore');

require('styles/Login.scss');

export default class Login extends React.Component{
	constructor (props) {
		super(props);
    	//this.render = this.render.bind(this);
      // this.componentDidMount = this.componentDidMount.bind(this);
      // this.componentWillUnmount = this.componentWillUnmount.bind(this);
      this.state = {foo: 'bar'};
      if(this.props.query.code) { Api.getToken(this.props.query.code); }
      
  	}

	onUserChange (user) {
        this.setState({
            currentUser: user
        });
    }
    componentDidMount () {
        this.unsubscribe = userStore.listen(this.onUserChange);
    }
    componentWillUnmount () {
        this.unsubscribe();
    }
    onLoginClick () {
    	Api.authorize();
    }
    renderGreeting () {
		return (<p>Your token is {userStore.user.token.access_token}</p>);
    }
    renderLoginButton () {
		return (<button type="button" onClick={this.onLoginClick} >Login</button>);
    }

  render () {
	let content = userStore.user.token ? this.renderGreeting() : this.renderLoginButton();
    return (
        <div className="Login">
          {content}
        </div>
      );
  }
}
