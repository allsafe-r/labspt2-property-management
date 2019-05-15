import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../../assets/css/general.css'
import { Home, Person } from '@material-ui/icons';



const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: 240,
    justifyContent: "center",
    // alignItems: "center",
    fontSize: "1.7rem",
    width: '350px',
    border: ".5px solid #fafafa",
    margin: 10,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
    textDecoration: 'none',
    overflow: 'hidden',
    padding: '16px',
  },
  icon: {
    backgroundColor: 'white',
    border: '.5px solid #fc766a',
  },
  h1: {
    textDecoration: 'none',
    fontSize: '1.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    color: 'gray',
    // paddingTop:'100px',

  },
  cardcontent: {
    textDecoration: 'none',
    display: 'flex',
    marginBottom: '10px',
    justifyContent: 'center',
    fontSize: '1.9rem',
    color: '#fc766a',
    padding:'10px',
    fontFamily: 'Montserrat',
  },
  list: {
    width: '100%',
    maxWidth: 400,
  },
  listItemText:{
    fontSize:'1.3rem',
  }
});
const PropertyCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.root}>
      <Link to={`/view-property/${props.id}`} style={{ textDecoration: 'none' }}>
        <CardContent className={classes.cardcontent}>
      {props.name}
      </CardContent>
      <List className={classes.list}>
        <ListItem>
          <Avatar className={classes.icon}>
          <Home />
          </Avatar>
        <ListItemText
        primary="Address"
        classes={{ primary: classes.listItemText }}
        secondary={[
          props.address,
          props.city,
          props.state,
          props.zip_code,
          ].join(' ')}
        />
    </ListItem>
    </List>
    <ListItem>
      <Avatar className={classes.icon}>
        <Person />
      </Avatar>
      <ListItemText
      primary="Tenant"
      classes={{ primary: classes.listItemText }}
      secondary={
        props.tenants ? props.tenants.map(tenant => tenant.display_name + '\n'): 'No Tenants'
        }
      />
      </ListItem>
      <h1 className={classes.h1}> VIEW MORE INFO</h1>
    </Link>
    </Card>
  );
};

export default withStyles(styles)(PropertyCard);
