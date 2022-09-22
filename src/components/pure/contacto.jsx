import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Contacto} from '../../models/Contacto'

const ContactoComp = ({contacto, llave, eliminarContacto}) => {

    const [conectado, setConectado] = useState(contacto.conectado);

    function cambiarEstado(){
        contacto.conectado = !conectado
        setConectado(!conectado)
    }

    return (
        <div>
            <h1>Nombre: {`${contacto.nombre} ${contacto.apellidos}`}</h1>
            <h2>Correo: {contacto.correo}</h2>
            <h3>Estado: {contacto.conectado? 'Conectado':'Desconectado'}</h3>
            <button onClick={()=> cambiarEstado()}>Cambiar estado</button>
            <button className='btnEliminar' onClick={()=>eliminarContacto(llave)}>Eliminar contacto</button>
        </div>
    );
}

ContactoComp.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComp;
