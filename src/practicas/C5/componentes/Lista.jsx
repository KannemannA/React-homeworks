import React from 'react'
import styles from "./Lista.modules.css"

function Lista(props) {
  return (
    <ul className={styles.lista}>{props.children}</ul>
  )
}

export default Lista