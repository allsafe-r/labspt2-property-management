import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './propertyCard';
import '../../assets/css/general.css';
const decode = require('jwt-decode')

// const url = 'http://localhost:9000/properties';
const url = `https://tenantly-back.herokuapp.com/properties`;

export default class propertyList extends Component {
	state = {
		properties: []
	};

	componentDidMount() {
		const token = localStorage.getItem('jwtToken')
		const userId = decode(token).userId
		axios.get(url).then((response) => {
		this.setState({ properties: response.data.filter(property => property.owner === userId) })
		})
		.catch((err) => {
			console.error('Server Error', err);
		});
	}

	render() {
		return (
			<div className="properties-list">
				<p className="your-properties">Properties:</p>
				<div className="properties-container">
					{this.state.properties.map((property) => (
						<PropertyCard
							key={property.houseId}
							name={property.propertyName}
							address={property.propertyAddress}
							city={property.propertyCity}
							state={property.propertyState}
							zipcode={property.propertyZipcode}
							id={property.houseId}
						/>
					))}
				</div>
				<Link to="/admin/add-property">
					<button>+ Add New Property</button>
				</Link>
			</div>
		);
	}
}
