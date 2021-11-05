import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

/* import Card from '@mui/material/Card'; */
import { Box } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Paper } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PlayButton from '../components/PlayButton';
import convertDuration from '../core/functions/convertDuration';
import { apiGetSingleAlbum } from '../api/apiSingleAlbum';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import './single-page.css';

function SingleAlbumPage() {
  const dispatch = useDispatch();
  const singleAlbum = useSelector((state) => state.singleAlbum);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(apiGetSingleAlbum(id));
  }, [dispatch]);

  if (singleAlbum.isLoading) {
    return <Loading />;
  }
  if (singleAlbum.error) {
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
      </Paper>
    </div>
  );
}

export default SingleAlbumPage;
