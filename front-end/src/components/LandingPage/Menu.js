import React from 'react';
// import PropTypes from 'prop-types';
import '../../assets/css/general.css';
import { Link } from 'react-router-dom';
import Popup from './Popup'

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasScrolled: false,
			showPopUp: false
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

	togglePopUp() {
		this.setState({
			showPopUp: !this.state.showPopUp
		  });
	}

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
						<button className="register-button-menu" onClick={this.togglePopUp.bind(this)}> Register </button>
					{this.state.showPopUp ? 
						<Popup
							text='Close Me'
							closePopup={this.togglePopUp.bind(this)}						/>
						: null
						}
				</div>
			</div>
		);
	}
}


export default Menu;
