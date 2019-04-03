import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Menu from './Menu'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },

  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: '100%',
    backgroundColor: '#fff',
    // marginLeft: theme.spacing.unit * 3,
    // marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
    
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: 'white',
      border:' 1px solid red',

    },
  },
  heroContent: {
    maxWidth: 600,
    
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
    
  },
  cardActions: {
    backgroundColor: '#fff',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },

});

const tiers = [
  {
    title: 'Tenant',
    price: '0',
    description: [
    'Communicate with landlords',
    'Create maintenance tickets',
    'Get alerts for rent and bills',
    'Pay rent'],
    buttonText: 'SELECT PLAN',
    buttonVariant: 'outlined',
  },
  {
    title: 'Landlord',
    price: '9.99',
    description: [
      'Up to 5 properties',
      'Manage tenants and leases',
      'Manage maintenance requests',
      'Stay up to date',
    ],
    buttonText: 'SELECT PLAN',
    buttonVariant: 'contained',
  },
  {
    title: 'Property Manager',
    price: '24.99',
    description: [
        'Unlimited properties',
        'Manage tenants and leases',
        'Manage maintenance requests',
        'Stay up to date',
    ],
    buttonText: 'SELECT PLAN',
    buttonVariant: 'outlined',
  },
];
// const footers = [
//   {
//     title: 'Company',
//     description: ['About Us', 'Locations'],
//   },
//   {
//     title: 'Product',
//     description: ['Property Manager', 'Tenant Portal', ],
//   },
//   {
//     title: 'Contact',
//     description: ['info@tenently.com', 'Locations'],
//   },
//   {
//     title: 'Call',
//     description: ['1-800-555-5555'],
//   },
  
// ];

function Pricing(props) {
  const { classes } = props;

  return (
    
    <React.Fragment>
      <div className="menu">
        <Menu />
    </div>

      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          {/* <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            I am a __________
          </Typography> */}
        </div>
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                <Link to={'/register'}>
                  <Button fullWidth variant={tier.buttonVariant} color="primary" >
                    {tier.buttonText}
                  </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      {/* Footer */}
      {/* <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing);