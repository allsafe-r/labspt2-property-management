import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
// import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import red from '@material-ui/core/colors/red';
// import Divider from '@material-ui/core/Divider';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Modal from '@material-ui/core/Modal';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './workorders.css';

// const url = process.env.workOrderCard || `http://localhost:9000/workorders/${this.state.id}`;
// const url = `https://tenantly-back.herokuapp.com/${this.state.id}`;



export default class Workordercard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.work.id,
			property: props.work.property,
			tenant: props.work.tenant,
			description: props.work.description,
			phone: props.work.phone,
			unsupervisedEntry: props.work.unsupervisedEntry,
			status: props.work.status
		};
	}

	//Radio Button Status

	inputs = [ 'Pending', 'In Progress', 'Completed' ];

	//Updates the status of the radio button and sends a put request to the database to reflect the change in work order status
	statushandler = (e) => {
		this.setState({
			status: e.target.value
		});

		let updatedworkorder = {
			property: this.state.property,
			tenant: this.state.tenant,
			description: this.state.description,
			phone: this.state.phone,
			unsupervisedEntry: this.state.unsupervisedEntry,
			status: e.target.value
		};

		axios
			.put(`https://tenantly-back.herokuapp.com/workorders/${this.state.id}`, updatedworkorder)
			.then((response) => {
				console.log('success');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<Card>
				<CardActionArea>
				<CardMedia image={this.props.work.image} />
				<CardHeader>{this.props.work.property}</CardHeader>
				
				<Typography component='p'>
						{this.props.work.tenant}
				</Typography>
				<Typography component='p'>
						{this.props.work.description}
						</Typography>
						<Typography component='p'>
						{this.props.work.phone}
						</Typography>

					
					{`Unsupervised Entry is ${this.props.work.unsupervisedEntry ? 'Allowed' : 'Not Allowed'}`} 
					
					
					</CardActionArea>
					
					
					{/* Radio button form */}
					<div className="flexbuttons">
					{this.inputs.map((values, i) => (
						<div key={i}>
							<h1>{values}</h1>
							<Radio
								
								name={values}
								onChange={this.statushandler}
								value={values}
								checked={this.state.status === values}
							/>
						</div>
						
					))}
					</div>
				
				
			</Card>
		);
	}
}
