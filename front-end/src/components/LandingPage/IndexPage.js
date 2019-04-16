import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import Wave from "./Wave";
import "../../assets/css/general.css";

const IndexPage = () => (
  <div className="Hero">
      <div className="intro-section">
        <div className="bg-stretch">
      <h1>
        Property management <br />
        made easier.
      </h1>
      <p>Manage tasks, payments, work orders anywhere, anytime. </p>
      <Link to={"/register"}>
        <button>GET A CUSTOMIZED DEMO</button>
      </Link>
      <div class="anchor-wrap">
					  <a href="#footer" className="anchor"><span></span></a>
				</div>
       </div>
        </div>
  </div>
);

export default IndexPage;
