import React, { useState } from 'react'
import dataBooks from "./../../../../fakeApi/books.json"
import { useMemo } from 'react'

function Books() {
  const [valueSelect,setValueSelect] = useState("Roshar")
  const bookFilter= useMemo(()=>{console.log("ooh")
    return dataBooks.filter(i=>i.planeta===valueSelect)
  },[valueSelect])
  return (
    <>
    <select name="select" defaultValue={"Roshar"} onChange={(e)=>setValueSelect(e.target.value)}>
      <option value="Nalthis">Nalthis</option>
      <option value="Roshar">Roshar</option>
      <option value="Skadrial">Skadrial</option>
      <option value="Threnody">Threnody</option>
    </select>
    <ul>
      {bookFilter.map(book=><li key={book.id}>nombre: {book.nombre}<br />saga: {book.saga}<br />año: {book.año}<br />paginas: {book.paginas}</li>)}
    </ul>
  </>
  )
}

export default Books