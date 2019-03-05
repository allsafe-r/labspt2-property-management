import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';




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
    </div>
  );
}

HomeSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSection);