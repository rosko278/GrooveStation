import chartAlbumTypes from './chartAlbumTypes';

const initialStateChartAlbum = {
  isLoading: false,
  top: [],
  error: '',
};

const chartAlbumReducer = (state = initialStateChartAlbum, action) => {
  if (action.type === chartAlbumTypes.LOAD_CHART_ALBUM) {
    return {
      ...state,
      isLoading: true,
      top: [],
      error: '',
    };
  }
  if (action.type === chartAlbumTypes.LOAD_CHART_ALBUM_SUCCESS) {
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

export default chartAlbumReducer;
