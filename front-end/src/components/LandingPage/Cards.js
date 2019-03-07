import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';



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

function Cards(props) {
  const { classes } = props;

  return (
      <div class="flex-cards">
    <Card className={classes.card}>
    
      <CardContent>
        <div class="card-title">
            Simple
        </div>
      </CardContent>
    </Card>

    <Card className={classes.card}>
        
        <CardContent>
        <div class="card-title">
            Affordable
        </div>
      </CardContent>
    </Card>

    
    <Card className={classes.card}>
        <CardContent>
        <div class="card-title">
            Scalable
        </div>
      </CardContent>
    </Card>

    </div>
  );
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);