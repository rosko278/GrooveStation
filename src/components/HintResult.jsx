import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiGetSearchAlbum } from '../api/apiSearchAlbum';
import { apiGetSearchArtist } from '../api/apiSearchArtist';
import { apiGetSearchTrack } from '../api/apiSearchTrack';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

/* import { Link } from 'react-router-dom'; */

function HintResults() {
  const dispatch = useDispatch();
  const searchAlbum = useSelector((state) => state.searchAlbum);
  const searchArtist = useSelector((state) => state.searchArtist);
  const searchTrack = useSelector((state) => state.searchTrack);

  React.useEffect(() => {
    dispatch(apiGetSearchAlbum());
  }, [dispatch]);
  console.log(searchAlbum);

  React.useEffect(() => {
    dispatch(apiGetSearchArtist());
  }, [dispatch]);
  console.log(searchArtist);

  React.useEffect(() => {
    dispatch(apiGetSearchTrack());
  }, [dispatch]);
  console.log(searchTrack);

  if (searchAlbum.isLoading) {
    return <Loading />;
  }
  if (searchAlbum.error) {
    return <ErrorMessage errorMsg="Impossible de charger le résultat" />;
  }

  /* if (searchArtist.isLoading) {
    return <Loading />;
  }
  if (searchArtist.error) {
    return <ErrorMessage errorMsg="Impossible de charger le résultat" />;
  }

  if (searchTrack.isLoading) {
    return <Loading />;
  }
  if (searchTrack.error) {
    return <ErrorMessage errorMsg="Impossible de charger le résultat" />;
  } */

  return (
    <div id="hint-container">
      TEST
      {/* {searchAlbum.albumFound.map((album) => (
        <div className="item-result">
          <img src={album.cover_small} alt={album.id} />
          <p>{album.title}</p>
        </div>
      ))} */}
      {/*  {searchAlbum.albumFound.map((album) => (
        <div className="item-result">
          <img src={album.cover_small} alt={album.id} />
          <p>{album.title}</p>
        </div>
      ))}
      {searchTrack.trackFound.map((track) => (
        <div className="item-result">
          <img src={track.album.cover_small} alt={track.id} />
          <p>{track.title}</p>
        </div>
      ))} */}
    </div>
  );
}

export default HintResults;
