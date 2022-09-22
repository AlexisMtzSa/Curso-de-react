import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const ComponentB = ({contact}) =>{

    const [isConected, setConect] = useState(contact.conectado)

  return (
    <div>
        <h1>Nombre: {contact.nombre+' '+contact.apellido}</h1>
        <h2>Contacto {isConected? 'en linea': 'no disponible'}</h2>

        <div>
            <button onClick={()=>setConect(!isConected)}>Cambiar conexion</button>
        </div>
    </div>
  );
};

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
};

export default ComponentB;
