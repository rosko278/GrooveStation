import React from 'react';
import Working from '../components/onProgress/Working';
import CardArtist from '../components/CardArtist';
import './pages.css';

function ArtistsPage() {
  return (
    <div>
      <h1>Artists Page</h1>
      <Working />
      <div className="test">
        <CardArtist />
      </div>
    </div>
  );
}

export default ArtistsPage;
