<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import SideMenu from "./components/sideMenu";
import PropertyList from "./components/propertyList";
import WorkorderList from "./components/workorderList";
=======
import React, { Component } from 'react';
import './App.css';
import Menu from './components/LandingPage/Menu';
import Body from './components/LandingPage/Body';


>>>>>>> 049091c05c3d5d2ad328f46917eee290930fbd0d
class App extends Component {
  render() {
    return (
      <div>
        <header class="hero-image">
          <Menu />
          <Body />
  
          
        </header>
      </div>
    );
  }
}

export default App;
