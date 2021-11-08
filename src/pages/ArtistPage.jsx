import { Typography } from '@mui/material';
import React from 'react';
import ArtistsCard from '../containers/Artists/ArtistsCard';

function ArtistsPage() {
  return (
    <div>
      <Typography variant="h2">Liste des artistes</Typography>
      <ArtistsCard />
    </div>
  );
}

export default ArtistsPage;
