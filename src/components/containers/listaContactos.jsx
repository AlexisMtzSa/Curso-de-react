import React, {useState, useRef} from 'react';
import {Contacto} from '../../models/Contacto'
import ContactoComp from '../pure/contacto';

const ListaContactos = () => {
    var refNombre = useRef('')
    var refApellidos = useRef('')
    var refCorreo = useRef('')

    const [contactos, setContactos] = useState([]);

    const agregarContacto = (e)=>{
        e.preventDefault()
        setContactos(contactos.concat(new Contacto(refNombre.current.value, refApellidos.current.value, refCorreo.current.value, false)))
    }

    const eliminarContacto = (indiceEliminar) => setContactos(contactos.filter((contacto, indice)=> indice!=indiceEliminar? contacto:null))
    

    return (
        <div>
            <form onSubmit={agregarContacto}>
                <div>
                    <span>Nombre</span>
                    <input placeholder='Nombre' type='text' ref={refNombre} required/>
                    <span>Apellidos</span>
                    <input placeholder='Apellidos' type='text' ref={refApellidos} required/>
                    <span>Correo electronico</span>
                    <input placeholder='Correo electronico' type='email' ref={refCorreo} required/>
                </div>
                <div>
                    <button type='submit' style={{'marginTop': '10px'}}>Crear contacto</button>
                </div>
            </form>
            <div>
                {contactos.map((contacto, index)=> {
                    return <ContactoComp contacto={contacto} llave={index} key={index} eliminarContacto={eliminarContacto}/>
                    })}
            </div>
        </div> 
    );
}

export default ListaContactos;
