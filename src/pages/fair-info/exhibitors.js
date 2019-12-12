//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import Hero from "../../components/Utility/Hero/Hero"
import Exhibitors from "../../components/FairInfo/Exhibitors"

const ExhibitorsPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy.edges[0].node

  return (
    <Layout>
      <SEO
        titleExtra="Exhibitors"
        keywordsExtra=""
        descriptionExtra="Exhibitors"
      />
      <Hero type="page" image={image} />
      <Exhibitors copy={copy} />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "exhibitors.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    copy: allContentfulExhibitorsPage {
      edges {
        node {
          mainText {
            json
          }
        }
      }
    }
  }
`

export default ExhibitorsPage
