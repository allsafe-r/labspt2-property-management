import React from "react";
import { Route } from "react-router-dom";

import PropertyList from "./propertyList";
import SideMenu from "./sideMenu";
<<<<<<< HEAD
import Workorderlist from '../WorkOrders/workorderList';
import Workorderform from '../WorkOrders/workorderform';
=======
import DisplayProperty from "./displayProperty";
import EditProperty from "./editProperty";
import AddProperty from "./addProperty";

import "../general.css";
>>>>>>> 1d11f597bd8d4ff03bd2e0f1715fd1253ffe928b

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <SideMenu />
<<<<<<< HEAD
      <PropertyList />
      <Workorderlist />
      <Workorderform />
=======
      <div className="right-side">
        <Route path="/admin/properties/" component={PropertyList} />
        <Route path="/admin/view-property/:id" component={DisplayProperty} />
        <Route exact path="/edit/:id" component={EditProperty} />
        <Route path="/add-property" component={AddProperty} />
      </div>
>>>>>>> 1d11f597bd8d4ff03bd2e0f1715fd1253ffe928b
    </div>
  );
};

export default DashBoard;
