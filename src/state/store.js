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
import chartPlaylistReducer from './chartPlaylist/chartPlaylistReducer';
import rssReducer from './fluxRSSmusicNews/rssReducer';
/**
 * Creates root reducer which contains all reducers
 */
const rootReducer = combineReducers({
  chartTracks: chartTracksReducer,
  chartAlbum: chartAlbumReducer,
  singleAlbum: singleAlbumReducer,
  chartPlaylist: chartPlaylistReducer,
  fluxRss: rssReducer,
});

/**
 * Create store with middleware for api used
 */
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
