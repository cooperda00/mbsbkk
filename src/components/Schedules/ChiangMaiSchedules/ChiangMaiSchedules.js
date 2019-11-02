//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./ChiangMaiSchedules.module.scss"

const ChiangMaiSchedules = () => {
  const data = useStaticQuery(query)
  const posters = data.schedules.posters

  return (
    <div className={styles.ChiangMaiSchedules}>
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
