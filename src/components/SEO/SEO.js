//Modules
import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ titleExtra, keywordsExtra, descriptionExtra }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)

  const { siteUrl, description, image } = siteMetadata

  return (
    <Helmet title={`${titleExtra} | Mind Body Spirit Fair`}>
      <meta
        name="keywords"
        content={`${keywordsExtra}, mind, body, spirit, bkk, bangkok, well-being, holistic, spirituality, yoga, meditation, Chiang Mai`}
      />

      <meta
        name="description"
        content={`${descriptionExtra} | ${description}`}
      />

      <meta name="image" content={`${siteUrl}${image}`} />

      {/* GOOGLE ICON */}
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content={`${titleExtra} | Mind Body Spirit Fair`}
      />

      <meta
        name="twitter:description"
        content={`${descriptionExtra} | ${description}`}
      />

      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/cooperda00/mbsbkk/master/src/images/twitter_new.jpg"
      />

      <meta name="twitter:creator" content="@mindbodyspiritfairbkk" />

      {/* FACEBOOK */}
      <meta
        property="og:url"
        content={siteUrl}
        prefix="og: http://ogp.me/ns#"
      />

      <meta
        property="og:type"
        content="website"
        prefix="og: http://ogp.me/ns#"
      />

      <meta
        property="og:title"
        content={`${titleExtra} | Mind Body Spirit`}
        prefix="og: http://ogp.me/ns#"
      />

      <meta
        property="og:description"
        content={`${descriptionExtra} | ${description}`}
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/cooperda00/mbsbkk/master/src/images/og_new.jpg"
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:image:width"
        content="1200"
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:image:height"
        content="630"
        prefix="og: http://ogp.me/ns#"
      />
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        description
        image
      }
    }
  }
`

export default SEO
