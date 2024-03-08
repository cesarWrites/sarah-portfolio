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

const Resume = () => {
    const classes = useStyles();
  
    return (
      <section className={classes.section}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Resume
          </Typography>
          {/* Add your resume content here */}
        </Container>
      </section>
    );
  };


export default Resume;