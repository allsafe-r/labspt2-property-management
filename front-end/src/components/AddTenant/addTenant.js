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
  addAnotherTenant = e => {
    e.preventDefault();
    this.setState({ newTenant: true });
  };
  render() {
    return (
      <div className="addTenant-container">
        <div className="tenantInfo-container">
          <TenantCard />

          <div
            className="tenantAdd"
            onClick={this.addAnotherTenant}
            style={this.state.newTenant ? { display: "none" } : null}
          >
            <h1>Add Tenant</h1>
          </div>

          {this.state.newTenant ? <TenantCard /> : null}
        </div>
        <div className="contract-container">
          <HousingInfo />
        </div>
      </div>
    );
  }
}

export default AddTenant;
