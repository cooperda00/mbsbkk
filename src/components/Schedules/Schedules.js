//Modules
import React from "react"
//Sass
import styles from "./Schedules.module.scss"
//Components
import ChiangMaiSchedules from "./ChiangMaiSchedules/ChiangMaiSchedules"

const Schedules = () => {
  return (
    <section className={styles.Schedules}>
      <hr />

      <h3>Workshop Schedule</h3>

      <ChiangMaiSchedules />
    </section>
  )
}

export default Schedules
