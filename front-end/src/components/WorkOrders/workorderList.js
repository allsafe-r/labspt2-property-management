import React, { Component } from 'react';
import axios from 'axios';
import Workordercard from './workorderCard';
import Grid from '@material-ui/core/Grid';
// const url = process.env.getWO || 'https://localhost:9000/workorders';
const url = 'https://tenantly-back.herokuapp.com/workorders';

export default class Workorderlist extends Component {
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
			<Grid container className="workorderlist">
				{/* display work order cards */}
				{this.state.workorders.map((work) => <Workordercard key={work.id} work={work} />)}
			</Grid>
		);
	}
}
