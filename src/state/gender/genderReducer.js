/**
 * Jimmy Jung - 24/10/2021
 * Chart tracks reducer function
 */

/**
 * Import chart tracks types
 */
import genderTypes from './genderTypes';

/**
 * state by default
 */
const initialStateGender = {
  isLoading: false,
  gender: [],
  error: '',
};

const genderReducer = (state = initialStateGender, action) => {
  if (action.type === genderTypes.LOAD_GENDER) {
    return {
      ...state,
      isLoading: true,
      gender: [],
      error: '',
    };
  }
  if (action.type === genderTypes.LOAD_GENDER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      gender: action.payload,
      error: '',
    };
  }
  return {
    ...state,
    isLoading: false,
    gender: [],
    error: action.payload,
  };
};

export default genderReducer;
