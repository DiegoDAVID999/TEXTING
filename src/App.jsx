
import React, { useState } from 'react';

import './index.css';
import Pregunta from './componentes/pregunta';
import Resultado from './componentes/Resultado';
import Inicio from './componentes/Inicio';

function App() {
  const preguntas = [
    { tipo: 'Lingüística', texto: '¿Te gusta leer y escribir?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] },
    { tipo: 'Lógico-Matemática', texto: '¿Disfrutas resolver problemas matemáticos?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] },
    { tipo: 'Espacial', texto: '¿Eres bueno visualizando objetos en tu mente?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] },
    { tipo: 'Musical', texto: '¿Tienes buena memoria para recordar melodías?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] },
    { tipo: 'Kinestésica', texto: '¿Te gusta hacer actividades físicas?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] },
    { tipo: 'Interpersonal', texto: '¿Te es fácil comprender a otras personas?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] },
    { tipo: 'Intrapersonal', texto: '¿Te conoces bien a ti mismo?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] },
    { tipo: 'Naturalista', texto: '¿Te gusta la naturaleza?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] },
    { tipo: 'Emocional', texto: '¿Puedes controlar bien tus emociones?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] },
    { tipo: 'Existencial', texto: '¿Piensas en el propósito de la vida?', opciones: [{ texto: 'Sí', puntaje: 10 }, { texto: 'No', puntaje: 0 }] }
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
    <div className="App">
      <video autoPlay loop muted playsInline className="video-fondo">
      <source src="/Dios.mp4" type="video/mp4" />
      </video>
      {!finalizado ? (
        preguntaActual === 0 ? (
          <Inicio/>
          // <Inicio iniciar={() => setPreguntaActual(1)}/>
        ) : (
          <Pregunta pregunta={preguntas[preguntaActual - 1]} manejarRespuesta={manejarRespuesta}/>
        )
      ) : (
        <Resultado puntaje={puntaje}/>
      )}
    </div>
  );
}

export default App;


