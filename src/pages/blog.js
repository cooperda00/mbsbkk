//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Utility/Hero/Hero"
import AllPosts from "../components/Blog/AllPosts/AllPosts"

const BlogPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const allPosts = data.allPosts.edges
  const featuredPost = data.featuredPost.edges

  return (
    <Layout>
      <SEO titleExtra="Blog" keywordsExtra="blog" descriptionExtra="Blog" />
      <Hero image={image} type="page" position="top" />
      <AllPosts posts={allPosts} featuredPost={featuredPost} />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "tarot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allPosts: allContentfulBlogPost(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          author {
            name
            portrait {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          childContentfulBlogPostBodyRichTextNode {
            body
          }
          created(formatString: "DD MMM, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          subtitle
          title
          slug
          featured
          imageCaption
        }
      }
    }

    featuredPost: allContentfulBlogPost(
      filter: { featured: { eq: true } }
      limit: 1
    ) {
      edges {
        node {
          author {
            name
            portrait {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          childContentfulBlogPostBodyRichTextNode {
            body
          }
          created(formatString: "DD MMM, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          subtitle
          title
          slug
          featured
          imageCaption
        }
      }
    }
  }
`

export default BlogPage
