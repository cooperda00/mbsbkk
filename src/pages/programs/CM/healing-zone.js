//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../../../components/Layout/Layout"
import SEO from "../../../components/SEO/SEO"
import Hero from "../../../components/Utility/Hero/Hero"
import HealingZone from "../../../components/FairInfo/HealingZone"

const HealingZonePage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy.edges[0].node
  const healingZone = data.HZ.edges
  const schedules = data.schedules

  return (
    <Layout>
      <SEO
        titleExtra="Healing Zone"
        keywordsExtra=""
        descriptionExtra="Healing Zone"
      />
      <Hero type="page" image={image} position="top" />
      <HealingZone
        copy={copy}
        healingZone={healingZone}
        schedules={schedules}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "healing_zone.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    copy: allContentfulHealingZonePageChiangMai {
      edges {
        node {
          mainText {
            json
          }
        }
      }
    }

    HZ: allContentfulHealingZonePractitioner(
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

    schedules: contentfulScheduleHealingZone(event: { eq: "CM" }) {
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

export default HealingZonePage
