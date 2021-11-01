import React from 'react';
import Working from '../onProgress/Working';
import CardAlbum from '../components/CardAlbum';
import './pages.css';

function AlbumPage() {
  return (
    <div>
      <h1>Album Page</h1>
      <Working />
      <div className="test">
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
      </div>
    </div>
  );
}

export default AlbumPage;
