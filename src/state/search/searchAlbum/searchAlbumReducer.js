import searchAlbumTypes from './searchAlbumTypes';

const initialStateSearchAlbum = {
  isLoading: false,
  albumFound: [],
  error: '',
};

const searchAlbumReducer = (state = initialStateSearchAlbum, action) => {
  if (action.type === searchAlbumTypes.LOAD_SEARCH_ALBUM) {
    return {
      ...state,
      isLoading: true,
      albumFound: [],
      error: '',
    };
  }
  if (action.type === searchAlbumTypes.LOAD_SEARCH_ALBUM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      albumFound: action.payload,
      error: '',
    };
  }
  return {
    ...state,
    isLoading: false,
    albumFound: [],
    error: action.payload,
  };
};

export default searchAlbumReducer;
