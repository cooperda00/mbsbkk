//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import Hero from "../../components/Utility/Hero/Hero"
import BannerText from "../../components/Utility/BannerText/BannerText"
import FairInfo from "../../components/FairInfo/FairInfo"

const WorkshopsAndSeminarsPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const copy = data.copy

  return (
    <Layout>
      <SEO
        titleExtra="Workshops And Seminars"
        keywordsExtra=""
        descriptionExtra=""
      />
      <Hero type="page" image={image}>
        <BannerText title="Workshops And Seminars" text="dark" />
      </Hero>
      <FairInfo copy={copy} />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "bg_test.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    copy: markdownRemark(
      frontmatter: { queryName: { eq: "fairInfoWorkshopsAndSeminars" } }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default WorkshopsAndSeminarsPage