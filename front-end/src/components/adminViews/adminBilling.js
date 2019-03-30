import React, { Component } from 'react';
import axios from 'axios';
import Image from '../../assets/images/blue-on-dark.png';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import PropertyCard from '../properties/addProperty';


// const url = process.env.properties || 'http://localhost:9000/properties';
const url = `https://tenantly-back.herokuapp.com/properties`;

export default class Billing extends Component {
	state = {
         properties: []
	};

	componentDidMount() {
		axios.get(url).then((response) => this.setState({ properties: response.data })).catch((err) => {
			console.error('Server Error', err);
		});
	}

	render() {
		return (
			<div className="Billing">
			{/* <Card>
	 			<div className="propertyBody">
					<h1>Name: {this.state.property.propertyName}</h1>
					<h1>Address:{this.state.property.propertyAddress}</h1>
				</div>
			</Card> */}
			<Card>
				<a href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_Eh0R1RXhYNXEq9z56aVKr04CVDrJvxMc&scope=read_write">
					<img src={Image} />
				</a>
			</Card>
			<Card>
				<p>Billing History</p>
			</Card>
			</div>
		);
	}
}
