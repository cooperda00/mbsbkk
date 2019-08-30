//Modules
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./SideMenu.module.scss"

const SideMenu = () => {
  const data = useStaticQuery(query)
  const exhibitors = data.exhibitors.childImageSharp.fluid
  const healingZone = data.healingZone.childImageSharp.fluid
  const workshops = data.workshops.childImageSharp.fluid
  const info = data.info.childImageSharp.fluid

  return (
    <div className={styles.SideMenu}>
      <Link to="/fair-info" className={styles.MenuTile}>
        <p>Fair Info</p>

        <Image fluid={info} className={styles.Image} />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />
      </Link>

      <Link to="/fair-info/exhibitors" className={styles.MenuTile}>
        <p>Exhibitors</p>

        <Image fluid={exhibitors} className={styles.Image} />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />
      </Link>

      <Link to="/fair-info/healing-zone" className={styles.MenuTile}>
        <p>Healing Zone</p>

        <Image fluid={healingZone} className={styles.Image} />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />
      </Link>

      <Link to="/fair-info/workshops-and-seminars" className={styles.MenuTile}>
        <p>Workshops</p>

        <Image fluid={workshops} className={styles.Image} />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />
      </Link>
    </div>
  )
}

const query = graphql`
  {
    info: file(relativePath: { eq: "vendor_3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    exhibitors: file(relativePath: { eq: "exhibitors.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    healingZone: file(relativePath: { eq: "healing_zone.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    workshops: file(relativePath: { eq: "workshops.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SideMenu
