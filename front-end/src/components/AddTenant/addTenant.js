import React, { Component } from "react";

import TenantCard from "./tenantCard";
import HousingInfo from "./infoCard";

import "../../assets/css/general.css";

class AddTenant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTenant: false
    };
  }
  addAnotherTenant() {
    this.setState({ newTenant: true });
  }
  render() {
    return (
      <div className="addTenant-container">
        <div className="tenantInfo-container">
          <TenantCard />
          <TenantCard />
          <div className="tenantAdd" onclick={this.newTenant}>
            <h1>Add Tenant</h1>
          </div>
        </div>
        <div className="contract-container">
          <HousingInfo />
        </div>
      </div>
    );
  }
}

export default AddTenant;
