import React, { useState, useEffect, useRef } from 'react';

function FacialRecognition() {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [expression, setExpression] = useState(null);
  const [faceapi, setFaceapi] = useState(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

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

  const handleCapture = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = async (e) => {
    if (!faceapi || !modelsLoaded) return;

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        setImageSrc(event.target.result);
        
        const img = await faceapi.fetchImage(event.target.result);
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
        capture="environment"
        onChange={handleImageUpload}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button onClick={handleCapture} disabled={!modelsLoaded}>
        Tirar Foto
      </button>
      {!modelsLoaded && <p>Carregando modelos... Por favor, aguarde.</p>}
      {imageSrc && <img src={imageSrc} alt="Foto capturada" style={{ maxWidth: '100%', marginTop: '20px' }} />}
      {gender && <p>Gênero detectado: {gender}</p>}
      {age && <p>Idade estimada: {age} anos</p>}
      {expression && <p>Expressão facial: {expression}</p>}
    </div>
  );
}

export default FacialRecognition;
