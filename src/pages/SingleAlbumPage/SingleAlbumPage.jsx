import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Box } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Paper } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import PlayButton from '../../components/PlayButton';
import convertDuration from '../../core/functions/convertDuration';
import './SingleAlbumPage.css';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

import { apiGetSingleAlbum } from '../../api/apiSingleAlbum';

function SingleAlbumPage(props) {
  const { match } = props;
  const dispatch = useDispatch();
  const singleAlbum = useSelector((state) => state.singleAlbum);

  useEffect(() => {
    dispatch(apiGetSingleAlbum(match.params.id));
  }, [dispatch]);

  if (singleAlbum.isLoading || Object.entries(singleAlbum.album).length === 0) {
    return <Loading />;
  }

  if (singleAlbum.error || Object.entries(singleAlbum.album).length === 0) {
    return <ErrorMessage errorMsg="Impossible de charger l'album' !" />;
  }
  return (
    <div>
      <Paper
        square
        elevation={10}
        style={{
          maxWidth: '99%',
          display: 'flex',
          justifyContent: 'space-between',
          height: 250,
          margin: 'auto',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={singleAlbum.album.cover_medium}
          alt={singleAlbum.album.title}
        />
        <CardContent sx={{ minWidth: 150 }}>
          <Typography style={{ fontSize: 22, lineHeight: 2 }} gutterBottom>
            {singleAlbum.album.artist.name}
          </Typography>

          <Typography style={{ fontSize: 22 }}>
            {singleAlbum.album.title}
          </Typography>

          <Typography style={{ fontSize: 14 }}>
            Nombre de titres : {singleAlbum.album.nb_tracks}
          </Typography>
          <Typography variant="body2" style={{ fontSize: 14 }}>
            Durée : {Math.floor(singleAlbum.album.duration / 60)}min
            <br />
            Abonnés {singleAlbum.album.fans}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large">{singleAlbum.album.genres.data[0].name}</Button>
        </CardActions>
      </Paper>
      <Box sx={{ height: 8 }} />
      <Paper square elevation={5} style={{ maxWidth: '99%', margin: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Titre</th>
              <th>Durée</th>
              <th>Aperçu</th>
            </tr>
          </thead>
          <tbody>
            {singleAlbum.album.tracks.data.map((content, index) => (
              <tr key={singleAlbum.album.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/track/${content.id}`}>
                    <p>{content.title}</p>
                  </Link>
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
      </Paper>
    </div>
  );
}

SingleAlbumPage.propTypes = {
  match: PropTypes.node.isRequired,
};

export default SingleAlbumPage;
