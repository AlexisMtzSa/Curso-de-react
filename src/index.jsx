import React from 'react';
import ReactDOM from 'react-dom/client';

// Import { Provider } from 'react-redux'

import App from './components/App';

// Importamos hojas de estilo
import './styles/css/index.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: Si trabajamos con Redux, crear el Store y aplicar el midleware en Redux Saga

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
