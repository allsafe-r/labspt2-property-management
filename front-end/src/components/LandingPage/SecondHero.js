import React from "react";
import { Link } from "react-router-dom";

const SecondHero = () => (
 <div className="Hero">
      <div className="intro-section">
        <div className="bg-2-stretch">
        <div className="slide-2-frame">
							<div className="text">
                <h1 className="slide-title">
                  For the modern
                  <br /> property manager.
                  </h1>
      <p>Take care of tedious property management tasks in one place. <br />Be in charge of your properties, anytime, anywhere. </p>
      <Link to={"/register"}>
        <button>GET STARTED</button>
      </Link>
      </div>
      </div>
      </div>
      </div>
      </div>
);


export default SecondHero;
