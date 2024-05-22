//Importar todos los modulos y las dependencias de react.
import React from 'react'


// Funcion del componente
export const MyComponent = () => {

    const name = 'Marlon';
    const repository = 'https://github.com/inesmariao/component-practice';

    const student = {
        name: 'Carlos',
        lastname: 'Puerro',
        mobile: 3102580000,
        linkedinProfile: 'https://linkedin.com/carlos-puerro'
    }

    console.log(student);

  return (
    <div>
        <hr />
        <p>Primer Componente</p>
        <h2>Temas de react</h2>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados</li>
            <li>Comunicacion</li>
        </ul>
        
        <hr />
        <h2>Datos del documento</h2>
        <p>Nombre: {name} </p>
        <p>Repositorio:</p>
        <p> {repository} </p>

        <hr />
        <h2>Datos del estudiante</h2>
        <p>DatosJson: {JSON.stringify(student)} </p>
        <p>Nombre: {student.name} </p>
        <p>Apellido: {student.lastname} </p>
        <p>Celular: {student.mobile} </p>
        <p>Perfil Linkedin: {student.linkedinProfile} </p>

    </div>
    
  )
}




