import { useState } from "react";
import "../../App.css";


let id=0
function App() {
  const [dataForm, setDataForm] = useState([])
  const [data, setData] = useState({})
  const [error,setError] = useState('')
  const formData=(e)=>{
    e.preventDefault()
    setError('')
    if(data.nombre.length<=3 || data.numero<=0){
      setError("ingrese un nombre con un minimo de 4 caracteres e ingrese un numero mayor a 0")
      return
    }
    setDataForm([...dataForm, data])
  }
  const handleInputValues=(e)=>{
    setData({
      ...data,
      [e.target.id]: e.target.value
    })
  }
  return (
    <>
    <form onSubmit={formData}>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" required onBlur={handleInputValues}/>
      <label htmlFor="edad">Numero favorito:</label>
      <input type="number" id="numero" required onBlur={handleInputValues}/>
      <button type="submit" > enviar</button>
      <br />
      {error?<p style={{color: "red"}}>{error}</p>:undefined}
    </form>
    <h2>registro:</h2>
    <ul>
      {dataForm.map((item)=><li key={item.nombre+id++}>Nombre: {item.nombre} <br /> tu numero favorito es {item.numero}</li>)}
    </ul>
    </>
  )
}

export default App;