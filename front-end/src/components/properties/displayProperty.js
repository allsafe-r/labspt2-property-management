import React, { Component } from "react";
import axios from "axios";
import DeleteModal from "./deleteModal";

// const url = process.env.getProperty || `http://localhost:9000/properties/${id}`;
//aconst url = `https://tenantly-back.herokuapp.com/properties/${id}`;

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
      .get(`https://tenantly-back.herokuapp.com/properties/${id}`)
      .then(response => {
        this.setState({ property: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  deleteProperty = () => {
    let id = this.state.property.houseId;
    axios
      .delete(`https://tenantly-back.herokuapp.com/properties/${id}`)
      .then(response => {
        console.log("in here", response);
      })
      .catch(err => {
        console.log(err);
      });
    this.props.history.push("/admin");
  };

  editProperty = e => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="property">
        <button onClick={this.editProperty}>Edit</button>
        <button onClick={this.showModal}>Delete</button>
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
        {this.state.show ? (
          <DeleteModal
            deleteNote={this.deleteProperty}
            hideModal={this.hideModal}
          />
        ) : null}
      </div>
    );
  }
}
