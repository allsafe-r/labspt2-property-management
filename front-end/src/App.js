
import React, { Component } from "react";
import "./App.css";
//import Menu from "./components/LandingPage/Menu";
// import Body from './components/LandingPage/Body';
//import IndexPage from "./components/LandingPage/IndexPage";
//import Stripe from "./components/Stripe";
// import Register from './components/DashBoard/register';
import DashBoard from "./components/DashBoard/dashBoardView";

class App extends Component {
  render() {
    return (
      <div>
        {/*<Menu />
         <Body /> 
        <IndexPage />
        <Stripe />*/}
        <DashBoard />
      </div>
    );
  }
}

export default App;