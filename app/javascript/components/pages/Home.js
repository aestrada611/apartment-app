import React from 'react'

class Home extends React.Component {
	render() {
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

export default Home
