import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//Añadimos bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

//importante: Los estitlos propios deben ir debajo del bootstrap para que no los pise
import './index.css'
import AppRoutingOne from './AppRoutingOne'
import AppRoutingFinal from './AppRoutingFinal'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>
)
