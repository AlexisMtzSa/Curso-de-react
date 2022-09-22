import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Greeting extends Component {

    //El estado son info privada del componente que actualiza la vista
    //Las propiedades son atributos que se le pasan al componenten por el constructor
    constructor(props){
        super(props);
        this.state = {
            age:29
        } 
    }

    birthday = () => this.setState((prevState)=>(
                {age: prevState.age+1}
            ))
        
    

    render() {
        return (
        <div>
            <h1>Hola {this.props.name}</h1>
            <h2>Tu edad es de: {this.state.age}</h2>
            <div>
                <button onClick={this.birthday}>Cumplir años</button>
            </div>
        </div>
        )
    }
}

Greeting.propTypes = {
     name: PropTypes.string,
};

