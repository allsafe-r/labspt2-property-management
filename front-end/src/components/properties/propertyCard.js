import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.7rem",
    width: 300,
    border: ".5px solid #fafafa",
    margin: 10,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
    textDecoration: 'none'
  },
  h1: {
    textDecoration: 'none',
    border: '1px solid red',
    paddingTop: '20px',
  }
});
const PropertyCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.root}>
      <Link to={`/view-property/${props.id}`} style={{ textDecoration: 'none' }}>

      <img src={require("../../assets/images/homw.png")} alt="Logo" />
      <h1 style={{ textDecoration: 'none', fontSize: '2rem', color: '#fc766a' }}> {props.name}</h1>

     <Typography className={classes.h1} variant="h5" component="h2" gutterBottom>
        {props.address}, <br /> {props.city}, {props.state} <br />
        <h1>{props.zipcode}</h1>
				</Typography>
      </Link>
    </Card>
  );
};

export default withStyles(styles)(PropertyCard);
