//Modules
import React from "react"
//Sass
import styles from "./Item.module.scss"

const Item = ({ item }) => {
  return (
    <div className={styles.Item}>
      <p>{item.text}</p>
      <h3>
        - {item.name}, {item.country}
      </h3>
    </div>
  )
}

export default Item
