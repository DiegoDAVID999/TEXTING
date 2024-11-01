import React, { useState } from 'react';
// import './inteligence.css';
import Inicio from '../inicio';
import Pregunta from '../pregunta';
import Resultado from '../resultado';

function IntelligenceTest() {
  const preguntas = [
    { tipo: 'Lingüística', texto: '¿Te gusta leer y escribir?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] },
    // Añadir las demás preguntas aquí
  ];

  const [puntaje, setPuntaje] = useState(0);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const manejarRespuesta = (puntajeRespuesta) => {
    setPuntaje(puntaje + puntajeRespuesta);
    const siguientePregunta = preguntaActual + 1;

    if (siguientePregunta < preguntas.length) {
      setPreguntaActual(siguientePregunta);
    } else {
      setFinalizado(true);
    }
  };

  return (
    <div className="intelligence-test">
      {!finalizado ? (
        preguntaActual === 0 ? (
          <Inicio iniciar={() => setPreguntaActual(1)} />
        //   <Inicio iniciar={() => setPreguntaActual(1)} />
        ) : (
          <Pregunta pregunta={preguntas[preguntaActual - 1]} manejarRespuesta={manejarRespuesta} />
        )
      ) : (
        <Resultado puntaje={puntaje} />
      )}
    </div>
  );
}

export default IntelligenceTest;
