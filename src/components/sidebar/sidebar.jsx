// src/components/Sidebar/Sidebar.jsx

import React from 'react';
import '../../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="main-sidebar">
      <h2>🔍 Filtros y Leyenda</h2>
      <div className="filter-group">
        {/* Aquí irían los inputs, checkboxes o radios para filtrar las locaciones */}
        <label>
          <input type="checkbox" /> Espacios verdes
        </label>
        <label>
          <input type="checkbox" /> Puntos de reciclaje
        </label>
      </div>
      
      <div className="location-list">
          <h3>Locaciones Destacadas</h3>
          <ul>
              <li>Plaza de la Facultad</li>
              <li>Jardín Botánico UBA</li>
              {/* Esto se llenaría con los datos de la API */}
          </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

//panel lateral