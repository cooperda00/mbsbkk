//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import About from "../components/About/About"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"

const AboutPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  return (
    <Layout>
      <SEO titleExtra="About Us" keywordsExtra="" descriptionExtra="" />
      <Hero image={image} type="page">
        <BannerText title="About Us" text="dark" />
      </Hero>
      <About />
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
  }
`

export default AboutPage
