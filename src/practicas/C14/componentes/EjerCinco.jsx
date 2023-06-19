import React, { useEffect, useState } from 'react'
import EjerCuatro from './EjerCuatro'

function EjerCinco() {
    const [data,setData] = useState()
    const [error, setError] = useState()
    const [cargando, setCargando] = useState()
    //me da pereza completar el ejercicio pero es basicamente renderizar lo que guarda en el estado traido del fetch
    //luego capturar datos del form y guardarlo en el estado junto con los datos del fetch y renderizarlo
    useEffect(()=>{
        const guardar = async() => {
            const datos = await(await fetch(`https://jsonplaceholder.typicode.com/posts`)).json()
            setData(datos)
        }
        guardar()
    },[])
  return (
    <>
    <EjerCuatro />
    </>
  )
}

export default EjerCinco