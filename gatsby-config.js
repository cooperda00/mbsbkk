require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mind Body Spirit Fair BKK`,
    description: `Holistic health, well-being and spiritual practitioners and vendors in one event, 
    celebrating all things mind, body and spirit!`,
    author: `danielcooper.io`,
    siteUrl: "https://mbsbkk.com",
    image: "/og_image.png",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mind Body Spirit Fair BKK`,
        short_name: `MBS BKK`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#36723e`,
        display: `standalone`,
        icon: "src/images/logo_small_50.png",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://mbsbkk.us18.list-manage.com/subscribe/post?u=223da66dcdda49f2ca77a2a0d&amp;id=3a0fa5d563", // add your MC list endpoint here; see instructions below
      },
    },

    //CONTENT SOURCING ***************************

    //All Markdown Files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    //Main Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //Posts
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `mindbodyspiritfairbkk`,
      },
    },
    //Profile Data
    {
      resolve: `gatsby-source-instagram`,
      options: {
        type: `user-profile`,
        username: `mindbodyspiritfairbkk`,
      },
    },
    //Contentful
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    `gatsby-plugin-netlify`,
  ],
}
