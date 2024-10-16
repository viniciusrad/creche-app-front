import React from 'react';
import './App.css';
import FacialRecognition from './components/FacialRecognition';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Creche App</h1>
        <p>Protótipo de Reconhecimento Facial</p>
        <FacialRecognition />
      </header>

      <Login />

    </div>
  );
}

export default App;
