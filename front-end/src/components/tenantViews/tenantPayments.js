import React, { Component } from 'react';
import CheckoutForm from './checkoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import './../WorkOrders/workorders.css';

export default class tenantPayments extends Component {
	constructor(props) {
    super(props);
    this.state = {
      charges: [
				{ 
					name: 'Matt',
					amount: 120000
				},
				{ 
					name: 'Matt',
					amount: 120000
				},
				{ 
					name: 'Matt',
					amount: 120000
				},
			]
    };
    
	}
	
	addcharge = (charge) => {
		const currentcharges = this.state.charges;
		let newcharge = charge;
		currentcharges.push(newcharge)
		this.setState({
			charges: currentcharges,
		})
	}
	
	
	render() {
		const fonts = [{ cssSrc: "https://fonts.googleapis.com/css?family=Podkova:400" }]
		return (
		  <StripeProvider apiKey="pk_test_uGZWgKZiorkYlZ8MsxYEIrA2">
		<div className='payment-container'>
			<Grid container spacing={24} >
			<Grid item sm={12} lg={6}>
			<Card className = 'form-card'>
			  <h1>React Stripe Elements Example</h1>
			  <Elements fonts={fonts}>
				<CheckoutForm  charge={this.addcharge} />
				
			  </Elements>
			  </Card>
			  </Grid>
				<Grid item sm={12} lg={6}>

					<Card>

						{this.state.charges.map((charge) => 

<div>						
						<CardHeader variant='h1' title={charge.name}/>
						

						<Typography variant='h4' component='h2'>Amount: {charge.amount}</Typography>
						
</div>						
						
						
						
						)}

						



						</Card>				
			</Grid>


			</Grid>
			</div>	
		  </StripeProvider>
		);
	  }
	}