//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./AuthorBio.module.scss"

const AuthorBio = ({ author }) => {
  const name = author.name
  const image = author.portrait.fluid
  const role = author.role

  return (
    <div className={styles.AuthorBio}>
      <div className={styles.ImageContainer}>
        <Image fluid={image} className={styles.Image} />
      </div>
      <div className={styles.Text}>
        <p className={styles.Name}>{name}</p>
        <p className={styles.Role}>{role}</p>
      </div>
    </div>
  )
}

export default AuthorBio
