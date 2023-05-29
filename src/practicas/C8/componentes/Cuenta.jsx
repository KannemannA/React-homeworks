import React from 'react'

function Cuenta(props) {
    const {nombre, edad, email}=props.data
    const agregarCuenta=()=>{props.agregar(props.data)}
    const eliminarCuenta=()=>{props.eliminar(props.data)}
  return (
  <div>
    <h3>
        {nombre} <br />
        {edad} <br />
        {email} <br />
    </h3>
    {props.onAgregar?<button onClick={agregarCuenta}>seguir</button>: undefined}
    {props.onEliminar?<button onClick={eliminarCuenta}>eliminar</button>:undefined}
    <hr />
  </div>
  )
}

export default Cuenta