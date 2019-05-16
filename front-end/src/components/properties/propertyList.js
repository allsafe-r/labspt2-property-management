import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropertyCard from './propertyCard';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import '../../assets/css/general.css';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
const decode = require('jwt-decode');

// const url = 'http://localhost:9000/properties';
const url = `https://tenantly-back.herokuapp.com/properties`;

const styles = (theme) => ({
	heading: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		paddingLeft:'10px',
		fontSize: '30px',
		fontFamily: 'Montserrat',
		alignItems: 'center',
		

	},
	root: {
		display: 'flex',
		height: 30,
		justifyContent: 'flex-start',
		alignItems: 'center',
		fontSize: '1.5rem',
		width: 140,
		boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
		marginLeft: '10px',
		textDecoration: 'none',
		backgroundColor: '#fc766a'


		
	},
	margin: {
		margin: theme.spacing.unit,
		fontSize: ' 1.3rem',
		textDecoration: 'none',
		backgroundColor: '#fc766a'
	
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	}
});
class propertyList extends Component {
	state = {
		properties: []
	};

	componentDidMount() {
		this.fetchProperties()
	}

	componentDidUpdate() {
		this.fetchProperties();
	}

	fetchProperties() {
		const token = localStorage.getItem('jwtToken');
		const userId = decode(token).userId;
		axios
			.get(url)
			.then((response) => {
				let propArr = response.data.filter((property) => property.owner === userId)
				if(propArr.length !== this.state.properties.length) {
				this.setState({
					properties: propArr
				});}
			})
			.catch((err) => {
				console.error('Server Error', err);
			});
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid container spacing={24} style={{ padding: 20 }}>
				<Typography className={classes.heading}style={{textDecoration: 'none'}} variant="h5" component="h2" gutterBottom>
					Properties:
				<Card className={classes.root}>
					<Link to="/add-property">
						<Button size="medium" className={classes.margin}>
							<p>+ Add Property</p>
						</Button>
					</Link>
				</Card>
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
			</Grid>
		);
	}
}

export default withStyles(styles)(propertyList);
