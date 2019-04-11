import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropertyCard from './propertyCard';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import '../../assets/css/general.css';

// const url = process.env.properties || 'http://localhost:9000/properties';
const url = `https://tenantly-back.herokuapp.com/properties`;

const styles = theme =>({
	heading: {
		width: '100%',
		display: 'flex',
		fontSize: '2rem',
 },
	root:{
		display: 'flex',
		flexDirection: 'column',
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '1.5rem',
		width:250,
		border: '1px solid black',
		margin: 10,
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
				<Card className={classes.root}>
				<Link to="/admin/add-property">
					<button>+ Add New Property</button>
				</Link>
				</Card>
			</Grid>
		);
	}
}

export default withStyles(styles)(propertyList);