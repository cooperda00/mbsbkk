//Modules
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import download from "downloadjs"
//Sass
import styles from "./PostTemplate.module.scss"
//Components
import Layout from "../../Layout/Layout"
import Sidebar from "../../Blog/Sidebar/Sidebar"
import AuthorBio from "../../Blog/AuthorBio/AuthorBio"
import AuthorBioLarge from "../../Blog/AuthorBioLarge/AuthorBioLarge"
import SEO from "../../SEO/SEO"
//Icons
import { FaFileDownload } from "react-icons/fa"

const PostTemplate = ({ data: { singleBlog }, location }) => {
  const richText = singleBlog.body.json
  const title = singleBlog.title
  const subtitle = singleBlog.subtitle
  const image = singleBlog.image.fluid
  const caption = singleBlog.imageCaption
  const author = singleBlog.author

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const url = node.data.target.fields.file["en-US"].url
        const alt = node.data.target.fields.title["en-US"]

        return (
          <div className={styles.EmbedImageContainer}>
            <img src={url} alt={alt} />
            <FaFileDownload
              onClick={() => {
                download(url)
              }}
            />
          </div>
        )
      },
    },
  }

  return (
    <Layout location={location}>
      <SEO titleExtra={title} keywordsExtra="" descriptionExtra={subtitle} />
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
            {documentToReactComponents(richText, options)}
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
