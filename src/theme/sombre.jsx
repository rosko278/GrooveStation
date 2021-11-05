import { createTheme } from '@material-ui/core/styles';
// Dark theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d76c58',
    },
    secondary: {
      main: '#5773ff',
    },
    background: {
      default: '#11151d',
      paper: '#222d41',
    },
    text: {
      primary: '#ffffff',
    },
    warning: {
      main: '#ff003d',
    },
    error: {
      main: '#7f5056',
    },
    success: {
      main: '#5773ff',
    },
    info: {
      main: '#7f5056',
    },
  },
  typography: {
    h1: {
      lineHeight: 1.19,
      fontFamily: 'Lato',
      fontSize: '2.9rem',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Lato',
      fontSize: '3.7rem',
    },
    h3: {
      fontFamily: 'Lato',
      fontSize: '2.3rem',
    },
    h4: {
      fontFamily: 'Lato',
      fontSize: '2.1rem',
    },
    button: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    fontWeightLight: 300,
    fontSize: '1.3rem',
    htmlFontSize: '1.2rem',
    h5: {
      fontSize: '1.5rem',
      fontFamily: 'Lato',
      fontWeight: 500,
      letterSpacing: '0.06em',
    },
    h6: {
      fontFamily: 'Lato',
      fontSize: '1.4rem',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 200,
    },
    subtitle2: {
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});

export default theme;
