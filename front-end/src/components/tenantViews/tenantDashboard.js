import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');

export default class tenantDashboard extends Component {
	state = {
		houseId: 1,
		alerts: [],
		address: '',
		contact: '',
		maintenancePhone: '',
		contactEmail: ''
	};

	componentDidMount() {
		let id = localStorage.getItem('userId');
		axios
			.get(`https://tenantly-back.herokuapp.com/users/${id}`)
			.then((user) => {
				console.log(user);
				this.setState({ houseId: user.residenceId });
			})
			.catch((err) => console.log(err));

		axios.get(`https://tenantly-back.herokuapp.com/properties//${this.state.houseId}`).then((house) => {
			this.setState({ address: house.address });
		});
		console.log(this.state);
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
					<div>Map over alerts here</div>
				</div>
				<div className="right-tenant-dash">
					<div>1{this.state.address}</div>
					<div>2{this.state.contact}</div>
					<div>3{this.state.contactEmail}</div>
					<div>4{this.state.maintenancePhone}</div>
				</div>
			</div>
		);
	}
}
