import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import './App.css';
import FacialRecognition from './components/FacialRecognition';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import { theme, styles } from './styles';
import FeedNoticias from './components/FeedNoticias';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="md">
        <Box sx={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reconhecimento-facial" element={<FacialRecognition />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<FeedNoticias />} />
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
