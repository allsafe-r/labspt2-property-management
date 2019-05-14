import React, { Component } from "react";
import axios from "axios";

export default class HousingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenant1: []
    };
  }

  componentDidUpdate(prevProps) {
    const id = this.props.tenantInfo;
    if (id !== prevProps.id) {
      this.fetchApp(id);
      console.log("id", id);
    }
  }

  fetchApp = id => {
    if (id) {
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
