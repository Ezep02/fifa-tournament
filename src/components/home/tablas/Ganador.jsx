
const Ganador = ({ganador, cerrarGanador}) => {
  return (
    <article className="flex justify-center items-center h-full">
        <div className="bg-slate-50 h-1/2 w-1/3 rounded-md shadow-xl flex flex-col  p-2 gap-1">
          <div className="flex justify-center h-2/3 items-center ">
            <h2 className="text-neutral-950 text-2xl py-5 font-bold uppercase">Ganador del torneo</h2>
          </div>
          <div className="flex justify-center h-full">
              <h1 className="text-black text-7xl font-bold">{ganador[0]}</h1>
          </div>

          <button className="bg-neutral-950 py-3 text-2xl font-bold rounded-md text-white hover:bg-emerald-300" onClick={()=>cerrarGanador(false)}>
            Cerrar
          </button>
        </div>
    </article>
  )
}

export default Ganador
