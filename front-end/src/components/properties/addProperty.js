import React, { Component } from 'react';
import axios from 'axios';
// const url = process.env.properties || 'http://localhost:9000/properties';
const url = 'https://tenantly-back.herokuapp.com/properties';

class AddProperty extends Component {
	constructor(props) {
		super(props);
		this.state = {
			propertyName: '',
			propertyAddress: '',
			propertyCity: '',
			propertyState: '',
			propertyZipcode: '',
			sqFt: '',
			bedrooms: '',
			bathrooms: '',
			yearBuilt: '',
			owner: '',
			maxOccupants: '',
			tenant1: ''
		};
	}

	addNote = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post(url, this.state)
			.then((response) => {
				console.log('in here', response);
			})
			.catch((err) => {
				console.log('Error', err);
			});
		this.props.history.push(`/admin/`);
	};

	inputHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className="addProperty">
				<h2>Add New Property</h2>
				<form onSubmit={this.addNote}>
					<input
						type="text"
						name="propertyName"
						value={this.state.propertyName}
						placeholder="Property Name"
						onChange={this.inputHandler}
					/>
					<input
						type="text"
						name="tenant1"
						value={this.state.tenant1}
						placeholder="Tenant"
						onChange={this.inputHandler}
						required
					/>
					<input
						type="text"
						name="propertyAddress"
						value={this.state.propertyAddress}
						placeholder="Address"
						onChange={this.inputHandler}
						required
					/>
					<input
						type="text"
						name="propertyCity"
						value={this.state.propertyCity}
						placeholder="City"
						onChange={this.inputHandler}
						required
					/>
					<input
						type="text"
						name="propertyState"
						value={this.state.propertyState}
						placeholder="State"
						onChange={this.inputHandler}
						required
					/>
					<input
						type="text"
						name="propertyZipcode"
						value={this.state.propertyZipcode}
						placeholder="Zipcode"
						onChange={this.inputHandler}
						required
					/>
					<input type="text" name="sqFt" value={this.state.sqFt} placeholder="SqFt" onChange={this.inputHandler} />
					<input
						type="text"
						name="bedrooms"
						value={this.state.bedrooms}
						placeholder="Bedrooms"
						onChange={this.inputHandler}
						required
					/>
					<input
						type="number"
						name="bathrooms"
						value={this.state.bathrooms}
						placeholder="Bathrooms"
						onChange={this.inputHandler}
						required
					/>
					<input
						type="text"
						name="yearBuilt"
						value={this.state.yearBuilt}
						placeholder="Year"
						onChange={this.inputHandler}
						required
					/>
					<input
						type="text"
						name="owner"
						value={this.state.owner}
						placeholder="Owner Name"
						onChange={this.inputHandler}
					/>
					<input
						type="text"
						name="maxOccupants"
						value={this.state.maxOccupants}
						placeholder="maxOccupants"
						onChange={this.inputHandler}
						required
					/>
					<button type="submit"> Save</button>
				</form>
			</div>
		);
	}
}

export default AddProperty;
