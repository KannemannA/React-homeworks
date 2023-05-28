import React from 'react'

function Cuenta(props) {
    const {nombre, edad, email}=props.data
    const agregarCuenta=()=>{ props.agregar(props.data)}
  return (
  <div>
    <h3>
        {nombre} <br />
        {edad} <br />
        {email} <br />
    </h3>
    <button onClick={agregarCuenta}>seguir</button>
    {props.validador?<button onClick={eliminarCuenta}>eliminar</button>:undefined}
    <hr />
  </div>
  )
}

export default Cuenta