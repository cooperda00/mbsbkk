//Modules
import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
//Sass
import styles from "./HZCard.module.scss"
//Icons
import { FaLongArrowAltRight } from "react-icons/fa"

const HZCard = ({ node }) => {
  return (
    <Link className={styles.HZCard} to={`/fair-info/healing-zone/${node.slug}`}>
      <div className={styles.CardImageContainer}>
        <Image
          fluid={node.image.fluid}
          className={styles.Image}
          // imgStyle={{
          //   objectFit: "contain",
          // }}
        />
      </div>
      <h3 className={styles.CardTitle}>{node.name}</h3>
      {/* <p className={styles.CardBlurb}>
        {" "}
        {node.blurb.blurb.substr(0, 350) + "..."}
      </p> */}

      <Link
        to={`/fair-info/healing-zone/${node.slug}`}
        className={styles.ReadMore}
      >
        More Info <FaLongArrowAltRight />
      </Link>
    </Link>
  )
}

export default HZCard
