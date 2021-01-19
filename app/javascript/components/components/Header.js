import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
	render() {
		console.log(this.props.logged_in)
		return (
			<React.Fragment>
				<h1>Apartment App</h1>
				<button>
					{!this.props.logged_in && (
						<a href={this.props.sign_in_route}>Sign In</a>
					)}
				</button>
				<button>
					{this.props.logged_in && (
						<a href={this.props.sign_out_route}>Sign Out</a>
					)}
				</button>
			</React.Fragment>
		)
	}
}

export default Header
