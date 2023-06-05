import React from 'react'

function Form(props) {
    const pasamanos=(e)=>{
        e.preventDefault()
        props.data(e.target[0].value)
    }
  return (
    <form onSubmit={pasamanos}>
        <label htmlFor="plato">Plato:</label>
        <input type="text" id="plato" required/>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default Form