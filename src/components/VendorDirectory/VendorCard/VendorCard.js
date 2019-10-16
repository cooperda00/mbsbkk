//Modules
import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
//Sass
import styles from "./VendorCard.module.scss"
//Icons
import { FaLongArrowAltRight } from "react-icons/fa"

const VendorCard = ({ node }) => {
  return (
    <Link
      className={styles.VendorCard}
      to={`/fair-info/exhibitors/${node.slug}`}
    >
      <div className={styles.CardImageContainer}>
        <Image fluid={node.image.fluid} className={styles.Image} />
      </div>
      <h3 className={styles.CardTitle}>{node.name}</h3>
      <p className={styles.CardBlurb}>
        {" "}
        {node.blurb.blurb.substr(0, 350) + "..."}
      </p>

      <Link
        to={`/fair-info/exhibitors/${node.slug}`}
        className={styles.ReadMore}
      >
        More Info <FaLongArrowAltRight />
      </Link>
    </Link>
  )
}

export default VendorCard
