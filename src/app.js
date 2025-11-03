// src/App.js
import React from 'react';
import MapaUbaVerde from './components/MapaUbaVerde/MapaUbaVerde'; // Revisa esta ruta
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// Estilos globales y del layout (usaremos Flexbox o Grid aquí)
import './styles/App.css'; 

function App() {
  return (
    <div className="App">
      
      <Header /> 
      
      <div className="content-container">
          
        <Sidebar />
        
        <main className="map-view">
            {/* El componente del mapa ocupará el resto del espacio */}
            <MapaUbaVerde />
        </main>
      </div>

    </div>
  );
}

// src/app.js

import React from 'react';
import Header from './components/Header/Header';
// El Sidebar ahora es el contenedor de Filtros/Novedades
import Sidebar from './components/sidebar/Sidebar'; 
import MapaUbaVerde from './components/mapa/MapaUbaVerde';
import Footer from './components/Footer/Footer'; // Componente que contendrá el menú fijo (punto 13)

import './styles/App.css'; 

function App() {
  return (
    // 'App' será el contenedor principal de scroll vertical
    <div className="App">
      
      {/* 4. Encabezado Fijo (si lo deseas) o Contenedor principal de la aplicación */}
      <Header /> 
      
      {/* 1. Contenedor Principal: Este contendrá todos los elementos visibles */}
      <div className="main-content-scroll">
        
        {/* 2, 8, 5, 6. Sidebar/Filtros (lo que ya trabajamos) */}
        <Sidebar /> 
        
        {/* 7. Contenedor del Mapa */}
        <div className="map-container">
            {/* El mapa debe tener un alto fijo (e.g., 308px como indica el diseño) */}
            <MapaUbaVerde />
        </div>

        {/* 10, 11. Sección de Novedades/Noticias */}
        <section className="news-section">
            <h2 className="news-title">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="news-paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi lobortis urna mauris urna dolor adipiscing mauris bibendum fermentum. Sed fermentum pellentesque congue facilisis vulputate. Purus mauris egestas quis et. Ultricies commodo convallis at ac adipiscing est eget. Donec enim malesuada orci tellus nec gravida. Donec cursus faucibus porta in turpis lorem euismod. Pellentesque nibh lectus et vitae sit sed. Vivamus diam sagittis eget eleifend.
            </p>
        </section>
        
        {/* Aquí iría más contenido o un listado dinámico de noticias */}
      </div>
      
      {/* 13. Menú o Footer Fijo (Si es un menú de navegación) */}
      {/* <Footer /> */} 

    </div>
  );
}

export default App;