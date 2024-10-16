import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';

function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            variant="outlined"
            sx={{ borderRadius: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined"
            sx={{ borderRadius: 2 }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar de mim"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 2 }}
          >
            Entrar
          </Button>
          <Divider sx={{ my: 2 }}>ou</Divider>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              sx={{
                bgcolor: '#DB4437',
                color: 'white',
                '&:hover': { bgcolor: '#C31C0D' },
              }}
            >
              <GoogleIcon />
            </IconButton>
            <IconButton
              sx={{
                bgcolor: '#4267B2',
                color: 'white',
                '&:hover': { bgcolor: '#365899' },
              }}
            >
              <FacebookIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;

