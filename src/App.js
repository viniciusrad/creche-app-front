import React, { useState, useEffect } from 'react';
import * as faceapi from 'face-api.js';
import './App.css';

function App() {
  const [gender, setGender] = useState(null);

  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
    await faceapi.nets.ageGenderNet.loadFromUri('/models');
  };

  const handleImageUpload = async (e) => {
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
              capture="camera"
              onChange={handleImageUpload}
            />
            <p>Tire uma foto com seu celular/</p>
            {gender && <p>Gênero detectado: {gender}</p>}
          </div>
      </header>
    </div>
  );
}

export default App;
