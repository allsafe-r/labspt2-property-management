import React from "react";
import Menu from "./Menu";
import IndexPage from "./IndexPage";
import Body from "./Body";

import "../../assets/css/general.css";

const LandingView = () => {
  return (
    <div className="landingpage">
      <Menu />
      <IndexPage />
      <Body />
    </div>
  );
};

export default LandingView;
