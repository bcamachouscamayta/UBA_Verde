# app.py
from flask import Flask, jsonify
from flask_cors import CORS # Necesario para permitir que React acceda a esta API

app = Flask(__name__)
# Configuración de CORS: Permite a tu frontend (que probablemente está en otro puerto) acceder a esta API
CORS(app) 

# --- DATOS DE LAS LOCACIONES ---
locaciones_uba_verde = [
    {
        "id": 1,
        "nombre": "Punto de Reciclaje FADU",
        "lat": -34.5458,
        "lng": -58.4485,
        "tipo": "Reciclaje"
    },
    {
        "id": 2,
        "nombre": "Huerto Facultad de Agronomía",
        "lat": -34.5772,
        "lng": -58.4878,
        "tipo": "Huerto"
    },
    {
        "id": 3,
        "nombre": "Estación de Bicicletas C. Universitaria",
        "lat": -34.5435,
        "lng": -58.4452,
        "tipo": "Movilidad"
    }
]

# --- RUTA DE LA API ---
@app.route('/api/locaciones', methods=['GET'])
def get_locaciones():
    """Devuelve la lista de locaciones UBA Verde en formato JSON."""
    return jsonify(locaciones_uba_verde)

# --- EJECUCIÓN DEL SERVIDOR ---
if __name__ == '__main__':
    # Ejecuta el servidor Flask en el puerto 5000 por defecto
    app.run(debug=True)