import './App.css';
import HelloWorld from '../components/HelloWorld';

const name = 'Anthony'
const url = "https://via.placeholder.com/150"
function App() {
  return (
    <div className="App">
    <h1>Hail {name}</h1>
    <img src={url} alt="Minha foto"/>
    <HelloWorld />
    </div>
    
  );

}

export default App;
