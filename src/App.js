import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [gender, setGender] = useState(null);
  const [faceapi, setFaceapi] = useState(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    import('face-api.js').then((api) => {
      setFaceapi(api);
      loadModels(api);
    });
  }, []);

  const loadModels = async (api) => {
    try {
      await api.nets.tinyFaceDetector.loadFromUri('./models');
      await api.nets.faceLandmark68Net.loadFromUri('./models');
      await api.nets.faceRecognitionNet.loadFromUri('./models');
      await api.nets.ageGenderNet.loadFromUri('./models');
      console.log('Modelos carregados com sucesso');
      setModelsLoaded(true);
    } catch (error) {
      console.log('Erro ao carregar os modelos:', error);
    }
  };

  const handleImageUpload = async (e) => {
    if (!faceapi || !modelsLoaded) return;

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.style.maxWidth = '100%';
        img.style.marginTop = '20px';
        
        const container = document.querySelector('.App-header');
        container.appendChild(img);

        // Realizar detecção facial e classificação de gênero
        const detections = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withAgeAndGender();

        if (detections) {
          setGender(detections.gender);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Creche App</h1>

        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={!modelsLoaded}
          />
          {!modelsLoaded ? (
            <p>Carregando modelos... Por favor, aguarde.</p>
          ) : (
            <p>Tire uma foto com seu celular ou faça upload de uma imagem do seu computador</p>
          )}
          {gender && <p>Gênero detectado: {gender}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
