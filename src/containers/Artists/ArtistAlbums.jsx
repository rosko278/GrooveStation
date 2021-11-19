import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// Redux
import apiGetAlbums from '../../api/apiArtistAlbums';

// alerts
import Loading from '../../components/Loading';
import Error from '../../components/ErrorMessage';
import convertDate from '../../core/functions/convertDate';
import convertNbFans from '../../core/functions/convertNbFans';

function ArtistTopTracks() {
  const artist = useSelector((state) => state.artistAlbums);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(apiGetAlbums(id));
  }, [dispatch]);

  if (artist.isLoading) {
    return <Loading />;
  }

  if (artist.error) {
    return (
      <Error errorMsg="Impossible de charger la liste d'albums de l'artiste" />
    );
  }

  return (
    <Paper square elevation={5} style={{ maxWidth: '99%', margin: 'auto' }}>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th className="row-center">Date de sortie</th>
            <th className="row-center">Fans</th>
          </tr>
        </thead>
        <tbody>
          {artist.albums.map((content) => (
            <tr key={content.title}>
              <td>
                <Link
                  className="artistLink"
                  to={`/album/${content.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <img src={content.cover_small} alt={content.title} />
                  <p>{content.title}</p>
                </Link>
              </td>
              <td className="row-center">
                {convertDate(content.release_date)}
              </td>
              <td className="row-center">{convertNbFans(content.fans)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  );
}

export default ArtistTopTracks;
