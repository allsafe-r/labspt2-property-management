import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/general.css";
import Logo from "./../../assets/images/logo.png";

class TenantSideMenu extends Component {
  constructor() {
    super();
    this.state = {
      admin: false
    };
  }
  render() {
    return (
      <div className="tenant side-menu">
        <div className="logo-wrapper">
          <Link to={"/"}>
            <img src={Logo} className="dashboardLogo" alt="Dash logo" />
          </Link>
        </div>
        <div>
          <ul>
            <Link to={"/tenant/dashboard"}>
              <li>Dashboard</li>
            </Link>
            <Link to={"/tenant/payments"}>
              <li>Payments</li>
            </Link>
            <Link to={"/tenant/maintenance"}>
              <li>Maintenance</li>
              <li>&ensp;&ensp;></li>
            </Link>
            <Link to={"/tenant/settings"}>
              <li>Settings</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default TenantSideMenu;
