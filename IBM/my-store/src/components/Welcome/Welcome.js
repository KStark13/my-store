import React from 'React';


const Welcome = ({user, onSignOut}) => {

	return(
		<div>
			Welcome {user.username}!
			<a onClick{onSignOut}> Sign out </a>
		</div>
		)
}

export default Welcome;