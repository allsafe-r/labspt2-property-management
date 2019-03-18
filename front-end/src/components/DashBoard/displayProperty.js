import React, { Component } from "react";
import axios from "axios";

export default class DisplayProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: [],
      deleteConfirm: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchProperty(id);
  }

  fetchProperty = id => {
    axios
      .get(`http://localhost:9000/properties/${id}`)
      .then(response => {
        this.setState({ property: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="property">
        <div className="propertyBody">
          <h1>Name: {this.state.property.propertyName}</h1>
          <h1>Address:{this.state.property.propertyAddress}</h1>
          <h1>City: {this.state.property.propertyCity}</h1>
          <h1>Zipcode: {this.state.property.propertyZipcode}</h1>
          <h1>Sqft" {this.state.property.sqFt}</h1>
          <h1>Bed #: {this.state.property.bedrooms}</h1>
          <h1>Bathroom #: {this.state.property.bathrooms}</h1>
          <h1>Year Built: {this.state.property.yearBuilt}</h1>
        </div>
      </div>
    );
  }
}
