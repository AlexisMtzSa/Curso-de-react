import { useState } from 'react'
import logo from './logo.svg'
import Greeting from './components/pure/greeting'
import GreetingF from './components/pure/greetingF'
import TaskListComponent from './components/container/task_list'
import './App.css'
import ComponentA from './components/container/componentA'
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'
import { DidMount, DidMountHook } from './hooks/lifeCycle/DidMount'
import GreetingStyled from './components/pure/forms/greetingStyled'
import Father from './components/container/father'
import OptionalRender from './components/pure/optionalRender'
import LoginFormik from './components/pure/forms/loginFormik'
import RegisterFormik from './components/pure/forms/registerFormik'
import AsyncExample from './components/pure/AsyncExample'
import ObservableExample from './components/pure/ObservableExample'
import FetchExample from './components/pure/FetchExample'
import AxiosExample from './components/pure/AxiosExample'
import AxiosCRUDExample from './components/pure/AxiosCRUDExample'


function App() {

  return (
    <div className="App">
        {/*Comentarios en jsx*/}
        {/*<Greeting name='Alexis'></Greeting>*/}
        {/*<GreetingF name='Alexis'></GreetingF>*/}
        {/*<ComponentA></ComponentA>*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/**<Ejemplo4 nombre='Alexis'>
          Todo lo de aqui dentro es tratado como props.children
          <h3>
            Contenido del children
          </h3>
        </Ejemplo4>*/}
        {/*<GreetingStyled nombre='Alexis'></GreetingStyled>*/}
        {/*<Father></Father>*/}

        {/*Ejemplo de renderizado condicional */}
        {/*<OptionalRender></OptionalRender>*/}
      
        {/*<LoginFormik></LoginFormik>*/}
        {/*<RegisterFormik></RegisterFormik>*/}

        {/**Ejemplos de procesos asincronos */}
        {/*<AsyncExample/>*/}
        {/*<ObservableExample/>*/}
        {/*<FetchExample/>*/}
        {/*<axiosExample/>} */}
        <AxiosCRUDExample/>

        {/**PROYECTO FINAL */}
        {/**<TaskListComponent></TaskListComponent>*/}



    </div>
  )
}

export default App
