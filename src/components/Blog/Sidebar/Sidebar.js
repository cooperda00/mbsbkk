//Modules
import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
//Sass
import styles from "./Sidebar.module.scss"

const Sidebar = ({ posts, featuredPost }) => {
  return (
    <aside className={styles.Sidebar}>
      <h2 className={styles.Title}>Featured Post</h2>

      <div className={styles.FeaturedPostContainer}>
        {featuredPost.map(({ node }) => {
          console.log(node.image.fluid)
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
                  <h1>{node.title}</h1>
                  <p>{node.created}</p>
                </div>
              </Link>
            )
          }
        })}
      </div>
    </aside>
  )
}

export default Sidebar
