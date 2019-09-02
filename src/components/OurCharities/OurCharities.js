//Modules
import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
//Sass
import styles from "./OurCharities.module.scss"

const OurCharities = ({ copy }) => {
  const html = copy.html

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

        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className={styles.Copy}
        />
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
