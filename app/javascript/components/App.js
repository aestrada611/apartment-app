import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import NotFound from './pages/NotFound'
import ProtectedIndex from './pages/ProtectedIndex'
import ApartmentEdit from './pages/ApartmentEdit'

import mockApartments from './mockApartments.js'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			apartments: [],
		}
	}

	componentDidMount(props) {
		this.indexApartment()
	}

	indexApartment = () => {
		fetch('/apartments')
			.then((response) => {
				return response.json()
			})
			.then((payload) => {
				this.setState({ apartments: payload })
			})
			.catch((errors) => {
				console.log('index error', errors)
			})
	}

	createNewApartment = (newapartment) => {
		console.log(newapartment)
		fetch('/apartments', {
			body: JSON.stringify(newapartment),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
			.then((response) => {
				if (response.status === 422) {
					alert('There is something wrong with your submission.')
				}
				return response.json()
			})
			.then(() => {
				this.indexApartment()
			})
			.catch((errors) => {
				console.log('create errors', errors)
			})
	}

	editApartment = (edited) => {
		console.log(edited)
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

					{/* Protected Index */}

					{this.props.logged_in && (
						<Route
							path='/userapartments'
							render={(props) => {
								let id = this.props.current_user.id
								let userapartments = this.state.apartments.filter(
									(apartments) => apartments.user_id === id
								)
								return <ProtectedIndex userapartments={userapartments} />
							}}
						/>
					)}

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

					{/* New Apartment */}

					{this.props.logged_in && (
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
					)}

					{/* Edit Apartment */}

					<Route
						path='/apartmentedit/:id'
						render={(props) => {
							let id = props.match.params.id
							let apartment = this.state.apartments.find(
								(apartment) => apartment.id === parseInt(id)
							)
							return (
								<ApartmentEdit
									current_user={this.props.current_user}
									editApartment={this.editApartment}
									apartment={apartment}
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
