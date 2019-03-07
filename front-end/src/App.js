import React, { Component } from "react";
import "./App.css";
import SideMenu from "./components/sideMenu";
import PropertyList from "./components/propertyList";
import WorkorderLIst from "./components/workorderList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenu />
        <PropertyList />
      </div>
    );
  }
}

export default App;
