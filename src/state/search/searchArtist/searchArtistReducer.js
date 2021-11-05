import searchArtistTypes from './searchArtistTypes';

const initialStateSearchArtist = {
  isLoading: false,
  artistFound: [],
  error: '',
};

const searchArtistReducer = (state = initialStateSearchArtist, action) => {
  if (action.type === searchArtistTypes.LOAD_SEARCH_ARTIST) {
    return {
      ...state,
      isLoading: true,
      artistFound: [],
      error: '',
    };
  }
  if (action.type === searchArtistTypes.LOAD_SEARCH_ARTIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      artistFound: action.payload,
      error: '',
    };
  }
  return {
    ...state,
    isLoading: false,
    artistFound: [],
    error: action.payload,
  };
};

export default searchArtistReducer;
