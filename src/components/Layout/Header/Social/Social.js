//Modules
import React from "react"
//Sass
import styles from "./Social.module.scss"
//Constants
import { social } from "../../../../constants/social"

const Social = () => {
  return (
    <div className={styles.Social}>
      {social.map(link => {
        return (
          <a
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
            style={{ color: "gray" }}
            aria-label={`Link to our ${link.name}`}
          >
            {link.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Social