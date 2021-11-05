import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useSelector, useDispatch } from 'react-redux';
import apiGetRss from '../api/apiFluxRSS';

function FluxRssMusicNews() {
  const handleRoute = (url) => {
    window.location.href = url;
  };
  const dispatch = useDispatch();
  const fluxRss = useSelector((state) => state.fluxRss);
  useEffect(() => {
    dispatch(apiGetRss());
  }, [dispatch]);
  if (fluxRss.isLoading) {
    return <div>Loading</div>;
  }
  if (fluxRss.error) {
    return <div>Erreur</div>;
  }
  return (
    <div>
      {fluxRss.news.map((article) => (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {article.title[0]}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {article['dc:creator'][0]}
            </Typography>
            <Typography variant="body2">{article.description[0]}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleRoute(article.link[0])}>
              Learn More{' '}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default FluxRssMusicNews;
