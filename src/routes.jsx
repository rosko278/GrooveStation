import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ArtistsPage from './pages/ArtistPage';
import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';
import GenderPage from './pages/GenderPage';
import LibraryPage from './pages/LibraryPage';
import SingleAlbumPage from './pages/SingleAlbumPage/SingleAlbumPage';
import SingleRadioPage from './pages/SingleRadioPage';
import ArtistDetailsPage from './pages/ArtistDetailsPage';
import TrackPage from './pages/TrackPage';

export default function Routage() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/artist" component={ArtistsPage} />
        <Route exact path="/album" component={AlbumPage} />
        <Route exact path="/gender" component={GenderPage} />
        <Route exact path="/library" component={LibraryPage} />
        <Route exact path="/album/:id" component={SingleAlbumPage} />
        <Route exact path="/library/:id" component={SingleRadioPage} />
        <Route exact path="/artist/:id" component={ArtistDetailsPage} />
        <Route exact path="/track/:id" component={TrackPage} />
      </Switch>
    </>
  );
}
