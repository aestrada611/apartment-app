import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class ApartmentShow extends Component {
	render() {
		console.log(this.props.apartment)
		return (
			<React.Fragment>
				<h3>About this Apartment</h3>
				<p>Street Name: {this.props.apartment.street}</p>
				<p>City: {this.props.apartment.city}</p>
				<p>State: {this.props.apartment.state}</p>
				<p>Manager: {this.props.apartment.manager}</p>
				<p>Email: {this.props.apartment.email}</p>
				<p>Monthly Rent: {this.props.apartment.price}</p>
				<p>Number of Bedrooms: {this.props.apartment.bedrooms}</p>
				<p>Number of Bathrooms: {this.props.apartment.bathrooms}</p>
				<p>Are pets allowed?: {this.props.apartment.pets}</p>
			</React.Fragment>
		)
	}
}
export default ApartmentShow
