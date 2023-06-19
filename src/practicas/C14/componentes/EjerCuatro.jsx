import React, { useState } from 'react'

function EjerCuatro() {
    const [datos, setDatos]= useState()
    const formulario=(e)=>{
        e.preventDefault()
    }
    const enviar=async()=>{
        const data = await(await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })).json()
        console.log(data)
    }
    const capturarDatos=(e)=>{
        setDatos({
            ...datos,
            [e.target.id]: e.target.value
          })}
  return (
    <form onSubmit={formulario}>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" id='titulo' onBlur={capturarDatos} />
        <label htmlFor="contenido">Contenido</label>
        <textarea name="" id="contenido" cols="30" rows="10" onBlur={capturarDatos}></textarea>
        <button type="submit" onClick={enviar}>Guardar</button>
    </form>
  )
}

export default EjerCuatro