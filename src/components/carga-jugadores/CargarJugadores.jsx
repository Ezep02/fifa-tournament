const PantallaInicial = ({
  onNombreJugador,
  botonAgregar,
  jugadores,
  setCrearTorneo,
  setPts
}) => {
  return (
    <article className="h-screen w-full flex flex-col justify-center items-center ">
      
      <div className="bg-zinc-950 p-5 h-full  shadow-2xl flex flex-col justify-center
        w-full  
      ">

        <div className="flex flex-col gap-5 ">
          <div className="flex w-full justify-center">
            <h2 className="text-2xl font-bold text-zinc-50">
              Cargar Jugadores
            </h2>
          </div>

          <div className="flex justify-stretch gap-4 py-3">
            <input
              type="text"
              placeholder="Cargar jugador"
              className="w-2/3 p-2 rounded-lg shadow-lg"
              onChange={(e) => onNombreJugador(e.target.value)}
            />
            <input
              type="text"
              placeholder="Puntos maximos"
              className="w-2/3 p-2 rounded-lg shadow-lg"
              onChange={(e) => setPts(e.target.value)}
            />
            
          </div>
          <div className="">
            <button
                onClick={botonAgregar}
                className="w-full  rounded-lg shadow-lg bg-neutral-900 text-slate-100 font-bold hover:bg-green-400 p-2"
              >
                Agregar
              </button>
          </div>
        </div>
        

        <div className="py-4">
          <h2 className="text-sm text-slate-100 font-bold ">Participantes:</h2>
          <ul className="w-full flex flex-wrap gap-2 ">
            {jugadores.map((jugador, index) => (
              <li key={index} className="uppercase">
                {jugador[0]}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <button
            onClick={() => setCrearTorneo(true)}
            className="w-full  bg-neutral-900 text-slate-100 py-4 rounded-md text-xl font-bold
          hover:bg-green-400"
          >
            Crear torneo
          </button>
        </div>
      </div>
    </article>
  );
};

export default PantallaInicial;
