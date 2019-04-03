import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';
const url = 'https://tenantly-back.herokuapp.com/stripe/charge';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  successPayment = () => {
		alert('Payment Successful');
	};

	errorPayment = (data) => {
		alert('Payment Error');
		console.log(data);
	};
  

  
  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Matt"});
    axios
    .post(url, {
      description: 'Pay rent now',
      source: token.id,
      currency: 'USD',
      amount: 120000
    })
    .then(this.successPayment)
    .catch(this.errorPayment);

  }
  
  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
  
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);