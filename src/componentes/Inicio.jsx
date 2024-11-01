// import React from 'react'

// const Inicio = ({ iniciar }) => {
//   return (
//     <div className="inicio">
//       <h1>Bienvenido al Test de Inteligencia</h1>
//       <p>Responde a las preguntas y descubre tu puntaje al final.</p>
//       <button onClick={iniciar}>Comenzar Test</button>
//     </div>
//   )
// }

// export default Inicio

import React from 'react';

function Inicio({ iniciar }) {
  return (
    <div className="inicio">
      <h1>Bienvenido al Test de Inteligencias</h1>
      <p>Este test evalúa diferentes tipos de inteligencia. Responde a cada pregunta.</p>
      <button onClick={iniciar}>Comenzar Test</button>
    </div>
  );
}

export default Inicio;
