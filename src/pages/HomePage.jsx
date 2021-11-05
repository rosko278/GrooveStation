import React from 'react';
import PopularSongElement from '../components/PopularSongsList/PopularSongElement';
import Lecteur from '../components/Lecteur/Lecteur';
import ChartTracks from '../containers/ChartTracks';
import FluxRssMusicNews from '../containers/FluxRssMusicNews';
import './pages.css';

function HomePage() {
  return (
    <div>
      <ChartTracks />
      <h1>Homepage</h1>
      <PopularSongElement />
      <Lecteur />
      <FluxRssMusicNews />
    </div>
  );
}

export default HomePage;
