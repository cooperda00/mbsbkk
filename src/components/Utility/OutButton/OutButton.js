//Modules
import React from "react"
//Sass
import styles from "./OutButton.module.scss"

const OutButton = ({ path, text, type }) => {
  return (
    <a
      href={path}
      className={
        type === "2"
          ? `${styles.OutButton} ${styles.AltColor}`
          : `${styles.OutButton}`
      }
      target="_bank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

export default OutButton
