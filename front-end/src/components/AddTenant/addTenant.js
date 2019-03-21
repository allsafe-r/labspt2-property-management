import React, { Component } from "react";

import TenantCard from "./tenantCard";
import InfoCard from "./infoCard";

import "../general.css";

const AddTenant = () => {
  return (
    <div className="addTenant-container">
      <div className="top-container">
        <TenantCard />
        <TenantCard />
      </div>
      <div>
        <InfoCard />
      </div>
    </div>
  );
};

export default AddTenant;
