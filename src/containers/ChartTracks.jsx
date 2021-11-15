import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Paper } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
/**
 * Jimmy Jung 24/10/2021
 * Redux added to Mui Component
 */
import { useSelector, useDispatch } from 'react-redux';
import { apiGetChartTracks } from '../api/apiChartTracks';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function ChartTracks() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  /**
   * Jimmy Jung 24/10/2021
   * Redux added to Mui Component
   */
  const dispatch = useDispatch();
  const chartTracks = useSelector((state) => state.chartTracks);

  React.useEffect(() => {
    dispatch(apiGetChartTracks());
  }, [dispatch]);

  let maxSteps = 0;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  let displayedTracks = null;
  let displayedImage = null;
  let display = null;

  if (chartTracks.isLoading) {
    displayedTracks = <Typography>Loading...</Typography>;
  } else if (chartTracks.error) {
    displayedTracks = <Typography>Error</Typography>;
  } else {
    if (chartTracks.top.length > 3) {
      maxSteps = 3;
    } else {
      maxSteps = chartTracks.top.length;
    }

    if (maxSteps !== 0) {
      displayedTracks = (
        <Typography
          sx={{
            fontSize: '3vw',
            fontStyle: 'inherit',
            lineHeight: 1.5,
          }}
        >
          <strong>{chartTracks.top[activeStep].artist.name}</strong> <br />
          {chartTracks.top[activeStep].title}
        </Typography>
      );

      displayedImage = chartTracks.top.slice(0, maxSteps).map((step, index) => (
        <Box sx={{ maxWidth: 600 }} key={step.id}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Paper
              square
              elevation={5}
              component="img"
              sx={{
                height: 300,
                overflow: 'hidden',
                minWidth: 250,
              }}
              src={step.album.cover_medium}
              alt={step.title}
            />
          ) : null}
        </Box>
      ));
    }
    display = (
      <Box
        sx={{
          width: '100%',
          minWidth: 300,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row',
          background: 'primary',
          marginTop: 1,
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x' : 'x-reverse'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {displayedImage}
        </AutoPlaySwipeableViews>
        <Paper
          elevation={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            p: 10,
            width: 600,
            minWidth: 120,
            borderRadius: 18,
          }}
        >
          {displayedTracks}
        </Paper>
      </Box>
    );
  }

  return <>{display}</>;
}

export default ChartTracks;
