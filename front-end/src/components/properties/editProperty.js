import React, { Component } from "react";
import axios from "axios";
// const url = process.env.getProperty || `http://localhost:9000/properties/${id}`;
//const url = `https://tenantly-back.herokuapp.com/properties/${id}`;

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
      .get(
        `https://tenantly-back.herokuapp.com/properties/${
          this.props.match.params.id
        }`
      )
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
      .put(`https://tenantly-back.herokuapp.com/properties/${id}`, this.state)
      .then(response => {
        console.log("in here", response);
      })
      .catch(err => {
        console.log(err);
      });
    this.props.history.push(`/view-property/${id}`);
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="edit-property">
        <h1>Edit Note</h1>
        <form onSubmit={this.editNote}>
          <div className="edit-leftSide">
            <div className="edit-topInfo">
              <div className="input-info">
                <h1>Property Name</h1>
                <input
                  name="propertyName"
                  type="text"
                  value={this.state.propertyName}
                  onChange={this.handleInput}
                />
              </div>
              <div className="input-info">
                <h1>Address</h1>
                <input
                  name="propertyAddress"
                  type="text"
                  value={this.state.propertyAddress}
                  onChange={this.handleInput}
                />
              </div>

              <div className="input-info">
                <h1>City</h1>
                <input
                  name="propertyCity"
                  type="text"
                  value={this.state.propertyCity}
                  onChange={this.handleInput}
                />
              </div>

              <div className="input-info">
                <h1>State</h1>
                <input
                  name="propertyState"
                  type="text"
                  value={this.state.propertyState}
                  onChange={this.handleInput}
                />
              </div>

              <div className="input-info">
                <h1>Zip Code</h1>
                <input
                  name="propertyZipcode"
                  type="text"
                  value={this.state.propertyZipcode}
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <div className="edit-botInfo">
              <div className="input-info">
                <h1>Sq. Ft.</h1>
                <input
                  name="sqFt"
                  type="text"
                  value={this.state.sqFt}
                  onChange={this.handleInput}
                />
              </div>

              <div className="input-info">
                <h1>Bedrooms</h1>
                <input
                  name="bedrooms"
                  type="text"
                  value={this.state.bedrooms}
                  onChange={this.handleInput}
                />
              </div>

              <div className="input-info">
                <h1>Bathrooms</h1>
                <input
                  name="bathrooms"
                  type="text"
                  value={this.state.bathrooms}
                  onChange={this.handleInput}
                />
              </div>

              <div className="input-info">
                <h1>Year Built</h1>
                <input
                  name="yearBuilt"
                  type="text"
                  value={this.state.yearBuilt}
                  onChange={this.handleInput}
                />
              </div>
            </div>
          </div>
          <div className="edit-rightSide">
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProperty;
