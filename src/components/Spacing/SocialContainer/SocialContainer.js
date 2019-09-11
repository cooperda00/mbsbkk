//Modules
import React from "react"
//Sass
import styles from "./SocialContainer.module.scss"

const SocialContainer = ({ children }) => {
  return <div className={styles.SocialContainer}>{children}</div>
}

export default SocialContainer
