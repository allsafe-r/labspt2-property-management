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
		contactEmail: '',
		alerts: []
	};

	componentDidMount() {
		let id = localStorage.getItem('userId');
		axios
			.get(`https://tenantly-back.herokuapp.com/users/${id}`)
			.then((user) => {
				// console.log(user);
				this.setState({ houseId: user.residenceId });
			})
			.catch((err) => console.log(err));

		axios.get(`https://tenantly-back.herokuapp.com/properties//${this.state.houseId}`).then((house) => {
			this.setState({ address: house.address });
		});
		// console.log(this.state);
		axios.get(`http://localhost:9000/alerts`).then((res) => {
			let alertsObj = res.data.filter((alert) => alert.houseId == this.state.houseId);
			let alertsArr = [];
			alertsObj.forEach((alert) => {
				alertsArr.push(alert.alert);
			});
			this.setState({ alerts: alertsArr });
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
					<div>
						{this.state.alerts.map((alert) => {
							return <li>{alert}</li>;
						})}
					</div>
				</div>
				<div className="right-tenant-dash">
					<div>Address{this.state.address}</div>
					<div>Contact Info{this.state.contact}</div>
					<div>Contact Email{this.state.contactEmail}</div>
					<div>24/7 Phone{this.state.maintenancePhone}</div>
				</div>
			</div>
		);
	}
}
