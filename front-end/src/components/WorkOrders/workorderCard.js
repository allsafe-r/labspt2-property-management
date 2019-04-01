import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import red from '@material-ui/core/colors/red';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// const url = process.env.workOrderCard || `http://localhost:9000/workorders/${this.state.id}`;
// const url = `https://tenantly-back.herokuapp.com/${this.state.id}`;
const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


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
			<Card className="property-card">
				<CardHeader>{this.props.work.property}</CardHeader>
				<List>
					<ListItem>
						<ListItemText
						primary={this.props.work.tenant} />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemText
						primary={this.props.work.description}
						/>
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemText
						primary={this.props.work.phone}
						/>
					</ListItem>
					<Divider />
					<ListItem>
			       <CardMedia
			          className='#'
			          image={this.props.work.image}
			        />
			        </ListItem>
			        <Divider />
					<ListItem>
					<ListItemText
					primary={`Unsupervised Entry is ${this.props.work.unsupervisedEntry ? 'Allowed' : 'Not Allowed'}`} 
					/>
					</ListItem>
					<Divider />
	
					{/* Radio button form */}
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
				</List>
			</Card>
		);
	}
}
