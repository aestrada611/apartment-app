import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
	render() {
		console.log(this.props.logged_in)
		return (
			<Router>
				<Header
					logged_in={this.props.logged_in}
					sign_in_route={this.props.sign_in_route}
					sign_out_route={this.props.sign_out_route}
				/>
				<Switch>
					<Home />
				</Switch>
			</Router>
		)
	}
}

export default App
