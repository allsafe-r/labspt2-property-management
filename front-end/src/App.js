import React, { Component } from "react";
import "./App.css";
import Stripe from "./components/Stripe";
import DashBoard from "./components/DashBoard/dashBoardView";
import Login from "./components/DashBoard/login";
import Register from "./components/DashBoard/register";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LandingView from "./components/LandingPage/LandingView";

// const url = process.env.home || 'http://localhost:9000';

const url = "https://tenantly-back.herokuapp.com";
const axios = require("axios");

class App extends Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    this.authenticate();
  }

  authenticate = () => {
    const token = localStorage.getItem("jwtToken");
    const auth = {
      headers: {
        Authorization: token
      }
    };

    if (token) {
      axios
        .get(url, auth)
        .then(res => {
          if (res.data) {
            this.setState({ loggedIn: true });
          } else {
            throw new Error();
          }
        })
        .catch(err => this.props.history.push("/login"));
    } else {
      console.log("Register and/or login to receive a token");
    }
  };

  logOut = () => {
    localStorage.removeItem("jwtToken");
    this.setState({ loggedIn: false });
  };

  render() {
    if (this.state.loggedIn === false) {
      return (
        <div>
          <Route exact path={"/"} component={LandingView} />
          <Route exact path={"/register"} component={Register} />
          <Route
            exact
            path={"/login"}
            render={props => (
              <Login {...props} authenticate={this.authenticate} />
            )}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/"}>
            <button onClick={this.logOut}>Logout</button>
          </Link>
          <Link to={"/admin/properties"}>
            <button>Development Purposes - I'm an admin!</button>
          </Link>
          <Link to={"/tenant/dashboard"}>
            <button>Development Purposes - I'm a tenant!</button>
          </Link>
          <DashBoard />

          <Stripe />
        </div>
      );
    }
  }
}

export default App;
