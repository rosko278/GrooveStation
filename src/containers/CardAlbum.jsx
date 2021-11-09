import * as React from 'react';
/* import Card from '@mui/material/Card'; */
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Paper } from '@material-ui/core';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { apiGetChartAlbum } from '../api/apiChartAlbum';

export default function CardAlbum() {
  const dispatch = useDispatch();
  const chartAlbum = useSelector((state) => state.chartAlbum);

  React.useEffect(() => {
    dispatch(apiGetChartAlbum());
  }, [dispatch]);

  return (
    <Grid container spacing={5} sx={{ width: '98%', margin: 'auto' }}>
      {chartAlbum.top.map((album) => (
        <Grid item xs={12} md={3}>
          <Paper
            sx={{
              maxWidth: '100%',
              display: 'flex',
            }}
            key={album.id}
          >
            <CardActionArea>
              <Link to={`/album/${album.id}`}>
                <CardMedia
                  component="img"
                  image={album.cover_big}
                  alt={album.title}
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {album.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {album.artist.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
