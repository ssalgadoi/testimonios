import logo from './logo.svg';
import './App.css';
import  Testimony  from './component/testimony';


function App() {
  return (
    <div className="App">
      <div className='main-container'>
      <h1>Esto es lo que dicen nuestros empleados</h1>
      <Testimony 
        name = "Sebastian Ibacache"
        country = "Escocia"
        image = "01"
        employe = "Ingeniero Informatico"
        company = "Amazon"
        testimony = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ipsum sit amet diam maximus aliquet eget a elit. Mauris ornare velit tellus, sed porttitor eros imperdiet tempor. Donec ullamcorper tortor id pulvinar pharetra"
        ></Testimony>
        <Testimony 
        name = "Camila Montoya"
        country = "Inglaterra"
        image = "02"
        employe = "Ingeniera de Software"
        company = "Meta"
        testimony = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ipsum sit amet diam maximus aliquet eget a elit. Mauris ornare velit tellus, sed porttitor eros imperdiet tempor. Donec ullamcorper tortor id pulvinar pharetra"
        ></Testimony>
        <Testimony 
        name = "Karina Salgado"
        country = "Alemania"
        image = "03"
        employe = "Ingeniera de Software"
        company = "Spotify"
        testimony = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ipsum sit amet diam maximus aliquet eget a elit. Mauris ornare velit tellus, sed porttitor eros imperdiet tempor. Donec ullamcorper tortor id pulvinar pharetra"
        ></Testimony>
      </div>
    </div>
  );
}

export default App;
