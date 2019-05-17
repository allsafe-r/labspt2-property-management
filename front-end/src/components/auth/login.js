import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../assets/css/general.css';
import logo from '../../assets/images/logo.png';
//const url = 'https://tenantly-back.herokuapp.com/api/login';
 const url = 'http://localhost:9000/api/login';
const decode = require('jwt-decode');

class Login extends Component {
	state = {
		email: '',
		password: '',
		search: false,
		type: "landlord",
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	isAdmin = () => {
		this.setState({ type: "landlord" });
	};

	isNotAdmin = () => {
		this.setState({ type: "tenant" });
	};


	onSubmit = (e) => {
		e.preventDefault();
		const acc = { email: this.state.email, password: this.state.password, type: this.state.type };
		if (this.state.email.indexOf('@') < 0 || this.state.email.indexOf('@') > this.state.email.indexOf('.com')) {
			alert('Please enter a proper e-mail');
		} else {
			this.setState({ search: true });
			axios
				.post(url, acc)
				.then((res) => {
					localStorage.setItem('jwtToken', res.data.token);
					decode(localStorage.getItem('jwtToken')).isAdmin
						? this.props.history.push('/properties')
						: this.props.history.push('/dashboard');
					this.props.authenticate();
				})
				.catch((err) => {
					// console.log(err);
					alert('This e-mail and/or password does not match our records');
					this.setState({ search: false });
				});
		}
	};

	render() {
		return (
			<div className="form-container">
				<form onSubmit={this.onSubmit}>
					<Link to={'/'}>
						<img className="logo-login" src={logo} alt="Logo" />
					</Link>
					<div className="register-radio-container">
						<input type="radio" onClick={this.isAdmin} value="LANDLORD" name="account" />{' '}
						<p className="radio-p">Landlord</p>
						<input type="radio" onClick={this.isNotAdmin} value="TENANT" name="account" />{' '}
						<p className="radio-p">Tenant</p>
					</div>
					<div className="user-container">
						<input
							placeholder="email"
							name="email"
							value={this.state.email}
							onChange={this.onChange}
							type="text"
							required
						/>
					</div>
					<div className="password-container">
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
						{this.state.search ? (
							<div className="lds-ring">
								<div />
							</div>
						) : (
							<button className="form__button ">Login</button>
						)}
					</div>
					<div className="no-account">
						<p className="login-p">Don't have an account?</p>
						<Link to={'/register'}>
							<button className="register-button">Register</button>
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
