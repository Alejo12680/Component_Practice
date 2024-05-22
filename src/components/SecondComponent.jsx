import React from 'react'

export const SecondComponent = () => {

    // Array de libros
    const books = [
        "Harry Potter y la piedra filosofal",
        "Harry Potter y la cámara secreta",
        "Harry Potter y el prisionero de Azkaban",
        "Harry Potter y el cáliz de fuego",
        "Harry Potter y la Orden del Fénix",
        "Harry Potter y el misterio del príncipe",
        "Harry Potter y las Reliquias de la Muerte"
    ];

    /* const books = []; */

  return (
    <div>
        <p>Segundo Componente</p>
        <h2>Listado de Libros</h2>
        <ul>
            {/* If ternario */}
            {books.length >= 1 ? (
                /* Es mas eficiente mapear los arreglos */
                books.map((book, index) => {
                    return <li key={index}> {book} </li>
                })
            ) : "No existe libros"}

            {/* Renderizar uno por uno */}
            <li>Renderiza uno { books[2]} </li>
            
        </ul>
    </div>
  )
}
