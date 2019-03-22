import React from "react";

import PropertyList from "./propertyList";
import SideMenu from "./sideMenu";
import Workorderlist from '../WorkOrders/workorderList';
import Workorderform from '../WorkOrders/workorderform';

const DashBoard = () => {
  return (
    <div>
      <SideMenu />
      <PropertyList />
      <Workorderlist />
      <Workorderform />
    </div>
  );
};

export default DashBoard;
