//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./ChiangMaiSchedules.module.scss"

const ChiangMaiSchedules = ({ schedules }) => {
  const posters = schedules.posters

  return (
    <div className={styles.ChiangMaiSchedules}>
      {posters.map(poster => {
        return (
          <div className={styles.PosterContainer} key={poster.id}>
            <Image fluid={poster.fluid} className={styles.Poster} />
          </div>
        )
      })}
    </div>
  )
}

export default ChiangMaiSchedules
