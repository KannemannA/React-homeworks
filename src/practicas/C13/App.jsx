import { useEffect } from "react";
import "../../App.css";
import { useState } from "react";
import Form from "./componentes/Form";
import Pedido from "./componentes/Pedido";

function App() {
  const [isActive,setIsActive] = useState(false)
  const [submitedValue,setSubmitedValue] = useState();
  const [inProgress,setInProgress] = useState(false)
  useEffect(()=>console.log("hola mundo"),[])//ejercicio 1
  useEffect(()=>isActive? console.log("esta activado") : console.log("esta desactivado"),[isActive])// ejercicio 2
  useEffect(()=>submitedValue?console.log(`buscando datos en api.github.com/users/${submitedValue}`):undefined,[submitedValue]) // ejercicio 3

  return (
  <>
  <h3>Ejercicio 1:</h3>
  <p>ver consola</p>
  <hr />
  <h3>Ejercicio 2:</h3>
  {isActive ? <p>es True</p>: <p>es False</p>}
  <button onClick={()=>isActive?setIsActive(false):setIsActive(true)}>Tocame!</button>
  <hr />
  <h3>Ejercicio 3:</h3>
  <Form data={(datos)=>setSubmitedValue(datos)} />
  {submitedValue? <p>{submitedValue}</p>:undefined}
  <hr />
  <h3>Ejercicio 4:</h3>
  {inProgress? <Pedido cancelar={()=>setInProgress(false)} /> : <button onClick={()=>setInProgress(true)}>Hacer pedido</button>}
  </>
  )
}

export default App;
