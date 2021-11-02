import chartPlaylistTypes from './chartPlaylistTypes';

const initialStateChartPlaylist = {
  isLoading: false,
  top: [],
  error: '',
};

const chartPlaylistReducer = (state = initialStateChartPlaylist, action) => {
  if (action.type === chartPlaylistTypes.LOAD_CHART_PLAYLIST) {
    return {
      ...state,
      isLoading: true,
      top: [],
      error: '',
    };
  }
  if (action.type === chartPlaylistTypes.LOAD_CHART_PLAYLIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      top: action.payload,
      error: '',
    };
  }
  return {
    ...state,
    isLoading: false,
    top: [],
    error: action.payload,
  };
};

export default chartPlaylistReducer;
