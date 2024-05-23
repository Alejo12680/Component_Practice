import React from "react";

export const FourthComponent = () => {
  // Este es el manejador de eventos por lo general se llama handle
  const handleClicked = (e) => {
    alert("Has Hecho click al boton!!");
  };

  return (
    <div>
      {/* Cada elemento debe ir en un div */}
      <div>
        <h2>Eventos en React</h2>

        {/* Evento Click */}
        <button
          onClick={() => {
            console.log("Hola, soy un evento Click !!");
          }}
        >
          Haz Clic
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            console.log(handleClicked);
          }}
        >
          Haz Clic Tambien
        </button>

        {/* Evento Doble Click */}
        {/* Evento Mouse Enter y Mouse Leave */}
        {/* Evento Focus y Blur */}
      </div>
    </div>
  );
};
