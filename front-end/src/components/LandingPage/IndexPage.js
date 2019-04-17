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
                  Manage properties, at ease.
                  </h1>
      <p>Take care of tedious property management tasks in one place. <br />Be in charge of your properties, anytime, anywhere. </p>
      <Link to={"/register"}>
        <button>GET STARTED</button>
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
