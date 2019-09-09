//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Utility/Hero/Hero"
import OurCharities from "../components/OurCharities/OurCharities"

const CharitiesPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy

  return (
    <Layout>
      <SEO
        titleExtra="Our Charities"
        keywordsExtra="charity, fatima centre"
        descriptionExtra="Our Charities"
      />
      <Hero image={image} type="page" position="top" />
      <OurCharities copy={copy} />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "our_charities.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    copy: markdownRemark(frontmatter: { title: { eq: "Our Charities" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default CharitiesPage
