//Modules
import React from "react"
import { graphql } from "gatsby"
//Sass
import styles from "../../FairInfo/FairInfo.module.scss"
//Components
import SideMenu from "../../FairInfo/SideMenu/SideMenu"
import Layout from "../../Layout/Layout"
import SEO from "../../SEO/SEO"
import Hero from "../../Utility/Hero/Hero"
import SingleHZ from "../../HZDirectory/SingleHZ/SingleHZ"

const HZTemplate = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  return (
    <Layout>
      <SEO titleExtra="" keywordsExtra="" descriptionExtra="" />
      <Hero type="page" image={image}></Hero>
      <section className={styles.FairInfo}>
        <div className={styles.Container}>
          <SideMenu />

          <SingleHZ HZ={data.singleHZ} />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    singleHZ: contentfulHealingZonePractitioner(slug: { eq: $slug }) {
      name
      event
      blurb {
        blurb
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      website
      facebook
      twitter
      instagram
    }

    bg: file(relativePath: { eq: "healing_zone.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HZTemplate
