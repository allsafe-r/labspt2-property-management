import React from 'react';
// import PropTypes from 'prop-types';
import '../../assets/css/general.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasScrolled: false
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		const scrollTop = window.pageYOffset;

		if (scrollTop > 50) {
			this.setState({ hasScrolled: true });
		} else {
			this.setState({ hasScrolled: false });
		}
	};

	render() {
		return (
			<div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
				<div className="HeaderGroup">
					<img src={require('../../assets/images/logo8.svg')} width="180" alt="Logo" />
					<button className="features">Features</button>
					<button className="features">Pricing</button>
					<Link to={'/login'}>
						<button className="login-button-menu">Login</button>
					</Link>
					<Link to={'/register/plan'}>
						<button className="register-button-menu">Register</button>
					</Link>
				</div>
			</div>
		);
	}
}


export default Menu;
