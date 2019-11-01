//Modules
import React from "react"
import { graphql } from "gatsby"
//Sass
import styles from "../../FairInfo/FairInfo.module.scss"
//Components
import SideMenu from "../../FairInfo/SideMenu/SideMenu"
import Layout from "../../Layout/Layout"
import SEO from "../../SEO/SEO"
import Hero from "../../Utility/Hero/Hero"
import SingleVendor from "../../VendorDirectory/SingleVendor/SingleVendor"

const VendorTemplate = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const name = data.singleVendor.name

  return (
    <Layout>
      <SEO titleExtra={name} keywordsExtra="" descriptionExtra="" />
      <Hero type="page" image={image}></Hero>
      <section className={styles.FairInfo}>
        <div className={styles.Container}>
          <SideMenu />

          <SingleVendor vendor={data.singleVendor} />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    singleVendor: contentfulVendor(slug: { eq: $slug }) {
      name
      event
      blurb {
        blurb
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      logo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      website
      facebook
      twitter
      instagram
    }

    bg: file(relativePath: { eq: "vendor_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default VendorTemplate
