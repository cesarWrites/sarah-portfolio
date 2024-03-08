import React from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Projects = () => {
    const classes = useStyles();
  
    return (
      <section className={classes.section}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={3}>
            {/* Add your projects components here */}
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>Project 1</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>Project 2</Paper>
            </Grid>
            {/* Add more Grid items as needed */}
          </Grid>
        </Container>
      </section>
    );
  };

  export default Projects;