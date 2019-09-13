//Modules
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./PostTemplate.module.scss"
//Components
import Layout from "../../Layout/Layout"
import Sidebar from "../../Blog/Sidebar/Sidebar"
import AuthorBio from "../../Blog/AuthorBio/AuthorBio"
import AuthorBioLarge from "../../Blog/AuthorBioLarge/AuthorBioLarge"

const PostTemplate = ({ data: { singleBlog } }) => {
  const richText = singleBlog.body.json
  const title = singleBlog.title
  const image = singleBlog.image.fluid
  const caption = singleBlog.imageCaption
  const author = singleBlog.author

  return (
    <Layout>
      <article className={styles.Post}>
        <section className={styles.PostContent}>
          <div className={styles.ImageContainer}>
            <Image fluid={image} className={styles.Image} alt={caption} />
          </div>

          <h1 className={styles.Title}>{title}</h1>

          <div className={styles.AuthorContainer}>
            <AuthorBio author={author} />
          </div>

          <div className={styles.RichText}>
            {documentToReactComponents(richText)}
          </div>

          <div className={styles.AuthorContainer}>
            <AuthorBioLarge author={author} />
          </div>
        </section>
        <Sidebar />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    singleBlog: contentfulBlogPost(slug: { eq: $slug }) {
      author {
        bio {
          bio
        }
        role
        name
        personalWebsite
        portrait {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      body {
        json
      }
      created
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      imageCaption
      subtitle
      title
    }
  }
`

export default PostTemplate
