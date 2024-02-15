import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import encabezadop from '/encabezadop';
import encabezados from './encabezados';
import inicio from './inicio';
import series from './series';
import peliculas from './peliculas';

function App() {
  return (
    <Router>
      <div className="app-container">
        <encabezadop />
        <encabezados />
        <inicio />
        <Route path="/series" component={peliculas} />
        <Route path="/peliculas" component={peliculas} />
      </div>
    </Router>
  );
}

export default App;
