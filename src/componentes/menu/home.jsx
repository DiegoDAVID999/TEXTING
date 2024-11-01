import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home">
      <h2>Bienvenido a la App de Test de Inteligencias</h2>
      <p>Descubre tus diferentes tipos de inteligencia respondiendo a un sencillo test.</p>
      <a href="/test-de-inteligencia" className="boton-ingresar">Comenzar Test</a>
    </div>
  );
}

export default Home;
