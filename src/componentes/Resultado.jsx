


import React from 'react';

function Resultado({ puntaje }) {
  const obtenerMensaje = () => {
    if (puntaje >= 80) return "¡Tienes una inteligencia muy variada y desarrollada!";
    if (puntaje >= 50) return "¡Buen trabajo, demuestras gran potencial en varias áreas!";
    return "Sigue explorando, ¡hay muchas formas de desarrollar tu inteligencia!";
  };

  return (
    <div className="resultado">
      <h2>Resultado Final</h2>
      <p>Puntaje: {puntaje} / 100</p>
      <p>{obtenerMensaje()}</p>
    </div>
  );
}

export default Resultado;
