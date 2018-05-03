import React /*{Component}*/ from 'react';

class LoginForm extends React.Component {

	handleSignIn(error) {
		error.preventDefault()
		let username = this.refs.username.value
		let password = this.refs.password.value
		this.props.onSignIn(username, password)
	}

	render() {
		return(
			<form onSubmit={this.handlesSignIn}>
			<h3>Sign In </h3>
			<input type= "text" ref="username" placeholder="Enter your username" />
			<input type= "passwrod" ref="password" placeholder="Enter your password" />
			<input type= "submit" ref="Login" />
			</form>
			)

	}
}

export default LoginForm;