import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistDetails from '../containers/Artists/ArtistDetails';

function ArtistDetailsPage() {
  const id = useParams();
  return (
    <>
      <ArtistDetails id={id} />
    </>
  );
}

export default ArtistDetailsPage;
