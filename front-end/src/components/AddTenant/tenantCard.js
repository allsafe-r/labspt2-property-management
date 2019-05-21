import React, { Component } from "react";
import axios from "axios";

import HouseApp from "./houseApp";

const decode = require("jwt-decode");
const url = "http://localhost:9000/api/register";
const mail = "https://tenantly-back.herokuapp.com/send";

/*Creating Tenant */

class TenantInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landlord_id: "",
      property_id: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cost: "",
      emailSubscribe: false,
      textSubscribe: false,
      application: null,
      isLandlord: false,
      properties: [],
      propertyNames: [],
      startDate: "",
      endDate: ""
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    const id = decode(token).id;
    this.fetchProperties();
    this.setState({
      landlord_id: id
    });
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({
      password: this.state.phone
    });
  };

  fetchProperties() {
    const token = localStorage.getItem("jwtToken");
    const userId = decode(token).id;
    console.log(userId);
    axios
      .get(`https://tenantly-back.herokuapp.com/properties/landlord/${userId}`)
      .then(response => {
        let names = response.data.map(a => {
          console.log(a.id);
          return {
            value: a.id,
            display: a.name
          };
        });
        this.setState({
          properties: response.data,
          landlord_id: userId,
          propertyNames: [
            {
              value: "",
              display: "Select Property"
            }
          ].concat(names)
        });
      })
      .catch(err => {
        console.error("Server Error", err);
      });
  }

  addTenant = e => {
    const tenant = {
      landlord_id: this.state.landlord_id,
      property_id: parseInt(this.state.property_id),
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      cost: this.state.cost,
      emailSubscribe: this.state.emailSubscribe,
      textSubscribe: this.state.textSubscribe,
      application: this.state.application,
      isLandlord: this.state.isLandlord
    };
    e.preventDefault();
    console.log(tenant);
    axios
      .post(url, tenant)
      .then(response => {
        let id = response.data.userId;
        console.log("before contract", id);
        let contract = {
          tenant: id,
          tenantEmail: this.state.email,
          property: this.state.property_id,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          rent: this.state.cost
        };
        console.log("contract", contract);
        axios
          .post("http://localhost:9000/contracts", contract)
          .then(console.log("created contract"));
        /* */
        // let email = {
        //   name: this.state.firstName,
        //   email: this.state.email,
        //   password: this.state.phone
        // };
        // axios
        //   .post(mail, email)
        //   .then(() => {
        //     console.log("sent");
        //   })
        //   .catch(err => {
        //     console.log({ Error: "here" });
        //   });
      })
      .catch(err => {
        console.log({ Error: "out here" });
      });
  };

  urlUpdater = imageurl => {
    this.setState({
      application: imageurl
    });
  };

  handleCheckboxChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  render() {
    return (
      <div className="tenant-info">
        <h1>Tenant Info</h1>
        <form>
          <div className="tenantCard-top">
            <div className="inputInfo">
              <div className="name-input">
                <h1>First Name</h1>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.inputHandler}
                />
                <h1>Last Name</h1>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.inputHandler}
                />
              </div>
              <div className="eN-input">
                <div>
                  <h1>Email</h1>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.inputHandler}
                  />
                </div>
                <div>
                  <h1>Mobile #</h1>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Mobile #"
                    onChange={this.inputHandler}
                  />
                </div>
                <div>
                  <h1>Per Month</h1>
                  <input
                    type="text"
                    name="cost"
                    placeholder="Per Month"
                    onChange={this.inputHandler}
                  />
                </div>
              </div>
            </div>
            <div className="flex-row">
              <input
                id="emailSubscribe"
                type="checkbox"
                name="emailSubscribe"
                onChange={this.handleCheckboxChange}
                value={this.state.emailSubscribe}
              />
              <label htmlFor="emailSubscribe">Email? </label>

              <input
                id="textSubscribe"
                type="checkbox"
                name="textSubscribe"
                value={this.state.textSubscribe}
                onChange={this.handleCheckboxChange}
              />
              <label htmlFor="textSubscribe">Texts?</label>
            </div>
          </div>
          <div className="tenantCard-bottom">
            <div className="option-properties">
              <select
                value={this.state.property_id}
                onChange={e => this.setState({ property_id: e.target.value })}
              >
                {this.state.propertyNames.map(property => (
                  <option key={property.value} value={property.value}>
                    {property.display}
                  </option>
                ))}
              </select>
            </div>
            <div className="start-end">
              <div>
                <label htmlFor="start"> Start Date </label>
                <input
                  id="start"
                  type="date"
                  name="startDate"
                  onChange={this.inputHandler}
                />
              </div>
              <div>
                <label htmlFor="end">End Date</label>
                <input
                  id="end"
                  type="date"
                  name="endDate"
                  onChange={this.inputHandler}
                />
              </div>
            </div>
            <HouseApp url={this.urlUpdater} />
          </div>
        </form>
        <div className="addTenantB-container">
          <button className="filled-button" onClick={this.addTenant}>
            Create Tenant
          </button>
        </div>
      </div>
    );
  }
}

export default TenantInfo;
