//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import GetInvolved from "../components/GetInvolved/GetInvolved"

const GetInvolvedPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const mdx = data.mdx.body

  return (
    <Layout>
      <SEO titleExtra="Get Involved" keywordsExtra="" descriptionExtra="" />
      <Hero type="page" image={image}>
        <BannerText title="Get Involved" text="dark" />
      </Hero>
      <GetInvolved mdx={mdx} />
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

    mdx: mdx(frontmatter: { title: { eq: "Get Involved" } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default GetInvolvedPage
