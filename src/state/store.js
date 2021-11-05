/**
 * Jimmy Jung - 24/10/2021
 * Redux store
 */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * Imports reducers here
 */
import chartTracksReducer from './chartTracks/chartTracksReducer';
import chartAlbumReducer from './chartAlbum/chartAlbumReducer';
import singleAlbumReducer from './singleAlbum/singleAlbumReducer';
import radioReducer from './radio/radioReducer';
import singleRadioReducer from './singleRadio/singleRadioReducer';
import rssReducer from './fluxRSSmusicNews/rssReducer';
import genderReducer from './gender/genderReducer';
import searchAlbumReducer from './search/searchAlbum/searchAlbumReducer';
import searchArtistReducer from './search/searchArtist/searchArtistReducer';
import searchTrackReducer from './search/searchTrack/searchTrackReducer';
/**
 * Creates root reducer which contains all reducers
 */
const rootReducer = combineReducers({
  chartTracks: chartTracksReducer,
  chartAlbum: chartAlbumReducer,
  singleAlbum: singleAlbumReducer,
  radio: radioReducer,
  singleRadio: singleRadioReducer,
  fluxRss: rssReducer,
  gender: genderReducer,
  searchArtist: searchAlbumReducer,
  searchAlbum: searchArtistReducer,
  searchTrack: searchTrackReducer,
});

/**
 * Create store with middleware for api used
 */
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;