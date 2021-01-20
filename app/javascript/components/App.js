import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import NotFound from './pages/NotFound'

import mockApartments from './mockApartments.js'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			apartments: mockApartments,
		}
	}

	createNewApartment = (newapartment) => {
		console.log(newapartment)
	}

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
					<Route exact path='/' component={Home} />

					<Route
						path='/apartmentindex'
						render={(props) => (
							<ApartmentIndex apartments={this.state.apartments} />
						)}
					/>

					<Route
						path='/apartmentshow/:id'
						render={(props) => {
							let id = props.match.params.id
							let apartment = this.state.apartments.find(
								(apartment) => apartment.id === parseInt(id)
							)
							return <ApartmentShow apartment={apartment} />
						}}
					/>

					<Route
						path='/apartmentnew'
						render={(props) => {
							return (
								<ApartmentNew
									current_user={this.props.current_user}
									createNewApartment={this.createNewApartment}
								/>
							)
						}}
					/>

					<Route component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

export default App
