import React from 'react';
import ArtistsCard from '../containers/Artists/ArtistsCard';
import './pages.css';

function ArtistsPage() {
  return (
    <div>
      <h2>Liste des artistes</h2>
      <ArtistsCard />
    </div>
  );
}

export default ArtistsPage;
