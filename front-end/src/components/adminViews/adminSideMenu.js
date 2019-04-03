import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/general.css';
import Logo from './../../assets/images/logo8.svg';

class SideMenu extends Component {
	constructor() {
		super();
		this.state = {
			admin: true
		};
	}
	render() {
		return (
			<div className="admin side-menu">
				<ul>
					<Link to={'/'}>
						<img src={Logo} className="dashboardLogo" />
					</Link>
					<Link to={'/admin/properties'}>
						<li>Properties</li>
						<li>></li>
					</Link>
					<Link to={'/admin/worklist'}>
						<li>Work Orders</li>
						<li>></li>
					</Link>
					<Link to={'/admin/add-tenant'}>
						<li>Add Tenant</li>
						<li>></li>
					</Link>
					<Link to={'/admin/billing'}>
						<li>Billing</li>
						<li>></li>
					</Link>
					<Link to={'/admin/settings'}>
						<li>Settings</li>
						<li>></li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default SideMenu;
