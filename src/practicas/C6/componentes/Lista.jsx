import React from 'react'
import stylesLista from "../../C5/componentes/Lista.module.css"

export function Lista(props) {
  return (
    <ul>
        {props.children}
    </ul>
  )
}

let idItem=0
export function Items(props) {
  return (
    <>
        {props.nombreCuenta!== undefined ?
            <li style={{listStyle:'none'}}>
                <a
                    href={`https://twitter.com/${props.cuenta}`}
                    className={stylesLista['gradient-text']}
                    target='_blank'
                >
                    {props.nombreCuenta}
                </a>
            </li>
        : undefined } 
        {props.productoListaNombre!== undefined ?
            <li style={{listStyle:'none'}}>
                <h4 className={stylesLista['gradient-text']}>
                    {props.productoListaNombre}
                    <br />
                    {props.precio}
                </h4>
                <p className={stylesLista['gradient-text']}>
                    {props.descripcion}
                </p>
            </li>
            : undefined
        }
        {props.apodo !== undefined ?
        <li style={{listStyle:'none'}} className={stylesLista['gradient-text']}>
            {props.apodo}:
            <br />
            {props.mascotas.map((m) =>{
                return (
                    `◾ ${m.nombre} (${m.edad}): ${m.color}   `
                )}
            )}
            <hr />
        </li>
        : undefined}
    </>
  )
}
