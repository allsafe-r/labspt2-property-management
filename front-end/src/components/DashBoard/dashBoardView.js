import React from "react";
import { Route } from "react-router-dom";

import PropertyList from "./propertyList";
import SideMenu from "./sideMenu";

import "../general.css";

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <SideMenu />
      <div className="right-side">
        <Route
          exact
          path="/admin/properties/"
          render={() => <PropertyList />}
        />
      </div>
    </div>
  );
};

export default DashBoard;
