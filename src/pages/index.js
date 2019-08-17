//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import CTAButton from "../components/Utility/CTAButton/CTAButton"
import InstagramWidget from "../components/Utility/InstagramWidget/InstagramWidget"

const IndexPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const insta = data.insta.edges
  const instaUser = data.instaUser

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

      <InstagramWidget insta={insta} user={instaUser} />
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

    insta: allInstaNode {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fixed(width: 275, height: 275) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }

    instaUser: instaUserNode {
      username
      biography
      profile_pic_url
    }
  }
`

export default IndexPage
