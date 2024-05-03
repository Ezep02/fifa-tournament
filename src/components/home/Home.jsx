import React, { useEffect, useState } from "react";
import TablaUno from "../home/tablas/TablaUno";
import Ganador from "./tablas/Ganador";
import Enfrentamientos from "../home/enfrentamientos/Enfrentamientos";

const Home = ({ listaJugadores, maxPts }) => {
  //manejo de puntuaciones
  const [tablaUno, setTablaUno] = useState([]);
  const [ganador, setGanador] = useState([])
  const [notificacion, setNotificacion] = useState(false);


  const puntos = parseInt(maxPts)
  


  useEffect(() => {
    const newTablaUno = listaJugadores
    setTablaUno(newTablaUno);
  }, [listaJugadores]);

  useEffect(() => {
    const ganadorTorneo = tablaUno.filter((e) => e[1] >= puntos);
    if(ganadorTorneo.length > 0){
      setNotificacion(true);
      setGanador(ganadorTorneo)
    }

  }, [tablaUno]); 
  
  const actualizarTablaUno = (resultados) => {
    const nuevaTabla = [...tablaUno];
    // Actualizar los puntos de acuerdo a los resultados de los enfrentamientos
    resultados.forEach(([jugador1, puntos]) => {
      // Encontrar el jugador en la tablaUno y actualizar sus puntos
      nuevaTabla.filter(jugador => jugador === jugador1)
                .forEach(jugador => jugador[1] += puntos);
    });
    setTablaUno(nuevaTabla);
  };

  

  return (
    <article className="h-full w-full flex flex-col justify-center items-center ">
       
       {
        notificacion && (
          <div className="absolute w-full h-full">
            <Ganador ganador={ganador[0]} cerrarGanador={setNotificacion}/>     
          </div>
        )
       }

      <div className="bg-zinc-950 p-5 h-full w-full shadow-2xl flex flex-col justify-center">   
        {/*Listas */}
        <div className="w-full flex justify-center ">
          <TablaUno jugadoresTablaUno={tablaUno} />
          {/*tabla dos inicia cuando ocurre el primer eliminado */}
        </div>

        {/* Partidas y enfrentamientos*/}
        <div className="h-full ">
          <Enfrentamientos
            jugadores={tablaUno}
            actualizarTabla={actualizarTablaUno}
          />

        </div>

      </div>
    </article>
  );
};

export default Home;
