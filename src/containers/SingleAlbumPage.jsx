import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PlayButton from '../components/PlayButton';
import convertDuration from '../core/functions/convertDuration';
import { apiGetSingleAlbum } from '../api/apiSingleAlbum';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import './single-page.css';

function SingleAlbumPage(props) {
  const dispatch = useDispatch();
  const singleAlbum = useSelector((state) => state.singleAlbum);

  const { match } = props;

  React.useEffect(() => {
    dispatch(apiGetSingleAlbum(match.params.id));
  }, [dispatch]);

  if (singleAlbum.isLoading) {
    return <Loading />;
  }
  if (singleAlbum.error) {
    return <ErrorMessage errorMsg="Impossible de charger l'album' !" />;
  }

  return (
    <div>
      <Card sx={{ minWidth: 275, display: 'flex', height: 300 }}>
        <img src={singleAlbum.album.cover_big} alt={singleAlbum.album.title} />
        <CardContent>
          <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
            {singleAlbum.album.artist.name}
          </Typography>
          <Typography variant="h3" component="div">
            {singleAlbum.album.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Nombre de titres : {singleAlbum.album.nb_tracks}
          </Typography>
          <Typography variant="body2">
            Durée : {Math.floor(singleAlbum.album.duration / 60)}min
            <br />
            Abonnés {singleAlbum.album.fans}
          </Typography>
          <CardActions>
            <Button size="small">
              {singleAlbum.album.genres.data[0].name}
            </Button>
          </CardActions>
        </CardContent>
      </Card>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          {singleAlbum.album.tracks.data.map((content, index) => (
            <tr key={singleAlbum.album.id}>
              <td>{index + 1}</td>
              <td>
                <p>{content.title}</p>
              </td>
              <td>{convertDuration(content.duration)}</td>
              <td>
                <ListItemAvatar>
                  <Avatar>
                    <PlayButton url={content.preview} />
                  </Avatar>
                </ListItemAvatar>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

SingleAlbumPage.propTypes = {
  match: PropTypes.node.isRequired,
};

export default SingleAlbumPage;
