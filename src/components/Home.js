import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';

function Home() {
  const navigate = useNavigate();

  const cards = [
    { icon: <HomeIcon fontSize="large" />, label: 'Início', path: '/' },
    { icon: <FaceIcon fontSize="large" />, label: 'Reconhecimento Facial', path: '/reconhecimento-facial' },
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
