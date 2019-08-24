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

const IndexPage = ({ data }) => {
  const features = data.features.edges

  return (
    <Layout>
      <SEO titleExtra="Home" keywordsExtra="" descriptionExtra="" />

      <Carousel />

      <BasicInfo />

      <Features features={features} />

      <Testimonials />
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
  }
`

export default IndexPage
