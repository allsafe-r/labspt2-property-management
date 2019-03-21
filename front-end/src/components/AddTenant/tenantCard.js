import React, { Component } from "react";

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
  //   submitHandler = e=>{
  //       e.preventDefault();

  //       this.props.addNote({
  //           title: this.state.title,
  //           textBody: this.state.text
  //       })
  //       this.props.history.push("/");
  // }

  render() {
    return (
      <div className="">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.inputHandler}
          />
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
          <input type="radio" name="email" />
          <input type="radio" name="text" />
          <input type="file" name="houseApplication" />
        </form>
      </div>
    );
  }
}

export default TenantInfo;
