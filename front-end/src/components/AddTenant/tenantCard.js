import React, { Component } from "react";
import axios from "axios";

const url = "https://tenantly-back.herokuapp.com/api/register";

class TenantInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAdmin: false,
      email: "",
      phone: "",
      displayName: ""
    };
  }
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({
      username: this.state.email,
      password: this.state.phone
    });
  };

  addTenant = e => {
    e.preventDefault();
    axios
      .post(url, this.state)
      .then(() => {
        console.log("working");
      })
      .catch(err => {
        console.log({ Error: err });
      });
  };

  render() {
    return (
      <div className="tenant-info">
        <div>
          <h1>Tenant Info</h1>
          <form>
            <div className="tenantCard-top">
              <div className="inputInfo">
                <div className="name-input">
                  <input
                    type="displayName"
                    name="displayName"
                    placeholder="Name"
                    onChange={this.inputHandler}
                  />
                </div>
                <div className="eN-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.inputHandler}
                  />

                  <input
                    type="phone"
                    name="phone"
                    placeholder="Mobile #"
                    onChange={this.inputHandler}
                  />
                </div>
              </div>
              <div className="flex-row">
                <h1>Email?</h1>
                <input type="radio" name="email" />
                <h1>Texts?</h1>
                <input type="radio" name="text" />
              </div>
            </div>
            <div className="tenantCard-bottom">
              <h1> Housing Application</h1>
              <input type="file" name="houseApplication" />
            </div>
          </form>
          <button onClick={this.addTenant}>Create</button>
        </div>
      </div>
    );
  }
}

export default TenantInfo;
