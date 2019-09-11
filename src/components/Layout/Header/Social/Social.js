//Modules
import React from "react"
//Sass
import styles from "./Social.module.scss"
//Constants
import { social } from "../../../../constants/social"

const Social = ({ header }) => {
  return (
    <div
      className={
        header ? `${styles.Social} ${styles.Header}` : `${styles.Social}`
      }
    >
      {social.map(link => {
        return (
          <a
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
            style={{ color: "gray" }}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Social
