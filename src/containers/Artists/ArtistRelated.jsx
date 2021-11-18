import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import apiArtistsRelated from '../../api/apiArtistsRelated';
import Loading from '../../components/Loading';
import Error from '../../components/ErrorMessage';

function SingleRadioPage(/* props */) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.artistsRelated);

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(apiArtistsRelated(id));
  }, [dispatch, id]);

  if (data.isLoading) {
    return <Loading />;
  }
  if (data.error) {
    return <Error errorMsg="Impossible de charger la liste d'artistes !" />;
  }

  return (
    <Paper square elevation={5} style={{ maxWidth: '99%', margin: 'auto' }}>
      <table>
        <thead>
          <tr>
            <th>Artiste</th>
            <th>Nombre d&apos;albums</th>
            <th>Fans</th>
          </tr>
        </thead>
        <tbody>
          {data.related.map((content) => (
            <tr key={content.title}>
              <td>
                <Link
                  className="artistLink"
                  to={`/artist/${content.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <img src={content.picture_small} alt={content.name} />
                  <p>{content.name}</p>
                </Link>
              </td>
              <td>{content.nb_album}</td>
              <td>{content.nb_fan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  );
}

// SingleRadioPage.propTypes = {
//   match: PropTypes.node.isRequired,
// };

export default SingleRadioPage;
