import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PopularSongElement from '../components/PopularSongsList/PopularSongElement';
import ChartTracks from '../containers/ChartTracks';
import RssStepper from '../containers/FluxRssStepper';
import DeezerPlayer from '../components/PlayerDeezer';
import './pages.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ background: 'inherit' }}>
        <Grid item xs={12}>
          <Item sx={{ background: 'inherit' }}>
            <ChartTracks />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ background: 'inherit' }}>
            <PopularSongElement />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item sx={{ background: 'inherit' }}>
            <DeezerPlayer />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ background: 'inherit' }}>
            <RssStepper />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
