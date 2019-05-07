import React from "react";
import Menu from "./Menu";
import IndexPage from "./IndexPage";
import Pricing from "./Pricing"
import SecondHero from "./SecondHero"
import Newsletter from "./Newsletter"
import Footer from "./Footer"
// import Footer2 from "./Footer2"
// import Body from "./Body";

import "../../assets/css/general.css";

const LandingView = () => {
  return (
    <div className="landingpage">
      <Menu />
      <IndexPage />
      {/* <Body /> */}
      <SecondHero />
      <Newsletter />
      {/* <Pricing /> */}
      {/* <Footer2 /> */}
      <Footer />

    </div>
  );
};

export default LandingView;
