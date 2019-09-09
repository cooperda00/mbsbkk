//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import Hero from "../../components/Utility/Hero/Hero"
import FairInfo from "../../components/FairInfo/FairInfo"

const WorkshopsAndSeminarsPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy

  return (
    <Layout>
      <SEO
        titleExtra="Workshops And Seminars"
        keywordsExtra=""
        descriptionExtra="Workshops And Seminars"
      />
      <Hero type="page" image={image} />
      <FairInfo copy={copy} />
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

    copy: mdx(
      frontmatter: { queryName: { eq: "fairInfoWorkshopsAndSeminars" } }
    ) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default WorkshopsAndSeminarsPage
