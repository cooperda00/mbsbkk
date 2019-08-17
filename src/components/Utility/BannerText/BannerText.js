//Modules
import React from "react"
//Sass
import styles from "./BannerText.module.scss"

const BannerText = ({ title, info, children }) => {
  return (
    <section className={styles.BannerText}>
      <div className={styles.Left}>
        <h1>{title}</h1>
        {info && <h2>{info}</h2>}
      </div>
      <div className={styles.Right}>{children}</div>
    </section>
  )
}

export default BannerText
