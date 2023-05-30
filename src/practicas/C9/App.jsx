import { useState } from "react";
import "../../App.css";

let id=0
function App() {
  const [dataForm, setDataForm] = useState()
  const [data, setData] = useState({})
  const [error,setError] = useState("")
  const formData=(e)=>{
    e.preventDefault()
    let daitem = [data]
    if(dataForm){
      setDataForm(...dataForm,daitem)
      return
    }
    setDataForm(daitem)
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
      <label htmlFor="edad">Edad:</label>
      <input type="number" id="edad" required onBlur={handleInputValues}/>
      <button type="submit" > enviar</button>
    </form>
    <h2>registro:</h2>
    <ul>
      {/* {dataForm.map((item)=><li key={item.nombre+id++}>Nombre: {item.nombre} | Edad: {item.edad}</li>)} */}
    </ul>
    </>
  )
}

export default App;