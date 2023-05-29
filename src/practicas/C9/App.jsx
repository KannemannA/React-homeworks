import { useState } from "react";
import "../../App.css";

function App() {
  const [dataForm, setDataForm] = useState([])
  const formData=(e)=>{
    e.preventDefault()
    let obj={
      nombre: e.target[0].value,
      edad: e.target[1].value
    }
    setDataForm(...dataForm, [obj])
  }
  return (
    <>
    <form onSubmit={formData}>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" required />
      <label htmlFor="edad">Edad:</label>
      <input type="number" id="edad" required/>
      <button type="submit" > enviar</button>
    </form>
    <h2>registro:</h2>
    <ul>
      {dataForm.map((result)=>{
        <li>Nombre: {result}, edad: {result}.</li>
      })}
    </ul>
    </>
  )
}

export default App;