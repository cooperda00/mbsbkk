//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./CMHealingZoneSchedule.module.scss"

const CMHealingZoneSchedule = ({ schedules }) => {
  const posters = schedules.posters

  return (
    <div className={styles.CMHealingZoneSchedule}>
      <hr />
      <h3>Healing Zone Schedule</h3>
      {posters &&
        posters.map(poster => {
          return (
            <div className={styles.PosterContainer} key={poster.id}>
              <Image fluid={poster.fluid} className={styles.Poster} />
            </div>
          )
        })}
    </div>
  )
}

export default CMHealingZoneSchedule
