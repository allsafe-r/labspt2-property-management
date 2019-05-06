import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
// import red from '@material-ui/core/colors/red';
import Divider from '@material-ui/core/Divider';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Modal from '@material-ui/core/Modal';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './workorders.css';
import { create } from 'jss';
import { FormLabel } from '@material-ui/core';
//import { CardContent } from '@material-ui/core';
//import { withStyles } from '@material-ui/core/styles';

// const url = process.env.workOrderCard || `http://localhost:9000/workorders/${this.state.id}`;
// const url = `https://tenantly-back.herokuapp.com/${this.state.id}`;

const styles = theme =>({
	card:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		fontWeight: 'bold',
		maxWidth: '100%',
		alignItems: 'center',
	},


	radiogroup: {
		flexDirection: 'row',
		margin: `${theme.spacing.unit}px 0`,
		
	},
	radiobuttons: {
		display: 'flex',
		flexDirection: 'row',
		fontSize: '2rem',
	},
	image: {
		height: 100,
		padding:'56.25%',

	}
})

class Workordercard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.work.id,
			property: props.work.property,
			tenant: props.work.tenant,
			description: props.work.description,
			phone: props.work.phone,
			unsupervisedEntry: props.work.unsupervisedEntry,
			status: props.work.status,
			open: false
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

	handleOpen = () => {
		this.setState({ open: true });
	  };
	
	handleClose = () => {
		this.setState({ open: false });
	  };

	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.card} raised={true}>
			
				<Modal    open={this.state.open}
						  onClose={this.handleClose}
				>
				<CardMedia image={this.props.work.image} />
				</Modal>
				
				<CardHeader>{this.props.work.property}</CardHeader>
				
				<CardContent>
				<Typography gutterBottom variant="h2" className='cardfont'>
						{this.props.work.tenant}
				</Typography>
				
				<Typography variant="h3" component="p">
						{this.props.work.description}
				</Typography>
				
				<Typography component="p">
						{this.props.work.phone}
				</Typography>

				

				<Typography component="p">
					{`Unsupervised Entry is ${this.props.work.unsupervisedEntry ? 'Allowed' : 'Not Allowed'}`} 
					</Typography>	
					
					
					
					
					{/* Radio button form */}
					<FormControl>
					<FormLabel>Work Status</FormLabel>
					<RadioGroup name="workstatus" area-label="Work Status" value={this.state.status}  onChange={this.statushandler} className={classes.radiogroup} row>
					
					<div className={classes.radiobuttons}>
					{this.inputs.map((values, i) => (
						
						<div key={i}>
							<FormControlLabel   value={values} control={<Radio  checked={this.state.status === values}/>} label={values}/>
							

							
						</div>
						
					))}
					</div>
					</RadioGroup>
					</FormControl>
					
					</CardContent>
					<Button variant="contained" color="primary" onClick={this.handleOpen}>Show Image</Button>
			</Card>
		);
	}
}
export default withStyles(styles)(Workordercard);