// import React from 'react'

// const Pregunta = ({ pregunta, manejarRespuesta}) => {
//   return (
//     <div className="pregunta">
//     <h2>{pregunta.texto}</h2>
//     <div className="opciones">
//       {pregunta.opciones.map((opcion, index) => (
//         <button key={index} onClick={() => manejarRespuesta(opcion.puntaje)}>
//           {opcion.texto}
//         </button>
//       ))}
//     </div>
//   </div>
//   )
// }

// export default Pregunta


import React from 'react';

function Pregunta({ pregunta, manejarRespuesta }) {
  return (
    <div className="pregunta">
      <h2>{pregunta.tipo}</h2>
      <p>{pregunta.texto}</p>
      <div className="opciones">
        {pregunta.opciones.map((opcion, index) => (
          <button key={index} onClick={() => manejarRespuesta(opcion.puntaje)}>
            {opcion.texto}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pregunta;
