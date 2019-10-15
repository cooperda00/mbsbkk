//Modules
import React from "react"
//Sass
import styles from "./VendorGrid.module.scss"
//Components
import VendorCard from "../VendorCard/VendorCard"

const VendorGrid = ({ vendors }) => {
  return (
    <div className={styles.VendorGrid}>
      {vendors.map(({ node }) => (
        <VendorCard node={node} key={node.id} />
      ))}
    </div>
  )
}

export default VendorGrid
