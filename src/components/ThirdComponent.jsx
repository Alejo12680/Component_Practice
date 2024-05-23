import React from 'react'
import PropTypes from 'prop-types'

// Vamos a recibir unas propiedades para el componente 'Props' trae todas las propiedades del componenete
export const ThirdComponent = (props) => {

// Destrocturar los componentes, utilizamos los {} que propiedades necesito.

// export const ThirdComponent = ({height}) => {

    /* Veo las propiedades */
    console.log(props);
  return (
    <div>
        <h2>Comunicación entre componentes</h2>
        <ul>
            <li>{props.name} </li>
            <li>{props.lastname} </li>
            <li>{props.card.allergies} </li>
            <li>{props.card.bloodGroup} </li>

            {/* Destrocturado especifico*/}
            {/* <li>{ height } </li> */}

            {/* Para iterar el props de card */}
            <ul> 
            {Object.entries(props.card).map(([property, value]) => (
                <li key={property}>
                    <strong>{property}:</strong> {value}
                </li>
            ))}
            </ul>
            
        </ul>
    </div>
  )
}

// Valido mis tipos de datos que deben llegar en el prop con ayuda del protypes, es parecido a una interfaz de Angular.
ThirdComponent.prototype = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    card: PropTypes.object
}


// Hooks - Eventos
