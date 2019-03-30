import React, { Component } from 'react';
import axios from 'axios';
import Image from '../../assets/images/blue-on-dark.png'

export default class billing extends Component {
	state = {
		
	};

	// componentDidMount() {
	// 	axios
	// 		.get('https://tenantly-back.herokuapp.com/billing')
	// 		.then((response) => this.setState({ billing: response.data }))
	// 		.catch((err) => {
	// 			console.error('Server Error', error);
	// 		});
	// }

	render() {
		return (
			<div className="Billing">
				<a href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_Eh0R1RXhYNXEq9z56aVKr04CVDrJvxMc&scope=read_write">
					<img src={Image} />
				</a>
			</div>
		);
	}
}
