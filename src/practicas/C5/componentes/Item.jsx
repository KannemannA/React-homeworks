import React from 'react'
import styles from "./Lista.modules.css"


function Item(props) {
  return (
    <li className={styles.item}>{props.children}</li>
  )
}

export default Item