import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Container,
    Card,
    CardContent,
    Typography,
    Avatar,
    Grid,
    Box,
    Chip,
    LinearProgress
} from '@mui/material';
import {
    Warning as WarningIcon,
    Restaurant as RestaurantIcon,
    Bathtub as BathtubIcon,
    Wc as WcIcon
} from '@mui/icons-material';
import mockAlunos from '../mocks/mockAlunos';


const AlunoPerfil = () => {
    const { id } = useParams();
    const [aluno, setAluno] = useState(null);

    useEffect(() => {
        const alunoId = id ? parseInt(id) : 1;
        const alunoEncontrado = mockAlunos[alunoId - 1];

        console.log('ID do aluno:', alunoId);
        console.log('Aluno encontrado:', alunoEncontrado);

        setAluno(alunoEncontrado || {
            id: alunoId,
            nome: "Aluno não encontrado",
            turma: "N/A",
            horario: "N/A",
            professor: "N/A",
            imagem: "https://source.unsplash.com/300x300/?student",
            observacoes: "Informações não disponíveis.",
            alergias: [],
            restricoesAlimentares: [],
            presenca: 0,
            alimentacao: 0,
            banho: 0,
            usoBanheiro: 0
        });
    }, [id]);

    if (!aluno) {
        return <Typography>Carregando...</Typography>;
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Grid container spacing={3}>
                {/* Card principal */}
                <Grid item xs={12}>
                    <Card elevation={3}>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <Avatar
                                        src={aluno.imagem}
                                        sx={{ width: 100, height: 100 }}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" component="h1" gutterBottom>
                                        {aluno.nome}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        Turma: {aluno.turma}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        Horário: {aluno.horario}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        Professor(a): {aluno.professor}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Card de observações e alergias */}
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Observações Gerais
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {aluno.observacoes}
                            </Typography>
                            <Box mt={2}>
                                <Typography variant="subtitle1" gutterBottom>
                                    <WarningIcon color="error" sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    Alergias e Restrições Alimentares
                                </Typography>
                                {aluno.alergias.map((alergia, index) => (
                                    <Chip
                                        key={index}
                                        label={alergia}
                                        color="error"
                                        size="small"
                                        sx={{ mr: 1, mb: 1 }}
                                    />
                                ))}
                                {aluno.restricoesAlimentares.map((restricao, index) => (
                                    <Chip
                                        key={index}
                                        label={restricao}
                                        color="warning"
                                        size="small"
                                        sx={{ mr: 1, mb: 1 }}
                                    />
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Card de métricas */}
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Métricas
                            </Typography>
                            <Box mb={2}>
                                <Typography variant="body2" gutterBottom>
                                    Presença
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={aluno.presenca}
                                    sx={{ height: 10, borderRadius: 5 }}
                                />
                                <Typography variant="body2" align="right">
                                    {aluno.presenca}%
                                </Typography>
                            </Box>
                            <Box mb={2}>
                                <Typography variant="body2" gutterBottom>
                                    <RestaurantIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    Alimentação
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={aluno.alimentacao}
                                    sx={{ height: 10, borderRadius: 5 }}
                                />
                                <Typography variant="body2" align="right">
                                    {aluno.alimentacao}%
                                </Typography>
                            </Box>
                            <Box mb={2}>
                                <Typography variant="body2" gutterBottom>
                                    <BathtubIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    Banho
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={aluno.banho}
                                    sx={{ height: 10, borderRadius: 5 }}
                                />
                                <Typography variant="body2" align="right">
                                    {aluno.banho}%
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" gutterBottom>
                                    <WcIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    Uso do Banheiro
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={aluno.usoBanheiro}
                                    sx={{ height: 10, borderRadius: 5 }}
                                />
                                <Typography variant="body2" align="right">
                                    {aluno.usoBanheiro}%
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AlunoPerfil;
