import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F4BD30',
    },
    secondary: {
      main: '#4FBFF4',
    },
    error: {
      main: "#EB2345",
    },
    warning: {
      main: "#F46A01",
    },
    info: {
      main: "#013CE0",
    },
    success: {
      main: "#85D642",
    },
    background: {
      default: '#E2E2E2',
      paper: '#F3F3F3',
    },
  },
});

export default lightTheme;
