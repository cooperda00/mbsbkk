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
        <p className={styles.FairInfoText}>Fair Info</p>

        <Image
          fluid={info}
          className={styles.Image}
          alt="A close up of a stall"
        />

        {/* <div className={styles.Overlay} />
        <div className={styles.Overlay2} /> */}
        <div className={styles.Overlay3} />
      </Link>

      <div to="/fair-info/exhibitors" className={styles.MenuTile}>
        <p>Exhibitors</p>

        <Image
          fluid={exhibitors}
          className={styles.Image}
          alt="A woman handing a bag over to a customer"
        />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />

        <div className={styles.EventButtons}>
          <Link className={styles.Bangkok} to="/programs/BKK/exhibitors">
            BKK
          </Link>

          <Link className={styles.ChiangMai} to="/programs/CM/exhibitors">
            CM
          </Link>
        </div>
      </div>

      <div to="/fair-info/healing-zone" className={styles.MenuTile}>
        <p>Healing Zone</p>

        <Image
          fluid={healingZone}
          className={styles.Image}
          alt="A woman receiving healing"
        />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />

        <div className={styles.EventButtons}>
          <Link className={styles.Bangkok} to="/programs/BKK/healing-zone">
            BKK
          </Link>
          <Link className={styles.ChiangMai} to="/programs/CM/healing-zone">
            CM
          </Link>
        </div>
      </div>

      <div to="/fair-info/workshops-and-seminars" className={styles.MenuTile}>
        <p>Workshops</p>

        <Image
          fluid={workshops}
          className={styles.Image}
          alt="A group of happy young people sat against a wall"
        />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />

        <div className={styles.EventButtons}>
          <Link
            className={styles.Bangkok}
            to="/programs/BKK/workshops-and-seminars"
          >
            BKK
          </Link>
          <Link
            className={styles.ChiangMai}
            to="/programs/CM/workshops-and-seminars"
          >
            CM
          </Link>
        </div>
      </div>
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
