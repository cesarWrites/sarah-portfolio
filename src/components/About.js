import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Paper } from '@material-ui/core';
import  image  from '../assets/profile.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#333', // Dark background color for the portfolio
    padding: theme.spacing(6), // Adjust padding as needed
  },
  paper: {
    padding: theme.spacing(4),
    backgroundColor: '#444', // Darker background color for the section
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Paper className={classes.paper} elevation={3}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                About Me
              </Typography>
              <Typography variant='h3' component="h2" gutterBottom>
                I am Sarah Mukuti
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis sed leo consectetur commodo. Nullam ut nisl nec lacus ultricies commodo sed ac arcu. Sed fermentum tristique fermentum. Nulla eget dolor vitae sapien tincidunt consequat.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={image} alt="Profile" className={classes.image} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default About;
