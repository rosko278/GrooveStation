import React from 'react';
import CardRadio from '../containers/CardRadio';
import './pages.css';

function LibraryPage() {
  return (
    <div>
      <h1>Library Page</h1>
      <h2>Playlist les plus écoutées</h2>
      <CardRadio />
    </div>
  );
}

export default LibraryPage;
