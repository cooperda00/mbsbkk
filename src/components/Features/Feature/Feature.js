//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./Feature.module.scss"

const Feature = ({ node, selectedClass }) => {
  const selectedStyle =
    selectedClass === "reverse"
      ? `${styles.Reverse} ${styles.Feature}`
      : `${styles.Forward} ${styles.Feature}`
  return (
    <div key={node.id} className={selectedStyle}>
      <div className={styles.Left}>
        <Image
          fluid={node.frontmatter.image.childImageSharp.fluid}
          className={styles.FeatureImage}
        />
      </div>

      <div className={styles.Right}>
        <div className={styles.Title}>
          <h1 className={styles.Number}>0{node.frontmatter.number}</h1>
          <h1 className={styles.Name}>{node.frontmatter.title}</h1>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: node.html }}
          className={styles.HTML}
        />
      </div>
    </div>
  )
}

export default Feature
