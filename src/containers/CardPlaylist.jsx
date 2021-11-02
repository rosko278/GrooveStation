import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { apiGetChartPlaylist } from '../api/apiChartPlaylist';

export default function CardPlaylist() {
  const dispatch = useDispatch();
  const chartPlaylist = useSelector((state) => state.chartPlaylist);

  React.useEffect(() => {
    dispatch(apiGetChartPlaylist());
  }, [dispatch]);

  return (
    <Grid container spacing={1}>
      {chartPlaylist.top.map((playlist) => (
        <Grid item xs={12} md={3}>
          <Card sx={{ display: 'flex' }} key={playlist.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={playlist.picture_big}
                alt={playlist.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h8" component="div">
                  {playlist.title}
                </Typography>
                <Typography gutterBottom variant="h9" component="div">
                  {playlist.user.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
