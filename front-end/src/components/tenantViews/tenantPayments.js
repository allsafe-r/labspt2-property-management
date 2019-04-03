import React, { Component } from 'react';
import CheckoutForm from './checkoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import './../WorkOrders/workorders.css';

export default class tenantPayments extends Component {
	
	
	
	render() {
		const fonts = [{ cssSrc: "https://fonts.googleapis.com/css?family=Podkova:400" }]
		return (
		  <StripeProvider apiKey="pk_test_uGZWgKZiorkYlZ8MsxYEIrA2">
			<Grid container spacing={24} >
			<Grid item sm={12} lg={6}>
			<Card className = 'form-card'>
			  <h1>React Stripe Elements Example</h1>
			  <Elements fonts={fonts}>
				<CheckoutForm />
				
			  </Elements>
			  </Card>
			  </Grid>
			</Grid>
		  </StripeProvider>
		);
	  }
	}
