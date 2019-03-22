import React from "react";
import { Route, Link } from "react-router-dom";

import PropertyList from "./propertyList";
import SideMenu from "./sideMenu";
import DisplayProperty from "./displayProperty";
import EditProperty from "./editProperty";
import AddProperty from "./addProperty";
import Workorderlist from '../WorkOrders/workorderList';
import Workorderform from '../WorkOrders/workorderform';
import "../general.css";

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <SideMenu />
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin/properties">Admin Properties</Link>
          </li>
          <li>
            <Link to="/admin/workorder">Admin Workorders</Link>
          </li>
          <li>
            <Link to="/tenant/workorderform">Add WorkOrder</Link>
          </li>          
        </ul>
      <div className="right-side">
        <Route path="/admin/properties/" component={PropertyList} />
        <Route path="/admin/view-property/:id" component={DisplayProperty} />
        <Route exact path="/edit/:id" component={EditProperty} />
        <Route path="/add-property" component={AddProperty} />
        <Route path="/admin/workorder" component={Workorderlist} />
        <Route path="/tenant/workorderform" component={Workorderform} />
      </div>
    </div>
  );
};

export default DashBoard;
