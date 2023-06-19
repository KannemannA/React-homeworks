import React, { useMemo } from 'react'
import dataProduct from "./../../../../fakeApi/products.json"

function Products() {
  const funcion= useMemo(()=>{ console.log("lolas")
    return dataProduct.filter(e=>e.precio >50)
  },[])
  return (
    <ul>
      {funcion.map(e=><li key={e.id}>nombre: {e.nombre}<br/>precio: {e.precio}<br />descripcion: {e.descripcion}</li>)}
    </ul>
    
  )
}

export default Products