import searchTrackTypes from './searchTrackTypes';

const initialStateSearchTrack = {
  isLoading: false,
  trackFound: [],
  error: '',
};

const searchTrackReducer = (state = initialStateSearchTrack, action) => {
  if (action.type === searchTrackTypes.LOAD_SEARCH_TRACK) {
    return {
      ...state,
      isLoading: true,
      trackFound: [],
      error: '',
    };
  }
  if (action.type === searchTrackTypes.LOAD_SEARCH_TRACK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      trackFound: action.payload,
      error: '',
    };
  }
  return {
    ...state,
    isLoading: false,
    trackFound: [],
    error: action.payload,
  };
};

export default searchTrackReducer;
