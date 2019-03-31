import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import Wave from "./Wave";
import "../general.css";

const IndexPage = () => (
  <div className="Hero">
    <div className="HeroGroup">
      <h1>
        Property management <br />
        made easier.
      </h1>
      <p>Manage tasks, payments, work orders anywhere, anytime. </p>
      <Link to={"/try-it-free/request-a-demo"}>
        <button>GET A CUSTOMIZED DEMO</button>
      </Link>
    </div>
    <img
      alt="close-burger"
      className="jumbo"
      src={require("../../assets/images/wallpaper5.png")}
    />
    <Wave />
    <img
      style={{ width: 50, height: 50 }}
      alt="arrows"
      src={require("../../assets/images/arrows-down.png")}
    />
  </div>
);

// IndexPage.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default IndexPage;
