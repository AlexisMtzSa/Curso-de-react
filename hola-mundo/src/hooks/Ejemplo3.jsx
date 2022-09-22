/**Ejemplo hooks:
 * -useState()
 * -useContext()
 */

import React, {useState, useContext} from 'react'


/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */

 const miContexto = React.createContext(null);

function Componente1() {

  const state = useContext(miContexto)  

  return (
    <div>
        <h1>
            El Token es: {state.token}
        </h1>
        {/**Pintamos el componente 2 */}
        <Componente2></Componente2>
    </div>
  )
}


function Componente2() {

    const state = useContext(miContexto)

    return (
      <div>
        <h2>
            La sesión es: {state.sesion}
        </h2>
      </div>
    )
  }

  export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion(){
        setSessionData({
            token: 'GJSIDN3353',
            sesion: sessionData.sesion+1
        })
    }

    return (
      <miContexto.Provider value={sessionData}>
        {/**Todo lo de aqui dentro puede leer los datos de sessionData
        Además, si se actualizan los componentes de aqui, tambien la actualizan */}
        <h1>Ejemplo de useState() y useContext()</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
      </miContexto.Provider>
    )
  }
