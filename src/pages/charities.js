//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Utility/Hero/Hero"
// import BannerText from "../components/Utility/BannerText/BannerText"

const CharitiesPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  return (
    <Layout>
      <SEO titleExtra="Our Charities" keywordsExtra="" descriptionExtra="" />
      <Hero image={image} type="page" position="top">
        {/* <BannerText title="About Us" text="dark" /> */}
      </Hero>

      <h1>Charity Info Goes Here</h1>
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "our_charities.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default CharitiesPage
