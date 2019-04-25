import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import orange from "@material-ui/core/colors/orange";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { nominalTypeHack } from "prop-types";
import Typography from "@material-ui/core/Typography";
import "../../assets/css/general.css";

const decode = require("jwt-decode");
// const url = process.env.properties || 'http://localhost:9000/properties';
const url = "https://tenantly-back.herokuapp.com/properties/";

class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyName: "",
      propertyAddress: "",
      propertyCity: "",
      propertyState: "",
      propertyZipcode: "",
      sqFt: "",
      bedrooms: "",
      bathrooms: "",
      yearBuilt: "",
      maxOccupants: "",
      tenant1: ""
    };
  }

  addProperty = e => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");
    const userId = decode(token).userId;
    axios
      .post(url, { ...this.state, owner: userId })
      .then(response => {
        console.log("in here", response);
      })
      .catch(err => {
        console.log("Error", err);
      });
    this.props.history.push(`/dashboard`);
  };

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="addProperty-container">
        <h1>Add New Property:</h1>

        <form onSubmit={this.addProperty}>
          <input
            type="text"
            name="propertyName"
            value={this.state.propertyName}
            placeholder="Property Name"
            onChange={this.inputHandler}
            className="form-input"
          />
          <input
            type="text"
            name="tenant1"
            value={this.state.tenant1}
            placeholder="Tenant ID"
            onChange={this.inputHandler}
            className="form-input"
            required
          />
          <input
            type="text"
            name="propertyAddress"
            value={this.state.propertyAddress}
            placeholder="Address"
            onChange={this.inputHandler}
            className="form-input"
            required
          />
          <input
            type="text"
            name="propertyCity"
            value={this.state.propertyCity}
            placeholder="City"
            onChange={this.inputHandler}
            className="form-input"
            required
          />
          <input
            type="text"
            name="propertyState"
            value={this.state.propertyState}
            placeholder="State"
            onChange={this.inputHandler}
            className="form-input"
            required
          />
          <input
            type="text"
            name="propertyZipcode"
            value={this.state.propertyZipcode}
            placeholder="Zipcode"
            onChange={this.inputHandler}
            className="form-input"
            required
          />
          <input
            type="text"
            name="sqFt"
            value={this.state.sqFt}
            placeholder="SqFt"
            onChange={this.inputHandler}
            className="form-input"
          />
          <input
            type="text"
            name="bedrooms"
            value={this.state.bedrooms}
            placeholder="Bedrooms"
            onChange={this.inputHandler}
            className="form-input"
            required
          />
          <input
            type="text"
            name="bathrooms"
            value={this.state.bathrooms}
            placeholder="Bathrooms"
            onChange={this.inputHandler}
            className="form-input"
            required
          />
          <input
            type="text"
            name="yearBuilt"
            value={this.state.yearBuilt}
            placeholder="Year"
            onChange={this.inputHandler}
            className="form-input"
            required
          />
          <input
            type="text"
            name="maxOccupants"
            value={this.state.maxOccupants}
            placeholder="maxOccupants"
            onChange={this.inputHandler}
            className="form-input"
            required
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
