//Modules
import React from "react"
import Image from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
//Sass
import styles from "./Sidebar.module.scss"

const shortenTitle = title => {
  const length = title.length

  if (length > 50) {
    return title.substr(0, 50) + "..."
  } else {
    return title.substr(0, 50)
  }
}

const Sidebar = () => {
  const data = useStaticQuery(query)
  const posts = data.allPosts.edges
  const featuredPost = data.featuredPost.edges

  return (
    <aside className={styles.Sidebar}>
      <h2 className={styles.Title}>Featured Post</h2>

      <div className={styles.FeaturedPostContainer}>
        {featuredPost.map(({ node }) => {
          return (
            <Link
              to={`/blog/${node.slug}`}
              className={styles.MiniCard}
              key={node.title}
            >
              <div className={styles.ImageContainer}>
                <Image fluid={node.image.fluid} className={styles.Image} />
              </div>
              <div className={styles.Text}>
                <h1>{node.title}</h1>
                <p>{node.created}</p>
              </div>
            </Link>
          )
        })}
      </div>

      <h2 className={styles.Title}>Recent Posts</h2>

      <div className={styles.RecentPostsContainer}>
        {posts.map(({ node }, index) => {
          if (index <= 2) {
            return (
              <Link
                to={`/blog/${node.slug}`}
                className={styles.MiniCard}
                key={node.title}
              >
                <div className={styles.ImageContainer}>
                  <Image fluid={node.image.fluid} className={styles.Image} />
                </div>
                <div className={styles.Text}>
                  <h1>{shortenTitle(node.title)}</h1>
                  <p>{node.created}</p>
                </div>
              </Link>
            )
          } else {
            return undefined
          }
        })}
      </div>
    </aside>
  )
}

const query = graphql`
  {
    allPosts: allContentfulBlogPost(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          created(formatString: "DD MMM, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          subtitle
          title
          slug
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
          created(formatString: "DD MMM, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          subtitle
          title
          slug
          imageCaption
        }
      }
    }
  }
`

export default Sidebar
