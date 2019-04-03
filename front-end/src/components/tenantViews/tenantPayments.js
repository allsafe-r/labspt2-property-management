import React, { Component } from 'react';
import CheckoutForm from './checkoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';

export default class tenantPayments extends Component {
	render() {
		return (
		  <StripeProvider apiKey="pk_test_uGZWgKZiorkYlZ8MsxYEIrA2">
			<div className="example">
			  <h1>React Stripe Elements Example</h1>
			  <Elements>
				<CheckoutForm />
			  </Elements>
			</div>
		  </StripeProvider>
		);
	  }
	}
