import React, { useEffect } from 'react'
import { useState } from 'react'

function EjerUno() {
    const [datos, setDatos] = useState()
    useEffect(()=>{
        const fetchData= async ()=>{
        const dat =await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        const a =await dat.json()
        setDatos(a.title)
        }
        fetchData()
    },[])
  return (
    <p>{datos}</p>
  )
}

export default EjerUno