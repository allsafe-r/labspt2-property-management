import React from "react";
import { Route, Link } from "react-router-dom";

import PropertyList from "../properties/propertyList";
import Workorderlist from "../WorkOrders/workorderList";
import Workorderform from "../WorkOrders/workorderform";

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <Link to="/admin/worklist">Work Order</Link>
      <Route path="/admin/worklist" component={Workorderlist} />
      <Route path="/admin/propertylist" component={PropertyList} />
      <Route path="/tenant/workform" component={Workorderform} />
    </div>
  );
};

export default DashBoard;
