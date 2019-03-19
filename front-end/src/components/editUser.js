import React, { Component } from 'react';
import axios from 'axios';

const url =
	process.env.editUser || this.state.isAdmin == false
		? `localhost:9000/users/tenants/${id}`
		: `localhost:9000/users/admins/${id}`;

class Register extends Component {
	state = {
		isAdmin: false,
		email: '',
		phone: '',
		displayName: ''
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: [ e.target.value ] });
	};

	onSubmit = (e) => {
		e.preventDefault();
		axios
			.put(url, this.state)
			.then(() => {
				this.props.history.push(url);
			})
			.catch((err) => {
				console.log({ Error: err });
			});
	};

	render() {
		return (
			<form>
				<div>
					<input
						placeholder="email"
						name="email"
						value={this.state.email}
						onChange={this.onChange}
						type="text"
						required
					/>
				</div>
				<div>
					<input
						placeholder="phone number"
						name="phone"
						value={this.state.phone}
						onChange={this.onChange}
						type="text"
						required
					/>
				</div>
				<div>
					<input
						placeholder="display name"
						name="displayName"
						value={this.state.displayName}
						onChange={this.onChange}
						type="text"
						required
					/>
				</div>
				<div>
					<button onSubmit={this.onSubmit}>Update</button>
				</div>
			</form>
		);
	}
}

export default editUser;
