import React, { Component } from 'react';
import axios from 'axios';
import Workordercard from './workorderCard';

export default class Workorderlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workorders: []
		};
	}
	//Get all work orders
	componentDidMount() {
		axios
			.get('https://tenantly-back.herokuapp.com/workorders')
			.then((response) => this.setState({ workorders: response.data }))
			.catch((error) => {
				console.error('Server Error', error);
			});
	}
	render() {
		return (
			<div className="workorderlist">
				{/* display work order cards */}
				{this.state.workorders.map((work) => <Workordercard key={work.id} work={work} />)}
			</div>
		);
	}
}
