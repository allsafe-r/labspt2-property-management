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
      alt="wall-paper"
      className="jumbo"
      src={require("../../assets/images/wallpaper.png")}
    />
    <Wave />
    <a href="#body" className="down-arrow">
      <img
        style={{ width: 50, height: 50 }}
        alt="arrows"
        src={require("../../assets/images/arrows-down.png")}
      />
    </a>
  </div>
);

// IndexPage.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default IndexPage;
