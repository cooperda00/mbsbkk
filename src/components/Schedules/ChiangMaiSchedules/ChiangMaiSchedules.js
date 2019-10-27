//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./ChiangMaiSchedules.module.scss"
//Components
// import Timetable from "../Timetable/Timetable"

const ChiangMaiSchedules = () => {
  const data = useStaticQuery(query)
  // const { saturday, sunday, aSaturday, aSunday, bSaturday, bSunday } = data
  const posters = data.schedules.posters

  return (
    <div className={styles.ChiangMaiSchedules}>
      {/* <Timetable title="Seminar: Saturday" timetable={saturday} />
      <Timetable title="Seminar: Sunday" timetable={sunday} />

      <Timetable title="Workshop A: Saturday" timetable={aSaturday} />
      <Timetable title="Workshop A: Sunday" timetable={aSunday} />

      <Timetable title="Workshop B: Saturday" timetable={bSaturday} />
      <Timetable title="Workshop B: Sunday" timetable={bSunday} /> */}

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

    schedules: contentfulScheduleWorkshopsAndSeminars(event: { eq: "CM" }) {
      event
      posters {
        id
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ChiangMaiSchedules
