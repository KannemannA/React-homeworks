import React from 'react'

const Card = (props) => {
  return (
    <>
        <header>{props.title}</header>
        {props.children}
        <footer>{props.footer}</footer>
    </>
  )
}

export default Card