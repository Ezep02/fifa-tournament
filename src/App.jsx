import React, {useState} from "react";

import CargarJugadores from "./components/carga-jugadores/CargarJugadores"
import Home from "./components/home/Home";

function App() {
  
  const [nombreJugador, setNombreJugador] = useState("");
  const [jugadores, setJugadores] = useState([]);
  const [torneo, setTorneo] = useState(false);
  const [pts, setPts] = useState(10)

  const handleAgregar = () => {
    setJugadores([...jugadores, [nombreJugador, 0] ]); 
    setNombreJugador("");
  };

  return (
    <>
      <main className="justify-center flex items-center bg-neutral-950 h-full w-full ">
        

        {
          torneo == false ? (
            <CargarJugadores 
              onNombreJugador={setNombreJugador} 
              botonAgregar={handleAgregar}
              jugadores={jugadores}
              setCrearTorneo={setTorneo}
              setPts={setPts}
            />
          ): (
            <Home listaJugadores={jugadores} maxPts={pts}/>
          )
        }
      </main>
    </>
  )
}

export default App
