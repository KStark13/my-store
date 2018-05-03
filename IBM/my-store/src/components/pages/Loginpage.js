import React from 'react';


class Loginpage extends React.Component {

		//initial state
		state = {
			user: null
		}
	//modifying state to log in and sign out
	signIn(username, password) {
		this.setState({
			user: {
				username,
				password,
			}
		})
	}

	signOut() {
		//clear user from state
		this.setState({user:null})
	}

	render() {

		return(
			<div>
				<h1> My Store </h1>
				
			</div>

			)
	}
}

export default Loginpage;