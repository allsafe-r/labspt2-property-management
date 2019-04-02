import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
// import Menu from '../LandingPage/Menu';
// import Pricing from '../LandingPage/Pricing'
// const url = process.env.register || 'http://localhost:9000/api/register';
const url = 'https://tenantly-back.herokuapp.com/api/register';

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
		this.setState({ [e.target.name]: e.target.value });
	};

	isAdmin = () => {
		this.setState({ isAdmin: true });
	};

	isNotAdmin = () => {
		this.setState({ isAdmin: false });
	};

	onSubmit = (e) => {
		e.preventDefault();
		axios
			.post(url, this.state)
			.then(() => {
				this.props.history.push('/login');
			})
			.catch((err) => {
				console.log({ Error: err });
			});
	};

	render() {
		return (
			 <div className="form-container">
				<form onSubmit={this.onSubmit}>
					<img className="logo-login" src={logo} alt="Logo" />
				<div>
					<input type="radio" onClick={this.isAdmin} value="LANDLORD" name="account"/> Landlord
					<input type="radio" onClick={this.isNotAdmin} value="TENANT" name="account"/> Tenant
				</div>
				<div>
					<h1>Create a Tenantly account</h1>
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
					<button>Register</button>
				</div>
				<div>
					<p>Already have an account?</p>
					<Link to={'/login'}>
						<button>Login here</button>
					</Link>
				</div>
			</form>
			</div>
		);
	}
}

export default Register;
