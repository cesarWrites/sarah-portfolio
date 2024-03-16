import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Card, CardContent, CardActionArea } from '@material-ui/core';

const articles = [
  {
    title: 'Domain Knowledge in Data Science',
    url: 'https://dev.to/cesarwrites/the-power-of-domain-knowledge-in-building-a-successful-data-science-career-4k9a',
    overview: 'Domain knowledge refers to expertise in a specific industry or field, such as healthcare, finance, retail, or agriculture. While data science skills are essential, the real magic happens when you combine them with a deep understanding of the domain you are working in...',
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
    border: '1px solid black'
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
