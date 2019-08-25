//Modules
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./SideMenu.module.scss"

const SideMenu = ({ links }) => {
  const data = useStaticQuery(query)
  const image = data.image.childImageSharp.fluid

  return (
    <div className={styles.SideMenu}>
      <div className={styles.InfoCard}>
        <p>
          Event Date:
          <span>1 - 2 February 2020</span>
        </p>
        <p>
          Event Time:
          <span>9am - 6pm</span>
        </p>
        <p>
          Event Location:{" "}
          <span>
            <a href="https://goo.gl/maps/MToD7u3Gn7BDquKH8">
              Jasmine City Hotel, Asok
            </a>
          </span>
        </p>
      </div>

      {links.map((link, i) => {
        return (
          <Link to={link.path} key={i} className={styles.MenuTile}>
            <p>{link.text}</p>

            <Image fluid={image} className={styles.Image} />

            <div className={styles.Overlay} />
            <div className={styles.Overlay2} />
          </Link>
        )
      })}
    </div>
  )
}

const query = graphql`
  {
    image: file(relativePath: { eq: "lotus.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SideMenu
