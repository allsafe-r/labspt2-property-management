import React, { Component } from "react";
import "../general.css";

class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      admin: true
    };
  }
  render() {
    return (
      <div className="sideMenu-container">
        <div className="admin side-menu">
          <ul>
            <li>Properties</li>
            <li>Work Orders</li>
            <li>Add Tenant</li>
            <li>Billing</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="tenant side-menu">
          <ul>
            <li>Dashboard</li>
            <li>Payments</li>
            <li>Maintenance</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
