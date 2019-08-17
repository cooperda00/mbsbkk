//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./InstagramWidget.module.scss"

const InstagramWidget = ({ insta, user }) => {
  const username = user.username
  const userImage = user.profile_pic_url
  const userBio = user.biography

  return (
    <section className={styles.InstagramWidget}>
      <div className={styles.UserInfo}>
        <a
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={userImage} alt={username} />
        </a>
        <div>
          <a
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <h1>@{username}</h1>{" "}
          </a>
          <p>{userBio}</p>
        </div>
      </div>

      <div className={styles.FeedGrid}>
        {insta &&
          insta.map(({ node }) => {
            return (
              <a
                href={`https://instagram.com/p/${node.id}`}
                target="_blank"
                rel="noopener noreferrer"
                key={node.id}
                className={styles.Tile}
              >
                <Image fixed={node.localFile.childImageSharp.fixed} />
                <div className={styles.ImageOverlay} />
              </a>
            )
          })}
      </div>
    </section>
  )
}

export default InstagramWidget
