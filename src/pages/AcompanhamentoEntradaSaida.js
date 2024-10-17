import React from 'react';
// import { Button } from '@material-ui/core';

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
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const AcompanhamentoEntradaSaida = () => {

    const [mostrarLocalizacao, setMostrarLocalizacao] = React.useState(false);
  const [localizacao, setLocalizacao] = React.useState(null);

  const obterLocalizacao = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (posicao) => {
          const novaLocalizacao = {
            lat: posicao.coords.latitude,
            lng: posicao.coords.longitude
          };
          setLocalizacao(novaLocalizacao);
          setMostrarLocalizacao(true);
          console.log('Localização obtida:', novaLocalizacao);
        },
        (erro) => {
          console.error('Erro ao obter localização:', erro);
          alert('Não foi possível obter sua localização. Por favor, verifique as permissões do navegador.');
        }
      );
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.');
    }
  };
  const confirmarChegada = () => {
    // Lógica para confirmar a chegada
    console.log('Chegada confirmada');
  };

  const informarAtraso = () => {
    // Lógica para informar atraso
    console.log('Atraso informado');
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: -23.550520,
    lng: -46.633309
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Acompanhamento de Entrada/Saída</h1>

      <Box sx={{ width: '100%', height: '400px', overflow: 'hidden', borderRadius: '8px', marginBottom: '16px', border: '1px solid #999' }}>
        <img 
          src="https://source.unsplash.com/800x400/?jacarepagua,map" 
          alt="Mapa de Jacarepaguá" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
{/*       
      <LoadScript googleMapsApiKey="SUA_CHAVE_API_AQUI">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        />
      </LoadScript> */}
      
      <div style={styles.buttonContainer}>
        <Button variant="contained" color="primary" onClick={confirmarChegada} style={styles.button}>
          Confirmar Chegada
        </Button>
        <Button variant="outlined" color="primary" onClick={informarAtraso} style={styles.button}>
          Vou me Atrasar
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => obterLocalizacao()} style={styles.button}>
          Compartilhar Minha Localização
        </Button>
      </div>

      {localizacao && (
        <Typography variant="body1" style={styles.coordenadas}>
          Latitude: {localizacao.lat.toFixed(6)}, Longitude: {localizacao.lng.toFixed(6)}
        </Typography>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
  },
  coordenadas: {
    marginTop: '16px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export default AcompanhamentoEntradaSaida;
