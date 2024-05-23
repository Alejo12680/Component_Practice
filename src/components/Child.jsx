import React from "react";

// Props de desustructuración
export const Child = ({ name, setName, addMessage }) => {
  // Enviamos datos al padre
  const sendMessage = () => {
    // Dentro de la funcion llamamos otra funcion para enviarles el mansaje al padre
    addMessage("Mensaje del Hijo");
  };

//   Siempre se trabajan con funciones para el set
  const changeName = () => {
    setName('Nuevo nombre Hijo ')
  }

  return (
    <div>
      {/* Resive el name del padre */}
      {name}

      <div>
        {/* Eventos */}
        <button onClick={sendMessage}> Enviar Mensaje</button>
        <button onClick={changeName}> Enviar Name</button>
      </div>
    </div>
  );
};
