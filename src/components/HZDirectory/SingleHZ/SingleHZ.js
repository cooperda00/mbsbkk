//Modules
import React from "react"
import Image from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//Sass
import styles from "./SingleHZ.module.scss"
//Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaHome } from "react-icons/fa"

const SingleHZ = ({ HZ }) => {
  const website = HZ.website
  const name = HZ.name
  const image = HZ.image.fluid
  const events = HZ.event
  const blurb = HZ.blurb.blurb
  const facebook = HZ.facebook
  const twitter = HZ.twitter
  const instagram = HZ.instagram
  const extraInfo = HZ.extraInfo.json

  return (
    <div className={styles.SingleHZ}>
      <div className={styles.ImageContainer}>
        <Image fluid={image} className={styles.Image} />
      </div>
      <h3 className={styles.Title}>{name}</h3>
      <div className={styles.Social}>
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <FaHome />
          </a>
        )}
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        )}
      </div>
      <div className={styles.Events}>
        {events &&
          events.map(event => {
            if (event === "Chiang Mai") {
              return (
                <p className={`${styles.Event} ${styles.ChiangMai}`}>{event}</p>
              )
            } else {
              return <p className={`${styles.Event} ${styles.BKK}`}>{event}</p>
            }
          })}
      </div>

      <div className={styles.RichText}>
        {documentToReactComponents(extraInfo)}
      </div>

      <p className={styles.Blurb}>{blurb}</p>
    </div>
  )
}

export default SingleHZ
