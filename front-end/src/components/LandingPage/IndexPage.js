import React from "react";
import { Link } from "react-router-dom";
// import Wave from "./Wave";
import "../../assets/css/general.css";

const IndexPage = () => (
  <div className="Hero">
      <div className="intro-section">
        <div className="bg-stretch">
        <div className="slide-frame">
							<div className="text">
                <h1 className="slide-title">
                  Property management <br />
                  made easier.
          </h1>
      <p>Manage tasks, payments, work orders anywhere, anytime. </p>
      <Link to={"/register"}>
        <button>GET A CUSTOMIZED DEMO</button>
      </Link>
      </div>
      </div>
   
      <div class="anchor-wrap">
					  <a href="#footer" className="anchor"><span></span></a>
				</div>
       </div>
        </div>
  </div>
);

export default IndexPage;
