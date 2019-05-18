import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Workordercard from './workorderCard';
//import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import workorderCard from './workorderCard';
const decode = require('jwt-decode');

// const url = process.env.getWO || 'https://localhost:9000/workorders';
const workorderurl = 'https://tenantly-back.herokuapp.com/workorders';
const propertiesurl = 'https://tenantly-back.herokuapp.com/properties'

const styles = theme =>({


})


class Workorderlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unfilterworkedArr:[],
			propArr:[],
			workorders: [],
			properties: []
		};
	}
	//Get all work orders
	componentDidMount() {
		this.fetchWorkOrders()
	}

	//componentDidUpdate() {
		//this.fetchWorkOrders();
	//}
	

	fetchWorkOrders() {
		const token = localStorage.getItem('jwtToken');
		const userId = decode(token).userId;
		let propArr = []
		let workArr = []
		axios.get(propertiesurl)
		.then((response) => {
			
			this.setState({ 
				propArr: response.data.filter((property) => property.owner === userId)
			})
			axios.get(workorderurl)

			.then((res)=> {
				this.setState({ 
					unfilterworkedArr: res.data
				})

				

				for(let i=0; i<this.state.propArr.length; i++){
					console.log(this.state.propArr[i])
					for (let x=0; x<this.state.unfilterworkedArr.length; x++){
						console.log(this.state.unfilterworkedArr[x].property)
						if(this.state.propArr[i].houseId === this.state.unfilterworkedArr[x].property && this.state.unfilterworkedArr[x].status !== 'Completed'){
							workArr.push(this.state.unfilterworkedArr[x]);
						}
					}
				}

				
				//console.log(unfilterworkedArr[0].property)
				
				
				console.log(this.state.propArr.length)
				
				
				this.setState({
					workorders: workArr
				})

		})

		.catch((error) => {
			console.error('Server Error', error);
		});
	
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