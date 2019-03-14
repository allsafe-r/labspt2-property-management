import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class PropertyCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			property: null,
			deleteConfirm: false
		};
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.fetchProperty(id);
	}

	// In order to delete a property, not sure if this is needed, can display the delete modal based on true/false

	toggleDelete = () => {
		this.setState({ deleteConfirm: !this.state.deleteConfirm });
	};

	fetchProperty = (id) => {
		axios
			.get(`https://tenantly-back.herokuapp.com/properties/${id}`)
			.then((response) => {
				this.setState({ property: response.data[0] });
			})
			.catch((error) => {
				console.error(error);
			});
	};

	render() {
		if (!this.state.property) {
			return <div>Loading property information...</div>;
		}

		const { propertyAddress, propertyName } = this.state.property;
		return (
			<div className="property">
				<div className="propertyHeader">
					//will need to create an editProperty card
					<Link
						to={{ pathname: `/properties/${this.state.property.id}/edit`, state: this.state.property }}
						className="edit-tab"
					>
						Edit
					</Link>
					<button className="edit-tab" onClick={this.toggleDelete}>
						Delete
					</button>
				</div>
				<div className="propertyBody">
					<h1>{propertyAddress}</h1>
					<h3>{propertyName}</h3>
				</div>
				// if you haven't clicked delete, deleteCard won't show, otherwise it should
				{this.state.deleteConfirm ? (
					<DeleteConfirm
						deleteConfirm={this.state.deleteConfirm}
						id={this.props.match.params.id} // gotta check this
						toggleDelete={this.toggleDelete}
					/>
				) : null}
			</div>
		);
	}
}
