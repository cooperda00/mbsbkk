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

      vendors: allContentfulVendor {
        edges {
          node {
            slug
            name
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

  data.vendors.edges.forEach(({ node }) => {
    createPage({
      path: `/fair-info/exhibitors/${node.slug}`,
      component: path.resolve(
        "./src/components/Templates/Vendor/VendorTemplate.js"
      ),
      context: {
        slug: node.slug,
      },
    })
  })
}
