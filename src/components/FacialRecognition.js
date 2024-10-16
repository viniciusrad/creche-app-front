import React, { useState, useEffect } from 'react';

function FacialRecognition() {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [expression, setExpression] = useState(null);
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
      await api.nets.faceExpressionNet.loadFromUri('./models');
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
        
        const container = document.querySelector('.facial-recognition');
        container.appendChild(img);

        const detections = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withAgeAndGender()
          .withFaceExpressions();

        if (detections) {
          setGender(detections.gender);
          setAge(Math.round(detections.age));
          setExpression(getTopExpression(detections.expressions));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const getTopExpression = (expressions) => {
    return Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
  };

  return (
    <div className="facial-recognition">
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
      {age && <p>Idade estimada: {age} anos</p>}
      {expression && <p>Expressão facial: {expression}</p>}
    </div>
  );
}

export default FacialRecognition;
