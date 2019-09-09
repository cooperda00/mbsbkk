//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Utility/Hero/Hero"
import GetInvolved from "../components/GetInvolved/GetInvolved"

const GetInvolvedPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const mdx = data.mdx.body

  return (
    <Layout>
      <SEO
        titleExtra="Get Involved"
        keywordsExtra="join us, sponsor, volunteer, vendor"
        descriptionExtra="Get Involved"
      />
      <Hero type="page" image={image} />
      <GetInvolved mdx={mdx} />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "get_involved_header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mdx: mdx(frontmatter: { title: { eq: "Get Involved" } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default GetInvolvedPage
