import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AlunoPerfilIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
function Home() {
  const navigate = useNavigate();

  const cards = [
    // { icon: <HomeIcon fontSize="large" />, label: 'Início', path: '/' },
    { icon: <FaceIcon fontSize="large" />, label: 'Reconhecimento Facial', path: '/reconhecimento-facial' },
    { icon: <FeedIcon fontSize="large" />, label: 'Feed de notícias', path: '/feed' },
    { icon: <GroupIcon fontSize="large" />, label: 'Turmas', path: '/classe-detalhes' },
    { icon: <DirectionsBusIcon fontSize="large" />, label: 'Acompanhamento de Entrada/Saída', path: '/acompanhamento-entrada-saida' }, 
    { icon: <FaceIcon fontSize="large" />, label: 'Perfil do Aluno', path: '/aluno-perfil' },
    { icon: <PersonAddIcon fontSize="large" />, label: 'Cadastro de Aluno', path: '/cadastro-aluno' },
    
    { icon: null, label: 'Em breve', path: null },
    { icon: null, label: 'Em breve', path: null },
    { icon: null, label: 'Em breve', path: null },
    { icon: null, label: 'Em breve', path: null },
  ];

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Bem-vindo à página inicial
      </Typography>
      <Grid container spacing={3}>
        {cards.map((item, index) => (
          <Grid item xs={6} sm={6} md={6} key={index}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 120,
                cursor: item.path ? 'pointer' : 'default',
                '&:hover': item.path ? { bgcolor: 'action.hover' } : {},
              }}
              onClick={() => handleCardClick(item.path)}
            >
              {item.icon || (
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: 'grey.300',
                    borderRadius: '50%',
                  }}
                />
              )}
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                {item.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
