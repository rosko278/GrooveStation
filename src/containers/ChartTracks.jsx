import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
        <Box sx={{ background: 'inherit', maxWidth: '80%' }} key={step.id}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Paper
              square
              elevation={5}
              component="img"
              sx={{
                height: 300,
                overflow: 'hidden',
                minWidth: 250,
                width: '70%',
              }}
              src={step.album.cover_xl}
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
          backgroundColor: 'inherit',
          marginTop: 1,
        }}
      >
        <MobileStepper
          sx={{
            background: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            height: 290,
            width: '5%',
            minWidth: '40px',
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              sx={{ color: '#607d8b' }}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={{ color: '#607d8b' }}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </Button>
          }
        />
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x' : 'x-reverse'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {displayedImage}
        </AutoPlaySwipeableViews>
        <Paper
          square
          elevation={5}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 300,
            p: 4,
            background: 'inherit',
            color: 'inherit',
            width: '35%',
            minWidth: 120,
            textAlign: 'left',
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
