import React, { Component } from 'react';
import CheckoutForm from './checkoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import './../WorkOrders/workorders.css';


const url = 'https://tenantly-back.herokuapp.com/stripe/charges'
// const url = 'https://tenantly-back.herokuapp.com/stripe/charges';

export default class tenantPayments extends Component {
	constructor(props) {
    super(props);
    this.state = {
      charges: []
    };
    
	}

	componentDidMount() {
		axios.get(url).then((response) => this.setState({ charges: response.data })).catch((error) => {
			console.error('Server Error', error);
		});
	}
	

	updatestate =() => {
		axios.get(url).then((response) => this.setState({ charges: response.data })).catch((error) => {
			console.error('Server Error', error);
		});
	}

	convertToTime =(e) =>{
		const d = new Date(e * 1000)
		return d.toLocaleString();
}

	
	
	
	render(){
		const fonts = [{ cssSrc: "https://fonts.googleapis.com/css?family=Podkova:400" }]
		return (
		  <StripeProvider apiKey="pk_test_uGZWgKZiorkYlZ8MsxYEIrA2">
		<div className='payment-container'>
			<Grid container spacing={24} >
			<Grid item sm={12} lg={6}>
			<Card className = 'form-card'>
			  <h1>React Stripe Elements Example</h1>
			  <Elements fonts={fonts}>
				<CheckoutForm  charge={this.updatestate} />
				
			  </Elements>
			  </Card>
			  </Grid>
				<Grid item sm={12} lg={6}>

					<Card>
					<Paper elevation={1}>
						{this.state.charges.map((charge) => 

<div>						
						<CardHeader variant='h1' title={charge.billing_details.name}/>
						<Divider/>
						<Typography variant='h4'>Date: {this.convertToTime(charge.created)}</Typography>
						<Divider/>
						<Typography variant='h4' component='h2'>Amount Paid:${charge.amount}.00</Typography>
						<Divider/>
						

						
						
</div>						
						
						
						
						)}

						


                       </Paper>
						</Card>				
			</Grid>


			</Grid>
			</div>	
		  </StripeProvider>
		);
	  }
	}