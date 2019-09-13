//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./AuthorBioLarge.module.scss"

const AuthorBioLarge = ({ author }) => {
  const name = author.name
  const image = author.portrait.fluid
  const plug = author.personalWebsite
  const role = author.role
  const bio = author.bio.bio

  return (
    <div className={styles.Container}>
      <h3 className={styles.About}>About The Author</h3>
      <div className={styles.AuthorBioLarge}>
        <div className={styles.ImageContainer}>
          <Image fluid={image} className={styles.Image} />
        </div>
        <div className={styles.Text}>
          <p className={styles.Name}>{name}</p>
          <p className={styles.Role}>{role}</p>
          <p className={styles.Bio}>{bio}</p>
          <a
            href={plug}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Plug}
          >
            {plug.replace(/https:\/\/|http:\/\//g, "")}
          </a>
        </div>
      </div>
    </div>
  )
}

export default AuthorBioLarge
