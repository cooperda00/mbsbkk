module.exports = {
  siteMetadata: {
    title: `Mind Body Spirit Fair BKK`,
    description: `Holistic health, well-being and spiritual practitioners and vendors in one event, 
    celebrating all things mind, body and spirit!`,
    author: `danielcooper.io`,
    siteUrl: "http://www.mbsbkk.com",
    image: "/social_card.png",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
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

    //CONTENT SOURCING ***************************
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
