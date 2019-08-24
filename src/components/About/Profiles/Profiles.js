//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//Sass
import styles from "./Profiles.module.scss"
import Profile from "./Profile/Profile"

const Profiles = () => {
  const data = useStaticQuery(query)
  const bios = data.bios.edges

  return (
    <div className={styles.Profiles}>
      {bios.map(({ node }) => {
        return <Profile profile={node} key={node.id} />
      })}
    </div>
  )
}

const query = graphql`
  {
    bios: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "bio" } } }
      sort: { order: ASC, fields: [frontmatter___number] }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            passions
            word
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

export default Profiles
