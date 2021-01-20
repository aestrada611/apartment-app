import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class ApartmentIndex extends Component {
	render() {
		console.log(this.props.apartments)
		return (
			<React.Fragment>
				<h3>All the Apartments</h3>
				{this.props.apartments &&
					this.props.apartments.map((apartment, index) => {
						return (
							<div key={index}>
								<h4>Check out this listing</h4>
								<h5>Street: {apartment.street}</h5>
								<h5>City: {apartment.city}</h5>
								<h5>State: {apartment.state}</h5>
								<br />
							</div>
						)
					})}
			</React.Fragment>
		)
	}
}
export default ApartmentIndex
