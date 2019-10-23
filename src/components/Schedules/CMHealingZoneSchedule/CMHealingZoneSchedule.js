//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Sass
import styles from "./CMHealingZoneSchedule.module.scss"
//Components
import HZTimetable from "../HZTimetable/HZTimetable"

const CMHealingZoneSchedule = () => {
  const data = useStaticQuery(query)
  const { saturday, sunday } = data

  return (
    <div className={styles.CMHealingZoneSchedule}>
      <hr />
      <h2>Chiang Mai Schedule</h2>
      <HZTimetable title="Saturday" timetable={saturday} />
      <HZTimetable title="Sunday" timetable={sunday} />
    </div>
  )
}

const query = graphql`
  {
    saturday: contentfulChiangMaiHealingZoneSchedule(day: { eq: "Saturday" }) {
      day
      am {
        name
        slug
      }
      pm {
        name
        slug
      }
    }

    sunday: contentfulChiangMaiHealingZoneSchedule(day: { eq: "Sunday" }) {
      day
      am {
        name
        slug
      }
      pm {
        name
        slug
      }
    }
  }
`

export default CMHealingZoneSchedule
