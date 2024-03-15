import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Card, CardContent, CardActionArea } from '@material-ui/core';

const articles = [
  {
    title: 'Article 1',
    url: 'https://example.com/article1',
    overview: 'Overview of Article 1...',
  },
  {
    title: 'Article 2',
    url: 'https://example.com/article2',
    overview: 'Overview of Article 2...',
  },
  {
    title: 'Article 3',
    url: 'https://example.com/article3',
    overview: 'Overview of Article 3...',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
  },
}));

const Articles = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Articles
        </Typography>
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card} elevation={3}>
                <CardActionArea component="a" href={article.url} target="_blank">
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {article.overview}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Articles;
