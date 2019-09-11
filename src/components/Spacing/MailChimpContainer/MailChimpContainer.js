//Modules
import React from "react"
//Sass
import styles from "./MailChimpContainer.module.scss"

const MailChimpContainer = ({ children }) => {
  return <div className={styles.MailChimpContainer}>{children}</div>
}

export default MailChimpContainer
