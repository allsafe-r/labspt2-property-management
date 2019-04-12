import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/general.css";
import Logo from "./../../assets/images/logo.png";

class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      admin: true
    };
  }
  render() {
    return (
      <div className="admin side-menu">
        <div className="logo-wrapper">
          <Link to={"/"}>
            <img src={Logo} className="dashboardLogo" alt="Dash logo" />
          </Link>
        </div>
        <div>
          <ul>
            <Link to={"/properties"}>
              <li>Properties</li>
            </Link>
            <Link to={"/worklist"}>
              <li>Work Orders</li>
            </Link>
            <Link to={"/add-tenant"}>
              <li>Add Tenant</li>
            </Link>
            <Link to={"/billing"}>
              <li>Billing</li>
            </Link>
            <Link to={"/settings"}>
              <li>Settings</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
