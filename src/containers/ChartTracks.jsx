import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
        <Typography>{`${chartTracks.top[activeStep].artist.name} - ${chartTracks.top[activeStep].title}`}</Typography>
      );

      displayedImage = chartTracks.top.slice(0, maxSteps).map((step, index) => (
        <div key={step.id}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Box
              component="img"
              sx={{
                height: 255,
                display: 'block',
                maxWidth: 400,
                overflow: 'hidden',
                width: '100%',
              }}
              src={step.album.cover_big}
              alt={step.title}
            />
          ) : null}
        </div>
      ));
    }
    display = (
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          {displayedTracks}
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {displayedImage}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    );
  }

  return <>{display}</>;
}

export default ChartTracks;
