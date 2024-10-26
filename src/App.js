import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import './App.css';
import FacialRecognition from './pages/FacialRecognition';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import { theme, styles } from './styles';
import FeedNoticias from './pages/FeedNoticias';
import ClasseDetalhes from './pages/ClasseDetalhes';
import 'bootstrap/dist/css/bootstrap.min.css';
import AcompanhamentoEntradaSaida from './pages/AcompanhamentoEntradaSaida';
import AlunoPerfil from './pages/AlunoPerfil';
import CadastroAluno from './pages/CadastroAluno';


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
            <Route path="/classe-detalhes/" element={<ClasseDetalhes />} />
            <Route path="/acompanhamento-entrada-saida" element={<AcompanhamentoEntradaSaida />} /> 
            <Route path="/aluno-perfil/:id?" element={<AlunoPerfil />} />
            <Route path="/cadastro-aluno" element={<CadastroAluno />} />
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
