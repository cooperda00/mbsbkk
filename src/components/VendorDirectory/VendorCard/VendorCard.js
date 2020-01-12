//Modules
import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
//Sass
import styles from "./VendorCard.module.scss"
//Icons
import { FaLongArrowAltRight } from "react-icons/fa"

const VendorCard = ({ node, type }) => {
  return (
    <Link
      className={styles.VendorCard}
      to={
        type === "workshop"
          ? `/fair-info/workshops-and-seminars/${node.slug}`
          : `/fair-info/exhibitors/${node.slug}`
      }
    >
      <div className={styles.CardImageContainer}>
        <Image
          fluid={node.image.fluid}
          className={styles.Image}
          // imgStyle={{
          //   objectFit: "contain",
          // }}
        />

        {/* EVENT LOCATION */}
        {/* <div className={styles.Event}>
          {node &&
            node.event.map(event => {
              return (
                <div className={event === "Bangkok" ? styles.BKK : styles.CM}>
                  {event}
                </div>
              )
            })}
        </div> */}
      </div>
      <h3
        className={
          node.name.length < 50 ? styles.CardTitle : styles.CardTitleLong
        }
      >
        {node.name}
      </h3>
      {/* <p className={styles.CardBlurb}>
        {" "}
        {node.blurb.blurb.substr(0, 350) + "..."}
      </p> */}

      <Link
        to={
          type === "workshop"
            ? `/fair-info/workshops-and-seminars/${node.slug}`
            : `/fair-info/exhibitors/${node.slug}`
        }
        className={styles.ReadMore}
      >
        More Info <FaLongArrowAltRight />
      </Link>
    </Link>
  )
}

export default VendorCard
