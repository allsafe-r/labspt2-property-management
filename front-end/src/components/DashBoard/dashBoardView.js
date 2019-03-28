import React from 'react';
import { Route } from 'react-router-dom';
import PropertyList from './propertyList';
import SideMenu from './sideMenu';
import Workorderlist from '../WorkOrders/workorderList';
import Workorderform from '../WorkOrders/workorderform';
import AddProperty from './addProperty';
import DisplayProperty from './displayProperty';
import EditProperty from './editProperty';

const DashBoard = () => {
	return (
		<div className="dashboard-container">
			{/* <SideMenu /> */}
			<Route exact path="/admin/" component={SideMenu} />
			<Route exact path="/admin/properties" component={PropertyList} />
			<Route path="/admin/worklist" component={Workorderlist} />
			<Route path="/admin/view-property/:id" component={DisplayProperty} />
			<Route path="/admin/add-property" component={AddProperty} />
			<Route exact path="/edit/:id" component={EditProperty} />
			<Route exact path="/admin/workorders/form" component={Workorderform} />
		</div>
	);
};

export default DashBoard;
