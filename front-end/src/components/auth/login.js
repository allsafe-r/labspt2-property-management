import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../assets/css/general.css";
import logo from "../../assets/images/logo.png";
const url = "https://tenantly-back.herokuapp.com/api/login";
// const url = 'http://localhost:9000/api/login';

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    axios
      .post(url, this.state)
      .then(res => {
        localStorage.setItem("jwtToken", res.data.token);
        // this.props.history.push('/');
        this.props.authenticate(res.data.isAdmin);
      })
      .catch(err => {
        console.log({ Error: err });
      });
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmit}>
          <Link to={"/"}>
            <img className="logo-login" src={logo} alt="Logo" />
          </Link>
          <div className="user-container">
            <input
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              required
            />
          </div>
          <div className="password-container">
            <input
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              required
            />
          </div>
          <div>
            <button className="form__button">Login</button>
          </div>
          <div className="no-account">
            <p className="login-p">Don't have an account?</p>
            <Link to={"/register"}>
              <button className="register-button">Register</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
