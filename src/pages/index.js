//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Features from "../components/Features2/Features"
import SEO from "../components/SEO/SEO"
import Testimonials from "../components/Testimonials/Testimonials"
import BasicInfo from "../components/BasicInfo/BasicInfo"
import Carousel from "../components/Utility/Carousel/Carousel"
import Youtube from "../components/Utility/Youtube/Youtube"

const IndexPage = ({ data }) => {
  const features = data.features.edges
  const copy = data.copy.edges[0].node

  return (
    <Layout>
      <SEO titleExtra="Home" keywordsExtra="" descriptionExtra="Home" />

      <Carousel />

      <BasicInfo copy={copy} />

      <Features features={features} />

      <Youtube />

      <Testimonials />
    </Layout>
  )
}

export const query = graphql`
  {
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

    features: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "feature" } } }
      sort: { order: ASC, fields: [frontmatter___number] }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            number
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }

    copy: allContentfulHomePage {
      edges {
        node {
          mainText {
            json
          }
          eventDetails {
            json
          }
          eventDetailsExtra {
            json
          }
        }
      }
    }
  }
`

export default IndexPage
