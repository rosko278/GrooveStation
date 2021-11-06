import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Paper } from '@material-ui/core';
import { apiGetSingleRadio } from '../api/apiSingleRadio';
import PlayButton from '../components/PlayButton';
import convertDuration from '../core/functions/convertDuration';
import Loading from '../components/Loading';
import Error from '../components/ErrorMessage';

function SingleRadioPage(props) {
  const dispatch = useDispatch();
  const singleRadio = useSelector((state) => state.singleRadio);

  const { match } = props;

  React.useEffect(() => {
    dispatch(apiGetSingleRadio(match.params.id));
  }, [dispatch]);

  if (
    singleRadio.isLoading ||
    Object.entries(singleRadio.station).length === 0
  ) {
    return <Loading />;
  }
  if (singleRadio.error || Object.entries(singleRadio.station).length === 0) {
    return <Error errorMsg="Impossible de charger la radio' !" />;
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
  );
}

SingleRadioPage.propTypes = {
  match: PropTypes.node.isRequired,
};

export default SingleRadioPage;
