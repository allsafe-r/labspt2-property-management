
import React, { Component } from 'react';
import 'whatwg-fetch';
import StripeCheckout from "react-stripe-checkout";

class App extends Component {
  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);

  }
 
  successPayment = () => {
    alert('Payment Successful');
  };

  onToken(token) {
    console.log('onToken',token)
  }

  render() {
    return (
      <div>
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_uGZWgKZiorkYlZ8MsxYEIrA2"
          label="Pay with 💳"
          name="Tenantly, LLC"
          description="Upgrade to a premium account today."
          panelLabel="Go Premium" 
          image="https://i.ibb.co/L1sx35T/sd.jpg"
        />

      </div>
    );
  }
}

export default App;
