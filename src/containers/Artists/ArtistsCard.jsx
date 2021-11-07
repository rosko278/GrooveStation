// ressource: https://mui.com/components/use-media-query/#migrating-from-withwidth
// ex: https://codesandbox.io/s/4zynr?file=/demo.js:986-997

// App import
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Mui Import
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Error from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import apiChartArtists from '../../api/apiChartArtists';

function ArtistsCard() {
  const [isLiked, toggleLike] = React.useState(false);

  const artists = useSelector((state) => state.chartArtists);
  const dispatch = useDispatch();

  useEffect(() => dispatch(apiChartArtists()), [dispatch]);

  if (artists.isLoading) {
    return <Loading />;
  }
  if (artists.error) {
    return <Error errorMsg="Impossible de charger la liste des artistes !" />;
  }

  return (
    <Grid container spacing={2}>
      {artists.top.map((artist) => (
        <Grid item xs={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 250 }}>
            <CardHeader title={artist.name} />
            <Link to={`/artist/${artist.id}`}>
              <CardMedia
                component="img"
                height="250"
                image={artist.picture_medium}
                alt={artist.name}
              />
            </Link>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon
                  onClick={() => toggleLike(!isLiked)}
                  sx={{ color: isLiked ? 'red' : null }}
                />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ArtistsCard;
