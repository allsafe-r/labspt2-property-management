import React, { Component } from "react";

import TenantCard from "./tenantCard";
import HousingInfo from "./infoCard";

import "../../assets/css/general.css";

const AddTenant = () => {
  return (
    <div className="addTenant-container">
      <div className="tenantInfo-container">
        <TenantCard />
        <TenantCard />
      </div>
      <div className="contract-container">
        <HousingInfo />
      </div>
    </div>
  );
};

export default AddTenant;
