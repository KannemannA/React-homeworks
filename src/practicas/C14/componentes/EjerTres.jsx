import React, { useEffect, useState } from 'react'

function EjerTres() {
    const [text, setText] = useState()
    const funcion = async () => {
        const datos = await(await fetch("https://cat-fact.herokuapp.com/facts/random")).json()
        setText(datos.text)
    }
    useEffect(() => {
        const accion= async()=>{funcion()}
        accion()
    },[])
  return (
    <>
        <button onClick={funcion}>Siguiente facto</button>
        <p>{text}</p>
    </>
  )
}

export default EjerTres 