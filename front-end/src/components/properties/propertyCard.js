import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    width: 250,
    border: "1px solid black",
    margin: 10,
    textDecoration: 'none'
  },
  h1: {
    textDecoration: 'none'
  }
});
const PropertyCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.root}>
      <Link to={`/view-property/${props.id}`} style={{ textDecoration: 'none' }}>
      <h1 style={{ textDecoration: 'none', fontSize: '2rem' }}> {props.name}</h1>
     <Typography className={classes.h1} variant="h6" component="h2" gutterBottom>
        {props.address}, <br /> {props.city}, {props.state} <br />
        <h1>{props.zipcode}</h1>
				</Typography>
      </Link>
    </Card>
  );
};

export default withStyles(styles)(PropertyCard);
