import React, { useState, useRef } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Avatar,
  IconButton,
} from '@mui/material';
import { PhotoCamera, Add, Delete, CameraAlt } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CadastroAluno = () => {
  const navigate = useNavigate();
  const [aluno, setAluno] = useState({
    nome: '',
    turma: '',
    horario: '',
    professor: '',
    imagem: '',
    observacoes: '',
    alergias: [],
    restricoesAlimentares: [],
    presenca: 0,
    alimentacao: 0,
    banho: 0,
    usoBanheiro: 0,
  });
  const [novaAlergia, setNovaAlergia] = useState('');
  const [novaRestricao, setNovaRestricao] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno({ ...aluno, [name]: value });
  };

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAluno({ ...aluno, imagem: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapturarFoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const adicionarAlergia = () => {
    if (novaAlergia && !aluno.alergias.includes(novaAlergia)) {
      setAluno({ ...aluno, alergias: [...aluno.alergias, novaAlergia] });
      setNovaAlergia('');
    }
  };

  const removerAlergia = (alergia) => {
    setAluno({ ...aluno, alergias: aluno.alergias.filter(a => a !== alergia) });
  };

  const adicionarRestricao = () => {
    if (novaRestricao && !aluno.restricoesAlimentares.includes(novaRestricao)) {
      setAluno({ ...aluno, restricoesAlimentares: [...aluno.restricoesAlimentares, novaRestricao] });
      setNovaRestricao('');
    }
  };

  const removerRestricao = (restricao) => {
    setAluno({ ...aluno, restricoesAlimentares: aluno.restricoesAlimentares.filter(r => r !== restricao) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para salvar o aluno
    console.log('Aluno cadastrado:', aluno);
    // Navegar para o perfil do aluno após o cadastro
    navigate(`/aluno-perfil/${aluno.id}`);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Cadastro de Aluno
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Nome do Aluno"
                name="nome"
                value={aluno.nome}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Turma</InputLabel>
                <Select
                  name="turma"
                  value={aluno.turma}
                  onChange={handleChange}
                  label="Turma"
                >
                  <MenuItem value="Turma A">Turma A</MenuItem>
                  <MenuItem value="Turma B">Turma B</MenuItem>
                  <MenuItem value="Turma C">Turma C</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Horário"
                name="horario"
                value={aluno.horario}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Professor"
                name="professor"
                value={aluno.professor}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Observações"
                name="observacoes"
                value={aluno.observacoes}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                <Avatar
                  src={aluno.imagem}
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <Box display="flex" flexDirection="column" width="100%" maxWidth="200px">
                  <Button
                    variant="contained"
                    component="label"
                    startIcon={<PhotoCamera />}
                    sx={{ mb: 1 }}
                  >
                    Carregar Foto
                    <input
                      ref={fileInputRef}
                      accept="image/*"
                      type="file"
                      hidden
                      onChange={handleImagemChange}
                    />
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleCapturarFoto}
                    startIcon={<CameraAlt />}
                  >
                    Tirar Foto
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nova Alergia"
                value={novaAlergia}
                onChange={(e) => setNovaAlergia(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={adicionarAlergia}>
                      <Add />
                    </IconButton>
                  ),
                }}
              />
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {aluno.alergias.map((alergia, index) => (
                  <Chip
                    key={index}
                    label={alergia}
                    onDelete={() => removerAlergia(alergia)}
                    color="error"
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nova Restrição Alimentar"
                value={novaRestricao}
                onChange={(e) => setNovaRestricao(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={adicionarRestricao}>
                      <Add />
                    </IconButton>
                  ),
                }}
              />
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {aluno.restricoesAlimentares.map((restricao, index) => (
                  <Chip
                    key={index}
                    label={restricao}
                    onDelete={() => removerRestricao(restricao)}
                    color="warning"
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar Aluno
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CadastroAluno;
