import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ComponentB from '../pure/componentB';

 const ComponentA = ()=>{

  const contact = new Contacto('Alexis', 'Martinez Salas', 'alexismtzsa@hotmail.com', false);

    return (
      <div>
        <ComponentB contact={contact}></ComponentB>
      </div>
    );
}


export default ComponentA



