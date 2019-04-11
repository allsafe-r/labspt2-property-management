import React, { Component } from "react";
import InfoCard from "./infoCard";

class TenantInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      email: "",
      emailNotification: false,
      phoneNotifiation: false
    };
  }
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //   //Set path back to default
  submitHandler = e => {
    e.preventDefault();

    this.props.addNote({
      title: this.state.title,
      textBody: this.state.text
    });
    this.props.history.push("/");
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
                    type="name"
                    name="name"
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
                    type="number"
                    name="number"
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
        </div>
      </div>
    );
  }
}

export default TenantInfo;
