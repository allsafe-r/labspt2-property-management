import React from "react";
import { Route } from "react-router-dom";
import PropertyList from "./properties/propertyList";
import TenantSideMenu from "./tenantViews/tenantSideMenu";
import SideMenu from "./adminViews/adminSideMenu";
import Workorderlist from "./WorkOrders/workorderList";
import Workorderform from "./WorkOrders/workorderform";
import AddProperty from "./properties/addProperty";
import DisplayProperty from "./properties/displayProperty";
import EditProperty from "./properties/editProperty";
import TenantSettings from "./tenantViews/tenantSettings";
import TenantDashboard from "./tenantViews/tenantDashboard";
import TenantPayments from "./tenantViews/tenantPayments";
// import TenantMaintenance from './tenantViews/tenantMaintenance';
import Billing from "./adminViews/adminBilling.js";
import AdminSettings from "./adminViews/adminSettings";
import AddTenant from "./AddTenant/addTenant";

const RouteContainer = () => {
  return (
    <div className="dashboard-container">
      <div className="left-side">
        <Route path="/tenant" component={TenantSideMenu} />
        <Route path="/admin" component={SideMenu} />
      </div>

      <div className="right-side">
        <Route exact path="/admin/properties" component={PropertyList} />
        <Route exact path="/admin/billing" component={Billing} />
        <Route path="/admin/worklist" component={Workorderlist} />
        <Route path="/admin/view-property/:id" component={DisplayProperty} />
        <Route path="/admin/add-property" component={AddProperty} />
        <Route exact path="/edit/:id" component={EditProperty} />
        <Route path="/admin/add-tenant" component={AddTenant} />
        <Route exact path="/admin/workorders/form" component={Workorderform} />

        <Route exact path="/tenant/dashboard" component={TenantDashboard} />
        <Route exact path="/tenant/payments" component={TenantPayments} />
        <Route exact path="/tenant/maintenance" component={Workorderform} />
        <Route exact path="/tenant/settings" component={TenantSettings} />
        <Route exact path="/admin/settings" component={AdminSettings} />
      </div>
    </div>
  );
};

export default RouteContainer;
