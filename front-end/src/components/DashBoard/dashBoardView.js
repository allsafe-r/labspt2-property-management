import React from 'react';
import { Route } from 'react-router-dom';

import PropertyList from './propertyList';
import SideMenu from './sideMenu';
import Workorderlist from '../WorkOrders/workorderList';
import Workorderform from '../WorkOrders/workorderform';

const DashBoard = () => {
	return (
		<div className="dashboard-container">
			<SideMenu />
			<PropertyList />
			<Workorderlist />
			<Workorderform />
		</div>
	);
};

export default DashBoard;
