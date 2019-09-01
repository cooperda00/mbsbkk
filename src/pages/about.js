//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import About from "../components/About/About"
import Hero from "../components/Utility/Hero/Hero"

const AboutPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  return (
    <Layout>
      <SEO titleExtra="About Us" keywordsExtra="" descriptionExtra="" />
      <Hero image={image} type="page" />
      <About />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "get_involved_volunteer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
