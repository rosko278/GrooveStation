// ressource: https://mui.com/components/use-media-query/#migrating-from-withwidth
// ex: https://codesandbox.io/s/4zynr?file=/demo.js:986-997

// App import
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Mui Import
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';
import { Paper } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import Error from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import apiChartArtists from '../../api/apiChartArtists';
import apiGenderArtist from '../../api/apiGenderArtist';

function ArtistsCard() {
  const [isLiked, toggleLike] = React.useState(false);
  let artists;
  let dataArtists;
  const dispatch = useDispatch();
  const { id } = useParams();

  if (id) {
    /* get artists of a genre if id is present */
    artists = useSelector((state) => state.genderArtist);
    dataArtists = artists.genderArtist;
  } else {
    /* get top artists */
    artists = useSelector((state) => state.chartArtists);
    dataArtists = artists.top;
  }

  useEffect(() => {
    if (id) {
      dispatch(apiGenderArtist(id));
    } else {
      dispatch(apiChartArtists());
    }
  }, [dispatch]);

  if (artists.isLoading) {
    return <Loading />;
  }
  if (artists.error) {
    return <Error errorMsg="Impossible de charger la liste des artistes !" />;
  }

  return (
    <Grid container spacing={7} sx={{ width: '99%', margin: 'auto' }}>
      {dataArtists.map((artist) => (
        <Grid item xs={10} md={4} lg={3}>
          <Paper
            sx={{
              maxWidth: 250,
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <CardHeader title={artist.name} />
            <Link to={`/artist/${artist.id}`}>
              <CardMedia
                component="img"
                height="250"
                image={artist.picture_medium}
                alt={artist.name}
                sx={{ margin: 'auto' }}
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
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default ArtistsCard;
