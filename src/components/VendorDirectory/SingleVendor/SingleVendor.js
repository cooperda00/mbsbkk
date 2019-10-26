//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./SingleVendor.module.scss"
//Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaHome } from "react-icons/fa"

const SingleVendor = ({ vendor }) => {
  const website = vendor.website
  const name = vendor.name
  const image = vendor.image.fluid
  const logo = vendor.logo.fluid
  const events = vendor.event
  const blurb = vendor.blurb.blurb
  const facebook = vendor.facebook
  const twitter = vendor.twitter
  const instagram = vendor.instagram

  return (
    <div className={styles.SingleVendor}>
      <div className={styles.ImageContainer}>
        <Image fluid={image} className={styles.Image} />
      </div>

      <div className={styles.Title}>
        <div className={styles.LogoContainer}>
          <Image fluid={logo} className={styles.Logo} />
        </div>

        <h3>{name}</h3>
      </div>

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
      <p className={styles.Blurb}>{blurb}</p>
    </div>
  )
}

export default SingleVendor
