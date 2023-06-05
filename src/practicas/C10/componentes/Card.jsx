import React from 'react'

let id=0
function Card(props) {
  const eliminarPedido=(e)=>{
    console.log(e)
  }
  return (
    <>
      {props.data.map((item)=>{
        <div key={id++}>
          <h4>Pedido</h4>
          <p>{item}</p>
          <button onClick={eliminarPedido}>Eliminar</button>
        </div>
      })}
    </>
  )
}

export default Card