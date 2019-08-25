//Modules
import React from "react"
//Sass
import styles from "./Copy.module.scss"

const Copy = ({ html }) => {
  return (
    <div className={styles.Copy}>
      <div dangerouslySetInnerHTML={{ __html: html }} className={styles.HTML} />
    </div>
  )
}

export default Copy
