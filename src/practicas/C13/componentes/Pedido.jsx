import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Pedido(props) {
    const [isConfirmed, setIsConfirmed] = useState(false)
    useEffect(() =>{console.log("Procesando pedido...")
    const confirmar=setTimeout(() => {
        setIsConfirmed(true)
    }, 2000)
    return () => {
        console.log("Pedido cancelado")
        clearTimeout(confirmar)}
    },[])
  return (
    <>
        {isConfirmed ? <p>pedido confirmado</p>: <p>procesando pedido</p>}
        <button onClick={()=>props.cancelar()}>Cancelar</button>
    </>
  )
}

export default Pedido