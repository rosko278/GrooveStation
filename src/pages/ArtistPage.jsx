import { Typography } from '@mui/material';
import React from 'react';
import ArtistsCard from '../containers/Artists/ArtistsCard';

function ArtistsPage() {
  return (
    <div>
      <Typography variant="h1">Artists</Typography>
      <ArtistsCard />
    </div>
  );
}

export default ArtistsPage;
