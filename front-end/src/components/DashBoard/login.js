import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: [ e.target.value ] });
	};

	onSubmit = (e) => {
		e.preventDefault();
		axios
			.post('localhost:9000/api/login', this.state)
			.then((res) => {
				localStorage.setItem('jwtToken', res.data.token);
				this.props.history.push('/');
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
					<button onSubmit={this.onSubmit}>Login</button>
				</div>
			</form>
		);
	}
}

export default Login;
