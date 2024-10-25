import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Box, Paper, Grid, Avatar, List, ListItem, ListItemText, Divider } from '@mui/material';
import { styles } from '../styles';
import './ClasseDetalhes.css';
import mockAlunos from '../mocks/mockAlunos';

// Dados mockados atualizados com imagens de placeholder do Unsplash
const mockClasseDetalhes = {
  id: 1,
  nome: 'Turma A - 5º Ano',
  professorResponsavel: 'Maria Silva',
  professorId: 101,
  imagemTurma: 'https://source.unsplash.com/800x600/?classroom',
  imagemProfessor: 'https://source.unsplash.com/400x400/?teacher',
  planejamentoDia: [
    { horario: '08:00', atividade: 'Matemática', imagem: 'https://source.unsplash.com/100x100/?math' },
    { horario: '10:00', atividade: 'Português', imagem: 'https://source.unsplash.com/100x100/?book' },
    { horario: '13:00', atividade: 'Ciências', imagem: 'https://source.unsplash.com/100x100/?science' },
  ]
};

// Função para simular a chamada à API
const getClasseDetalhesMock = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({...mockClasseDetalhes, alunos: Object.values(mockAlunos)});
    }, 500); // Simula um delay de 500ms
  });
};

function ClasseDetalhes() {
  const [classe, setClasse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const carregarDetalhes = async () => {
      try {
        // Verifica se o id existe antes de fazer a chamada
        if (id) {
          const detalhes = await getClasseDetalhesMock(id);
          setClasse(detalhes);
        } else {
          // Se não houver id, carrega os dados padrão
          setClasse({...mockClasseDetalhes, alunos: Object.values(mockAlunos)});
        }
      } catch (erro) {
        console.error('Erro ao carregar detalhes da classe:', erro);
      }
    };

    carregarDetalhes();
  }, [id]);

  if (!classe) {
    return (
      <Container maxWidth="md">
        <Typography variant="h6" sx={{ mt: 4, textAlign: 'center' }}>Carregando...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={styles.container}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            src={classe.imagemTurma}
            alt={`Turma ${classe.nome}`}
            sx={{ width: 100, height: 100, mr: 3 }}
          />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {classe.nome}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                Professor Responsável: {classe.professorResponsavel}
              </Typography>
              <Avatar
                src={classe.imagemProfessor}
                alt={classe.professorResponsavel}
                sx={{ width: 40, height: 40 }}
              />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Alunos</Typography>
            <List>
              {classe.alunos.map((aluno) => (
                <ListItem 
                  key={aluno.id} 
                  button 
                  component={Link} 
                  to={`/aluno-perfil/${aluno.id}`}
                  state={{ aluno: aluno }}
                >
                  <Avatar src={aluno.imagem} alt={aluno.nome} sx={{ mr: 2 }} />
                  <ListItemText primary={aluno.nome} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Planejamento do Dia</Typography>
            <List>
              {classe.planejamentoDia.map((atividade, index) => (
                <ListItem key={index}>
                  <Avatar src={atividade.imagem} alt={atividade.atividade} sx={{ mr: 2 }} />
                  <ListItemText 
                    primary={atividade.atividade}
                    secondary={atividade.horario}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default ClasseDetalhes;
