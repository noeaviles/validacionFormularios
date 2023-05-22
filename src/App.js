import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import Modals from './components/Modals';

function App() {
  return (
    <div className="App">
      <h1>Ejercicios de FORMULARIO Y MODALES</h1>
      <hr/>
      <Modals/>
      <hr/>
      <h2>Formulario y validaciones</h2>
      <ContactForm/>
    </div>
  );
}

export default App;
