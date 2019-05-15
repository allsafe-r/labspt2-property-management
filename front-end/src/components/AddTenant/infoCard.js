import React, { Component } from "react";
import axios from "axios";

const decode = require("jwt-decode");
const url = `https://tenantly-back.herokuapp.com/properties`;

export default class HousingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenant1: [],
      tenant2: [],
      properties: [],
      startDate: "",
      endDate: ""
    };
  }
  componentDidMount() {
    this.fetchProperties();
  }
  /* Checking if TenantID is the same*/
  componentDidUpdate(prevProps) {
    const id = this.props.tenantID;
    if (id !== prevProps.tenantID) {
      this.fetchApp(id);
    }
  }
  fetchProperties() {
    const token = localStorage.getItem("jwtToken");
    const userId = decode(token).userId;

    axios
      .get(url)
      .then(response => {
        let propArr = response.data.filter(
          property => property.owner === userId
        );
        if (propArr.length !== this.state.properties.length) {
          this.setState({
            properties: propArr
          });
        }
      })
      .catch(err => {
        console.error("Server Error", err);
      });
  }

  fetchApp = id => {
    /* If ID coming in is lower then the ID from tenant (starts with none) then it goes into Array 1, if the ID is higher then it goes to Array 2 (tenant2) */
    if (id > this.state.tenant1.id) {
      axios
        .get(`https://tenantly-back.herokuapp.com/users/${id}`)
        .then(response => {
          this.setState({ tenant2: response.data });
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      axios
        .get(`https://tenantly-back.herokuapp.com/users/${id}`)
        .then(response => {
          this.setState({ tenant1: response.data });
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  render() {
    return (
      <div className="info-container">
        <h1>Housing Info</h1>
        <div className="housing-info ">
          <div className="tenant-names">
            <h1>{this.state.tenant1.firstName}</h1>
            <h1>{this.state.tenant2.firstName}</h1>
          </div>

          <div className="start-end">
            <input type="date" name="start" />
            <input type="date" name="end" />
          </div>
          <div className="option-properties yes">
            <select>
              <option value="property-1">property 1</option>
              <option value="property-2">property 2</option>
              <option value="property-3">property 3</option>
              <option value="property-4">property 4</option>
            </select>
          </div>
          <div className="info-button yes">
            <button>Send Contract</button>
          </div>
        </div>
      </div>
    );
  }
}
