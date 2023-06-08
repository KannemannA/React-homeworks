import React from 'react'

function Form(props) {
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.data(e.target[0].value)}
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" />
        <button type="submit">Enviar</button>
    </form>
  )
}

export default Form