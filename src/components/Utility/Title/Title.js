//Modules
import React from "react"
//Sass
import styles from "./Title.module.scss"

const Title = ({ title, subtitle }) => {
  return (
    <>
      {title && <h3 className={styles.Title}>{title}</h3>}
      {subtitle && <h3 className={styles.Subtitle}>{subtitle}</h3>}
    </>
  )
}

export default Title
