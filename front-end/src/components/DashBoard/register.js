import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
	state = {
		username: '',
		password: '',
		isAdmin: false,
		email: '',
		phone: '',
		displayName: ''
	};

	onChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [e.target.name]: [ e.target.value ] });
	};

	isAdmin = () => {
		this.setState({ [this.state.isAdmin]: true });
	};

	isNotAdmin = () => {
		this.setState({ [this.state.isAdmin]: false });
	};

	onSubmit = (e) => {
		e.preventDefault();
		axios
			.post('localhost:9000/api/register', this.state)
			.then(() => {
				this.props.history.push('/login');
			})
			.catch((err) => {
				res.json({ Error: err });
			});
	};

	render() {
		return (
			<form>
				<div>
					<button onClick={this.isAdmin}>I am a landlord</button>
					<button onClick={this.isNotAdmin}>I am a tenant</button>
				</div>
				<div>
					<input
						placeholder="Enter password"
						name="password"
						value={this.state.password}
						onChange={this.onChange}
						type="password"
						required
					/>
				</div>
				<div>
					<input
						placeholder="username"
						name="username"
						value={this.state.username}
						onChange={this.onChange}
						type="text"
						required
					/>
				</div>
				<div>
					<input
						placeholder="password"
						name="password"
						value={this.state.password}
						onChange={this.onChange}
						type="password"
						required
					/>
				</div>
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
					<button onSubmit={this.onSubmit}>Register</button>
				</div>
			</form>
		);
	}
}

export default Register;
