import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropertyCard from './propertyCard';
import '../../assets/css/general.css';

// const url = process.env.properties || 'http://localhost:9000/properties';
const url = `https://tenantly-back.herokuapp.com/properties`;

export default class propertyList extends Component {
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
