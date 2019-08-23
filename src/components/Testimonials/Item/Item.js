//Modules
import React from "react"
//Sass
import styles from "./Item.module.scss"
//Icons
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Item = ({ item, location }) => {
  return (
    <div className={location % 2 ? `${styles.Even}` : `${styles.Odd}`}>
      <div className={styles.Stars}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <h3 className={styles.Title}>
        <FaQuoteLeft /> {item.bigText} <FaQuoteRight />
      </h3>
      <p className={styles.ExtraBlurb}>{item.text}</p>
      <p className={styles.Name}>{item.name}</p>
    </div>
  )
}

export default Item
