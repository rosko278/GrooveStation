import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/system';
import AppBar from './components/AppBar';
import PopularSongElement from './components/PopularSongsList/PopularSongElement';
import Lecteur from './components/Lecteur/Lecteur';
import ChartTracks from './containers/ChartTracks';

export default function App() {
  return (
    <div>
      <Router>
        <AppBar />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '80vw',
            padding: '2rem',
          }}
        >
          <PopularSongElement />
          <Lecteur />
          <ChartTracks />
        </Box>
      </Router>
    </div>
  );
}
