import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { apiGetSearchAlbum } from '../../api/apiSearchAlbum';
import { apiGetSearchArtist } from '../../api/apiSearchArtist';
import { apiGetSearchTrack } from '../../api/apiSearchTrack';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';
import './search-result.css';

/* import { Link } from 'react-router-dom'; */

function SearchResult(props) {
  const { search } = props;
  const dispatch = useDispatch();
  const searchAlbum = useSelector((state) => state.searchAlbum);
  const searchArtist = useSelector((state) => state.searchArtist);
  const searchTrack = useSelector((state) => state.searchTrack);

  React.useEffect(() => {
    dispatch(apiGetSearchAlbum(search));
    dispatch(apiGetSearchArtist(search));
    dispatch(apiGetSearchTrack(search));
  }, [dispatch, search]);

  if (
    searchAlbum.isLoading ||
    Object.entries(searchAlbum.albumFound).length === 0
  ) {
    return <Loading />;
  }
  if (
    searchAlbum.error ||
    Object.entries(searchAlbum.albumFound).length === 0
  ) {
    return <ErrorMessage errorMsg="Impossible de charger le résultat" />;
  }

  if (
    searchArtist.isLoading ||
    Object.entries(searchArtist.artistFound).length === 0
  ) {
    return <Loading />;
  }
  if (
    searchArtist.error ||
    Object.entries(searchArtist.artistFound).length === 0
  ) {
    return <ErrorMessage errorMsg="Impossible de charger le résultat" />;
  }

  if (
    searchTrack.isLoading ||
    Object.entries(searchTrack.trackFound).length === 0
  ) {
    return <Loading />;
  }
  if (
    searchTrack.error ||
    Object.entries(searchTrack.trackFound).length === 0
  ) {
    return <ErrorMessage errorMsg="Impossible de charger le résultat" />;
  }

  return (
    <div id="hint-container">
      <section>
        <h3>Album</h3>
        {searchAlbum.albumFound.map((album) => (
          <div className="item-result">
            <img src={album.cover_small} alt={album.id} />
            <p>{album.title}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Artiste</h3>
        {searchArtist.artistFound.map((artiste) => (
          <div className="item-result">
            <img src={artiste.picture_small} alt={artiste.id} />
            <p>{artiste.name}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Titre</h3>
        {searchTrack.trackFound.map((track) => (
          <div className="item-result">
            <img src={track.album.cover_small} alt={track.id} />
            <p>{track.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

SearchResult.propTypes = {
  search: PropTypes.node.isRequired,
};

export default SearchResult;
