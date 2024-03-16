import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#000', // Dark background color for the portfolio
    padding: theme.spacing(6), 
  },
  paper: {
    padding: theme.spacing(4),
    backgroundColor: '#fff', 
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

const About = () => {
  const classes = useStyles();
  const image = 'https://drive.google.com/file/d/1zCdaeKuVq-u9XTBcsnyMHsIFxfwXSXjl/view?usp=sharing';
console.log(image)
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
                Sarah Mukuti,
              </Typography>
              <Typography variant="body1" paragraph>
                I am a self driven person who taps into the power of technology to help organizations achieve better outcomes using data. I am particlulay intrigued by the idea of collecting, organizing and visualizing data in a manner that generates actionable insights.I am very flexible in learning new ideas, tools, and technologies that will come in handy while solving any problem. 
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src= "https://drive.google.com/file/d/1zCdaeKuVq-u9XTBcsnyMHsIFxfwXSXjl/view" alt="Profile" className={classes.image} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default About;
