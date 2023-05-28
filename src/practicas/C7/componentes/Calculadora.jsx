import React from 'react'
import { useState } from 'react'

function Calculadora({amount, onEquals}) {
    const [total, setTotal]= useState(0)
    const suma=()=>setTotal(total+amount)
    const resta=()=>setTotal(total-amount)
    const reset=()=>setTotal(0)
    const igual=()=>{
      console.log(total)
      onEquals(total)
    }
  return (
    <>  
        <h3>Calculadora numero: {amount}</h3>
        <h4>{total}</h4>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={igual}>=</button>
    </>
  )
}

export default Calculadora