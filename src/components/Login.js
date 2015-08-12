'use strict';

var React = require('react/addons');

//var UserActions = require('actions/UserActionCreators');
var userStore = require('stores/UserStore');

require('styles/Login.scss');

export default class Login extends React.Component{
	constructor (props) {
		super(props);
    	//this.render = this.render.bind(this);
  	}

	onUserChange (user) {
        this.setState({
            currentUser: user
        });
    }
    componentDidMount () {
        this.unsubscribe = statusStore.listen(this.onUserChange);
    }
    componentWillUnmount () {
        this.unsubscribe();
    }
    onLoginClick () {
    	console.log('login');
    }
    renderGreeting () {
		return (<p>Hello {userStore.user.name}</p>);
    }
    renderLoginButton () {
		return (<button type="button" onClick={this.onLoginClick} >Login</button>);
    }

  render () {
	//let content = userStore.user ? this.renderGreeting() : this.renderLoginButton();

    return (
        <div className="Login">
          content
        </div>
      );
  }
}
