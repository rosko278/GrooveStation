import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { apiGetSingleRadio } from '../api/apiSingleRadio';
import Loading from '../components/Loading';
import Error from '../components/Error';

function SingleRadioPage(props) {
  const dispatch = useDispatch();
  const singleRadio = useSelector((state) => state.singleRadio);

  const { match } = props;

  React.useEffect(() => {
    dispatch(apiGetSingleRadio(match.params.id));
  }, [dispatch]);

  if (singleRadio.isLoading) {
    return <Loading />;
  }
  if (singleRadio.error) {
    return <Error errorMsg="Impossible de charger la radio' !" />;
  }

  return (
    <div>
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
          {singleRadio.station.data.map((content, index) => (
            <tr key={content.title}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={content.album.cover_small}
                  alt={content.title_short}
                />
              </td>
              <td>
                <p>{content.title}</p>
              </td>
              <td>{content.artist.name}</td>
              <td>
                {Math.floor(content.duration / 60)}min
                {content.duration % 60}
              </td>
              <td>{content.preview}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

SingleRadioPage.propTypes = {
  match: PropTypes.node.isRequired,
};

export default SingleRadioPage;
