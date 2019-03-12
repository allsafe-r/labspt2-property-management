import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class propertyList extends Component {
	state = {
		properties: []
	};

	componentDidMount() {
		axios
			.get('https://tenantly-back.herokuapp.com/properties')
			.then((response) => this.setState({ properties: response.data }))
			.catch((err) => {
				console.error('Server Error', error);
			});
	}

	render() {
		return (
			<div className="propertiesList">
				<p className="your-properties">Properties:</p>
				{this.state.properties.map((property) => {
					return (
						<div className="properties" key={property.id}>
							<Link to={`/properties/${property.id}`}>
								<h4>{property.propertyName}</h4>
								<hr />
								<p>{property.propertyAddress}</p>
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
}
