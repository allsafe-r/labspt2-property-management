import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/general.css';

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
					<Link to={'/admin/properties'}>
						<li>Properties</li>
					</Link>
					<Link to={'/admin/workorders'}>
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
