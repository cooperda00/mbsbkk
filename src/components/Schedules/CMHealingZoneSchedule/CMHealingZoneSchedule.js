//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./CMHealingZoneSchedule.module.scss"
//Components
// import HZTimetable from "../HZTimetable/HZTimetable"

const CMHealingZoneSchedule = () => {
  const data = useStaticQuery(query)
  // const { saturday, sunday } = data
  const posters = data.schedules.posters

  console.log(posters)

  return (
    <div className={styles.CMHealingZoneSchedule}>
      <hr />
      <h2>Chiang Mai Schedule</h2>
      {/* <HZTimetable title="Saturday" timetable={saturday} />
      <HZTimetable title="Sunday" timetable={sunday} /> */}

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

    schedules: contentfulScheduleHealingZone(event: { eq: "CM" }) {
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

export default CMHealingZoneSchedule
