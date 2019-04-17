import React, { Component } from 'react';
import axios from 'axios';
const decode = require('jwt-decode');
class AdminSettings extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		oldPW: '',
		newPW1: '',
		newPW2: ''
	};

	componentDidMount() {
		const token = localStorage.getItem('jwtToken');
		const id = decode(token).userId;

		axios
			.get(`https://tenantly-back.herokuapp.com/users/${id}`)
			// .get(`http://localhost:9000/users/${id}`)
			.then((user) => {
				this.setState({
					firstName: user.data.firstName,
					email: user.data.email,
					phone: user.data.phone,
					lastName: user.data.lastName
				});
			})
			.catch((err) => console.log(err));
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		// grabbing ID off local storage to access specific user info
		let id = localStorage.getItem('userId');

		// If the user enters old password without trying to change password, it throws warning
		if (this.state.oldPW !== '' && this.state.newPW1 === '') {
			alert('Only enter in your old password if you want to change your password');
		} else if (this.state.oldPW === '' && this.state.newPW1 !== '') {
			// If they try to create a new password without entering old password
			alert('Please enter your previous password to update to new password');
		} else if (this.state.oldPW !== '' && this.state.newPW1 !== '' && this.state.newPW1 !== this.state.newPW2) {
			// If new passwords do not match it throws error
			alert('You new passwords do not match');
		} else {
			// If old password is entered AND new passwords match, then it continues to attempt update
			axios
				.put(`https://tenantly-back.herokuapp.com/users/${id}`, {
					...this.state,
					id: parseInt(id)
				})
				// .put(`http://www.localhost:9000/users/${id}`, { ...this.state, id: parseInt(id) })
				.then((res) => {
					console.log(res);
					alert(res.data.message);
				})
				.catch((err) => {
					console.log(err);
				})
				.then(this.setState({ oldPW: '', newPW1: '', newPW2: '' }));
		}
	};

	handleCheckboxChange = (e) => {
		this.setState({ [e.target.name]: e.target.checked });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div>
						<h6>{this.state.firstName}</h6>
					</div>
					<div>
						<input
							placeholder="lastName"
							name="lastName"
							value={this.state.lastName}
							onChange={this.onChange}
							type="text"
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
							placeholder="phone"
							name="phone"
							value={this.state.phone}
							onChange={this.onChange}
							type="text"
							required
						/>
					</div>
					<div>
						<input
							placeholder="password"
							name="oldPW"
							value={this.state.oldPW}
							onChange={this.onChange}
							type="password"
						/>
					</div>
					<div>
						<input
							placeholder="new password"
							name="newPW1"
							value={this.state.newPW1}
							onChange={this.onChange}
							type="password"
						/>
					</div>{' '}
					<div>
						<input
							placeholder="new password"
							name="newPW2"
							value={this.state.newPW2}
							onChange={this.onChange}
							type="password"
						/>
					</div>
					<button>Update</button>
				</form>
			</div>
		);
	}
}

export default AdminSettings;
