import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faIdCardAlt, faEnvelope, faPhone, faMoneyBillAlt, faTools } from '@fortawesome/free-solid-svg-icons';
import "../../assets/css/general.css";
import Grid from '@material-ui/core/Grid';
const decode = require('jwt-decode');
const axios = require('axios');

const url = `https://tenantly-back.herokuapp.com/alerts`;
// const url = `http://localhost:9000/alerts`;
const url2 = 'https://tenantly-back.herokuapp.com/stripe/charges'

const styles = {
	card: {
	  minWidth: 275,
	},
	bullet: {
	  display: 'inline-block',
	  margin: '0 2px',
	  transform: 'scale(0.8)',
	},
	title: {
	  fontSize: 14,
	},
	pos: {
	  marginBottom: 12,
	},
	root: {
		width: '100%',
		maxWidth: 360,
	  },
  };

  

class tenantDashboard extends Component {
	state = {
		houseId: 1,
		residenceOwner: null,
		alerts: [],
		address: '',
		contact: '',
		maintenancePhone: '',
		charges:[],
		cost: 400,
	};

	componentDidMount() {
		// Stripe Data
		axios.get(url2).then((response) => this.setState({ charges: response.data })).catch((error) => {
			console.error('Server Error', error);
		});
		const token = localStorage.getItem('jwtToken');
		const id = decode(token).userId;
		// go into users to find which residence you live at
		axios
			.get(`https://tenantly-back.herokuapp.com/users/${id}`)
			.then((user) => {
				// console.log(user);
				this.setState({ houseId: user.data.residenceId });
				this.setState({ user: user.data.firstName });
			})
 // go into users residence, grab some information and set it to state, grab owner of residence to supply rest of information
			.then(
				axios
					.get(`https://tenantly-back.herokuapp.com/properties/${this.state.houseId}`)
					.then((res) => {
						let property = res.data;
						this.setState({ residenceOwner: property.owner, address: property.propertyAddress });
					})
					// find the owner of logged in users residence to supply contact info for owner
					.then(
						axios.get(`https://tenantly-back.herokuapp.com/users/${this.state.residenceOwner}`).then((res) => {
							let owner = res.data;
							this.setState({ contact: owner.phone, contactEmail: owner.email });
						})
					)
			)
			.then(
				// go into alerts and grab each alerts where the houseId matches logged in users residence, set to state
				axios.get(url).then((res) => {
					let alertsObj = res.data.filter((alert) => alert.houseId === this.state.houseId);
					this.setState({ alerts: alertsObj });
				})
			);
	}

	convertToTime =(e) =>{
		const d = new Date(e * 1000)
		return d.toLocaleString();
}


	render() {
		var today = new Date()
		var priorDate = new Date().setDate(today.getDate()-30)
		priorDate = priorDate.toString();
		console.log("Original data: ",priorDate);
		priorDate = priorDate.slice(0, -3);
		priorDate = parseInt(priorDate);
		console.log("After truncate: ",priorDate);
		
		return (
			<div className="tenant-dash">
			
				<Grid item sm={12} className="tenant-button">
			
			{/* This pulls the stripe info and the Outstanding payments for the user based on payments made in the last 30 days. */}
				<StripeProvider apiKey="pk_test_uGZWgKZiorkYlZ8MsxYEIrA2">
					<Paper elevation={1}>
					 <p>{this.state.cost}</p>
						{this.state.charges.map((charge) => 
							<div>
							{priorDate < charge.created && this.state.user === charge.billing_details.name &&
							  <p>
								{/* Prior date is {priorDate} charge made  {charge.created}. */}
								{/* Current user {this.state.user} charge made to {charge.billing_details.name}. */}
									<div className="outstanding">Outstanding Balance</div>
									<div className="outstanding">${charge.amount - this.state.cost}</div>
							
							  </p>
							}
						  </div>
					
						)}
					</Paper>

					</StripeProvider>

			
					<Card>
						<Link to="/payments">
							<Button variant="extended" color="default" className="dash-button">
							<FontAwesomeIcon icon={faMoneyBillAlt} />&nbsp;&nbsp;Make a Payment
      						</Button>
						</Link>
					</Card>
					<Card>
						<Link to="/maintenance">
							<Button variant="extended" color="default" className="dash-button">
							<FontAwesomeIcon icon={faTools} />&nbsp;&nbsp;Submit a Workorder
      						</Button>
						</Link>
					</Card>
					<Card>
						<div className="outstanding">Alerts</div>
					<div>
						{this.state.alerts.map((alert) => {
							return <li key={alert.id}>{alert.alert}</li>;
						})}
					</div>
					</Card>
				</Grid>
				<Grid item sm={12}>
						<List>
							<ListItem>
								<Avatar>
									<FontAwesomeIcon icon={faMapMarkerAlt} />
								</Avatar>
								<div className="dash-info">Address: {this.state.address}</div>
							</ListItem>
					
							<ListItem>
								<Avatar>
									<FontAwesomeIcon icon={faIdCardAlt} />
								</Avatar>
								<div className="dash-info">Contact Info: {this.state.contact}</div>
							</ListItem>

							<ListItem>
								<Avatar>
									<FontAwesomeIcon icon={faEnvelope} />
								</Avatar>
								<div className="dash-info">Contact Email: {this.state.contactEmail}</div>
							</ListItem>

							<ListItem>
								<Avatar>
									<FontAwesomeIcon icon={faPhone} />
								</Avatar>
								<div className="dash-info">24/7 Phone: {this.state.maintenancePhone}</div>
							</ListItem>

					</List>
				</Grid>
			</div>
		);
	}

}

tenantDashboard.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(tenantDashboard);
  