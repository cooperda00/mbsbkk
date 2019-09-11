//Modules
import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
//Sass
import styles from "./PostCard.module.scss"
//Icons
import { FaLongArrowAltRight } from "react-icons/fa"

const PostCard = ({ post }) => {
  return (
    <div className={styles.PostCard}>
      <div className={styles.ImageContainer}>
        <Image fluid={post.image.fluid} className={styles.Image} />
      </div>

      <div className={styles.Text}>
        <h3 className={styles.Title}>{post.title}</h3>

        <p className={styles.Subtitle}>{post.subtitle}</p>

        <Link to={`/blog/${post.slug}`} className={styles.ReadMore}>
          Read More <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  )
}

export default PostCard
