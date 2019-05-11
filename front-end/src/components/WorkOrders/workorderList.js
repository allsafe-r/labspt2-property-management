import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Workordercard from './workorderCard';
//import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
const decode = require('jwt-decode');

// const url = process.env.getWO || 'https://localhost:9000/workorders';
const workorderurl = 'https://tenantly-back.herokuapp.com/workorders';

const styles = theme =>({


})


class Workorderlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workorders: []
		};
	}
	//Get all work orders
	componentDidMount() {
		this.fetchWorkOrders()
	}

	componentDidUpdate() {
		this.fetchWorkOrders();
	}
	

	fetchWorkOrders() {
		const token = localStorage.getItem('jwtToken');
		const userId = decode(token).userId;
		let propArr
		axios.get(propertiesurl)
		.then((response) => {
			propArr = response.data.filter((property) => property.owner === userId)
		})
		.catch((error) => {
			console.error('Server Error', error);
		});
		axios.get(workorderurl)
		.then((response) => {
			const unfilteredWorkArr = response.data
			let workArr = []
			propArr.forEach((prop) => unfilteredWorkArr.forEach((work) => {if(work.property === prop.houseId) {workArr.push(work) }}))
				this.setState({ 
					workorders: workArr
				})
			})
				.catch((error) => {
	   console.error('Server Error', error);
   });

	
}
	render() {
		return (

			<Grid container spacing={24} style={{padding: 24}}>



				{/* display work order cards */}
				
				{this.state.workorders.map((work) => <Grid item justify='center' sm={12} lg={6}> <Workordercard key={work.id} work={work} /> </Grid>)}

			</Grid>



		);
	}
}

export default withStyles(styles)(Workorderlist);