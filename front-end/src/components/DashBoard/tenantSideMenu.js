import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../general.css';

class SideMenu extends Component {
	constructor() {
		super();
		this.state = {
			admin: false
		};
	}
	render() {
		return (
			<div className="tenant side-menu">
				<ul>
					<Link to={'/tenant/dashboard'}>
						<li>Dashboard</li>
					</Link>
					<Link to={'/tenant/payments'}>
						<li>Payments</li>
					</Link>
					<Link to={'/tenant/maintenance'}>
						<li>Maintenance</li>
					</Link>
					<Link to={'/tenant/settings'}>
						<li>Settings</li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default SideMenu;
