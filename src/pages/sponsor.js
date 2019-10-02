//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import SponsorForm from "../components/SponsorForm/SponsorForm"

const SponsorPage = () => {
  return (
    <Layout>
      <SEO
        titleExtra="Sponsor Us"
        keywordsExtra="sponsor"
        descriptionExtra="Become a Sponsor"
      />
      <SponsorForm />
    </Layout>
  )
}

export default SponsorPage
