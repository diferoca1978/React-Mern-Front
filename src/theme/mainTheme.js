import { createTheme } from '@mui/material';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#f2f2f2',
      light: '#d9d9d9',
      dark: '#0d0d0d',
    },
    secondary: {
      main: '#1d75aa',
      light: '#2a96da',
      dark: '#02324a',
    },
    warning: {
      main: '#ffbd1a',
      light: '#ffcc4b',
      dark: '#b37f00',
    },
    info: {
      main: '#fb8500',
      light: '#ffab4c',
      dark: '#b35300',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
    },
  },
});
