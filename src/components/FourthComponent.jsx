import React from "react";

export const FourthComponent = () => {
  // Este es el manejador de eventos por lo general se llama handle
  const handleClicked = (e) => {
    alert("Has Hecho click al boton!!");
  };

  const handleDoubleClicked = (e) => {
    alert("Has Hecho Doble click al boton!!");
  };

  const handleMouseEnter = (e) => {
    console.log("Has entrado a mi caja con el mouse");
  }

  const handleMouseLeave = (e) => {
    console.log("Has salido de mi caja con el mouse");
  }

  const handleMouse = (e, action) => {
    alert(`Has ${action} la caja`); 
  }

  const handleMouseCL = (e, action) => {
    console.log(`Has ${action} la caja`); 
  }

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
          }}>
          Haz Clic Tambien
        </button>

        {/* Evento Doble Click */}
        <div>
          <button onDoubleClick={handleDoubleClicked}>
            Haz doble Clic!!
          </button>
        </div>

        {/* Evento Mouse Enter y Mouse Leave */}
        <hr />
        <div id="box">
          {/* Dos Funciones */}
          <div id="box1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p>Pasar el Mouse por encima !!!</p>
          </div>

          {/* Una sola funcion */}
          <div id="box2" onMouseEnter={e => handleMouse(e, "Entrado a")} onMouseLeave={e => handleMouse(e, "saliendo de")}>
            <p>Pasar el Mouse por encima !!!</p>
          </div>

          <div id="box3" onMouseEnter={e => handleMouseCL(e, "Entrado a")} onMouseLeave={e => handleMouseCL(e, "saliendo de")}>
            <p>Pasar el Mouse por encima !!!</p>
          </div>
        </div>

        {/* Evento Focus y Blur */}
      </div>
    </div>
  );
};
