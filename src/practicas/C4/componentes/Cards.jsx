import React from 'react'

const Cards = (props) => {
  return (
    <>
        <header>{props.title}</header>
        {props.children}
        <footer>{props.footer}</footer>
    </>
  )
}

export default Cards