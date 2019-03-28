import React, { Component } from 'react';
import './App.css';
import Menu from './components/LandingPage/Menu';
import IndexPage from './components/LandingPage/IndexPage';
import Stripe from './components/Stripe';
import DashBoard from './components/DashBoard/dashBoardView';
import Login from './components/DashBoard/login';
import Register from './components/DashBoard/register';

// const url = process.env.home || 'http://localhost:9000';

const url = 'https://tenantly-back.herokuapp.com';
const axios = require('axios');

class App extends Component {
	state = {
		loggedIn: false
	};

	componentDidMount() {
		this.authenticate();
	}

	authenticate = () => {
		const token = localStorage.getItem('jwtToken');
		const auth = {
			headers: {
				Authorization: token
			}
		};

		if (token) {
			axios
				.get(url, auth)
				.then((res) => {
					if (res.data) {
						this.setState({ loggedIn: true });
						console.log(this.state);
					} else {
						throw new Error();
					}
				})
				.catch((err) => this.props.history.push('/login'));
		} else {
			console.log('wheres your token bro');
		}
	};

	logOut = () => {
		console.log('logout clicked');
		localStorage.removeItem('jwtToken');
		this.setState({ loggedIn: false });
		console.log('hi');
	};

	render() {
		if (this.state.loggedIn === false) {
			return (
				<div>
					<Menu />
					<IndexPage />

					<Register />
					<Login authenticate={this.authenticate} />
				</div>
			);
		} else {
			return (
				<div>
					{/* <Menu /> */}
					<button onClick={() => this.logOut()}>Logout</button>
					<DashBoard logOut={this.logOut} />
					<Stripe />
				</div>
			);
		}
	}
}

export default App;
