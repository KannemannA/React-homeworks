import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Explorar() {
  return (
    <>
    <h1 style={{color:"red"}}>Explorar!</h1>
    <button><Link to="Tendencias">Tendencias</Link></button>
    <button><Link to="Musica">Musica</Link></button>
    <button><Link to="Peliculas">Peliculas</Link></button>
    <Outlet/>
    </>
  )
}

export default Explorar