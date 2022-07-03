import React, {useState} from 'react'

import styles from './square.module.css';
const Square = (props) => {
  // Lift up state here
  const [status, setStatus] = useState(false)
  return <button className={styles.square} onClick={() => setStatus(!status)}>{status ? "X" : null}</button>
}

export default Square;