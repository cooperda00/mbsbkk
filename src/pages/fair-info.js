//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Utility/Hero/Hero"
import FairInfo from "../components/FairInfo/FairInfo"

const FairInfoPage = ({ data, location }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy.edges[0].node

  return (
    <Layout location={location}>
      <SEO
        titleExtra="Fair Info"
        keywordsExtra="information"
        descriptionExtra="Fair Info"
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

    copy: allContentfulFairInfoPage {
      edges {
        node {
          topText {
            json
          }
          bkkEventDetails {
            json
          }
          cmEventDetails {
            json
          }
          newsletter {
            json
          }
          sustainability {
            json
          }
        }
      }
    }
  }
`

export default FairInfoPage
