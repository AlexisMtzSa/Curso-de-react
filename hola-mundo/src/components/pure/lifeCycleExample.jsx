/**
 * Ejemplo de componente de tipo clase que dispone de los métodos de ciclo de vida
 * 
 */

import React, {Component} from "react";
import PropTypes from 'prop-types'

import React from 'react'

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }
    

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo')
    }

    comonentWillReceiveProps(nextProps){
        console.log('WillReceiveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nexState){
        /**
         * Controla si el componente debe o no actualizarse
         */
        //return true o false
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: Justo después de actualizarse')
    }

    componentWillUpdate(nextProps, nextState){
        console.log('Justo antes de actualizarse')
        
    }

    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
