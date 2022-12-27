import './App.css';
import HelloWorld from './HelloWorld';
import SayMyName from './SayMyName';

const name = 'Anthony'
const url = "https://via.placeholder.com/150"

function App() {
  return (
    <div className="App">
    <h1>Hail {name}</h1>
    <img src={url} alt="Minha foto"/>
    <HelloWorld />
    <SayMyName nome="Mateus" />
    </div>
    
  );

}

export default App;
