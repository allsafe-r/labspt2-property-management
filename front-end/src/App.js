import React, { Component } from 'react';
import './App.css';
import Menu from './components/LandingPage/Menu';
import Body from './components/LandingPage/Body';


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
