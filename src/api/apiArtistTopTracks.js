import {
  artistTopTracksLoading,
  artistTopTracksSuccess,
  artistTopTracksError,
} from '../state/artistTopTracks/artistTopTracksActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetArtistTopTracks = (id) => {
  return (dispatch) => {
    dispatch(artistTopTracksLoading());
    axiosApiMusic
      .get(`/artist/${id}/top`)
      .then((res) => {
        dispatch(artistTopTracksSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(artistTopTracksError(error)));
  };
};

export default apiGetArtistTopTracks;
