import React from 'react';
import { Link } from 'react-router-dom';

const contenido = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem' }}>
            <Link to="/peliculas">
                <div style={{ width: '48%', backgroundColor: '#e0e0e0', padding: '1rem', textAlign: 'center' }}>
                    <img src="ruta-de-tu-imagen-movies" alt="Movies" style={{ width: '100%' }} />
                    <h3>Movies</h3>
                </div>
            </Link>
            <Link to="/series">
                <div style={{ width: '48%', backgroundColor: '#e0e0e0', padding: '1rem', textAlign: 'center' }}>
                    <img src="ruta-de-tu-imagen-series" alt="Series" style={{ width: '100%' }} />
                    <h3>Series</h3>
                </div>
            </Link>
        </div>
    );
};

export default contenido;
