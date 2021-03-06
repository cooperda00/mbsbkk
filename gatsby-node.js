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

      HZ: allContentfulHealingZonePractitioner {
        edges {
          node {
            slug
            name
          }
        }
      }

      workshops: allContentfulWorkshop {
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

  data.HZ.edges.forEach(({ node }) => {
    createPage({
      path: `/fair-info/healing-zone/${node.slug}`,
      component: path.resolve("./src/components/Templates/HZ/HZTemplate.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  data.workshops.edges.forEach(({ node }) => {
    createPage({
      path: `/fair-info/workshops-and-seminars/${node.slug}`,
      component: path.resolve(
        "./src/components/Templates/Workshop/WorkshopTemplate.js"
      ),
      context: {
        slug: node.slug,
      },
    })
  })
}
