import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { apiGetTrackPlaylist } from '../api/apiTrackPlaylist';
import PlayButton from '../components/PlayButton';
import convertDuration from '../core/functions/convertDuration';
import Loading from '../components/Loading';
import Error from '../components/ErrorMessage';
import './SingleAlbumPage/SingleAlbumPage.css';

function PlaylistPage(props) {
  const dispatch = useDispatch();
  const trackPlaylist = useSelector((state) => state.trackPlaylist);
  const { match } = props;

  React.useEffect(() => {
    dispatch(apiGetTrackPlaylist(match.params.id));
  }, [dispatch]);

  if (
    trackPlaylist.isLoading ||
    Object.entries(trackPlaylist.playlist).length === 0
  ) {
    return <Loading />;
  }
  if (
    trackPlaylist.error ||
    Object.entries(trackPlaylist.playlist).length === 0
  ) {
    return <Error errorMsg="Impossible de charger la playlist' !" />;
  }

  return (
    <Paper square elevation={5} style={{ maxWidth: '99%', margin: 'auto' }}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Album</th>
            <th>Titre</th>
            <th>Artiste</th>
            <th>Durée</th>
            <th>Aperçu</th>
          </tr>
        </thead>
        <tbody>
          {trackPlaylist.playlist.data.map((playlist, index) => (
            <tr key={playlist.title}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={playlist.album.cover_small}
                  alt={playlist.title_short}
                />
              </td>
              <td>
                <Link
                  className="trackLink"
                  to={`/track/${playlist.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <p>{playlist.title}</p>
                </Link>
              </td>
              <td>{playlist.artist.name}</td>
              <td>{convertDuration(playlist.duration)}</td>
              <td>
                <ListItemAvatar>
                  <Avatar>
                    <PlayButton url={playlist.preview} />
                  </Avatar>
                </ListItemAvatar>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  );
}

PlaylistPage.propTypes = {
  match: PropTypes.node.isRequired,
};

export default PlaylistPage;
