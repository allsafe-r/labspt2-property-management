import React from 'react';
import { Route, Link } from 'react-router-dom';

import PropertyList from './propertyList';
import SideMenu from './sideMenu';
import Workorderlist from '../WorkOrders/workorderList';
import Workorderform from '../WorkOrders/workorderform';

const DashBoard = () => {
	return (
		<div className="dashboard-container">
		<SideMenu />
		<Link to='/admin/worklist'>Work Order</Link>
	   <Route path="/admin/worklist" component={Workorderlist} />
	   <Route path="/admin/propertylist" component={PropertyList} />
	   <Route path="/admin/workform" component={Workorderform} />
			      
			      
		</div>
	);
};

export default DashBoard;
