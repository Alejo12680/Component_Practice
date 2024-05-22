import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';


function App() {

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
        <SecondComponent/>

        {/* Enviamos la informacion del padre App, al hijo Thirdcomponent */}
        <ThirdComponent 
        /* Variables */
        name='Marlon'
        lastname='Oliverio'
        card={medicalRecord}
        />
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
