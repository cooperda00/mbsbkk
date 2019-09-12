const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      posts: allContentfulBlogPost {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(
        "./src/components/Templates/Post/PostTemplate.js"
      ),
      context: {
        slug: node.slug,
      },
    })
  })
}
