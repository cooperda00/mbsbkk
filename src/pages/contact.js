//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO/SEO"

const ContactPage = () => (
  <Layout>
    <SEO titleExtra="Contact" keywordsExtra="" descriptionExtra="" />
    <Contact />
  </Layout>
)

export default ContactPage
