import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class ProtectedIndex extends Component {
	render() {
		return (
			<React.Fragment>
				<h3>All the Apartments</h3>
				{this.props.userapartments &&
					this.props.userapartments.map((apartment, index) => {
						return (
							<div key={index}>
								<h4>Check out this listing</h4>
								<h5>Street: {apartment.street}</h5>
								<h5>City: {apartment.city}</h5>
								<h5>State: {apartment.state}</h5>
								<h5>Manager: {apartment.manager}</h5>
								<h5>Email: {apartment.email}</h5>
								<h5>Monthly Rent: {apartment.price}</h5>
								<h5>Number of Bedrooms: {apartment.bedrooms}</h5>
								<h5>Number of Bathrooms: {apartment.bathrooms}</h5>
								<h5>Are pets allowed?: {apartment.pets}</h5>
								<br />
							</div>
						)
					})}
			</React.Fragment>
		)
	}
}
export default ProtectedIndex
