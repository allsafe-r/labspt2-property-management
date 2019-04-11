import React from "react";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const PropertyCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.root}>
      <Link to={`/admin/view-property/${props.id}`}>
        <h1>{props.name}</h1>
        <h1>{props.address}</h1>
        <h1>{props.city}</h1>
        <h1>{props.state}</h1>
        <h1>{props.zipcode}</h1>
      </Link>
    </Card>
  );
};

export default withStyles(styles)(PropertyCard);
