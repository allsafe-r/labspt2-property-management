import React, { Component } from "react";
import "./../../assets/css/dashboardComp.css";
import "./../../assets/css/general.css";
import axios from "axios";
import Image from "../../assets/images/blue-on-dark.png";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "../../assets/css/general.css";
import { Button } from "@material-ui/core";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import './../WorkOrders/workorders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const decode = require('jwt-decode');
// const url = process.env.properties || 'http://localhost:9000/properties';
const url = `https://tenantly-back.herokuapp.com/properties`;
const url2 = `http://localhost:9000/billing`;
const url3 = 'https://tenantly-back.herokuapp.com/stripe/charges'

const styles = theme => ({
  root: {
    margin: "0 auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "black",
    fontSize: "2em",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center"
    }
  },

  button: {
    width: "100%"
  }
});

class Billing extends Component {
  state = {
    properties: [],
    billing: [],
    propertySelected: [],
    charges: []
  };

  handleInputChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    console.log(this.state.house_id);
    this.setState({ value: event.target.value });
    axios
      .get(`https://localhost:9000/billing/${this.state.value}`)
      .then(response => {
        this.setState({ propertySelected: response.data });
      })
      .catch(error => {
        console.error(error);
      });
      console.log(this.state.propertySelected)
  };

  setBilling = () => {
    axios
      .get(url2)
      .then(response =>
        this.setState({ billing: response.data }, function() {
          console.log(this.state.billing);
        })
      )
      .catch(err => {
        console.error("Server Error", err);
      });
  };

  componentDidMount() {
    axios
      .get(url)
      .then(response =>
        this.setState({ properties: response.data }, function() {
          console.log(this.state.billing);
          this.setBilling();
        })
      )
      .catch(err => {
        console.error("Server Error", err);
      });

      axios.get(url3).then((response) => this.setState({ charges: response.data })).catch((error) => {
        console.error('Server Error', error);
      });
      const token = localStorage.getItem('jwtToken');
      const id = decode(token).userId;
      axios
        .get(`https://tenantly-back.herokuapp.com/users/${id}`)
        .then((user) => {
          this.setState({ user: user.data.firstName });
          this.setState({ userLast: user.data.lastName });
        })
  }

  updatestate =() => {
		axios.get(url3).then((response) => this.setState({ charges: response.data })).catch((error) => {
			console.error('Server Error', error);
		});
	}

	convertToTime =(e) =>{
		const d = new Date(e * 1000)
		return d.toLocaleString();
}


  // fetchProperty = (id) => {
  // 	axios
  // 		.get(`https://tenantly-back.herokuapp.com/properties/${id}`)
  // 		.then((response) => {
  // 			this.setState({ property2: response.data });
  // 		})
  // 		.catch((error) => {
  // 			console.error(error);
  // 		});
  // };

  // clickFunction() {
  // 	console.log(document.getElementById('property-native-required').selectedIndex)
  // }

  render() {
    const { classes } = this.props;
    const fonts = [{ cssSrc: "https://fonts.googleapis.com/css?family=Podkova:400" }]
    return (
      <div className="billing">
        <div className="billing-left">
          <form>
            <h1>Select a property to view payment history</h1>
            <div className="input-select">
              <select
                value={this.state.houseId}
                onChange={this.handleInputChange(this.value)}
                name="Property"
                className="select-billing"
              >
                {this.state.properties.map((property, index) => (
                  <option key={index} value={property.houseId}>
                    {property.propertyName}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <div className="stripe-button">
            <a href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_Eh0R1RXhYNXEq9z56aVKr04CVDrJvxMc&scope=read_write">
              <img src={Image} alt="Logo" />
            </a>
          </div>
        </div>
        {/* <div className="billing-right">
          <h1>Billing History</h1>
          
          {this.state.propertySelected.map(bill => (
            <ul>
              <div className="billingHistory-info">
                <li>{bill.propertyName}</li>
                <li>{bill.amount}</li>
              </div>
            </ul>
          ))}
        </div> */}
     

<StripeProvider apiKey="pk_test_uGZWgKZiorkYlZ8MsxYEIrA2">
<div className='payment-container'>
  <Grid item sm={6} xs={12} >

  <Card>
        
      <Paper elevation={1} className="payment-history">
        {this.state.charges.map((charge) => 
        <div>
          {"The White House" == charge.description &&
        <div>							
        <CardHeader className="card-header" variant='h1' title={charge.billing_details.name} />
        <Divider/>
        <div className='flex-component'>
    
        <div>
        <Typography className="payments" variant='h4' component='h2'>Amount Paid: ${charge.amount / 100}.00</Typography>
        <Typography className="payments" variant='h4'>Date: {this.convertToTime(charge.created)}</Typography>
        </div>

        <FontAwesomeIcon icon={faCheckCircle} color="slategray" size="2x" />
        </div>
                  
        </div>	
          }
          </div>					
        )}
      </Paper>
      
    </Card>				
  </Grid>

  </div>	
  </StripeProvider>
  </div>
    );
  }
}

export default withStyles(styles)(Billing);
