import React, { Component } from 'react';
import axios from 'axios';
// const url = process.env.login || 'http://localhost:9000/api/login';
const url = 'https://tenantly-back.herokuapp.com/api/login';

class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		axios
			.post(url, this.state)
			.then((res) => {
				localStorage.setItem('jwtToken', res.data.token);
				// this.props.history.push('/');
				this.props.authenticate();
			})
			.catch((err) => {
				console.log({ Error: 'catching err' });
			});
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
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
					<button>Login</button>
				</div>
			</form>
		);
	}
}

export default Login;
