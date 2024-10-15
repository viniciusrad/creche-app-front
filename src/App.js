import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Creche App</h1>

        {window.innerWidth <= 768 && (
          <div>
            <input
              type="file"
              accept="image/*"
              capture="camera"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.style.maxWidth = '100%';
                    img.style.marginTop = '20px';
                    document.querySelector('.App-header').appendChild(img);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <p>Tire uma foto com seu celular</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
