import React, { Component } from 'react';
import './assets/css/App.css';
// import Menu from './components/LandingPage/Menu';
// import IndexPage from './components/LandingPage/IndexPage';
// import Stripe from './components/Stripe';
import RouteContainer from './components/routeContainer';
import Login from './components/auth/login';
import Register from './components/auth/register';
// import RegisterTwo from './components/auth/register2';
import Pricing from './components/LandingPage/Pricing';
import { logPageView } from './utils/analytics';
import { initGA } from './utils/analytics';
import LandingView from './components/LandingPage/LandingView';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
const url = 'http://localhost:9000';
// const url = 'https://tenantly-back.herokuapp.com';
const axios = require('axios');

class App extends Component {
	state = {
		loggedIn: false,
		isAdmin: null
	};

	componentDidMount() {
		initGA();
		logPageView();
		this.authenticate();
	}

	authenticate = (admin) => {
		// console.log(admin.isAdmin)
		const token = localStorage.getItem('jwtToken');
		const auth = {
			headers: {
				Authorization: token
			}
		};
		// console.log(token)
		if (token) {
			axios
				.get(url, auth)
				.then((res) => {
					if (res.data) {
						this.setState({ loggedIn: true, isAdmin: admin});
					} else {
						throw new Error();
					}
				})
				.catch((err) => console.log(err));
		} else {
			console.log('Register and/or login to receive a token');
		}
	};

	logOut = () => {
		localStorage.removeItem('jwtToken');
		this.setState({ loggedIn: false });
	};
	render() {
		if (this.state.loggedIn === false) {
			return (
				<div>
					<Route exact path={'/'} component={LandingView} />
					<Route exact path={'/register'} component={Register} />
					<Route path={'/register/plan'} component={Pricing} />
					<Route exact path={'/login'} render={(props) => <Login {...props} authenticate={this.authenticate} />} />
				</div>
			);
		} else {
			return (
				<div className="dashboard-wrapper">
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

					{/*removed stripe component*/}
				</div>
			);
		}
	}
}

export default App;
