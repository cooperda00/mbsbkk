//Modules
import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//Sass
import styles from "./OurCharities.module.scss"

const OurCharities = ({ copy }) => {
  const data = useStaticQuery(query)
  const fatima = data.fatima.childImageSharp.fluid

  return (
    <section className={styles.OurCharities}>
      <div className={styles.Container}>
        <div className={styles.Images}>
          <div className={styles.ImageContainer}>
            <Image
              fluid={fatima}
              className={styles.Image}
              alt="Evelin and Alison with a nun from the Fatima Centre"
            />
          </div>
        </div>

        <div className={styles.Copy}>{documentToReactComponents(copy)}</div>
      </div>
    </section>
  )
}

const query = graphql`
  {
    fatima: file(relativePath: { eq: "fatima.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default OurCharities
