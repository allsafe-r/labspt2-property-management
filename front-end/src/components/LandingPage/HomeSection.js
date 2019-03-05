import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function HomeSection(props) {
  const { classes } = props;

  return (
    <div className="titleCenter">
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
        Take Control with One Solution
        </Typography>
        <div className={classes.root}>
      <Grid className="sectionHome" container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography className="textSection" variant="subtitle1" align="center">
              Tenantly strives to break down the barriers between tenants and landlords while building up the communication.
              The stress of property managing can disappear when you have the all of the tools you need in one easy to use app. 
              Imagine getting paid on time and having happy tenants that get quick responses to maintanace requests. 
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className="showcase">
            
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

HomeSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSection);