import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={styles.header.appBar}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={styles.header.title}>
          Meu App
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/">Início</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/reconhecimento-facial">Reconhecimento Facial</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/login">Sair</MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            <Button 
              sx={styles.header.button}
              component={Link} 
              to="/"
            >
              Início
            </Button>
            <Button 
              sx={styles.header.button}
              component={Link} 
              to="/reconhecimento-facial"
            >
              Reconhecimento Facial
            </Button>
            <Button 
              variant="contained"
              sx={styles.header.loginButton}
              component={Link} 
              to="/login"
            >
              Login
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
