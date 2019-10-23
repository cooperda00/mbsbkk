//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Sass
import styles from "./CMHealingZoneSchedule.module.scss"

const CMHealingZoneSchedule = () => {
  // const data = useStaticQuery(query)
  // const { saturday, sunday } = data

  return (
    <div className={styles.CMHealingZoneSchedule}>
      <h1>Healing Zone Schedules</h1>
    </div>
  )
}

// const query = graphql`
//   {
//     saturday: contentfulChiangMaiSeminarSchedule(day: { eq: "Saturday" }) {
//       am
//       pm
//     }

//     sunday: contentfulChiangMaiSeminarSchedule(day: { eq: "Sunday" }) {
//       am
//       pm
//     }
//   }
// `

export default CMHealingZoneSchedule
