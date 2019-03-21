import React, { Component } from 'react';
import axios from 'axios';


export default class billing extends Component {
	state = {
		
	};

	componentDidMount() {
		axios
			.get('https://tenantly-back.herokuapp.com/billing')
			.then((response) => this.setState({ billing: response.data }))
			.catch((err) => {
				console.error('Server Error', error);
			});
	}

	render() {
		return (
			<div className="Billing">

			</div>
		);
	}
}
