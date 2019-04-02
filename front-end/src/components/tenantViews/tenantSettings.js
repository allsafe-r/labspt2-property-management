import React, { Component } from 'react';
import axios from 'axios';

class TenantSettings extends Component {
	state = {
		email: '',
		phone: '',
		textSubscribe: false,
		emailSubscribe: false,
		oldPW: '',
		newPW1: '',
		newPw2: ''
	};

	componentDidMount() {
		let id = localStorage.getItem('userId');
		axios
			.get(`https://tenantly-back.herokuapp.com/users/${id}`)
			.then((user) => {
				this.setState({
					email: user.data.email,
					phone: user.data.phone,
					textSubscribe: user.data.textSubscribe,
					emailSubscribe: user.data.emailSubscribe
				});
			})
			.catch((err) => console.log(err));
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		let id = localStorage.getItem('userId');
		e.preventDefault();
		if (this.state.oldPW !== '' && this.state.newPW1 !== '' && this.state.newPW1 !== this.state.newPW2) {
			alert('You new passwords do not match');
		} else {
			axios
				// .get(`https://tenantly-back.herokuapp.com/users/${id}`)
				.put(`http://www.localhost:9000/users/${id}`, this.state)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
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
							type="checkbox"
							name="textSubscribe"
							value={this.state.textSubscribe}
							onChange={this.handleCheckboxChange}
						/>
						<span>Get texts</span>
						<input
							type="checkbox"
							name="emailSubscribe"
							value={this.state.emailSubscribe}
							onChange={this.handleCheckboxChange}
						/>
						<span>Get emails?</span>
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

export default TenantSettings;
