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
import './../WorkOrders/workorders.css';

const url = 'http://localhost:9000/stripe/charges'
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
				<CheckoutForm charge={this.updatestate} />
				
			  </Elements>
			  </Card>
			  </Grid>
				<Grid item sm={12} lg={6}>

					<Card>
<<<<<<< HEAD
					 
=======
					<Paper elevation={1}>
>>>>>>> 7e4ecbe1b4750fd055242cf7978c12b904e98f22
						{this.state.charges.map((charge) => 

<div>						
						<CardHeader variant='h1' title={charge.name}/>
						
<<<<<<< HEAD
						<ul><li>Date: {this.convertToTime(charge.created)}</li>
						<li>Name: {charge.billing_details.name}</li>
						<li>Amount Paid:${charge.amount}.00</li>
						{/* <Divider /> */}
						</ul>
=======

						<Typography variant='h4' component='h2'>Amount: {charge.amount}</Typography>
						
</div>						
>>>>>>> 7e4ecbe1b4750fd055242cf7978c12b904e98f22
						
						
						
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
