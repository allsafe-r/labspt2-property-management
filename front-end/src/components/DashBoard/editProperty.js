import React, { Component } from "react";

import axios from "axios";

class EditProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseId: "",
      propertyName: "",
      propertyAddress: "",
      propertyCity: "",
      propertyState: "",
      propertyZipcode: "",
      sqFt: "",
      bedrooms: "",
      bathrooms: "",
      yearBuilt: ""
    };
  }

  componentDidMount() {
    this.SingleProperty();
  }

  SingleProperty = () => {
    axios
      .get(`http://localhost:9000/properties/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          houseId: response.data.houseId,
          propertyName: response.data.propertyName,
          propertyAddress: response.data.propertyAddress,
          propertyCity: response.data.propertyCity,
          propertyState: response.data.propertyState,
          propertyZipcode: response.data.propertyZipcode,
          sqFt: response.data.sqFt,
          bedrooms: response.data.bedrooms,
          bathrooms: response.data.bathrooms,
          yearBuilt: response.data.yearBuilt
        });
      })
      .catch(err => {
        console.log("Error");
      });
  };

  editNote = e => {
    e.preventDefault();
    let id = this.state.houseId;
    axios
      .put(`http://localhost:9000/properties/${id}`, this.state)
      .then(response => {
        console.log("in here", response);
      })
      .catch(err => {
        console.log(err);
      });
    this.props.history.push(`/admin/view-property/${id}`);
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="textarea">
        <h1>Edit Note</h1>
        <form onSubmit={this.editNote}>
          <input
            name="propertyName"
            type="text"
            value={this.state.propertyName}
            onChange={this.handleInput}
          />

          <input
            name="propertyAddress"
            type="text"
            value={this.state.propertyAddress}
            onChange={this.handleInput}
          />
          <input
            name="propertyCity"
            type="text"
            value={this.state.propertyCity}
            onChange={this.handleInput}
          />
          <input
            name="propertyState"
            type="text"
            value={this.state.propertyState}
            onChange={this.handleInput}
          />
          <input
            name="propertyZipcode"
            type="text"
            value={this.state.propertyZipcode}
            onChange={this.handleInput}
          />
          <input
            name="sqFt"
            type="text"
            value={this.state.sqFt}
            onChange={this.handleInput}
          />
          <input
            name="bedrooms"
            type="text"
            value={this.state.bedrooms}
            onChange={this.handleInput}
          />
          <input
            name="bathrooms"
            type="text"
            value={this.state.bathrooms}
            onChange={this.handleInput}
          />
          <input
            name="yearBuilt"
            type="text"
            value={this.state.yearBuilt}
            onChange={this.handleInput}
          />

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default EditProperty;
