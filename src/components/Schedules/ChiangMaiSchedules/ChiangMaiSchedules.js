//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Sass
import styles from "./ChiangMaiSchedules.module.scss"
//Components
import Timetable from "../Timetable/Timetable"

const ChiangMaiSchedules = () => {
  const data = useStaticQuery(query)
  const { saturday, sunday, aSaturday, aSunday, bSaturday, bSunday } = data

  return (
    <div className={styles.ChiangMaiSchedules}>
      <Timetable title="Seminar: Saturday" timetable={saturday} />
      <Timetable title="Seminar: Sunday" timetable={sunday} />

      <Timetable title="Workshop A: Saturday" timetable={aSaturday} />
      <Timetable title="Workshop A: Sunday" timetable={aSunday} />

      <Timetable title="Workshop B: Saturday" timetable={bSaturday} />
      <Timetable title="Workshop B: Sunday" timetable={bSunday} />
    </div>
  )
}

const query = graphql`
  {
    saturday: contentfulChiangMaiSeminarSchedule(day: { eq: "Saturday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }

    sunday: contentfulChiangMaiSeminarSchedule(day: { eq: "Sunday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }

    aSaturday: contentfulChiangMaiWorkshopASchedule(day: { eq: "Saturday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }

    aSunday: contentfulChiangMaiWorkshopASchedule(day: { eq: "Sunday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }

    bSaturday: contentfulChiangMaiWorkshopBSchedule(day: { eq: "Saturday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }

    bSunday: contentfulChiangMaiWorkshopBSchedule(day: { eq: "Sunday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }
  }
`

export default ChiangMaiSchedules
