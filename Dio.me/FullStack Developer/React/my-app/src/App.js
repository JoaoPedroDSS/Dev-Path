import './App.css';
import HelloWorld from './HelloWorld';
import SayMyName from './SayMyName';
import Pessoa from './Pessoa';
import Frase from './Frase';
import List from './List';

const name = 'Anthony'
const url = "https://via.placeholder.com/150"

function App() {
  return (
    <div className="App">
    <h1>Hail {name}</h1>
    <img src={url} alt="Minha foto"/>
    <List/>
    <HelloWorld />
    <SayMyName name="Mateus" />
    <Pessoa nome="Carlo" idade="32"/>
    <Frase/>
    </div>
    
  );

}

export default App;
