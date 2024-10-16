import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      dark: '#1976d2',
    },
    secondary: {
      main: '#ff9800',
      dark: '#f57c00',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
});

export const styles = {
  header: {
    appBar: {
      bgcolor: theme.palette.primary.main,
      boxShadow: 3,
    },
    title: {
      flexGrow: 1,
      color: 'white',
    },
    button: {
      color: 'white',
      '&:hover': { bgcolor: theme.palette.primary.dark },
      mx: 1,
    },
    loginButton: {
      bgcolor: theme.palette.secondary.main,
      color: 'white',
      '&:hover': { bgcolor: theme.palette.secondary.dark },
      mx: 1,
    },
  },
  container: {
    mt: 4,
    mb: 4,
  },
  paper: {
    mt: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 3,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 3,
  },
  form: {
    width: '100%',
    mt: 1,
  },
  submit: {
    mt: 3,
    mb: 2,
  },
};

