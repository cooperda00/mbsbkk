//Modules
import React, { useState } from "react"
//Sass
import styles from "./AllPosts.module.scss"
//Components
import PostCard from "../PostCard/PostCard"
import Title from "../../Utility/Title/Title"
import Sidebar from "../Sidebar/Sidebar"

const AllPosts = ({ posts, featuredPost }) => {
  const [noOfPosts, setNoOfPosts] = useState(3)

  return (
    <section className={styles.AllPosts}>
      <div className={styles.AllPostsContainer}>
        <div className={styles.Posts}>
          <Title title="All Posts" />

          <div className={styles.PostsGrid}>
            {posts.map(({ node }, index) => {
              if (index <= noOfPosts - 1) {
                return <PostCard post={node} key={node.title} />
              }
            })}
          </div>

          <button
            className={styles.ReadMoreButton}
            onClick={() => {
              setNoOfPosts(noOfPosts + 3)
            }}
          >
            Read More
          </button>
        </div>

        <Sidebar />
      </div>
    </section>
  )
}

export default AllPosts
