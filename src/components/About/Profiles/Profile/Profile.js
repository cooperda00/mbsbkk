//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./Profile.module.scss"

const Profile = ({ profile }) => {
  const { frontmatter, html } = profile
  const {
    name,
    passions,
    word,
    image: {
      childImageSharp: { fluid },
    },
  } = frontmatter

  return (
    <div className={styles.Profile}>
      <div className={styles.Left}>
        <div className={styles.ImageContainer}>
          <Image fluid={fluid} className={styles.Image} />
        </div>
      </div>

      <div className={styles.Right}>
        <h3>{name}</h3>

        <p className={styles.Passions}>
          Current Passions:{" "}
          {passions.map((passion, i) => {
            return i !== passions.length - 1 ? `${passion}, ` : `${passion}`
          })}
        </p>

        <p className={styles.Word}>Favourite Word: {word}</p>

        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className={styles.Bio}
        />
      </div>
    </div>
  )
}

export default Profile
