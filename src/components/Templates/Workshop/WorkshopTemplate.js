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
import SingleWorkshop from "../../WorkshopDirectory/SingleWorkshop/SingleWorkshop"

const WorkshopTemplate = ({ data, location }) => {
  const image = data.bg.childImageSharp.fluid
  const name = data.singleWorkshop.name

  return (
    <Layout location={location}>
      <SEO titleExtra={name} keywordsExtra="" descriptionExtra="" />
      <Hero type="page" image={image}></Hero>
      <section className={styles.FairInfo}>
        <div className={styles.Container}>
          <SideMenu />

          <SingleWorkshop workshop={data.singleWorkshop} />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    singleWorkshop: contentfulWorkshop(slug: { eq: $slug }) {
      name
      room
      time
      facilitatorName
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
      bookingUrl
    }

    bg: file(relativePath: { eq: "workshops.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default WorkshopTemplate
