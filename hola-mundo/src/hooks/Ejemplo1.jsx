/*Ejemplo de uso del Hook useState

*Crear un componente de tipo funcion y acceder a su estado privado a través de un hook y, además, poder modificarlo
*/

import React, {useState} from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial ={
        nombre: 'Alexis',
        email: 'alexismtzsa@hotmail.com'
    }

    /*Queremos que valor inicial y persona inicial sean parte del estado del componentepara sí gestionarsu cambio y que éste se vea reflejado en 
    la vista del componente 
    
    const [nombreVariable, funcionPara Cambiar] = useState(valorInicial)
    */

    const [contador, setContador] = useState(valorInicial)
    const [persona,  setPersona] = useState(personaInicial)

    /**
     * Función para actualizar el estado privado que contienee ek contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor) 
        setContador(contador+1)
    }


    /**
     * Funcion para actualizar el estado de la persona en 
     */
    function actualizarPersona(){
        setPersona({
            nombre: 'Pepe',
            email: 'pepe@gmail.com'
        })
    }



    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Nombre: {persona.nombre}</h2>
            <h2>Email: {persona.email}</h2>
            <div>
                <button onClick={incrementarContador}>Incrementar contador</button>
                <button onClick={actualizarPersona}>Actualizar persona</button>
            </div>
            
        </div>
    );
}

export default Ejemplo1;
