//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./CMHealingZoneSchedule.module.scss"

const CMHealingZoneSchedule = () => {
  const data = useStaticQuery(query)
  const posters = data.schedules.posters

  return (
    <div className={styles.CMHealingZoneSchedule}>
      <hr />
      <h2>Chiang Mai Schedule</h2>
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

const query = graphql`
  {
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
