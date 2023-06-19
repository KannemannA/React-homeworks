import React, { useState } from 'react'
import { useEffect } from 'react'

function EjerDos() {
    const [cargando, setCargando] = useState("Cargando datos")
    const [datos, setDatos] = useState()
    const [bool, setBool] = useState()
    const accion=()=>{setBool(true)}
    const fetchData= async () =>{
        accion()
        const data = await(await fetch("https://cat-fact.herokuapp.com/facts")).json()
        let dat=[]
        data.map((item)=>{
            let it={id: item._id, text: item.text}
            dat.push(it)
        })
        setDatos(dat)
        setBool(false)
    }
    const formato = () =>{
        let lista = []
        datos.map((item)=>{lista.push(<li style={{listStyle:'none'}}>Id: {item.id} <br />Text: {item.text}<hr /></li>)})
        return <ul>
            {lista}
        </ul>
    }
    
  return (
    <>
        <button onClick={fetchData}>buscar datos</button>
        {bool?<p>{cargando}</p>:undefined}
        {datos?formato():undefined}
    </>
  )
}

export default EjerDos