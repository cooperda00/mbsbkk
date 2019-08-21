//Modules
import React from "react"
//Sass
import styles from "./BannerText.module.scss"

const BannerText = ({ title, info, children, text }) => {
  return (
    <section className={styles.BannerText}>
      <div className={styles.Left}>
        <h1 style={text === "dark" ? { color: "hsl(24, 24%, 11%)" } : null}>
          {title}
        </h1>
        {info && <h2>{info}</h2>}
      </div>
      <div className={styles.Right}>{children}</div>
    </section>
  )
}

export default BannerText
