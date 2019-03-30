import React from 'react';
import { Route } from 'react-router-dom';
import PropertyList from './properties/propertyList';
import TenantSideMenu from './tenantViews/tenantSideMenu';
import SideMenu from './adminViews/adminSideMenu';
import Workorderlist from './WorkOrders/workorderList';
import Workorderform from './WorkOrders/workorderform';
import AddProperty from './properties/addProperty';
import DisplayProperty from './properties/displayProperty';
import EditProperty from './properties/editProperty';
import TenantSettings from './tenantViews/tenantSettings';
import TenantDashboard from './tenantViews/tenantDashboard';
import TenantPayments from './tenantViews/tenantPayments';
import TenantMaintenance from './tenantViews/tenantMaintenance';

const RouteContainer = () => {
	return (
		<div className="dashboard-container">
			<Route path="/admin" component={SideMenu} />
			<Route exact path="/admin/properties" component={PropertyList} />
			<Route path="/admin/worklist" component={Workorderlist} />
			<Route path="/admin/view-property/:id" component={DisplayProperty} />
			<Route path="/admin/add-property" component={AddProperty} />
			<Route exact path="/edit/:id" component={EditProperty} />
			<Route exact path="/admin/workorders/form" component={Workorderform} />
			<Route path="/tenant" component={TenantSideMenu} />
			<Route exact path="/tenant/dashboard" component={TenantDashboard} />
			<Route exact path="/tenant/payments" component={TenantPayments} />
			<Route exact path="/tenant/maintenance" component={Workorderform} />
			<Route exact path="/tenant/settings" component={TenantSettings} />
		</div>
	);
};

export default RouteContainer;
