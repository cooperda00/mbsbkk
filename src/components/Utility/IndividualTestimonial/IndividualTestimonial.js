//Modules
import React from "react"
//Sass
import styles from "./IndividualTestimonial.module.scss"
//Icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Item = ({ text, bigText }) => {
  return (
    <div className={styles.IndividualTestimonial}>
      <h3 className={styles.Title}>
        <FaQuoteLeft /> {bigText} <FaQuoteRight />
      </h3>
      <p className={styles.ExtraBlurb}>{text}</p>
      {/* <p className={styles.Name}>{item.name}</p> */}
    </div>
  )
}

export default Item
