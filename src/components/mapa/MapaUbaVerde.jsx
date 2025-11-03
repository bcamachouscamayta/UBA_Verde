// src/App.js
import React from 'react';
import MapaUbaVerde from './components/mapa/MapaUBAVerde'; // ASEGÚRATE DE QUE ESTA RUTA SEA CORRECTA

function App() {
  return (
    <div className="App">
      <header>
        <h1>UBA Verde - Mapa de Locaciones</h1>
        {/* Aquí puedes colocar el botón de "salir" que diseñaste en Figma */}
      </header>
      
      {/* Aquí se muestra el componente del mapa. 
        Asumo que quieres que ocupe gran parte de la pantalla.
      */}
      <MapaUbaVerde /> 
    </div>
  );
}

export default App;

// Dentro de MapaUbaVerde.jsx
useEffect(() => {
    const API_URL = 'http://127.0.0.1:5000/api/locaciones';
    fetch(API_URL) // <--- Esta línea se conecta a tu Python/Flask
        .then(response => response.json())
        .then(data => {
            setLocaciones(data);
        })
        .catch(error => {
            console.error("Error al cargar las locaciones de la API:", error);
        });
}, []);

// src/components/mapa/MapaUbaVerde.jsx

// ... (El código de fetch sigue igual)

// ...

return (
    // Usa un div para el contenedor del mapa
    <div 
        style={{ 
            height: '318px',  /* Alto fijo según el diseño */
            width: '100%',
            borderRadius: '8px', /* Borde redondeado */
            overflow: 'hidden' /* Importante para que el radio aplique al mapa */
        }}
    >
        {/* Aquí iría el componente <MapContainer> de react-leaflet */}
        {/* Por ahora, es un placeholder */}
        <p style={{textAlign: 'center', paddingTop: '100px'}}>Aquí se renderizará el mapa de Leaflet.</p>
    </div>
);
// ...