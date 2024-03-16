import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@material-ui/core';

const projects = [
  {
    title: 'Prodev Learning',
    githubLink: 'https://github.com/cesarWrites/pro-dev-learning-app',
    liveLink: 'https://pro-dev-learning-app.vercel.app/',
    description: 'An online course learning platform...',
  },
  {
    title: 'Project 2',
    githubLink: 'https://github.com/example/project2',
    liveLink: 'https://example.com/project2',
    description: 'Description of Project 2...',
  },
  {
    title: 'Project 3',
    githubLink: 'https://github.com/example/project3',
    liveLink: 'https://example.com/project3',
    description: 'Description of Project 3...',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card} elevation={3}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', flexDirection: 'column'}}>
                  <Button size="small" color="primary" href={project.githubLink} target="_blank">
                    GitHub
                  </Button>
                  <Button size="small" color="primary" href={project.liveLink} target="_blank">
                    Live
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
