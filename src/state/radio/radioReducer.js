import radioTypes from './radioTypes';

const initialStateRadio = {
  isLoading: false,
  top: [],
  error: '',
};

const radioReducer = (state = initialStateRadio, action) => {
  if (action.type === radioTypes.LOAD_RADIO) {
    return {
      ...state,
      isLoading: true,
      top: [],
      error: '',
    };
  }
  if (action.type === radioTypes.LOAD_RADIO_SUCCESS) {
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

export default radioReducer;
