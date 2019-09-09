//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import Hero from "../../components/Utility/Hero/Hero"
import FairInfo from "../../components/FairInfo/FairInfo"

const ExhibitorsPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy

  return (
    <Layout>
      <SEO titleExtra="Exhibitors" keywordsExtra="" descriptionExtra="Exhibitors" />
      <Hero type="page" image={image} />
      <FairInfo copy={copy} />
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

    copy: mdx(frontmatter: { queryName: { eq: "fairInfoExhibitors" } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default ExhibitorsPage
