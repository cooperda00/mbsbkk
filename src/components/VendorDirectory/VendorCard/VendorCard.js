//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./VendorCard.module.scss"

const VendorCard = ({ node }) => {
  return (
    <div className={styles.VendorCard}>
      <div className={styles.CardImageContainer}>
        <Image fluid={node.image.fluid} className={styles.Image} />
      </div>
      <h3 className={styles.CardTitle}>{node.name}</h3>
      <p className={styles.CardBlurb}>
        {" "}
        {node.blurb.blurb.substr(0, 350) + "..."}
      </p>
    </div>
  )
}

export default VendorCard
