//Modules
import React from "react"
//Sass
import styles from "./HZGrid.module.scss"
//Components
import HZCard from "../HZCard/HZCard"

const HZGrid = ({ HZ }) => {
  return (
    <div className={styles.HZGrid}>
      {HZ.map(({ node }) => {
        if (!node.hidden) {
          return <HZCard node={node} key={node.id} />
        } else {
          return null
        }
      })}
    </div>
  )
}

export default HZGrid
