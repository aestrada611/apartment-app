import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'

class App extends React.Component {
	render() {
		console.log(this.props.logged_in)
		return (
			<React.Fragment>
				<Header
					logged_in={this.props.logged_in}
					sign_in_route={this.props.sign_in_route}
					sign_out_route={this.props.sign_out_route}
				/>
			</React.Fragment>
		)
	}
}

export default App
