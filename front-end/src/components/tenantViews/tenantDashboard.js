import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faIdCardAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import "../../assets/css/general.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
const decode = require('jwt-decode');
const axios = require('axios');
const url = `https://tenantly-back.herokuapp.com/alerts`;
// const url = `http://localhost:9000/alerts`;

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
		maintenancePhone: ''
	};

	componentDidMount() {
		const token = localStorage.getItem('jwtToken');
		const id = decode(token).userId;
		// go into users to find which residence you live at
		axios
			.get(`https://tenantly-back.herokuapp.com/users/${id}`)
			.then((user) => {
				// console.log(user);
				this.setState({ houseId: user.data.residenceId });
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
	render() {
		return (
			<div className="tenant-dash" >
				<Grid item xs={6} sm={12} className="tenant-button">
					<Card>
						<Link to="/tenant/payments">Make a Payment</Link>
					</Card>
					<Card>
						<Link to="/tenant/maintenance">Submit a Work Order</Link>
					</Card>
					<Card>
						<div>Alerts</div>
					<div>
						{this.state.alerts.map((alert) => {
							return <li key={alert.id}>{alert.alert}</li>;
						})}
					</div>
					</Card>
				</Grid>
				<Grid item xs={6} sm={12}>
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
  