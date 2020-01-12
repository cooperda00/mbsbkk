//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../../../components/Layout/Layout"
import SEO from "../../../components/SEO/SEO"
import Hero from "../../../components/Utility/Hero/Hero"
import Exhibitors from "../../../components/FairInfo/Exhibitors"

const ExhibitorsPage = ({ data, location }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy.edges[0].node
  const vendors = data.vendors.edges

  return (
    <Layout location={location}>
      <SEO
        titleExtra="Exhibitors"
        keywordsExtra=""
        descriptionExtra="Exhibitors"
      />
      <Hero type="page" image={image} />
      <Exhibitors copy={copy} vendors={vendors} />
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

    vendors: allContentfulVendor(
      sort: { order: ASC, fields: name }
      filter: { event: { eq: "Bangkok" } }
    ) {
      edges {
        node {
          event
          hidden
          slug
          id
          name
          blurb {
            blurb
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default ExhibitorsPage
