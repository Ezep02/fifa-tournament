import React,{useEffect, useState} from "react"

const TablaUno = ({jugadoresTablaUno}) => {
  
  const [tablaUnoActualizada, setActualizarTablaUno] = useState([])
  useEffect(()=> {
    setActualizarTablaUno(jugadoresTablaUno)
  }, [jugadoresTablaUno])
  
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-zinc-50">Tabla inicial</h2>
      </div>

      <div className="flex justify-center w-full">
        <ul className="flex flex-col w-full p-3">
          {
            tablaUnoActualizada.map((jugador) => (
              <li key={jugador[0]} className="flex gap-2 w-full justify-evenly">
                <span className="w-1/2 uppercase font-bold">
                  {jugador[0]}
                </span>
                <span className="uppercase font-bold text-green-300">
                  {jugador[1]}PTS
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default TablaUno
