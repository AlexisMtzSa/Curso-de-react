import React, {useState} from 'react';
import Child from '../pure/forms/child';

const Father = () => {

    const [nombre, setNombre] = useState('Alexis');

    function mostrarMensaje(texto){
        alert(`Mensaje: ${texto}`)
    }

    function actualizarNombre(nuevoNombre){
        setNombre(nuevoNombre)
        //Al actualizar su estado renderiza a todos sus hijos nuevamente
    }    


    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name={nombre} send={mostrarMensaje} update={actualizarNombre}></Child>
        </div>
    );
}

export default Father;
