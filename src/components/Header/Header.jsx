// src/components/Header/Header.jsx
import React from 'react';
import '../../styles/Header.css'; 

// Aquí importarías el BotonSalir
// import BotonSalir from '../BotonSalir/BotonSalir';

function Header() {
  return (
    <header className="main-header">
      {/* Puedes colocar un logo o icono aquí  */}
      <h1 className="header-title">UBA Verde - Mapa de Locaciones</h1>
      
      {/* Esto se lo dejas al componente BotonSalir cuando lo crees */}
      {/* <BotonSalir /> */} 

      {/* Placeholder para el botón de salir */}
      <button className="exit-button">
          Salir (Diseño Figma)
      </button>

    </header>
  );
}

export default Header;

//esto es para el encabezado superior