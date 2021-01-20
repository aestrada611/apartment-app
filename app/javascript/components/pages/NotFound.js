import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class NotFound extends Component {
	render() {
		return (
			<React.Fragment>
				<h3>You seem lost lets go back home</h3>
				<NavLink to={'/'}>
					<Button>Go Home</Button>
				</NavLink>
			</React.Fragment>
		)
	}
}
export default NotFound

// import React, { Component } from 'react'

// const NotFound = () => {
// 	return (
// 		<>
// 			<h3>Ooops!</h3>
// 		</>
// 	)
// }
// export default NotFound
