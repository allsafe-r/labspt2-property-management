
import React, { Component } from 'react';
import 'whatwg-fetch';
import StripeCheckout from "react-stripe-checkout";

class App extends Component {
  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);

  }

  componentDidMount() { 


  }

  onToken(token) {
    console.log('onToken',token)
  }

  render() {
    return (
      <div>
       

      </div>
    );
  }
}

export default App;
