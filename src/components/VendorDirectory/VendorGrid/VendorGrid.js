//Modules
import React from "react"
//Sass
import styles from "./VendorGrid.module.scss"
//Components
import VendorCard from "../VendorCard/VendorCard"

const VendorGrid = ({ vendors, type }) => {
  return (
    <div className={styles.VendorGrid}>
      {vendors.map(({ node }) => {
        if (!node.hidden) {
          return <VendorCard node={node} key={node.id} type={type} />
        } else {
          return null
        }
      })}
    </div>
  )
}

export default VendorGrid
