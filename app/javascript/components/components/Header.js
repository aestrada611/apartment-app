import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className='top-nav'>
					<h1>Apartment App</h1>
					<button>
						{!this.props.logged_in && (
							<a href={this.props.sign_in_route}>Sign In</a>
						)}

						{this.props.logged_in && (
							<a href={this.props.sign_out_route}>Sign Out</a>
						)}
					</button>
				</div>
			</React.Fragment>
		)
	}
}

export default Header
