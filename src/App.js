import logo from './logo.svg';
import './App.css';
import  Testimony  from './component/Testimony';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
      <h1>Esto es lo que dicen nuestros empleados</h1>
      <Testimony></Testimony>
      </div>
    </div>
  );
}

export default App;
