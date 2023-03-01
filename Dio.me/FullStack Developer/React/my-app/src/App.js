import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'

function App() {
  
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresa</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
      <Routes>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/contato">
          <Contato/>
        </Route>
        <Route path="/empresa">
          <Empresa/>
        </Route>
      </Routes>
    </Router>
  );

}

export default App
