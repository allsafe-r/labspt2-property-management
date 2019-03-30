import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/general.css';

class TenantSideMenu extends Component {
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
						<li>Dashboard</li><li>></li>
					</Link>
					<Link to={'/tenant/payments'}>
						<li>Payments</li><li>></li>
					</Link>
					<Link to={'/tenant/maintenance'}>
						<li>Maintenance</li><li>&ensp;&ensp;></li>
					</Link>
					<Link to={'/tenant/settings'}>
						<li>Settings</li><li>></li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default TenantSideMenu;
