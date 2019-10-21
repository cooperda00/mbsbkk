//Modules
import React from "react"
//Sass
import styles from "./Schedules.module.scss"
//Components
import CMSchedule from "./CMSchedule/CMSchedule"

const Schedules = () => {
  return (
    <section className={styles.Schedules}>
      <h3>Schedules:</h3>

      <CMSchedule />
    </section>
  )
}

export default Schedules
