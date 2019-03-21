import React, { Component } from 'react';
import './App.css';
import Menu from './components/LandingPage/Menu';
// import Body from './components/LandingPage/Body';
import IndexPage from './components/LandingPage/IndexPage';
import Stripe from './components/Stripe';
<<<<<<< HEAD
import Workorderform from './components/workorderform';
=======
import Imageform from './components/imageform';
>>>>>>> 02149efc3a4aabf7fe571690ee9231eaa58ea9de
// import Register from './components/DashBoard/register';

class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				{/* <Body /> */}
				<IndexPage />
				<Imageform />
				<Stripe />
				<Workorderform />
			</div>
		);
	}
}

export default App;
