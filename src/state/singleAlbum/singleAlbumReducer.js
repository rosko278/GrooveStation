import singleAlbumTypes from './singleAlbumTypes';

const initialStateSingleAlbum = {
  isLoading: false,
  album: [],
  error: '',
};

const singleAlbumReducer = (state = initialStateSingleAlbum, action) => {
  if (action.type === singleAlbumTypes.LOAD_SINGLE_ALBUM) {
    return {
      ...state,
      isLoading: true,
      album: [],
      error: '',
    };
  }
  if (action.type === singleAlbumTypes.LOAD_SINGLE_ALBUM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      album: action.payload,
      error: '',
    };
  }
  return {
    ...state,
    isLoading: false,
    album: [],
    error: action.payload,
  };
};

export default singleAlbumReducer;
