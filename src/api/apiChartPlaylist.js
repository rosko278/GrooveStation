import {
  chartPlaylistLoading,
  chartPlaylistSuccess,
  chartPlaylistError,
} from '../state/chartPlaylist/chartPlaylistActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetChartPlaylist = () => {
  return (dispatch) => {
    dispatch(chartPlaylistLoading());
    axiosApiMusic
      .get('/chart?index=0&limit=10')
      .then((res) => {
        dispatch(chartPlaylistSuccess(res.data.playlists.data));
        return res;
      })
      .catch((error) => dispatch(chartPlaylistError(error)));
  };
};

export default apiGetChartPlaylist;
