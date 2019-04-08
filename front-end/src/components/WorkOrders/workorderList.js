import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Workordercard from './workorderCard';
//import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';

// const url = process.env.getWO || 'https://localhost:9000/workorders';
const url = 'https://tenantly-back.herokuapp.com/workorders';

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
		axios.get(url).then((response) => this.setState({ workorders: response.data })).catch((error) => {
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