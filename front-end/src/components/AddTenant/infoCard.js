import React, { Component } from "react";
import axios from "axios";

export default class HousingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenant1: [],
      tenant2: []
    };
  }

  componentDidUpdate(prevProps) {
    console.log("id", prevProps);
    const id = this.props.tenantInfo;
    if (id !== prevProps.tenantInfo) {
      this.fetchApp(id);
    }
  }

  fetchApp = id => {
    console.log(
      "id",
      id,
      "tenant1",
      this.state.tenant1,
      "tenant2",
      this.state.tenant2
    );
    if (id > this.state.tenant1.id) {
      console.log(id);
      console.log(this.state.tenant1.id);
      axios
        .get(`https://tenantly-back.herokuapp.com/users/${id}`)
        .then(response => {
          this.setState({ tenant2: response.data });
          console.log("tenant2", this.state.tenant1.id);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      axios
        .get(`https://tenantly-back.herokuapp.com/users/${id}`)
        .then(response => {
          this.setState({ tenant1: response.data });
          console.log("tenant1", this.state.tenant2);
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
