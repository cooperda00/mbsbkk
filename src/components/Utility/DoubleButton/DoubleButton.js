//Modules
import React from "react"
//Sass
import styles from "./DoubleButton.module.scss"

const DoubleButton = ({ link1, link2 }) => {
  return (
    <div className={styles.DoubleButton}>
      <a
        href={link1.link}
        className={styles.Button1}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link1.text}
      </a>
      <a
        href={link2.link}
        className={styles.Button2}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link2.text}
      </a>
    </div>
  )
}

export default DoubleButton
