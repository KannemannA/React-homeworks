import "../../App.css";
import { Link, Route, Routes } from 'react-router-dom'
import Home from "./componentes/Home";
import Explorar from "./componentes/Explorar";
import Shorts from "./componentes/Shorts";
import Suscripciones from "./componentes/Suscripciones";
import Tendencias from "./componentes/Tendencias";
import Musica from "./componentes/Musica";
import Peliculas from "./componentes/Peliculas";


function App() {
  return (
    <>
    <header>
      <ul>
        <li key={"home"}><Link to="/">Home</Link></li>
        <li key={"shorts"}><Link to="/shorts">Shorts</Link></li>
        <li key={"suscripciones"}><Link to="/suscripciones">Suscripciones</Link></li>
        <li key={"explorar"}><Link to="/explorar">Explorar</Link></li>
      </ul>
    </header>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shorts" element={<Shorts/>}/>
    <Route path="/suscripciones" element={<Suscripciones/>}/>
    <Route path="/explorar" element={<Explorar/>}>
      <Route path="tendencias" element={<Tendencias/>}/>
      <Route path="musica" element={<Musica/>}/>
      <Route path="peliculas" element={<Peliculas/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App;
