import React from 'react';

function Inicio({ iniciar }) {
  return (
    <div className="inicio">
      <h1>INTELLIGENCE</h1>
      <p>Este test evalúa diferentes tipos de inteligencia. Responde a cada pregunta.</p>
      <button onClick={iniciar}>Comenzar Test</button>
    </div>
  );
}

export default Inicio;
