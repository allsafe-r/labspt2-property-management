import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/general.css';
import { Route } from 'react-router-dom';
import Billing from './adminBilling';

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
			<Route exact path={'/admin/billing'} component={Billing} />
				<ul>
					<Link to={'/admin/properties'}>
						<li>Properties</li>
					</Link>
					<Link to={'/admin/worklist'}>
						<li>Work Orders</li>
					</Link>
					<Link to={'/admin/add-tenant'}>
						<li>Add Tenant</li>
					</Link>
					<Link to={'/admin/billing'}>
						<li>Billing</li>
					</Link>
					<Link to={'/admin/settings'}>
						<li>Settings</li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default SideMenu;
