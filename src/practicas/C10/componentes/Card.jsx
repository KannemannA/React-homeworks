import React from 'react'

function Card(props) {
  const eliminarPedido=(e)=>{
    props.eliminar(e)
  }
  return (
    <>
      {props.data.map((item)=>{
        return(
        <div key={item.id} id={item.id}>
          <h4>Pedido</h4>
          <p>{item.datos}</p>
          <button onClick={()=>eliminarPedido(item)}>Eliminar</button>
        </div>
      )})}
    </>
  )
}

export default Card