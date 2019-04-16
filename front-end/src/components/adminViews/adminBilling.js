import React, { Component } from "react";
import "./../../assets/css/dashboardComp.css";
import "./../../assets/css/general.css";
import axios from "axios";
import Image from "../../assets/images/blue-on-dark.png";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "../../assets/css/general.css";
import { Button } from "@material-ui/core";
// const url = process.env.properties || 'http://localhost:9000/properties';
const url = `https://tenantly-back.herokuapp.com/properties`;
const url2 = `http://localhost:9000/billing`;

const styles = theme => ({
  heading: {
    width: "100%",
    display: "flex",
    fontSize: "2rem"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    width: 250,
    border: "1px solid black",
    margin: 10
  },
  margin: {
    margin: theme.spacing.unit,
    fontSize: " 1.3rem"
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

export default class Billing extends Component {
  state = {
    properties: [],
    billing: [],
    propertySelected: []
  };

  handleInputChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    console.log(this.state.house_id);
    this.setState({ value: event.target.value });
    axios
      .get(`https://tenantly-back.herokuapp.com/billing/${this.state.value}`)
      .then(response => {
        this.setState({ propertySelected: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  setBilling = () => {
    axios
      .get(url)
      .then(response =>
        this.setState({ billing: response.data }, function() {
          console.log(this.state.billing);
        })
      )
      .catch(err => {
        console.error("Server Error", err);
      });
  };

  componentDidMount() {
    axios
      .get(url)
      .then(response =>
        this.setState({ properties: response.data }, function() {
          console.log(this.state.billing);
          this.setBilling();
        })
      )
      .catch(err => {
        console.error("Server Error", err);
      });
  }

  // fetchProperty = (id) => {
  // 	axios
  // 		.get(`https://tenantly-back.herokuapp.com/properties/${id}`)
  // 		.then((response) => {
  // 			this.setState({ property2: response.data });
  // 		})
  // 		.catch((error) => {
  // 			console.error(error);
  // 		});
  // };

  // clickFunction() {
  // 	console.log(document.getElementById('property-native-required').selectedIndex)
  // }

  render() {
    const { classes } = this.props;
    return (
      <Grid container spaceing={24} style={{ padding: 20 }}>
        <Grid>
          <Card>
            <FormControl>
              <InputLabel htmlFor="property-native-required">
                Select a property to view payment history
              </InputLabel>
              <Select
                native
                value={this.state.houseId}
                onChange={this.handleInputChange(this.value)}
                name="Property"
                inputProps={{
                  id: "property-native-required"
                }}
              >
                <option value={0} />
                {this.state.properties.map((property, index) => (
                  <option key={index} value={property.houseId}>
                    {property.propertyName}
                  </option>
                ))}
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </Card>
          <Card>
            <a href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_Eh0R1RXhYNXEq9z56aVKr04CVDrJvxMc&scope=read_write">
              <img src={Image} alt="Logo" />
            </a>
          </Card>
        </Grid>

        <Card>
          <p>Billing History</p>

          {this.state.propertySelected.map(bill => (
            <ul>
              <li>{bill.propertyName}</li>
              <li>{bill.amount}</li>
            </ul>
          ))}
        </Card>
      </Grid>
    );
  }
}
