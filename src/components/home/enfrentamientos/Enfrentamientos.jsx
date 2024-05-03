import React, { useState } from "react";

const Enfrentamientos = ({ jugadores, actualizarTabla }) => {
  // Estado para almacenar los enfrentamientos generados
  const [enfrentamientos, setEnfrentamientos] = useState([]);

  // Función para generar los enfrentamientos aleatorios
  const handleClick = () => {
    const enfrentamientosGenerados = [];
    // Generar enfrentamientos para cada jugador
    for (let i = 0; i < jugadores.length; i++) {
      // Obtener un jugador aleatorio para enfrentar
      const enfrentamiento = [
        jugadores[i],
        ...shuffleArray(jugadores.filter((_, index) => index !== i)).slice(
          0,
          1
        ),
      ];
      // Agregar el enfrentamiento generado a la lista
      enfrentamientosGenerados.push(enfrentamiento);
    }
    // Actualizar el estado con los enfrentamientos generados
    setEnfrentamientos(enfrentamientosGenerados);
  };
 
  const agregarGanador = (index, jugador) => {
    // Calcular los resultados de los enfrentamientos y actualizar la tabla
    const resultados = enfrentamientos.map((enfrentamiento, idx) => {
      // Si es el enfrentamiento actual, actualizar el ganador y devolver los puntos
      if (idx === index) {
        const ganador =
          enfrentamiento[0] === jugador ? enfrentamiento[0] : enfrentamiento[1];
        return [ganador, 3];
      } else {
        // Si no es el enfrentamiento actual, devolver un arreglo vacío
        return [];
      }
    });

    // Filtrar los resultados para eliminar los arreglos vacíos
    const resultadosFiltrados = resultados.filter(
      (resultado) => resultado.length > 0
    );

    // Actualizar la tabla de puntuaciones
    actualizarTabla(resultadosFiltrados);

    // Eliminar el enfrentamiento disputado del estado enfrentamientos
    const nuevosEnfrentamientos = enfrentamientos.filter(
      (_, idx) => idx !== index
    );

    // Actualizar el estado con los enfrentamientos restantes
    setEnfrentamientos(nuevosEnfrentamientos);
  };

  // Renderizado del componente
  return (
    <div className="h-full py-2 w-full ">
      <button
        onClick={handleClick}
        className="w-full bg-green-400 text-slate-100 py-2 font-bold rounded-md hover:bg-green-500 shadow-green-400"
      >
        Generar enfrentamientos
      </button>

      <div className="w-full py-3 h-full">
        <ul className="flex flex-col gap-2 w-full h-full  ">
          {/* Mostrar los enfrentamientos generados y botones para seleccionar ganador */}
          {enfrentamientos.map((enfrentamiento, index) => (
            <li
              key={index}
              className="flex flex-wrap items-center uppercase font-bold justify-between p-3 bg-zinc-900 shadow-xl shadow-neutral-950 "
            >
              <span className="flex w-full justify-center p-3">{enfrentamiento[0][0]} vs {enfrentamiento[1][0]}</span>
              <span className="flex gap-2 w-full justify-evenly ">
                <button
                  onClick={() => agregarGanador(index, enfrentamiento[0])}
                  className="bg-zinc-950 p-2 hover:bg-green-400 w-full rounded-xl shadow-xl shadow-neutral-950"
                >
                  Ganador {enfrentamiento[0][0]}
                </button>

                <button
                  onClick={() => agregarGanador(index, enfrentamiento[1])}
                  className="bg-zinc-950 p-2 hover:bg-green-400 w-full rounded-xl shadow-xl shadow-neutral-950"
                >
                  Ganador {enfrentamiento[1][0]}
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Función para mezclar aleatoriamente un arreglo
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default Enfrentamientos;
