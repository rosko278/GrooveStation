/**
 * Jimmy Jung - 24/10/2021
 * Chart tracks reducer function
 */

/**
 * Import chart tracks types
 */
import chartTracksTypes from './chartTracksTypes';

/**
 * state by default
 */
const initialStateChartTracks = {
  isLoading: false,
  top: [],
  error: '',
};

const chartTracksReducer = (state = initialStateChartTracks, action) => {
  if (action.type === chartTracksTypes.LOAD_CHART_TRACKS) {
    return {
      ...state,
      isLoading: true,
      top: [],
      error: '',
    };
  }
  if (action.type === chartTracksTypes.LOAD_CHART_TRACKS_SUCCESS) {
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

export default chartTracksReducer;
