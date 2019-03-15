import React, { Component } from "react";

import TenantCard from "./tenantCard";
import InfoCard from "./infoCard";

import "../general.css";

const AddTenant = () => {
  return (
    <div className="addTenant-container">
      <TenantCard />
      <TenantCard />
      <InfoCard />
    </div>
  );
};

export default AddTenant;
