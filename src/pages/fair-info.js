//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Utility/Hero/Hero"
import FairInfo from "../components/FairInfo/FairInfo"

const FairInfoPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy

  return (
    <Layout>
      <SEO
        titleExtra="Fair Info"
        keywordsExtra="information"
        descriptionExtra=""
      />
      <Hero type="page" image={image}></Hero>
      <FairInfo copy={copy} />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "vendor_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    copy: mdx(frontmatter: { title: { eq: "Fair Info" } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default FairInfoPage
