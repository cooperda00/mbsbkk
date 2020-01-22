//Modules
import React from "react"
//Sass
import styles from "./Youtube.module.scss"

const Youtube = () => {
  return (
    <section className={styles.Youtube}>
      <div className={styles.VideoContainer}>
        <div className={styles.Video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JYJchtlcLu0?autoplay=0&loop=0&playlist=JYJchtlcLu0"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Mind Body Spirit Fair BKK 2018"
          />
        </div>
      </div>
    </section>
  )
}

export default Youtube
