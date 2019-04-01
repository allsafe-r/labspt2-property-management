import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Workordercard from './workorderCard';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';

// const url = process.env.getWO || 'https://localhost:9000/workorders';
const url = 'https://tenantly-back.herokuapp.com/workorders';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1500,
    height: 1550,
  },
});

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

			<GridList className="workorderlist">



				{/* display work order cards */}
				
				{this.state.workorders.map((work) => <Workordercard key={work.id} work={work} />)}

			</GridList>



		);
	}
}
