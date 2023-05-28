import React from 'react'
import stylesItem from "../../C5/componentes/Item.module.css"
import stylesLista from "../../C5/componentes/Lista.module.css"

function Card(props) {
    const pasaManos=()=>{
      const {addToCart, ...data}= props
        addToCart(data);
    }
  return (
    <>
      <div className={stylesItem.item}>
        <h4 className={stylesLista['gradient-text']}>
          {props.titulo}
          <br />
          {props.precio}
        </h4>
        <p className={stylesLista['gradient-text']}>
            {props.descripcion}
        </p>
        <button onClick={pasaManos}>Comprame!</button>
      </div>
    </>
  )
}

export default Card