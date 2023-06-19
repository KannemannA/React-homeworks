import { useMemo, useState } from "react";
import "../../App.css";
import Products from "./componentes/Products";
import Books from "./componentes/Books";

function App() {
  const [datosForm, setDatosForm] = useState({numero1:0,numero2:0,numero3:0});
  const [datosBD, setDatosBD] = useState()
  const memoizedNumbers= useMemo(()=>{console.log("dss")
  return datosForm.numero1+datosForm.numero2 },[datosForm.numero1,datosForm.numero2])
  const capturarDatos=(e)=>{
    setDatosForm({
      ...datosForm,
      [e.target.id]: Number(e.target.value)
    })
  }
  return (
    <>
    <form>
      <label htmlFor="numero1">Numero 1</label>
      <input type="number" name="" id="numero1" onBlur={capturarDatos}/>
      <label htmlFor="numero2">Numero 2</label>
      <input type="number" name="" id="numero2" onBlur={capturarDatos}/>
      <label htmlFor="numero3">Numero 3</label>
      <input type="number" name="" id="numero3" onBlur={capturarDatos}/>
      <p>la suma de los dos primeros numeros son: {memoizedNumbers}</p>
    </form>
    <h3>filtro</h3>
    <Products></Products>
    <h3>Libros</h3>
    <Books></Books>
    </>
  )
}

export default App;
