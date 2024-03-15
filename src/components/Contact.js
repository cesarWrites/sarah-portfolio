import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#000',
    color: '#fff',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  icon: {
    fontSize: 50,
    color: '#fff',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank">
              <LinkedInIcon className={classes.icon} />
            </IconButton>
            <Typography variant="body1" align="center">LinkedIn</Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="Twitter" href="https://twitter.com/" target="_blank">
              <TwitterIcon className={classes.icon} />
            </IconButton>
            <Typography variant="body1" align="center">Twitter</Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="Email" href="mailto:example@example.com">
              <EmailIcon className={classes.icon} />
            </IconButton>
            <Typography variant="body1" align="center">Email</Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="GitHub" href="https://github.com/" target="_blank">
              <GitHubIcon className={classes.icon} />
            </IconButton>
            <Typography variant="body1" align="center">GitHub</Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="Phone" href="tel:+1234567890">
              <PhoneIcon className={classes.icon} />
            </IconButton>
            <Typography variant="body1" align="center">Phone</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
