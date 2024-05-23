import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { Child } from './components/Child';
import { useState } from 'react';
import { FourthComponent } from './components/FourthComponent';


function App() {

  // Parametros que le enviamos al componente hijo
  const [name, setName] = useState('Lina');
  const [message, setMessage] = useState("");

  // Resive el mensaje del Hijo con esta funcion 
  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  }

  // Neceito enviar estos datos para mi componente ThirdComponents
  const medicalRecord = {
    height: 160,
    bloodGroup: 'RhO+',
    allergies: 'None',
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <hr />
        <FourthComponent/>

        <h2>Mensaje del Hijo tuta</h2>
        <p>{message} </p>

        {/* Componente hijo */}
        <Child name={name} setName={setName} addMessage={addMessage} />

        <SecondComponent />

        {/* Enviamos la informacion del padre App, al hijo Thirdcomponent */}
        <ThirdComponent
          /* Variables */
          name='Marlon'
          lastname='Oliverio'
          card={medicalRecord}
        />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
