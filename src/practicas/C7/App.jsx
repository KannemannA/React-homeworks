import { useState } from "react";
import "../../App.css";
import Calculadora from "./componentes/Calculadora";

function App() {
  const [neto, setNeto] = useState(0)
  const valorTotal=(total)=> setNeto(neto + total)
  return (
    <>
      <h2>Valor Total: {neto}</h2>
      <Calculadora amount={1} onEquals={valorTotal}/>
      <Calculadora amount={5} onEquals={valorTotal}/>
      <Calculadora amount={13} onEquals={valorTotal}/>
    </>
  )
}

export default App;