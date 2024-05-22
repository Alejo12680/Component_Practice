import React from 'react'

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
            <li> 
            {Object.entries(props.card).map(([property, value]) => (
                <li key={property}>
                    <strong>{property}:</strong> {value}
                </li>
            ))}
            </li>
            
        </ul>
    </div>
  )
}

// Hooks - Eventos
