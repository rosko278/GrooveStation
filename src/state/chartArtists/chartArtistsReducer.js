/**
 * Jimmy Jung - 07/11/2021
 * Chart artists reducer function
 */

/**
 * Import chart tracks types
 */
import chartArtistsTypes from './chartArtistsTypes';

/**
 * state by default
 */
const initialStateChartTracks = {
  isLoading: false,
  top: [],
  error: '',
};

const chartArtistsReducer = (state = initialStateChartTracks, action) => {
  if (action.type === chartArtistsTypes.LOAD_CHART_ARTISTS) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === chartArtistsTypes.LOAD_CHART_ARTISTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      top: action.payload,
    };
  }
  if (action.type === chartArtistsTypes.LOAD_CHART_ARTISTS_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default chartArtistsReducer;
