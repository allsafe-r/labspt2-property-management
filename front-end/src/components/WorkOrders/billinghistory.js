import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import './../WorkOrders/workorders.css';

const url = 'https://tenantly-back.herokuapp.com/stripe/charge';

const styles ={
  button:
  {
  alignSelf: 'center', 
  width: '25%'},
  
}

class BillingHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false,
      name: ""
    };
    this.submit = this.submit.bind(this);
  }

  successPayment = () => {
		alert('Payment Successful');
	};

	errorPayment = (data) => {
		alert('Payment Error');
		console.log(data);
	};
  
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  
  async submit(ev) {
    ev.preventDefault();
    let {token} = await this.props.stripe.createToken({name: this.state.name});
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
      <div className="checkout test2">

      </div>
    );
  }
}

export default injectStripe(BillingHistory);