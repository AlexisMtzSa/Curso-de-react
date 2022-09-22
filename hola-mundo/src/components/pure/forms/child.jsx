import React, {useRef} from 'react';

const Child = ({name, send, update}) => {

    const refMensaje = useRef('')
    const refNombre = useRef('')

    function pulsarBoton(){
        alert('Texto en input: ' + refMensaje.current.value)
    }

    function pulsarBotonParams(text){
        alert(`Text: ${text}`)
    }

    function enviarNombre(e){
        e.preventDefault() //Para que la pagina no se recargue automaticamente
        update(refNombre.current.value)
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={()=>console.log('On mouse over')}>Hello {name}</p>
            <button onClick={()=>console.log('Boton 1 pulsado')}>
                Boton 1
            </button>
            <button onClick={pulsarBoton}>
                Boton 2
            </button>
            <button onClick={() => pulsarBotonParams('Hola')}>
                Boton 3
            </button>
            <input placeholder='Manda un mensaje a tu padre' onFocus={() => console.log('Input focused')}
                onChange={(e) => console.log('Input changed', e.target.value)} onCopy={()=>console.log('Texto copiado')}
                ref={refMensaje}    
                />
            <button onClick={() => send(refMensaje.current.value)}>
                Enviar mensaje
            </button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={enviarNombre}>
                    <input placeholder='Nombre nuevo' ref={refNombre}/>
                    <button type='Submit'>Actualizar nombre</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
