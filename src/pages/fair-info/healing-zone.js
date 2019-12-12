//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import Hero from "../../components/Utility/Hero/Hero"
import HealingZone from "../../components/FairInfo/HealingZone"

const HealingZonePage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy.edges[0].node

  return (
    <Layout>
      <SEO
        titleExtra="Healing Zone"
        keywordsExtra=""
        descriptionExtra="Healing Zone"
      />
      <Hero type="page" image={image} position="top" />
      <HealingZone copy={copy} />
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

    copy: allContentfulHealingZonePage {
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

export default HealingZonePage
