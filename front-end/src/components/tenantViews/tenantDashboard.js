import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');
// const url = `https://tenantly-back.herokuapp.com/alerts`;
const url = `http://localhost:9000/alerts`;

export default class tenantDashboard extends Component {
	state = {
		houseId: 1,
		residenceOwner: 1,
		alerts: [],
		address: '',
		contact: '',
		maintenancePhone: '',
		contactEmail: '',
		alerts: []
	};

	componentDidMount() {
		let id = localStorage.getItem('userId');

		// go into users to find which residence you live at
		axios
			.get(`https://tenantly-back.herokuapp.com/users/${id}`)
			.then((user) => {
				// console.log(user);
				this.setState({ houseId: user.data.residenceId });
			})
			// go into users residence, grab some information and set it to state, grab owner of residence to supply rest of information
			.then(
				axios
					.get(`https://tenantly-back.herokuapp.com/properties/${this.state.houseId}`)
					.then((res) => {
						let property = res.data;
						this.setState({ residenceOwner: property.owner, address: property.propertyAddress });
					})
					// find the owner of logged in users residence to supply contact info for owner
					.then(
						axios.get(`https://tenantly-back.herokuapp.com/users/${this.state.residenceOwner}`).then((res) => {
							let owner = res.data;
							this.setState({ contact: owner.phone, contactEmail: owner.email });
						})
					)
			)
			.then(
				// go into alerts and grab each alerts where the houseId matches logged in users residence, set to state
				axios.get(url).then((res) => {
					let alertsObj = res.data.filter((alert) => alert.houseId == this.state.houseId);
					this.setState({ alerts: alertsObj });
				})
			);
	}
	render() {
		return (
			<div>
				<div className="left-tenant-dash">
					<div>
						<Link to="/tenant/payments">Make a Payment</Link>
					</div>
					<div>
						<Link to="/tenant/maintenance">Submit a Work Order</Link>
					</div>
					<div>
						{this.state.alerts.map((alert) => {
							return <li key={alert.id}>{alert.alert}</li>;
						})}
					</div>
				</div>
				<div className="right-tenant-dash">
					<div>Address: {this.state.address}</div>
					<div>Contact Info: {this.state.contact}</div>
					<div>Contact Email: {this.state.contactEmail}</div>
					<div>24/7 Phone: {this.state.maintenancePhone}</div>
				</div>
			</div>
		);
	}
}
