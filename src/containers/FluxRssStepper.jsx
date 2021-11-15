import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import { Paper } from '@material-ui/core';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useSelector, useDispatch } from 'react-redux';
import apiGetRss from '../api/apiFluxRSS';

export default function RssStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleRoute = (url) => {
    window.location.href = url;
  };
  const dispatch = useDispatch();
  const fluxRss = useSelector((state) => state.fluxRss);

  React.useEffect(() => {
    dispatch(apiGetRss());
  }, [dispatch]);

  if (fluxRss.isLoading || fluxRss.news.length === 0) {
    return <div>Loading</div>;
  }
  if (fluxRss.error || fluxRss.news.length === 0) {
    return <div>Erreur</div>;
  }

  let maxSteps = null;

  if (fluxRss.news.length >= 10) {
    maxSteps = 10;
  } else {
    maxSteps = fluxRss.news.length;
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 90,
          p: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography variant="h6">
          {fluxRss.news[activeStep].title[0]}
        </Typography>
      </Paper>
      <Divider sx={{ height: 5 }} />
      <Paper
        square
        elevation={1}
        style={{
          height: 210,
          maxWidth: 400,
          width: '100%',
          p: 2,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {fluxRss.news[activeStep].description[0]}
        <Button
          size="big"
          onClick={() => handleRoute(fluxRss.news[activeStep].link[0])}
        >
          Learn More
        </Button>
      </Paper>

      <MobileStepper
        variant="text"
        sx={{ background: 'inherit' }}
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
