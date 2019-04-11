import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropertyCard from './propertyCard';
import Typography from '@material-ui/core/Typography';
import '../../assets/css/general.css';

// const url = process.env.properties || 'http://localhost:9000/properties';
const url = `https://tenantly-back.herokuapp.com/properties`;

const styles = theme =>({
	heading: {
		width: '100%',
		display: 'flex',
		fontSize: '2rem',
 },

})

 class propertyList extends Component {
	state = {
		properties: []
	};

	componentDidMount() {
		axios.get(url).then((response) => this.setState({ properties: response.data })).catch((err) => {
			console.error('Server Error', err);
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid container spacing={24} style={{padding: 20}}>			
			<Typography className={classes.heading} variant="h5" component="h2" gutterBottom>
         	Properties:
        	</Typography>
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
				<Link to="/admin/add-property">
					<button>+ Add New Property</button>
				</Link>
			</Grid>
		);
	}
}

export default withStyles(styles)(propertyList);