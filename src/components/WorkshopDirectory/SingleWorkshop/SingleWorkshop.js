//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./SingleWorkshop.module.scss"
//Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaHome } from "react-icons/fa"

const SingleWorkshop = ({ workshop }) => {
  const website = workshop.website
  const name = workshop.name
  const image = workshop.image.fluid
  const events = workshop.event
  const blurb = workshop.blurb.blurb
  const facebook = workshop.facebook
  const twitter = workshop.twitter
  const instagram = workshop.instagram

  const room = workshop.room
  const time = workshop.time
  const facilitatorName = workshop.facilitatorName

  return (
    <div className={styles.SingleWorkshop}>
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

      <div className={styles.Details}>
        <p>
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Room:</strong> {room}
        </p>
        <p>
          <strong>Facilitator:</strong> {facilitatorName}
        </p>
      </div>

      {workshop.bookingUrl && (
        <a
          href={workshop.bookingUrl}
          className={styles.BookNow}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      )}

      <p className={styles.Blurb}>{blurb}</p>
    </div>
  )
}

export default SingleWorkshop
