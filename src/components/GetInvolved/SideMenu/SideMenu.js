//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./SideMenu.module.scss"

const SideMenu = () => {
  const data = useStaticQuery(query)
  const heal = data.heal.childImageSharp.fluid
  const inspire = data.inspire.childImageSharp.fluid
  const sponsor = data.sponsor.childImageSharp.fluid
  const volunteer = data.volunteer.childImageSharp.fluid
  const exhibit = data.exhibit.childImageSharp.fluid

  return (
    <div className={styles.SideMenu}>
      <a href="#exhibit" className={styles.MenuTile}>
        <p>Exhibit</p>

        <Image
          fluid={exhibit}
          className={styles.Image}
          alt="Flowers in vases"
        />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />
      </a>

      <a href="#inspire" className={styles.MenuTile}>
        <p>Inspire</p>

        <Image
          fluid={inspire}
          className={styles.Image}
          alt="A woman looking through a leaf"
        />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />
      </a>

      <a href="#heal" className={styles.MenuTile}>
        <p>Heal</p>

        <Image fluid={heal} className={styles.Image} alt="A succulent" />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />
      </a>

      <a href="#sponsor" className={styles.MenuTile}>
        <p>Sponsor</p>

        <Image
          fluid={sponsor}
          className={styles.Image}
          alt="People holding their hands in heart shapes"
        />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />
      </a>

      <a href="#volunteer" className={styles.MenuTile}>
        <p>Volunteer</p>

        <Image
          fluid={volunteer}
          className={styles.Image}
          alt="People with their arms around eachother"
        />

        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />
      </a>
    </div>
  )
}

const query = graphql`
  {
    heal: file(relativePath: { eq: "get_involved_heal.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    inspire: file(relativePath: { eq: "get_involved_inspire.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    inspire: file(relativePath: { eq: "get_involved_inspire.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    sponsor: file(relativePath: { eq: "get_involved_sponsor.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    volunteer: file(relativePath: { eq: "get_involved_volunteer.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    exhibit: file(relativePath: { eq: "herbs.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SideMenu
