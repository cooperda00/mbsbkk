//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../../../components/Layout/Layout"
import SEO from "../../../components/SEO/SEO"
import Hero from "../../../components/Utility/Hero/Hero"
import Workshops from "../../../components/FairInfo/Workshops"

const WorkshopsAndSeminarsPage = ({ data, location }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy.edges[0].node
  const workshops = data.workshops.edges
  const schedules = data.schedules

  return (
    <Layout location={location}>
      <SEO
        titleExtra="Workshops And Seminars"
        keywordsExtra=""
        descriptionExtra="Workshops And Seminars"
      />
      <Hero type="page" image={image} />
      <Workshops copy={copy} workshops={workshops} schedules={schedules} />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "workshops.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    copy: allContentfulWorkshopPageChiangMai {
      edges {
        node {
          mainText {
            json
          }
        }
      }
    }

    workshops: allContentfulWorkshop(
      filter: { event: { eq: "Chiang Mai" } }
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
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

    schedules: contentfulScheduleWorkshopsAndSeminars(event: { eq: "CM" }) {
      event
      posters {
        id
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default WorkshopsAndSeminarsPage
