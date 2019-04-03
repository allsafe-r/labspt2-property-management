import React, { Component } from 'react';
import './assets/css/App.css';
import Menu from './components/LandingPage/Menu';
import IndexPage from './components/LandingPage/IndexPage';
import Stripe from './components/Stripe';
import RouteContainer from './components/routeContainer';
import Login from './components/auth/login';
import Register from './components/auth/register';
// import RegisterTwo from './components/auth/register2';
import Pricing from './components/LandingPage/Pricing';
import { logPageView } from './utils/analytics';
import { initGA } from './utils/analytics';

import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// const url = process.env.home || 'http://localhost:9000';

const url = 'https://tenantly-back.herokuapp.com';
const axios = require('axios');

class App extends Component {
	state = {
		loggedIn: false
	};

	componentDidMount() {
		initGA();
		logPageView();
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
					} else {
						throw new Error();
					}
				})
				.catch((err) => this.props.history.push('/login'));
		} else {
			console.log('Register and/or login to receive a token');
		}
	};

	logOut = () => {
		localStorage.removeItem('jwtToken');
		localStorage.removeItem('userId');
		this.setState({ loggedIn: false });
	};

	render() {
		if (this.state.loggedIn === false) {
			return (
				<div>
					<Route exact path={'/'} component={Menu} />
					<Route exact path={'/'} component={IndexPage} />
					<Route exact path={'/register'} component={Register} />
					<Route path={'/register/plan'} component={Pricing} />
					<Route exact path={'/login'} render={(props) => <Login {...props} authenticate={this.authenticate} />} />
				</div>
			);
		} else {
			return (
				<div>
					<div className="top-bar">
						<Link to={'/'}>
							<button onClick={this.logOut}>Logout</button>
						</Link>
						<Link to={'/admin/properties'}>
							<button>Development Purposes - I'm an admin!</button>
						</Link>
						<Link to={'/tenant/dashboard'}>
							<button>Development Purposes - I'm a tenant!</button>
						</Link>
					</div>
					<RouteContainer />

					<Stripe />
				</div>
			);
		}
	}
}

export default App;
