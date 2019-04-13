import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
const decode = require('jwt-decode')



const styles = theme => ({
  container: {
    display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    border: '1px solid black'
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },


});

class AdminSettings extends Component {
  state = {
    username: "",
    email: "",
    phone: "",
    displayName: "",
    oldPW: "",
    newPW1: "",
    newPW2: ""
  };

  componentDidMount() {
    const token = localStorage.getItem('jwtToken')
		const id = decode(token).userId

    axios
      .get(`https://tenantly-back.herokuapp.com/users/${id}`)
      // .get(`http://localhost:9000/users/${id}`)
      .then(user => {
        this.setState({
          username: user.data.username,
          email: user.data.email,
          phone: user.data.phone,
          displayName: user.data.displayName
        });
      })
      .catch(err => console.log(err));
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    // grabbing ID off local storage to access specific user info
    let id = localStorage.getItem("userId");

    // If the user enters old password without trying to change password, it throws warning
    if (this.state.oldPW !== "" && this.state.newPW1 === "") {
      alert(
        "Only enter in your old password if you want to change your password"
      );
    } else if (this.state.oldPW === "" && this.state.newPW1 !== "") {
      // If they try to create a new password without entering old password
      alert("Please enter your previous password to update to new password");
    } else if (
      this.state.oldPW !== "" &&
      this.state.newPW1 !== "" &&
      this.state.newPW1 !== this.state.newPW2
    ) {
      // If new passwords do not match it throws error
      alert("You new passwords do not match");
    } else {
      // If old password is entered AND new passwords match, then it continues to attempt update
      axios
        .put(`https://tenantly-back.herokuapp.com/users/${id}`, {
          ...this.state,
          id: parseInt(id)
        })
        // .put(`http://www.localhost:9000/users/${id}`, { ...this.state, id: parseInt(id) })
        .then(res => {
          console.log(res);
          alert(res.data.message);
        })
        .catch(err => {
          console.log(err);
        })
        .then(this.setState({ oldPW: "", newPW1: "", newPW2: "" }));
    }
  };

  handleCheckboxChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
        <form className={classes.container} onSubmit={this.onSubmit}>
            <h6>{this.state.username}</h6>
            <TextField
              placeholder="displayName"
              className={classes.textField}
              name="displayName"
              value={this.state.displayName}
              onChange={this.onChange}
              type="text"
              margin="normal"
              required
            />
            <TextField
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              required
            />

            <TextField
              placeholder="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
              type="text"
              required
            />

            <TextField
              placeholder="password"
              name="oldPW"
              value={this.state.oldPW}
              onChange={this.onChange}
              type="password"
            />
            <TextField
              placeholder="new password"
              name="newPW1"
              value={this.state.newPW1}
              onChange={this.onChange}
              type="password"
            />
            <TextField
              placeholder="new password"
              name="newPW2"
              value={this.state.newPW2}
              onChange={this.onChange}
              type="password"
            />
        
          <button>Update</button>
        </form>
    );
  }
}
AdminSettings.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AdminSettings);