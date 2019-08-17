//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import CTAButton from "../components/Utility/CTAButton/CTAButton"

const IndexPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  return (
    <Layout>
      <Hero type="home" image={image}>
        <BannerText
          title="Mind Body Spirit Fair BKK"
          info="Bangkok's first charity holistic wellbeing fair."
        >
          <h1>Our Next Event:</h1>
          <h2>Date and venue coming soon!</h2>
          <CTAButton path="/get-involved" text="Become a Vendor" />
        </BannerText>
      </Hero>
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

export default IndexPage
