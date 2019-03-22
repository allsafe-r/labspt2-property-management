import React from "react";
import { Route } from "react-router-dom";

import PropertyList from "./propertyList";
import SideMenu from "./sideMenu";
import DisplayProperty from "./displayProperty";
import EditProperty from "./editProperty";
import AddProperty from "./addProperty";

import "../general.css";

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <SideMenu />
      <div className="right-side">
        <Route path="/admin/properties/" component={PropertyList} />
        <Route path="/admin/view-property/:id" component={DisplayProperty} />
        <Route exact path="/edit/:id" component={EditProperty} />
        <Route path="/add-property" component={AddProperty} />
      </div>
    </div>
  );
};

export default DashBoard;
