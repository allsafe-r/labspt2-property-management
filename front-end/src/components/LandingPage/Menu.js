import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuDropdown from './MenuDropdown';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WorkorderList from '../workorderList';
// import App from '../../App';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Menu(props) {
  const { classes } = props;
  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
  
              <MenuDropdown />
         
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Tenantly
          </Typography>
          <Link color="inherit" to="/workorder">Login</Link>
          {/* <Route path="/" exact component={App} /> */}
          <Route path="/workorder" component={WorkorderList} />
        </Toolbar>
      </AppBar>
    </div>
    
    </Router>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);