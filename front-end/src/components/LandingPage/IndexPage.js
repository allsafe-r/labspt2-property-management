import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import Wave from "./Wave";
import "../../assets/css/general.css";

const IndexPage = () => (
  <div className="Hero">
    <div className="HeroGroup">
      <h1>
        Property management <br />
        made easier.
      </h1>
      <p>Manage tasks, payments, work orders anywhere, anytime. </p>
      <Link to={"/register"}>
        <button>GET A CUSTOMIZED DEMO</button>
      </Link>
    </div>

    <a href="#body" className="down-arrow">
      <img
        style={{ width: 50, height: 50 }}
        alt="arrows"
        src={require("../../assets/images/arrows-down.png")}
      />
    </a>
  </div>
);

export default IndexPage;
