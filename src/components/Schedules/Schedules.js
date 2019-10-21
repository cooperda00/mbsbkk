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

      <h3>Chiang Mai</h3>
      <ChiangMaiSchedules />

      <hr />

      <h3>Bangkok</h3>
      <p>Coming Soon</p>
    </section>
  )
}

export default Schedules
