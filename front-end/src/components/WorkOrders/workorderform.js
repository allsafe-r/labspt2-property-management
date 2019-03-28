import React, { Component } from 'react';
import axios from 'axios';
import Imageform from './imageform';
// const url = process.env.workorderURL || 'http://localhost:9000/workorders'
const url = 'https://tenantly-back.herokuapp.com/workorders';

export default class Workorderform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			property: 1,
			tenant: 2,
			description: '',
			phone: '',
			unsupervisedEntry: false,
			status: 'Pending',
			url: 'none'
		};
	}

	inputhandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	urlUpdater = (imageurl) => {
		console.log(imageurl);
		this.setState({
			url: imageurl
		});
	};

	submithandler = (e) => {
		e.preventDefault();

		let newWorkOrder = {
			property: this.state.property,
			tenant: this.state.tenant,
			description: this.state.description,
			phone: this.state.phone,
			unsupervisedEntry: this.state.unsupervisedEntry,
			status: this.state.status,
			image: this.state.url
		};

		axios
			.post(url, newWorkOrder)
			.then((response) => {
				this.setState({
					description: '',
					phone: '',
					unsupervisedEntry: false
				});
			})
			.catch((error) => console.log("we've encountered an error"));
	};

	render() {
		return (
			<div>
				<h3>Type Your Notes Here:</h3>
				<form onSubmit={this.submithandler}>
					<input
						onChange={this.inputhandler}
						value={this.state.description}
						name="description"
						placeholder="Description"
						className="#"
						type="text"
					/>

					<input
						onChange={this.inputhandler}
						name="phone"
						value={this.state.phone}
						placeholder="(555)555-5555"
						className="#"
						type="text"
					/>
					<input onChange={this.inputhandler} name="unsupervisedEntry" className="#" type="checkbox" />
					<Imageform url={this.urlUpdater} />
         {/*<input name="attachimage" type='file'/> */}
					<button type="submit" className="button-2">
						Save
					</button>
				</form>
			</div>
		);
	}
}
