//Modules
import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
//Sass
import styles from "./Feature.module.scss"

const Feature = ({ node }) => {
  return (
    <div key={node.id} className={styles.Feature}>
      <Link to={node.frontmatter.path} className={styles.Left}>
        <Image
          fluid={node.frontmatter.image.childImageSharp.fluid}
          className={styles.FeatureImage}
          alt={node.frontmatter.title}
        />
        <div className={styles.Overlay} />
        <div className={styles.Overlay2} />
        <h1 className={styles.Name}>{node.frontmatter.title}</h1>
      </Link>

      <div className={styles.Right}>
        <div
          dangerouslySetInnerHTML={{ __html: node.html }}
          className={styles.HTML}
        />
      </div>

      {/* <div className={styles.EventButtons}>
        <Link>BKK</Link>
        <Link>CM</Link>
      </div> */}
    </div>
  )
}

export default Feature
