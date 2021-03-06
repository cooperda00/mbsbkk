//Modules
import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
//Sass
import styles from "./InstagramWidgetSmall.module.scss"

const InstagramWidget = () => {
  // const data = useStaticQuery(query)
  // const insta = data.insta.edges
  // const user = data.instaUser

  // const username = user.username
  // const userImage = user.profile_pic_url

  return (
    <div className={styles.Container}>
      <div className={styles.UserInfo}>
        <a
          href={`https://instagram.com/mindbodyspiritfairbkk`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.LogoContainer}
          aria-label={`Go to the mindbodyspiritfairbkk Instagram page`}
        >
          {" "}
          {/* <img src={userImage} alt={username} /> */}
        </a>
        <a
          href={`https://instagram.com/mindbodyspiritfairbkk`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Go to the mindbodyspiritfairbkk Instagram page`}
        >
          {" "}
          <h1>@mindbodyspiritfairbkk</h1>{" "}
        </a>
      </div>

      {/* <div className={styles.FeedGrid}>
        {insta.map(({ node }) => {
          return (
            <a
              href={`https://instagram.com/p/${node.id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={node.id}
              className={styles.Tile}
              aria-label={node.caption}
            >
              <Image
                fluid={node.localFile.childImageSharp.fluid}
                className={styles.PostImage}
                alt={`Instagram post image`}
              />
            </a>
          )
        })}
      </div> */}
    </div>
  )
}

// const query = graphql`
//   {
//     insta: allInstaNode(sort: { fields: [timestamp], order: DESC }, limit: 9) {
//       edges {
//         node {
//           id
//           caption
//           localFile {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }

//     instaUser: instaUserNode {
//       username
//       biography
//       profile_pic_url
//     }
//   }
// `

export default InstagramWidget
