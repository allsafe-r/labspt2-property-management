import React, { Component } from 'react';
import './App.css';
import Menu from './components/LandingPage/Menu';
// import Body from './components/LandingPage/Body';
import IndexPage from './components/LandingPage/IndexPage';
import Workorderform from './components/workorderform';

class App extends Component {
  render() {
    return (
      <div>
          <Menu />
          {/* <Body /> */}
          <IndexPage />
          <Workorderform />
  
          
      </div>
    );
  }
}

export default App;
