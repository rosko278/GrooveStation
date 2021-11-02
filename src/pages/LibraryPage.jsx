import React from 'react';
import CardPlaylist from '../containers/CardPlaylist';

import './pages.css';

function LibraryPage() {
  return (
    <div>
      <h1>Library Page</h1>
      <h2>Playlist les plus écoutées</h2>
      <CardPlaylist />
    </div>
  );
}

export default LibraryPage;
