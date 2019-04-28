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
      <div className="property-display">
        <div className="options-right">
          <button
            className=" filled-button edit-button"
            onClick={this.editProperty}
          >
            Edit
          </button>
          <button className=" notFilled-button" onClick={this.showModal}>
            Delete
          </button>
        </div>

        {this.state.show ? (
          <DeleteModal
            deleteNote={this.deleteProperty}
            hideModal={this.hideModal}
          />
        ) : null}

        <div className="property-body">
          <div className="propertyBody-left">
            <div className="propertyBody-info">
              <h1>Name: </h1>
              <p>{this.state.property.propertyName}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Address:</h1>
              <p>{this.state.property.propertyAddress}</p>
            </div>
            <div className="propertyBody-info">
              <h1>City: </h1>
              <p>{this.state.property.propertyCity}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Zipcode: </h1>
              <p>{this.state.property.propertyZipcode}</p>
            </div>
          </div>
          <div className="propertyBody-right">
            <div className="propertyBody-info">
              <h1>Sqft" </h1>
              <p>{this.state.property.sqFt}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Bed #: </h1>
              <p>{this.state.property.bedrooms}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Bathroom #:</h1>
              <p> {this.state.property.bathrooms}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Year Built: </h1>
              <p>{this.state.property.yearBuilt}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
