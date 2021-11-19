import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';
import '../../pages/pages.css';
import { useParams, Link } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import apiGetTopTracks from '../../api/apiArtistTopTracks';

// alerts
import Loading from '../../components/Loading';
import Error from '../../components/ErrorMessage';

// import util function
import convertDuration from '../../core/functions/convertDuration';
import PlayButton from '../../components/PlayButton';

function ArtistTopTracks() {
  const tracks = useSelector((state) => state.artistTopTracks);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(apiGetTopTracks(id));
  }, [dispatch]);

  if (tracks.isLoading) {
    return <Loading />;
  }

  if (tracks.error) {
    return <Error errorMsg="Impossible de charger les données de l'artiste" />;
  }

  return (
    <Paper square elevation={5} style={{ maxWidth: '99%', margin: 'auto' }}>
      <table>
        <thead>
          <tr>
            <th className="row-left">Titre</th>
            <th className="row-center">Durée</th>
            <th className="row-center">Aperçu</th>
          </tr>
        </thead>
        <tbody>
          {tracks.top.map((row) => (
            <tr key={row.title}>
              <td>
                <Link
                  className="topTracksLink"
                  to={`/track/${row.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <p>{row.title}</p>
                </Link>
              </td>
              <td className="row-center">{convertDuration(row.duration)}</td>
              <td className="row-center">
                <PlayButton url={row.preview} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  );
}

export default ArtistTopTracks;
