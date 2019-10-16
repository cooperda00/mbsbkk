//Modules
import React from "react"
//Sass
import styles from "./SingleVendor.module.scss"

const SingleVendor = ({ vendor }) => {
  return (
    <div className={styles.SingleVendor}>
      <h3>{vendor.name}</h3>
      <p>I WILL BE THE INFO FOR</p>
    </div>
  )
}

export default SingleVendor
