//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import Hero from "../../components/Utility/Hero/Hero"
import FairInfo from "../../components/FairInfo/FairInfo"

const HealingZonePage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy

  return (
    <Layout>
      <SEO titleExtra="Healing Zone" keywordsExtra="" descriptionExtra="Healing Zone" />
      <Hero type="page" image={image} position="top" />
      <FairInfo copy={copy} />
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

    copy: mdx(frontmatter: { queryName: { eq: "fairInfoHealingZone" } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default HealingZonePage
