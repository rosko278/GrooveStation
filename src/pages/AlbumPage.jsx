import React from 'react';
import CardAlbum from '../containers/CardAlbum';
import './pages.css';

function AlbumPage() {
  return (
    <div>
      <h1>Album Page</h1>
      <h2>Album les plus écoutés</h2>
      <CardAlbum />
    </div>
  );
}

export default AlbumPage;
